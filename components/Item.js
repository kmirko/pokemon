
import Link from 'next/link'

export default function Item({pokem}){

    return(
        <div>
            <h1>{pokem.name}</h1>
            <Link href={`/pokemon/${pokem.id}`}>Details</Link>
           

        </div>
    )
}