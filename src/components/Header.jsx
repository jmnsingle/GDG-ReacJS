import logo from '../assets/logo.jpg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="GDG-Logo" />
      <strong>GDG React</strong>
    </header>
  )
}