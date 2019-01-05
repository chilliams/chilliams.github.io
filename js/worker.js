importScripts("main.js");
var cljs$cst$keyword$default=new cljs.core.Keyword(null,"default","default",-1987822328),cljs$cst$keyword$hierarchy=new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341);blockland.worker={};cljs.core.enable_console_print_BANG_();importScripts("/js/chunkworker.js");
if("undefined"===typeof blockland||"undefined"===typeof blockland.worker||"undefined"===typeof blockland.worker.handle_msg)blockland.worker.handle_msg=function(){var a=cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),b=cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),c=cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),d=cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),e=cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,
cljs$cst$keyword$hierarchy,function(){var a=cljs.core.get_global_hierarchy;return a.cljs$core$IFn$_invoke$arity$0?a.cljs$core$IFn$_invoke$arity$0():a.call(null)}());return new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("blockland.worker","handle-msg"),function(a,b,c,d,e){return function(a){return goog.object.get(a,"command")}}(a,b,c,d,e),cljs$cst$keyword$default,e,a,b,c,d)}();
blockland.worker.handle_msg.cljs$core$IMultiFn$_add_method$arity$3(null,"make-world",function(a){var b=goog.object.get(a,"data");a=cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(function(a){return function(b){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(function(a){return function(a){return a*a}}(a),b))}}(b),function(){return function(a){return function q(b){return new cljs.core.LazySeq(null,function(a){return function(){for(var c=
b;;){var d=cljs.core.seq(c);if(d){var e=d,f=cljs.core.first(e);d=function(a,b,c,d,e){return function B(f){return new cljs.core.LazySeq(null,function(a,b,c,d,e){return function(){for(;;){var a=cljs.core.seq(f);if(a){if(cljs.core.chunked_seq_QMARK_(a)){var c=cljs.core.chunk_first(a),d=cljs.core.count(c),e=cljs.core.chunk_buffer(d);a:for(var g=0;;)if(g<d){var h=cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,g);cljs.core.chunk_append(e,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
[b,h],null));g+=1}else{c=!0;break a}return c?cljs.core.chunk_cons(cljs.core.chunk(e),B(cljs.core.chunk_rest(a))):cljs.core.chunk_cons(cljs.core.chunk(e),null)}e=cljs.core.first(a);return cljs.core.cons(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[b,e],null),B(cljs.core.rest(a)))}return null}}}(a,b,c,d,e),null,null)}}(c,f,e,d,a);if(d=cljs.core.seq(d(cljs.core.range.cljs$core$IFn$_invoke$arity$2(-a,a))))return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(d,q(cljs.core.rest(c)));
c=cljs.core.rest(c)}else return null}}}(a),null,null)}}(b)(cljs.core.range.cljs$core$IFn$_invoke$arity$2(-b,b))}()));for(var c=null,d=0,e=0;;)if(e<d){var f=c.cljs$core$IIndexed$_nth$arity$2(null,e),g=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f,0,null),h=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f,1,null);setTimeout(function(a,b,c,d,e,f,g,h){return function(){var a=Module.make_chunk([f,0,g]);return self.postMessage({command:"mesh",data:[a]})}}(a,c,d,e,f,g,h,b),10+Math.abs(g*h));e+=1}else{var k=
cljs.core.seq(a);if(k){f=k;if(cljs.core.chunked_seq_QMARK_(f))a=cljs.core.chunk_first(f),e=cljs.core.chunk_rest(f),c=a,d=cljs.core.count(a),a=e;else{var l=cljs.core.first(f);g=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(l,0,null);h=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(l,1,null);setTimeout(function(a,b,c,d,e,f,g,h,k,l){return function(){var a=Module.make_chunk([f,0,g]);return self.postMessage({command:"mesh",data:[a]})}}(a,c,d,e,l,g,h,f,k,b),10+Math.abs(g*h));a=cljs.core.next(f);c=null;d=0}e=
0}else return null}});blockland.worker.handle_msg.cljs$core$IMultiFn$_add_method$arity$3(null,"add-block",function(a){var b=goog.object.get(a,"data");a=goog.object.get(b,"position");b=goog.object.get(b,"type");b=goog.object.getValueByKeys(Module,"Material",b);a=Module.add_block(a,b);return self.postMessage({command:"mesh",data:a})});
blockland.worker.handle_msg.cljs$core$IMultiFn$_add_method$arity$3(null,"remove-block",function(a){a=goog.object.get(a,"data");a=Module.remove_block(a);return self.postMessage({command:"mesh",data:a})});blockland.worker.handle_msg.cljs$core$IMultiFn$_add_method$arity$3(null,"ping",function(a){return self.postMessage({command:"ping",data:{echo:a}})});
blockland.worker.on_message=function(a){a=a.data;return blockland.worker.handle_msg.cljs$core$IFn$_invoke$arity$1?blockland.worker.handle_msg.cljs$core$IFn$_invoke$arity$1(a):blockland.worker.handle_msg.call(null,a)};self.onmessage=blockland.worker.on_message;blockland.worker.post_wakeup=function(){return self.postMessage({command:"alive"})};goog.object.set(Module,"onRuntimeInitialized",blockland.worker.post_wakeup);