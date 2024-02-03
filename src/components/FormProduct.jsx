import React, { useState, useEffect } from 'react'
import axios from 'axios';

//rafce
const FormProduct = () => {

    const [data, setData] = useState([]);
    const [form, setForm] = useState({});


    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        await axios.get('http://localhost:5000/api/product')
            .then((res) => {
                console.log("data: ", res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const hendleSubmit = (e) => {
        e.preventDefault(); // dont refresh
        console.log(form);
    }



    return (
        <div>
            <h1>FormProduct </h1>

            <form onSubmit={hendleSubmit}>
                <input type='text' name='name' onChange={handleChange} placeholder='name input' /><br />
                <input type='text' name='detail' onChange={handleChange} placeholder='detail input' /><br />
                <input type='text' name='price' onChange={handleChange} placeholder='price input' /><br />
                <button>Submit</button>
            </form>

            {/* table data show */}
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>detail</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ?
                            data.map((element, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.name}</td>
                                    <td>{element.detail}</td>
                                    <td>{element.price}</td>
                                </tr>
                            )
                            : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FormProduct