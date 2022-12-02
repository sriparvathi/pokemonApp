const React = require('react')
const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 };
class Index extends React.Component {
   render () {
   const { pokemonList } = this.props;
   console.log(this.props);
    return (
      <div>
      <h1 style ={myStyle}> See All The Pokemon </h1>
      <ul>
          {pokemonList.map((pokemon, i) => {
            return (
              <li>
               <a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a> 
              </li>
            );
          })}
        </ul>
      </div>
     );
    }
 }
 module.exports  = Index;
 

