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

export const getRecommendations = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;

  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}/recommendations`, {
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
    console.error("Error fetching recommendations:", error.message);
    throw error;
  }
};

export const getMovieCredits = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;

  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}/credits`, {
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
    console.error("Error fetching movie credits:", error.message);
    throw error;
  }
};


export const getCreditDetails = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;

  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/person/${id}`, {
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
    console.error("Error fetching credit details:", error.message);
    throw error;
  }
};

export const getCreditMovies = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;

  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/person/${id}/movie_credits`, {
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
    console.error("Error fetching credit movies:", error.message);
    throw error;
  }
};

export const getMovieVideos = async (args) => {
  const [, idPart] = args.queryKey; 
  const { id } = idPart;

  try {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movie/${id}/videos`, {
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
    console.error("Error fetching movie videos:", error.message);
    throw error;
  }
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





