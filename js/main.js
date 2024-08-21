function toggleSection(containerId, btn) {
            
    var container = document.getElementById(containerId);
    //var button = container.querySelector('.show-more-btn');
    
    container.classList.toggle('expanded');
    if(btn){
        //btn.classList.toggle('expanded');
        var btnBottom = document.getElementById('toggle-at-bottom-' + containerId);
        if(btnBottom){
            btnBottom.classList.toggle('expanded');
        }
    }
    var header = document.getElementById('header-' + containerId);
    if(header){
        header.scrollIntoView();
    }
}
function showAll(){
    document.querySelectorAll('section').forEach(function(section){
        section.classList.add('expanded');
    });
    return false;
}