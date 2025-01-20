import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';


export const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [showDropdown, setShowDropdown] = useState(false);

    const projects = [
        {
            id: 2,
            title: "Carteira de Criptomoeda",
            description: "Back-end para carteira de criptomoeda com Java e Oracle.",
            githubUrl: "https://github.com/sofiasawczenko/cripto_wallet",
            technologies: ["Java", "Maven", "Oracle BD"],
            category: "Back-End",
            image: require('../assets/images/crypto_wallet.png'),
        },
        {
            id: 3,
            title: "Robô com Visão Computacional",
            description: "Robô autônomo com visão computacional.",
            githubUrl: "https://github.com/sofiasawczenko/autonomous_robot_computer_vision",
            technologies: ["Python", "Pandas", "Matplotlib"],
            category: "data",
            image: require('../assets/images/robot.png'),
        },
        {
            id: 4,
            title: "Clone Disney+",
            description: "Clone do Disney+ feito em React.js.",
            githubUrl: "https://github.com/sofiasawczenko/disney_plus_clone",
            technologies: ["React.js", "CSS", "JavaScript"],
            category: "Front-End",
            image: require('../assets/images/disney_clone.png'),
        },
        {
            id: 5,
            title: "Sudoku Solver",
            description: "Back-end puro em Java para resolver Sudoku.",
            githubUrl: "https://github.com/sofiasawczenko/sudoku",
            technologies: ["Java", "Maven"],
            category: "Back-End",
            image: require('../assets/images/sudoku.png'),
        },
        {
            id: 6,
            title: "ETL com dados sensíveis",
            description: "Pipeline ETL usando Google Cloud.",
            githubUrl: "https://github.com/sofiasawczenko/ETL_employee_info_pipeline",
            technologies: ["Python", "GCP", "Cloud Storage", "Cloud Data Fusion", "Big Query", "Looker"],
            category: "data",
            image: require('../assets/images/etl_pipeline.png'),
        },
        {
            id: 1,
            title: "Assistente Virtual AIVA",
            description: "Assistente virtual com IA integrado ao navegador.",
            githubUrl: "https://github.com/sofiasawczenko/aiva_virtual_assistant_ai",
            technologies: ["JavaScript", "Styled Components, Gemini API"],
            category: "Front-End",
            image: require('../assets/images/aiva.png'),
        },
        {
            id: 7,
            title: "Discovery Skin",
            description: "Landing page para monitoramento de manchas na pele.",
            githubUrl: "https://github.com/sofiasawczenko/discovery_skin_app",
            technologies: ["HTML", "CSS", "JavaScript"],
            category: "Front-End",
            image: require('../assets/images/discovery_skin.png'),
        },
        {
            id: 8,
            title: "My Scheneider App",
            description: "App para integração de funcionários.",
            githubUrl: "https://github.com/sofiasawczenko/myschneider_app",
            technologies: ["HTML", "CSS", "JavaScript"],
            category: "Front-End",
            image: require('../assets/images/schneider_app.png'),
        },
        {
            id: 9,
            title: "Pipeline com estatísta de Cricket",
            description: "Pipeline de estatísticas de Cricket com Google Cloud.",
            githubUrl: "https://github.com/sofiasawczenko/ETL_cricket_stats",
            technologies: ["Python", "Cloud Composer", "Cloud Storage"],
            category: "data",
            image: require('../assets/images/cricket_pipeline.png'),
        },
    ];
    

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    const handleShowMore = () => {
        setVisibleProjects((prevVisible) => prevVisible + 6);
    };

    useEffect(() => {
        ScrollReveal().reveal('.project-card', {
            distance: '50px',
            duration: 2000,
            easing: 'ease-out',
            origin: 'bottom',
            opacity: 0,
            interval: 200,
            reset: false,
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
                        Projetos
                    </h3>
                    <h2 className="text-muted">Apps que desenvolvi.</h2>
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
                                height: '200px',
                                objectFit: 'cover',
                                borderTopLeftRadius: '0.5rem',
                                borderTopRightRadius: '0.5rem',
                                margin: 0,
                            }}
                        />
                        <Card.Body className="p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Card.Title>{project.title}</Card.Title>
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
