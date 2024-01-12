const constructPlaygroundURL = ({ appIdentifier, appUuid }) => {
    if (!appIdentifier || !appUuid) throw new Error('Missing appIdentifier or appUuid')
    return `https://${appIdentifier}.betty.app/api/runtime/${appUuid}`
}

const constructHeaders = (headers) => {
    const result = {
        'Content-Type': 'application/json',
    }
    headers.forEach(header => {
        result[header.key] = header.value
    })

    return result
}

const executeQuery = async ({ appIdentifier = "", appUuid = "", query = "", headers: h = [] }) => {
    const playgroundURL = constructPlaygroundURL({ appIdentifier, appUuid })
    console.log(playgroundURL)
    const headers = constructHeaders(h)
    console.log(headers)
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(query)
    }
    console.log(options)

    const result = await fetch(playgroundURL, options)
        .then(res => res.json())
        .catch(err => {
            throw new Error(err)
        })

    console.log(result)


    return {
        result
    }
}

export default executeQuery;