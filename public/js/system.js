$(function(){

    $('.lista').click(function () {
            $('ul').hide();
            $(this).find('ul').slideToggle();
            
    });
    
    
})

$(function () { 
    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('voltar');
    const btnNExt = document.getElementById('proxima');

    let currentSlide =0;

    function hidenSlide(){
        slider.forEach(item => item.classList.remove('on'));
    };

    function showSlider(){
        slider[currentSlide].classList.add('on');
    };

    $(btnNExt).click(function () {
        $(function nextSlider() {
            hidenSlide()
            if(currentSlide === slider.length -1){
                currentSlide = 0
            }else{
                currentSlide++
            }
            showSlider()
        })
        console.log('ok2')  
    });

    $(btnPrev).click(function () { 
        $(function prevSlide() {
            hidenSlide()
            if(currentSlide === 0){
                currentSlide = slider.length-1
                console.log('ok')
            }else{
                currentSlide--
            }
            showSlider()
        })
    });
})

$(function () { 
    const slider = document.querySelectorAll('.slider_2');
    const btnPrev = document.getElementById('voltar_2');
    const btnNExt = document.getElementById('proxima_2');

    let currentSlide =0;

    function hidenSlide(){
        slider.forEach(item => item.classList.remove('on'));
    };

    function showSlider(){
        slider[currentSlide].classList.add('on');
    };

    $(btnNExt).click(function () {
        $(function nextSlider() {
            hidenSlide()
            if(currentSlide === slider.length -1){
                currentSlide = 0
            }else{
                currentSlide++
            }
            showSlider()
        })
        console.log('ok2')  
    });

    $(btnPrev).click(function () { 
        $(function prevSlide() {
            hidenSlide()
            if(currentSlide === 0){
                currentSlide = slider.length-1
                console.log('ok')
            }else{
                currentSlide--
            }
            showSlider()
        })
    });
})


