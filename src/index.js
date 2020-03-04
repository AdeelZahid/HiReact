import React from 'react';
import {render} from 'react-dom';



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class App extends React.Component{
  render(){
   return (
      <div style={styles}>
        <h2> {this.props.count} </h2>
      </div>
    )
  }
}

const roott = document.getElementById('root')
render(<App  count={'Adeel Zahid'}/>, roott)

