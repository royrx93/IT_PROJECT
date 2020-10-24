import Api from '@/services/Api'

export default {
    contact(details){
        return Api().post('/mail',details)
    }
}
