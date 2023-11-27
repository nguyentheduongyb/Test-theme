import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import { IoLogoUsd } from 'react-icons/io'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineCalendarMonth } from 'react-icons/md'

const Banner = () => {
        const [advancedSearch, setAdvancedSearch] = useState(false)

        return (
                <div className='relative top-0 left-0 flex items-center justify-center'>
                        <div className="w-full top-0 left-0">
                                <div className="w-full h-[537px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg")' }}></div>
                        </div>
                        <div className='container absolute'>
                                <div className='text-center text-white font-bold'>
                                        <h3 className='md:text-4xl text-2xl'>Where do you want to go?</h3>
                                        <p>Trips, experiences, and places. All in one service</p>
                                </div>
                                <div className='mt-4'>
                                        <div className='flex gap-6 grid grid-cols-1 px-8 md:px-0 md:grid-cols-4 mb-6'>
                                                <div className="w-full px-2 flex justify-between items-center rounded border-none overflow-hidden bg-white text-gray-400">
                                                        <input className="border-none focus-input-none" type="text" placeholder="Destination, city" />
                                                        <i className="px-3">
                                                                <BsSearch size="16" />
                                                        </i>
                                                </div>
                                                <div className="w-full px-2 flex justify-between items-center rounded border-none overflow-hidden bg-white text-gray-400">
                                                        <select className="border-none focus-input-none appearance-none flex-1">
                                                                <option value="" key="">Any Month</option>
                                                                <option value="" key="">January</option>
                                                                <option value="" key="">February</option>
                                                                <option value="" key="">March</option>
                                                                <option value="" key="">April</option>
                                                                <option value="" key="">May</option>
                                                                <option value="" key="">June</option>
                                                                <option value="" key="">July</option>
                                                                <option value="" key="">August</option>
                                                                <option value="" key="">September</option>
                                                                <option value="" key="">October</option>
                                                                <option value="" key="">November</option>
                                                                <option value="" key="">December</option>
                                                        </select>
                                                        <i className="px-3">
                                                                <MdOutlineCalendarMonth size="16" />
                                                        </i>
                                                </div>
                                                <div className='w-full px-2 flex justify-between items-center rounded border-none overflow-hidden bg-white text-gray-400'>
                                                        <select className='border-none focus-input-none appearance-none flex-1'>
                                                                <option value="">Sort By Date</option>
                                                                <option value="">Price Low To High</option>
                                                                <option value="">Sort By Date</option>
                                                                <option value="">Sort By Date</option>
                                                                <option value="hurr">Durr</option>
                                                        </select>
                                                        <i className='px-3'>
                                                                <CgArrowsExchangeAltV size="16" />

                                                        </i>
                                                </div>

                                                <button className='rounded bg-[#FF4A52] text-white min-h-[36px]'>Search</button>
                                        </div>
                                        <div className={`flex gap-6 grid grid-cols-1 px-8 md:px-0 md:grid-cols-4 mb-6 ${advancedSearch ? "flex" : "hidden"}`}>
                                                <div className="w-full px-2 flex justify-between items-center rounded border-none overflow-hidden bg-white text-gray-400">
                                                        <select className="border-none focus-input-none appearance-none flex-1">
                                                                <option value="" key="">All Categories</option>
                                                                <option value="" key="">Mountain</option>
                                                                <option value="" key="">Rural</option>
                                                                <option value="" key="">Snow & Ice</option>
                                                                <option value="" key="">Wildlife</option>
                                                        </select>

                                                </div>
                                                <div className='w-full px-2 flex justify-between items-center rounded border-none overflow-hidden bg-white text-gray-400'>
                                                        <select className='border-none focus-input-none appearance-none flex-1'>
                                                                <option value="">Any Destination</option>
                                                                <option value="">Tokyo</option>
                                                                <option value="">Seoul</option>
                                                                <option value="">Paris</option>
                                                                <option value="">London</option>
                                                        </select>

                                                </div>
                                                <div className="w-full px-2 flex justify-between items-center rounded border-none overflow-hidden bg-white text-gray-400">
                                                        <input className="border-none focus-input-none" type="text" placeholder="Max Budget ex.500" />
                                                        <i className="px-3">
                                                                <IoLogoUsd size="16" />
                                                        </i>
                                                </div>
                                        </div>
                                        <p onClick={() => { setAdvancedSearch(!advancedSearch) }} className='px-8 md:px-0 text-white flex gap-1 items-center cursor-pointer'>{!advancedSearch ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}Advanced Search</p>
                                </div>

                        </div>
                </div>
        )
}

export default Banner
