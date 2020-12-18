import React from 'react'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        theme: 'dark'
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === 'light' ? 'dark' : 'light'
            }
        })
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}



export {ContextProvider, Consumer as ContextConsumer}