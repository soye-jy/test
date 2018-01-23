function saveImg_All(obj){
  var list= $.parseJSON(obj);
  var result = list[0];

  //classifier
  var classifier = result.classifier[0];
  //Food
  var food = classifier.Food[0];
  //cate0
  var food_cate0 = new Array;
  for (var i=0; i<food.cate0.length; i++){
    var imgurl = "";
    img = food.cate0[i];
    imgurl = '<img src='+ img + ' class="food cate0">';
    food_cate0.push(imgurl)
    //$('#all-images-set1').append(imgurl);
  }

  //cate1
  var food_cate1 = new Array;
  for (var i=0; i<food.cate1.length; i++){
    var imgurl = "";
    img = food.cate1[i];
    imgurl = '<img src='+ img +  ' class="food cate1">';
    food_cate1.push(imgurl)
    //$('#all-images-set1').append(imgurl);
  }
  //cate2
  var food_cate2 = new Array;
  for (var i=0; i<food.cate2.length; i++){
    var imgurl = "";
    img = food.cate2[i];
    imgurl = '<img src='+ img + ' class="food cate2">';
    food_cate2.push(imgurl)
    //$('#all-images-set1').append(imgurl);
  }
  //cate3
  var food_cate3 = new Array;
  for (var i=0; i<food.cate3.length; i++){
    var imgurl = "";
    img = food.cate3[i];
    imgurl = '<img src='+ img + ' class="food cate3">';
    food_cate3.push(imgurl)
    //$('#all-images-set1').append(imgurl);
  }

  //Interior
  var interior = classifier.Interior[0];
  //cate4
  var inte_cate4 = new Array;
  for (var i=0; i<interior.cate4.length; i++){
    var imgurl = "";
    img = interior.cate4[i];
    imgurl = '<img src='+ img + ' class="interior cate4">';
    inte_cate4.push(imgurl)
  }
  //cate5
  var inte_cate5 = new Array;
  for (var i=0; i<interior.cate5.length; i++){
    var imgurl = "";
    img = interior.cate5[i];
    imgurl = '<img src='+ img + ' class="interior cate5">';
    inte_cate5.push(imgurl)
  }
  //cate6
  var inte_cate6 = new Array;
  for (var i=0; i<interior.cate6.length; i++){
    var imgurl = "";
    img = interior.cate6[i];
    imgurl = '<img src='+ img + ' class="interior cate6">';
    inte_cate6.push(imgurl)
  }


  //Menu
  var menu = classifier.Menu;
  //console.log(menu);
  //cate7
  var menu_cate7 = new Array;
  for (var i=0; i<menu.length; i++){
    var imgurl = "";
    img = menu[i];
    imgurl = '<img src='+ img + ' class="menu cate7">';
    menu_cate7.push(imgurl)
  }

  //Etc
  var etc = classifier.Etc;
  //console.log(etc);
  //cate8
  var etc_cate8 = new Array;
  for (var i=0; i<etc.length; i++){
    var imgurl = "";
    img = etc[i];
    imgurl = '<img src='+ img + ' class="etc cate8">';
    etc_cate8.push(imgurl)
  }


  //recognizer
  var recognizer = result.Recognizer;
  var recog = new Array;
  for (var i=0; i<recognizer.length; i++){
    var imgurl = "";
    img = recognizer[i];
    imgurl = '<img src='+ img + ' class="recognizer">';
    recog.push(imgurl)
  }

  var all_list = food_cate0.concat(food_cate1, food_cate2, food_cate3,
    inte_cate4, inte_cate5, inte_cate6, menu_cate7, etc_cate8, recog);

  return all_list;
}

function saveImg_face(obj){
  var list= $.parseJSON(obj);
  var result = list[0];

  var detector = result.Detector[0];
  var detec_face = new Array;
  for (var i=0; i< detector.Face2.length; i++){
    var imgurl = "";
    img = detector.Face2[i];
    imgurl = '<img src='+ img + ' class="detector">';
    detec_face.push(imgurl)
  }
  return detec_face;
}

function arrayShuffle(oldArray) {
  var newArray = oldArray.slice();
  var len = newArray.length;
  var i = len;
  while (i--) {
      var p = parseInt(Math.random()*len);
      var t = newArray[i];
      newArray[i] = newArray[p];
      newArray[p] = t;
  }
  return newArray;
};

function createImg_all(all){
  list_new = arrayShuffle(all);
  for (var i=0; i<list_new.length; i++) {
    if (list_new[i] == '<img src=[object Object]>'){
      continue;
    } else {
      $('#all-images-set1').append(list_new[i]);
    }
  }

}

function createImg_class(all){
  for (var i=0; i<all.length; i++) {
    if (all[i] == '<img src=[object Object]>'){
      continue;
    } else {
      $('#class-images-set1').append(all[i]);
    }
  }
}

function createImg_face(detec){
  detec_face = arrayShuffle(detec);
  for (var i=0; i<detec_face.length; i++) {
    if (detec_face[i] == '<img src=[object Object]>'){
      continue;
    } else {
      $('#face-images-set1').append(detec_face[i]);
    }
  }
}

function createImg_all2(all){
  list_new = arrayShuffle(all);
  for (var i=0; i<list_new.length; i++) {
    if (list_new[i] == '<img src=[object Object]>'){
      continue;
    } else {
      $('#all-images-set2').append(list_new[i]);
    }
  }
}


function createImg_class2(all){
  for (var i=0; i<all.length; i++) {
    if (all[i] == '<img src=[object Object]>'){
      continue;
    } else {
      $('#class-images-set2').append(all[i]);
    }
  }
}

function createImg_face2(detec){
  detec_face = arrayShuffle(detec);
  for (var i=0; i<detec_face.length; i++) {
    if (detec_face[i] == '<img src=[object Object]>'){
      continue;
    } else {
      $('#face-images-set2').append(detec_face[i]);
    }
  }
}
