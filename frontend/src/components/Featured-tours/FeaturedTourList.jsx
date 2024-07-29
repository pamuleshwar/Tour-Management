import React from 'react';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

import TourCard from '../../shared/TourCard';

import { Col } from 'reactstrap';

const FeaturedTourList = () => {

  const {data : featuredTours, loading, error} = useFetch(`${BASE_URL}/tour/search/getFeaturedTours`);

  
  return <>
  {
    loading && <h4>Loading..............</h4>
  }
  {
    error && <h4>{error}</h4>
  }
  {!loading && !error &&
    featuredTours?.data?.map((tour) => (<Col lg='3' className="mb-4" key={tour?._id}>
        <TourCard tour={tour}/>
    </Col>))
  }
  </>
}

export default FeaturedTourList