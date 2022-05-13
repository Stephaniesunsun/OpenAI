import React, { useState, useEffect } from 'react';
import { getEngine } from '../api/api';
import { EngineRow } from './engine/EngineRow';

export const Engines = () => {
    const [engines, setEngines] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async ()=>{
        setLoading(true);
        const data = await getEngine({});
        console.log(data)
        setEngines(data.data);
        setLoading(false);
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div>
            choose an engine:
            {loading?
            <>
                loading...
            </>:
            engines.map(engine=>(
                <EngineRow engine={engine} />
            ))
            }
        </div>
    );
};
