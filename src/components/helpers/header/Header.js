import React, {useState} from "react";
import {LinkList} from "./LinkList";

import ProfilePic from "../../../img/profile_pic.svg";
import SearchIcon from "../../../img/search_icon.svg";
import SignIn from "../../modals/signIn/SignIn";
import {useStore} from "../../../utils/useStore";
import {observer} from "mobx-react";
import {logout} from "../../../firebase";

const Header = observer(() => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [mouseOver, setMouseOver] = useState(false)

    const rootStore = useStore();
    const {user} = rootStore.userStore;

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
                {!user ? <div className='sing-in-button' onClick={openModal}>
                    <img src={ProfilePic} className='profile-pic'/>
                    <span className='sing-in-text'>Sing In</span>
                </div> : <div className='log-out' onClick={logout} onMouseEnter={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)}>
                    {mouseOver && <div className=''>Log out</div>}
                    {!mouseOver &&<span className='sing-in-text'>{user.name}</span>}
                </div>}
                <div className='search-row'>
                    <img src={SearchIcon} className='search-icon'/>
                    <span className='search-row-text'>Search</span>
                </div>
            </div>
            <LinkList/>
        </div>
    </div>
})

export default Header;