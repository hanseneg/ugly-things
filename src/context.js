import React from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class ContextProvider extends React.Component {
    state = {
        title: '',
        imgUrl: '',
        description: '',
        thingsList: []
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    componentDidMount() {
        axios.get(`https://api.vschool.io/ethanhansen/thing`)
          .then(response => {
            console.log(`get request Array.isArray(response.data): ${Array.isArray(response.data)} | response.data.title: ${response.data.title} | response.data[0].title: ${response.data[0].title} `)
            const title = response.data.title
            const imgUrl = response.data.imgUrl
            const description = response.data.description
            this.setState({ title, imgUrl, description })
          })
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
        console.log(response);
        console.log(response.data);
        })
    }
    

    //create a list and render that to the dom and push new ugly things to that using axios.post
    //edit individual items using axios.put
    //delete items using axios.delete

    render() {
        return (
            <Provider 
                value={{title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                thingsList: this.thingsList
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}