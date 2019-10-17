import React, { Component } from 'react'

//css
import './todo-list-item.css'

export default class TodoListItem extends Component {
    render () {
        const { label, onTrashClicked, onToggleImportant, onToggleDone, done, important } = this.props
        let className = 'item';

        if (done) {
            className = className.concat(' done')
        }
        if (important) {
            className = className.concat(' important')
        }

        return (
            <div className='list-item'>
                <span className={className} onClick={() => onToggleDone()}>{label}</span>
                <div className='action-buttons'>
                    <i className="icon fa fa-trash" onClick={() => onTrashClicked()}></i>
                    <i className="icon fa fa-btc" onClick={() => onToggleImportant()}></i>
                </div>
            </div>
        )
    }
}