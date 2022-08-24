import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.50041772.js";const p={},e=t(`<h1 id="_1-keepalive" tabindex="-1"><a class="header-anchor" href="#_1-keepalive" aria-hidden="true">#</a> 1. KeepAlive</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MatchPattern</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">KeepAliveProps</span> <span class="token punctuation">{</span>
	include<span class="token operator">?</span><span class="token operator">:</span> MatchPattern
	exclude<span class="token operator">?</span><span class="token operator">:</span> MatchPattern
	max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">CacheKey</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span> <span class="token operator">|</span> ConcreteComponent
<span class="token keyword">type</span> <span class="token class-name">Cache</span> <span class="token operator">=</span> Map<span class="token operator">&lt;</span>CacheKey<span class="token punctuation">,</span> VNode<span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">Keys</span> <span class="token operator">=</span> Set<span class="token operator">&lt;</span>CacheKey<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">KeepAliveContext</span> <span class="token keyword">extends</span> <span class="token class-name">ComponentRenderContext</span> <span class="token punctuation">{</span>
	renderer<span class="token operator">:</span> RendererInternals
	<span class="token function-variable function">activate</span><span class="token operator">:</span> <span class="token punctuation">(</span>
		vnode<span class="token operator">:</span> VNode<span class="token punctuation">,</span>
		container<span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
		anchor<span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
		isSVG<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
		optimized<span class="token operator">:</span> <span class="token builtin">boolean</span>
	<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
	<span class="token function-variable function">deactivate</span><span class="token operator">:</span> <span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> isKeepAlive <span class="token operator">=</span> <span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNode<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span>
	<span class="token punctuation">(</span>vnode<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__isKeepAlive

<span class="token keyword">const</span> KeepAliveImpl<span class="token operator">:</span> ComponentOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">KeepAlive</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>

	<span class="token comment">// Marker for special handling inside the renderer. We are not using a ===</span>
	<span class="token comment">// check directly on KeepAlive in the renderer, because importing it directly</span>
	<span class="token comment">// would prevent it from being tree-shaken.</span>
	__isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

	props<span class="token operator">:</span> <span class="token punctuation">{</span>
		include<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> RegExp<span class="token punctuation">,</span> <span class="token builtin">Array</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// \u914D\u7F6E\u8BE5\u5C5E\u6027\uFF0C\u53EA\u6709\u540D\u79F0\u5339\u914D\u7684\u7EC4\u4EF6\u4F1A\u7F13\u5B58</span>
		exclude<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> RegExp<span class="token punctuation">,</span> <span class="token builtin">Array</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// \u914D\u7F6E\u8BE5\u5C5E\u6027\uFF0C\u7B26\u5408\u540D\u79F0\u5339\u914D\u6761\u4EF6\u7684\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u7F13\u5B58</span>
		max<span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>              <span class="token comment">// \u6700\u591A\u53EF\u7F13\u5B58\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u6570</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token operator">:</span> KeepAliveProps<span class="token punctuation">,</span> <span class="token punctuation">{</span> slots <span class="token punctuation">}</span><span class="token operator">:</span> SetupContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!</span>
		<span class="token comment">// KeepAlive communicates with the instantiated renderer via the</span>
		<span class="token comment">// ctx where the renderer passes in its internals,</span>
		<span class="token comment">// and the KeepAlive instance exposes activate/deactivate implementations.</span>
		<span class="token comment">// The whole point of this is to avoid importing KeepAlive directly in the</span>
		<span class="token comment">// renderer to facilitate tree-shaking.</span>
		<span class="token keyword">const</span> sharedContext <span class="token operator">=</span> instance<span class="token punctuation">.</span>ctx <span class="token keyword">as</span> KeepAliveContext

		
		<span class="token keyword">if</span> <span class="token punctuation">(</span>__SSR__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>sharedContext<span class="token punctuation">.</span>renderer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> children <span class="token operator">=</span> slots<span class="token punctuation">.</span>default <span class="token operator">&amp;&amp;</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> children <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span>
					<span class="token operator">?</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
					<span class="token operator">:</span> children
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

        <span class="token comment">// KeepAlive\u7EC4\u4EF6\u7684\u7F13\u5B58\u7BA1\u7406</span>
		<span class="token keyword">const</span> cache<span class="token operator">:</span> Cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> keys<span class="token operator">:</span> Keys <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">let</span> current<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">;</span><span class="token punctuation">(</span>instance <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__v_cache <span class="token operator">=</span> cache
		<span class="token punctuation">}</span>

		<span class="token keyword">const</span> parentSuspense <span class="token operator">=</span> instance<span class="token punctuation">.</span>suspense

        <span class="token keyword">const</span> <span class="token punctuation">{</span>
			renderer<span class="token operator">:</span> <span class="token punctuation">{</span>
				p<span class="token operator">:</span> patch<span class="token punctuation">,</span>
				m<span class="token operator">:</span> move<span class="token punctuation">,</span>
				um<span class="token operator">:</span> _unmount<span class="token punctuation">,</span>
				o<span class="token operator">:</span> <span class="token punctuation">{</span> createElement <span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span> <span class="token operator">=</span> sharedContext

        <span class="token comment">// \u9690\u85CF\u5BB9\u5668\uFF0C\u4FDD\u5B58\u5378\u8F7D\u65F6\u7684\u7EC4\u4EF6</span>
		<span class="token keyword">const</span> storageContainer <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u5728\u5B9E\u4F8B\u4E0A\u6CE8\u518C\u4E86\u4E24\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570</span>
		sharedContext<span class="token punctuation">.</span><span class="token function-variable function">activate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
			vnode<span class="token punctuation">,</span>
			container<span class="token punctuation">,</span>
			anchor<span class="token punctuation">,</span>
			isSVG<span class="token punctuation">,</span>
			optimized
		<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> instance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>component<span class="token operator">!</span>
			<span class="token function">move</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> MoveType<span class="token punctuation">.</span><span class="token constant">ENTER</span><span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
			<span class="token comment">// in case props have changed\uFF0Cprops\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u56E0\u6B64\u9700\u8981\u6267\u884Cpatch</span>
			<span class="token function">patch</span><span class="token punctuation">(</span>
				instance<span class="token punctuation">.</span>vnode<span class="token punctuation">,</span>
				vnode<span class="token punctuation">,</span>
				container<span class="token punctuation">,</span>
				anchor<span class="token punctuation">,</span>
				instance<span class="token punctuation">,</span>
				parentSuspense<span class="token punctuation">,</span>
				isSVG<span class="token punctuation">,</span>
				vnode<span class="token punctuation">.</span>slotScopeIds<span class="token punctuation">,</span>
				optimized
			<span class="token punctuation">)</span>
            <span class="token comment">// \u5F02\u6B65\u961F\u5217\uFF0Cpatch\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u5B50\u8282\u70B9\u7684 activate deactivate</span>
			<span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				instance<span class="token punctuation">.</span>isDeactivated <span class="token operator">=</span> <span class="token boolean">false</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">invokeArrayFns</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">const</span> vnodeHook <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">.</span>onVnodeMounted
				<span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeHook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>parent<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// Update components tree</span>
				<span class="token function">devtoolsComponentAdded</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		sharedContext<span class="token punctuation">.</span><span class="token function-variable function">deactivate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> instance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>component<span class="token operator">!</span>
            <span class="token comment">// \u5378\u8F7D\u7EC4\u4EF6\u65F6\u5E76\u4E0D\u4F1A\u771F\u7684\u5378\u8F7D\uFF0C\u800C\u4F1A\u8C03\u7528move\uFF0C\u5C06\u7EC4\u4EF6\u79FB\u52A8\u5230\u9690\u85CF\u5BB9\u5668 storageContainer \u4E2D</span>
			<span class="token function">move</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> storageContainer<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> MoveType<span class="token punctuation">.</span><span class="token constant">LEAVE</span><span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
			<span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>da<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">invokeArrayFns</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>da<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">const</span> vnodeHook <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>props<span class="token punctuation">.</span>onVnodeUnmounted
				<span class="token keyword">if</span> <span class="token punctuation">(</span>vnodeHook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>parent<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				instance<span class="token punctuation">.</span>isDeactivated <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// Update components tree</span>
				<span class="token function">devtoolsComponentAdded</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// reset the shapeFlag so it can be properly unmounted</span>
			<span class="token function">resetShapeFlag</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
			<span class="token function">_unmount</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">function</span> <span class="token function">pruneCache</span><span class="token punctuation">(</span>filter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cache<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> ConcreteComponent<span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>filter <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">filter</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">function</span> <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>key<span class="token operator">:</span> CacheKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> cached <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token keyword">as</span> VNode
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>current <span class="token operator">||</span> cached<span class="token punctuation">.</span>type <span class="token operator">!==</span> current<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">unmount</span><span class="token punctuation">(</span>cached<span class="token punctuation">)</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// current active instance should no longer be kept-alive.</span>
				<span class="token comment">// we can&#39;t unmount it now but it might be later, so reset its flag now.</span>
				<span class="token function">resetShapeFlag</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
			keys<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// prune cache on include/exclude prop change</span>
		<span class="token function">watch</span><span class="token punctuation">(</span>
			<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>include<span class="token punctuation">,</span> props<span class="token punctuation">.</span>exclude<span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">(</span><span class="token punctuation">[</span>include<span class="token punctuation">,</span> exclude<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				include <span class="token operator">&amp;&amp;</span> <span class="token function">pruneCache</span><span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">matches</span><span class="token punctuation">(</span>include<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
				exclude <span class="token operator">&amp;&amp;</span> <span class="token function">pruneCache</span><span class="token punctuation">(</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span>exclude<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">// prune post-render after \`current\` has been updated</span>
			<span class="token punctuation">{</span> flush<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> deep<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
		<span class="token punctuation">)</span>

		<span class="token comment">// cache sub tree after render</span>
		<span class="token keyword">let</span> pendingCacheKey<span class="token operator">:</span> CacheKey <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>


        <span class="token comment">// \u7F13\u5B58\u51FD\u6570</span>
		<span class="token keyword">const</span> <span class="token function-variable function">cacheSubtree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// fix #1621, the pendingCacheKey could be 0</span>
            <span class="token comment">// pendingCacheKey\u662F\u5728KeepAlive render\u624D\u8D4B\u503C\uFF0C\u56E0\u6B64\u7B2C\u4E00\u6B21\u4E0D\u4F1A\u505A\u7F13\u5B58\uFF0C\u6240\u4EE5\u4F1A\u8D70onMounted</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>pendingCacheKey <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>pendingCacheKey<span class="token punctuation">,</span> <span class="token function">getInnerChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

        <span class="token comment">// KeepAlive\u7EC4\u4EF6\u5728\u7BA1\u7406\u7F13\u5B58\u65F6\uFF0C\u9996\u5148\u4F1A\u4E3A\u7EC4\u4EF6\u7684onMounted\u706BonUpdated\u51FD\u6570\u4E2D\u8BBE\u7F6E\u7F13\u5B58</span>
        <span class="token comment">// \u4F46\u7531\u4E8EpendingCacheKey \u662F\u5728 KeepAlive render\u4E2D\u8D4B\u503C\u7684\uFF0C\u56E0\u6B64\u9996\u6B21\u662F\u4E0D\u7F13\u5B58\u7684</span>
        <span class="token comment">// render\u7ED3\u675F\u540E\uFF0CpendingCacheKey\u5C31\u4F1A\u88AB\u8D4B\u503C\uFF0C\u503C\u4E3AVNode\u7684key</span>
		<span class="token function">onMounted</span><span class="token punctuation">(</span>cacheSubtree<span class="token punctuation">)</span>
		<span class="token function">onUpdated</span><span class="token punctuation">(</span>cacheSubtree<span class="token punctuation">)</span>

		<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			cache<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cached<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> <span class="token punctuation">{</span> subTree<span class="token punctuation">,</span> suspense <span class="token punctuation">}</span> <span class="token operator">=</span> instance
				<span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">getInnerChild</span><span class="token punctuation">(</span>subTree<span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>cached<span class="token punctuation">.</span>type <span class="token operator">===</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// current instance will be unmounted as part of keep-alive&#39;s unmount</span>
					<span class="token function">resetShapeFlag</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
					<span class="token comment">// but invoke its deactivated hook here</span>
					<span class="token keyword">const</span> da <span class="token operator">=</span> vnode<span class="token punctuation">.</span>component<span class="token operator">!</span><span class="token punctuation">.</span>da
					da <span class="token operator">&amp;&amp;</span> <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>da<span class="token punctuation">,</span> suspense<span class="token punctuation">)</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				<span class="token function">unmount</span><span class="token punctuation">(</span>cached<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			pendingCacheKey <span class="token operator">=</span> <span class="token keyword">null</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token keyword">null</span>
			<span class="token punctuation">}</span>
            <span class="token comment">// \u8BFB\u53D6\u63D2\u69FD\u7684\u5B50\u8282\u70B9\uFF0C\u53EA\u80FD\u5B58\u5728\u4E00\u4E2A\uFF0C\u591A\u7684\u5C31\u62A5\u9519</span>
			<span class="token keyword">const</span> children <span class="token operator">=</span> slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">const</span> rawVNode <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">warn</span><span class="token punctuation">(</span>
						<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">KeepAlive should contain exactly one component child.</span><span class="token template-punctuation string">\`</span></span>
					<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				current <span class="token operator">=</span> <span class="token keyword">null</span>
				<span class="token keyword">return</span> children
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
				<span class="token operator">!</span><span class="token function">isVNode</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">)</span> <span class="token operator">||</span>
				<span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
					<span class="token operator">!</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				current <span class="token operator">=</span> <span class="token keyword">null</span>
                <span class="token comment">// \u6700\u7EC8\u8FD4\u56DE\u7684\u4ECD\u662F\u6211\u4EEC\u4F20\u5165\u7684\u7EC4\u4EF6\uFF0Ckeep-alive\u4EC5\u662F\u4E00\u4E2A\u62BD\u8C61\u7EC4\u4EF6\uFF0C\u672C\u8EAB\u5E76\u4E0D\u4F1A\u6E32\u67D3</span>
				<span class="token keyword">return</span> rawVNode
			<span class="token punctuation">}</span>

			<span class="token keyword">let</span> vnode <span class="token operator">=</span> <span class="token function">getInnerChild</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">)</span>
			<span class="token keyword">const</span> comp <span class="token operator">=</span> vnode<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> ConcreteComponent

			<span class="token comment">// for async components, name check should be based in its loaded</span>
			<span class="token comment">// inner component if available</span>
			<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>
				<span class="token function">isAsyncWrapper</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
					<span class="token operator">?</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> ComponentOptions<span class="token punctuation">)</span><span class="token punctuation">.</span>__asyncResolved <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
					<span class="token operator">:</span> comp
			<span class="token punctuation">)</span>

			<span class="token keyword">const</span> <span class="token punctuation">{</span> include<span class="token punctuation">,</span> exclude<span class="token punctuation">,</span> max <span class="token punctuation">}</span> <span class="token operator">=</span> props

			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				<span class="token punctuation">(</span>include <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>name <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">matches</span><span class="token punctuation">(</span>include<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
				<span class="token punctuation">(</span>exclude <span class="token operator">&amp;&amp;</span> name <span class="token operator">&amp;&amp;</span> <span class="token function">matches</span><span class="token punctuation">(</span>exclude<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				current <span class="token operator">=</span> vnode
				<span class="token keyword">return</span> rawVNode
			<span class="token punctuation">}</span>


            
			<span class="token keyword">const</span> key <span class="token operator">=</span> vnode<span class="token punctuation">.</span>key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> comp <span class="token operator">:</span> vnode<span class="token punctuation">.</span>key
            <span class="token comment">// \u67E5\u627E\u7F13\u5B58\u4E2D\u662F\u5426\u6709\u5BF9\u5E94\u7684\u7EC4\u4EF6</span>
			<span class="token keyword">const</span> cachedVNode <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

			<span class="token comment">// clone vnode if it&#39;s reused because we are going to mutate it</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				vnode <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					rawVNode<span class="token punctuation">.</span>ssContent <span class="token operator">=</span> vnode
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			
            <span class="token comment">// VNode\u7684key\u4F5C\u4E3A\u7F13\u5B58\u7684key</span>
			pendingCacheKey <span class="token operator">=</span> key
            <span class="token comment">// KeepAlive\u7EC4\u4EF6\u8FD4\u56DE\u7684\u51FD\u6570\u4E2D\u6839\u636E VNode \u5BF9\u8C61\u4E2D\u7684 key \u53BB\u7F13\u5B58\u4E2D\u67E5\u627E\u662F\u5426\u6709\u5BF9\u5E94\u7684\u7EC4\u4EF6</span>
            <span class="token comment">// \u82E5\u7F13\u5B58\u5B58\u5728\uFF0C\u5219\u7EE7\u627F\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5E76\u5C06\u7528\u4E8E\u63CF\u8FF0\u7EC4\u4EF6 VNode \u5BF9\u8C61\u6807\u8BB0\u4E3A COMPONENT_KEPT_ALIVE\uFF0C\u6E32\u67D3\u5668\u8BC6\u522B\u5230\u5C31\u4E0D\u4F1A\u91CD\u65B0\u521B\u5EFA\u65B0\u7684\u7EC4\u4EF6\u5B9E\u4F8B</span>
            <span class="token comment">// \u82E5\u4E0D\u5B58\u5728\uFF0C\u5219\u5C06 VNode \u5BF9\u8C61\u7684 key \u6DFB\u52A0\u5230 keys \u96C6\u5408\u4E2D</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cachedVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// \u5B58\u5728\u7F13\u5B58\u7684\u7EC4\u4EF6\uFF0C\u65E0\u987B\u521B\u5EFA\u65B0\u7684\u7EC4\u4EF6\uFF0C\u53EF\u76F4\u63A5\u7EE7\u627F</span>
				vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> cachedVNode<span class="token punctuation">.</span>el
				vnode<span class="token punctuation">.</span>component <span class="token operator">=</span> cachedVNode<span class="token punctuation">.</span>component
				<span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>transition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// \u7EC4\u4EF6\u4E0A\u5B58\u5728\u52A8\u753B\uFF0C\u5904\u7406\u52A8\u753B</span>
					<span class="token function">setTransitionHooks</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>transition<span class="token operator">!</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// \u901A\u8FC7\u6807\u8BB0 VNode \u5C31\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3 ShapeFlags512\u9759\u6001\u6807\u8BB0</span>
				vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">|=</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_KEPT_ALIVE</span>
				<span class="token comment">// \u5C06 key \u4E00\u76F4\u4FDD\u6301\u6700\u65B0\u7684</span>
				keys<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
				keys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u82E5\u4E0D\u5B58\u5728\u7F13\u5B58\u7684\u7EC4\u4EF6\uFF0C\u5219\u5C06 VNode \u5BF9\u8C61\u7684 key \u6DFB\u52A0\u5230\u96C6\u5408\u4E2D</span>
				keys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
				<span class="token comment">// LRE\u7B97\u6CD5\uFF0C\u4F5C\u7528\u662F\u5C06\u4E0D\u6D3B\u8DC3\u7684key\u4ECE\u96C6\u5408\u4E2D\u5254\u9664</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&amp;&amp;</span> keys<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>max <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>keys<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// avoid vnode being unmounted</span>
			vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">|=</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_SHOULD_KEEP_ALIVE</span>

			current <span class="token operator">=</span> vnode
			<span class="token keyword">return</span> <span class="token function">isSuspense</span><span class="token punctuation">(</span>rawVNode<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token operator">?</span> rawVNode <span class="token operator">:</span> vnode
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	KeepAliveImpl<span class="token punctuation">.</span>__isBuildIn <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// export the public type for h/tsx inference</span>
<span class="token comment">// also to avoid inline import() in generated d.ts files</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> KeepAlive <span class="token operator">=</span> KeepAliveImpl <span class="token keyword">as</span> <span class="token builtin">any</span> <span class="token keyword">as</span> <span class="token punctuation">{</span>
	__isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		$props<span class="token operator">:</span> VNodeProps <span class="token operator">&amp;</span> KeepAliveProps
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">matches</span><span class="token punctuation">(</span>pattern<span class="token operator">:</span> MatchPattern<span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">matches</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isString</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pattern<span class="token punctuation">.</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> pattern<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* istanbul ignore next */</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">onActivated</span><span class="token punctuation">(</span>
	hook<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
	target<span class="token operator">?</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">registerKeepAliveHook</span><span class="token punctuation">(</span>hook<span class="token punctuation">,</span> LifecycleHooks<span class="token punctuation">.</span><span class="token constant">ACTIVATED</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">onDeactivated</span><span class="token punctuation">(</span>
	hook<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
	target<span class="token operator">?</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">registerKeepAliveHook</span><span class="token punctuation">(</span>hook<span class="token punctuation">,</span> LifecycleHooks<span class="token punctuation">.</span><span class="token constant">DEACTIVATED</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">registerKeepAliveHook</span><span class="token punctuation">(</span>
	hook<span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> __wdc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	type<span class="token operator">:</span> LifecycleHooks<span class="token punctuation">,</span>
	target<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> currentInstance
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// cache the deactivate branch check wrapper for injected hooks so the same</span>
	<span class="token comment">// hook can be properly deduped by the scheduler. &quot;__wdc&quot; stands for &quot;with</span>
	<span class="token comment">// deactivation check&quot;.</span>
	<span class="token keyword">const</span> wrappedHook <span class="token operator">=</span>
		hook<span class="token punctuation">.</span>__wdc <span class="token operator">||</span>
		<span class="token punctuation">(</span>hook<span class="token punctuation">.</span><span class="token function-variable function">__wdc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// only fire the hook if the target instance is NOT in a deactivated branch.</span>
			<span class="token keyword">let</span> current<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> target
			<span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>isDeactivated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				current <span class="token operator">=</span> current<span class="token punctuation">.</span>parent
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token function">hook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token function">injectHook</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> wrappedHook<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
	<span class="token comment">// In addition to registering it on the target instance, we walk up the parent</span>
	<span class="token comment">// chain and register it on all ancestor instances that are keep-alive roots.</span>
	<span class="token comment">// This avoids the need to walk the entire component tree when invoking these</span>
	<span class="token comment">// hooks, and more importantly, avoids the need to track child components in</span>
	<span class="token comment">// arrays.</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> current <span class="token operator">=</span> target<span class="token punctuation">.</span>parent
		<span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">&amp;&amp;</span> current<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isKeepAlive</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>vnode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">injectToKeepAliveRoot</span><span class="token punctuation">(</span>wrappedHook<span class="token punctuation">,</span> type<span class="token punctuation">,</span> target<span class="token punctuation">,</span> current<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			current <span class="token operator">=</span> current<span class="token punctuation">.</span>parent
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">injectToKeepAliveRoot</span><span class="token punctuation">(</span>
	hook<span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> __weh<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	type<span class="token operator">:</span> LifecycleHooks<span class="token punctuation">,</span>
	target<span class="token operator">:</span> ComponentInternalInstance<span class="token punctuation">,</span>
	keepAliveRoot<span class="token operator">:</span> ComponentInternalInstance
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// injectHook wraps the original for error handling, so make sure to remove</span>
	<span class="token comment">// the wrapped version.</span>
	<span class="token keyword">const</span> injected <span class="token operator">=</span> <span class="token function">injectHook</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> hook<span class="token punctuation">,</span> keepAliveRoot<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* prepend */</span><span class="token punctuation">)</span>
	<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token function">remove</span><span class="token punctuation">(</span>keepAliveRoot<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">,</span> injected<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">resetShapeFlag</span><span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> shapeFlag <span class="token operator">=</span> vnode<span class="token punctuation">.</span>shapeFlag
	<span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_SHOULD_KEEP_ALIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		shapeFlag <span class="token operator">-=</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_SHOULD_KEEP_ALIVE</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_KEPT_ALIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		shapeFlag <span class="token operator">-=</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_KEPT_ALIVE</span>
	<span class="token punctuation">}</span>
	vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">=</span> shapeFlag
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getInnerChild</span><span class="token punctuation">(</span>vnode<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span> <span class="token operator">?</span> vnode<span class="token punctuation">.</span>ssContent<span class="token operator">!</span> <span class="token operator">:</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-nexttick" tabindex="-1"><a class="header-anchor" href="#_2-nexttick" aria-hidden="true">#</a> 2. nextTick</h1><p>\u6E90\u7801\u5206\u6790</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">flushJobs</span><span class="token punctuation">(</span>seen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">flushPreFlushCbs</span><span class="token punctuation">(</span>seen<span class="token punctuation">)</span>
    queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getId</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">getId</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// \u4E3A\u4E86\u4FDD\u8BC1\u7236\u7EC4\u4EF6\u603B\u5728\u5B50\u7EC4\u4EF6\u524D\u521B\u5EFA</span>
    <span class="token operator">...</span>                                         <span class="token comment">// for\u5FAA\u73AF\u6267\u884Cqueue\u91CC\u7684job</span>
    <span class="token function">flushPostFlushCbs</span><span class="token punctuation">(</span>seen<span class="token punctuation">)</span>                     <span class="token comment">// post\u4EE3\u8868DOM\u5DF2\u66F4\u65B0\u5B8C\u6BD5</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 
\u8BE5\u51FD\u6570\u7EF4\u62A4\u4E86\u4E09\u4E2A\u961F\u5217
1. watch\u7684\u961F\u5217
    watch(a, () =&gt; {}, { flush: &#39;pre&#39; })
2. queue\u961F\u5217
3. watch(a, () =&gt; {}, { flush: &#39;post&#39; })
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// queueJob -&gt; queueFlush -&gt; flushJobs -&gt; nextTick\u91CC\u7684\u53C2\u6570fn</span>
<span class="token comment">// nextTick\u8C03\u7528\u7684\u65F6\u673A\u6C38\u8FDC\u5728\u4E0A\u9762\u4E09\u4E2A\u961F\u5217\u4E4B\u540E\uFF0C\u56E0\u6B64nextTick\u540E\u53EF\u4EE5\u76F4\u63A5\u62FF\u5230\u6700\u65B0\u7684\u503C</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">nextTick</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token keyword">void</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p <span class="token operator">=</span> currentFlushPromise <span class="token operator">||</span> resolvedPromise    <span class="token comment">// p\u6C38\u8FDC\u662F\u4E00\u4E2APromise, currentFlushPromise\u82E5\u5B58\u5728\u4F1A\u8D4B\u4E00\u4E2APromise</span>
    <span class="token keyword">return</span> fn <span class="token operator">?</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token operator">:</span> fn<span class="token punctuation">)</span> <span class="token operator">:</span> p   <span class="token comment">// \u82E5\u4F20\u9012\u4E86\u51FD\u6570,\u5219\u4F1A\u5728.then\u91CC\u8C03\u7528\uFF0C\u82E5\u4E0D\u4F20\u5219\u76F4\u63A5\u8FD4\u56DEPromise</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8C03\u5EA6\u5668</span>
<span class="token comment">//queueJob \u7EF4\u62A4job\u5217\u961F\uFF0C\u8C03\u7528\u4E86queueFlush, \u6709\u53BB\u91CD\u903B\u8F91\uFF0C\u4FDD\u8BC1\u4EFB\u52A1\u7684\u552F\u4E00\u6027\uFF0C\u6BCF\u6B21\u8C03\u7528\u53BB\u6267\u884C\uFF0C\u88AB\u8C03\u7528\u7684\u65F6\u5019\u53BB\u91CD\uFF0C\u6BCF\u6B21\u8C03\u7528\u53BB\u6267\u884C queueFlush</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">queueJob</span><span class="token punctuation">(</span>job<span class="token operator">:</span> SchedulerJob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u6761\u4EF6\uFF1A\u4E3B\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A \u6216\u8005 \u6709\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u4E14\u6CA1\u6709\u5728\u4E3B\u4EFB\u52A1\u961F\u5217\u4E2D  &amp;&amp; job \u4E0D\u80FD\u548C\u5F53\u524D\u6B63\u5728\u6267\u884C\u4EFB\u52A1\u53CA\u540E\u9762\u5F85\u6267\u884C\u4EFB\u52A1\u76F8\u540C</span>
  <span class="token comment">// \u91CD\u590D\u6570\u636E\u5220\u9664\uFF1A</span>
  <span class="token comment">// - \u4F7F\u7528Array.includes(Obj, startIndex) \u7684 \u8D77\u59CB\u7D22\u5F15\u53C2\u6570\uFF1AstartIndex</span>
  <span class="token comment">// - startIndex\u9ED8\u8BA4\u4E3A\u5305\u542B\u5F53\u524D\u6B63\u5728\u8FD0\u884Cjob\u7684index\uFF0C\u6B64\u65F6\uFF0C\u5B83\u4E0D\u80FD\u518D\u6B21\u9012\u5F52\u89E6\u53D1\u81EA\u8EAB</span>
  <span class="token comment">// - \u5982\u679Cjob\u662F\u4E00\u4E2Awatch()\u56DE\u8C03\u51FD\u6570\u6216\u8005\u5F53\u524Djob\u5141\u8BB8\u9012\u5F52\u89E6\u53D1\uFF0C\u5219\u641C\u7D22\u7D22\u5F15\u5C06+1\uFF0C\u4EE5\u5141\u8BB8\u4ED6\u9012\u5F52\u89E6\u53D1\u81EA\u8EAB-\u7528\u6237\u9700\u8981\u786E\u4FDD\u56DE\u8C03\u51FD\u6570\u4E0D\u4F1A\u6B7B\u5FAA\u73AF</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span>length <span class="token operator">||</span>
      <span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>
        job<span class="token punctuation">,</span>
        isFlushing <span class="token operator">&amp;&amp;</span> job<span class="token punctuation">.</span>allowRecurse <span class="token operator">?</span> flushIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> flushIndex
      <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    job <span class="token operator">!==</span> currentPreFlushParentJob
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>job<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>job<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token function">findInsertionIndex</span><span class="token punctuation">(</span>job<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> job<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">queueFlush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// queueFlush\u7ED9\u6BCF\u4E2A\u961F\u5217\u90FD\u521B\u5EFA\u4E86\u5FAE\u4EFB\u52A1</span>
<span class="token keyword">function</span> <span class="token function">queueFlush</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u907F\u514D\u91CD\u590D\u8C03\u7528flushJobs</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isFlushing <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isFlushPending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isFlushPending <span class="token operator">=</span> <span class="token boolean">true</span>
     <span class="token comment">//\u5F00\u542F\u5F02\u6B65\u4EFB\u52A1\u5904\u7406flushJobs</span>
    currentFlushPromise <span class="token operator">=</span> resolvedPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushJobs<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","sourcecode.html.vue"]]);export{r as default};
