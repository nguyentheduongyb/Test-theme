import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Articles = () => {
        const arr = [
                {
                        name: "Memorial Day to Someone Told Me to Travel",
                        link: "",
                        description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
                        time: "December 10, 2016"
                },
                {
                        name: "Memorial Day to Someone Told Me to Travel",
                        link: "",
                        description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
                        time: "December 10, 2016"
                },
                {
                        name: "Memorial Day to Someone Told Me to Travel",
                        link: "",
                        description: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
                        time: "December 10, 2016"
                }
        ]
        return (
                <div className='mt-[50px] flex gap-[30px] grid grid-cols-1 md:grid-cols-3'>
                        {arr?.map((item: any, index: number) => {
                                return (
                                        <div key={index} className='hover:shadow-2xl hover:scale-[1.02] rounded overflow-hidden border'>
                                                <div className='w-full pt-[66.56%] bg-center bg-cover bg-no-repeat relative' style={{ backgroundImage: `url("${item.image}")` }}>
                                                </div>
                                                <div className='p-4'>
                                                        <p className='uppercase text-[12px] font-bold'>{item.time}</p>
                                                        <h6 className='font-bold text-2xl mt-2'>{item.name}</h6>
                                                        <p className='mt-6'>{item.description}</p>
                                                        <Link href={`${item.link}`} className='hover:text-black text-[16px] text-third mt-8 flex items-center'>Read More <IoIosArrowForward /></Link>
                                                </div>
                                        </div>
                                )
                        })}
                </div>
        )
}

export default Articles
