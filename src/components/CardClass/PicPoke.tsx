import { useEffect, useState } from "react"

export function PicPoke({url}: {url:string}){
    const [imgPoke, setImgPoke] = useState('')
 

    useEffect(()=>{
        const fetchImage = async () =>{
            const response = await fetch(url)
            const data = await response.json()
            const pokemonImage = data.sprites.other['official-artwork'].front_default
            setImgPoke(pokemonImage)
        }
        fetchImage()
    }, [url])
    
    
    return(
        <>
            <img src={imgPoke} alt="Imagem do pokemon" />
        </>
    )
}

