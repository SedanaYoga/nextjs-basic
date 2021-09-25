import Link from 'next/link'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
