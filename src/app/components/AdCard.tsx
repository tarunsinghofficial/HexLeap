import Image from 'next/image'
import React from 'react'

interface AdCardProps {
    backgroundImageUrl: string;
    title: string;
    description: string;
}

function AdCard({ backgroundImageUrl, title, description }: AdCardProps) {
    return (
        <div className='w-[10rem] h-[25rem]  md:w-[15rem] md:h-[32rem] xl:w-[238.53px] xl:h-[511px] bg-white dark:bg-[#3B3E47] drop-shadow-md hover:drop-shadow-xl p-2 flex flex-col gap-2'>
            <div className='border-[0.2px] border-[#006555] w-full h-full'>
                <div className='relative'>
                    <Image src={backgroundImageUrl} alt={title} width={1000} height={1000} />
                    <div className='bg-black dark:text-white w-auto h-auto py-1 px-5 absolute right-0 top-0 '>Ad</div>
                </div>
                <div className='flex flex-col gap-3 p-0 lg:p-3'>
                    <h2 className="text-md md:text-lg lg:text-xl font-medium text-left pl-1 text-[#222D3A] dark:text-white">{title}</h2>
                    <p className='text-[#525965] dark:text-[#DFDFDF] text-xs md:text-xs lg:text-sm overflow-hidden ml-1'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AdCard