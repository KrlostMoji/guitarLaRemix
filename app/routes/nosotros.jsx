import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
    return[
        ({
            title: 'Guitar LA - Sobre nosotros',
            description: 'Venta de guitarras, información.'
        })
    ]
    
}

export function links(){
    return[
        {
            rel:'stylesheet',
            href: styles
        },
        {
            rel:'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className='contenido'>
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed varius orci. Mauris mattis eleifend posuere. Integer vel magna sed nisl ornare euismod vitae ut quam. Quisque sed nunc id nisl varius molestie. Duis eu eros hendrerit, semper nunc ut, suscipit est. Sed molestie nisi at nisl luctus elementum. Sed scelerisque felis et velit fermentum gravida. Ut gravida ante id gravida interdum. Aliquam ut lorem lacus. Nunc tortor felis, ullamcorper sed pulvinar in, efficitur quis magna. Nam at finibus augue. Suspendisse vitae auctor elit. Nulla ac ex consequat, dictum elit eu, scelerisque nibh.
                    </p>
                    <p>
                        Praesent nibh quam, facilisis a diam id, pharetra dictum turpis. Sed sed ex et elit pulvinar congue eu ut sem. Vivamus laoreet quam et est malesuada, nec tristique urna egestas. Aenean tincidunt imperdiet nulla eget facilisis. In vel nulla id justo placerat venenatis id in nunc. Vivamus auctor lacus quis felis gravida efficitur porta in arcu. Suspendisse convallis nec nisl ultricies ornare. Etiam ut est nec felis placerat pharetra a in tellus. Ut a aliquam arcu. Aliquam lacinia hendrerit dui at cursus. Curabitur sed sem at justo tincidunt euismod. Nulla cursus eleifend velit eget laoreet. Vestibulum porttitor sem velit, vitae iaculis ligula vulputate pharetra. Mauris vitae auctor nunc. 
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Nosotros;