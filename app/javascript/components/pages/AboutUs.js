import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const AboutUs = () => {
  return (
    <>
      <div className="about-div">
        <h2 className="about-us-title">
          <i>
            MEET THE <span className="team-css">TEAM</span>
          </i>
        </h2>
        <AboutUsCarousel />
      </div>
    </>
  );
};

const items = [
  {
    src: "https://i.postimg.cc/63PzTX08/Untitled-design-copy-4.png",
    altText: "Product Manager",
    caption: "Luis Laurel",
    key: 1,
    linkedin: "https://www.linkedin.com/in/luislaurel/",
    GitHub: "https://github.com/luislaurel",
    description:
      "Hi! My name is Luis, I am US Army veteran who has transitioned over to a FullStack Developer. I am excited about the Front-end of things and always looking to push myself to learn more!",
  },
  {
    src: "https://i.postimg.cc/yNx3rSmZ/Untitled-design.png",
    altText: "Project Manager",
    caption: "Joyce Magistrado",
    key: 2,
    linkedin: "https://www.linkedin.com/in/joyce-magistrado",
    GitHub: "https://github.com/jmagistrado",
    description:
      "Full Stack Web Developer with a strong Customer Success background. Passionate about technology, client experience, leadership, and representation of women in STEM. I have experience with JavaScript, React, Ruby, Rails, and SQL. I hope to bring my extensive understanding of client needs and technical skills together to contribute to the overall client experience in a more impactful way by focusing on developing web applications.",
  },
  {
    src: "https://i.postimg.cc/0yxg9YjL/Untitled-design-copy.png",
    altText: "Tech Lead",
    caption: "Cody Mundy",
    key: 3,
    linkedin:" https://www.linkedin.com/in/cody-l-mundy/",
    GitHub: "https://github.com/HeavyArms0511",
    description:
      "Hey! My name is Cody Mundy and I’m a Full-Stack Web Developer. I am a veteran who served in the United States Army and enjoy spending my time coding, going to the gym, and playing video games. I am passionate about all forms of technology and enjoy writing code and improving my knowledge every day. On days that I’m not working or playing games I spend time with my horse of a dog Tank who is a Great Dane.",
  },
  {
    src: "https://i.postimg.cc/wj9rC9bz/Untitled-design-copy-2.png",
    altText: "Design Lead",
    caption: "Jason Brown",
    key: 4,
    linkedin:"https://www.linkedin.com/in/jason-brown-6b4707b",
    GitHub: "https://github.com/jayaries329",
    description:
      "Full stack software developer who's self-driven and passionate about cutting edge technologies. Problem solver and fast learner with strong interpersonal communication skills. Experienced team player that leads by example with a purpose of inspiring and teaching others. Resourceful and proactive developer highly focused on developing quality product with strict attention to detail.",
  },
];

function AboutUsCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="about-content">
            <img
              style={{ width: "350px", height: "350px" }}
              src={item.src}
              alt={item.altText}
            />
          </div>
          <div style={{ margin: "auto 5px", flex: "50%" }}>
            <h2 className="name">{item.caption}</h2>
            <h3 className="job">
              <i>{item.altText}</i>
            </h3>
            <p className="description">{item.description}</p>
            <div className="about-links">
              <a href={item.linkedin} className="linkedin" target="blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={item.GitHub} className="github" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="about-bg">
        <Carousel
          className="about-us-container"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <div className="div-padding">
        <img
          src="https://i.postimg.cc/L6vcPfgc/logo-1.png"
          className="about-logo"
        ></img>
      </div>
    </>
  );
}

export default AboutUs;
