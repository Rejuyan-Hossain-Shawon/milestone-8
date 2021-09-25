import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';


const Cosmetic = (props) => {
    const { name, price, _id } = props.cosmetic
    // event handler for purchase
    const handlePurchase = (id) => {
        addToDb(id);

    }
    // event handler for remove
    const handleRemove = (id) => {
        deleteFromDb(id);
    }

    return (
        <div>
            <h2>name:{name}</h2>
            <p>id:{_id}  Price:{price}</p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;