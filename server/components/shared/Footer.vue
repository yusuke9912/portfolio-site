<template>
    <footer class="footer">
        <div class="copyright">&copy;2023 Yusuke Nakagawa</div>
    </footer>
</template>


<script>
export default {
  name: 'shared-header',
}
</script>

<style>
.footer {
  padding: 30px;
  background-color: var(--main-color);
}

.copyright {
  font-size: 12px;
  text-align: center;
  color: #eee;
}

@media screen and (max-width: 767px) {
  .footer {
    padding: 20px;
  }
}
</style>
