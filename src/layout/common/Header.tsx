import Link from "next/link";
import styles from "~/styles/Header.module.scss"
import { CgShoppingCart } from "react-icons/cg"
import { BiMenu } from "react-icons/bi";
import MenuItem from "~/components/header/MenuItem";
import MenuPoperItem from "~/components/popper/MenuItem";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Header = () => {
        const arrHome = [
                {
                        title: "Home 1 - Background Image",
                },
                {
                        title: "Home 2 - Youtube Video",
                },
                {
                        title: "Home 3 - Google Insprired",
                },
                {
                        title: "Home 4 - Travel Site",
                }
        ]
        const arrTour = [
                {
                        title: "Tour Classic Fullwidth",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Classic Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour List Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Header Type",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Categories",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]
        const arrBooking = [
                {
                        title: "Booking",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Classic Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour List Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Header Type",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Categories",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]
        const arrDestination = [
                {
                        title: "Destination",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Classic Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour List Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Header Type",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Categories",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]
        const arrPages = [
                {
                        title: "Destination",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]

        const arrBlogs = [
                {
                        title: "Blogs",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]
        const arrShortCodes = [
                {
                        title: "ShortCode",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]
        const arrShop = [
                {
                        title: "Shop",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
                {
                        title: "Tour Grid Sidebar",
                        arrLevel1: [
                                {
                                        title: "2 Column"
                                },
                                {
                                        title: "3 Column"
                                },
                                {
                                        title: "4 Column"
                                }
                        ]
                },
        ]

        const [isDisplayMenuMobile, setIsDisplayMenuMobile] = useState(false)



        const arrMenu = [
                {
                        title: "Home",
                        children: [
                                {
                                        title: "Home 1 - Background Image",
                                }
                        ]

                },
                {
                        title: "Tours",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                },
                {
                        title: "Booking",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                },
                {
                        title: "Destination",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                },
                {
                        title: "Pages",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                },
                {
                        title: "Blogs",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                },
                {
                        title: "Shortcodes",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                },
                {
                        title: "Shop",
                        children: [
                                {
                                        title: "Tour Classic Fullwidth",
                                        children: [
                                                {
                                                        title: "Column 1"
                                                }
                                        ]
                                }
                        ]
                }

        ]



        return (
                <div className={styles.header}>
                        <div className={styles.header_wrapper}>
                                <Link href="/" className={styles.header_logo}>GTour</Link>
                                <div className="flex text-white items-center text-[12px]">
                                        <div className={styles.header_list_menu}>
                                                <MenuItem title="Home" arr={arrHome} />
                                                <MenuItem title="Tour" arr={arrTour} />
                                                <MenuItem title="Booking" arr={arrBooking} />
                                                <MenuItem title="Destination" arr={arrDestination} />
                                                <MenuItem title="Pages" arr={arrPages} />
                                                <MenuItem title="Blogs" arr={arrBlogs} />
                                                <MenuItem title="Shortcodes" arr={arrShortCodes} />
                                                <MenuItem title="Shop" arr={arrShop} />
                                        </div>
                                        <div className="md:block hidden md:text-3xl md:text-[16px] text-black md:text-white">
                                                <button className="p-2">
                                                        <BiMenu />
                                                </button>
                                                <button className="p-2">
                                                        <CgShoppingCart />
                                                </button>
                                        </div>
                                        <div className="block md:hidden text-3xl md:text-[16px] text-black md:text-white">
                                                <button className="p-2">
                                                        <BiMenu onClick={() => { setIsDisplayMenuMobile(true) }} />
                                                        <div className={`${!isDisplayMenuMobile ? "hidden" : "fixed flex"} justify-end bg-[color: rgba(0, 0, 0, 0.5)] h-full w-full left-0 right-0 bottom-0 top-0`}>
                                                                <div className="w-4/5 py-8 bg bg-[#E2E7EB] flex flex-col">
                                                                        <div onClick={() => { setIsDisplayMenuMobile(false) }} className="font-bold self-end mr-4 flex items-center justify-center rounded-full bg-[#FF4A52] flex w-12 h-12">
                                                                                <IoMdClose />
                                                                        </div>
                                                                        <MenuPoperItem arr={arrMenu} />
                                                                </div>

                                                        </div>
                                                </button>
                                                <button className="p-2">
                                                        <CgShoppingCart />
                                                </button>
                                        </div>
                                </div>


                        </div>
                </div>
        )
}
export default Header;