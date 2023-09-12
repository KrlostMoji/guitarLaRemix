import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server.js'
import ListadoPosts from '../components/listado-posts';

export function meta(){

    return[{
         
        title:`Guitar LA - Blog`,
        description: `Guitarras, venta de guitarras, blogs`
    }]        

}


export async function loader(){
    const posts = await getPosts()
    
    return posts.data
}


const Blog = () => {

    const posts = useLoaderData()

    return (
            
            <ListadoPosts
            posts={posts}/>

    );
};

export default Blog;