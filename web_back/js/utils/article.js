let article = {
    search: (pageid, type, state, callback) => {
        $.get(TITLEURL.searcharticle, {
                page: pageid,
                type: type,
                state: state
            },
            res => {
                callback(res);
            })
    },
    del: (id, callback) => {
        $.get(TITLEURL.delarticle, { 'id': id }, res => {
            callback(res);
        })
    },
    add: (fd, callback) => {
        $.ajax({
            url: TITLEURL.addarticle,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: res => {
                callback(res);
            }
        })
    },
    //编辑
    edit: (fd, callback) => {
        $.ajax({
            url: TITLEURL.editarticle,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: res => {
                callback(res);
            }
        })
    },
    //文章详情
    getdetail: (id, callback) => {
        $.get(TITLEURL.searcharticle, {
            id: id
        }, res => {
            callback(res)
        })
    },
    //月度文章获取
    getmouth: callback => {
        $.get(TITLEURL.countarticle, res => {
            callback(res)
        })
    }
}