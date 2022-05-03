import React from "react";

const NewsItem = ({title, src, description, picClassName = ''}) => {
    return <div className='news-item-wrapper'>
        <div className='news-item'>
            <div className='title'>
                {title}
            </div>
            <img src={src} className={`pic ${picClassName}`}/>
            <div className='description'>
                {description}
            </div>
        </div>
    </div>
};

export default NewsItem;