const API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY
const BASE_URL = "https://api.nytimes.com/svc/books/v3"

// Best sellers actuales
export async function getBestSellerBooks() {
    const response = await fetch(
        `${BASE_URL}/lists/current/combined-print-and-e-book-fiction.json?api-key=${API_KEY}`
    )

    if (!response.ok) {
        throw new Error("Error al conectar con NYT API")
    }
    const data = await response.json()
    return data.results.books
}

// Listas disponibles
export async function getBestSellerLists() {

    const response = await fetch(
    `${BASE_URL}/lists/names.json?api-key=${API_KEY}`
    )
    const data = await response.json()
    return data.results
}

// Best sellers por fecha
export async function getBestSellerByDate(date: string) {

    const response = await fetch(
    `${BASE_URL}/lists/${date}/combined-print-and-e-book-fiction.json?api-key=${API_KEY}`
    )
    const data = await response.json()
    return data.results.books
}

// historia de un libro
export async function getBookHistory(title: string) {

    const response = await fetch(
    `${BASE_URL}/lists/best-sellers/history.json?title=${title}&api-key=${API_KEY}`
    )
    const data = await response.json()
    return data.results
}

// buscar review por autor
export async function getReviewsByAuthor(author: string) {

    const response = await fetch(
    `${BASE_URL}/reviews.json?author=${author}&api-key=${API_KEY}`
    )
    const data = await response.json()
    return data.results
}

// buscar review por titulo
export async function getReviewsByTitle(title: string) {

    const response = await fetch(
    `${BASE_URL}/reviews.json?title=${title}&api-key=${API_KEY}`
    )
    const data = await response.json()
    return data.results
}