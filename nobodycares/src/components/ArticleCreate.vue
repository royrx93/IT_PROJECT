<template>

  <body>
  
  <H1>New Article!</H1>
  <label>Title</label>
  <textarea
      style="height: 100px; width: 650px;"
      type="text"
      name="string"
      v-model="title"
  ></textarea>
<div>
  <label>Description</label>
  <textarea
      style="height: 100px; width: 650px;"
      type="text"
      name="description"
      v-model="description"
  ></textarea>
</div>

  <div>
  <label>Content</label>
  <textarea
      style="height: 200px; width: 650px;"
      type="text"
      name="string"
      v-model="content"
  ></textarea>
  </div>
  <br>






  <input id="file" type="file" @change="onFileChanged" />

  <div>
    <button class="returnButtons" @click="goBack">
      back
    </button>
  </div>

    
  <button class="buttons" @click="articleCreate">Create</button>
 </body>
</template>

<script>
import ArticleCreateService from "../services/ArticleCreateService";
import ArticleService from "@/services/ArticleService";
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';
import WangEditor from 'wangeditor';
export default {

  data() {
    return {
      title: "",
      description: "",
      content: "",
      selectedFile: null,
      articles: null,
    };
  },
  setup() {
    const editor = ref();
    const contents = reactive({
      html: '',
      text: '',
    });
    let instance;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      instance.config.menus = [
        'bold',
        'head',
        'italic',
        'underline',
        'fontSize',
        'lineHeight',
        'foreColor',
        'backColor',
        'splitLine',
        'undo',
        'redo',
      ]
      instance.config.lang = 'en'
      instance.i18next = window.i18next
      Object.assign(instance.config, {
        onchange() {
          console.log('change');
        },
      });
      instance.create();
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    const syncHTML = () => {
      contents.html = instance.txt.html();
    };
    return {
      syncHTML,
      editor,
      contents,
    };
  },
  async mounted() {
    this.articles = (await ArticleService.index()).data
  },
  methods: {
    async articleCreate() {
      for(let i = 0; i < this.articles.length; i++){
        if(this.title == this.articles[i].title){
          alert("Article already exist")
        }
      }
      if(!this.title){
        alert("please fill in the title")
      }else if(!this.content){
        alert("please fill in the content")
      }else if(this.title.length > 49){
        alert("Title Word Limit 50")
      } else if(this.description.length > 200) {
        alert("Description Word Limit 200")
      } else if(this.content.length > 10000){
        alert("Content Word Limit 10000")
      } else {
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("content", this.content);
        formData.append("myFile", this.selectedFile);
        this.$router.push('/articles')
        const response = await ArticleCreateService.articleCreate(formData);
        console.log(response.data());
      }

    },

    goBack(){
      this.$router.go(-1);
    },

    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },

  }
};
</script>

<style scoped>
  body{
  width:100%;
  height:100%;
  z-index:-1;
  position: absolute;
  margin-left:-10px;
  background-image: url("../assets/background.jpeg");
  background-repeat: repeat;
  background-attachment: fixed;
  background-size:cover;
  }
  H1{
  color: #F0F0F0;
  padding: 60px;
  font-size:3em;
  margin-top:60px;
  margin-left:90px;
  }

  button{
  margin: 60px;
  height: 60px;
  width: 300px;
  font-size: 1.2em;
  }

  label{
  cursor: pointer;
    font-size: 29px;
  display: inline-block;
  padding: 3px 6px;
  text-align: right;
  width: 150px;
  vertical-align: top;
  }

  textarea{
  margin: 8px;
  height:60px;
  width: 600px;
  font-size: 1.2em;
    background:rgba(0,0,0,.5);
    border-radius: 5px;
    border: none;
  }
  textarea:focus{
    background: whitesmoke;
  }

  .buttons{
  width: 100px;
  height: 50px;
  border: none;
  background: #33A5FF;
  border-radius: 10%;
    color: whitesmoke;
  }

  .buttons:hover {
  background: #3366FF;
  }

  .returnButtons{
  position:fixed;
  left: 10px;
  top: 90%;
  height: 50px;
  z-index:9999;
  width: 75px;
  height: 35px;
  background-color: #33A5FF;
  border-radius: 10%;
  margin: 1px;
  border: none;
  font-size: 20px;
  color: white;
  }

  .returnButtons:hover{
  background: #3366FF;
  }
</style>
