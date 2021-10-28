import React, { Component } from "react";
import Navbar from "../../components/Navbar";

class BasicReact extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        movie_name: "",
        director: "",
        releaseDate: "",
        category: "",
        cast: "",
        duration: "",
        synopsys: "",
        image: null
      }
    };
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.form);
    const formData = new FormData();
    formData.append("name", this.state.form.movie_name);
    for (const data in this.state.form) {
      formData.append(data, this.state.form[data]);
    }
    // untuk cek data di dalam formdata
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  setUpdate = () => {
    console.log("setupdate");
  };

  handleUpdate = () => {
    console.log("handle update");
  };

  handleDelete = () => {
    console.log("delete");
  };

  changeFile = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.files[0]
      }
    });
  };

  render() {
    return (
      <>
        <Navbar />
        {/* <h1>halaman basic react</h1> */}
        <h1>basic react page </h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder=" name movie"
            name="movie_name"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="text"
            placeholder=" category movie"
            name="category"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="date"
            placeholder=" release date movie"
            name="releaseDate"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="text"
            placeholder=" synopsis movie"
            name="synopsis"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="text"
            placeholder=" cast movie"
            name="cast"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="text"
            placeholder=" director movie"
            name="director"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="text"
            placeholder=" duration movie"
            name="duration"
            onChange={(event) => {
              this.changeText(event);
            }}
          />
          <input
            type="file"
            placeholder=" iamge movie"
            name="image"
            onChange={(event) => this.changeFile(event)}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default BasicReact;
