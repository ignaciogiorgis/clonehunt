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
            margin:0 auto;
            
        }
    `;
    const Logo = styled.p`
        color:var(--naranja);
        font-size: 4rem;
        line-height:0;
        font-weight:700;
        margin-right:2rem;

        &:hover{
            cursor:pointer;
        }
    `;
    
    const usuario = false;
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0 ;
            `}
        
        
        >
                <ContenedorHeader>
                    <div
                        css={css`
                            display:flex;
                            align-items:center;
                        `}
                    
                    >
                        <Link href="/">
                            <Logo>P</Logo>
                        </Link>
                        
                        <Buscar />
                        {/* Buscador aqui */}
                        <Navegacion />
                        {/* Nav aqui */}

                    </div>
                    <div
                        css={css`
                            display:flex;
                            align-items: center;
                        `}
                    >
                    {usuario ? (
                        <>
                        <p
                            css={css`
                                margin-right:2rem;
                            `}
                        >Hola : Ignacio</p>
                        {/* Menu de administracion */}
                        <Link href="/"> 
                            <Boton
                                bgColor='true'
                            >Cerrar Sesion</Boton> 
                        </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/Login"> 
                                <Boton
                                    bgColor='true'
                                >Login</Boton> 
                            </Link>
                            <Link href="/Crear-Cuenta" >
                                <Boton
                                    
                                >Crear cuenta</Boton>
                            </Link>
                       </>
                     )}
                    </div>
                </ContenedorHeader>
        </header>
     );
}
 
export default Header;