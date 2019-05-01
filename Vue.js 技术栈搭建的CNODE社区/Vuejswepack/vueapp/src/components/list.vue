<template>
    <ul>
        <li>
            <router-link :to="{name:'helloworld',params:{worldmsg:'你好，世界'}}">HelLO WORLD</router-link>
        </li>
        <li>
            <router-link :to="{name:'helloearth',params:{earthmsg:'你好，地球'}}">HelLO EARTH</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name:"list"
}
</script>

<style scoped>

</style>
