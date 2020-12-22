import React from 'react'
import {ContextConsumer} from './context'

class List extends React.Component {
    render() {
        return(
            <ContextConsumer>
                {() =>(
                    <div>
                        
                    </div>
                )}
            </ContextConsumer>
        )
    }
}

export default List