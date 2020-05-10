var currentHour = parseInt(new Date().getHours());
$("#currentDay").text(moment().format("MMM Do YYYY"));
$(".saveBtn").click(function(){
    var hour = $(this).val().trim()
    localStorage.setItem("hour"+hour, $("#textArea"+hour).val())
})
for (var i = 9; i < 18; i++) {
    var note =localStorage.getItem("hour"+ i)
    if(note !== null) {
        $("#textArea"+i).val(note)
    }
    if(currentHour> i){
        $("#textArea"+i).addClass("past")
    }
    else if(currentHour === i){
        $("#textArea"+i).addClass("present")
    }else{
         $("#textArea"+i).addClass("future")
    }
}