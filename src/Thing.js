import React from 'react'

function Thing(props) {
    return(
        <div>
            <header>{props.title}</header>
            <img src={props.imgUrl}/>
            <p>{props.description}</p>
            <button onClick={() => props.deleteButton(props.id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Thing


