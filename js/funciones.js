jQuery(document).ready(listar);

function listar(){
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");    
    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");  
        jQuery(".hamb i").removeClass("fa-times");
        
        let valorHref = jQuery(this).attr("href");
        
        jQuery("html,body").animate({
            "scrollTop": jQuery(valorHref).offset().top -76
        })
    })

    jQuery("main .bloque-inicio a").click(function(){
        let valorA = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(valorA).offset().top -76
        })
    })
}