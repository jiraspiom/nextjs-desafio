import { useRouter } from 'next/router'

function Produtos() {   
    const route = useRouter();
    const id = route.query.id;

    return <div> Id do produto é {id} </div>
}

export default Produtos