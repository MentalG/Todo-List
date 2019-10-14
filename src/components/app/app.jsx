import React from 'react'

//components 
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import TodoList from '../todo-list/todo-list'

//css
import './app.css'


const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ]

    return (
        <div className='app'>
            <AppHeader todo={3} done={1} />
            <div className='search-bar'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    )
}

export default App