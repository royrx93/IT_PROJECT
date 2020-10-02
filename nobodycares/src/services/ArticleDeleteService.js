import Api from '@/services/Api'

export default {
    articleDelete(credentials){
        return Api().post('/article/deleteArticle',credentials)
    }
}