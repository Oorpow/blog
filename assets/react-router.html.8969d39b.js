import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.50041772.js";const p={},e=t(`<h1 id="_1-v6\u5B9E\u73B0\u8DEF\u7531\u61D2\u52A0\u8F7D\u3001\u8DEF\u7531\u62E6\u622A" tabindex="-1"><a class="header-anchor" href="#_1-v6\u5B9E\u73B0\u8DEF\u7531\u61D2\u52A0\u8F7D\u3001\u8DEF\u7531\u62E6\u622A" aria-hidden="true">#</a> 1. v6\u5B9E\u73B0\u8DEF\u7531\u61D2\u52A0\u8F7D\u3001\u8DEF\u7531\u62E6\u622A</h1><h2 id="_1-1-\u8DEF\u7531\u8868" tabindex="-1"><a class="header-anchor" href="#_1-1-\u8DEF\u7531\u8868" aria-hidden="true">#</a> 1.1 \u8DEF\u7531\u8868</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Layout <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
				<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
				<span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../pages/Home/Home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;product&#39;</span><span class="token punctuation">,</span>
				<span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../pages/Product/Product&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span>
						<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;:name&#39;</span><span class="token punctuation">,</span>
						<span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../pages/TentPage/TentPage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// \u8DEF\u7531\u62E6\u622A</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">onRouteBefore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> pathname<span class="token punctuation">,</span> meta <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>meta<span class="token punctuation">.</span>title <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> meta<span class="token punctuation">.</span>title
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5904\u7406\u62E6\u622A\u903B\u8F91</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLogged<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;/login&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-\u5904\u7406\u8DEF\u7531\u61D2\u52A0\u8F7D\u3001\u8DEF\u7531\u62E6\u622A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5904\u7406\u8DEF\u7531\u61D2\u52A0\u8F7D\u3001\u8DEF\u7531\u62E6\u622A\u51FD\u6570" aria-hidden="true">#</a> 1.2 \u5904\u7406\u8DEF\u7531\u61D2\u52A0\u8F7D\u3001\u8DEF\u7531\u62E6\u622A\u51FD\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router/guard/guardFn</span>

<span class="token keyword">let</span> handleRouteBefore <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token comment">// \u8BBE\u7F6E\u8DEF\u7531\u5B88\u536B\u51FD\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setRouteBefore</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handleRouteBefore <span class="token operator">=</span> fn
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0\u8DEF\u7531\u61D2\u52A0\u8F7D</span>
<span class="token keyword">function</span> <span class="token function">lazyLoad</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    meta <span class="token operator">=</span> meta <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> Element <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
    <span class="token keyword">const</span> lazyElement <span class="token operator">=</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Loading <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Element _meta<span class="token operator">=</span><span class="token punctuation">{</span>meta<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Guard element<span class="token operator">=</span><span class="token punctuation">{</span>lazyElement<span class="token punctuation">}</span> meta<span class="token operator">=</span><span class="token punctuation">{</span>meta<span class="token punctuation">}</span> handleRouteBefore<span class="token operator">=</span><span class="token punctuation">{</span>handleRouteBefore<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8F6C\u6362\u8DEF\u7531\u53C2\u6570</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">transformRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>route <span class="token punctuation">}</span>

        <span class="token comment">// \u5B58\u5728\u91CD\u5B9A\u5411</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>redirect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>element <span class="token operator">=</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>redirect<span class="token punctuation">}</span> replace<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u9700\u8981\u61D2\u52A0\u8F7D\u7684\u8DEF\u7531</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>element <span class="token operator">=</span> <span class="token function">lazyLoad</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>component<span class="token punctuation">,</span> obj<span class="token punctuation">.</span>meta<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>redirect
        <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>component
        <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>meta

        <span class="token comment">// \u9012\u5F52\u5904\u7406\u5B50\u8DEF\u7531</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">transformRoutes</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> list
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-\u6539\u9020\u8DEF\u7531\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6539\u9020\u8DEF\u7531\u7EC4\u4EF6" aria-hidden="true">#</a> 1.3 \u6539\u9020\u8DEF\u7531\u7EC4\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router/guard/index</span>
<span class="token keyword">function</span> <span class="token function">Guard</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> element<span class="token punctuation">,</span> meta<span class="token punctuation">,</span> handleRouteBefore <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    meta <span class="token operator">=</span> meta <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> location

    <span class="token comment">// \u5F53\u524D\u8DEF\u7531\u88AB\u62E6\u622A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>handleRouteBefore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u88AB\u62E6\u622A\u5904\u7406\u540E\uFF0C\u5C06\u88AB\u653E\u884C\u81F3\u54EA\u4E2A\u8DEF\u7531</span>
        <span class="token keyword">const</span> pathRes <span class="token operator">=</span> <span class="token function">handleRouteBefore</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pathname<span class="token punctuation">,</span> meta <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pathRes <span class="token operator">&amp;&amp;</span> pathRes <span class="token operator">!==</span> pathname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element <span class="token operator">=</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token punctuation">{</span>pathRes<span class="token punctuation">}</span> replace<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> element
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Guard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-\u6302\u8F7D\u5230app-js" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6302\u8F7D\u5230app-js" aria-hidden="true">#</a> 1.4 \u6302\u8F7D\u5230App.js</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// App.js</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setRouteBefore</span><span class="token punctuation">(</span>onRouteBefore<span class="token punctuation">)</span>
    <span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span><span class="token function">transformRoutes</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> elements
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","react-router.html.vue"]]);export{k as default};
