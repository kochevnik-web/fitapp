import React from 'react';
import {useParams} from 'react-router-dom';

export default function SingleGroup() {

    const {id} = useParams();

    return (
        <div>
            SingleGroup {id}
        </div>
    )
}
