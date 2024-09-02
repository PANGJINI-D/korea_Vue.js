  <!-- OptionsAPI -->
  <!-- <template>
    <div>
      <button @click="increment">카운트:{{ counter }}</button>
    </div>
  </template>

  <script>
    export default {
      data() {
        return{
          counter: 0,
        };
      },
      methods: {
        increment() {
          this.counter++;
        }
      },
      mounted() {
        console.log("----- mount -----");
      },
    }
  </script>

  <style scoped>
  </style> -->



  <!-- Composition API -->
  <template>
    <div>
      <button @click="increment">카운트 : {{ counter }}</button>
    </div>
  </template>

  <script>
    import { onMounted, ref } from 'vue';

    export default {
      setup(){
        const counter = ref(0);

        const increment = () => counter.value++;

        onMounted(() => {
          console.log("-----mount-----");
        });

        return {
          counter, increment,
        };
      },
    };
</script>
