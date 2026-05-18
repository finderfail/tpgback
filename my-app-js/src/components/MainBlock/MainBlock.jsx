import styles from './MainBlock.module.css'

export const MainBlock = ({title, categories, desc, prButton}) => {
    return (
        <div className={styles.mainBlock}>
                <h2>{title}</h2>
                <p className={styles.smallText}>{categories?.map((cat, index) => <span key={index}>{cat}</span>)}</p>
                <p className={styles.description}>{desc}</p>
                <button className={styles.primaryButton} type="button">{prButton}</button>
        </div>
    )
}
