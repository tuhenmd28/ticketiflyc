// location element filter 
window.onload = load();
function load(){
    $('.filterLocation .btnlist>li').click(function(){
        $(this).addClass('active');
      let value =$(this).attr('data-filter');
      let item = $('.filterLocation .filterItem .item-wrap');
      console.log(value);
        if(value == 'all'){
            $('.filterLocation .filterItem .item-wrap').show(1000)
        }else{
            item.not('.'+value).hide(1000);
            item.filter('.'+value).show(1000);
        }
        // class1 = item.attr('class').split(' ')[0];
        $(this).siblings().removeClass('active')
    
        // console.log(jQuery('selector').attr('class').split(' ')[0]);
    })
}
window.onload = function (){
    $('.lowest').show(500);
    $('div#overlay').show();
}
$('.top-div .wrap >div').click(function(){
    $('.top-div').hide(150);
    $(".panel-fixed").addClass('height')
})

$(".lowest>img").click(function(){
    $('.lowest').hide();
    $('div#overlay').hide();
})
$(".phoneArea .picon img").click(function(){
    $('.lowest').show();
    $('div#overlay').show();
})
$(".shownumber>img").click(function(){
    $('.shownumber').hide();
    $('div#overlay').hide();
})
$(".text p").click(function(){
    $('.shownumber').show();
    $('div#overlay').show();
})
$(".search ").click(function(){
    console.log('click');
    // console.log($('.search-container').hasClass("ami"))
    // $(".scerch_container").toggleClass('show');
    if($(this).children('img').attr('src')=='img/search.png'){
        $(this).children('img').attr('src','img/times.png');
        $(".scerch_container").addClass('show');
        $('#overlay').show(10)
    }else{
        
        $(".scerch_container").removeClass('show');
        $(this).children('img').attr('src','img/search.png');
        $('#overlay').hide(100)
    }
    // $(".search.after img ").attr("src", "img/times.png");
})
function of(){
    $('#overlay').click(function(){
        $('.lowest').hide();
        $('.shownumber').hide();
        $(this).hide(100);
        $(".scerch_container").removeClass('show');
        $('.search').children('img').attr('src','img/search.png');

    })
}

// for search icon 
$(document).ready(function(){
    console.log('click');
    $("form .formcontent .passenger.sicon li").click(function(){
        $(".passenger.sicon .addpsgerwraper").toggle(500);
    })
    $(".passenger.sicon button.ok.btn.btn-primary").click(function(){
        $(".passenger.sicon .addpsgerwraper").hide(500);
    })   

})

let passengerSicon = $(".passenger.sicon .addpsgerwraper .passengerAdd span");
let passengerSicon1 =Number( passengerSicon[0].textContent);
let passengerSicon2 = Number(passengerSicon[1].textContent);
let passengerSicon3 = Number(passengerSicon[2].textContent);
let sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
let btnSicon;
let countSicon;
$("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,2)));

function additionS(e){
    btnSicon = e;
    countSicon = Number(btnSicon.previousElementSibling.textContent)
    if(countSicon<=10){
        ++countSicon;
    }
    btnSicon.previousElementSibling.innerHTML = countSicon;
     passengerSicon1 =Number( passengerSicon[0].textContent);
     passengerSicon2 = Number(passengerSicon[1].textContent);
     passengerSicon3 = Number(passengerSicon[2].textContent);
    sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
    if(sumSicon==1){
        sumSicon =  `${sumSicon} passenger`;
    }else{
        sumSicon =  `${sumSicon} passengers`;

    }
    $("form .formcontent .passenger.sicon li samp").text(sumSicon);
    $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));

}
function sumtractS(e){
    btnSicon = e;
    countSicon = Number(btnSicon.nextElementSibling.textContent)
    if(countSicon>=2){
        --countSicon;
    }
    btnSicon.nextElementSibling.innerHTML = countSicon;
     passengerSicon1 =Number( passengerSicon[0].textContent);
     passengerSicon2 = Number(passengerSicon[1].textContent);
     passengerSicon3 = Number(passengerSicon[2].textContent);
    sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
    if(sumSicon==1){
        sumSicon =  `${sumSicon} passenger`;
    }else{
        sumSicon =  `${sumSicon} passengers`;
        
    }
    $("form .formcontent .passenger.sicon li samp").text(sumSicon);
    $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));

}
function sumtract1S(e){
    btnSicon = e;
    countSicon = Number(btnSicon.nextElementSibling.textContent)
    if(countSicon>=1){
        --countSicon;
    }
    btnSicon.nextElementSibling.innerHTML = countSicon;
     passengerSicon1 =Number( passengerSicon[0].textContent);
     passengerSicon2 = Number(passengerSicon[1].textContent);
     passengerSicon3 = Number(passengerSicon[2].textContent);
    sumSicon = passengerSicon1 + passengerSicon2 + passengerSicon3;
    if(sumSicon==1){
        sumSicon =  `${sumSicon} passenger`;
    }else{
        sumSicon =  `${sumSicon} passengers`;

    }
    $("form .formcontent .passenger.sicon li samp").text(sumSicon);
    $("form .formcontent .passenger.sicon .invisible").val(Number(sumSicon.slice(0,1)));
}
 
// search icon click 


// slider locatin element filter
