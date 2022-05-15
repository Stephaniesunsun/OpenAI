import React, {useState} from 'react';
import { Response } from './Response';
import { getResponse } from '../api/api';
import styled from '@emotion/styled';
import { configColor } from '../utils/colorConfig';
import { Title, Loading } from '../style';
import { useSelector } from 'react-redux'

export const Prompt = () => {
    const [prompt, setPrompt] = useState('');
    const [responses, setResponses] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const engine = useSelector((state)=>state.engine.engine);

    const onSubmit = async()=>{
        if(prompt){
            setSubmitting(true);
            const data = await getResponse(engine,{ prompt });
            setResponses([{id:data.id, question: prompt, answer:data.choices[0].text}, ...responses])
            setPrompt('');
            setSubmitting(false);
        }
    }

    return (
        <Container>
            <SubContainer>
                <Title>enter prompt: </Title>
                <PromptField>
                    <Input value = {prompt} onChange={(e)=>setPrompt(e.target.value)}></Input>
                    <Button onClick= {onSubmit}>submit</Button>
                </PromptField>
            </SubContainer>
            {
                submitting?
                <Loading>loading...</Loading>:
                <>
                    <Response entries={responses} />
                </>
            }

        </Container>
    );
};

const Container = styled('div')`

`
const SubContainer = styled('div')`
    margin: 0px 40px 0px 68px;
    display: flex;
    align-items: center;
`
const PromptField = styled('div')`
    margin-top:30px;
    display:flex;
    flex-direction: column;
    width:100%;
`
const Button = styled('button')`
    width:135px;
    height:30px;
    margin-left:auto;
    background-color:${configColor.pink};
    color: ${configColor.black};
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    margin-top:20px;
    cursor:pointer;
`
const Input = styled('input')`
    font-family: 'Noto Serif', sans-serif;
    font-size: 15px;
    padding: 10px;
    color: ${configColor.white};
    right:117px;
    height: 80px; 
    background-color:${configColor.black};
    border-radius: 10px;
    border: 3px solid ${configColor.pink};
`
