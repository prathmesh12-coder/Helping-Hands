import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ post }) => {
  return (
    <div className="col-md-12 col-lg-4 mb-5">
      <div className="card-container">
        <div className="img-container position-relative">
          <img src={post.image} alt={post.title} style={{"height":"20rem" ,"width":"100%"}} />
          {/* <div className="category-date-container px-4 py-2 position-absolute rounded-pill top-left">
            <p>26 OCT</p>
          </div> */}
        </div>
        <div className="content-container p-4">
          <h4>{post.title}</h4>
          <p>{post.desc.slice(0, 70)}...</p>
          <hr />
          <Link
            to={`/articles/${post._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="read-more d-flex align-items-center justify-content-between">
              <p>read more</p>

              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ArticleSection = ({ articles, loading, totalcards }) => {

  const host = "https://helpinghands-backend.onrender.com"
  const [rows, setRows] = useState(null)
  var rand=0
  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getpost`, {
        method: 'GET'
      });

      const json = await response.json();
      setRows(json)
    }
    getBlogProfile();

  }, [])
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="articles">
        <div className="container">
          <div className="row text-center py-4">
          <h2 style={{marginTop:"5rem"}}>Recent Articles</h2>
          </div>
          <div className="row overflow-hidden">
            {rows&&Object.keys(rows).map((index) => {
              if (index < totalcards) {
                return <ArticleCard post={rows[index]} />;
              }
            })}
          </div>
        </div>
      </section>
    );
  }
};
export default ArticleSection;
