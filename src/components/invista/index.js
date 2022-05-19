import React, { useEffect, useRef, useState, useContext } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import mais from '../../assets/file/mais.png'
import botao from '../../assets/cta/botao-reservar.png'
import garantia from '../../assets/cta/garantia.png'
import valor from '../../assets/file/tabelaValor.png'
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
            <ScrollableAnchor id={'invista'}>

                <div className="bgInvista pt-10 px-4">
                    <Fade>
                        <div className="flex flex-col justify-center">
                            <div className="titulo-invista pt-14 pb-4">
                                invista na sua<br />
                                <div className="invistaTitulo"> liberdade!</div>
                            </div>
                            <div className="flex flex-wrap space-x-20 justify-center">
                                <div className="flex flex-col">
                                    <div className="flex invista">
                                        Tratamento de Vaginismo
                                    </div>
                                    <div className="flex Tratamento py-2">
                                        <img src={mais} className="self-center pr-3 h-7" width="30" />
                                        Material didático Completo<br /> para as 4 etapas do Tratamento
                                    </div>
                                    <div className="flex Tratamento py-2">
                                        <img src={mais} className="self-center pr-3 h-7" width="30" />
                                        Suporte pelo WhatsApp
                                    </div>
                                    <div className="flex Tratamento py-2 pb-10">
                                        <img src={mais} className="self-center pr-3 h-7" width="30" />
                                        Encontros mensais online<br /> com a Dra. Amanda Almeida.
                                    </div>
                                </div>
                            </div>
                            <div className="flex relative box-valor mb-10 ">
                                <div className="flex absolute botao-invista justify-center">
                                    <img src={botao} className="flex invistaButton" />
                                    <button type="submit" className="absolute buttonInvista" onClick={() => { window.location.href = "https://sun.eduzz.com/1436910?cupom=sejalivre"; }}>Quero ser livre</button>
                                </div>
                            </div>

                                <div className="flex flex-col box-bonus text-center items-center place-self-center">
                                    <div className="flex titulo-bonus pt-5">
                                        Bônus
                                    </div>
                                    <div className="flex descricao-bonus pt-2">
                                        Avaliação individual via vídeo<br /> chamada, com Dra. Amanda<br /> para as 5 primeiras inscritas.
                                    </div>
                            </div>

                            <div className="relative flex justify-center pt-14 text-center pb-10">
                                <img src={garantia} className="flex button-garantia" />
                                <div className="absolute titulo-garantia">Garantia de 7 Dias</div>
                                <div className="absolute descricao-garantia"><br />
                                    Sua compra está segura.<br />
                                    Ou você fica satisfeita, ou recebe <br />
                                    100% do seu investimento de volta.
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'invista'}>
                <div className="bg-invista py-10">
                    <Fade>
                        <div className="titulo-invista pt-14 pb-4">
                            invista na sua liberdade!
                        </div>
                        <div className="flex flex-wrap space-x-28 justify-center">
                            <div className="pt-12">
                                <div className="flex invista py-2">
                                    Tratamento de Vaginismo
                                </div>
                                <div className="flex Tratamento py-2">
                                    <img src={mais} className="self-center pr-3 h-8" width="30" />
                                    Material didático Completo<br /> para as 4 etapas do Tratamento
                                </div>
                                <div className="flex Tratamento py-2">
                                    <img src={mais} className="self-center pr-3 h-8" width="30" />
                                    Suporte pelo WhatsApp
                                </div>
                                <div className="flex Tratamento py-2">
                                    <img src={mais} className="self-center pr-3 h-8" width="30" />
                                    Encontros mensais online<br /> com a Dra. Amanda Almeida.
                                </div>
                            </div>

                            <div className="flex relative box-valor mb-20">
                                <img src={valor} className="flex absolute pt-4 pr-2" />
                                <div className="flex absolute botao-invista  justify-center">
                                    <img src={botao} className="flex invistaButton" />
                                    <button type="submit" className="absolute buttonInvista" onClick={() => { window.location.href = "https://sun.eduzz.com/1436910?cupom=sejalivre"; }}>Quero ser livre</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center">
                            <div className="text-center pr-10">
                                <div className="relative flex justify-center pt-14">
                                    <img src={garantia} className="flex button-garantia" />
                                    <div className="absolute titulo-garantia">Garantia de 7 Dias</div>
                                    <div className="absolute descricao-garantia"><br />
                                        Sua compra está segura.<br />
                                        Ou você fica satisfeita, ou recebe <br />
                                        100% do seu investimento de volta.
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pr-3">
                                <div className="box-bonus">
                                    <div className="titulo-bonus pt-5">
                                        Bônus
                                    </div>
                                    <div className="descricao-bonus pt-2">
                                        Avaliação individual via vídeo<br /> chamada, com Dra. Amanda para as 5<br /> primeiras inscritas.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </ScrollableAnchor>
    )
}