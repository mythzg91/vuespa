const base = '/api/posts';


export default {
    // 请求文章详情页 API
    getPostData (id) {
        return axios.get(base + '/' + id);
    },

    // 请求博客首页 API
    getPostsData (page = 1) {
        return axios.get(base, {
            params: {page: page}
        });
    },

    // 请求博客分类页 API
    getCategoryPosts (name, page = 1) {
        return axios.get(base + '/category/' + name, {
            params: {page: page}
        });
    },

    // 请求分页数据 API
    getMorePosts (url) {
        return axios.get(url);
    },

    // 获取分类列表 API
    getPostsCategories() {
        return axios.get(base + '/categories');
    },

    // 文章发布 API
    createNewPost(formData) {
        return axios.post(base + '/store', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    // 将 CSRF TOKEN 设置到 Cookie
    setCsrfCookie() {
        return axios.get('/sanctum/csrf-cookie');
    },

    // 登录认证 API
    login(formData) {
        return axios.post('/login', formData);
    },

    // 退出登录 API
    logout() {
        return axios.post('/logout');
    },

    // 获取认证用户信息 API
    getUserInfo() {
        return axios.get('/api/user');
    }

}
