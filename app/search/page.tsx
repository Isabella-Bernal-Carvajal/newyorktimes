"use client"

import { useState } from "react"
import { getReviewsByAuthor } from "@/services/nytApi"

export default function SearchPage(){
    const [author,setAuthor] = useState("")
    const [reviews,setReviews] = useState([])

    async function handleSearch(){

    const data = await getReviewsByAuthor(author)

    setReviews(data)
    }

    return (
    <main className="p-10">
        <h1 className="text-2xl font-bold mb-4">
            Search Reviews by Author
        </h1>

        <input
            className="border p-2"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
        />

        <button className="ml-2 border px-4 py-2" onClick={handleSearch}>
            Search
        </button>

        <pre>
            {JSON.stringify(reviews,null,2)}
        </pre>
    </main>
    )
}