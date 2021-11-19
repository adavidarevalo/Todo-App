<template>
    <header
    :class="$store.state.StateBackground ? 'Header-Container_Ligth' :'Header-Container_Dark'">
        <section>
            <div class="Header-Container">
                <div>
                    <h2>TODO</h2>
                </div>
                <button @click='changeBackground()'>
                    <img
                    v-if='$store.state.StateBackground'
                    src='../assets/images/iconMoon.svg'
                    alt='Moon'/>
                    <img
                    v-else
                    src='../assets/images/iconSun.svg'
                    alt="Sun"/>
                </button>
            </div>
            <div
            class="Header-Input "
            :style="!$store.state.StateBackground && 'background: hsl(235, 24%, 19%)'">
                <div class="Cercle"></div>
                <input type='text' placeholder="Create a new todo..."
                :style="!$store.state.StateBackground && 'color: white'"/>
            </div>
        </section>
    </header>
</template>

<script>

export default {
  name: 'Header',

  data() {
    return {
      SearchInput: '',
    };
  },
  methods: {
    changeBackground() {
      this.StateBackground = !this.$store.commit('ChangeBCK');
    },
  },
};
</script>

<style scoped>
header{
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
}
.Header-Container_Ligth{
    background-image: url('../assets/images/bg-mobile-light.jpg');
}
.Header-Container_Dark{
    background-image: url('../assets/images/bg-mobile-dark.jpg');
}
section{
    width: 80%;
    max-width: 550px;
    margin: 0 auto 10px;
}
button{
    background: none;
    border: none;
}
.Header-Container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Header-Input{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    border-radius: 5px;
    background: white;
    padding: 13px 15px;
    transition: all 1s ease;
}
.Cercle{
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 50%;
}
input{
    width: 87%;
    border: none;
    font-size: 1.1rem;
    outline: none;
    background: none;
}
@media (min-width: 600px){
.Header-Container_Ligth{
    background-image: url('../assets/images/bg-desktop-light.jpg');
}
.Header-Container_Dark{
    background-image: url('../assets/images/bg-desktop-dark.jpg');
}
}
</style>
