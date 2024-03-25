import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SpotCardProps {
    backgroundImageUrl: string,
    title: string,
    dataTime: string,
    location: string,
    url: string,
    btnTitle: string,
}

function SpotCard({ backgroundImageUrl, title, dataTime, location, url, btnTitle} : SpotCardProps) {
    return (
        <div className='relative w-[14rem] h-[27rem] xl:w-[257px] xl:h-[624px] bg-white dark:bg-[#3B3E47] drop-shadow-md hover:drop-shadow-xl p-2 flex flex-col'>
            <Image src={backgroundImageUrl} alt={title} width={1000} height={1000} />
            <div className="border-dashed border-b-2 border-[#818A97] mx-5 overflow-hidden">
                <div className="absolute rounded-full w-5 h-5 -mt-2 -left-2 bg-white dark:bg-[#1F1D2A]"></div>
                <div className="absolute rounded-full w-5 h-5 -mt-2 -right-2 bg-white dark:bg-[#1F1D2A]"></div>
            </div>
            <div className='flex flex-col justify-end space-y-3 mt-3 lg:mt-6'>
                <h2 className='text-black dark:text-white text-center font-medium text-[12px] md:text-[14px] xl:text-[17px]'>{title}</h2>
                <p className='text-black dark:text-white text-center text-[10px] md:text-[12px] xl:text-[14px]'>{dataTime}</p>
                <p className='text-[#525965] dark:text-[#DFDFDF] text-center text-[11px] md:text-[12px] xl:text-[14px]'>{location}</p>
                <Link href={url} className='bg-black w-[10rem] lg:w-[15rem] text-center text-white text-xs md:text-md lg:text-lg px-4 py-2'>{btnTitle}</Link>
            </div>
        </div>
    )
}

export default SpotCard