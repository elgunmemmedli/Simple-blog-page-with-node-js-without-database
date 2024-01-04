const About = require('../models/about');
const Blogs = require('../models/blog');

exports.getAdminIndex = (req,res,next)=>{
    res.render('admin/admin', {
        pageTitle : "Admin Panel"
    });
};

// About
exports.postAbout = (req,res,next) => {
    const about = new About(req.body.title, req.body.image, req.body.text);
    about.save();
    res.redirect('back');
};

exports.getAbout = (req,res,next)=>{
   About.fetchAll((about)=>{
    res.render('admin/about', {
        pageTitle : 'Admin | About',
        about,
    });
   });
};

//Blogs

exports.postBlogsAdd = (req, res, next) => {
    const blogs = new Blogs(req.body.title, req.body.image, req.body.text);
    blogs.save();
    res.redirect('/admin/blog-list');
}

exports.getBlogsAdd = (req,res,next) =>{
    res.render('admin/blog-add', {
        pageTitle : "Admin | Blog Add"
    });
}

exports.getBlogsList =  (req,res,next) =>{
    Blogs.fetchAll((blogs)=>{
        res.render('admin/blog-list', {
            pageTitle : "Admin | Blog List",
            blogs
        });
    })
}