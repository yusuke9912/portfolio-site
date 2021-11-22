<template>
  <header class="header">
  <div class="container">
    <h1 class="header-logo">
      <router-link to="/">Yusuke Nakagawa's Portfolio</router-link>
    </h1>
    <nav class="gnav">
      <ul class="gnav-list">
        <li class="gnav-item"><a href="/#about">About</a></li>
        <li class="gnav-item"><a href="/#works">Works</a></li>
        <li class="gnav-item"><a href="/#skill">Skill</a></li>
        <li class="gnav-item"><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
</template>


<script>
export default {
  name: 'shared-header',
}
</script>
