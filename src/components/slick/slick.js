import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { InView } from "react-intersection-observer";
import "./index.css";

const Carousel = lazy(() => import("./Carousel"));

class ReactSlickDemo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Suspense>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Carousel />
        </Suspense>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Carousel />
        </Suspense>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Carousel />
        </Suspense>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Carousel />
        </Suspense>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <Carousel />
        </Suspense>
      </Suspense>
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
