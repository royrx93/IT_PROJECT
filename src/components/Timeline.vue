<template>
  <body>
  <div style="margin-top: 60px; font-size: 50px">Timeline</div>

  <div>
    <div style="font-size: 30px; margin-bottom: 40px; margin-left: 300px"> -- {{ subtitle }}</div>
  </div>


  <div class="time_main">
      <div class="last"><button @click="last">last</button></div>
      <ul class="ml_contents">
        <li v-for="x in timeinfo" :key="x.id">
          <div style="padding-left: 20px">
          <div class="monthly">{{ x.month }}</div>
          <div class="descr">{{ x.description }}</div>
          </div>
        </li>
      </ul>
      <div class="next"><button @click="next">next</button></div>
    </div>

    <ul class="ml_year">
      <li
        v-for="timeline in timeline"
        :key="timeline.year"
        @click="qiehuan(timeline.year)"
      >
        <span>{{ timeline.year }}</span>
      </li>
    </ul>
  </body>
</template>

<script>
import TimelineService from "../services/TimelineService";

export default {
  data() {
    return {
      timeline: null,
      timeinfo: null,
      yearSelect: undefined, //选中的年份
      pageCurr: 0, //当前页码
      note: {
        backgroundImage: "url(" + require("../assets/background.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed"
      }
    };
  },
  async mounted() {
    //首次加载时获取列表信息
    this.getlist();
    this.subtitle = (await TimelineService.getSubtitle()).data;
  },
  methods: {
    qiehuan: function(year) {
      this.yearSelect = year;
      this.pageCurr = 0;
      this.getlist();
    },
    /**
     *
     * @param year 参数，当切换时选中的年份，用于向接口传参获取不同年份信息
     * @returns {Promise<void>}
     */
    getlist: async function() {
      //获取列表信息
      this.timeline = (await TimelineService.index()).data;
      if (this.yearSelect == null) {
        //初始化
        this.yearSelect = this.timeline[0].year;
      }
      let pageinfo = (
        await TimelineService.getPageinfo({
          year: this.yearSelect,
          curr: this.pageCurr
        })
      ).data;

      if (pageinfo.length > 0) {
        this.timeinfo = pageinfo;
        for (var i = 0; i < pageinfo.length; i++){
          if (pageinfo[i].month == "1"){
            this.timeinfo[i].month = "January"
          }else if (pageinfo[i].month == "2"){
            this.timeinfo[i].month = "February"
          }else if (pageinfo[i].month == "3"){
            this.timeinfo[i].month = "March"
          }else if (pageinfo[i].month == "4"){
            this.timeinfo[i].month = "April"
          }else if (pageinfo[i].month == "5"){
            this.timeinfo[i].month = "May"
          }else if (pageinfo[i].month == "6"){
            this.timeinfo[i].month = "June"
          }else if (pageinfo[i].month == "7"){
            this.timeinfo[i].month = "July"
          }else if (pageinfo[i].month == "8"){
            this.timeinfo[i].month = "August"
          }else if (pageinfo[i].month == "9"){
            this.timeinfo[i].month = "September"
          }else if (pageinfo[i].month == "10"){
            this.timeinfo[i].month = "October"
          }else if (pageinfo[i].month == "11"){
            this.timeinfo[i].month = "November"
          }else if (pageinfo[i].month == "12"){
            this.timeinfo[i].month = "December"
          }
        }
      } else {
        this.pageCurr -= 1;
      }
      console.log("debug->", this.timeline);
    },
    last: function() {
      if (this.pageCurr > 0) {
        this.pageCurr -= 1;
        this.getlist(); //获取上一页数据
      }
    },
    next: function() {
      //获取下一页数据,如果接口返回下一页数据为空，则代表为最后一页，pageCurr不加1，且页面不做变化
      this.pageCurr += 1;
      this.getlist();
    }
  }
};
</script>

<style scoped>
  body {
  width: 100.1%;
  height: 100%;
  z-index: -1;
  position: absolute;
  margin: -10px;
  margin-top: 30px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover;
  }
  button {
  margin-top:20px;
  margin-left:0px;


  font-size: 1.1em;
  padding-right: 10px;
  padding-bottom: 10px;

  cursor: pointer;
  height: 35px;
  width: 70px;
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
  .ml_contents{
  margin-top:30px;
  margin-left:55px;

  }
  .last{
    position: fixed;
    top:50%;
  }
  .next{
    position: fixed;
    top:50%;
    right: 0%;
  }

  .time_main{
  margin-top:-30px;
  }
  h1 {
  color: #f0f0f0;
  padding: 60px 60px;
  font-size: 3em;
  margin-left: 70px;
  margin-top: 40px;
  }
  li {
  list-style-type: none;
  }
  .time_main {
  clear: both;
  overflow: hidden;
  }
  .time_main .last {
  float: left;
  width: 5%;
  }
  .ml_contents {
  float: left;
  clear: both;
  overflow: hidden;
  width: 90%;
  margin-bottom: 20px;
  }
  .time_main .next {
  float: right;
  width: 5%;
  }

  .ml_contents li {
  float: left;
  width: 32.3%;
  height: 300px;
    background-color: black;
    opacity: 0.6;

  }
  .ml_contents li .monthly {
    font-size: 20px;
  }
  .ml_contents li .descr {
  text-align: left;
  }
  .ml_year {
  clear: both;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 70px;
  border-top: 1px solid #ffffff;
  padding-top: 20px;
  }
  .ml_year li {
  float: left;
  width: 15%;
  vertical-align: middle;
  text-align: center;
  }
  .ml_year li span {
  display: block;
  border-radius: 150px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: darkblue;
  }
  .ml_year li:hover span,
  .ml_year li.active span {
  width: 100px;
  height: 100px;
  line-height: 100px;
  }

  .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  }
  p {
  margin-left: 40px;
  font-size: 1.2em;
  }
</style>
