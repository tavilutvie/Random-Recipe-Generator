const Steps = (props) => {
    const recipeList = props.recipe;
    let steps = "";
    
    for (const [key, value] of Object.entries(recipeList)) {
      if (key === "strInstructions") {
        steps = value;
      }
    }
    let stepList =[];
    const stepList2 =[];
    const stepArray = steps.split(". ");

    for (let i = 0; i < stepArray.length; i++) {
        stepList = stepArray[i].split(".\r\n\r\n");
        for (let j=0; j <stepList.length; j++){
            stepList2.push(stepList[j]);
        }
    }

    return(
        <div className="my-5 relative mx-auto max-w-md px-4 md:max-w-3xl sm:px-6 lg:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Steps</h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Steps in order to make a delicious {recipeList.strMeal}</p>
                </div>
                {stepList2.map((steps, index) => (
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-6 sm:gap-2 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 sm:col-span-1">{index+1}.</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-5">{steps}.</dd>
                            </div>
                        </dl>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Steps;