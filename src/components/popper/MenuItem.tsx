import React from 'react'

const MenuItem = ({ arr }: any) => {
        return (
                <div className="text-start px-8">
                        {arr?.map((item: any, index: number) => (
                                <div key={index} className="py-3 font-bold border-b last:border-b-0 border-dotted hover:text-[color:var(--second-color)]">{item.title}</div>
                        ))}
                </div>

        )
}

export default MenuItem
