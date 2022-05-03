import React from "react";

export const ContentContainer = ({children, icon, title}) => {
    return <div className='content-container'>
        <div className='content-header'>
            <img src={icon} className='icon'/>
            <span className='title'>{title}</span>
        </div>
        <div className='content'>
            {children}
        </div>
    </div>
};

export default ContentContainer;