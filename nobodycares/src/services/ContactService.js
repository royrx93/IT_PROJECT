import Api from '@/services/Api'

export default {
    contact(details){
        return Api().get('/mail',details)
    }
}
