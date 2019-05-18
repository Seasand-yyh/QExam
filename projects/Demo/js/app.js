var mockData = [
  {id: common.generateUUID(), title: 'AAA', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA1', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB1', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC1', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD1', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE1', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA2', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB2', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC2', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD2', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE2', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA3', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB3', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC3', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD3', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE3', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA4', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB4', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC4', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD4', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE4', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA5', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB5', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC5', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD5', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE5', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA6', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB6', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC6', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD6', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE6', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA7', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB7', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC7', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD7', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE7', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA8', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB8', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC8', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD8', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE8', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA9', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB9', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC9', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD9', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE9', remark: 'ee5678', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'AAA0', remark: 'aa1234', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'BBB0', remark: 'bb2345', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'CCC0', remark: 'cc3456', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'DDD0', remark: 'dd4567', createDate: common.toTimeString(new Date())},
  {id: common.generateUUID(), title: 'EEE0', remark: 'ee5678', createDate: common.toTimeString(new Date())}
];



/**
 * dbUtils.js
 * @author Seasand-yyh
 * @date 2019-05-20
 */
var dbUtils = {

  //根据ID获取数据.
  getDataById: function(id) {
    if(!id) return;
    for(var i = 0; i < mockData.length; i++) {
      if(id === mockData[i].id) {
        return mockData[i];
      }
    }
    return;
  },

  //插入数据.
  insertData: function(data) {
    if(!data) return -1;
    mockData.push({
      id: common.generateUUID(),
      title: data.title || '',
      remark: data.remark || '',
      createDate: common.toTimeString(new Date())
    });
    return 1;
  },

  //根据ID删除数据.
  deleteDataById: function(id) {
    if(!id) return -1;
    for(var i = 0; i < mockData.length; i++) {
      if(id === mockData[i].id) {
        mockData.splice(i, 1);
        return 1;
      }
    }
    return -1;
  },

  //更新数据.
  updateData: function(data) {
    if(!data) return -1;
    for(var i = 0; i < mockData.length; i++) {
      if(data.id === mockData[i].id) {
        mockData.splice(i, 1, data);
        return 1;
      }
    }
    return -1;
  },

  //分页获取列表数据.
  getListByPage: function(pager) {
    if(!pager) return;

    var pageCount = parseInt(mockData.length / parseInt(pager.pageSize));
    pageCount = mockData.length % parseInt(pager.pageSize) === 0 ? pageCount : pageCount+1;
    pager.pageCount = pageCount;

    var start = (parseInt(pager.pageNum) - 1) * parseInt(pager.pageSize);
    var end = start + parseInt(pager.pageSize);

    var tempData = mockData;
    var params = pager.params || {};
    if(params.keyword) {
      tempData = mockData.filter(function(item, index, array) {
        return item.title.toLowerCase().indexOf(params.keyword.toLowerCase()) >= 0;
      });
    }
    return tempData.slice(start, end);
  }

};



// Export Selectors Engine.
var $$ = null;
var F7 = null;

/**
 * app.js
 * @author Seasand-yyh
 * @date 2019-05-20
 */
var app = {

  //分页器.
  pager: {
    pageSize: 10,
    pageNum: 1,
    pageCount: 99,
    params: {}
  },

  //App初始化.
  init: function() {
    app.initF7();
    app.initListPage();
    app.initEditPage();
    app.initScrollPage();
    app.initLoadMore();
    app.initSearch();
  },

  //初始化Framework7.
  initF7: function() {
    $$ = Dom7;
    F7 = new Framework7({
      material: true,
      modalTitle: 'Tips',
      modalButtonOk: 'OK',
      modalButtonCancel: 'Cancel'
    });
    var mainView = F7.addView('.view-main');
  },

  //初始化列表（首次加载）.
  initListPage: function() {
    app.pager.pageNum = 1;
    app.pager.params = {};
    var data = app.loadListData(app.pager);
    app.renderList(data);
  },

  //重新加载列表.
  reloadList: function() {
    app.pager.pageNum = 1;
    var data = app.loadListData(app.pager);
    app.renderList(data);
  },

  //加载更多.
  loadMoreData: function() {
    var data = app.loadListData(app.pager);
    app.renderList(data, true);
  },

  //根据数据渲染列表.
  renderList: function(list, append) {
    if(!(list && list.length>0)) {
      if(!append) {
        $$('#listCont').html('');
      }
      return;
    }
    var html = [];
    for(var i = 0; i < list.length; i++) {
      var data = list[i];
      if(data && data.title) {
        var str = '';
        str += '<li class="swipeout">';
        str += '  <a href="edit.html?id='+data.id+'" class="swipeout-content item-content item-link">';
        str += '    <div class="item-inner"><div class="item-title">'+data.title+'</div></div>';
        str += '  </a>';
        str += '  <div class="swipeout-actions-right">';
        str += '    <a href="#" class="action1 bg-red" onclick="app.removeItem(\''+data.id+'\');">删除</a>';
        str += '    <a href="#" class="swipeout-close">取消</a>';
        str += '  </div>';
        str += '</li>';
        html.push(str);
      }
    }
    if(append) {
      $$('#listCont').append(html.join(''));
    }else{
      $$('#listCont').html(html.join(''));
    }
  },

  //初始化编辑页.
  initEditPage: function() {
    $$(document).on('pageInit', '.page[data-page="edit"]', function(e) {
      var page = e.detail.page;
      var id = page.query.id;
      if(!id) {
        app.showTip(F7, {msg: '该条数据不存在！'});
        return;
      }
      var data = app.loadDetailData(id);
      if(!data) {
        app.showTip(F7, {msg: '该条数据不存在！'});
        return;
      }
      F7.formFromJSON('#editInfoForm', data);
    });
  },

  //添加内容.
  addItem: function() {
    var formData = F7.formToJSON('#addInfoForm');
    if(!formData.title) {
      app.showTip(F7, {msg: '词条内容不能为空！'});
      return;
    }
    var status = app.saveFormData(formData);
    if(status === 1) {
      app.showTip(F7, {msg: '添加成功！'});
      app.reloadList();
    } else if(status === -1) {
      app.showTip(F7, {msg: '添加失败！'});
    }
  },

  //删除内容.
  removeItem: function(id) {
    if(!id) return;
    F7.confirm('确认删除?', function() {
      var status = app.removeFormData(id);
      if(status === 1) {
        app.showTip(F7, {msg: '删除成功！'});
        app.reloadList();
      } else if(status === -1) {
        app.showTip(F7, {msg: '删除失败！'});
      }
    });
  },

  //编辑内容.
  editItem: function() {
    var formData = F7.formToJSON('#editInfoForm');
    if(!formData.title) {
      app.showTip(F7, {msg: '词条内容不能为空！'});
      return;
    }
    var status = app.updateFormData(formData);
    if(status === 1) {
      app.showTip(F7, {msg: '修改成功！'});
      app.reloadList();
    } else if(status === -1) {
      app.showTip(F7, {msg: '修改失败！'});
    }
  },

  //编辑状态切换.
  toggleEdit: function() {
    var flag = $$('#btn_edit').hasClass('editFlag');
    $$('#btn_edit').toggleClass('editFlag');
    if(flag) {
      $$('#btn_edit').text('完成');
      $$('#editInfoForm input').removeAttr('readonly');
      $$('#editInfoForm textarea').removeAttr('readonly');
      $$('#btn_edit_submit').show();
    } else {
      $$('#btn_edit').text('编辑');
      $$('#editInfoForm input').attr('readonly', 'readonly');
      $$('#editInfoForm textarea').attr('readonly', 'readonly');
      $$('#btn_edit_submit').hide();
    }
  },

  //初始化列表下拉刷新.
  initScrollPage: function() {
    var ptrContent = $$('.pull-to-refresh-content');
    // 添加'refresh'监听器.
    ptrContent.on('refresh', function(e) {
      // 模拟2s的加载过程.
      setTimeout(function() {
        app.reloadList();
        // 加载完毕需要重置.
        F7.pullToRefreshDone();
      }, 2000);
    });
  },

  //初始化列表上拉加载更多.
  initLoadMore: function() {
    // 加载flag.
    var loading = false;
    // 注册'infinite'事件处理函数.
    $$('.infinite-scroll').on('infinite', function() {
      // 如果正在加载，则退出.
      if(loading) return;
      loading = true;
      F7.showIndicator();
      // 模拟1s的加载过程.
      setTimeout(function() {
        loading = false;
        if(parseInt(app.pager.pageNum) >= parseInt(app.pager.pageCount)) {
          app.showTip(F7, {msg: '已加载所有数据！'});
          // 加载完毕，则注销无限加载事件，以防不必要的加载.
          F7.detachInfiniteScroll($$('.infinite-scroll'));
          F7.hideIndicator();
          return;
        }
        // 加载下一页数据.
        app.pager.pageNum ++;
        app.loadMoreData();
        F7.hideIndicator();
      }, 1000);
    });
  },

  //初始化列表搜索.
  initSearch: function() {
    F7.searchbar('.searchbar', {
      customSearch: true,
      onSearch: function(search) {
        if(search.value) {
          app.pager.params = {keyword: search.value};
          app.reloadList();
        }else{
          app.pager.params = {};
        }
      }
    });
  },

  //分页获取列表数据.
  loadListData: function(pager) {
    if(!pager) return;
    return dbUtils.getListByPage(pager);
  },

  //加载编辑页详情数据.
  loadDetailData: function(id) {
    if(!id) return;
    return dbUtils.getDataById(id);
  },

  //保存数据.
  saveFormData: function(data) {
    if(!data) return -1;
    return dbUtils.insertData(data);
  },

  //删除数据.
  removeFormData: function(id) {
    if(!id) return -1;
    return dbUtils.deleteDataById(id);
  },

  //更新数据.
  updateFormData: function(data) {
    if(!data) return -1;
    return dbUtils.updateData(data);
  },



  //系统提示.
  showTip: function(F7, opt) {
    opt = opt || {};
    opt.autoClose = opt.autoClose === undefined ? true : opt.autoClose;
    opt.autoCloseDelay = opt.autoCloseDelay === undefined ? 5000 : opt.autoCloseDelay;
    opt.closeOnClick = opt.closeOnClick === undefined ? true : opt.closeOnClick;
    
    F7.addNotification({
      message: opt.msg || 'message',
      hold: opt.autoClose ? opt.autoCloseDelay : undefined,
      closeOnClick: opt.closeOnClick,
      button: {
        text: opt.buttonText || 'close',
        color: opt.buttonTextColor || 'white',
        close: true
      },
      onClose: function() {
        if(opt.callback && typeof(opt.callback) === 'function') {
          opt.callback.call(this);
        }
      }
    });
  }

};
