//--- View Templtes -------------////
exports.home = function (req, res) {
    res.render('pages/index', {
        title: 'Home',
        home_nav: 'active'
    });
}

exports.about = function (req, res) {
    res.render('pages/about', {
        title: 'About Us',
        about_nav: 'active'
    });
}

exports.contact = function (req, res) {
    res.render('pages/contact', {
        title: 'Contact Us',
        contact_nav: 'active'
    });
}

exports.login = function (req, res) {
    res.render('pages/login', {
        title: 'Login',
        login_nav: 'active'
    });
}

exports.register = function (req, res) {
    res.render('pages/register', {
        title: 'Register',
        register_nav: 'active'
    });
}


///-----------------Transation with DB---/////////////

exports.register_save = function (req, res) {
   res.send(req.body);
}
