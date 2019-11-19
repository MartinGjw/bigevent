var url = 'http://localhost:8000/'

var user = {
    login: function(myname, mypassword, callback) {
        $.post(url + 'admin/login', {
            user_name: myname,
            password: mypassword
        }, function(res) {
            // console.log(res);
            callback(res);
        })
    },
    logout: function(callback) {
        $.post(url + 'admin/logout', function(res) {
            // console.log(res);
            callback(res)
        })
    },
    infor: function(callback) {
        $.get(url + 'admin/getuser', function(res) {
            callback(res)
        })

    }
}