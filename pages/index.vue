<template>

  <div>
    <h1>系统路由表</h1>

    <div>
      <ol>
        <li>
          <div> 后台管理</div>
          <ul>
            <li v-for="a in links">
              <nuxt-link :to="a.link"
                         class="listname">{{a.name}}</nuxt-link>
            </li>
          </ul>
        </li>
      </ol>

    </div>
  </div>

</template>

<script>
import PmpLogo from '~/components/PmpLogo.vue'

export default {
  components: {
    PmpLogo
  },
  data() {
    return {
      message: '系统路由导航表',
      host: 'http://127.0.0.1:3000/',
      links: [
        {
          name: '用户登录',
          link: 'backstage/login'
        }
      ]
    }
  }
}
</script>
<style>
.listname {
  font-size: 0.7em;
}
</style>
