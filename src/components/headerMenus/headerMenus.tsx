import * as React from "react";
import "./headerMenus.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.svg";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../hooks/user/useCurrentUser";
import { Avatar } from "@mui/material";

const pages = [
  { text: "ABOUT", href: "#" },
  { text: "AGENDA", href: "#" },
  { text: "SPEAKERS", href: "#" },
  { text: "SPONSORS", href: "#" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function HeaderMenus() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useCurrentUser();

  return (
    <AppBar
      position="static"
      component="nav"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ paddingTop: "2%" }}
          className="nav_toolbar"
        >
          <Box component="div" className="nav_logo_div">
            <Box
              component="img"
              src={logo}
              alt="Hero_Logo"
              className="Nav_logo"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Button color="inherit" key={page.text} href={page.href}>
                      {page.text}
                    </Button>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.text}
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: 16,
                  my: 2,
                  color: "white",
                  display: "block",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                {page.text}
              </Button>
            ))}

            {user.isSuccess ? (
              <>
                <Avatar
                  alt={user.data?.fullName}
                  src={user.data?.profileImgUrl}
                  component={Button}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    my: 1,
                    border: "1px solid white",
                    height: "100%",
                  }}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem component={Link} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  className="btn_reg"
                  variant="outlined"
                  component={Link}
                  to="/register"
                  endIcon={<ArrowForward />}
                  sx={{
                    fontSize: 16,
                    my: 2,
                    color: "white",
                    paddingTop: 0,
                    marginLeft: 2,
                    marginRight: 2,
                  }}
                >
                  REGISTER NOW
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderMenus;
