'use client'
import React, { useState } from 'react';
import SportsCard from './SportsCard';
import data from '../data/data';
import AdCard from './AdCard';

function Sports() {
    const [visibleItems, setVisibleItems] = useState(4);

    const loadMoreContent = () => {
        setVisibleItems(prev => prev + 5);
    }

    const seeLessContent = () => {
        setVisibleItems(4);
    }

    return (
        <div className='container mx-auto space-y-10 w-full p-6 lg:p-0 md:p-0'>
            {/* header */}
            <div className="w-16 space-y-1">
                <h2 className="text-xl text-black dark:text-white font-bold">Sports</h2>
                <div className="bg-[#738FFF] w-auto h-1"></div>
            </div>
            {/* sports section */}
            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-10">
                {/* Display only the number of visible items */}
                {data[0].sport.slice(0, visibleItems).map((item) => (
                    <SportsCard
                        key={item.id}
                        backgroundImageUrl={item.backgroundUrl}
                        title={item.title}
                        sport={item.sport}
                        totalEvents={item.totalEvents}
                    />
                ))}
                {data[0].ads.map((item) => (
                    <AdCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        adUrl={item.adUrl}
                        backgroundImageUrl={item.imgUrl}
                    />
                ))}
            </div>
            {/* Load more or See less buttons */}
            {/* Display the appropriate button based on the number of visible items */}
            {visibleItems < data[0].sport.length ? (
                <div className="flex justify-center items-center mt-4">
                    <button onClick={loadMoreContent} className="bg-[#2C9CF0] text-white w-[124px] h-[46px] rounded-[3px] py-4 px-6 flex items-center justify-center">See More</button>
                </div>
            ) : (
                <div className="flex justify-center items-center mt-4">
                    <button onClick={seeLessContent} className="bg-[#2C9CF0] text-white w-[124px] h-[46px] rounded-[3px] py-4 px-6 flex items-center justify-center">See Less</button>
                </div>
            )}
        </div>
    )
}

export default Sports;
