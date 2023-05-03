import React from 'react';
import Link from '../src/componentes/Link';
import Footer from '../src/componentes/patterns/Footer';


function Title({ children, as }) {
    const Tag = as;
    return(
    <React.Fragment>
        <Tag>
            {children}
        </Tag>
        <style jsx>{`
            ${Tag} {
                color: red;                
            }
        `}</style>
    </React.Fragment>
        
    );
}

export default function HomePage() {
    return (
        <div>            
            <Title as="h1">Alura Cases - Home Page</Title>
            <Link href="/faq">
                Ir para a página de perguntas
            </Link>
            <Footer />
        </div>
    )
}