import React from 'react';
import Link from '../src/componentes/Link';

function GlobalStyle() {
    return(
        <style global jsx>{`
            body{
                font-family: sans-serif;
            }
        `}</style>
    );
}

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
            <GlobalStyle />
            <Title as="h1">Alura Cases - Home Page</Title>
            <Link href="/faq">
                Ir para a página de perguntas
            </Link>
        </div>
    )
}