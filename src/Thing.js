import React from 'react'

function Thing({title, imgUrl, description, deleteButton, id}) {
    return(
        <div>
            <header>{title}</header>
            <img src={imgUrl} alt=''/>
            <p>{description}</p>
            <button onClick={() => deleteButton(id)}>Delete</button>
        </div>
    )
}

export default Thing


