import React, { useState, useEffect } from 'react'
import { db } from '../firebase'





export default function LinkForm(props) {
    const initialState = {
        name: '',
        url: '',
        description: ''


    }

    const [values, setValues] = useState(initialState)


    const handleOnCghange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addOrEditLink(values)
        setValues(initialState);
    }

    const getLinkById = async id => {
        const doc = await db.collection('Links').doc(id).get()
        setValues(doc.data())
    }


    useEffect(() => {
        if (props.currentId === "") {
            setValues({ ...values })
        } else {
            getLinkById(props.currentId)
        }
    }, [props.currentId])

    return (
        <form onSubmit={handleSubmit}>
            <div className="card card-body">
                <div className="form-group input-group">
                    <div className="input-group-text bg-ligth">
                        <i className="material-icons">insert_link</i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="name"
                        value={values.name}
                        onChange={handleOnCghange}
                    />
                </div>
                <div className="form-group input-group">
                    <div className="input-group-text bg-ligth">
                        <i className="material-icons">insert_link</i>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="httppasdsa"
                        name="url"
                        value={values.url}
                        onChange={handleOnCghange}
                    />
                </div>
                <div className="form-group input-group">
                    <input type="text"
                        className="form-control"
                        placeholder="description"
                        name="description"
                        value={values.description}
                        onChange={handleOnCghange}
                    />
                </div>
                <button className="btn btn-primary btn-block">
                    {props.currentId === '' ? 'Save' : 'Update'}
                </button>
            </div>
        </form>
    )
}
