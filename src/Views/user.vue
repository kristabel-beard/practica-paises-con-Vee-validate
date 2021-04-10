<template>
  <div class="row">
    <div align="left"><h5>user</h5></div>
    <div id="container">
      <div>{{ auth.user }}</div>
      <div>{{auth.token}}</div>
    </div>
  </div>
  
</template>

<script>
import authservices from "../services/authservices"
import TBCCatalog from "../services/apiservices"

export default {
    
  data() {
    return {
      auth: [],
      catalog:[],
    
      
    };
  },
  async  mounted() {
    console.log("hola");
let response = await authservices.auth();

this.auth =response.data
localStorage.setItem('Token',this.auth.token)

let tbcCatalog = await  TBCCatalog.Catalog();
console.log(tbcCatalog);
     }
 
}
</script>