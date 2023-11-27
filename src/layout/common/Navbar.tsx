import Link from "next/link";
import Tippy from "@tippyjs/react/headless";

import { MdNotifications, MdLanguage, MdLocationOn } from "react-icons/md"

import { FaUser, FaSignOutAlt, FaUserCircle } from "react-icons/fa"
import { IoMdWallet, IoIosSettings } from "react-icons/io"
import { GoClock } from "react-icons/go"
import { BsCalendarWeek } from "react-icons/bs"
import Language from "~/components/popper/Language";
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const MENU_ITEMS = [
        {
                icon: <MdLanguage />,
                title: 'Tiếng Việt',
                children: {
                        title: 'Language',
                        data: [
                                {
                                        type: 'language',
                                        code: 'en',
                                        title: 'English',
                                },
                                {
                                        type: 'language',
                                        code: 'vi',
                                        title: 'Tiếng Việt',
                                },
                        ],
                },

        },
];


const Navbar = () => {

        const userMenu = [
                {
                        icon: <FaUser />,
                        title: 'Xem Profile',
                        to: '/account/profile',
                },
                {
                        icon: <IoMdWallet />,
                        title: 'Ví',
                        to: '/account/wallet',
                },
                {
                        icon: <IoIosSettings />,
                        title: 'Cài đặt',
                        to: '/settings',
                },
                {
                        icon: <FaSignOutAlt />,
                        title: 'Đăng xuất',
                        separate: true,
                },
        ];

        // Handle logic
        const handleMenuChange = (menuItem: any) => {
                switch (menuItem.type) {
                        case 'language':
                                // Handle change language
                                break;
                        default:
                }
        };

        return (
                <div className="w-full flex text-[14px] h-[40px] bg-[color:var(--primary-color)] text-white">
                        <div className="container flex items-center justify-between font-medium">
                                <div className="flex items-center gap-5">
                                        <Link href="/" className="flex items-center gap-1"><BsCalendarWeek />Thứ 7, ngày 2 tháng 9</Link>
                                        <Link href="/" className="flex items-center gap-1"><MdLocationOn />Hà Nội, Việt Nam</Link>
                                        <Link href="/" className="flex items-center gap-1"><GoClock />Thứ 2 - Thứ 7: 8H - 17H</Link>
                                </div>

                                <div className="flex items-center h-full">
                                        <Link href="http://" className="px-4 border-r border-[#35B0AF] last:border-r-0 h-3/5 flex items-center"><BsFacebook fontSize={18} /></Link>
                                        <Link href="http://" className="px-4 border-r border-[#35B0AF] last:border-r-0 h-3/5 flex items-center"><BsTwitter fontSize={18} /></Link>
                                        <Link href="http://" className="px-4 border-r border-[#35B0AF] last:border-r-0 h-3/5 flex items-center"><BsInstagram fontSize={18} /></Link>
                                        <Link href="http://" className="px-4 border-r border-[#35B0AF] last:border-r-0 h-3/5 flex items-center"><BsLinkedin fontSize={18} /></Link>
                                </div>
                        </div>

                </div >
        )
}
export default Navbar;