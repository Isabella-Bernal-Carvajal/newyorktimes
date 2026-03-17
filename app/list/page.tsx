import { getBestSellerLists } from "@/services/nytApi"
import { NYTList } from "@/types/nytList"

export default async function ListsPage(){
    const lists: NYTList[] = await getBestSellerLists()

    return (
    <main className="p-10">
        <h1 className="text-2xl font-bold mb-6">
            Best Seller Categories
        </h1>

        <ul>
            {lists.map((list)=>(
            <li key={list.list_name_encoded}>
                {list.display_name}
            </li>
            ))}
        </ul>
    </main>

    )
}