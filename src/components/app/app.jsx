import React, { Component } from 'react'

//components 
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import TodoList from '../todo-list/todo-list'
import ItemAddButton from '../item-add-button/item-add-button'

//css
import './app.css'

export default class App extends Component {

    maxId = 0;

    createTodoItem = (label = 'Added') => {
        return { label, important: false, done: false, id: this.maxId++ }
    }

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch')
        ]
    }


    addItem = () => {
        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData].concat(this.createTodoItem())
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
                todoData: todoData.map((object) => object.id === id ? { ...object, important: !object.important } : object)
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.map((object) => object.id === id ? { ...object, done: !object.done } : object)
            }
        })
    }

    render () {
        const { todoData } = this.state
        const doneCount = todoData.filter((element) => element.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className='app'>
                <AppHeader
                    todo={todoCount}
                    done={doneCount} />
                <div className='search-bar'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todoData={todoData}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleImportant={(id) => this.onToggleImportant(id)}
                    onToggleDone={(id) => this.onToggleDone(id)}
                />
                <ItemAddButton
                    onAdd={() => this.addItem()} />
            </div>
        )
    }
}