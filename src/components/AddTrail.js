import React, { Component } from 'react';

export default class TrailTable extends Component {
  state = {
    user: null,
    trails: [],
    name: "",
    park: "",
    address: "",
    usage: "",
    surface: "",
    rating: "",
    ada: "",
    length: ""
  }
  handleChange = (e) => {
    e.persist();
    this.setState(() => ({ [e.target.name]: e.target.value }));
  }
  render() {
    return (
      <div className="container">
        {/* <div> */}
        <form onSubmit={this.handleSubmit}>
          <div class="parent">
            <input
              type="text"
              name="name"
              placeholder="Trail Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="park"
              placeholder="Park Name"
              onChange={this.handleChange}
              value={this.state.park}
            />
            <input
              type="text"
              name="address"
              placeholder="Trail Address"
              onChange={this.handleChange}
              value={this.state.address}
            />
            <input
              type="text"
              name="usage"
              placeholder="Usage Type"
              onChange={this.handleChange}
              value={this.state.usage}
            />
          </div>
          <div class="parent">
            <input
              type="text"
              name="surface"
              placeholder="Surface Type"
              onChange={this.handleChange}
              value={this.state.surface}
            />
            <input
              type="text"
              name="rating"
              placeholder="Trail Rating"
              onChange={this.handleChange}
              value={this.state.rating}
            />
            <input
              type="text"
              name="ada"
              placeholder="ADA Accessible"
              onChange={this.handleChange}
              value={this.state.ada}
            />
            <input
              type="text"
              name="length"
              placeholder="Length (miles)"
              onChange={this.handleChange}
              value={this.state.length}
            />
          </div>
          <button>Add Trail</button>
        </form>
      </div>
    );
  }
}