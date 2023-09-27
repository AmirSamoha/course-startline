const API_KEY = '39709500-3fa7c7110c7ab095eb9da8985'




const fetchData = async() => {

    let querytype =  'green+flowers'
    const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`
    const queryUrl = `&q=${querytype}=&image_type=photo`

    try {
        const response = await fetch(basicUrl + queryUrl)
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error.message, "Error fetching")
    }


}

fetchData()