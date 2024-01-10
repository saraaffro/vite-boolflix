<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
    data() {
        return {
            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png',
            }
        }
    }
}
</script>

<template>
    <div class="title" v-if="info.title">titolo: {{ info.title }}</div>
    <div class="title" v-else>titolo: {{ info.name }}</div>
    <div class="or-title" v-if="info.original_title">titolo originale: {{ info.original_title }}</div>
    <div class="or-title" v-else>titolo originale: {{ info.original_name }}</div>
    <div class="lang" v-if="flags[info.original_language]">
        <img class="flag" :src="flags[info.original_language]" :alt="info.original_language">
    </div>
    <div class="lang" v-else>
        <img class="flag"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkFor3t5zhIyCnGKql1IEMQVqmAxqylbn8A&usqp=CAU"
            alt="flag">
    </div>
    <div class="vote">voto: {{ info.vote_average }}</div>
</template>

<style lang="scss" scoped>
.flag {
    width: 50px;
}
</style>