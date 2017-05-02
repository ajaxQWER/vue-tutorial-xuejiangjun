<template>
    <div id="app">
        <button @click="popup">显示弹窗</button>
        <popup v-if="showPopup" @close="showPopup = false" :text="popupText"></popup>
        <router-view></router-view>
    </div>
</template>
<script>
import popup from '@/components/popup';
export default {
    name: 'app',
    components:{
        popup
    },
    data:function(){
        return {
            showPopup: false,
            popupText: "this is popup text"
        }
    },
    methods:{
        popup: function(){
            this.showPopup = true;
        }
    }

}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
