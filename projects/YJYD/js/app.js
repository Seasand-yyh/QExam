/**
 * fileUtils.js
 * @author Seasand-yyh
 * @date 2019-05-19
 */
var fileUtils = {
	
	//App全局数据存储路径.
	G_DOC_BASE: '_doc',
	G_DATA_DIR: '_doc/appdatas',
	
	//App实体数据存储文件名.
	G_ENTITY_DATA_FILE: '_doc/appdatas/data_entity.json',
	
	//加载文件数据.
	loadDataFromFile: function(callback) {
		//打开App数据目录.
		plus.io.resolveLocalFileSystemURL(fileUtils.G_DOC_BASE, function(docBase) {
			//打开App数据目录，若不存在则创建该目录.
			docBase.getDirectory(fileUtils.G_DATA_DIR, {create:true, exclusive:false}, function(globalDataDir) {
				//打开实体数据文件，若不存在则创建该文件.
				globalDataDir.getFile(fileUtils.G_ENTITY_DATA_FILE, {create:true, exclusive:false}, function(entityDataFile) {
					//读取文件.
					entityDataFile.file(function(file) {
						var fileReader = new plus.io.FileReader();
						fileReader.readAsText(file, 'utf-8');
						fileReader.onloadend = function(evt) {
							var fileData = evt.target.result;
							if(fileData) {
								callback.call(this, JSON.parse(fileData));
							}
						}
					});
				}, function(e) {
					console.log(fileUtils.G_ENTITY_DATA_FILE + '文件打开失败!');
				});
			}, function(e) {
				console.log(fileUtils.G_DATA_DIR + '目录打开失败!');
			});
		}, function(e) {
			console.log(fileUtils.G_DOC_BASE + '目录打开失败!');
		});
	},
	
	/**
	 * 保存数据到文件.
	 */
	writeData2File: function(data, successCallback, failCallback) {
		plus.io.resolveLocalFileSystemURL(fileUtils.G_ENTITY_DATA_FILE, function(fileEntry) {
			fileEntry.createWriter(function(writer) {
				writer.onwrite = function(e) {
					console.log(fileUtils.G_ENTITY_DATA_FILE + '文件写入成功!');
				};
				writer.write(JSON.stringify(data));
				successCallback && successCallback.call(this);
			}, function(e) {
				failCallback && failCallback.call(this, e);
				console.log(fileUtils.G_ENTITY_DATA_FILE + '文件写入失败!');
			});
		}, function(e) {
			console.log(fileUtils.G_ENTITY_DATA_FILE + '文件打开失败!');
		});
	}
	
};



/**
 * dbUtils.js
 * @author Seasand-yyh
 * @date 2019-05-20
 */
var dbUtils = {

  //根据ID获取数据.
  getDataById: function(id, callback) {
    if(!id) return;
		fileUtils.loadDataFromFile(function(filedata) {
			for(var i = 0; i < filedata.length; i++) {
			  if(id === filedata[i].id) {
					callback && callback.call(this, filedata[i]);
			    return;
			  }
			}
		});
  },

  //插入数据.
  insertData: function(data) {
    if(!data) return -1;
		fileUtils.loadDataFromFile(function(filedata) {
			filedata.push({
			  id: common.generateUUID(),
			  title: data.title || '',
			  remark: data.remark || '',
			  createDate: common.toTimeString(new Date())
			});
			fileUtils.writeData2File(filedata);
		});
    return 1;
  },

  //根据ID删除数据.
  deleteDataById: function(id) {
    if(!id) return -1;
		fileUtils.loadDataFromFile(function(filedata) {
			for(var i = 0; i < filedata.length; i++) {
			  if(id === filedata[i].id) {
			    filedata.splice(i, 1);
			  }
			}
			fileUtils.writeData2File(filedata);
		});
    return 1;
  },

  //更新数据.
  updateData: function(data) {
    if(!data) return -1;
		fileUtils.loadDataFromFile(function(filedata) {
			for(var i = 0; i < filedata.length; i++) {
			  if(data.id === filedata[i].id) {
			    filedata.splice(i, 1, data);
			  }
			}
			fileUtils.writeData2File(filedata);
		});
    return 1;
  },

  //分页获取列表数据.
  getListByPage: function(pager, callback) {
    if(!pager) return;
		fileUtils.loadDataFromFile(function(filedata) {
			var pageCount = parseInt(filedata.length / parseInt(pager.pageSize));
			pageCount = filedata.length % parseInt(pager.pageSize) === 0 ? pageCount : pageCount+1;
			pager.pageCount = pageCount;
			
			var start = (parseInt(pager.pageNum) - 1) * parseInt(pager.pageSize);
			var end = start + parseInt(pager.pageSize);
			
			var tempData = filedata;
			var params = pager.params || {};
			if(params.keyword) {
			  tempData = new JsonFilter(filedata).filter('title like %'+params.keyword+'%').sort('title ASC').end();
			} else {
			  tempData = new JsonFilter(filedata).sort('title ASC').end();
			}
			callback && callback.call(this, tempData.slice(start, end));
		});
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

	toast: null,

  //分页器.
  pager: {
    pageSize: 20,
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
		app.toast = F7.toast('☆message☆', '<div>&#9888;</div>', {
			onHide: function() {},
			duration: 3000
		});
    var mainView = F7.addView('.view-main');
  },

  //初始化列表（首次加载）.
  initListPage: function() {
    app.pager.pageNum = 1;
    app.pager.params = {};
    app.loadListData(app.pager, function(data) {
			app.renderList(data);
		});
  },

  //重新加载列表.
  reloadList: function() {
    app.pager.pageNum = 1;
    app.loadListData(app.pager, function(data) {
			app.renderList(data);
		});
  },

	//延迟加载.
	reloadListDelay: function() {
		setTimeout(function() {
			app.reloadList();
		}, 2000);
	},

  //加载更多.
  loadMoreData: function() {
    app.loadListData(app.pager, function(data) {
			app.renderList(data, true);
		});
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
        app.showTip('该条数据不存在！');
        return;
      }
      app.loadDetailData(id, function(data) {
				if(!data) {
				  app.showTip('该条数据不存在！');
				  return;
				}
				F7.formFromJSON('#editInfoForm', data);
				$$('#remark').val(data.remark);
			});
    });
  },

  //添加内容.
  addItem: function() {
    var formData = F7.formToJSON('#addInfoForm');
    if(!formData.title) {
      app.showTip('词条内容不能为空！');
      return;
    }
    var status = app.saveFormData(formData);
    if(status === 1) {
      app.showTip('添加成功！');
      app.reloadListDelay();
    } else if(status === -1) {
      app.showTip('添加失败！');
    }
  },

  //删除内容.
  removeItem: function(id) {
    if(!id) return;
    F7.confirm('确认删除?', function() {
      var status = app.removeFormData(id);
      if(status === 1) {
        app.showTip('删除成功！');
        app.reloadListDelay();
      } else if(status === -1) {
        app.showTip('删除失败！');
      }
    });
  },

  //编辑内容.
  editItem: function() {
    var formData = F7.formToJSON('#editInfoForm');
    if(!formData.title) {
      app.showTip('词条内容不能为空！');
      return;
    }
    var status = app.updateFormData(formData);
    if(status === 1) {
      app.showTip('修改成功！');
      app.reloadListDelay();
    } else if(status === -1) {
      app.showTip('修改失败！');
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
          app.showTip('已加载完毕！');
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
  loadListData: function(pager, callback) {
    if(!pager) return;
    dbUtils.getListByPage(pager, function(data) {
			callback && callback.call(this, data);
		});
  },

  //加载编辑页详情数据.
  loadDetailData: function(id, callback) {
    if(!id) return;
    dbUtils.getDataById(id, function(data) {
			callback && callback.call(this, data);
		});
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
  showTip: function(msg) {
    app.toast && app.toast.show(msg);
  }

};
