import Api from '@/services/Api'

export default {
    timelineAdd(credentials){
        return Api().post('/timeline/add',credentials)

    }
}