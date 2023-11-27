import Image from 'next/image'
import React from 'react'

const ChooseUS = () => {
        return (
                <div className='mt-[50px] flex gap-[50px] grid grid-cols-1 md:grid-cols-3 relative'>
                        <div className='flex flex-col items-center'>
                                <img className='w-[150px]' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="" />
                                <h6 className='font-bold text-xl'>Handpicked Hotels</h6>
                                <p className='text-center text-[16px] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                        </div>
                        <div className='flex flex-col items-center'>
                                <img className='w-[150px]' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" alt="" />
                                <h6 className='font-bold text-xl'>World Class Service</h6>
                                <p className='text-center text-[16px] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                        </div>
                        <div className='flex flex-col items-center'>
                                <img className='w-[150px]' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" alt="" />
                                <h6 className='font-bold text-xl'>Best Price Guarantee</h6>
                                <p className='text-center text-[16px] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                        </div>
                </div>
        )
}

export default ChooseUS
