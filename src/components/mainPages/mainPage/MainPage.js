import React from 'react';
import ContentContainer from "../../helpers/contentContainer/ContentContainer";

import Play from "../../../img/play.svg";
import Test from "../../../img/test.svg";
import Globe from "../../../img/globe.svg";
import Eye from "../../../img/eye.svg";
import NewsItem from "../../helpers/newsItem/NewsItem";
import ArticleItem from "../../helpers/articleItem/ArticleItem";
import {useStore} from "../../../utils/useStore";

const items = [
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-pic'
    }
];

const articleItems = [
    {
        index: 1,
        text: 'Text'
    },
    {
        index: 2,
        text: 'Text'
    },
    {
        index: 3,
        text: 'Text'
    },
    {
        index: 4,
        text: 'Text'
    },
    {
        index: 5,
        text: 'Text'
    },
    {
        index: 6,
        text: 'Text'
    },
]

const MainPage = () => {
    const rootStore = useStore();
    const {worldNews, healthNews} = rootStore.newsStore;
    const worldNewsSliced = worldNews.slice(0,6);
    const healthNewsSliced = healthNews.slice(0,6);

    return <div className='main-page-wrapper'>
        <ContentContainer icon={Play} title='Live'>
            <div className='live-block'>
                <iframe className='live-pic' width="560" height="315" src="https://www.youtube.com/embed/XWq5kBlakcQ?autoplay=1&mute=1"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <div className='description-block'>
                    <div className='title'>CNA 24x7 live stream</div>
                    <div className='description'>Watch CNA's 24-hour live coverage of the latest headlines and top stories from Singapore, Asia and around the world, as well as documentaries and features that bring you a deeper look at Singapore and Asian issues.</div>
                </div>
            </div>
        </ContentContainer>
        <ContentContainer icon={Globe} title='World news'>
            <div className='world-news-block'>
                {worldNewsSliced.map(item=><a className='news-item-link' href={item.url} target='_blank'><NewsItem
                    src={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    picClassName='world-news-pic' /></a>)}
            </div>
        </ContentContainer>
        <ContentContainer icon={Eye} title='Must read'>
            <div className='must-read-block'>
                {healthNewsSliced.map((articleItem,index)=><a className='article-item-link' href={articleItem.url} target='_blank'><ArticleItem index={index+1} text={articleItem.description} /></a>)}
            </div>
        </ContentContainer>
    </div>;
};

export default MainPage;