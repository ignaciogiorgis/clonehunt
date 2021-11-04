import React from 'react'
import  Link from 'next/link';
import Header from './Header';
import {Global, css} from '@emotion/react';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <>
        <Global
            styles={css`
                :root{
                    --gris: #3d3d3d;
                    --gris2: #6f6f6f;
                    --gris3:#e1e1e1;
                    --naranja: #DA552f;
                }
                html{
                    font-size: 62.5%large;
                    box-sizing:border-box;
                }
                *,*:before, :after{
                    box-sizing:inherit;
                }
                body{
                    font-size:1.6rem;
                    line-height:1.5;
                }
                h1,h2, h3{
                    margin: 0 0 2rem 0;
                    line-height:1.5;
                    font-family: 'Zen Kurenaido', sans-serif;
                }
                ul{
                    list-style:none;
                    margin:0;
                    padding:0;
                }
                a{
                    text-decoration:none;
                }
            ` }
        />
        <Head>
            <html lang="es"/>
            <title>Proyecto con Next y Firebase</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="true" referrerPolicy="no-referrer" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/static/css/App.css" />
        </Head>

        <Header />

        <main>

            {props.children}
        </main>

        </>
      );
}
 
export default Layout;