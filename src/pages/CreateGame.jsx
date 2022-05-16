import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'

const CreateGame = (props) => {
    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: '',
        number: '',
        logo: '',
        summary: '',
        likes: 0,
        release_system: '',
        release_date: '',
        heroes: [],
        villains: []
    })

    // handle change, to update the key: value pairs in the newForm variable
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    // handle submit, when the form is submitted, to push the new form into the MongoDB cloud database
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createGame(newForm);
        setNewForm({
            name: '',
            number: null,
            logo: '',
            summary: '',
            likes: 0,
            release_system: '',
            release_date: '',
            heroes: [],
            villains: []
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={newForm.name}
                    name='name'
                    placeholder='game name'
                    onChange={handleChange}
                />
                <input
                    type='number'
                    value={newForm.number}
                    name='number'
                    placeholder='game number (ex. 1 or 15)'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.logo}
                    name='logo'
                    placeholder='game logo (url)'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.summary}
                    name='summary'
                    placeholder='game summary'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.release_system}
                    name='release_system'
                    placeholder="game's original release system"
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.release_date}
                    name='release_date'
                    placeholder="game's original release date"
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.heroes}
                    name='heroes'
                    placeholder="game's protagonists"
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.villains}
                    name='villains'
                    placeholder="game's villains"
                    onChange={handleChange}
                />
                <input type="submit" value="Add Game" />
            </form>

            <Link to='/'><button>Return to Main Page</button></Link>
        </div>
    );
}

export default CreateGame
