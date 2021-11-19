<template>
  <div :class="$store.state.StateBackground ? 'home' : 'homeDark'">
    <Header/>
    <ContainerResult/>
    <p
    :class="!$store.state.StateBackground && 'ChangeColor'"
    >Drag and drop to reorder list</p>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ContainerResult from '../components/ContainerResult.vue';

export default {
  name: 'Home',
  components: {
    Header,
    ContainerResult,
  },
};
</script>

<style scoped>
div{
  transition: all 1s ease;
  padding-bottom: 10px;
  min-height: 100vh;
  box-sizing: border-box;
}
.home{
  background: #FAFAFA;
}
.homeDark{
  background: #181824;
}
.ChangeColor{
  color: white;
}
</style>
