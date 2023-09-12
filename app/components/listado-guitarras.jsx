import Guitarra from "./guitarra";

const ListadoGuitarras = ({guitarras}) => {
    return (
        <>
            <div>
                
                {guitarras?.length && (
                    <div className="guitarras-grid">
                        {guitarras.map(guitarra => (
                            <Guitarra 
                                key={guitarra?.id}
                                guitarra = {guitarra?.attributes}
                            />
                        ))}
                    </div>
                )}
            </div> 
        </>
    );
};

export default ListadoGuitarras;