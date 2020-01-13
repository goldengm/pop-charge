import React from 'react';

class LendPage extends React.Component {
  state = {
    sign: '',
    stationSn: ''
  }

  render() {
    const { sign, stationSn } = this.props.params;

    if (sign===undefined || sign==='') {
      return (
        <div>
          Loading now...
        </div>
      );
    }

    return (
      <div>
        <p>
          <strong>Sign:&nbsp;</strong>
          <span>{sign}</span>
        </p>
        <p>
          <strong>Station Sn:&nbsp;</strong>
          <span>{stationSn}</span>
        </p>
        <p>
          <button type="submit">Lend</button>
        </p>
      </div>
    );
  }
}

export default LendPage;
