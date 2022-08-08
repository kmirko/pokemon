
import Link from 'next/link'

export default function Details({pokemon}){

   
    return(
        <div>

            <div className='p-20'>{pokemon.name}</div>
            <Link href={`/`}>HOME PAGE</Link>
        </div>
    )
}

export async function getServerSideProps({params}){
    const res = await fetch(`https://raw.githubusercontent.com/kmirko/pokemon.json/master/${params.id}.json`)

    return{
        props:{
            pokemon: await res.json()
        }
    }
}