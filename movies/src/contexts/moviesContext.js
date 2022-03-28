import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites, playlist, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToPlaylist = (movie) => {
    let newPLaylist = [];
    if (!playlist.includes(movie.id)){
         newPLaylist = [...playlist, movie.id];
    }
    setPlaylist(newPLaylist)
  };


  return (
    <MoviesContext.Provider
      value={{
        favorites,
        playlist,
        addToPlaylist,
        addToFavorites,
        removeFromFavorites
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;