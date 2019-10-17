import React from 'react'

//css 
import './item-add-button.css'

const ItemAddButton = ({onAdd}) => {

    return(
        <button type="button" className="btn btn-info btn-add" onClick={() => onAdd()}>Add</button>
    )

}

export default ItemAddButton