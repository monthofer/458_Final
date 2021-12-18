import React from "react"
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'
import utilStyles from '../styles/utils.module.css'
import { supabase } from "../utils/supabaseClient"
import {Auth} from '@supabase/ui'
import itemcard from '../components/ItemCard'
import { useItems } from '../context/ItemContext'
import { useUser } from '../context/UserContext'

export default function Home() {
  const { user } = Auth.useUser()

  const { items, setItems } = useItems()

  

  

  return (


    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="container mx-auto max-w-prose px-4 pt-12">
        {
          user ? ( <div>
          
            <button onClick={ async() => {let {error}= await supabase.auth.signOut()}}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">Logout</button>

            </div>
          ):(
            <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge"/>
          )
        }
      </main>

      <div className="cartcontainer">
        <div className ="cart">
            <Link href="/cart" >
                <a>cart</a>
            </Link>
        </div>
      </div>

      <div className="page">
        
        <div className="nav">
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
        

        <h1>Stylish Stationary</h1>
        <main>
          <section className = {utilStyles.pages}>
            <h4 className="notebook-page-title">
              <Link href="/notebooks">
                <a>Notebooks</a>
              </Link>
            </h4>

            <h4 className="card-game-page-title">
              <Link href="/cardgames">
                <a>Card Games</a>
              </Link>
            </h4>

            <h4 className="planners-page-title">
              <Link href="/planners">
                <a>Planners</a>
              </Link>
            </h4>

            <h4 className="pens-and-pencils-page-title">
              <Link href="/pensandpencils">
                <a>Pens and Pencils</a>
              </Link>
            </h4>
        </section>


        </main>
        <hr></hr>

    </div>

    <body>
    </body>

    <div className="space">
    </div>

    <div className="saleSection">
      <div className="onSaleBox">
      <h2>SALE</h2>
            <div className="column">
              <img src ="/images/Emily_Notebook.png" title="E N" width="200" 
                height="200"></img> 
            </div>
            <div className="column">
            <img src="/images/Multicolor_Organic_Pen_Pack.png" title="S N" width="200" 
              height="200"></img>  
            </div>
            <div className="column">
              <img src="/images/Minimal_Planner.png" title="S N" width="200" 
                            height="200"></img> 
            </div>
      </div>
    </div>

    <div className="space2">
    </div>

    <div className="reccomendedSection">
      <div className="reccomendBox">
        <div className="column">
                <img src ="/images/Sarah_Notebook.png" title="E N" width="200" 
                  height="200"></img> 
              </div>
              <div className="column">
              <img src="/images/Hot_Girl_Hangover.png" title="S N" width="200" 
                height="200"></img>  
              </div>
              <div className="column">
                <img src="/images/Hourly_Planner.png" title="S N" width="200" 
                              height="200"></img> 
              </div>
              <h2>FAVS</h2>
        </div> 
    </div>

    <footer>

    </footer>

        <style jsx>{`

          .notebook-page-title {
            padding:30px;
          }

          .card-game-page-title{
            padding:30px;
          }

          .planners-page-title{
            padding: 30px;
          }

          .pens-and-pencils-page-title{
            padding: 30px;
          }

          hr {
            display: block;
            width: 85vw;
            color: white;
            background-color: white;
            border: 3;
            border-color: white;       
          }

          .page {
            height: 100%;
            width: 100%;
            min-width:100vw;
          }
          main {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: right;
          }

          h1 {
            color: white;
            align-items: center;
            text-align: center;
          }

          h2 {
            color: pink;
            align-items: center;
            text-align: center;
            writing-mode: vertical-rl;
            text-orientation: upright;
          }

          a {
            color: white;
            text-decoration: none;
          }

          .saleSection {
            height: 100%;
            display: flex;
            justify-content: center;
          }

          .onSaleBox {
            height: 16em;
            width: 75vw;
            display: flex;
            flex-direction: row;
            background-color: white;
            align-items: center;
            -moz-border-radius: 10px;
            -webkit-border-radius: 10px;
            border-radius: 10px; /* future proofing */
            -khtml-border-radius: 10px;
          }

          .column {
            display: flex;
            flex: 33.33%;
            padding: 7px;
            justify-content: space-evenly;
          }

          .reccomendedSection {
            height: 100%;
            display: flex;
            justify-content: center;
          }

          .reccomendBox {
            height: 16em;
            width: 75vw;
            display: flex;
            flex-direction: row;
            background-color: white;
            align-items: center;
            -moz-border-radius: 10px;
            -webkit-border-radius: 10px;
            border-radius: 10px; /* future proofing */
            -khtml-border-radius: 10px;
          }

          .space{
            height: 15px;
            color: pink;
          }

          .space2 {
            height: 30px;
            color: pink;
          }

          footer {
            height: 70px;
          }

          .cartcontainer {
            display: flex;
            flex-direction: row;
            padding: 0px 20px;
          }

          .cart {
            align-items: right;
          }



        `}</style>
      </div> 
    
   
  )
}
  