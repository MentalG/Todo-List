import React, { Component } from 'react'

//components 
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import TodoList from '../todo-list/todo-list'
import ItemAddForm from '../item-add-form/item-add-form'

//css
import './app.css'

export default class App extends Component {

    maxId = 0;

    createTodoItem = (label = 'Added') => {
        return { label, important: false, done: false, id: this.maxId++ }
    }

    onToggle = (arr, id, property) => {
        return arr.map((object) => object.id === id ? { ...object, [property]: !object[property] } : object)
    }

    search = (array, string) => {
        if (string.length === 0) {
            return array
        }

        return array.filter(item => item.label.toLowerCase().indexOf(string.toLowerCase()) !== -1)
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all': 
                return items;
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default :
                return items
        }
    }

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filter: 'all'
    }


    addItem = (label) => {
        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData].concat(this.createTodoItem(label))
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter(element => element.id !== id)
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggle(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggle(todoData, id, 'done')
            }
        })
    }

    onSearchEnter = (value) => {
        this.setState(({ term }) => {
            return {
                term: value
            }
        })
    }

    clickHandle = (value) => {
        this.setState(({ filter }) => {
            return {
                filter : value
            }
        })
    }

    render () {
        const { todoData, term, filter } = this.state
        const doneCount = todoData.filter((element) => element.done).length
        const todoCount = todoData.length - doneCount
        const visibleItems = this.filter(this.search(todoData, term), filter)
        console.log(filter);
        

        return (
            <div className='app'>
                <AppHeader
                    todo={todoCount}
                    done={doneCount} />
                <div className='search-bar'>
                    <SearchPanel
                        onSearchEnter={(value) => this.onSearchEnter(value)}
                    />
                    <ItemStatusFilter 
                    clickHandle={(value) => this.clickHandle(value)}
                    filter={filter} />
                </div>
                <TodoList
                    todoData={visibleItems}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={(id) => this.onToggleImportant(id)}
                    onToggleDone={(id) => this.onToggleDone(id)}
                />
                <ItemAddForm
                    onAdd={(label) => this.addItem(label)} />
            </div>
        )
    }
}