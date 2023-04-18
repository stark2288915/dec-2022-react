import React, {useEffect, useState} from 'react';
import {carService} from "../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    let[cars, setCars] = useState([]);
    useEffect(()=> {
        carService.getAll().then(value=>value.data).then(value=>setCars(value));
    }, [])

    return (
        <div>
            <CarForm/>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;

//тут рендер всіх крів. юзефект ми передали запрос де маємо масив всіх карів. а потім ми цей масив передали в сетКАр.
//масив карів ми передали в компоненту кар, і відпрацьовуємо через мап.