import React, { Component } from 'react';
import axios from 'axios'; //Remember to run "npm i axios"
import './index.css';

export default class Search extends Component {
  myRef = React.createRef()
  search = (params) => {
    const keyWord = this.myRef.current.value;
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        this.props.updateAppState({ isLoading: false, users: response.data.items });
      },
      error => {
        this.props.updateAppState({ isLoading: false, err: error.message });
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={this.myRef} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}