import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "./Recipe";

const Details = () => {
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

  return (
    <div>
      {error ? <h2>Error fetching data</h2> : null}
      {data ? (
        <>
          <img src={data[0].strMealThumb} alt={data[0].strMeal} />
          <h2>{data[0].strMeal}</h2>
          <Recipe recipe={data[0]}/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
