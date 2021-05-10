import './App.scss';
import {useEffect, useContext} from 'react';

import {Context} from '../../context';

import Groups from '../Groups/Groups';
import NavBar from '../NavBar/NavBar';

function App() {

    console.log(process.env.NODE_ENV);

    const {size, screen} = useContext(Context);

    return (
        <div className="App" style={{fontSize: size}}>
            <NavBar />
            {screen === 'groups' && <Groups />}
        </div>
    );
}

export default App;
