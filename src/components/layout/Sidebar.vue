<template>
    <!-- <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
   
    <ul class="menu-list">
      <li v-for="item in menu">
        <router-link :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'" v-if="item.path" @click.native="toggle(item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </router-link>
        <a :aria-expanded="isExpanded(item)" v-else @click="toggle(item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>

        <expanding v-if="item.children && item.children.length">
          <ul v-show="isExpanded(item)">
            <li v-for="subItem in item.children" v-if="subItem.path">
              <router-link :to="generatePath(item, subItem)">
                {{ subItem.meta && subItem.meta.label || subItem.name }}
              </router-link>
            </li>
          </ul>
        </expanding>
      </li>
    </ul>
  </aside> -->
    <aside>
        <el-row class="app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
            <el-col :span="8">
                <el-menu class="el-menu-vertical" v-for="item in menu">
                    <el-submenu index="item.index" v-if="item.children && item.children.length">
                        <template slot="title">
                            <i :class="[item.meta.icon]"></i> {{ item.name }}</template>
                        <router-link :to="item.path" :exact="true" v-if="item.path">
                        </router-link>
                        <el-menu-item index="subItem.index" v-for="subItem in item.children" v-if="subItem.path">
                            <router-link :to="generatePath(item, subItem)">
                               {{ subItem.name }}
                            </router-link>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="item.index" v-else>
                        <router-link :to="item.path" :exact="true" v-if="item.path">
                            <i :class="[item.meta.icon]"></i>{{ item.meta.label || item.name }}
                        </router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </aside>
</template>
<script>
import Expanding from 'vue-bulma-expanding'

export default {
    components: {
        Expanding
    },

    props: {
        show: Boolean
    },

    data() {
        return {
            isReady: false
        }
    },

    mounted() {
        let route = this.$route
        if (route.name) {
            this.isReady = true
            this.shouldExpandMatchItem(route)
        }
    },

    computed: {
        menu() {
            return this.$store.state.menu
        }
    },

    methods: {
        isExpanded(item) {
            return item.meta.expanded
        },

        toggle(item) {
            item.meta.expanded = !item.meta.expanded
        },

        shouldExpandMatchItem(route) {
            let matched = route.matched
            let lastMatched = matched[matched.length - 1]
            let parent = lastMatched.parent || lastMatched

            if (parent === lastMatched) {
                const p = this.findParentFromMenu(route)
                if (p) {
                    parent = p
                }
            }

            if ('expanded' in parent.meta && parent !== lastMatched) {
                parent.meta.expanded = true
            }
        },

        generatePath(item, subItem) {
            return `${item.component ? item.path + '/' : ''}${subItem.path}`
        },

        findParentFromMenu(route) {
            const menu = this.menu
            for (let i = 0, l = menu.length; i < l; i++) {
                const item = menu[i]
                const k = item.children && item.children.length
                if (k) {
                    for (let j = 0; j < k; j++) {
                        if (item.children[j].name === route.name) {
                            return item
                        }
                    }
                }
            }
        }
    },

    watch: {
        $route(route) {
            this.isReady = true
            this.shouldExpandMatchItem(route)
        }
    }

}
</script>
<style lang="scss">
@import '~bulma/sass/utilities/mixins';
@import '~element-ui/lib/theme-default/index.css';
.app-sidebar {
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1024 - 1;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    overflow-y: auto;
    overflow-x: hidden;
    @include mobile() {
        transform: translate3d(-180px, 0, 0);
    }
    .el-menu-vertical {
        display: inline-block;
        width: 180px;
    }
    a{
      color:rgb(71, 86, 105);
      &.is-active{
         color:rgb(32, 160, 255);
      }
     
    }
}
</style>
