'use client'
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SpotCard from './SpotCard';
import data from '../data/data';

interface SpotlightProps {
  rowId: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ rowId }) => {

  const scrollLeft = () => {
    let scroll = document.getElementById("slider" + rowId);
    if (scroll) {
      scroll.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    let scroll = document.getElementById("slider" + rowId);
    if (scroll) {
      scroll.scrollLeft += 300;
    }
  };

  return (
    <div className="justify-center container mx-auto flex flex-col items-center w-full h-auto p-10 bg-gradient-to-b from-[#18282A] to-[#221A2C]">
      {/* header */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-black dark:text-white">Collection Spotlight</h2>
        <p className="text-center text-black dark:text-white max-w-[75rem] text-sm md:text-md lg:text-lg">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      </div>
      {/* main content spotlight */}
      <div className="relative mt-8">
        <MdOutlineKeyboardArrowLeft onClick={scrollLeft} size={50} className="text-[#2C9CF0] group-hover:block -left-[1rem] md:-left-[4rem] lg:-left-[10rem] top-[50%] absolute -translate-y-[30%] opacity-50 hover:opacity-100 cursor-pointer z-10" />
        <div
          id={"slider" + rowId}
          className="w-[20rem] md:w-[40rem] lg:w-full overflow-x-auto scroll-hide"
        >
          <div className="flex flex-row gap-5 p-3">
            {data[0].spot.map((item) => (
              <SpotCard
                key={item.id}
                backgroundImageUrl={item.backgroundUrl}
                title={item.title}
                dataTime={item.dataTime}
                location={item.location}
                url={item.url}
                btnTitle={item.btnTitle}
              />
            ))}
          </div>
        </div>
        <MdOutlineKeyboardArrowRight onClick={scrollRight} size={50} className="text-[#2C9CF0] group-hover:block absolute -right-[1rem] md:-right-[4rem] lg:-right-[10rem] top-[50%] -translate-y-[30%] opacity-50 hover:opacity-100 cursor-pointer" />
      </div>
    </div>
  );
}

export default Spotlight;
