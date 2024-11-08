import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn ">
              <h2>Skills</h2>
              <button class="button-40" role="button">
              Visual Design
              </button>
              <button class="button-40" role="button">
              Adobe Creative Suite (Photoshop, Illustrator, InDesign)
              </button>
              <button class="button-40" role="button">
              Branding & Identity
              </button>
              <button class="button-40" role="button">
              Print & Digital Design
              </button>
              <button class="button-40" role="button">
              Illustration
              </button>
              <button class="button-40" role="button">
              Typography
              </button>
              <button class="button-40" role="button">
              User-Centered Design
              </button>
              <button class="button-40" role="button">
              Wireframing & Prototyping (Figma, Sketch, Adobe XD)
              </button>
              <button class="button-40" role="button">
              Interaction Design
              </button>
              <button class="button-40" role="button">
              Information Architecture
              </button>
              <button class="button-40" role="button">
              Usability Testing
              </button>
              <button class="button-40" role="button">
              Design Systems
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
export default Skills;