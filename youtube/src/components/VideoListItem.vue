<template>
  <div>
	 

 <div class="container" id="listvideos">
      <li class="list" @click="onVideoSelect">
        <img   class ="img" :src="thumbnailUrl" />

        <div class="details" >
          <h5>{{ video.snippet.title }}</h5>

          <div
            class="channelname"
            v-if="2021 - parseInt(video.snippet.publishedAt.substr(0, 4)) > 0"
          >
            {{ video.snippet.channelTitle }} .
            {{ 2021 - parseInt(video.snippet.publishedAt.substr(0, 4)) }} years
            ago
          </div>
          <div
            class="channelname"
            v-else-if="
              12 - parseInt(video.snippet.publishedAt.substr(6, 7)) > 0
            "
          >
            {{ video.snippet.channelTitle }} .
            {{ 12 - parseInt(video.snippet.publishedAt.substr(6, 7)) }} months
            ago
          </div>
          <div
            class="channelname"
            v-else-if="
              30 - parseInt(video.snippet.publishedAt.substr(8, 9)) > 0
            "
          >
            {{ video.snippet.channelTitle }} .
            {{ 30 - parseInt(video.snippet.publishedAt.substr(8, 9)) }} days ago
          </div>

          <p>{{ video.snippet.description }}</p>
        </div>
      </li>
    </div>

    <div id="videodetail">
      <div v-if="video">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="videoUrl" />
        </div>
        <div class="details">
          <h4>{{ video.snippet.title }}</h4>
          <p>{{ video.snippet.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
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
  padding-right: 280px;
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
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
#videodetail {
  display: none;
}

#listvideos {
  display: block;
}

</style>

