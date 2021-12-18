import Link from 'next/link'

export default function cardgames() {
  return (
    <>

<div className="CardGamesheader">
          <div className ="cart">
              <Link href="/cart" >
                <a>cart</a>
              </Link>      
          </div>

          <h3>
                <Link href="/">
                    <a>Home</a>
                </Link>
          </h3>

          <h1>Card Games</h1>

            <hr></hr>
            
            <style jsx>{`

                .CardGamesheader{
                    height: 40%;
                    width: 100%;
                    min-width:100vw;
                    text-align:center;
                }

                h1, h3, a {
                    color: white;
                    text-decoration: none;
                }
                 
                hr {
                    display: block;
                    width: 85vw;
                    color: white;
                    background-color: white;
                    border: 3;
                    border-color: white;
                }

            `}</style>                
      </div>
      
      <div className ="background">
        <div className="products">
            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Guess_The_Boo.png" title="G T B" width="200" 
                        height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Guess The Boo</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Hot_Girl_Hangover.png" title="H G H" width="200" 
                        height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Hot Girl Hangover</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/010.png" title="010" width="200" 
                            height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Tipsy Twister</h5>
                    <h6>$13.99</h6>
                </div>
            </div>
        </div>

        <style jsx>{`

            .background {
                height: 1000%;
                width: 100%;
                min-width:90vw;
                min-heigth: 90vw;
                color: white;
                display: flex;
                justify-content: center;
                margin: 0px 25px 0px 25px;
            }

            .products {
                display: flex;
                flex-wrap: wrap;
            }

            .products>* {
                flex: 0 0 33.3333%;
                margin: 10px;
            }

            .product-card {
                padding: 2%;
                flex-grow: 1;
                flex-basis: 16%;
                display: flex; 
            }

            .product-card {
                flex: 1 16%;
            }

            .product-image img {
                max-width: 100%;
            }

            @media (max-width: 920px) {
                .product-card {
                  flex: 1 21%;
                }
            }

        `}</style> 
    </div>
    </>
  )
}