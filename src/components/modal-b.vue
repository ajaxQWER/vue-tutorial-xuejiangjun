<template>
    <transition name="modal">
        <div id="v-modal-wrap" v-show="show">
            <div id="v-modal-dialog">
                <div id="v-modal-title" v-show="title">{{title}}</div>
                <div id="v-modal-body">
                    <slot name="slotA" v-if="slot == 'slotA'"></slot>
                    <slot name="slotB" v-if="slot == 'slotB'"></slot>
                    <slot name="slotC" v-if="slot == 'slotC'"></slot>
                    <template v-if="!slot">{{message}}</template>
                    <template v-if="type == 'prompt'">
                        <form @submit="onSubmitForm" class="v-modal-prompt-form">
                            <input v-if="inputType == 'text'" type="text" ref="input" v-model="input" class="v-modal-input">
                            <input v-if="inputType == 'number'" type="number" step="0.01" ref="input" v-model="input" class="v-modal-input">
                        </form>
                    </template>
                </div>
                <div id="v-modal-footer">
                    <button class="v-modal-btn slave" @click="cancel()" v-show="type == 'confirm' || type == 'prompt'">取消</button>
                    <button class="v-modal-btn primary" @click="ok()" v-show="type">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'modal',
        data: function() {
            return {
                show: false,
                type: '',
                message: '',
                slot: null,
                title: '',
                callback: null,
                input: '',
                inputType: 'text'
            }
        },
        methods: {
            modal: function(message, title) {
                if (typeof message === 'string') {
                    this.message = message;
                    this.slot = null;
                } else if (typeof message === 'object' && message.slot) {
                    this.slot = message.slot;
                }
                this.title = title;
                this.callback = null;
                this.input = '';
                this.show = true;
            },
            modalAlert: function(params = {}) {
                this.type = 'alert';
                this.modal(params.message, params.title == null ? '提示' : params.title);
                this.callback = params.callback;
            },
            modalConfirm: function(params = {}) {
                this.type = 'confirm';
                this.modal(params.message, params.title || '确认');
                this.callback = params.callback;
            },
            modalPrompt: function(params = {}) {
                this.type = 'prompt';
                this.modal(params.message, params.title || '输入');
                this.callback = params.callback;
                this.inputType = params.options.inputType || 'text';
                this.$nextTick(() => {
                    this.$refs.input.focus();
                });
            },
            ok: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? self.input : true);
                    }
                }, 0);
            },
            cancel: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? undefined : false);
                    }
                }, 0);
            },
            onSubmitForm: function(e) {
                e.preventDefault();
                this.ok();
                return false;
            }
        }
    }
</script>

<style>
#v-modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(0, 0, 0);
}

#v-modal-dialog {
  background-color: #fff;
  width: 220px;
  height: auto;
  padding-top: 15px;
  border-radius: 4px;
  box-sizing: border-box;
  color: #333;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  -webkit-user-select: none;
}

#v-modal-dialog * {
  box-sizing: border-box;
}

#v-modal-footer {
  text-align: right;
  display: flex;
  height: 40px;
  position: relative;
}

#v-modal-footer:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: #dadada;
  transform: scaleY(0.5);
  transform-origin: top left;
}

.v-modal-btn {
  flex: 1;
  border: none;
  background-color: #ffffff;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}

.v-modal-btn.primary {
  color: #ff0000;
}

.v-modal-btn.slave {
  color: #666;
  position: relative;
}

.v-modal-btn.slave:after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #dadada;
  transform: scaleX(0.5);
  transform-origin: top right;
}

.v-modal-btn:hover, .v-modal-btn:active {
  background-color: #eeeeee;
}

#v-modal-title {
  font-size: 16px;
  text-align: center;
  margin-bottom: 15px;
}

#v-modal-body {
  font-size: 15px;
  text-align: center;
  line-height: 22px;
  margin-bottom: 10px;
  padding: 0 20px;
  white-space: normal;
}

.v-modal-prompt-form {
  margin-top: 10px;
}

.v-modal-input {
  height: 30px;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  padding: 0 5px;
  outline: none;
  text-align: center;
  background-color: #fff;
  font-size: 15px;
  display: block;
  width: 100%;
}

.v-modal-input:focus {
  border-color: #63c47d;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .2s ease;
}
.modal-enter, .modal-leave-active {
  opacity: 0
}
</style>