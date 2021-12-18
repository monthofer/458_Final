import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function notebooks() {

    const getItem = async() =>{
        const {data, error} = await supabase
            .from('store data')
            .select('Name')
            .eq('id', 1);
        setDisplay(data.slice(-(1))[0].display_name);
    }

  return (
    <>
    <div className="Notebookheader">
        <h1>Notebooks</h1>
            <h2>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </h2>

            <hr></hr>
            
            <style jsx>{`

                .Notebookheader{
                    height: 40%;
                    width: 100%;
                    min-width:100vw;
                    text-align:center;
                }

                h1, a {
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
                    <img src="/images/Emily_Notebook.png" title="E N" width="200" 
                        height="200"></img> 
                </div>
                <div class="product-info">
                    <h5> Emily Notebook </h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Sarah_Notebook.png" title="S N" width="200" 
                        height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Sarah Notebook</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Annabelle_Notebook.png" title="A N" width="200" 
                            height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Annabelle Notebook</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Kate_Notebook.png" title="K N" width="200" 
                                height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Kate Notebook</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Jordyn_Notebook.png" title="J N" width="200" 
                                height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Jordyn Notebook</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Grace_Notebook.png" title="G N" width="200" 
                                height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Grace Notebook</h5>
                    <h6>$13.99</h6>
                </div>
            </div>

            <div class="product-card">
                <div class="product-image">
                    <img src="/images/Christina_Notebook.png" title="C N" width="200" 
                                height="200"></img> 
                </div>
                <div class="product-info">
                    <h5>Christina Notebook</h5>
                    <h6>$13.99</h6>
                </div>
            </div>
        </div>

        <style jsx>{`

            .background {
                height: 100%;
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