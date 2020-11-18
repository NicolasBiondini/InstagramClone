import React from 'react';
import './style/navbar.css'

// Material UI:
import HomeIcon from '@material-ui/icons/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

// React Router
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

//pages
import {Home} from './pages/home';
import {Profile} from './pages/profile';
import {Search} from './pages/search'
//Navbar code

export const NavBar = () => {
    return(
        <Router>
                <Switch>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/search'>
                        <Search />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>

                <ul className='navbar'>
                    <li className='navbaritem'>
                        <Link to='/'><HomeIcon /></Link>
                    </li>
                    <li className='navbaritem'>
                        <Link to='/search'><SearchOutlinedIcon /></Link>
                    </li>
                    <li className='navbaritem'>
                        <Link to='/reels'><LiveTvOutlinedIcon /></Link>
                    </li>
                    <li className='navbaritem'>
                        <Link to='/store'><LocalMallOutlinedIcon /></Link>
                    </li>
                    <li className='navbaritem'>
                        <Link to='/profile'><AccountCircleOutlinedIcon /></Link>
                    </li>
                </ul>
        </Router>
    )
};

