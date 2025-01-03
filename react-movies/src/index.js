import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
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
import ProtectedRoutes from "./protectedRoutes";
import AuthContextProvider from "./contexts/authContext";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";

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
        <AuthContextProvider>
          <MoviesContextProvider>
            <SiteHeader />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={ <SignUpPage /> } />
              <Route element={<ProtectedRoutes />}>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/movies/:id/full-cast" element={<FullCastPage />} />
                <Route path="/movies/watchlist" element={<WatchListPage />} />
                <Route path="/person/:id" element={<CreditDetailsPage />} />
                <Route path="/movies/:id/recommendations" element={<RecommendationsPage />} />
                <Route path="/movies/popular" element={<PopularMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingPage />} />
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              </Route>
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);