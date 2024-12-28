import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { MoviesContext } from "../contexts/moviesContext";
import { getFavourites } from "../api/tmdb-api";

const LoginPage = props => {
    const context = useContext(AuthContext);
    const { setFavorites } = useContext(MoviesContext);

    const [errorMessage, setErrorMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await context.authenticate(userName, password);
            setErrorMessage(""); 
        } catch (error) {
            setErrorMessage(error.message); 
        
        }
    };

    let location = useLocation();
    if (context.isAuthenticated) {
        (async () => {
            try {
                const result = await getFavourites();
                setFavorites(result.data.map(fav => fav.movieId));
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        })();
    }

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/homepage" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }


    return (
        <>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* 错误消息 */}
            <input
                id="username"
                placeholder="user name"
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={login}>Log in</button>
            <p>
                Not Registered? <Link to="/signup">Sign Up!</Link>
            </p>
        </>
    );
    
};

export default LoginPage;
