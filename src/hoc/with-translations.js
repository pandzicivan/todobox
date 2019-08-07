import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
  {
    translations: state.translations,
  }
);

function withTranslations(WrappedComponent) {
  return class Register extends React.Component {
    translate = (key) => {
      return this.props.translations[key] || key;
    }

    render() {
      return (
        <WrappedComponent translate={this.translate} {...this.props} />
      );
    }
  };
}

export default (WrappedComponent) => connect(
    mapStateToProps,
    null
)(withTranslations(WrappedComponent));
