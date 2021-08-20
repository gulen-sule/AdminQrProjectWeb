<template>
  <div class="table">
    <v-flex xs10>
    <v-data-iterator
        disable-filtering
        hide-default-footer
        content-tag="v-layout"
        items="items"
        value="items"
    >
      <v-card>
        <v-card-title>
          <h5>{{head}}</h5>
        </v-card-title>
        <v-divider></v-divider>
        <v-list dense>
irem <br> şule
        </v-list>
      </v-card>


    </v-data-iterator>
    <button v-on:click="getToken()">button get</button>
    <h1>{{ token }}</h1>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QueryTable",
  data() {
    return {
      token: "",
      headers: [
        {text: 'Query Id', value: 'Query ID'},
        {text: 'Created At', value: 'Created At'},
        {text: 'Controller Name', value: 'Controller Name'},
        {text: 'User Name', value: 'User Name'},
        {text: 'Place Name', value: 'Place Name'},
        {text: 'Status', value: 'Status'},
        {text: 'Query UUID', value: 'Query UUID'},
      ],
      head:['Query Id','Created At','Controller Name','User Name','Place Name','Status','Query UUID'],
      items: [{'Query Id':1,'User Name':"sule",'Place Name':"tepe prime", 'Status':1,'Controller Name':"murat bey"}]
    }
  },
  beforeCreate() {
    //const token = localStorage.getItem('authToken')

  },
  methods: {
    getToken: function () {
      let config = {
        headers: {
          Accept: 'application/json',
          Authorization: '101|5jqWoDv18TwScAykKPU1gbyROS4HcLCkJY2IvBlc'
        }
      }
      const queries=axios.get('http://192.168.1.88:8000/getQueries', config)
      console.log(queries)
    }
  }
}
</script>

<style scoped>
table {
  width: 1200px;
  height: max-content;
  text-align: center;
  border: 2px solid;
}

tr {
  padding: 4px;
  margin-top: 6px;
  position: static;
  font-size: 18px;

}


</style>