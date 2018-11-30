import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const { selectedBook } = this.props;

    return (
      <React.Fragment>
      { selectedBook
        ? <div>Book information:</div>
        : <div>Please select a book</div>
      }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
//redux state update BookDetail props
  return {
    selectedBook: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetail);
