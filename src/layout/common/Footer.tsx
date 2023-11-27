'use client'
import React from 'react'
import Link from 'next/link';
import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter, BsArrowRight, BsLinkedin, BsPinterest } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';
import { MdLocationPin, MdPhoneIphone } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
        return (
                <footer className="w-full bg-black mt-[100px]">
                        <div className="container py-12 gap-12 text-white">
                                <div className='w-full grid grid-cols-1 md:grid-cols-3 flex justify-between  gap-12'>
                                        <div>
                                                <p className="text-2xl font-bold">Our Awards  </p>
                                                <p className='mt-6 text-[16px] text-secondary'>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                                                <img className='mt-8 w-[246px]' src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />
                                        </div>
                                        <div>
                                                <p className="text-2xl font-bold">Contact Info</p>
                                                <div className='flex flex-col gap-6 mt-6 text-secondary'>
                                                        <p className='flex gap-2 items-center'><MdPhoneIphone /><span>1-567-124-44227</span></p>
                                                        <p className='flex gap-2 items-center'><MdLocationPin /><span>184 Main Street East Perl Habour 8007</span></p>
                                                        <p className='flex gap-2 items-center'><GoClock /><span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span></p>
                                                </div>
                                                <div className='flex gap-4 mt-8'>
                                                        <BsFacebook size="30" />
                                                        <AiFillTwitterCircle size="30" />
                                                        <FaYoutube size="30" />
                                                        <BsPinterest size="30" />
                                                        <BsInstagram size="30" />
                                                </div>
                                        </div>
                                        <div>
                                                <p className="text-2xl font-bold">Recent Trips</p>
                                                <div className="flex grid grid-cols-3 gap-2 mt-6">
                                                        <div className='w-full pt-[100%] rounded-lg bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg")' }}></div>
                                                        <div className='w-full pt-[100%] rounded-lg bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg")' }}></div>
                                                        <div className='w-full pt-[100%] rounded-lg bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg")' }}></div>
                                                        <div className='w-full pt-[100%] rounded-lg bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg")' }}></div>
                                                        <div className='w-full pt-[100%] rounded-lg bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg")' }}></div>
                                                        <div className='w-full pt-[100%] rounded-lg bg-center bg-no-repeat bg-cover' style={{ backgroundImage: 'url("https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg")' }}></div>

                                                </div>

                                        </div>

                                </div>
                        </div>
                        <div className='hidden md:block w-[86%] mx-auto h-[80px] text-secondary border-t border-t-[1px] border-t-[color:var(--text-secondary)]'>
                                <div className='container h-full flex justify-between text-[12px] items-center'>
                                        <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
                                        <div className='flex gap-4'>
                                                <Link href="">Home</Link>
                                                <Link href="">Tours</Link>
                                                <Link href="">Blog</Link>
                                                <Link href="">Purchase Theme</Link>
                                        </div>
                                </div>

                        </div>

                </footer>
        )
}

export default Footer
