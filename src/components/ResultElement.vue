<template>
    <div class="Result-Element"
    :style='!$store.state.StateBackground && "background: #24273B"'>
        <div class="Cercle"></div>
        <p
        :style='!$store.state.StateBackground && "color: white"'
        >{{item.description}}</p>
        <img
        @click='deleteElement()'
        :style='!$store.state.StateBackground && "filter: invert(1)"'
        src='../assets/images/icon-cross.svg'
        alt='Delete'/>
    </div>
</template>

<script>

export default {
  name: 'ResultElement',
  props: ['item'],
  methods: {

  },
};
</script>

<style scoped>
.Result-Element{
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-gap: 20px;
    padding: 13px 15px;
    border-bottom: .1px solid rgba(128, 128, 128, 0.384);
    transition: all 1s ease;
}
.Cercle{
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    align-self: center;
}
p{
    text-align: initial;
}
img{
    align-self: center;
}
</style>
