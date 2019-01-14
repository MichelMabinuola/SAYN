//JAVAscript 
//@Author: Michael-King;
//date: 08-1-2019


$(document).ready(function(){


    /*******************************SLIDE IMAGE ********************************/
    let $images = $('.images--screen'), 
    $bigIMG = $('.image--container img'),
    $texts = $('.medium--box article'),
    $bigHeads = $('.pre1'),
    $prev = $('.prev'),
    $numbers = $('.number h1'),
    $next = $('.next'),
    number = $('.counters');
    let $counter = 1;
    let count = 1;

/*******************************************NEXT AND PREV BUTTON BIG SCREEN */
    $prev.on('click', () => {
        plusSlides(-1)
    })
    $next.on('click', () => {
        plusSlides(1)
    })

    next($counter);
  

    function plusSlides(n) {
        next($counter += n)

    }
    

    function next(n) {
        let i;
        if (n > $images.length) {
            $counter = 1
        }
        if (n < 1) {
            $counter = $images.length
        }
       
        for (i = 0; i < $images.length; i++) {
            TweenMax.set($images[i],{
                display: 'none',
                opacity: 0
            })
        }
        for(i = 0; i < $texts.length; i++){
            TweenMax.set($texts[i], {display: 'none', y: 200})
        }
        for(i = 0; i < $bigHeads.length; i++){
            TweenMax.set($bigHeads[i], {display: 'none', x: -200})
        }
        for(i = 0; i < $numbers.length; i++){
            TweenMax.set($numbers[i], {display: 'none'})
        }
        
        TweenMax.set($images[$counter - 1], {
            display: 'block',
            opacity: 1
        })
        TweenMax.from($images[$counter - 1], 0.3, {
            x: 500,
            ease: Power1.easeOut
        })

   
        TweenMax.set($texts[$counter - 1], {display: 'block', y: 0})
        TweenMax.from($texts[$counter - 1], 0.3, {opacity: 0, y: 200, ease: Power1.easeIn})

        TweenMax.set($bigHeads[$counter - 1], {display: 'block', x: 0})
        TweenMax.from($bigHeads[$counter - 1], 0.3, {opacity: 0, x: -200, ease: Power1.easeIn})

        TweenMax.set($numbers[$counter - 1], {display: 'block', color: '#f5f5f5'})
        TweenMax.from($numbers[$counter - 1], 0.3, {opacity: 0, color: 'red', ease: Power1.easeIn})


    }

    /************************************NEXT BIG IMAGE SLIDER ***************/
    

    $('.prev2').on('click', () => {
        nextSlide(-1)
    })

    $('.next2').on('click', () => {
        nextSlide(1)
    })
    nextBigSlide(count);

    function nextSlide(x){
        nextBigSlide(count += x)
    }

    function nextBigSlide(x){

        if(x > $bigIMG.length){
            count = 1;
        }
        if(x < 1){
            count = $bigIMG.length;
        }

        for(let i = 0; i < $bigIMG.length; i++){
            TweenMax.set($bigIMG[i], {display: 'none'})
        }
        TweenMax.set($bigIMG[count - 1], {display: 'block'})
        TweenMax.from($bigIMG, 0.3, {opacity: 0, ease: Power1.ease})
    }
    



   
    


    /*************************MENU *****************************/
    const $menu = $('.menu'),
    $overlay = $('.overlay'),
    $menuContents = $('#menu--contents'),
    $gallery = $('.gallery');

    CustomBounce.create("myBounce", {strength: 0.3});

    function menuDisplay(){
        $menu.on('click', () => {
            if($menu.hasClass('menu-position')){
                $menu.removeClass('menu-position').addClass('change');
               
                 TweenMax.set($overlay, {width: '100%', zIndex: 8})
                 TweenMax.from($overlay, 0.3, {width: '0', opacity: 0})
                 TweenMax.set(number, {display: 'none'})

                TweenMax.set($menuContents, {display: 'block', opacity: 1})
                TweenMax.from($menuContents, 0.3, {opacity: 0})
              
                TweenMax.from($('.big--navText'), 1.5, {y: -50, opacity: 0, ease: "myBounce"})
                TweenMax.from($('.article'), 1, {y: 200, ease: "myBounce"})
                $('.home').addClass('fade')
                $('.article').addClass('fade')
                

            }else if($menu.hasClass('change')){
                $menu.removeClass('change').addClass('menu-position')
                TweenMax.set($overlay, {width: '', zIndex:''})
                TweenMax.from($overlay, 0.3, {width: '100%'})
                TweenMax.set(number, {display: ''})
                TweenMax.set($menuContents, {display: 'none', opacity: 1})
                $gallery.removeClass('fadeIn')
                $('.list').removeClass('fadeIn');
                $('.article').removeClass('fade')
                $('.home').removeClass('fade')
                $('.flex--BIGimg').removeClass('block')
        
                
            }
        })
    }
    menuDisplay()

    
    $gallery.on('click', () => {
        
        if($gallery){
            $gallery.toggleClass('fadeIn');
            $('.list').toggleClass('fadeIn');
            $('.home').removeClass('fade');
            $('.article').removeClass('fade');
        }
    })
    $('.home').on('click', () => {
        $('.home').addClass('fade');
        $('.article').addClass('fade');
        $gallery.removeClass('fadeIn')
        $('.list').removeClass('fadeIn');
    })

    /*******************************************LIST ELEMENTS ONCLICK *********/
   function allList(){
       let total = $('.list');
       for(let i = 0; i < total.length; i++){
           if(total[i]){
               total.on('click', () => {
                  $('.flex--BIGimg').addClass('block')
                             
               })
           }
       }

       
   }
   allList()

   /**************************************************DRAGGABLE LIST ELEMENTS */
  
   Draggable.create($('.small--images ul'), {
    edgeResistance: 0.65,
    bounds: {minX: -200, maxX: 50},
    type: 'x',
    throwProps: true

   })



  






});


/*

let showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(showText, interval, target, message, index, interval, );
    }

}
showText("#myWorld", 'Hello there, and Welcome to my World!', 0, 100); //h1 text appear


let main = document.querySelector('.main-h3');
let mainHElement = document.querySelector('.hthreeTag');
let topBorder = document.querySelector('.top-border');
let BottomBorder = document.querySelector('.bottom-border');

function displayhTAG(main, top, bottom) {
    main.style.display = 'block';
    top.style.display = 'block';
    bottom.style.display = 'block';
}
main.onload = setTimeout(displayhTAG, 5000, mainHElement, topBorder, BottomBorder);

*/