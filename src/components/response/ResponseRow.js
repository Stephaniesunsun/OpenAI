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
                        <AnswerContainer>{entry.answer}</AnswerContainer>
                    }
                </Answer>
            </Lower>
        </Container>
    );
};

const Container = styled('div')`
    width: 320px;
    height: 450px;
    border: 1px solid black;
    margin: 20px 0px 0px 70px;
    border: 2px solid ${configColor.black};
    border-radius: 10px;
    overflow: scroll;
`

const AnswerContainer = styled('div')`
    padding: 5px;
    height: 100%;
    width: 100%;
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
    height:45%;
    color: ${configColor.white};
    display: flex;
    flex-direction: column;
`
const Lower = styled('div')`
    padding: 10px 0px 0px 10px;
    border-raduis: 10px;
    height:100%;
    background-color: ${configColor.pink};
    color: ${configColor.black};
    display: flex;
    flex-direction: column;
`