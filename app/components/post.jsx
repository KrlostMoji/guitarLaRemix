import {Link} from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers.js'
export default function Post({post}){
    const {titulo, contenido, imagen, url, publishedAt} = post
    
    return (
        <article className='post'>
            <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen del blog ${titulo}`} />
            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className='resumen'>{contenido}</p>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <Link className='enlace' to={`/blog/${url}`}>Visitar</Link>
            </div>
            
            
        </article>
    );
};
