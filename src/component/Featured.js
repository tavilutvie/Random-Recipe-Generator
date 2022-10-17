import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Featured = () => {
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
    <div id="featured" className="card">
      {error ? <h2>Error fetching data</h2> : null}
      {data ? (
        <>
          <img src={data[0].strMealThumb} alt={data[0].strMeal} />
          <p><em>featured</em></p>
          <h2>{data[0].strMeal}</h2>
          <Link to={"/details/" + data[0].idMeal}>
            <button>Details &gt;</button>{" "}
          </Link>
          <br></br>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Featured;
