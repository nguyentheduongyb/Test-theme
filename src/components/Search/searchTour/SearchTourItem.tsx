import Link from 'next/link'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiSolidBowlRice, BiSolidPlaneAlt, BiSolidStar } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { FaBus } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdLocationOn } from 'react-icons/md'

const SearchTourItem = () => {
        return (
                <div className="rounded w-full p-3 bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                        <div className="flex">
                                <Link href="/tour/tour-1" className="w-48 h-40 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2022/06/30/12/hinhdaidien-374x280.webp?o=jpg")' }}></Link>
                                <div className="flex flex-1 p-4 gap-8">
                                        <div className="w-9/12 flex flex-col justify-between gap-3">
                                                <Link className="text-xl font-medium text-blue-900" href="/tour/tour-1">Trung Quốc 5N4Đ: Trùng Khánh - Bắc Kinh - Vạn Lý Trường Thành - Hồng Nhai Động</Link>
                                                <div className="flex gap-3 items-centers">

                                                        <div className="flex gap-2 text-xs ">
                                                                <p className="rounded-sm bg-teal-600 text-white px-1 flex items-center justify-center">9.8</p>
                                                                <p className="flex gap-1 items-center"><span className="text-teal-600">Tuyệt vời</span><span>|</span><span>65 đánh giá</span></p>
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 text-sm text-gray-700 items-center">
                                                        <p className="flex gap-2 items-center"><span>Mã:</span><span>TO2248</span></p>
                                                        <p className="flex gap-2 items-center"><GoClock /><span>5 ngày 4 đêm</span></p>
                                                        <p className="flex gap-2 items-center"><span>Phương tiện:</span><BiSolidPlaneAlt /><FaBus /></p>
                                                </div>
                                                <ul className="flex flex-wrap list-disc">
                                                        <li className="text-xs text-teal-500 ml-8">Núi tuyết Ngọc Long</li>
                                                        <li className="text-xs text-teal-500 ml-8">Thành cổ Lệ Giang</li>
                                                        <li className="text-xs text-teal-500 ml-8">Kinh đô Huế</li>
                                                        <li className="text-xs text-teal-500 ml-8">Núi tuyết Ngọc Long</li>
                                                        <li className="text-xs text-teal-500 ml-8">Núi tuyết Ngọc Long</li>
                                                        <li className="text-xs text-teal-500 ml-8">Núi tuyết Ngọc Long</li>

                                                </ul>
                                        </div>
                                        <Link href="" className="bg-white flex-1 flex flex-col gap-2">
                                                <p className="text-xs text-center">Khởi hành: 16-09-2023</p>
                                                <p className="text-xl font-medium text-[color:var(--primary-color)]">2.500.000 VNĐ</p>
                                                <p className="text-xs text-center text-gray-500">*Áp dụng 2 nhóm khách</p>

                                        </Link>

                                </div>
                        </div>
                </div>
        )
}

export default SearchTourItem
