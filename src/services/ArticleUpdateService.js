import Api from '@/services/Api'

export default {
    articleUpdate(credentials){
        return Api().post('/article/updateArticle',credentials)
    }
}