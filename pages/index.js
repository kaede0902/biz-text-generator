import Head from 'next/head'
import Layout from '../components/layout'
import NameForm from '../components/NameForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>biz-text-gen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <h1>ビジネス文章ジェネレーター</h1>
          <NameForm/>
      </Layout>
    </div>
  )
}
