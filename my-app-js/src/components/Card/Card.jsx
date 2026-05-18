import styles from './Card.module.css'

export const Card = ({ card, title, categories, desc, done, onAction }) => {
  return (
    <article className={styles.littleWhiteBlock}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.grayTextLite}>
        {categories?.map((cat, index) => (
          <span key={index}>{cat}</span>
        ))}
      </p>
      <p className={styles.littleTextHH}>{desc}</p>
      {done ? (
        <button
          className={styles.DoneselectedButton}
          type="button"
          onClick={() => onAction?.(card)}
        >
          Пройти заново
        </button>
      ) : (
        <button
          className={styles.selectedButton}
          type="button"
          onClick={() => onAction?.(card)}
        >
          Пройти
        </button>
      )}
    </article>
  )
}
