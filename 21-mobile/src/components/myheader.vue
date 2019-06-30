<template>
      <mt-header :title="mytitle" fixed>
  <router-link to="/" slot="left">
    <mt-button icon="back" @click='$router.go(-1)'>返回</mt-button>

  </router-link>

</mt-header>
</template>
<script>
export default {
  props: ['mytitle']
}
</script>
