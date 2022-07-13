import React, { useEffect, useRef, useState, useContext } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import motivo1 from '../../assets/file/01.png'
import motivo2 from '../../assets/file/02.png'
import motivo3 from '../../assets/file/03.png'

import botao from '../../assets/cta/botao-reservar.png'
// import {ModalContext} from '../../context/index';

export default function Page(props) {
    const btnScrollTop = useRef(null)
    const [showBtn, setShowBtn] = useState(false)
    // const {statusModal} = useContext(ModalContext);

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
                            <div className="titulo-motivos font-lg">03 motivos</div>
                            <div className="subtitulo-motivos font-regular">para você fazer<br /> o tratamento</div>
                        </div>
                        <div className="flex flex-col justify-center px-20">
                            <div className="flex flex-col items-center justify-self-center">
                                <img src={motivo1} className="flex w-48 pt-10" />
                                <div className="flex text-motivos">Ter uma vida sexual sem dor e cheia de prazer.</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={motivo2} className="flex w-auto pt-10" />
                                <div className="flex text-motivos">Poder fazer exames ginecológicos que são essenciais para a vida da mulher.</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={motivo3} className="flex w-auto pt-10" />
                                <div className="flex text-motivos">Ter autoconhecimento íntimo, que vai te trazer mais confiança e saúde.</div>
                            </div>
                        </div>
                        
                        <div className="relative flex justify-center py-10">
                            <img src={botao} className="flex motivosButton" />
                            <button type="submit" className="absolute buttonMotivos"  onClick={()=>{window.location.href = "https://sun.eduzz.com/1436910?cupom=sejalivre";}}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'motivos'}>
                <div className="flex flex-col w-full bg-motivos">
                    <Fade>
                        <div className="flex flex-col items-center py-10">
                            <div className="titulo-motivos font-big">03 motivos</div>
                            <div className="subtitulo-motivos font-lg">para você fazer o tratamento</div>
                        </div>
                        <div className="flex flex-wrap w-full items-start justify-around pb-20">
                            <div className="flex flex-col md:w-1/4 w-2/4 items-center pt-4">
                                <div className='justify-center'>
                                    <img src={motivo1} className="flex w-auto"/>
                                </div>
                                <div className="text-motivos">Ter uma vida sexual sem dor e cheia de prazer.</div>
                            </div>
                            <div className="flex flex-col md:w-1/4 w-2/4 items-center">
                                <div className='justify-center'>
                                    <img src={motivo2} className="flex w-auto" />
                                </div>
                                <div className="text-motivos">Poder fazer exames ginecológicos que são essenciais para a vida da mulher.</div>
                            </div>
                            <div className="flex flex-col md:w-1/4 w-2/4 items-center">
                                <div className='justify-center'>
                                    <img src={motivo3} className="flex w-auto" />
                                </div>
                                <div className="text-motivos">Ter autoconhecimento íntimo, que vai te trazer mais confiança e saúde.</div>
                            </div>
                        </div>

                        <div className="relative flex justify-center py-10">
                            <img src={botao} className="flex motivosButton" />
                            <button type="submit" className="absolute buttonMotivos" onClick={()=>{window.location.href = "https://sun.eduzz.com/1436910?cupom=sejalivre";}}>Quero ser livre</button>
                        </div>
                    </Fade>
                </div >
            </ScrollableAnchor>
    )
}