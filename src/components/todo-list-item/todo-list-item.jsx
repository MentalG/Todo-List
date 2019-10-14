import React, { Component } from 'react'

//css
import './todo-list-item.css'

export default class TodoListItem extends Component {
    render () {
        const {label, important = false} = this.props

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
    
        return (
            <div className='list-item'>
                <span onClick={() => console.log(this)} style={style}>{label}</span>
                <div className='action-buttons'>
                    <i className="icon fa fa-trash"></i>
                    <i className="icon fa fa-btc"></i>
                </div>
            </div>
        )
    }
}