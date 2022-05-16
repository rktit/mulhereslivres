import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import botao from '../../assets/cta/botao-reservar.png'
import logo from '../../assets/logo/logo-azul.png'
import video from '../../assets/file/video-topo.png'


export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

  window.addEventListener("blur", function () {
    window.location.reload(true);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    isMobile ?
      <div className="flex-auto bgTopo">
        <div className="flex-auto flex-col">
          <div className="flex flex-auto justify-center py-4">
            <img src={logo} className="imageTopo flex items-center py-4" />
          </div>
          <div className="flex justify-center">
            <button onClick={() => window.location.href = 'https://youtu.be/LSNt6WWPm5c'}>
              <img src={video} className="flex img-video" /></button></div>
        </div>
        <div className="tituloTopo pt-6">Livre-se do<br /> vaginismo!
          </div>
          <div className="descricaoTopo pt-2">Você merece uma vida sem medo e<br /> sem dor durante a penetração.
          </div>
        <div className="relative flex justify-center pt-6 pb-10">
          <img src={botao} className="flex button-topo" />
          <button type="submit" className="absolute topo-button pt-1" onClick={("")}>Quero ser livre</button>
        </div>
      </div>
      :
      <ScrollableAnchor id={'home'}>
        <div className="bg-topo">
          <div className="flex-auto">
            <div className="flex flex-auto justify-center py-20">
              <img src={logo} className="flex justify-self-center justify-center" width="500" />
            </div>
            <div className="flex flex-wrap justify-center space-x-20">
              <div className="flex flex-col">
                <div className="tituloTopo">Livre-se do<br /> vaginismo!
                </div>
                <div className="descricaoTopo pt-4">Você merece uma vida sem medo e<br /> sem dor durante a penetração.
                </div>
                <div className="relative flex justify-center pt-10">
                  <img src={botao} className="flex button-topo" />
                  <button type="submit" className="absolute topo-button" onClick={("")}>Quero ser livre</button>
                </div>
              </div>
              <div className="flex">
                <button onClick={() => window.location.href = 'https://youtu.be/LSNt6WWPm5c'}>
                  <img src={video} className="flex imgVideo" /></button>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
  )
}