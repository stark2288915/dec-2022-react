import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm();
    let save = (car) =>{
        console.log(car);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern:{
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'Бренд має складатися лише з літер'
                    }})}/>
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Save</button>

            </form>
        </div>
    );
};

export default CarForm;