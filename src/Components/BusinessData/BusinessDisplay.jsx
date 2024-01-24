import React from 'react';

function BusinessDisplay({ business }) {
    
    return (
        <div>
            <h1>{business.name}</h1>
            <p><strong>Address:</strong> {business.address}</p>
            <p><strong>Phone:</strong> {business.phone}</p>
            <p><strong>Owner:</strong> {business.owner}</p>
            <p><strong>Description:</strong> {business.description}</p>
        </div>
    );
}

export default BusinessDisplay;
