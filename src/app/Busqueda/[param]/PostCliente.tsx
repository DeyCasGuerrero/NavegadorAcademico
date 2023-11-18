import styles from '@/app/page.module.css'
import MyToast from '@/components/contenido/MyToast'
import Link from 'next/link'
export default function PostClient({ post }) {

    return (
        <div className={styles.article}>
            <h2 className={styles.titulo}>Titulo: {post.nombre}</h2>
            <p className={styles.autor}>Autor: {post.autor}</p>
            <p className={styles.fecha}>Fecha de publicación: {post.fecha_publicacion}</p>
            <p className={styles.tipo}>Tipo: {post.tipo}</p>
            <p className={styles.numeroPaginas}>Páginas: {post.numero_paginas}</p>
            <p className={styles.rama}>Rama: {post.rama}</p>
            <Link href={`/Busqueda/perfil/${post.id}`}><MyToast></MyToast></Link>
        </div>
    )
}