import {useRouter} from 'next/router'
import { useState, useEffect} from 'react'
import Link from 'next/link'

export default function Details(){

    const {query: {id}} = useRouter()

    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        async function getPokeman(){
            const res = await fetch(`https://raw.githubusercontent.com/kmirko/pokemon.json/master/${id}.json`)
            setPokemon(await res.json())
        }
        if(id){
            getPokeman()

        }
    },[id])

    if(!pokemon){
        return null
    }
   
    return(
        <div>

            <div className='p-20'>{pokemon.name}</div>
            <Link href={`/`}>HOME PAGE</Link>
        </div>
    )
}