/*
combined files : 

gallery/flipsnap/1.0/index

*/
/**
 * @fileoverview 
 * @author 拔赤<bachi@taobao.com>
 * @module flipsnap
 **/
KISSY.add('gallery/flipsnap/1.0/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Flipsnap
     * @constructor
     * @extends Base
     */
    function Flipsnap(comConfig) {
        var self = this;
        //调用父类构造函数
        Flipsnap.superclass.constructor.call(self, comConfig);
    }
    S.extend(Flipsnap, Base, /** @lends Flipsnap.prototype*/{

    }, {ATTRS : /** @lends Flipsnap*/{

    }});
    return Flipsnap;
}, {requires:['node', 'base']});




