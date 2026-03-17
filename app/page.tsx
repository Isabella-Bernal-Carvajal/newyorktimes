"use client"
import { BookList } from "@/components/BookList";
import Header from "@/components/header";
import { getBestSellerBooks } from "@/services/nytApi";
import { useEffect, useState } from "react";

export default function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {

    getBestSellerBooks()
      .then(setBooks)
      .catch(console.error)
  }, [])

  return (
    <div className="bg-gray-100">
      <Header></Header>
      <div className="p-12">
        <BookList books={books}/>
      </div>
    </div>
  );
}
