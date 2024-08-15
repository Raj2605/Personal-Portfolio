import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import aihyper from "../assets/img/aihyper.jpg"
import cmoguide from "../assets/img/cmoguide.jpg"
import rolesales from "../assets/img/rolesales.jpg"
import newpractice from "../assets/img/newpractice.jpg"
import financeOP from "../assets/img/financeOP.jpg"
import Cloud from "../assets/img/Cloud.jpg"
import PowerBi from "../assets/img/PowerBi.jpg"
import Flutter from "../assets/img/Flutter.jpg"
import Python from "../assets/img/Python.jpg"
import Vue from "../assets/img/Vue.jpg"
import PR from "../assets/img/PR.jpg"

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WhitePaper</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Newsletter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">Case Study</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Press Release</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="mb-4">
                      <Col md={4}>
                          <iframe 
                          title="WhitePaper 1"
                            src="https://drive.google.com/file/d/1-m7vO7-zhvfYagOsc5kGAhGb9ohoVISL/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Implementing IoT solutions for Smart factories Using Java-based protocol</h4>
                        </Col>
                      <Col md={4}>
                          <iframe 
                          title="WhitePaper 2"
                            src="https://drive.google.com/file/d/1HfKVYAXeBI_eYZ_y9vWU4wMJNUZ4bvSp/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>A New Dawn of innovative-AI and Data Analytics with Python</h4>
                        </Col>
                      <Col md={4}>
                          <iframe 
                          title="WhitePaper 3"
                            src="https://drive.google.com/file/d/1itgRBQTKAuTRDaPdflDGOxtTIZwvRU22/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Achieving Faster Time-To-Market:Leveraging DevOps in Software Development</h4>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col md={4}>
                          <iframe 
                          title="WhitePaper 4"
                            src="https://drive.google.com/file/d/1_HF8KAfd6nj2DsU0xvX-Dql3v_MXlus3/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>How to improve Your Kubernetes Security</h4>
                        </Col>
                        <Col md={4}>
                          <iframe 
                          title="WhitePaper 5"
                            src="https://drive.google.com/file/d/1oL3n9J13_-TQhR_v-YNSBi-lVvIaliBI/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Cloud Security: A Comprehensive survey of challenges and trends</h4>
                        </Col>
                        <Col md={4}>
                          <iframe 
                          title="WhitePaper 6"
                            src="https://drive.google.com/file/d/1K58wgw80bm1dD8BFkSKCbZgzvH9L4IgM/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Java for the Healtcare industry</h4>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row md={4} className="g-5">
                    <Col md={4}>
                      <a href="https://www.clariontech.com/wwa-newsletter/win-with-ai-ai-success-from-hype-to-reality-in-business-performance" target="_blank" rel="noopener noreferrer">
                        <img src={aihyper} alt="Newsletter 1" style={{ width: '110%' , height: 'auto' }} />
                      </a>
                      <h4>AI Success: From Hype to Reality</h4>
                    </Col>
                    <Col md={4}>
                      <a href="https://www.clariontech.com/wwa-newsletter/win-with-ai-a-cmos-guide-to-integrating-ai-in-marketing" target="_blank" rel="noopener noreferrer">
                        <img src={cmoguide} alt="Newsletter 2" style={{ width: '110%' , height: 'auto' }} />
                      </a>
                      <h4>Win With AI: A CMO's Guide to integrating Generative AI in Marketing</h4>
                    </Col>
                    <Col md={4}>
                      <a href="https://www.clariontech.com/wwa-newsletter/win-with-ai-sales-heads-insights-into-ais-transformative-role" target="_blank" rel="noopener noreferrer">
                        <img src={rolesales} alt="Newsletter 4" style={{ width: '110%' , height: 'auto' }} />
                      </a>
                      <h4>A Sales Head's insights into AI's Tranformative Roles in Sales</h4>
                    </Col>
                    <Col md={4}>
                      <a href="https://www.clariontech.com/wwa-newsletter/win-with-ai-transform-finance-operation-with-ai-solutions" target="_blank" rel="noopener noreferrer">
                        <img src={financeOP} alt="Newsletter 5" style={{ width: '110%' , height: 'auto' }} />
                      </a>
                      <h4>Win with AI:Transform Finance operation with AI Solutions</h4>
                    </Col>
                    <Col md={4}>
                      <a href="https://www.clariontech.com/wwa-newsletter/win-with-ai-leverage-ai-for-sustainable-development-across-industries" target="_blank" rel="noopener noreferrer">
                        <img src={newpractice} alt="Newsletter 6" style={{ width: '110%' , height: 'auto' }} />
                      </a>
                      <h4>Insights from Head of New Practice on Leveraging AI for Sustainable Development </h4>
                    </Col>
                  </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      <Col md={4}>
                      <a href="https://www.clariontech.com/blog/testing-mobile-apps-in-the-cloud-benefits-and-strategies" target="_blank" rel="noopener noreferrer">
                        <img src={Cloud} alt="Blog 1" style={{ width: '100%' , height: 'auto' }} />
                      </a>
                      <h4>Testing Mobile Apps in the Cloud: Benefits and strategies </h4>
                    </Col>
                        <Col md={4}>
                        <a href="https://www.clariontech.com/blog/future-of-power-bi-whats-next-in-data-visualization" target="_blank" rel="noopener noreferrer">
                        <img src={PowerBi} alt="Blog 2" style={{ width: '100%' , height: 'auto' }} />
                      </a>
                      <h4>Future of PowerBi:WHat's Next in Data visualization?</h4>
                        </Col>
                        <Col md={4}>
                        <a href="https://www.clariontech.com/blog/best-flutter-widgets-for-app-development" target="_blank" rel="noopener noreferrer">
                        <img src={Flutter} alt="Blog 3" style={{ width: '100%' , height: 'auto' }} />
                      </a>
                      <h4>Best Flutter Widgets for App Development</h4>
                        </Col>
                        <Col md={4}>
                        <a href="https://www.clariontech.com/blog/python-for-predictive-maintenance-in-manufacturing" target="_blank" rel="noopener noreferrer">
                        <img src={Python} alt="Blog 4" style={{ width: '100%' , height: 'auto' }} />
                      </a>
                      <h4>How to use Python for Predictive Maintenance in Manufacturing</h4>
                        </Col>
                        <Col md={4}>
                        <a href="https://www.clariontech.com/blog/best-vuejs-frameworks-for-app-development" target="_blank" rel="noopener noreferrer">
                        <img src={Vue} alt="Blog 5" style={{ width: '100%' , height: 'auto' }} />
                      </a>
                      <h4>Best Vue.js Frameworks to Boost Your App Development Experience</h4>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="forth">
                      <Row>
                        <Col md={4}>
                          <iframe 
                          title="Case Study 1"
                            src="https://drive.google.com/file/d/1TM-x5H1PG0Yg5BJu-T0N8N8FBphPHmmY/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Improving Patient Care and Provider Efficency</h4>
                        </Col>
                        <Col md={4}>
                          <iframe 
                          title="Case Study 2"
                            src="https://drive.google.com/file/d/1Q-Dt90Qphmj0IQ0jSBHI3QUm3p-rbhGy/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Java for Health Care industry</h4>
                        </Col>
                        <Col md={4}>
                          <iframe 
                          title="Case Study 3"
                            src="https://drive.google.com/file/d/1v5FBJ4_GzH-QIZVxaW80eu5yeQ26i_Ci/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Manufactring Solutions</h4>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <Row>
                        <Col md={4}>
                          <iframe 
                          title="Press-Release"
                            src="https://drive.google.com/file/d/1Iezua6t1vz3JtXaVF3MCWLjXIwtvZYbU/preview"
                            width="100%"
                            height="300px"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                          <h4>Pingsafe joins AWS Accelerate Program</h4>
                        </Col>
                        <Col md={4}>
                        <a href="https://www.prweb.com/releases/clarion-technologies-strengthens-java-and-python-development-services-integrating-ai-devops-cloud-and-mobility-for-enhanced-innovation-and-scalability-302003206.html" target="_blank" rel="noopener noreferrer">
                        <img src={PR} alt="Press-Release 2" style={{ width: '110%' , height: 'auto' }} />
                      </a>
                      <h4>Clarion Technologies Strengthens Java and Python Development Services, Integrating AI, DevOps, Cloud, and Mobility for Enhanced Innovation and Scalability</h4>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="colorsharp"></img>
    </section>
  )
}
