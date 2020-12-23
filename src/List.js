import React from 'react'
import {ContextConsumer} from './context'
import Thing from './Thing'

class List extends React.Component {
    render() {
        return(
            <ContextConsumer>
                {({thingsList, deleteButton}) =>(
                    <div>
                        {thingsList.map((thing) => <Thing imgUrl={thing.imgUrl} title={thing.title} description={thing.description} key={thing._id} deleteButton={deleteButton} id={thing._id}/>)}
                    </div>
                )}
            </ContextConsumer>
        )
    }
}

export default List