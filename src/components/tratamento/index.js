import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import check from '../../assets/file/check.png'
import { Etapas } from '../'

import deskTratamento from '../../assets/static/deskTratamento.png'
import mobileTratamento from '../../assets/static/Tratamento.png'
import background from '../../assets/background/bg-tratamento.png';

export default function Page(props) {
    const btnScrollTop = useRef(null)
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        console.log('MOBILE ::: ', isMobile);
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
            <ScrollableAnchor id={'line'}>
                <div className="flex flex-col w-full bg-tratamento pt-10 px-6">
                    <div className="flex relative">
                        <img src={mobileTratamento} className="flex absolute ml-40" />
                    </div>
                    <Fade>
                        <div className="flex flex-col">
                            <div className="flex flex-col w-full tituloTratamento font-regular py-4 pr-10 leading-8">
                                Para quem é este<br /> tratamento?
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="img-check self-center pr-3 h-3" width="25" /> Se você tem Vaginismo.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem não consegue<br /> ter relação sexual.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Se você não consegue fazer<br /> exames ginecológicos quando<br /> existe penetração.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Se você tem dispareunia<br /> por tensão muscular.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para a mulher tem a sensação<br /> de que não cabe nada dentro<br /> do canal vaginal.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem não consegue colocar<br /> absorvente interno ou sente muito<br /> incômodo com ele inserido.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para a mulher que tem muita dor na<br /> entrada do canal vaginal durante<br /> qualquer penetração.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Se as pernas se fecham sem querer<br /> durante uma tentativa de penetração.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem sente que existe uma parede<br /> na entrada do canal vaginal.
                            </div>
                        </div>
                        <div className="info-tratamento pt-2 pb-8 pr-8">
                            Se você ficou com qualquer dúvida, clique no botão do <strong className="whatsapp px-1"> WhatsApp </strong> ao lado e fale com nossa equipe agora mesmo.
                        </div>
                    </Fade>
                    <Etapas />
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'line'}> 
                <div className="flex w-full flex-col pt-10 px-8 bg-tratamento">
                    <Fade>
                    <div className="flex relative">
                        <div className="flex flex-col pl-32">
                            <div className="tituloTratamento font-big pt-14 pb-4">
                                Para quem é este tratamento?
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="img-check self-center pr-3 h-3" width="25" /> Se você tem Vaginismo.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem não consegue ter relação sexual.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Se você não consegue fazer exames ginecológicos quando existe penetração.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Se você tem dispareunia por tensão muscular.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para a mulher tem a sensação de que não cabe nada dentro do canal vaginal.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem não consegue colocar absorvente interno ou sente muito incômodo com ele inserido.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para a mulher que tem muita dor na entrada do canal vaginal durante qualquer penetração.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Se as pernas se fecham sem querer durante uma tentativa de penetração.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem sente que existe uma parede na entrada do canal vaginal.
                            </div>
                            <div className="info-tratamento pt-6 pb-32">
                                Se você ficou com qualquer dúvida, clique no botão do <strong className="whatsapp px-1"> WhatsApp </strong> ao lado e fale com nossa equipe agora mesmo.
                            </div>
                        </div>
                        <div className="flex relative self-start">
                            <img src={deskTratamento} className="flex" width="auto"/>
                        </div>
                    </div>
                    </Fade>
                    <Etapas />
                </div>
            </ScrollableAnchor>
    )
}