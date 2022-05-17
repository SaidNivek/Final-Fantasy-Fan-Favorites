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
        heroes: '',
        villains: ''
    })

    // handle change, to update the key: value pairs in the newForm variable
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    // handle submit, when the form is submitted, to push the new form into the MongoDB cloud database
    const handleSubmit = (event) => {
        event.preventDefault();
        const heroesArray = newForm.heroes.split(', ')
        const villainsArray = newForm.villains.split(', ')
        props.createGame({
            name: newForm.name,
            number: newForm.number,
            logo: newForm.logo,
            summary: newForm.summary,
            likes: 0,
            release_system: newForm.release_system,
            release_date: newForm.release_date,
            heroes: heroesArray,
            villains: villainsArray
        });
        setNewForm({
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
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label" for="name">Game Name</label>
                    <input
                        type='text'
                        value={newForm.name}
                        name='name'
                        placeholder='game name'
                        onChange={handleChange}
                        className="form-control" 
                    />                    
                </div>
                <div className="form-group">
                    <label className="label" for="name">Game Number</label>
                    <input
                        type='number'
                        value={newForm.number}
                        name='number'
                        placeholder='game number (ex. 1 or 15)'
                        onChange={handleChange}
                        className="form-control"  
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Game Logo</label>
                    <input
                        type='text'
                        value={newForm.logo}
                        name='logo'
                        placeholder='game logo (url)'
                        onChange={handleChange}
                        className="form-control" 
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Game Summary</label>
                    <input
                        type='text'
                        value={newForm.summary}
                        name='summary'
                        placeholder='game summary'
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Original Release System</label>
                    <input
                        type='text'
                        value={newForm.release_system}
                        name='release_system'
                        placeholder="game's original release system"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Original Release Date</label>
                    <input
                        type='text'
                        value={newForm.release_date}
                        name='release_date'
                        placeholder="game's original release date"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Game's Heroes</label>
                    <input
                        type='text'
                        value={newForm.heroes}
                        name='heroes'
                        placeholder="game's heroes"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="label" for="name">Game's Villains</label>
                    <input
                        type='text'
                        value={newForm.villains}
                        name='villains'
                        placeholder="game's villains"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <input className="btn btn-info" type="submit" value="Add Game" />
            </form>
                <Link to='/' ><button className="btn btn-warning">Return to Main Page</button></Link>
            </div>
    );
}

export default CreateGame
