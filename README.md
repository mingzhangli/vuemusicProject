
# 前言

肝代码不易，请路过的朋友们随手点个Star。本项目仅用于学习。 


## 高仿pc端网易云音乐Vue前端项目

### 技术栈
<p>Vue+Vue-Router+Vuex+Axios+element-ui</p>


### 项目地址
Github地址： https://github.com/mingzhangli/vuemusicProject.git

后端地址：https://github.com/Binaryify/NeteaseCloudMusicApi.git

接口信息具体看文档

#### 项目安装和使用

#### 1.安装依赖  

<table><tr><td bgcolor=#7FFFD4>yarn install</td></tr></table>

#### 2.运行项目  

<table><tr><td bgcolor=#7FFFD4>yarn serve</td></tr></table>  



#### 3.效果展示
##### 首页展示banner、推荐歌单、歌手、点击任意选项
<br/>

![](./readmeImg/firstpage.png) 
<br/><br/>
##### 登陆界面，扫描二维码，获取个人歌单

![](./readmeImg/login.png)
![](./readmeImg/loginList.png) 

<br/>

#####  MV界面、点击播放

![](./readmeImg/mv.png)
![](./readmeImg/playMV.png) 

##### 4.歌单搜索，对应展示播放
![](./readmeImg/search.png)
![](./readmeImg/songlist.png)


### 4.功能特性

1. 登录
2. 刷新登录
3. 发送验证码
4. 校验验证码
5. 注册(修改密码)
6. 获取用户信息 , 歌单，收藏，mv, dj 数量
7. 获取用户歌单
8. 获取用户电台
9. 获取用户关注列表
10. 获取用户粉丝列表
11. 获取用户动态
12. 获取用户播放记录
13. 获取精品歌单
14. 获取歌单详情
15. 搜索
16. 搜索建议
17. 获取歌词
18. 歌曲评论
19. 收藏单曲到歌单
20. 专辑评论
21. 歌单评论
22. mv 评论
23. 电台节目评论
24. banner
25. 获取歌曲详情
26. 获取专辑内容
27. 获取歌手单曲
28. 获取歌手 mv
29. 获取歌手专辑
30. 获取歌手描述
31. 获取相似歌手
32. 获取相似歌单
33. 相似 mv
34. 获取相似音乐
35. 获取每日推荐歌单
36. 获取每日推荐歌曲
37. 最新 mv
38. 推荐 mv
39. 推荐歌单
40. 推荐新音乐
41. 推荐电台
42. 推荐节目
43. 独家放送
44. mv 排行
45. 播放mv
<br/>

### 5.项目结构
<hr>

##### 1.首页
        -侧边栏
        -顶部搜索框
        -底部音乐播放

#####  2.音乐推荐模块
        -轮播图banner模块
        -歌单推荐    
#####  3.搜索模块
        -搜索框默认展示热门排行榜
        -搜索框对应歌单、MV、歌手信息展示
</br>

### 6.项目出现的问题  
    1.项目没有做自适应布局
    2.点击播放MV时候，不会停止音乐的播放
    3.首页的侧边栏并没有写对应的子路由页面

目前只发现这些问题，后期我会修改的，然后打发github上面


### 7.致谢

非常感谢后台提供者<a color=#A52A2A size=4 >[Markdwon](https://github.com/Binaryify/NeteaseCloudMusicApi.git)</a>的接口文档，写的非常的详细
