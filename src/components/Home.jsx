import "../css/Home.css";
import { useState, useEffect } from "react";
import useIcons from "../useIcons";
import devs from "../assets/devData";
import data from "../assets/dummy.json";
import Card from "./UI/Card";

const Home = () => {
  const [dummy, setDummy] = useState(data.dummy);

  const { linkedinIcon, twitterIcon, githubIcon } = useIcons();

  const contributors = devs.map((dev) => (
    <div key={dev.id} className="dev">
      <h5>{dev.name}</h5>
      <div className="icons">
        <a href={dev.linkedin}>{linkedinIcon}</a>
        <a href={dev.twitter}>{twitterIcon}</a>
        <a href={dev.github}>{githubIcon}</a>
      </div>
    </div>
  ));
  useEffect(() => {
    setDummy(dummy);
  }, [dummy]);

  const features = dummy.map((item) => <Card data={item} />);

  return (
    <>
      <section id="home" className="section">
        <div className="home-hero-text">
          <h1>Feelz - Validate your feelings</h1>
          <p>Feelz is a social media app for sharing your feelings and mood with an image</p>
        </div>
        <div className="home-feature">
          <div className="feature-card">{features[0]}</div>

          <div className="feature-text">
            <h2>The Picture-Perfect Social Media Experience</h2>
            <p>We believe that everyone has a story to tell and our goal is to make sharing those stories as easy and enjoyable as possible.</p>
          </div>
        </div>
        <div className="home-feature reverse">
          <div className="feature-card">{features[1]}</div>

          <div className="feature-text">
            <h2>A unique way to express emotions and connect with others through shared experiences</h2>
            <p>
              Whether you're a seasoned photographer or just looking for a fun way to share your memories, FEELZ is the perfect platform for you. So
              why wait? Start sharing your story with the world today!
            </p>
          </div>
        </div>
        <div className="home-feature">
          <div className="feature-card">{features[2]}</div>

          <div className="feature-text">
            <h2>Built by</h2>
            <p>Built by a bunch of enthusiastic frontend developers for the Chingu voyage 42. You can connect and get to know us better</p>
            <div className="devs">{contributors}</div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <small className="footer-text">&copy; Gecko 11</small>
      </footer>
    </>
  );
};

export default Home;
