import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { IndexLink } from 'react-router';

import ToggleLanguage from '../toggle-language';

import Nav from './components/nav';

function mapStateToProps(state) {
  return {
    user: state.user.toJS(),
  };
}

function mapDispatchToProps() {
  return {};
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class Header extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t, user } = this.props;
    return (
      <header>
        <h1><IndexLink to="/">{t('title')}</IndexLink></h1>
        <Nav user={user} />
        <p>
          {'Hello, '}
          <span className="name">{user.name}</span>
        </p>
        <div>
          <ToggleLanguage />
        </div>
      </header>
    );
  }
}
