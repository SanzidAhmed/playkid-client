import React, { useState } from 'react';

const Category = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabActive = (tabClick) => {
        setActiveTab(tabClick)
    }
    return (
        <div className='container mx-auto '>
            <div className="tabs tabs-boxed md:flex items-center justify-center bg-white ">
                <a onClick={() => handleTabActive("Tab1")} className={`tab ${activeTab == "Tab1"? "text-white bg-yellow-400" : "tab"}`}>Tab 1</a>
                <a onClick={() => handleTabActive("Tab2")} className={`tab ${activeTab == "Tab2"? "text-white bg-yellow-400" : "tab"}`}>Tab 2</a>
                <a onClick={() => handleTabActive("Tab3")} className={`tab ${activeTab == "Tab3"? "text-white bg-yellow-400" : "tab"}`}>Tab 3</a>
            </div>
        </div>
    );
};

export default Category;