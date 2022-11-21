import './style.scss'
import '../ToggleSwitch/ToggleSwitch.tsx'
import {TbPokeball} from 'react-icons/tb'
import { SetStateAction, useEffect, useState } from 'react'
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch'
import { Searcher } from '../Searcher/Searcher'

export function Header() {   

    
    return (
    <>
        <section className='header'>
        <h1 className='title'><a href="/"><TbPokeball/> Pokédex</a></h1>
        <Searcher/>
        <ToggleSwitch/>
        </section>
    </>
    )
}