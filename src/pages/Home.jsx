/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DefaultBackground from '../components/DefaultBackground';
import { BiRefresh } from 'react-icons/bi';
import { FaUtensils } from 'react-icons/fa';
import FoodAnimation from '../components/FoodAnimation';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomMeal = () => {
    setLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error.message}</p>
          <button
            onClick={fetchRandomMeal}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#FDFDFD]">
      <DefaultBackground />
      {/* Add FoodAnimation component for desktop only */}
      <div className="hidden lg:block">
        <FoodAnimation />
      </div>
      
      <div className="relative">
        {loading ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-400"></div>
          </div>
        ) : data && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">What's for</span>
                  <span className="block text-primary-400">Dinner Today?</span>
                </h1>
                
                <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                  Discover delicious recipes from around the world and create amazing meals at home!
                </p>

                <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4">
                  <button
                    onClick={fetchRandomMeal}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-400 hover:bg-primary-500 transition-colors duration-200 mb-4 sm:mb-0"
                  >
                    <BiRefresh className="w-5 h-5 mr-2" />
                    New Recipe
                  </button>
                  
                  <Link
                    to={"/Details/" + data[0].idMeal}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors duration-200"
                  >
                    <FaUtensils className="w-5 h-5 mr-2" />
                    View Recipe
                  </Link>
                </div>

                <div className="mt-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-sm font-medium text-primary-700">
                    {data[0].strCategory} • {data[0].strArea} Cuisine
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="aspect-w-5 aspect-h-3">
                    <img
                      className="w-full h-full object-cover rounded-2xl shadow-xl"
                      src={data[0].strMealThumb}
                      alt={data[0].strMeal}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-2xl">
                    <h2 className="text-xl font-semibold text-white">
                      {data[0].strMeal}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
