import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <div className="content">
            <h4>Selecione um username</h4>
            <p><Link to="/aline">bezzocoaline</Link></p>
            <p><Link to="/diego">diego3g</Link></p>
        </div>
    </div>
)

export default Home
