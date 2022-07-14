import backend_url from "../config/api";

export const getProfile = async() =>{
    try{
        const response = await fetch  (`${backend_url}/users/profile`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
                },
            Bearer: localStorage.getItem('userToken')
        });
        return response;
    } catch (error){
        return error;
    }
}

export const updateProfile = async(data) =>{
    try{
        const response = await fetch  (`${backend_url}/users/update_profile`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
                },
            Bearer: localStorage.getItem('userToken'),
            body: JSON.stringify(data)
        });
        return response;
    } catch (error){
        return error;
    }
}