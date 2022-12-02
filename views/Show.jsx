const React = require('react')
const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 };
class Show extends React.Component {
   render () {
   const Pokemon = this.props.pokemon;
   
    return (
      <div>
      <h1 style ={myStyle}>Gotta Catch 'Em All</h1>
      <h2>{Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)}</h2>
      <img src = {Pokemon.img + ".jpg"}></img>
      <a href = '/pokemon'>BACK</a>
      
      </div>
     );
    }
 }
 module.exports  = Show;
 

