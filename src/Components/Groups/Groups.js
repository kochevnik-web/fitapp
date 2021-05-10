import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from '../../base';

import './Groups.scss';

import Loader from '../Loader/Loader';
import ListItem from '../ListItem/ListItem';

export default function Groups() {

    const [channels, loading, error] = useCollection(db.collection('groups'));

    return (
        <div className="groups">
        {loading ? <Loader /> : (
            <>
                <h3><span>Группы:</span></h3>
                <div className="groups-list">
                    {
                        channels?.docs.map(doc =>{
                            return (<ListItem key={doc.id} id={doc.id} data={doc.data()} />);
                        })
                    }
                </div>
            </>
        )}
        </div>
    )
}
