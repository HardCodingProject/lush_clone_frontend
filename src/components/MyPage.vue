<template>
    <div class="container">
        <div class="side">
            123
        </div>
        <div class="main">
            222
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    display : grid;
    grid-template-columns : 45% 1fr;
    grid-template-rows: 100%; 
    height : 100%;
    grid-template-areas :
        "side main";
    margin: 0;
    padding: 0;
}
.side{
    grid-area : side;
    border: 1px solid black;
}
.main{
    grid-area : main;
}
</style>