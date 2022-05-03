import React from "react";
import {LinkList} from "./LinkList";

import ProfilePic from "../../../img/profile_pic.svg";
import SearchIcon from "../../../img/search_icon.svg";
import SignIn from "../../modals/signIn/SignIn";

const Header = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return <div className='header-wrapper'>
        <div className='logo'>D.NEWS</div>
        <div className='nav-side'>
            <SignIn closeModal={closeModal} modalIsOpen={modalIsOpen}/>
            <div className='user-side'>
                <div className='sing-in-button' onClick={openModal}>
                    <img src={ProfilePic} className='profile-pic'/>
                    <span className='sing-in-text'>Sing In</span>
                </div>
                <div className='search-row'>
                    <img src={SearchIcon} className='search-icon'/>
                    <span className='search-row-text'>Search</span>
                </div>
            </div>
            <LinkList/>
        </div>
    </div>
}

export default Header;