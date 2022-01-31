import { useState, useEffect } from "react"
import { getGifs } from "../components/helpers/GetGifs";

export const useFetchGifs = (category, loading) => {
    const [state, setState] = useState({
        data: [],
        loading : true
    });

    useEffect( () => {
        getGifs(category).then( imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    }, [category])

    return state; // {data, loading} 
}