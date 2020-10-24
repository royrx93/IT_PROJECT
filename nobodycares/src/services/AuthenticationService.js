import Api from '@/services/Api'

export default {
    register(credentials){
        return Api().post('/login/register',credentials)
    },
    login(loginForm){
        return Api().post('/login',loginForm)
    }

}

