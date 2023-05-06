import React, {useEffect, useState} from 'react';
import Fly from "./Fly";

const AllFly = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(()=> {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                const filtered = value.filter(item => item.launch_year !== "2020");
                setLaunches(filtered);
            });
    }, []);

    return (
        <div>
            {
                launches.map(value => <Fly key={1} arg={value}/>)
            }
        </div>
    );
};

export default AllFly;