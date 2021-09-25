import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add as addition, multiply } from '../../utilities/storage';

const Cosmetics = () => {
    // const sum = addition(23, 5);
    // const res = multiply(2, 4);

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch("/cosmetics.json")
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    // reduce for getting the all total 

    const total = cosmetics.reduce((previous, current) => previous + current.price, 0);


    return (
        <div>
            <h2>Shop my Cosmetics Total Price:{total}</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;