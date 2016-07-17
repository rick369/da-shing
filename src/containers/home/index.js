import React from 'react';
import { translate } from 'react-i18next';

class Home extends React.Component {
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <div>
        <h2>{t('home')}</h2>
      </div>
    );
  }
}

Home.propTypes = {
  t: React.PropTypes.func,
};

export default translate('nav', { wait: true })(Home);
