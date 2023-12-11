import Image from 'next/image'
import styles from './page.module.css'
import StarWars from '@/src/comp/StarWars'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <StarWars />
      </div>
    </main>
  )
}
