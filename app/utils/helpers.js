export const formatearFecha = fecha => {

    const fechaFormat = new Date(fecha)

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaFormat.toLocaleDateString('es-Es', opciones)

}