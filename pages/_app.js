import '../styles/globals.css'
import { useState } from 'react'
import { Auth } from '@supabase/ui'
import { supabase } from "../utils/supabaseClient"
import { UserContext } from '../context/UserContext'
import { ItemContext } from '../context/ItemContext'


function MyApp({ Component, pageProps }) {
  return (<Auth.UserContextProvider supabaseClient={supabase}>
    <Component {...pageProps} />
  </Auth.UserContextProvider>
  )

  const [user, setUser] = useState({
    name: "Monthofer",
    cart: []
  })

  const userValue = {
    user, setUser
  }

  const [items, setItems] = useState([
    {
      name: 'Emily Notebook',
      type: 'notebook',
      cost: 13.99,
      onSale: 0,
      discount: 0, 
      description: 'This lined 8inch by 12inch notebook is made with 100% recyled paper!',
      img: 'https://cdn.shopify.com/s/files/1/2622/8410/products/bloomr-usa-plants-beige-potted-monstera-plant-luxury-artificial-flowers-luxury-artificial-plants-luxury-artificial-trees-silk-orchids-wholesale-artificial-flowers-6988821004377_2024x2024.jpg?v=1557203026'
    }

  ])

  const itemsValue = {items, setItems}

  return <UserContext.Provider value={userValue}>
    <ItemContext.Provider value={itemsValue}>
      <Component {...pageProps} />
    </ItemContext.Provider>
  </UserContext.Provider>
}


export default MyApp

