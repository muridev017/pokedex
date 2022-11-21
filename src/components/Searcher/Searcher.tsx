import { SetStateAction, useEffect, useState } from 'react'


export const Searcher = (props : any) => {
    const [search, setSearch] = useState('dito')
    const { onSearch } = props
    const onChangeHandler = (e : any) => {
        setSearch(e.target.value)
        if (e.targe.value === 0) {
            onSearch(undefined)
        }
    }

// useEffect(() => {
//     const searchPoke = async () => {
//         const response = await fetch(url)
//         const data = await response.json()
//         const pokeSearch = data.

//     }
// })

const onButtonClickHandler = () => {
    onButtonClickHandler()
}

return (
    <>
        <div className="nav">
            <label>Searcher:</label>
            <input type="text" placeholder='Qual Poke?' onChange={onChangeHandler} />
            <button onClick={onButtonClickHandler}>Search #</button>
        </div>
    </>

)
}