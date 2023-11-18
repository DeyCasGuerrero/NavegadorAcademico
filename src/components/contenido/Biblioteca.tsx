import Libro from './interfaceBiblioteca';
import Datos from '@/components/contenido/BibliotecaCliente'

async function loadLibros() {
    try {
        const respuestaModule = await import('../../../data/biblioteca.json');
        const respuesta: Libro[] = respuestaModule.default;
        // await new Promise((resolve) => setTimeout(resolve, 3000)); Estaba probando con loading para sobrecarga de datos
        return respuesta;
    } catch (error) {
        console.error('Error:', error);
    }
}

//RSC
async function Biblioteca() {
    const posts = await loadLibros();
    console.log(posts)
    return (
        <>
            {
                posts?.map(post => (
                   <Datos post={post} key={post.id} ></Datos>
                ))
            }

        </>
    )
}

export default Biblioteca;