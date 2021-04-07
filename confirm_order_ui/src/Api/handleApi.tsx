import {baseUrl} from "../shared/baseUrl";


export async function handleApi(data:any,request_method:string) {
    
    let res ;

    if(request_method === "POST"){
        try{
            res = await fetch(baseUrl+"/api/handle_data",{
                method:request_method,
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const result = await res.json();

            return result;
        }catch(e){
            console.log(e);
        }
    }
    else if(request_method === "GET") {
        try{
            res = await fetch(baseUrl+"/api/handle_data",{
                method:request_method,
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const result = await res.json();

            return result;
        }catch(e){
            console.log(e);
        }
    }
}