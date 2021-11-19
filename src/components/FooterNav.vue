<template>
    <footer :class="!$store.state.StateBackground && 'Dark'">
        <p><span>{{$store.state.Element.length}}</span> Items left</p>
        <div>
            <button
            :class="button === 0 && 'Active'"
            @click='ChangedButton(0)'
            >All</button>
            <button
            :class="button === 1 && 'Active'"
            @click='ChangedButton(1)'
            >Active</button>
            <button
            :class="button === 2 && 'Active'"
            @click='ChangedButton(2)'
            >Complited</button>
            <button
            :class="button === 3 && 'Active'"
            @click='ChangedButton(3)'
            >Clear Completed</button>
        </div>
    </footer>
</template>

<script>

export default {
  name: 'FooterNav',
  data() {
    return {
      button: 0,
    };
  },
  methods: {
    ChangedButton(e) {
      this.button = e;
      this.$store.commit('ActionElements', e);
    },
  },
};

</script>

<style scoped>
.Dark{
    background: rgb(36, 39, 59);
}
.Dark > p {
    color: white;
}
.Dark > div > button{
    color: white;
}
footer{
    background: white;
    transition: all 1s ease;
}
span{
    font-weight: 600;
}
div{
    padding-block: 0px 15px;
    display: flex;
    justify-content: space-around;
}
button{
    border: none;
    background: none;
    cursor: pointer;
}
.Active{
    color: #3a7bfd !important;
}
@media (min-width: 600px){
    div{
        padding: 0px;
    }
    footer{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
