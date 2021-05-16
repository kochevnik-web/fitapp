import './App.scss';
import {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Context} from '../../context';

import Groups from '../Pages/Groups/Groups';
import Group from '../Pages/SingleGroup/SingleGroup';
import NavBar from '../NavBar/NavBar';
import Modal from '../Modal/Modal';

function App() {

    console.log(process.env.NODE_ENV);

    const {size, showAdd} = useContext(Context);

    let cls = ['app'];

    if(showAdd) cls.push('app-show-modal')

    return (
        <Router basename="/fitapp">
            <div className={cls.join(' ')} style={{fontSize: size}}>
                <NavBar />
                    <Switch>
                        <Route exact path="/" component={Groups} />
                        <Route path="/group/:id" component={Group} />
                        <Route path="*" component={Groups} />
                    </Switch>
                {showAdd && <Modal />}
            </div>
        </Router>
    );
}

export default App;
