const Recipe = (props) => {
  const recipeList = props.recipe;
  const ingredients = [];
  const measurements = [];
  let steps = "";
  for (const [key, value] of Object.entries(recipeList)) {
    console.log(`${key}: ${value}`);
    if (key.includes("strIngredient")) {
      if (value !== "") {
        ingredients.push(value);
      }
    }
    if (key.includes("strMeasure")) {
      if (value !== " ") {
        measurements.push(value);
      } else {
        break;
      }
    }
    if (key === "strInstructions") {
      steps = value;
    }
  }
  //console.log(steps);
  console.log(ingredients);
  const ingredientsList = [];
  for (let i = 0; i < ingredients.length; i++) {
    const item = ingredients[i] + " " + measurements[i];
    ingredientsList.push(item);
  }
  console.log(ingredientsList);
  return (
    <div className="recipe">
        <h3>Ingredients</h3>
      <ol>
        {ingredientsList.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
      <h3>Steps</h3>
      <p>{steps}</p>
    </div>
  );
};

export default Recipe;
