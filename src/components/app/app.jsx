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

    onToggle = (arr , id, property) => {
        return arr.map((object) => object.id === id ? { ...object, [property]: !object[property] } : object)
    }
    
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build React App'),
            this.createTodoItem('Have a lunch')
        ]
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
                <ItemAddForm
                    onAdd={(label) => this.addItem(label)} />
            </div>
        )
    }
}