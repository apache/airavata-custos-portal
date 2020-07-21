<template>
    <div>
        <div class="container">
            <div class="column1" align="right">
                <label class="label">{{labelName}}</label>
            </div>
            <div class="column2" align="left">
                <div>
                    <input v-bind:type="inputType" v-bind:rows="inputRows" class="inputText" />
                    <b-icon-eye-slash-fill v-if="toggle" class="eye-icon" v-on:click="onToggle('text')"/>
                    <b-icon-eye-fill v-if="toggle === false" v-on:click="onToggle('password')" class="eye-icon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomInputPassword",
    props: {
        labelName: String,
        
    },
    data() {
        return {
            toggle: true,
            inputType: "password"
        }
    },
    methods: {
        onToggle(type) {
            this.toggle = !this.toggle;
            this.inputType = type;
            console.log(this.inputType);
        }
    }
}
</script>

<style scoped>
.inputText {
    border: 1px solid black;
    border-radius: 9px;
    width: 300px;
    padding: 10px;
    margin-left: 30px;
}
.container {
    display: flex;
}
.column1 {
    flex: 2
}
.column2 {
    flex: 5
}
.label {
    margin-top: 8px;
    color: black;
    font-weight: bold;
}
.eye-icon {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 18px;
}
</style>