import React from 'react';

import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article', { state: { article } });
    };

    return (
        <div className="article-card" onClick={handleClick}>
            <img src={article.urlToImage || 'https://via.placeholder.com/300x180'} alt="thumbnail" />
            <div className="article-content">
                <h3>{article.title}</h3>
                <p className="source">{article.source.name}</p>
            </div>
        </div>
    );
};

export default ArticleCard;


