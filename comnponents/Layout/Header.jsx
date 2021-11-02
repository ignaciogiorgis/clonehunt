import React from 'react'
import Buscar from '../Ui/Buscar';
import Navegacion from './Navegacion';
import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {



    return ( 
        <header>
                <div>
                    <div>
                        <p>P</p>
                        <Buscar />
                        {/* Buscador aqui */}
                        <Navegacion />
                        {/* Nav aqui */}

                    </div>
                    <div>
                        <p>Hola : Ignacio</p>
                        {/* Menu de administracion */}
                        <button type="submit">Cerrar Sesion</button>
                        <Link href="/">Login</Link>
                        <Link href="/">Crear Cuenta</Link>
                    </div>
                </div>
        </header>
     );
}
 
export default Header;