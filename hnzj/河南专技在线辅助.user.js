// ==UserScript==
// @name         河南专技在线辅助
// @namespace    https://github.com/huangdiv/user-scripts/
// @version      1.3
// @description  河南专技在线辅助|继续教育公需科目专业科目辅助|自动静音播放|自动播放下一个视频|自动答题(去掉答题弹窗)
// @author       huangdiv(huangdiv@gmail.com)
// @match        *://*.ghlearning.com/*
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// @supportURL   https://github.com/huangdiv/user-scripts/
// @run-at       document-end
// ==/UserScript==

(function() {
    //'use strict';
    // Your code here...

    // Refer to http://dev.polyv.net/2013/videoproduct/v-playerapi/v-playerapi-event/jsbf0001/

    function resume()
    {
        player.j2s_resumeVideo();
    }

    function pause()
    {
        player.j2s_pauseVideo();
    }

    function seek(sec)
    {
        player.j2s_seekVideo(sec);
    }

    function stop()
    {
        player.j2s_stopVideo();
    }

    function vol(v)
    {
        player.j2s_setVolume(v);
    }

    function nextVideo(vid)
    {
        player.changeVid(vid);
    }

    function hide()
    {
        player.j2s_hideInterAction();
    }
  
    function toNext(){
        var text=$('li[id][class=active]')[0].innerText;
        console.log(text);
        setTimeout(function(){
            if (text!=$('li[id][class=active]')[0].innerText){
                text=$('li[id][class=active]')[0].innerText;
                console.log(text);
            }
            if(text.match(/[0-9]+%/)[0]=="100%"){
                seek(player.j2s_getDuration()-1);
                resume();
                console.log('视频播放结束，即将播放下一个视频');
            }else{
                setTimeout(arguments.callee, 5000);
            }}, 5000); 
                    
    }

    function fixFuc (){
        window.s2j_onVideoPause = function () {
            console.log('触发暂停(手动触发或弹题触发)，已处理，继续播放');
            setTimeout(hide,2000);//去掉答题弹窗
            setTimeout(resume,3000);
        }
    }

    function start(){
        console.log('播放器初始化完成');
        if (first==1){
            first=0;
            alert('-----河南专技在线辅助-----\n【自动静音播放|自动播放下一个视频|自动答题(去掉答题弹窗)】\n-----点击确定后开始运行------\n-----作者：huangdi-----');
            console.log('辅助脚本开始运行');
        }
        player=document.getElementsByClassName("polyvFlashObject")[0];
        setTimeout(hide,1000);
        setTimeout(resume,2000);//自动播放
        setTimeout(function (){vol(0);},3000);//静音
        setTimeout(fixFuc,4000);//修改功能
        //setTimeout(pause,5000);//暂停视频播放,进度继续增加。
        setTimeout(toNext,6000);//检测进度
    }

    var player,
        first=1;
    
    window.s2j_onPlayerInitOver=start;

})();
