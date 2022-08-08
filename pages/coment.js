import Layout from "../components/Layout";
import Item2 from '../components/Item2'

export default function Coment({pokemon}){

    return (
        <Layout >
        {pokemon.map(pok=>(
          <Item2 key={pok.id} pokem={pok}/>
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