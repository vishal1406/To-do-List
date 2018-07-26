$(function () {

    let inp = $('#inp');
    let add = $('#add');
    let result = $('#list');

    add.click(function () {

        let val = `
            <li>
            <input class="newinp" type="hidden">
            <span class="elem" onclick="typeChange(this)">${inp.val()}</span>
            <button class="update" onclick="updElem(this)">Update</button>
            <span class="delete" onclick="delElem(this)"><i class="fa fa-close" style="font-size:35px;color:white"></i></span>
        </li>`;

        result.append(val);
        $('.res').show();

    });
    $('.res').hide();

});
function typeChange(elem) {
    $(elem).prev().attr('type' , 'text');
}

function delElem(elem){
    $(elem).parent().remove();
}

function updElem(elem){
    let prev1 = $(elem).prev();
    let prev2 = $(prev1).prev();
    let valInp = $(prev2).val();
    if(valInp){
        prev1.text(valInp)
    }

    $(prev2).attr('type' , 'hidden');
}

$(inp).keyup(function (e) {
    if(e.keyCode==13){
        $(add).click();
    }
})

$('ul').sortable();