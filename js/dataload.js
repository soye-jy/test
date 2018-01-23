$(document).ready(function(){

  result1=imgUpload1();
  result2=imgUpload2();
  result3 =imgUpload3();
  imgCreate2(result2[0], result2[1]);
  imgCreate1(result1[0], result1[1]);
  imgCreate3(result3[1]);



  $('.images-area>img').mousedown(function(){
    maxZ = $(this).css('z-index');
    maxZ++;
    $(this).css('z-index', maxZ);
  })
  .mouseup(function(){
    maxZ = $(this).css('z-index');
    maxZ = 0;
    $(this).css('z-index', maxZ);
  });


  // $( window ).scroll( function() {
  //   if ( $( document ).scrollTop() > button.top ) {
  //     $( '.btn-area1' ).addClass( 'btnfixed' );
  //   }
  //   else {
  //     $( '.btn-area1' ).removeClass( 'btnfixed' );
  //   }
  //  });
});



function imgCreate1(set_all, set_face) {
  createImg_all(set_all);
  createImg_face(set_face);
  createImg_class(set_all);
}

function imgUpload1() {
  $.ajax({
    type:"GET",
    url: "https://raw.githubusercontent.com/test910531/test910531.github.io/master/json/data_kwang.json",
    async:false,
    success: function(json){
        all_list = saveImg_All(json);
        detec_face = saveImg_face(json);

      }
  });
  return [all_list, detec_face];
}

function imgCreate2(set_all, set_face) {
  createImg_all2(set_all);
  createImg_face2(set_face);
  createImg_class2(set_all);
}


function imgUpload2() {
  $.ajax({
    type:"GET",
    url: "https://raw.githubusercontent.com/test910531/test910531.github.io/master/json/data_yoons.json",
    async:false,
    success: function(json){
        all_list = saveImg_All(json);
        detec_face = saveImg_face(json);
      }
  });
  return [all_list, detec_face];
}


//recognizer
function imgUpload3() {
  $.ajax({
    type:"GET",
    url: "https://raw.githubusercontent.com/test910531/test910531.github.io/master/json/data_pasta.json",
    async:false,
    success: function(json){
        var list = $.parseJSON(json);
        var result = list[0];
        input_data=result.Recognizer[0].input;
        output_data=result.Recognizer[0].output;
      }
  });
  return [input_data, output_data];
}

function imgCreate3(output){
  imgurl = '<img src='+ output + ' class="recognizer">';
  $('#reco-images-set3').append(imgurl);
}
