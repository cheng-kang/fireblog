'use strict';

/* Filters */

var fireblogFilters = angular.module('fireblogFilters', []);

fireblogFilters.filter('xlat', ["OptionService", 
  function(OptionService) {
  var tables = {
    "zh":{
      "home": "首页",
      "logout": "注销",
      "published_at": "发布于",
      "new_user": "新用户",
      "welcome": "欢迎光临！",
      "post_blog": "写文章",
      "edit_blog": "编辑文章",
      "category": "分类",
      "categorys": "分类",
      "category_input_placeholder": "你可以选择列表中的分类，也可以输入新的分类",
      "tag": "标签",
      "tags": "标签",
      "tag_input_placeholder": "请用空格分开标签",
      "archive": "归档",
      "archives": "归档",
      "subheading_archive": "以下是按年分类的文章归档。",
      "subheading_category": "你是什么分类的？",
      "subheading_tag": "希望我的标签个性一点。",
      "blogs_from_cat": "这些文章都属于分类：",
      "blogs_from_tag": "这些文章都属于标签：",
      "config": "配置",
      "configs": "配置",
      "your uid is": "你的 uid 是",
      "file": "文件",
      "plese_edit_the_file_in_folder_app": "请修改 app 文件夹里的文件",
      "sitename": "站点名称",
      "username": "站长名",
      "navbar_text": "主页链接文字",
      "sub_title": "小标题",
      "github_account": "Github 用户名",
      "facebook_page": "Facebook 主页链接",
      "twitter_page": "Twitter 主页链接",
      "weibo_id": "微博名",
      "weibo_page": "微博链接",
      "sitename_input_placeholder": "请输入站点名称",
      "username_input_placeholder": "请输入站长名",
      "navbar_text_input_placeholder": "请输入主页链接文字",
      "sub_title_input_placeholder": "请输入小标题",
      "github_account_input_placeholder": "请输入Github 用户名",
      "facebook_page_input_placeholder": "请输入Facebook 主页链接",
      "twitter_page_input_placeholder": "请输入Twitter 主页链接",
      "weibo_id_input_placeholder": "请输入微博名",
      "weibo_page_input_placeholder": "请输入微博链接",
      "save": "保存修改",
      "login": "登录",
      "email": "邮箱",
      "password": "密码",
      "sign_in": "登录",
      "sign_in_with_github": "使用 Github 账号登录",
    },
    "en":{
      "home": "HOME",
      "logout": "注销",
      "published_at": "发布于",
      "new_user": "新用户",
      "welcome": "欢迎光临！",
      "post_blog": "写文章",
      "edit_blog": "编辑文章",
      "category": "分类",
      "categorys": "分类",
      "category_input_placeholder": "你可以选择列表中的分类,也可以输入新的分类",
      "tag": "标签",
      "tags": "标签",
      "tag_input_placeholder": "请用空格分开标签",
      "archive": "归档",
      "archives": "归档",
      "subheading_archive": "以下是按年分类的文章归档。",
      "subheading_category": "你是什么分类的？",
      "subheading_tag": "希望我的标签个性一点。",
      "blogs_from_cat": "这些文章都属于分类：",
      "blogs_from_tag": "这些文章都属于标签：",
      "config": "配置",
      "configs": "配置",
      "your uid is": "你的 uid 是",
      "file": "文件",
      "plese_edit_the_file_in_folder_app": "请修改 app 文件夹里的文件",
      "sitename": "站点名称",
      "username": "站长名",
      "navbar_text": "主页链接文字",
      "sub_title": "小标题",
      "github_account": "Github 用户名",
      "facebook_page": "Facebook 主页链接",
      "twitter_page": "Twitter 主页链接",
      "weibo_id": "微博名",
      "weibo_page": "微博链接",
      "sitename_input_placeholder": "请输入站点名称",
      "username_input_placeholder": "请输入站长名",
      "navbar_text_input_placeholder": "请输入主页链接文字",
      "sub_title_input_placeholder": "请输入小标题",
      "github_account_input_placeholder": "请输入Github 用户名",
      "facebook_page_input_placeholder": "请输入Facebook 主页链接",
      "twitter_page_input_placeholder": "请输入Twitter 主页链接",
      "weibo_id_input_placeholder": "请输入微博名",
      "weibo_page_input_placeholder": "请输入微博链接",
      "save": "保存修改",
      "login": "登录",
      "email": "邮箱",
      "password": "密码",
      "sign_in": "登录",
      "sign_in_with_github": "使用 Github 账号登录",
    }
  };
  return function(label) {

    var basic =  OptionService.basic();
    basic.$loaded().then(function () {
      console.log(tables[basic.language==undefined?"en":basic.language][label]);
      return tables[basic.language==undefined?"en":basic.language][label];
    });
  };
}]);