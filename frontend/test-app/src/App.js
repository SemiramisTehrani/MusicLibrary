import React, { useEffect, useState } from "react";
import axios from 'axios'

import MusicTable from './components/MusicTable/MusicTable';
import AddSong from './components/AddSong/AddSong';
import NavBar from './components/SearchBar/SearchBar.jsx';
// bonus part : update , delete song
import UpdateSong from './components/UpdateSong/UpdateSong';
import DeleteSong from './components/DeleteSong/DeleteSong'



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
    // bonus part : delete song (Delete in postman)
    async function deletesong(){ 
      let response = await axios.delete("http://127.0.0.1:8000/api/music/");
    // console.log(response.data);
      setSongs(response.data)
  }

    // bonus part : update song (put im postman)
    async function updatesong(){ 
      let response = await axios.put("http://127.0.0.1:8000/api/music/");
      // console.log(response.data);
      setSongs(response.data)
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
