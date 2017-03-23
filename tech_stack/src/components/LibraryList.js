import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}

const mapStateToProps = state => {
  const libraries = state.libraries;
  return { libraries };
};

export default connect(null, mapStateToProps)(LibraryList);
