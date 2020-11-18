import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import imageProfile from '../resources/profile.jpeg'
import GridOnRoundedIcon from '@material-ui/icons/GridOnRounded';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';

//import css
import '../style/profile.css'

export const Profile = () => {
    return(
        <div className='profileContainer'>
            <div className='profilenav'>
                <h2 className='name'>nicolasbiondini</h2>
                <div className='iconsnav'>
                    <a href='#' className='iconsnavitem'><AddIcon /></a>
                    <a href='#' className='iconsnavitem'><MenuRoundedIcon /></a>
                </div>
            </div>
            <div className='profile'>
                <div className='profilefirst'>
                    <img src={imageProfile} className='profileImage' width='75px'/>
                    <div className='stats'>
                        <a href='#'>
                            <div className='individualStats'>
                                <h5>18</h5>
                                <p>Published</p>
                        </div>
                        </a>
                        <a href='#'>
                            <div className='individualStats'>
                                <h5>670</h5>
                                <p>Followers</p>
                        </div>
                        </a>
                        <a href='#'>
                            <div className='individualStats'>
                                <h5>606</h5>
                                <p>Following</p>
                        </div>
                        </a>
                    </div>
                </div>
                <div className='info'>
                    <h6>Nicolas Biondini</h6>
                    <p className='text'>
                        Bahía Blanca.
                        21 años.
                    </p>
                </div>
            </div>
            <div className='select'>
                    <a href='#' className='selector'>
                        <GridOnRoundedIcon />
                    </a>
                    <a href='#' className='selector'>
                        <AssignmentIndOutlinedIcon />
                    </a>
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
            </div>
        </div>
    )
};