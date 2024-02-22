import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'crud-seguridad-redes-production.up.railway.app/libros/' 

const CompEditBlog = () => {
    const [Titulo, setTitulo] = useState('')    
    const [Descripcion, setDescripcion] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            Titulo: Titulo,
            Descripcion: Descripcion
            
        })
        navigate('/')
    }

    useEffect( ()=>{
        getLibroById()
    },[])

    const getLibroById = async () => {
        const res = await axios.get(URI+id)
        setTitulo(res.data.Titulo)
        setDescripcion(res.data.Descripcion)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input
                    value={Titulo}
                    onChange={ (e)=> setTitulo(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Descripcion</label>
                <textarea
                    value={Descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditBlog