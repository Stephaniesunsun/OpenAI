import React, { useState, useEffect } from 'react';
import { EngineRow } from './engine/EngineRow';
import styled from '@emotion/styled';
import { Container, Title, Loading, mediaQuery } from '../style';
import { getEngine } from '../api/api';

export const Engines = () => {
    const [engines, setEngines] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getData = async ()=>{
        setLoading(true);
        const data = await getEngine({});
        let temp=[];
        for(let item of data.data){
            temp.push(item.id);
        }
        setEngines(temp);
        setLoading(false);
    }
    
      useEffect(()=>{
          getData();
      },[]);
    
    return (
        <Container>
            <Title>choose an engine:</Title>
            <MapContainer>
                {loading?
                <Loading>
                    loading...
                </Loading>:
                engines.map(engine=>(
                    <EngineRow engine={engine} />
                ))}
            </MapContainer>
        </Container>
    );
};

export const Engine = styled('div')`
    display:grid;
    grid-template-columns: repeat(3, 200px);
`

const MapContainer = styled('div')`
    margin-top:15px;
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    gap:20px;

    @media ${mediaQuery.laptop}{
        grid-template-columns: repeat(6, 1fr);
    }
    @media ${mediaQuery.tablet}{
        grid-template-columns: repeat(4, 1fr);
    }
`
