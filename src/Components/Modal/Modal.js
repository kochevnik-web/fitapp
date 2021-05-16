import React, {useRef, useEffect, useContext, useState} from 'react';
import gsap from 'gsap';
import firebase from 'firebase';
import {db} from '../../base';
import {useHistory, useRouteMatch} from 'react-router-dom';
import DatePicker, {registerLocale} from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import {Context} from '../../context';

import "react-datepicker/dist/react-datepicker.css";
import './Modal.scss';

registerLocale('ru', ru);

export default function Modal() {

    const {setShowAdd} = useContext(Context);

    const [animation, setAnimation] = useState(false);
    const [addName, setAddName] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const {location} = useHistory();

    let placeholder = '';
    let path = '';

    if(location.pathname.includes('/fitapp')){
        placeholder = 'группы';
        path = '/fitapp';
    } else if (location.pathname.includes('/group/')) {
        placeholder = 'упражнения';
        path = '/group/:id';
    }

    const {params} = useRouteMatch(path);

    let elRef = useRef(null);

    const addNewData = () => {
        setAnimation(true);
        if(addName) {
            if(location.pathname.includes('/fitapp')){
                db.collection('groups').add({
                    name: addName,
                    createAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            } else if (location.pathname.includes('/group/')) {
                db.collection('groups').doc(params?.id).collection('exercise').add({
                    name: addName,
                    createAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
        }
    }

    useEffect(() => {
        gsap.to(elRef, {
            duration: 0.5,
            scaleX: 1,
            y: 0,
            ease: "power3.inOut"
        });
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(animation){
            gsap.to(elRef, {
                duration: 0.5,
                scaleX: 1.2,
                y: '100%',
                ease: "power3.inOut"
            });

            let timout = setTimeout(() => {
                setShowAdd(false);
            }, 800);

            return () => {
                clearTimeout(timout);
            }
        }
    // eslint-disable-next-line
    }, [animation]);

    return (
        <div className="modal" ref={el => (elRef = el)}>
            <div className="input-wrapp">
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    popperPlacement="bottom-center"
                    locale="ru"
                />
                <div className="input-line"></div>
            </div>
            <div className="input-wrapp">
                <input
                    name="addedName"
                    type="text"
                    value={addName}
                    className="added-name"
                    placeholder={`Добавьте название ${placeholder}`}
                    onChange={(e) => setAddName(e.target.value)}
                />
                <div className="input-line"></div>
            </div>
            <div className="buttons">
                <div className="button" onClick={() => setAnimation(true)}>
                    <span>Отменить</span>
                </div>
                <div className="button" onClick={addNewData}>
                    <span>Добавить</span>
                </div>
            </div>
        </div>
    )
}
