"use client"

import { useState } from "react"
import { getBookHistory } from "@/services/nytApi"

export default function HistoryPage(){
    const [title,setTitle] = useState("")
    const [history,setHistory] = useState([])

    async function handleSearch(){

    const data = await getBookHistory(title)

    setHistory(data)
    }

    return(
    <main className="p-10">
        <h1 className="text-2xl font-bold">
            Book History
        </h1>

        <input
            className="border p-2"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />

        <button
            className="ml-2 border px-4 py-2"
            onClick={handleSearch}
        >
            Search
        </button>

        <pre>
            {JSON.stringify(history,null,2)}
        </pre>
    </main>
    )
}