$(document).ready(function () {    

    // General Variables
    let title = $('.title');
    let navChild = $('.nav').children();
    let banner = $('.banner');
    let par1 = $('.paragraph');
    let secondTitle = $('.photos').children('h3');
    let photos = $('.actual').children();
    let lastPars = $('.pars').children();

    console.log(lastPars);

    TweenMax.from(title, 1, {
        x: -150,
        opacity: 0
    });

    TweenMax.staggerFrom(navChild, 1, {
        x: 150,
        opacity: 0
    }, .20);
    
    TweenMax.from(banner, 1, {
        y: -550,
        opacity: 0,
        delay: .5
    });

    let par1Tween = TweenMax.from(par1, 1, {
        x: -150,
        opacity: 0,
        delay: 1
    });

    let secondTitleTween = TweenMax.from(secondTitle, 1, {
        x: -150,
        opacity: 0,
    });

    let photoTween = TweenMax.staggerFrom(photos, 1, {
        y: -155,
        opacity: 0
    }, .40);

    let parTween = TweenMax.staggerFrom(lastPars, 1, {
        x: -155,
        opacity: 0
    }, .25);

    // scrollMagic
    const controller = new ScrollMagic.Controller();

    let par1Scene = new ScrollMagic.Scene({
        triggerElement: '.paragraph'
    }).setTween(par1Tween);

    let secondTitleScene = new ScrollMagic.Scene({
        triggerElement: '.photos'
    }).setTween(secondTitleTween);

    let photoScene = new ScrollMagic.Scene({
        triggerElement: '.photos'
    }).setTween(photoTween);

    let parScene = new ScrollMagic.Scene({
        triggerElement: '.pars'
    }).setTween(parTween);

    controller.addScene([
        photoScene,
        secondTitleScene,
        parScene,
        par1Scene,
    ])
});

