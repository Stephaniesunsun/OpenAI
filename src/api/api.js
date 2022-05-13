import { axiosApi, axiosEngineApi} from './http';

function getResponseAction(values){
    return {
        url: `/engines/text-curie-001/completions`,
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

export async function getResponse(values){
    const {data} = await axiosApi(getResponseAction(values));
    return data;
}

export async function getEngine(){
    const {data} = await axiosEngineApi(getEngineAction());
    return data;
}