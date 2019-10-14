import React from 'react'

//components 
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'


const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ]

    return (
        <>
            <h1>App</h1>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </>
    )
}

export default App