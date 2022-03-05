import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id }  = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/products/${id}`, {
            name: name,
            price: price
        });
        navigate('/');
    }

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
    }

    return (
    <div>
        <form onSubmit={updateProduct}>
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
                <button className="button is-primary">Update</button>
            </div>
        </form>
    </div>
    )
}

export default EditProduct;