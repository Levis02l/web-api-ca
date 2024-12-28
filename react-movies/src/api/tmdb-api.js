export const getMovies = async (page = 1) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/discover?page=${page}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Response Error:", error);
    throw new Error(error);
  }

  return await response.json();
};

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Response Error:", error);
    throw new Error(error);
  }

  return await response.json();
};

export const getGenres = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/genres`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'), 
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Response Error:", error);
      throw new Error(error);
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
};

export const getMovieImages = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}/images`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'), 
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Response Error:", error);
      throw new Error(error);
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart; 

  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'), 
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Response Error:", error);
      throw new Error(error);
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error fetching movie reviews:", error.message);
    throw error;
  }
};

export const getUpComingMovies = async (page = 1) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/upcoming?page=${page}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'), 
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Response Error:", error);
      throw new Error(error);
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error fetching upcoming movies:", error.message);
    throw error;
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/popular?page=${page}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token'), 
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Response Error:", error);
      throw new Error(error);
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    throw error;
  }
};

export const getRecommendations = (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieCredits = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getCreditDetails = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getCreditMovies = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieVideos = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};



export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};





