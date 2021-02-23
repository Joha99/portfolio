import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__question">
        <h1>who am i?</h1>
      </div>
      <div className="about__section">
        <img src="./images/shape-1.png" className="about__section-img" />
        <div className="about__heading">background</div>
        <p className="about__desc">
          I first learned front-end development during my internship in Summer
          2020. It was the first time studying and using front-end frameworks
          like Angular. Since then, I've been self studying front-end languages
          and frameworks including HTML, CSS/Sass, and React.js and expanded my
          knowledge to backend development, studying JavaScript, Node.js,
          Express, and MongoDB. I love web development because it allows me to
          play around with many tools and technologies.
        </p>
      </div>
      <div className="about__section">
        <img src="./images/shape-1.png" className="about__section-img" />
        <div className="about__heading">education</div>
        <p className="about__desc">
          I am a junior majoring in Computer Science at Georgia Institute of
          Technology. My area of study within Computer Science include
          Information Internetworks and Intelligence. Although my work is mostly
          web development, I also enjoy studying topics including machine
          learning and cyber security. This semester, I am taking classes in
          computer vision and information security.
        </p>
      </div>
      <div className="about__section">
        <img src="./images/shape-1.png" className="about__section-img" />
        <div className="about__heading">hobbies</div>
        <p className="about__desc">
          Ever since I was little, I enjoyed drawing, painting, designing, and
          exploring my creative and artistic side. One of my hobbies include
          using Procreate to draw portraits. I love experimenting with colors
          and shading. My other hobbies include going on walks around campus
          while listening to audio books, which allows me to give my mind a
          break. Because I live away from home, I also developed a love for
          cooking in attempt to recreate home cooked food.
        </p>
      </div>
    </div>
  );
};

export default About;
