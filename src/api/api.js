import axios from "axios"
import config from "../config/default.json"
axios.defaults.withCredentials = true//设置cookie权限

function Myaxios(url,data,type) {
  if(type=="post"){
   return  axios.post(config.baseurl+url,data)
  }else if(type=="get"){

    return axios.get(config.baseurl+url,{params:data})
  }
}
//登录
export const login =data=> Myaxios('/admin/user/login', data, 'post')
export const getUserInfo =data=> Myaxios('/admin/user/get_user_info',data, 'post')

