import React from 'react';

import WiveEffect from '../WiveEffect/WiveEffect';

import './ListItem.scss';

export default function ListItem({id, data}) {

    return (
        <WiveEffect>
            <div className="list-item">
                <span>{data.name}</span>
            </div>
        </WiveEffect>
    )
}
