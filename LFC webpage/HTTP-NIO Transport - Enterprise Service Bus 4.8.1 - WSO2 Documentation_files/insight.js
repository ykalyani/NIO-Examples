(function(){var TagSettings;
TagSettings=function(){function d(a){var b;this.context=a;this.data={};this.cookie_manager=new CookieManager(this.context);this._set_window_options();this._set_cookie_options();a=this.data.custom_group_id;b=this.data.custom_user_id;if(a!=null&&b!=null)this.data.custom_tracking_id=""+a+"="+b;this.data.protocol="https:";this.data.page_url=this.context.win.location.href;this.data.hostname=this.context.win.location.hostname;this.data.referrer=this.context.doc.referrer;this.data.loaded_in_iframe=window.self!==
this.context.win.top?true:false}d.options={partner_id:"_bizo_data_partner_id",custom_channel_id:"_bizo_data_partner_channel_id",custom_group_id:"_bizo_data_partner_custom_group_id",custom_user_id:"_bizo_data_partner_custom_user_id",zoom_info_id:"_bizo_data_zi_person_id",title:"_bizo_data_partner_title",domain:"_bizo_data_partner_domain",company:"_bizo_data_partner_company",gender:"_bizo_data_partner_gender",location:"_bizo_data_partner_location",education:"_bizo_data_partner_education",email:"_bizo_data_partner_email",
email_sha256:"_bizo_data_partner_email_sha256",email_sha512:"_bizo_data_partner_email_sha512",raw_data:"_bizo_data_partner_raw_data",raw_data_overwrite:"_bizo_data_partner_raw_data_overwrite",encrypted_data:"_bizo_data_partner_encrypted_data",partner_data:"_bizo_data_partner_data",sic_codes:"_bizo_data_partner_sics",employee_range:"_bizo_data_partner_employee_range",default_keywords:"_bizo_ad_default_keywords",order_id:"_bizo_order_id",async_target:"_bizo_data_async_target",use_iframe:"_bizo_data_use_iframe",
use_callback:"_bizo_data_partner_use_callback",test_url:"_bizo_data_test_base_url"};d.cookie_options={bizo_id:"_bizo_bzid",bizographics:"BizographicData",checksum:"_bizo_cksm"};d.prototype._set_window_options=function(){return this._set_options(d.options,function(a){return function(b){return a.context.win[b]}}(this))};d.prototype._set_cookie_options=function(){return this._set_options(d.cookie_options,function(a){return function(b){return a.cookie_manager.get(b)}}(this))};d.prototype._set_option=
function(a,b){var c,e;c=ArrayUtil.is_array;return c(b)?this.data[a]=function(){var f,g,h;h=[];f=0;for(g=b.length;f<g;f++){e=b[f];h.push(e.toString())}return h}():this.data[a]=b.toString()};d.prototype._set_options=function(a,b){var c,e,f;f=[];for(c in a){e=a[c];e=b(e);this._valid_property(e)?f.push(this._set_option(c,e)):f.push(void 0)}return f};d.prototype._valid_property=function(a){return a!=null&&a!=="undefined"&&a.toString&&a.toString().length>0};return d}();var SiteCodes;
SiteCodes=function(){function d(){}d.generate=function(a,b){var c,e,f,g,h,i,j;if(b==null)b=void 0;c=b;c=b!=null&&b.length>0?c.replace(/http:\/\//,""):a;c=c.split(".");h=[];f=c.length;if(f>1){e=i=0;for(j=c.length;i<j;e=++i){g=c[e];g==="www"||e===c.length-1||h.push(c.slice(e,+f+1||9E9).join("."))}}return h};return d}();var PartnerTags;
PartnerTags=function(){function d(){}d.fire_partners=function(a,b,c,e,f){var g,h,i,j;if(!(a!=null&&a.length&&a.length>0))return null;j=[];h=0;for(i=a.length;h<i;h++){g=a[h];switch(g.t){case "image":j.push(this.fire_partner_pixel(g,b,c,e,f));break;case "script":j.push(this.fire_partner_script(g,b,c,e,f));break;case "support":j.push(this.fire_partner_support(g,b,c,e,f));break;default:j.push(void 0)}}return j};d.fire_partner_pixel=function(a,b,c,e,f){var g,h,i,j,k;h=a.pid.toString();a=c.data.order_id!=
null?a.u.replace("BIZO_ORDER_ID",c.data.order_id):a.u;if(h===this.partner_ids.yieldmanager){g=c.data.hostname;c=c.data.custom_channel_id;g=SiteCodes.generate(g,c);j=0;for(k=g.length;j<k;j++){c=g[j];a+="&code="+c}}else if(h===this.partner_ids.simplifi){c=c.data.page_url;a+="&ref="+c}i=f.now().getTime();return b.write_pixel({src:a,onload:function(){return e.track(h,i)}})};d.fire_partner_script=function(a,b,c,e,f){var g,h;g=a.pid.toString();a=a.u;h=f.now().getTime();return b.write_script({src:a,onload:function(){return e.track(g,
h)}})};d.fire_partner_support=function(a,b,c,e,f){var g,h;c=c.data.protocol==="http:"?"http://js":"https://sjs";c+=".bizographics.com/support/partner.html?";c+="pid="+a.pid;c+="&u="+a.u;g=a.pid;h=f.now().getTime();return b.write_iframe({src:c,style:{display:"none"},onload:function(){return e.track(g,h)}})};d.partner_ids={simplifi:"567",yieldmanager:"217"};return d}();var Throttle;
Throttle=function(){var d,a;d={"203":-1,"15":50};a={};a.should_throttle_partner=function(b,c){var e;if(c==null)c=Math.random;if((e=d[b])&&c()*100>e)return true;return false};return a}();var BaseLogger,ConsoleLogger,ErrorLog,LocalLogger,PixelLogger,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(d,a){function b(){this.constructor=d}for(var c in a)if(__hasProp.call(a,c))d[c]=a[c];b.prototype=a.prototype;d.prototype=new b;d.__super__=a.prototype;return d};
ErrorLog=function(){function d(){}d.log=function(){var a,b,c,e,f,g,h;a=arguments[0];b=arguments[1];e=3<=arguments.length?__slice.call(arguments,2):[];h=[];f=0;for(g=e.length;f<g;f++){c=e[f];h.push(c.log(a,b))}return h};return d}();BaseLogger=function(){function d(){}d.map_error_data=function(a,b,c){var e,f;if(c==null)c=function(g){return g};return function(){var g;g=[];for(e in a){f=a[e];g.push(""+e+"="+c(f))}return g}().join(b)};return d}();
PixelLogger=function(d){function a(){return a.__super__.constructor.apply(this,arguments)}__extends(a,d);a.http_host="http://error.bizographics.com";a.https_host="https://dbsugv5o22gme.cloudfront.net";a.set_pixel_path=function(b){return this.pixel_path=b};a.log=function(b,c){var e,f,g;e=b.win.location.protocol==="https:"?this.https_host:this.http_host;f=this.map_error_data(c,"&",encodeURIComponent);g=new Image(1,1);g.src=""+e+"/"+this.pixel_path+"?"+f;return g};return a}(BaseLogger);
ConsoleLogger=function(d){function a(){return a.__super__.constructor.apply(this,arguments)}__extends(a,d);a.log=function(b,c){var e;e=this.map_error_data(c,", ");if(typeof console!=="undefined"&&console!==null&&console.log!=null)return console.log(e)};return a}(BaseLogger);LocalLogger=function(d){function a(){return a.__super__.constructor.apply(this,arguments)}__extends(a,d);a.errors=[];a.log=function(b,c){return this.errors.push(c)};return a}(BaseLogger);var DOMUtil;
DOMUtil=function(){function d(a,b){this.context=a;this.attachment_strategy=b!=null?b:d.append;this.doc=this.context.doc;this.body=this.context.doc.body}d.append=function(a,b){return b.appendChild(a.to_element())};d.write=function(a,b,c){return c.write(a.to_html_string())};d.prototype.create_tag=function(a,b){return new Tag(a,b)};d.prototype.write_script=function(a,b){if(a==null)a={};if(b==null)b=this.body;this.attachment_strategy(new Tag("script",a),b,this.doc)};d.prototype.write_iframe=function(a,
b){if(a==null)a={};if(b==null)b=this.body;this.attachment_strategy(new Tag("iframe",a),b,this.doc)};d.prototype.write_and_throw_error=function(a){this.write_script(a);throw a;};d.prototype.write_pixel=function(a,b){if(a==null)a={};if(b==null)b=this.body;this.attachment_strategy(new Tag("img",a),b,this.doc)};return d}();var Tag;
Tag=function(){function d(a,b,c){this.type=a;if(b==null)b={};this.doc=c!=null?c:document;this.attributes=HashUtil.merge_copy(d.defaults(this.type),b)}d.defaults=function(a){switch(a){case "script":return{type:"text/javascript"};case "img":return{width:"1",height:"1",border:"0",alt:"",style:{display:"none"}};case "iframe":return{width:0,height:0,marginWidth:0,marginHeight:0,frameBorder:0,scrolling:"no"};default:return{}}};d.prototype.to_html_string=function(){var a,b,c,e,f;c="<"+this.type;f=this.attributes;
for(a in f){e=f[a];b=a.toLowerCase();if(!this._is_object(e)&&a!=="innerHTML"&&a!=="text")c+=" "+b+"='"+e+"'";if(a==="style")c+=" "+b+"='"+this._get_style_string(e)+"'"}c+=">";if(this.attributes.text!=null)c+=""+this.attributes.text;if(this.attributes.innerHTML!=null)c+=""+this.attributes.innerHTML;c+="</"+this.type+">";return c};d.prototype.to_element=function(){var a,b,c,e;b=this.doc.createElement(this.type);e=this.attributes;for(a in e){c=e[a];this.set_property(b,a,c)}return b};d.prototype.set_invisible=
function(){var a;if((a=this.attributes).style==null)a.style={};return this.attributes.style.display="none"};d.prototype.set_property=function(a,b,c){return(!this._is_object(c)?this._set_single_property:this._set_multiple_properties)(a,b,c)};d.prototype._get_style_string=function(a){var b,c,e;c="";for(b in a){e=a[b];c+=""+b+": "+e+"; "}return c};d.prototype._is_object=function(a){return typeof a==="object"};d.prototype._set_single_property=function(a,b,c){return a[b]=c};d.prototype._set_multiple_properties=
function(a,b,c){var e,f,g;g=[];for(e in c){f=c[e];g.push(a[b][e]=f)}return g};return d}();var HashUtil;HashUtil=function(){function d(){}d.clone=function(a){return this.merge(a,{})};d.merge=function(a,b){var c;for(c in a)if(a.hasOwnProperty(c)&&b[c]==null)b[c]=a[c];return b};d.merge_copy=function(a,b){return this.merge(a,this.clone(b))};return d}();var Crypto;
Crypto=function(){var d,a,b,c;a=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,
1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,
1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,
2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,
733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,
3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];c=function(e){var f,g;g=[];e<1||(g=function(){var h,i;i=[];for(f=h=1;1<=e?h<=e:h>=e;f=1<=e?++h:--h)i.push("0");return i}());return g};b=function(e,f){if(f==null)f=8;return""+c(f-e.length).join("")+e};d={};d.to_crc32=function(e){var f,g,h,i;if(!(e!=null&&
e.length>0))return"";g=0;g=~g;f=h=0;for(i=e.length;h<i;f=++h){f=e.charCodeAt(f);g=a[(g^f)&255]^g>>>8}g=~g;if(g<0)g=4294967295+g+1;return g};d.to_crc32_string=function(e){return b(d.to_crc32(e).toString(16).toUpperCase())};d.generate_checksum=function(e){var f,g,h;f=[];for(g in e){h=e[g];f.push(""+g+"="+h)}return d.to_crc32_string(f.sort().join("&"))};return d}();var CookieManager;
CookieManager=function(){function d(a){this.context=a;this.one_day=864E5}d.prototype.get=function(a){var b,c,e,f,g;g=this.context.doc.cookie.split("; ");e=0;for(f=g.length;e<f;e++){b=g[e];c=b.split("=");b=c[0];c=c[1];if(b===a&&c!=null)return unescape(c)}return null};d.prototype.set=function(a,b,c,e){if(c==null)c=1;if(e==null)e="/";c="expires="+this.context.clock.future_date(this.one_day*c).toGMTString();return this.context.doc.cookie=""+a+"="+escape(b)+"; "+c+"; path="+e};d.prototype["delete"]=function(a,
b){if(b==null)b="/";return this.set(a,"",-10,b)};return d}();var StatsCounter,__bind=function(d,a){return function(){return d.apply(a,arguments)}};
StatsCounter=function(){function d(a){this.context=a;this.track=__bind(this.track,this);this.cookie_manager=new CookieManager(a)}d.cookie="_bizo_np_stats";d.prototype.track=function(a,b){var c,e,f,g;e=this.cookie_manager;c=d.cookie;g=e.get(c)||"";f=this.context.clock.now()-b;g+=""+a+"="+f+",";return e.set(c,g)};d.prototype.get_stats=function(){return this.cookie_manager.get(d.cookie)};d.prototype.clear_stats=function(){return this.cookie_manager.set(d.cookie,"")};return d}();var ParamBuilder;
ParamBuilder=function(){function d(a,b){this.tag_settings=a;this.stats_counter=b;this.context=this.tag_settings.context;this.params=this.tag_settings.partner_data||{}}d.prototype.add_default_parameters=function(){var a,b,c,e;a=this.tag_settings.data;a={pid:a.partner_id,title:a.title,domain:a.domain,company:a.company,gender:a.gender,location:a.location,education:a.education,email:a.email,email_sha256:a.email_sha256,email_sha512:a.email_sha512,PersonID:a.zoom_info_id,sic:a.sic_codes,employee_range:a.employee_range,
url:a.page_url,pageUrl:a.page_url,ref:a.referrer,bzid:a.bizo_id,bzgx:a.bizographics,cksm:a.checksum,dkw:a.default_keywords,fmt:a.use_iframe?"iframe":"js"};e=[];for(b in a){c=a[b];e.push(this.add(b,c))}return e};d.prototype.add=function(a,b,c){if(c==null)c=0;if(a!=null&&b!=null){b=c>0?b.substring(0,Math.min(b.length,c)):b;return this.params[a]=b}};d.prototype.add_all=function(a,b){var c,e,f,g,h;h=[];c=f=0;for(g=b.length;f<g;c=++f){e=b[c];h.push(this.add(""+a+"["+c+"]",e))}return h};d.prototype.add_custom_tracking_id_if_present=
function(){var a;a=this.tag_settings.data.custom_tracking_id;if(a!=null)return this.add("track",a,65)};d.prototype.add_encrypted_data_if_present=function(){var a;a=this.tag_settings.data.encrypted_data;if(a!=null)return this.add_all("ed",a)};d.prototype.add_raw_data_if_present=function(){var a;a=this.tag_settings.data.raw_data;a!=null&&this.add_all("rd",a);if(this.tag_settings.data.raw_data_overwrite)return this.params.rdo="t"};d.prototype.add_callback_if_present=function(){if(this.tag_settings.data.use_callback!=
null)return this.add("callback","_bizo_callback")};d.prototype.add_np_stats_if_present=function(){var a,b,c,e,f,g,h;c=this.stats_counter.get_stats();if(c!=null){e=0;b={};c=c.split(",");g=0;for(h=c.length;g<h;g++){a=c[g];f=a.split("=");a=f[0];f=f[1];if(a!=null&&f!=null&&b[a]==null){this.params["np."+e+".id"]=a;this.params["np."+e+".time"]=f;b[a]=true;e+=1}}return this.stats_counter.clear_stats()}};d.prototype.add_secure_param_if_page_is_secure=function(){if(this.tag_settings.data.protocol==="https:")return this.params.s=
"1"};d.prototype.overwrite_url_param_if_needed=function(){var a;a=this.tag_settings.data.custom_channel_id;if(a!=null){this.add("url",a);return this.add("is_channel","1")}else if(this.tag_settings.data.loaded_in_iframe)return this.add("url",this.tag_settings.data.referrer)};d.prototype.build=function(){this.add_default_parameters();this.add_custom_tracking_id_if_present();this.add_encrypted_data_if_present();this.add_raw_data_if_present();this.add_callback_if_present();this.add_np_stats_if_present();
this.overwrite_url_param_if_needed();this.add_secure_param_if_page_is_secure();return this.params};return d}();var Clock;
Clock=function(){function d(){this.real_time=function(){return new Date};this.time=function(){return this.real_time()}}d.prototype.now=function(){return this.time()};d.prototype.set_time=function(a){return this.time=function(){return a}};d.prototype.reset_time=function(){return this.time=function(){return this.real_time()}};d.prototype.future_date=function(a){return this._timewarp(a)};d.prototype.past_date=function(a){return this._timewarp(a*-1)};d.prototype._timewarp=function(a){return this._create_date(this.now().getTime()+
a)};d.prototype._create_date=function(a){var b;b=new Date;b.setTime(a);return b};return d}();var Context;Context=function(){return function(d,a,b){this.doc=d;this.win=a;this.clock=b}}();var dom_ready;
dom_ready=function(){var d;d=false;return function(a){var b,c,e;c=function(){if(!d){d=true;return a()}};b=function(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(b,1);return}return c()};if(document.readyState==="complete")return c();if(document.addEventListener){document.addEventListener("DOMContentLoaded",c,false);return window.addEventListener("load",c,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",c);window.attachEvent("onload",c);if((typeof document!==
"undefined"&&document!==null?(e=document.documentElement)!=null?e.doScroll:void 0:void 0)&&(typeof window!=="undefined"&&window!==null?window.frameElement:void 0)===null)return b()}}}();var ArrayUtil;
ArrayUtil=function(){function d(){}d.includes=function(a,b){var c,e,f;e=0;for(f=a.length;e<f;e++){c=a[e];if(c===b)return true}return false};d.is_array=function(a){return Object.prototype.toString.call(a)==="[object Array]"};d.map=function(a,b){var c,e,f,g;if(a==null)return null;g=[];e=0;for(f=a.length;e<f;e++){c=a[e];g.push(b(c))}return g};d.reduce=function(a,b,c){var e,f,g;if(a==null)return b;f=0;for(g=a.length;f<g;f++){e=a[f];b=c(b,e)}return b};d.flatten=function(a){if(a==null)return null;return this.reduce(a,
[],function(b){return function(c,e){var f,g,h;if(b.is_array(e)){g=0;for(h=e.length;g<h;g++){f=e[g];c.push(f)}}else c.push(e);return c}}(this))};return d}();var QueryStringBuilder;
QueryStringBuilder=function(){function d(){}d._to_param=function(a,b){return""+encodeURIComponent(a)+"="+encodeURIComponent(b)};d.build=function(a){var b,c,e,f,g;c=["time="+(new Date).getTime()];for(b in a){g=a[b];if(g!=null)if(ArrayUtil.is_array(g)){e=function(){var h,i,j;j=[];h=0;for(i=g.length;h<i;h++){f=g[h];j.push(this._to_param(b,f))}return j}.call(this);c.push(e)}else c.push(this._to_param(b,g))}return ArrayUtil.flatten(c).join("&")};return d}();var InsightTags;
InsightTags=function(){function d(a){this.context=a;this.tag_settings=new TagSettings(a);this.dom=new DOMUtil(a);this.stats_counter=new StatsCounter(a)}d.init=function(a){var b,c;a.win._bizo_local_logger=LocalLogger;c=new d(a);c.attach_global_functions_for_data_collector_callback();b=a.win.data_collector_iframe_callback;b!=null&&b();if(this.already_called(a.win))return"already called";a.win._bizo_main_already_called=true;return c.init()};d.already_called=function(a){return a._bizo_main_already_called===
true};d.prototype.get_data_collector_url=function(){return""+this.tag_settings.data.protocol+"//"+(this.tag_settings.data.test_url||"dc.ads.linkedin.com")+"/collect/"};d.prototype.create_query_string=function(){var a;a=(new ParamBuilder(this.tag_settings,this.stats_counter)).build();return QueryStringBuilder.build(a)};d.prototype.write_tags_to_dom=function(){var a,b;a=""+this.get_data_collector_url()+"?"+this.create_query_string();b=this.context.doc.body;if(this.tag_settings.data.use_iframe!=null)this.dom.write_iframe({id:"_bizo_iframe",
src:a});else{if(this.tag_settings.data.async_target!=null)b=this.context.doc.getElementById(this.tag_settings.data.async_target);return this.dom.write_script({src:a},b)}};d.prototype.attach_global_functions_for_data_collector_callback=function(a){if(a==null)a=this.context.win;a._bizo_set_session_cookie=function(b){return function(c,e,f){try{return b.tag_settings.cookie_manager.set(c,e,f)}catch(g){return ErrorLog.log(b.context,{error:g},PixelLogger,ConsoleLogger,LocalLogger)}}}(this);a._bizo_fire_partners=
function(b){return function(c){try{return PartnerTags.fire_partners(c,b.dom,b.tag_settings,b.stats_counter,b.context.clock)}catch(e){return ErrorLog.log(b.context,{error:e},PixelLogger,ConsoleLogger,LocalLogger)}}}(this);return a._bizo_callback=function(b){return function(c){try{return BizoCallback.callback(b.context,b.tag_settings.cookie_manager,c)}catch(e){return ErrorLog.log(b.context,{error:e},PixelLogger,ConsoleLogger,LocalLogger)}}}(this)};d.prototype.init=function(){var a,b,c,e,f;f=this.exit_conditions=
[["no partner id",this.tag_settings.data.partner_id==null],["throttled",Throttle.should_throttle_partner(this.tag_settings.data.partner_id)]];c=0;for(e=f.length;c<e;c++){a=f[c];b=a[0];a=a[1];if(a===true){ErrorLog.log(this.context,{error:b},PixelLogger,ConsoleLogger,LocalLogger);return b}}this.write_tags_to_dom();return true};return d}();
dom_ready(function(){var d;d=new Context(document,window,new Clock);try{PixelLogger.set_pixel_path("insight_tags/error.gif");return InsightTags.init(d)}catch(a){return ErrorLog.log(d,{error:a,pid:window._bizo_data_partner_id},PixelLogger,ConsoleLogger,LocalLogger)}});var BizoCallback;
BizoCallback=function(){function d(){}d.ignore=function(a){var b,c,e,f;f=["cksm","bzid"];c=0;for(e=f.length;c<e;c++){b=f[c];if(b===a)return true}return false};d.callback=function(a,b,c){var e,f,g,h,i;a=[];for(e in c){g=c[e];if(!this.ignore(e))if(ArrayUtil.is_array(g)){h=0;for(i=g.length;h<i;h++){f=g[h];a.push(""+e+"="+f)}}else a.push(""+e+"="+g)}b.set("BizographicData",a.join("&"),1);c.cksm!=null&&b.set("_bizo_cksm",c.cksm,1);if(c.bzid!=null)return b.set("_bizo_bzid",c.bzid,1)};return d}();})();
