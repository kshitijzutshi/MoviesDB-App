import React, { Component } from "react";
import { Button } from "reactstrap";

class Card extends Component {
  viewMovie() {
    // console.log(this.props.movie.title);
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-centre">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-centre">
              <div className="overflow">
                <img
                  alt="poster"
                  width="120"
                  src={this.props.movie.poster_src}
                />
              </div>
              <div className="card=body text-dark">
                <h4 className="card-title">{this.props.movie.title}</h4>
                <p className="card-text text-secondary">
                  {this.props.movie.overview}
                </p>
                {/* <input
                  type="button"
                  onClick={this.viewMovie.bind(this)}
                  value="View"
                /> */}
                <Button
                  onClick={this.viewMovie.bind(this)}
                  color="primary"
                  size="sm"
                  active
                >
                  View
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
