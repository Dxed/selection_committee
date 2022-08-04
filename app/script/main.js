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