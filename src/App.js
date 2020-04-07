import React, { Component } from "react";
import MovieRow from "./MovieRow.js";
import "./App.css";
import $ from "jquery";
// import Card from "./Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // const movies = [
    //   {
    //     id: 0,
    //     title: "Avengers: Infinity War",
    //     poster_src: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    //     overview: "As we go into the age of stones and multiuniverse...",
    //   },
    //   {
    //     id: 1,
    //     title: "Avengers: EndGame ",
    //     poster_src: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
    //     overview: "As we go into the age of stones...",
    //   },
    // ];
    // var movieRows = [];
    // movies.forEach((movie) => {

    //   const movieRow = <MovieRow movie={movie} />

    //   // movieRows.push(<p>{movie.title}</p>)
    //   movieRows.push(movieRow);
    // });
    // this.state = { rows: movieRows };

    this.performSearch("ant man");
  }
  performSearch(searchTerm) {
    console.log("Perform Search operation");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=43ee2d739ec130f257cd31f281c8290c&query=" +
      searchTerm;
    // ajax -> lets you do a sync method calls or a sync calls to fetch data from the internet
    // pass dictionary of options
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        // console.log(searchResults);
        const results = searchResults.results;
        console.log("ALL HERE " + results[0]);
        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
            movie.poster_path;
          console.log(movie.title);
          const movieRow = <MovieRow movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      },
    });
  }

  searchChangeHandler(event) {
    // event target value listens for key press and displays
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="film.svg" alt="app icon" />
              </td>
              <td width="8" />

              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter search term"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
