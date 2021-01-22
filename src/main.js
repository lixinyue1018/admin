/**
 * 项目的启动入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

// 关闭生产环境提示
Vue.config.productionTip = false

// 创建vue根实例
// 把vue router 配置到根实例中
// 通过render方法把App根组件 渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app') // 等价于 el:'#app'
