import Head from 'next/head'
import { Slider, FoodList } from '@/components'
import axios from 'axios'


export default function Home({ foodList }) {

  return (
    <>
      <Head>
        <title>Cocceat App</title>
        <meta name="description" content="Feeling lazy? Order from your couch with Cocceat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <FoodList foodList={foodList} />
    </>
  )
}


export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      foodList: res.data
    }
  }
}
