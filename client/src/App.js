import React, { useState } from 'react';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import {Route, NavLink} from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const saved = savedList.find(el => el.title === movie.title)
    if (!saved) {
      setSavedList( [...savedList, movie] );
    } 
  };

  return (
    <div>
      <NavLink to='/savedList'><SavedList list={savedList} /></NavLink>
      <Route exact path = "/" component = {MovieList}/>
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} savedList={savedList} />}/>
    </div>
  );
};

export default App;
