import Api from '@/services/Api'

export default {
    index(){
        return Api().get('article')
    },
    updateSubTitle(subtitle){
        return Api().post('/article/updateSubTitle', subtitle)
    },
    getSubtitle(){
        return Api().get('/article/subtitle')
    },

}