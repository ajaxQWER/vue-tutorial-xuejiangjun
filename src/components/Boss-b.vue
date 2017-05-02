<template>
	<div>
        <p>现在的时间：{{time}}</p>
        <router-link to="/jiangjun">Go to Jiangjun</router-link>
		<router-link to="/">Go to Hello</router-link>
        <Modal ref="modal"></Modal>
        <button @click="showM">click me to back Home</button>
	</div>
</template>

<script>
import Modal from '@/components/modal';
import ModalApi from '@/assets/js/ModalApi';
import modalEventBind from '@/assets/js/ModalEventBind';
export default {
  mixins: [ModalApi],
  components: {
    Modal: Modal
  },
  name: 'Boss',
  data: function() {
    return {
        a:10,
        now: this.format()
    }
  },
  methods:{
     format:function(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
        var second = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();
        return year+'-'+month+'-'+day+' '+hour+':'+min+':'+second;
     },
     showM:function(){
        this.confirm('是否回到首页','回到首页',function(ok){
            if(ok){
              this.router.push('/')
            }
        })
     }
  },
  computed:{
    'time': function(){
       return this.now;
      }
  },
  created: function(){
    var _this = this;
    setInterval(function(){
        _this.now = _this.format();
    },1000)
  },
  mounted() {
        modalEventBind(this.$refs.modal);
    }
}
</script>
