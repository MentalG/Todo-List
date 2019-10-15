import React, { Component } from 'react'

//components 
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import TodoList from '../todo-list/todo-list'

//css
import './app.css'

export default class App extends Component {

    render() {
        const todoData = [
            { label: 'Drink Coffee', id: 1 },
            { label: 'Build App', id: 2 },
            { label: 'Have a lunch', id: 3 },
        ]
    
        return (
            <div className='app'>
                <AppHeader todo={3} done={1} />
                <div className='search-bar'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={todoData} onDeleted={(id) => console.log()} />
            </div>
        )
    }
}