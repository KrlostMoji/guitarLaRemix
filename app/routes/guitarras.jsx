import { Outlet, useOutletContext } from "@remix-run/react";
import styles from '~/styles/guitarras.css'


export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


const Tienda = () => {

    return (
        <main className="contenedor">
            <h2 className="heading">Nuestra Colección</h2>
            <Outlet 
                context={useOutletContext()}
            />
        </main>
    );
};

export default Tienda;