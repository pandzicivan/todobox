import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
  {
    translations: state.translations,
  }
);

const WithTranslations = (WrappedComponent) => {
  return function WithTranslationsComponent(props) {
    const {
      translations,
    } = props;
  
    const translate = (key) => {
      return translations[key] || key;
    }
  
    return <WrappedComponent translate={translate} {...props} />
  }
}

export default (WrappedComponent) => connect(mapStateToProps)(WithTranslations(WrappedComponent));
