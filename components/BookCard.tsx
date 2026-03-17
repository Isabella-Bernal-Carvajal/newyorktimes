import { Book } from '@/types/book'
import Image from 'next/image'
import React from 'react'

interface Props {
    book: Book  
}

export const BookCard = ({book}: Props) => {
    return (
        <div className='w-64 h-144 p-2.5 border-2 border-gray-300 rounded-[7px] hover:bg-gray-100 hover:border-[#bcb9b9cc] hover:scale-103 transition-all duration-300'>
            <Image 
                src={book.book_image} 
                alt={book.title} 
                className='h-66 w-56 rounded-[17px] bg-amber-100'
                width={800}
                height={400}
            />
            
            <div className='p-2.5 align-middle'>
                <h2 className='text-gray-700 text-[17px] pt-4 font-semibold font'>
                    {book.title}
                </h2>

                <p className="text-[16px] text-g text-gray-600">
                    {book.author}
                </p>

                <p className="text-[15px] mt-2 text-gray-700">
                    {book.description}
                </p>

                <div className='text-black text-[13px] pt-1.5 flex flex-wrap gap-1.5'>
                    <button className='bg-orange-100 font-semibold text-orange-800 border border-amber-700 rounded-lg py-0.5 px-2 font-mono'>Rank: {book.rank}</button>
                    <button className='bg-blue-100 font-semibold text-blue-800 border border-blue-700 rounded-lg py-0.5 px-2'>Weeks on list: {book.weeks_on_list}</button>
                    <button className='bg-teal-100 font-semibold text-teal-800 border border-teal-700 rounded-lg py-0.5 px-2'>Publisher:  {book.publisher}</button>
                </div>
            </div>
        </div>
    )
}

