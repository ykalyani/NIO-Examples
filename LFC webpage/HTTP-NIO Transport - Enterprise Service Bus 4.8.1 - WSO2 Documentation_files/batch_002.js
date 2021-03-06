try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/jirachart.js' */
AJS.toInit(function(){AJS.$(".jira-chart-macro-img").load(function(b){AJS.log("Jira Chart Macro - chart image loaded");AJS.$(".insert-jira-chart-macro-button",window.parent.document).enable()}).error(function(e){AJS.log("Jira Chart Macro - chart image loaded error");AJS.$(".insert-jira-chart-macro-button",window.parent.document).disable();var f=AJS.$(e.target);var d=f.parent();var c=d.parent();d.remove();var b="Unable to render JIRA chart macro, due to an execution error.";AJS.messages.error(c,{body:b})});if(AJS.MacroBrowser){if(AJS.MacroBrowser.previewOnload){var a=AJS.MacroBrowser.previewOnload;AJS.MacroBrowser.previewOnload=function(b){var c=AJS.MacroBrowser;if(c.dialog&&c.dialog.activeMetadata&&c.dialog.activeMetadata.macroName){a(b)}}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = '${pdl.dir}js/mailpage.js' */
AJS.Confluence.SharePage={};AJS.Confluence.SharePage.autocompleteUser=function(d){d=d||document.body;var e=AJS.$,a=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var c=function(j){if(!j||!j.result){throw new Error("Invalid JSON format")}var f=[];for(var g=0;g<j.result.length;g++){var h=j.result[g];if(h.type=="group"){h=b(h)}}f.push(j.result);return f};function b(f){if(f.name=="confluence-users"||f.name=="confluence-administrators"){return f}f.title=f.name;f.group=f.name;f.thumbnailLink={href:AJS.Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};f.link=[{href:AJS.Confluence.getContextPath(),rel:"self"}];return f}e("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",d).each(function(){var h=e(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var g=h.attr("data-max")||10,j=h.attr("data-alignment")||"left",i=h.attr("data-dropdown-target"),f=null;if(i){f=e(i)}else{f=e("<div></div>");h.after(f)}f.addClass("aui-dd-parent autocomplete");h.quicksearch(AJS.REST.getBaseUrl()+"search/user-or-group.json",function(){h.trigger("open.autocomplete-sharepage")},{makeParams:function(k){return{"max-results":g,query:k.replace("{|}","")}},dropdownPlacement:function(k){f.append(k)},makeRestMatrixFromData:c,addDropdownData:function(l){var k=e.trim(h.val());if(a.test(k)){l.push([{name:k,email:k,href:"#",icon:AJS.Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!l.length){var m=h.attr("data-none-message");if(m){l.push([{name:m,className:"no-results",href:"#"}])}}return l},ajsDropDownOptions:{alignment:j,displayHandler:function(k){if(k.restObj&&k.restObj.username){return k.name+" ("+k.restObj.username+")"}return k.name},selectionHandler:function(m,l){if(l.find(".search-for").length){h.trigger("selected.autocomplete-sharepage",{searchFor:h.val()});return}if(l.find(".no-results").length){this.hide();m.preventDefault();return}var k=e("span:eq(0)",l).data("properties");if(!k.email){k=k.restObj}h.trigger("selected.autocomplete-sharepage",{content:k});this.hide();m.preventDefault()}}})})};(function(a){jQuery.fn.extend({elastic:function(){var b=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var g=jQuery(this),c=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),j=parseInt(g.css("line-height"),10)||parseInt(g.css("font-size"),"10"),l=parseInt(g.css("height"),10)||j*3,k=parseInt(g.css("max-height"),10)||Number.MAX_VALUE,d=0;if(k<0){k=Number.MAX_VALUE}c.appendTo(g.parent());var f=b.length;while(f--){c.css(b[f].toString(),g.css(b[f].toString()))}function h(){var i=Math.floor(parseInt(g.width(),10));if(c.width()!==i){c.css({width:i+"px"});e(true)}}function m(i,o){var n=Math.floor(parseInt(i,10));if(g.height()!==n){g.css({height:n+"px",overflow:o})}}function e(p){var o=g.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=c.html().replace(/<br>/ig,"<br />");if(p||o+"&nbsp;"!==i){c.html(o+"&nbsp;");if(Math.abs(c.height()+j-g.height())>3){var n=c.height()+j;if(n>=k){m(k,"auto")}else{if(n<=l){m(l,"hidden")}else{m(n,"hidden")}}}}}g.css({overflow:"hidden"});g.bind("keyup change cut paste",function(){e()});a(window).bind("resize",h);g.bind("resize",h);g.bind("update",e);g.bind("input paste",function(i){setTimeout(e,250)});e()})}})})(AJS.$);(function(f){var e,c={hideCallback:a,width:250,hideDelay:3600000,calculatePositions:function(h,o,w,s){var p;var y;var u;var l=-7;var m;var q;var x=o.target.offset();var g=o.target.outerWidth();var j=x.left+g/2;var t=(window.pageYOffset||document.documentElement.scrollTop)+f(window).height();var k=10;u=x.top+o.target.outerHeight()+s.offsetY;p=x.left+s.offsetX;var n=x.top>h.height();var i=(u+h.height())<t;q=(!i&&n)||(s.onTop&&n);var r=f(window).width()-(p+s.width+k);if(q){u=x.top-h.height()-8;var v=s.displayShadow?(AJS.$.browser.msie?10:9):0;l=h.height()-v}m=j-p+s.arrowOffsetX;if(s.isRelativeToMouse){if(r<0){y=k;p="auto";m=w.x-(f(window).width()-s.width)}else{p=w.x-20;y="auto";m=w.x-p}}else{if(r<0){y=k;p="auto";m=j-(f(window).width()-h.outerWidth())}else{if(s.width<=g/2){m=s.width/2;p=j-s.width/2}}}return{displayAbove:q,popupCss:{left:p,right:y,top:u},arrowCss:{position:"absolute",left:m,right:"auto",top:l}}}};var a=function(){f(".dashboard-actions .explanation").hide()};var d=function(j,h,i){if(j.find("input").length){i();return}j.append(AJS.template.load("share-content-popup").fill());AJS.Confluence.SharePage.autocompleteUser();var k=function(m){e.hide();if(m){setTimeout(function(){j.empty()},300)}return false};f(document).keyup(function(m){if(m.keyCode==27){k(true);f(document).unbind("keyup",arguments.callee);return false}return true});j.find(".close-dialog").click(function(){k(true)});j.find("#note").elastic();j.find("form").submit(function(){var r=[];j.find(".recipients li").each(function(s,t){r.push(f(t).attr("data-userKey"))});if(r.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");j.find(".progress-messages-icon").removeClass("error");j.find(".progress-messages").text("Sending");j.find(".progress-messages").attr("title","Sending");var o=Raphael.spinner(j.find(".progress-messages-icon")[0],7,"#666");j.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");j.find(".progress-messages").css("padding-left",j.find(".progress-messages-icon").innerWidth()+5);var r=[];j.find(".recipients li[data-userKey]").each(function(s,t){r.push(f(t).attr("data-userKey"))});var q=[];j.find(".recipients li[data-email]").each(function(s,t){q.push(f(t).attr("data-email"))});var m=[];j.find(".recipients li[data-group]").each(function(s,t){m.push(f(t).attr("data-group"))});var n=j.find("#note");var p={users:r,emails:q,groups:m,note:n.hasClass("placeholded")?"":n.val(),entityId:AJS.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(p),dataType:"text",success:function(){setTimeout(function(){o();j.find(".progress-messages-icon").css("width","16px");j.find(".progress-messages-icon").css("height","16px");j.find(".progress-messages-icon").addClass("done");j.find(".progress-messages").text("Sent");j.find(".progress-messages").attr("title","Sent");setTimeout(function(){j.find(".progress-messages").text("");j.find(".progress-messages-icon").removeClass("done");j.find("#note").val("");f("button,input,textarea",j).removeAttr("disabled");k(false)},1000)},500)},error:function(t,s){o();j.find(".progress-messages-icon").css("width","16px");j.find(".progress-messages-icon").css("height","16px");j.find(".progress-messages-icon").addClass("error");j.find(".progress-messages").text("Error sending");j.find(".progress-messages").attr("title","Error sending"+": "+s);f("button,input,textarea",j).removeAttr("disabled")}});return false});var l=j.find("#users");var g=j.find("input.submit");l.bind("selected.autocomplete-sharepage",function(n,m){var o=function(q,r){var t=j.find(".recipients"),s,p;s="li[data-"+q+'="'+r.content[q]+'"]';if(t.find(s).length>0){t.find(s).hide()}else{t.append(AJS.template.load("share-content-popup-recipient-"+q).fill(r.content))}p=t.find(s);p.find(".remove-recipient").click(function(){p.remove();if(t.find("li").length==0){g.attr("disabled","true")}e.refresh();l.focus();return false});p.fadeIn(200)};if(m.content.email){o("email",m)}else{if(m.content.type=="group"){o("group",m)}else{o("userKey",m)}}e.refresh();g.removeAttr("disabled");l.val("");return false});l.bind("open.autocomplete-sharepage",function(n,m){if(f("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()}});l.keypress(function(m){if(m.keyCode==13){return false}return true});f(document).bind("showLayer",function(o,n,m){if(n=="inlineDialog"&&m.popup==e){m.popup.find("#users").focus()}});f("#shareContentLink").parents().filter(function(){return this.scrollTop>0}).scrollTop(0);i()};var b=function(g){var h=f("#splitter-content");if(h.length!==0){g.container=h;g.offsetY=AJS.InlineDialog.opts.offsetY-h.offset().top}return g};AJS.toInit(function(g){e=AJS.InlineDialog(g("#shareContentLink"),"shareContentPopup",d,b(c))})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-view-storage-javascript', location = 'jscripts/source-editor/view-source.js' */
AJS.toInit(function(A){if(A("#action-view-storage-link").length){A("#action-source-editor-view-storage-link").closest("li").hide()
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/models.js' */
(function(b,a){a.Watch=Backbone.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return AJS.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=AJS.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=AJS.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=AJS.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/views.js' */
(function(b,a){a.WatchView=Backbone.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this);this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(d){var c=b(d.target).is(":checked");this.model.saveWatchPage(c)},changeWatchBlogs:function(d){var c=b(d.target).is(":checked");this.model.saveWatchBlogs(c)},changeWatchSpace:function(d){var c=b(d.target).is(":checked");this.model.saveWatchSpace(c)},togglePageEnabledState:function(c){var d=c.get("watchingPage");var f=c.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",f);this.$("#cw-watch-page").prop("checked",d||f);var e=f?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",e)},toggleBlogsEnabledState:function(c){var f=c.get("watchingBlogs");var e=c.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",e);this.$("#cw-watch-blogs").prop("checked",f||e);var d=e?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",d)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var f=this.model.get("watchingPage");var h=this.model.get("watchingBlogs");var g=this.model.get("watchingSpace");var e=this.model.get("isBlogPost");function d(){if(g){return"space"}if(f&&e&&h){return"blog.and.blogs"}if(f&&e){return"blog"}if(f){return"page"}if(e&&h){return"blogs"}if(e){return"nothing.blog"}return"nothing.page"}var c=d();this.$(".cw-title").text(AJS.I18n.getText("confluence.watch.title.watching."+c));this.$(".cw-title-description").text(AJS.I18n.getText("confluence.watch.title.watching."+c+".description"))}})}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
(function(e,a){AJS.$(function(){AJS.I18n.get("com.atlassian.confluence.plugins.watch-button");var f=e("#watch-content-button");if(!f.length){return}var l=b(f);var h=AJS.Meta.get("page-id");var i=AJS.Meta.get("space-key");var g=AJS.Meta.get("space-name");_.extend(l,{pageId:h,spaceKey:i,spaceName:g});c(f,l);var k=new a.Watch(l);var j=new a.WatchView({model:k});AJS.InlineDialog(f,"confluence-watch",function(n,m,o){j.setElement(n);j.render();o()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){e(".tipsy").hide()}});k.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(m){c(f,m.toJSON())});a.registerAnalytics(k);d(k);window.CW_watchPage=function(){var o=k.get("watchingSpace");var n=k.get("watchingPage");if(o){e("body, #splitter-content").animate({scrollTop:0},300,function(){f.click();setTimeout(function(){e(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var p=!n;k.saveWatchPage(p);var m=p?"You started watching this page.":"You stopped watching this page.";a.Notification.notify("success",m)}}});function c(g,j){var h=j.watchingPage;var f=j.isBlogPost&&j.watchingBlogs;var i=j.watchingSpace;if(h||f||i){g.removeClass("not-watching").addClass("watching")}else{g.removeClass("watching").addClass("not-watching")}}function d(f){f.on("change:watchingPage",function(g,i){var h=i?"watchpage.pageoperation":"unwatchpage.pageoperation";AJS.trigger(h)})}function b(h){var i=h.prop("search");var g=/[?&;]*(.*?)=([^&;]*)/g;var f;var j={};if(i){while(f=g.exec(i)){j[f[1]]=decodeURIComponent(f[2]).replace(/\+/g," ")}}_.each(j,function(l,k){if(l=="true"){j[k]=true}else{if(l=="false"){j[k]=false}}});return j}}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-analytics.js' */
var CW=CW||{};CW.registerAnalytics=function(a){a.on("change:watchingPage",function(b,d){var c=d?"watch-page":"unwatch-page";AJS.trigger("analytics",{name:c})});a.on("change:watchingBlogs",function(b,d){var c=d?"watch-blogs":"unwatch-blogs";AJS.trigger("analytics",{name:c})});a.on("change:watchingSpace",function(b,d){var c=d?"watch-space":"unwatch-space";AJS.trigger("analytics",{name:c})})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
(function(b,a){b(function(){var c="cw-notification-container";var d=b("<div></div>",{id:c});b("body").append(d);a.Notification={notify:function(e,f,h){AJS.messages[e]("#"+c,{body:f,closeable:true,insert:"prepend"});var g=b(".aui-message",d).first();if(!h){h=5000}else{h*=1000}setTimeout(function(){g.fadeOut("fast",function(){g.closeMessage();g=null})},h)}}})}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ', (opt_data.watchingPage) ? 'checked' : '', '><label for="cw-watch-page">', (opt_data.isBlogPost) ? soy.$$escapeHtml("Watch blog post") : soy.$$escapeHtml("Watch page"), '</label></div></div>', (opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml("Watch for new blog posts in this space") + '</label></div></div>' : '', '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ', (opt_data.watchingSpace) ? 'checked' : '', '><label for="cw-watch-space">', soy.$$escapeHtml("Watch all content in this space"), '</label></div></form>', (opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml("Manage Watchers") + '</button></div>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
AJS.toInit(function ($) {
    $("#action-view-source-link").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function ($) {
    $(".view-storage-link, .view-storage-link a").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.core:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function($) {
    function autoSize(embeds, attempt) {
        var retry;

        if(attempt >= 20) { // 2 sec
            AJS.log('unable to auto size flash - took too long to load');
            return;
        }

        retry = $([]);

        embeds.each(function() {
            var $e = $(this);
            var h, w;
            if(this.GetVariable) {
                // Only set width/height is not already set
                if(!$e.attr("height")) {
                    h = this.GetVariable("height");
                    if(h) {
                        $e.height(h);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
                if(!$e.attr("width")) {
                    w = this.GetVariable("width");
                    if(w) {
                        $e.width(w);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
            }
        });

        if(retry.length) {
            setTimeout(function() {
                autoSize(retry, attempt + 1);
            }, 100);
        }
    }

    autoSize($('embed[type="application/x-shockwave-flash"]'), 0);

    // For preview
    $(window).bind("render-content-loaded", function(e, body) {
        autoSize($('embed[type="application/x-shockwave-flash"]', body), 0);
    });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


