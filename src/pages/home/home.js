import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../components/MyButton';
class Home extends Component { 
    render() { 
        return (
            <div className="home">
            <div className="content">
                <h4>Selecione um username</h4>
                <MyButton><Link to="/aline">bezzocoaline</Link></MyButton>
                <MyButton><Link to="/elixir">elixir</Link></MyButton>
            </div>
        </div>
        )
    }
}

export default Home;
