
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Model from "react-bootstrap/Model";
import Button from "react-bootstrap/Button";


const DeleteSong = (props) => {

    const [show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    const handleCloseSave = (event) => {
        setShow(false)
        makeDeleteRequest(event)
    }
}

// bonus part : delete song (Delete in postman)
async function makeDeleteRequest(){ 
    try {
    let response = await axios.delete('http://127.0.0.1:8000/api/music/${songIdproperty}');
    alert("Song deleted")
    props.getAllSongs()
    }
    catch (ex){
      alert("Error. Song not deleted. Please try again.");
  }
}

return(
    <>
    <Button className="model-button" variant ="primary" onClick={handleShow}>
        Delete
    </Button>
    <Model show = {show} onHide = {handleClose}>
        <Model.header closeButton>
            <Model.Title> Delete Song? </Model.Title>
        </Model.header>
        <Model.Body>
            This action cannot be undon.
        </Model.Body>
        <Model.Footer>
            <Button variant = "secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant = "primary" onClick={handleCloseSave}>
                Delete Song
            </Button>
        </Model.Footer>
        </Model>
    </>
);


