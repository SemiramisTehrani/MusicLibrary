import React, { useEffect, useState } from "react";
import axios from 'axios'

import MusicTable from './components/MusicTable/MusicTable';
import AddSong from './components/AddSong/AddSong';
import NavBar from './components/SearchBar/SearchBar.jsx';
//import image from './components/images/picture.png';

// bonus part : update , delete song
// import UpdateSong from './components/UpdateSong/UpdateSong';
// import DeleteSong from './components/DeleteSong/DeleteSong'
// import Model from "react-bootstrap/Model";
// import Button from "react-bootstrap/Button";


function App() {
  const [songs,setSongs] =useState([])

  useEffect(() => {
    getAllSongs();
  }, []);
    
    async function getAllSongs(){ 
      let response = await axios.get("http://127.0.0.1:8000/api/music/");
      // console.log(response.data);
      setSongs(response.data)
  }
    async function addSong(newSong){
      const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
      if(response.status === 201){
      await getAllSongs();
    }
  }
    // bonus part : delete song (Delete in postman) ---> commented out the function because it is not fully working
  //   async function makeDeleteRequest(){ 
  //     try {
  //       let response = await axios.delete('http://127.0.0.1:8000/api/music/${songIdproperty}');
  //       alert("Song deleted")
  //       props.getAllSongs()
  //       }
  //     catch (ex){
  //       alert("Error. Song not deleted. Please try again.");
  //     }
  // }

    // bonus part : update song (PUT in postman) ---> no function to support this
  //   async function makeUpdateRequest(){ 
  //     let response = await axios.put('http://127.0.0.1:8000/api/music/${songIdproperty}');
  //     alert("Song updated")
  //     props.getAllSongs()
  // }

  return (
    <div className='page-container'>
      <NavBar className = 'navbar'/>
      <div><MusicTable displaySongs = {songs}/></div> 
      <div className='content-wrap'><AddSong addNewSong={addSong}/></div>
      
    </div>
  );
}

export default App;
