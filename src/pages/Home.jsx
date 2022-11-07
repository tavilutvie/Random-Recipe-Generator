/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DefaultBackground from '../components/DefaultBackground';

export default function Home() {

  function refreshPage() {
    window.location.reload(false);
  }

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
          console.log(response);
        if (response.status === 200) {
            return response.json();
        }
      })
      .then((data) => {
        //console.log(data);
        setData(data.meals);
      })
      .catch((error) => {
        //console.error(error);
        setError(error);
      });
  }, []);

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <DefaultBackground/>
      <div className="relative pt-6 pb-16 sm:pb-24">
        {data ? (
          <main className="lg:relative">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">What is</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Today's Menu?</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Discover foods with recipes to cook and eat!
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow sm:mt-3 sm:ml-3">
                    <button
                    onClick={refreshPage}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Change Menu
                    </button>
                  </div>
                  <div className="rounded-md shadow sm:mt-3 sm:ml-3">
                    <Link
                      to={"/Details/" + data[0].idMeal}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      See Recipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center justify-center items-center relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
              <h3 className="tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl mb-4">
                <span className="block xl:inline">{data[0].strMeal}</span>{' '}
              </h3>
              <img
              className="mx-auto w-50 h-full object-cover rounded-3xl border-solid border-4 border-blue-600"
              src={data[0].strMealThumb} alt={data[0].strMeal}/>
            </div>
          </main>
        ) : (
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Loading...</p>
        )}
      </div>
    </div>
  )
}
