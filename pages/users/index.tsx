import Layout from '../../components/Layout/index'
import { useRouter } from 'next/router'
import styles from './Users.module.css'

interface UsersProps {
  dataUsers: Array<any>
}

function Users({ dataUsers }: UsersProps) {
  const router = useRouter()
  return (
    <Layout pageTitle='Users'>
      {dataUsers.map((user) => (
        <div
          onClick={() => router.push(`/users/${user.id}`)}
          key={user.id}
          className={styles.card}
        >
          <p className={styles.name}>{user.name}</p>
          <p className={styles.email}>{user.email}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Users

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataUsers = await res.json()
  return {
    props: {
      dataUsers,
    },
  }
}
