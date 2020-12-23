import React from 'react'
import {ContextConsumer} from './context'

class List extends React.Component {
    render() {
        return(
            <ContextConsumer>
                {({thingsList}) =>(
                    <div>
                        {thingsList}
                    </div>
                )}
            </ContextConsumer>
        )
    }
}

export default List