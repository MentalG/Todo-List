import React from 'react'

//components 
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'


const App = () => {
    return (
        <>
        <h1>App</h1>
        <AppHeader />
        <SearchPanel />
        <TodoList />
        </>
    )
}

export default App