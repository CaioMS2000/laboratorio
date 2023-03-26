import Head from 'next/head';
import Image from 'next/image';

import { Carousel } from '../../components';
// import {data as ProjectsData} from '../img/projectsExports';
import {data as ProjectsData} from '/public/projectsExports';

function Carousels(){
  const array = []
  console.clear()

  for(let proj of Object.values(ProjectsData)){
    console.log(proj)//cada projeto
    const urls = []

    // for(let imgGroup of Object.values(proj)){
    //   console.log(imgGroup)
    // }
    // console.log()
    const projData = Object.values(proj)//meta e images
    const projImgs = projData[1]// images
    console.log(projImgs)
    
    for(let imgObj of Object.values(projImgs)){
      console.log(imgObj)// each image

      for(let e1 of Object.values(imgObj)){
        console.log(e1)
        console.log(e1['src'])//each proper url
        urls.push(e1['src'])

        // for(let e2 of Object.values(e1)){
        //   console.log(e2)
        // }
      }
    }
    console.log()

    array.push(<Carousel images={urls}/>)
  }

  return array
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Sun Light</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Index
        {Carousels()}
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img src="../img/projects/alexandre/small/2021021113401937.jpg" className="d-block w-100" alt="..." /> */}
              {/* <Image className='d-block w-100' width={800} height={200} src="/img/projects/alexandre/small/2021021113401937.jpg" alt="" /> */}
              {/* <Image className='d-block w-100' width={800} height={200} src={require("../img/projects/alexandre/small/2021021113401937.jpg")} alt="" /> */}
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
    )
}