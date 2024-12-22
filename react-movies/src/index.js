import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingPage from "./pages/UpcomingPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import RecommendationsPage from "./pages/recommendationsPage";
import CreditDetailsPage from "./pages/creditDetailPage";
import WatchListPage from "./pages/watchListPage";
import FullCastPage from "./pages/fullCastPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
       <MoviesContextProvider>
          <SiteHeader />
          <Routes>
            <Route path="/movies/:id/full-cast" element={<FullCastPage/>} />
            <Route path="/movies/watchlist" element={<WatchListPage/>} />
            <Route path="/person/:id" element={<CreditDetailsPage/>}/>
            <Route path="/movies/:id/recommendations" element={<RecommendationsPage/>} />
            <Route path="/movies/popular" element={<PopularMoviesPage/>} /> 
            <Route path="/movies/upcoming" element={<UpcomingPage/>} />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);