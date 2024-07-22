import React from 'react';

import '../styles/home.css';

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

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
            <video src={heroVideo} alt='hero-video' muted autoPlay loop/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt='hero-img-2' />
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
  </section>
  {/* ========== hero section ends ======== */}

  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services_subtitle">What we serve</h5>
          <h2 className="services_title">We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/* ==================featured tour seciont start ==================== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className="mb-5">
          <Subtitle subtitle={"Explore"}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>
  {/* ==================featured tour seciont end ==================== */}

  {/* ================ experience section start ========================= */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience_content">
            <Subtitle subtitle={"Experience"} />

            <h2>
              With our all experience <br /> we will serve you
            </h2>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />Neque doloremque excepturi rerum delectus accusamus porro, ullam ipsa? Commodi repellendus officiis dolor.</p>
          </div>

          <div className="counter_wrapper d-flex align-items-center gap-5">
            <div className="counter_box">
              <span>12k+</span>
              <h6>Successful Trip</h6>
            </div>

            <div className="counter_box">
              <span>2k+</span>
              <h6>Regular</h6>
            </div>

            <div className="counter_box">
              <span>15</span>
              <h6>Years</h6>
            </div>
          </div>
        </Col>

        <Col lg='6'>
          <div className="experience_img">
            <img src={experienceImg} alt="experience img" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/* ================ experience section end ========================= */}

  {/* ========= gallery section start ============= */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={"Gallery"} />
          <h2 className="gallery_title">
            Visit our customers tour gallery
          </h2>
        </Col>
        <Col lg='12'>
        <MasonryImagesGallery />
        </Col>
      </Row>
    </Container>
  </section>
  {/* ========= gallery section end ============= */}

  {/* ============== Testimonial section start ================= */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={"Fans Love"} />
          <h2 className="testimonial_title">What our fans say about us</h2>
        </Col>

        <Col lg='12'>
          <Testimonial />
        </Col>
      </Row>
    </Container>
  </section>
  {/* ============== Testimonial section end ================= */}

  {/* ================= news letter ====================== */}
  <Newsletter />
  {/* ================= news letter ====================== */}
  </>
}

export default Home