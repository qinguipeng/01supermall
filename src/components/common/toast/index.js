// 导入组件对象
import Toast from './Toast'


// 一、创建obj对象 
const obj = {}
obj.install = function(Vue) {
        // console.log("执行obj的install函数", Vue);
        // 1.创建   组件构造器
        const ToastConstructor = Vue.extend(Toast)

        // 2. new的方式，根据  组件构造器，创建一个组件对象实例
        const toast = new ToastConstructor()

        // 3.将组建对象实例 手动 挂载到某个元素上
        toast.$mount(document.createElement('div'))

        // 4.toast.$el对应就是div
        document.body.appendChild(toast.$el)


        Vue.prototype.$toast = toast
    }
    // 二、导出obj对象
export default obj