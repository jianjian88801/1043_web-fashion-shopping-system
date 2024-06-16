const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootw3o95/",
            name: "springbootw3o95",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootw3o95/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "时装购物系统"
        } 
    }
}
export default base
