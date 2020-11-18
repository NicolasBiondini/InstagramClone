import React from 'react'

import img from '../resources/profile.jpeg';
import paisaje from '../resources/paisaje.jpg';

//Material UI icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';

//css
import '../style/post.css'

export const Post = () => {
    return(
        <article>
            <div className='miniNavProfile'>
                <a href='#' className='profilePost'>
                    <img className='profileImg' src={img} width='30px'/>
                    <h4 className='profileName'>nicolasbiondini</h4>
                </a>
                <a className='dots' href='#'><MoreVertOutlinedIcon fontSize='small'/></a>
            </div>
            <img className='photo' src={paisaje} width='375px' height='375px' />
            <div className='navBottom'>
                <ul className='iconsIter'>
                    <li>
                        <a href='#'><FavoriteBorderOutlinedIcon /></a>
                    </li>
                    <li>
                        <a href='#'><ModeCommentOutlinedIcon /></a>
                    </li>
                    <li>
                        <a href='#'><SendOutlinedIcon /></a>
                    </li>
                </ul>
                <a className='itemLast' href='#'>
                    <TurnedInNotOutlinedIcon />
                </a>
            </div>
            <div className='infoPost'>
                <a href='#'><h5>104 Likes</h5></a>
                <div className='postText'>
                    <a href='#'><h6>nicolasbiondini</h6></a>
                    <p>A nice picture! #InstaLive #Travel</p>
                </div>
                <a href='#'><p className='seeComments'>See the 2 comments</p></a>
            </div>
        </article>
    );
};