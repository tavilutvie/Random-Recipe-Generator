const Recipe = (props) => {
    const recipeList = props.recipe;
    
    const ingredients = [];
    const measurements = [];
    
    for (const [key, value] of Object.entries(recipeList)) {
      if (key.includes("strIngredient") && value?.trim()) {
        ingredients.push(value.trim());
      }
      if (key.includes("strMeasure") && value?.trim()) {
        measurements.push(value.trim());
      }
    }
    
    const ingredientsList = ingredients.map((ingredient, index) => ({
      ingredient,
      measurement: measurements[index] || ''
    }));

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#FDFDFD] shadow-lg rounded-2xl overflow-hidden">
          
          <div className="px-6 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ingredients</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ingredientsList.map(({ ingredient, measurement }, index) => (
                  <div 
                    key={`${ingredient}-${index}`}
                    className="flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full font-medium text-sm">
                      {index + 1}
                    </span>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{ingredient}</p>
                      {measurement && (
                        <p className="text-sm text-gray-500">{measurement}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Recipe;
  