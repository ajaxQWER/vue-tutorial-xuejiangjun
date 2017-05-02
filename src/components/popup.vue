<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <button class="modal-default-button" @click="close">close</button>
                    <div class="modal-footer">
                        <p>{{text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data: function() {
        return {

        }
    },
    props: ['text'],
    mounted: function(){
        document.querySelector('body').style.overflow = "hidden";
        document.querySelector('body').style.paddingRight = "17px";

    },
    methods: {
        close: function() {
            this.$emit('close');
            document.querySelector('body').style.overflow = "";
            document.querySelector('body').style.paddingRight = "";

        }
    }
}
</script>
<style>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 800px;
    height: 600px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}


.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
