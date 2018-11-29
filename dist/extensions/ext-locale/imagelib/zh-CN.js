var svgEditorExtensionLocale_imagelib_zh_CN = (function () {
  'use strict';

  var zhCN = {
    select_lib: '选择图形库',
    show_list: '显示列表',
    import_single: '导入单个',
    import_multi: '导入多个',
    open: '打开为新文档',
    buttons: [{
      title: '图形库'
    }],
    imgLibs: [{
      name: '本地演示库',
      url: '{path}imagelib/index{modularVersion}.html',
      description: 'Demonstration library for SVG-edit on this server'
    }, {
      name: 'IAN 符号库',
      url: 'https://ian.umces.edu/symbols/catalog/svgedit/album_chooser.php?svgedit=3',
      description: '免费插图库' // The site is no longer using our API, and they have added an
      //   `X-Frame-Options` header which prevents our usage cross-origin:
      // Getting messages like this in console:
      //   Refused to display 'https://openclipart.org/detail/307176/sign-bike' in a frame
      //   because it set 'X-Frame-Options' to 'sameorigin'.
      // url: 'https://openclipart.org/svgedit',
      // However, they do have a custom API which we are using here:

      /*
      {
        name: 'Openclipart',
        url: '{path}imagelib/openclipart{modularVersion}.html',
        description: 'Share and Use Images. Over 100,000 Public Domain SVG Images and Growing.'
      }
      */

    }]
  };

  return zhCN;

}());
