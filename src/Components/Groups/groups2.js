import React, {useEffect, useState, useRef} from 'react';
import {db} from '../../base';

import './Groups.scss';

import Loader from '../Loader/Loader';
import ListItem from '../ListItem/ListItem';

export default function Groups() {

    const refElem = useRef();

    async function postsFirstBatch(){
        try {
          const data = await db
            .collection("groups")
            .orderBy("createAt", "desc")
            .limit(12)
            .get();

            let posts = [];
            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    postId: doc.id,
                    name: doc.data().name
                });
                lastKey = doc.data().createAt;
            });

            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }

    async function postsNextBatch(key){
        try {
          const data = await db
            .collection("groups")
            .orderBy("createAt", "desc")
            .startAfter(key)
            .limit(12)
            .get();

            let posts = [];
            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    postId: doc.id,
                    name: doc.data().name
                });
                lastKey = doc.data().createAt;
            });
            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }

    const [posts, setPosts] = useState([]);
    const [lastKey, setLastKey] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        postsFirstBatch()
        .then((res) => {
            setPosts(res.posts);
            setLastKey(res.lastKey);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    const fetchMorePosts = (key) => {
        if (key) {
            setLoading(true);
            postsNextBatch(key)
            .then((res) => {
                console.log(res.posts.length);
                // add new posts to old posts

                setLastKey(false);
                setPosts(posts.concat(res.posts));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
        }
    };

    window.addEventListener('scroll', function(){
        if(!loading) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const height = refElem.current?.offsetHeight;
            const hw = window.innerHeight;

            if((height + refElem.current?.offsetTop - scrollTop) < hw) {
                fetchMorePosts(lastKey);
            }
        }

    });

    return (
        <div className="groups">
            {/* {loading ? <Loader /> : ( */}
                <>
                    <h3><span>Группы:</span></h3>
                    <div className="groups-list" ref={refElem}>
                        {
                            posts.map(doc =>{
                                return (<ListItem key={doc.postId} id={doc.id} name={doc.name} />);
                            })
                        }
                    </div>
                </>
            {/* )} */}
        </div>
    )
}
