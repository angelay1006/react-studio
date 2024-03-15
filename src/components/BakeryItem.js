// TODO: create a component that displays a single bakery item

export default function BakeryItem({ item, addToCart }) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
}

