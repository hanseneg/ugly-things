import React from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        title: '',
        imageURL: [],
        description: ''
    }

    createList = (title, imageURL, description) => {
        this.setState({title, imageURL, description})
    }

    render() {
        return (
            <Provider value={'title'}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}