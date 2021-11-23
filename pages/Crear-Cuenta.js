import React from 'react';
import Layout from '../comnponents/Layout/Layout';
import  {Formulario, Campo, InputSubmit , Error} from '../comnponents/Ui/Formulario';
import  {css} from '@emotion/react';

import useValidacion from '../Hooks/useValidacion';
import validarCrearCuenta from '../Validacion/validacionCrearCuenta';

export default function CrearCuenta() {

  const STATE_INICIAL = {
    nombre: '',
    email: '',
    password:''
  }
 
 
  const {  
    valores,
    errores, 
    submitForm,
    handleChange,
    handleSubmit,
    handleBlur
    } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
    
  const {nombre, email, password} = valores;  
    
  function crearCuenta(){
    console.log('creando cuenta...')
  }



  return (
    <div >
      <Layout>
        <>
          <h1
            css={css`
                text-align:center;
            `}
          >Crear Cuenta</h1>
          <Formulario onSubmit={handleSubmit}
                      noValidate
            >
          <Campo>
              <label htmlFor="nombre">Nombre</label>
                <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              </Campo>
              {errores.nombre && <Error>{errores.nombre}</Error>}
              <Campo>
              <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              </Campo>
              {errores.email && <Error>{errores.email}</Error>}
              <Campo>
              <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              </Campo>
              {errores.password && <Error>{errores.password}</Error>}
             
              <InputSubmit
                type="submit"
                value="Crear Cuenta"
              />
              
          </Formulario>
        </>
      </Layout>
    </div>
  )
}