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
        text: 'Commemorating NMWA Founder Wilhelmina Cole Holladay',
        link: 'https://nmwa.org/whats-on/exhibitions/online/commemorating-wilhelmina-cole-holladay/',
        img: 'https://nmwa.org/wp-content/uploads/2021/03/WCH-GettyImages-485571177_CROP-2-768x641.jpg'
    },
    {
        index: 2,
        text: 'Mary Ellen Mark: Girlhood',
        link: 'https://nmwa.org/whats-on/exhibitions/online/mary-ellen-mark-girlhood/',
        img: 'https://nmwa.org/wp-content/uploads/2021/03/2020.85-768x525.jpg'
    }
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

const CulturePage = () => {
    const [isMoving, setIsMoving] = useState(false);
    const rootStore = useStore();
    const {cultureNews} = rootStore.newsStore;
    const latestNews = cultureNews[0];
    const worldNews = cultureNews.slice(1,7);

    return <div className='culture-page-wrapper'>
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
        <ContentContainer icon={Eye} title='Must see'>
            <div className='interesting-about-culture-block'>
                {articleItems.map(articleItem=><a className='article-item-link' href={articleItem.link} target='_blank'><div className='article-item-wrapper'>
                    <ArticleItem index={articleItem.index} text={articleItem.text} url={articleItem.img}/>
                </div></a>)}
            </div>
        </ContentContainer>
    </div>
};

export default CulturePage