import React from 'react';

const ContentCard = ({card}) => {
    return (
        <div className='card'>
            
            <div />

            <h3>{card.id}. {card.title}</h3>
            <p>{card.desc}</p>
        </div>
    );
}

export default ContentCard;
