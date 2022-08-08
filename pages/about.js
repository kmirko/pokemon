import Layout from "../components/Layout";
import Link from "next/link";
import {useRouter} from 'next/router'
import Item1 from "../components/Item1";

export default function About({pokemon}){

    const router = useRouter()

    return (
        <Layout >
        <h1 className='bg-blue-500'>Pockemon</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Link href='/'><a>HOME PAGE</a></Link>

        {pokemon.map(pok=>(
          <Item1 key={pok.id} pokem={pok}/>
        ))}
        </Layout>
      )
    }
    export async function getServerSideProps(){
      const resp = await fetch('https://raw.githubusercontent.com/kmirko/pokemon.json/master/pokemon.json')
      const pokemon = await resp.json()
    
      return{
        props: {
          pokemon
        }
      }
    }