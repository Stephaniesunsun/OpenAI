import React from 'react';
import { ResponseRow } from './response/ResponseRow';
import styled from '@emotion/styled';
import { Container, mediaQuery } from '../style';

export const Response = ( {entries}) => { 
    return (
        <Container>
            <Title>
                responses:
            </Title>
            <MapContainer>
                {
                    entries.map(entry=>(
                        <ResponseRow 
                            entry={entry}
                        />
                    ))
                }
            </MapContainer>
        </Container>
    );
};

const Title = styled('p')`
    display: block;
    font-size:20px;
    font-weight: 400;
    font-family: 'Titillium Web', sans-serif;
    font-weight: bold;
`
const MapContainer = styled('div')`
    display:grid;
    grid-template-columns: repeat(3, 1fr);

    @media ${mediaQuery.laptop}{
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${mediaQuery.tablet}{
        grid-template-columns: repeat(1, 1fr);
    }
`