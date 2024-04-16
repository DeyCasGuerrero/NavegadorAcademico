"use client"
import styles from '@/app/page.module.css'
import MyToast from '../common/MyToast'
import Link from 'next/link'
//RCC
export default function Cliente({ post }) { //el post dará un tipo de variable any, eso es por que typescript es un languaje no dinamico



    return (
        <>
            <div className={styles.article}>
                <h2 className={styles.titulo}> titulo: {post.nombre}</h2>
                <p className={styles.autor}> autor: {post.autor}</p>
                <p className={styles.fecha}>fecha de publicación: {post.fecha_publicacion}</p>
                <p className={styles.tipo}>tipo: {post.tipo}</p>
                <p className={styles.numeroPaginas}>paginas :{post.numero_paginas}</p>
                <p className={styles.rama}>rama: {post.rama}</p>
                <Link href={`/Busqueda/perfil/${post.id}`}><MyToast></MyToast></Link>
            </div>

        </>
    )
}
