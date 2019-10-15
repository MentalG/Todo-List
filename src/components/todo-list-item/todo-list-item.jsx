import React, { Component } from 'react'

//css
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLableClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }

    onBtcClicked = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render () {
        const { label, onTrashClicked } = this.props
        const { done, important } = this.state
        let className = 'item';

        if (done) {
            className = className.concat(' done')
        }
        if (important) {
            className = className.concat(' important')
        }

        return (
            <div className='list-item'>
                <span className={className} onClick={() => this.onLableClick()}>{label}</span>
                <div className='action-buttons'>
                    <i className="icon fa fa-trash" onClick={() => onTrashClicked()}></i>
                    <i className="icon fa fa-btc" onClick={() => this.onBtcClicked()}></i>
                </div>
            </div>
        )
    }
}