<template>
  <div class="timeline" :style ="note"></div>
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
                timeline: null,
                note: {
                    backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    backgroundAttachment: "fixed",
                   },
            }
        },
        async mounted(){
            this.timeline = (await TimelineService.index()).data
        }
    }
</script>

<style scoped>
  .timeline{
  width:100%;
  height:100%;
  z-index:-1;
  position: absolute;
  }
  h1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  }
</style>