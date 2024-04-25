import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        alert('Error fetching data');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Gallery</h1>
        <button onClick={fetchDogImage}>Fetch a Dog!</button>
        {dogImage && <img src={dogImage} alt="A Random Dog" />}
      </header>
    </div>
  );
}

export default App;
