<template>
  <sideBar></sideBar>
  <body>
    <h1>Timeline Management</h1>
<!--    <div class="timeline" v-for="timeline in timeline" :key="timeline.ID">-->
<!--      <table align="center">-->
<!--        <tr>-->
<!--          <th>Year</th>-->
<!--          <th>Month</th>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>{{ timeline.year }}</td>-->
<!--          <td>{{ timeline.month }}</td>-->
<!--          <td>-->
<!--            <button id="delete" @click="remove(timeline)">Delete</button>-->
<!--            <router-link-->
<!--              :to="{ ID: 'TimelineUpdate', params: { ID: timeline.ID } }"-->
<!--            >-->
<!--              <button id="update">update</button>-->
<!--            </router-link>-->
<!--          </td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </div>-->
    <div class="words">
      <ul style="float:left; margin-left: 200px">
        <li><p>Timeline Management</p></li>
        <li><input type="month" name="string" v-model="month" placeholder="month" /></li>
        <li>
          <p>description</p><input class="title"
                                   name="title"
                                   maxlength="50"
                                   v-model="description"
                                    placeholder="description"/>
        </li>
        <li><button @click="searchDes">Search</button>
          <button @click="updateDes">Update</button>
          <button @click="remove">Delete</button>
          <button @click="timelineAdd">Add</button>
        </li>
      </ul>
      <ul style="float:right; margin-right: 200px">
        <li><p>Update the subtitle of timeline module here:</p></li>
        <li>
          <input
                  class="title"
                  name="sub_title"
                  maxlength="50"
                  v-model="sub_title"
          />
        </li>
        <li><button @click="updateSubTitle">Submit</button></li>
      </ul>
    </div>

    <br />
<!--    <div>-->
<!--      <router-link to="/timeline/add">-->
<!--        <button class="buttons">Add</button>-->
<!--      </router-link>-->
<!--    </div>-->
  </body>
</template>

<script>
import TimelineService from "@/services/TimelineService";
import TimelineDeleteService from "@/services/TimelineDeleteService";
import sideBar from "@/components/Sidebar";
import AuthenticationService from "../services/TimelineAddService";

export default {
  components: {
    sideBar
  },
  data() {
    return {
      year:"",
      month:"",
      description:"",
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
    },

    // async searchDes(){
    //     await TimelineService.timelineSearch(month);
    //     location.reload();
    // },

    async timelineAdd() {
      await AuthenticationService.timelineAdd({
        year: this.month.toString().substr(0, 4),
        month: this.month.toString().substr(5, 2),
        description: this.description
      });
      // console.log(response.data())
    }
  }


};
</script>

<style scoped>

  .words {
  column-count: 2;
  }

  body {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: -10px;
  margin-top: 130px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  }

  li {
  color: #f0f0f0;

  font-size: 1.2em;
  margin-left: -60px;
  margin-bottom: 30px;
  }

  li p {
  font-size: 3em;
  margin-left: 60px;
  }

  input {
  margin: 4px;
  height: 40px;
  width: 400px;
  font-size: 1.2em;
  margin-left: 100px;
  }

  button {
  margin-top:20px;
  margin-left:40px;
  height: 30px;
  width: 100px;
  font-size: 1.1em;
  padding-right: 10px;
  padding-bottom: 40px;
  cursor: pointer;
  width: 140px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;

  border-radius: 5px;

  position: relative;
  overflow: hidden;
  color: 	#505050;
  text-shadow:1px 1px 1px #fff;
  border:1px solid #dce1e6;
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #a8abae inset;
  background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: linear-gradient(top,#f2f3f7,#e4e8ec);

  }
  button:hover{
  background:		#FFFFFF;


  }

  .waterfall-width-column {
  column-count: 4;
  column-gap: 7px;
  margin: 25px 50px 0px 50px;
  }
  .waterfall-width-column .image-box {
  background: #fff;
  border: 2px solid #475669;
  }

  .waterfall-width-column .image-box img {
  width: 100%;
  height: 100%;
  }

  .waterfall-width-column .image-box p {
  font-size: 20px;
  color: #000;
  cursor: pointer;
  margin-top: 1px;
  margin-bottom: 5px;
  }

  .words p {
  font-size: 30px;
  font-weight: 500;
  }

  .words .title input {
  margin: 4px;
  height: 50px;
  width: 200px;
  font-size: 1.2em;
  }
</style>
