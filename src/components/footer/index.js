import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import logo from '../../assets/logo/logo-folder.png'



export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  
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

  return (
    <ScrollableAnchor id={'rodape'}>
      
      <div className="bg-footer">
        <Fade>
        <div className="flex flex-auto justify-center py-4">
              <img src={logo} className="flex justify-self-center justify-center" width="300"/>
          </div>

            <div className="footerText py-4">Todos os direitos reservados Dra. Amanda Almeida - @dra.vaginismo <br />
            </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}