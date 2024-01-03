import Cookies from 'js-cookie';

export const getUserId = ()=>{
    return Cookies.get().userId;
}

export const getToken = () =>{
    return Cookies.get().token;
}
export const getAdminId = () =>{
    return Cookies.get().adminId;
}

export const deleteCookies = () => {
    Cookies.remove('userId');
    Cookies.remove('token');
}

export const deleteAdmin = () => {
    Cookies.remove('adminId');
    Cookies.remove('token');
}