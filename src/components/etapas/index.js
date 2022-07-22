import React, { useEffect, useRef, useState, useContext } from 'react'
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
// import {ModalContext} from '../../context/index';

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
                            <div className="flex img-etapas py-4 pr-2">
                                <img src={etapa1mobile} className="flex w-auto"  />
                            </div>
                            <div className="flex img-etapas py-4 pl-6">
                                <img src={etapa2mobile} className="flex w-auto"  />
                            </div>
                            <div className="flex img-etapas py-4 pr-2">
                                <img src={etapa3mobile} className="flex w-auto"  />
                            </div>
                            <div className="flex img-etapas py-4 pl-10">
                                <img src={etapa4mobile} className="flex w-auto"  />
                            </div>
                        </div>
                        <div className="descricao-etapas leading-7 font-medium pt-10 px-4">E quando você concluir a última etapa você finalmente estará livre do Vaginismo
                        </div>
                        <div className="flex relative botaoEtapas justify-center pt-6">
                            <img src={botao} className="flex etapasButton" />
                            <button type="submit" className="absolute buttonEtapas"onClick={()=>{window.location.href = "https://sun.eduzz.com/1436910?cupom=sejalivre";}}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'etapas'}>
                <div className="flex w-full flex-col">
                    <Fade>
                        <div className="flex flex-col w-full">
                            <div className="titulo-etapas">Como será o tratamento?</div>
                            <div className="subtitulo-etapas pb-10 pt-2">Você está a <strong>4 etapas</strong> da cura!</div>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="flex img-etapas px-6 pr-0">
                                <img src={etapa1} className="flex" width="230" />
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
                        <div className="flex w-full descricao-etapas text-justify justify-center pt-20 pb-12 font-regular">
                            E quando você concluir a última etapa você finalmente estará livre do Vaginismo
                        </div>
                        <div className="relative flex botaoEtapas justify-center">
                            <img src={botao} className="flex etapasButton" />
                            <button type="submit" className="absolute buttonEtapas" onClick={()=>{window.location.href = "https://sun.eduzz.com/1436910?cupom=sejalivre";}}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div >
            </ScrollableAnchor >
    )
}