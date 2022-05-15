import React, {  useEffect } from 'react';
import Producto from './Producto';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
import { Link } from 'react-router-dom';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect( ()=> {
        //podriamos hacer una request a la api para ver si hay token y si es valido
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    // obtener el state
    const productos = useSelector( state => state.productos.productos );
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return ( 
       <>
           <h2 className="text-center my-5">Listado de Productos</h2>

           { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
           
           { cargando ? <p className="text-center">Cargando....</p> : null }

            <Link to={"/productos/nuevo"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block mb-5 float-end"
            >Agregar Producto &#43;</Link>

           <table className="table table-striped">
               <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
               </thead>
               <tbody>
                   { productos.length === 0 ? 'No hay productos' : (
                       productos.map(producto => (
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   ) }
               </tbody>
           </table>
       </>
     );
}
 
export default Productos;