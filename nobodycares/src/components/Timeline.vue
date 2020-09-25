<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <h1>Timeline</h1>
                <div v-for="timeline in timeline"
                :key="timeline.id">
                    {{timeline.year}}
                    <br>
                    {{timeline.month}}
                    <br>
                    {{timeline.description}}
                </div>

        </v-flex>
    </v-layout>
</template>

<script>
    import TimelineService from "../services/TimelineService";

    export default {
        data(){
            return{
                timeline: null
            }
        },
        async mounted(){
            this.timeline = (await TimelineService.index()).data
        }
    }
</script>

<style scoped>

</style>