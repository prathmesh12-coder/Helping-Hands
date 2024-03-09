import React, {useEffect} from 'react';
import {getArticleData} from "../actions/articles";
import {connect} from "react-redux";
import ArticleSection from "../components/home/ArticleSection";

const Articles = ({dispatch, articles, loading,Header,Footer}) => {

    useEffect(() => {
        dispatch(getArticleData());
    }, []);
    return (
        <>
        {Header}
            <ArticleSection articles={articles} loading={loading} totalcards={12}/>
            {Footer}
        </>
    )
}

const mapStateToProps = ({articles, loading}) => ({ articles, loading });
export default connect(mapStateToProps)(Articles);
