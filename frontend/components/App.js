import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import '../assets/stylesheets/base.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('/api/users')
        .then((response) => {
            console.log(response);
            this.setState({
                data: response.data.users
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { name } = this.props;
        return (
            <div>
            <h1>Hello, {name}!</h1>
            <ul>
                {this.state.data.map(i => <li>{i}</li>)}
            </ul>
            </div>
        );
    }
}

App.propTypes = {
    name: PropTypes.string,
};

export default App;
