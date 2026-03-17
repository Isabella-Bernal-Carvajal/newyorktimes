import React from 'react'
import { BookCard } from './BookCard'
import { Book } from '@/types/book'

interface Props{
    books: Book[]
}

export const BookList = ({books}: Props) => {
    return (
        <div className='grid lg:grid-cols-1 md:grid-cols-1 gap-6 justify-center'>
            <div className="grid  md:grid-cols-2 lg:grid-cols-5 gap-6">

            {books.map((book) => (
                <BookCard
                key={book.primary_isbn13}
                book={book}
                />
            ))}
            </div>
        </div>
    )
}

