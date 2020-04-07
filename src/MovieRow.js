import React from "react";
import "./App.css";

class MovieRow extends React.Component {
  viewMovie() {
    // console.log(this.props.movie.title);
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      // <table key={this.props.movie.id}>
      //   <tbody>
      //     <tr>
      //       <td>
      //         <img alt="poster" width="120" src={this.props.movie.poster_src} />
      //       </td>
      //       <td>
      //         <h3>{this.props.movie.title}</h3>
      //         <p>{this.props.movie.overview}</p>
      //         <input
      //           type="button"
      //           onClick={this.viewMovie.bind(this)}
      //           value="View"
      //         />
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>

      <div className="movie-card-container">
        <div className="image-container">
          <div className="bg-image">
            <img alt="poster" width="280" src={this.props.movie.poster_src} />
          </div>
        </div>
        <div className="movie-info">
          <h2>Movie Details</h2>
          <div>
            <h1>{this.props.movie.title}</h1>
            <small>Released Date: {this.props.movie.release_date}</small>
          </div>

          <p>{this.props.movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieRow;
