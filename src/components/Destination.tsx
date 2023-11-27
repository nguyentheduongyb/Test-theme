import React from 'react'

const Destination = () => {
        const arr = [
                {
                        title: "Tokyo",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                },
                {
                        title: "Seoul",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
                },
                {
                        title: "Paris",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
                },
                {
                        title: "London",
                        image: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
                },

        ];
        return (
                <div className='mt-[50px] flex gap-[30px] grid grid-cols-1 md:grid-cols-4 relative'>
                        {arr?.map((item: any, index: number) => {
                                return (
                                        <div key={index}>
                                                <div className='w-full pt-[96.25%] bg-center bg-cover bg-no-repeat rounded' style={{ backgroundImage: `url("${item.image}")` }}></div>
                                                <p className='absolute bottom-0 text-white font-bold p-2 text-2xl'>{item.title}</p>
                                        </div>
                                )
                        })}
                </div>
        )
}

export default Destination
