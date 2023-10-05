import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}>
      </main> */}
      <Flex className={`${inter.className}`} height='100vh' alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} rounded={5} p={12}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder='email' variant="filled" mb={3} type='email'/>
          <Input placeholder='password' variant="filled" mb={6} type='password'/>
          <Button colorScheme='teal' mb={6}>Log in</Button>
          <Button onClick={toggleColorMode}>Toggle color mode</Button>
        </Flex>
      </Flex>
    </>
  )
}