import Layout from "../components/Layout";

export default function Coment({pokemon}){

    return (
        <Layout >
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