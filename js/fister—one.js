/*
var lis=document.querySelectorAll(".lis");
var shows=document.querySelectorAll(".show");
$(function(){
    $(".lis").click(function(){
        for(let i=0;i<lis.length;i++){
            lis[i].onclick=function(){
                for(let i=0;i<shows.length;i++){
                    shows[i].style.display = "none";
                }
                shows[i].style.display = "block";
            }
        }
    })
})*/

$(".lis").on("click",function () {
    let i = $(".lis").index(this);
    $(".show").eq(i).css("display", "block");
    $(".show").not($(".show").eq(i)).css("display", "none");
})
$(document).click(function (ev) {
    let e=ev||window.event;
    let $lis=$(".lis").add($(".lis").children());
    if($lis.index(e.target)<=-1){
        $(".show").css("display", "none");
    };
})

$(function(){

    $(".lisd").click(function () {
        $(location).attr("href","fisrt-three.html");
    })

    $(".lisc").click(function () {
        $(location).attr("href","first—two.html");
    })

    $(".lisv").click(function () {
        $(location).attr("href","fisrt—four.html");
    })


    //点击显示箭头
    $(".lisa").click(function(){
        $(".nav_left_p").css("display","block");
    });
    //隐藏显示箭头
    $(".lisb").click(function(){
        $(".nav_left_p").css("display","none");
    });

    $(".nav_left_p").toggle(function(){
        $(".nav_left").animate({"left":"-20%"},500);
        $(".nav_left_p").animate({"left":"0%"},500);
        $(".nav_right").animate({"width":"100%"},500);
        $(".chart_line").animate({"width":"56%"},500);
        $(".bar_box_di").animate({
            "width":"336px",
            "textAlign": "center"
        },500);
        $(".bing").animate({"width":"336px"},500);
    },function(){
        $(".nav_left").animate({"left":"0%"},500);
        $(".nav_left_p").animate({"left":"20%"},500);
        $(".nav_right").animate({"width":"80%"},500);
        $(".chart_line").animate({"width":"54%"},500);
        $(".bar_box_di").animate({
            "width":"260px",
        },500);
        $(".bing").animate({"width":"260px"},500);
    });

    //点击li添加背景色
    $(".nav_left_uls li").click(function(){
        $(this).addClass("lisa").css("backgroundColor","#18a0a9");
        $(this).siblings("li").removeClass("lisa").css("backgroundColor","#23c1cc");
    });


    $(".lisc_sa").toggle(function(){
        $(".lisc_uls").css("display","block");
    },function () {
        $(".lisc_uls").css("display","none");
    })



    $(".lisc_licv").toggle(function(){
        $(".lisd_uls").css("display","block");
    },function () {
        $(".lisd_uls").css("display","none");
    })
})


//折线图
var myChats1 = echarts.init(document.getElementsByClassName("hcart_boxa")[0]);
var option1 = {
    title: {
        text: 'Area Chart'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['', '', '', '2011', '', '', '', '2012', '', '']
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 30000,
        splitNumber: 5,
        minInterval: 7500

    },
    series: [
        {
            name: 'ipod Touch',
            type: 'line',
            stack: '总量',
            color: "#a6a6a6",
            smooth: 0.3,
            areaStyle: {},
            data: [2647, 2778, 4912, 2667, 6810, 5670, 4850, 15073, 10687, 8432]
        },
        {
            name: 'ipad',
            type: 'line',
            stack: '总量',
            smooth: 0.3,
            color: "#86c9cf",
            areaStyle: {},
            data: [2666, 2294, 1969, 3597, 1914, 4293, 3750, 5967, 4460, 5713]
        },
        {
            name: 'ipone',
            type: 'line',
            stack: '总量',
            color: "#a6a6a6",
            smooth: 0.4,
            areaStyle: {},
            data: [2666, 2778, 2501, 5689, 2293, 1881, 1588, 5175, 2250, 1790]
        },
    ]
};
myChats1.setOption(option1);
$(".hcart_boxa").resize(function () {
    myChats1.resize();
})

var myChats2 = echarts.init(document.getElementsByClassName("chart_line")[0]);
option2 = {
    title: {
        text: 'Line Chart'
    },
    tooltip: {
        type: 'showTip',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 200,
        splitNumber: 4,
        minInterval: 50,
        axisLine: {//隐藏Y轴
            show: false,
        },
    },
    series: [
        {
            name: "Total Outcomer",
            type: 'line',
            color: "#68d5dd",
            smooth: 0.3,
            data: [90, 185, 130, 160, 65, 70, 125, 175, 85, 155, 195]
        },
        {
            name: "Total Incomer",
            type: 'line',
            smooth: 0.3,
            color: "#808080",
            data: [50, 165, 150, 175, 80, 90, 100, 155, 80, 145, 160]
        }
    ]
};
myChats2.setOption(option2);
$(".chart_line").resize(function () {
    myChats2.resize();
})



//饼状图
var myChats3 = echarts.init(document.getElementsByClassName("bing")[0]);
option3 = {
    series: [
        {
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            data: [
                {value: 300,name:"80%"},
                {value: 50}
            ]
        }
    ],
    color: ['#30a5ff', '#eaeaea'],
};
myChats3.setOption(option3);
$(".bing").resize(function () {
    myChats3.resize();
})


var myChats31 = echarts.init(document.getElementsByClassName("bing")[1]);
option3 = {
    series: [
        {
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            data: [
                {value:60,name:"55%"},
                {value: 50}
            ]
        }
    ],
    color: ['#ffb53e', '#eaeaea'],
};
myChats31.setOption(option3);
$(".bing").resize(function () {
    myChats31.resize();
})


var myChats32 = echarts.init(document.getElementsByClassName("bing")[2]);
option3 = {
    series: [
        {
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            data: [
                {value:180,name:"84%"},
                {value: 50}
            ]
        }
    ],
    color: ['#1ebfae', '#eaeaea'],
};
myChats32.setOption(option3);
$(".bing").resize(function () {
    myChats32.resize();
})


var myChats33 = echarts.init(document.getElementsByClassName("bing")[3]);
option3 = {
    series: [
        {
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
            },
            data: [
                {value:90,name:"46%"},
                {value: 50}
            ]
        }
    ],
    color: ['#ef4040', '#eaeaea'],
};
myChats33.setOption(option3);
$(".bing").resize(function () {
    myChats33.resize();
})


//柱状图
var myChats4 = echarts.init(document.getElementsByClassName("zhu_chat")[0]);
var labelOption = {
    normal: {
        show: true,
    }
};
option4 = {
    color: ['#a6a6a6', '#24c2ce'],
    tooltip: {
        trigger: 'item',
    },
    xAxis: [
        {
            data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
        }
    ],
    yAxis: [
        {
            axisLine: {//隐藏Y轴
                show: false,
            },
            min: 0,
            max: 100,
            splitNumber: 5,
            minInterval: 25,
        }
    ],
    series: [
        {
            name: 'Series A',
            type: 'bar',
            data: [100, 75, 50, 75, 50, 75, 100]
        },
        {
            name: 'Series B',
            type: 'bar',
            data: [90, 65, 40, 65, 40, 65, 90]
        }
    ]
};
myChats4.setOption(option4);
$(".zhu_chat").resize(function () {
    myChats4.resize();
})

//饼状图2
var myChats5 = echarts.init(document.getElementsByClassName("bzhuang")[0]);
option5 = {
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            type: 'pie',
            radius: ['60%', '80%'],
            label: {
                normal: {
                    show:true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 328, name: 'In-Store Sales'},
                {value: 120, name: 'Download Sales'},
                {value: 200, name: 'Mail-Order Sales'},
            ]
        }
    ]
};
myChats5.setOption(option5);
$(".bzhuang").resize(function () {
    myChats5.resize();
})
