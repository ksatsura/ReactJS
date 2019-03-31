//imports
import React, {Component} from 'react';
import FilmAsset from '../FilmAsset/FilmAsset';
import '../style.css';
//constants
const key = 'qwert1';

class FilmCollection extends Component {
    
    constructor(props){
        super(props);
    }

    render() {

        return (
            <ul className='film-collection'>
                { this.props.assets.map((asset, i) => <FilmAsset key={key+i} url={asset.imgUrl} title={asset.title} genre={asset.genre} releaseDate={asset.releaseDate} handleClick={this.props.handleClick} />) }
            </ul>);
    }
}

export default FilmCollection;