"use client"
import Link from "next/link"

export default function Header() {
    return (
        <header className="text-black">
            <nav className="max-w-6xl mx-auto flex flex-col items-center justify-between p-8 gap-4">

                {/* Logo / título */}
                <Link href="/" className="text-3xl font-light font-sans">New  York  Books</Link>
                <hr className="border-gray-400 w-210"/>

                {/* links */}
                <div className="flex gap-12">
                    <Link href="/">Home</Link>
                    <Link href="/lists">Lists</Link>
                    <Link href="/search">Reviews</Link>
                    <Link href="/history">History</Link>
                    <Link href="/date">By Date</Link>
                </div>
            </nav>
        </header>
    )
}