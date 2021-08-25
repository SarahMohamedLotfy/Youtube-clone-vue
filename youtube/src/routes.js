import SearchBar from './components/SearchBar.vue';
import VideoDetail from './components/VideoDetail.vue';
import VideoList from './components/VideoList.vue';
import VideoListItem from './components/VideoListItem.vue';

const routes = [
    { path: '/home', component: SearchBar },
    { path: '/VideoDetail', component: VideoDetail },
    { path: '/VideoList', component: VideoList },
    { path: '/VideoListItem', component: VideoListItem }
];

export default routes;