import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
  
  export default function SearchName() {

    const { id } = useParams();
    console.log("id is: " + id);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + id;

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        console.log(url);
        fetch(url)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((data) => {
            console.log(data);
            setData(data.meals);
          })
          .catch((error) => {
            console.error(error);
            setError(error);
          });
      }, [url]);

    return (
      <div className="p-10">
        <p className="pb-10 text-center font-medium text-xl">Showing results for "{id}"</p>
            {error ? <h2>Error fetching data</h2> : null}
            {data ? (
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
                    {data.map((file) => (
                        <li key={file.strMealThumb} className="relative">
                            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                <Link
                                to={"/Details/" + file.idMeal}
                                className="hover:bg-indigo-700">
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
            ) : (
                <p>Loading...</p>
            )}
      </div>
    )
  }