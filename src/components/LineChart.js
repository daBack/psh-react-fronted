import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import {AreaChart} from 'react-easy-chart';

const lcStyle = {
  gridColumnStart: '2',
  gridColumnEnd: '4',
  gridRowStart: '3',
  gridRowEnd: '5',
  width: '100%',
  display: 'flex',
  alignItems:'flex-end',
  backgroundColor: '#fcfcfc',
}

class LineChart extends Component {
    render() {
        return (
          <AreaChart style={lcStyle}
            areaColors={['#147D31', '#147D31']}
            data={[
              [
                { x: 1, y: 20 },
                { x: 2, y: 10 },
                { x: 3, y: 25 }
              ]
            ]}
          />
        );
    }
}

export default LineChart;
