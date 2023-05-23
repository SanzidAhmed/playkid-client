import React, { useEffect, useState } from 'react';
import CategoryOfProducts from './CategoryOfProducts/CategoryOfProducts';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("movement toys");
    console.log(activeTab);
    const handleTabActive = (tabClick) => {
        setActiveTab(tabClick)
    }
    useEffect(() =>{
        fetch(`https://playkid-server.vercel.app/alltoys/${activeTab}`)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[activeTab])
    return (
        <div className='container mx-auto '>
            <div className="tabs tabs-boxed md:flex items-center justify-center bg-slate-200 ">
                <a onClick={() => handleTabActive("movement toys")} className={`tab ${activeTab == "movement toys"? "text-white bg-yellow-400" : "movement toys"}`}>movement toys</a>
                <a onClick={() => handleTabActive("Small world toys")} className={`tab ${activeTab == "Small world toys"? "text-white bg-yellow-400" : "Small world toys"}`}>Small world toys</a>
                <a onClick={() => handleTabActive("Creative toys")} className={`tab ${activeTab == "Creative toys"? "text-white bg-yellow-400" : "Creative toys"}`}>Creative toys</a>
            </div>
            <div className='grid md:grid-cols-3 my-10 min-h-min gap-10 w-full'>
                {
                    categories.map(category => <CategoryOfProducts
                    key={category._id}
                    category= {category}
                    ></CategoryOfProducts>)
                }
            </div>
        </div>
    );
};

export default Category;