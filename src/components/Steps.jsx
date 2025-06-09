const Steps = (props) => {
  const recipeList = props.recipe;
  const instructions = recipeList.strInstructions;

  // Split instructions into paragraphs
  const steps = instructions
    .split('\n')
    .map(step => step.trim())
    .filter(step => step.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-[#FDFDFD] shadow-lg rounded-2xl overflow-hidden">
        <div className="px-6 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Instructions</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                >
                  <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full font-medium text-sm">
                    {index + 1}
                  </span>
                  <p className="ml-4 text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;