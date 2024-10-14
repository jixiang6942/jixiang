import{_ as n,o as s,c as a,a as i}from"./app-382cdfb3.js";const e="/jixiang/assets/1698369277797.e8f047c4-98df5c33.png",t="/jixiang/assets/1698369519199.53071f36-967d0de5.png",p="/jixiang/assets/1698369596512.f3b7a3e5-ec353662.png",c="/jixiang/assets/1698369737625.7c50f9c5-0d001698.png",l="/jixiang/assets/1698369986755.cd07c522-b1377376.png",o="/jixiang/assets/1698370070033.b72b3f88-7e2e8ae6.png",u="/jixiang/assets/image-20240201195352718-47d072ac.png",r="/jixiang/assets/image-20240201201848250-8ca3be76.png",d="/jixiang/assets/image-20240201202559783-519c8e61.png",v="/jixiang/assets/image-20240201202707240-4dd0c612.png",m="/jixiang/assets/image-20240201202808618-d2a6ccf8.png",k="/jixiang/assets/image-20240201202906553-852f49a9.png",b="/jixiang/assets/1698372309523.3b09c5ef-d9fc7205.png",g="/jixiang/assets/1698372365163.1ddaac7a-1fa02e24.png",h="/jixiang/assets/image-20240201210333047-506dff7b.png",_="/jixiang/assets/image-20240201221540993-c8cd35b6.png",f="/jixiang/assets/image-20240201221403443-b9978268.png",x="/jixiang/assets/image-20240201222952609-460dc52e.png",y="/jixiang/assets/image-20240201223353771-51d6c5ee.png",w="/jixiang/assets/image-20240201223434281-f865de5a.png",j="/jixiang/assets/1698373126801.8d0eb089-1e36aff5.png",S="/jixiang/assets/image-20240201223846049-284f17e2.png",C={},A=i('<h1 id="vue2项目" tabindex="-1"><a class="header-anchor" href="#vue2项目" aria-hidden="true">#</a> vue2项目</h1><h2 id="一-项目介绍" tabindex="-1"><a class="header-anchor" href="#一-项目介绍" aria-hidden="true">#</a> 一，项目介绍</h2><h3 id="_1-项目介绍" tabindex="-1"><a class="header-anchor" href="#_1-项目介绍" aria-hidden="true">#</a> 1，项目介绍</h3><p>开源GitHub项目地址：https://github.com/newbee-ltd</p><p>项目访问地址：http://47.99.134.126:5000/</p><p>账号密码：</p><ul><li>已注册账号：18333333334</li><li>密码：123456</li></ul><h3 id="_2-项目分析" tabindex="-1"><a class="header-anchor" href="#_2-项目分析" aria-hidden="true">#</a> 2，项目分析</h3><p>五大组件与路由分析：</p><ul><li>首页面组件 Home.vue</li><li>分类组件 Classify.vue</li><li>购物车组件 Cart.vue</li><li>我的组件 Personal.vue</li><li>登录组件 Login.vue</li></ul><p>network面板分析登录接口：</p><p><img src="'+e+'" alt="1698369277797.e8f047c4"></p><p><img src="'+t+'" alt="1698369519199.53071f36"></p><p><img src="'+p+'" alt="1698369596512.f3b7a3e5"></p><p><img src="'+c+'" alt="1698369737625.7c50f9c5"></p><p><img src="'+l+'" alt="1698369986755.cd07c522"></p><p>application面板分析：</p><p><img src="'+o+'" alt="1698370070033.b72b3f88"></p><h3 id="_3-项目的骨架" tabindex="-1"><a class="header-anchor" href="#_3-项目的骨架" aria-hidden="true">#</a> 3，项目的骨架</h3><p>我把项目中使用到的依赖，都记录好，把骨架发给大家，大家基于这个骨架进行开发，如下：</p><p>大家，需要解压，安装依赖（跑环境）：</p><p><img src="'+u+`" alt="image-20240201195352718"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1</p><p>运行项目（看package.json）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二-搭建五大组件并配置路由" tabindex="-1"><a class="header-anchor" href="#二-搭建五大组件并配置路由" aria-hidden="true">#</a> 二，搭建五大组件并配置路由</h2><h3 id="_1-创建出五大组件" tabindex="-1"><a class="header-anchor" href="#_1-创建出五大组件" aria-hidden="true">#</a> 1，创建出五大组件</h3><p>组件分两类：</p><ul><li>页面级别的组件（路由级别的组件）</li><li>通用组件（小组件，多个页面中可能都会用到）</li></ul><p>上面分析的5大组件，是路由级别的，一般情况下，会放到views文件夹中，或者是pages文件夹中，如下：</p><p><img src="`+r+'" alt="image-20240201201848250"></p><p>配置路由，如下：</p><p><img src="'+d+`" alt="image-20240201202559783"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Home.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/classify&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Classify.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/cart&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Cart.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/personal&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Personal.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Login.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中引入，挂载到根组件上，如下：</p><p><img src="`+v+'" alt="image-20240201202707240"></p><p>在App.vue中，需要指定出口，如下：</p><p><img src="'+m+'" alt="image-20240201202808618"></p><p>浏览器测试之，如下：</p><p><img src="'+k+'" alt="image-20240201202906553"></p><h3 id="_2-vant组件库的使用" tabindex="-1"><a class="header-anchor" href="#_2-vant组件库的使用" aria-hidden="true">#</a> 2，Vant组件库的使用</h3><p>vant组件库，提供了大量的组件，可以方便我们快速构建项目。</p><p>vant的官网：https://vant-contrib.gitee.io/vant/#/zh-CN/</p><p>如果是vue2，参考文档：https://vant-contrib.gitee.io/vant/v2/#/zh-CN/</p><p>如果是vue3，参考文档：https://vant-contrib.gitee.io/vant/#/zh-CN</p><p>要使用vant中提供的组件，引入方式，分三种：</p><ul><li>自动按需引入（推荐）</li><li>手动按需引入</li><li>全部引入</li></ul><p>如何实现自动按需引入？看看文档(文档怎么说就怎么做)：</p><ul><li>地址：https://vant-contrib.gitee.io/vant/v2/#/zh-CN/quickstart</li></ul><p>操作步骤如下：</p><p><img src="'+b+'" alt="1698372309523.3b09c5ef"></p><p><img src="'+g+'" alt="1698372365163.1ddaac7a"></p><p>操作之，如下：</p><p><img src="'+h+'" alt="image-20240201210333047"></p><p>重启项目，然后引入一个Button组件，测试之，如下：</p><p><img src="'+_+'" alt="image-20240201221540993"></p><p>浏览器测试之，如下：</p><p><img src="'+f+'" alt="image-20240201221403443"></p><p>在src下面创建一个utils文件夹，里面创建一个vant.js，如下：</p><p><img src="'+x+`" alt="image-20240201222952609"></p><p>参考代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    Button<span class="token punctuation">,</span>
    Overlay<span class="token punctuation">,</span>
    Tabbar<span class="token punctuation">,</span>
    TabbarItem<span class="token punctuation">,</span>
    Skeleton<span class="token punctuation">,</span>
    ShareSheet<span class="token punctuation">,</span>
    DropdownMenu<span class="token punctuation">,</span>
    DropdownItem<span class="token punctuation">,</span>
    Image<span class="token punctuation">,</span>
    Icon<span class="token punctuation">,</span>
    Form<span class="token punctuation">,</span>
    Field<span class="token punctuation">,</span>
    NavBar<span class="token punctuation">,</span>
    Swipe<span class="token punctuation">,</span>
    SwipeItem<span class="token punctuation">,</span>
    Grid<span class="token punctuation">,</span>
    GridItem<span class="token punctuation">,</span>
    GoodsAction<span class="token punctuation">,</span>
    GoodsActionIcon<span class="token punctuation">,</span>
    GoodsActionButton<span class="token punctuation">,</span>
    Checkbox<span class="token punctuation">,</span>
    Stepper<span class="token punctuation">,</span>
    SubmitBar<span class="token punctuation">,</span>
    AddressList<span class="token punctuation">,</span>
    AddressEdit<span class="token punctuation">,</span>
    Area<span class="token punctuation">,</span>
    Tab<span class="token punctuation">,</span>
    Tabs<span class="token punctuation">,</span>
    List<span class="token punctuation">,</span>
    Cell<span class="token punctuation">,</span>
    SwipeCell<span class="token punctuation">,</span>
    Card<span class="token punctuation">,</span>
    Dialog<span class="token punctuation">,</span>
    Toast<span class="token punctuation">,</span>
    ContactCard<span class="token punctuation">,</span>
    ActionSheet<span class="token punctuation">,</span>
    Loading<span class="token punctuation">,</span>
    divider<span class="token punctuation">,</span>
    Search<span class="token punctuation">,</span>
    Empty<span class="token punctuation">,</span>
    sidebar<span class="token punctuation">,</span>
    SidebarItem<span class="token punctuation">,</span>
    grid
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span>

<span class="token punctuation">[</span>
    Button<span class="token punctuation">,</span>
    Overlay<span class="token punctuation">,</span>
    Tabbar<span class="token punctuation">,</span>
    TabbarItem<span class="token punctuation">,</span>
    Skeleton<span class="token punctuation">,</span>
    ShareSheet<span class="token punctuation">,</span>
    DropdownMenu<span class="token punctuation">,</span>
    DropdownItem<span class="token punctuation">,</span>
    Image<span class="token punctuation">,</span>
    Icon<span class="token punctuation">,</span>
    Form<span class="token punctuation">,</span>
    Field<span class="token punctuation">,</span>
    NavBar<span class="token punctuation">,</span>
    Swipe<span class="token punctuation">,</span>
    SwipeItem<span class="token punctuation">,</span>
    Grid<span class="token punctuation">,</span>
    GridItem<span class="token punctuation">,</span>
    GoodsAction<span class="token punctuation">,</span>
    GoodsActionIcon<span class="token punctuation">,</span>
    GoodsActionButton<span class="token punctuation">,</span>
    Checkbox<span class="token punctuation">,</span>
    Stepper<span class="token punctuation">,</span>
    SubmitBar<span class="token punctuation">,</span>
    AddressList<span class="token punctuation">,</span>
    AddressEdit<span class="token punctuation">,</span>
    Area<span class="token punctuation">,</span>
    Tab<span class="token punctuation">,</span>
    Tabs<span class="token punctuation">,</span>
    List<span class="token punctuation">,</span>
    Cell<span class="token punctuation">,</span>
    SwipeCell<span class="token punctuation">,</span>
    Card<span class="token punctuation">,</span>
    Dialog<span class="token punctuation">,</span>
    Toast<span class="token punctuation">,</span>
    ContactCard<span class="token punctuation">,</span>
    ActionSheet<span class="token punctuation">,</span>
    Loading<span class="token punctuation">,</span>
    divider<span class="token punctuation">,</span>
    Search<span class="token punctuation">,</span>
    Empty<span class="token punctuation">,</span>
    sidebar<span class="token punctuation">,</span>
    SidebarItem<span class="token punctuation">,</span>
    grid
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中引入vant.js，如下：</p><p><img src="`+y+'" alt="image-20240201223353771"></p><p>再次测试之，如下：</p><p><img src="'+w+'" alt="image-20240201223434281"></p><p>昨天讲了移动端适配：</p><ul><li>rem + 媒体查询来适配</li><li>rem + 自己写的JS来适配</li><li>rem + 淘宝的flexible来适配</li><li>vw + vh适配</li></ul><p>在脚本架中，要适配的话，上面的方式都可以不用，可以配置postcss，如下：</p><p><img src="'+j+'" alt="1698373126801.8d0eb089"></p><h3 id="_3-处理全局样式" tabindex="-1"><a class="header-anchor" href="#_3-处理全局样式" aria-hidden="true">#</a> 3，处理全局样式</h3><p>引入重置样式，如下：</p><p><img src="'+S+'" alt="image-20240201223846049"></p><p>设置App.vue组件的样式，如下：</p>',75),I=[A];function B(G,T){return s(),a("div",null,I)}const L=n(C,[["render",B],["__file","10.html.vue"]]);export{L as default};
