import{_ as n,o as s,c as a,a as t}from"./app-382cdfb3.js";const p="/jixiang/assets/image-20240918235607195-a49283b8.png",e="/jixiang/assets/image-20241008192702761-baefe129.png",o="/jixiang/assets/image-20241008202321909-20f16534.png",c="/jixiang/assets/image-20241008202454515-741476a1.png",l="/jixiang/assets/image-20241008202612688-b0aefda6.png",i="/jixiang/assets/image-20241008202932798-5439b299.png",u="/jixiang/assets/image-20241008203023183-d95d8ad5.png",r={},k=t('<h2 id="前端常见面试题" tabindex="-1"><a class="header-anchor" href="#前端常见面试题" aria-hidden="true">#</a> 前端常见面试题</h2><h3 id="_1-防抖-debounce-函数的手写" tabindex="-1"><a class="header-anchor" href="#_1-防抖-debounce-函数的手写" aria-hidden="true">#</a> 1，防抖(debounce)函数的手写</h3><p>什么是防抖？在一段时间内再次触发某个事件，这个事件会等到一个新的周期结束后执行。类似于英雄联盟中的回城。</p><p><img src="'+p+`" alt="image-20240918235607195"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 手写防抖函数</span>
    <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 1. 获取input元素</span>
    <span class="token keyword">const</span> iptEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// 2. 给input元素添加输入事件</span>
    iptEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人输入了内容~~~&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-节流-throttle-函数的手写" tabindex="-1"><a class="header-anchor" href="#_2-节流-throttle-函数的手写" aria-hidden="true">#</a> 2，节流(throttle)函数的手写</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>点我有惊喜<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 1.获取button元素</span>
    <span class="token keyword">const</span> btnEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>btnEl<span class="token punctuation">)</span>

    <span class="token comment">// 2.手动实现节流(throttle)效果</span>
    <span class="token comment">// let flag = true</span>
    <span class="token comment">// btnEl.onclick = function() {</span>
    <span class="token comment">//   if (!flag) return </span>
    <span class="token comment">//   flag = false</span>
    <span class="token comment">//   console.log(&#39;被点击了~~~~&#39;)</span>

    <span class="token comment">//   setTimeout(() =&gt; {</span>
    <span class="token comment">//     flag = true</span>
    <span class="token comment">//   }, 1000);</span>
    <span class="token comment">// }</span>

    btnEl<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点我有惊喜~~~~&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token comment">// 3. 节流(throttle)函数</span>
    <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
      
      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.一进入就要关闭阀门</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token keyword">return</span> 
        flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 2.时间到了之后，就打开阀门</span>
          flag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-手写数组高阶方法" tabindex="-1"><a class="header-anchor" href="#_3-手写数组高阶方法" aria-hidden="true">#</a> 3，手写数组高阶方法</h3><h4 id="a-foreach方法" tabindex="-1"><a class="header-anchor" href="#a-foreach方法" aria-hidden="true">#</a> A）forEach方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myForEach</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> thisArg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj  <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;coderji&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">myForEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b-filter方法" tabindex="-1"><a class="header-anchor" href="#b-filter方法" aria-hidden="true">#</a> B）filter方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;哈密瓜&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;香蕉&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;橘子&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myFilter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">myFilter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">return</span> item<span class="token punctuation">.</span>price <span class="token operator">&gt;</span> <span class="token number">7</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-map方法" tabindex="-1"><a class="header-anchor" href="#c-map方法" aria-hidden="true">#</a> C）map方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;curry&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;james&#39;</span><span class="token punctuation">]</span>

<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">myMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">return</span> item <span class="token operator">+</span> <span class="token string">&#39;~&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="d-some方法" tabindex="-1"><a class="header-anchor" href="#d-some方法" aria-hidden="true">#</a> D）some方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;哈密瓜&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;香蕉&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;橘子&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// const res = fruits.some((item) =&gt; {</span>
<span class="token comment">//   return item.id === 4</span>
<span class="token comment">// })</span>

<span class="token comment">// some: 只要有一个满足条件，立马中断循环</span>
<span class="token comment">// every：只要有一个不满足条件，立马中断循环</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">Mysome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">Mysome</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;execute~&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-evey方法" tabindex="-1"><a class="header-anchor" href="#e-evey方法" aria-hidden="true">#</a> E）evey方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;苹果&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;哈密瓜&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;香蕉&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">pname</span><span class="token operator">:</span> <span class="token string">&#39;橘子&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// const res = fruits.every(item =&gt; {</span>
<span class="token comment">//   return item.price &gt; 4</span>
<span class="token comment">// })</span>

<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myEvery</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> fruits<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item<span class="token punctuation">.</span>price <span class="token operator">&gt;</span> <span class="token number">6</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="f-call方法" tabindex="-1"><a class="header-anchor" href="#f-call方法" aria-hidden="true">#</a> F）call方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 手写一个call方法</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thisArg<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将方法放在对象thisArg身上, 通过隐式绑定实现call方法</span>

  <span class="token comment">// 1. 将调用myCall的函数, 作为对象thisArg上的一个属性</span>
  thisArg<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 2. 再通过隐式绑定调用函数, 因此调用call方法的函数中的this指向了thisArg</span>
  <span class="token keyword">return</span> thisArg<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>


<span class="token punctuation">}</span>

<span class="token comment">// 作为this指向的对象</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">&#39;coderji&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this指向:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;getSum函数被调用了~~&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> getSum<span class="token punctuation">.</span><span class="token function">myCall</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res:&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="g-apply方法" tabindex="-1"><a class="header-anchor" href="#g-apply方法" aria-hidden="true">#</a> G）apply方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 手写一个apply方法</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thisArg<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将方法放在对象thisArg身上, 通过隐式绑定实现apply方法</span>

  <span class="token comment">// 1. 将调用myApply的函数, 作为对象thisArg上的一个属性</span>
  thisArg<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 2. 再通过隐式绑定调用函数, 因此调用apply方法的函数中的this指向了thisArg</span>
  <span class="token keyword">return</span> thisArg<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>


<span class="token punctuation">}</span>

<span class="token comment">// 作为this指向的对象</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">&#39;coderji&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this指向:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;getSum函数被调用了~~&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> getSum<span class="token punctuation">.</span><span class="token function">myApply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res:&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="h-bind方法" tabindex="-1"><a class="header-anchor" href="#h-bind方法" aria-hidden="true">#</a> H）bind方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 手写一个bind方法(注意: bind函数返回一个新的函数)</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thisArg<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将方法放在对象thisArg身上, 通过隐式绑定实现apply方法</span>

  <span class="token comment">// 1. 将调用myCall的函数, 作为对象thisArg上的一个属性</span>
  thisArg<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>

  <span class="token comment">// 2. 再通过隐式绑定调用函数, 因此调用call方法的函数中的this指向了thisArg</span>
  <span class="token comment">// return thisArg[this.name](...args)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. 这里返回的必须是箭头函数, 否则该函数通过独立函数调用(this绑定规则: 默认绑定), this指向window</span>
    <span class="token keyword">return</span> thisArg<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 作为this指向的对象</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">&#39;coderji&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this指向:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;getSum函数被调用了~~&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a:&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b:&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">// myBind方法不会立即调用函数, 而是返回一个新的函数</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> getSum<span class="token punctuation">.</span><span class="token function">myBind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res:&#39;</span><span class="token punctuation">,</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-手写闭包" tabindex="-1"><a class="header-anchor" href="#_4-手写闭包" aria-hidden="true">#</a> 4，手写闭包</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>

<span class="token comment">// 闭包的概念: 函数的局部变量默认是不能被函数外访问, 但是return一个子函数, 并且在子函数中中将该局部变量return出去. </span>
<span class="token comment">//  </span>
<span class="token comment">// 闭包的作用:  延伸了变量的作用范围</span>
<span class="token comment">// 闭包的场景:  手写的防抖函数</span>
<span class="token comment">// 闭包的影响:  因为子函数内部一直引用着父函数的局部变量. 因此父函数执行完成后, </span>
<span class="token comment">// 父函数的局部变量不会被内存回收(js内存回收)</span>


<span class="token keyword">function</span> <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">10</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在外部使用函数内部的局部变量会报错</span>
<span class="token comment">// console.log(num) // 报错</span>

<span class="token comment">// 通过闭包可以实现</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-手写递归" tabindex="-1"><a class="header-anchor" href="#_5-手写递归" aria-hidden="true">#</a> 5, 手写递归</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.求阶乘</span>
<span class="token comment">// 2.斐波那契数列</span>
<span class="token comment">// 3.深拷贝 浅拷贝</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-实现深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#_6-实现深拷贝和浅拷贝" aria-hidden="true">#</a> 6，实现深拷贝和浅拷贝</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-正则表达式" tabindex="-1"><a class="header-anchor" href="#_7-正则表达式" aria-hidden="true">#</a> 7，正则表达式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 作业</span>
<span class="token comment">// 1. 匹配0-99数字</span>
<span class="token comment">// 2. 匹配邮箱 xxxx@xx.com.cn</span>
<span class="token comment">// 3. 匹配网址 http://www.xxx.xx</span>

<span class="token comment">// 正则知识：</span>
<span class="token comment">// 1. 字面量创建正则 //</span>
<span class="token comment">// 2. 边界符：^ $</span>
<span class="token comment">// 3. 量词符：* + ?, {3} {3,} {3, 5}</span>
<span class="token comment">// 4. 小括号: ()</span>
<span class="token comment">// 5. 预定义类：\\d 数字  \\w数字字母下划线  \\s 空白符(空格、tab、回车)</span>

<span class="token comment">// 案例一：匹配数字</span>
<span class="token keyword">const</span> numReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9]?[0-9]&amp;</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// 案例二：匹配邮箱 \\w匹配数字字母下划线</span>
<span class="token keyword">const</span> mailReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\w+@\\w+(\\.\\w+){1,2}$</span><span class="token regex-delimiter">/</span></span>

<span class="token comment">// 案例三：匹配网址</span>
<span class="token keyword">const</span> websiteReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^https?:\\/\\/[a-z0-9]+(\\.[a-z0-9]+){2, 3}$</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-es5实现方法继承" tabindex="-1"><a class="header-anchor" href="#_8-es5实现方法继承" aria-hidden="true">#</a> 8，ES5实现方法继承</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">uanme<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>uanme <span class="token operator">=</span> uanme
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Father</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> uname<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> son1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token string">&#39;吉祥&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>son1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-es5实现方法继承" tabindex="-1"><a class="header-anchor" href="#_9-es5实现方法继承" aria-hidden="true">#</a> 9，ES5实现方法继承</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5中实现继承</span>

<span class="token comment">// 1. 在子类中通过call方法调用父类的构造函数，实现属性的继承</span>
<span class="token comment">// function Father(uanme, age) {</span>
<span class="token comment">//   this.uanme = uanme</span>
<span class="token comment">//   this.age = age</span>
<span class="token comment">// }</span>

<span class="token comment">// function Son(uname, age) {</span>
<span class="token comment">//   Father.call(this, uname, age)</span>
<span class="token comment">// }</span>

<span class="token comment">// let son1 = new Son(&#39;吉祥&#39;, 25)</span>

<span class="token comment">// console.log(son1)</span>



<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">uanme<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>uanme <span class="token operator">=</span> uanme
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token class-name">Father</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好啊~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 2. 使用prototype和父类的实例对象实现方法的继承</span>
<span class="token comment">// 做法：将父类创建的实例对象赋值给子类的prototype(为了在子类的原型对象上增加独有的方法，不会污染到父类的prototype)</span>
<span class="token comment">// 2.1 将父类创建的实例对象赋值给子类的prototype(实现父类方法继承)</span>
<span class="token class-name">Son</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> father

<span class="token comment">// 2.2 将子类的原型对象中的constructor指回构造函数Son</span>
<span class="token class-name">Son</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token string">&#39;Son&#39;</span>

<span class="token comment">// 2.3 子类用于自己特有的方法</span>
<span class="token class-name">Son</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我要参加考试~~~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Father</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> uname<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
<span class="token punctuation">}</span>


<span class="token keyword">let</span> son1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token string">&#39;吉祥&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>son1<span class="token punctuation">)</span>


son1<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
son1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_100-手动实现react-redux中的provider和connect。" tabindex="-1"><a class="header-anchor" href="#_100-手动实现react-redux中的provider和connect。" aria-hidden="true">#</a> 100，手动实现react-redux中的Provider和connect。</h3><p>第一步：hoc/connect.js中：实现react-redux的connect函数，操作如下：</p><p><img src="`+e+`" alt="image-20241008192702761"></p><p>代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StoreContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./StoreContext&#39;</span>

<span class="token comment">// connect的参数:</span>
<span class="token comment">// 参数一：函数</span>
<span class="token comment">// 参数二：函数</span>
<span class="token comment">// 返回值：函数</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 高阶组件：函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">WrapperComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">NewComponent</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>unsubscribe <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>WrapperComponent
            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>
            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">mapDispatchToProps</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    NewComponent<span class="token punctuation">.</span>displayName <span class="token operator">=</span> WrapperComponent<span class="token punctuation">.</span>name
    NewComponent<span class="token punctuation">.</span>contextType <span class="token operator">=</span> StoreContext
    <span class="token keyword">return</span> NewComponent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：hoc/StoreContext.js中：实现store与connect函数解耦。</p><p><img src="`+o+'" alt="image-20241008202321909"></p><p>第三步：在Profile组件中使用我们自己编写的connect函数，操作如下：</p><p><img src="'+c+'" alt="image-20241008202454515"></p><p>第四步：在App组件中使用Profile组件，操作如下：</p><p><img src="'+l+'" alt="image-20241008202612688"></p><p>第五步：在入口文件index.js中导入StoreContext传入store，操作如下：</p><p><img src="'+i+'" alt="image-20241008202932798"></p><p>第六步：打开浏览器测试，操作如下：</p><p><img src="'+u+'" alt="image-20241008203023183"></p>',51),d=[k];function v(m,b){return s(),a("div",null,d)}const y=n(r,[["render",v],["__file","49.html.vue"]]);export{y as default};
