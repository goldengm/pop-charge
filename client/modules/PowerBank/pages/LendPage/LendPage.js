import React from 'react';

class LendPage extends React.Component {
  state = {
    sign: '',
    stationSn: ''
  }

  render() {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const sign = params.get('sign');
    const stationSn = params.get('stationSn');
    console.log(sign);

    if (sign==undefined || sign=='') {
      return (
        <div>
          Loading now...
        </div>
      )
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
      </div>
    )
  }
}

export default LendPage;
