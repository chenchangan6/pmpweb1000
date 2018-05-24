<template>
  <div id="sidebar">
    <div id="logodiv">
      <nuxt-link to="/">
        <Pmplogo>
        </pmplogo>
      </nuxt-link>
    </div>
    <div id="sidebarmenu">
      <ul>
        <li v-for="menu in sidebarmenus">
          <nuxt-link :to="menu.linkto">
            <i :class="menu.icons">&nbsp;&nbsp;&nbsp;&nbsp;{{menu.name}}</i>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Pmplogo from '~/components/PmpLogo'
export default {
  components: {
    Pmplogo
  },
  data() {
    return {
      sidebarmenus: [
        {
          linkto: '/backstage/',
          icons: 'el-icon-menu',
          name: '首页'
        },
        {
          linkto: '/backstage/',
          icons: 'el-icon-menu',
          name: '用户管理'
        },
        {
          linkto: '/backstage/exercises',
          icons: 'el-icon-news',
          name: '题目管理'
        },
        {
          linkto: '/backstage/',
          icons: 'el-icon-news',
          name: '试卷管理'
        },
        {
          linkto: '/backstage/',
          icons: 'el-icon-news',
          name: '机构管理'
        }
      ]
    }
  }
}
</script>

<style scoped>
#sidebar {
  width: 100%;
  height: 100%;
  background-color: #202838;
  text-align: left;
  color: #ebeef5;
}
#logodiv {
  height: 60px;
  background-color: #151b28;
}
#logo {
  height: 37px;
  margin: 10px 0px 10px 20px;
}

#sidebarmenu ul li {
  list-style-type: none;
  margin: 20px 0px;
}
#sidebarmenu a {
  font-size: 0.9em;
  color: #ebeef5;
  text-decoration: none;
}
#sidebarmenu a:hover {
  color: #1989fa;

  -webkit-text-decoration: #1989fa;

  text-decoration: #1989fa;

  font-weight: bolder;
}
</style>
