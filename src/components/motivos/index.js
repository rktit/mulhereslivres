import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import motivo1 from '../../assets/file/01.png'
import motivo2 from '../../assets/file/02.png'
import motivo3 from '../../assets/file/03.png'

import botao from '../../assets/cta/botao-reservar.png'


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
            <ScrollableAnchor id={'motivos'}>
                <div className="bg-motivos">
                    <Fade>
                        <div className="flex flex-col items-center justify-center pt-10">
                            <div className="titulo-motivos">03 motivos</div>
                            <div className="subtitulo-motivos">para você fazer<br /> o tratamento</div>
                        </div>
                        <div className="flex flex-col justify-center px-20">
                            <div className="flex-col items-center">
                                <img src={motivo1} className="flex w-auto pt-10 pl-10" />
                                <div className="flex text-motivos">Ter uma vida sexual sem dor e cheia de prazer.</div>
                            </div>
                            <div className="flex-col items-center">
                                <img src={motivo2} className="flex w-auto pt-10 pl-10" />
                                <div className="flex text-motivos">Poder fazer exames ginecológicos que são essenciais para a vida da mulher.</div>
                            </div>
                            <div className="flex-col items-center">
                                <img src={motivo3} className="flex w-auto pt-10 pl-10" />
                                <div className="flex text-motivos">Ter autoconhecimento íntimo, que vai te trazer mais confiança e saúde.</div>
                            </div>
                        </div>
                        
                        <div className="relative flex justify-center py-10">
                            <img src={botao} className="flex motivosButton" />
                            <button type="submit" className="absolute buttonMotivos" onClick={("")}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'motivos'}>
                <div className="bg-motivos">
                    <Fade>
                        <div className="flex flex-col items-center py-10">
                            <div className="titulo-motivos">03 motivos</div>
                            <div className="subtitulo-motivos">para você fazer o tratamento</div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center pb-20">
                            <div className="relative items-center px-16">
                                <img src={motivo1} className="flex w-auto pl-10" />
                                <div className="absolute text-motivos">Ter uma vida sexual sem dor e cheia de prazer.</div>
                            </div>
                            <div className="relative items-center px-16">
                                <img src={motivo2} className="flex w-auto pl-16" />
                                <div className="absolute text-motivos">Poder fazer exames ginecológicos que são essenciais para a vida da mulher.</div>
                            </div>
                            <div className="relative items-center px-16">
                                <img src={motivo3} className="flex w-auto pl-10" />
                                <div className="absolute text-motivos">Ter autoconhecimento íntimo, que vai te trazer mais confiança e saúde.</div>
                            </div>
                        </div>

                        <div className="relative flex justify-center py-10">
                            <img src={botao} className="flex motivosButton" />
                            <button type="submit" className="absolute buttonMotivos" onClick={("")}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div >
            </ScrollableAnchor>
    )
}