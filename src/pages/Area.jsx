/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  
export default function Area() {

    const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            // console.log(response);
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            // console.log(data);
            setData(data.meals);
        })
        .catch((error) => {
            // console.error(error);
            setError(error);
        });
    }, [url]);

    return (
        <div >
            {error ? <h2>Error fetching data</h2> : null}
            {data ? (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-10">
                    {data.map((area) => (
                        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <div className="flex-1 min-w-0">
                                <Link to={"/SearchArea/" + area.strArea} className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    <p className="text-sm font-medium text-gray-900">{area.strArea}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
  