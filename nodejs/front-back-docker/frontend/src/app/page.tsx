import Image from 'next/image'

export default async function Home() {
  const apiURL = process.env.API_URL

  console.log('1# ', process.env.DATABASE_HOST)
  console.log('2# ', apiURL)
  console.log('2.1# ', process.env.API_URL)
  
  // const res = await fetch('http://localhost:4000/api/data')
  const url = apiURL+'/api/data'
  console.log('full url#')
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()

  console.log('3# ', data)

  return (
    <>
    <h1>NEX TJS</h1>
    {
      JSON.stringify(data || {})
    }
    </>
  )
}
