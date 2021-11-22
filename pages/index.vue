<template>
<div>
    <shared-header></shared-header>
    <h1>テストです</h1>
    <img src="/img/skill_icon/angular.svg">
    <router-link to="/works/ehon">絵本ページ</router-link>
    </div>
</template>

<script>
import sharedHeader from "../components/shared/Header.vue"
export default {
    components:{
        sharedHeader,
    }
}
</script>