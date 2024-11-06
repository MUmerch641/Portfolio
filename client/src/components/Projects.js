import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/1.jpg';
import projImg2 from '../assets/img/2.jpg';
import projImg3 from '../assets/img/3.jpg';
import projImg4 from '../assets/img/4.jpg';
import projImg5 from '../assets/img/5.jpg';
import projImg6 from '../assets/img/6.jpg';
import projImg7 from '../assets/img/7.jpg';
import projImg8 from '../assets/img/8.jpg';
import projImg9 from '../assets/img/9.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';

import projImgWeb1 from '../assets/img/Detail Image 01web.jpg';
import projImg1m from '../assets/img/1web.jpg';
import projImgWeb2 from '../assets/img/2web.jpg';
import projImgWeb3 from '../assets/img/3web.jpg';
import projImgWeb4 from '../assets/img/4web.jpg';
import projImgWeb5 from '../assets/img/5web.jpg';

import projSocialImg1 from '../assets/img/1s.jpg';
import projSocialImg2 from '../assets/img/2s.jpg';
import projSocialImg3 from '../assets/img/3s.jpg';
import projSocialImg4 from '../assets/img/4s.jpg';
import projSocialImg5 from '../assets/img/5s.jpg';
import projSocialImg6 from '../assets/img/6s.jpg';
import projSocialImg7 from '../assets/img/7s.jpg';
import projSocialImg8 from '../assets/img/8s.jpg';
import projSocialImg9 from '../assets/img/9s.jpg';
import projSocialImg10 from '../assets/img/10s.jpg';
import projSocialImg11 from '../assets/img/11s.jpg';
import projSocialImg12 from '../assets/img/12s.jpg';
import projSocialImg13 from '../assets/img/13s.jpg';
import projSocialImg14 from '../assets/img/14s.jpg';


import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import optional effects
import TrackVisibility from 'react-on-screen';
import $ from 'jquery';
import 'tilt.js'; // Ensure Tilt.js is imported

export const Projects = () => {
  const projectsMobile = [
    {
      id: 1,
      title: 'User Experience',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      id: 2,
      title: 'Medical care',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      id: 3,
      title: 'E cart',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      id: 4,
      title: 'Babysitter',
      description: 'Design & Development',
      imgUrl: projImg4,
    },
    {
      id: 5,
      title: 'AlertGuard',
      description: 'Design & Development',
      imgUrl: projImg5,
    },
    {
      id: 6,
      title: 'PArkMyCar',
      description: 'Design & Development',
      imgUrl: projImg6,
    },
    {
      id: 7,
      title: 'GlowFit',
      description: 'Design & Development',
      imgUrl: projImg7,
    },
    {
      id: 8,
      title: 'Sociafly',
      description: 'Design & Development',
      imgUrl: projImg8,
    },
    {
      id: 9,
      title: 'Learning AppWeb',
      description: 'Design & Development',
      imgUrl: projImg9,
    },
  ];

  const projectsWeb = [
    {
      id: 1,
      title: 'Defeat Depression',
      description: 'Design & Development',
      imgUrl: projImgWeb1,
    },
    {
      id: 5,
      title: 'Build Dream',
      description: 'Design & Development',
      imgUrl: projImg1m,
    },
    {
      id: 2,
      title: 'Pixel IPTV',
      description: 'Design & Development',
      imgUrl: projImgWeb2,
    },
    {
      id: 3,
      title: 'Pet Cat',
      description: 'Design & Development',
      imgUrl: projImgWeb3,
    },
    {
      id: 4,
      title: 'VERSACE',
      description: 'Design & Development',
      imgUrl: projImgWeb4,
    },
    {
      id: 5,
      title: 'E COMMERCE SITE',
      description: 'Design & Development',
      imgUrl: projImgWeb5,
    },
  ];

  const projectSocial = [
    { id: 1, title: 'Social Campaign 1', description: 'Post Design & Engagement', imgUrl: projSocialImg1 },
    { id: 2, title: 'Social Campaign 2', description: 'Post Design & Engagement', imgUrl: projSocialImg2 },
    { id: 3, title: 'Social Campaign 3', description: 'Post Design & Engagement', imgUrl: projSocialImg3 },
    { id: 4, title: 'Social Campaign 4', description: 'Post Design & Engagement', imgUrl: projSocialImg4 },
    { id: 5, title: 'Social Campaign 5', description: 'Post Design & Engagement', imgUrl: projSocialImg5 },
    { id: 6, title: 'Social Campaign 6', description: 'Post Design & Engagement', imgUrl: projSocialImg6 },
    { id: 7, title: 'Social Campaign 7', description: 'Post Design & Engagement', imgUrl: projSocialImg7 },
    { id: 8, title: 'Social Campaign 8', description: 'Post Design & Engagement', imgUrl: projSocialImg8 },
    { id: 9, title: 'Social Campaign 9', description: 'Post Design & Engagement', imgUrl: projSocialImg9 },
    { id: 10, title: 'Social Campaign 10', description: 'Post Design & Engagement', imgUrl: projSocialImg10 },
    { id: 11, title: 'Social Campaign 11', description: 'Post Design & Engagement', imgUrl: projSocialImg11 },
    { id: 12, title: 'Social Campaign 12', description: 'Post Design & Engagement', imgUrl: projSocialImg12 },
    { id: 13, title: 'Social Campaign 13', description: 'Post Design & Engagement', imgUrl: projSocialImg13 },
    { id: 14, title: 'Social Campaign 14', description: 'Post Design & Engagement', imgUrl: projSocialImg14 },
  ];
  

  useEffect(() => {
    // Initialize Tilt.js for elements with class 'js-tilt'
    const tiltElements = $('.js-tilt');
    tiltElements.tilt({
      glare: false,
      maxGlare: 0,
      perspective: 1500,
      scale: 1,
      reset: true,
    });

    // Cleanup on component unmount
    return () => {
      tiltElements.tilt('destroy');
    };
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__animated animate__fadeIn' : ''}
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">


                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Social media post</Nav.Link>
                    </Nav.Item>
                  </Nav>


                    
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projectsWeb.map((project) => (
                            <Col
                              key={project.id}
                              sm={12}
                              md={6}
                              lg={6}
                              className="mb-4"
                            >
                              <div className="js-tilt">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {projectsMobile.map((project) => (
                            <Col
                              key={project.id}
                              sm={12}
                              md={6}
                              lg={6}
                              className="mb-4"
                            >
                              <div className="js-tilt">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          {projectSocial.map((project) => (
                            <Col
                              key={project.id}
                              sm={12}
                              md={6}
                              lg={6}
                              className="mb-4"
                            >
                              <div className="js-tilt">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
};

// Modify the ProjectCard component to use LazyLoadImage


export default Projects;
