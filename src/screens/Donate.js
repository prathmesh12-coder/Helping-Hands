import React, {useEffect} from 'react';
import {getDonationData} from '../actions/donations';
import {connect} from "react-redux";
import DonationSection from "../components/home/DonationSection";

const Donate = ({dispatch, donations, loading,Header,Footer}) => {

    useEffect(() => {
        dispatch(getDonationData());
    }, []);
    return (
        <>
        {Header}
            <DonationSection donations={donations} loading={loading} totalcards={12}/>
            {Footer}
        </>
    )
}

const mapStateToProps = ({donations, loading}) => ({ donations, loading });
export default connect(mapStateToProps)(Donate);
