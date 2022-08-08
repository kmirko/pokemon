import Layout from "../components/Layout";
import Item1 from "../components/Item1";

export default function About({pokemon}){

    return (
        <Layout >
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