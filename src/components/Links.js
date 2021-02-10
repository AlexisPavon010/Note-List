import React, { useEffect, useState } from 'react'
import LinkForm from './LinkForm'
import { toast } from 'react-toastify'

import { db } from '../firebase'


export default function Links() {

    const [links, setLinks] = useState([])

    const [currentId, setCurrentId] = useState("")


    const addOrEditLink = async (values) => {
        if (currentId === '') {
            await db.collection('Links').doc().set(values)
            toast('New Link Add', {
                type: 'success',
                autoClose: 1000
            });
        } else {
            await db.collection('Links').doc(currentId).update(values)
            toast('Link Updated', {
                type: 'info',
                autoClose: 1000
            });
            setCurrentId('')
        }
    }


    //borrar los datos de firebase por id
    const OnDelet = async (id) => {
        await db.collection('Links').doc(id).delete();
        toast('Link Remove success', {
            type: 'error',
            autoClose: 1000
        })

    }




    // Obtener todos los Datos de firebase
    const getLinks = async () => {
        db.collection('Links').onSnapshot((res) => {
            const docs = []
            res.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setLinks(docs)
        });

    }
    //cuando se carga el componente se ejecuta esta funcioon
    useEffect(() => {
        getLinks()

    }, [])


    return (
        <div>
            <LinkForm addOrEditLink={addOrEditLink} setCurrentId={setCurrentId} currentId={currentId} />
            <div className="mt-4">
                {links.map(link => (
                    <div className="card mb-1" key={link.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4>{link.name}</h4>
                                <div>
                                    <button className="btn btn primary btn-danger" onClick={() => OnDelet(link.id)}>X</button>
                                    <button onClick={() => setCurrentId(link.id)}>Edit</button>
                                </div>
                            </div>
                            <p>{link.description}</p>
                            <a href={link.url} target="_blank">{link.url}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
