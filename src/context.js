import React from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        title: '',
        imageURLs: [],
        description: ''
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                title: '',
                imageURLs: [],
                description: ''
            }
        })
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