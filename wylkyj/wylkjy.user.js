// ==UserScript==
// @name        五岳（天一）联考阅卷输分自动点击Enter
// @namespace   https://github.com/huangdiv/user-scripts/
// @match       http://www.wylkyj.com/yuejuan/
// @match       http://web.tydlk.com/
// @version     0.3
// @author      huangdiv
// @description 五岳（天一）联考阅卷辅助|输分自动点击Enter
// @license     BY-NC-SA 4.0
// @homepageURL  https://greasyfork.org/zh-CN/scripts/443794-五岳（天一）联考阅卷输分自动点击Enter
// @supportURL   https://github.com/huangdiv/user-scripts/issues/4
// @run-at       document-end
// ==/UserScript==
function clickEnter(){
     if(location.host=='www.wylkyj.com' && !document.querySelector("#app > div > div.read_status2 > span").innerText) {
          document.querySelector("#app > div > div.give_card > div.card_compute > div.compute_ent > button").click();
     }
     if(location.host=='web.tydlk.com' && !document.querySelector("#app > section > section > div > div:nth-child(2) > div").innerText){
          document.querySelector("#app > section > section > div > div.kl-numbar > div > div.el-input.el-input--default.el-input-group.el-input-group--append.el-input-group--prepend.ty-score-bar > div.el-input-group__append > button").click();
     }
}
setInterval(clickEnter,100);
