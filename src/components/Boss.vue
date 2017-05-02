<template>
    <div>
        <p>现在的时间：{{time}}</p>
        <router-link to="/jiangjun">Go to Jiangjun</router-link>
        <router-link to="/">Go to Hello</router-link>
        <Modal v-if="showModal" @close="showModal = false" :title="modalTitle" :message="modalMsg" :sureFn="sureModal" :cancelFn="cancelModal"></Modal>
        <button @click="showM('回到主页?')">click me to back Home</button>
    </div>
</template>
<script>
import Modal from '@/components/modal';
import popup from '@/components/popup';
export default {
    components: {
        Modal : Modal,
        popup: popup
    },
    name: 'Boss',
    data: function() {
        return {
            a: 10,
            now: this.format(),
            showModal: false,
        }
    },
    methods: {
        format: function() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate();
            var hour = date.getHours();
            var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second;
        },
        showM:function(title,msg){
            this.modalTitle = title;
            this.modalMsg = msg;
            this.mc = function(){
                console.log('modal ok')
            }
            this.showModal = true;
        },
        sureModal: function(){
            console.log('sure')
            this.router.push('/');
        },
        cancelModal: function(){
            console.log('cancel')
            alert('you click cancel')
        },
    },
    computed: {
        'time': function() {
            return this.now;
        }
    },
    created: function() {
        var _this = this;
        setInterval(function() {
            _this.now = _this.format();
        }, 1000)
    }
}
</script>
