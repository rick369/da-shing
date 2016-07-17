import React from 'react';
import { translate } from 'react-i18next';

class Dashboard extends React.Component {
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <div className="dashboard">
        <h2>{t('dashboard')}</h2>
      </div>
    );
  }
}

Dashboard.propTypes = {
  t: React.PropTypes.func,
};

export default translate('nav', { wait: true })(Dashboard);
