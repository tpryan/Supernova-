/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['economica, sans-serif']='<script src=\"http://use.edgefonts.net/economica:n4,i4,n7,i7:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Hydrogen',
            type:'ellipse',
            rect:['125px','50px','300px','300px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,232,34,1.00)",[50,50,true,'farthest-corner',[['rgba(254,250,210,1.00)',0],['rgba(255,232,34,1.00)',100]]]],
            stroke:[1,"rgb(130, 116, 0)","none"]
         },
         {
            id:'Helium',
            type:'ellipse',
            rect:['145px','70px','260px','260px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,191,33,1.00)",[50,50,true,'farthest-corner',[['rgba(255,226,156,1.00)',0],['rgba(255,191,33,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Carbon',
            type:'ellipse',
            rect:['165px','90px','220px','220px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,195,64,1.00)",[50,50,true,'farthest-corner',[['rgba(157,255,189,1.00)',0],['rgba(0,195,64,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Neon',
            type:'ellipse',
            rect:['185px','110px','180px','180px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(171,32,255,1.00)",[50,50,true,'farthest-corner',[['rgba(218,158,255,1.00)',0],['rgba(171,32,255,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Oxygen',
            type:'ellipse',
            rect:['205px','130px','140px','140px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(77,57,255,1.00)",[50,50,true,'farthest-corner',[['rgba(147,135,255,1.00)',0],['rgba(77,57,255,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Silicon',
            type:'ellipse',
            rect:['225px','150px','100px','100px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(113,71,0,1.00)",[50,50,true,'farthest-corner',[['rgba(202,127,0,1.00)',0],['rgba(113,71,0,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Iron',
            type:'ellipse',
            rect:['245px','170px','60px','60px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(255,6,19,1.00)",[50,50,true,'farthest-corner',[['rgba(254,142,142,1.00)',0],['rgba(255,0,0,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Neutron',
            type:'ellipse',
            rect:['265px','190px','20px','20px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(254,254,254,1.00)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(161,161,161,1.00)',100]]]],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'_1Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            text:"Stars begin as clouds of hydrogen that are just a bit more dense then empty space",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_2Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"The force of gravity causes the  hydrogen cloud to collapse",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_3Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"High pressure fuses hydrogen atoms together creating the energy to overcome the force of gravity and halt collapse. ",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_4Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"Fusion also creates a new element: helium",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_5Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"After millions of years there isn't enough hydrogen to fuse into helium",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_6Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"Instead the star fuses helium into carbon",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_7Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"Again it runs out and makes neon",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_8Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"Then oxygen",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_9Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"Then silicon",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_10Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"At last iron",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_11Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:"Eventually the poor star can no longer stave off collapse so...",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         },
         {
            id:'_12Text',
            type:'text',
            rect:['31px','404px','487px','auto','auto','auto'],
            opacity:1,
            text:" It EXPLODES.  We call it a supernova",
            align:"left",
            font:['economica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(123,123,123,0.65)",3,3,3]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Hydrogen}": [
            ["color", "background-color", 'rgba(255,232,34,1.00)'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(254,250,210,1.00)',0],['rgba(241,33,255,1.00)',100]]]],
            ["style", "left", '-3725px'],
            ["style", "width", '8000px'],
            ["style", "top", '-3800px'],
            ["style", "opacity", '0.15937494005494'],
            ["style", "height", '8000px'],
            ["color", "border-color", 'rgba(130,116,0,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px']
         ],
         "${__12Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '487px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-size", '37px']
         ],
         "${__4Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ],
         "${_Silicon}": [
            ["style", "top", '200px'],
            ["color", "background-color", 'rgba(113,71,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(202,127,0,1.00)',0],['rgba(113,71,0,1.00)',100]]]],
            ["style", "left", '275px'],
            ["style", "width", '0px']
         ],
         "${_Neutron}": [
            ["color", "background-color", 'rgba(254,254,254,1.00)'],
            ["style", "top", '200px'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(161,161,161,1.00)',100]]]],
            ["style", "left", '275px'],
            ["style", "width", '0px']
         ],
         "${__3Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '487px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-size", '37px']
         ],
         "${_Oxygen}": [
            ["style", "top", '200px'],
            ["color", "background-color", 'rgba(77,57,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(147,135,255,1.00)',0],['rgba(77,57,255,1.00)',100]]]],
            ["style", "left", '270px'],
            ["style", "width", '0px']
         ],
         "${__6Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ],
         "${__7Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ],
         "${_Neon}": [
            ["style", "top", '200px'],
            ["color", "background-color", 'rgba(171,32,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(218,158,255,1.00)',0],['rgba(171,32,255,1.00)',100]]]],
            ["style", "left", '275px'],
            ["style", "width", '0px']
         ],
         "${__1Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ],
         "${_Helium}": [
            ["style", "top", '200px'],
            ["color", "background-color", 'rgba(255,191,33,1.00)'],
            ["style", "opacity", '1'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(255,226,156,1.00)',0],['rgba(255,191,33,1.00)',100]]]],
            ["style", "left", '275px'],
            ["style", "width", '0px']
         ],
         "${__9Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ],
         "${__10Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '487px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-size", '37px']
         ],
         "${_Carbon}": [
            ["style", "top", '200px'],
            ["color", "background-color", 'rgba(0,195,64,1.00)'],
            ["style", "opacity", '1'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(157,255,189,1.00)',0],['rgba(0,195,64,1.00)',100]]]],
            ["style", "left", '275px'],
            ["style", "width", '0px']
         ],
         "${__2Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ],
         "${__5Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '487px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-size", '37px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'visible']
         ],
         "${__8Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "width", '487px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "font-size", '37px']
         ],
         "${_Iron}": [
            ["style", "top", '200px'],
            ["color", "background-color", 'rgba(255,6,19,1.00)'],
            ["style", "opacity", '1'],
            ["style", "height", '0px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(254,142,142,1.00)',0],['rgba(255,0,0,1.00)',100]]]],
            ["style", "left", '275px'],
            ["style", "width", '0px']
         ],
         "${__11Text}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '31px'],
            ["style", "font-size", '37px'],
            ["style", "top", '404px'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(123,123,123,0.65)'],
            ["style", "font-family", 'economica, sans-serif'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "width", '487px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 72000,
         autoPlay: true,
         timeline: [
            { id: "eid142", tween: [ "style", "${__6Text}", "opacity", '1', { fromValue: '0'}], position: 33000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid143", tween: [ "style", "${__6Text}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid165", tween: [ "style", "${__12Text}", "opacity", '1', { fromValue: '0'}], position: 64000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid164", tween: [ "style", "${__12Text}", "opacity", '0', { fromValue: '1'}], position: 71000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid107", tween: [ "style", "${_Hydrogen}", "opacity", '1', { fromValue: '0.15937494005494'}], position: 9000, duration: 3000 },
            { id: "eid66", tween: [ "style", "${_Hydrogen}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid147", tween: [ "style", "${__7Text}", "opacity", '1', { fromValue: '0'}], position: 39000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid146", tween: [ "style", "${__7Text}", "opacity", '0', { fromValue: '1'}], position: 44000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid28", tween: [ "style", "${_Neon}", "width", '180px', { fromValue: '0px'}], position: 40500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid71", tween: [ "style", "${_Neon}", "width", '700px', { fromValue: '180px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid163", tween: [ "style", "${__11Text}", "opacity", '1', { fromValue: '0'}], position: 59000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid162", tween: [ "style", "${__11Text}", "opacity", '0', { fromValue: '1'}], position: 62000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid12", tween: [ "style", "${_Silicon}", "width", '100px', { fromValue: '0px'}], position: 52500, duration: 3500, easing: "easeInOutQuad" },
            { id: "eid77", tween: [ "style", "${_Silicon}", "width", '700px', { fromValue: '100px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid99", tween: [ "style", "${_Hydrogen}", "height", '300px', { fromValue: '8000px'}], position: 9000, duration: 3000 },
            { id: "eid62", tween: [ "style", "${_Hydrogen}", "height", '700px', { fromValue: '300px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid156", tween: [ "style", "${__9Text}", "opacity", '1', { fromValue: '0'}], position: 51000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid157", tween: [ "style", "${__9Text}", "opacity", '0', { fromValue: '1'}], position: 55000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid160", tween: [ "style", "${__10Text}", "opacity", '1', { fromValue: '0'}], position: 56000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid161", tween: [ "style", "${__10Text}", "opacity", '0', { fromValue: '1'}], position: 58000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid4", tween: [ "style", "${_Iron}", "width", '60px', { fromValue: '0px'}], position: 56000, duration: 3038, easing: "easeInOutQuad" },
            { id: "eid75", tween: [ "style", "${_Iron}", "width", '700px', { fromValue: '60px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid26", tween: [ "style", "${_Neon}", "height", '180px', { fromValue: '0px'}], position: 40500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid70", tween: [ "style", "${_Neon}", "height", '700px', { fromValue: '180px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid32", tween: [ "style", "${_Neon}", "top", '110px', { fromValue: '200px'}], position: 40500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid85", tween: [ "style", "${_Neon}", "top", '-151px', { fromValue: '110px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid54", tween: [ "style", "${_Neutron}", "left", '265px', { fromValue: '275px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid14", tween: [ "style", "${_Silicon}", "left", '225px', { fromValue: '275px'}], position: 52500, duration: 3500, easing: "easeInOutQuad" },
            { id: "eid88", tween: [ "style", "${_Silicon}", "left", '-75px', { fromValue: '225px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid134", tween: [ "style", "${__2Text}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid135", tween: [ "style", "${__2Text}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid44", tween: [ "style", "${_Helium}", "width", '260px', { fromValue: '0px'}], position: 12000, duration: 19500, easing: "easeInOutQuad" },
            { id: "eid79", tween: [ "style", "${_Helium}", "width", '700px', { fromValue: '260px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid20", tween: [ "style", "${_Oxygen}", "width", '140px', { fromValue: '0px'}], position: 46500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid73", tween: [ "style", "${_Oxygen}", "width", '700px', { fromValue: '140px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid34", tween: [ "style", "${_Carbon}", "height", '220px', { fromValue: '0px'}], position: 31500, duration: 9000, easing: "easeInOutQuad" },
            { id: "eid68", tween: [ "style", "${_Carbon}", "height", '700px', { fromValue: '220px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid96", tween: [ "style", "${_Silicon}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid24", tween: [ "style", "${_Oxygen}", "top", '130px', { fromValue: '200px'}], position: 46500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid87", tween: [ "style", "${_Oxygen}", "top", '-150px', { fromValue: '130px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid117", tween: [ "style", "${__1Text}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid114", tween: [ "style", "${__1Text}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid145", tween: [ "style", "${_Neon}", "opacity", '1', { fromValue: '0'}], position: 40500, duration: 1975, easing: "easeOutQuint" },
            { id: "eid93", tween: [ "style", "${_Neon}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid148", tween: [ "style", "${__8Text}", "opacity", '1', { fromValue: '0'}], position: 45000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid149", tween: [ "style", "${__8Text}", "opacity", '0', { fromValue: '1'}], position: 50000, duration: 1000, easing: "easeOutQuint" },
            { id: "eid8", tween: [ "style", "${_Iron}", "top", '170px', { fromValue: '200px'}], position: 56000, duration: 3038, easing: "easeInOutQuad" },
            { id: "eid91", tween: [ "style", "${_Iron}", "top", '-150px', { fromValue: '170px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid95", tween: [ "style", "${_Iron}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid102", tween: [ "style", "${_Hydrogen}", "top", '50px', { fromValue: '-3800px'}], position: 9000, duration: 3000 },
            { id: "eid65", tween: [ "style", "${_Hydrogen}", "top", '-151px', { fromValue: '50px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid46", tween: [ "style", "${_Helium}", "left", '145px', { fromValue: '275px'}], position: 12000, duration: 19500, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "style", "${_Helium}", "left", '-75px', { fromValue: '145px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid22", tween: [ "style", "${_Oxygen}", "left", '205px', { fromValue: '270px'}], position: 46500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "style", "${_Oxygen}", "left", '-75px', { fromValue: '205px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid150", tween: [ "style", "${__5Text}", "opacity", '1', { fromValue: '0'}], position: 25500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid151", tween: [ "style", "${__5Text}", "opacity", '0', { fromValue: '1'}], position: 30500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid40", tween: [ "style", "${_Carbon}", "top", '90px', { fromValue: '200px'}], position: 31500, duration: 9000, easing: "easeInOutQuad" },
            { id: "eid83", tween: [ "style", "${_Carbon}", "top", '-151px', { fromValue: '90px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid48", tween: [ "style", "${_Helium}", "top", '70px', { fromValue: '200px'}], position: 12000, duration: 19500, easing: "easeInOutQuad" },
            { id: "eid81", tween: [ "style", "${_Helium}", "top", '-150px', { fromValue: '70px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid36", tween: [ "style", "${_Carbon}", "width", '220px', { fromValue: '0px'}], position: 31500, duration: 9000, easing: "easeInOutQuad" },
            { id: "eid69", tween: [ "style", "${_Carbon}", "width", '700px', { fromValue: '220px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid2", tween: [ "style", "${_Iron}", "height", '60px', { fromValue: '0px'}], position: 56000, duration: 3038, easing: "easeInOutQuad" },
            { id: "eid74", tween: [ "style", "${_Iron}", "height", '700px', { fromValue: '60px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid56", tween: [ "style", "${_Neutron}", "top", '190px', { fromValue: '200px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid52", tween: [ "style", "${_Neutron}", "width", '20px', { fromValue: '0px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid16", tween: [ "style", "${_Silicon}", "top", '150px', { fromValue: '200px'}], position: 52500, duration: 3500, easing: "easeInOutQuad" },
            { id: "eid89", tween: [ "style", "${_Silicon}", "top", '-150px', { fromValue: '150px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid94", tween: [ "style", "${_Oxygen}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid92", tween: [ "style", "${_Carbon}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid67", tween: [ "style", "${_Hydrogen}", "border-width", '1px', { fromValue: '1px'}], position: 63000, duration: 0, easing: "easeInOutElastic" },
            { id: "eid100", tween: [ "style", "${_Hydrogen}", "width", '300px', { fromValue: '8000px'}], position: 9000, duration: 3000 },
            { id: "eid63", tween: [ "style", "${_Hydrogen}", "width", '700px', { fromValue: '300px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid18", tween: [ "style", "${_Oxygen}", "height", '140px', { fromValue: '0px'}], position: 46500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid72", tween: [ "style", "${_Oxygen}", "height", '700px', { fromValue: '140px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid30", tween: [ "style", "${_Neon}", "left", '185px', { fromValue: '275px'}], position: 40500, duration: 6000, easing: "easeInOutQuad" },
            { id: "eid84", tween: [ "style", "${_Neon}", "left", '-75px', { fromValue: '185px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid97", tween: [ "style", "${_Helium}", "opacity", '0', { fromValue: '1'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid106", tween: [ "gradient", "${_Hydrogen}", "background-image", [50,50,true,'farthest-corner',[['rgba(254,250,210,1.00)',0],['rgba(255,232,34,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(254,250,210,1.00)',0],['rgba(241,33,255,1.00)',100]]]}], position: 9000, duration: 3000 },
            { id: "eid136", tween: [ "style", "${__3Text}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid137", tween: [ "style", "${__3Text}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid42", tween: [ "style", "${_Helium}", "height", '260px', { fromValue: '0px'}], position: 12000, duration: 19500, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "style", "${_Helium}", "height", '700px', { fromValue: '260px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid138", tween: [ "style", "${__4Text}", "opacity", '1', { fromValue: '0'}], position: 19500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid139", tween: [ "style", "${__4Text}", "opacity", '0', { fromValue: '1'}], position: 24500, duration: 1000, easing: "easeOutQuint" },
            { id: "eid50", tween: [ "style", "${_Neutron}", "height", '20px', { fromValue: '0px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid10", tween: [ "style", "${_Silicon}", "height", '100px', { fromValue: '0px'}], position: 52500, duration: 3500, easing: "easeInOutQuad" },
            { id: "eid76", tween: [ "style", "${_Silicon}", "height", '700px', { fromValue: '100px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid101", tween: [ "style", "${_Hydrogen}", "left", '125px', { fromValue: '-3725px'}], position: 9000, duration: 3000 },
            { id: "eid64", tween: [ "style", "${_Hydrogen}", "left", '-76px', { fromValue: '125px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid6", tween: [ "style", "${_Iron}", "left", '245px', { fromValue: '275px'}], position: 56000, duration: 3038, easing: "easeInOutQuad" },
            { id: "eid90", tween: [ "style", "${_Iron}", "left", '-75px', { fromValue: '245px'}], position: 63000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid38", tween: [ "style", "${_Carbon}", "left", '165px', { fromValue: '275px'}], position: 31500, duration: 9000, easing: "easeInOutQuad" },
            { id: "eid82", tween: [ "style", "${_Carbon}", "left", '-76px', { fromValue: '165px'}], position: 63000, duration: 500, easing: "easeInOutElastic" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "nova");
