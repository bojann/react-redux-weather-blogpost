import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPost, deleteBlogPost } from '../actions/index';
import PropTypes from 'prop-types';
import { Jumbotron, Button } from 'react-bootstrap';
import history from "../components/history";

class PostShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlogPost(id);
  }

  handleDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deleteBlogPost(id, () => { history.push('/blog') })
  }

  render() {
    const { title, categories, content, id } = this.props.post;

    return(
      <Jumbotron data-post-id={id}>
        <h3>{title}</h3>
        <p>Categories: {categories}</p>
        <p>Post content: {content}</p>
        <p>
          <Button bsStyle="danger" onClick={this.handleDeleteClick}>Delete post</Button>
        </p>
      </Jumbotron>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {post: state.posts[ownProps.match.params.id]}
}

PostShow.propTypes = {
  fetchBlogPost: PropTypes.func,
  posts: PropTypes.shape({
    title: PropTypes.string,
    categories: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

export default connect(mapStateToProps, { fetchBlogPost, deleteBlogPost })(PostShow);
