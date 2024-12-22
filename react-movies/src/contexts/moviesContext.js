import React, { useState } from "react";
import { signInWithPopup,signOut, auth, provider } from "../firebase";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState([])
  const [user, setUser] = useState(null);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
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