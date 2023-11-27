import Link from 'next/link'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiSolidBowlRice, BiSolidPlaneAlt, BiSolidStar } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { FaBus } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdLocationOn } from 'react-icons/md'

const Review = () => {
        return (
                <div className="rounded w-full p-3 bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                        <div className="flex">
                                <Link href="/tour/tour-1" className="h-40 w-40 rounded-full border-4 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://down-ws-vn.img.susercontent.com/38bedd074aad08703440ad8acd596309_tn")' }}></Link>
                                <div className="flex flex-1 p-4 gap-8">
                                        <div className="w-9/12 flex flex-col justify-between gap-3">
                                                <Link className="text-xl font-medium text-blue-900" href="/tour/tour-1">Trung Quốc 5N4Đ</Link>
                                                <div className="flex gap-3 items-centers">

                                                        <div className="flex gap-2">
                                                                <p className="rounded-sm bg-teal-400 text-yellow-300 px-1 flex items-center justify-center"><BiSolidStar/><BiSolidStar/><BiSolidStar/><BiSolidStar/><BiSolidStar/></p>
                                                                <p className="flex gap-1 items-center"><span>Tuyệt vời</span><span>|</span><span>September 29th, 2023</span></p>
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 text-sm text-gray-700 items-center">
                                                        <p className="flex gap-2 items-center"><span>Mã:</span><span>TO2248</span></p>
                                                        <p className="flex gap-2 items-center"><GoClock /><span>5 ngày 4 đêm</span></p>
                                                        <p className="flex gap-2 items-center"><span>Phương tiện:</span><BiSolidPlaneAlt /><FaBus /></p>
                                                </div>
                                                <ul className="flex flex-wrap list-disc">
                                                        <p>The guide Winnie was amazing and the group that attended were great. I had never done an adventure group tour before and it was a pleasant experience.the only thing that wasn’t enjoyable was all the moving from hotel to hotel every night. I had no idea what to expect being that this was a first for me . I normally plan all my trips myself so not knowing everything ahead of time bothered me a bit. For example what hotels we were scheduled to go to before we got on the trip. We were trying to plan some activities ourselves but that made it alittle difficult. Other than that I would def recommend this trip to others.</p>

                                                </ul>
                                        </div>


                                </div>
                        </div>
                </div>
        )
}

export default Review
