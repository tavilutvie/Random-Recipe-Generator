import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NoResults from "../components/NoResults";
  
export default function SearchCategory() {
    const { id } = useParams();
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + id;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((response) => {
            if (response.status === 200) {
            return response.json();
            }
            throw new Error('Failed to fetch');
        })
        .then((data) => {
            setData(data.meals);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setError(error);
            setLoading(false);
        });
    }, [url]);

    if (error) {
        return <NoResults searchTerm={id} />;
    }

    return (
        <div className="p-10">
            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-400"></div>
                </div>
            ) : !data || data.length === 0 ? (
                <NoResults searchTerm={id} />
            ) : (
                <>
                    <p className="pb-10 text-center font-medium text-xl">{id}</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((file) => (
                            <li key={file.strMealThumb} className="relative">
                                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary-500 overflow-hidden">
                                    <Link
                                    to={"/Details/" + file.idMeal}
                                    className="hover:bg-primary-700">
                                        <img src={file.strMealThumb} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                            <span className="sr-only">View details for {file.strMeal}</span>
                                        </button>
                                    </Link>
                                </div>
                                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.strMeal}</p>
                                {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.idMeal}</p> */}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}