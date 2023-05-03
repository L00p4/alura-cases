import Link from '../src/componentes/Link'

export default function Page404 () {
    return (
        <div>
            <h1>Algo deu errado, você caiu na "página" 404</h1>
            <Link href='/'>
                Ir para home
            </Link>
        </div>
    )
}