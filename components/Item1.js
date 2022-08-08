import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Item({pokem}){

    const router = useRouter()
        return(
            <div>
                <h1>{pokem.name}</h1>
                <Link href={`/pokemon1/${pokem.id}`}>Details</Link>
            </div>  
        )
    
 

    
}