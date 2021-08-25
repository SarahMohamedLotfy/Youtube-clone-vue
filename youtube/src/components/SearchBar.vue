<template>
  <!DOCTYPE html>

  <html lang="en">
    <head>
      <link
        rel="icon"
        href="https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="src/assets/styles.css" />
    </head>

    <body>
      <div class="fixedheader">
        <div id="myProgress">
          <div id="myBar"></div>
        </div>

        <div class="navbar">
          <div class="flex-container">
            <div class="column">
              <img class="youlogo" src="../assets/youlogo.png" />
            </div>

            <div class="searchbox">
              <div class="searchbar">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  v-model="name"
                />
                <div class="search-btn">
                  <i class="material-icons search-icon" @click="onInput"
                    > search</i
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>


export default {
  
  name: "SearchBar",
  props: ["video","search_term"],
  methods: {
    onInput() {
      this.move();
      this.$emit("termChange", this.name);
    },

    move() {
      var i = 0;
      if (i == 0) {
        document.getElementById("myProgress").style.display = "block";

        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            document.getElementById("myProgress").style.display = "none";
            document.getElementById("myBar").style.display = "none";
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    },
  }
};
</script>

<style scoped>
#myProgress {
  display: none;
  width: 100%;
  background-color: gainsboro;
}

#myBar {
  width: 0%;
  height: 3px;
  background-color: red;
}

.fixedheader {
  position: fixed;
  background-color: white;
}
.flex-container {
  width: 80%;
  min-height: 100px;
  display: -webkit-flex; /* Safari */
  display: flex; /* Standard syntax */
}
.flex-container .column {
  padding-top: 4px;
  padding-right: 130px;
  -webkit-flex: 1; /* Safari */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* Standard syntax */
}
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}

.searchbox {
  padding-top: 20px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  line-height: 1.7;
}
.nav {
  align-items: center;
  box-shadow: 0px 10px 24px -12px rgba(242, 241, 239, 0.7);
  display: flex;
  justify-content: space-between;
}

.youlogo {
  width: 9rem;
}
.menu {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 3rem;
  width: 14rem;
}

/* Search Bar */

.searchbar {
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  display: flex;
  overflow: hidden;
  width: 38rem;
  height: 42px;
}

.searchbar input {
  border-right: 1px solid #ccc;
  border: none;
  font-size: 1.3rem;
  outline: none;
  padding: 0.5rem 0.9rem;
  width: 83%;
}

.searchbar input::placeholder {
  font-size: 1.3rem;
}

.searchbar .search-btn {
  align-items: stretch;
  display: flex;
  justify-content: center;
  width: 17%;
}

.searchbar .search-icon {
  color: #888;
  font-size: 2rem;
}

/* END */

/* Feature Icons */

.material-icons {
  color: #666;
  font-size: 2.4rem;
}

.feature-icons {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 4rem;
  position: relative;
  width: 22rem;
}

.feature-icons .account-icon {
  color: #b1348a;
  font-size: 3.5rem;
}

.bell-icon-badge {
  background-color: rgb(204, 22, 0);
  border-radius: 50%;
  color: #fff;
  display: inline-block;
  height: 19px;
  position: absolute;
  right: 49px;
  text-align: center;
  top: 0;
  width: 19px;
}

/* END */

/* Main contents */

main {
  display: flex;
  padding: 2.5rem 7.5rem;
}

.player {
  display: block;
  margin-right: 2.5rem;
  width: 67%;
}

.video-info {
  border-bottom: 1px solid #ccc;
  margin-top: 1.3rem;
}

.video-info .title {
  font-size: 1.8rem;
  font-weight: 300;
}

.sidebar {
  /* background-color: #3634b1; */
  width: 31%;
}

.video-toolbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.video-views {
  color: #555;
  font-size: 1.7rem;
  font-weight: 200;
}

.right-menu {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.right-menu .material-icons,
.right-menu span {
  color: #888;
  font-size: 2rem;
}

.right-menu .share-btn .material-icons {
  transform: scale(-1, 1);
}

.right-menu a span {
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 0.6rem;
}

.thumb-wrapper,
.share-btn,
.save-btn,
.options-btn {
  align-items: center;
  display: flex;
  justify-content: center;
}

.thumb-wrapper {
  border-bottom: 2px solid #888;
  padding: 1.3rem 0;
}

.thumb-up-btn,
.thumb-down-btn {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 1.4rem;
}

.thumb-down-btn {
  margin-left: 1.4rem;
  margin-right: 0;
}

/* SIDE BAR */

.suggested-video {
  display: flex;
  margin: 1rem 0;
}

.suggested-video .thumbnail {
  margin-right: 1rem;
  position: relative;
}

.suggested-video .thumbnail span {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  bottom: 1rem;
  color: white;
  display: inline-block;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.05rem 0.5rem;
  position: absolute;
  right: 1rem;
}

.suggested-video .thumbnail-info {
  flex-basis: 54%;
}

.suggested-video .thumbnail img {
  height: 11rem;
}

.suggested-video .thumbnail-info h2 {
  margin-bottom: 0.4rem;
}

.suggested-video h2 {
  line-height: 1.2;
}

.suggested-video .channel,
.suggested-video .views {
  color: #777;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.001rem;
  line-height: 1.3;
}

/* END */

/* Chanel Info */

.channel-info {
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 1.6rem 0;
}

.channel-info .avatar {
  /* background-color: cornflowerblue; */
  flex-basis: 10%;
}

.channel-info .description {
  /* background-color: coral; */
  flex-basis: 70%;
}

.channel-info .subscribe {
  /* background-color: deeppink; */
  align-self: flex-start;
  display: flex;
  flex-basis: 30%;
  justify-content: flex-end;
}

.channel-info .subscribe button {
  background-color: rgb(204, 22, 0);
  border-radius: 2px;
  border: none;
  color: white;
  font-size: 1.4rem;
  padding: 1rem 1.8rem;
  text-transform: uppercase;
}

.channel-info .subscribe button span {
  display: inline-block;
  margin-left: 0.3rem;
}

.description h2,
.description h3 {
  color: #333;
  line-height: 1.3;
}

.description h3 {
  color: #777;
  font-size: 1.3rem;
  font-weight: 200;
  margin-bottom: 1.7rem;
}

.description p {
  color: #333;
  font-size: 1.4rem;
  line-height: 1.6;
}

.description .show-more {
  color: #777;
  cursor: pointer;
  margin-top: 0.8rem;
  text-transform: uppercase;
}

.avatar div {
  background-color: red;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
}

.material-icons:hover,
button:hover,
img:hover {
  cursor: pointer;
}


</style>