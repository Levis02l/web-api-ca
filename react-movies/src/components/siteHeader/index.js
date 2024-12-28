import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext"; // 引入 AuthContext

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const { isAuthenticated, signout, userName } = useContext(AuthContext);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Watchlist", path: "/movies/watchlist" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    signout();
    navigate("/");
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {menuOptions.map((opt) => (
            <Button
              key={opt.label}
              color="inherit"
              onClick={() => handleMenuSelect(opt.path)}
            >
              {opt.label}
            </Button>
          ))}
          {isAuthenticated && (
            <>
              <Typography
                variant="body1"
                sx={{
                  marginLeft: "auto",
                  marginRight: 2,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Welcome, {userName}!
              </Typography>
              <Button
                color="inherit"
                onClick={handleSignOut}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Sign Out
              </Button>
            </>
          )}
        </Toolbar>

      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
