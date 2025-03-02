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
                "•  Atuei como SDET, colaborando com um time multidisciplinar para garantir a qualidade da entrega por meio da criação e execução de testes automatizados e integrados. Desenvolvi cenários de teste para validar APIs e as principais funcionalidades de portais front-end, aplicando testes de regressão e integração. Experiência em automação de testes utilizando Java e ferramentas de testes de API, como Postman, além de conhecimento em integração contínua e deploy contínuo. Realizei análise de defeitos, garantindo o funcionamento adequado do produto e seguindo boas práticas de qualidade durante todo o ciclo de entrega. Familiaridade com AWS Cloud, incluindo API Gateway, Lambda, SNS/SQS, DynamoDB e CloudWatch, e habilidade em documentação de testes para manter a rastreabilidade e a organização dos processos.",
                "• Atuei como Analista de Produto, gerenciando o backlog, auxiliando o PO na priorização de histórias de usuário e na análise de requisitos para alinhar as demandas dos stakeholders às estratégias do produto. Experiente em ambientes ágeis (Scrum, Kanban), utilizando Jira e Trello para acompanhar o progresso das sprints e garantir entregas pontuais e de alta qualidade. Colaborei com a equipe de desenvolvimento para esclarecer requisitos e definir o roadmap do produto. Analisei métricas de produto e feedbacks dos usuários para impulsionar melhorias. Contribuí para a documentação de processos e a tomada de decisões. Habilidade em UX/UI e proficiência no uso de Teams e Zoom para colaboração entre equipes multidisciplinares."
            ],
        },
        embraer: {
            title: "Embraer",
            position: "Desenvolvimento de Software", 
            period: "Janeiro 2023 - Agosto 2024",
            description: [
                "A Embraer é uma fabricante brasileira de renome global, especializada em aeronaves executivas, comerciais e militares. Como a terceira maior produtora de aeronaves do mundo, destaca-se como referência em inovação, qualidade e segurança na indústria aeroespacial.",
                "Responsabilidades & Resultados no papel de estagiária:",
                "• Identifiquei vulnerabilidades de segurança no processo de autenticação da maior plataforma da Embraer, afetando mais de 100.000 usuários. Abordei ineficiências no código que impactavam a experiência do usuário e refatorei a autenticação do front-end usando AWS VM, PHP e JavaScript para melhorar a segurança e garantir a qualidade do código. Segui metodologias ágeis (Scrum, Kanban) para entregar melhorias de forma rápida e eficiente, além de contribuir com a documentação de software e realizar testes de software para validar as mudanças.",
                "• Resolvi bugs em uma aplicação React.js usada por 20.000 usuários internos para reservas de espaços de trabalho, utilizando TypeScript para realizar debugging e testes. Trabalhei com Java e Unit Test para garantir que as correções feitas melhoraram a estabilidade do sistema e a eficiência das reservas. Apliquei testes de software e realizei revisão de código para garantir que os padrões de Clean Code e qualidade de código fossem seguidos."
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

