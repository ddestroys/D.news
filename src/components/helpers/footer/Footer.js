import React from "react";
import {LinkList} from "../header/LinkList";

import Telegram from "../../../img/telegram.svg";
import Instagram from "../../../img/instagram.svg";
import Twitter from "../../../img/twitter.svg";
import Facebook from "../../../img/facebook.svg";

const links = [
    {
        link: 'https://t.me/ddestroys',
        icon: Telegram,
    },
    {
        link: 'https://www.instagram.com/ddestroys',
        icon: Instagram,
    },
    {
        link: 'https://twitter.com/',
        icon: Twitter,
    },
    {
        link: 'https://www.facebook.com/',
        icon: Facebook,
    },
]

const Footer = () => {
    return <div className='footer-wrapper'>
        <div className='footer'>
            <div className='nav'>
                <LinkList/>
            </div>
            <div className='find-us'>
                <div className='title'>
                    Find us here
                </div>
                <div className='links'>
                    {links.map(link=><a className='link-icon' href={link.link} target='_blank'><img src={link.icon}/></a>)}
                </div>
            </div>
            <div className='copyright'>
                © 2022 D.News
            </div>
        </div>
    </div>
};

export default Footer