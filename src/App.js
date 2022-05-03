import React from 'react';
import './App.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from './store/provider/Provider';
import {useStore} from './utils/useStore';
import {observer} from 'mobx-react';

import Preloader from './components/helpers/preloader/Preloader';
import NoMatch from "./components/mainPages/noMatch/NoMatch";
import MainPage from "./components/mainPages/mainPage/MainPage";
import Header from "./components/helpers/header/Header";
import Footer from "./components/helpers/footer/Footer";
import SportPage from "./components/mainPages/sportPage/SportPage";
import CulturePage from "./components/mainPages/culturePage/CulturePage";
import Weather from "./components/mainPages/weather/Weather";
import SciencePage from "./components/mainPages/sciencePage/SciencePage";

const ROUTES = [
    {path: '/', element: <MainPage/>},
    { path: '/sport', element: <SportPage /> },
    { path: '/culture', element: <CulturePage /> },
    { path: '/science', element: <SciencePage /> },
    { path: '/weather', element: <Weather /> },
    {path: '*', element: <NoMatch/>},
];

const App = observer(() => {
    const {isError, isLoading} = useStore();

    return (
        <Provider>
            <BrowserRouter>
                {isLoading && <Preloader/>}
                {isError && <div className="error">APP ERROR</div>}
                {!isError && !isLoading && (
                    <div className="main-wrapper">
                        <Header/>
                        <Routes>
                            {ROUTES.map((route, index) => (
                                <Route key={index} {...route} />
                            ))}
                        </Routes>
                        <Footer/>
                    </div>
                )}
            </BrowserRouter>
        </Provider>
    );
});

export default App;
