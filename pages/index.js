import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
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
    {pokemon.map(pokem=>(
      <Item key={pokem.id} pokem={pokem}/>
    ))}
    </Layout>
  )
}
