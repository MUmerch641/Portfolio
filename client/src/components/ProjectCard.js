import React from 'react';
import { Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <LazyLoadImage
          src={imgUrl} // Replace img with LazyLoadImage
          alt={title} // Add alt prop for accessibility
          effect="blur" // Optional blur effect during loading
          width={500} // Optional width for placeholder
          height={250} // Optional height for placeholder
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}