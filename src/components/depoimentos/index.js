import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import YouTube from 'react-youtube';

import video from '../../assets/file/video.png'

import dep1 from '../../assets/file/dep.1.png'
import dep2 from '../../assets/file/dep.2.png'
import dep3 from '../../assets/file/dep.3.png'
import dep4 from '../../assets/file/dep.4.png'
import depoimento1 from '../../assets/file/01depoimento.png'
import depoimento2 from '../../assets/file/02depoimento.png'
import depoimento3 from '../../assets/file/03depoimento.png'
import depoimento4 from '../../assets/file/04depoimento.png'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { getAllByTestId } from '@testing-library/react'

export default function Page(props) {
  const [indexSlide, setIndexSlide] = useState(0);
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  const moveSlide = (value) => {
    ref.current.splide.go(value);
  }
  const arrayFotos = [
    { depoimento: dep1 },
    { depoimento: dep2 },
    { depoimento: dep3 },
    { depoimento: dep4 },
  ]
  const renderImg = (el) => {
    return (
      <SplideSlide className="w-full">
        <div className="flex items-center justify-center">
          <img src={el.depoimento} className="p-3 " />
        </div>
      </SplideSlide>
    )
  }
  const opts = {
    height: "340",
    width: '470',
    playerVars: {
      modestbranding: 1,
    },
  };
  return (
    isMobile ?
      <div className="bg-white">
        <div className="flex-auto flex-col pt-10" >
            <div className="titulo-dep" >
              Elas já encontraram a<br /> liberdade do vaginismo!<br />
            </div>
          <div className="subtitulo-dep pb-5">
            <br />
            Já são mais de 500 mulheres curadas.<br />
          </div>
        </div>
        <div className="flex justify-center">
          <YouTube className="video-dep" videoId={"VFWzueRlKXM"} opts={opts}/>
        </div> 
        <div className="flex flex-wrap px-4 py-6 justify-center content-center">
            <img src={depoimento4} className="flex img-dep" />
            <img src={depoimento3} className="flex img1dep" />
            <img src={depoimento2} className="flex img-dep" />
            <img src={depoimento1} className="flex img2dep" />
        </div>
      </div>

      :
      <ScrollableAnchor id={'depoimentos'}>
        <div className="bg-white">
          <div className="flex flex-col">
            <div className="titulo-dep pt-20" >
                Elas já encontraram a <br />liberdade do vaginismo!
            </div>
            <div className="subtitulo-dep pt-4">
              Já são mais de 500 mulheres curadas.<br />
            </div> 
            <div className="flex justify-center">
                <YouTube className="video-dep" videoId={"VFWzueRlKXM"} opts={opts}/>
            </div>        
          </div>
          <div className="flex justify-center align-center">
            <div className="w-10/12 justify-center py-10">
              <div className="box-planta flex flex-row w-auto">
                <div className="d-flex flex-col">
                  <div className='col-12' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  </div>
                </div>

                <div className="flex w-auto px-20">
                  <div className="content-center">
                    <Splide
                      ref={ref}
                      className="splide-badges col-12"
                      options={{
                      rewind: true,
                      width: '100%',
                      gap: '0rem',
                      perPage: 3,
                      pagination: isMobile,
                      arrows: !isMobile,
                      }}
                    >
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={dep1} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={dep2} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={dep3} className="md-h-full" />
                      </SplideSlide>
                      <SplideSlide className="justify-center items-center" style={{ display: 'flex', alignSelf: 'center' }}>
                        <img src={dep4} className="md-h-full" />
                      </SplideSlide>

                    </Splide>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
  )
}
