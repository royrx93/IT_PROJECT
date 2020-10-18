import Api from '@/services/Api'

export default {
    index(){
        return Api().get('/gallery')
    },
    getSubtitle(){
        return Api().get('/gallery/subtitle')
    },
}