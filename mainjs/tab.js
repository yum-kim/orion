$(document).ready(function(){
    $(".btnBox > a").click(function(){
  var index = $(this).index(); console.log(index);
  $(".btnBox > a").removeClass("on");
  $(this).addClass("on");
    $(".tab").eq(index).show().siblings(".tab").hide();
    });
});


// a의 0번,1번,2번을 클릭시 tab 클래스 있는 곳으로 0번, 1번, 2번으로 이동하고, 형제들은 숨겨준 

//클래스 on은 클릭시 효과 넣어주는거 