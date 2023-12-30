$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY < 150){
            $('.header-parent').removeClass('sticky-Top')
            $('.header-parent').css({
                'position':'static',
                'top':0,
                'left':0,
            })
        }else{
            $('.header-parent').addClass('sticky-Top')
            $('.header-parent').css({
                'position':'fixed',
                'top':0,
                'left':0,
            })
        }
    })

    $('.video-button').click(function(){
        $('.video-overlay').show(1000)
    })
    $('.close').click(function(){
        $('.video-overlay').hide(1000)
    })

    $('.video-button2').click(function(){
        $('.video-overlay').show(1000)
    })
    $('.close').click(function(){
        $('.video-overlay').hide(1000)
    })
})