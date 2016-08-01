import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

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
@translate(['common', 'dashboard'])
export default class Dashboard extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { user, t } = this.props;
    return (
      <div>
        <Helmet title="Dashboard" />
        <h2>{t('nav.dashboart')}</h2>
        <p>{t('dashboard:youMadeIt')}</p>
        <p>{user.token}</p>
      </div>
    );
  }
}
