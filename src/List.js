import React from 'react'
import {ContextConsumer} from './context'

class List extends React.Component {
    render() {
        return(
            <ContextConsumer>
                {() =>(
                    <div>
                        display list of ugly things
                    </div>
                )}
            </ContextConsumer>
        )
    }
}

export default List