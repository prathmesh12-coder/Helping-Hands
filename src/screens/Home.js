import React, {useEffect} from 'react';
import Header from '../components/layout/Header';
import AOS from 'aos';
import { Line, Circle } from 'rc-progress';
import {connect} from "react-redux";
import {getDonationData} from '../actions/donations';
import {getEventData} from "../actions/events";
import {getArticleData} from "../actions/articles";
import DonationSection from "../components/home/DonationSection";
import SupportSection from "../components/home/SupportSection";
import EventSection from "../components/home/EventSection";
import SponsorSection from "../components/home/SponsorSection";
import ArticleSection from "../components/home/ArticleSection";
const Home = ({donations, events, articles, loading, dispatch,Header,Footer,Map}) => {
    useEffect(() => {
        AOS.init({});
        dispatch(getDonationData());
        dispatch(getEventData());
        dispatch(getArticleData());
    }, []);

    return (
            <>
                {Header} 
                <DonationSection donations={donations} loading={loading} totalcards={3}/>
            <SupportSection />
            <EventSection events={events} loading={loading} totalcards={3}/>
            <SponsorSection />
            <ArticleSection articles={articles} loading={loading} totalcards={3}/>
           {Map}
           {Footer}
        </>
    )
}

const mapStateToProps = ({donations, events, articles, loading}) => ({ donations, events, articles, loading });
export default connect(mapStateToProps)(Home);