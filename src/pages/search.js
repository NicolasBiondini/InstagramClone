import React from 'react';

import '../style/search.css';

import imageProfile from '../resources/profile.jpeg'

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

export const Search = () =>{
    return (
        <div className='searchContainer'>
            <div className='navBarSearch'>
                <input className='searchFirst' type='text' placeholder='Search' />
                <SearchOutlinedIcon />
            </div>
            <div className='photos'>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>
                <a href='#' className='photo'>
                    <img src={imageProfile} width='123.67px' height='123.67px'/>
                </a>

            </div>
        </div>
    );
};