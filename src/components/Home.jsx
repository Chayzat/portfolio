import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="line">
        <p className="text">
          <span>ocm{">"}</span> Hi, {"I'm"} Chayzat!
        </p>
      </div>
      <div className="line">
        <p className="text">
          <span>ocm{">"}</span> I code responsive websites.
        </p>
      </div>
      <div className="line">
        <p className="text">
          <span>ocm{">"}</span> I am currently accepting job offers.
        </p>
      </div>
      <div className="line">
        <p className="text">
          <span>ocm{">"}</span> You can contact me at:
        </p>
      </div>
      <div className="line">
        <p className="text">
          <span>{">"} </span>
          <Link to="/">chayzat.oorzhak.2001@mail.ru</Link>
        </p>
      </div>
      <div className="line">
        <p className="text">
          <span>{">"} </span>
          <Link to="/">github.com/Chayzat</Link>
        </p>
      </div>
      <div className="line">
        <p className="text">
          <span>ocm{">"}</span> Have a good day! 🙃
        </p>
      </div>
      <div className="line">
        {" "}
        <p className="text underscore">
          <span>ocm{">"} </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
