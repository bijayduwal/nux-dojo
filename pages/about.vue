<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque libero iusto explicabo quasi rerum sit, fuga delectus aliquid in modi dicta ipsam accusamus exercitationem mollitia consectetur aliquam ipsum ex.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, possimus inventore et totam, voluptatem, maxime laudantium molestiae nesciunt labore minima debitis quisquam. Sapiente maxime accusantium sit, provident labore maiores hic!</p>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>

const { data } = await useFetch('/api/currency/USD')
</script>

<style  scoped>
    h2 {
       margin-bottom: 20px; 
       font-size: 36px;
    }
    p{
        border: 1px solid red ;
        margin:20px 0;
    }
</style>