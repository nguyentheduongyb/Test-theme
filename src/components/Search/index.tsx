import { TextInput } from 'flowbite-react';

import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react';
const Search = () => {
        const [searchInput, setSearchInput] = useState('')

        const handleSearch = (e: any) => {
                setSearchInput(e.target.value)
        }
        return (
                <div className="container flex items-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-[#ccc] gap-4 px-8 py-3">
                        <div className="h-14 w-full flex items-center gap-8">
                                <div className="bg-white rounded-xl h-full flex-1 flex items-center">
                                        <MdLocationOn fontSize={21} className="w-[38px] cursor-pointer text-2xl text-[#ccc]" />
                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-sm h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder="Bạn muốn đi đâu?" />
                                </div>
                                <div className="bg-white rounded-xl h-full w-3/12">
                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-xs h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder='Thứ 7 ngày 2 tháng 9' />
                                </div>
                                <div className="bg-white rounded-xl h-full w-3/12">
                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-xs h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder='Thứ 2 ngày 4 tháng 9' />
                                </div>
                                <div className="cursor-pointer bg-[color:var(--primary-color)] rounded-xl text-white h-12 w-1/12 flex items-center justify-center font-bold">Tìm</div>
                        </div>
                </div>
        )

}
export default Search;