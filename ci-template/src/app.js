
import './css/style.css';
import GameSavingLoader from './js/GameSavingLoader';

console.log('app.js started');

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (e) => {
  console.log(`some error ${e}`);
});