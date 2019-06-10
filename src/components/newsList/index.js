import React, { Component } from 'react';
import NewsItem from '../newsItem';

export default class NewList extends Component {
  render(){

    const list = this.props.posts.map((post, index) => (
      <NewsItem key={index}
                post={post}
                upvoteHandler={this.props.upvoteHandler}
      />
    ));

    return (
      <div>
        {list}
      </div>
    );
  }
}