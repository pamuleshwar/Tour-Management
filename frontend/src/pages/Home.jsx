import React from 'react';

import '../styles/home.css';

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'

import Subtitle from '../shared/Subtitle';

const Home = () => {
  return <>
  {/* ========== hero section starts ======== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="hero_content">
          <div className="hero_subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt='subtitle img' />
          </div>
          <h1>Travelling opens the door to creating <span className="highlight"> memories</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ea consectetur minus eum amet in quos esse eligendi laudantium alias ullam, nobis dolorem facilis, temporibus asperiores earum repellat, molestiae distinctio!</p>
        </div>
        </Col>

        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt='hero-img-1' />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt='hero-video' controls autoPlay/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt='hero-img-2' />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/* ========== hero section ends ======== */}
  </>
}

export default Home