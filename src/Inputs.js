import React from 'react'
import {ContextConsumer} from './context'

class Inputs extends React.Component {
    render() {
        return(
            <ContextConsumer>
                {() => (
                    <form>
                    <input
                        placeholder='Title'
                    ></input>
                    <input
                        placeholder='Image URL'
                    ></input>
                    <input
                        placeholder='Description'
                    ></input>
                </form>
                )}
            </ContextConsumer>
        )
    }
}

export default Inputs