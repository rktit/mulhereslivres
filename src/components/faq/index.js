import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { RightCircleFilled} from '@ant-design/icons';
import { Fade } from 'react-reveal'
import logo from '../../assets/logo/Logo.png';
import 'antd/dist/antd.css';
import { Collapse, Space } from 'antd';
import styled from 'styled-components';
const { Panel } = Collapse;


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

 
    function callback(key) {
        console.log(key);
      }
    return (
        <ScrollableAnchor id={'faq'}>
            <Fade>
                <div className='flex flex-col w-full ml-0 md:ml-0 sm:-ml-10'>
                    <div className='flex-1 w-full mt-4'>
                        <h2 className="duvidas">DÚVIDAS FREQUENTES</h2>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center w-full boxFaq pb-10 px-5 sm:px-5">
                        {/* <Space className='flex md:w-1/2 w-full items-center' direction="vertical"> */}
                            <Collapse 
                                className="accordion2"
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Quando me inscrever, como vou receber o meu acesso?" key="0">
                                    <p>Assim que sua inscrição for confirmada, você receberá um e-mail de confirmação com os dados de acesso, seu login e senha da plataforma. Esse e-mail será enviado para o seu e-mail cadastrado no momento da compra. Lembre-se sempre de verificar na caixa de SPAM ou promoção caso não encontre na caixa de entrada. Se não receber o e-mail mesmo assim, entre em contato com contato@dravaginismo.com.br.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="As aulas são gravadas ou ao vivo?" key="1">
                                    <p>Teremos aulas gravadas e também aulas ao vivo na plataforma. Caso você não possa participar das aulas ao vivo, não se preocupe. Todas as aulas, sejam elas ao vivo ou gravadas, serão disponibilizadas para todos os alunos 24h por dia, 7 dias por semana.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Como funciona a garantia?" key="2">
                                    <p>A garantia de satisfação funciona da seguinte maneira: durante os primeiros 7 dias após a sua inscrição, você estará 100% coberto pela nossa garantia de satisfação. Isso significa que você está livre para começar o tratamento. Se por alguma razão, qualquer que seja, durante os primeiros 7 dias, você decidir que não é para você, basta enviar um único e-mail para nosso suporte que faremos a devolução integral do valor pago. Sem perguntas e sem ressentimento. Você está protegido por 7 dias para tomar a decisão que mais lhe convém.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Como funcionará o acompanhamento da evolução?" key="3">
                                    <p>Teremos uma equipe exclusiva para tirar TODAS as suas dúvidas relacionadas ao tratamento, teremos encontros mensais com a Dra. Amanda Almeida, garantindo pelo menos 12 encontros ao vivo na plataforma.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="O tratamento é online ou presencial?" key="4">
                                    <p>O tratamento é 100% online, possibilitando fazer de qualquer lugar e em qualquer horário.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="O que é o MULHERES LIVRES? Como eu posso me inscrever?" key="5">
                                    <p>O Mulheres Livres é um tratamento para mulheres que tem dor durante a penetração, desde exames ginecológicos até relação sexual. Mulheres que tem Vaginismo ou dispareunia por tensão muscular. É um tratamento para mulheres que querem se livrar da dor e ter uma vida com mais prazer e saúde. Para se inscrever, basta <a href="https://sun.eduzz.com/1436910?cupom=seja%20livre" target="_blank">clicar aqui</a> e garantir sua vaga.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Precisa de algum acessório?" key="6">
                                    <p>Precisa sim, assim que você receber seu acesso te instruirei quais acessórios você deve ter para fazer o tratamento.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Estou na dúvida se tenho vaginismo, esse tratamento é para mim?" key="7">
                                    <p>Fique tranquila, se você está na dúvida clique no botão de WhatsApp aqui do lado e tire suas dúvidas com a nossa equipe. Se for o seu caso, ficaremos muito felizes em poder te ajudar a se livrar do Vaginismo.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Quanto tempo leva para estar curada?" key="8">
                                    <p>Durante todos esses anos que trato dores durante a relação a média de cura é de 3 meses. Isso pode variar de caso para caso. Seguindo todas as orientações das aulas e se comprometendo com o tratamento provavelmente será de 2 a 4 meses.</p>
                                </Panel>
                            </Collapse>
                            <Collapse 
                                className="accordion2"
                                style={{marginTop:'10px'}}
                                bordered={false}
                                accordion expandIconPosition={'right'}
                                expandIcon={({ isActive }) => <RightCircleFilled style={{color:'#ad5677', fontSize: '20px'}} rotate={isActive ? 90 : 0} />}
                            >
                                <Panel header="Por quanto tempo terei acesso às aulas?" key="9">
                                    <p>Seu acesso terá duração de 1 ano.</p>
                                </Panel>
                            </Collapse>
                        {/* </Space> */}
                    </div>
                </div>
                
            </Fade>
        </ScrollableAnchor>
    )
}