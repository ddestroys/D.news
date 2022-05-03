import React from "react";

const ArticleItem = ({index, text, url}) => {
    return <div className='article-item'>
        <div className='index'>{index}</div>
        <div className='text'>
            {text}
            {url && <div style={{backgroundImage: `url(${url})`}} className='article-item-img'/>}
        </div>
    </div>
};

export default ArticleItem