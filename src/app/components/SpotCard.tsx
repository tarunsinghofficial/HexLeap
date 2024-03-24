import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SpotCard({
    backgroundImageUrl,
    title,
    dataTime,
    location,
    url,
    btnTitle
} : {
    backgroundImageUrl: any,
    title: string,
    dataTime: string,
    location: string,
    url: string,
    btnTitle: string,
}) {
    return (
        <div className='relative  w-auto h-auto max-w-[257px] max-h-[624px] bg-white dark:bg-[#3B3E47] drop-shadow-md hover:drop-shadow-xl p-2 flex flex-col justify-between'>
            <Image src={backgroundImageUrl} alt={title} width={1000} height={1000} />
            <div className="border-dashed border-b-2 border-[#818A97] mx-5 overflow-hidden">
                <div className="absolute rounded-full w-5 h-5 -mt-2 -left-2 bg-white bg-gradient-to-b from-[#18282A] to-[#221A2C]"></div>
                <div className="absolute rounded-full w-5 h-5 -mt-2 -right-2 bg-white bg-gradient-to-b from-[#18282A] to-[#221A2C]"></div>
            </div>
            <div className='flex flex-col items-center space-y-2 mt-3'>
                <h2 className='text-black dark:text-white text-center font-medium text-[17px]'>{title}</h2>
                <p className='text-black dark:text-white text-center text-[14px]'>{dataTime}</p>
                <p className='text-[#525965] dark:text-white text-center text-[14px]'>{location}</p>
                <Link href={url} className='bg-black text-white p-6 w-[213px] h-[36px] flex items-center justify-center'>{btnTitle}</Link>
            </div>
        </div>
    )
}

export default SpotCard