/*!build time : 2014-04-27 9:12:25 PM*/
KISSY.add("1.0/index",function(){var a=function(){this.queue=[]};a.prototype={add:function(a){var b=this,c=function(){b.done(d)},d={fn:a,done:c};this.queue.push(d),1==this.queue.length&&this.next()},remove:function(a){var b,c;for(c=0;b=this.queue[c];c++)if(b===a){this.queue.splice(c,1);break}},done:function(a){this.remove(a),this.next()},next:function(){var a=this.queue[0];a&&"function"==typeof a.fn&&a.fn(a.done)}};var b=function(){var b=new a;return function(a){b.add(a)}},c=new a,d=function(a){c.add(a)};return d.newQueue=b,d});