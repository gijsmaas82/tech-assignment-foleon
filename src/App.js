import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PhotoGallery from './Components/PhotoGallery';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <PhotoGallery />     
    </div>
  );
}

export default App;
