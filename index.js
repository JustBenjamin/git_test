import React from 'react';
import ReactDOM from 'react-dom';
import tile  from './tile.jpg';
import './tiles.css';

class Tiles extends React.Component {
    render() {
        

        return(
            <div>
                <h2>LinkTiles</h2>
    
                <div class="row">
                <div class="column">
                    <img src={tile}  alt="Link Tile" style={{width:'100%'}}/>   
                </div>

                <div class="column">
                    <img src={tile}  alt="Link Tile" style={{width:'100%'}}/>    
                </div>

                <div class="column">
                    <img src={tile}  alt="Link Tile" style={{width:'100%'}}/>    
                </div>

                <div class="column">
                    <img src={tile}  alt="Link Tile" style={{width:'100%'}}/>   
                </div>

                <div class="column">
                    <img src={tile}  alt="Link Tile" style={{width:'100%'}}/>    
                </div>

                <div class="column">
                    <img src={tile}  alt="Link Tile" style={{width:'100%'}}/>    
                </div>
            </div>



            </div>
        );
    }

}

ReactDOM.render(<Tiles/>, document.getElementById('root'));