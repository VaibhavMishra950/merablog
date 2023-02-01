import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'


export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <div className={styles.center} style={{padding: 0}}></div>
    <Component {...pageProps} />
  </>
}
