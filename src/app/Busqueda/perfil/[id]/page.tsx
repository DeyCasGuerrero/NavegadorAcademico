import Libro from '../../../../types/interfaceBiblioteca';
import bibliotecaData from '../../../../../data/biblioteca.json';
import styles from '@/app/page.module.css'
async function filterByID(id: number) {
    const parametroBuscada = Number(id);
    const respuesta: Libro | undefined = await bibliotecaData.find(item => item.id === parametroBuscada);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    if (respuesta) {
        return respuesta;
    } else {
        return null;
    }
}

async function LoadPage({ params }) {

    const post = await filterByID(params.id)

    return (
        <main className={styles.main}>
            <div className={styles.perfile}>
                <h1 className={styles.title_perfile}>{post?.nombre}</h1>
                <p className={styles.autor_perfile}>{post?.autor}</p>
                <p className={styles.fecha_perfile}>{post?.fecha_publicacion}</p>
                <div className={styles.container_down}>
                    <div className={styles.aside}>
                        <p className={styles.rama_perfile}>{post?.rama}</p>
                        <p className={styles.rama_perfile}>{post?.tipo}</p>
                        <p className={styles.rama_perfile}>{post?.numero_paginas} paginas</p>
                    </div>
                    <div className={styles.content}>
                        <p>{post?.contexto}</p>
                    </div>
                </div>

            </div>
        </main >
    )
}
export default LoadPage;