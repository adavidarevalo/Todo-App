<template>
    <header>
        <section>
            <div class="Header-Container">
                <div>
                    <h2>TODO</h2>
                </div>
                <button @click='changeBackground()'>
                    <img
                    v-if='StateBackground'
                    src='../assets/images/iconMoon.svg'
                    alt='Moon'/>
                    <img
                    v-else
                    src='../assets/images/iconSun.svg'
                    alt="Sun"/>
                </button>
            </div>
            <div class="Header-Input">
                <p>X</p>
                <input type='test' placeholder="Create a new todo..."/>
            </div>
        </section>
    </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      StateBackground: this.$store.state.StateBackground,
      SearchInput: '',
    };
  },
  methods: {
    changeBackground() {
      this.StateBackground = !this.StateBackground;
    },
  },
};
</script>

<style scoped>
header{
    background-image: url('../assets/images/bg-mobile-light.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
section{
    width: 80%;
    margin: 0 auto;
}
button{
    background: none;
    border: none;
}
.Header-Container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}
.Header-Input{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    border-radius: 5px;
    background: white;
}
input{
    width: 97%;
    border: none;
}
</style>
