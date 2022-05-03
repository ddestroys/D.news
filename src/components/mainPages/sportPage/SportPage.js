import React, {useState} from "react";
import Play from "../../../img/play.svg";
import Test from "../../../img/test.svg";
import ContentContainer from "../../helpers/contentContainer/ContentContainer";
import Globe from "../../../img/globe.svg";
import Eye from "../../../img/eye.svg";
import LeftArrow from "../../../img/left-arrow.svg"
import RightArrow from "../../../img/right-arrow.svg"
import ArticleItem from "../../helpers/articleItem/ArticleItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsItem from "../../helpers/newsItem/NewsItem";
import {useStore} from "../../../utils/useStore";

const articleItems = [
    {
        index: 1,
        text: 'What Is the Importance of Sports in Our Lives?',
        link: 'https://www.afcurgentcarehixsontn.com/what-is-the-importance-of-sports-in-our-lives/'
    },
    {
        index: 2,
        text: 'The Most Popular Sports In The World',
        link: 'https://www.worldatlas.com/articles/what-are-the-most-popular-sports-in-the-world.html'
    },
    {
        index: 3,
        text: 'Sports Facts',
        link: 'https://facts.net/sports-facts/'
    },
    {
        index: 4,
        text: 'Why Yoga Can Be So Irritating (Although You Should Go Anyway!)',
        link: 'https://www.theawl.com/2011/08/why-yoga-can-be-so-irritating-although-you-should-go-anyway/'
    },
    {
        index: 5,
        text: 'Thinking of Going Plant-Based? Read This First.',
        link: 'https://www.bodybuilding.com/content/plant-based-diet.html'
    },
    {
        index: 6,
        text: 'Sleep, Athletic Performance, and Recovery',
        link: 'https://www.sleepfoundation.org/physical-activity/athletic-performance-and-sleep'
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const items = [
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-carousel-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-carousel-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-carousel-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-carousel-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-carousel-pic'
    },
    {
        src: Test,
        title: 'Title',
        description: 'Description',
        picClassName: 'world-news-carousel-pic'
    }
];

const SportPage = () => {
    const [isMoving, setIsMoving] = useState(false);
    const rootStore = useStore();
    const {sportNews} = rootStore.newsStore;
    const latestNews = sportNews[0];
    const worldNews = sportNews.slice(1,7);
    return <div className='sport-page-wrapper'>
        <ContentContainer icon={Play} title='Latest news'>
            <a href={latestNews.url} target='_blank'>
                <div className='latest-news-block'>
                <img src={latestNews.urlToImage} className='latest-news-pic' />
                <div className='description-block'>
                    <div className='title'>{latestNews.title}</div>
                    <div className='description'>{latestNews.description}</div>
                </div>
            </div>
            </a>
        </ContentContainer>
        <ContentContainer icon={Globe} title='World news'>
            <div className='world-news-carousel-block'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    autoPlay
                    autoPlaySpeed={5000}
                    responsive={responsive}
                    ssr
                    infinite
                    beforeChange={() => setIsMoving(true)}
                    afterChange={() => setIsMoving(false)}
                    containerClass="first-carousel-container container"
                    deviceType='desktop'
                    customLeftArrow={<img className='react-multiple-carousel__arrow react-multiple-carousel__arrow--left' src={LeftArrow} />}
                    customRightArrow={<img className='react-multiple-carousel__arrow react-multiple-carousel__arrow--right' src={RightArrow} />}
                >
                    {worldNews.map(worldNewsItem=><a href={worldNewsItem.url} target='_blank'><NewsItem
                        src={worldNewsItem.urlToImage}
                        title={worldNewsItem.title}
                        description={worldNewsItem.description}
                        picClassName='world-news-carousel-pic' /></a>)}
                </Carousel>
            </div>
        </ContentContainer>
        <ContentContainer icon={Eye} title='Interesting about sport'>
            <div className='interesting-about-sport-block'>
                {articleItems.map(articleItem=><a className='article-item-link' href={articleItem.link} target='_blank'><ArticleItem index={articleItem.index} text={articleItem.text} /></a>)}
            </div>
        </ContentContainer>
    </div>
};

export default SportPage