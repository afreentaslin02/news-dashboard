import React, { useEffect, useState } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import ArticleCard from '../components/ArticleCard';


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Business');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory.toLowerCase()}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
                );
                const data = await response.json();
                if (data.articles.length === 0) {
                    setError('No articles found.');
                }
                setArticles(data.articles);
            } catch (err) {
                setError('Failed to fetch articles.');
            }
            setLoading(false);
        };

        fetchArticles();
    }, [selectedCategory]);

    return (
        <div>
            <CategoryTabs selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            {loading && <p>Loading articles...</p>}
            {error && <p>{error}</p>}
            <div className="article-grid">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
};

export default Home;
