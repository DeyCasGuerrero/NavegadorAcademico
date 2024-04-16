"use client"
import {Toaster, toast } from 'sonner';
import styles from '@/app/page.module.css'
export default function MyToast() {
  return (
    <button className={styles.boton} onClick={() => toast.success('Loading... ')}>
      ENTRAR
    </button >
  );
}