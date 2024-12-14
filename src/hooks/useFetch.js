import { useState, useEffect } from 'react'

export const useFetch = (apiPath, queryTerm= "") => {
    const [datamov,setData] = useState([]);
    
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
        async function fetchMovie() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        fetchMovie();
    }, [apiPath, queryTerm]);

  return  { data: datamov }
}

