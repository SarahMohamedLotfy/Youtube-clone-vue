<template>
  <div>
    <div id="boxes">
      <div id="leftbox">
        <p class="results">
          About {{ String(videos.pageInfo.totalResults) }} results
        </p>
      </div>

      <div id="middlebox">
        <a
          ><img
            class="filter_img"
            src="../assets/filter.jpg"
            @click="switchVisible"
        /></a>
      </div>

      <div id="rightbox">
        <input
          id="Button1"
          type="button"
          value="FILTER"
          @click="switchVisible"
        />
      </div>
    </div>

    <div id="Div2">
      <div class="container">
        <div class="product">
          <p>UPLOAD DATE</p>
        </div>

        <div class="product">
          <p>TYPE</p>
        </div>
        <div class="product">
          <p>SORT BY</p>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button1"
                @click="show_x('xfilter1', 'button1')"
              >
                Last hour
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter1"
                @click="hide_x('xfilter1', 'button1')"
                src="../assets/ximage.png"
              />
            </div>
          </div>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button2"
                @click="show_x('xfilter2', 'button2')"
              >
                Video
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter2"
                @click="hide_x('xfilter2', 'button2')"
                src="../assets/ximage.png"
              />
            </div>
          </div>
        </div>
        <div class="product">
          <div class="container2">
            <div class="product3">
              <button
                type="submit"
                class="button"
                id="button3"
                @click="
                  toggle_color('button3', 'button6', 'button11', 'button9')
                "
              >
                Relevance
              </button>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button4"
                @click="show_x('xfilter3', 'button4')"
              >
                Today
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter3"
                @click="hide_x('xfilter3', 'button4')"
                src="../assets/ximage.png"
              />
            </div>
          </div>
        </div>
        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button5"
                @click="show_x('xfilter4', 'button5')"
              >
                Channel
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter4"
                @click="hide_x('xfilter4', 'button5')"
                src="../assets/ximage.png"
              />
            </div>
          </div>
        </div>
        <div class="product">
          <div class="container2">
            <div class="product3">
              <button
                type="submit"
                class="button"
                id="button6"
                @click="
                  toggle_color('button6', 'button3', 'button11', 'button9')
                "
              >
                Upload date
              </button>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button7"
                @click="show_x('xfilter5', 'button7')"
              >
                This week
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter5"
                @click="hide_x('xfilter5', 'button7')"
                src="../assets/ximage.png"
              />
            </div>
          </div>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button8"
                @click="show_x('xfilter6', 'button8')"
              >
                Playlist
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter6"
                src="../assets/ximage.png"
                @click="hide_x('xfilter6', 'button8')"
              />
            </div>
          </div>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product3">
              <button
                type="submit"
                class="button"
                id="button9"
                @click="
                  toggle_color('button9', 'button6', 'button11', 'button3')
                "
              >
                View count
              </button>
            </div>
          </div>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product2">
              <button
                type="submit"
                class="button"
                id="button10"
                @click="show_x('xfilter7', 'button10')"
              >
                This month
              </button>
            </div>
            <div class="product2">
              <img
                class="xfilter"
                id="xfilter7"
                @click="hide_x('xfilter7', 'button10')"
                src="../assets/ximage.png"
              />
            </div>
          </div>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product2">
              <p>.</p>
            </div>
          </div>
        </div>

        <div class="product">
          <div class="container2">
            <div class="product3">
              <button
                type="submit"
                class="button"
                id="button11"
                @click="
                  toggle_color('button11', 'button6', 'button3', 'button9')
                "
              >
                Rating
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="list">
        <ul class="list-group">
          <VideoListItem
            v-for="video in videos.items"
            :key="video.etag"
            :video="video"
            @videoSelect="onVideoSelect"
          ></VideoListItem>
        </ul>
      </div>
    </div>

    <div id="Div1">
      <div id="list">
        <ul class="list-group">
          <VideoListItem
            v-for="video in videos.items"
            :key="video.etag"
            :video="video"
            @videoSelect="onVideoSelect"
          ></VideoListItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  props: ["videos"],
  components: {
    VideoListItem,
  },
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    },
    switchVisible() {
      if (document.getElementById("Div1")) {
        if (document.getElementById("Div1").style.display == "none") {
          document.getElementById("Div1").style.display = "block";
          document.getElementById("Div2").style.display = "none";
        } else {
          document.getElementById("Div1").style.display = "none";
          document.getElementById("Div2").style.display = "block";
        }
      }
    },
    hide_x(id1, id2) {
      var x = document.getElementById(id1);
      x.style.display = "none";

      var y = document.getElementById(id2);
      y.style.color = "#A0A0A0";
    },
    show_x(id1, id2) {
      var x = document.getElementById(id1);
      x.style.display = "block";

      var y = document.getElementById(id2);
      y.style.color = "black";
    },
    toggle_color(id, id2, id3, id4) {
      var x = document.getElementById(id);
      var y = document.getElementById(id2);
      var z = document.getElementById(id3);
      var v = document.getElementById(id4);

      if (x.style.color === "black") {
        x.style.color = "#A0A0A0";
      } else {
        x.style.color = "black";
        y.style.color = "#A0A0A0";
        z.style.color = "#A0A0A0";
        v.style.color = "#A0A0A0";
      }
    },
  },
};
</script>

<style scoped>
.results {
  font-size: 1.3rem;
}
#boxes {
  padding-top: 120px;
  padding-bottom: 50px;
}
#leftbox {
  float: left;
  width: 70%;
}
#middlebox {
  float: left;
  width: 5%;
}
#rightbox {
  float: right;
  width: 25%;
}

#list {
  padding-top: 10px;
}
.filter_img {
  width: 40px;
  height: 40px;
}
.xfilter {
  width: 10px;
  height: 20px;
  display: none;
  padding-top: 6px;
}
#Div2 {
  display: none;
}

.button {
  background-color: white;
  border: none;
  color: #a0a0a0;
  text-align: left;
  font-size: 16px;
  border-color: white;
  outline: none;
  width: 100%;
}
.container {
  padding-top: 10px;
}
.product {
  display: inline-block;
  width: 30%;
  height: 50px;
}

.container2 {
  width: 100%;
}
.product2 {
  width: 30%;
  float: left;
}
.product3 {
  width: 50%;
  float: left;
}
#Button1 {
  background-color: white;
  border: none;
  color: black;
  text-align: center;
  font-size: 20px;
}
</style>