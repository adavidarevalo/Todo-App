<template>
    <div class="Result-Element"
    :style='!$store.state.StateBackground && "background: #24273B"'>
        <button
        :class="item.realized ? 'Cercle Active' : 'Cercle'"
        @click='ChangeStatus()'
        ></button>
        <p
        :style='!$store.state.StateBackground && "color: white"'
        :class="item.realized && 'Active-Paragraph'"
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
  props: ['item', 'index'],
  methods: {
    deleteElement() {
      this.$store.commit('deleteElement', this.item.description);
    },
    ChangeStatus() {
      this.$store.commit('ChagedButton', this.index);
    },
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
    animation: fadeIn 1s both;
}
.Cercle{
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    align-self: center;
    cursor: pointer;
    background: none;
    transition: all 1s ease;
}
.Active{
    background: url('../assets/images/icon-check.svg') no-repeat center,linear-gradient(
45deg, #57DDFF, #C058F3);
}
.Active-Paragraph{
    text-decoration: line-through;
    color: #8d8d8d;
}
p{
    text-align: initial;
}
img{
    align-self: center;
    cursor: pointer;
}
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
</style>
