import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getArticleData } from "../actions/articles";
import SocialIconsContainer from "../components/common/SocialIconsContainer";


const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};

const LatestArticleList = ({ article }) => {
  return (
    <a href={`/#/articles/${article._id}`} style={{ textDecoration: "none" }}>
      <li className="latest-blog-list d-flex align-items-center">
        <img src={article.image} alt="Article Image" className="me-2" />
        <p className="latest-blog-title">{article.title}</p>
      </li>
    </a>
  );
};

const ArticleDetail = ({
  dispatch,
  article,
  articles,
  latestArticlesIndex,
  loading,
}) => {
  useEffect(() => {
    dispatch(getArticleData());
  }, []);
  

  const {postId}=useParams()
  const host = "https://helpinghands-backend.onrender.com"
  const [rows, setRows] = useState(null)
  var rand=0
  useEffect(() => {
    console.log("article id",postId)
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getspecificpost/${postId}`, {
        method: 'GET'
      });

      const json = await response.json();
      console.log("article specific",json)
      setRows(json)
    }
    getBlogProfile();

  }, [])

  const host2 = "https://helpinghands-backend.onrender.com"
  const [rows2, setRows2] = useState([])
  var rand=0
  useEffect(() => {
    const getBlogProfile2 = async () => {
      const response2 = await fetch(`${host2}/api/auth/getpost`, {
        method: 'GET'
      });

      const json2 = await response2.json();
      var temp=[]
      if(json2.length)
      temp.push(json2[0])
      if(json2.length>1)
      temp.push(json2[1])
      if(json2.length>2)
      temp.push(json2[2])
      setRows2(temp)

    }
    getBlogProfile2();

  }, [])

  


  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="donate">
        {rows&&<div className="container my-5">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="card-container mb-5">
                <div className="img-container position-relative">
                  <img
                    src={rows.image}
                    alt=""
                    className="all-round-borders"
                  />
                </div>
              </div>
              <div className="donate-info my-4">
                <h3 className="mb-3">{rows.title}</h3>
                <p className="mid-grey">{rows.desc}</p>
                <p className="mid-grey">{rows.desc}</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="info-card-container d-flex align-items-center justify-content-center mb-3 px-2 pt-4 pb-2">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <h4 className="mb-4">Latest Articles</h4>
                  <ul className="info-card-content">
                    {rows2?.map((index) => (
                      <LatestArticleList article={index} />
                    ))}
                  </ul>
                </div>
              </div>
              <SocialIconsContainer page="Articles" />
            </div>
          </div>
        </div>}
      </section>
    );
  }
};
const mapStateToProps = ({ articles, loading }, props) => {
  const { article_id } = props.router.params;
  const articleIndex = Object.keys(articles).filter(
    (articleIndex) => articles[articleIndex].id == article_id
  );
  return {
    latestArticlesIndex: Object.keys(articles)
      .splice(3),
    article: articles[articleIndex],
    loading,
    articles,
  };
};
export default withRouter(connect(mapStateToProps)(ArticleDetail));
