const URL = 'http://localhost:8000/'

const TITLEURL = {
    loginurl: URL + 'admin/login',
    logouturl: URl + 'admin/logout',
    infofurl: URl + 'admin/getuser',
    //文章类别搜索
    fontshowurl: URL + 'admin/category_search',
    //新增文章类别
    fontaddurl: URL + 'admin/category_add',
    //编辑文章类别
    fontediturl: URL + 'admin/category_edit',
    //删除文章类别
    fontdelurl: URL + 'admin/category_delete',


    //文章搜索
    searcharticle: URL + 'admin/search',
    // http://localhost:8000/admin/search
    //删除文章
    delarticle: URl + 'admin/article_delete',
    //发布文章
    addarticle: URL + 'admin/article_publish',
    //编辑文章
    editarticle: URL + 'admin/article_edit',

    //月度新增文章数
    countarticle: URL + 'admin/month_article_count',
    //前台发表评论
    // post_comment:url+'post_comment',

}