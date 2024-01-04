const About = require('../models/about');
const Blogs = require('../models/blog');

exports.getIndex = (req,res,next)=>{
    Blogs.fetchAll((blogs)=>{
        res.render('index', {
            pageTitle : 'Blogs Page',
            path : '/',
            blogs,
            header : {
                title : 'Clean Blog',
                desc  : 'A Blog Theme by Start Bootstrap',
                image : '/assets/img/home-bg.jpg'
            }
        });
    });
};

exports.getBlogOne = (req,res,next)=>{
    const id = req.params.id;
    Blogs.findById(id,(blog)=>{
        res.render('blog-detail', {
            pageTitle : blog.title,
            path : '/',
            blog
        })
    })
}

exports.getAbout = (req,res,next) =>{
About.fetchAll((about)=>{
    res.render('about', {
        pageTitle : 'Blogs | About',
        path : '/about',
        about
    });
})
};

exports.getContact = (req,res,next) =>{
    res.render('contact', {
        pageTitle : "Blogs | Contact",
        path : '/contact'
    });
}