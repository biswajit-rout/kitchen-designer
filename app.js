angular.module('myApp',[])
.controller('designController',function($scope){
    console.log("angular initialized");
   // $scope.selectedImgUrl = "images/counter_top/cc1.png";
    var getRandomId = function(){
        return Math.round((Math.pow(36, 15) - Math.random() * Math.pow(36, 15))).toString(36).slice(1);
    }
    var randomId = getRandomId(),
        svg_ns = "http://www.w3.org/2000/svg",
        xlink_ns = "http://www.w3.org/1999/xlink";
    $scope.designDetails = [
        {
            "category_name":"Countertop",
            "item_list":[
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/counter_top/cc1.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/counter_top/cc2.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/counter_top/cc3.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/counter_top/cc4.png",
                    "item_name":"test test"
                }
            ]
        },
        {
            "category_name":"Backsplash",
            "item_list":[
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/back_splash/b1.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/back_splash/b2.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/back_splash/b3.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/back_splash/b4.png",
                    "item_name":"test test"
                }
            ]
        },
        {
            "category_name":"Cabinet Color",
            "item_list":[
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/cabinet_color/c1.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/cabinet_color/c2.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/cabinet_color/c3.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/cabinet_color/c4.png",
                    "item_name":"test test"
                }
            ]
        },
        {
            "category_name":"Floor",
            "item_list":[
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/floor/f1.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/floor/f2.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/floor/f3.png",
                    "item_name":"test test"
                },
                {
                    "img_url":"https://biswajit-rout.github.io/kitchen-designer/images/floor/f4.png",
                    "item_name":"test test"
                }
            ]
        }
    ];
    $scope.getSelectedImage = function(img_obj,cat_name){
        var newCatName = cat_name+randomId;
        console.log(randomId);
        createImageGroup(newCatName.replace(/\s/g, ''),img_obj.img_url);

    }
    var createImageGroup = function(group_id,url){
        if($('#'+group_id).length > 0) {
            var imgElem = createNewElement("image", getRandomId(),"","","100%","100%","none","",url);
            $('#'+group_id).html(imgElem);
        } else{
            var groupElem = createNewElement("g",group_id,"","","","","","",""),
                imgElem = createNewElement("image", getRandomId(),"","","100%","100%","none","",url);
                $(groupElem).append(imgElem);
                $('#imageContent').append(groupElem);
        }
    }
    
    function createNewElement(elemType,id,x,y,width,height,preserveAspectRatio,patternUnits,imgUrl){
        var newElem = document.createElementNS(svg_ns,elemType);
        newElem.setAttribute("id",id);
        if(x != "") newElem.setAttribute("x",x);
        if(y != "") newElem.setAttribute("y",y);
        if(width) newElem.setAttribute("width",width);
        if(height) newElem.setAttribute("height",height);
        newElem.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
        if(preserveAspectRatio != ""){
            newElem.setAttribute("preserveAspectRatio",preserveAspectRatio);
        }
        if(patternUnits != ""){
            newElem.setAttribute("patternUnits",patternUnits);
        }
        if(imgUrl != ""){
            newElem.setAttributeNS(xlink_ns,"xlink:href",imgUrl);
        }
        return newElem;
    }
    //Create a base image
    createImageGroup("baseImage","https://biswajit-rout.github.io/kitchen-designer/images/base_image/base_1.png");
});