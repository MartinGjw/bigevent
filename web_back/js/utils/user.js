// var url = 'http://localhost:8000/'

let user = {
    login: (myname, mypassword, callback) => {
        $.post(
            // url + 'admin/login'
            TITLEURL.loginurl, {
                user_name: myname,
                password: mypassword
            },
            res => {
                // console.log(res);
                callback(res);
            })
    },
    logout: callback => {
        $.post(
            // url + 'admin/logout'
            TITLEURL.logouturl,
            res => {
                // console.log(res);
                callback(res)
            })
    },
    infor: callback => {
        $.get(
            // url + 'admin/getuser'
            TITLEURL.infofurl,
            res => {
                callback(res)
            })

    }
}