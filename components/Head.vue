<template>
  <header>
    <nav class="navbar navbar-default">
      <div class="container ">
        <!--屏幕小的时候，菜单隐藏，显示该按钮控制菜单显示-->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="head-logo" href="#">
            <img src="/img/logo.gif" alt="严俊东，logo">
          </a>
        </div>
        <!--菜单的主要内容-->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!--左菜单-->
          <ul class="nav navbar-nav">
            <li class="dropdown"></li>
          </ul>
          <!--右菜单-->
          <ul class="nav navbar-nav navbar-right mean-right">
            <li>
              <nuxt-link to="/" exact>首页</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'index-spoken', query: {page: 1}}">碎言碎语</nuxt-link>
            </li>
            <li v-for="item in menus" v-if="item.name != '留言'">
              <nuxt-link
                :to="{
                  name: 'index-menu-menuid',
                  params: {menuid: item._id},
                  query: {name: item.name, page: 1}
                  }"
                v-text="item.name"></nuxt-link>
            </li>
            <li><router-link :to="{name: 'index-message'}">留言</router-link></li>
            <!--<li><a href="#">留言板</a></li>-->
            <li v-if="user && user.isMaster">
              <nuxt-link to="/control/articlemenu">控制中心</nuxt-link>
            </li>
            <li class="log-li" v-if="!user">
              <nuxt-link :to="{name: 'index-login'}" class="log">登入</nuxt-link>
              |
              <nuxt-link :to="{name: 'index-signup'}" class="log">注册</nuxt-link>
            </li>
            <li class="" v-else>
              <nuxt-link :to="{name: 'index-user'}" class="log">{{user.name}}</nuxt-link>
              |
              <a href="javascript:void(0)" class="log" @click="logout">退出</a>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
</template>
<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'
  import axios from '~plugins/axios'
  export default {
    name: 'BlogMenu',
    props: ['menus'],
    components: {NuxtLink},
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      logout () {
        axios.get('/api/logout').then(res => {
          window.localStorage.removeItem('user')
          this.$store.commit('SET_USER', null)
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .log-li {margin-left: 20px}
  .mean-right .log {
    @media (max-width: 768px) {
      line-height: 20px;
    }
    padding: 0px !important;
    line-height: 80px;
    font-size: 3px;
    display: inline-block;
  }

  .mean-right .log:first-child {
    /*background-color: red;*/

  }

  .nuxt-link-active {
    color: #fc836d !important;
  }

  .mean-right a {
    @media (max-width: 768px) {
      font-size: 15px;
      padding: 5px 20px !important;
    }
    font-size: 18px;
    padding: 30px 15px !important;
  }

  .navbar-toggle {
    margin-top: 23px;
  }

  a.head-logo {
    height: 80px;
    display: block;
    line-height: 80px;
  }

  .navbar {
    margin-bottom: 0;
  }

  .navbar-default {
    border-color: #fff;
    border-bottom-color: #e7e7e7;
  }
</style>

