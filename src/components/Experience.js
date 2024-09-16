import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Experience = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: index % 2 === 0 ? "-100%" : "100%", 
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="timeline-section" id="experience">
        <h1>Experience</h1>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">December 2022 to present</div>
          <div className="timeline-content">
            <h3>Xpertspot </h3>
            <p>
            In an expert spot as a UI/UX and Graphic Designer, I create user-friendly, visually compelling designs using Figma, Photoshop, and Illustrator. My focus is on delivering innovative, pixel-perfect interfaces and impactful branding solutions
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">September 2024 to present</div>
          <div className="timeline-content">
            <h3>Dev soft (remote)</h3>
            <p>
            Working remotely as a UI/UX and Graphic Designer with Dev Soft Tech, I create user-friendly, visually compelling designs using Figma, Photoshop, and Illustrator. My focus is on delivering innovative, pixel-perfect interfaces and impactful branding, while collaborating effectively with the team.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Feburary 2021 to Oct 2022</div>
          <div className="timeline-content">
            <h3>Graphic cell</h3>
            <p>
            As a Graphic Designer with Graphic Cell , I create visually captivating designs using Figma, Photoshop, and Illustrator. I focus on delivering creative, polished branding and digital visuals while collaborating closely with the team to achieve high-impact results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
