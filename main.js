const myApp = new Vue ({
  el: "#root",
  data: {
    records: [],
    userGenre: "pop",
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then( r => {
        // console.log(r);
        // console.log(r.data);
        // console.log(r.data.response);
        this.records = r.data.response;
      })
  },
  computed: {
    genreSelection: function(){
      return this.records.filter ((el) => {
        return el.genre.toLowerCase() === this.userGenre.toLowerCase();
      })
    }
  }
})
