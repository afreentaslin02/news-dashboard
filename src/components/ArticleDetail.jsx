import React from "react";
import { useLocation } from "react-router-dom";

const ArticalDetails = () => {
    const location = useLocation()
    const { article } = location.state || {};



    if (!artical) {
        return <p className="artical-detail-container"> No artical setected</p>;

    }

    return (
        <div className="artical-detail-container">
            <h2>{artical.title}</h2>
            <img
                src={artical.urlToImage || ' https://via.placeholder.com/800x400'}
                alt="Artical"
                className="artical-image" />

            <p><strong>Author:</strong> {artical.author || 'unknown'}</p>
            <p><strong>Source</strong> {article.source?.name}</p>
            <p><strong>Published</strong> {new Date(article.published).toLocaleString()}</p>
            <p>{artical.description}</p>
            <a href="{article.url}" target="_blank" rel="noopener noreferrer" className="read-more-btn"> Read Full Article</a>

        </div>
    );
};

export default ArticalDetails;
