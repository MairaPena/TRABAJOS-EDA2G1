import React,{ useEffect, useState } from "react"
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs(category)
        setImages(images);
    }

    useEffect(()=>{
        getImeges();
    }, [])

    return {
        images: images,
        isLoading: false
    }
}