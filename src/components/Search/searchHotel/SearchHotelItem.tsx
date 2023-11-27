import Link from 'next/link'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiSolidBowlRice, BiSolidStar } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { GoClock } from 'react-icons/go'
import { MdLocationOn } from 'react-icons/md'

const SearchItem = () => {
        return (
                <div className="rounded w-full p-1 bg-[#FBE4C0]">
                        <p className="flex items-center py-2 justify-center">
                                <span className="flex items-center">
                                        <GoClock />
                                        Còn 48 ngày
                                </span>
                                <span className="flex items-center border-x">
                                        Combo 3N2Đ
                                </span>
                                <span className="flex items-center">
                                        Vé máy bay + Bữa sáng + Miễn phí 01 trẻ em từ 4.299.000 VNĐ/Khách
                                </span>
                        </p>
                        <div className="flex">
                                <Link href="/tour/tour-1" className="w-56 h-44 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2022/06/30/12/hinhdaidien-374x280.webp?o=jpg")' }}></Link>
                                <div className="flex flex-1">
                                        <div className="p-4 bg-[#F9FAFA] w-9/12 flex flex-col justify-between">
                                                <Link href="/tour/tour-1">Khu nghỉ dưỡng Mercure Đà Lạt</Link>
                                                <div className="flex gap-3 items-centers">
                                                        <div className="flex text-xl">
                                                                <BiSolidStar color="#FDBF65" />
                                                        </div>
                                                        <AiFillHeart className="text-xl" color="#E52822" />
                                                        <div className="flex gap-2 text-xs ">
                                                                <p className="rounded-sm bg-teal-600 text-white px-1 flex items-center justify-center">9.8</p>
                                                                <p className="flex gap-1 items-center"><span className="text-teal-600">Tuyệt vời</span><span>|</span><span>65 đánh giá</span></p>
                                                        </div>
                                                </div>
                                                <Link className='flex items-center text-blue-500 text-sm hover:underline' href=""><MdLocationOn /><span>03 Nguyễn Du, phường 9</span><span> - </span><span className="font-medium">Xem bản đồ</span></Link>
                                                <div className="flex gap-4">
                                                        <Link href="" className="flex justify-center gap-1 border rounded px-4 py-1">
                                                                <BsCheck size="22" />
                                                                <span className="text-sm">Châu Âu</span>
                                                        </Link>
                                                        <Link href="" className="flex justify-center gap-1 border rounded px-4 py-1">
                                                                <BsCheck size="22" />
                                                                <span className="text-sm">Thương hiệu quốc tế</span>
                                                        </Link>
                                                </div>
                                                <div className="flex">
                                                        <div className="bg-blue-800 p-1 rounded">
                                                                <BiSolidStar color="white" size="12" />
                                                        </div>
                                                        <div className="bg-white flex items-center text-xs rounded text-blue-800">
                                                                <p className="border-l px-2">Biệt thự nghỉ dưỡng</p>
                                                                <p className="border-l px-2">Thiết kế ấn tượng</p>
                                                                <p className="border-l px-1">1+</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <Link href="" className="bg-white flex-1 flex flex-col gap-3 justify-center items-center">
                                                <p className="text-lg font-bold text-[color:var(--primary-color)]">2.500.000 VNĐ</p>
                                                <div className="border bg-[#F9FAFA] rounded w-3/4 mx-auto p-2 flex flex-col justify-center">
                                                        <p>Delure King</p>
                                                        <p className='flex gap-2'><BiSolidBowlRice /><span className='text-[10px]'>Gồm ăn sáng</span></p>
                                                </div>
                                        </Link>

                                </div>
                        </div>
                </div>
        )
}

export default SearchItem
