import fetch from 'node-fetch';

export const getMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const getGenres = async () => {
  try {
      const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
      );

      if (!response.ok) {
          throw new Error(response.json().message);
      }

      return await response.json();
  } catch (error) {
      throw error;
  }
};

export const getMovieImages = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching movie images:", error.message);
    throw error;
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching movie reviews:", error.message);
    throw error;
  }
};

export const getUpComingMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching upcoming movies:", error.message);
    throw error;
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    throw error;
  }
};

export const getRecommendations = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching recommendations:", error.message);
    throw error;
  }
};

export const getMovieCredits = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&page=1`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching movie credits:", error.message);
    throw error;
  }
};

export const getCreditDetails = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching credit details:", error.message);
    throw error;
  }
};

export const getCreditMovies = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.TMDB_KEY}&language=en-US`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching credit movies:", error.message);
    throw error;
  }
};

export const getMovieVideos = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${process.env.TMDB_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.status_message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching movie videos:", error.message);
    throw error;
  }
};





