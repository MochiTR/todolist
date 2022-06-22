"use strict";
//新增任務
function add() {
  let ul = document.getElementById("taskList");
  let li = document.createElement("li");
  let inputName = document.getElementById("taskName").value;
  li.appendChild(document.createTextNode(inputName));
  ul.appendChild(li);

  let a = document.createElement("a");
  a.appendChild(document.createTextNode("X"));
  a.setAttribute("href", "#");
  li.appendChild(a);
}

//分類-完成(會把li無class的篩選掉)
let finished = document.querySelector(".finished");


finished.addEventListener("click", function (e) {
  e.preventDefault();
  let all = document.querySelectorAll("#taskList li");
  for (let i = 0; i < all.length; i++) {
    let all_status = all[i].getAttribute("class");
    if (all_status == null || all_status == '') {
      all[i].setAttribute("style", "display:none;");
    } else {
      all[i].setAttribute("style", "display:block;");
    }
  }
});


//分類-未完成(會把li無class的顯示出)
let notyet = document.querySelector(".notyet");
notyet.addEventListener("click", function (e) {
  e.preventDefault();
  let all = document.querySelectorAll("#taskList li");
  for (let i = 0; i < all.length; i++) {
    let all_status = all[i].getAttribute("class");
    if (all_status == null || all_status == '') {
      all[i].setAttribute("style", "display:block;");
    } else {
      all[i].setAttribute("style", "display:none;");
    }
  }
});
//分類-所有顯示
let allTask = document.querySelector(".allTask");
allTask.addEventListener("click", function (e) {
  e.preventDefault();
  let all = document.querySelectorAll("#taskList li");
  for (let i = 0; i < all.length; i++) {
      all[i].setAttribute("style", "display:block;");
  }
});

$(document).ready(function () {
  //關閉任務列表
  $("#taskList").on("click", "li a", function (event) {
    event.preventDefault();
    $(this).parent().slideUp(300, function() { $(this).remove(); } );
  });
  //點擊確認任務完成
  $("#taskList").on("click", "li", function (event) {
    $(this).toggleClass("done");
    console.log(event);
  });

  //把add_btn的預設功能解除
  $(".addtodo").on("click", "#add_btn", function (event) {
    event.preventDefault();
  });
  
  //點擊分類切換背景色
   $('.allTask').click(function(event){
     event.preventDefault();
    $(this).parent().css('background','#376091');
     $(this).toggleClass('select');
     $(this).siblings().removeClass('select');
  });
  
  $('.finished').click(function(event){
    event.preventDefault();
    $(this).parent().css('background','#56bf8f');
    $(this).toggleClass('select');
     $(this).siblings().removeClass('select');
  });
  
  $('.notyet').click(function(event){
    event.preventDefault();
    $(this).parent().css('background','#bf5686');
    $(this).toggleClass('select');
     $(this).siblings().removeClass('select');
  });

  
  
});

