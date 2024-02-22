import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'https://crud-seguridad-redes-production.up.railway.app/libros/'

const CompShowLibros = () => {
    
    const [libros, setLibro] = useState([])
    useEffect(()=>{
        getLibros()
    },[])


    //procedimiento para mostrar todos los libros
    const getLibros = async () => {
        const res = await axios.get(URI)
        setLibro(res.data)
    }

    const deleteLibro = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getLibros()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-file-pen"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { libros.map ( (libro) => (
                                <tr key={ libro.id}>
                                    <td> { libro.Titulo } </td>
                                    <td> { libro.Descripcion } </td>
                                    <td>
                                        <Link to={`/edit/${libro.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteLibro(libro.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowLibros