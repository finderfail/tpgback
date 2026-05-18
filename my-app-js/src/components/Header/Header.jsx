import styles from './Header.module.css'

export const Header = ({title, learn, task}) => {
    return (
        <header className={styles.header}>
                              <nav className={styles.nav}>
                                  <ul className={styles.menuButtons}>
                                      <li className={`${styles.menuButton} ${styles.firstLetter}`}>
                                          <h1><strong>{title}</strong></h1>
                                      </li>
                                      <li className={styles.menuButton}>
                                          <button type="button">{learn}</button>
                                      </li>
                                      <li className={styles.menuButton}>
                                          <button type="button">{task}</button>
                                      </li>
                                  </ul>
                              </nav>
                          </header>
    )
}
