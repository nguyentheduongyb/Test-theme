import Link from 'next/link'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'

const Trips = () => {
        const arr = [
                {
                        name: "French Autumn",
                        address: "City Tours, Urban",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
                        reviews: "4 reviews",
                        days: "5days",
                        price: "$,5000"
                },
                {
                        name: "Grand Switerland",
                        address: "Shopping, Moutain, Snow & Ice",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
                        reviews: "4 reviews",
                        days: "5days",
                        price: "$,5000"
                },
                {
                        name: "Discover Japan",
                        address: "City Tours, Iconic",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
                        reviews: "4 reviews",
                        days: "5days",
                        price: "$,5000"
                },
        ]
        return (
                <div className='mt-[50px] flex gap-[30px] grid grid-cols-1 md:grid-cols-3'>
                        {arr?.map((item: any, key: number) => (
                                <Link key={key} href="" className='hover:shadow-2xl hover:scale-[1.02] rounded border'>
                                        <div className='w-full pt-[66.56%] bg-center bg-cover bg-no-repeat relative' style={{ backgroundImage: `url("${item.image}")` }}>
                                                <p className='absolute bottom-[10px] bg-[#FF4A52] px-2 py-1 font-bold text-white'>{item.price}</p>
                                        </div>
                                        <div className='p-4'>
                                                <h6 className='font-bold text-2xl'>{item.name}</h6>
                                                <p>{item.address}</p>
                                                <div className='flex justify-between font-[16px]'>
                                                        <div className='flex items-center gap-1 mt-3'>
                                                                <p className='flex'><FaStar color="#1EC6B6" /><FaStar color="#1EC6B6" /><FaStar color="#1EC6B6" /><FaStar color="#1EC6B6" /><FaRegStar color="gray" /></p>
                                                                <span className='font-bold'>{item.review}</span>
                                                        </div>
                                                        <p className='flex gap-1 items-center'><GoClock /><span className='font-bold'>{item.days}</span></p>
                                                </div>
                                        </div>
                                </Link>
                        ))}

                </div>

        )
}

export default Trips
