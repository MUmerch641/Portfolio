import React from 'react';
import { Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <LazyLoadImage
          src={imgUrl}
          alt={title}
          effect="blur"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}