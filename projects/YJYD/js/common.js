/**
 * common工具.
 * @author Seasand-yyh
 * @date 2019-01-28
 */
var common = {
  
  /** 
   * 生成唯一标识.
   */
  generateUUID: function() {
    var d = new Date().getTime();
    if(typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  },
  
  /**
   * 格式化时间字符串.
   */
  toTimeString: function(date) {
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var min = date.getMinutes();
    min = min < 10 ? '0' + min : min;
    var s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    return y+'-'+m+'-'+d+' '+h+':'+min+':'+s;
  },
  
  /**
   * 格式化日期字符串.
   */
  toDateString: function(date) {
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    return y+'-'+m+'-'+d;
  }
  
};
