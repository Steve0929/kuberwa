import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    //console.log("Usuario "+JSON.stringify(this.props.user))

  }

  componentWillReceiveProps(props) {}

  componentWillUnmount() {}


  render() {
    return (
      <div style={{width: '100%',backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)', minHeight: '50em'}}>
       <div style={{textAlign: 'center'}}>
            <CircularProgress
            variant="indeterminate"
            style={{marginTop: '15em', color: '#FFEB3B'}}
            size={200}
            thickness={10}
            value={100}
            />
          <h2 style={{fontFamily: 'system-ui', color: 'white'}}>Loading game...</h2>
        </div>
      </div>
    );
  }
}

export default Loader;
