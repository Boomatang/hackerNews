import React, { Component } from 'react';
import NewsItem from '../newsItem';

export default class NewList extends Component {
  render(){

    const list = this.props.posts.map((post, index) => (
      <NewsItem key={index} post={post} />
    ));

    return (
      <div>
        {list}
      </div>
    );
  }
}