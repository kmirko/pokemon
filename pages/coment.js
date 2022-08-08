import Layout from "../components/Layout";
import Link from "next/link";
import {useRouter} from 'next/router'

export default function Coment({pokemon}){

    const router = useRouter()

    return (
        <Layout >
        <h1 className='bg-blue-500'>COMENT PAGE</h1>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Link href='/'><a>HOME PAGE</a></Link>

        {pokemon.map(pok=>(
          <h3 key={pok.id}>{pok.name}</h3>
        ))}
        </Layout>
      )
    }
    export async function getStaticProps(){
      const resp = await fetch('https://raw.githubusercontent.com/kmirko/pokemon.json/master/pokemon.json')
      const pokemon = await resp.json()
    
      return{
        props: {
          pokemon
        }
      }
    }