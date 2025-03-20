import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';


export const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [showDropdown, setShowDropdown] = useState(false);

    const projects = [
        {
            id: 13,
            title: "Chatbot com RAG utilizando LangChain e OpenAI",
            description: "Projeto básico de console para criação de chatbots utilizando RAG (Retrieval Augmented Generation) com LangChain e o modelo de linguagem da OpenAI. O chatbot pode responder a perguntas com base em PDFs armazenados em uma pasta.",
            githubUrl: "https://github.com/sofiasawczenko/chatbot_rag_langchain_openai",
            technologies: ["Python", "OpenAI", "RAG", "LangChain"],
            category: "data",
            image: require('../assets/images/rag.png'),
        },
        {
            id: 3,
            title: "Robô com Visão Computacional",
            description: "Projeto de um robô autônomo que usa visão computacional para navegação, desenvolvido com Python, OpenCV e outras tecnologias.",
            githubUrl: "https://github.com/sofiasawczenko/autonomous_robot_computer_vision",
            technologies: ["Python", "OpenCV", "Arduino", "Raspberry Pi"],
            category: "data",
            image: require('../assets/images/robot.png'),
        },
        {
            id: 4,
            title: "Previsão de Insuficiência Cardíaca com Aprendizado Supervisidionado",
            description: "Projeto de predição de insuficiência cardíaca usando um conjunto de dados de Kaggle, com técnicas de pré-processamento de dados e validação com regressão logística.",
            githubUrl: "https://github.com/sofiasawczenko/heart_failure_forecasting",
            technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
            category: "data",
            image: require('../assets/images/heart.png'),
        },
        {
            id: 5,
            title: "Sudoku Solver",
            description: "Back-end em Java para resolver um quebra-cabeça de Sudoku utilizando o algoritmo de retrocesso (backtracking), oferecendo uma solução eficiente para o problema.",
            githubUrl: "https://github.com/sofiasawczenko/sudoku",
            technologies: ["Java", "Maven", "Algoritmo de BackTracking"],
            category: "Back-End",
            image: require('../assets/images/sudoku.png'),
        },
        {
            id: 6,
            title: "Pipeline ETL de Dados Sensíveis de Funcionários",
            description: "Pipeline ETL para processar dados sensíveis de funcionários usando Google Cloud Data Fusion, Cloud Composer, e BigQuery, com foco em eficiência e segurança.",
            githubUrl: "https://github.com/sofiasawczenko/ETL_employee_info_pipeline",
            technologies: ["Python", "GCP", "Cloud Storage", "Cloud Data Fusion", "Big Query", "Looker"],
            category: "data",
            image: require('../assets/images/employee.png'),
        },
        {
            id: 1,
            title: "Assistente Virtual na Extensão do Navegador",
            description: "Assistente virtual com IA integrado ao navegador para oferecer assistência personalizada ao usuário em tempo real, utilizando a API do Google Gemini.",
            githubUrl: "https://github.com/sofiasawczenko/aiva_virtual_assistant_ai",
            technologies: ["JavaScript", "Styled Components", "Gemini API"],
            category: "Front-End",
            image: require('../assets/images/aiva.png'),
        },
        {
            id: 7,
            title: "Análise de Sentimento em Dados Textuais",
            description: "Projeto que analisa o sentimento de dados textuais, usando bibliotecas como NLTK, TextBlob e Newspaper3k para processamento e análise de artigos e textos.",
            githubUrl: "https://github.com/sofiasawczenko/analyzing_text_sentiment",
            technologies: ["Python", "NLTK", "TextBlob", "Newspaper3k"],
            category: "data",
            image: require('../assets/images/sentimento.png'),
        },
        {
            id: 8,
            title: "Análise de Tendências de Vendas com Previsão de Séries Temporais",
            description: "Análise de dados de vendas para identificar tendências e realizar previsões com métodos de séries temporais utilizando Python e bibliotecas como pandas e seaborn.",
            githubUrl: "https://github.com/sofiasawczenko/sales_time_series_analysis",
            technologies: ["Python", "Pandas", "Seaborn"],
            category: "data",
            image: require('../assets/images/timeseries.png'),
        },
        {
            id: 9,
            title: "Pipeline ETL de Estatísticas de Jogos",
            description: "Pipeline para processar e analisar estatísticas de jogos de críquete utilizando serviços do Google Cloud (GCP), como Cloud Functions e Cloud Dataflow.",
            githubUrl: "https://github.com/sofiasawczenko/ETL_cricket_stats",
            technologies: ["Python", "GCP", "Cloud Functions", "Cloud Storage"],
            category: "data",
            image: require('../assets/images/game.png'),
        },
        {
            id: 10,
            title: "Previsão do Clima com Aprendizado Supervisidionado",
            description: "Previsão de condições climáticas utilizando técnicas de regressão linear e ridge regression com base em dados históricos de clima de Nova York.",
            githubUrl: "https://github.com/sofiasawczenko/weather_forecasting",
            technologies: ["Python", "Pandas", "Scikit-learn"],
            category: "data",
            image: require('../assets/images/weather.png'),
        },
        {
            id: 11,
            title: "Previsão do Preço de Imóveis com Aprendizado Supervisidionado",
            description: "Desenvolvimento de um modelo de machine learning para prever o preço médio dos imóveis em Boston, utilizando análise de dados e técnicas de regressão.",
            githubUrl: "https://github.com/sofiasawczenko/forecasting_house_price",
            technologies: ["Python", "Pandas", "Scikit-learn"],
            category: "data",
            image: require('../assets/images/supervision.png'),
        },
        {
            id: 12,
            title: "Web Scraping de Produtos de Marketplace com Python",
            description: "Scraping de dados de produtos de marketplaces usando Python, BeautifulSoup e Requests, com armazenamento em banco de dados SQLite para análise posterior.",
            githubUrl: "https://github.com/sofiasawczenko/meli_webscraping",
            technologies: ["Python", "BeautifulSoup", "SQLite", "Requests"],
            category: "data",
            image: require('../assets/images/webscraping.png'),
        },
        {
            id: 14,
            title: "Aplicação de Cadastro de Usuário",
            description: "Front-end de uma aplicação de cadastro de usuários, desenvolvido com Vite e React.js, focado na criação de um formulário de registro de usuários.",
            githubUrl: "https://github.com/sofiasawczenko/user_registration",
            technologies: ["React.js", "Vite", "JavaScript"],
            category: "Front-End",
            image: require('../assets/images/registration.png'),
        },
        {
            id: 15,
            title: "App de Integração de Funcionários",
            description: "Aplicação focada no desenvolvimento de front-end com React.js, HTML, CSS e JavaScript, projetada para melhorar a colaboração e integração entre funcionários de uma empresa.",
            githubUrl: "https://github.com/sofiasawczenko/myschneider_app",
            technologies: ["React.js", "HTML", "CSS", "JavaScript"],
            category: "Front-End",
            image: require('../assets/images/schneider_app.png'),
        },
        {
            id: 2,
            title: "Integração de Carteira de Criptomoeda com Banco de Dados",
            description: "Desenvolvimento do back-end para carteira de criptomoeda utilizando Java e Oracle, permitindo a realização de operações CRUD com segurança.",
            githubUrl: "https://github.com/sofiasawczenko/cripto_wallet",
            technologies: ["Java", "Maven", "Oracle BD"],
            category: "Back-End",
            image: require('../assets/images/crypto_wallet.png'),
        },
    ];   
    

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

        const handleShowMore = () => {
            setVisibleProjects((prevVisible) => prevVisible + 3); // Incrementa 3 projetos ao clicar em "Ver Mais"
        };

    useEffect(() => {
        ScrollReveal().reveal('.project-card', {
            distance: '80px',
            duration: 2000,
            easing: 'ease-out',
            origin: 'bottom',
            opacity: 0,
            interval: 200,
            reset: false,
            once: true,
        });
    }, [filteredProjects]);

    return (
        <Container id="projects" className="py-5">
            <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 style={{ color: 'var(--bs-primary)' }} className="fw-bold">
                        Minhas Experiências
                    </h2>
                    <h3 style={{ color: 'var(--bs-dark)' }} className="fw-bold">
                        Principais Projetos
                    </h3>
                    <h2 className="text-muted">Para ver todos acesse meu Github.</h2>
                </div>
                <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                    <img
                        src={require('../assets/images/filter.svg').default}
                        alt="Filtrar"
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                    <span
                        style={{
                            color: 'var(--bs-primary)',
                            cursor: 'pointer',
                            marginLeft: '5px',
                        }}
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Filtrar
                    </span>
                    {showDropdown && (
                        <div
                            style={{
                                position: 'absolute',
                                color: 'var(--bs-primary)',
                                top: '120%',
                                right: '0',
                                zIndex: 10,
                                backgroundColor: 'white',
                                border: '1px solid #D2D2D2',
                                borderRadius: '0.3rem',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                minWidth: '150px',
                                padding: '0.5rem 0',
                            }}
                        >
                            {[
                                { label: 'Ver Todos', value: 'all' },
                                { label: 'Front-End', value: 'Front-End' },
                                { label: 'Back-End', value: 'Back-End' },
                                { label: 'Dados', value: 'data' },
                            ].map((option) => (
                                <div
                                    key={option.value}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        cursor: 'pointer',
                                        backgroundColor:
                                            selectedCategory === option.value ? '#FBDBDB' : 'transparent',
                                        color: 'var(--bs-primary)',
                                    }}
                                    onClick={() => {
                                        setSelectedCategory(option.value);
                                        setShowDropdown(false);
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#FBD2D2';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedCategory !== option.value) {
                                            e.target.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>


            <p style={{color: 'var(--bs-secondary-color)' }} className="text-center">
                {filteredProjects.length} projeto(s) encontrado(s) na categoria "
                {selectedCategory === 'all' ? 'Todos' : selectedCategory}". 
            </p>

            <Row className="justify-content-center g-1">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
    <Col key={project.id} md={4} className="mb-3 d-flex justify-content-center">
        <div
            className="bg-white project-card d-flex flex-column"
            style={{
                width: '100%',
                height: '100%',
                border: '1px solid #D2D2D2',
                borderRadius: '0.5rem',
                maxWidth: '100%',
                maxHeight: '400px',
            }}
        >
            {/* Imagem do projeto */}
            <img
                src={project.image}
                alt={project.title}
                style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '0.5rem',
                    borderTopRightRadius: '0.5rem',
                    margin: 0,
                }}
            />
            <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title><strong>{project.title}</strong></Card.Title>
                    <div className="d-flex">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark me-2"
                        >
                            {/* <img
                                src={require('../assets/images/githubCard.png')}
                                alt="GitHub"
                                width="25"
                                height="25"
                            /> */}
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                        >
                            <img
                                src={require('../assets/images/open.png')}
                                alt="Redirect"
                                width="25"
                                height="25"
                            />
                        </a>
                    </div>
                </div>
                <Card.Text className="mb-3">{project.description}</Card.Text>
                <div>
                    <strong>Linguagens: </strong>
                    {project.technologies.join(', ')}
                </div>
            </Card.Body>
        </div>
    </Col>
))}
</Row>


            {filteredProjects.length > visibleProjects && (
                <div className="text-center mt-4 mb-5">
                    <button
                        className="btn"
                        style={{
                            color: 'var(--bs-primary)',
                            border: '1px solid var(--bs-primary)',
                            fontSize: 'clamp(1rem, 2.5vw, 1rem)',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '0.3rem',
                            backgroundColor: 'transparent',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#FBD2D2';
                            e.target.style.color = 'var(--bs-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'var(--bs-primary)';
                        }}
                        onClick={handleShowMore}
                    >
                        Ver Mais
                    </button>
                </div>
            )}
        </Container>
    );
};