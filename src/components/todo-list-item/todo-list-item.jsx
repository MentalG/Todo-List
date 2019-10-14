import React from 'react'

//css
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? '#3047cf' : 'black'
    }

    return (
        <div className ='list-item'>
            <span style={style}>{label}</span>
            <div className='action-buttons'>
                <i className="icon fa fa-trash"></i>
                <i className="icon fa fa-btc"></i>
            </div>
        </div>
    )
}

export default TodoListItem