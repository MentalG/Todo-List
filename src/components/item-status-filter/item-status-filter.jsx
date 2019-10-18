import React, { Component } from 'react'

//css 
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    render () {
        const { clickHandle, filter } = this.props

        const buttons = this.buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? 'btn btn-info' : 'btn btn-outline-secondary'

            return (
                <button
                    onClick={(e) => clickHandle(e.target.textContent.toLowerCase())}
                    type='button'
                    className={clazz}
                    key={name}>
                    {label}
                </button>
            )
        })

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}
