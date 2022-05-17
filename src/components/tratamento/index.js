import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import check from '../../assets/file/check.png'

import { Etapas } from '../'

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
            <ScrollableAnchor id={'line'}>

                <div className="bgTratamento pt-10 px-4">
                    <Fade>
                        <div className="flex flex-col box-tratamento">
                            <div className="tituloTratamento pt-4 pb-4">
                                Para<br /> quem é este tratamento?
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="img-check self-center pr-3 h-3" width="25" /> Se você tem Vaginismo.
                            </div>
                            <div className="flex text-tratamento py-2">
                                <img src={check} className="self-center pr-3 h-3" width="25" /> Para quem não consegue<br /> ter relação sexual.
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
                        <div className="info-tratamento pt-2 pb-8">
                            Se você ficou com qualquer dúvida, clique no botão do <strong className="whatsapp px-1"> WhatsApp </strong> ao lado e fale com nossa equipe agora mesmo.
                        </div>
                        </div>
                    </Fade>
                    <Etapas />
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'line'}>
                <div className="bg-tratamento">
                    <Fade>
                        <div className="flex flex-col box-tratamento">
                            <div className="tituloTratamento pt-14 pb-4">
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
                        <div className="info-tratamento pt-6 pl-6 pb-12">
                            Se você ficou com qualquer dúvida, clique no botão do <strong className="whatsapp px-1"> WhatsApp </strong> ao lado e fale com nossa equipe agora mesmo.
                        </div>
                        </div>
                    </Fade>
                    <Etapas />
                </div>
            </ScrollableAnchor>
    )
}