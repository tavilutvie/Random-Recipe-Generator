import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";
import Steps from "../components/Steps";

export default function Detail(){

    const { id } = useParams();
    console.log("id is: " + id);
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
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

    return(
        <div className="relative bg-[#FDFDFD] py-16 sm:py-24">
            {error ? <h2>Error fetching data</h2> : null}
            {data ? (
                <div>
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                        <div className="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div className="absolute inset-y-0 right-1/2 w-full bg-[#FDFDFD] rounded-r-3xl lg:right-72" />
                                    <svg
                                    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                    width={404}
                                    height={392}
                                    fill="none"
                                    viewBox="0 0 404 392">
                                    <defs>
                                        <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse">
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                                    </svg>
                                </div>
                                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                                    <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                        <img
                                        className="absolute inset-0 h-full w-full object-cover border-solid border-4 border-primary-600 rounded-3xl"
                                        src={data[0].strMealThumb} alt={data[0].strMeal} />
                                        <div className="relative px-8">
                                            <blockquote className="mt-8">
                                                <div className="relative text-lg font-medium text-white md:flex-grow">
                                                    <svg
                                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 32 32"
                                                    aria-hidden="true">
                                                    </svg>
                                                    <p className="relative text-4xl bg-primary-700 text-center">
                                                        {data[0].strMeal}
                                                    </p>
                                                </div>
                                                <footer className="mt-4">
                                                    <p className="text-base font-semibold text-primary-200 text-center bg-primary-600">{data[0].strDrinkAlternate}</p>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                                            <div className="border-t-2 border-gray-100 pt-6">
                                                <dt className="text-base font-medium text-gray-500">Category</dt>
                                                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{data[0].strCategory}</dd>
                                            </div>
                                            <div className="border-t-2 border-gray-100 pt-6">
                                                <dt className="text-base font-medium text-gray-500">Area</dt>
                                                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{data[0].strArea}</dd>
                                            </div>
                                        </dl>
                                        <div className="mt-10">
                                        <a href={data[0].strYoutube} target="_blank" rel="noreferrer" className="text-base font-medium text-primary-600">
                                            {' '}
                                            Watch on youtube<span aria-hidden="true">&rarr;</span>{' '}
                                        </a>
                                        <br></br>
                                        <a href={data[0].strSource} target="_blank" rel="noreferrer" className="text-base font-medium text-primary-600">
                                            {' '}
                                            See more details<span aria-hidden="true">&rarr;</span>{' '}
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>          
                        <Recipe recipe={data[0]}/>
                    </div>
                    <Steps recipe={data[0]}/>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}