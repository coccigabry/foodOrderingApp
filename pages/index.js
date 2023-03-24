import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Slider, FoodList } from '@/components'


export default function Home() {
  return (
    <>
      <Head>
        <title>Cocceat App</title>
        <meta name="description" content="Feeling lazy? Order from your couch with Cocceat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <FoodList />
    </>
  )
}
