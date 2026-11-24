import {useEffect, useState} from "react";

const UseFetch = (url) => 
{
    const [data, setData] = useState();
    
    useEffect(() => {
        fetch(url).then((res)=> res.json())
            .then((data) => setData(data))
    }, []) //returns only when the data has been collected and mounted
    return [data]
}

export default UseFetch
