<template>
    <footer>
        <p><span>4</span> Items left</p>
        <div>
            <button class="Active">All</button>
            <button>Active</button>
            <button>Complited</button>
            <button>Clear Completed</button>
        </div>
    </footer>
</template>

<script>

export default {
  name: 'FooterNav',
};

</script>

<style scoped>
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
}
.Active{
    color: #3a7bfd;
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
