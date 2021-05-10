import React from 'react';

import './ListItem.scss';

export default function ListItem({id, data}) {
    return (
        <div className="list-item">
            <span>{data.name}</span>
        </div>
    )
}
