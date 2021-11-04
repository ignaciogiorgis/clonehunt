import React from 'react'
import Buscar from '../Ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Boton from '../Ui/Boton';


const Header = () => {
    const ContenedorHeader =styled.div`
        max-width:1200px;
        width:95%;
        
        @media (min-width: 768px){
            display:flex;
            justify-content: space-between;
        }
    `;
    const Logo = styled.p`
        color:var(--naranja);
        font-size: 4rem;
        line-height:0;
        font-weight:700;
        margin-right:2rem;
    `;
    

    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0 ;
            `}
        
        
        >
                <ContenedorHeader>
                    <div>
                        <Link href="/">
                            <Logo>P</Logo>
                        </Link>
                        
                        <Buscar />
                        {/* Buscador aqui */}
                        <Navegacion />
                        {/* Nav aqui */}

                    </div>
                    <div>
                        <p>Hola : Ignacio</p>
                        {/* Menu de administracion */}
                        <Link href="/"> 
                            <Boton
                                bgColor='true'
                            >Cerrar Sesion</Boton> 
                        </Link>
                        <Link href="/"> 
                            <Boton
                                bgColor='true'
                            >Login</Boton> 
                        </Link>
                        <Link href="/" >
                            <Boton
                                
                            >Crear cuenta</Boton>
                        </Link>
                    </div>
                </ContenedorHeader>
        </header>
     );
}
 
export default Header;