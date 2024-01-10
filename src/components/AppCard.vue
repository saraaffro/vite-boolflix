<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
}
</script>

<template>
    <div class="title">titolo: {{ info.title }}</div>
    <div class="or-title">titolo originale: {{ info.original_title }}</div>
    <div class="lang">lingua: {{ info.original_language }}</div>
    <div class="vote">voto: {{ info.vote_average }}</div>
</template>

<style lang="scss" scoped></style>