import React from 'react'
import axios from 'axios'
const { Provider, Consumer } = React.createContext()

class ContextProvider extends React.Component {
    state = {
        title: '',
        imgUrl: '',
        description: '',
        thingsList: []
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.getThings()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }

        axios.post(`https://api.vschool.io/ethanhansen/thing`, user)
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.getThings()
            })
    }

    getThings = () => {
        axios.get(`https://api.vschool.io/ethanhansen/thing`)
            .then(response => {
                console.log(response.data) 
                this.setState({ thingsList: response.data })
                console.log(this.state.thingsList)
            })
    }

    deleteButton = (id) => {
        axios.delete(`https://api.vschool.io/ethanhansen/thing/${id}`)
            .then(() => {
                this.getThings()
        })
    }
    
    //edit individual items using axios.put
    
    render() {
        return ( <Provider value = {
                {
                    ...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    deleteButton: this.deleteButton
                }
            } > { this.props.children } </Provider>
        )
    }
}

export { ContextProvider, Consumer as ContextConsumer }