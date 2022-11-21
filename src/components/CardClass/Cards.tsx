/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { PicPoke } from './PicPoke'
import './style.scss'

export interface Pokemon {
    url: string
    name: string
}


export function Cards() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251%27%22')
            const data = await response.json()
            const pokemonList = data.results.slice(0, data.results.length).map((items: any) => items).flat()
            setPokemons(pokemonList)
        }

        fetchData()
    }, [])



    return (
        <>
        
            <ul className='dex'>
                {pokemons?.map((name: Pokemon) => {
                    return (
                        <div className="container">
                            <a href='/stats'>
                            <PicPoke url={name.url} />
                            <li className='cardPoke' key={name.name} >
                                {name.name}
                            </li>
                            </a>
                           

                        </div>
                    )
                })}


            </ul>

        </>
    );
}