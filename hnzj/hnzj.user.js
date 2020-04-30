// ==UserScript==
// @name         河南专技在线辅助
// @namespace    https://github.com/huangdiv/user-scripts/
// @version      1.5
// @description  继续教育公需科目专业科目辅助|自动静音播放|自动播放下一个视频|自动答题(去掉答题弹窗)
// @author       huangdiv(huangdiv@gmail.com)
// @icon         data:image/png;base64,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
// @match        *://*.ghlearning.com/*
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// @supportURL   https://github.com/huangdiv/user-scripts/tree/master/hnzj
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

    function fixFuc1 (){
        window.s2j_onVideoPause = function () {
        console.log('触发暂停(手动触发)，已处理，视频进度会继续增加。');
        console.log('但进度走完暂时不会自动切换到下一个视频，因此请取消暂停');
        }
        window.onQuestionPopUp = function () {
        console.log('触发暂停(弹题触发)，已处理，不答题视频进度也会继续增加。');
	console.log('但进度走完暂时不会自动切换到下一个视频，此时请手动刷新页面，功能正在努力优化中...');
	}
    }

    function start(){
        //console.log('视频播放器初始化完成');
        if (first==1){
            first=0;
            alert('-----河南专技在线辅助-----\n【自动静音播放|自动播放下一个视频|自动答题(去掉答题弹窗)】\n-----作者：huangdiv-----\n-----网址：huangdiv.com-----\n-----版本：1.5-----\n-----2020年4月30日-----\n\n-----点击确定后开始运行------');
            console.log('辅助脚本开始运行');
        }
        if (document.getElementsByClassName("polyvFlashObject")[0]){
            player=document.getElementsByClassName("polyvFlashObject")[0];
	    setTimeout(hide,1000);
	    setTimeout(resume,2000);//自动播放
	    console.log('切换视频后自动开始播放...');
	    setTimeout(function (){vol(0);},3000);//静音
	    setTimeout(fixFuc,4000);//修改功能
	    //setTimeout(pause,5000);//暂停视频播放,进度继续增加。
	    setTimeout(toNext,6000);//检测进度
        } 
        if (document.getElementsByClassName("pv-video")[0]){
            setTimeout(fixFuc1,1000);//修改功能
            document.getElementsByClassName("pv-video")[0].autoplay=true;
            console.log('切换视频后自动开始播放...');
	    //针对html5播放器的操作还比较简陋，功能不断优化中...
        }
    }

    var player,
        first=1;
    
    window.s2j_onPlayerInitOver=start;

})();
