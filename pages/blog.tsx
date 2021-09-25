import Layout from '../components/Layout/index'
import styles from '../styles/Blog.module.css'
interface PostProps {
  id: number
  title: string
  body: string
}

interface BlogProps {
  dataBlog: PostProps[]
}

function blog(props: BlogProps) {
  const { dataBlog } = props
  return (
    <Layout pageTitle='Blog'>
      {dataBlog.map((post) => (
        <div key={post.id} className={styles.card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export default blog

export async function getServerSideProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?&_limit=10'
  )
  const dataBlog = await res.json()
  return {
    props: {
      dataBlog,
    },
  }
}
