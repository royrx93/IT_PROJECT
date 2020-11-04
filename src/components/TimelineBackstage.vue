<template>
  <body>
    <h1>Timeline Management</h1>

    <sideBar></sideBar>

    <div class="timeline" v-for="timeline in timeline" :key="timeline.ID">
      <table align="center">
        <tr>
          <th>Year</th>
          <th>Month</th>
        </tr>
        <tr>
          <td>{{ timeline.year }}</td>
          <td>{{ timeline.month }}</td>
          <td>
            <button id="delete" @click="remove(timeline)">Delete</button>
            <router-link
              :to="{ ID: 'TimelineUpdate', params: { ID: timeline.ID } }"
            >
              <button id="update">update</button>
            </router-link>
          </td>
        </tr>
      </table>
    </div>

    <br />
    <div>
      <router-link to="/timeline/add">
        <button class="buttons">Add</button>
      </router-link>
    </div>
  </body>
</template>

<script>
import TimelineService from "@/services/TimelineService";
import TimelineDeleteService from "@/services/TimelineDeleteService";
import sideBar from "@/components/Sidebar";

export default {
  components: {
    sideBar
  },
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed"
      },
      timeline: null
    };
  },

  async mounted() {
    this.timeline = (await TimelineService.getAllInfo()).data;
  },

  methods: {
    async remove(timeline) {
      const confirmation = confirm("Confirm to delete this timeline?");
      if (confirmation == true) {
        await TimelineDeleteService.TimelineDelete({ ID: timeline.ID });
        location.reload();
      }
    }
  }
};
</script>

<style scoped>
body {
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  right: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: auto;
  position: absolute;
  margin-top: 20px;
}
</style>
