<template>
  <sideBar></sideBar>
  <body>
  <h1>Timeline Management</h1>

  <!--    <div class="words">-->
  <!--      <ul style="float:left; margin-left: 200px">-->
  <!--        <li><p>Timeline Management</p></li>-->
  <!--        <li><input type="month" name="string" v-model="month" placeholder="month" /></li>-->
  <!--        <li>-->
  <!--          <p>description</p><input class="title"-->
  <!--                                   name="title"-->
  <!--                                   maxlength="50"-->
  <!--                                   v-model="description"-->
  <!--                                    placeholder="description"/>-->
  <!--        </li>-->
  <!--        <li><button @click="searchDes">Search</button>-->
  <!--&lt;!&ndash;          <button @click="updateDes">Update</button>&ndash;&gt;-->
  <!--&lt;!&ndash;          <button @click="remove">Delete</button>&ndash;&gt;-->
  <!--          <button @click="timelineAdd">Add</button>-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <div>

    <input  style="height: 50px;width:300px"
            type="month"
            name="string"
            v-model="month"
    >
  </div>
  <div>
    <label style="top:50%;position: relative">Description: </label>
    <textarea
            style="height: 50px; width: 300px;"
            type="text"
            name="description"
            v-model="description"
    ></textarea>
  </div>
  <div2>
    <button @click="timelineAdd">Add</button>
  </div2>
  <div class="border">
    <div class="timeline" v-for="timeline in timeline" :key="timeline.ID">
      <div class="cardBox">
        <table align="center">
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>{{ timeline.year }}</td>
            <td>{{ timeline.month }}</td>
            <th>{{timeline.description}}</th>
            <td>
              <button id="delete" @click="remove(timeline)">Delete</button>
              <router-link
                      :to="{name : 'TimelineUpdate', params: { ID: timeline.ID } }"
              >
                <button id="update">update</button>
              </router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
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
      }
    },

    async mounted() {
      this.timeline = (await TimelineService.getAllInfo()).data;
    },

    methods: {
      async remove(timeline) {
        const confirmation = confirm("Confirm to delete this timeline?");
        if (confirmation == true) {
          await TimelineDeleteService.TimelineDelete({ ID: timeline.ID });
        }
        location.reload();
      },



      async timelineAdd() {
        const confirmation = confirm("Confirm to add this timeline?");
        if(confirmation == true){
          await AuthenticationService.timelineAdd({
            year: this.month.toString().substr(0, 4),
            month: this.month.toString().substr(5, 2),
            description: this.description
          })

          location.reload();
        }

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
  margin-left:130px;
  height: 30px;

  font-size: 1.2em;
  padding-right: 10px;
  padding-bottom: 40px;
  cursor: pointer;
  width: 100px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;

  border-radius: 5px;

  position: relative;
  overflow: hidden;
  color: 	#505050;
  text-shadow:1px 1px 1px #fff;
  border:1px solid #dce1e6;
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #E0E0E0 inset;
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

  .border {
  column-count: 2;
  margin: 40px 200px;

  }

  .cardBox {
  height: 90%;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 4px;
  margin: 0px auto;
  margin-top: 10px;
  
  margin-bottom: 40px;
  background: rgb(8,8,8,0.4);
  }
  div2{
  margin-left:-50px;

  }
  h1 {
  color: #f0f0f0;
  padding: 60px;
  font-size: 3em;
  margin-top: -40px;
  margin-left: 80px;
  }
  table{
  margin-right:40px;
  }
  #delete,#update{
  margin-top:20px;
  margin-left:40px;
  }
</style>
