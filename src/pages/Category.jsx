/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  
export default function Category() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        }
    })
    .then((data) => {
        setData(data.categories);
    })
    .catch((error) => {
        setError(error);
    });
  }, [url]);

  return (
    <div className="bg-[#FDFDFD] py-12">
      {error ? <h2>Error fetching data</h2> : null}
      {data ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Recipe Categories</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((category) => (
              <Link 
                key={category.idCategory}
                to={"/SearchCategory/" + category.strCategory} 
                className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex items-center justify-center">
                    <p className="text-white text-sm text-center overflow-auto max-h-full">
                      {category.strCategoryDescription}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200 text-center">
                    {category.strCategory}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      )}
    </div>
  );
}
  