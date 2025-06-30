import React from "react";


const categories = ['Business', 'Technology', 'Sports', 'health', 'Entertainment'];

const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <div className="category-tabs">
            {categories.map((category) => (
                <button key={category} className={`tab-button ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                    {category}

                </button>

            ))}

        </div>
    );
};
export default CategoryTabs;