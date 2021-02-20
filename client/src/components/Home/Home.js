import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="intro">
        <div className="intro__paragraph">
          <h1>
            i'm <p className="highlight highlight-1">Joha</p>,
          </h1>

          <h2>
            a <p className="highlight highlight-2">web</p>{" "}
            <p className="highlight highlight-3">developer</p>
          </h2>
        </div>
      </div>
      <div className="img">
        <img src="./me.png" alt="Me" />
      </div>
    </section>
  );
};

export default Home;
