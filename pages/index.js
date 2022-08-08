import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Item from '../components/Item'

export default function Home() {

const [pokemon, setPokemon] = useState([])

useEffect(()=>{
  async function getPockemon(){
    const resp = await fetch('https://raw.githubusercontent.com/kmirko/pokemon.json/master/pokemon.json');
    setPokemon(await resp.json())
  }
  getPockemon()
},[])


  return (
    <Layout >
    <h1 className='bg-blue-500'>Pockemon</h1>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Link href='/about'>ABOUT PAGE</Link>
    <Link href='/coment'>COMENT PAGE</Link>
    {JSON.stringify(pokemon)}
    {pokemon.map(pokem=>(
      <Item key={pokem.id} pokem={pokem}/>
    ))}
    </Layout>
  )
}
