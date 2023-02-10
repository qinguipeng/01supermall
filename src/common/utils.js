//封装防抖debounce函数（到哪里都能用）
export function debounce(func, delay) {
    let timer = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args); //这里使用了this的动态绑定
        }, delay);
    };
}