<template>
  <div>
    <div class="box">
      <div><h2><strong class="title">Log In</strong></h2></div>
      <label class="label" for="email">Email:</label><br>
      <v-input loading>
      <p><input id="email" @input="getUserEmail" type="email" placeholder="email " class="input"></p></v-input>
      <label class="label" for="password">Password:</label><br>
      <p><input id="password" @input="getUserPassword" type="password" placeholder="password " class="input"></p>
      <button @click="getInput">Log</button>
      <div>
        <router-link to="/queries">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  el: "#login",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      token: false,
      map: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    getUserEmail: function (event) {
      this.email = event.target.value;

    },
    getUserPassword: function (event) {
      this.password = event.target.value;
    },
    async getInput() {
      console.log(this.email, "    ", this.password)
      let config = {
        headers: {
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          useCredentials: true
        }
      }
      this.map.email = this.email;
      this.map.password = this.password;
      const {status: status, data: {token:token}, statusText: message} = await axios.post("/login", (req,res)=>{
        res.set('Access-Control-Allow-Origin',"http://192.168.1.88:8080/")
        res.send(this.map)
      },config)
      if (status !== 200)
        console.log(message,"heyyy")
      else{
        localStorage.setItem('authToken', token)
        await this.$router.push('/queries')
      }

    },
  },beforeCreate() {
    localStorage.clear();
  }
}
</script>

<style scoped>
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  width: 480px;
  height: 340px;
  background-color: rgb(185, 211, 228);
  padding: 24px 24px 24px 26px;
  top: 50%;
  left: 50%;
  margin: -220px 0 0 -320px;
  position: absolute;
  border: 3px solid darkblue;
  child-align: left;
  text-align: -webkit-left;
}

label {
  margin-left: 12px;
  margin-top: 12px;
  alignment: left;
}

title {
  margin-top: 8px;
  margin-bottom: 28px;
  width: 190px;
  alignment: center;
  color: darkblue;
  font-size: 48px;
}

input {
  margin-top: 0;
  margin-left: 10px;
  padding-left: 6px;
  padding-top: 4px;
  padding-right: 4px;
  font-size: 14px;
  width: 360px;
  height: 30px;
  position: relative;
}

button {
  margin-top: 18px;
  left: 70%;
  width: fit-content;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  position: absolute;
  padding: 8px 30px;
}

img {
  margin-bottom: 80px;
  position: absolute;
  left: 42%;
}
</style>