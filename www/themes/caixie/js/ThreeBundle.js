/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () {

		try {

			var canvas = document.createElement( 'canvas' ); return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	} )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};

// browserify support
if ( typeof module === 'object' ) {

	module.exports = Detector;

}
// threejs.org/license
(function(l,sa){"object"===typeof exports&&"undefined"!==typeof module?sa(exports):"function"===typeof define&&define.amd?define(["exports"],sa):sa(l.THREE=l.THREE||{})})(this,function(l){function sa(){}function B(a,b){this.x=a||0;this.y=b||0}function da(a,b,c,d,e,f,g,h,k,m){Object.defineProperty(this,"id",{value:ee++});this.uuid=T.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:da.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:da.DEFAULT_MAPPING;this.wrapS=void 0!==c?
c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new B(0,0);this.repeat=new B(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function ga(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function Db(a,b,c){this.uuid=T.generateUUID();
this.width=a;this.height=b;this.scissor=new ga(0,0,a,b);this.scissorTest=!1;this.viewport=new ga(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new da(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Eb(a,b,c){Db.call(this,a,b,c);this.activeMipMapLevel=
this.activeCubeFace=0}function ba(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function q(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function J(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function Xa(a,b,c,d,e,f,g,h,k,m){a=void 0!==a?a:[];da.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,k,m);this.flipY=!1}function Fb(a,b,c){var d=a[0];if(0>=
d||0<d)return a;var e=b*c,f=fe[e];void 0===f&&(f=new Float32Array(e),fe[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function ge(a,b){var c=he[b];void 0===c&&(c=new Int32Array(b),he[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function Ie(a,b){a.uniform1f(this.addr,b)}function Je(a,b){a.uniform1i(this.addr,b)}function Ke(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function Le(a,b){void 0!==b.x?a.uniform3f(this.addr,
b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function Me(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function Ne(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function Oe(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b)}function Pe(a,b){a.uniformMatrix4fv(this.addr,!1,b.elements||b)}function Qe(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||ie,d)}function Re(a,b,c){var d=c.allocTextureUnit();
a.uniform1i(this.addr,d);c.setTextureCube(b||je,d)}function ke(a,b){a.uniform2iv(this.addr,b)}function le(a,b){a.uniform3iv(this.addr,b)}function me(a,b){a.uniform4iv(this.addr,b)}function Se(a){switch(a){case 5126:return Ie;case 35664:return Ke;case 35665:return Le;case 35666:return Me;case 35674:return Ne;case 35675:return Oe;case 35676:return Pe;case 35678:return Qe;case 35680:return Re;case 5124:case 35670:return Je;case 35667:case 35671:return ke;case 35668:case 35672:return le;case 35669:case 35673:return me}}
function Te(a,b){a.uniform1fv(this.addr,b)}function Ue(a,b){a.uniform1iv(this.addr,b)}function Ve(a,b){a.uniform2fv(this.addr,Fb(b,this.size,2))}function We(a,b){a.uniform3fv(this.addr,Fb(b,this.size,3))}function Xe(a,b){a.uniform4fv(this.addr,Fb(b,this.size,4))}function Ye(a,b){a.uniformMatrix2fv(this.addr,!1,Fb(b,this.size,4))}function Ze(a,b){a.uniformMatrix3fv(this.addr,!1,Fb(b,this.size,9))}function $e(a,b){a.uniformMatrix4fv(this.addr,!1,Fb(b,this.size,16))}function af(a,b,c){var d=b.length,
e=ge(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||ie,e[a])}function bf(a,b,c){var d=b.length,e=ge(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||je,e[a])}function cf(a){switch(a){case 5126:return Te;case 35664:return Ve;case 35665:return We;case 35666:return Xe;case 35674:return Ye;case 35675:return Ze;case 35676:return $e;case 35678:return af;case 35680:return bf;case 5124:case 35670:return Ue;case 35667:case 35671:return ke;case 35668:case 35672:return le;
case 35669:case 35673:return me}}function df(a,b,c){this.id=a;this.addr=c;this.setValue=Se(b.type)}function ef(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=cf(b.type)}function ne(a){this.id=a;this.seq=[];this.map={}}function Ya(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d!==c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=h.length;for(zd.lastIndex=0;;){var m=zd.exec(h),w=zd.lastIndex,
n=m[1],p=m[3];"]"===m[2]&&(n|=0);if(void 0===p||"["===p&&w+2===k){h=g;e=void 0===p?new df(n,e,f):new ef(n,e,f);h.seq.push(e);h.map[e.id]=e;break}else p=g.map[n],void 0===p&&(p=new ne(n),n=g,g=p,n.seq.push(g),n.map[g.id]=g),g=p}}}function O(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function mc(a,b){this.min=void 0!==a?a:new B(Infinity,Infinity);this.max=void 0!==b?b:new B(-Infinity,-Infinity)}function ff(a,b){var c,d,e,f,g,h,k,m,w,n,p=a.context,r=a.state,x,l,D,u,v,I;this.render=
function(y,E,H){if(0!==b.length){y=new q;var F=H.w/H.z,M=.5*H.z,ca=.5*H.w,K=16/H.w,ja=new B(K*F,K),Aa=new q(1,1,0),eb=new B(1,1),Ka=new mc;Ka.min.set(H.x,H.y);Ka.max.set(H.x+(H.z-16),H.y+(H.w-16));if(void 0===u){var K=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),N=new Uint16Array([0,1,2,0,2,3]);x=p.createBuffer();l=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,x);p.bufferData(p.ARRAY_BUFFER,K,p.STATIC_DRAW);p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,l);p.bufferData(p.ELEMENT_ARRAY_BUFFER,N,p.STATIC_DRAW);
v=p.createTexture();I=p.createTexture();r.bindTexture(p.TEXTURE_2D,v);p.texImage2D(p.TEXTURE_2D,0,p.RGB,16,16,0,p.RGB,p.UNSIGNED_BYTE,null);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST);r.bindTexture(p.TEXTURE_2D,I);p.texImage2D(p.TEXTURE_2D,0,p.RGBA,16,16,0,p.RGBA,p.UNSIGNED_BYTE,null);p.texParameteri(p.TEXTURE_2D,
p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.NEAREST);p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.NEAREST);var K=D={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},N=p.createProgram(),P=p.createShader(p.FRAGMENT_SHADER),
R=p.createShader(p.VERTEX_SHADER),S="precision "+a.getPrecision()+" float;\n";p.shaderSource(P,S+K.fragmentShader);p.shaderSource(R,S+K.vertexShader);p.compileShader(P);p.compileShader(R);p.attachShader(N,P);p.attachShader(N,R);p.linkProgram(N);u=N;w=p.getAttribLocation(u,"position");n=p.getAttribLocation(u,"uv");c=p.getUniformLocation(u,"renderType");d=p.getUniformLocation(u,"map");e=p.getUniformLocation(u,"occlusionMap");f=p.getUniformLocation(u,"opacity");g=p.getUniformLocation(u,"color");h=p.getUniformLocation(u,
"scale");k=p.getUniformLocation(u,"rotation");m=p.getUniformLocation(u,"screenPosition")}p.useProgram(u);r.initAttributes();r.enableAttribute(w);r.enableAttribute(n);r.disableUnusedAttributes();p.uniform1i(e,0);p.uniform1i(d,1);p.bindBuffer(p.ARRAY_BUFFER,x);p.vertexAttribPointer(w,2,p.FLOAT,!1,16,0);p.vertexAttribPointer(n,2,p.FLOAT,!1,16,8);p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,l);r.disable(p.CULL_FACE);r.setDepthWrite(!1);N=0;for(P=b.length;N<P;N++)if(K=16/H.w,ja.set(K*F,K),R=b[N],y.set(R.matrixWorld.elements[12],
R.matrixWorld.elements[13],R.matrixWorld.elements[14]),y.applyMatrix4(E.matrixWorldInverse),y.applyProjection(E.projectionMatrix),Aa.copy(y),eb.x=H.x+Aa.x*M+M-8,eb.y=H.y+Aa.y*ca+ca-8,!0===Ka.containsPoint(eb)){r.activeTexture(p.TEXTURE0);r.bindTexture(p.TEXTURE_2D,null);r.activeTexture(p.TEXTURE1);r.bindTexture(p.TEXTURE_2D,v);p.copyTexImage2D(p.TEXTURE_2D,0,p.RGB,eb.x,eb.y,16,16,0);p.uniform1i(c,0);p.uniform2f(h,ja.x,ja.y);p.uniform3f(m,Aa.x,Aa.y,Aa.z);r.disable(p.BLEND);r.enable(p.DEPTH_TEST);p.drawElements(p.TRIANGLES,
6,p.UNSIGNED_SHORT,0);r.activeTexture(p.TEXTURE0);r.bindTexture(p.TEXTURE_2D,I);p.copyTexImage2D(p.TEXTURE_2D,0,p.RGBA,eb.x,eb.y,16,16,0);p.uniform1i(c,1);r.disable(p.DEPTH_TEST);r.activeTexture(p.TEXTURE1);r.bindTexture(p.TEXTURE_2D,v);p.drawElements(p.TRIANGLES,6,p.UNSIGNED_SHORT,0);R.positionScreen.copy(Aa);R.customUpdateCallback?R.customUpdateCallback(R):R.updateLensFlares();p.uniform1i(c,2);r.enable(p.BLEND);for(var S=0,gf=R.lensFlares.length;S<gf;S++){var V=R.lensFlares[S];.001<V.opacity&&.001<
V.scale&&(Aa.x=V.x,Aa.y=V.y,Aa.z=V.z,K=V.size*V.scale/H.w,ja.x=K*F,ja.y=K,p.uniform3f(m,Aa.x,Aa.y,Aa.z),p.uniform2f(h,ja.x,ja.y),p.uniform1f(k,V.rotation),p.uniform1f(f,V.opacity),p.uniform3f(g,V.color.r,V.color.g,V.color.b),r.setBlending(V.blending,V.blendEquation,V.blendSrc,V.blendDst),a.setTexture2D(V.texture,1),p.drawElements(p.TRIANGLES,6,p.UNSIGNED_SHORT,0))}}r.enable(p.CULL_FACE);r.enable(p.DEPTH_TEST);r.setDepthWrite(!0);a.resetGLState()}}}function hf(a,b){var c,d,e,f,g,h,k,m,w,n,p,r,x,l,
D,u,v;function I(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var y=a.context,E=a.state,H,F,M,ca,K=new q,ja=new ba,Aa=new q;this.render=function(q,Ka){if(0!==b.length){if(void 0===M){var N=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),P=new Uint16Array([0,1,2,0,2,3]);H=y.createBuffer();F=y.createBuffer();y.bindBuffer(y.ARRAY_BUFFER,H);y.bufferData(y.ARRAY_BUFFER,N,y.STATIC_DRAW);y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,F);y.bufferData(y.ELEMENT_ARRAY_BUFFER,
P,y.STATIC_DRAW);var N=y.createProgram(),P=y.createShader(y.VERTEX_SHADER),R=y.createShader(y.FRAGMENT_SHADER);y.shaderSource(P,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
y.shaderSource(R,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
y.compileShader(P);y.compileShader(R);y.attachShader(N,P);y.attachShader(N,R);y.linkProgram(N);M=N;u=y.getAttribLocation(M,"position");v=y.getAttribLocation(M,"uv");c=y.getUniformLocation(M,"uvOffset");d=y.getUniformLocation(M,"uvScale");e=y.getUniformLocation(M,"rotation");f=y.getUniformLocation(M,"scale");g=y.getUniformLocation(M,"color");h=y.getUniformLocation(M,"map");k=y.getUniformLocation(M,"opacity");m=y.getUniformLocation(M,"modelViewMatrix");w=y.getUniformLocation(M,"projectionMatrix");n=
y.getUniformLocation(M,"fogType");p=y.getUniformLocation(M,"fogDensity");r=y.getUniformLocation(M,"fogNear");x=y.getUniformLocation(M,"fogFar");l=y.getUniformLocation(M,"fogColor");D=y.getUniformLocation(M,"alphaTest");N=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");N.width=8;N.height=8;P=N.getContext("2d");P.fillStyle="white";P.fillRect(0,0,8,8);ca=new da(N);ca.needsUpdate=!0}y.useProgram(M);E.initAttributes();E.enableAttribute(u);E.enableAttribute(v);E.disableUnusedAttributes();
E.disable(y.CULL_FACE);E.enable(y.BLEND);y.bindBuffer(y.ARRAY_BUFFER,H);y.vertexAttribPointer(u,2,y.FLOAT,!1,16,0);y.vertexAttribPointer(v,2,y.FLOAT,!1,16,8);y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,F);y.uniformMatrix4fv(w,!1,Ka.projectionMatrix.elements);E.activeTexture(y.TEXTURE0);y.uniform1i(h,0);P=N=0;(R=q.fog)?(y.uniform3f(l,R.color.r,R.color.g,R.color.b),R&&R.isFog?(y.uniform1f(r,R.near),y.uniform1f(x,R.far),y.uniform1i(n,1),P=N=1):R&&R.isFogExp2&&(y.uniform1f(p,R.density),y.uniform1i(n,2),P=N=2)):
(y.uniform1i(n,0),P=N=0);for(var R=0,S=b.length;R<S;R++){var B=b[R];B.modelViewMatrix.multiplyMatrices(Ka.matrixWorldInverse,B.matrixWorld);B.z=-B.modelViewMatrix.elements[14]}b.sort(I);for(var V=[],R=0,S=b.length;R<S;R++){var B=b[R],ta=B.material;!1!==ta.visible&&(y.uniform1f(D,ta.alphaTest),y.uniformMatrix4fv(m,!1,B.modelViewMatrix.elements),B.matrixWorld.decompose(K,ja,Aa),V[0]=Aa.x,V[1]=Aa.y,B=0,q.fog&&ta.fog&&(B=P),N!==B&&(y.uniform1i(n,B),N=B),null!==ta.map?(y.uniform2f(c,ta.map.offset.x,ta.map.offset.y),
y.uniform2f(d,ta.map.repeat.x,ta.map.repeat.y)):(y.uniform2f(c,0,0),y.uniform2f(d,1,1)),y.uniform1f(k,ta.opacity),y.uniform3f(g,ta.color.r,ta.color.g,ta.color.b),y.uniform1f(e,ta.rotation),y.uniform2fv(f,V),E.setBlending(ta.blending,ta.blendEquation,ta.blendSrc,ta.blendDst),E.setDepthTest(ta.depthTest),E.setDepthWrite(ta.depthWrite),ta.map?a.setTexture2D(ta.map,0):a.setTexture2D(ca,0),y.drawElements(y.TRIANGLES,6,y.UNSIGNED_SHORT,0))}E.enable(y.CULL_FACE);a.resetGLState()}}}function U(){Object.defineProperty(this,
"id",{value:oe++});this.uuid=T.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.shading=2;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=
!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.premultipliedAlpha=!1;this.overdraw=0;this._needsUpdate=this.visible=!0}function Fa(a){U.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=
this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function Za(a){U.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=
this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function Ba(a,b){this.min=void 0!==a?a:new q(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new q(-Infinity,-Infinity,-Infinity)}function Ca(a,b){this.center=void 0!==a?a:new q;this.radius=void 0!==b?b:0}function Ia(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}
function va(a,b){this.normal=void 0!==a?a:new q(1,0,0);this.constant=void 0!==b?b:0}function nc(a,b,c,d,e,f){this.planes=[void 0!==a?a:new va,void 0!==b?b:new va,void 0!==c?c:new va,void 0!==d?d:new va,void 0!==e?e:new va,void 0!==f?f:new va]}function pe(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g;g=D;var h=b.customDepthMaterial;d&&(g=u,h=b.customDistanceMaterial);h?g=h:(h=!1,c.morphTargets&&(f&&f.isBufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:
f&&f.isGeometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b=b.isSkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(f=g.uuid,h=c.uuid,b=v[f],void 0===b&&(b={},v[f]=b),f=b[h],void 0===f&&(f=g.clone(),b[h]=f),g=f);g.visible=c.visible;g.wireframe=c.wireframe;h=c.side;ja.renderSingleSided&&2==h&&(h=0);ja.renderReverseSided&&(0===h?h=1:1===h&&(h=0));g.side=h;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=
c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g}function f(a,b,c){if(!1!==a.visible){0!==(a.layers.mask&b.layers.mask)&&(a.isMesh||a.isLine||a.isPoints)&&a.castShadow&&(!1===a.frustumCulled||!0===k.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),l.push(a));a=a.children;for(var d=0,e=a.length;d<e;d++)f(a[d],b,c)}}var g=a.context,h=a.state,k=new nc,m=new J,
w=b.shadows,n=new B,p=new B(d.maxTextureSize,d.maxTextureSize),r=new q,x=new q,l=[],D=Array(4),u=Array(4),v={},I=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],y=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)],E=[new ga,new ga,new ga,new ga,new ga,new ga];b=new Za;b.depthPacking=3201;b.clipping=!0;d=Gb.distanceRGBA;for(var H=La.clone(d.uniforms),F=0;4!==F;++F){var M=0!==(F&1),ca=0!==(F&2),K=b.clone();K.morphTargets=M;K.skinning=
ca;D[F]=K;M=new Fa({defines:{USE_SHADOWMAP:""},uniforms:H,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:M,skinning:ca,clipping:!0});u[F]=M}var ja=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,d){if(!1!==ja.enabled&&(!1!==ja.autoUpdate||!1!==ja.needsUpdate)&&0!==w.length){h.clearColor(1,1,1,1);h.disable(g.BLEND);h.setDepthTest(!0);h.setScissorTest(!1);for(var v,u,q=0,D=w.length;q<
D;q++){var H=w[q],F=H.shadow;if(void 0===F)console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");else{var M=F.camera;n.copy(F.mapSize);n.min(p);if(H&&H.isPointLight){v=6;u=!0;var K=n.x,ca=n.y;E[0].set(2*K,ca,K,ca);E[1].set(0,ca,K,ca);E[2].set(3*K,ca,K,ca);E[3].set(K,ca,K,ca);E[4].set(3*K,0,K,ca);E[5].set(K,0,K,ca);n.x*=4;n.y*=2}else v=1,u=!1;null===F.map&&(F.map=new Db(n.x,n.y,{minFilter:1003,magFilter:1003,format:1023}),M.updateProjectionMatrix());F&&F.isSpotLightShadow&&F.update(H);K=F.map;F=
F.matrix;x.setFromMatrixPosition(H.matrixWorld);M.position.copy(x);a.setRenderTarget(K);a.clear();for(K=0;K<v;K++){u?(r.copy(M.position),r.add(I[K]),M.up.copy(y[K]),M.lookAt(r),h.viewport(E[K])):(r.setFromMatrixPosition(H.target.matrixWorld),M.lookAt(r));M.updateMatrixWorld();M.matrixWorldInverse.getInverse(M.matrixWorld);F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);F.multiply(M.projectionMatrix);F.multiply(M.matrixWorldInverse);m.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse);k.setFromMatrix(m);
l.length=0;f(b,d,M);for(var ca=0,B=l.length;ca<B;ca++){var C=l[ca],z=c.update(C),G=C.material;if(G&&G.isMultiMaterial)for(var $a=z.groups,G=G.materials,Ad=0,Da=$a.length;Ad<Da;Ad++){var Ra=$a[Ad],Pa=G[Ra.materialIndex];!0===Pa.visible&&(Pa=e(C,Pa,u,x),a.renderBufferDirect(M,null,z,Pa,C,Ra))}else Pa=e(C,G,u,x),a.renderBufferDirect(M,null,z,Pa,C,null)}}}}v=a.getClearColor();u=a.getClearAlpha();a.setClearColor(v,u);ja.needsUpdate=!1}}}function ab(a,b){this.origin=void 0!==a?a:new q;this.direction=void 0!==
b?b:new q}function bb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||bb.DefaultOrder}function Yc(){this.mask=1}function z(){Object.defineProperty(this,"id",{value:qe++});this.uuid=T.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=z.DefaultUp.clone();var a=new q,b=new bb,c=new ba,d=new q(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,
value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new J},normalMatrix:{value:new Ia}});this.matrix=new J;this.matrixWorld=new J;this.matrixAutoUpdate=z.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Yc;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};this.onBeforeRender=function(){};this.onAfterRender=function(){}}function gb(a,b){this.start=
void 0!==a?a:new q;this.end=void 0!==b?b:new q}function wa(a,b,c){this.a=void 0!==a?a:new q;this.b=void 0!==b?b:new q;this.c=void 0!==c?c:new q}function ea(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new q;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new O;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function Ma(a){U.call(this);this.type="MeshBasicMaterial";this.color=new O(16777215);this.aoMap=this.map=null;this.aoMapIntensity=
1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function C(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=T.generateUUID();this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;
this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0}function Zc(a,b){return new C(new Uint16Array(a),b)}function $c(a,b){return new C(new Uint32Array(a),b)}function ha(a,b){return new C(new Float32Array(a),b)}function Q(){Object.defineProperty(this,"id",{value:ad++});this.uuid=T.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=
[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function re(){Object.defineProperty(this,"id",{value:ad++});this.uuid=T.generateUUID();this.name="";this.type="DirectGeometry";this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];
this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function G(){Object.defineProperty(this,"id",{value:ad++});this.uuid=T.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function ya(a,b){z.call(this);this.type="Mesh";this.geometry=void 0!==
a?a:new G;this.material=void 0!==b?b:new Ma({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function hb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,k,m,B,C){var Ka=f/m,N=g/B,P=f/2,R=g/2,S=k/2;g=m+1;for(var z=B+1,V=f=0,G=new q,L=0;L<z;L++)for(var O=L*N-R,J=0;J<g;J++)G[a]=(J*Ka-P)*d,G[b]=O*e,G[c]=S,n[l]=G.x,n[l+1]=G.y,n[l+2]=G.z,G[a]=0,G[b]=0,G[c]=0<k?1:-1,p[l]=G.x,p[l+1]=G.y,p[l+2]=G.z,r[t]=J/m,r[t+1]=1-L/B,l+=3,t+=2,f+=1;for(L=0;L<B;L++)for(J=0;J<m;J++)a=u+J+g*(L+1),b=u+(J+1)+
g*(L+1),c=u+(J+1)+g*L,w[D]=u+J+g*L,w[D+1]=a,w[D+2]=c,w[D+3]=a,w[D+4]=b,w[D+5]=c,D+=6,V+=6;h.addGroup(v,V,C);v+=V;u+=f}G.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=function(a,b,c){return a=0+(a+1)*(b+1)*2+(a+1)*(c+1)*2+(c+1)*(b+1)*2}(d,e,f),m=function(a,b,c){a=0+a*b*2+a*c*2+c*b*2;return 6*a}(d,e,f),w=new (65535<m?Uint32Array:Uint16Array)(m),
n=new Float32Array(3*k),p=new Float32Array(3*k),r=new Float32Array(2*k),l=0,t=0,D=0,u=0,v=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(new C(w,1));this.addAttribute("position",new C(n,3));this.addAttribute("normal",new C(p,3));this.addAttribute("uv",new C(r,2))}function ib(a,b,c,d){G.call(this);this.type="PlaneBufferGeometry";this.parameters=
{width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,m=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var w=new Float32Array(g*h*2),n=0,p=0,r=0;r<h;r++)for(var l=r*m-f,t=0;t<g;t++)b[n]=t*k-e,b[n+1]=-l,a[n+2]=1,w[p]=t/c,w[p+1]=1-r/d,n+=3,p+=2;n=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(r=0;r<d;r++)for(t=0;t<c;t++)f=t+g*(r+1),h=t+1+g*(r+1),k=t+1+g*r,e[n]=t+g*r,e[n+1]=f,e[n+2]=k,e[n+3]=f,e[n+4]=
h,e[n+5]=k,n+=6;this.setIndex(new C(e,1));this.addAttribute("position",new C(b,3));this.addAttribute("normal",new C(a,3));this.addAttribute("uv",new C(w,2))}function Z(){z.call(this);this.type="Camera";this.matrixWorldInverse=new J;this.projectionMatrix=new J}function Ea(a,b,c,d){Z.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=
0;this.updateProjectionMatrix()}function Hb(a,b,c,d,e,f){Z.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function jf(a,b,c){var d,e,f;return{setMode:function(a){d=a},setIndex:function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):(e=a.UNSIGNED_SHORT,f=2)},render:function(b,h){a.drawElements(d,h,e,b*f);
c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)},renderInstances:function(g,h,k){var m=b.get("ANGLE_instanced_arrays");null===m?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(m.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*k/3))}}}function kf(a,b,c){var d;return{setMode:function(a){d=a},render:function(b,
f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)},renderInstances:function(e){var f=b.get("ANGLE_instanced_arrays");if(null===f)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var g=e.attributes.position,g=g&&g.isInterleavedBufferAttribute?g.data.count:g.count;f.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;d===a.TRIANGLES&&
(c.faces+=e.maxInstancedCount*g/3)}}}}function lf(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "DirectionalLight":c={direction:new q,color:new O,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new B};break;case "SpotLight":c={position:new q,direction:new q,color:new O,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new B};break;case "PointLight":c={position:new q,color:new O,distance:0,decay:0,shadow:!1,
shadowBias:0,shadowRadius:1,shadowMapSize:new B};break;case "HemisphereLight":c={direction:new q,skyColor:new O,groundColor:new O}}return a[b.id]=c}}}function mf(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function se(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",
b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),mf(c));return d}function te(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Bd(a,b){var c=te(b);return"vec4 "+a+"( vec4 value ) { return "+
c[0]+"ToLinear"+c[1]+"; }"}function nf(a,b){var c=te(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function of(a,b){var c;switch(b){case 1:c="Linear";break;case 2:c="Reinhard";break;case 3:c="Uncharted2";break;case 4:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function pf(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":
"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oc).join("\n")}function qf(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function oc(a){return""!==a}function ue(a,b){return a.replace(/NUM_DIR_LIGHTS/g,
b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Cd(a){return a.replace(/#include +<([\w\d.]+)>/g,function(a,c){var d=X[c];if(void 0===d)throw Error("Can not resolve #include <"+c+">");return Cd(d)})}function ve(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+
" ]");return a})}function rf(a,b,c,d){var e=a.context,f=c.extensions,g=c.defines,h=c.__webglShader.vertexShader,k=c.__webglShader.fragmentShader,m="SHADOWMAP_TYPE_BASIC";1===d.shadowMapType?m="SHADOWMAP_TYPE_PCF":2===d.shadowMapType&&(m="SHADOWMAP_TYPE_PCF_SOFT");var w="ENVMAP_TYPE_CUBE",n="ENVMAP_MODE_REFLECTION",p="ENVMAP_BLENDING_MULTIPLY";if(d.envMap){switch(c.envMap.mapping){case 301:case 302:w="ENVMAP_TYPE_CUBE";break;case 306:case 307:w="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:w="ENVMAP_TYPE_EQUIREC";
break;case 305:w="ENVMAP_TYPE_SPHERE"}switch(c.envMap.mapping){case 302:case 304:n="ENVMAP_MODE_REFRACTION"}switch(c.combine){case 0:p="ENVMAP_BLENDING_MULTIPLY";break;case 1:p="ENVMAP_BLENDING_MIX";break;case 2:p="ENVMAP_BLENDING_ADD"}}var r=0<a.gammaFactor?a.gammaFactor:1,f=pf(f,d,a.extensions),l=qf(g),t=e.createProgram();c.isRawShaderMaterial?(g=[l,"\n"].filter(oc).join("\n"),m=[f,l,"\n"].filter(oc).join("\n")):(g=["precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+
c.__webglShader.name,l,d.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+r,"#define MAX_BONES "+d.maxBones,d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+n:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.displacementMap&&d.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",d.specularMap?"#define USE_SPECULARMAP":
"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.flatShading?"#define FLAT_SHADED":"",d.skinning?"#define USE_SKINNING":"",d.useVertexTexture?"#define BONE_TEXTURE":"",d.morphTargets?"#define USE_MORPHTARGETS":"",d.morphNormals&&!1===d.flatShading?"#define USE_MORPHNORMALS":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+
d.numClippingPlanes,d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+m:"",d.sizeAttenuation?"#define USE_SIZEATTENUATION":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;",
"attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;",
"\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(oc).join("\n"),m=[f,"precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.alphaTest?"#define ALPHATEST "+d.alphaTest:"","#define GAMMA_FACTOR "+r,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":
"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+w:"",d.envMap?"#define "+n:"",d.envMap?"#define "+p:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":
"",d.flatShading?"#define FLAT_SHADED":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(d.numClippingPlanes-d.numClipIntersection),d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+m:"",d.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",d.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&
a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",d.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==d.toneMapping?"#define TONE_MAPPING":"",0!==d.toneMapping?X.tonemapping_pars_fragment:"",0!==d.toneMapping?of("toneMapping",d.toneMapping):"",d.outputEncoding||d.mapEncoding||d.envMapEncoding||d.emissiveMapEncoding?X.encodings_pars_fragment:"",d.mapEncoding?Bd("mapTexelToLinear",d.mapEncoding):
"",d.envMapEncoding?Bd("envMapTexelToLinear",d.envMapEncoding):"",d.emissiveMapEncoding?Bd("emissiveMapTexelToLinear",d.emissiveMapEncoding):"",d.outputEncoding?nf("linearToOutputTexel",d.outputEncoding):"",d.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(oc).join("\n"));h=Cd(h,d);h=ue(h,d);k=Cd(k,d);k=ue(k,d);c.isShaderMaterial||(h=ve(h),k=ve(k));k=m+k;h=se(e,e.VERTEX_SHADER,g+h);k=se(e,e.FRAGMENT_SHADER,k);e.attachShader(t,h);e.attachShader(t,k);void 0!==c.index0AttributeName?
e.bindAttribLocation(t,0,c.index0AttributeName):!0===d.morphTargets&&e.bindAttribLocation(t,0,"position");e.linkProgram(t);d=e.getProgramInfoLog(t);w=e.getShaderInfoLog(h);n=e.getShaderInfoLog(k);r=p=!0;if(!1===e.getProgramParameter(t,e.LINK_STATUS))p=!1,console.error("THREE.WebGLProgram: shader error: ",e.getError(),"gl.VALIDATE_STATUS",e.getProgramParameter(t,e.VALIDATE_STATUS),"gl.getProgramInfoLog",d,w,n);else if(""!==d)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",d);else if(""===
w||""===n)r=!1;r&&(this.diagnostics={runnable:p,material:c,programLog:d,vertexShader:{log:w,prefix:g},fragmentShader:{log:n,prefix:m}});e.deleteShader(h);e.deleteShader(k);var q;this.getUniforms=function(){void 0===q&&(q=new Ya(e,t,a));return q};var u;this.getAttributes=function(){if(void 0===u){for(var a={},b=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=e.getActiveAttrib(t,c).name;a[d]=e.getAttribLocation(t,d)}u=a}return u};this.destroy=function(){e.deleteProgram(t);this.program=
void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=sf++;this.code=b;this.usedTimes=1;this.program=t;this.vertexShader=h;this.fragmentShader=k;return this}function tf(a,b){function c(a,b){var c;a?a&&a.isTexture?c=a.encoding:a&&a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
c=a.texture.encoding):c=3E3;3E3===c&&b&&(c=3007);return c}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking".split(" ");
this.getParameters=function(d,f,k,m,w,n){var p=e[d.type],r;b.floatVertexTextures&&n&&n.skeleton&&n.skeleton.useVertexTexture?r=1024:(r=Math.floor((b.maxVertexUniforms-20)/4),void 0!==n&&n&&n.isSkinnedMesh&&(r=Math.min(n.skeleton.bones.length,r),r<n.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+n.skeleton.bones.length+", this GPU supports just "+r+" (try OpenGL instead of ANGLE)")));var l=a.getPrecision();null!==d.precision&&(l=b.getMaxPrecision(d.precision),l!==d.precision&&
console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",l,"instead."));var t=a.getCurrentRenderTarget();return{shaderID:p,precision:l,supportsVertexTextures:b.vertexTextures,outputEncoding:c(t?t.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(306===d.envMap.mapping||307===d.envMap.mapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,
emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!k,useFog:d.fog,fogExp:k&&k.isFogExp2,flatShading:1===d.shading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning,maxBones:r,useVertexTexture:b.floatVertexTextures&&
n&&n.skeleton&&n.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numHemiLights:f.hemi.length,numClippingPlanes:m,numClipIntersection:w,shadowMapEnabled:a.shadowMap.enabled&&n.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,
premultipliedAlpha:d.premultipliedAlpha,alphaTest:d.alphaTest,doubleSided:2===d.side,flipSided:1===d.side,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<f.length;d++)c.push(b[f[d]]);return c.join()};this.acquireProgram=function(b,c,e){for(var f,w=0,n=d.length;w<n;w++){var p=d[w];if(p.code===
e){f=p;++f.usedTimes;break}}void 0===f&&(f=new rf(a,e,b,c),d.push(f));return f};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy()}};this.programs=d}function uf(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var k=a.attributes,m;for(m in k)e(k[m]);h.removeEventListener("dispose",d);delete f[h.id];m=b.get(h);m.wireframe&&e(m.wireframe);b["delete"](h);h=b.get(a);h.wireframe&&e(h.wireframe);b["delete"](a);c.memory.geometries--}
function e(c){var d;d=c.isInterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c.isInterleavedBufferAttribute?b["delete"](c.data):b["delete"](c))}var f={};return{get:function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new G).setFromObject(a)),e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e}}}function vf(a,
b,c){function d(c,d){var e=c.isInterleavedBufferAttribute?c.data:c,k=b.get(e);void 0===k.__webglBuffer?(k.__webglBuffer=a.createBuffer(),a.bindBuffer(d,k.__webglBuffer),a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW),k.version=e.version):k.version!==e.version&&(a.bindBuffer(d,k.__webglBuffer),!1===e.dynamic?a.bufferData(d,e.array,a.STATIC_DRAW):-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),k.version=e.version)}var e=new uf(a,b,c);return{getAttributeBuffer:function(a){return a.isInterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer},getWireframeAttribute:function(c){var e=b.get(c);if(void 0!==e.wireframe)return e.wireframe;var h=[],k=c.index,m=c.attributes;c=m.position;if(null!==k)for(var k=k.array,
m=0,w=k.length;m<w;m+=3){var n=k[m+0],p=k[m+1],r=k[m+2];h.push(n,p,p,r,r,n)}else for(k=m.position.array,m=0,w=k.length/3-1;m<w;m+=3)n=m+0,p=m+1,r=m+2,h.push(n,p,p,r,r,n);h=new C(new (65535<c.count?Uint32Array:Uint16Array)(h),1);d(h,a.ELEMENT_ARRAY_BUFFER);return e.wireframe=h},update:function(b){var c=e.get(b);b.geometry.isGeometry&&c.updateFromObject(b);b=c.index;var h=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var k in h)d(h[k],a.ARRAY_BUFFER);b=c.morphAttributes;for(k in b)for(var h=
b[k],m=0,w=h.length;m<w;m++)d(h[m],a.ARRAY_BUFFER);return c}}}function wf(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}
function k(a){return T.isPowerOfTwo(a.width)&&T.isPowerOfTwo(a.height)}function m(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function w(b){b=b.target;b.removeEventListener("dispose",w);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d["delete"](b)}q.textures--}function n(b){b=b.target;b.removeEventListener("dispose",n);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==
e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b&&b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d["delete"](b.texture);d["delete"](b)}q.textures--}function p(b,g){var m=d.get(b);if(0<b.version&&m.__version!==b.version){var p=b.image;
if(void 0===p)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===p.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===m.__webglInit&&(m.__webglInit=!0,b.addEventListener("dispose",w),m.__webglTexture=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,m.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var n=h(b.image,e.maxTextureSize);if((1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===k(n))if(p=n,p instanceof HTMLImageElement||p instanceof HTMLCanvasElement){var l=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");l.width=T.nearestPowerOfTwo(p.width);l.height=T.nearestPowerOfTwo(p.height);l.getContext("2d").drawImage(p,0,0,l.width,l.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+
p.width+"x"+p.height+"). Resized to "+l.width+"x"+l.height,p);n=l}else n=p;var p=k(n),l=f(b.format),x=f(b.type);r(a.TEXTURE_2D,b,p);var t=b.mipmaps;if(b&&b.isDepthTexture){t=a.DEPTH_COMPONENT;if(1015===b.type){if(!u)throw Error("Float Depth Texture only supported in WebGL2.0");t=a.DEPTH_COMPONENT32F}else u&&(t=a.DEPTH_COMPONENT16);1027===b.format&&(t=a.DEPTH_STENCIL);c.texImage2D(a.TEXTURE_2D,0,t,n.width,n.height,0,l,x,null)}else if(b&&b.isDataTexture)if(0<t.length&&p){for(var K=0,ja=t.length;K<ja;K++)n=
t[K],c.texImage2D(a.TEXTURE_2D,K,l,n.width,n.height,0,l,x,n.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,n.width,n.height,0,l,x,n.data);else if(b&&b.isCompressedTexture)for(K=0,ja=t.length;K<ja;K++)n=t[K],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(l)?c.compressedTexImage2D(a.TEXTURE_2D,K,l,n.width,n.height,0,n.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,
K,l,n.width,n.height,0,l,x,n.data);else if(0<t.length&&p){K=0;for(ja=t.length;K<ja;K++)n=t[K],c.texImage2D(a.TEXTURE_2D,K,l,l,x,n);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,l,x,n);b.generateMipmaps&&p&&a.generateMipmap(a.TEXTURE_2D);m.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}}c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,m.__webglTexture)}function r(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),a.texParameteri(c,
a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,m(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,m(g.minFilter)),1003!==g.minFilter&&
1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=
g.anisotropy)}function l(b,e,g,h){var k=f(e.texture.format),m=f(e.texture.type);c.texImage2D(h,0,k,e.width,e.height,0,k,m,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function t(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,
b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var q=g.memory,u="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=p;this.setTextureCube=function(b,g){var m=d.get(b);if(6===b.image.length)if(0<b.version&&
m.__version!==b.version){m.__image__webglTextureCube||(b.addEventListener("dispose",w),m.__image__webglTextureCube=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_CUBE_MAP,m.__image__webglTextureCube);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var p=b&&b.isCompressedTexture,n=b.image[0]&&b.image[0].isDataTexture,l=[],x=0;6>x;x++)l[x]=p||n?n?b.image[x].image:b.image[x]:h(b.image[x],e.maxCubemapSize);var t=k(l[0]),u=f(b.format),ja=f(b.type);r(a.TEXTURE_CUBE_MAP,
b,t);for(x=0;6>x;x++)if(p)for(var B,C=l[x].mipmaps,z=0,N=C.length;z<N;z++)B=C[z],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(u)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,z,u,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,z,u,B.width,B.height,0,u,ja,B.data);else n?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,u,l[x].width,
l[x].height,0,u,ja,l[x].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,u,u,ja,l[x]);b.generateMipmaps&&t&&a.generateMipmap(a.TEXTURE_CUBE_MAP);m.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+g),c.bindTexture(a.TEXTURE_CUBE_MAP,m.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",
n);f.__webglTexture=a.createTexture();q.textures++;var g=b&&b.isWebGLRenderTargetCube,h=k(b);if(g){e.__webglFramebuffer=[];for(var m=0;6>m;m++)e.__webglFramebuffer[m]=a.createFramebuffer()}else e.__webglFramebuffer=a.createFramebuffer();if(g){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);r(a.TEXTURE_CUBE_MAP,b.texture,h);for(m=0;6>m;m++)l(e.__webglFramebuffer[m],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+m);b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,
null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),r(a.TEXTURE_2D,b.texture,h),l(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_2D),c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=b&&b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,
e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);p(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,
a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),t(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),t(e.__webglDepthbuffer,
b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture;e.generateMipmaps&&k(b)&&1003!==e.minFilter&&1006!==e.minFilter&&(b=b&&b.isWebGLRenderTargetCube?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function xf(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},"delete":function(b){delete a[b.uuid]},clear:function(){a={}}}}function yf(a,b,c){function d(b,
c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==E[b]&&(a.enable(b),E[b]=!0)}function f(b){!1!==E[b]&&(a.disable(b),E[b]=!1)}function g(b,d,g,h,k,m,p,n){0!==b?e(a.BLEND):f(a.BLEND);if(b!==F||n!==G)2===b?n?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,
a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):3===b?n?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):4===b?n?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):n?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),
a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),F=b,G=n;if(5===b){k=k||d;m=m||g;p=p||h;if(d!==M||k!==B)a.blendEquationSeparate(c(d),c(k)),M=d,B=k;if(g!==ca||h!==K||m!==C||p!==z)a.blendFuncSeparate(c(g),c(h),c(m),c(p)),ca=g,K=h,C=m,z=p}else z=C=B=K=ca=M=null}function h(a){t.setFunc(a)}function k(b){N!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),
N=b)}function m(b){0!==b?(e(a.CULL_FACE),b!==P&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);P=b}function w(b){void 0===b&&(b=a.TEXTURE0+O-1);L!==b&&(a.activeTexture(b),L=b)}function n(a,b,c,d){l.setClear(a,b,c,d)}function p(a){t.setClear(a)}function r(a){q.setClear(a)}var l=new function(){var b=!1,c=new ga,d=null,e=new ga;return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g){c.set(b,
d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(0,0,0,1)}}},t=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);
break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},q=new function(){var b=!1,c=null,d=null,g=null,h=null,k=null,m=null,p=null,n=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==
e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(k!==b||m!==c||p!==d)a.stencilOp(b,c,d),k=b,m=c,p=d},setLocked:function(a){b=a},setClear:function(b){n!==b&&(a.clearStencil(b),n=b)},reset:function(){b=!1;n=p=m=k=h=g=d=c=null}}},u=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=new Uint8Array(u),I=new Uint8Array(u),y=new Uint8Array(u),E={},H=null,F=null,M=null,ca=null,K=null,B=null,C=null,z=null,G=!1,N=null,P=null,R=null,S=null,J=null,V=null,O=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),L=null,Q={},
T=new ga,U=new ga,fb={};fb[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);fb[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);return{buffers:{color:l,depth:t,stencil:q},init:function(){n(0,0,0,1);p(1);r(0);e(a.DEPTH_TEST);h(3);k(!1);m(1);e(a.CULL_FACE);e(a.BLEND);g(1)},initAttributes:function(){for(var a=0,b=v.length;a<b;a++)v[a]=0},enableAttribute:function(c){v[c]=1;0===I[c]&&(a.enableVertexAttribArray(c),I[c]=1);0!==y[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,
0),y[c]=0)},enableAttributeAndDivisor:function(b,c,d){v[b]=1;0===I[b]&&(a.enableVertexAttribArray(b),I[b]=1);y[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),y[b]=c)},disableUnusedAttributes:function(){for(var b=0,c=I.length;b!==c;++b)I[b]!==v[b]&&(a.disableVertexAttribArray(b),I[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===H&&(H=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),
d=0;d<c.length;d++)H.push(c[d]);return H},setBlending:g,setColorWrite:function(a){l.setMask(a)},setDepthTest:function(a){t.setTest(a)},setDepthWrite:function(a){t.setMask(a)},setDepthFunc:h,setStencilTest:function(a){q.setTest(a)},setStencilWrite:function(a){q.setMask(a)},setStencilFunc:function(a,b,c){q.setFunc(a,b,c)},setStencilOp:function(a,b,c){q.setOp(a,b,c)},setFlipSided:k,setCullFace:m,setLineWidth:function(b){b!==R&&(a.lineWidth(b),R=b)},setPolygonOffset:function(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),
S!==c||J!==d)a.polygonOffset(c,d),S=c,J=d}else f(a.POLYGON_OFFSET_FILL)},getScissorTest:function(){return V},setScissorTest:function(b){(V=b)?e(a.SCISSOR_TEST):f(a.SCISSOR_TEST)},activeTexture:w,bindTexture:function(b,c){null===L&&w();var d=Q[L];void 0===d&&(d={type:void 0,texture:void 0},Q[L]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||fb[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}},texImage2D:function(){try{a.texImage2D.apply(a,
arguments)}catch(b){console.error(b)}},clearColor:n,clearDepth:p,clearStencil:r,scissor:function(b){!1===T.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),T.copy(b))},viewport:function(b){!1===U.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),U.copy(b))},reset:function(){for(var b=0;b<I.length;b++)1===I[b]&&(a.disableVertexAttribArray(b),I[b]=0);E={};L=H=null;Q={};P=N=F=null;l.reset();t.reset();q.reset()}}}function zf(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&
0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=!0===c.logarithmicDepthBuffer&&!!b.get("EXT_frag_depth");var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),
h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),w=a.getParameter(a.MAX_VERTEX_ATTRIBS),n=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),r=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),l=0<h,t=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:k,maxCubemapSize:m,maxAttributes:w,maxVertexUniforms:n,maxVaryings:p,maxFragmentUniforms:r,vertexTextures:l,floatFragmentTextures:t,floatVertexTextures:l&&t}}function Af(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");
break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||
a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function Bf(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;
k.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new va,k=new Ia,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=
!1;a()};this.setState=function(c,h,k,r,l,t){if(!f||null===c||0===c.length||g&&!k)g?b(null):a();else{k=g?0:e;var q=4*k,u=l.clippingState||null;m.value=u;u=b(c,r,q,t);for(c=0;c!==q;++c)u[c]=d[c];l.clippingState=u;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=k}}}function Dd(a){function b(a,b,c,d){!0===M&&(a*=d,b*=d,c*=d);Y.clearColor(a,b,c,d)}function c(){Y.init();Y.scissor(X.copy(ha).multiplyScalar(Qa));Y.viewport($a.copy(fa).multiplyScalar(Qa));b(Da.r,Da.g,Da.b,Ra)}function d(){W=Q=null;
U="";L=-1;Y.reset()}function e(a){a.preventDefault();d();c();ea.clear()}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);ea["delete"](a)}function g(a){var b=ea.get(a).program;a.program=void 0;void 0!==b&&va.releaseProgram(b)}function h(a,b){return Math.abs(b[0])-Math.abs(a[0])}function k(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.program&&b.material.program&&a.material.program!==b.material.program?a.material.program.id-
b.material.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function m(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function w(a,b,c,d,e){var f;c.transparent?(d=z,f=++Ka):(d=B,f=++C);f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=Z.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:Z.z,group:e},d.push(f))}function n(a){if(!oa.intersectsSphere(a))return!1;
var b=ba.numPlanes;if(0===b)return!0;var c=S.clippingPlanes,d=a.center;a=-a.radius;var e=0;do if(c[e].distanceToPoint(d)<a)return!1;while(++e!==b);return!0}function p(a,b){if(!1!==a.visible){if(0!==(a.layers.mask&b.layers.mask))if(a.isLight)K.push(a);else if(a.isSprite){var c;(c=!1===a.frustumCulled)||(na.center.set(0,0,0),na.radius=.7071067811865476,na.applyMatrix4(a.matrixWorld),c=!0===n(na));c&&P.push(a)}else if(a.isLensFlare)R.push(a);else if(a.isImmediateRenderObject)!0===S.sortObjects&&(Z.setFromMatrixPosition(a.matrixWorld),
Z.applyProjection(ra)),w(a,null,a.material,Z.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),(c=!1===a.frustumCulled)||(c=a.geometry,null===c.boundingSphere&&c.computeBoundingSphere(),na.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),c=!0===n(na)),c){var d=a.material;if(!0===d.visible)if(!0===S.sortObjects&&(Z.setFromMatrixPosition(a.matrixWorld),Z.applyProjection(ra)),c=qa.update(a),d.isMultiMaterial)for(var e=c.groups,f=d.materials,d=0,g=e.length;d<g;d++){var h=
e[d],k=f[h.materialIndex];!0===k.visible&&w(a,c,k,Z.z,h)}else w(a,c,d,Z.z,null)}c=a.children;d=0;for(g=c.length;d<g;d++)p(c[d],b)}}function r(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,m=void 0===d?g.material:d,g=g.group;h.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);h.onBeforeRender(S,b,c,k,m,g);if(h.isImmediateRenderObject){l(m);var p=t(c,b.fog,m,h);U="";h.render(function(a){S.renderBufferImmediate(a,
p,m)})}else S.renderBufferDirect(c,b.fog,k,m,h,g);h.onAfterRender(S,b,c,k,m,g)}}function l(a){2===a.side?Y.disable(A.CULL_FACE):Y.enable(A.CULL_FACE);Y.setFlipSided(1===a.side);!0===a.transparent?Y.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha):Y.setBlending(0);Y.setDepthFunc(a.depthFunc);Y.setDepthTest(a.depthTest);Y.setDepthWrite(a.depthWrite);Y.setColorWrite(a.colorWrite);Y.setPolygonOffset(a.polygonOffset,
a.polygonOffsetFactor,a.polygonOffsetUnits)}function t(a,b,c,d){da=0;var e=ea.get(c);pa&&(sa||a!==W)&&ba.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,a===W&&c.id===L);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsHash!==aa.hash?c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===ba.numPlanes&&e.numIntersection===ba.numIntersection||(c.needsUpdate=!0));if(c.needsUpdate){a:{var h=ea.get(c),k=va.getParameters(c,
aa,b,ba.numPlanes,ba.numIntersection,d),m=va.getProgramCode(c,k),p=h.program,n=!0;if(void 0===p)c.addEventListener("dispose",f);else if(p.code!==m)g(c);else if(void 0!==k.shaderID)break a;else n=!1;n&&(k.shaderID?(p=Gb[k.shaderID],h.__webglShader={name:c.type,uniforms:La.clone(p.uniforms),vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}):h.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},c.__webglShader=h.__webglShader,p=va.acquireProgram(c,
k,m),h.program=p,c.program=p);k=p.getAttributes();if(c.morphTargets)for(m=c.numSupportedMorphTargets=0;m<S.maxMorphTargets;m++)0<=k["morphTarget"+m]&&c.numSupportedMorphTargets++;if(c.morphNormals)for(m=c.numSupportedMorphNormals=0;m<S.maxMorphNormals;m++)0<=k["morphNormal"+m]&&c.numSupportedMorphNormals++;k=h.__webglShader.uniforms;if(!c.isShaderMaterial&&!c.isRawShaderMaterial||!0===c.clipping)h.numClippingPlanes=ba.numPlanes,h.numIntersection=ba.numIntersection,k.clippingPlanes=ba.uniform;h.fog=
b;h.lightsHash=aa.hash;c.lights&&(k.ambientLightColor.value=aa.ambient,k.directionalLights.value=aa.directional,k.spotLights.value=aa.spot,k.pointLights.value=aa.point,k.hemisphereLights.value=aa.hemi,k.directionalShadowMap.value=aa.directionalShadowMap,k.directionalShadowMatrix.value=aa.directionalShadowMatrix,k.spotShadowMap.value=aa.spotShadowMap,k.spotShadowMatrix.value=aa.spotShadowMatrix,k.pointShadowMap.value=aa.pointShadowMap,k.pointShadowMatrix.value=aa.pointShadowMatrix);m=h.program.getUniforms();
k=Ya.seqWithValue(m.seq,k);h.uniformsList=k}c.needsUpdate=!1}var w=!1,n=p=!1,h=e.program,k=h.getUniforms(),m=e.__webglShader.uniforms;h.id!==Q&&(A.useProgram(h.program),Q=h.id,n=p=w=!0);c.id!==L&&(L=c.id,p=!0);if(w||a!==W){k.set(A,a,"projectionMatrix");ia.logarithmicDepthBuffer&&k.setValue(A,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==W&&(W=a,n=p=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)w=k.map.cameraPosition,void 0!==w&&w.setValue(A,Z.setFromMatrixPosition(a.matrixWorld));
(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&k.setValue(A,"viewMatrix",a.matrixWorldInverse);k.set(A,S,"toneMappingExposure");k.set(A,S,"toneMappingWhitePoint")}c.skinning&&(k.setOptional(A,d,"bindMatrix"),k.setOptional(A,d,"bindMatrixInverse"),a=d.skeleton)&&(ia.floatVertexTextures&&a.useVertexTexture?(k.set(A,a,"boneTexture"),k.set(A,a,"boneTextureWidth"),k.set(A,a,"boneTextureHeight")):k.setOptional(A,a,"boneMatrices"));
if(p){c.lights&&(a=n,m.ambientLightColor.needsUpdate=a,m.directionalLights.needsUpdate=a,m.pointLights.needsUpdate=a,m.spotLights.needsUpdate=a,m.hemisphereLights.needsUpdate=a);b&&c.fog&&(m.fogColor.value=b.color,b.isFog?(m.fogNear.value=b.near,m.fogFar.value=b.far):b.isFogExp2&&(m.fogDensity.value=b.density));if(c.isMeshBasicMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshDepthMaterial){m.opacity.value=c.opacity;m.diffuse.value=c.color;c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
m.map.value=c.map;m.specularMap.value=c.specularMap;m.alphaMap.value=c.alphaMap;c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity);var r;c.map?r=c.map:c.specularMap?r=c.specularMap:c.displacementMap?r=c.displacementMap:c.normalMap?r=c.normalMap:c.bumpMap?r=c.bumpMap:c.roughnessMap?r=c.roughnessMap:c.metalnessMap?r=c.metalnessMap:c.alphaMap?r=c.alphaMap:c.emissiveMap&&(r=c.emissiveMap);void 0!==r&&(r.isWebGLRenderTarget&&(r=r.texture),b=r.offset,r=r.repeat,m.offsetRepeat.value.set(b.x,
b.y,r.x,r.y));m.envMap.value=c.envMap;m.flipEnvMap.value=c.envMap&&c.envMap.isCubeTexture?-1:1;m.reflectivity.value=c.reflectivity;m.refractionRatio.value=c.refractionRatio}c.isLineBasicMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity):c.isLineDashedMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity,m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale):c.isPointsMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity,m.size.value=c.size*
Qa,m.scale.value=.5*pc,m.map.value=c.map,null!==c.map&&(r=c.map.offset,c=c.map.repeat,m.offsetRepeat.value.set(r.x,r.y,c.x,c.y))):c.isMeshLambertMaterial?(c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap)):c.isMeshPhongMaterial?(m.specular.value=c.specular,m.shininess.value=Math.max(c.shininess,1E-4),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(m.emissiveMap.value=
c.emissiveMap),c.bumpMap&&(m.bumpMap.value=c.bumpMap,m.bumpScale.value=c.bumpScale),c.normalMap&&(m.normalMap.value=c.normalMap,m.normalScale.value.copy(c.normalScale)),c.displacementMap&&(m.displacementMap.value=c.displacementMap,m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias)):c.isMeshPhysicalMaterial?(m.clearCoat.value=c.clearCoat,m.clearCoatRoughness.value=c.clearCoatRoughness,D(m,c)):c.isMeshStandardMaterial?D(m,c):c.isMeshDepthMaterial?c.displacementMap&&
(m.displacementMap.value=c.displacementMap,m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias):c.isMeshNormalMaterial&&(m.opacity.value=c.opacity);Ya.upload(A,e.uniformsList,m,S)}k.set(A,d,"modelViewMatrix");k.set(A,d,"normalMatrix");k.setValue(A,"modelMatrix",d.matrixWorld);return h}function D(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);
b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function u(a){var b;
if(1E3===a)return A.REPEAT;if(1001===a)return A.CLAMP_TO_EDGE;if(1002===a)return A.MIRRORED_REPEAT;if(1003===a)return A.NEAREST;if(1004===a)return A.NEAREST_MIPMAP_NEAREST;if(1005===a)return A.NEAREST_MIPMAP_LINEAR;if(1006===a)return A.LINEAR;if(1007===a)return A.LINEAR_MIPMAP_NEAREST;if(1008===a)return A.LINEAR_MIPMAP_LINEAR;if(1009===a)return A.UNSIGNED_BYTE;if(1017===a)return A.UNSIGNED_SHORT_4_4_4_4;if(1018===a)return A.UNSIGNED_SHORT_5_5_5_1;if(1019===a)return A.UNSIGNED_SHORT_5_6_5;if(1010===
a)return A.BYTE;if(1011===a)return A.SHORT;if(1012===a)return A.UNSIGNED_SHORT;if(1013===a)return A.INT;if(1014===a)return A.UNSIGNED_INT;if(1015===a)return A.FLOAT;if(1016===a&&(b=ka.get("OES_texture_half_float"),null!==b))return b.HALF_FLOAT_OES;if(1021===a)return A.ALPHA;if(1022===a)return A.RGB;if(1023===a)return A.RGBA;if(1024===a)return A.LUMINANCE;if(1025===a)return A.LUMINANCE_ALPHA;if(1026===a)return A.DEPTH_COMPONENT;if(1027===a)return A.DEPTH_STENCIL;if(100===a)return A.FUNC_ADD;if(101===
a)return A.FUNC_SUBTRACT;if(102===a)return A.FUNC_REVERSE_SUBTRACT;if(200===a)return A.ZERO;if(201===a)return A.ONE;if(202===a)return A.SRC_COLOR;if(203===a)return A.ONE_MINUS_SRC_COLOR;if(204===a)return A.SRC_ALPHA;if(205===a)return A.ONE_MINUS_SRC_ALPHA;if(206===a)return A.DST_ALPHA;if(207===a)return A.ONE_MINUS_DST_ALPHA;if(208===a)return A.DST_COLOR;if(209===a)return A.ONE_MINUS_DST_COLOR;if(210===a)return A.SRC_ALPHA_SATURATE;if(2001===a||2002===a||2003===a||2004===a)if(b=ka.get("WEBGL_compressed_texture_s3tc"),
null!==b){if(2001===a)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(2002===a)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(2003===a)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(2004===a)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(2100===a||2101===a||2102===a||2103===a)if(b=ka.get("WEBGL_compressed_texture_pvrtc"),null!==b){if(2100===a)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(2101===a)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(2102===a)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(2103===a)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(2151===
a&&(b=ka.get("WEBGL_compressed_texture_etc1"),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if(103===a||104===a)if(b=ka.get("EXT_blend_minmax"),null!==b){if(103===a)return b.MIN_EXT;if(104===a)return b.MAX_EXT}return 1020===a&&(b=ka.get("WEBGL_depth_texture"),null!==b)?b.UNSIGNED_INT_24_8_WEBGL:0}console.log("THREE.WebGLRenderer","82");a=a||{};var v=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),I=void 0!==a.context?a.context:null,y=void 0!==a.alpha?a.alpha:
!1,E=void 0!==a.depth?a.depth:!0,H=void 0!==a.stencil?a.stencil:!0,F=void 0!==a.antialias?a.antialias:!1,M=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ca=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,K=[],B=[],C=-1,z=[],Ka=-1,N=new Float32Array(8),P=[],R=[];this.domElement=v;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=
this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var S=this,Q=null,V=null,T=null,L=-1,U="",W=null,X=new ga,fb=null,$a=new ga,da=0,Da=new O(0),Ra=0,Pa=v.width,pc=v.height,Qa=1,ha=new ga(0,0,Pa,pc),la=!1,fa=new ga(0,0,Pa,pc),oa=new nc,ba=new Bf,pa=!1,sa=!1,na=new Ca,ra=new J,Z=new q,aa={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],
spotShadowMatrix:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},ma={calls:0,vertices:0,faces:0,points:0};this.info={render:ma,memory:{geometries:0,textures:0},programs:null};var A;try{y={alpha:y,depth:E,stencil:H,antialias:F,premultipliedAlpha:M,preserveDrawingBuffer:ca};A=I||v.getContext("webgl",y)||v.getContext("experimental-webgl",y);if(null===A){if(null!==v.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";
}void 0===A.getShaderPrecisionFormat&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});v.addEventListener("webglcontextlost",e,!1)}catch(Cf){console.error("THREE.WebGLRenderer: "+Cf)}var ka=new Af(A);ka.get("WEBGL_depth_texture");ka.get("OES_texture_float");ka.get("OES_texture_float_linear");ka.get("OES_texture_half_float");ka.get("OES_texture_half_float_linear");ka.get("OES_standard_derivatives");ka.get("ANGLE_instanced_arrays");ka.get("OES_element_index_uint")&&
(G.MaxIndex=4294967296);var ia=new zf(A,ka,a),Y=new yf(A,ka,u),ea=new xf,ua=new wf(A,ka,Y,ea,ia,u,this.info),qa=new vf(A,ea,this.info),va=new tf(this,ia),za=new lf;this.info.programs=va.programs;var Ga=new kf(A,ka,ma),Ha=new jf(A,ka,ma),Ia=new Hb(-1,1,1,-1,0,1),wa=new Ea,Ba=new ya(new ib(2,2),new Ma({depthTest:!1,depthWrite:!1,fog:!1}));a=Gb.cube;var xa=new ya(new hb(5,5,5),new Fa({uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}));
c();this.context=A;this.capabilities=ia;this.extensions=ka;this.properties=ea;this.state=Y;var Ja=new pe(this,aa,qa,ia);this.shadowMap=Ja;var Na=new hf(this,P),Oa=new ff(this,R);this.getContext=function(){return A};this.getContextAttributes=function(){return A.getContextAttributes()};this.forceContextLoss=function(){ka.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){return ia.getMaxAnisotropy()};this.getPrecision=function(){return ia.precision};this.getPixelRatio=function(){return Qa};
this.setPixelRatio=function(a){void 0!==a&&(Qa=a,this.setSize(fa.z,fa.w,!1))};this.getSize=function(){return{width:Pa,height:pc}};this.setSize=function(a,b,c){Pa=a;pc=b;v.width=a*Qa;v.height=b*Qa;!1!==c&&(v.style.width=a+"px",v.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Y.viewport(fa.set(a,b,c,d))};this.setScissor=function(a,b,c,d){Y.scissor(ha.set(a,b,c,d))};this.setScissorTest=function(a){Y.setScissorTest(la=a)};this.getClearColor=function(){return Da};this.setClearColor=
function(a,c){Da.set(a);Ra=void 0!==c?c:1;b(Da.r,Da.g,Da.b,Ra)};this.getClearAlpha=function(){return Ra};this.setClearAlpha=function(a){Ra=a;b(Da.r,Da.g,Da.b,Ra)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=A.COLOR_BUFFER_BIT;if(void 0===b||b)d|=A.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=A.STENCIL_BUFFER_BIT;A.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,
b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=d;this.dispose=function(){z=[];Ka=-1;B=[];C=-1;v.removeEventListener("webglcontextlost",e,!1)};this.renderBufferImmediate=function(a,b,c){Y.initAttributes();var d=ea.get(a);a.hasPositions&&!d.position&&(d.position=A.createBuffer());a.hasNormals&&!d.normal&&(d.normal=A.createBuffer());a.hasUvs&&!d.uv&&(d.uv=A.createBuffer());a.hasColors&&!d.color&&(d.color=A.createBuffer());b=b.getAttributes();a.hasPositions&&(A.bindBuffer(A.ARRAY_BUFFER,
d.position),A.bufferData(A.ARRAY_BUFFER,a.positionArray,A.DYNAMIC_DRAW),Y.enableAttribute(b.position),A.vertexAttribPointer(b.position,3,A.FLOAT,!1,0,0));if(a.hasNormals){A.bindBuffer(A.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&1===c.shading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=m;g[e+3]=h;g[e+4]=k;g[e+5]=m;g[e+6]=h;g[e+7]=k;g[e+8]=m}A.bufferData(A.ARRAY_BUFFER,
a.normalArray,A.DYNAMIC_DRAW);Y.enableAttribute(b.normal);A.vertexAttribPointer(b.normal,3,A.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(A.bindBuffer(A.ARRAY_BUFFER,d.uv),A.bufferData(A.ARRAY_BUFFER,a.uvArray,A.DYNAMIC_DRAW),Y.enableAttribute(b.uv),A.vertexAttribPointer(b.uv,2,A.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(A.bindBuffer(A.ARRAY_BUFFER,d.color),A.bufferData(A.ARRAY_BUFFER,a.colorArray,A.DYNAMIC_DRAW),Y.enableAttribute(b.color),A.vertexAttribPointer(b.color,3,A.FLOAT,!1,0,0));Y.disableUnusedAttributes();
A.drawArrays(A.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){l(d);var g=t(a,b,d,e),k=!1;a=c.id+"_"+g.id+"_"+d.wireframe;a!==U&&(U=a,k=!0);b=e.morphTargetInfluences;if(void 0!==b){var m=[];a=0;for(var p=b.length;a<p;a++)k=b[a],m.push([k,a]);m.sort(h);8<m.length&&(m.length=8);var n=c.morphAttributes;a=0;for(p=m.length;a<p;a++)k=m[a],N[a]=k[0],0!==k[0]?(b=k[1],!0===d.morphTargets&&n.position&&c.addAttribute("morphTarget"+a,n.position[b]),!0===d.morphNormals&&n.normal&&
c.addAttribute("morphNormal"+a,n.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+a),!0===d.morphNormals&&c.removeAttribute("morphNormal"+a));a=m.length;for(b=N.length;a<b;a++)N[a]=0;g.getUniforms().setValue(A,"morphTargetInfluences",N);k=!0}b=c.index;p=c.attributes.position;m=1;!0===d.wireframe&&(b=qa.getWireframeAttribute(c),m=2);null!==b?(a=Ha,a.setIndex(b)):a=Ga;if(k){a:{var k=void 0,w;if(c&&c.isInstancedBufferGeometry&&(w=ka.get("ANGLE_instanced_arrays"),null===w)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
break a}void 0===k&&(k=0);Y.initAttributes();var n=c.attributes,g=g.getAttributes(),r=d.defaultAttributeValues,v;for(v in g){var q=g[v];if(0<=q){var u=n[v];if(void 0!==u){var y=A.FLOAT,D=u.array,H=u.normalized;D instanceof Float32Array?y=A.FLOAT:D instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):D instanceof Uint16Array?y=A.UNSIGNED_SHORT:D instanceof Int16Array?y=A.SHORT:D instanceof Uint32Array?y=A.UNSIGNED_INT:D instanceof Int32Array?y=A.INT:D instanceof Int8Array?
y=A.BYTE:D instanceof Uint8Array&&(y=A.UNSIGNED_BYTE);var D=u.itemSize,F=qa.getAttributeBuffer(u);if(u.isInterleavedBufferAttribute){var I=u.data,E=I.stride,u=u.offset;I&&I.isInstancedInterleavedBuffer?(Y.enableAttributeAndDivisor(q,I.meshPerAttribute,w),void 0===c.maxInstancedCount&&(c.maxInstancedCount=I.meshPerAttribute*I.count)):Y.enableAttribute(q);A.bindBuffer(A.ARRAY_BUFFER,F);A.vertexAttribPointer(q,D,y,H,E*I.array.BYTES_PER_ELEMENT,(k*E+u)*I.array.BYTES_PER_ELEMENT)}else u.isInstancedBufferAttribute?
(Y.enableAttributeAndDivisor(q,u.meshPerAttribute,w),void 0===c.maxInstancedCount&&(c.maxInstancedCount=u.meshPerAttribute*u.count)):Y.enableAttribute(q),A.bindBuffer(A.ARRAY_BUFFER,F),A.vertexAttribPointer(q,D,y,H,0,k*D*u.array.BYTES_PER_ELEMENT)}else if(void 0!==r&&(y=r[v],void 0!==y))switch(y.length){case 2:A.vertexAttrib2fv(q,y);break;case 3:A.vertexAttrib3fv(q,y);break;case 4:A.vertexAttrib4fv(q,y);break;default:A.vertexAttrib1fv(q,y)}}}Y.disableUnusedAttributes()}null!==b&&A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,
qa.getAttributeBuffer(b))}w=0;null!==b?w=b.count:void 0!==p&&(w=p.count);b=c.drawRange.start*m;p=null!==f?f.start*m:0;v=Math.max(b,p);f=Math.max(0,Math.min(w,b+c.drawRange.count*m,p+(null!==f?f.count*m:Infinity))-1-v+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)Y.setLineWidth(d.wireframeLinewidth*(null===V?Qa:1)),a.setMode(A.LINES);else switch(e.drawMode){case 0:a.setMode(A.TRIANGLES);break;case 1:a.setMode(A.TRIANGLE_STRIP);break;case 2:a.setMode(A.TRIANGLE_FAN)}else e.isLine?(d=d.linewidth,void 0===
d&&(d=1),Y.setLineWidth(d*(null===V?Qa:1)),e.isLineSegments?a.setMode(A.LINES):a.setMode(A.LINE_STRIP)):e.isPoints&&a.setMode(A.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,v,f):a.render(v,f)}};this.render=function(a,c,d,e){if(void 0!==c&&!0!==c.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{U="";L=-1;W=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===c.parent&&c.updateMatrixWorld();c.matrixWorldInverse.getInverse(c.matrixWorld);
ra.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);oa.setFromMatrix(ra);K.length=0;Ka=C=-1;P.length=0;R.length=0;sa=this.localClippingEnabled;pa=ba.init(this.clippingPlanes,sa,c);p(a,c);B.length=C+1;z.length=Ka+1;!0===S.sortObjects&&(B.sort(k),z.sort(m));pa&&ba.beginShadows();for(var f=K,g=0,h=0,n=f.length;h<n;h++){var w=f[h];w.castShadow&&(aa.shadows[g++]=w)}aa.shadows.length=g;Ja.render(a,c);for(var f=K,l=w=0,x=0,t,v,q,u,y=c.matrixWorldInverse,D=0,H=0,F=0,I=0,g=0,h=f.length;g<h;g++)if(n=
f[g],t=n.color,v=n.intensity,q=n.distance,u=n.shadow&&n.shadow.map?n.shadow.map.texture:null,n.isAmbientLight)w+=t.r*v,l+=t.g*v,x+=t.b*v;else if(n.isDirectionalLight){var E=za.get(n);E.color.copy(n.color).multiplyScalar(n.intensity);E.direction.setFromMatrixPosition(n.matrixWorld);Z.setFromMatrixPosition(n.target.matrixWorld);E.direction.sub(Z);E.direction.transformDirection(y);if(E.shadow=n.castShadow)E.shadowBias=n.shadow.bias,E.shadowRadius=n.shadow.radius,E.shadowMapSize=n.shadow.mapSize;aa.directionalShadowMap[D]=
u;aa.directionalShadowMatrix[D]=n.shadow.matrix;aa.directional[D++]=E}else if(n.isSpotLight){E=za.get(n);E.position.setFromMatrixPosition(n.matrixWorld);E.position.applyMatrix4(y);E.color.copy(t).multiplyScalar(v);E.distance=q;E.direction.setFromMatrixPosition(n.matrixWorld);Z.setFromMatrixPosition(n.target.matrixWorld);E.direction.sub(Z);E.direction.transformDirection(y);E.coneCos=Math.cos(n.angle);E.penumbraCos=Math.cos(n.angle*(1-n.penumbra));E.decay=0===n.distance?0:n.decay;if(E.shadow=n.castShadow)E.shadowBias=
n.shadow.bias,E.shadowRadius=n.shadow.radius,E.shadowMapSize=n.shadow.mapSize;aa.spotShadowMap[F]=u;aa.spotShadowMatrix[F]=n.shadow.matrix;aa.spot[F++]=E}else if(n.isPointLight){E=za.get(n);E.position.setFromMatrixPosition(n.matrixWorld);E.position.applyMatrix4(y);E.color.copy(n.color).multiplyScalar(n.intensity);E.distance=n.distance;E.decay=0===n.distance?0:n.decay;if(E.shadow=n.castShadow)E.shadowBias=n.shadow.bias,E.shadowRadius=n.shadow.radius,E.shadowMapSize=n.shadow.mapSize;aa.pointShadowMap[H]=
u;void 0===aa.pointShadowMatrix[H]&&(aa.pointShadowMatrix[H]=new J);Z.setFromMatrixPosition(n.matrixWorld).negate();aa.pointShadowMatrix[H].identity().setPosition(Z);aa.point[H++]=E}else n.isHemisphereLight&&(E=za.get(n),E.direction.setFromMatrixPosition(n.matrixWorld),E.direction.transformDirection(y),E.direction.normalize(),E.skyColor.copy(n.color).multiplyScalar(v),E.groundColor.copy(n.groundColor).multiplyScalar(v),aa.hemi[I++]=E);aa.ambient[0]=w;aa.ambient[1]=l;aa.ambient[2]=x;aa.directional.length=
D;aa.spot.length=F;aa.point.length=H;aa.hemi.length=I;aa.hash=D+","+H+","+F+","+I+","+aa.shadows.length;pa&&ba.endShadows();ma.calls=0;ma.vertices=0;ma.faces=0;ma.points=0;void 0===d&&(d=null);this.setRenderTarget(d);f=a.background;null===f?b(Da.r,Da.g,Da.b,Ra):f&&f.isColor&&(b(f.r,f.g,f.b,1),e=!0);(this.autoClear||e)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);f&&f.isCubeTexture?(wa.projectionMatrix.copy(c.projectionMatrix),wa.matrixWorld.extractRotation(c.matrixWorld),
wa.matrixWorldInverse.getInverse(wa.matrixWorld),xa.material.uniforms.tCube.value=f,xa.modelViewMatrix.multiplyMatrices(wa.matrixWorldInverse,xa.matrixWorld),qa.update(xa),S.renderBufferDirect(wa,null,xa.geometry,xa.material,xa,null)):f&&f.isTexture&&(Ba.material.map=f,qa.update(Ba),S.renderBufferDirect(Ia,null,Ba.geometry,Ba.material,Ba,null));a.overrideMaterial?(e=a.overrideMaterial,r(B,a,c,e),r(z,a,c,e)):(Y.setBlending(0),r(B,a,c),r(z,a,c));Na.render(a,c);Oa.render(a,c,$a);d&&ua.updateRenderTargetMipmap(d);
Y.setDepthTest(!0);Y.setDepthWrite(!0);Y.setColorWrite(!0)}};this.setFaceCulling=function(a,b){Y.setCullFace(a);Y.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=da;a>=ia.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+ia.maxTextures);da+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
a=!0),b=b.texture);ua.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);ua.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&
6===b.image.length?ua.setTextureCube(b,c):ua.setTextureCubeDynamic(b,c)}}();this.getCurrentRenderTarget=function(){return V};this.setRenderTarget=function(a){(V=a)&&void 0===ea.get(a).__webglFramebuffer&&ua.setupRenderTarget(a);var b=a&&a.isWebGLRenderTargetCube,c;a?(c=ea.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,X.copy(a.scissor),fb=a.scissorTest,$a.copy(a.viewport)):(c=null,X.copy(ha).multiplyScalar(Qa),fb=la,$a.copy(fa).multiplyScalar(Qa));T!==c&&(A.bindFramebuffer(A.FRAMEBUFFER,
c),T=c);Y.scissor(X);Y.setScissorTest(fb);Y.viewport($a);b&&(b=ea.get(a.texture),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!1===(a&&a.isWebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else{var g=ea.get(a).__webglFramebuffer;if(g){var h=!1;g!==T&&(A.bindFramebuffer(A.FRAMEBUFFER,
g),h=!0);try{var k=a.texture,m=k.format,n=k.type;1023!==m&&u(m)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===n||u(n)===A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ka.get("OES_texture_float")||ka.get("WEBGL_color_buffer_float"))||1016===n&&ka.get("EXT_color_buffer_half_float")?A.checkFramebufferStatus(A.FRAMEBUFFER)===A.FRAMEBUFFER_COMPLETE?0<=b&&
b<=a.width-d&&0<=c&&c<=a.height-e&&A.readPixels(b,c,d,e,u(m),u(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&A.bindFramebuffer(A.FRAMEBUFFER,T)}}}}}function Ib(a,b){this.name="";this.color=new O(a);this.density=void 0!==b?b:2.5E-4}function Jb(a,b,c){this.name="";this.color=
new O(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function jb(){z.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function Ed(a,b,c,d,e){z.call(this);this.lensFlares=[];this.positionScreen=new q;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)}function kb(a){U.call(this);this.type="SpriteMaterial";this.color=new O(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a)}function qc(a){z.call(this);
this.type="Sprite";this.material=void 0!==a?a:new kb}function rc(){z.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function lb(a,b,c,d,e,f,g,h,k,m,w,n){da.call(this,null,f,g,h,k,m,d,e,w,n);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1}function bd(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new J;a=a||[];this.bones=a.slice(0);
this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=T.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new lb(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,1023,1015)):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),
this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new J)}function cd(a){z.call(this);this.type="Bone";this.skin=a}function dd(a,b,c){ya.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new J;this.bindMatrixInverse=new J;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],b=new cd(this),a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),
void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new bd(a,void 0,c),this.matrixWorld)}function oa(a){U.call(this);this.type="LineBasicMaterial";this.color=new O(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function Ta(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
new la(a,b);z.call(this);this.type="Line";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new oa({color:16777215*Math.random()})}function la(a,b){Ta.call(this,a,b);this.type="LineSegments"}function xa(a){U.call(this);this.type="PointsMaterial";this.color=new O(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Kb(a,b){z.call(this);this.type="Points";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new xa({color:16777215*Math.random()})}
function sc(){z.call(this);this.type="Group"}function ed(a,b,c,d,e,f,g,h,k){function m(){requestAnimationFrame(m);a.readyState>=a.HAVE_CURRENT_DATA&&(w.needsUpdate=!0)}da.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var w=this;m()}function Lb(a,b,c,d,e,f,g,h,k,m,w,n){da.call(this,null,f,g,h,k,m,d,e,w,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function fd(a,b,c,d,e,f,g,h,k){da.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0}function tc(a,b,c,d,e,f,g,
h,k,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");da.call(this,null,d,e,f,g,h,m,c,k);this.image={width:a,height:b};this.type=void 0!==c?c:1012;this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Mb(a){function b(a,b){return a-b}G.call(this);var c=[0,0],d={},e=["a","b","c"];if(a&&a.isGeometry){var f=a.vertices,g=a.faces,h=0,k=new Uint32Array(6*g.length);
a=0;for(var m=g.length;a<m;a++)for(var w=g[a],n=0;3>n;n++){c[0]=w[e[n]];c[1]=w[e[(n+1)%3]];c.sort(b);var p=c.toString();void 0===d[p]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[p]=!0,h++)}c=new Float32Array(6*h);a=0;for(m=h;a<m;a++)for(n=0;2>n;n++)d=f[k[2*a+n]],h=6*a+3*n,c[h+0]=d.x,c[h+1]=d.y,c[h+2]=d.z;this.addAttribute("position",new C(c,3))}else if(a&&a.isBufferGeometry){if(null!==a.index){m=a.index.array;f=a.attributes.position;e=a.groups;h=0;0===e.length&&a.addGroup(0,m.length);k=new Uint32Array(2*m.length);
g=0;for(w=e.length;g<w;++g){a=e[g];n=a.start;p=a.count;a=n;for(var r=n+p;a<r;a+=3)for(n=0;3>n;n++)c[0]=m[a+n],c[1]=m[a+(n+1)%3],c.sort(b),p=c.toString(),void 0===d[p]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[p]=!0,h++)}c=new Float32Array(6*h);a=0;for(m=h;a<m;a++)for(n=0;2>n;n++)h=6*a+3*n,d=k[2*a+n],c[h+0]=f.getX(d),c[h+1]=f.getY(d),c[h+2]=f.getZ(d)}else for(f=a.attributes.position.array,h=f.length/3,k=h/3,c=new Float32Array(6*h),a=0,m=k;a<m;a++)for(n=0;3>n;n++)h=18*a+6*n,k=9*a+3*n,c[h+0]=f[k],c[h+1]=f[k+1],
c[h+2]=f[k+2],d=9*a+(n+1)%3*3,c[h+3]=f[d],c[h+4]=f[d+1],c[h+5]=f[d+2];this.addAttribute("position",new C(c,3))}}function Nb(a,b,c){G.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f,g,h,k,m,w=b+1;for(f=0;f<=c;f++)for(m=f/c,g=0;g<=b;g++)k=g/b,h=a(k,m),d.push(h.x,h.y,h.z),e.push(k,m);a=[];var n;for(f=0;f<c;f++)for(g=0;g<b;g++)h=f*w+g,k=f*w+g+1,m=(f+1)*w+g+1,n=(f+1)*w+g,a.push(h,k,n),a.push(k,m,n);this.setIndex((65535<a.length?$c:Zc)(a,1));this.addAttribute("position",
ha(d,3));this.addAttribute("uv",ha(e,2));this.computeVertexNormals()}function uc(a,b,c){Q.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Nb(a,b,c));this.mergeVertices()}function ua(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){var d=3*b;c.x=a[d+0];c.y=a[d+1];c.z=a[d+2]}function g(a,b,c,d){0>d&&1===a.x&&(k[b]=a.x-1);0===c.x&&0===c.z&&(k[b]=d/2/Math.PI+.5)}G.call(this);this.type="PolyhedronBufferGeometry";this.parameters=
{vertices:a,indices:b,radius:c,detail:d};c=c||1;var h=[],k=[];(function(a){for(var c=new q,d=new q,g=new q,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var k=c,l=d,D=g,u=Math.pow(2,a),v=[],I,y;for(I=0;I<=u;I++){v[I]=[];var E=k.clone().lerp(D,I/u),H=l.clone().lerp(D,I/u),F=u-I;for(y=0;y<=F;y++)v[I][y]=0===y&&I===u?E:E.clone().lerp(H,y/F)}for(I=0;I<u;I++)for(y=0;y<2*(u-I)-1;y++)k=Math.floor(y/2),0===y%2?(e(v[I][k+1]),e(v[I+1][k]),e(v[I][k])):(e(v[I][k+1]),e(v[I+1][k+1]),e(v[I+1][k]))}})(d||
0);(function(a){for(var b=new q,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new q,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],k.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));for(var a=new q,b=new q,c=new q,d=new q,e=new B,f=new B,l=new B,D=0,u=0;D<h.length;D+=9,u+=6){a.set(h[D+0],h[D+1],h[D+2]);b.set(h[D+3],h[D+4],h[D+5]);c.set(h[D+6],h[D+
7],h[D+8]);e.set(k[u+0],k[u+1]);f.set(k[u+2],k[u+3]);l.set(k[u+4],k[u+5]);d.copy(a).add(b).add(c).divideScalar(3);var v=Math.atan2(d.z,-d.x);g(e,u+0,a,v);g(f,u+2,b,v);g(l,u+4,c,v)}for(a=0;a<k.length;a+=6)b=k[a+0],c=k[a+2],d=k[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(k[a+0]+=1),.2>c&&(k[a+2]+=1),.2>d&&(k[a+4]+=1))})();this.addAttribute("position",ha(h,3));this.addAttribute("normal",ha(h.slice(),3));this.addAttribute("uv",ha(k,2));this.normalizeNormals();this.boundingSphere=new Ca(new q,
c)}function Ob(a,b){ua.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function vc(a,b){Q.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Ob(a,b));this.mergeVertices()}function Pb(a,b){ua.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function wc(a,b){Q.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pb(a,b));this.mergeVertices()}function Qb(a,b){var c=(1+Math.sqrt(5))/2;ua.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function xc(a,b){Q.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qb(a,b));this.mergeVertices()}function Rb(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;ua.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,
6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function yc(a,b){Q.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rb(a,b));this.mergeVertices()}function zc(a,b,c,d){Q.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};
this.fromBufferGeometry(new ua(a,b,c,d));this.mergeVertices()}function Sb(a,b,c,d,e){function f(e){var f=a.getPointAt(e/b),m=g.normals[e];e=g.binormals[e];for(n=0;n<=d;n++){var w=n/d*Math.PI*2,l=Math.sin(w),w=-Math.cos(w);k.x=w*m.x+l*e.x;k.y=w*m.y+l*e.y;k.z=w*m.z+l*e.z;k.normalize();r.push(k.x,k.y,k.z);h.x=f.x+c*k.x;h.y=f.y+c*k.y;h.z=f.z+c*k.z;p.push(h.x,h.y,h.z)}}G.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||
1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new q,k=new q,m=new B,w,n,p=[],r=[],l=[],t=[];for(w=0;w<b;w++)f(w);f(!1===e?b:0);for(w=0;w<=b;w++)for(n=0;n<=d;n++)m.x=w/b,m.y=n/d,l.push(m.x,m.y);(function(){for(n=1;n<=b;n++)for(w=1;w<=d;w++){var a=(d+1)*n+(w-1),c=(d+1)*n+w,e=(d+1)*(n-1)+w;t.push((d+1)*(n-1)+(w-1),a,e);t.push(a,c,e)}})();this.setIndex((65535<t.length?$c:Zc)(t,1));this.addAttribute("position",ha(p,3));
this.addAttribute("normal",ha(r,3));this.addAttribute("uv",ha(l,2))}function Ac(a,b,c,d,e,f){Q.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Sb(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Tb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);
e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}G.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=(d+1)*(c+1),k=d*c*6,k=new C(new (65535<k?Uint32Array:Uint16Array)(k),1),m=new C(new Float32Array(3*h),3),w=new C(new Float32Array(3*h),3),h=new C(new Float32Array(2*h),2),n,p,r=0,l=0,t=new q,D=new q,u=new B,v=new q,I=new q,y=new q,E=new q,
H=new q;for(n=0;n<=c;++n)for(p=n/c*e*Math.PI*2,g(p,e,f,a,v),g(p+.01,e,f,a,I),E.subVectors(I,v),H.addVectors(I,v),y.crossVectors(E,H),H.crossVectors(y,E),y.normalize(),H.normalize(),p=0;p<=d;++p){var F=p/d*Math.PI*2,M=-b*Math.cos(F),F=b*Math.sin(F);t.x=v.x+(M*H.x+F*y.x);t.y=v.y+(M*H.y+F*y.y);t.z=v.z+(M*H.z+F*y.z);m.setXYZ(r,t.x,t.y,t.z);D.subVectors(t,v).normalize();w.setXYZ(r,D.x,D.y,D.z);u.x=n/c;u.y=p/d;h.setXY(r,u.x,u.y);r++}for(p=1;p<=c;p++)for(n=1;n<=d;n++)a=(d+1)*p+(n-1),b=(d+1)*p+n,e=(d+1)*
(p-1)+n,k.setX(l,(d+1)*(p-1)+(n-1)),l++,k.setX(l,a),l++,k.setX(l,e),l++,k.setX(l,a),l++,k.setX(l,b),l++,k.setX(l,e),l++;this.setIndex(k);this.addAttribute("position",m);this.addAttribute("normal",w);this.addAttribute("uv",h)}function Bc(a,b,c,d,e,f,g){Q.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Tb(a,
b,c,d,e,f));this.mergeVertices()}function Ub(a,b,c,d,e){G.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=(c+1)*(d+1),g=c*d*6,g=new (65535<g?Uint32Array:Uint16Array)(g),h=new Float32Array(3*f),k=new Float32Array(3*f),f=new Float32Array(2*f),m=0,w=0,n=0,p=new q,r=new q,l=new q,t,D;for(t=0;t<=c;t++)for(D=0;D<=d;D++){var u=D/d*e,v=t/c*Math.PI*2;r.x=(a+b*Math.cos(v))*
Math.cos(u);r.y=(a+b*Math.cos(v))*Math.sin(u);r.z=b*Math.sin(v);h[m]=r.x;h[m+1]=r.y;h[m+2]=r.z;p.x=a*Math.cos(u);p.y=a*Math.sin(u);l.subVectors(r,p).normalize();k[m]=l.x;k[m+1]=l.y;k[m+2]=l.z;f[w]=D/d;f[w+1]=t/c;m+=3;w+=2}for(t=1;t<=c;t++)for(D=1;D<=d;D++)a=(d+1)*(t-1)+D-1,b=(d+1)*(t-1)+D,e=(d+1)*t+D,g[n]=(d+1)*t+D-1,g[n+1]=a,g[n+2]=e,g[n+3]=a,g[n+4]=b,g[n+5]=e,n+=6;this.setIndex(new C(g,1));this.addAttribute("position",new C(h,3));this.addAttribute("normal",new C(k,3));this.addAttribute("uv",new C(f,
2))}function Cc(a,b,c,d,e){Q.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Ub(a,b,c,d,e))}function za(a,b){"undefined"!==typeof a&&(Q.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())}function Dc(a,b){b=b||{};var c=b.font;if(!1===(c&&c.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Q;
c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);za.call(this,c,b);this.type="TextGeometry"}function mb(a,b,c,d,e,f,g){G.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||
6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;for(var h=f+g,k=(b+1)*(c+1),m=new C(new Float32Array(3*k),3),w=new C(new Float32Array(3*k),3),k=new C(new Float32Array(2*k),2),n=0,p=[],l=new q,x=0;x<=c;x++){for(var t=[],D=x/c,u=0;u<=b;u++){var v=u/b,I=-a*Math.cos(d+v*e)*Math.sin(f+D*g),y=a*Math.cos(f+D*g),E=a*Math.sin(d+v*e)*Math.sin(f+D*g);l.set(I,y,E).normalize();m.setXYZ(n,I,y,E);w.setXYZ(n,l.x,l.y,l.z);k.setXY(n,v,1-D);t.push(n);n++}p.push(t)}d=[];for(x=0;x<
c;x++)for(u=0;u<b;u++)e=p[x][u+1],g=p[x][u],n=p[x+1][u],l=p[x+1][u+1],(0!==x||0<f)&&d.push(e,g,l),(x!==c-1||h<Math.PI)&&d.push(g,n,l);this.setIndex(new (65535<m.count?$c:Zc)(d,1));this.addAttribute("position",m);this.addAttribute("normal",w);this.addAttribute("uv",k);this.boundingSphere=new Ca(new q,a)}function Vb(a,b,c,d,e,f,g){Q.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new mb(a,
b,c,d,e,f,g))}function Wb(a,b,c,d,e,f){G.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=(c+1)*(d+1),h=c*d*6,h=new C(new (65535<h?Uint32Array:Uint16Array)(h),1),k=new C(new Float32Array(3*g),3),m=new C(new Float32Array(3*g),3),g=new C(new Float32Array(2*g),2),w=0,n=0,p,l=a,x=(b-a)/
d,t=new q,D=new B,u;for(a=0;a<=d;a++){for(u=0;u<=c;u++)p=e+u/c*f,t.x=l*Math.cos(p),t.y=l*Math.sin(p),k.setXYZ(w,t.x,t.y,t.z),m.setXYZ(w,0,0,1),D.x=(t.x/b+1)/2,D.y=(t.y/b+1)/2,g.setXY(w,D.x,D.y),w++;l+=x}for(a=0;a<d;a++)for(b=a*(c+1),u=0;u<c;u++)e=p=u+b,f=p+c+1,w=p+c+2,p+=1,h.setX(n,e),n++,h.setX(n,f),n++,h.setX(n,w),n++,h.setX(n,e),n++,h.setX(n,w),n++,h.setX(n,p),n++;this.setIndex(h);this.addAttribute("position",k);this.addAttribute("normal",m);this.addAttribute("uv",g)}function Ec(a,b,c,d,e,f){Q.call(this);
this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Wb(a,b,c,d,e,f))}function Fc(a,b,c,d){Q.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new ib(a,b,c,d))}function Xb(a,b,c,d){G.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||
2*Math.PI;d=T.clamp(d,0,2*Math.PI);for(var e=(b+1)*a.length,f=b*a.length*6,g=new C(new (65535<f?Uint32Array:Uint16Array)(f),1),h=new C(new Float32Array(3*e),3),k=new C(new Float32Array(2*e),2),m=0,w=0,n=1/b,p=new q,l=new B,e=0;e<=b;e++)for(var f=c+e*n*d,x=Math.sin(f),t=Math.cos(f),f=0;f<=a.length-1;f++)p.x=a[f].x*x,p.y=a[f].y,p.z=a[f].x*t,h.setXYZ(m,p.x,p.y,p.z),l.x=e/b,l.y=f/(a.length-1),k.setXY(m,l.x,l.y),m++;for(e=0;e<b;e++)for(f=0;f<a.length-1;f++)c=f+e*a.length,m=c+a.length,n=c+a.length+1,p=
c+1,g.setX(w,c),w++,g.setX(w,m),w++,g.setX(w,p),w++,g.setX(w,m),w++,g.setX(w,n),w++,g.setX(w,p),w++;this.setIndex(g);this.addAttribute("position",h);this.addAttribute("uv",k);this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,g=new q,h=new q,k=new q,c=b*a.length*3,f=e=0;e<a.length;e++,f+=3)g.x=d[f+0],g.y=d[f+1],g.z=d[f+2],h.x=d[c+f+0],h.y=d[c+f+1],h.z=d[c+f+2],k.addVectors(g,h).normalize(),d[f+0]=d[c+f+0]=k.x,d[f+1]=d[c+f+1]=k.y,d[f+2]=d[c+f+2]=k.z}function Gc(a,b,c,d){Q.call(this);
this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Xb(a,b,c,d));this.mergeVertices()}function cb(a,b){Q.call(this);this.type="ShapeGeometry";!1===Array.isArray(a)&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()}function Yb(a,b){function c(a,b){return a-b}G.call(this);var d=Math.cos(T.DEG2RAD*(void 0!==b?b:1)),e=[0,0],f={},g=["a","b","c"],h;a&&a.isBufferGeometry?(h=new Q,h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();
h.computeFaceNormals();var k=h.vertices;h=h.faces;for(var m=0,w=h.length;m<w;m++)for(var n=h[m],p=0;3>p;p++){e[0]=n[g[p]];e[1]=n[g[(p+1)%3]];e.sort(c);var l=e.toString();void 0===f[l]?f[l]={vert1:e[0],vert2:e[1],face1:m,face2:void 0}:f[l].face2=m}e=[];for(l in f)if(g=f[l],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=d)m=k[g.vert1],e.push(m.x),e.push(m.y),e.push(m.z),m=k[g.vert2],e.push(m.x),e.push(m.y),e.push(m.z);this.addAttribute("position",new C(new Float32Array(e),3))}function Ua(a,
b,c,d,e,f,g,h){function k(c){var e,f,k,n=new B,p=new q,l=0,w=!0===c?a:b,I=!0===c?1:-1;f=u;for(e=1;e<=d;e++)x.setXYZ(u,0,y*I,0),t.setXYZ(u,0,I,0),n.x=.5,n.y=.5,D.setXY(u,n.x,n.y),u++;k=u;for(e=0;e<=d;e++){var z=e/d*h+g,C=Math.cos(z),z=Math.sin(z);p.x=w*z;p.y=y*I;p.z=w*C;x.setXYZ(u,p.x,p.y,p.z);t.setXYZ(u,0,I,0);n.x=.5*C+.5;n.y=.5*z*I+.5;D.setXY(u,n.x,n.y);u++}for(e=0;e<d;e++)n=f+e,p=k+e,!0===c?(r.setX(v,p),v++,r.setX(v,p+1)):(r.setX(v,p+1),v++,r.setX(v,p)),v++,r.setX(v,n),v++,l+=3;m.addGroup(E,l,!0===
c?1:2);E+=l}G.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var l=0;!1===f&&(0<a&&l++,0<b&&l++);var n=function(){var a=(d+1)*(e+1);!1===f&&(a+=(d+1)*l+d*l);return a}(),p=function(){var a=d*e*6;!1===f&&(a+=d*l*3);
return a}(),r=new C(new (65535<p?Uint32Array:Uint16Array)(p),1),x=new C(new Float32Array(3*n),3),t=new C(new Float32Array(3*n),3),D=new C(new Float32Array(2*n),2),u=0,v=0,I=[],y=c/2,E=0;(function(){var f,k,n=new q,p=new q,l=0,w=(b-a)/c;for(k=0;k<=e;k++){var B=[],z=k/e,C=z*(b-a)+a;for(f=0;f<=d;f++){var N=f/d,P=N*h+g,R=Math.sin(P),P=Math.cos(P);p.x=C*R;p.y=-z*c+y;p.z=C*P;x.setXYZ(u,p.x,p.y,p.z);n.set(R,w,P).normalize();t.setXYZ(u,n.x,n.y,n.z);D.setXY(u,N,1-z);B.push(u);u++}I.push(B)}for(f=0;f<d;f++)for(k=
0;k<e;k++)n=I[k+1][f],p=I[k+1][f+1],w=I[k][f+1],r.setX(v,I[k][f]),v++,r.setX(v,n),v++,r.setX(v,w),v++,r.setX(v,n),v++,r.setX(v,p),v++,r.setX(v,w),v++,l+=6;m.addGroup(E,l,0);E+=l})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(r);this.addAttribute("position",x);this.addAttribute("normal",t);this.addAttribute("uv",D)}function nb(a,b,c,d,e,f,g,h){Q.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,
thetaLength:h};this.fromBufferGeometry(new Ua(a,b,c,d,e,f,g,h));this.mergeVertices()}function Hc(a,b,c,d,e,f,g){nb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Ic(a,b,c,d,e,f,g){Ua.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Zb(a,b,c,d){G.call(this);
this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,f=new Float32Array(3*e),g=new Float32Array(3*e),e=new Float32Array(2*e);g[2]=1;e[0]=.5;e[1]=.5;for(var h=0,k=3,m=2;h<=b;h++,k+=3,m+=2){var l=c+h/b*d;f[k]=a*Math.cos(l);f[k+1]=a*Math.sin(l);g[k+2]=1;e[m]=(f[k]/a+1)/2;e[m+1]=(f[k+1]/a+1)/2}c=[];for(k=1;k<=b;k++)c.push(k,k+1,0);this.setIndex(new C(new Uint16Array(c),
1));this.addAttribute("position",new C(f,3));this.addAttribute("normal",new C(g,3));this.addAttribute("uv",new C(e,2));this.boundingSphere=new Ca(new q,a)}function Jc(a,b,c,d){Q.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new Zb(a,b,c,d))}function ob(a,b,c,d,e,f){Q.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new hb(a,
b,c,d,e,f));this.mergeVertices()}function $b(){Fa.call(this,{uniforms:La.merge([W.lights,{opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag});this.transparent=this.lights=!0;Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}})}function ac(a){Fa.call(this,a);this.type="RawShaderMaterial"}function Kc(a){this.uuid=T.generateUUID();this.type="MultiMaterial";this.materials=a instanceof
Array?a:[];this.visible=!0}function Oa(a){U.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new O(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new O(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new B(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=
this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function pb(a){Oa.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function db(a){U.call(this);this.type="MeshPhongMaterial";this.color=
new O(16777215);this.specular=new O(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new O(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new B(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;
this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function qb(a){U.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=this.lights=this.fog=!1;this.setValues(a)}function rb(a){U.call(this);this.type="MeshLambertMaterial";this.color=new O(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=
new O(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function sb(a){U.call(this);this.type="LineDashedMaterial";this.color=new O(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.lights=!1;this.setValues(a)}
function Fd(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}}function Ja(a){this.manager=void 0!==a?a:Ga}function we(a){this.manager=void 0!==a?a:Ga;this._parser=null}function Gd(a){this.manager=
void 0!==a?a:Ga;this._parser=null}function Lc(a){this.manager=void 0!==a?a:Ga}function Hd(a){this.manager=void 0!==a?a:Ga}function gd(a){this.manager=void 0!==a?a:Ga}function pa(a,b){z.call(this);this.type="Light";this.color=new O(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function hd(a,b,c){pa.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(z.DefaultUp);this.updateMatrix();this.groundColor=new O(b)}function tb(a){this.camera=a;this.bias=0;this.radius=
1;this.mapSize=new B(512,512);this.map=null;this.matrix=new J}function id(){tb.call(this,new Ea(50,1,.5,500))}function jd(a,b,c,d,e,f){pa.call(this,a,b);this.type="SpotLight";this.position.copy(z.DefaultUp);this.updateMatrix();this.target=new z;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=
new id}function kd(a,b,c,d){pa.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new tb(new Ea(90,1,.5,500))}function ld(a){tb.call(this,new Hb(-5,5,5,-5,.5,500))}function md(a,b){pa.call(this,a,b);this.type="DirectionalLight";this.position.copy(z.DefaultUp);this.updateMatrix();this.target=new z;this.shadow=new ld}
function nd(a,b){pa.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function qa(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function od(a,b,c,d){qa.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function Mc(a,b,c,d){qa.call(this,a,b,c,d)}function pd(a,b,c,d){qa.call(this,a,b,c,d)}function ub(a,b,c,d){if(void 0===a)throw Error("track name is undefined");
if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=ma.convertArray(b,this.TimeBufferType);this.values=ma.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function bc(a,b,c,d){ub.call(this,a,b,c,d)}function qd(a,b,c,d){qa.call(this,a,b,c,d)}function Nc(a,b,c,d){ub.call(this,a,b,c,d)}function cc(a,b,c,d){ub.call(this,a,b,c,d)}function rd(a,b,c,d){ub.call(this,a,b,c,d)}function sd(a,
b,c){ub.call(this,a,b,c)}function td(a,b,c,d){ub.call(this,a,b,c,d)}function vb(a,b,c,d){ub.apply(this,arguments)}function Ha(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=T.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function ud(a){this.manager=void 0!==a?a:Ga;this.textures={}}function Id(a){this.manager=void 0!==a?a:Ga}function wb(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function Jd(a){"boolean"===
typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:Ga;this.withCredentials=!1}function xe(a){this.manager=void 0!==a?a:Ga;this.texturePath=""}function ia(){}function Sa(a,b){this.v1=a;this.v2=b}function Oc(){this.curves=[];this.autoClose=!1}function Va(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0}function xb(a){this.points=
void 0===a?[]:a}function yb(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function zb(a,b,c){this.v0=a;this.v1=b;this.v2=c}function Ab(){Pc.apply(this,arguments);this.holes=[]}function Pc(a){Oc.call(this);this.currentPoint=new B;a&&this.fromPoints(a)}function Kd(){this.subPaths=[];this.currentPath=null}function Ld(a){this.data=a}function ye(a){this.manager=void 0!==a?a:Ga}function Md(){void 0===Nd&&(Nd=new (window.AudioContext||window.webkitAudioContext));return Nd}function Od(a){this.manager=
void 0!==a?a:Ga}function ze(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new Ea;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new Ea;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function vd(a,b,c){z.call(this);this.type="CubeCamera";var d=new Ea(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new q(1,0,0));this.add(d);var e=new Ea(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new q(-1,0,0));this.add(e);var f=new Ea(90,1,a,b);f.up.set(0,0,1);f.lookAt(new q(0,
1,0));this.add(f);var g=new Ea(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new q(0,-1,0));this.add(g);var h=new Ea(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new q(0,0,1));this.add(h);var k=new Ea(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new q(0,0,-1));this.add(k);this.renderTarget=new Eb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,p=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,
d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=p;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)}}function Pd(){z.call(this);this.type="AudioListener";this.context=Md();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null}function dc(a){z.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();
this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function Qd(a){dc.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function Rd(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);
a.getOutput().connect(this.analyser)}function wd(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function fa(a,b,c){this.path=b;this.parsedPath=c||fa.parseTrackName(b);this.node=fa.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function Sd(a){this.uuid=T.generateUUID();
this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}function Td(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;
b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=
!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function Ud(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Ae(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Bb(){G.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function Vd(a,b,c,d){this.uuid=T.generateUUID();this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===
d}function ec(a,b){this.uuid=T.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0}function fc(a,b,c){ec.call(this,a,b);this.meshPerAttribute=c||1}function gc(a,b,c){C.call(this,a,b);this.meshPerAttribute=c||1}function Wd(a,b,c,d){this.ray=new ab(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
return this.Points}}})}function Be(a,b){return a.distance-b.distance}function Xd(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)Xd(a[d],b,c,!0)}}function Yd(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function Zd(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function na(a,b){ya.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;
this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)}function Qc(a){z.call(this);this.material=a;this.render=function(a){}}function Rc(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new G;b=new ha(6*b,3);c.addAttribute("position",b);la.call(this,c,new oa({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}
function hc(a){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new G;for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new ha(b,3));b=new oa({fog:!1});this.cone=new la(a,b);this.add(this.cone);this.update()}function ic(a){this.bones=this.getBoneList(a);for(var b=new Q,
c=0;c<this.bones.length;c++){var d=this.bones[c];d.parent&&d.parent.isBone&&(b.vertices.push(new q),b.vertices.push(new q),b.colors.push(new O(0,0,1)),b.colors.push(new O(0,1,0)))}b.dynamic=!0;c=new oa({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});la.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function jc(a,b){this.light=a;this.light.updateMatrixWorld();var c=new mb(b,4,2),d=new Ma({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
ya.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1}function kc(a,b){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new O,new O];var c=new Vb(b,4,2);c.rotateX(-Math.PI/2);for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new Ma({vertexColors:1,wireframe:!0});this.lightSphere=new ya(c,d);this.add(this.lightSphere);this.update()}function Sc(a,b,c,d){b=b||1;c=new O(void 0!==c?c:4473924);d=new O(void 0!==
d?d:8947848);for(var e=b/2,f=2*a/b,g=[],h=[],k=0,m=0,l=-a;k<=b;k++,l+=f){g.push(-a,0,l,a,0,l);g.push(l,0,-a,l,0,a);var n=k===e?c:d;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3}a=new G;a.addAttribute("position",new ha(g,3));a.addAttribute("color",new ha(h,3));g=new oa({vertexColors:2});la.call(this,a,g)}function Tc(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
c=new G;b=new ha(6*b,3);c.addAttribute("position",b);la.call(this,c,new oa({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function lc(a,b){z.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;void 0===b&&(b=1);var c=new G;c.addAttribute("position",new ha([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new oa({fog:!1});this.add(new Ta(c,d));c=new G;c.addAttribute("position",new ha([0,0,0,0,0,1],3));this.add(new Ta(c,d));this.update()}
function Uc(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new q);d.colors.push(new O(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new Q,e=new oa({color:16777215,vertexColors:1}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);
b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);la.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()}function Vc(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=
new Ba;ya.call(this,new ob(1,1,1),new Ma({color:c,wireframe:!0}))}function Wc(a,b){void 0===b&&(b=16776960);var c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(24),e=new G;e.setIndex(new C(c,1));e.addAttribute("position",new C(d,3));la.call(this,e,new oa({color:b}));void 0!==a&&this.update(a)}function Cb(a,b,c,d,e,f){z.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);this.position.copy(b);this.line=new Ta(Ce,new oa({color:d}));
this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ya(De,new Ma({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function xd(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new G;a.addAttribute("position",new C(b,3));a.addAttribute("color",new C(c,3));b=new oa({vertexColors:2});la.call(this,a,b)}function Ee(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3.");
$d.call(this,a);this.type="catmullrom";this.closed=!0}function yd(a,b,c,d,e,f){Va.call(this,a,b,c,c,d,e,f)}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");
for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();Object.assign(sa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},
removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;var c=[],d,e=b.length;for(d=0;d<e;d++)c[d]=b[d];for(d=0;d<e;d++)c[d].call(this,a)}}}});var Fe={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},Ge={UVMapping:300,CubeReflectionMapping:301,
CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},ae={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},be={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008},T={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a=
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random()},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*
T.DEG2RAD},radToDeg:function(a){return a*T.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};B.prototype={constructor:B,isVector2:!0,get width(){return this.x},set width(a){this.x=a},get height(){return this.y},set height(a){this.y=a},set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=
a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==
b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a):this.y=this.x=0;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,
a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new B,b=new B);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=
Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*
this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.multiplyScalar(a/
this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+
1];return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}};da.DEFAULT_IMAGE=void 0;da.DEFAULT_MAPPING=300;da.prototype={constructor:da,isTexture:!0,set needsUpdate(a){!0===a&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=
a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,
repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=T.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=c.height,g.getContext("2d").drawImage(c,
0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>
a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};Object.assign(da.prototype,sa.prototype);var ee=0;ga.prototype={constructor:ga,isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;
return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,
this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},
addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){isFinite(a)?
(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=this.y=this.x=0;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=
0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var m=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+m-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;m=(m+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>m?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):
h>m?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>m?(c=b=.707106781,d=0):(d=Math.sqrt(m),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);
this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new ga,b=new ga);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);
this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);
this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},
normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=
a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this}};Object.assign(Db.prototype,sa.prototype,{isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,
0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Eb.prototype=Object.create(Db.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isWebGLRenderTargetCube=!0;ba.prototype={constructor:ba,get x(){return this._x},
set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();
return this},setFromEuler:function(a,b){if(!1===(a&&a.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),k=a.order;"XYZ"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===k?(this._x=
f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===k&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=
Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+
h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new q);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*
a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,m=b._w;this._x=c*m+f*g+d*k-e*h;this._y=d*m+f*h+e*g-c*k;this._z=e*m+f*k+c*h-d*g;this._w=f*m-c*g-d*h-e*k;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;
0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var k=Math.atan2(h,g),g=Math.sin((1-b)*k)/h,h=Math.sin(b*k)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===
this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};Object.assign(ba,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,
b,c,d,e,f,g){var h=c[d+0],k=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],n=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==l||m!==n){f=1-g;var p=h*d+k*l+m*n+c*e,r=0<=p?1:-1,x=1-p*p;x>Number.EPSILON&&(x=Math.sqrt(x),p=Math.atan2(x,p*r),f=Math.sin(f*p)/x,g=Math.sin(g*p)/x);r*=g;h=h*f+d*r;k=k*f+l*r;m=m*f+n*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+k*k+m*m+c*c),h*=g,k*=g,m*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=m;a[b+3]=c}});q.prototype={constructor:q,isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},
setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,
this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=
a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===(b&&b.isEuler)&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new ba);return this.applyQuaternion(a.setFromEuler(b))}}(),
applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new ba);return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=
this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,m=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-m*-f;this.y=k*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new J);
a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new J);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=
a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a,b;return function(c,
d){void 0===a&&(a=new q,b=new q);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,
b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new q);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
a&&(a=new q);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(T.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;
this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){if("number"===typeof a){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
var c=a;a=b;b=c}return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];return this}};J.prototype={constructor:J,isMatrix4:!0,
set:function(a,b,c,d,e,f,g,h,k,m,l,n,p,r,x,t){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=k;q[6]=m;q[10]=l;q[14]=n;q[3]=p;q[7]=r;q[11]=x;q[15]=t;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new J).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,
b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new q);var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*
f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){!1===(a&&a.isEuler)&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,m=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+m*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=m+k*d;b[10]=f*g}else"YXZ"===
a.order?(a=g*h,k=g*e,m=d*h,l=d*e,b[0]=a+l*c,b[4]=m*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-m,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,m=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=m+k*c,b[1]=k+m*c,b[5]=f*h,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,m=c*h,l=c*e,b[0]=g*h,b[4]=m*d-k,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=k*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,m=c*g,l=c*d,b[0]=g*h,b[4]=l-a*e,b[8]=m*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*
e+m,b[10]=a-l*e):"XZY"===a.order&&(a=f*g,k=f*d,m=c*g,l=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,b[5]=f*h,b[9]=k*e-m,b[2]=m*e-k,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var m=c*h,c=c*k,l=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(l+e);b[4]=m-f;b[8]=c+h;b[1]=m+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=
0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&(a=new q,b=new q,c=new q);var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.z+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],m=c[1],l=c[5],n=c[9],p=c[13],r=c[2],x=c[6],t=c[10],q=c[14],u=c[3],v=c[7],I=c[11],c=c[15],y=d[0],E=d[4],H=d[8],F=d[12],M=d[1],B=d[5],K=d[9],z=d[13],C=d[2],G=d[6],J=d[10],N=d[14],P=d[3],R=d[7],S=d[11],d=d[15];e[0]=f*y+g*M+h*C+k*P;e[4]=f*E+g*B+h*G+k*R;e[8]=f*H+g*K+h*J+k*S;e[12]=
f*F+g*z+h*N+k*d;e[1]=m*y+l*M+n*C+p*P;e[5]=m*E+l*B+n*G+p*R;e[9]=m*H+l*K+n*J+p*S;e[13]=m*F+l*z+n*N+p*d;e[2]=r*y+x*M+t*C+q*P;e[6]=r*E+x*B+t*G+q*R;e[10]=r*H+x*K+t*J+q*S;e[14]=r*F+x*z+t*N+q*d;e[3]=u*y+v*M+I*C+c*P;e[7]=u*E+v*B+I*G+c*R;e[11]=u*H+v*K+I*J+c*S;e[15]=u*F+v*z+I*N+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];
c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix4(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,
c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],m=a[2],l=a[6],n=a[10],p=a[14];return a[3]*(+e*h*l-d*k*l-e*g*n+c*k*n+d*g*p-c*h*p)+a[7]*(+b*h*p-b*k*n+e*f*n-d*f*p+d*k*m-e*h*m)+a[11]*(+b*k*l-b*g*p-e*f*l+c*f*p+e*g*m-c*k*m)+a[15]*(-d*g*m-b*h*l+b*g*n+
d*f*l-c*f*n+c*h*m)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new q);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
return a.setFromMatrixColumn(this,3)}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],k=d[4],m=d[5],l=d[6],n=d[7],p=d[8],r=d[9],x=d[10],t=d[11],q=d[12],u=d[13],v=d[14],d=d[15],I=r*v*n-u*x*n+u*l*t-m*v*t-r*l*d+m*x*d,y=q*x*n-p*v*n-q*l*t+k*v*t+p*l*d-k*x*d,E=p*u*n-q*r*n+q*m*t-k*u*t-p*m*d+k*r*d,H=q*r*l-p*u*l-q*m*x+k*u*x+p*m*v-k*r*v,F=e*I+f*y+g*E+h*H;if(0===F){if(!0===b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");return this.identity()}F=1/F;c[0]=I*F;c[1]=(u*x*h-r*v*h-u*g*t+f*v*t+r*g*d-f*x*d)*F;c[2]=(m*v*h-u*l*h+u*g*n-f*v*n-m*g*d+f*l*d)*F;c[3]=(r*l*h-m*x*h-r*g*n+f*x*n+m*g*t-f*l*t)*F;c[4]=y*F;c[5]=(p*v*h-q*x*h+q*g*t-e*v*t-p*g*d+e*x*d)*F;c[6]=(q*l*h-k*v*h-q*g*n+e*v*n+k*g*d-e*l*d)*F;c[7]=(k*x*h-p*l*h+p*g*n-e*x*n-k*g*t+e*l*t)*F;c[8]=E*F;c[9]=(q*r*h-p*u*h-q*f*t+e*u*t+p*f*d-e*r*d)*F;c[10]=(k*u*h-q*m*h+q*f*n-e*u*n-k*f*d+e*m*d)*F;c[11]=
(p*m*h-k*r*h-p*f*n+e*r*n+k*f*t-e*m*t)*F;c[12]=H*F;c[13]=(p*u*g-q*r*g+q*f*x-e*u*x-p*f*v+e*r*v)*F;c[14]=(q*m*g-k*u*g-q*f*l+e*u*l+k*f*v-e*m*v)*F;c[15]=(k*r*g-p*m*g+p*f*l-e*r*l-k*f*x+e*m*x)*F;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],
a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=
Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,m=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,m*g+c,m*h-d*f,0,k*h-d*g,m*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new q,b=new J);var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],
f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,m=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);
g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(T.DEG2RAD*a*.5);var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=
this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}};Xa.prototype=Object.create(da.prototype);
Xa.prototype.constructor=Xa;Xa.prototype.isCubeTexture=!0;Object.defineProperty(Xa.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});var ie=new da,je=new Xa,fe=[],he=[];ne.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var zd=/([\w\d_]+)(\])?(\[|\.)?/g;Ya.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};Ya.prototype.set=function(a,b,c){var d=this.map[c];
void 0!==d&&d.setValue(a,b[c],this.renderer)};Ya.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};Ya.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};Ya.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var La={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b=
{},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},X={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_fragment:"#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
normal_frag:"uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n",normal_vert:"varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"};O.prototype={constructor:O,
isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,
c,d){b=T.euclideanModulo(b,1);c=T.clamp(c,0,1);d=T.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=
Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/
360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=He[a],void 0!==
c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=
this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):
k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=
a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=
0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}};var He={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,
cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,
floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,
lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,
moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,
silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},W={common:{diffuse:{value:new O(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new ga(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},
reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},
fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new O(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},
spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}}},points:{diffuse:{value:new O(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new ga(0,0,1,1)}}},Gb={basic:{uniforms:La.merge([W.common,W.aomap,W.fog]),vertexShader:X.meshbasic_vert,
fragmentShader:X.meshbasic_frag},lambert:{uniforms:La.merge([W.common,W.aomap,W.lightmap,W.emissivemap,W.fog,W.lights,{emissive:{value:new O(0)}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:La.merge([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new O(0)},specular:{value:new O(1118481)},shininess:{value:30}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:La.merge([W.common,
W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new O(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},points:{uniforms:La.merge([W.points,W.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:La.merge([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,
fragmentShader:X.linedashed_frag},depth:{uniforms:La.merge([W.common,W.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:{opacity:{value:1}},vertexShader:X.normal_vert,fragmentShader:X.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new q}},
vertexShader:X.distanceRGBA_vert,fragmentShader:X.distanceRGBA_frag}};Gb.physical={uniforms:La.merge([Gb.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};mc.prototype={constructor:mc,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new B;return function(b,
c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new B;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},
getSize:function(a){a=a||new B;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&
this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new B).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new B).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new B;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);
this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};U.prototype={constructor:U,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+
b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;
""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&
(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,
d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=
this.reflectivity);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);2!==this.shading&&(d.shading=this.shading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0<this.alphaTest&&
(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);d.skinning=this.skinning;d.morphTargets=this.morphTargets;c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=
c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;
this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;a=a.clippingPlanes;var b=null;if(null!==a)for(var c=
a.length,b=Array(c),d=0;d!==c;++d)b[d]=a[d].clone();this.clippingPlanes=b;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(U.prototype,sa.prototype);var oe=0;Fa.prototype=Object.create(U.prototype);Fa.prototype.constructor=Fa;Fa.prototype.isShaderMaterial=!0;Fa.prototype.copy=function(a){U.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=La.clone(a.uniforms);
this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Fa.prototype.toJSON=function(a){a=U.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};Za.prototype=Object.create(U.prototype);Za.prototype.constructor=
Za;Za.prototype.isMeshDepthMaterial=!0;Za.prototype.copy=function(a){U.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};Ba.prototype={constructor:Ba,isBox3:!0,set:function(a,b){this.min.copy(a);
this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var m=a[h],l=a[h+1],n=a[h+2];m<b&&(b=m);l<c&&(c=l);n<d&&(d=n);m>e&&(e=m);l>f&&(f=l);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g)},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new q;return function(b,c){var d=a.copy(c).multiplyScalar(.5);
this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new q;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e&&e.isGeometry)for(var e=e.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e&&e.isBufferGeometry&&(g=e.attributes.position,void 0!==g)){var h;g&&g.isInterleavedBufferAttribute?(e=g.data.array,f=g.offset,h=g.data.stride):
(e=g.array,f=0,h=3);for(g=e.length;f<g;f+=h)a.fromArray(e,f),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)}});return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=a||new q;
return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||
a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new q).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||
a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a;return function(b){void 0===a&&(a=new q);this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*
this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new q).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new q;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new q;return function(b){b=b||new Ca;this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);
this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new q,new q,new q,new q,new q,new q,new q,new q];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,
this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};Ca.prototype={constructor:Ca,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=
new Ba;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-
this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new q;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=
a||new Ba;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}};Ia.prototype={constructor:Ia,isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,k){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=k;return this},identity:function(){this.set(1,
0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix3(this),a.toArray(b,
c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new q);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],
a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],k=c[4],m=c[5],l=c[6],n=c[7],c=c[8],p=c*k-m*n,r=m*l-c*h,q=n*h-k*l,t=e*p+f*r+g*q;if(0===t){if(!0===b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");return this.identity()}t=
1/t;d[0]=p*t;d[1]=(g*n-c*f)*t;d[2]=(m*f-g*k)*t;d[3]=r*t;d[4]=(c*e-g*l)*t;d[5]=(g*h-m*e)*t;d[6]=q*t;d[7]=(f*l-n*e)*t;d[8]=(k*e-f*h)*t;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead.");return this.toArray(a,b)},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},
transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}};va.prototype={constructor:va,set:function(a,b){this.normal.copy(a);
this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new q,b=new q;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);
this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||
new q).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new q;return function(b,c){var d=c||new q,e=b.delta(a),f=this.normal.dot(e);if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},
intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new q).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new q,b=new Ia;return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===
this.constant}};nc.prototype={constructor:nc,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],m=c[7],l=c[8],n=c[9],p=c[10],r=c[11],q=c[12],t=c[13],D=c[14],c=c[15];
b[0].setComponents(f-a,m-g,r-l,c-q).normalize();b[1].setComponents(f+a,m+g,r+l,c+q).normalize();b[2].setComponents(f+d,m+h,r+n,c+t).normalize();b[3].setComponents(f-d,m-h,r-n,c-t).normalize();b[4].setComponents(f-e,m-k,r-p,c-D).normalize();b[5].setComponents(f+e,m+k,r+p,c+D).normalize();return this},intersectsObject:function(){var a=new Ca;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),
intersectsSprite:function(){var a=new Ca;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new q,b=new q;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?
c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};ab.prototype={constructor:ab,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);
this.direction.copy(a.direction);return this},at:function(a,b){return(b||new q).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(){var a=new q;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new q;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},
distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new q;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new q,b=new q,c=new q;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);
var h=.5*d.distanceTo(e),k=-this.direction.dot(b),m=c.dot(this.direction),l=-c.dot(b),n=c.lengthSq(),p=Math.abs(1-k*k),r;0<p?(d=k*l-m,e=k*m-l,r=h*p,0<=d?e>=-r?e<=r?(h=1/p,d*=h,e*=h,k=d*(d+k*e+2*m)+e*(k*d+e+2*l)+n):(e=h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n):(e=-h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n):e<=-r?(d=Math.max(0,-(-k*h+m)),e=0<d?-h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+n):e<=r?(d=0,e=Math.min(Math.max(-h,-l),h),k=e*(e+2*l)+n):(d=Math.max(0,-(k*h+m)),e=0<d?h:Math.min(Math.max(-h,
-l),h),k=-d*d+e*(e+2*l)+n)):(e=0<k?-h:h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new q;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=
a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;
var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new q;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=
new q,b=new q,c=new q,d=new q;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);
this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};bb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");bb.DefaultOrder="XYZ";bb.prototype={constructor:bb,isEuler:!0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},
set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=T.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],m=e[9],l=e[2],n=e[6],e=e[10];b=b||
this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(n,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(n,-1,1)),.99999>Math.abs(n)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),.99999>
Math.abs(l)?(this._x=Math.atan2(n,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-m,k),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(n,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();
return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new J);a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new ba;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];
this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new q(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};Yc.prototype={constructor:Yc,set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=
1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==(this.mask&a.mask)}};z.DefaultUp=new q(0,1,0);z.DefaultMatrixAutoUpdate=!0;Object.assign(z.prototype,sa.prototype,{isObject3D:!0,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},
setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new ba;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new q(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new q(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new q(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new q;
return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=new q(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new q(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new q(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=
new J;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new J;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),
this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===
b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new q;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new q,b=new q;return function(c){c=c||new ba;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new ba;return function(b){b=b||new bb;this.getWorldQuaternion(a);
return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new q,b=new ba;return function(c){c=c||new q;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new ba;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);
for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||""===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=
this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=
[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var c=b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a)}d.object=e;return d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);
this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}});var qe=0;gb.prototype={constructor:gb,set:function(a,
b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new q).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new q).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new q;
return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new q,b=new q;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=T.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new q;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&
a.end.equals(this.end)}};wa.normal=function(){var a=new q;return function(b,c,d,e){e=e||new q;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();wa.barycoordFromPoint=function(){var a=new q,b=new q,c=new q;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var m=d*k-e*e;h=h||new q;if(0===m)return h.set(-2,-1,-1);m=1/m;k=(k*f-e*g)*m;d=(d*g-
e*f)*m;return h.set(1-k-d,d,k)}}();wa.containsPoint=function(){var a=new q;return function(b,c,d,e){b=wa.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();wa.prototype={constructor:wa,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);
return this},area:function(){var a=new q,b=new q;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new q).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return wa.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new va).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return wa.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return wa.containsPoint(a,
this.a,this.b,this.c)},closestPointToPoint:function(){var a,b,c,d;return function(e,f){void 0===a&&(a=new va,b=[new gb,new gb,new gb],c=new q,d=new q);var g=f||new q,h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var k=0;k<b.length;k++){b[k].closestPointToPoint(c,!0,d);var m=c.distanceToSquared(d);m<h&&(h=m,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&
a.b.equals(this.b)&&a.c.equals(this.c)}};ea.prototype={constructor:ea,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};Ma.prototype=Object.create(U.prototype);Ma.prototype.constructor=
Ma;Ma.prototype.isMeshBasicMaterial=!0;Ma.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=
a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};C.prototype={constructor:C,isBufferAttribute:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=
a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new O);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=
this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new B);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
d),f=new q);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new ga);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*
this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=
d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return(new this.constructor).copy(this)}};Object.assign(Q.prototype,sa.prototype,{isGeometry:!0,applyMatrix:function(a){for(var b=(new Ia).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<
f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new J);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new J);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===
a&&(a=new J);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new J);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new J);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new z);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d,e){var f=
void 0!==g?[l[a].clone(),l[b].clone(),l[d].clone()]:[],r=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new ea(a,b,d,f,r,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([n[a].clone(),n[b].clone(),n[d].clone()]);void 0!==m&&c.faceVertexUvs[1].push([p[a].clone(),p[b].clone(),p[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==
e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var l=[],n=[],p=[],r=e=0;e<f.length;e+=3,r+=2)c.vertices.push(new q(f[e],f[e+1],f[e+2])),void 0!==g&&l.push(new q(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new O(h[e],h[e+1],h[e+2])),void 0!==k&&n.push(new B(k[r],k[r+1])),void 0!==m&&p.push(new B(m[r],m[r+1]));if(void 0!==d)if(f=a.groups,0<f.length)for(e=0;e<f.length;e++)for(var x=f[e],t=x.start,D=x.count,r=t,t=t+D;r<t;r+=3)b(d[r],d[r+1],d[r+
2],x.materialIndex);else for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,
b=0===b?1:1/b,c=new J;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new q,b=new q,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new q;if(a){var e,
f,g,h=new q,k=new q;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?
(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a,b,c;this.computeFaceNormals();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=
!0)},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new Q;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<
b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new q,k={a:new q,b:new q,c:new q},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],
h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===
this.boundingBox&&(this.boundingBox=new Ba);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Ca);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===(a&&a.isGeometry))console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,m=this.faceVertexUvs[0],l=a.faceVertexUvs[0],n=this.colors,
p=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new Ia).getNormalMatrix(b));a=0;for(var r=g.length;a<r;a++){var q=g[a].clone();void 0!==b&&q.applyMatrix4(b);f.push(q)}a=0;for(r=p.length;a<r;a++)n.push(p[a].clone());a=0;for(r=k.length;a<r;a++){var g=k[a],t=g.vertexNormals,p=g.vertexColors,n=new ea(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=t.length;b<f;b++)q=t[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),n.vertexNormals.push(q);n.color.copy(g.color);
b=0;for(f=p.length;b<f;b++)q=p[b],n.vertexColors.push(q.clone());n.materialIndex=g.materialIndex+c;h.push(n)}a=0;for(r=l.length;a<r;a++)if(c=l[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());m.push(d)}}},mergeMesh:function(a){!1===(a&&a.isMesh)?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<
g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=
b;return f},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+
a.z.toString();if(void 0!==m[b])return m[b];m[b]=k.length/3;k.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==n[b])return n[b];n[b]=l.length;l.push(a.getHex());return n[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=p.length/2;p.push(a.x,a.y);return r[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==
this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],m={},l=[],n={},p=[],r={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],t=void 0!==this.faceVertexUvs[0][g],D=0<q.normal.length(),u=0<q.vertexNormals.length,v=1!==q.color.r||1!==q.color.g||1!==q.color.b,I=0<q.vertexColors.length,y=0,y=a(y,0,0),y=a(y,1,!0),y=a(y,2,!1),y=a(y,3,t),y=a(y,4,D),y=a(y,5,u),y=a(y,6,
v),y=a(y,7,I);h.push(y);h.push(q.a,q.b,q.c);h.push(q.materialIndex);t&&(t=this.faceVertexUvs[0][g],h.push(d(t[0]),d(t[1]),d(t[2])));D&&h.push(b(q.normal));u&&(D=q.vertexNormals,h.push(b(D[0]),b(D[1]),b(D[2])));v&&h.push(c(q.color));I&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<l.length&&(e.data.colors=l);0<p.length&&(e.data.uvs=[p]);e.data.faces=h;return e},clone:function(){return(new Q).copy(this)},copy:function(a){this.vertices=[];this.faces=
[];this.faceVertexUvs=[[]];this.colors=[];for(var b=a.vertices,c=0,d=b.length;c<d;c++)this.vertices.push(b[c].clone());b=a.colors;c=0;for(d=b.length;c<d;c++)this.colors.push(b[c].clone());b=a.faces;c=0;for(d=b.length;c<d;c++)this.faces.push(b[c].clone());c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,m=g.length;k<m;k++)h.push(g[k].clone());this.faceVertexUvs[c].push(h)}}return this},
dispose:function(){this.dispatchEvent({type:"dispose"})}});var ad=0;Object.assign(re.prototype,sa.prototype,{computeBoundingBox:Q.prototype.computeBoundingBox,computeBoundingSphere:Q.prototype.computeBoundingSphere,computeFaceNormals:function(){console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")},computeVertexNormals:function(){console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")},computeGroups:function(a){var b,
c=[],d;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,k;if(0<h){k=[];for(var m=0;m<h;m++)k[m]=[];this.morphTargets.position=k}var l=a.morphNormals,n=l.length,p;if(0<n){p=[];for(m=0;m<
n;m++)p[m]=[];this.morphTargets.normal=p}for(var r=a.skinIndices,q=a.skinWeights,t=r.length===c.length,D=q.length===c.length,m=0;m<b.length;m++){var u=b[m];this.vertices.push(c[u.a],c[u.b],c[u.c]);var v=u.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=u.normal,this.normals.push(v,v,v));v=u.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=u.color,this.colors.push(v,v,v));!0===e&&(v=d[0][m],void 0!==v?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
m),this.uvs.push(new B,new B,new B)));!0===f&&(v=d[1][m],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new B,new B,new B)));for(v=0;v<h;v++){var I=g[v].vertices;k[v].push(I[u.a],I[u.b],I[u.c])}for(v=0;v<n;v++)I=l[v].vertexNormals[m],p[v].push(I.a,I.b,I.c);t&&this.skinIndices.push(r[u.a],r[u.b],r[u.c]);D&&this.skinWeights.push(q[u.a],q[u.b],q[u.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;
this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.assign(G.prototype,sa.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){this.index=a},addAttribute:function(a,b,c){if(!1===(b&&b.isBufferAttribute)&&!1===(b&&b.isInterleavedBufferAttribute))console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
this.addAttribute(a,new C(b,c));else if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);else return this.attributes[a]=b,this},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=
b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new Ia).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new J);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===
a&&(a=new J);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new J);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new J);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new J);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=
new z);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a&&a.isPoints||a&&a.isLine){a=new ha(3*b.vertices.length,3);var c=new ha(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&
(a=new ha(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a&&a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a&&a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=
b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),
c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=
b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new re).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new C(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new C(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),
this.addAttribute("color",(new C(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new C(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new C(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new C(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=
[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new ha(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new ha(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new ha(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=
a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Ba);var a=this.attributes.position.array;void 0!==a?this.boundingBox.setFromArray(a):this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=
new Ba,b=new q;return function(){null===this.boundingSphere&&(this.boundingSphere=new Ca);var c=this.attributes.position;if(c){var c=c.array,d=this.boundingSphere.center;a.setFromArray(c);a.getCenter(d);for(var e=0,f=0,g=c.length;f<g;f+=3)b.fromArray(c,f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new C(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h,k,m,l=new q,n=new q,p=new q,r=new q,x=new q;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var t=0,D=c.length;t<D;++t)for(f=c[t],g=f.start,h=f.count,f=g,g+=h;f<
g;f+=3)h=3*a[f+0],k=3*a[f+1],m=3*a[f+2],l.fromArray(d,h),n.fromArray(d,k),p.fromArray(d,m),r.subVectors(p,n),x.subVectors(l,n),r.cross(x),e[h]+=r.x,e[h+1]+=r.y,e[h+2]+=r.z,e[k]+=r.x,e[k+1]+=r.y,e[k+2]+=r.z,e[m]+=r.x,e[m+1]+=r.y,e[m+2]+=r.z}else for(f=0,g=d.length;f<g;f+=9)l.fromArray(d,f),n.fromArray(d,f+3),p.fromArray(d,f+6),r.subVectors(p,n),x.subVectors(l,n),r.cross(x),e[f]=r.x,e[f+1]=r.y,e[f+2]=r.z,e[f+3]=r.x,e[f+4]=r.y,e[f+5]=r.z,e[f+6]=r.x,e[f+7]=r.y,e[f+8]=r.z;this.normalizeNormals();b.normal.needsUpdate=
!0}},merge:function(a,b){if(!1===(a&&a.isBufferGeometry))console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),
a[e]*=b,a[e+1]*=b,a[e+2]*=b},toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new G,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h,k=0,m=0,l=b.length;m<l;m++){h=b[m]*e;for(var n=0;n<e;n++)g[k++]=f[h++]}a.addAttribute(d,new C(g,e))}return a},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};
a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;
0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a},clone:function(){return(new G).copy(this)},copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});
G.MaxIndex=65535;ya.prototype=Object.assign(Object.create(z.prototype),{constructor:ya,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){z.prototype.copy.call(this,a);this.drawMode=a.drawMode;return this},updateMorphTargets:function(){var a=this.geometry.morphTargets;if(void 0!==a&&0<a.length){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var b=0,c=a.length;b<c;b++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[a[b].name]=b}},raycast:function(){function a(a,
b,c,d,e,f,g){wa.barycoordFromPoint(a,b,c,d,t);e.multiplyScalar(t.x);f.multiplyScalar(t.y);g.multiplyScalar(t.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=a.material;if(null===(1===h.side?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,2!==h.side,g)))return null;u.copy(g);u.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(u);return c<b.near||c>b.far?null:{distance:c,point:u.clone(),object:a}}function c(c,d,e,f,m,l,n,w){g.fromArray(f,3*l);h.fromArray(f,3*n);k.fromArray(f,
3*w);if(c=b(c,d,e,g,h,k,D))m&&(p.fromArray(m,2*l),r.fromArray(m,2*n),x.fromArray(m,2*w),c.uv=a(D,g,h,k,p,r,x)),c.face=new ea(l,n,w,wa.normal(g,h,k)),c.faceIndex=l;return c}var d=new J,e=new ab,f=new Ca,g=new q,h=new q,k=new q,m=new q,l=new q,n=new q,p=new B,r=new B,x=new B,t=new q,D=new q,u=new q;return function(q,t){var u=this.geometry,E=this.material,H=this.matrixWorld;if(void 0!==E&&(null===u.boundingSphere&&u.computeBoundingSphere(),f.copy(u.boundingSphere),f.applyMatrix4(H),!1!==q.ray.intersectsSphere(f)&&
(d.getInverse(H),e.copy(q.ray).applyMatrix4(d),null===u.boundingBox||!1!==e.intersectsBox(u.boundingBox)))){var F,M;if(u&&u.isBufferGeometry){var B,K,E=u.index,H=u.attributes,u=H.position.array;void 0!==H.uv&&(F=H.uv.array);if(null!==E)for(var H=E.array,z=0,C=H.length;z<C;z+=3){if(E=H[z],B=H[z+1],K=H[z+2],M=c(this,q,e,u,F,E,B,K))M.faceIndex=Math.floor(z/3),t.push(M)}else for(z=0,C=u.length;z<C;z+=9)if(E=z/3,B=E+1,K=E+2,M=c(this,q,e,u,F,E,B,K))M.index=E,t.push(M)}else if(u&&u.isGeometry){var G,J,H=
E&&E.isMultiMaterial,z=!0===H?E.materials:null,C=u.vertices;B=u.faces;K=u.faceVertexUvs[0];0<K.length&&(F=K);for(var N=0,P=B.length;N<P;N++){var R=B[N];M=!0===H?z[R.materialIndex]:E;if(void 0!==M){K=C[R.a];G=C[R.b];J=C[R.c];if(!0===M.morphTargets){M=u.morphTargets;var S=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var Q=0,V=M.length;Q<V;Q++){var O=S[Q];if(0!==O){var L=M[Q].vertices;g.addScaledVector(m.subVectors(L[R.a],K),O);h.addScaledVector(l.subVectors(L[R.b],G),O);k.addScaledVector(n.subVectors(L[R.c],
J),O)}}g.add(K);h.add(G);k.add(J);K=g;G=h;J=k}if(M=b(this,q,e,K,G,J,D))F&&(S=F[N],p.copy(S[0]),r.copy(S[1]),x.copy(S[2]),M.uv=a(D,K,G,J,p,r,x)),M.face=R,M.faceIndex=N,t.push(M)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});hb.prototype=Object.create(G.prototype);hb.prototype.constructor=hb;ib.prototype=Object.create(G.prototype);ib.prototype.constructor=ib;Z.prototype=Object.create(z.prototype);Z.prototype.constructor=Z;Z.prototype.isCamera=!0;Z.prototype.getWorldDirection=
function(){var a=new ba;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();Z.prototype.lookAt=function(){var a=new J;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();Z.prototype.clone=function(){return(new this.constructor).copy(this)};Z.prototype.copy=function(a){z.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this};
Ea.prototype=Object.assign(Object.create(Z.prototype),{constructor:Ea,isPerspectiveCamera:!0,copy:function(a){Z.prototype.copy.call(this,a);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*T.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=
Math.tan(.5*T.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*T.RAD2DEG*Math.atan(Math.tan(.5*T.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=
null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*T.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makeFrustum(e,e+d,b-c,b,a,this.far)},toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=
this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Hb.prototype=Object.assign(Object.create(Z.prototype),{constructor:Hb,isOrthographicCamera:!0,copy:function(a){Z.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=
null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/
(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far)},toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=
this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});var sf=0;Ib.prototype.isFogExp2=!0;Ib.prototype.clone=function(){return new Ib(this.color.getHex(),this.density)};Ib.prototype.toJSON=function(a){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};Jb.prototype.isFog=!0;Jb.prototype.clone=function(){return new Jb(this.color.getHex(),this.near,this.far)};Jb.prototype.toJSON=function(a){return{type:"Fog",
color:this.color.getHex(),near:this.near,far:this.far}};jb.prototype=Object.create(z.prototype);jb.prototype.constructor=jb;jb.prototype.copy=function(a,b){z.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};jb.prototype.toJSON=function(a){var b=z.prototype.toJSON.call(this,
a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b};Ed.prototype=Object.assign(Object.create(z.prototype),{constructor:Ed,isLensFlare:!0,copy:function(a){z.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},add:function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===
c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new O(16777215));void 0===d&&(d=1);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})},updateLensFlares:function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-
c.rotation)}});kb.prototype=Object.create(U.prototype);kb.prototype.constructor=kb;kb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};qc.prototype=Object.assign(Object.create(z.prototype),{constructor:qc,isSprite:!0,raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y/4||c.push({distance:Math.sqrt(d),point:this.position,
face:null,object:this})}}(),clone:function(){return(new this.constructor(this.material)).copy(this)}});rc.prototype=Object.assign(Object.create(z.prototype),{constructor:rc,copy:function(a){z.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=
this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new q,b=new q;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-
1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});lb.prototype=Object.create(da.prototype);lb.prototype.constructor=lb;lb.prototype.isDataTexture=!0;Object.assign(bd.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<
b;a++){var c=new J;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new J;return function(){for(var b=
0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new bd(this.bones,this.boneInverses,this.useVertexTexture)}});cd.prototype=Object.assign(Object.create(z.prototype),{constructor:cd,isBone:!0,copy:function(a){z.prototype.copy.call(this,a);this.skin=a.skin;return this}});dd.prototype=Object.assign(Object.create(ya.prototype),
{constructor:dd,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&
this.geometry.isBufferGeometry)for(var b=new ga,d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)},updateMatrixWorld:function(a){ya.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+
this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture)).copy(this)}});oa.prototype=Object.create(U.prototype);oa.prototype.constructor=oa;oa.prototype.isLineBasicMaterial=!0;oa.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};Ta.prototype=Object.assign(Object.create(z.prototype),{constructor:Ta,isLine:!0,raycast:function(){var a=
new J,b=new ab,c=new Ca;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new q,m=new q,h=new q,l=new q,n=this&&this.isLineSegments?2:1;if(g&&g.isBufferGeometry){var p=g.index,r=g.attributes.position.array;if(null!==p)for(var p=p.array,g=0,x=p.length-1;g<x;g+=n){var t=p[g+1];k.fromArray(r,
3*p[g]);m.fromArray(r,3*t);t=b.distanceSqToSegment(k,m,l,h);t>f||(l.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(l),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,x=r.length/3-1;g<x;g+=n)k.fromArray(r,3*g),m.fromArray(r,3*g+3),t=b.distanceSqToSegment(k,m,l,h),t>f||(l.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(l),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),
index:g,face:null,faceIndex:null,object:this}))}else if(g&&g.isGeometry)for(k=g.vertices,m=k.length,g=0;g<m-1;g+=n)t=b.distanceSqToSegment(k[g],k[g+1],l,h),t>f||(l.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(l),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});la.prototype=Object.assign(Object.create(Ta.prototype),
{constructor:la,isLineSegments:!0});xa.prototype=Object.create(U.prototype);xa.prototype.constructor=xa;xa.prototype.isPointsMaterial=!0;xa.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Kb.prototype=Object.assign(Object.create(z.prototype),{constructor:Kb,isPoints:!0,raycast:function(){var a=new J,b=new ab,c=new Ca;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);
if(f<l){var h=b.closestPointToPoint(a);h.applyMatrix4(k);var m=d.ray.origin.distanceTo(h);m<d.near||m>d.far||e.push({distance:m,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,k=this.matrixWorld,m=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);b.copy(d.ray).applyMatrix4(a);var m=m/((this.scale.x+this.scale.y+this.scale.z)/3),
l=m*m,m=new q;if(h&&h.isBufferGeometry){var n=h.index,h=h.attributes.position.array;if(null!==n)for(var p=n.array,n=0,r=p.length;n<r;n++){var x=p[n];m.fromArray(h,3*x);f(m,x)}else for(n=0,p=h.length/3;n<p;n++)m.fromArray(h,3*n),f(m,n)}else for(m=h.vertices,n=0,p=m.length;n<p;n++)f(m[n],n)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});sc.prototype=Object.assign(Object.create(z.prototype),{constructor:sc});ed.prototype=Object.create(da.prototype);ed.prototype.constructor=
ed;Lb.prototype=Object.create(da.prototype);Lb.prototype.constructor=Lb;Lb.prototype.isCompressedTexture=!0;fd.prototype=Object.create(da.prototype);fd.prototype.constructor=fd;tc.prototype=Object.create(da.prototype);tc.prototype.constructor=tc;tc.prototype.isDepthTexture=!0;Mb.prototype=Object.create(G.prototype);Mb.prototype.constructor=Mb;Nb.prototype=Object.create(G.prototype);Nb.prototype.constructor=Nb;uc.prototype=Object.create(Q.prototype);uc.prototype.constructor=uc;ua.prototype=Object.create(G.prototype);
ua.prototype.constructor=ua;Ob.prototype=Object.create(ua.prototype);Ob.prototype.constructor=Ob;vc.prototype=Object.create(Q.prototype);vc.prototype.constructor=vc;Pb.prototype=Object.create(ua.prototype);Pb.prototype.constructor=Pb;wc.prototype=Object.create(Q.prototype);wc.prototype.constructor=wc;Qb.prototype=Object.create(ua.prototype);Qb.prototype.constructor=Qb;xc.prototype=Object.create(Q.prototype);xc.prototype.constructor=xc;Rb.prototype=Object.create(ua.prototype);Rb.prototype.constructor=
Rb;yc.prototype=Object.create(Q.prototype);yc.prototype.constructor=yc;zc.prototype=Object.create(Q.prototype);zc.prototype.constructor=zc;Sb.prototype=Object.create(G.prototype);Sb.prototype.constructor=Sb;Ac.prototype=Object.create(Q.prototype);Ac.prototype.constructor=Ac;Tb.prototype=Object.create(G.prototype);Tb.prototype.constructor=Tb;Bc.prototype=Object.create(Q.prototype);Bc.prototype.constructor=Bc;Ub.prototype=Object.create(G.prototype);Ub.prototype.constructor=Ub;Cc.prototype=Object.create(Q.prototype);
Cc.prototype.constructor=Cc;var ra={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,k;if(0<ra.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var m=2*c;for(h=c-1;2<c;){if(0>=m--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);k=h+1;c<=k&&(k=0);var l;a:{var n,
p,r,q,t,D,u,v;n=a[e[g]].x;p=a[e[g]].y;r=a[e[h]].x;q=a[e[h]].y;t=a[e[k]].x;D=a[e[k]].y;if(0>=(r-n)*(D-p)-(q-p)*(t-n))l=!1;else{var I,y,E,H,F,M,B,z,C,G;I=t-r;y=D-q;E=n-t;H=p-D;F=r-n;M=q-p;for(l=0;l<c;l++)if(u=a[e[l]].x,v=a[e[l]].y,!(u===n&&v===p||u===r&&v===q||u===t&&v===D)&&(B=u-n,z=v-p,C=u-r,G=v-q,u-=t,v-=D,C=I*G-y*C,B=F*z-M*B,z=E*v-H*u,C>=-Number.EPSILON&&z>=-Number.EPSILON&&B>=-Number.EPSILON)){l=!1;break a}l=!0}}if(l){d.push([a[e[g]],a[e[h]],a[e[k]]]);f.push([e[g],e[h],e[k]]);g=h;for(k=h+1;k<c;g++,
k++)e[g]=e[k];c--;m=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-c.x,m=e.y-c.y,l=a.x-c.x,n=a.y-c.y,p=h*k-g*m,q=h*l-g*n;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>q||q>p)return[];k=m*l-k*n;if(0>k||k>p)return[]}else{if(0<q||q<p)return[];k=m*l-k*n;if(0<
k||k<p)return[]}if(0===k)return!f||0!==q&&q!==p?[a]:[];if(k===p)return!f||0!==q&&q!==p?[b]:[];if(0===q)return[c];if(q===p)return[e];f=k/p;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==q||m*l!==k*n)return[];h=0===g&&0===h;k=0===k&&0===m;if(h&&k)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(k)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,m=e,c=e.x):(b=e,p=e.x,m=c,c=c.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),c.y<e.y?(b=
c,p=c.y,m=e,c=e.y):(b=e,p=e.y,m=c,c=c.y));return k<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,m]:k>c?[]:k===c?f?[]:[g]:a<=c?[g,h]:[g,m]}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}c(a);b.forEach(c);var g,h,k,m,l,n={};k=a.concat();g=0;for(h=b.length;g<h;g++)Array.prototype.push.apply(k,b[g]);g=0;for(h=k.length;g<h;g++)l=k[g].x+":"+k[g].y,void 0!==n[l]&&console.warn("THREE.ShapeUtils: Duplicate point",
l,g),n[l]=g;g=function(a,b){function c(a,b){var d=h.length-1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],k[b]);if(!d)return!1;d=k.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(k[b],k[e],k[g],h[a]))?!0:!1}function d(a,b){var c,f;for(c=0;c<h.length;c++)if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;return!1}function g(a,c){var d,f,h,k;for(d=0;d<m.length;d++)for(f=b[m[d]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=e(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=
a.concat(),k,m=[],l,n,p,q,w,B=[],z,C,G,J=0;for(l=b.length;J<l;J++)m.push(J);z=0;for(var N=2*m.length;0<m.length;){N--;if(0>N){console.log("Infinite Loop! Holes left:"+m.length+", Probably Hole outside Shape!");break}for(n=z;n<h.length;n++){p=h[n];l=-1;for(J=0;J<m.length;J++)if(q=m[J],w=p.x+":"+p.y+":"+q,void 0===B[w]){k=b[q];for(C=0;C<k.length;C++)if(q=k[C],c(n,C)&&!d(p,q)&&!g(p,q)){l=C;m.splice(J,1);z=h.slice(0,n+1);q=h.slice(n);C=k.slice(l);G=k.slice(0,l+1);h=z.concat(C).concat(G).concat(q);z=n;
break}if(0<=l)break;B[w]=!0}if(0<=l)break}}return h}(a,b);var p=ra.triangulate(g,!1);g=0;for(h=p.length;g<h;g++)for(m=p[g],k=0;3>k;k++)l=m[k].x+":"+m[k].y,l=n[l],void 0!==l&&(m[k]=l);return p.concat()},isClockWise:function(a){return 0>ra.area(a)},b2:function(){return function(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}}(),b3:function(){return function(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}}()};za.prototype=Object.create(Q.prototype);za.prototype.constructor=
za;za.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};za.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d,e,f;e=a.x-b.x;f=a.y-b.y;d=c.x-a.x;var g=c.y-a.y,h=e*e+f*f;if(Math.abs(e*g-f*d)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(d*d+g*g),h=b.x-f/k;b=b.y+e/k;g=((c.x-g/m-h)*g-(c.y+d/m-b)*d)/(e*g-f*d);d=h+e*g-a.x;e=b+f*g-a.y;f=
d*d+e*e;if(2>=f)return new B(d,e);f=Math.sqrt(f/2)}else a=!1,e>Number.EPSILON?d>Number.EPSILON&&(a=!0):e<-Number.EPSILON?d<-Number.EPSILON&&(a=!0):Math.sign(f)===Math.sign(g)&&(a=!0),a?(d=-f,f=Math.sqrt(h)):(d=e,e=f,f=Math.sqrt(h/2));return new B(d/f,e/f)}function e(a,b){var c,d;for(L=a.length;0<=--L;){c=L;d=L-1;0>d&&(d=a.length-1);var e,f=r+2*l;for(e=0;e<f;e++){var g=T*e,h=T*(e+1),k=b+c+g,g=b+d+g,m=b+d+h,h=b+c+h,k=k+K,g=g+K,m=m+K,h=h+K;C.faces.push(new ea(k,g,h,null,null,1));C.faces.push(new ea(g,
m,h,null,null,1));k=u.generateSideWallUV(C,k,g,m,h);C.faceVertexUvs[0].push([k[0],k[1],k[3]]);C.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){C.vertices.push(new q(a,b,c))}function g(a,b,c){a+=K;b+=K;c+=K;C.faces.push(new ea(a,b,c,null,null,0));a=u.generateTopUV(C,a,b,c);C.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,m=void 0!==b.bevelSize?b.bevelSize:k-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,n=void 0!==b.bevelEnabled?
b.bevelEnabled:!0,p=void 0!==b.curveSegments?b.curveSegments:12,r=void 0!==b.steps?b.steps:1,x=b.extrudePath,t,D=!1,u=void 0!==b.UVGenerator?b.UVGenerator:za.WorldUVGenerator,v,I,y,E;x&&(t=x.getSpacedPoints(r),D=!0,n=!1,v=void 0!==b.frames?b.frames:x.computeFrenetFrames(r,!1),I=new q,y=new q,E=new q);n||(m=k=l=0);var H,F,z,C=this,K=this.vertices.length,x=a.extractPoints(p),p=x.shape,G=x.holes;if(x=!ra.isClockWise(p)){p=p.reverse();F=0;for(z=G.length;F<z;F++)H=G[F],ra.isClockWise(H)&&(G[F]=H.reverse());
x=!1}var J=ra.triangulateShape(p,G),Q=p;F=0;for(z=G.length;F<z;F++)H=G[F],p=p.concat(H);var O,N,P,R,S,T=p.length,V,U=J.length,x=[],L=0;P=Q.length;O=P-1;for(N=L+1;L<P;L++,O++,N++)O===P&&(O=0),N===P&&(N=0),x[L]=d(Q[L],Q[O],Q[N]);var W=[],X,Z=x.concat();F=0;for(z=G.length;F<z;F++){H=G[F];X=[];L=0;P=H.length;O=P-1;for(N=L+1;L<P;L++,O++,N++)O===P&&(O=0),N===P&&(N=0),X[L]=d(H[L],H[O],H[N]);W.push(X);Z=Z.concat(X)}for(O=0;O<l;O++){P=O/l;R=k*Math.cos(P*Math.PI/2);N=m*Math.sin(P*Math.PI/2);L=0;for(P=Q.length;L<
P;L++)S=c(Q[L],x[L],N),f(S.x,S.y,-R);F=0;for(z=G.length;F<z;F++)for(H=G[F],X=W[F],L=0,P=H.length;L<P;L++)S=c(H[L],X[L],N),f(S.x,S.y,-R)}N=m;for(L=0;L<T;L++)S=n?c(p[L],Z[L],N):p[L],D?(y.copy(v.normals[0]).multiplyScalar(S.x),I.copy(v.binormals[0]).multiplyScalar(S.y),E.copy(t[0]).add(y).add(I),f(E.x,E.y,E.z)):f(S.x,S.y,0);for(P=1;P<=r;P++)for(L=0;L<T;L++)S=n?c(p[L],Z[L],N):p[L],D?(y.copy(v.normals[P]).multiplyScalar(S.x),I.copy(v.binormals[P]).multiplyScalar(S.y),E.copy(t[P]).add(y).add(I),f(E.x,E.y,
E.z)):f(S.x,S.y,h/r*P);for(O=l-1;0<=O;O--){P=O/l;R=k*Math.cos(P*Math.PI/2);N=m*Math.sin(P*Math.PI/2);L=0;for(P=Q.length;L<P;L++)S=c(Q[L],x[L],N),f(S.x,S.y,h+R);F=0;for(z=G.length;F<z;F++)for(H=G[F],X=W[F],L=0,P=H.length;L<P;L++)S=c(H[L],X[L],N),D?f(S.x,S.y+t[r-1].y,t[r-1].x+R):f(S.x,S.y,h+R)}(function(){if(n){var a=0*T;for(L=0;L<U;L++)V=J[L],g(V[2]+a,V[1]+a,V[0]+a);a=T*(r+2*l);for(L=0;L<U;L++)V=J[L],g(V[0]+a,V[1]+a,V[2]+a)}else{for(L=0;L<U;L++)V=J[L],g(V[2],V[1],V[0]);for(L=0;L<U;L++)V=J[L],g(V[0]+
T*r,V[1]+T*r,V[2]+T*r)}})();(function(){var a=0;e(Q,a);a+=Q.length;F=0;for(z=G.length;F<z;F++)H=G[F],e(H,a),a+=H.length})()};za.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new B(b.x,b.y),new B(c.x,c.y),new B(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new B(b.x,1-b.z),new B(c.x,1-c.z),new B(d.x,1-d.z),new B(e.x,1-e.z)]:[new B(b.y,1-b.z),new B(c.y,1-c.z),new B(d.y,1-d.z),new B(e.y,
1-e.z)]}};Dc.prototype=Object.create(za.prototype);Dc.prototype.constructor=Dc;mb.prototype=Object.create(G.prototype);mb.prototype.constructor=mb;Vb.prototype=Object.create(Q.prototype);Vb.prototype.constructor=Vb;Wb.prototype=Object.create(G.prototype);Wb.prototype.constructor=Wb;Ec.prototype=Object.create(Q.prototype);Ec.prototype.constructor=Ec;Fc.prototype=Object.create(Q.prototype);Fc.prototype.constructor=Fc;Xb.prototype=Object.create(G.prototype);Xb.prototype.constructor=Xb;Gc.prototype=Object.create(Q.prototype);
Gc.prototype.constructor=Gc;cb.prototype=Object.create(Q.prototype);cb.prototype.constructor=cb;cb.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};cb.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?za.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,m=e.holes;if(!ra.isClockWise(k))for(k=k.reverse(),e=0,f=m.length;e<
f;e++)g=m[e],ra.isClockWise(g)&&(m[e]=g.reverse());var l=ra.triangulateShape(k,m);e=0;for(f=m.length;e<f;e++)g=m[e],k=k.concat(g);m=k.length;f=l.length;for(e=0;e<m;e++)g=k[e],this.vertices.push(new q(g.x,g.y,0));for(e=0;e<f;e++)m=l[e],k=m[0]+h,g=m[1]+h,m=m[2]+h,this.faces.push(new ea(k,g,m,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,m))};Yb.prototype=Object.create(G.prototype);Yb.prototype.constructor=Yb;Ua.prototype=Object.create(G.prototype);Ua.prototype.constructor=Ua;nb.prototype=
Object.create(Q.prototype);nb.prototype.constructor=nb;Hc.prototype=Object.create(nb.prototype);Hc.prototype.constructor=Hc;Ic.prototype=Object.create(Ua.prototype);Ic.prototype.constructor=Ic;Zb.prototype=Object.create(G.prototype);Zb.prototype.constructor=Zb;Jc.prototype=Object.create(Q.prototype);Jc.prototype.constructor=Jc;ob.prototype=Object.create(Q.prototype);ob.prototype.constructor=ob;var Na=Object.freeze({WireframeGeometry:Mb,ParametricGeometry:uc,ParametricBufferGeometry:Nb,TetrahedronGeometry:vc,
TetrahedronBufferGeometry:Ob,OctahedronGeometry:wc,OctahedronBufferGeometry:Pb,IcosahedronGeometry:xc,IcosahedronBufferGeometry:Qb,DodecahedronGeometry:yc,DodecahedronBufferGeometry:Rb,PolyhedronGeometry:zc,PolyhedronBufferGeometry:ua,TubeGeometry:Ac,TubeBufferGeometry:Sb,TorusKnotGeometry:Bc,TorusKnotBufferGeometry:Tb,TorusGeometry:Cc,TorusBufferGeometry:Ub,TextGeometry:Dc,SphereBufferGeometry:mb,SphereGeometry:Vb,RingGeometry:Ec,RingBufferGeometry:Wb,PlaneBufferGeometry:ib,PlaneGeometry:Fc,LatheGeometry:Gc,
LatheBufferGeometry:Xb,ShapeGeometry:cb,ExtrudeGeometry:za,EdgesGeometry:Yb,ConeGeometry:Hc,ConeBufferGeometry:Ic,CylinderGeometry:nb,CylinderBufferGeometry:Ua,CircleBufferGeometry:Zb,CircleGeometry:Jc,BoxBufferGeometry:hb,BoxGeometry:ob});$b.prototype=Object.create(Fa.prototype);$b.prototype.constructor=$b;$b.prototype.isShadowMaterial=!0;ac.prototype=Object.create(Fa.prototype);ac.prototype.constructor=ac;ac.prototype.isRawShaderMaterial=!0;Kc.prototype={constructor:Kc,isMultiMaterial:!0,toJSON:function(a){for(var b=
{metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f)}b.visible=this.visible;return b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};Oa.prototype=Object.create(U.prototype);Oa.prototype.constructor=Oa;Oa.prototype.isMeshStandardMaterial=
!0;Oa.prototype.copy=function(a){U.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=
a.morphTargets;this.morphNormals=a.morphNormals;return this};pb.prototype=Object.create(Oa.prototype);pb.prototype.constructor=pb;pb.prototype.isMeshPhysicalMaterial=!0;pb.prototype.copy=function(a){Oa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};db.prototype=Object.create(U.prototype);db.prototype.constructor=db;db.prototype.isMeshPhongMaterial=!0;db.prototype.copy=function(a){U.prototype.copy.call(this,
a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=
a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};qb.prototype=
Object.create(U.prototype);qb.prototype.constructor=qb;qb.prototype.isMeshNormalMaterial=!0;qb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};rb.prototype=Object.create(U.prototype);rb.prototype.constructor=rb;rb.prototype.isMeshLambertMaterial=!0;rb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;
this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=
a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};sb.prototype=Object.create(U.prototype);sb.prototype.constructor=sb;sb.prototype.isLineDashedMaterial=!0;sb.prototype.copy=function(a){U.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var Df=Object.freeze({ShadowMaterial:$b,SpriteMaterial:kb,RawShaderMaterial:ac,ShaderMaterial:Fa,PointsMaterial:xa,
MultiMaterial:Kc,MeshPhysicalMaterial:pb,MeshStandardMaterial:Oa,MeshPhongMaterial:db,MeshNormalMaterial:qb,MeshLambertMaterial:rb,MeshDepthMaterial:Za,MeshBasicMaterial:Ma,LineDashedMaterial:sb,LineBasicMaterial:oa,Material:U}),ce={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},Ga=new Fd;Object.assign(Ja.prototype,{load:function(a,b,c,d){void 0===
a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=ce.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){var h=g[1],k=!!g[2],g=g[3],g=window.decodeURIComponent(g);k&&(g=window.atob(g));try{var m,l=(this.responseType||"").toLowerCase();switch(l){case "arraybuffer":case "blob":m=new ArrayBuffer(g.length);for(var n=new Uint8Array(m),k=0;k<g.length;k++)n[k]=g.charCodeAt(k);"blob"===l&&(m=
new Blob([m],{type:h}));break;case "document":m=(new DOMParser).parseFromString(g,h);break;case "json":m=JSON.parse(g);break;default:m=g}window.setTimeout(function(){b&&b(m);e.manager.itemEnd(a)},0)}catch(q){window.setTimeout(function(){d&&d(q);e.manager.itemError(a)},0)}}else{var p=new XMLHttpRequest;p.open("GET",a,!0);p.addEventListener("load",function(c){var f=c.target.response;ce.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.XHRLoader: HTTP Status 0 received."),
b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a))},!1);void 0!==c&&p.addEventListener("progress",function(a){c(a)},!1);p.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.responseType&&(p.responseType=this.responseType);void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials);p.overrideMimeType&&p.overrideMimeType("text/plain");p.send(null)}e.manager.itemStart(a);return p},setPath:function(a){this.path=a;return this},setResponseType:function(a){this.responseType=
a;return this},setWithCredentials:function(a){this.withCredentials=a;return this}});Object.assign(we.prototype,{load:function(a,b,c,d){function e(e){k.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Lb;h.image=g;var k=new Ja(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=
0,l=0,n=a.length;l<n;++l)e(l);else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;
return this}});Object.assign(Gd.prototype,{load:function(a,b,c,d){var e=this,f=new lb,g=new Ja(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?
a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Lc.prototype,{load:function(a,b,c,d){var e=this,f=document.createElementNS("http://www.w3.org/1999/xhtml","img");f.onload=function(){f.onload=null;URL.revokeObjectURL(f.src);b&&b(f);e.manager.itemEnd(a)};f.onerror=d;if(0===a.indexOf("data:"))f.src=a;else{var g=new Ja;g.setPath(this.path);
g.setResponseType("blob");g.setWithCredentials(this.withCredentials);g.load(a,function(a){f.src=URL.createObjectURL(a)},c,d)}e.manager.itemStart(a);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(Hd.prototype,{load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new Xa,g=new Lc(this.manager);
g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(gd.prototype,{load:function(a,b,c,d){var e=new da,f=new Lc(this.manager);f.setCrossOrigin(this.crossOrigin);f.setWithCredentials(this.withCredentials);f.setPath(this.path);f.load(a,function(c){var d=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=d?1022:
1023;e.image=c;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setPath:function(a){this.path=a;return this}});pa.prototype=Object.assign(Object.create(z.prototype),{constructor:pa,isLight:!0,copy:function(a){z.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=z.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();
a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});hd.prototype=Object.assign(Object.create(pa.prototype),{constructor:hd,isHemisphereLight:!0,copy:function(a){pa.prototype.copy.call(this,
a);this.groundColor.copy(a.groundColor);return this}});Object.assign(tb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;
return a}});id.prototype=Object.assign(Object.create(tb.prototype),{constructor:id,isSpotLightShadow:!0,update:function(a){var b=2*T.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height;a=a.distance||500;var d=this.camera;if(b!==d.fov||c!==d.aspect||a!==d.far)d.fov=b,d.aspect=c,d.far=a,d.updateProjectionMatrix()}});jd.prototype=Object.assign(Object.create(pa.prototype),{constructor:jd,isSpotLight:!0,copy:function(a){pa.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=
a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});kd.prototype=Object.assign(Object.create(pa.prototype),{constructor:kd,isPointLight:!0,copy:function(a){pa.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});ld.prototype=Object.assign(Object.create(tb.prototype),{constructor:ld});md.prototype=Object.assign(Object.create(pa.prototype),{constructor:md,isDirectionalLight:!0,copy:function(a){pa.prototype.copy.call(this,
a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});nd.prototype=Object.assign(Object.create(pa.prototype),{constructor:nd,isAmbientLight:!0});var ma={arraySlice:function(a,b,c){return ma.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=
a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=a[h+k];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],
void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};qa.prototype={constructor:qa,evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&
(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||
this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,b,c){}};Object.assign(qa.prototype,{beforeStart_:qa.prototype.copySampleValue_,afterEnd_:qa.prototype.copySampleValue_});od.prototype=Object.assign(Object.create(qa.prototype),{constructor:od,DefaultSettings_:{endingStart:2400,endingEnd:2400},
intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,
b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,m=this._offsetNext,l=this._weightPrev,n=this._weightNext,p=(c-b)/(d-b);c=p*p;d=c*p;b=-l*d+2*l*c-l*p;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*p+1;p=(-1-n)*d+(1.5+n)*c+.5*p;n=n*d-n*c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+l*f[h+c]+p*f[a+c]+n*f[m+c];return e}});Mc.prototype=Object.assign(Object.create(qa.prototype),{constructor:Mc,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;
a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});pd.prototype=Object.assign(Object.create(qa.prototype),{constructor:pd,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});var Wa;Wa={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new pd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new Mc(this.times,this.values,
this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new od(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b;switch(a){case 2300:b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn(b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=
0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=ma.arraySlice(c,e,f),this.values=ma.arraySlice(this.values,e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("invalid value size in track",this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("track is empty",
this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("time is not a valid number",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("out of order keys",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ma.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("value is not a valid number",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,
f=a.length-1,g=1;g<f;++g){var h=!1,k=a[g];if(k!==a[g+1]&&(1!==g||k!==k[0]))if(d)h=!0;else for(var m=g*c,l=m-c,n=m+c,k=0;k!==c;++k){var p=b[m+k];if(p!==b[l+k]||p!==b[n+k]){h=!0;break}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,k=0;k!==c;++k)b[m+k]=b[h+k];++e}}if(0<f){a[e]=a[f];h=f*c;m=e*c;for(k=0;k!==c;++k)b[m+k]=b[h+k];++e}e!==a.length&&(this.times=ma.arraySlice(a,0,e),this.values=ma.arraySlice(b,0,e*c));return this}};bc.prototype=Object.assign(Object.create(Wa),{constructor:bc,ValueTypeName:"vector"});
qd.prototype=Object.assign(Object.create(qa.prototype),{constructor:qd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)ba.slerpFlat(e,0,f,a-g,f,a,b);return e}});Nc.prototype=Object.assign(Object.create(Wa),{constructor:Nc,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new qd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});
cc.prototype=Object.assign(Object.create(Wa),{constructor:cc,ValueTypeName:"number"});rd.prototype=Object.assign(Object.create(Wa),{constructor:rd,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});sd.prototype=Object.assign(Object.create(Wa),{constructor:sd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
td.prototype=Object.assign(Object.create(Wa),{constructor:td,ValueTypeName:"color"});vb.prototype=Wa;Wa.constructor=vb;Object.assign(vb,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=vb._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];ma.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=
b.toJSON(a);else{var b={name:a.name,times:ma.convertArray(a.times,Array),values:ma.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return cc;case "vector":case "vector2":case "vector3":case "vector4":return bc;case "color":return td;case "quaternion":return Nc;case "bool":case "boolean":return sd;
case "string":return rd}throw Error("Unsupported typeName: "+a);}});Ha.prototype={constructor:Ha,resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}};Object.assign(Ha,{parse:function(a){for(var b=[],c=a.tracks,
d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(vb.parse(c[e]).scale(d));return new Ha(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(vb.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var m=ma.getKeyframeOrder(h),h=ma.sortedArray(h,1,m),k=ma.sortedArray(k,1,m);d||0!==h[0]||(h.push(e),
k.push(k[0]));f.push((new cc(".morphTargetInfluences["+b[g].name+"]",h,k)).scale(1/c))}return new Ha(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],k=h.name.match(e);if(k&&1<k.length){var m=k[1];(k=d[m])||(d[m]=k=[]);k.push(h)}}a=[];for(m in d)a.push(Ha.CreateFromMorphTargetSequence(m,
d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("  no animation in JSONLoader data"),null;for(var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ma.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.hierarchy||[],k=0;k<h.length;k++){var m=h[k].keys;if(m&&0!==m.length)if(m[0].morphTargets){for(var f={},l=0;l<m.length;l++)if(m[l].morphTargets)for(var n=0;n<m[l].morphTargets.length;n++)f[m[l].morphTargets[n]]=
-1;for(var p in f){for(var q=[],x=[],n=0;n!==m[l].morphTargets.length;++n){var t=m[l];q.push(t.time);x.push(t.morphTarget===p?1:0)}d.push(new cc(".morphTargetInfluence["+p+"]",q,x))}f=f.length*(g||1)}else l=".bones["+b[k].name+"]",c(bc,l+".position",m,"pos",d),c(Nc,l+".quaternion",m,"rot",d),c(bc,l+".scale",m,"scl",d)}return 0===d.length?null:new Ha(e,f,d)}});Object.assign(ud.prototype,{load:function(a,b,c,d){var e=this;(new Ja(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=
a},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Df[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);
void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.shading&&(d.shading=a.shading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=
a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=
a.morphTargets);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new B).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=
b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));
void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);if(void 0!==a.materials)for(var e=0,f=a.materials.length;e<f;e++)d.materials.push(this.parse(a.materials[e]));return d}});Object.assign(Id.prototype,{load:function(a,b,c,d){var e=this;(new Ja(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},
c,d)},parse:function(a){var b=new G,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=new d[c.type](c.array),b.setIndex(new C(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new C(c,g.itemSize,g.normalized))}d=a.data.groups||a.data.drawcalls||a.data.offsets;
if(void 0!==d)for(f=0,c=d.length;f!==c;++f)e=d[f],b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(d=new q,void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new Ca(d,a.radius));return b}});wb.prototype={constructor:wb,crossOrigin:void 0,extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a,
b,c;return function(d,e,f){function g(a,c,d,g,k){a=e+a;var l=wb.Handlers.get(a);null!==l?a=l.load(a):(b.setCrossOrigin(f),a=b.load(a));void 0!==c&&(a.repeat.fromArray(c),1!==c[0]&&(a.wrapS=1E3),1!==c[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==g&&("repeat"===g[0]&&(a.wrapS=1E3),"mirror"===g[0]&&(a.wrapS=1002),"repeat"===g[1]&&(a.wrapT=1E3),"mirror"===g[1]&&(a.wrapT=1002));void 0!==k&&(a.anisotropy=k);c=T.generateUUID();h[c]=a;return c}void 0===a&&(a=new O);void 0===b&&(b=new gd);
void 0===c&&(c=new ud);var h={},k={uuid:T.generateUUID(),type:"MeshLambertMaterial"},m;for(m in d){var l=d[m];switch(m){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;case "DbgName":k.name=l;break;case "blending":k.blending=Fe[l];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",m,"is no longer supported.");break;case "colorDiffuse":k.color=a.fromArray(l).getHex();break;case "colorSpecular":k.specular=a.fromArray(l).getHex();break;
case "colorEmissive":k.emissive=a.fromArray(l).getHex();break;case "specularCoef":k.shininess=l;break;case "shading":"basic"===l.toLowerCase()&&(k.type="MeshBasicMaterial");"phong"===l.toLowerCase()&&(k.type="MeshPhongMaterial");"standard"===l.toLowerCase()&&(k.type="MeshStandardMaterial");break;case "mapDiffuse":k.map=g(l,d.mapDiffuseRepeat,d.mapDiffuseOffset,d.mapDiffuseWrap,d.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;
case "mapEmissive":k.emissiveMap=g(l,d.mapEmissiveRepeat,d.mapEmissiveOffset,d.mapEmissiveWrap,d.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;case "mapLight":k.lightMap=g(l,d.mapLightRepeat,d.mapLightOffset,d.mapLightWrap,d.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":k.aoMap=g(l,d.mapAORepeat,d.mapAOOffset,d.mapAOWrap,
d.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":k.bumpMap=g(l,d.mapBumpRepeat,d.mapBumpOffset,d.mapBumpWrap,d.mapBumpAnisotropy);break;case "mapBumpScale":k.bumpScale=l;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":k.normalMap=g(l,d.mapNormalRepeat,d.mapNormalOffset,d.mapNormalWrap,d.mapNormalAnisotropy);break;case "mapNormalFactor":k.normalScale=[l,l];break;
case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":k.specularMap=g(l,d.mapSpecularRepeat,d.mapSpecularOffset,d.mapSpecularWrap,d.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;case "mapMetalness":k.metalnessMap=g(l,d.mapMetalnessRepeat,d.mapMetalnessOffset,d.mapMetalnessWrap,d.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;
case "mapRoughness":k.roughnessMap=g(l,d.mapRoughnessRepeat,d.mapRoughnessOffset,d.mapRoughnessWrap,d.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":k.alphaMap=g(l,d.mapAlphaRepeat,d.mapAlphaOffset,d.mapAlphaWrap,d.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":k.side=1;break;case "doubleSided":k.side=
2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");k.opacity=l;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":k[m]=l;break;case "vertexColors":!0===l&&(k.vertexColors=2);"face"===l&&(k.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",m,l)}}"MeshBasicMaterial"===k.type&&delete k.emissive;"MeshPhongMaterial"!==
k.type&&delete k.specular;1>k.opacity&&(k.transparent=!0);c.setTextures(h);return c.parse(k)}}()};wb.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};Object.assign(Jd.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:wb.prototype.extractUrlBase(a),g=new Ja(this.manager);g.setWithCredentials(this.withCredentials);
g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new Q,d=void 0!==a.scale?1/a.scale:
1;(function(b){var d,g,h,k,l,w,n,p,r,x,t,D,u,v=a.faces;w=a.vertices;var z=a.normals,y=a.colors,E=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&E++;for(d=0;d<E;d++)c.faceVertexUvs[d]=[]}k=0;for(l=w.length;k<l;)d=new q,d.x=w[k++]*b,d.y=w[k++]*b,d.z=w[k++]*b,c.vertices.push(d);k=0;for(l=v.length;k<l;)if(b=v[k++],r=b&1,h=b&2,d=b&8,n=b&16,x=b&32,w=b&64,b&=128,r){r=new ea;r.a=v[k];r.b=v[k+1];r.c=v[k+3];t=new ea;t.a=v[k+1];t.b=v[k+2];t.c=v[k+3];k+=4;h&&(h=v[k++],r.materialIndex=h,t.materialIndex=
h);h=c.faces.length;if(d)for(d=0;d<E;d++)for(D=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)p=v[k++],u=D[2*p],p=D[2*p+1],u=new B(u,p),2!==g&&c.faceVertexUvs[d][h].push(u),0!==g&&c.faceVertexUvs[d][h+1].push(u);n&&(n=3*v[k++],r.normal.set(z[n++],z[n++],z[n]),t.normal.copy(r.normal));if(x)for(d=0;4>d;d++)n=3*v[k++],x=new q(z[n++],z[n++],z[n]),2!==d&&r.vertexNormals.push(x),0!==d&&t.vertexNormals.push(x);w&&(w=v[k++],w=y[w],r.color.setHex(w),t.color.setHex(w));if(b)for(d=
0;4>d;d++)w=v[k++],w=y[w],2!==d&&r.vertexColors.push(new O(w)),0!==d&&t.vertexColors.push(new O(w));c.faces.push(r);c.faces.push(t)}else{r=new ea;r.a=v[k++];r.b=v[k++];r.c=v[k++];h&&(h=v[k++],r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<E;d++)for(D=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)p=v[k++],u=D[2*p],p=D[2*p+1],u=new B(u,p),c.faceVertexUvs[d][h].push(u);n&&(n=3*v[k++],r.normal.set(z[n++],z[n++],z[n]));if(x)for(d=0;3>d;d++)n=3*v[k++],x=new q(z[n++],z[n++],z[n]),r.vertexNormals.push(x);
w&&(w=v[k++],r.color.setHex(y[w]));if(b)for(d=0;3>d;d++)w=v[k++],r.vertexColors.push(new O(y[w]));c.faces.push(r)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new ga(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new ga(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<
b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.")})();(function(b){if(void 0!==a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=a.morphTargets[d].name;
c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,k=a.morphTargets[d].vertices,l=0,w=k.length;l<w;l+=3){var n=new q;n.x=k[l]*b;n.y=k[l+1]*b;n.z=k[l+2]*b;h.push(n)}}if(void 0!==a.morphColors&&0<a.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),b=c.faces,h=a.morphColors[0].colors,d=0,g=b.length;d<g;d++)b[d].color.fromArray(h,3*d)})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);void 0!==a.animations&&
(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=Ha.parseAnimation(d[g],c.bones);h&&b.push(h)}c.morphTargets&&(d=Ha.CreateClipsFromMorphTargetSequences(c.morphTargets,10),b=b.concat(d));0<b.length&&(c.animations=b)})();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=wb.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}});Object.assign(xe.prototype,
{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new Ja(e.manager)).load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);
a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new Jd,d=new Id,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new Na[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":g=new Na[h.type](h.width,h.height,h.depth,h.widthSegments,
h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":g=new Na[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":g=new Na[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":g=new Na[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);
break;case "SphereGeometry":case "SphereBufferGeometry":g=new Na[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "IcosahedronGeometry":case "OctahedronGeometry":case "TetrahedronGeometry":g=new Na[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":g=new Na[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":g=
new Na[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":g=new Na[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":g=new Na[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+
h.type+'"');continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new ud;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=Ha.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a)})}
var d=this,e={};if(void 0!==a&&0<a.length){var f=new Fd(b),g=new Lc(f);g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var k=a[f],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=c(l)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&
console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new da(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Ge));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],ae),h.wrapT=c(g.wrap[1],ae));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,be));
void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,be));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);d[g.uuid]=h}return d},parseObject:function(){var a=new J;return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a]}var g;switch(b.type){case "Scene":g=new jb;void 0!==b.background&&Number.isInteger(b.background)&&
(g.background=new O(b.background));void 0!==b.fog&&("Fog"===b.fog.type?g.fog=new Jb(b.fog.color,b.fog.near,b.fog.far):"FogExp2"===b.fog.type&&(g.fog=new Ib(b.fog.color,b.fog.density)));break;case "PerspectiveCamera":g=new Ea(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case "OrthographicCamera":g=
new Hb(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":g=new nd(b.color,b.intensity);break;case "DirectionalLight":g=new md(b.color,b.intensity);break;case "PointLight":g=new kd(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":g=new jd(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case "HemisphereLight":g=new hd(b.color,b.groundColor,b.intensity);break;case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new dd(g,h):new ya(g,
h);break;case "LOD":g=new rc;break;case "Line":g=new Ta(e(b.geometry),f(b.material),b.mode);break;case "LineSegments":g=new la(e(b.geometry),f(b.material));break;case "PointCloud":case "Points":g=new Kb(e(b.geometry),f(b.material));break;case "Sprite":g=new qc(f(b.material));break;case "Group":g=new sc;break;default:g=new z}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),
void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.quaternion&&g.quaternion.fromArray(b.quaternion),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);b.shadow&&(void 0!==b.shadow.bias&&(g.shadow.bias=b.shadow.bias),void 0!==b.shadow.radius&&(g.shadow.radius=b.shadow.radius),void 0!==b.shadow.mapSize&&g.shadow.mapSize.fromArray(b.shadow.mapSize),void 0!==b.shadow.camera&&(g.shadow.camera=
this.parseObject(b.shadow.camera)));void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var k in b.children)g.add(this.parseObject(b.children[k],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var l=b[h];k=g.getObjectByProperty("uuid",l.object);void 0!==k&&g.addLevel(k,l.distance)}return g}}()});ia.prototype={constructor:ia,getPoint:function(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null},getPointAt:function(a){a=
this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){a||(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){a||(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;
this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=
a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new q,d=[],e=[],f=[],g=new q,h=new J,k,l;for(k=0;k<=a;k++)l=k/a,d[k]=this.getTangentAt(l),d[k].normalize();e[0]=new q;f[0]=new q;k=Number.MAX_VALUE;l=Math.abs(d[0].x);var w=Math.abs(d[0].y),n=Math.abs(d[0].z);l<=k&&(k=l,c.set(1,0,0));w<=k&&(k=w,c.set(0,1,0));n<=k&&c.set(0,0,1);
g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(k=1;k<=a;k++)e[k]=e[k-1].clone(),f[k]=f[k-1].clone(),g.crossVectors(d[k-1],d[k]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(T.clamp(d[k-1].dot(d[k]),-1,1)),e[k].applyMatrix4(h.makeRotationAxis(g,c))),f[k].crossVectors(d[k],e[k]);if(!0===b)for(c=Math.acos(T.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),k=1;k<=a;k++)e[k].applyMatrix4(h.makeRotationAxis(d[k],c*k)),
f[k].crossVectors(d[k],e[k]);return{tangents:d,normals:e,binormals:f}}};ia.create=function(a,b){a.prototype=Object.create(ia.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Sa.prototype=Object.create(ia.prototype);Sa.prototype.constructor=Sa;Sa.prototype.isLineCurve=!0;Sa.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};Sa.prototype.getPointAt=function(a){return this.getPoint(a)};Sa.prototype.getTangent=
function(a){return this.v2.clone().sub(this.v1).normalize()};Oc.prototype=Object.assign(Object.create(ia.prototype),{constructor:Oc,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Sa(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},
getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){a||(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&
b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},createPointsGeometry:function(a){a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){a=this.getSpacedPoints(a);
return this.createGeometry(a)},createGeometry:function(a){for(var b=new Q,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new q(e.x,e.y,e.z||0))}return b}});Va.prototype=Object.create(ia.prototype);Va.prototype.constructor=Va;Va.prototype.isEllipseCurve=!0;Va.prototype.getPoint=function(a){for(var b=2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;)c+=b;for(;c>b;)c-=b;c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+
this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new B(a,e)};var Xc={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*
a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};xb.prototype=Object.create(ia.prototype);xb.prototype.constructor=xb;xb.prototype.isSplineCurve=!0;xb.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0===c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=Xc.interpolate;return new B(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a))};yb.prototype=Object.create(ia.prototype);
yb.prototype.constructor=yb;yb.prototype.getPoint=function(a){var b=ra.b3;return new B(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y))};yb.prototype.getTangent=function(a){var b=Xc.tangentCubicBezier;return(new B(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y))).normalize()};zb.prototype=Object.create(ia.prototype);zb.prototype.constructor=zb;zb.prototype.getPoint=function(a){var b=ra.b2;return new B(b(a,this.v0.x,
this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))};zb.prototype.getTangent=function(a){var b=Xc.tangentQuadraticBezier;return(new B(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))).normalize()};var de=Object.assign(Object.create(Oc.prototype),{fromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Sa(this.currentPoint.clone(),new B(a,b));
this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){a=new zb(this.currentPoint.clone(),new B(a,b),new B(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new yb(this.currentPoint.clone(),new B(a,b),new B(c,d),new B(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),b=new xb(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,
e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Va(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)}});Ab.prototype=Object.assign(Object.create(de),
{constructor:Ab,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});Pc.prototype=de;de.constructor=Pc;Kd.prototype={moveTo:function(a,b){this.currentPath=new Pc;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,
b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Ab;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===
g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=ra.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);var g,h,k,l=[];if(1===f.length)return h=f[0],k=new Ab,k.curves=h.curves,l.push(k),l;var q=!e(f[0].getPoints()),q=a?!q:q;k=[];var n=[],p=[],r=0,x;n[r]=void 0;p[r]=[];for(var t=0,D=f.length;t<D;t++)h=f[t],x=h.getPoints(),g=e(x),(g=a?!g:g)?(!q&&n[r]&&r++,
n[r]={s:new Ab,p:x},n[r].s.curves=h.curves,q&&r++,p[r]=[]):p[r].push({h:h,p:x[0]});if(!n[0])return c(f);if(1<n.length){t=!1;h=[];e=0;for(f=n.length;e<f;e++)k[e]=[];e=0;for(f=n.length;e<f;e++)for(g=p[e],q=0;q<g.length;q++){r=g[q];x=!0;for(D=0;D<n.length;D++)d(r.p,n[D].p)&&(e!==D&&h.push({froms:e,tos:D,hole:q}),x?(x=!1,k[D].push(r)):t=!0);x&&k[e].push(r)}0<h.length&&(t||(p=k))}t=0;for(e=n.length;t<e;t++)for(k=n[t].s,l.push(k),h=p[t],f=0,g=h.length;f<g;f++)k.holes.push(h[f].h);return l}};Object.assign(Ld.prototype,
{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=0;b=[];for(var g=0;g<a.length;g++){var h;h=e;var k=f,l=d.glyphs[a[g]]||d.glyphs["?"];if(l){var q=new Kd,n=[],p=ra.b2,r=ra.b3,x,t,D,u,v,z,y,E;if(l.o)for(var B=l._cachedOutline||(l._cachedOutline=l.o.split(" ")),C=0,G=B.length;C<G;)switch(B[C++]){case "m":x=B[C++]*h+k;t=B[C++]*h;q.moveTo(x,t);break;case "l":x=B[C++]*h+k;t=B[C++]*h;q.lineTo(x,t);break;case "q":x=
B[C++]*h+k;t=B[C++]*h;v=B[C++]*h+k;z=B[C++]*h;q.quadraticCurveTo(v,z,x,t);if(u=n[n.length-1]){D=u.x;u=u.y;for(var J=1;J<=c;J++){var K=J/c;p(K,D,v,x);p(K,u,z,t)}}break;case "b":if(x=B[C++]*h+k,t=B[C++]*h,v=B[C++]*h+k,z=B[C++]*h,y=B[C++]*h+k,E=B[C++]*h,q.bezierCurveTo(v,z,y,E,x,t),u=n[n.length-1])for(D=u.x,u=u.y,J=1;J<=c;J++)K=J/c,r(K,D,v,y,x),r(K,u,z,E,t)}h={offset:l.ha*h,path:q}}else h=void 0;f+=h.offset;b.push(h.path)}c=[];d=0;for(a=b.length;d<a;d++)Array.prototype.push.apply(c,b[d].toShapes());
return c}});Object.assign(ye.prototype,{load:function(a,b,c,d){var e=this;(new Ja(this.manager)).load(a,function(a){var c;try{c=JSON.parse(a)}catch(d){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new Ld(a)}});var Nd;Object.assign(Od.prototype,{load:function(a,b,c,d){var e=new Ja(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){Md().decodeAudioData(a,
function(a){b(a)})},c,d)}});Object.assign(ze.prototype,{update:function(){var a,b,c,d,e,f,g,h=new J,k=new J;return function(l){if(a!==this||b!==l.focus||c!==l.fov||d!==l.aspect*this.aspect||e!==l.near||f!==l.far||g!==l.zoom){a=this;b=l.focus;c=l.fov;d=l.aspect*this.aspect;e=l.near;f=l.far;g=l.zoom;var q=l.projectionMatrix.clone(),n=this.eyeSep/2,p=n*e/b,r=e*Math.tan(T.DEG2RAD*c*.5)/g,x;k.elements[12]=-n;h.elements[12]=n;n=-r*d+p;x=r*d+p;q.elements[0]=2*e/(x-n);q.elements[8]=(x+n)/(x-n);this.cameraL.projectionMatrix.copy(q);
n=-r*d-p;x=r*d-p;q.elements[0]=2*e/(x-n);q.elements[8]=(x+n)/(x-n);this.cameraR.projectionMatrix.copy(q)}this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(k);this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(h)}}()});vd.prototype=Object.create(z.prototype);vd.prototype.constructor=vd;Pd.prototype=Object.assign(Object.create(z.prototype),{constructor:Pd,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),
this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=
new q,b=new ba,c=new q,d=new q;return function(e){z.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.setPosition(a.x,a.y,a.z);e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z)}}()});dc.prototype=Object.assign(Object.create(z.prototype),{constructor:dc,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},
setBuffer:function(a){this.source.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.start(0,this.startTime);a.playbackRate.value=this.playbackRate;this.isPlaying=
!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);
for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},
getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&(this.source.playbackRate.value=this.playbackRate),
this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.source.loop},setLoop:function(a){!1===this.hasPlaybackControl?console.warn("THREE.Audio: this Audio has no playback control."):this.source.loop=a},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.value=a;return this}});Qd.prototype=Object.assign(Object.create(dc.prototype),
{constructor:Qd,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=
a},updateMatrixWorld:function(){var a=new q;return function(b){z.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign(Rd.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});wd.prototype={constructor:wd,accumulate:function(a,b){var c=this.buffer,d=
this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=
b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d,e){ba.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}};fa.prototype={constructor:fa,getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=
this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=fa.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("  can not bind to material as node does not have a material",this);return}if(!a.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("  can not bind to objectName of node, undefined",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("  trying to update property for track: "+
b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!a.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",
this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):void 0!==f.length?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("  trying to update node for track: "+
this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}};Object.assign(fa.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:fa.prototype.getValue,_setValue_unbound:fa.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},
function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,
d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];
this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]]});fa.Composite=function(a,b,c){c=c||fa.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)};fa.Composite.prototype={constructor:fa.Composite,getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];
void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}};fa.create=function(a,b,c){return a&&a.isAnimationObjectGroup?new fa.Composite(a,b,c):new fa(a,b,c)};fa.parseTrackName=function(a){var b=
/^((?:\w+[\/:])*)(\w+)?(?:\.(\w+)(?:\[(.+)\])?)?\.(\w+)(?:\[(.+)\])?$/.exec(a);if(!b)throw Error("cannot parse trackName at all: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+a);return b};fa.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=
a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null};Sd.prototype={constructor:Sd,isAnimationObjectGroup:!0,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,k=h.length,l=0,q=arguments.length;l!==q;++l){var n=
arguments[l],p=n.uuid,r=e[p];if(void 0===r){r=c++;e[p]=r;b.push(n);for(var p=0,x=k;p!==x;++p)h[p].push(new fa(n,f[p],g[p]))}else if(r<d){var t=b[r],D=--d,x=b[D];e[x.uuid]=r;b[r]=x;e[p]=D;b[D]=n;p=0;for(x=k;p!==x;++p){var u=h[p],v=u[r];u[r]=u[D];void 0===v&&(v=new fa(n,f[p],g[p]));u[D]=v}}else b[r]!==t&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=d},remove:function(a){for(var b=this._objects,
c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g],l=k.uuid,q=d[l];if(void 0!==q&&q>=c){var n=c++,p=b[n];d[p.uuid]=q;b[q]=p;d[l]=n;b[n]=k;k=0;for(l=f;k!==l;++k){var p=e[k],r=p[q];p[q]=p[n];p[n]=r}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,k=arguments.length;h!==k;++h){var l=arguments[h].uuid,q=e[l];if(void 0!==
q)if(delete e[l],q<d){var l=--d,n=b[l],p=--c,r=b[p];e[n.uuid]=q;b[q]=n;e[r.uuid]=l;b[l]=r;b.pop();n=0;for(r=g;n!==r;++n){var x=f[n],t=x[p];x[q]=x[l];x[l]=t;x.pop()}}else for(p=--c,r=b[p],e[r.uuid]=q,b[q]=r,b.pop(),n=0,r=g;n!==r;++n)x=f[n],x[q]=x[p],x.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,l=Array(h.length),d=e.length;c[a]=
d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new fa(h[c],a,b);return l},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}};Td.prototype={constructor:Td,play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=
!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?
a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=
null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,
b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&
(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===d)a:{if(-1===e&&(this.loopCount=
0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",
action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,
f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}};Object.assign(Ud.prototype,sa.prototype,{clipAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"===typeof a?Ha.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===e&&(e=g._clip)}if(null===e)return null;e=new Td(this,
e,b);this._bindAction(e,g);this._addInactiveAction(e,c,d);return e},existingAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?Ha.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=
this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,
k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,b);
null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}});Object.assign(Ud.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,k=this._bindingsByRootAndName,l=k[h];void 0===l&&(l={},k[h]=l);for(k=0;k!==e;++k){var q=d[k],n=q.name,p=l[n];if(void 0===p){p=f[k];if(void 0!==p){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,h,n));continue}p=new wd(fa.create(c,n,b&&b._propertyBindings[k].binding.parsedPath),
q.ValueTypeName,q.getValueSize());++p.referenceCount;this._addInactiveBinding(p,h,n)}f[k]=p;g[k].resultBuffer=p.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},
_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},
get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=
f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var c=a._clip.uuid,d=this._actionsByClip,e=d[c],f=e.knownActions,g=f[f.length-1],h=a._byClipCacheIndex;g._byClipCacheIndex=h;f[h]=g;f.pop();a._byClipCacheIndex=null;delete e.actionByRoot[(b._localRoot||this._root).uuid];0===f.length&&delete d[c];this._removeInactiveBindingsForAction(a)},
_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,
e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=
this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new Mc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=
d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1)});Bb.prototype=Object.create(G.prototype);Bb.prototype.constructor=Bb;Bb.prototype.isInstancedBufferGeometry=!0;Bb.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,materialIndex:c})};Bb.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,
d.count,d.materialIndex)}return this};Vd.prototype={constructor:Vd,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},
getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+
1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};ec.prototype={constructor:ec,isInterleavedBuffer:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=
a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)}};fc.prototype=Object.create(ec.prototype);fc.prototype.constructor=fc;fc.prototype.isInstancedInterleavedBuffer=
!0;fc.prototype.copy=function(a){ec.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};gc.prototype=Object.create(C.prototype);gc.prototype.constructor=gc;gc.prototype.isInstancedBufferAttribute=!0;gc.prototype.copy=function(a){C.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};Wd.prototype={constructor:Wd,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),
this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];Xd(a,this,c,b);c.sort(Be);return c},intersectObjects:function(a,b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
c;for(var d=0,e=a.length;d<e;d++)Xd(a[d],this,c,b);c.sort(Be);return c}};Yd.prototype={constructor:Yd,start:function(){this.oldTime=this.startTime=(performance||Date).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=(performance||Date).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=
a}return a}};Zd.prototype={constructor:Zd,set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(T.clamp(a.y/this.radius,
-1,1)));return this}};na.prototype=Object.create(ya.prototype);na.prototype.constructor=na;na.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};na.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);
if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};na.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};na.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};na.prototype.setAnimationFPS=function(a,b){var c=
this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};na.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};na.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};na.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};na.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};na.prototype.getAnimationDuration=
function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};na.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};na.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};na.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>
d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+T.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==
d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g}}};Qc.prototype=Object.create(z.prototype);Qc.prototype.constructor=Qc;Qc.prototype.isImmediateRenderObject=!0;Rc.prototype=Object.create(la.prototype);Rc.prototype.constructor=Rc;Rc.prototype.update=function(){var a=new q,b=new q,c=new Ia;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);
var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,k=g.faces,l=g=0,q=k.length;l<q;l++)for(var n=k[l],p=0,r=n.vertexNormals.length;p<r;p++){var x=n.vertexNormals[p];a.copy(h[n[d[p]]]).applyMatrix4(e);b.copy(x).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,p=g=0,r=d.count;p<
r;p++)a.set(d.getX(p),d.getY(p),d.getZ(p)).applyMatrix4(e),b.set(h.getX(p),h.getY(p),h.getZ(p)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0;return this}}();hc.prototype=Object.create(z.prototype);hc.prototype.constructor=hc;hc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};hc.prototype.update=function(){var a=new q,b=new q;return function(){var c=this.light.distance?
this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();ic.prototype=Object.create(la.prototype);ic.prototype.constructor=ic;ic.prototype.getBoneList=function(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));
return b};ic.prototype.update=function(){for(var a=this.geometry,b=(new J).getInverse(this.root.matrixWorld),c=new J,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent&&f.parent.isBone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};jc.prototype=Object.create(ya.prototype);jc.prototype.constructor=jc;jc.prototype.dispose=
function(){this.geometry.dispose();this.material.dispose()};jc.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};kc.prototype=Object.create(z.prototype);kc.prototype.constructor=kc;kc.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};kc.prototype.update=function(){var a=new q;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();Sc.prototype=Object.create(la.prototype);Sc.prototype.constructor=Sc;Sc.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Tc.prototype=Object.create(la.prototype);Tc.prototype.constructor=Tc;Tc.prototype.update=function(){var a=new q,b=new q,c=new Ia;return function(){this.object.updateMatrixWorld(!0);
c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,k=0,l=f.length;k<l;k++){var q=f[k],n=q.normal;a.copy(g[q.a]).add(g[q.b]).add(g[q.c]).divideScalar(3).applyMatrix4(d);b.copy(n).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();lc.prototype=Object.create(z.prototype);lc.prototype.constructor=
lc;lc.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose()};lc.prototype.update=function(){var a=new q,b=new q,c=new q;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);e.lookAt(c);
e.scale.z=c.length()}}();Uc.prototype=Object.create(la.prototype);Uc.prototype.constructor=Uc;Uc.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=0,h=a.length;g<h;g++)b.vertices[a[g]].copy(d)}var b,c,d=new q,e=new Z;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",
-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.verticesNeedUpdate=!0}}();Vc.prototype=Object.create(ya.prototype);Vc.prototype.constructor=Vc;Vc.prototype.update=function(){this.box.setFromObject(this.object);this.box.getSize(this.scale);this.box.getCenter(this.position)};Wc.prototype=Object.create(la.prototype);Wc.prototype.constructor=Wc;Wc.prototype.update=
function(){var a=new Ba;return function(b){b&&b.isBox3?a.copy(b):a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();var Ce=new G;Ce.addAttribute("position",new ha([0,
0,0,0,1,0],3));var De=new Ua(0,.5,1,5,1);De.translate(0,-.5,0);Cb.prototype=Object.create(z.prototype);Cb.prototype.constructor=Cb;Cb.prototype.setDirection=function(){var a=new q,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Cb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();
this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Cb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};xd.prototype=Object.create(la.prototype);xd.prototype.constructor=xd;var $d=function(){function a(){}var b=new q,c=new a,d=new a,e=new a;a.prototype.init=function(a,b,c,d){this.c0=a;this.c1=c;this.c2=-3*a+3*b-2*c-d;this.c3=2*a-2*b+c+d};a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,l,n){this.init(b,c,((b-a)/e-(c-a)/
(e+l)+(c-b)/l)*l,((c-b)/l-(d-b)/(l+n)+(d-c)/n)*l)};a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b))};a.prototype.calc=function(a){var b=a*a;return this.c0+this.c1*a+this.c2*b+this.c3*b*a};return ia.create(function(a){this.points=a||[];this.closed=!1},function(a){var g=this.points,h,k;k=g.length;2>k&&console.log("duh, you need at least 2 points");a*=k-(this.closed?0:1);h=Math.floor(a);a-=h;this.closed?h+=0<h?0:(Math.floor(Math.abs(h)/g.length)+1)*g.length:0===a&&h===k-
1&&(h=k-2,a=1);var l,w,n;this.closed||0<h?l=g[(h-1)%k]:(b.subVectors(g[0],g[1]).add(g[0]),l=b);w=g[h%k];n=g[(h+1)%k];this.closed||h+2<k?g=g[(h+2)%k]:(b.subVectors(g[k-1],g[k-2]).add(g[k-1]),g=b);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var p="chordal"===this.type?.5:.25;k=Math.pow(l.distanceToSquared(w),p);h=Math.pow(w.distanceToSquared(n),p);p=Math.pow(n.distanceToSquared(g),p);1E-4>h&&(h=1);1E-4>k&&(k=h);1E-4>p&&(p=h);c.initNonuniformCatmullRom(l.x,w.x,n.x,g.x,k,
h,p);d.initNonuniformCatmullRom(l.y,w.y,n.y,g.y,k,h,p);e.initNonuniformCatmullRom(l.z,w.z,n.z,g.z,k,h,p)}else"catmullrom"===this.type&&(k=void 0!==this.tension?this.tension:.5,c.initCatmullRom(l.x,w.x,n.x,g.x,k),d.initCatmullRom(l.y,w.y,n.y,g.y,k),e.initCatmullRom(l.z,w.z,n.z,g.z,k));return new q(c.calc(a),d.calc(a),e.calc(a))})}();Ee.prototype=Object.create($d.prototype);var Ef=ia.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");this.points=
void 0===a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=Xc.interpolate;return new q(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a),c(d.z,e.z,f.z,b.z,a))}),Ff=ia.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=ra.b3;return new q(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y),b(a,this.v0.z,this.v1.z,this.v2.z,
this.v3.z))}),Gf=ia.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=ra.b2;return new q(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y),b(a,this.v0.z,this.v1.z,this.v2.z))}),Hf=ia.create(function(a,b){this.v1=a;this.v2=b},function(a){if(1===a)return this.v2.clone();var b=new q;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});yd.prototype=Object.create(Va.prototype);yd.prototype.constructor=yd;Object.assign(mc.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Ba.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");
return this.getSize(a)}});Object.assign(gb.prototype,{center:function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)}});Object.assign(Ia.prototype,{multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)}});Object.assign(J.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(a){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.error("THREE.Matrix4: .rotateZ() has been removed.")},
rotateByAxis:function(a,b){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")}});Object.assign(va.prototype,{isIntersectionLine:function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)}});Object.assign(ba.prototype,{multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)}});Object.assign(ab.prototype,
{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});Object.assign(Ab.prototype,{extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
return new za(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new cb(this,a)}});Object.assign(q.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)}});Object.assign(z.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(a){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}});Object.defineProperties(z.prototype,
{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});
Object.defineProperties(rc.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Ea.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(pa.prototype,{onlyShadow:{set:function(a){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(a){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
this.shadow.bias=a}},shadowDarkness:{set:function(a){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(C.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
return this.array.length}}});Object.assign(G.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(G.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});
Object.defineProperties(U.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(a){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){console.warn("THREE."+this.type+": .wrapRGB has been removed.");return new O}}});Object.defineProperties(db.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(a){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});
Object.defineProperties(Fa.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});sa.prototype=Object.assign(Object.create({constructor:sa,apply:function(a){console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in.");
Object.assign(a,this)}}),sa.prototype);Object.defineProperties(Ae.prototype,{dynamic:{set:function(a){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});Object.assign(Dd.prototype,{supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return this.capabilities.vertexTextures},
supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});Object.defineProperties(Dd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");this.shadowMap.cullFace=a}}});Object.defineProperties(pe.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1},set:function(a){a=1!==a;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+a+".");this.renderReverseSided=a}}});Object.defineProperties(Db.prototype,
{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},
set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});Object.assign(dc.prototype,{load:function(a){console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");var b=this;(new Od).load(a,function(a){b.setBuffer(a)});
return this}});Object.assign(Rd.prototype,{getData:function(a){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()}});l.WebGLRenderTargetCube=Eb;l.WebGLRenderTarget=Db;l.WebGLRenderer=Dd;l.ShaderLib=Gb;l.UniformsLib=W;l.UniformsUtils=La;l.ShaderChunk=X;l.FogExp2=Ib;l.Fog=Jb;l.Scene=jb;l.LensFlare=Ed;l.Sprite=qc;l.LOD=rc;l.SkinnedMesh=dd;l.Skeleton=bd;l.Bone=cd;l.Mesh=ya;l.LineSegments=la;l.Line=Ta;l.Points=Kb;l.Group=sc;l.VideoTexture=ed;l.DataTexture=
lb;l.CompressedTexture=Lb;l.CubeTexture=Xa;l.CanvasTexture=fd;l.DepthTexture=tc;l.TextureIdCount=function(){return ee++};l.Texture=da;l.MaterialIdCount=function(){return oe++};l.CompressedTextureLoader=we;l.BinaryTextureLoader=Gd;l.DataTextureLoader=Gd;l.CubeTextureLoader=Hd;l.TextureLoader=gd;l.ObjectLoader=xe;l.MaterialLoader=ud;l.BufferGeometryLoader=Id;l.DefaultLoadingManager=Ga;l.LoadingManager=Fd;l.JSONLoader=Jd;l.ImageLoader=Lc;l.FontLoader=ye;l.XHRLoader=Ja;l.Loader=wb;l.Cache=ce;l.AudioLoader=
Od;l.SpotLightShadow=id;l.SpotLight=jd;l.PointLight=kd;l.HemisphereLight=hd;l.DirectionalLightShadow=ld;l.DirectionalLight=md;l.AmbientLight=nd;l.LightShadow=tb;l.Light=pa;l.StereoCamera=ze;l.PerspectiveCamera=Ea;l.OrthographicCamera=Hb;l.CubeCamera=vd;l.Camera=Z;l.AudioListener=Pd;l.PositionalAudio=Qd;l.getAudioContext=Md;l.AudioAnalyser=Rd;l.Audio=dc;l.VectorKeyframeTrack=bc;l.StringKeyframeTrack=rd;l.QuaternionKeyframeTrack=Nc;l.NumberKeyframeTrack=cc;l.ColorKeyframeTrack=td;l.BooleanKeyframeTrack=
sd;l.PropertyMixer=wd;l.PropertyBinding=fa;l.KeyframeTrack=vb;l.AnimationUtils=ma;l.AnimationObjectGroup=Sd;l.AnimationMixer=Ud;l.AnimationClip=Ha;l.Uniform=Ae;l.InstancedBufferGeometry=Bb;l.BufferGeometry=G;l.GeometryIdCount=function(){return ad++};l.Geometry=Q;l.InterleavedBufferAttribute=Vd;l.InstancedInterleavedBuffer=fc;l.InterleavedBuffer=ec;l.InstancedBufferAttribute=gc;l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
return(new C(a,b)).setDynamic(!0)};l.Float64Attribute=function(a,b){return new C(new Float64Array(a),b)};l.Float32Attribute=ha;l.Uint32Attribute=$c;l.Int32Attribute=function(a,b){return new C(new Int32Array(a),b)};l.Uint16Attribute=Zc;l.Int16Attribute=function(a,b){return new C(new Int16Array(a),b)};l.Uint8ClampedAttribute=function(a,b){return new C(new Uint8ClampedArray(a),b)};l.Uint8Attribute=function(a,b){return new C(new Uint8Array(a),b)};l.Int8Attribute=function(a,b){return new C(new Int8Array(a),
b)};l.BufferAttribute=C;l.Face3=ea;l.Object3DIdCount=function(){return qe++};l.Object3D=z;l.Raycaster=Wd;l.Layers=Yc;l.EventDispatcher=sa;l.Clock=Yd;l.QuaternionLinearInterpolant=qd;l.LinearInterpolant=Mc;l.DiscreteInterpolant=pd;l.CubicInterpolant=od;l.Interpolant=qa;l.Triangle=wa;l.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,w,n,p;this.initFromArray=function(a){this.points=[];
for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+2;l=this.points[c[0]];w=this.points[c[1]];n=this.points[c[2]];p=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,w.x,n.x,p.x,g,h,k);d.y=b(l.y,w.y,n.y,p.y,g,h,k);d.z=b(l.z,w.z,n.z,p.z,g,h,k);return d};this.getControlPointsArray=function(){var a,
b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=0,f=new q,g=new q,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!==e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new q,l=this.getLength();h.push(k.copy(this.points[0]).clone());
for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());h.push(k.copy(this.points[b]).clone())}this.points=h}};l.Math=T;l.Spherical=Zd;l.Plane=va;l.Frustum=nc;l.Sphere=Ca;l.Ray=ab;l.Matrix4=J;l.Matrix3=Ia;l.Box3=Ba;l.Box2=mc;l.Line3=gb;l.Euler=bb;l.Vector4=ga;l.Vector3=q;l.Vector2=B;l.Quaternion=ba;l.ColorKeywords=He;l.Color=O;l.MorphBlendMesh=
na;l.ImmediateRenderObject=Qc;l.VertexNormalsHelper=Rc;l.SpotLightHelper=hc;l.SkeletonHelper=ic;l.PointLightHelper=jc;l.HemisphereLightHelper=kc;l.GridHelper=Sc;l.FaceNormalsHelper=Tc;l.DirectionalLightHelper=lc;l.CameraHelper=Uc;l.BoundingBoxHelper=Vc;l.BoxHelper=Wc;l.ArrowHelper=Cb;l.AxisHelper=xd;l.ClosedSplineCurve3=Ee;l.CatmullRomCurve3=$d;l.SplineCurve3=Ef;l.CubicBezierCurve3=Ff;l.QuadraticBezierCurve3=Gf;l.LineCurve3=Hf;l.ArcCurve=yd;l.EllipseCurve=Va;l.SplineCurve=xb;l.CubicBezierCurve=yb;
l.QuadraticBezierCurve=zb;l.LineCurve=Sa;l.Shape=Ab;l.ShapePath=Kd;l.Path=Pc;l.Font=Ld;l.CurvePath=Oc;l.Curve=ia;l.ShapeUtils=ra;l.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new sc,d=0,e=b.length;d<e;d++)c.add(new ya(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new J;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};l.CurveUtils=Xc;l.WireframeGeometry=Mb;l.ParametricGeometry=uc;l.ParametricBufferGeometry=
Nb;l.TetrahedronGeometry=vc;l.TetrahedronBufferGeometry=Ob;l.OctahedronGeometry=wc;l.OctahedronBufferGeometry=Pb;l.IcosahedronGeometry=xc;l.IcosahedronBufferGeometry=Qb;l.DodecahedronGeometry=yc;l.DodecahedronBufferGeometry=Rb;l.PolyhedronGeometry=zc;l.PolyhedronBufferGeometry=ua;l.TubeGeometry=Ac;l.TubeBufferGeometry=Sb;l.TorusKnotGeometry=Bc;l.TorusKnotBufferGeometry=Tb;l.TorusGeometry=Cc;l.TorusBufferGeometry=Ub;l.TextGeometry=Dc;l.SphereBufferGeometry=mb;l.SphereGeometry=Vb;l.RingGeometry=Ec;
l.RingBufferGeometry=Wb;l.PlaneBufferGeometry=ib;l.PlaneGeometry=Fc;l.LatheGeometry=Gc;l.LatheBufferGeometry=Xb;l.ShapeGeometry=cb;l.ExtrudeGeometry=za;l.EdgesGeometry=Yb;l.ConeGeometry=Hc;l.ConeBufferGeometry=Ic;l.CylinderGeometry=nb;l.CylinderBufferGeometry=Ua;l.CircleBufferGeometry=Zb;l.CircleGeometry=Jc;l.BoxBufferGeometry=hb;l.BoxGeometry=ob;l.ShadowMaterial=$b;l.SpriteMaterial=kb;l.RawShaderMaterial=ac;l.ShaderMaterial=Fa;l.PointsMaterial=xa;l.MultiMaterial=Kc;l.MeshPhysicalMaterial=pb;l.MeshStandardMaterial=
Oa;l.MeshPhongMaterial=db;l.MeshNormalMaterial=qb;l.MeshLambertMaterial=rb;l.MeshDepthMaterial=Za;l.MeshBasicMaterial=Ma;l.LineDashedMaterial=sb;l.LineBasicMaterial=oa;l.Material=U;l.REVISION="82";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;
l.FaceColors=1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.BlendingMode=Fe;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=
209;l.SrcAlphaSaturateFactor=210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=
305;l.CubeUVReflectionMapping=306;l.CubeUVRefractionMapping=307;l.TextureMapping=Ge;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.TextureWrapping=ae;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.TextureFilter=be;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=
1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RGB_S3TC_DXT1_Format=2001;l.RGBA_S3TC_DXT1_Format=2002;l.RGBA_S3TC_DXT3_Format=2003;l.RGBA_S3TC_DXT5_Format=2004;l.RGB_PVRTC_4BPPV1_Format=2100;l.RGB_PVRTC_2BPPV1_Format=2101;l.RGBA_PVRTC_4BPPV1_Format=
2102;l.RGBA_PVRTC_2BPPV1_Format=2103;l.RGB_ETC1_Format=2151;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;
l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=ob;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new ea(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=Kc;l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Kb(a,b)};l.Particle=qc;l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Kb(a,
b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new xa(a)};l.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new xa(a)};l.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new xa(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
return new q(a,b,c)};l.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new la(new Yb(a.geometry),new oa({color:void 0!==b?b:16777215}))};l.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new la(new Mb(a.geometry),new oa({color:void 0!==b?b:16777215}))};l.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
var d;b.isMesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new gd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},
loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new Hd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};
l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};Object.defineProperty(l,"__esModule",{value:!0});Object.defineProperty(l,"AudioContext",{get:function(){return l.getAudioContext()}})});
/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.SpriteCanvasMaterial = function ( parameters ) {

	THREE.Material.call( this );

	this.type = 'SpriteCanvasMaterial';

	this.color = new THREE.Color( 0xffffff );
	this.program = function ( context, color ) {};

	this.setValues( parameters );

};

THREE.SpriteCanvasMaterial.prototype = Object.create( THREE.Material.prototype );
THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial;

THREE.SpriteCanvasMaterial.prototype.clone = function () {

	var material = new THREE.SpriteCanvasMaterial();

	material.copy( this );
	material.color.copy( this.color );
	material.program = this.program;

	return material;

};

//

THREE.CanvasRenderer = function ( parameters ) {

	console.log( 'THREE.CanvasRenderer', THREE.REVISION );

	parameters = parameters || {};

	var _this = this,
	_renderData, _elements, _lights,
	_projector = new THREE.Projector(),

	_canvas = parameters.canvas !== undefined
			 ? parameters.canvas
			 : document.createElement( 'canvas' ),

	_canvasWidth = _canvas.width,
	_canvasHeight = _canvas.height,
	_canvasWidthHalf = Math.floor( _canvasWidth / 2 ),
	_canvasHeightHalf = Math.floor( _canvasHeight / 2 ),

	_viewportX = 0,
	_viewportY = 0,
	_viewportWidth = _canvasWidth,
	_viewportHeight = _canvasHeight,

	_pixelRatio = 1,

	_context = _canvas.getContext( '2d', {
		alpha: parameters.alpha === true
	} ),

	_clearColor = new THREE.Color( 0x000000 ),
	_clearAlpha = parameters.alpha === true ? 0 : 1,

	_contextGlobalAlpha = 1,
	_contextGlobalCompositeOperation = 0,
	_contextStrokeStyle = null,
	_contextFillStyle = null,
	_contextLineWidth = null,
	_contextLineCap = null,
	_contextLineJoin = null,
	_contextLineDash = [],

	_camera,

	_v1, _v2, _v3, _v4,
	_v5 = new THREE.RenderableVertex(),
	_v6 = new THREE.RenderableVertex(),

	_v1x, _v1y, _v2x, _v2y, _v3x, _v3y,
	_v4x, _v4y, _v5x, _v5y, _v6x, _v6y,

	_color = new THREE.Color(),
	_color1 = new THREE.Color(),
	_color2 = new THREE.Color(),
	_color3 = new THREE.Color(),
	_color4 = new THREE.Color(),

	_diffuseColor = new THREE.Color(),
	_emissiveColor = new THREE.Color(),

	_lightColor = new THREE.Color(),

	_patterns = {},

	_image, _uvs,
	_uv1x, _uv1y, _uv2x, _uv2y, _uv3x, _uv3y,

	_clipBox = new THREE.Box2(),
	_clearBox = new THREE.Box2(),
	_elemBox = new THREE.Box2(),

	_ambientLight = new THREE.Color(),
	_directionalLights = new THREE.Color(),
	_pointLights = new THREE.Color(),

	_vector3 = new THREE.Vector3(), // Needed for PointLight
	_centroid = new THREE.Vector3(),
	_normal = new THREE.Vector3(),
	_normalViewMatrix = new THREE.Matrix3();

	/* TODO
	_canvas.mozImageSmoothingEnabled = false;
	_canvas.webkitImageSmoothingEnabled = false;
	_canvas.msImageSmoothingEnabled = false;
	_canvas.imageSmoothingEnabled = false;
	*/

	// dash+gap fallbacks for Firefox and everything else

	if ( _context.setLineDash === undefined ) {

		_context.setLineDash = function () {};

	}

	this.domElement = _canvas;

	this.autoClear = true;
	this.sortObjects = true;
	this.sortElements = true;

	this.info = {

		render: {

			vertices: 0,
			faces: 0

		}

	};

	// WebGLRenderer compatibility

	this.supportsVertexTextures = function () {};
	this.setFaceCulling = function () {};

	// API

	this.getContext = function () {

		return _context;

	};

	this.getContextAttributes = function () {

		return _context.getContextAttributes();

	};

	this.getPixelRatio = function () {

		return _pixelRatio;

	};

	this.setPixelRatio = function ( value ) {

		if ( value !== undefined ) _pixelRatio = value;

	};

	this.setSize = function ( width, height, updateStyle ) {

		_canvasWidth = width * _pixelRatio;
		_canvasHeight = height * _pixelRatio;

		_canvas.width = _canvasWidth;
		_canvas.height = _canvasHeight;

		_canvasWidthHalf = Math.floor( _canvasWidth / 2 );
		_canvasHeightHalf = Math.floor( _canvasHeight / 2 );

		if ( updateStyle !== false ) {

			_canvas.style.width = width + 'px';
			_canvas.style.height = height + 'px';


		}

		_clipBox.min.set( - _canvasWidthHalf, - _canvasHeightHalf );
		_clipBox.max.set(   _canvasWidthHalf,   _canvasHeightHalf );

		_clearBox.min.set( - _canvasWidthHalf, - _canvasHeightHalf );
		_clearBox.max.set(   _canvasWidthHalf,   _canvasHeightHalf );

		_contextGlobalAlpha = 1;
		_contextGlobalCompositeOperation = 0;
		_contextStrokeStyle = null;
		_contextFillStyle = null;
		_contextLineWidth = null;
		_contextLineCap = null;
		_contextLineJoin = null;

		this.setViewport( 0, 0, width, height );

	};

	this.setViewport = function ( x, y, width, height ) {

		_viewportX = x * _pixelRatio;
		_viewportY = y * _pixelRatio;

		_viewportWidth = width * _pixelRatio;
		_viewportHeight = height * _pixelRatio;

	};

	this.setScissor = function () {};
	this.setScissorTest = function () {};

	this.setClearColor = function ( color, alpha ) {

		_clearColor.set( color );
		_clearAlpha = alpha !== undefined ? alpha : 1;

		_clearBox.min.set( - _canvasWidthHalf, - _canvasHeightHalf );
		_clearBox.max.set(   _canvasWidthHalf,   _canvasHeightHalf );

	};

	this.setClearColorHex = function ( hex, alpha ) {

		console.warn( 'THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.' );
		this.setClearColor( hex, alpha );

	};

	this.getClearColor = function () {

		return _clearColor;

	};

	this.getClearAlpha = function () {

		return _clearAlpha;

	};

	this.getMaxAnisotropy = function () {

		return 0;

	};

	this.clear = function () {

		if ( _clearBox.isEmpty() === false ) {

			_clearBox.intersect( _clipBox );
			_clearBox.expandByScalar( 2 );

			_clearBox.min.x = _clearBox.min.x + _canvasWidthHalf;
			_clearBox.min.y =  - _clearBox.min.y + _canvasHeightHalf;		// higher y value !
			_clearBox.max.x = _clearBox.max.x + _canvasWidthHalf;
			_clearBox.max.y =  - _clearBox.max.y + _canvasHeightHalf;		// lower y value !

			if ( _clearAlpha < 1 ) {

				_context.clearRect(
					_clearBox.min.x | 0,
					_clearBox.max.y | 0,
					( _clearBox.max.x - _clearBox.min.x ) | 0,
					( _clearBox.min.y - _clearBox.max.y ) | 0
				);

			}

			if ( _clearAlpha > 0 ) {

				setBlending( THREE.NormalBlending );
				setOpacity( 1 );

				setFillStyle( 'rgba(' + Math.floor( _clearColor.r * 255 ) + ',' + Math.floor( _clearColor.g * 255 ) + ',' + Math.floor( _clearColor.b * 255 ) + ',' + _clearAlpha + ')' );

				_context.fillRect(
					_clearBox.min.x | 0,
					_clearBox.max.y | 0,
					( _clearBox.max.x - _clearBox.min.x ) | 0,
					( _clearBox.min.y - _clearBox.max.y ) | 0
				);

			}

			_clearBox.makeEmpty();

		}

	};

	// compatibility

	this.clearColor = function () {};
	this.clearDepth = function () {};
	this.clearStencil = function () {};

	this.render = function ( scene, camera ) {

		if ( camera instanceof THREE.Camera === false ) {

			console.error( 'THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.' );
			return;

		}

		if ( this.autoClear === true ) this.clear();

		_this.info.render.vertices = 0;
		_this.info.render.faces = 0;

		_context.setTransform( _viewportWidth / _canvasWidth, 0, 0, - _viewportHeight / _canvasHeight, _viewportX, _canvasHeight - _viewportY );
		_context.translate( _canvasWidthHalf, _canvasHeightHalf );

		_renderData = _projector.projectScene( scene, camera, this.sortObjects, this.sortElements );
		_elements = _renderData.elements;
		_lights = _renderData.lights;
		_camera = camera;

		_normalViewMatrix.getNormalMatrix( camera.matrixWorldInverse );

		/* DEBUG
		setFillStyle( 'rgba( 0, 255, 255, 0.5 )' );
		_context.fillRect( _clipBox.min.x, _clipBox.min.y, _clipBox.max.x - _clipBox.min.x, _clipBox.max.y - _clipBox.min.y );
		*/

		calculateLights();

		for ( var e = 0, el = _elements.length; e < el; e ++ ) {

			var element = _elements[ e ];

			var material = element.material;

			if ( material === undefined || material.opacity === 0 ) continue;

			_elemBox.makeEmpty();

			if ( element instanceof THREE.RenderableSprite ) {

				_v1 = element;
				_v1.x *= _canvasWidthHalf; _v1.y *= _canvasHeightHalf;

				renderSprite( _v1, element, material );

			} else if ( element instanceof THREE.RenderableLine ) {

				_v1 = element.v1; _v2 = element.v2;

				_v1.positionScreen.x *= _canvasWidthHalf; _v1.positionScreen.y *= _canvasHeightHalf;
				_v2.positionScreen.x *= _canvasWidthHalf; _v2.positionScreen.y *= _canvasHeightHalf;

				_elemBox.setFromPoints( [
					_v1.positionScreen,
					_v2.positionScreen
				] );

				if ( _clipBox.intersectsBox( _elemBox ) === true ) {

					renderLine( _v1, _v2, element, material );

				}

			} else if ( element instanceof THREE.RenderableFace ) {

				_v1 = element.v1; _v2 = element.v2; _v3 = element.v3;

				if ( _v1.positionScreen.z < - 1 || _v1.positionScreen.z > 1 ) continue;
				if ( _v2.positionScreen.z < - 1 || _v2.positionScreen.z > 1 ) continue;
				if ( _v3.positionScreen.z < - 1 || _v3.positionScreen.z > 1 ) continue;

				_v1.positionScreen.x *= _canvasWidthHalf; _v1.positionScreen.y *= _canvasHeightHalf;
				_v2.positionScreen.x *= _canvasWidthHalf; _v2.positionScreen.y *= _canvasHeightHalf;
				_v3.positionScreen.x *= _canvasWidthHalf; _v3.positionScreen.y *= _canvasHeightHalf;

				if ( material.overdraw > 0 ) {

					expand( _v1.positionScreen, _v2.positionScreen, material.overdraw );
					expand( _v2.positionScreen, _v3.positionScreen, material.overdraw );
					expand( _v3.positionScreen, _v1.positionScreen, material.overdraw );

				}

				_elemBox.setFromPoints( [
					_v1.positionScreen,
					_v2.positionScreen,
					_v3.positionScreen
				] );

				if ( _clipBox.intersectsBox( _elemBox ) === true ) {

					renderFace3( _v1, _v2, _v3, 0, 1, 2, element, material );

				}

			}

			/* DEBUG
			setLineWidth( 1 );
			setStrokeStyle( 'rgba( 0, 255, 0, 0.5 )' );
			_context.strokeRect( _elemBox.min.x, _elemBox.min.y, _elemBox.max.x - _elemBox.min.x, _elemBox.max.y - _elemBox.min.y );
			*/

			_clearBox.union( _elemBox );

		}

		/* DEBUG
		setLineWidth( 1 );
		setStrokeStyle( 'rgba( 255, 0, 0, 0.5 )' );
		_context.strokeRect( _clearBox.min.x, _clearBox.min.y, _clearBox.max.x - _clearBox.min.x, _clearBox.max.y - _clearBox.min.y );
		*/

		_context.setTransform( 1, 0, 0, 1, 0, 0 );

	};

	//

	function calculateLights() {

		_ambientLight.setRGB( 0, 0, 0 );
		_directionalLights.setRGB( 0, 0, 0 );
		_pointLights.setRGB( 0, 0, 0 );

		for ( var l = 0, ll = _lights.length; l < ll; l ++ ) {

			var light = _lights[ l ];
			var lightColor = light.color;

			if ( light instanceof THREE.AmbientLight ) {

				_ambientLight.add( lightColor );

			} else if ( light instanceof THREE.DirectionalLight ) {

				// for sprites

				_directionalLights.add( lightColor );

			} else if ( light instanceof THREE.PointLight ) {

				// for sprites

				_pointLights.add( lightColor );

			}

		}

	}

	function calculateLight( position, normal, color ) {

		for ( var l = 0, ll = _lights.length; l < ll; l ++ ) {

			var light = _lights[ l ];

			_lightColor.copy( light.color );

			if ( light instanceof THREE.DirectionalLight ) {

				var lightPosition = _vector3.setFromMatrixPosition( light.matrixWorld ).normalize();

				var amount = normal.dot( lightPosition );

				if ( amount <= 0 ) continue;

				amount *= light.intensity;

				color.add( _lightColor.multiplyScalar( amount ) );

			} else if ( light instanceof THREE.PointLight ) {

				var lightPosition = _vector3.setFromMatrixPosition( light.matrixWorld );

				var amount = normal.dot( _vector3.subVectors( lightPosition, position ).normalize() );

				if ( amount <= 0 ) continue;

				amount *= light.distance == 0 ? 1 : 1 - Math.min( position.distanceTo( lightPosition ) / light.distance, 1 );

				if ( amount == 0 ) continue;

				amount *= light.intensity;

				color.add( _lightColor.multiplyScalar( amount ) );

			}

		}

	}

	function renderSprite( v1, element, material ) {

		setOpacity( material.opacity );
		setBlending( material.blending );

		var scaleX = element.scale.x * _canvasWidthHalf;
		var scaleY = element.scale.y * _canvasHeightHalf;

		var dist = 0.5 * Math.sqrt( scaleX * scaleX + scaleY * scaleY ); // allow for rotated sprite
		_elemBox.min.set( v1.x - dist, v1.y - dist );
		_elemBox.max.set( v1.x + dist, v1.y + dist );

		if ( material instanceof THREE.SpriteMaterial ) {

			var texture = material.map;

			if ( texture !== null ) {

				var pattern = _patterns[ texture.id ];

				if ( pattern === undefined || pattern.version !== texture.version ) {

					pattern = textureToPattern( texture );
					_patterns[ texture.id ] = pattern;

				}

				if ( pattern.canvas !== undefined ) {

					setFillStyle( pattern.canvas );

					var bitmap = texture.image;

					var ox = bitmap.width * texture.offset.x;
					var oy = bitmap.height * texture.offset.y;

					var sx = bitmap.width * texture.repeat.x;
					var sy = bitmap.height * texture.repeat.y;

					var cx = scaleX / sx;
					var cy = scaleY / sy;

					_context.save();
					_context.translate( v1.x, v1.y );
					if ( material.rotation !== 0 ) _context.rotate( material.rotation );
					_context.translate( - scaleX / 2, - scaleY / 2 );
					_context.scale( cx, cy );
					_context.translate( - ox, - oy );
					_context.fillRect( ox, oy, sx, sy );
					_context.restore();

				}

			} else {

				// no texture

				setFillStyle( material.color.getStyle() );

				_context.save();
				_context.translate( v1.x, v1.y );
				if ( material.rotation !== 0 ) _context.rotate( material.rotation );
				_context.scale( scaleX, - scaleY );
				_context.fillRect( - 0.5, - 0.5, 1, 1 );
				_context.restore();

			}

		} else if ( material instanceof THREE.SpriteCanvasMaterial ) {

			setStrokeStyle( material.color.getStyle() );
			setFillStyle( material.color.getStyle() );

			_context.save();
			_context.translate( v1.x, v1.y );
			if ( material.rotation !== 0 ) _context.rotate( material.rotation );
			_context.scale( scaleX, scaleY );

			material.program( _context );

			_context.restore();

		}

		/* DEBUG
		setStrokeStyle( 'rgb(255,255,0)' );
		_context.beginPath();
		_context.moveTo( v1.x - 10, v1.y );
		_context.lineTo( v1.x + 10, v1.y );
		_context.moveTo( v1.x, v1.y - 10 );
		_context.lineTo( v1.x, v1.y + 10 );
		_context.stroke();
		*/

	}

	function renderLine( v1, v2, element, material ) {

		setOpacity( material.opacity );
		setBlending( material.blending );

		_context.beginPath();
		_context.moveTo( v1.positionScreen.x, v1.positionScreen.y );
		_context.lineTo( v2.positionScreen.x, v2.positionScreen.y );

		if ( material instanceof THREE.LineBasicMaterial ) {

			setLineWidth( material.linewidth );
			setLineCap( material.linecap );
			setLineJoin( material.linejoin );

			if ( material.vertexColors !== THREE.VertexColors ) {

				setStrokeStyle( material.color.getStyle() );

			} else {

				var colorStyle1 = element.vertexColors[ 0 ].getStyle();
				var colorStyle2 = element.vertexColors[ 1 ].getStyle();

				if ( colorStyle1 === colorStyle2 ) {

					setStrokeStyle( colorStyle1 );

				} else {

					try {

						var grad = _context.createLinearGradient(
							v1.positionScreen.x,
							v1.positionScreen.y,
							v2.positionScreen.x,
							v2.positionScreen.y
						);
						grad.addColorStop( 0, colorStyle1 );
						grad.addColorStop( 1, colorStyle2 );

					} catch ( exception ) {

						grad = colorStyle1;

					}

					setStrokeStyle( grad );

				}

			}

			_context.stroke();
			_elemBox.expandByScalar( material.linewidth * 2 );

		} else if ( material instanceof THREE.LineDashedMaterial ) {

			setLineWidth( material.linewidth );
			setLineCap( material.linecap );
			setLineJoin( material.linejoin );
			setStrokeStyle( material.color.getStyle() );
			setLineDash( [ material.dashSize, material.gapSize ] );

			_context.stroke();

			_elemBox.expandByScalar( material.linewidth * 2 );

			setLineDash( [] );

		}

	}

	function renderFace3( v1, v2, v3, uv1, uv2, uv3, element, material ) {

		_this.info.render.vertices += 3;
		_this.info.render.faces ++;

		setOpacity( material.opacity );
		setBlending( material.blending );

		_v1x = v1.positionScreen.x; _v1y = v1.positionScreen.y;
		_v2x = v2.positionScreen.x; _v2y = v2.positionScreen.y;
		_v3x = v3.positionScreen.x; _v3y = v3.positionScreen.y;

		drawTriangle( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y );

		if ( ( material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshPhongMaterial ) && material.map === null ) {

			_diffuseColor.copy( material.color );
			_emissiveColor.copy( material.emissive );

			if ( material.vertexColors === THREE.FaceColors ) {

				_diffuseColor.multiply( element.color );

			}

			_color.copy( _ambientLight );

			_centroid.copy( v1.positionWorld ).add( v2.positionWorld ).add( v3.positionWorld ).divideScalar( 3 );

			calculateLight( _centroid, element.normalModel, _color );

			_color.multiply( _diffuseColor ).add( _emissiveColor );

			material.wireframe === true
				 ? strokePath( _color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin )
				 : fillPath( _color );

		} else if ( material instanceof THREE.MeshBasicMaterial ||
				    material instanceof THREE.MeshLambertMaterial ||
				    material instanceof THREE.MeshPhongMaterial ) {

			if ( material.map !== null ) {

				var mapping = material.map.mapping;

				if ( mapping === THREE.UVMapping ) {

					_uvs = element.uvs;
					patternPath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, _uvs[ uv1 ].x, _uvs[ uv1 ].y, _uvs[ uv2 ].x, _uvs[ uv2 ].y, _uvs[ uv3 ].x, _uvs[ uv3 ].y, material.map );

				}

			} else if ( material.envMap !== null ) {

				if ( material.envMap.mapping === THREE.SphericalReflectionMapping ) {

					_normal.copy( element.vertexNormalsModel[ uv1 ] ).applyMatrix3( _normalViewMatrix );
					_uv1x = 0.5 * _normal.x + 0.5;
					_uv1y = 0.5 * _normal.y + 0.5;

					_normal.copy( element.vertexNormalsModel[ uv2 ] ).applyMatrix3( _normalViewMatrix );
					_uv2x = 0.5 * _normal.x + 0.5;
					_uv2y = 0.5 * _normal.y + 0.5;

					_normal.copy( element.vertexNormalsModel[ uv3 ] ).applyMatrix3( _normalViewMatrix );
					_uv3x = 0.5 * _normal.x + 0.5;
					_uv3y = 0.5 * _normal.y + 0.5;

					patternPath( _v1x, _v1y, _v2x, _v2y, _v3x, _v3y, _uv1x, _uv1y, _uv2x, _uv2y, _uv3x, _uv3y, material.envMap );

				}

			} else {

				_color.copy( material.color );

				if ( material.vertexColors === THREE.FaceColors ) {

					_color.multiply( element.color );

				}

				material.wireframe === true
					 ? strokePath( _color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin )
					 : fillPath( _color );

			}

		} else if ( material instanceof THREE.MeshNormalMaterial ) {

			_normal.copy( element.normalModel ).applyMatrix3( _normalViewMatrix );

			_color.setRGB( _normal.x, _normal.y, _normal.z ).multiplyScalar( 0.5 ).addScalar( 0.5 );

			material.wireframe === true
				 ? strokePath( _color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin )
				 : fillPath( _color );

		} else {

			_color.setRGB( 1, 1, 1 );

			material.wireframe === true
				 ? strokePath( _color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin )
				 : fillPath( _color );

		}

	}

	//

	function drawTriangle( x0, y0, x1, y1, x2, y2 ) {

		_context.beginPath();
		_context.moveTo( x0, y0 );
		_context.lineTo( x1, y1 );
		_context.lineTo( x2, y2 );
		_context.closePath();

	}

	function strokePath( color, linewidth, linecap, linejoin ) {

		setLineWidth( linewidth );
		setLineCap( linecap );
		setLineJoin( linejoin );
		setStrokeStyle( color.getStyle() );

		_context.stroke();

		_elemBox.expandByScalar( linewidth * 2 );

	}

	function fillPath( color ) {

		setFillStyle( color.getStyle() );
		_context.fill();

	}

	function textureToPattern( texture ) {

		if ( texture.version === 0 ||
			texture instanceof THREE.CompressedTexture ||
			texture instanceof THREE.DataTexture ) {

			return {
				canvas: undefined,
				version: texture.version
			};

		}

		var image = texture.image;

		if ( image.complete === false ) {

			return {
				canvas: undefined,
				version: 0
			};

		}

		var canvas = document.createElement( 'canvas' );
		canvas.width = image.width;
		canvas.height = image.height;

		var context = canvas.getContext( '2d' );
		context.setTransform( 1, 0, 0, - 1, 0, image.height );
		context.drawImage( image, 0, 0 );

		var repeatX = texture.wrapS === THREE.RepeatWrapping;
		var repeatY = texture.wrapT === THREE.RepeatWrapping;

		var repeat = 'no-repeat';

		if ( repeatX === true && repeatY === true ) {

			repeat = 'repeat';

		} else if ( repeatX === true ) {

			repeat = 'repeat-x';

		} else if ( repeatY === true ) {

			repeat = 'repeat-y';

		}

		var pattern = _context.createPattern( canvas, repeat );

		if ( texture.onUpdate ) texture.onUpdate( texture );

		return {
			canvas: pattern,
			version: texture.version
		};

	}

	function patternPath( x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2, texture ) {

		var pattern = _patterns[ texture.id ];

		if ( pattern === undefined || pattern.version !== texture.version ) {

			pattern = textureToPattern( texture );
			_patterns[ texture.id ] = pattern;

		}

		if ( pattern.canvas !== undefined ) {

			setFillStyle( pattern.canvas );

		} else {

			setFillStyle( 'rgba( 0, 0, 0, 1)' );
			_context.fill();
			return;

		}

		// http://extremelysatisfactorytotalitarianism.com/blog/?p=2120

		var a, b, c, d, e, f, det, idet,
		offsetX = texture.offset.x / texture.repeat.x,
		offsetY = texture.offset.y / texture.repeat.y,
		width = texture.image.width * texture.repeat.x,
		height = texture.image.height * texture.repeat.y;

		u0 = ( u0 + offsetX ) * width;
		v0 = ( v0 + offsetY ) * height;

		u1 = ( u1 + offsetX ) * width;
		v1 = ( v1 + offsetY ) * height;

		u2 = ( u2 + offsetX ) * width;
		v2 = ( v2 + offsetY ) * height;

		x1 -= x0; y1 -= y0;
		x2 -= x0; y2 -= y0;

		u1 -= u0; v1 -= v0;
		u2 -= u0; v2 -= v0;

		det = u1 * v2 - u2 * v1;

		if ( det === 0 ) return;

		idet = 1 / det;

		a = ( v2 * x1 - v1 * x2 ) * idet;
		b = ( v2 * y1 - v1 * y2 ) * idet;
		c = ( u1 * x2 - u2 * x1 ) * idet;
		d = ( u1 * y2 - u2 * y1 ) * idet;

		e = x0 - a * u0 - c * v0;
		f = y0 - b * u0 - d * v0;

		_context.save();
		_context.transform( a, b, c, d, e, f );
		_context.fill();
		_context.restore();

	}

	function clipImage( x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2, image ) {

		// http://extremelysatisfactorytotalitarianism.com/blog/?p=2120

		var a, b, c, d, e, f, det, idet,
		width = image.width - 1,
		height = image.height - 1;

		u0 *= width; v0 *= height;
		u1 *= width; v1 *= height;
		u2 *= width; v2 *= height;

		x1 -= x0; y1 -= y0;
		x2 -= x0; y2 -= y0;

		u1 -= u0; v1 -= v0;
		u2 -= u0; v2 -= v0;

		det = u1 * v2 - u2 * v1;

		idet = 1 / det;

		a = ( v2 * x1 - v1 * x2 ) * idet;
		b = ( v2 * y1 - v1 * y2 ) * idet;
		c = ( u1 * x2 - u2 * x1 ) * idet;
		d = ( u1 * y2 - u2 * y1 ) * idet;

		e = x0 - a * u0 - c * v0;
		f = y0 - b * u0 - d * v0;

		_context.save();
		_context.transform( a, b, c, d, e, f );
		_context.clip();
		_context.drawImage( image, 0, 0 );
		_context.restore();

	}

	// Hide anti-alias gaps

	function expand( v1, v2, pixels ) {

		var x = v2.x - v1.x, y = v2.y - v1.y,
		det = x * x + y * y, idet;

		if ( det === 0 ) return;

		idet = pixels / Math.sqrt( det );

		x *= idet; y *= idet;

		v2.x += x; v2.y += y;
		v1.x -= x; v1.y -= y;

	}

	// Context cached methods.

	function setOpacity( value ) {

		if ( _contextGlobalAlpha !== value ) {

			_context.globalAlpha = value;
			_contextGlobalAlpha = value;

		}

	}

	function setBlending( value ) {

		if ( _contextGlobalCompositeOperation !== value ) {

			if ( value === THREE.NormalBlending ) {

				_context.globalCompositeOperation = 'source-over';

			} else if ( value === THREE.AdditiveBlending ) {

				_context.globalCompositeOperation = 'lighter';

			} else if ( value === THREE.SubtractiveBlending ) {

				_context.globalCompositeOperation = 'darker';

			} else if ( value === THREE.MultiplyBlending ) {

				_context.globalCompositeOperation = 'multiply';

			}

			_contextGlobalCompositeOperation = value;

		}

	}

	function setLineWidth( value ) {

		if ( _contextLineWidth !== value ) {

			_context.lineWidth = value;
			_contextLineWidth = value;

		}

	}

	function setLineCap( value ) {

		// "butt", "round", "square"

		if ( _contextLineCap !== value ) {

			_context.lineCap = value;
			_contextLineCap = value;

		}

	}

	function setLineJoin( value ) {

		// "round", "bevel", "miter"

		if ( _contextLineJoin !== value ) {

			_context.lineJoin = value;
			_contextLineJoin = value;

		}

	}

	function setStrokeStyle( value ) {

		if ( _contextStrokeStyle !== value ) {

			_context.strokeStyle = value;
			_contextStrokeStyle = value;

		}

	}

	function setFillStyle( value ) {

		if ( _contextFillStyle !== value ) {

			_context.fillStyle = value;
			_contextFillStyle = value;

		}

	}

	function setLineDash( value ) {

		if ( _contextLineDash.length !== value.length ) {

			_context.setLineDash( value );
			_contextLineDash = value;

		}

	}

};
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;

	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.25;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// Start anim
	this.startAnimCoef = 0.96;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return phi;

	};

	this.getAzimuthalAngle = function () {

		return theta;

	};

	this.reset = function () {

		scope.target.copy( scope.target0 );
		scope.object.position.copy( scope.position0 );
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent( changeEvent );

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function() {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function () {

			var position = scope.object.position;

			offset.copy( position ).sub( scope.target );

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion( quat );

			// angle from z-axis around y-axis
			spherical.setFromVector3( offset );

			if ( scope.autoRotate && state === STATE.NONE ) {

				rotateLeft( getAutoRotationAngle() );

			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

			// restrict phi to be between desired limits
			spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );
			if(spherical.phi == Math.PI){
				spherical.phi = 0;
				spherical.theta = spherical.theta*-1;
			}else if(spherical.phi == 0){
				spherical.phi = Math.PI;
				spherical.theta = spherical.theta*-1;
			}

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

			// move target to panned location
			scope.target.add( panOffset );

			offset.setFromSpherical( spherical );

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion( quatInverse );

			position.copy( scope.target ).add( offset );

			scope.object.lookAt( scope.target );

			if ( scope.enableDamping === true ) {

				sphericalDelta.theta *= ( 1 - scope.dampingFactor );
				sphericalDelta.phi *= ( 1 - scope.dampingFactor );

			} else {

				sphericalDelta.set( 0, 0, 0 );

			}

			scale = 1;
			panOffset.set( 0, 0, 0 );

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if ( zoomChanged ||
				lastPosition.distanceToSquared( scope.object.position ) > EPS ||
				8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

				scope.dispatchEvent( changeEvent );

				lastPosition.copy( scope.object.position );
				lastQuaternion.copy( scope.object.quaternion );
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function() {

		scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
		scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.removeEventListener( 'mousewheel', onMouseWheel, false );
		scope.domElement.removeEventListener( 'MozMousePixelScroll', onMouseWheel, false ); // firefox

		scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );
		document.removeEventListener( 'mouseout', onMouseUp, false );

		window.removeEventListener( 'keydown', onKeyDown, false );

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE : - 1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var rotate_coef = 70;
	function getAutoRotationAngle() {

		if(rotate_coef <= 1){
			rotate_coef = 1;
		}else{
			rotate_coef *= scope.startAnimCoef;
		}

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed * rotate_coef;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function rotateLeft( angle ) {

		sphericalDelta.theta -= angle;
		sphericalDelta.phi -= angle/10

	}

	function rotateUp( angle ) {

		sphericalDelta.phi -= angle;

	}

	var panLeft = function() {

		var v = new THREE.Vector3();

		return function panLeft( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
			v.multiplyScalar( - distance );

			panOffset.add( v );

		};

	}();

	var panUp = function() {

		var v = new THREE.Vector3();

		return function panUp( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
			v.multiplyScalar( distance );

			panOffset.add( v );

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function() {

		var offset = new THREE.Vector3();

		return function( deltaX, deltaY ) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if ( scope.object instanceof THREE.PerspectiveCamera ) {

				// perspective
				var position = scope.object.position;
				offset.copy( position ).sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
				panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

			} else if ( scope.object instanceof THREE.OrthographicCamera ) {

				// orthographic
				panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
				panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

			} else {

				// camera neither orthographic nor perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
				scope.enablePan = false;

			}

		};

	}();

	function dollyIn( dollyScale ) {

		if ( scope.object instanceof THREE.PerspectiveCamera ) {

			scale /= dollyScale;

		} else if ( scope.object instanceof THREE.OrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	function dollyOut( dollyScale ) {

		if ( scope.object instanceof THREE.PerspectiveCamera ) {

			scale *= dollyScale;

		} else if ( scope.object instanceof THREE.OrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate( event ) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownDolly( event ) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownPan( event ) {

		//console.log( 'handleMouseDownPan' );

		panStart.set( event.clientX, event.clientY );

	}

	function handleMouseMoveRotate( event ) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set( event.clientX, event.clientY );
		rotateDelta.subVectors( rotateEnd, rotateStart );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleMouseMoveDolly( event ) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set( event.clientX, event.clientY );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyIn( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyOut( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleMouseMovePan( event ) {

		//console.log( 'handleMouseMovePan' );

		panEnd.set( event.clientX, event.clientY );

		panDelta.subVectors( panEnd, panStart );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleMouseUp( event ) {

		//console.log( 'handleMouseUp' );

	}

	function handleMouseWheel( event ) {

		//console.log( 'handleMouseWheel' );

		var delta = 0;

		if ( event.wheelDelta !== undefined ) {

			// WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail !== undefined ) {

			// Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			dollyOut( getZoomScale() );

		} else if ( delta < 0 ) {

			dollyIn( getZoomScale() );

		}

		scope.update();

	}

	function handleKeyDown( event ) {

		//console.log( 'handleKeyDown' );

		switch ( event.keyCode ) {

			case scope.keys.UP:
				pan( 0, scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan( 0, - scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.LEFT:
				pan( scope.keyPanSpeed, 0 );
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan( - scope.keyPanSpeed, 0 );
				scope.update();
				break;

		}

	}

	function handleTouchStartRotate( event ) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchStartDolly( event ) {

		//console.log( 'handleTouchStartDolly' );

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyStart.set( 0, distance );

	}

	function handleTouchStartPan( event ) {

		//console.log( 'handleTouchStartPan' );

		panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchMoveRotate( event ) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
		rotateDelta.subVectors( rotateEnd, rotateStart );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleTouchMoveDolly( event ) {

		//console.log( 'handleTouchMoveDolly' );

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyEnd.set( 0, distance );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyOut( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyIn( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleTouchMovePan( event ) {

		//console.log( 'handleTouchMovePan' );

		panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		panDelta.subVectors( panEnd, panStart );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleTouchEnd( event ) {

		//console.log( 'handleTouchEnd' );

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		if ( event.button === scope.mouseButtons.ORBIT ) {

			if ( scope.enableRotate === false ) return;

			handleMouseDownRotate( event );

			state = STATE.ROTATE;

		} else if ( event.button === scope.mouseButtons.ZOOM ) {

			if ( scope.enableZoom === false ) return;

			handleMouseDownDolly( event );

			state = STATE.DOLLY;

		} else if ( event.button === scope.mouseButtons.PAN ) {

			if ( scope.enablePan === false ) return;

			handleMouseDownPan( event );

			state = STATE.PAN;

		}

		if ( state !== STATE.NONE ) {

			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mouseup', onMouseUp, false );
			document.addEventListener( 'mouseout', onMouseUp, false );

			scope.dispatchEvent( startEvent );

		}

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		if ( state === STATE.ROTATE ) {

			if ( scope.enableRotate === false ) return;

			handleMouseMoveRotate( event );

		} else if ( state === STATE.DOLLY ) {

			if ( scope.enableZoom === false ) return;

			handleMouseMoveDolly( event );

		} else if ( state === STATE.PAN ) {

			if ( scope.enablePan === false ) return;

			handleMouseMovePan( event );

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		handleMouseUp( event );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );
		document.removeEventListener( 'mouseout', onMouseUp, false );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;

		event.preventDefault();
		event.stopPropagation();

		handleMouseWheel( event );

		scope.dispatchEvent( startEvent ); // not sure why these are here...
		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

		handleKeyDown( event );

	}

	function onTouchStart( event ) {

		if ( scope.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;

				handleTouchStartRotate( event );

				state = STATE.TOUCH_ROTATE;

				break;

			case 2:	// two-fingered touch: dolly

				if ( scope.enableZoom === false ) return;

				handleTouchStartDolly( event );

				state = STATE.TOUCH_DOLLY;

				break;

			case 3: // three-fingered touch: pan

				if ( scope.enablePan === false ) return;

				handleTouchStartPan( event );

				state = STATE.TOUCH_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			scope.dispatchEvent( startEvent );

		}

	}

	function onTouchMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;
				if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

				handleTouchMoveRotate( event );

				break;

			case 2: // two-fingered touch: dolly

				if ( scope.enableZoom === false ) return;
				if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

				handleTouchMoveDolly( event );

				break;

			case 3: // three-fingered touch: pan

				if ( scope.enablePan === false ) return;
				if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

				handleTouchMovePan( event );

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd( event ) {

		if ( scope.enabled === false ) return;

		handleTouchEnd( event );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onContextMenu( event ) {

		event.preventDefault();

	}

	//

	scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

	scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
	scope.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	scope.domElement.addEventListener( 'MozMousePixelScroll', onMouseWheel, false ); // firefox

	scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
	scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
	scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

	window.addEventListener( 'keydown', onKeyDown, false );

	// force an update at start

	this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties( THREE.OrbitControls.prototype, {

	center: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
			return this.target;

		}

	},

	// backward compatibility

	noZoom: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			return ! this.enableZoom;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			this.enableZoom = ! value;

		}

	},

	noRotate: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			return ! this.enableRotate;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			this.enableRotate = ! value;

		}

	},

	noPan: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			return ! this.enablePan;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			this.enablePan = ! value;

		}

	},

	noKeys: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			return ! this.enableKeys;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			this.enableKeys = ! value;

		}

	},

	staticMoving : {

		get: function () {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			return ! this.constraint.enableDamping;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			this.constraint.enableDamping = ! value;

		}

	},

	dynamicDampingFactor : {

		get: function () {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			return this.constraint.dampingFactor;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			this.constraint.dampingFactor = value;

		}

	}

} );




/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function(manager) {

    this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;

    this.materials = null;

    this.regexp = {
        // v float float float
        vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
        // vn float float float
        normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
        // vt float float
        uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
        // f vertex vertex vertex
        face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
        // f vertex/uv vertex/uv vertex/uv
        face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
        // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
        face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
        // f vertex//normal vertex//normal vertex//normal
        face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
        // o object_name | g group_name
        object_pattern: /^[og]\s*(.+)?/,
        // s boolean
        smoothing_pattern: /^s\s+(\d+|on|off)/,
        // mtllib file_reference
        material_library_pattern: /^mtllib /,
        // usemtl material_name
        material_use_pattern: /^usemtl /
    };

};

THREE.OBJLoader.prototype = {

    constructor: THREE.OBJLoader,

    load: function(url, onLoad, onProgress, onError) {

        var scope = this;

        var loader = new THREE.XHRLoader(scope.manager);
        loader.setPath(this.path);
        loader.load(url, function(text) {

            onLoad(scope.parse(text));

        }, onProgress, onError);

    },

    setPath: function(value) {

        this.path = value;

    },

    setMaterials: function(materials) {

        this.materials = materials;

    },

    _createParserState: function() {

        var state = {
            objects: [],
            object: {},

            vertices: [],
            normals: [],
            uvs: [],

            materialLibraries: [],

            startObject: function(name, fromDeclaration) {

                // If the current object (initial from reset) is not from a g/o declaration in the parsed
                // file. We need to use it for the first parsed g/o to keep things in sync.
                if (this.object && this.object.fromDeclaration === false) {

                    this.object.name = name;
                    this.object.fromDeclaration = (fromDeclaration !== false);
                    return;

                }

                if (this.object && typeof this.object._finalize === 'function') {

                    this.object._finalize();

                }

                var previousMaterial = (this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined);

                this.object = {
                    name: name || '',
                    fromDeclaration: (fromDeclaration !== false),

                    geometry: {
                        vertices: [],
                        normals: [],
                        uvs: []
                    },
                    materials: [],
                    smooth: true,

                    startMaterial: function(name, libraries) {

                        var previous = this._finalize(false);

                        // New usemtl declaration overwrites an inherited material, except if faces were declared
                        // after the material, then it must be preserved for proper MultiMaterial continuation.
                        if (previous && (previous.inherited || previous.groupCount <= 0)) {

                            this.materials.splice(previous.index, 1);

                        }

                        var material = {
                            index: this.materials.length,
                            name: name || '',
                            mtllib: (Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : ''),
                            smooth: (previous !== undefined ? previous.smooth : this.smooth),
                            groupStart: (previous !== undefined ? previous.groupEnd : 0),
                            groupEnd: -1,
                            groupCount: -1,
                            inherited: false,

                            clone: function(index) {
                                return {
                                    index: (typeof index === 'number' ? index : this.index),
                                    name: this.name,
                                    mtllib: this.mtllib,
                                    smooth: this.smooth,
                                    groupStart: this.groupEnd,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: false
                                };
                            }
                        };

                        this.materials.push(material);

                        return material;

                    },

                    currentMaterial: function() {

                        if (this.materials.length > 0) {
                            return this.materials[this.materials.length - 1];
                        }

                        return undefined;

                    },

                    _finalize: function(end) {

                        var lastMultiMaterial = this.currentMaterial();
                        if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {

                            lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                            lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                            lastMultiMaterial.inherited = false;

                        }

                        // Guarantee at least one empty material, this makes the creation later more straight forward.
                        if (end !== false && this.materials.length === 0) {
                            this.materials.push({
                                name: '',
                                smooth: this.smooth
                            });
                        }

                        return lastMultiMaterial;

                    }
                };

                // Inherit previous objects material.
                // Spec tells us that a declared material must be set to all objects until a new material is declared.
                // If a usemtl declaration is encountered while this new object is being parsed, it will
                // overwrite the inherited material. Exception being that there was already face declarations
                // to the inherited material, then it will be preserved for proper MultiMaterial continuation.

                if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {

                    var declared = previousMaterial.clone(0);
                    declared.inherited = true;
                    this.object.materials.push(declared);

                }

                this.objects.push(this.object);

            },

            finalize: function() {

                if (this.object && typeof this.object._finalize === 'function') {

                    this.object._finalize();

                }

            },

            parseVertexIndex: function(value, len) {

                var index = parseInt(value, 10);
                return (index >= 0 ? index - 1 : index + len / 3) * 3;

            },

            parseNormalIndex: function(value, len) {

                var index = parseInt(value, 10);
                return (index >= 0 ? index - 1 : index + len / 3) * 3;

            },

            parseUVIndex: function(value, len) {

                var index = parseInt(value, 10);
                return (index >= 0 ? index - 1 : index + len / 2) * 2;

            },

            addVertex: function(a, b, c) {

                var src = this.vertices;
                var dst = this.object.geometry.vertices;

                dst.push(src[a + 0]);
                dst.push(src[a + 1]);
                dst.push(src[a + 2]);
                dst.push(src[b + 0]);
                dst.push(src[b + 1]);
                dst.push(src[b + 2]);
                dst.push(src[c + 0]);
                dst.push(src[c + 1]);
                dst.push(src[c + 2]);

            },

            addVertexLine: function(a) {

                var src = this.vertices;
                var dst = this.object.geometry.vertices;

                dst.push(src[a + 0]);
                dst.push(src[a + 1]);
                dst.push(src[a + 2]);

            },

            addNormal: function(a, b, c) {

                var src = this.normals;
                var dst = this.object.geometry.normals;

                dst.push(src[a + 0]);
                dst.push(src[a + 1]);
                dst.push(src[a + 2]);
                dst.push(src[b + 0]);
                dst.push(src[b + 1]);
                dst.push(src[b + 2]);
                dst.push(src[c + 0]);
                dst.push(src[c + 1]);
                dst.push(src[c + 2]);

            },

            addUV: function(a, b, c) {

                var src = this.uvs;
                var dst = this.object.geometry.uvs;

                dst.push(src[a + 0]);
                dst.push(src[a + 1]);
                dst.push(src[b + 0]);
                dst.push(src[b + 1]);
                dst.push(src[c + 0]);
                dst.push(src[c + 1]);

            },

            addUVLine: function(a) {

                var src = this.uvs;
                var dst = this.object.geometry.uvs;

                dst.push(src[a + 0]);
                dst.push(src[a + 1]);

            },

            addFace: function(a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd) {

                var vLen = this.vertices.length;

                var ia = this.parseVertexIndex(a, vLen);
                var ib = this.parseVertexIndex(b, vLen);
                var ic = this.parseVertexIndex(c, vLen);
                var id;

                if (d === undefined) {

                    this.addVertex(ia, ib, ic);

                } else {

                    id = this.parseVertexIndex(d, vLen);

                    this.addVertex(ia, ib, id);
                    this.addVertex(ib, ic, id);

                }

                if (ua !== undefined) {

                    var uvLen = this.uvs.length;

                    ia = this.parseUVIndex(ua, uvLen);
                    ib = this.parseUVIndex(ub, uvLen);
                    ic = this.parseUVIndex(uc, uvLen);

                    if (d === undefined) {

                        this.addUV(ia, ib, ic);

                    } else {

                        id = this.parseUVIndex(ud, uvLen);

                        this.addUV(ia, ib, id);
                        this.addUV(ib, ic, id);

                    }

                }

                if (na !== undefined) {

                    // Normals are many times the same. If so, skip function call and parseInt.
                    var nLen = this.normals.length;
                    ia = this.parseNormalIndex(na, nLen);

                    ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
                    ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

                    if (d === undefined) {

                        this.addNormal(ia, ib, ic);

                    } else {

                        id = this.parseNormalIndex(nd, nLen);

                        this.addNormal(ia, ib, id);
                        this.addNormal(ib, ic, id);

                    }

                }

            },

            addLineGeometry: function(vertices, uvs) {

                this.object.geometry.type = 'Line';

                var vLen = this.vertices.length;
                var uvLen = this.uvs.length;

                for (var vi = 0, l = vertices.length; vi < l; vi++) {

                    this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));

                }

                for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {

                    this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));

                }

            }

        };

        state.startObject('', false);

        return state;

    },

    parse: function(text) {

        console.time('OBJLoader');

        var state = this._createParserState();

        if (text.indexOf('\r\n') !== -1) {

            // This is faster than String.split with regex that splits on both
            text = text.replace('\r\n', '\n');

        }

        var lines = text.split('\n');
        var line = '',
            lineFirstChar = '',
            lineSecondChar = '';
        var lineLength = 0;
        var result = [];

        // Faster to just trim left side of the line. Use if available.
        var trimLeft = (typeof ''.trimLeft === 'function');

        for (var i = 0, l = lines.length; i < l; i++) {

            line = lines[i];

            line = trimLeft ? line.trimLeft() : line.trim();

            lineLength = line.length;

            if (lineLength === 0) continue;

            lineFirstChar = line.charAt(0);

            // @todo invoke passed in handler if any
            if (lineFirstChar === '#') continue;

            if (lineFirstChar === 'v') {

                lineSecondChar = line.charAt(1);

                if (lineSecondChar === ' ' && (result = this.regexp.vertex_pattern.exec(line)) !== null) {

                    // 0                  1      2      3
                    // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

                    state.vertices.push(
                        parseFloat(result[1]),
                        parseFloat(result[2]),
                        parseFloat(result[3]));

                } else if (lineSecondChar === 'n' && (result = this.regexp.normal_pattern.exec(line)) !== null) {

                    // 0                   1      2      3
                    // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

                    state.normals.push(
                        parseFloat(result[1]),
                        parseFloat(result[2]),
                        parseFloat(result[3]));

                } else if (lineSecondChar === 't' && (result = this.regexp.uv_pattern.exec(line)) !== null) {

                    // 0               1      2
                    // ["vt 0.1 0.2", "0.1", "0.2"]

                    state.uvs.push(
                        parseFloat(result[1]),
                        parseFloat(result[2]));

                } else {

                    throw new Error("Unexpected vertex/normal/uv line: '" + line + "'");

                }

            } else if (lineFirstChar === "f") {

                if ((result = this.regexp.face_vertex_uv_normal.exec(line)) !== null) {

                    // f vertex/uv/normal vertex/uv/normal vertex/uv/normal
                    // 0                        1    2    3    4    5    6    7    8    9   10         11         12
                    // ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]

                    state.addFace(
                        result[1], result[4], result[7], result[10],
                        result[2], result[5], result[8], result[11],
                        result[3], result[6], result[9], result[12]);

                } else if ((result = this.regexp.face_vertex_uv.exec(line)) !== null) {

                    // f vertex/uv vertex/uv vertex/uv
                    // 0                  1    2    3    4    5    6   7          8
                    // ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]

                    state.addFace(
                        result[1], result[3], result[5], result[7],
                        result[2], result[4], result[6], result[8]);

                } else if ((result = this.regexp.face_vertex_normal.exec(line)) !== null) {

                    // f vertex//normal vertex//normal vertex//normal
                    // 0                     1    2    3    4    5    6   7          8
                    // ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]

                    state.addFace(
                        result[1], result[3], result[5], result[7],
                        undefined, undefined, undefined, undefined,
                        result[2], result[4], result[6], result[8]);

                } else if ((result = this.regexp.face_vertex.exec(line)) !== null) {

                    // f vertex vertex vertex
                    // 0            1    2    3   4
                    // ["f 1 2 3", "1", "2", "3", undefined]

                    state.addFace(
                        result[1], result[2], result[3], result[4]);

                } else {

                    throw new Error("Unexpected face line: '" + line + "'");

                }

            } else if (lineFirstChar === "l") {

                var lineParts = line.substring(1).trim().split(" ");
                var lineVertices = [],
                    lineUVs = [];

                if (line.indexOf("/") === -1) {

                    lineVertices = lineParts;

                } else {

                    for (var li = 0, llen = lineParts.length; li < llen; li++) {

                        var parts = lineParts[li].split("/");

                        if (parts[0] !== "") lineVertices.push(parts[0]);
                        if (parts[1] !== "") lineUVs.push(parts[1]);

                    }

                }
                state.addLineGeometry(lineVertices, lineUVs);

            } else if ((result = this.regexp.object_pattern.exec(line)) !== null) {

                // o object_name
                // or
                // g group_name

                var name = result[0].substr(1).trim();
                state.startObject(name);

            } else if (this.regexp.material_use_pattern.test(line)) {

                // material

                state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);

            } else if (this.regexp.material_library_pattern.test(line)) {

                // mtl file

                state.materialLibraries.push(line.substring(7).trim());

            } else if ((result = this.regexp.smoothing_pattern.exec(line)) !== null) {

                // smooth shading

                // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
                // but does not define a usemtl for each face set.
                // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
                // This requires some care to not create extra material on each smooth value for "normal" obj files.
                // where explicit usemtl defines geometry groups.
                // Example asset: examples/models/obj/cerberus/Cerberus.obj

                var value = result[1].trim().toLowerCase();
                state.object.smooth = (value === '1' || value === 'on');

                var material = state.object.currentMaterial();
                if (material) {

                    material.smooth = state.object.smooth;

                }

            } else {

                // Handle null terminated files without exception
                if (line === '\0') continue;

                throw new Error("Unexpected line: '" + line + "'");

            }

        }

        state.finalize();

        var container = new THREE.Group();
        container.materialLibraries = [].concat(state.materialLibraries);

        for (var i = 0, l = state.objects.length; i < l; i++) {

            var object = state.objects[i];
            var geometry = object.geometry;
            var materials = object.materials;
            var isLine = (geometry.type === 'Line');

            // Skip o/g line declarations that did not follow with any faces
            if (geometry.vertices.length === 0) continue;

            var buffergeometry = new THREE.BufferGeometry();

            buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));

            if (geometry.normals.length > 0) {

                buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));

            } else {

                buffergeometry.computeVertexNormals();

            }

            if (geometry.uvs.length > 0) {

                buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));

            }

            // Create materials

            var createdMaterials = [];

            for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

                var sourceMaterial = materials[mi];
                var material = undefined;

                if (this.materials !== null) {

                    material = this.materials.create(sourceMaterial.name);

                    // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
                    if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {

                        var materialLine = new THREE.LineBasicMaterial();
                        materialLine.copy(material);
                        material = materialLine;

                    }

                }

                if (!material) {

                    material = (!isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial());
                    material.name = sourceMaterial.name;

                }

                material.shading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;

                createdMaterials.push(material);

            }

            // Create mesh

            var mesh;

            if (createdMaterials.length > 1) {

                for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

                    var sourceMaterial = materials[mi];
                    buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);

                }

                var multiMaterial = new THREE.MultiMaterial(createdMaterials);
                mesh = (!isLine ? new THREE.Mesh(buffergeometry, multiMaterial) : new THREE.Line(buffergeometry, multiMaterial));

            } else {

                mesh = (!isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.Line(buffergeometry, createdMaterials[0]));
            }

            mesh.name = object.name;

            container.add(mesh);

        }

        console.timeEnd('OBJLoader');

        return container;

    }

};
