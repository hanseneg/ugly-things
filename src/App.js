import React from "react"

import Inputs from "./Inputs"
import {ContextConsumer} from "./context"

class App extends React.Component {
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