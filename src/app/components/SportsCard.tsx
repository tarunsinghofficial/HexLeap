import Image from 'next/image'
import React from 'react'

interface SportsCardProps {
    backgroundImageUrl: string,
    title: string,
    totalEvents: string,
    sport: string,
}

function SportsCard({ backgroundImageUrl, title, totalEvents, sport } : SportsCardProps) {

  return (
    <div className='w-[10rem] h-[25rem]  md:w-[15rem] md:h-[32rem] xl:w-[238.53px] xl:h-[511px] bg-white dark:bg-[#3B3E47] drop-shadow-md hover:drop-shadow-xl p-2 flex flex-col justify-between space-y-2'>
        <Image src={backgroundImageUrl} alt={title} width={1000} height={1000} />
        <h2 className="text-md md:text-lg xl:text-xl font-medium text-left pl-1 dark:text-white">{title}</h2>
        <div className='flex flex-col items-center'>
        <div className='bg-[#F7F7F8] dark:bg-[#292B32] w-full h-auto p-2 flex flex-row gap-4 justify-between items-center'>
            <div>
                <p className='text-[10px] md:text-[12px] xl:text-[14px] text-[#525965] dark:text-[#DFDFDF]'>Total Events</p>
                <p className='text-[12px] md:text-[14px] xl:text-[16px]  dark:text-white'>{totalEvents} Events</p>
            </div>
            <div>
                <p className='text-[10px] md:text-[12px] xl:text-[14px] text-[#525965] dark:text-[#DFDFDF]'>Sport</p>
                <p className='text-[12px] md:text-[14px] xl:text-[16px] text-black dark:text-white'>{sport}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SportsCard