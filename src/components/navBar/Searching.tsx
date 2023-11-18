"use client"
import styles from '../../app/page.module.css'
import Eventos from '@/components/navBar/ScriptsCliente'
export default function NavBar() {

    const{
        handleChange,
        handleKeyDown,
        inputValue,
        scrollingDown,
    }=Eventos();
    
    return (
        <nav className={`${styles.navBar} ${scrollingDown ? styles.abajo : ''}`}>
            <div className={styles.search}>
                <label>
                    <input type="search" className={styles.search_box} name="search"
                        placeholder="Coloca un articulo"
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        value={inputValue} />
                </label>
            </div>
        </nav>
    )
}