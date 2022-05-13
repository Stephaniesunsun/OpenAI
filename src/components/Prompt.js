import React, {useState} from 'react';
import { Response } from './Response';
import { getResponse } from '../api/api';

export const Prompt = () => {
    const [prompt, setPrompt] = useState('');
    const [responses, setResponses] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async()=>{
        if(prompt){
            setSubmitting(true);
            const data = await getResponse({prompt});
            //console.log(data)
            setResponses([{id:data.id, question: prompt, answer:data.choices[0].text}, ...responses])
            setPrompt('');
            setSubmitting(false);
        }
    }

    return (
        <div>
            Enter prompt:
            <input onChange={(e)=>setPrompt(e.target.value)}></input>
            <button onClick= {onSubmit}>submit</button>
            {
                submitting?
                <p>loading...</p>:
                <Response entries={responses} />
            }

        </div>
    );
};
