import React, { useState } from 'react';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path = "/" component = {MovieList}/>
      <Route/>
    </div>
  );
};

export default App;
