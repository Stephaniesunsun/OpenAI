import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux'
import { setEngine } from '../../redux/reducer';

export const EngineRow = ({engine}) => {
    const [selected, setSelected] = useState('');
    const selectedEngine = useSelector((state)=>state.engine.engine);
    const dispatch = useDispatch();
    const highlight = selected && selectedEngine===selected;
    
    const handleSelect = (e) =>{
        setSelected(e.target.innerText)
    }

    useEffect(()=>{
        dispatch(setEngine(selected));
    },[selected]);

    return (
        <Container>
            <Engine onClick={handleSelect} style={{border: highlight?'3px solid #000000':'none', borderRadius:'10px'}}>
                {engine}
            </Engine>
        </Container>
    );
};

const Container = styled('div')`
    width: 100px;
    height:70px;
    cursor: pointer;

`
const Engine = styled('div')`
    font-family: 'Noto Serif', serif;
    text-align: center;
    padding: 5px;
    font-size: 14px;
}
`


