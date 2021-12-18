export default function ItemCard({ name, type, cost }) {
    return <article className="card">
        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>
        <div className="content">
            <h2 className="item-name">{name}</h2>
            <p  className="cost">${cost}</p>
            <button onClick={() => add(name)} >Add to Cart</button>
        </div>
    </article>
}