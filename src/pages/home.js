import React from 'react';

//import component
import {Post} from '../components/post'

//material UI icons
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

//instagram logo
import logo from '../resources/logo.png'

//css import
import '../style/homepage.css'

export const Home = () =>{
    return  (
        <div className='main'>
            <nav className='mainNav'>
                <img className='logoPng' src={logo} width='95px' max-height='100%' />
                <ul className='elements'>
                    <li>
                        <a href='#'><AddBoxOutlinedIcon /></a>
                    </li>
                    <li>
                        <a href='#'><FavoriteBorderOutlinedIcon /></a>
                    </li>
                    <li>
                        <a href='#'><SendOutlinedIcon /></a>
                    </li>
                </ul>
            </nav>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};