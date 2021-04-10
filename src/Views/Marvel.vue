<template>
  <div class="row">
    <div align="left"><h5>Universo Marvel</h5></div>
    <div>
      <button
        class="btn btn-primary m-1"
        @click="previousPage"
        :disabled="!leftPage"
      >
        Anterior
      </button>
      <button class="btn btn-primary m-1" @click="nextPage">Siguiente</button>
    </div>
    <div v-for="character in marvel" :key="character.id" class="col col-4">
      <table align="center">
        <p><img :src="imagepath(character.thumbnail)" /></p>

        <tr>
          <p><b>id: </b>{{ character.id }}</p>
          <p><b>name: </b>{{ character.name }}</p>
          <p><b>description: </b>{{ character.description }}</p>
          <p><b>modified: </b>{{ character.modified }}</p>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import servicesdos from "../servicesdos";

export default {
  data() {
    return {
      marvel: [],
      responsedata: [],
    };
  },
  async mounted() {
    let response = await servicesdos.getCharacters(0);
    this.marvel = response.data.data.results;
    this.responsedata = response.data.data;
  },
  methods: {
    imagepath(thumbnail) {
      return thumbnail.path + "/standard_medium." + thumbnail.extension;
    },
    async previousPage() {
      if (this.leftPage) {
        await this.getCharacters(
          this.responsedata.offset - this.responsedata.limit
        );
      }
    },
    async nextPage() {
      if (this.rightPage) {
        await this.getCharacters(
          this.responsedata.offset + this.responsedata.limit
        );
      }
    },
    async getCharacters(offset) {
      let response = await servicesdos.getCharacters(offset);
      this.responsedata = response.data.data;
      this.marvel = response.data.data.results;
    },
  },

  computed: {
    leftPage() {
      return this.responsedata.offset > 0;
    },
    rightPage() {
      return (
        this.responsedata.offset + this.responsedata.limit <
        this.responsedata.total
      );
    },
  },
};
</script>






<style lang="css" scoped>
h5 {
  align-content: left;
  color: brown;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
table {
  align-content: center;
  width: 60%;
  height: 50%;
  border: 1px solid rgb(99, 97, 97);
}
th,
td {
  width: 12%;
  text-align: left;
  vertical-align: top;
  border: 1px solid rgb(83, 81, 81);
}
p {
  font-size: 10px;
}
</style>