import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-name">
        <h1>Joha Kim</h1>
      </div>
      <div className="about-section">
        <div className="about-education">
          <div className="about-heading">My Education</div>
          <p className="about-desc">
            I am a junior majoring in Computer Science at Georgia Institute of
            Technology. My area of study within Computer Science include
            Information Internetworks and Intelligence. Although my interest is
            in web development, I also enjoy studying topics including machine
            learning and cyber security. This semester, I am taking classes in
            computer vision and information security.
          </p>
        </div>
      </div>
      <div className="border"></div>
      <div className="about-section">
        <div className="about-hobbies">
          <div className="about-heading">My Hobbies</div>
          <p className="about-desc">
            Ever since I was little, I enjoyed drawing, painting, designing, and
            exploring my creative and artistic side. One of my hobbies include
            using Procreate to draw portraits. I love experimenting with colors
            and shading. My other hobbies include going on walks around campus
            while listening to audio books, which allows me to give my mind a
            break. Because I live away from home, I also developed a love for
            cooking. Cooking allows me to make food that fit perfectly to my
            taste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
