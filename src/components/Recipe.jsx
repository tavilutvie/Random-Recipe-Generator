const Recipe = (props) => {
    const recipeList = props.recipe;
    
    const ingredients = [];
    const measurements = [];
    
    for (const [key, value] of Object.entries(recipeList)) {
    //   console.log(`${key}: ${value}`);
      if (key.includes("strIngredient")) {
        if (value !== "") {
            ingredients.push(value);
            
        }
      }
      if (key.includes("strMeasure")) {
        if (value !== "") {
          measurements.push(value);
          
        } else {
          break;
        }
      }
    }
    
    const ingredientsList = [];
    for (let i = 0; i < ingredients.length; i++) {
      ingredientsList.push(ingredients[i], measurements[i]);
    }

    return (
        <div className="relative mx-auto max-w-md px-4 md:max-w-3xl sm:px-6 lg:px-0">
        <div className="pt-12 sm:pt-16 lg:pt-20">
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Ingredients</h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Ingredients to make a perfect {recipeList.strMeal}</p>
                </div>
                
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="py-4 sm:py-5 grid grid-cols-2 sm:grid-cols-4 gap-2 px-6">
                {ingredientsList.map((ingredients) => (
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{ingredients}</dd>
                    </dl>
                    ))}
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default Recipe;
  