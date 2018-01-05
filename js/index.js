/*
* @Author: zxy
* @Date:   2018-01-05 14:04:25
* @Last Modified by:   zxy
* @Last Modified time: 2018-01-05 15:30:43
*/

(function(){
	var util=(function(key){
		var prefix="book";
		var storageGetter=function(key){
			return localStorage.getItem(prefix+key);

		}
		var storageSetter=function(key,val){
			return localStorage.setItem(prefix+key,val);
		}
		return {
			storageSetter:storageSetter,
			storageGetter:storageGetter
		}

	})()
	var dom={
		topNav:$('#top-nav'),
		footerNav:$('#footer-nav'),
        fontContainer:$(".font-container"),
        a_container:$(".a_container")
        
	}
	var win=$(window);
	var doc=$(document);

	var initFontSize=util.storageGetter('font-size');
	initFontSize=parseInt(initFontSize);
	if(!initFontSize){
		initFontSize=14;
	}
	dom.a_container.css('font-size',initFontSize);
	function main(){
		eventHandle();

	}
	function readModel(){
		//和服务器交互请求
	}
	function readBaseframe(){
		//渲染基本的ui结构
	}
	function eventHandle(){
		//交互事件绑定
		$("#action-mid").click(function(){
			dom.fontContainer.hide();
			if(dom.topNav.css('display')=='none'){
				dom.topNav.show();
				dom.footerNav.show();
			}else{
				dom.topNav.hide();
				dom.footerNav.hide();
			}
		});
		win.scroll(function(){
			dom.topNav.hide();
			dom.footerNav.hide();
			dom.fontContainer.hide();
		});
		$("#font-button").click(function(){
			if(dom.fontContainer.css('display')=='none'){
				dom.fontContainer.show();
	
			}else{
				dom.fontContainer.hide();
			}
		})

		$("#large-font").click(function(){
			if(initFontSize<25){
				initFontSize+=1;
			    dom.a_container.css('font-size',initFontSize);
			    util.storageSetter('font-size',initFontSize);
			}			

		})
		$("#small-font").click(function(){
			if(initFontSize>14){
				initFontSize-=1;
			    dom.a_container.css('font-size',initFontSize);
			    util.storageSetter('font-size',initFontSize);
			}
		})

	}
	main();
})()