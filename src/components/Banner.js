import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/spaceman.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Skills from "./Skills";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Memoize the `toRotate` array
  const toRotate = useMemo(() => ["Content Writer", "Content Specialist", "Content Strategist"], []);

  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text, toRotate]); // Dependencies include toRotate

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Mansi Bhalothia`}</h1>
                  <br />
                  <p><b>I go by many titles—Content Writer, Content Specialist, Content Strategist—but <span className="highlight">'Storyteller'</span> is my favorite</b></p>
                  <p>I am passionate about creating content that resonates with the audience. I specialize in crafting unique content marketing campaigns that help organizations grow and expand their reach.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Skills />
      </Container>
    </section>
  );
};
