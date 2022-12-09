const React = require('react')
const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 };
class Show extends React.Component {
   render () {
   const {Pokemon} = this.props;
   
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="../css/style.css"/>
      <h1 style ={myStyle}>Gotta Catch 'Em All</h1>
      <h2>{Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)}</h2>
      <img src = {Pokemon.image}></img>
      <a href = '/pokemon'>BACK</a>
      
      </div>
     );
    }
 }
 module.exports  = Show;
 

