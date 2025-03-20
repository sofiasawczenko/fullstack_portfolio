import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export const Experiences = () => {
    useEffect(() => {
        ScrollReveal().reveal('.experiences', {
            distance: '50px',
            duration: 2000,
            easing: 'ease-out',
            origin: 'top',
            opacity: 0,
            reset: false,
        });
    }, []);

    const [activeTab, setActiveTab] = useState("Johnson");

    const experiences = {
        Johnson: {
            title: "Johnson & Johnson",
            position: "Engenharia de Desenvolvimento de Software para Testes (SDET)",
            period: "Agosto 2024 - Presente",
            description: [
                "Johnson & Johnson é uma líder global em saúde, reconhecida por suas inovações farmacêuticas sob a marca Janssen, com destaque para os avanços em oncologia e imunologia. A empresa também desenvolve dispositivos médicos de ponta para cirurgia, ortopedia e cardiologia, integrando tecnologia e inovação para transformar vidas em todo o mundo.",
                "Responsabilidades & Resultados no papel de estagiária:",
                "• Os medicamentos importados pela Johnson & Johnson passam por um processo de adequação nos Centros de Distribuição para atender às exigências da ANVISA, assegurando sua comercialização no território nacional. Nesse contexto, atuei como analista de produto no sistema responsável por gerenciar o tratamento das embalagens desses medicamentos. Minhas principais responsabilidades incluíam a priorização de funcionalidades, definição dos requisitos funcionais, análise do sistema, realização de testes e validação de qualidade, além de coleta de feedback dos usuários. Também atuei como intermediário entre as áreas de negócios e a equipe técnica, trabalhando de forma colaborativa com o Product Owner (PO) para priorizar as histórias de usuário.",
                "• No mesmo sistema, desempenhei funções de SDET, executando testes manuais no Front-End, que incluíam a análise de user stories, critérios de aceitação, cenários e casos de teste. Realizei testes de integração entre o Back-End e o Front-End, além de automatizar testes em APIs, assegurando a qualidade e a integração eficaz entre os diferentes componentes do sistema. Utilizei ferramentas como Cypress, Postman, Newman, Jira, Confluence e TestRail para documentar e gerenciar os testes, garantindo a rastreabilidade e a eficiência do processo.",
            ],
        },
        embraer: {
            title: "Embraer",
            position: "Desenvolvimento de Software", 
            period: "Janeiro 2023 - Agosto 2024",
            description: [
                "A Embraer é uma fabricante brasileira de renome global, especializada em aeronaves executivas, comerciais e militares. Como a terceira maior produtora de aeronaves do mundo, destaca-se como referência em inovação, qualidade e segurança na indústria aeroespacial.",
                "Responsabilidades & Resultados no papel de estagiária:",
                "• A maior plataforma da Embraer, com mais de 100.000 usuários, apresentava vulnerabilidades no front-end do processo de autenticação, comprometendo a segurança e a experiência do usuário. Refatorei a autenticação no front-end utilizando AWS VM, PHP e JavaScript, abordando ineficiências e reforçando a segurança. Segui metodologias ágeis (Scrum, Kanban) para garantir entregas contínuas, contribuí na documentação de software, segui um System Design e implementei testes manuais para validar as mudanças. O resultado foi uma autenticação mais segura e eficiente, reduzindo riscos de vulnerabilidades e melhorando a experiência dos usuários.",
                "• Uma aplicação interna de reservas de espaços de trabalho, usada por 20.000 colaboradores, apresentava bugs que impactavam na experiência do usuário. Para corrigir esse cenário, utilizei TypeScript e Next.js para resolver bugs no Front-End e Java no Back-End. A usabilidade do sistema melhorou significativamente, reduzindo falhas e otimizando o fluxo de reservas para os usuários internos."
            ],
        },
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section id="experience" className="experiences py-5" style={{ marginBottom: "15rem" }}>
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-12 text-left">
                        <h2 style={{ color: 'var(--bs-primary)' }} className="fw-bold">Minhas Experiências</h2>
                        <h3 style={{ color: 'var(--bs-dark)' }} className="fw-bold">Lugares onde trabalhei</h3>
                        <h2 className="text-muted">Um pouquinho da minha trajetória profissional.</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-5">
                        <VerticalMenu>
                            {Object.keys(experiences).map((key) => (
                                <MenuItem
                                    key={key}
                                    active={activeTab === key}
                                    onClick={() => handleTabClick(key)}
                                    className="list-group-item list-group-item-action"
                                >
                                    {experiences[key].title}
                                </MenuItem>
                            ))}
                        </VerticalMenu>
                    </div>

                    <div className="col-md-8">
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>{experiences[activeTab].title}</h4>
                            <small className="text-muted">{experiences[activeTab].period}</small>
                        </div>
                        <div className="mt-3" style={{ color: 'var(--bs-secondary-color)', textAlign: 'justify' }}>
                            <h5 style={{ marginBottom: '1rem' }}>{experiences[activeTab].position}</h5> 
                            {experiences[activeTab].description.map((desc, index) => (
                                <p key={index} style={{ marginBottom: '1rem' }}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};


const VerticalMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MenuItem = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--bs-primary);
    border: none;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #FBDBDB;
        color: var(--bs-primary);
    }

    ${(props) =>
        props.active &&
        `background-color: #FBDBDB; /* Rosa quando ativo */
        color: var(--bs-primary);
        &::before {
            background-color: #c8023f;
        }`}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: ${props => 
            props.active ? '#c8023f' : '#dfdfdf'};
        transition: background-color 0.3s ease;
    }
`;

