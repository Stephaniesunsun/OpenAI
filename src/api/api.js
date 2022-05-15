import { axiosApi, axiosEngineApi} from './http';

function getResponseAction(engine, values){
    return {
        url: `/engines/${engine}/completions`,
        data: values,
        method: 'post'
    }
}

function getEngineAction(){
    return{
        url:`/engines`,
        method:'get',
    }
}

export async function getResponse(engine, values){
    const {data} = await axiosApi(getResponseAction(engine, values));
    return data;
}

export async function getEngine(){
    const {data} = await axiosEngineApi(getEngineAction());
    return data;
}