import React, {useState, useRef} from 'react';

import '../styles/tour-details.css';

import avatar from '../assets/images/avatar.jpg'

import {Container, Row, Col, Form, ListGroup } from 'reactstrap';
import {useParams} from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import Booking from '../components/Booking/Booking';
import NewsLetter from '../shared/Newsletter';

function TourDetails() {
  const reviewMsgRef = useRef('');

  const [tourRating, setTourRating] = useState(null);

  //format date
  const options = {day:'numeric', month:'long',year:'numeric'};

  const {id} = useParams();
  const tour = tourData.find((tour) => tour?.id === id);
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;
  const {totalRating, avgRating} = calculateAvgRating(reviews);

  //submit the review request to the server
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`);

    //later we call our api
  }

  return <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour_content">
              <img src={photo} alt="" />

              <div className="tour_info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour_rating d-flex align-items-center gap-1">
                      <i className="ri-star-fill" style={{'color' : "var(--secondary-color)"}}></i>{avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not Rated' : <span>({reviews?.length})</span> }
                  </span>

                  <span>
                    <i className='ri-map-pin-user-fill'></i> {address}
                  </span>
                </div>

                <div className="tour_extra-details">
                  <span>
                    <i className='ri-map-pin-2-line'></i> {city}
                  </span>
                  <span>
                    <i className='ri-money-dollar-circle-line'></i> ${price} /per person
                  </span>
                  <span>
                    <i className='ri-map-pin-time-line'></i> {distance} km
                  </span>
                  <span>
                    <i className='ri-group-line'></i> {maxGroupSize} person
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length}) reviews</h4>

                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                    <span onClick={() => setTourRating(1)}>
                      1 <i className='ri-star-s-fill'></i>
                    </span>

                    <span onClick={() => setTourRating(2)}>
                      2 <i className='ri-star-s-fill'></i>
                    </span>

                    <span onClick={() => setTourRating(3)}>
                      3 <i className='ri-star-s-fill'></i>
                    </span>

                    <span onClick={() => setTourRating(4)}>
                      4 <i className='ri-star-s-fill'></i>
                    </span>

                    <span onClick={() => setTourRating(5)}>
                      5 <i className='ri-star-s-fill'></i>
                    </span>
                  </div>

                  {/* =========== tour review section start============ */}
                  <div className="review_input">
                    <input type="text" placeholder='share your thoughts' ref={reviewMsgRef}/>
                    <button className='btn primary__btn text-white' type='submit'>Submit</button>
                  </div>

                  {/* =========== tour review section end ============ */}
                </Form>

                <ListGroup className='user_reviews'>
                  {
                    reviews?.map((review) => (
                      <div className="review_item">
                        <img src={avatar} alt="reviews-images" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Ankit</h5>
                              <p>
                                {
                                  new Date("01-18-2024").toLocaleDateString("en-US", options)
                                }
                              </p>
                            </div>

                            <span className="d-flex align-items-center">
                              5 <i className='ri-star-s-fill'></i>
                            </span>
                          </div>

                          <h6>Amazing Tour</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
              </div>
            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
    <NewsLetter />
  </>
}

export default TourDetails