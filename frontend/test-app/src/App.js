import React, { useEffect, useState } from "react";
import axios from 'axios'

import MusicTable from './components/MusicTable/MusicTable';
import AddSong from './components/AddSong/AddSong';
import NavBar from './components/SearchBar/SearchBar.jsx';

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

  return (
    <div className='page-container'>
      <NavBar className = 'navbar'/>
      <div><MusicTable displaySongs = {songs}/></div> 
      <div className='content-wrap'><AddSong addNewSong={addSong}/></div>
      
    </div>
  );
}

export default App;
