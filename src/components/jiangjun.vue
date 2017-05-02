<template>
	<div class="jiangjun">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzIgOTIiIHdpZHRoPSIyNzIiIGhlaWdodD0iOTIiPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGQ9Ik0xMTUuNzUgNDcuMThjMCAxMi43Ny05Ljk5IDIyLjE4LTIyLjI1IDIyLjE4cy0yMi4yNS05LjQxLTIyLjI1LTIyLjE4QzcxLjI1IDM0LjMyIDgxLjI0IDI1IDkzLjUgMjVzMjIuMjUgOS4zMiAyMi4yNSAyMi4xOHptLTkuNzQgMGMwLTcuOTgtNS43OS0xMy40NC0xMi41MS0xMy40NFM4MC45OSAzOS4yIDgwLjk5IDQ3LjE4YzAgNy45IDUuNzkgMTMuNDQgMTIuNTEgMTMuNDRzMTIuNTEtNS41NSAxMi41MS0xMy40NHoiLz48cGF0aCBmaWxsPSIjRkJCQzA1IiBkPSJNMTYzLjc1IDQ3LjE4YzAgMTIuNzctOS45OSAyMi4xOC0yMi4yNSAyMi4xOHMtMjIuMjUtOS40MS0yMi4yNS0yMi4xOGMwLTEyLjg1IDkuOTktMjIuMTggMjIuMjUtMjIuMThzMjIuMjUgOS4zMiAyMi4yNSAyMi4xOHptLTkuNzQgMGMwLTcuOTgtNS43OS0xMy40NC0xMi41MS0xMy40NHMtMTIuNTEgNS40Ni0xMi41MSAxMy40NGMwIDcuOSA1Ljc5IDEzLjQ0IDEyLjUxIDEzLjQ0czEyLjUxLTUuNTUgMTIuNTEtMTMuNDR6Ii8+PHBhdGggZmlsbD0iIzQyODVGNCIgZD0iTTIwOS43NSAyNi4zNHYzOS44MmMwIDE2LjM4LTkuNjYgMjMuMDctMjEuMDggMjMuMDctMTAuNzUgMC0xNy4yMi03LjE5LTE5LjY2LTEzLjA3bDguNDgtMy41M2MxLjUxIDMuNjEgNS4yMSA3Ljg3IDExLjE3IDcuODcgNy4zMSAwIDExLjg0LTQuNTEgMTEuODQtMTN2LTMuMTloLS4zNGMtMi4xOCAyLjY5LTYuMzggNS4wNC0xMS42OCA1LjA0LTExLjA5IDAtMjEuMjUtOS42Ni0yMS4yNS0yMi4wOSAwLTEyLjUyIDEwLjE2LTIyLjI2IDIxLjI1LTIyLjI2IDUuMjkgMCA5LjQ5IDIuMzUgMTEuNjggNC45NmguMzR2LTMuNjFoOS4yNXptLTguNTYgMjAuOTJjMC03LjgxLTUuMjEtMTMuNTItMTEuODQtMTMuNTItNi43MiAwLTEyLjM1IDUuNzEtMTIuMzUgMTMuNTIgMCA3LjczIDUuNjMgMTMuMzYgMTIuMzUgMTMuMzYgNi42MyAwIDExLjg0LTUuNjMgMTEuODQtMTMuMzZ6Ii8+PHBhdGggZmlsbD0iIzM0QTg1MyIgZD0iTTIyNSAzdjY1aC05LjVWM2g5LjV6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI2Mi4wMiA1NC40OGw3LjU2IDUuMDRjLTIuNDQgMy42MS04LjMyIDkuODMtMTguNDggOS44My0xMi42IDAtMjIuMDEtOS43NC0yMi4wMS0yMi4xOCAwLTEzLjE5IDkuNDktMjIuMTggMjAuOTItMjIuMTggMTEuNTEgMCAxNy4xNCA5LjE2IDE4Ljk4IDE0LjExbDEuMDEgMi41Mi0yOS42NSAxMi4yOGMyLjI3IDQuNDUgNS44IDYuNzIgMTAuNzUgNi43MiA0Ljk2IDAgOC40LTIuNDQgMTAuOTItNi4xNHptLTIzLjI3LTcuOThsMTkuODItOC4yM2MtMS4wOS0yLjc3LTQuMzctNC43LTguMjMtNC43LTQuOTUgMC0xMS44NCA0LjM3LTExLjU5IDEyLjkzeiIvPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0zNS4yOSA0MS40MVYzMkg2N2MuMzEgMS42NC40NyAzLjU4LjQ3IDUuNjggMCA3LjA2LTEuOTMgMTUuNzktOC4xNSAyMi4wMS02LjA1IDYuMy0xMy43OCA5LjY2LTI0LjAyIDkuNjZDMTYuMzIgNjkuMzUuMzYgNTMuODkuMzYgMzQuOTEuMzYgMTUuOTMgMTYuMzIuNDcgMzUuMy40N2MxMC41IDAgMTcuOTggNC4xMiAyMy42IDkuNDlsLTYuNjQgNi42NGMtNC4wMy0zLjc4LTkuNDktNi43Mi0xNi45Ny02LjcyLTEzLjg2IDAtMjQuNyAxMS4xNy0yNC43IDI1LjAzIDAgMTMuODYgMTAuODQgMjUuMDMgMjQuNyAyNS4wMyA4Ljk5IDAgMTQuMTEtMy42MSAxNy4zOS02Ljg5IDIuNjYtMi42NiA0LjQxLTYuNDYgNS4xLTExLjY1bC0yMi40OS4wMXoiLz48L3N2Zz4=" alt="">
		<h1>{{name}}</h1>
		<p>{{age}}</p>
		<p>{{gender}}</p>
        <input v-model.number="age" type="number" min="0">
		<p>点击了<button @click="ups">{{count}}</button>次</p>
        <p>
            <button @click="popup">显示弹窗</button>
            <popup v-if="showPopup" @close="showPopup = false" :text="popupText"></popup>
        </p>
        <p :class="{'showModal-a':showModal}">
            <button @click="showM('modal1','xixi')">modal</button>
            <button @click="showM2('modal2','haha')">modal2</button>
            <Modal v-if="showModal" @close="showModal = false" :title="modalTitle" :message="modalMsg" :sureFn="sureModal" :cancelFn="cancelModal"></Modal>
            <Modal v-if="showModal2" @close="showModal2 = false" :title="modalTitle2" :message="modalMsg2" :sureFn="sureModal2" :cancelFn="cancelModal2"></Modal>
        </p>
        <p>
            <button @click="ajax">ajax</button>
        </p>
        <p>
            <button @click="home">back Home</button>
        </p>
        <router-link to="/">Go to Hello</router-link>
    	<router-link to="/boss">Go to Boss</router-link>
        <ul>
            <li v-for="item in items"><input type="text" :placeholder="item.name" :value="item.name">{{item.name}}-{{item.age}}</li>
        </ul>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
	</div>
</template>

<script>
import Modal from '@/components/modal';
import popup from '@/components/popup';

export default {
    components: {
        Modal: Modal,
        popup: popup
    },
    name: 'jiangjun',
    data: function() {
        return {
            msg: 'Welcome to Your Vue.js App',
            name: 'xuejiangjun',
            age: '18',
            gender: 'male',
            count: 0,
            items:[{
                name:"a1",
                age:25
            },{
                name:"a2",
                age:27
            },{
                name:"a3",
                age:22
            }],
            showModal: false,
            showModal2: false,
            popupText: "this is popup text",
            showPopup: false,
            modalTitle: "",
            modalMsg: "",
            modalTitle2: "",
            modalMsg2: ""
        }
    },
    methods: {
    	ups: function(){
    		this.count++
    	},
        ajax:function(){
            var _this = this;
            _this.$http.get('/axios').then(function(data){
                console.log(data)
                _this.showM('title','这是axios')
            }).catch(function(e){
                console.error(e)
            })
        },
        showM:function(title,msg){
            this.modalTitle = title;
            this.modalMsg = msg;
            this.mc = function(){
                console.log('modal ok')
            }
            this.showModal = true;
        },
        showM2:function(title,msg){
            this.modalTitle2 = title;
            this.modalMsg2 = msg;
            this.mc = function(){
                console.log('modal ok')
            }
            this.showModal2 = true;
        },
        popup: function(){
            this.showPopup = true;
        },
        home: function(){
            this.router.push('/');
            console.log(this.router)
        },
        sureModal: function(){
            console.log('sure')
        },
        cancelModal: function(){
            console.log('cancel')
        },
        sureModal2: function(){
            console.log('sure2')
        },
        cancelModal2: function(){
            console.log('cancel2')
        }
    }
}
</script>
<style scoped>
    li {
      display: block;
      margin: 0 10px;
    }
</style>