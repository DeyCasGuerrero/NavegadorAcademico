import Libro from '../../../components/contenido/interfaceBiblioteca';
import bibliotecaData from '../../../../data/biblioteca.json';
import styles from '../../page.module.css'
import PostClient from './PostCliente';

//PARA PODER ELIMINAR LOS CARACTERES DIACRITICOS
function quitarAcentos(cadena: string): string {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function filterByParams(params: string, campo: 'nombre' | 'tipo' | 'rama') {
    const parametroBuscada = quitarAcentos(params.toLowerCase());
    const respuesta: Libro[] = bibliotecaData.filter(item =>
        quitarAcentos(item[campo].toLowerCase()) === parametroBuscada
    );
    if (respuesta.length > 0) {
        return respuesta;
    } else {
        return null;
    }
}

async function Page({ params }) {
    const decodedParam = params.param ? decodeURIComponent(params.param) : '';

    const postsByTitulo = await filterByParams(decodedParam, 'nombre');
    console.log(postsByTitulo);

    const postsByType = await filterByParams(decodedParam, 'tipo');
    console.log(postsByType);

    const postsByBranch = await filterByParams(decodedParam, 'rama');
    console.log(postsByBranch);

    if (!postsByTitulo && !postsByType && !postsByBranch) {
        return <div className={styles.error}>
            <div className={styles.no_found}>Post not found</div>
        </div>;
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.container_books}>
                    {postsByTitulo && (
                        <>
                            {postsByTitulo.map((post, index) => (
                                <PostClient post={post} key={post.id}></PostClient>
                            ))}
                        </>
                    )}

                    {postsByType && (
                        <>

                            {postsByType.map((post, index) => (
                                <PostClient post={post} key={post.id}></PostClient>
                            ))}
                        </>
                    )}
                    {postsByBranch && (
                        <>

                            {postsByBranch.map((post, index) => (
                                <PostClient post={post} key={post.id}></PostClient>
                            ))}
                        </>
                    )}
                </div>
            </main>
        </>);
}

export default Page;