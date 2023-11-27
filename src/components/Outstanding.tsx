import React from 'react'

const Outstanding = ({ children, title, description }: any) => {
        return (
                <div className='mt-[70px]'>
                        <div className='text-center font-bold'>
                                <h3 className='md:text-5xl text-3xl'>{title}</h3>
                                <p className='text-third mt-3'>{description}</p>
                        </div>
                        {children}
                </div>
        )
}

export default Outstanding
