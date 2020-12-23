import React from 'react'
import {ContextConsumer} from './context'

class Inputs extends React.Component {
    render() {
        return(
            <ContextConsumer>
                {({title, imgUrl, description, handleChange, handleSubmit}) => (
                    <form>
                        <input
                            placeholder='Title'
                            type='text'
                            name='title'
                            value={title}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Image URL'
                            type='text'
                            name='imgUrl'
                            value={imgUrl}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Description'
                            type='text'
                            name='description'
                            value={description}
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>Submit Ugly Thing</button>
                    </form>
                )}
            </ContextConsumer>
        )
    }
}

export default Inputs