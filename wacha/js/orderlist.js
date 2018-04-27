$(function (){
    $('#orderWrap').on('click','.item-hook', function (ev){
        if ($(ev.target).hasClass('delete-hook')) {
            $(ev.target).parents('.item-hook').remove();
            return false;
        }
        $(this).hasClass('move-hook') ? $(this).removeClass('move-hook').siblings('.item-hook').removeClass('move-hook') : $(this).addClass('move-hook').siblings('.item-hook').removeClass('move-hook');
    });
})

