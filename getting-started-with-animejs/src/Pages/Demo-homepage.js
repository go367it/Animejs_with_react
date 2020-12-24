import React, { Component } from 'react';
import './Demo.css';
import { motion } from "framer-motion";

class Demohomepage extends Component{

    render(){
        return(
            <div className="section_a">
                <motion.div className="square"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                />
                <div className="square"></div>
            </div>
        )
    }
}

export default Demohomepage;