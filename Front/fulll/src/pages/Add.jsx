import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../sass/add.scss'

const Add = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch("http://localhost:7000/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }

    function handleAdd(val) {
        fetch("http://localhost:7000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(val),
        })
        .then((res) => res.json())
            .then((api) => {
                getAll()
            });

    }

    function deletedById(id) {
        fetch("http://localhost:7000/" + id, { method: "DELETE"})
        .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }


    return (
        <div className='add'>
            <Formik
                initialValues={{ icon: '', name: '', price: '', category: '' }}
                validationSchema={Yup.object({
                    icon: Yup.string().required('Required'),
                    name: Yup.string().required('Required'),
                    price: Yup.number().required('Required'),
                    category: Yup.string().required('Required'),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleAdd(values)
                        setSubmitting(false);
                    }, 400); 
                }}
            >
                <Form>
                    <label htmlFor="icon">Icon</label>
                    <Field name="icon" type="text" />
                    <ErrorMessage name="icon" />

                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="text" />
                    <ErrorMessage name="prie" />


                    <label htmlFor="category"> Category</label>
                    <Field name="category" type="text" />
                    <ErrorMessage name="category" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <table border={1}> 
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>delete</th>


                </tr>
                {data.map(item => (
                    <tr>
                        <td><i className={item.icon}></i></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td onClick={() => deletedById(item._id)}>X</td>
                    </tr>

                ))}


            </table>
        </div>
    )
}

export default Add