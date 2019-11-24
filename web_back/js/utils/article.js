var article = {
    search: function(pageid, type, state, callback) {
        $.get(titleurl.searcharticle, {
                page: pageid,
                type: type,
                state: state
            },
            function(res) {
                callback(res);
            })
    },
    del: function(id, callback) {
        $.get(titleurl.delarticle, { 'id': id }, function(res) {
            callback(res);
        })
    },
    add: function(fd, callback) {
        $.ajax({
            url: titleurl.addarticle,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: function(res) {
                callback(res);
            }
        })
    },
    //编辑
    edit: function(fd, callback) {
        $.ajax({
            url: titleurl.editarticle,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: function(res) {
                callback(res);
            }
        })
    },
    //文章详情
    getdetail: function(id, callback) {
        $.get(titleurl.searcharticle, {
            id: id
        }, function(res) {
            callback(res)
        })
    },
    //月度文章获取
    getmouth: function(callback) {
        $.get(titleurl.countarticle, function(res) {
            callback(res)
        })
    }
}