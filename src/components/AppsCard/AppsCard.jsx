import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';

const AppsCard = ({app}) => {
    const {title, image, ratingAvg, downloads} = app;
    return (
        <div className=' p-5 bg-white rounded-lg hover:shadow-lg duration-300 cardHover ' onClick={() => window.location.href=`/apps/${app.id}`}>
            <img src={image} alt="" className='w-[80%] mx-auto'/>
            <h3 className='font-bold text-2xl mt-10'>{title}</h3>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 mt-2 bg-[#f1f5e8]  px-2 py-1 rounded-lg'>
                    <img src={downloadIcon} alt="" className='w-[16px]'/>
                    <p>{downloads}M</p>
                </div>
                <div className='flex items-center gap-2 mt-2  bg-[#fff0e1]  px-2 py-1 rounded-lg'>
                    <img src={ratingIcon} alt="" className='w-[16px]'/>
                    <p>{ratingAvg}</p>
                </div>
            </div>
            
        </div>
    );
};

export default AppsCard;