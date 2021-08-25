<template>
<div>

	<div id="detailspage">

		<SearchBar  id ="searchbar" @termChange="onTermChange" ></SearchBar>

  <div class="container">


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <div v-if="video">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="videoUrl" />
      </div>
      <div class="details">
		  <h5>{{ video.snippet.title }}</h5>
		 

		 <div class="row">
  <div class="column1">
	   <p class ="views">{{ videodetails.viewCount }} views</p>
  </div>
  <div class="column2">
	    <i class="fa fa-thumbs-up" id="like" @click="like"> </i>
  </div>
  <div class="column3">
	  									  <p>{{ videodetails.likeCount }} </p>

  </div>
  <div class="column4">
						  <i class="fa fa-thumbs-down" id="dislike" @click="dislike"></i>

  </div>
  <div class="column5">
						  <p>{{ videodetails.dislikeCount }} </p>

  </div>
    <div class="column6">
						  <p  class="share"> SHARE</p>

  </div>
</div>



	  </div>
	</div>

	<h6 class="channeltitle" @click ="openchannel"> {{ video.snippet.channelTitle }}</h6>
	 <p  class="share"> Published on {{ parseInt(video.snippet.publishedAt.substr(8, 9))}} {{   monthNames[parseInt(video.snippet.publishedAt.substr(6, 7))] }}  {{parseInt(video.snippet.publishedAt.substr(0, 4)) }} </p>
  </div>

  <div id="list">
        <ul class="list-group">
          <videoitemdetails
            v-for="video in relatedvideos"
            :key="video.etag"
            :video="video"
            @videoSelect="onVideoSelect"
          ></videoitemdetails>
        </ul>
      </div>

</div>

<div id ="channelpage">


	 		<channelpage  :channeldetails = "channeldetails" :channeldetailsstatistics="channeldetailsstatistics" :channelvideos="channelvideos" ></channelpage>

</div>

</div>
</template>

<script>
	import SearchBar from "../components/SearchBar";
	import videoitemdetails from "./videoitemdetails";
	import channelpage from "./channelpage";
    import axios from "axios";


export default {
  name: "VideoDetail",
  props: ["video", "videodetails","relatedvideos"],
 

  computed: {
    videoUrl() {
      const videoId = this.video.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
  methods: {
    switchVisible() {
      document.getElementById("saa").style.color = "red";
      console.log(this.videodetails.likeCount);
    },
    like() {
								console.log("yyyyyyyyyyyyyyyyyyy");
		console.log(this.relatedvideos)

      if (document.getElementById("like").style.color == "royalblue") {
        document.getElementById("like").style.color = "grey";
      } else {
        document.getElementById("like").style.color = "royalblue";
        document.getElementById("dislike").style.color = "grey";
      }
    },
    dislike() {
      if (document.getElementById("dislike").style.color == "royalblue") {
        document.getElementById("dislike").style.color = "grey";
      } else {
        document.getElementById("dislike").style.color = "royalblue";
        document.getElementById("like").style.color = "grey";
      }
    },openchannel(){
		console.log("sdsdsdsd");
		this.getchanneldetails();
		this.getchanneldetailsstatistics();
		this.getchannelvideos();
		document.getElementById("channelpage").style.display = "block";
        document.getElementById("detailspage").style.display = "none";
	}, getchanneldetails() {
				axios
					.get("https://www.googleapis.com/youtube/v3/channels/", {
						params: {
							key: "AIzaSyAcbUpNnBIVw2MUGkbrc2VT80XsDDIzcQg",
							part: "snippet",
							id: this.video.snippet.channelId
						}
					})
					.then(response => {
						this.channeldetails = response.data.items[0];
                        this.thumbnailUrl = this.channeldetails.snippet.thumbnails.default.url;
                        this.channeltitle = this.channeldetails.snippet.title;
					});
			},
			 getchanneldetailsstatistics() {
				axios
					.get("https://www.googleapis.com/youtube/v3/channels/", {
						params: {
							key: "AIzaSyAcbUpNnBIVw2MUGkbrc2VT80XsDDIzcQg",
							part: "statistics",
							id: this.video.snippet.channelId
						}
					})
					.then(response => {
						this.channeldetailsstatistics = response.data.items[0];
					});
			},
			
			 getchannelvideos() {
				axios
					.get("https://www.googleapis.com/youtube/v3/playlists", {
						params: {
							key: "AIzaSyAcbUpNnBIVw2MUGkbrc2VT80XsDDIzcQg",
							part: "snippet,contentDetails",
							channelId: this.video.snippet.channelId,
							maxResults:20
						}
					})
					.then(response => {
						this.channelvideos = response.data.items;
                          console.log("vdddddddddddddvvvvvvvvvv");
                        console.log(this.channelvideos)
					});
			}

	
  },
  data: function() {
        return {
                 monthNames : ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"],
  channeldetails:[],
  thumbnailUrl:null,
  channeltitle:null,
  channeldetailsstatistics:[],
  channelvideos:[]

          }
    },
	components: {
			SearchBar,
			videoitemdetails,
			channelpage
		},

};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding-bottom: 50px;
    padding-top: 10px;

  border-radius: 4px;
}
.container {
  height: 100%;
  width: 76%;
  padding-top: 100px;
}

#saa {
  color: green;
}

.fa {
  font-size: 30px;
  cursor: pointer;
  user-select: none;
}
.fa-thumbs-up {
  color: grey;
}
.fa-thumbs-down {
  color: grey;
}
.fa:hover {
  transform: scale(1.2);
  color: royalblue;
}
.share {
  color: grey;
  cursor: pointer;
}

.views{
	 color: grey;
}

.column1 {
  float: left;
  width: 60%;
}

.column2 {
  float: left;
  width: 4%;
}
.column3 {
  float: left;
  width: 10%;
}

.column4 {
  float: left;
  width: 4%;
}
.column5 {
  float: left;
  width: 10%;
}
.column6 {
  float: left;
  width: 5%;
}
/* Clear floats after the columns */
.row {
 padding-left: 15px;
 padding-top: 10px;
}

#list {
  padding-top: 10px;
}
.fixedheader {
  position: fixed;
  background-color: white;
}
.channeltitle{
	cursor: pointer;
}

#detailspage{
	display: block;
}

#channelpage{
	display: none;
}
</style>