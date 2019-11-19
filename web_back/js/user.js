var user = {
    login: function(myname, mypassword, callback) {
        $.post('http://localhost:8000/admin/login', {
            user_name: myname,
            password: mypassword
        }, function(res) {
            // console.log(res);
            callback(res);
        })
    }
}