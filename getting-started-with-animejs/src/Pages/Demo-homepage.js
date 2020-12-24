import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './Demo.css';

class Demohomepage extends Component{

    render(){
        anime({
            targets: '.square',
            translateX: 270,
            rotateZ: 360,
            scale: 2,
            duration: 5000,
            loop: true
          });
        return(
            <div className="section_a">
                <div className="square"></div>
                {/* <h2>Hello World</h2> */}
            </div>
        )
    }
}

export default Demohomepage;