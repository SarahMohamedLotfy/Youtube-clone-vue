<template>
  <div>
	 

 <div class="container" id="listvideos">
      <li class="list" @click="onVideoSelect">
        <img   class ="img" :src="thumbnailUrl" />

        <div class="details" >
          <h5>{{ video.snippet.title }}</h5>

          <div class="channelname">
            {{ video.snippet.channelTitle }}
          </div>

        <p> Views</p>
        </div>
      </li>
    </div>

   
  </div>
</template>

<script>
export default {
  name: "videoitemdetails",
  props: ["video"],

  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
    videoUrl() {
      const videoId = this.video.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },

  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
	}
  },
};
</script>

<style scoped>
li {
  padding-top: 35px;
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
.container {
  padding-left: 140px;
}
.list {
  padding-bottom: 12px;
}
.img {
  padding-right: 14px;
  width: 380px;
  height: 180px;
}

.channelname {
  padding-bottom: 10px;
}

.details {
  margin-top: 10px;
  border-radius: 4px;
  font-size: 16px;
}
#videodetail {
  display: none;
}

#listvideos {
  display: block;
}
.vid{
    width: 20px;
}
</style>

