$(document).ready(function(){
    check=false;
    // чекбокс
    function toggler(id,checkbox, d1="flex",d2="none"){
            if (checkbox.prop('checked')) {
                 id.css("display",d1)
                 console.log(1)
                
            }
            else{
                id.css("display",d2)        
                console.log(2)

            }
    }

    $('#other_edu').click(()=>{
        toggler($("#other_edu_field"),$('#other_edu'));
    });

    $('#adres_match').click(()=>{
        toggler($("#adres_fact_fied"),$('#adres_match'),"none","flex");
    });

    // админская панель
    $('.menu_a').click(()=>{
        $('.admin_panel').animate(
        {
            left:0
        },100,"linear")
    });

    $('.exit_a').click(()=>{
        $('.admin_panel').animate(
        {
            left:"-20%"
        },100,"linear")
    });

    // скрытие fieldset
    $(".plus").click(()=>{
        let fieldset=event.target;
         let field_count=$(fieldset.parentElement.parentElement).find(".field_cont")
         if(!check){
             field_count.slideDown({
                duration: 200,
                easing: "linear",
                complete: function(){
                fieldset.setAttribute("src","../img/circle-minus-solid.svg")
             }
            })
             check=true;
        }
        else{
            field_count.slideUp({
                duration: 200,
                easing: "linear",
                complete: function(){
                fieldset.setAttribute("src","../img/circle-plus-solid.svg")
             }
            })
            check=false;
        }
    });

    //кнопки возле таблицы
    $("tr").click(()=>{
        $('.admin_but').css("display","flex")
    });
    // пагинация
    $("#light-pagination").pagination({
        pages:5,
        cssStyle:'light-theme',
        prevText:'Назад',
        nextText:'Вперед'
    });
})