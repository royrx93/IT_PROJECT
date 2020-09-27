<template>

</template>

<script>
    import BackstageService from "../services/BackstageService";

    export default {
        data(){
            return{
                backstage: null
            }
        },
        async mounted(){
            this.backstage = (await BackstageService.index()).data
        }
    }
</script>

<style scoped>

</style>