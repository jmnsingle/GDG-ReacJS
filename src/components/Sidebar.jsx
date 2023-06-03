import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        alt="background-user-profile"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/jmnsingle.png" alt="" />

        <strong>Juliano Nogueira</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}