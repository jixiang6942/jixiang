import{_ as n,o as s,c as a,a as t}from"./app-fbcf72b1.js";const p="/jixiang/assets/image-20231123160729348-72c1ba68.png",e="/jixiang/assets/image-20231123171259464-63abcb1a.png",l="/jixiang/assets/image-20231123172753861-417df360.png",c="/jixiang/assets/image-20231123173307882-bca567d0.png",i="/jixiang/assets/image-20231123173753226-05f53611.png",o="/jixiang/assets/image-20231123174405678-55cfdd0d.png",u={},d=t(`<h2 id="一、css介绍" tabindex="-1"><a class="header-anchor" href="#一、css介绍" aria-hidden="true">#</a> 一、CSS介绍</h2><h3 id="_1-文字溢出" tabindex="-1"><a class="header-anchor" href="#_1-文字溢出" aria-hidden="true">#</a> 1，文字溢出</h3><p>如何当多行文字显示单行，并且溢出内容为省略号。</p><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>文本溢出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>

      <span class="token comment">/* 1. 禁止文字的自动换行 */</span>
      <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>

      <span class="token comment">/* 2. 禁止文字的溢出 */</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

      <span class="token comment">/* 3. 溢出文字的内容显示为省略号 */</span>
      <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>今天天气真不错<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+p+`" alt="image-20231123160729348"></p><h3 id="_2-水平布局的等式" tabindex="-1"><a class="header-anchor" href="#_2-水平布局的等式" aria-hidden="true">#</a> 2，水平布局的等式</h3><p>子元素在父元素内容区中排列，在文档流中，块元素的水平排列，必须要遵循(强制满足)如下一个等式：</p><p>​ 子元素可见框宽度 + 子元素的水平外边距 = 包含块内容区的宽度</p><p>margin-left + 可见框 + margin-right = 包含块内容区的宽度</p><p>margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块内容区的宽度</p><p>情况一：当等式不满足，同时所有的属性值中没有auto，此时浏览器会自动调整右外边距，以使等式强制满足</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 10px solid tomato<span class="token punctuation">;</span>
      <span class="token comment">/*
         	  margin-left + 可见框 + margin-right =  包含块内容区的宽度
              100 + 200  + 100 = 800 右外边距会自动修正为500
       */</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
        <span class="token comment">/*
        子元素会在父元素内容区中排列

       在文档流中，块元素的水平排列，必须要遵循(强制满足)如下一个等式：
          子元素可见框宽度 + 子元素的水平外边距 = 包含块内容区的宽度
        
        margin-left + 可见框 + margin-right =  包含块内容区的宽度
                100 + 200  + 100 = 800 右外边距会自动修正为500
                - 当等式不满足，同时所有的属性值中没有auto，此时浏览器会自动调整右外边距，以使等式强制满足
        
        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块内容区的宽度
      
     */</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+e+`" alt="image-20231123171259464"></p><p>左外边距+可见框+右外边距大于包含块宽度，代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 10px solid tomato<span class="token punctuation">;</span>
      <span class="token comment">/*
         margin-left + 可见框 + margin-right =  包含块内容区的宽度
            500 + 500  + 100 = 800 右外边距会自动修正为-200
       */</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        子元素会在父元素内容区中排列

       在文档流中，块元素的水平排列，必须要遵循(强制满足)如下一个等式：
          子元素可见框宽度 + 子元素的水平外边距 = 包含块内容区的宽度
        
        margin-left + 可见框 + margin-right =  包含块内容区的宽度
                100 + 200  + 100 = 800 右外边距会自动修正为500
                500 + 500  + 100 = 800 右外边距会自动修正为-200
                - 当等式不满足，同时所有的属性值中没有auto，此时浏览器会自动调整右外边距，以使等式强制满足

        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块内容区的宽度
      
     */</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+l+`" alt="image-20231123172753861"></p><p>情况二：当等式不满足，同时只有一个属性值设置为auto，则浏览器会自动调整该值以使等式满足</p><p>宽度为auto，代码如下</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 10px solid tomato<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
         margin-left + 可见框 + margin-right =  包含块内容区的宽度
         100 + auto + 100 = 800  宽度为auto，会自动设置为600
       */</span>
      <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        子元素会在父元素内容区中排列

       在文档流中，块元素的水平排列，必须要遵循(强制满足)如下一个等式：
          子元素可见框宽度 + 子元素的水平外边距 = 包含块内容区的宽度
        
        margin-left + 可见框 + margin-right =  包含块内容区的宽度
                100 + 200  + 100 = 800  右外边距会自动修正为500
                500 + 500  + 100 = 800  右外边距会自动修正为-200
                100 + auto + 100 = 800  宽度为auto，会自动设置为600

                - 当等式不满足，同时所有的属性值中没有auto，此时浏览器会自动调整右外边距，以使等式强制满足
                - 当等式不满足，同时只有一个属性值设置为auto，则浏览器会自动调整该值以使等式满足

        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块内容区的宽度
      
     */</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+c+`" alt="image-20231123173307882"></p><p>情况三：两个值为auto，左右外边距为auto，而width有值时，则左右外边距会设置为相等的值，以使等式满足</p><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 10px solid tomato<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
         margin-left + 可见框 + margin-right =  包含块内容区的宽度
         auto + 200 + auto = 800  左右外边距会设置为相等的值
       */</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        子元素会在父元素内容区中排列

       在文档流中，块元素的水平排列，必须要遵循(强制满足)如下一个等式：
          子元素可见框宽度 + 子元素的水平外边距 = 包含块内容区的宽度
        
        margin-left + 可见框 + margin-right =  包含块内容区的宽度
                100 + 200  + 100 = 800  右外边距会自动修正为500
                500 + 500  + 100 = 800  右外边距会自动修正为-200
                100 + auto + 100 = 800  宽度为auto，会自动设置为600
                auto + 200 + auto = 800

                - 当等式不满足，同时所有的属性值中没有auto，此时浏览器会自动调整右外边距，以使等式强制满足
                - 当等式不满足，同时只有一个属性值设置为auto，则浏览器会自动调整该值以使等式满足
                - 左右外边距为auto，而width有值时，则左右外边距会设置为相等的值，以使等式满足



        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块内容区的宽度
      
     */</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+i+`" alt="image-20231123173753226"></p><p>当外边距和width同设置为auto，则设置auto的外边距就是0</p><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box1</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 10px solid tomato<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
         margin-left + 可见框 + margin-right =  包含块内容区的宽度
         auto + auto + 200 = 800  左右外边距会设置为相等的值
       */</span>
      <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        子元素会在父元素内容区中排列

       在文档流中，块元素的水平排列，必须要遵循(强制满足)如下一个等式：
          子元素可见框宽度 + 子元素的水平外边距 = 包含块内容区的宽度
        
        margin-left + 可见框 + margin-right =  包含块内容区的宽度
                100 + 200  + 100 = 800  右外边距会自动修正为500
                500 + 500  + 100 = 800  右外边距会自动修正为-200
                100 + auto + 100 = 800  宽度为auto，会自动设置为600
                auto + 200 + auto = 800
                auto + auto + 200 = 800

                - 当等式不满足，同时所有的属性值中没有auto，此时浏览器会自动调整右外边距，以使等式强制满足
                - 当等式不满足，同时只有一个属性值设置为auto，则浏览器会自动调整该值以使等式满足
                - 左右外边距为auto，而width有值时，则左右外边距会设置为相等的值，以使等式满足
                - 当外边距和width同设置为auto，则设置auto的外边距就是0


        margin-left + border-left + padding-left + width + padding-right + border-right + margin-right = 包含块内容区的宽度
      
     */</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+o+'" alt="image-20231123174405678"></p><p>当margin-left、width、margin-right都设置为auto时，左右外边距都为0。文档流中，块元素的垂直排列，不需要遵循等式。</p><h3 id="_3-bfc" tabindex="-1"><a class="header-anchor" href="#_3-bfc" aria-hidden="true">#</a> 3，BFC</h3><p>BFC (Block Formatting Context)</p><ul><li><p>块级格式化环境</p></li><li><p>https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context</p></li><li><p>可以将BFC理解为一个隐藏的属性，当开启BFC后，元素会具备如下的特征：</p><ol><li>开启BFC后，子元素的垂直外边距不会传递给父元素</li><li>开启BFC后，元素不会被浮动元素所覆盖</li><li>开启BFC后，元素可以包含浮动的子元素</li></ol></li><li><p>如何开启BFC：</p></li><li><p>由于BFC是通过一些样式间接开启的，所有都会有一些副作用，而我们要做的是找到一种可以开启BFC，同时副作用又比较小的</p></li><li><p>需要用一些其他的样式来简介开启</p></li><li><p>例如：</p><ol><li>浮动会开启元素的BFC</li><li>将overflow设置为一个非visible的值</li><li>display：flow-roo</li></ol></li></ul>',39),k=[d];function r(v,m){return s(),a("div",null,k)}const b=n(u,[["render",r],["__file","02.html.vue"]]);export{b as default};
