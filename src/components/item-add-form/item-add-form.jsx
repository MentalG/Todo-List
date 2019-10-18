import React, { Component } from 'react'

//css 
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== '') {
            this.props.onAdd(this.state.label)
            this.setState({
                label: ''
            })
        } 
    }

    render () {
        return (
            <form
                className='item-add-form d-flex'
                onSubmit={(e) => this.onSubmit(e)}
            >
                <input
                    type="text"
                    className='add-input form-control'
                    onChange={(e) => this.onLabelChange(e)}
                    placeholder='What needs to be done'
                    value={this.state.label}
                />
                <button
                    className="btn btn-info btn-add"
                >
                    Add
            </button>
            </form>
        )
    }
}
