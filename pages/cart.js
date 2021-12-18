import Link from 'next/link'

export default function cart() {
  return (
    <>
      <div className="cartheader">
          <h3>
                <Link href="/">
                    <a>Home</a>
                </Link>
          </h3>

          <h1>Cart</h1>

        <hr></hr>

        <style jsx>{`

                .cartheader{
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
    </>
    )
}