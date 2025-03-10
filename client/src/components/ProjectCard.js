// ProjectCard.js
import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${imgUrl}`);
    setImageError(true);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {imageError ? (
          <div className="image-error-placeholder">
            <div className="error-content">
              <span>{title}</span>
              <small>Image failed to load</small>
            </div>
          </div>
        ) : (
          <LazyLoadImage
            src={imgUrl}
            alt={title}
            effect="blur"
            placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23333333'/%3E%3C/svg%3E"
            width="100%"
            height="auto"
            onError={handleImageError}
            threshold={200}
          />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
