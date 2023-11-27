import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const MenuItem = ({ title, arr }: any) => {
        return (
                <div className="dropdown-hover uppercase flex items-center gap-1 relative py-3 cursor-pointer">{title}<MdKeyboardArrowDown fontSize={22} />
                        <ul className="dropdown-menu hidden w-60 absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-black">
                                {arr?.map((item: any, index: number) => {
                                        if (item.arrLevel1) {
                                                return (
                                                        <li key={index} className="px-3 border-b last:border-b-0 border-dotted hover:text-[color:var(--second-color)] dropdown-sub relative">
                                                                <div className="flex items-center justify-between py-3">
                                                                        <p className="cursor-pointer block w-full">{item.title}</p>
                                                                        <MdOutlineKeyboardArrowRight fontSize={22} />
                                                                </div>
                                                                <div className="dropdown-submenu hidden w-48 absolute left-[101%] top-0 bg-white text-black">
                                                                        {item.arrLevel1?.map((item2: any, index2: number) =>
                                                                                <div key={index2} className="px-3 border-b last:border-b-0 border-dotted hover:text-[color:var(--second-color)]"><Link className="block py-3 w-full" href="">{item2.title}</Link></div>
                                                                        )}
                                                                </div>
                                                        </li>)
                                        }
                                        return (
                                                <li key={index} className="px-3 border-b last:border-b-0 border-dotted hover:text-[color:var(--second-color)]"><Link className="block py-3 w-full" href="">{item.title}</Link></li>
                                        )
                                })}

                        </ul>
                </div>
        )
}

export default MenuItem
