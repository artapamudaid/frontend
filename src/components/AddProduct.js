import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/products', {
            name: name,
            price: price
        });
        navigate('/');
    }

    return (
    <div>
        <form onSubmit={saveProduct}>
            <div className="field">
                <label className="label">Name</label>
                <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Input Product Name"
                />
            </div>
            <div className="field">
                <label className="label">Price</label>
                <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Input Product Price"
                />
            </div>

            <div className="field">
                <button className="button is-primary">Save</button>
            </div>
        </form>
    </div>
    )
}

export default AddProduct;