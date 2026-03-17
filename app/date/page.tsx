"use client"

import { useState } from "react"
import { getBestSellerByDate } from "@/services/nytApi"
import { BookList } from "@/components/BookList"

export default function DatePage(){
    const [date,setDate] = useState("")
    const [books,setBooks] = useState([])

    async function handleSearch(){
    const data = await getBestSellerByDate(date)
    setBooks(data)
    }

    return(
    <main className="p-10">
        <h1 className="text-2xl font-bold">
            Best Sellers by Date
        </h1>

        <input
            type="date"
            className="border p-2"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
        />

        <button className="ml-2 border px-4 py-2" onClick={handleSearch}>
            Search
        </button>

        <BookList books={books}/>
    </main>
    )
}