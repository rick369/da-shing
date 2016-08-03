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
        <Helmet
          title={t('nav.logout')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('logout:meta.description') },
            { property: 'og:title', content: t('logout:meta.og.title') },
            { property: 'og:url', content: t('logout:meta.og.url') },
            { property: 'og:image', content: t('logout:meta.og.image') },
            { property: 'og:description', content: t('logout:meta.og.description') },
          ]}
        />
        <h2>{t('nav.logout')}</h2>
        <p>{t('logout:loggedOut')}</p>
      </section>
    );
  }
}
