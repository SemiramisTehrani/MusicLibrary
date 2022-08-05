import React, { useState } from 'react';
import "./AddSong.css";
// import { nanoid } from "nanoid";



const AddSong = (props) => {
    // id: nanoid()
    // const [songId, setId] = nanoid(); 
    const [songTitle, setTitle] = useState(''); 
    const [songArtist, setArtist] = useState(''); 
    const [songAlbum, setAlbum] = useState(''); 
    const [releaseDate, setReleaseDate] = useState(''); 
    const [songGenre, setGenre] = useState(''); 
    const [songLikeStatus, setLikeStatus] = useState(''); 




    function handleSubmit(event){
        event.preventDefault(); 
        let newSong = {
            // "id": songId,
            "title": songTitle,
            "artist": songArtist,
            "album": songAlbum,
            "release_date": releaseDate,
            "genre": songGenre,
            "like_status" : songLikeStatus
        }
        
        props.addNewSong(newSong);
        // setId("");
        setTitle(""); 
        setArtist(""); 
        setAlbum(""); 
        setReleaseDate("");  
        setGenre("");
        setLikeStatus("");

    }


    return (  

    <div>
        <h2 className='addSong-title'>Add Song</h2>
        <div className='create-container'>
            <form onSubmit = {handleSubmit}>
                <div className='form-contain'>
                    <div>
                        <label className='form-label' htmlFor = 'Title'>Title:</label>
                        <input type = 'text' name = 'Title' placeholder = 'Song Title' value={songTitle} onChange={(event) => setTitle(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Artist'>Artist:</label>
                        <input type = 'text' name = 'Artist' placeholder = 'Artist Name' value = {songArtist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Album'>Album:</label>
                        <input type = 'text' name = 'Album' placeholder = 'Album title' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Release'>Release Date:</label>
                        <input type = 'date' name = 'Release' placeholder = 'Release Date' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Genre'>Genre:</label>
                        <input type = 'text' name = 'Genre' placeholder = 'Genre' value = {songGenre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Like'>Like Status:</label>
                        <input type = 'number' name = 'Like' placeholder = 'like Status' value = {songLikeStatus} onChange={(event) => setLikeStatus(event.target.value)}/>
                    </div>
                </div> 
                <div className='button-contain'> 
                    <div>
                        <button type = 'submit' className='add-button'>Add Song</button> 
                    </div>
                </div>  
            </form>
        </div>
    </div>
    );
}

export default AddSong;