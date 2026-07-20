import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {

        const res = await axios.get(
            "http://localhost:5000/api/items"
        );

        setItems(res.data.data);
    };

    return (

        <div className="container">

            <h2>Shopping Products</h2>

            <div className="product-grid">

                {
                    items.map((item) => (

                        <div className="card" key={item.itemid}>

                            <img
                                src={`http://localhost:5000/uploads/${item.img}`}
                                alt={item.itemname}
                            />

                            <h3>{item.itemname}</h3>

                            <p>{item.itemdescription}</p>

                            <h4>₹ {item.rate}</h4>

                            <button>
                                Add to Cart
                            </button>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default ProductList;