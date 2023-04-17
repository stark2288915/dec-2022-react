import React, {useEffect, useState} from 'react';
import Launch from "./Launch";

const Launches = () => {
    let [launches, setLaunches] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => {
            const filtered = value.filter(item =>item.launch_year != "2020");
            setLaunches(filtered);
        })
    }, [])

    return (
        <div>
            {
                launches.map((launch, index)=> <Launch launch={launch} key={index}/>)
            }
        </div>
    );
};

export default Launches;