import './App.scss';
import {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Context} from '../../context';

import Groups from '../Pages/Groups/Groups';
import Group from '../Pages/SingleGroup/SingleGroup';
import NavBar from '../NavBar/NavBar';

function App() {

    console.log(process.env.NODE_ENV);

    const {size} = useContext(Context);

    return (
        <div className="App" style={{fontSize: size}}>
            <NavBar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Groups} />
                    <Route path="/group/:id" component={Group} />
                    <Route path="*" component={Groups} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
