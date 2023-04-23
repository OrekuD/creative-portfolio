import React from "react";
import classes from "./index.module.scss";
import bannerImage from "../../assets/il_banner.jpg";
import slide1 from "../../assets/il_slide_1.jpg";
import slide2 from "../../assets/il_slide_2.jpg";
import slide3 from "../../assets/il_slide_3.jpg";
import slide4 from "../../assets/il_slide_4.jpg";
import slide5 from "../../assets/il_slide_5.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const bannerImage1Ref = React.useRef<HTMLImageElement>(null);
  const bannerImage2Ref = React.useRef<HTMLImageElement>(null);
  const titleRef = React.useRef<HTMLParagraphElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const bannerLabel1Ref = React.useRef<HTMLParagraphElement>(null);
  const bannerLabel2Ref = React.useRef<HTMLParagraphElement>(null);
  const sectionTitle1Ref = React.useRef<HTMLParagraphElement>(null);
  const sectionDescription1Ref = React.useRef<HTMLParagraphElement>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const slides1Ref = React.useRef<HTMLDivElement>(null);
  const footerLabelRef = React.useRef<HTMLParagraphElement>(null);
  const currentlyUnavailableRef = React.useRef<HTMLParagraphElement>(null);
  const sayHelloRef = React.useRef<HTMLParagraphElement>(null);
  const dribbleRef = React.useRef<HTMLParagraphElement>(null);
  const twitterRef = React.useRef<HTMLParagraphElement>(null);
  const subStackRef = React.useRef<HTMLParagraphElement>(null);

  const slides = React.useMemo(
    () => [slide1, slide2, slide3, slide4, slide5],
    []
  );

  React.useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        headerRef.current,
        {
          opacity: 0,
          translateY: -10,
        },
        {
          opacity: 1,
          translateY: 0,
          delay: 0.4,
        }
      )
      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          translateY: 70,
        },
        {
          opacity: 1,
          translateY: 0,
          delay: 0.5,
        }
      )
      .fromTo(
        bannerLabel1Ref.current,
        {
          opacity: 0,
          translateY: 50,
        },
        {
          opacity: 1,
          translateY: 0,
        }
      )
      .fromTo(
        bannerLabel2Ref.current,
        {
          opacity: 0,
          translateY: 50,
        },
        {
          opacity: 1,
          translateY: 0,
          delay: -0.3,
        }
      )
      .fromTo(
        bannerImage1Ref.current,
        {
          opacity: 0,
          translateY: "5%",
        },
        {
          opacity: 1,
          translateY: "0%",
          delay: -0.3,
        }
      );

    gsap.fromTo(
      bannerImage1Ref.current,
      {
        rotateX: 15,
        scale: 1.1,
        translateY: "5%",
      },
      {
        rotateX: 0,
        scale: 1,
        translateY: "-15%",
        scrollTrigger: {
          trigger: bannerImage1Ref.current,
          scrub: true,
          end: "45vh",
        },
      }
    );

    gsap.fromTo(
      sectionTitle1Ref.current,
      {
        translateY: 50,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionTitle1Ref.current,
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      sectionDescription1Ref.current,
      {
        translateY: 50,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionDescription1Ref.current,
          start: "top 60%",
        },
      }
    );

    // gsap.fromTo(
    //   slides1Ref.current,
    //   {
    //     translateX: 0,
    //   },
    //   {
    //     translateX: "-100%",
    //     opacity: 1,
    //     ease: Linear.easeNone,
    //     duration: slides.length * 0.8,
    //     repeat: -1,
    //   }
    // );

    gsap.fromTo(
      slides1Ref.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100%",
        scrollTrigger: {
          trigger: sectionTitle1Ref.current,
          start: "top center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      {
        translateY: 50,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      bannerImage2Ref.current,
      {
        rotateX: 15,
        scale: 1.1,
        translateY: "5%",
      },
      {
        rotateX: 0,
        scale: 1,
        translateY: "-15%",
        scrollTrigger: {
          trigger: bannerImage2Ref.current,
          scrub: true,
          end: "45vh",
        },
      }
    );

    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: footerLabelRef.current,
      },
    });

    footerTimeline
      .fromTo(
        footerLabelRef.current,
        {
          translateY: 50,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      )
      .fromTo(
        currentlyUnavailableRef.current,
        {
          translateY: 50,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      )
      .fromTo(
        sayHelloRef.current,
        {
          translateY: 50,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      )
      .fromTo(
        dribbleRef.current,
        {
          translateY: 50,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      )
      .fromTo(
        twitterRef.current,
        {
          translateY: 50,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      )
      .fromTo(
        subStackRef.current,
        {
          translateY: 50,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 1,
        }
      );
  }, []);

  return (
    <div className={classes["container"]}>
      <header className={classes["header"]} ref={headerRef}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            width={38}
            height={38}
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className={classes["hello-button"]}>
          <p>say hello</p>
        </button>
      </header>
      <div className={classes["section"]}>
        <p className={classes["title"]} ref={titleRef}>
          Creative
          <br />
          Portfolio
        </p>
        <p ref={bannerLabel1Ref} className={classes["label"]}>
          This template is for professionals in the creative industry
        </p>
        <p
          ref={bannerLabel2Ref}
          className={`${classes["label"]} ${classes["accent"]}`}
        >
          It offers a minimalistic layout that allows you to showcase your
          skills in a clear and concise manner.
        </p>
      </div>
      <img
        src={bannerImage}
        alt="banner-image"
        className={classes["banner-image"]}
        ref={bannerImage1Ref}
      />
      <div className={classes["bold-section"]}>
        <p className={classes["label"]} ref={sectionTitle1Ref}>
          Be bold, be brave
        </p>
        <p className={classes["description"]} ref={sectionDescription1Ref}>
          Use these sections to write a short and descriptive paragraph about
          the project. Highlight any details that are worth sharing. Show all
          your best work.
        </p>
      </div>
      <div className={classes["slides"]}>
        <div className={classes["wrapper"]} ref={slides1Ref}>
          {slides.map((slide, index) => {
            return (
              <img
                src={slide}
                alt={`Slide ${index}`}
                className={classes["slide"]}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`${classes["section"]} ${classes["description-section"]}`}
      >
        <p className={classes["label"]} ref={descriptionRef}>
          I am committed to ensuring that every aspect of my work, from the
          initial research and planning stages to the final touches, is of the
          highest quality.{" "}
          <span className={classes["accent"]}>
            I value the importance of close collaboration with research and
            engineering teams in order to create designs that have a positive
            impact on our users.
          </span>
        </p>
      </div>
      <img
        src={bannerImage}
        alt="banner-image"
        className={classes["banner-image"]}
        ref={bannerImage2Ref}
      />
      <div className={`${classes["section"]} ${classes["socials"]}`}>
        <p className={classes["label"]} ref={footerLabelRef}>
          Leave some links to your social profiles down below so people can
          easily contact you
        </p>
        <p className={classes["label"]} ref={currentlyUnavailableRef}>
          Currently available
        </p>
        <p
          className={classes["label"]}
          style={{
            color: "#B2A8DF",
          }}
          ref={sayHelloRef}
        >
          Say hello
        </p>
        <p
          className={classes["label"]}
          style={{
            color: "#C490C6",
          }}
          ref={dribbleRef}
        >
          Dribbling on Dribbble
        </p>
        <p
          className={classes["label"]}
          style={{
            color: "#83AFC5",
          }}
          ref={twitterRef}
        >
          Tweeting on Twitter
        </p>
        <p
          className={classes["label"]}
          style={{
            color: "#D8A98D",
          }}
          ref={subStackRef}
        >
          Subbing on Substack
        </p>
      </div>
      <p></p>
      <footer className={classes["footer"]}>
        <p>
          © {new Date().getFullYear()} Creative Portfolio. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
