import type { NextPage } from 'next'
import Layout from '../components/Layout/index'
import Image from 'next/image'

const Home: NextPage = () => (
  <>
    <Layout pageTitle='Home'>
      <Image src='/avatar.png' width='500' height='500' alt='profile photo' />
      <h1>Welcome Sedana Yoga</h1>
    </Layout>
  </>
)
export default Home
