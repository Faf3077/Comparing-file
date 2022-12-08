<template>
   <div class="form">
      <h2 class="name-form-comparing">Comparing</h2>
      <div class="form-comparing">
         <div class="column-first">
            <h3> Table 1: "{{ this.$store.state.fileName }}"</h3>
            <div v-for="countSelect in dataMain" :key="countSelect">
               <select>
                  <option selected="selected" disabled>
                     <span>Выберите столбец</span>
                  </option>
                  <option v-for="nameTable in dataMain" :key="nameTable.id"> {{ nameTable }} </option>
               </select>
            </div>
         </div>
         <div class="column-second">
            <h3>Table 2: "{{ this.$store.state.fileNameSecond }}"</h3>
            <div v-for="countSelectSecond in dataMainSecond" :key="countSelectSecond">
               <select>
                  <option selected="selected" disabled>
                     <span>Выберите столбец</span>
                  </option>
                  <option v-for="nameTable1 in dataMainSecond" :key="nameTable1.id"> {{ nameTable1 }} </option>
               </select>
            </div>
         </div>
      </div>
      <div class="block__btn">
         <router-link to="/"><button class="btn btn1">Back</button></router-link>
         <router-link to="/ResultComparing"><button @click='result()' class="btn btn1">Next</button></router-link>
      </div>
   </div>
</template>
 
<script>
import lodash from 'lodash'
export default {
   data() {
      return {
         dataMain: [],
         dataMainSecond: [],
      }
   },
   mounted() {
      this.dataFillingOne();
      this.dataFillingTwo();
   },
   methods: {
      dataFillingOne() {
         for (const data in this.$store.state.file[0]) {
            this.dataMain.push(data)
         }
      },
      dataFillingTwo() {
         for (const dataSecond in this.$store.state.fileSecond[0]) {
            this.dataMainSecond.push(dataSecond)
         }
      },
      result() {
            let arrTarget = this.$store.state.file.map(JSON.stringify);
            let arrOut = this.$store.state.fileSecond.map(JSON.stringify)
               .filter((e) => !arrTarget.includes(e))
               .map(JSON.parse);
            this.$store.state.dataFail2 = arrOut
            console.log(this.$store.state.dataFail2);
            let arrTarget1 = this.$store.state.fileSecond.map(JSON.stringify);
            let arrOut1 = this.$store.state.file.map(JSON.stringify)
               .filter((e) => !arrTarget1.includes(e))
               .map(JSON.parse);
            this.$store.state.dataFail = arrOut1
            console.log(this.$store.state.dataFail);
      }
   }
}
</script>
 
 
<style>
.block__btn {
   display: flex;
   justify-content: space-around;
}

h3 {
   margin-bottom: 20px;
   max-width: 200px;
}

.name-form-comparing {
   text-align: center;
}

.form-comparing {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 50px;
}

select {
   width: 200px;
   margin-bottom: 10px;
   border: 2px solid #419152;
   border-radius: 15px;
   padding: 3px 5px;
}
</style>