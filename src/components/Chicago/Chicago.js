import MarioAdrian1 from "../../assets/images/mario-and-adrian-1.jpg";
import MarioAdrian2 from "../../assets/images/mario-and-adrian-2.jpg";

import "./Chicago.css";

const Chicago = () => {
  return (
    <section className="chicago">
      <section>
        <header>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </header>
        <main>
          <p>
            Little Lemon is a charming neighbourhood bistro that serves simple
            food and classic cocktails in a lively but casual environment.
          </p>
          <br />
          <p>
            The restaurant features a locally-sourced menu with daily specials.
          </p>
        </main>
      </section>
      <section className="mario-adrian">
        <img
          className="mario-adrian-1"
          src={MarioAdrian1}
          alt="Mario and Adrian discussing a recipe"
        />
        <img
          className="mario-adrian-2"
          src={MarioAdrian2}
          alt="Mario and Adrian happy about their recipe"
        />
      </section>
    </section>
  );
};

export default Chicago;
