import React, { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [songs,setSongs] =useState([])

  useEffect(() => {
    getAllSongs();
  }, []);
    
    async function getAllSongs(){ 
      const response = await axios.get("http://127.0.0.1:8000/api/music/");
      console.log(response.data);
      setSongs(response.data)
  }

  return (
    <div >
      <button onClick ={() => getAllSongs()} > Get All Song </button>
    </div>
  );
}

export default App;
