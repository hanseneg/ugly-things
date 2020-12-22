import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        title: '',
        imageUrl: [],
        description: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    componentDidMount() {
        axios.get(`https://api.vschool.io/ethanhansen/thing`)
          .then(response => {
            const title = response.data.title
            const imageUrl = response.data.imageUrl
            const description = response.data.description
            this.setState({ title, imageUrl, description })
          })
      }

    createList = (title, imageUrl, description) => {
        this.setState({title, imageUrl, description})
    }

    //create a memelist and render that to the dom and push new ugly things to that using axios.post
    //edit individual items using axios.put
    //delete items using axios.delete

    render() {
        return (
            <Provider value={'title'}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}