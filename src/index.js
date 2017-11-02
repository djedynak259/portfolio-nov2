import _ from 'lodash'
import './css/style.css'
import Icon from './logoSample.png'

let component = () => {
  var element = document.createElement('div');


  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());