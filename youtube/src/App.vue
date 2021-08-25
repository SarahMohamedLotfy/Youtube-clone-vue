<template>
	<div class="container">
		<SearchBar  id ="searchbar" @termChange="onTermChange" ></SearchBar>
		<VideoDetail :video="selectedVideo" :videodetails="videodetails" :relatedvideos ="relatedvideos"  />
		<VideoList id="list" @videoSelect="onVideoSelect" :videos="videos"></VideoList>
	</div>
</template>

<script>
	import axios from "axios";
	import SearchBar from "./components/SearchBar";
	import VideoList from "./components/VideoList";
	import VideoDetail from "./components/VideoDetail";


	export default {
		name: "App",
		data() {
			return {
				videos: [],
				num_results:null,
				selectedVideo: null,
				search_term: null,
				videodetails:[],
				relatedvideos:[]
				
			};
		},
		metaInfo() {
        return {
            meta: [
                { charset: 'utf-8' },
                { equiv: 'X-UA-Compatible', content: 'ie=edge' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }                 

            ]
        }
    },
		components: {
			SearchBar,
			VideoList,
			VideoDetail
		},
		methods: {
			onVideoSelect(video) {
				this.selectedVideo = video;
				this.getvideodetails(this.selectedVideo.id.videoId);
				this.getrelatedvideos(this.selectedVideo.id.videoId);
				
				console.log("vvvvvvvvvvvv");
                
				console.log(this.selectedVideo.snippet.channelId)

				document.getElementById("list").style.display = "none";
				document.getElementById("searchbar").style.display = "none";
			},
			onTermChange(searchTerm) {
				this.search_term = searchTerm;
				axios
					.get("https://www.googleapis.com/youtube/v3/search", {
						params: {
							key: "AIzaSyAcbUpNnBIVw2MUGkbrc2VT80XsDDIzcQg",
							type: "video",
							maxResults: 20,
							part: "snippet",
							q: searchTerm
						}
					})
					.then(response => {
						this.videos = response.data;
						this.num_results = this.videos.pageInfo.totalResults;

						console.log(this.num_results);
					});
			},
			getvideodetails (videoid) {
				axios
					.get("https://www.googleapis.com/youtube/v3/videos", {
						params: {
							key: "AIzaSyAcbUpNnBIVw2MUGkbrc2VT80XsDDIzcQg",
							part: "statistics",
                            id: videoid
						}
					})
					.then(response => {
						this.videodetails = response.data.items[0].statistics;
					});
			},getrelatedvideos(videoid) {
				axios
					.get("https://www.googleapis.com/youtube/v3/search", {
						params: {
							key: "AIzaSyAcbUpNnBIVw2MUGkbrc2VT80XsDDIzcQg",
							type: "video",
							part: "snippet",
							relatedToVideoId: videoid,
							maxResults:20
						}
					})
					.then(response => {
						this.relatedvideos = response.data.items;
					});
			}
		},
		
	};
</script>

<style scoped>
#list{
	display: block;
}

#searchbar{
	display: block;
}

</style>