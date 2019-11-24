var url = 'http://localhost:8000/'

var titleurl = {
    loginurl: url + 'admin/login',
    logouturl: url + 'admin/logout',
    infofurl: url + 'admin/getuser',
    //文章类别搜索
    fontshowurl: url + 'admin/category_search',
    //新增文章类别
    fontaddurl: url + 'admin/category_add',
    //编辑文章类别
    fontediturl: url + 'admin/category_edit',
    //删除文章类别
    fontdelurl: url + 'admin/category_delete',


    //文章搜索
    searcharticle: url + 'admin/search',
    // http://localhost:8000/admin/search
    //删除文章
    delarticle: url + 'admin/article_delete',
    //发布文章
    addarticle: url + 'admin/article_publish'
}