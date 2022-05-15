import React from 'react';
import { configColor } from '../../utils/colorConfig';
import styled from '@emotion/styled';

export const ResponseRow = ({entry}) => {
    return (
        <Container>
            <Upper>
                <Title>
                    Prompt: 
                </Title>
                <Answer>
                    {entry.question}
                </Answer>
            </Upper>
            <Lower>
                <Title>
                    Response
                </Title>
                <Answer>
                    {!entry.answer?
                        <p>no response to this prompt</p>
                        :
                        <p>{entry.answer}</p>
                    }
                </Answer>
            </Lower>
        </Container>
    );
};

const Container = styled('div')`
    width: 280px;
    height: 420px;
    border: 1px solid black;
    margin: 20px 0px 0px 70px;
    border: 2px solid ${configColor.black};
    border-radius: 10px;
    overflow: hidden;
`

const Title = styled('p')`
    display:inline;
    font-size: 18px;
    font-family: 'Noto Serif', sans-serif;
`

const Answer =styled('p')`
    display:inline;
    font-family: 'Titillium Web', sans-serif;
    margin-top:0;
`
const Upper = styled('div')`  
    padding: 10px 0px 0px 10px;
    border-raduis: 10px;
    background-color: ${configColor.black};
    height:49%;
    color: ${configColor.white};
    display: flex;
    flex-direction: column;
`
const Lower = styled('div')`
    padding: 10px 0px 0px 10px;
    border-raduis: 10px;
    background-color: ${configColor.pink};
    height:49%;
    color: ${configColor.black};
    display: flex;
    flex-direction: column;
`