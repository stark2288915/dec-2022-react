import React from 'react';

const Car = ({car}) => {
    let {id, price, year, brand} = car;
    return (
        <div>
            <div>id - {id}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <div>brand - {brand}</div>
        </div>
    );
};

export default Car;

//тут ми від мапу отримуємо окремий ітем де виводиться вся інфа