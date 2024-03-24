import Image from 'next/image'
import React from 'react'

function Card({
    backgroundImageUrl,
    title,
    totalEvents,
    sport
} : {
    backgroundImageUrl: any,
    title: string,
    totalEvents: string,
    sport: string,
}) {

  return (
    <div className='w-[238.53px] h-[511px] bg-white dark:bg-[#3B3E47] drop-shadow-md hover:drop-shadow-xl p-2 flex flex-col justify-between'>
        <Image src={backgroundImageUrl} alt={title} width={1000} height={1000} />
        <h2 className="text-xl font-medium text-left pl-1 dark:text-white">{title}</h2>
        <div className='flex flex-col items-center'>
        <div className='bg-[#F7F7F8] dark:bg-[#292B32] w-[217px] h-[54px] p-2 flex flex-row gap-10 items-center'>
            <div>
                <p className='text-[12px] text-[#525965] dark:text-[#DFDFDF]'>Total Events</p>
                <p className='text-  dark:text-white'>{totalEvents} Events</p>
            </div>
            <div>
                <p className='text-[12px] text-[#525965] dark:text-[#DFDFDF]'>Sport</p>
                <p className='text-black dark:text-white'>{sport}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card