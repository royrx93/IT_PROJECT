import Api from '@/services/Api'

export default {
    uploadImage(img){
        return Api().post('/gallery', img)
    }
}