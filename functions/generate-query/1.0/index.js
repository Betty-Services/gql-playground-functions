const generateQuery = async ({ query, variables, isAction }) => {
    if(!query) {
        throw new Error('The query is required');
    }

    if(isAction && !query.includes('mutation')) {
        throw new Error('The provided query is not a mutation');
    }
    
    // Define the input object.
    let inputValues = {};

    // Add the variables to the inputValues object.
    if (Array.isArray(variables) && variables.length > 0) {
        for (const pair of variables) {
            inputValues[pair.key] = pair.value;
        }
    }

    // Define an empty input object.
    let input = {};


    if(!isAction) {
        // When a login query is used, the variables should be sent as is
        input = inputValues;
    } else {
        // When a normal query is used, the variables should be wrapped in an input object
        input = { input: inputValues };
    }

    // Define the result object.
    const result = {
        operationName: null,
        variables: Object.keys(input).length > 0 ? input : null,
        query: query
    }

    return { result };
}

export default generateQuery;
