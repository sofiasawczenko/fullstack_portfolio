import React from "react"; 
import { Container, Row, Col } from "react-bootstrap"; 
import { GlobalStyle } from '../styles/GlobalStyle'; 

export const Footer = () => {
    return (
        <>
            <GlobalStyle /> 
            <footer
                className="text-center py-4 mt-5 footer-mobile"
                // style={{ backgroundColor: 'var(--bs-footer-bg)' }}
            >
                <Container>

                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <div className="d-flex gap-3 justify-content-center">
                                <a
                                    href="https://www.linkedin.com/in/sofia-sawczenko/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                    style={{ fontSize: '1rem' }}
                                >
                                    LinkedIn
                                </a>
                                <div className="vr" style={{ height: '20px', borderLeft: '1px solid #ccc' }}></div>
                                <a
                                    href="https://github.com/sofiasawczenko"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                    style={{ fontSize: '1rem' }}
                                >
                                    GitHub
                                </a>
                                <div className="vr" style={{ height: '20px', borderLeft: '1px solid #ccc' }}></div>
                                <a
                                    href="mailto:sofiawko@gmail.com"
                                    className="text-decoration-none text-dark"
                                    style={{ fontSize: '1rem' }}
                                >
                                    E-mail
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-3">
                        <Col xs="auto">
                            <p className="mb-0" style={{ fontSize: '1rem' }}>
                                &copy; 2024 | Sofia Sawczenko
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};
