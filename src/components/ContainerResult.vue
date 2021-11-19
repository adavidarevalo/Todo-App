<template>
    <section>
        <div class="Container">
            <div
            class="Container-Element"
            v-for="(item, index) in $store.state.Element" :key='index'>
                <ResultElement :item='item' :index='index'/>
            </div>
            <FooterNav/>
        </div>
    </section>
</template>

<script>
import ResultElement from './ResultElement.vue';
import FooterNav from './FooterNav.vue';

export default {
  name: 'ContainerResult',
  components: {
    ResultElement,
    FooterNav,
  },

};

</script>

<style scoped>

.Container{
    width: 90%;
    max-width: 550px;
    margin: 0 auto;
    position: relative;
    top: -15px;
    border-radius: 5px;
    box-shadow: 7px 5px 20px 0px #0000008a;
}
.Container-Element{
    background: white;
}
</style>
