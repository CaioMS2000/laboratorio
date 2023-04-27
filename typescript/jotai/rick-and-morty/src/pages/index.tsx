// import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';
import { getCharacters } from 'rickmortyapi';

import Head from './_head';

export default function Home() {
  console.clear()
  const {
    main
  } = styles

  useEffect(() => {

    (async () => {
      const res = await getCharacters()

      const {data} = res
      const {info, results} = data

      console.log(data)
      console.log(info)
      console.log(results)
    })()
  }, [])

  return (
    <>
    <Head>
      <title>Rick & Morty</title>
    </Head>
    <main className={`${main}`}></main>
    </>
  )
  // return (
  //   <>
  //     <Head>
  //       <title>Next App</title>
  //     </Head>
  //     <main>
  //     </main>
  //   </>
  // )
}
