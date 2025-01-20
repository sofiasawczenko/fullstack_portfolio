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
            period: "Outubro 2024 - Presente",
            description: [
                "• Johnson & Johnson é uma líder global em saúde, reconhecida por suas inovações farmacêuticas sob a marca Janssen, com destaque para os avanços em oncologia e imunologia. A empresa também desenvolve dispositivos médicos de ponta para cirurgia, ortopedia e cardiologia, integrando tecnologia e inovação para transformar vidas em todo o mundo.",

                "Principais Responsabilidades:",

                "• Realizei consultas SQL e buscas em tabelas utilizando Databricks em data lakes, garantindo recuperação e análise eficientes dos dados.",
                "• Criei visualizações de dados para apresentar resultados analíticos, fornecendo insights acionáveis para as partes interessadas.",
                "• Participei das rotinas Scrum, colaborando no desenvolvimento de soluções impulsionadas por IA para centros de logística e distribuição da J&J ao redor do mundo.",
            ],
        },
        embraer: {
            title: "Embraer",
            period: "Janeiro 2023 - Setembro 2024",
            description: [
                "A Embraer é uma fabricante brasileira de renome global, especializada em aeronaves executivas, comerciais e militares. Como a terceira maior produtora de aeronaves do mundo, destaca-se como referência em inovação, qualidade e segurança na indústria aeroespacial.",
                "Responsabilidades:",
                "• Desenvolvi soluções de front-end para projetos de grande escala e alto impacto.",
                "• Corrigi bugs críticos em tecnologias como TypeScript, JavaScript, React e Java.",
                "• Implementei um sistema de autenticação para usuários internos utilizando PHP, F5 e JavaScript, garantindo controle de acesso robusto e segurança.",
                "Resultados:",
                "• Experiência com a refatoração do processo de autenticação da maior plataforma da empresa com PHP, Javascript e OAuth2, garantindo segurança para 100 mil usuários e reduzindo significativamente o tempo de login durante picos de acesso.",
                "• Prática com correção de bugs em TypeScript, JavaScript, React e Java em solução que impactou 20 mil usuários internos, permitindo a reserva de estações de trabalho via aplicativo, otimizando a gestão de espaços corporativos e aumentando a eficiência organizacional pós-pandemia.",
            ],
        },
        anymarket: {
            title: "Anymarket",
            period: "Janeiro 2021 - Fevereiro 2022",
            description: [
                "AnyMarket é uma plataforma de integração que conecta sistemas ERP de vendedores a diversos marketplaces, simplificando a gestão de catálogos de produtos, inventários e pedidos em um único ambiente centralizado. No meu papel, ofereci suporte técnico para garantir as integrações entre APIs e ERPs, permitindo uma sincronização eficiente de dados entre as plataformas.",
                "Responsabilidades:",
                "• Suporte ao Usuário e Resolução de Problemas: Ofereci suporte ágil por meio de tickets, chat e telefone, solucionando problemas dos clientes com o uso de ferramentas como Kibana, Postman e Oracle SQL.",
                "• Análise de Logs com Kibana: Monitorei e investiguei falhas de integração entre ERPs (VTEX, Bling, Tray…) e marketplaces (Mercado Livre, Amazon, B2W…), utilizando templates avançados que criei para filtros, otimizando a identificação de falhas nos logs.",
                "• Testes de API com Postman: Realizei testes de chamadas de API (GET, POST, etc.) para validar integrações, identificar endpoints com falhas e garantir a troca precisa de dados.",
                "• Consultas em Banco de Dados com Oracle SQL: Diagnostiquei e resolvi problemas executando consultas SQL para validar a integridade dos dados e identificar inconsistências no banco de dados.",
                "• Suporte de Plantão em Períodos Críticos: Assegurei a estabilidade operacional durante momentos de alta demanda, como a Black Friday, solucionando proativamente problemas prioritários.",
                "Resultados e Impacto:",
                "• Otimização de Processos Operacionais: Criei templates avançados no Kibana e scripts SQL no Oracle, reduzindo o tempo de diagnóstico e melhorando o cumprimento de SLAs no suporte ao cliente.",
                "• Sucesso nas Integrações: Resolvi falhas críticas de transmissão de dados, mantendo integrações 100% funcionais em plataformas como a Amazon durante eventos de pico, incluindo a Black Friday.",
                "• Melhoria na Experiência do Cliente: Proporcionei soluções rápidas e precisas, impactando positivamente a satisfação dos clientes e contribuindo para um aumento no Net Promoter Score (NPS)."
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
                            <h4>{experiences[activeTab].title}</h4>
                            <small className="text-muted">{experiences[activeTab].period}</small>
                            <div className="mt-3" style={{ color: 'var(--bs-secondary-color)', textAlign: 'justify' }}>
                                {experiences[activeTab].description.map((desc, index) => (
                                    <p key={index}>{desc}</p>
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
        `
        background-color: #FBDBDB; /* Rosa quando ativo */
        color: var(--bs-primary);
        &::before {
            background-color: #c8023f;
        }
    `}

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

