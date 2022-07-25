import { reqAddressInfo,reqOrderInfo } from "@/api"
const state={
    address:[],
    orderInfo:{}
}
const actions={
    // 获取用户地址信息
    async getUserAddress({commit}){
        let result = await reqAddressInfo()
        if(result.code==200){
            commit('GETUSERADDRESS',result.data)
        }else{

        }
    },
    // 获取商品清单信息
    async getOrderInfo({commit}){
        let result = await reqOrderInfo()
        if(result.code==200){
            commit('GETORDERINFO')
        }
    }
}
const mutations={
    GETUSERADDRESS(state,address){
        state.address = address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const getters={}

export default {
    state, mutations, actions, getters
}