import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PhotoGallery from './Components/PhotoGallery';
import SearchBar from './Components/SearchBar';
import PaginationButtons from './Components/PaginationButtons';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PhotoGallery />
      <PaginationButtons />
    </div>
  );
}

export default App;
