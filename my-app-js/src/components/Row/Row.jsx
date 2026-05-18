import styles from './Row.module.css'

const buttons = [
  { id: 'all', label: 'Все' },
  { id: 'work', label: 'Рабочая среда' },
  { id: 'libraries', label: 'Библиотеки' },
  { id: 'done', label: 'Пройденые' },
  { id: 'notDone', label: 'Не пройденые' },
]

export const Row = ({ activeFilter, onSelectFilter }) => {
  return (
    <div className={styles.filterRow}>
      {buttons.map(button => (
        <button
          key={button.id}
          type="button"
          className={
            activeFilter === button.id
              ? styles.littralySelectedButton
              : styles.notSelectedButton
          }
          onClick={() => onSelectFilter(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}
