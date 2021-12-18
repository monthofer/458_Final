import Link from 'next/Link'

export default function Header(){
    return (
        <header>
            <nav>
            </nav>
            <div className="button-group">
                <button className="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="search" fill="none" viewBox="0 0 24 24" stroke="pink">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>            
                </button>
            </div>

            <style jsx>{`
                .button-group{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    column-gap: 5px;
                    color: white;
                }

                .search-button{
                    width:2rem;
                    border:none;
                    color: pink;
                    align-item: right;
                }
                
                nav{
                    display:flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items:center;
                    column-gap: 20px;
                    color: white;
                }
            `}</style>
        </header>
    )
}