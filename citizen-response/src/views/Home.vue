<template>
  <div>
    <h1>Citizen Response</h1>
    <p>Choose your age!</p>
    <form action="">
      <div v-for="(option, idx) in optionAge" :key="idx">
        <input
          type="radio"
          name="age"
          :value="option[0][0]"
          :checked="isChecked == option"
          @click="clicked(option)"
        />{{ option[0][0] }}

        <div v-if="isChecked === option">
          <div v-for="elm in data[1]" :key="elm">
            <!-- {{ elm }} -->
            <label>{{ elm[0] }}</label
            ><br />
            <div v-if="elm[1] === 'radio'">
              <div v-for="opt in elm[2]" :key="opt">
                <input type="radio" :name="elm[0]" :value="opt" />{{ opt }}
              </div>
            </div>
            <input
              v-if="elm[1] !== 'radio'"
              :type="elm[1]"
              :name="elm[0]"
              id=""
            />
          </div>
          <button>Submit</button>
        </div>
        
        <br>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["optionAge"],
  data() {
    return {
      age: "",
      data: "",
      isChecked: "",
    };
  },
  methods: {
    clicked(value) {
      this.data = value;
      this.isChecked = value;
    },
  },
};
</script>

<style></style>
