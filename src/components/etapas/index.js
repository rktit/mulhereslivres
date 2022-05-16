import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import etapa1 from '../../assets/cta/etapa1.png'
import etapa2 from '../../assets/cta/etapa2.png'
import etapa3 from '../../assets/cta/etapa3.png'
import etapa4 from '../../assets/cta/etapa4.png'
import etapa1mobile from '../../assets/cta/01etapa.png'
import etapa2mobile from '../../assets/cta/02etapa.png'
import etapa3mobile from '../../assets/cta/03etapa.png'
import etapa4mobile from '../../assets/cta/04etapa.png'
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
            <ScrollableAnchor id={'etapas'}>
                <div className="pt-10 px-4">
                    <Fade>
                        <div className="flex flex-col">
                            <div className="titulo-etapas">Como será o tratamento?</div>
                            <div className="subtitulo-etapas pb-8 pt-2">Você está a <strong>4 etapas</strong> da cura!</div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="flex imgEtapas py-4 pr-2">
                                <img src={etapa1mobile} className="flex" width="240" />
                            </div>
                            <div className="flex imgEtapas py-4 pl-6">
                                <img src={etapa2mobile} className="flex" width="250" />
                            </div>
                            <div className="flex imgEtapas py-4 pr-2">
                                <img src={etapa3mobile} className="flex" width="250" />
                            </div>
                            <div className="flex imgEtapas py-4 pl-6">
                                <img src={etapa4mobile} className="flex" width="250" />
                            </div>
                        </div>
                        <div className="descricao-etapas pt-10 px-10">E quando você concluir a última etapa você finalmente estará livre do Vaginismo
                        </div>
                        <div className="relative flex botaoEtapas justify-center pt-6">
                            <img src={botao} className="flex etapasButton" />
                            <button type="submit" className="absolute buttonEtapas" onClick={("")}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'etapas'}>
                <div className="px-20">
                    <Fade>
                        <div className="flex flex-col">
                            <div className="titulo-etapas">Como será o tratamento?</div>
                            <div className="subtitulo-etapas pb-10 pt-2">Você está a <strong>4 etapas</strong> da cura!</div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="flex img-etapas px-6">
                                <img src={etapa1} className="flex" width="250" />
                            </div>
                            <div className="flex img-etapas px-6">
                                <img src={etapa2} className="flex" width="250" />
                            </div>
                            <div className="flex img-etapas px-6">
                                <img src={etapa3} className="flex" width="250" />
                            </div>
                            <div className="flex img-etapas px-6">
                                <img src={etapa4} className="flex" width="250" />
                            </div>
                        </div>
                        <div className="descricao-etapas pt-10 px-80">E quando você concluir a última etapa você finalmente estará livre do Vaginismo
                        </div>
                        <div className="relative flex botaoEtapas justify-center pt-6">
                            <img src={botao} className="flex etapasButton" />
                            <button type="submit" className="absolute buttonEtapas" onClick={("")}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div >
            </ScrollableAnchor >
    )
}