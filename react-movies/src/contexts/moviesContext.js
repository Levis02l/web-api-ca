import React, { useState } from "react";
import { signInWithPopup,signOut, auth, provider } from "../firebase";
import {  addFavourite, removeFavourite } from '../api/tmdb-api';

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {

  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState([])
  const [user, setUser] = useState(null);

  const addToFavorites = async (movie) => {
    try {
      await addFavourite(movie.id);
      setFavorites(prevFavourites => [...prevFavourites, movie.id]);
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };
  
  const removeFromFavorites = async (movie) => {
    try {
      await removeFavourite(movie.id);
      setFavorites(prevFavourites => prevFavourites.filter(id => id !== movie.id));
    } catch (error) {
      console.error("Error removing from favourites:", error);
    }
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  // console.log(myReviews);

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)) {
      newMustWatch = [...mustWatch, movie.id];
    } else {
      newMustWatch = [...mustWatch];
    }
      setMustWatch(newMustWatch);
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };
 
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch,
        user,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToMustWatch,
        removeFromMustWatch,
        login,
        logout
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;