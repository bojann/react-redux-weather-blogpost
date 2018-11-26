import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fetchBlogPosts } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map as _map } from 'lodash';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderPosts = () => {
    return _map(this.props.posts, (post) => {
      let path = `/post/${post.id}`;

      return (
        <Link key={post.id} to={path}>
          <Panel bsStyle="success" data-post-id={post.id} onClick={this.handlePanelClick}>
            <Panel.Heading>
              <Panel.Title componentClass="h3">
                { post.title }
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              Category: { post.categories || 'Candy' }
              <br />
              Text: { post.content }
            </Panel.Body>
          </Panel>
        </Link>
      )
    })
  }

  render() {
    return(
      <div>{ this.renderPosts() }</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBlogPosts }, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {posts: state.posts};
}

PostList.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  categories: PropTypes.string,
  content: PropTypes.string,
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ])
}

PostList.defaultProps = {
  posts: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
