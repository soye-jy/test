$(document).ready(function(){
  var name = '#광화문맛집';
  //사진 클릭시
  $('.dataset-img').click(function(){
    name= $(this).attr('alt');
    // $('#images-name').text(name);

    //데이터 보여주기
    switch(name) {
      case ('#광화문맛집'):
      $('.images-area').not("#all-images-set1").hide();
      $("#all-images-set1").fadeIn(1000);
      $("#all-images-set1>img").css('opacity', '1');
      $('.dataset-img').not('#set1').css('opacity', '0.7');
      $('#set1').css('opacity', '1');
      //
      // //버튼
      // $('#recognizer').css('cursor', 'default');
      // $('#recognizer').css('pointer-events', 'none');
      // $('#cate7').css('cursor', 'default');
      // $('#cate7').css('pointer-events', 'none');
      // $('#cate6').css('cursor', 'default');
      // $('#cate6').css('pointer-events', 'none');
      break;
      case ('#윤세영식당'):
      //
      $('.images-area').not("#all-images-set2").hide();
      $("#all-images-set2").fadeIn(1000);
      $("#all-images-set2>img").css('opacity', '1');
      $('.dataset-img').not('#set2').css('opacity', '0.7');
      $('#set2').css('opacity', '1');

      // $('#recognizer').css('cursor', 'default');
      // $('#recognizer').css('pointer-events', 'none');
      //
      // $('#cate4').css('cursor', 'default');
      // $('#cate4').css('pointer-events', 'none');
      // $('#cate6').css('cursor', 'default');
      // $('#cate6').css('pointer-events', 'none');
      // $('#cate7').css('cursor', 'pointer');
      // $('#cate7').css('pointer-events', 'auto');
      break;
      case ('#파스타'):
      //
      $('.images-area').not("#all-images-set3").hide();
      $("#all-images-set3").fadeIn(1000);
      $("#all-images-set3>img").css('opacity', '1');
      $('.dataset-img').not('#set3').css('opacity', '0.7');
      $('#set3').css('opacity', '1');

      // $('#recognizer').css('cursor', 'pointer');
      // $('#recognizer').css('pointer-events', 'auto');
      // $('#classifier').css('cursor', 'default');
      // $('#classifier').css('pointer-events', 'none');
      // $('#detector').css('cursor', 'default');
      // $('#detector').css('pointer-events', 'none');

      break;
    }


    //이미지 보여주기
    $('.images-area').css('opacity', '1');
  });
  //상위 버튼 3개
  $('#classi').click(function(){
    switch(name) {
      case ('#광화문맛집'):
      $('#class-images-set1>img').css('opacity', '1');
      $(".images-area").not('#class-images-set1').hide();
      $('#class-images-set1').fadeIn(500);

      break;
      case ("#윤세영식당"):
      $('#class-images-set2>img').css('opacity', '1');
      $(".images-area").not('#class-images-set2').hide();
      $('#class-images-set2').fadeIn(500);
      break;
      case ("#파스타"):
      $('#class-images-set3>img').css('opacity', '1');
      $(".images-area").not('#class-images-set3').hide();
      $('#class-images-set3').fadeIn(500);
      break;
    }

    $('.category').show(1000);
    // $('.images-area').css('opacity', '1');

  });

  $('#recognizer').click(function(){
    // name = $('#images-name').text();
    $('.category').hide(1000);

    switch(name) {
      case ('#광화문맛집'):

      break;
      case ("#윤세영식당"):

      break;
      case ("#파스타"):
      $(".images-area").not('#reco-images-set3').hide();
      $('#reco-images-set3').fadeIn(500);
      $('#reco-images-set3>img').css('opacity', '1');
      break;
    }

  });

  $('#detector').click(function(){
    //$('#detector-detail').toggle('slow');
    // name = $('#images-name').text();
    $('.category').hide(1000);

    switch(name) {
      case ('#광화문맛집'):
      $(".images-area").not('#face-images-set1').hide();
      $('#face-images-set1>img').css('opacity', '1');
      $('#face-images-set1').fadeIn(500);
      break;
      case ("#윤세영식당"):
      $(".images-area").not('#face-images-set2').hide();
      $('#face-images-set2>img').css('opacity', '1');
      $('#face-images-set2').fadeIn(500);
      break;
      case ("#파스타"):
      $(".images-area").not('#face-images-set3').hide();
      $('#face-images-set3>img').css('opacity', '1');
      $('#face-images-set3').fadeIn(500);
      break;
    }


  });

  // //main
  // $('#main-button').click(function(){
  //   $('#main-area').fadeIn('slow');
  //   $('#banner').hide();
  //   $('#main-button').hide();
  //   $('#header').hide();
  //    var offset = $("#main-area").offset();
  //   $('html, body').animate({scrollTop : offset.top}, 400);
  //
  // });


  //food button
  $('#food').click(function(){
    $('.images-area>img').not('.food').css('opacity', '0.1');
    $('.food').css('opacity', '1');
  });


  $('#cate0').click(function(){
    $('.images-area>img').not('.cate0').css('opacity', '0.1');
    $('.cate0').css('opacity', '1');

  });

  $('#cate1').click(function(){
    $('.images-area>img').not('.cate1').css('opacity', '0.1');
    $('.cate1').css('opacity', '1');
  });

  $('#cate2').click(function(){
    // console.log(food_cate0);
    $('.images-area>img').not('.cate2').css('opacity', '0.1');
    $('.cate2').css('opacity', '1');
  });

  $('#cate3').click(function(){
    // console.log(food_cate0);
    $('.images-area>img').not('.cate3').css('opacity', '0.1');
    $('.cate3').css('opacity', '1');
  });

  //interior button
  $('#interior').click(function(){
    //$('#interior-detail').toggle('slow');
    $('.images-area>img').not('.interior').css('opacity', '0.1');
    $('.interior').css('opacity', '1');

  });

  $('#cate4').click(function(){
    // console.log(food_cate0);
    $('.images-area>img').not('.cate4').css('opacity', '0.1');
    $('.cate4').css('opacity', '1');
  });

  $('#cate5').click(function(){
    // console.log(food_cate0);
    $('.images-area>img').not('.cate5').css('opacity', '0.1');
    $('.cate5').css('opacity', '1');
  });

  $('#cate6').click(function(){
    // console.log(food_cate0);
    $('.images-area>img').not('.cate6').css('opacity', '0.1');
    $('.cate6').css('opacity', '1');
  });

  //menu
  $('#cate7').click(function(){
    $('.images-area>img').not('.cate7').css('opacity', '0.1');
    $('.cate7').css('opacity', '1');
  });

  //etc
  $('#cate8').click(function(){
    // console.log(food_cate0);
    $('.images-area>img').not('.cate8').css('opacity', '0.1');
    $('.cate8').css('opacity', '8');
  });


  //마우스 오버 될때, 하위 버튼들 보여줌
  $('#classi-cate-food').mouseover(function(){
    $('#food2').show();
  })
  .mouseout(function(){
    $('#food2').hide();

  });

  $('#classi-cate-inte').mouseover(function(){
    $('#interior2').show();

  })
  .mouseout(function(){
    $('#interior2').hide();

  });

});
