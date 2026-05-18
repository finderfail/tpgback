import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import { Card } from './components/Card/Card.jsx'
import style from './App.module.css'
import { Header } from './components/Header/Header.jsx'
import { ProgressBar } from './components/ProgressBar/ProgressBar.jsx'
import { MainBlock } from './components/MainBlock/MainBlock.jsx'
import { Row } from './components/Row/Row.jsx'
import { Circle } from './components/Circle/Circle.jsx'

const defaultCatalogCards = [
  {
    id: 1,
    title: 'Начало работы',
    categories: ['Для новичка', ' Основы работы'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: true,
    group: 'work',
  },
  {
    id: 2,
    title: 'Работа с библиотеками GPN',
    categories: ['Профессионалу', ' Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: false,
    group: 'libraries',
  },
  {
    id: 3,
    title: 'Введение в рабочую среду',
    categories: ['Профессионалу', ' Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: false,
    group: 'libraries',
  },
  {
    id: 4,
    title: 'Начало работы',
    categories: ['Для новичка', ' Основы работы'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: false,
    group: 'work',
  },
  {
    id: 5,
    title: 'Работа с библиотеками GPN',
    categories: ['Профессионалу', ' Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: false,
    group: 'libraries',
  },
  {
    id: 6,
    title: 'Введение в рабочую среду',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: true,
    group: 'libraries',
  },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [cards, setCards] = useState(defaultCatalogCards)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/info')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setCards(data)
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err)
        setError(err.message)
        setCards(defaultCatalogCards)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  const filteredCards = cards
    .filter(card => {
      if (activeFilter === 'all') return true
      if (activeFilter === 'work') return card.group === 'work'
      if (activeFilter === 'libraries') return card.group === 'libraries'
      if (activeFilter === 'done') return card.done
      if (activeFilter === 'notDone') return !card.done
      return true
    })
    .sort((a, b) => a.id - b.id)

  return (
    <>
      <div className={style.container}>
                  <Header title="Портал разработчика" learn="Мое обучение" task="Задачи"  />
                    <main className={style.main}>
                      <section className={style.section}>
                          <p className={style.headline}>Рекомендуемые темы</p>
                          <div className={style.whiteBlock}>
                              <div className={style.circle}>
                                  <Circle />
                                  <ProgressBar />
                              </div>
                              <MainBlock title="Начало работы" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" prButton="Продолжить тему"  />
      
                          </div>
                      </section>
      
                      <section className={style.section}>
                          <div className={style.secondBlock}>
                              <button className={style.secondaryButton} type="button">Показать еще</button>
                          </div>
                      </section>
      
                      <section className={style.section}>
                          <div className={style.secondBlocks}>
                              <div className={style.sectionHeader}>
                                  <h2>Путь FrontEnd Developer</h2>
                                  <button className={style.lightButton} type="button">Скрыть пройденные</button>
                              </div>
      
                              <div className={style.cardGrid}>
                                  <Card title="Добро пожаловать!" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" done={true} />
                                  <Card title="Начало работы" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  <Card title="Введение в рабочую среду" categories={["Для новичка", " Основы работы"]} desc="Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете" />
                                  
                              </div>
                          </div>
                      </section>
      
                      <section className={style.section}>
                          <p className={style.headline}>Каталог тем</p>
      
                          <Row activeFilter={activeFilter} onSelectFilter={setActiveFilter} />

                          <div className={style.notWhiteBlock}>
                              {loading ? (
                                <p>Загрузка...</p>
                              ) : error ? (
                                <p>Ошибка: {error}</p>
                              ) : (
                                filteredCards.map(card => (
                                  <Card
                                    key={card.id}
                                    title={card.title}
                                    categories={card.categories}
                                    desc={card.desc}
                                    done={card.done}
                                  />
                                ))
                              )}
                          </div>
                      </section>
                  </main>
              </div>
    </>
  )
}

export default App
