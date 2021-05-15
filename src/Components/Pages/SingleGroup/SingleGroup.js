import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import {db} from '../../../base';
import {useParams} from 'react-router-dom';

import '../Groups/Groups.scss';

import Loader from '../../Loader/Loader';
import ListItem from '../../ListItem/ListItem';

export default function SingleGroup() {

    const refElem = useRef();

    const {id} = useParams();

    const limit = 15;

    const [lastId, setLastId] = useState('');
    const [posts, setPosts] = useState([]);

    const [details] = useDocument(db.collection('groups').doc(id));

    const [channels, loading, error] = useCollection(db.collection('groups').doc(id).collection('exercise').orderBy('createAt', 'desc').startAfter(lastId).limit(limit));

    useEffect(() => {
        console.log(channels?.docs);
        if(channels?.docs.length){
            if(posts.length) {
                if(posts[posts.length -1].id === channels.docs[channels?.docs.length - 1].id || posts[0].id === channels.docs[1].id){
                    setPosts(channels?.docs);
                } else {
                    setPosts(posts.concat(channels?.docs));
                }
            } else {
                setPosts(channels?.docs);
            }
        }
    // eslint-disable-next-line
    }, [channels]);

    console.log(error)

    return (
        <div className="groups">
            {loading && !lastId ? <Loader /> : (
                <>
                    <h3><span>{details?.data().name}</span></h3>
                    <div className="groups-list" ref={refElem}>
                        {
                            posts?.map(doc =>{
                                return (
                                    <Link key={doc.id} to={`/group/${doc.id}`}>
                                        <ListItem id={doc.id} data={doc.data()} />
                                    </Link>
                                );
                            })
                        }
                    </div>
                    {(!channels?.docs.length || channels?.docs.length < limit || loading) ? null : (
                        <div className="groups-btn-more" onClick={() => setLastId(channels?.docs[channels?.docs.length - 1].data().createAt)}>
                            <span>Загрузить еще</span>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
