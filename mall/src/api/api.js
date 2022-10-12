import request from "@/utils/reques.js"

export function getHome(){
	return request({
		url:'/home/index',
		method:'get'
	})
}
export function getCategory(){
	return request({
		url:'/home/category',
		method:'get'
	})
}
export function getCart(){
	return request({
		url:'/home/cart',
		method:'get'
	})
}
export function getCurrentCategory(id){
	return request({
		url:'/info/category',
		method:'get',
		data:{id}
	})
}
//登陆api
export function login(user){
	return request({
		url:'/login',
		method:'post',
		data:user
	})
}