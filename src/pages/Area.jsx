/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Map for special cases where area names don't match country codes
const areaToCountryCode = {
  'American': 'us',
  'British': 'gb',
  'Canadian': 'ca',
  'Chinese': 'cn',
  'Croatian': 'hr',
  'Dutch': 'nl',
  'Egyptian': 'eg',
  'Filipino': 'ph',
  'French': 'fr',
  'Greek': 'gr',
  'Indian': 'in',
  'Irish': 'ie',
  'Italian': 'it',
  'Jamaican': 'jm',
  'Japanese': 'jp',
  'Kenyan': 'ke',
  'Malaysian': 'my',
  'Mexican': 'mx',
  'Moroccan': 'ma',
  'Polish': 'pl',
  'Portuguese': 'pt',
  'Russian': 'ru',
  'Spanish': 'es',
  'Thai': 'th',
  'Tunisian': 'tn',
  'Turkish': 'tr',
  'Ukrainian': 'ua',
  'Uruguayan': 'uy',    
  'Vietnamese': 'vn',
  'Mediterranean': 'mediterranean',
  'Unknown': 'unknown'
};

export default function Area() {
    const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
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
            setData(data.meals);
        })
        .catch((error) => {
            setError(error);
        });
    }, [url]);

    const getFlagUrl = (area) => {
        const countryCode = areaToCountryCode[area] || 'unknown';
        if (countryCode === 'mediterranean') {
            return 'https://flagsapi.com/GR/flat/64.png'; // Using Greek flag for Mediterranean
        }
        if (countryCode === 'unknown') {
            return 'https://flagsapi.com/WW/flat/64.png'; // World flag for unknown
        }
        return `https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`;
    };

    return (
        <div className="bg-[#FDFDFD] py-12">
            {error ? <h2>Error fetching data</h2> : null}
            {data ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Cuisines by Area</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((area, index) => (
                            <Link 
                                key={index}
                                to={"/SearchArea/" + area.strArea} 
                                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-gray-50"
                            >
                                <img
                                    src={getFlagUrl(area.strArea)}
                                    alt={`${area.strArea} flag`}
                                    className="w-8 h-8 object-cover rounded-sm"
                                />
                                <span className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                                    {area.strArea}
                                </span>
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
  