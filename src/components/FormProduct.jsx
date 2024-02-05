import React, { useState, useEffect } from 'react'
import axios from 'axios';

//rafce
const FormProduct = () => {

    const [data, setData] = useState([]);
    const [form, setForm] = useState({});


    useEffect(() => {
        loadData();
    }, []);

    const loadData = async() => {
        await axios.get(import.meta.env.VITE_APP_API+'/product') //http://localhost:5000/api
            .then((res) => {
                console.log("data: ", res.data);
                // console.log(process.env.REACT_APP_API);
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

    const handleSubmit = async(e) => {
        e.preventDefault(); // dont refresh
        // console.log(form);
        await axios.post('http://localhost:5000/api/product', form)
            .then((res)=>{
                console.log("post success")
                console.log(res);
                loadData();
            })
            .catch((err)=>console.log(err))
    }

    const handleRemove = async (id) => {
        // console.log("id: ", id);
        await axios.delete('http://localhost:5000/api/product/'+id)
            .then((res)=>{
                console.log("delete success")
                console.log(res);
                loadData();
            })
            .catch((err)=>console.log(err))
    }



    return (
        <div>
            <h1>FormProduct </h1>

            <form onSubmit={handleSubmit}>
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
                        <th>action</th>
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
                                    <td onClick={()=>handleRemove(element._id)}>delete</td>
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