import { useLoaderData } from '@remix-run/react'
import {getPost} from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers.js'

export function meta({data}){
    if(!data){
        return([{
            title:'Guitar LA - Blog No Encontrado',
            description: 'Guitarras , venta de guitarras, Blog no encontrado'
        }])
    }

    return[{
         
        title:`Guitar LA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, venta de guitarras, blog ${data.data[0].attributes.titulo}`
    }]        

}

export async function loader({params}){
    
    const {postUrl} = params
    console.log(postUrl);
    const post = await getPost(postUrl)
 
    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Blog no encontrado'
        })
    }
    
    return post
}


const Post = () => {

    const post = useLoaderData();
    const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes

    return (
        <article className='post mt-3'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen del blog ${titulo}`} />
            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='texto'>
                    {contenido}
                </p>
            </div>
        </article>
    );
};

export default Post;