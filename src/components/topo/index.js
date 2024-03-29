import React, { useEffect, useRef, useState, useContext } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import YouTube from 'react-youtube';


import botao from '../../assets/cta/botao-reservar.png'
import logo from '../../assets/logo/logo-azul.png'
import video from '../../assets/file/video-topo.png'
// import {ModalContext} from '../../context/index';
import background from '../../assets/background/bg-topo.png';

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  // const {statusModal} = useContext(ModalContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
      if (window.innerWidth >= 992) {
          setMobile(false)
      } else {
          setMobile(true)
      }
  }, [window.innerWidth])
  
  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }
 
  const opts = {
    height: "320",
    width: '470',
    playerVars: {
      modestbranding: 1,
    },
  };
  return (
    isMobile ?
      <div className="flex-auto bg-topo ">
        <div className="flex-auto flex-col pt-2">
          <div className="flex flex-auto justify-center py-4">
            <img src={logo} className="flex items-center px-10 py-4" />
          </div>
          <div className="flex justify-center">
            <YouTube className="imgVideo px-6" frameborder="0" videoId={"Fy4SRQ3n2zE"} opts={opts}/>
          </div> 
        </div>
        <div className="tituloTopo pt-6 font-regular">Livre-se do<br /> vaginismo!
          </div>
          <div className="descricaoTopo pt-2">Você merece uma vida sem medo e<br /> sem dor durante a penetração.
          </div>
        <div className="relative flex justify-center pt-6 pb-6">
          <img src={botao} className="flex button-topo" />
          <button type="submit" className="absolute topo-button pt-1" onClick={()=>{window.location.href = "https://sun.eduzz.com/1436910?cupom=seja%20livre";}}>Quero ser livre</button>
        </div>
      </div>
      :
      <ScrollableAnchor id={'home'}>
      <div className="flex w-full bg-topo">
        <div className="flex-auto">
            <div className="flex justify-center py-20">
              <img src={logo} className="flex justify-self-center justify-center" width="auto" />
            </div>
            <div className="flex flex-wrap justify-center space-x-10">
              <div className="flex flex-col">
                <div className="tituloTopo font-big">Livre-se do<br /> vaginismo!
                </div>
                <div className="descricaoTopo pt-4">Você merece uma vida sem medo e<br /> sem dor durante a penetração.
                </div>
                <div className="relative flex justify-center py-10">
                  <img src={botao} className="flex button-topo" />
                  <button type="submit" className="absolute topo-button" onClick={()=>{window.location.href = "https://sun.eduzz.com/1436910?cupom=seja%20livre";}}>Quero ser livre</button>
                </div>
              </div>
              <div className="flex justify-center -pl-4 md:pl-10">
              <YouTube className="imgVideo pb-10 pr-8 md:pr-0" frameborder="0" videoId={"Fy4SRQ3n2zE"} opts={opts}/>
          </div> 
            </div>
          </div>
        </div>
      </ScrollableAnchor>
  )
}





