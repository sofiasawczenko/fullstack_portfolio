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
                "• Aprimorei a integração de APIs entre sistemas investigando falhas com filtros avançados no Kibana, realizando consultas SQL no Data Lake e conduzindo testes de API com métodos HTTP no Postman, garantindo troca de dados eficiente e identificação de falhas nos endpoints, melhorando a performance do sistema.",
                "• Aumentei a confiabilidade dos testes como SDET, criando casos de teste automatizados e desenvolvendo frameworks de automação com Java e Selenium, o que resultou em maior qualidade e confiabilidade nas entregas de software.",
                "• Atuei como Analista de Produto em novas releases, garantindo que o time técnico seguisse os requisitos definidos pelo time de negócios."
            ],
        },
        embraer: {
            title: "Embraer",
            position: "Desenvolvimento de Software", 
            period: "Janeiro 2023 - Agosto 2024",
            description: [
                "A Embraer é uma fabricante brasileira de renome global, especializada em aeronaves executivas, comerciais e militares. Como a terceira maior produtora de aeronaves do mundo, destaca-se como referência em inovação, qualidade e segurança na indústria aeroespacial.",
                "Responsabilidades & Resultados no papel de estagiária:",
                "• Identifiquei vulnerabilidades de segurança no processo de autenticação da maior plataforma da Embraer, refatorei o front-end usando AWS VM, PHP e JavaScript, fortalecendo a segurança e confiabilidade do login para mais de 100.000 usuários.",
                "• Resolvi ineficiências em uma aplicação React.js utilizada por 20.000 usuários internos para reservas, realizando debugging e testes com TypeScript, Java, Unit Test e Jest, o que resultou em maior estabilidade do sistema e eficiência nas reservas."
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

