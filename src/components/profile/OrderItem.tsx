import { Fragment } from "react"
import { BsQuestionCircle, BsShop } from "react-icons/bs"
import Link from "next/link"
const Item = () => {
        return (
                <div className="mb-3 rounded">
                        <div className="p-5 bg-white text-black border-b">
                                <div className="flex justify-between border-b pb-3">
                                        <div className="flex gap-2"><span>Love Studio</span><button className="border text-xs rounded px-2 py-1 flex items-center gap-2"><BsShop />Xem Shop</button></div>
                                        <div className="flex gap-2 items-center"><span>Đơn hàng đã được giao thành công</span><BsQuestionCircle /><span>|</span><span>Hoàn thành</span></div>
                                </div>
                                <div className="py-3 flex gap-4">
                                        <div className="border w-[100px] h-[100px] bg-no-repeat bg-center bg-cover rounded-xl" style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg')" }}></div>
                                        <div className="flex-1 flex gap-18 justify-between items-center">
                                                <div>
                                                        <span>Four Islands Excursion in South Phu Quoc - Day Tour</span>
                                                        <p className="my-3">Phân loại hàng: Tour</p>
                                                        <div>x1</div>
                                                        <Link href="/" className="border border-[var(--text-primary)] text-sm py-1 px-2">Đếm ngược 7 ngày khởi hành</Link>
                                                </div>
                                                <button className="px-4 py-2 rounded bg-green-600 text-xs text-white">Chờ thanh toán</button>
                                                <span>99.000đ</span>
                                        </div>
                                </div>
                        </div>
                        <div className="p-5 bg-white text-black">
                                <div className="flex justify-end pb-3">
                                        <div className="flex gap-2"><h2>Thành tiền:</h2><span className="text-sm text-[var(--text-primary)]">đ</span><span className="text-[var(--text-primary)] font-bold text-xl">97.000đ</span></div>
                                </div>
                                <div className="flex justify-between">
                                        <div>
                                                <span>Đánh giá sản phẩm trước<u className="text-[var(--text-primary)] mx-2 cursor-pointer" >04-07-2023</u></span>
                                                <span>Đánh giá ngay và nhận 200 Xu</span>
                                        </div>
                                        <div className="flex gap-4">
                                                <Link href="/">
                                                        <button className="h-[38px] px-6 rounded-[4px] text-white bg-[var(--text-primary)]">Đánh giá</button>
                                                </Link>
                                                <Link href="/">
                                                        <button className="h-[38px] px-6 rounded-[4px] border">Liên hệ người bán</button>
                                                </Link>
                                                <Link href="/">
                                                        <button className="h-[38px] px-6 rounded-[4px] border">Mua lại</button>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>

        )
}
export default Item