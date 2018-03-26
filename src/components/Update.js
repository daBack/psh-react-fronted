import React, {Component} from 'react'
import Toast from './Toast'

const style = {
  display: 'flex',
  flexDirection: 'column',
  gridColumnStart: '1',
  gridColumnEnd: '2',
  gridRowStart: '3',
  gridRowEnd: '5',
  backgroundColor: '#fcfcfc',
}

const article = {
  margin: '10%',
  flex: '5',
  textAlign: 'center',
}
const buttonWrapper = {
  flex: '3',
}

const pt = {
  paddingTop: '8%',
}
class Update extends Component {

  render() {
    return (
      <div style={style} className="update">
        <article style={article}>
          <p>
            Ta det lugnt! Vi uppdaterar dina fakturor åt dig.
          </p>
          <p style={pt}>
            Vill du inte vänta så kan du uppdatera fakturorna här:
          </p>
        </article>
        <div style={buttonWrapper}>
          <Toast/>
        </div>
      </div>
    );
  }
}

export default Update;
