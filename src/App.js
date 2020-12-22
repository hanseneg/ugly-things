import React from "react"

import Inputs from "./Inputs"
import {ContextConsumer} from "./context"

class App extends React.Component {
    state = {
        newTitle: '',
        newImageURLs: '',
        newDescription: ''
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <ContextConsumer>
                {() => (
                    <Inputs />
                )}
            </ContextConsumer>
        ) 
    }
}

export default App