//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({images, isLoading});

    // ESTO SE MOVIÓ A useFetchGifs.js
    /*const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => {
        //getGifs(category);
        getImages();
    }, []);*/

    //getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid">
                { images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
            
        </>
    )
}
