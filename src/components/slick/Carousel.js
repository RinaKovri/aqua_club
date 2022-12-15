import React from "react";
import Slider from "react-slick";
import "./index.css";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      reco: {
        name: "laptops",
        items: [
          "https://m.media-amazon.com/images/I/71kQRALd87L._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71M43gZEAqL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71trhuzbhML._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/91e583tQsOL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71aUIVba2bL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71kQRALd87L._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71M43gZEAqL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71trhuzbhML._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/91e583tQsOL._AC_SS450_.jpg",
          "https://m.media-amazon.com/images/I/71aUIVba2bL._AC_SS450_.jpg"
        ]
      },
      show: true
    };
    this.addContent = this.addContent.bind(this);
    this.showhide = this.showhide.bind(this);
  }

  addContent(name) {
    setTimeout(() => {
      this.setState({
        reco: {
          name: this.state.reco.name,
          items: [
            ...this.state.reco.items,
            "https://m.media-amazon.com/images/I/71aUIVba2bL._AC_SS450_.jpg",
            "https://m.media-amazon.com/images/I/71kQRALd87L._AC_SS450_.jpg",
            "https://m.media-amazon.com/images/I/71M43gZEAqL._AC_SS450_.jpg"
          ]
        }
      });
    }, 1000);
  }

  showhide() {
    this.setState({ ...this.state, show: !this.state.show });
  }

  render() {
    console.log("rendering carousel");
    const getSettings = (reco) => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: (current, next) => {
        const offset = reco.items.length - 6;
        if (next >= offset) {
          this.addContent(reco.name);
        }
      }
    });
    const reco = this.state.reco;
    const settings = getSettings(reco);

    return (
      <div>
        {!!this.state.show && (
          <div className="container">
            <Slider key={reco.name} {...settings}>
              {reco.items.map((item) => (
                <div key={item.split(":")[0]}>
                  <img alt="product" src={item} />
                </div>
              ))}
            </Slider>
          </div>
        )}
        <div>{reco.items.length}</div>
        <button onClick={this.showhide}>showhide</button>
      </div>
    );
  }
}

export default Carousel;
