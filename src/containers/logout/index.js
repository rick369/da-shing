import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import { logout } from '../../actions/user';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch(logout());
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate(['common', 'logout'])
export default class Logout extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    onLogout: React.PropTypes.func.isRequired,
  };
  static contextTypes = {
    router: React.PropTypes.any.isRequired,
  };
  componentDidMount() {
    const { onLogout } = this.props;
    const { router } = this.context;
    onLogout();
    router.replace('/');
  }
  render() {
    const { t } = this.props;
    return (
      <section>
        <Helmet title="Logout" />
        <h2>{t('nav.logout')}</h2>
        <p>{t('logout:loggedOut')}</p>
      </section>
    );
  }
}
