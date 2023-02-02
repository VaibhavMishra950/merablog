import React from 'react'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} | Made with &#128151; by <a href="https://itsvaibhav.me/">Vaibhav Mishra</a>
    </div>
  )
}

export default Footer