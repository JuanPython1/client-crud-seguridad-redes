import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'crud-seguridad-redes-production.up.railway.app/libros/' 

const CompCreateLibro = () => {
    const [Titulo, setTitulo] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Titulo: Titulo, Descripcion: Descripcion })
        navigate('/')
    }

    return (
        <div>
            <h3>Create Post</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input 
                        value={Titulo} 
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    </div> 
                    <div className='mb-3'>
                    <label className='form-label'>Descripcion</label>
                    <textarea 
                        value={Descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className='form-control'
                    /> 

                </div>
                <button type='submit' className='btn btn-primary'> Store</button>
            </form>
        </div>
    )
}

export default CompCreateLibro