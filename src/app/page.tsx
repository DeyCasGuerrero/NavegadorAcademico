
import Image from 'next/image'
import styles from './page.module.css'
import Contenido from '../components/common/Biblioteca'
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container_books}>
          <Contenido></Contenido>
        </div>
      </main>
    </>
  )
}
