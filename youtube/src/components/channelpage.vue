<template>
 
    <body>
    <SearchBar   ></SearchBar>
    

    <div class="channel">
       <img   class ="img" :src="this.channeldetails.snippet.thumbnails.default.url" />
      <h4> {{this.channeldetails.snippet.title}}</h4>

      <p class="subscribe"> SUBSCRIBE  </p>
      <p class="numbersubscribes">{{this.channeldetailsstatistics.statistics.subscriberCount}}</p>

    </div>

        <div id="list">
        <ul class="list-group">
          <videoitemdetails
            v-for="video in channelvideos"
            :key="video.etag"
            :video="video"
            @videoSelect="onVideoSelect"
          ></videoitemdetails>
        </ul>
      </div>

    </body>

</template>

<script>

import SearchBar from "../components/SearchBar";
import videoitemdetails from "./videoitemdetails";

export default {
  
  name: "channelpage",
  props: ["channeldetails","channeldetailsstatistics","channelvideos"],
   
  methods: {
    onInput() {
      this.move();
      this.$emit("termChange", this.name);
    },getchanneldetails(){
        console.log("kkkkkkkkkkkkkkkkkkk");

        console.log(this.channelvideos[0].snippet);
    }
 

  },
  components: {
			SearchBar,
            videoitemdetails
		},
         data: function() {
        return {
                 monthNames : ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"],

   thumbnailUrl : this.channeldetails.snippet.thumbnails.default.url,
    channeltitle : this.channeldetails.snippet.title
          }
    },

};
</script>

<style scoped>
.img{
    width:800px;
    height:200px;
}
.channel{
    padding-top: 70px;
    padding-left: 50px;
}
.subscribe{
    float:left;
    width: 15%;
    color:red;
}
.numbersubscribes{
    float:left;
    width: 75%;
}

#list {
  padding-top: 10px;
  float: left;
}
</style>