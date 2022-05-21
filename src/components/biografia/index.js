import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'
import { Faq } from '../'

import Bio from '../../assets/static/bioBio.png'
import deskBio from '../../assets/static/deskBIO.png'
import mobileBio from '../../assets/static/BIO.png'

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
            <ScrollableAnchor id={'biografia'}>
                <div className="bg-bio">
                    <Fade>
                        <div className="flex flex-col w-full p-6">
                            <div className="flex relative">
                                <div className="absolute titulo-bio pt-28">
                                    bio<br />grafia
                                </div>
                                <img src={mobileBio} className="flex imgBio" />
                            </div>
                            <div className="text-bio">
                                <strong> olá mulherada linda! </strong>
                            </div>
                            <div className="flex flex-initial flex-col w-full descricao-bio-mob">
                                <p>Para quem ainda não me conhece, eu sou a Dra. Amanda Almeida,
                                    também conhecida como Dra. Vaginismo.</p><br />
                                <p>Eu sou formada em Fisioterapia pela UNESP (Universidade do Estado de São Paulo),
                                    e especialista em Fisioterapia Pélvica e Sexologia, com foco na sáude íntima feminina.</p><br />
                                <p>Há mais de 7 anos trabalho com mulheres com dor durante a relação sexual.
                                    E há 2 anos criei o 1º tratamento de Vaginismo à distância do mundo, ajudando mais de 500 mulheres a se livrar do Vaginismo sem sair de casa e de vários lugares do mundo.</p><br />
                                <p>Diariamente compartilho muito conhecimento e qualidade de vida com milhares de
                                    mulheres pelas redes sociais, principalmente através de meu perfil no <a href=" https://www.instagram.com/dra.vaginismo/" target="_blank">Instagram</a>.</p><br />
                                <p>Tenho como propósito de vida levar a cura para milhões de mulheres que sofrem com
                                    essa disfunção, trazendo de volta a felicidade para a vida íntima de cada uma delas.</p>
                            </div>
                        </div>
                    </Fade>
                    <Faq />
                </div>
            </ScrollableAnchor>
            :
            <ScrollableAnchor id={'biografia'}>
                <div className="bg-biografia pl-20 py-10">
                    <div className="flex relative">
                        <img src={Bio} className="flex absolute" />
                    </div>
                    <Fade>
                        <div className="flex relative">
                            <div className="flex flex-col w-full pl-32">
                                <div className="flex-initial pt-28 titulo-bio">
                                    biografia
                                </div>
                                <div className="flex-initial text-bio pt-10">
                                    <strong> olá mulherada linda! </strong>
                                </div>
                                <div className="flex-initial descricao-bio ">
                                    Para quem ainda não me conhece, eu sou a Dra. Amanda Almeida,
                                    também conhecida como Dra. Vaginismo.
                                    <br /><br />
                                    Eu sou formada em Fisioterapia pela UNESP (Universidade do Estado de São Paulo),
                                    e especialista em Fisioterapia Pélvica e Sexologia, com foco na sáude íntima feminina.
                                    <br /><br />
                                    Há mais de 7 anos trabalho com mulheres com dor durante a relação sexual.
                                    E há 2 anos criei o 1º tratamento de Vaginismo à distância do mundo, ajudando mais de 500 mulheres a se livrar do Vaginismo sem sair de casa e de vários lugares do mundo.
                                    <br /><br />
                                    Diariamente compartilho muito conhecimento e qualidade de vida com milhares de
                                    mulheres pelas redes sociais, principalmente através de meu perfil no <a href=" https://www.instagram.com/dra.vaginismo/" target="_blank">Instagram</a>.
                                    <br /><br />
                                    Tenho como propósito de vida levar a cura para milhões de mulheres que sofrem com
                                    essa disfunção, trazendo de volta a felicidade para a vida íntima de cada uma delas.
                                </div>
                            </div>
                            <div className="flex relative ml-20 mr-32">
                                <img src={deskBio} className="flex pt-28" width="auto" />
                            </div>
                        </div>

                    </Fade>
                    <Faq />
                </div>
            </ScrollableAnchor>
    )
}