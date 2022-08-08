import Link from 'next/link'

export default function Details({pokemon}){  
    return(
        <div>
            <div className='p-20'>{pokemon.name}</div>
            <Link href={`/`}>HOME PAGE</Link>
        </div>
    )
}

export async function getStaticPaths(){
    const resp = await fetch('https://raw.githubusercontent.com/kmirko/pokemon.json/master/pokemon.json')
    const pokemon = await resp.json()

    return{
        paths: pokemon.map(pok=>({
            params: {id: pok.id.toString()}
        })),
        fallback: false
    }
}

export async function getStaticProps({params}){
    const res = await fetch(`https://raw.githubusercontent.com/kmirko/pokemon.json/master/${params.id}.json`)

    return{
        props:{
            pokemon: await res.json()
        },
        revalidate: 10
    }
}