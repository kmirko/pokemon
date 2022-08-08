import Link from 'next/link'

export default function Item({pokem}){

        return(
            <div  className='grid grid-cols-2 gap-5'>
                <div>
                <h1>{pokem.name}</h1>
                </div>
                <div>
                <Link href={`/pokemon1/${pokem.id}`}>Details</Link>
                </div>
            </div>  
        )
    
 

    
}