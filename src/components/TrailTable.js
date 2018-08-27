import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class TrailTable extends Component {
  render() {
    return (
      <div>
        <ReactTable
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Park",
              accessor: "park"
            },
            {
              Header: "Address",
              accessor: "address"
            },
            {
              Header: "Usage",
              accessor: "usage"
            },
            {
              Header: "Surface",
              accessor: "surface"
            },
            {
              Header: "Rating",
              accessor: "rating"
            },
            {
              Header: "ADA",
              accessor: "ada"
            },
            {
              Header: "Length (mi)",
              accessor: "length"
            }
          ]}
        />
      </div>
    );
  }
}