function getVertexLabels() {
    var e = ["Card Country", "Card Issuer", "Card Type", "Cardholder Name", "IP Address", "Billing Address", "Shipping Address", "Address Mismatch", "Order Value", "Device ID", "Customer History", "Card History"], t = document.getElementById("animation-strings");
    return t ? JSON.parse(t.innerHTML) : e
}
(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.THREE = e.THREE || {})
})(this, function (e) {
    function t() {
    }

    function n(e, t) {
        this.x = e || 0, this.y = t || 0
    }

    function r(t, i, s, o, u, a, f, l, c, h) {
        Object.defineProperty(this, "id", {value: Ii++}), this.uuid = e.Math.generateUUID(), this.sourceFile = this.name = "", this.image = void 0 !== t ? t : r.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== i ? i : r.DEFAULT_MAPPING, this.wrapS = void 0 !== s ? s : 1001, this.wrapT = void 0 !== o ? o : 1001, this.magFilter = void 0 !== u ? u : 1006, this.minFilter = void 0 !== a ? a : 1008, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== f ? f : 1023, this.type = void 0 !== l ? l : 1009, this.offset = new n(0, 0), this.repeat = new n(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : 3e3, this.version = 0, this.onUpdate = null
    }

    function i(e, t, n, r) {
        this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = void 0 !== r ? r : 1
    }

    function s(t, n, s) {
        this.uuid = e.Math.generateUUID(), this.width = t, this.height = n, this.scissor = new i(0, 0, t, n), this.scissorTest = !1, this.viewport = new i(0, 0, t, n), s = s || {}, void 0 === s.minFilter && (s.minFilter = 1006), this.texture = new r(void 0, void 0, s.wrapS, s.wrapT, s.magFilter, s.minFilter, s.format, s.type, s.anisotropy, s.encoding), this.depthBuffer = void 0 !== s.depthBuffer ? s.depthBuffer : !0, this.stencilBuffer = void 0 !== s.stencilBuffer ? s.stencilBuffer : !0, this.depthTexture = void 0 !== s.depthTexture ? s.depthTexture : null
    }

    function o(e, t, n) {
        s.call(this, e, t, n), this.activeMipMapLevel = this.activeCubeFace = 0
    }

    function u(e, t, n, r) {
        this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1
    }

    function a(e, t, n) {
        this.x = e || 0, this.y = t || 0, this.z = n || 0
    }

    function f() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), 0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function l(e, t, n, i, s, o, u, a, f, l) {
        e = void 0 !== e ? e : [], r.call(this, e, void 0 !== t ? t : 301, n, i, s, o, u, a, f, l), this.flipY = !1
    }

    function c(e, t, n) {
        var r = e[0];
        if (0 >= r || 0 < r)return e;
        var i = t * n, s = Ui[i];
        void 0 === s && (s = new Float32Array(i), Ui[i] = s);
        if (0 !== t)for (r.toArray(s, 0), r = 1, i = 0; r !== t; ++r)i += n, e[r].toArray(s, i);
        return s
    }

    function h(e, t) {
        var n = zi[t];
        void 0 === n && (n = new Int32Array(t), zi[t] = n);
        for (var r = 0; r !== t; ++r)n[r] = e.allocTextureUnit();
        return n
    }

    function p(e, t) {
        e.uniform1f(this.addr, t)
    }

    function d(e, t) {
        e.uniform1i(this.addr, t)
    }

    function v(e, t) {
        void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
    }

    function m(e, t) {
        void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
    }

    function g(e, t) {
        void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
    }

    function y(e, t) {
        e.uniformMatrix2fv(this.addr, !1, t.elements || t)
    }

    function b(e, t) {
        e.uniformMatrix3fv(this.addr, !1, t.elements || t)
    }

    function w(e, t) {
        e.uniformMatrix4fv(this.addr, !1, t.elements || t)
    }

    function E(e, t, n) {
        var r = n.allocTextureUnit();
        e.uniform1i(this.addr, r), n.setTexture2D(t || qi, r)
    }

    function S(e, t, n) {
        var r = n.allocTextureUnit();
        e.uniform1i(this.addr, r), n.setTextureCube(t || Ri, r)
    }

    function x(e, t) {
        e.uniform2iv(this.addr, t)
    }

    function T(e, t) {
        e.uniform3iv(this.addr, t)
    }

    function N(e, t) {
        e.uniform4iv(this.addr, t)
    }

    function C(e) {
        switch (e) {
            case 5126:
                return p;
            case 35664:
                return v;
            case 35665:
                return m;
            case 35666:
                return g;
            case 35674:
                return y;
            case 35675:
                return b;
            case 35676:
                return w;
            case 35678:
                return E;
            case 35680:
                return S;
            case 5124:
            case 35670:
                return d;
            case 35667:
            case 35671:
                return x;
            case 35668:
            case 35672:
                return T;
            case 35669:
            case 35673:
                return N
        }
    }

    function k(e, t) {
        e.uniform1fv(this.addr, t)
    }

    function L(e, t) {
        e.uniform1iv(this.addr, t)
    }

    function A(e, t) {
        e.uniform2fv(this.addr, c(t, this.size, 2))
    }

    function O(e, t) {
        e.uniform3fv(this.addr, c(t, this.size, 3))
    }

    function M(e, t) {
        e.uniform4fv(this.addr, c(t, this.size, 4))
    }

    function _(e, t) {
        e.uniformMatrix2fv(this.addr, !1, c(t, this.size, 4))
    }

    function D(e, t) {
        e.uniformMatrix3fv(this.addr, !1, c(t, this.size, 9))
    }

    function P(e, t) {
        e.uniformMatrix4fv(this.addr, !1, c(t, this.size, 16))
    }

    function H(e, t, n) {
        var r = t.length, i = h(n, r);
        e.uniform1iv(this.addr, i);
        for (e = 0; e !== r; ++e)n.setTexture2D(t[e] || qi, i[e])
    }

    function B(e, t, n) {
        var r = t.length, i = h(n, r);
        e.uniform1iv(this.addr, i);
        for (e = 0; e !== r; ++e)n.setTextureCube(t[e] || Ri, i[e])
    }

    function j(e) {
        switch (e) {
            case 5126:
                return k;
            case 35664:
                return A;
            case 35665:
                return O;
            case 35666:
                return M;
            case 35674:
                return _;
            case 35675:
                return D;
            case 35676:
                return P;
            case 35678:
                return H;
            case 35680:
                return B;
            case 5124:
            case 35670:
                return L;
            case 35667:
            case 35671:
                return x;
            case 35668:
            case 35672:
                return T;
            case 35669:
            case 35673:
                return N
        }
    }

    function F(e, t, n) {
        this.id = e, this.addr = n, this.setValue = C(t.type)
    }

    function I(e, t, n) {
        this.id = e, this.addr = n, this.size = t.size, this.setValue = j(t.type)
    }

    function q(e) {
        this.id = e, this.seq = [], this.map = {}
    }

    function R(e, t, n) {
        this.seq = [], this.map = {}, this.renderer = n, n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (var r = 0; r !== n; ++r) {
            var i = e.getActiveUniform(t, r), s = e.getUniformLocation(t, i.name), o = this, u = i.name, a = u.length;
            for (Wi.lastIndex = 0; ;) {
                var f = Wi.exec(u), l = Wi.lastIndex, c = f[1], h = f[3];
                "]" === f[2] && (c |= 0);
                if (void 0 === h || "[" === h && l + 2 === a) {
                    u = o, i = void 0 === h ? new F(c, i, s) : new I(c, i, s), u.seq.push(i), u.map[i.id] = i;
                    break
                }
                h = o.map[c], void 0 === h && (h = new q(c), c = o, o = h, c.seq.push(o), c.map[o.id] = o), o = h
            }
        }
    }

    function U(e, t, n) {
        return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }

    function z(e, t) {
        this.min = void 0 !== e ? e : new n(Infinity, Infinity), this.max = void 0 !== t ? t : new n(-Infinity, -Infinity)
    }

    function W(e, t) {
        var r, i, s, o, u, f, l, c, h, p, d = e.context, v = e.state, m, g, y, b, w, E;
        this.render = function (S, x, T) {
            if (0 !== t.length) {
                S = new a;
                var N = T.w / T.z, C = .5 * T.z, k = .5 * T.w, L = 16 / T.w, A = new n(L * N, L), O = new a(1, 1, 0), M = new n(1, 1), _ = new z;
                _.min.set(0, 0), _.max.set(T.z - 16, T.w - 16);
                if (void 0 === b) {
                    var L = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]), D = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    m = d.createBuffer(), g = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, m), d.bufferData(d.ARRAY_BUFFER, L, d.STATIC_DRAW), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, g), d.bufferData(d.ELEMENT_ARRAY_BUFFER, D, d.STATIC_DRAW), w = d.createTexture(), E = d.createTexture(), v.bindTexture(d.TEXTURE_2D, w), d.texImage2D(d.TEXTURE_2D, 0, d.RGB, 16, 16, 0, d.RGB, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), v.bindTexture(d.TEXTURE_2D, E), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 16, 16, 0, d.RGBA, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST);
                    var L = y = {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    }, D = d.createProgram(), P = d.createShader(d.FRAGMENT_SHADER), H = d.createShader(d.VERTEX_SHADER), B = "precision " + e.getPrecision() + " float;\n";
                    d.shaderSource(P, B + L.fragmentShader), d.shaderSource(H, B + L.vertexShader), d.compileShader(P), d.compileShader(H), d.attachShader(D, P), d.attachShader(D, H), d.linkProgram(D), b = D, h = d.getAttribLocation(b, "position"), p = d.getAttribLocation(b, "uv"), r = d.getUniformLocation(b, "renderType"), i = d.getUniformLocation(b, "map"), s = d.getUniformLocation(b, "occlusionMap"), o = d.getUniformLocation(b, "opacity"), u = d.getUniformLocation(b, "color"), f = d.getUniformLocation(b, "scale"), l = d.getUniformLocation(b, "rotation"), c = d.getUniformLocation(b, "screenPosition")
                }
                d.useProgram(b), v.initAttributes(), v.enableAttribute(h), v.enableAttribute(p), v.disableUnusedAttributes(), d.uniform1i(s, 0), d.uniform1i(i, 1), d.bindBuffer(d.ARRAY_BUFFER, m), d.vertexAttribPointer(h, 2, d.FLOAT, !1, 16, 0), d.vertexAttribPointer(p, 2, d.FLOAT, !1, 16, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, g), v.disable(d.CULL_FACE), v.setDepthWrite(!1), D = 0;
                for (P = t.length; D < P; D++)if (L = 16 / T.w, A.set(L * N, L), H = t[D], S.set(H.matrixWorld.elements[12], H.matrixWorld.elements[13], H.matrixWorld.elements[14]), S.applyMatrix4(x.matrixWorldInverse), S.applyProjection(x.projectionMatrix), O.copy(S), M.x = T.x + O.x * C + C - 8, M.y = T.y + O.y * k + k - 8, !0 === _.containsPoint(M)) {
                    v.activeTexture(d.TEXTURE0), v.bindTexture(d.TEXTURE_2D, null), v.activeTexture(d.TEXTURE1), v.bindTexture(d.TEXTURE_2D, w), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGB, M.x, M.y, 16, 16, 0), d.uniform1i(r, 0), d.uniform2f(f, A.x, A.y), d.uniform3f(c, O.x, O.y, O.z), v.disable(d.BLEND), v.enable(d.DEPTH_TEST), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), v.activeTexture(d.TEXTURE0), v.bindTexture(d.TEXTURE_2D, E), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGBA, M.x, M.y, 16, 16, 0), d.uniform1i(r, 1), v.disable(d.DEPTH_TEST), v.activeTexture(d.TEXTURE1), v.bindTexture(d.TEXTURE_2D, w), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), H.positionScreen.copy(O), H.customUpdateCallback ? H.customUpdateCallback(H) : H.updateLensFlares(), d.uniform1i(r, 2), v.enable(d.BLEND);
                    for (var B = 0, j = H.lensFlares.length; B < j; B++) {
                        var F = H.lensFlares[B];
                        .001 < F.opacity && .001 < F.scale && (O.x = F.x, O.y = F.y, O.z = F.z, L = F.size * F.scale / T.w, A.x = L * N, A.y = L, d.uniform3f(c, O.x, O.y, O.z), d.uniform2f(f, A.x, A.y), d.uniform1f(l, F.rotation), d.uniform1f(o, F.opacity), d.uniform3f(u, F.color.r, F.color.g, F.color.b), v.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst), e.setTexture2D(F.texture, 1), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0))
                    }
                }
                v.enable(d.CULL_FACE), v.enable(d.DEPTH_TEST), v.setDepthWrite(!0), e.resetGLState()
            }
        }
    }

    function X(e, t) {
        function S(e, t) {
            return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
        }

        var n, i, s, o, f, l, c, h, p, d, v, m, g, y, b, w, E, x = e.context, T = e.state, N, C, k, L, A = new a, O = new u, M = new a;
        this.render = function (u, a) {
            if (0 !== t.length) {
                if (void 0 === k) {
                    var _ = new Float32Array([-0.5, -0.5, 0, 0, .5, -0.5, 1, 0, .5, .5, 1, 1, -0.5, .5, 0, 1]), D = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    N = x.createBuffer(), C = x.createBuffer(), x.bindBuffer(x.ARRAY_BUFFER, N), x.bufferData(x.ARRAY_BUFFER, _, x.STATIC_DRAW), x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, C), x.bufferData(x.ELEMENT_ARRAY_BUFFER, D, x.STATIC_DRAW);
                    var _ = x.createProgram(), D = x.createShader(x.VERTEX_SHADER), P = x.createShader(x.FRAGMENT_SHADER);
                    x.shaderSource(D, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")), x.shaderSource(P, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")), x.compileShader(D), x.compileShader(P), x.attachShader(_, D), x.attachShader(_, P), x.linkProgram(_), k = _, w = x.getAttribLocation(k, "position"), E = x.getAttribLocation(k, "uv"), n = x.getUniformLocation(k, "uvOffset"), i = x.getUniformLocation(k, "uvScale"), s = x.getUniformLocation(k, "rotation"), o = x.getUniformLocation(k, "scale"), f = x.getUniformLocation(k, "color"), l = x.getUniformLocation(k, "map"), c = x.getUniformLocation(k, "opacity"), h = x.getUniformLocation(k, "modelViewMatrix"), p = x.getUniformLocation(k, "projectionMatrix"), d = x.getUniformLocation(k, "fogType"), v = x.getUniformLocation(k, "fogDensity"), m = x.getUniformLocation(k, "fogNear"), g = x.getUniformLocation(k, "fogFar"), y = x.getUniformLocation(k, "fogColor"), b = x.getUniformLocation(k, "alphaTest"), _ = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), _.width = 8, _.height = 8, D = _.getContext("2d"), D.fillStyle = "white", D.fillRect(0, 0, 8, 8), L = new r(_), L.needsUpdate = !0
                }
                x.useProgram(k), T.initAttributes(), T.enableAttribute(w), T.enableAttribute(E), T.disableUnusedAttributes(), T.disable(x.CULL_FACE), T.enable(x.BLEND), x.bindBuffer(x.ARRAY_BUFFER, N), x.vertexAttribPointer(w, 2, x.FLOAT, !1, 16, 0), x.vertexAttribPointer(E, 2, x.FLOAT, !1, 16, 8), x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, C), x.uniformMatrix4fv(p, !1, a.projectionMatrix.elements), T.activeTexture(x.TEXTURE0), x.uniform1i(l, 0), D = _ = 0, (P = u.fog) ? (x.uniform3f(y, P.color.r, P.color.g, P.color.b), P && P.isFog ? (x.uniform1f(m, P.near), x.uniform1f(g, P.far), x.uniform1i(d, 1), D = _ = 1) : P && P.isFogExp2 && (x.uniform1f(v, P.density), x.uniform1i(d, 2), D = _ = 2)) : (x.uniform1i(d, 0), D = _ = 0);
                for (var P = 0, H = t.length; P < H; P++) {
                    var B = t[P];
                    B.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, B.matrixWorld), B.z = -B.modelViewMatrix.elements[14]
                }
                t.sort(S);
                for (var j = [], P = 0, H = t.length; P < H; P++) {
                    var B = t[P], F = B.material;
                    !1 !== F.visible && (x.uniform1f(b, F.alphaTest), x.uniformMatrix4fv(h, !1, B.modelViewMatrix.elements), B.matrixWorld.decompose(A, O, M), j[0] = M.x, j[1] = M.y, B = 0, u.fog && F.fog && (B = D), _ !== B && (x.uniform1i(d, B), _ = B), null !== F.map ? (x.uniform2f(n, F.map.offset.x, F.map.offset.y), x.uniform2f(i, F.map.repeat.x, F.map.repeat.y)) : (x.uniform2f(n, 0, 0), x.uniform2f(i, 1, 1)), x.uniform1f(c, F.opacity), x.uniform3f(f, F.color.r, F.color.g, F.color.b), x.uniform1f(s, F.rotation), x.uniform2fv(o, j), T.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst), T.setDepthTest(F.depthTest), T.setDepthWrite(F.depthWrite), F.map ? e.setTexture2D(F.map, 0) : e.setTexture2D(L, 0), x.drawElements(x.TRIANGLES, 6, x.UNSIGNED_SHORT, 0))
                }
                T.enable(x.CULL_FACE), e.resetGLState()
            }
        }
    }

    function V() {
        Object.defineProperty(this, "id", {value: Ji++}), this.uuid = e.Math.generateUUID(), this.name = "", this.type = "Material", this.lights = this.fog = !0, this.blending = 1, this.side = 0, this.shading = 2, this.vertexColors = 0, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.depthFunc = 3, this.depthWrite = this.depthTest = !0, this.clippingPlanes = null, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this._needsUpdate = this.visible = !0
    }

    function $(e) {
        V.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }

    function J(e) {
        V.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.setValues(e)
    }

    function K(e, t) {
        this.min = void 0 !== e ? e : new a(Infinity, Infinity, Infinity), this.max = void 0 !== t ? t : new a(-Infinity, -Infinity, -Infinity)
    }

    function Q(e, t) {
        this.center = void 0 !== e ? e : new a, this.radius = void 0 !== t ? t : 0
    }

    function G() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), 0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    function Y(e, t) {
        this.normal = void 0 !== e ? e : new a(1, 0, 0), this.constant = void 0 !== t ? t : 0
    }

    function Z(e, t, n, r, i, s) {
        this.planes = [void 0 !== e ? e : new Y, void 0 !== t ? t : new Y, void 0 !== n ? n : new Y, void 0 !== r ? r : new Y, void 0 !== i ? i : new Y, void 0 !== s ? s : new Y]
    }

    function et(t, r, o, u) {
        function l(e, n, r, i) {
            var s = e.geometry, o;
            o = S;
            var u = e.customDepthMaterial;
            return r && (o = x, u = e.customDistanceMaterial), u ? o = u : (u = !1, n.morphTargets && (s && s.isBufferGeometry ? u = s.morphAttributes && s.morphAttributes.position && 0 < s.morphAttributes.position.length : s && s.isGeometry && (u = s.morphTargets && 0 < s.morphTargets.length)), e = e.isSkinnedMesh && n.skinning, s = 0, u && (s |= 1), e && (s |= 2), o = o[s]), t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length && (s = o.uuid, u = n.uuid, e = T[s], void 0 === e && (e = {}, T[s] = e), s = e[u], void 0 === s && (s = o.clone(), e[u] = s), o = s), o.visible = n.visible, o.wireframe = n.wireframe, u = n.side, D.renderSingleSided && 2 == u && (u = 0), D.renderReverseSided && (0 === u ? u = 1 : 1 === u && (u = 0)), o.side = u, o.clipShadows = n.clipShadows, o.clippingPlanes = n.clippingPlanes, o.wireframeLinewidth = n.wireframeLinewidth, o.linewidth = n.linewidth, r && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(i), o
        }

        function c(e, t, n) {
            if (!1 !== e.visible) {
                0 !== (e.layers.mask & t.layers.mask) && (e.isMesh || e.isLine || e.isPoints) && e.castShadow && (!1 === e.frustumCulled || !0 === d.intersectsObject(e)) && !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), E.push(e)), e = e.children;
                for (var r = 0, i = e.length; r < i; r++)c(e[r], t, n)
            }
        }

        var h = t.context, p = t.state, d = new Z, v = new f, m = r.shadows, g = new n, y = new n(u.maxTextureSize, u.maxTextureSize), b = new a, w = new a, E = [], S = Array(4), x = Array(4), T = {}, N = [new a(1, 0, 0), new a(-1, 0, 0), new a(0, 0, 1), new a(0, 0, -1), new a(0, 1, 0), new a(0, -1, 0)], C = [new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 0, 1), new a(0, 0, -1)], k = [new i, new i, new i, new i, new i, new i];
        r = new J, r.depthPacking = 3201, r.clipping = !0, u = $i.distanceRGBA;
        for (var L = e.UniformsUtils.clone(u.uniforms), A = 0; 4 !== A; ++A) {
            var O = 0 !== (A & 1), M = 0 !== (A & 2), _ = r.clone();
            _.morphTargets = O, _.skinning = M, S[A] = _, O = new $({
                defines: {USE_SHADOWMAP: ""},
                uniforms: L,
                vertexShader: u.vertexShader,
                fragmentShader: u.fragmentShader,
                morphTargets: O,
                skinning: M,
                clipping: !0
            }), x[A] = O
        }
        var D = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.renderSingleSided = this.renderReverseSided = !0, this.render = function (e, n) {
            if (!1 !== D.enabled && (!1 !== D.autoUpdate || !1 !== D.needsUpdate) && 0 !== m.length) {
                p.clearColor(1, 1, 1, 1), p.disable(h.BLEND), p.setDepthTest(!0), p.setScissorTest(!1);
                for (var r, i, u = 0, a = m.length; u < a; u++) {
                    var f = m[u], S = f.shadow;
                    if (void 0 === S) console.warn("THREE.WebGLShadowMap:", f, "has no shadow."); else {
                        var x = S.camera;
                        g.copy(S.mapSize), g.min(y);
                        if (f && f.isPointLight) {
                            r = 6, i = !0;
                            var T = g.x, L = g.y;
                            k[0].set(2 * T, L, T, L), k[1].set(0, L, T, L), k[2].set(3 * T, L, T, L), k[3].set(T, L, T, L), k[4].set(3 * T, 0, T, L), k[5].set(T, 0, T, L), g.x *= 4, g.y *= 2
                        } else r = 1, i = !1;
                        null === S.map && (S.map = new s(g.x, g.y, {
                            minFilter: 1003,
                            magFilter: 1003,
                            format: 1023
                        }), x.updateProjectionMatrix()), S && S.isSpotLightShadow && S.update(f), T = S.map, S = S.matrix, w.setFromMatrixPosition(f.matrixWorld), x.position.copy(w), t.setRenderTarget(T), t.clear();
                        for (T = 0; T < r; T++) {
                            i ? (b.copy(x.position), b.add(N[T]), x.up.copy(C[T]), x.lookAt(b), p.viewport(k[T])) : (b.setFromMatrixPosition(f.target.matrixWorld), x.lookAt(b)), x.updateMatrixWorld(), x.matrixWorldInverse.getInverse(x.matrixWorld), S.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), S.multiply(x.projectionMatrix), S.multiply(x.matrixWorldInverse), v.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), d.setFromMatrix(v), E.length = 0, c(e, n, x);
                            for (var L = 0, A = E.length; L < A; L++) {
                                var O = E[L], M = o.update(O), _ = O.material;
                                if (_ && _.isMultiMaterial)for (var P = M.groups, _ = _.materials, H = 0, B = P.length; H < B; H++) {
                                    var j = P[H], F = _[j.materialIndex];
                                    !0 === F.visible && (F = l(O, F, i, w), t.renderBufferDirect(x, null, M, F, O, j))
                                } else F = l(O, _, i, w), t.renderBufferDirect(x, null, M, F, O, null)
                            }
                        }
                    }
                }
                r = t.getClearColor(), i = t.getClearAlpha(), t.setClearColor(r, i), D.needsUpdate = !1
            }
        }
    }

    function tt(e, t) {
        this.origin = void 0 !== e ? e : new a, this.direction = void 0 !== t ? t : new a
    }

    function nt(e, t, n, r) {
        this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = r || nt.DefaultOrder
    }

    function rt() {
        this.mask = 1
    }

    function it() {
        Object.defineProperty(this, "id", {value: Ki++}), this.uuid = e.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DefaultUp.clone();
        var t = new a, n = new nt, r = new u, i = new a(1, 1, 1);
        n.onChange(function () {
            r.setFromEuler(n, !1)
        }), r.onChange(function () {
            n.setFromQuaternion(r, void 0, !1)
        }), Object.defineProperties(this, {
            position: {enumerable: !0, value: t},
            rotation: {enumerable: !0, value: n},
            quaternion: {enumerable: !0, value: r},
            scale: {enumerable: !0, value: i},
            modelViewMatrix: {value: new f},
            normalMatrix: {value: new G}
        }), this.matrix = new f, this.matrixWorld = new f, this.matrixAutoUpdate = it.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new rt, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}, this.onBeforeRender = null
    }

    function st(e, t) {
        this.start = void 0 !== e ? e : new a, this.end = void 0 !== t ? t : new a
    }

    function ot(e, t, n) {
        this.a = void 0 !== e ? e : new a, this.b = void 0 !== t ? t : new a, this.c = void 0 !== n ? n : new a
    }

    function ut(e, t, n, r, i, s) {
        this.a = e, this.b = t, this.c = n, this.normal = r && r.isVector3 ? r : new a, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new U, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== s ? s : 0
    }

    function at(e) {
        V.call(this), this.type = "MeshBasicMaterial", this.color = new U(16777215), this.aoMap = this.map = null, this.aoMapIntensity = 1, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.lights = this.morphTargets = this.skinning = !1, this.setValues(e)
    }

    function ft(t, n, r) {
        if (Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = e.Math.generateUUID(), this.array = t, this.itemSize = n, this.count = void 0 !== t ? t.length / n : 0, this.normalized = !0 === r, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function lt(e, t) {
        return new ft(new Uint16Array(e), t)
    }

    function ct(e, t) {
        return new ft(new Uint32Array(e), t)
    }

    function ht(e, t) {
        return new ft(new Float32Array(e), t)
    }

    function pt() {
        Object.defineProperty(this, "id", {value: Qi++}), this.uuid = e.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }

    function dt() {
        Object.defineProperty(this, "id", {value: Qi++}), this.uuid = e.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }

    function vt() {
        Object.defineProperty(this, "id", {value: Qi++}), this.uuid = e.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.drawRange = {
            start: 0,
            count: Infinity
        }
    }

    function mt(e, t) {
        it.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new vt, this.material = void 0 !== t ? t : new at({color: 16777215 * Math.random()}), this.drawMode = 0, this.updateMorphTargets()
    }

    function gt(e, t, n, r, i, s) {
        function o(e, t, n, r, i, s, o, f, l, w, E) {
            var S = s / l, x = o / w, T = s / 2, N = o / 2, C = f / 2;
            o = l + 1;
            for (var k = w + 1, L = s = 0, A = new a, O = 0; O < k; O++)for (var M = O * x - N, _ = 0; _ < o; _++)A[e] = (_ * S - T) * r, A[t] = M * i, A[n] = C, h[v] = A.x, h[v + 1] = A.y, h[v + 2] = A.z, A[e] = 0, A[t] = 0, A[n] = 0 < f ? 1 : -1, p[v] = A.x, p[v + 1] = A.y, p[v + 2] = A.z, d[m] = _ / l, d[m + 1] = 1 - O / w, v += 3, m += 2, s += 1;
            for (O = 0; O < w; O++)for (_ = 0; _ < l; _++)e = y + _ + o * (O + 1), t = y + (_ + 1) + o * (O + 1), n = y + (_ + 1) + o * O, c[g] = y + _ + o * O, c[g + 1] = e, c[g + 2] = n, c[g + 3] = e, c[g + 4] = t, c[g + 5] = n, g += 6, L += 6;
            u.addGroup(b, L, E), b += L, y += s
        }

        vt.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: s
        };
        var u = this;
        r = Math.floor(r) || 1, i = Math.floor(i) || 1, s = Math.floor(s) || 1;
        var f = function (e, t, n) {
            return e = 0 + (e + 1) * (t + 1) * 2 + (e + 1) * (n + 1) * 2 + (n + 1) * (t + 1) * 2
        }(r, i, s), l = function (e, t, n) {
            return e = 0 + e * t * 2 + e * n * 2 + n * t * 2, 6 * e
        }(r, i, s), c = new (65535 < l ? Uint32Array : Uint16Array)(l), h = new Float32Array(3 * f), p = new Float32Array(3 * f), d = new Float32Array(2 * f), v = 0, m = 0, g = 0, y = 0, b = 0;
        o("z", "y", "x", -1, -1, n, t, e, s, i, 0), o("z", "y", "x", 1, -1, n, t, -e, s, i, 1), o("x", "z", "y", 1, 1, e, n, t, r, s, 2), o("x", "z", "y", 1, -1, e, n, -t, r, s, 3), o("x", "y", "z", 1, -1, e, t, n, r, i, 4), o("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(new ft(c, 1)), this.addAttribute("position", new ft(h, 3)), this.addAttribute("normal", new ft(p, 3)), this.addAttribute("uv", new ft(d, 2))
    }

    function yt(e, t, n, r) {
        vt.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        };
        var i = e / 2, s = t / 2;
        n = Math.floor(n) || 1, r = Math.floor(r) || 1;
        var o = n + 1, u = r + 1, a = e / n, f = t / r;
        t = new Float32Array(o * u * 3), e = new Float32Array(o * u * 3);
        for (var l = new Float32Array(o * u * 2), c = 0, h = 0, p = 0; p < u; p++)for (var d = p * f - s, v = 0; v < o; v++)t[c] = v * a - i, t[c + 1] = -d, e[c + 2] = 1, l[h] = v / n, l[h + 1] = 1 - p / r, c += 3, h += 2;
        c = 0, i = new (65535 < t.length / 3 ? Uint32Array : Uint16Array)(n * r * 6);
        for (p = 0; p < r; p++)for (v = 0; v < n; v++)s = v + o * (p + 1), u = v + 1 + o * (p + 1), a = v + 1 + o * p, i[c] = v + o * p, i[c + 1] = s, i[c + 2] = a, i[c + 3] = s, i[c + 4] = u, i[c + 5] = a, c += 6;
        this.setIndex(new ft(i, 1)), this.addAttribute("position", new ft(t, 3)), this.addAttribute("normal", new ft(e, 3)), this.addAttribute("uv", new ft(l, 2))
    }

    function bt() {
        it.call(this), this.type = "Camera", this.matrixWorldInverse = new f, this.projectionMatrix = new f
    }

    function wt(e, t, n, r) {
        bt.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function Et(e, t, n, r, i, s) {
        bt.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = void 0 !== i ? i : .1, this.far = void 0 !== s ? s : 2e3, this.updateProjectionMatrix()
    }

    function St(e, t, n) {
        var r, i, s;
        return {
            setMode: function (e) {
                r = e
            }, setIndex: function (n) {
                n.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (i = e.UNSIGNED_INT, s = 4) : (i = e.UNSIGNED_SHORT, s = 2)
            }, render: function (t, o) {
                e.drawElements(r, o, i, t * s), n.calls++, n.vertices += o, r === e.TRIANGLES && (n.faces += o / 3)
            }, renderInstances: function (o, u, a) {
                var f = t.get("ANGLE_instanced_arrays");
                null === f ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (f.drawElementsInstancedANGLE(r, a, i, u * s, o.maxInstancedCount), n.calls++, n.vertices += a * o.maxInstancedCount, r === e.TRIANGLES && (n.faces += o.maxInstancedCount * a / 3))
            }
        }
    }

    function xt(e, t, n) {
        var r;
        return {
            setMode: function (e) {
                r = e
            }, render: function (t, i) {
                e.drawArrays(r, t, i), n.calls++, n.vertices += i, r === e.TRIANGLES && (n.faces += i / 3)
            }, renderInstances: function (i) {
                var s = t.get("ANGLE_instanced_arrays");
                if (null === s) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); else {
                    var o = i.attributes.position, o = o && o.isInterleavedBufferAttribute ? o.data.count : o.count;
                    s.drawArraysInstancedANGLE(r, 0, o, i.maxInstancedCount), n.calls++, n.vertices += o * i.maxInstancedCount, r === e.TRIANGLES && (n.faces += i.maxInstancedCount * o / 3)
                }
            }
        }
    }

    function Tt() {
        var e = {};
        return {
            get: function (t) {
                if (void 0 !== e[t.id])return e[t.id];
                var r;
                switch (t.type) {
                    case"DirectionalLight":
                        r = {
                            direction: new a,
                            color: new U,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case"SpotLight":
                        r = {
                            position: new a,
                            direction: new a,
                            color: new U,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case"PointLight":
                        r = {
                            position: new a,
                            color: new U,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case"HemisphereLight":
                        r = {direction: new a, skyColor: new U, groundColor: new U}
                }
                return e[t.id] = r
            }
        }
    }

    function Nt(e) {
        e = e.split("\n");
        for (var t = 0; t < e.length; t++)e[t] = t + 1 + ": " + e[t];
        return e.join("\n")
    }

    function Ct(e, t, n) {
        var r = e.createShader(t);
        return e.shaderSource(r, n), e.compileShader(r), !1 === e.getShaderParameter(r, e.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(r) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(r), Nt(n)), r
    }

    function kt(e) {
        switch (e) {
            case 3e3:
                return ["Linear", "( value )"];
            case 3001:
                return ["sRGB", "( value )"];
            case 3002:
                return ["RGBE", "( value )"];
            case 3004:
                return ["RGBM", "( value, 7.0 )"];
            case 3005:
                return ["RGBM", "( value, 16.0 )"];
            case 3006:
                return ["RGBD", "( value, 256.0 )"];
            case 3007:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw Error("unsupported encoding: " + e)
        }
    }

    function Lt(e, t) {
        var n = kt(t);
        return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }

    function At(e, t) {
        var n = kt(t);
        return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    }

    function Ot(e, t) {
        var n;
        switch (t) {
            case 1:
                n = "Linear";
                break;
            case 2:
                n = "Reinhard";
                break;
            case 3:
                n = "Uncharted2";
                break;
            case 4:
                n = "OptimizedCineon";
                break;
            default:
                throw Error("unsupported toneMapping: " + t)
        }
        return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }

    function Mt(e, t, n) {
        return e = e || {}, [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Dt).join("\n")
    }

    function _t(e) {
        var t = [], n;
        for (n in e) {
            var r = e[n];
            !1 !== r && t.push("#define " + n + " " + r)
        }
        return t.join("\n")
    }

    function Dt(e) {
        return "" !== e
    }

    function Pt(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }

    function Ht(e) {
        return e.replace(/#include +<([\w\d.]+)>/g, function (e, t) {
            var n = Xi[t];
            if (void 0 === n)throw Error("Can not resolve #include <" + t + ">");
            return Ht(n)
        })
    }

    function Bt(e) {
        return e.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function (e, t, n, r) {
            e = "";
            for (t = parseInt(t); t < parseInt(n); t++)e += r.replace(/\[ i \]/g, "[ " + t + " ]");
            return e
        })
    }

    function jt(e, t, n, r) {
        var i = e.context, s = n.extensions, o = n.defines, u = n.__webglShader.vertexShader, a = n.__webglShader.fragmentShader, f = "SHADOWMAP_TYPE_BASIC";
        1 === r.shadowMapType ? f = "SHADOWMAP_TYPE_PCF" : 2 === r.shadowMapType && (f = "SHADOWMAP_TYPE_PCF_SOFT");
        var l = "ENVMAP_TYPE_CUBE", c = "ENVMAP_MODE_REFLECTION", h = "ENVMAP_BLENDING_MULTIPLY";
        if (r.envMap) {
            switch (n.envMap.mapping) {
                case 301:
                case 302:
                    l = "ENVMAP_TYPE_CUBE";
                    break;
                case 306:
                case 307:
                    l = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case 303:
                case 304:
                    l = "ENVMAP_TYPE_EQUIREC";
                    break;
                case 305:
                    l = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
                case 302:
                case 304:
                    c = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
                case 0:
                    h = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    h = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    h = "ENVMAP_BLENDING_ADD"
            }
        }
        var p = 0 < e.gammaFactor ? e.gammaFactor : 1, s = Mt(s, r, e.extensions), d = _t(o), v = i.createProgram();
        n.isRawShaderMaterial ? (o = [d, "\n"].filter(Dt).join("\n"), f = [s, d, "\n"].filter(Dt).join("\n")) : (o = ["precision " + r.precision + " float;", "precision " + r.precision + " int;", "#define SHADER_NAME " + n.__webglShader.name, d, r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + p, "#define MAX_BONES " + r.maxBones, r.map ? "#define USE_MAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + c : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.displacementMap && r.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.vertexColors ? "#define USE_COLOR" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.skinning ? "#define USE_SKINNING" : "", r.useVertexTexture ? "#define BONE_TEXTURE" : "", r.morphTargets ? "#define USE_MORPHTARGETS" : "", r.morphNormals && !1 === r.flatShading ? "#define USE_MORPHNORMALS" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + r.numClippingPlanes, r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + f : "", r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(Dt).join("\n"), f = [s, "precision " + r.precision + " float;", "precision " + r.precision + " int;", "#define SHADER_NAME " + n.__webglShader.name, d, r.alphaTest ? "#define ALPHATEST " + r.alphaTest : "", "#define GAMMA_FACTOR " + p, r.useFog && r.fog ? "#define USE_FOG" : "", r.useFog && r.fogExp ? "#define FOG_EXP2" : "", r.map ? "#define USE_MAP" : "", r.envMap ? "#define USE_ENVMAP" : "", r.envMap ? "#define " + l : "", r.envMap ? "#define " + c : "", r.envMap ? "#define " + h : "", r.lightMap ? "#define USE_LIGHTMAP" : "", r.aoMap ? "#define USE_AOMAP" : "", r.emissiveMap ? "#define USE_EMISSIVEMAP" : "", r.bumpMap ? "#define USE_BUMPMAP" : "", r.normalMap ? "#define USE_NORMALMAP" : "", r.specularMap ? "#define USE_SPECULARMAP" : "", r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", r.metalnessMap ? "#define USE_METALNESSMAP" : "", r.alphaMap ? "#define USE_ALPHAMAP" : "", r.vertexColors ? "#define USE_COLOR" : "", r.flatShading ? "#define FLAT_SHADED" : "", r.doubleSided ? "#define DOUBLE_SIDED" : "", r.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + r.numClippingPlanes, r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", r.shadowMapEnabled ? "#define " + f : "", r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", r.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", r.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== r.toneMapping ? "#define TONE_MAPPING" : "", 0 !== r.toneMapping ? Xi.tonemapping_pars_fragment : "", 0 !== r.toneMapping ? Ot("toneMapping", r.toneMapping) : "", r.outputEncoding || r.mapEncoding || r.envMapEncoding || r.emissiveMapEncoding ? Xi.encodings_pars_fragment : "", r.mapEncoding ? Lt("mapTexelToLinear", r.mapEncoding) : "", r.envMapEncoding ? Lt("envMapTexelToLinear", r.envMapEncoding) : "", r.emissiveMapEncoding ? Lt("emissiveMapTexelToLinear", r.emissiveMapEncoding) : "", r.outputEncoding ? At("linearToOutputTexel", r.outputEncoding) : "", r.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Dt).join("\n")), u = Ht(u, r), u = Pt(u, r), a = Ht(a, r), a = Pt(a, r), n.isShaderMaterial || (u = Bt(u), a = Bt(a)), a = f + a, u = Ct(i, i.VERTEX_SHADER, o + u), a = Ct(i, i.FRAGMENT_SHADER, a), i.attachShader(v, u), i.attachShader(v, a), void 0 !== n.index0AttributeName ? i.bindAttribLocation(v, 0, n.index0AttributeName) : !0 === r.morphTargets && i.bindAttribLocation(v, 0, "position"), i.linkProgram(v), r = i.getProgramInfoLog(v), l = i.getShaderInfoLog(u), c = i.getShaderInfoLog(a), p = h = !0;
        if (!1 === i.getProgramParameter(v, i.LINK_STATUS)) h = !1, console.error("THREE.WebGLProgram: shader error: ", i.getError(), "gl.VALIDATE_STATUS", i.getProgramParameter(v, i.VALIDATE_STATUS), "gl.getProgramInfoLog", r, l, c); else if ("" !== r) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", r); else if ("" === l || "" === c) p = !1;
        p && (this.diagnostics = {
            runnable: h,
            material: n,
            programLog: r,
            vertexShader: {log: l, prefix: o},
            fragmentShader: {log: c, prefix: f}
        }), i.deleteShader(u), i.deleteShader(a);
        var m;
        this.getUniforms = function () {
            return void 0 === m && (m = new R(i, v, e)), m
        };
        var g;
        return this.getAttributes = function () {
            if (void 0 === g) {
                for (var e = {}, t = i.getProgramParameter(v, i.ACTIVE_ATTRIBUTES), n = 0; n < t; n++) {
                    var r = i.getActiveAttrib(v, n).name;
                    e[r] = i.getAttribLocation(v, r)
                }
                g = e
            }
            return g
        }, this.destroy = function () {
            i.deleteProgram(v), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            }, attributes: {
                get: function () {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.id = Gi++, this.code = t, this.usedTimes = 1, this.program = v, this.vertexShader = u, this.fragmentShader = a, this
    }

    function Ft(e, t) {
        function n(e, t) {
            var n;
            return e ? e && e.isTexture ? n = e.encoding : e && e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = e.texture.encoding) : n = 3e3, 3e3 === n && t && (n = 3007), n
        }

        var r = [], i = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        }, s = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes depthPacking".split(" ");
        this.getParameters = function (r, s, o, u, a) {
            var f = i[r.type], l;
            t.floatVertexTextures && a && a.skeleton && a.skeleton.useVertexTexture ? l = 1024 : (l = Math.floor((t.maxVertexUniforms - 20) / 4), void 0 !== a && a && a.isSkinnedMesh && (l = Math.min(a.skeleton.bones.length, l), l < a.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + a.skeleton.bones.length + ", this GPU supports just " + l + " (try OpenGL instead of ANGLE)")));
            var c = e.getPrecision();
            null !== r.precision && (c = t.getMaxPrecision(r.precision), c !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", c, "instead."));
            var h = e.getCurrentRenderTarget();
            return {
                shaderID: f,
                precision: c,
                supportsVertexTextures: t.vertexTextures,
                outputEncoding: n(h ? h.texture : null, e.gammaOutput),
                map: !!r.map,
                mapEncoding: n(r.map, e.gammaInput),
                envMap: !!r.envMap,
                envMapMode: r.envMap && r.envMap.mapping,
                envMapEncoding: n(r.envMap, e.gammaInput),
                envMapCubeUV: !!r.envMap && (306 === r.envMap.mapping || 307 === r.envMap.mapping),
                lightMap: !!r.lightMap,
                aoMap: !!r.aoMap,
                emissiveMap: !!r.emissiveMap,
                emissiveMapEncoding: n(r.emissiveMap, e.gammaInput),
                bumpMap: !!r.bumpMap,
                normalMap: !!r.normalMap,
                displacementMap: !!r.displacementMap,
                roughnessMap: !!r.roughnessMap,
                metalnessMap: !!r.metalnessMap,
                specularMap: !!r.specularMap,
                alphaMap: !!r.alphaMap,
                combine: r.combine,
                vertexColors: r.vertexColors,
                fog: !!o,
                useFog: r.fog,
                fogExp: o && o.isFogExp2,
                flatShading: 1 === r.shading,
                sizeAttenuation: r.sizeAttenuation,
                logarithmicDepthBuffer: t.logarithmicDepthBuffer,
                skinning: r.skinning,
                maxBones: l,
                useVertexTexture: t.floatVertexTextures && a && a.skeleton && a.skeleton.useVertexTexture,
                morphTargets: r.morphTargets,
                morphNormals: r.morphNormals,
                maxMorphTargets: e.maxMorphTargets,
                maxMorphNormals: e.maxMorphNormals,
                numDirLights: s.directional.length,
                numPointLights: s.point.length,
                numSpotLights: s.spot.length,
                numHemiLights: s.hemi.length,
                numClippingPlanes: u,
                shadowMapEnabled: e.shadowMap.enabled && a.receiveShadow && 0 < s.shadows.length,
                shadowMapType: e.shadowMap.type,
                toneMapping: e.toneMapping,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: r.premultipliedAlpha,
                alphaTest: r.alphaTest,
                doubleSided: 2 === r.side,
                flipSided: 1 === r.side,
                depthPacking: void 0 !== r.depthPacking ? r.depthPacking : !1
            }
        }, this.getProgramCode = function (e, t) {
            var n = [];
            t.shaderID ? n.push(t.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader));
            if (void 0 !== e.defines)for (var r in e.defines)n.push(r), n.push(e.defines[r]);
            for (r = 0; r < s.length; r++)n.push(t[s[r]]);
            return n.join()
        }, this.acquireProgram = function (t, n, i) {
            for (var s, o = 0, u = r.length; o < u; o++) {
                var a = r[o];
                if (a.code === i) {
                    s = a, ++s.usedTimes;
                    break
                }
            }
            return void 0 === s && (s = new jt(e, i, t, n), r.push(s)), s
        }, this.releaseProgram = function (e) {
            if (0 === --e.usedTimes) {
                var t = r.indexOf(e);
                r[t] = r[r.length - 1], r.pop(), e.destroy()
            }
        }, this.programs = r
    }

    function It(e, t, n) {
        function r(e) {
            var o = e.target;
            e = s[o.id], null !== e.index && i(e.index);
            var u = e.attributes, a;
            for (a in u)i(u[a]);
            o.removeEventListener("dispose", r), delete s[o.id], a = t.get(o), a.wireframe && i(a.wireframe), t["delete"](o), o = t.get(e), o.wireframe && i(o.wireframe), t["delete"](e), n.memory.geometries--
        }

        function i(n) {
            var r;
            r = n.isInterleavedBufferAttribute ? t.get(n.data).__webglBuffer : t.get(n).__webglBuffer, void 0 !== r && (e.deleteBuffer(r), n.isInterleavedBufferAttribute ? t["delete"](n.data) : t["delete"](n))
        }

        var s = {};
        return {
            get: function (e) {
                var t = e.geometry;
                if (void 0 !== s[t.id])return s[t.id];
                t.addEventListener("dispose", r);
                var i;
                return t.isBufferGeometry ? i = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new vt).setFromObject(e)), i = t._bufferGeometry), s[t.id] = i, n.memory.geometries++, i
            }
        }
    }

    function qt(e, t, n) {
        function r(n, r) {
            var i = n.isInterleavedBufferAttribute ? n.data : n, s = t.get(i);
            void 0 === s.__webglBuffer ? (s.__webglBuffer = e.createBuffer(), e.bindBuffer(r, s.__webglBuffer), e.bufferData(r, i.array, i.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW), s.version = i.version) : s.version !== i.version && (e.bindBuffer(r, s.__webglBuffer), !1 === i.dynamic || -1 === i.updateRange.count ? e.bufferSubData(r, 0, i.array) : 0 === i.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(r, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)), i.updateRange.count = 0), s.version = i.version)
        }

        var i = new It(e, t, n);
        return {
            getAttributeBuffer: function (e) {
                return e.isInterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            }, getWireframeAttribute: function (n) {
                var i = t.get(n);
                if (void 0 !== i.wireframe)return i.wireframe;
                var s = [], o = n.index, u = n.attributes;
                n = u.position;
                if (null !== o)for (var o = o.array, u = 0, a = o.length; u < a; u += 3) {
                    var f = o[u + 0], l = o[u + 1], c = o[u + 2];
                    s.push(f, l, l, c, c, f)
                } else for (o = u.position.array, u = 0, a = o.length / 3 - 1; u < a; u += 3)f = u + 0, l = u + 1, c = u + 2, s.push(f, l, l, c, c, f);
                return s = new ft(new (65535 < n.count ? Uint32Array : Uint16Array)(s), 1), r(s, e.ELEMENT_ARRAY_BUFFER), i.wireframe = s
            }, update: function (t) {
                var n = i.get(t);
                t.geometry.isGeometry && n.updateFromObject(t), t = n.index;
                var s = n.attributes;
                null !== t && r(t, e.ELEMENT_ARRAY_BUFFER);
                for (var o in s)r(s[o], e.ARRAY_BUFFER);
                t = n.morphAttributes;
                for (o in t)for (var s = t[o], u = 0, a = s.length; u < a; u++)r(s[u], e.ARRAY_BUFFER);
                return n
            }
        }
    }

    function Rt(t, n, r, i, s, o, u) {
        function a(e, t) {
            if (e.width > t || e.height > t) {
                var n = t / Math.max(e.width, e.height), r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                return r.width = Math.floor(e.width * n), r.height = Math.floor(e.height * n), r.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + r.width + "x" + r.height, e), r
            }
            return e
        }

        function f(t) {
            return e.Math.isPowerOfTwo(t.width) && e.Math.isPowerOfTwo(t.height)
        }

        function l(e) {
            return 1003 === e || 1004 === e || 1005 === e ? t.NEAREST : t.LINEAR
        }

        function c(e) {
            e = e.target, e.removeEventListener("dispose", c);
            e:{
                var n = i.get(e);
                if (e.image && n.__image__webglTextureCube) t.deleteTexture(n.__image__webglTextureCube); else {
                    if (void 0 === n.__webglInit)break e;
                    t.deleteTexture(n.__webglTexture)
                }
                i["delete"](e)
            }
            g.textures--
        }

        function h(e) {
            e = e.target, e.removeEventListener("dispose", h);
            var n = i.get(e), r = i.get(e.texture);
            if (e) {
                void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose();
                if (e && e.isWebGLRenderTargetCube)for (r = 0; 6 > r; r++)t.deleteFramebuffer(n.__webglFramebuffer[r]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[r]); else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                i["delete"](e.texture), i["delete"](e)
            }
            g.textures--
        }

        function p(n, u) {
            var l = i.get(n);
            if (0 < n.version && l.__version !== n.version) {
                var h = n.image;
                if (void 0 === h) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", n); else {
                    if (!1 !== h.complete) {
                        void 0 === l.__webglInit && (l.__webglInit = !0, n.addEventListener("dispose", c), l.__webglTexture = t.createTexture(), g.textures++), r.activeTexture(t.TEXTURE0 + u), r.bindTexture(t.TEXTURE_2D, l.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment);
                        var p = a(n.image, s.maxTextureSize);
                        if ((1001 !== n.wrapS || 1001 !== n.wrapT || 1003 !== n.minFilter && 1006 !== n.minFilter) && !1 === f(p))if (h = p, h instanceof HTMLImageElement || h instanceof HTMLCanvasElement) {
                            var v = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                            v.width = e.Math.nearestPowerOfTwo(h.width), v.height = e.Math.nearestPowerOfTwo(h.height), v.getContext("2d").drawImage(h, 0, 0, v.width, v.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + h.width + "x" + h.height + "). Resized to " + v.width + "x" + v.height, h), p = v
                        } else p = h;
                        var h = f(p), v = o(n.format), m = o(n.type);
                        d(t.TEXTURE_2D, n, h);
                        var b = n.mipmaps;
                        if (n && n.isDepthTexture) {
                            b = t.DEPTH_COMPONENT;
                            if (1015 === n.type) {
                                if (!y)throw Error("Float Depth Texture only supported in WebGL2.0");
                                b = t.DEPTH_COMPONENT32F
                            } else y && (b = t.DEPTH_COMPONENT16);
                            1027 === n.format && (b = t.DEPTH_STENCIL), r.texImage2D(t.TEXTURE_2D, 0, b, p.width, p.height, 0, v, m, null)
                        } else if (n && n.isDataTexture)if (0 < b.length && h) {
                            for (var w = 0, E = b.length; w < E; w++)p = b[w], r.texImage2D(t.TEXTURE_2D, w, v, p.width, p.height, 0, v, m, p.data);
                            n.generateMipmaps = !1
                        } else r.texImage2D(t.TEXTURE_2D, 0, v, p.width, p.height, 0, v, m, p.data); else if (n && n.isCompressedTexture)for (w = 0, E = b.length; w < E; w++)p = b[w], 1023 !== n.format && 1022 !== n.format ? -1 < r.getCompressedTextureFormats().indexOf(v) ? r.compressedTexImage2D(t.TEXTURE_2D, w, v, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : r.texImage2D(t.TEXTURE_2D, w, v, p.width, p.height, 0, v, m, p.data); else if (0 < b.length && h) {
                            w = 0;
                            for (E = b.length; w < E; w++)p = b[w], r.texImage2D(t.TEXTURE_2D, w, v, v, m, p);
                            n.generateMipmaps = !1
                        } else r.texImage2D(t.TEXTURE_2D, 0, v, v, m, p);
                        n.generateMipmaps && h && t.generateMipmap(t.TEXTURE_2D), l.__version = n.version, n.onUpdate && n.onUpdate(n);
                        return
                    }
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", n)
                }
            }
            r.activeTexture(t.TEXTURE0 + u), r.bindTexture(t.TEXTURE_2D, l.__webglTexture)
        }

        function d(e, r, u) {
            u ? (t.texParameteri(e, t.TEXTURE_WRAP_S, o(r.wrapS)), t.texParameteri(e, t.TEXTURE_WRAP_T, o(r.wrapT)), t.texParameteri(e, t.TEXTURE_MAG_FILTER, o(r.magFilter)), t.texParameteri(e, t.TEXTURE_MIN_FILTER, o(r.minFilter))) : (t.texParameteri(e, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(e, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), 1001 === r.wrapS && 1001 === r.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", r), t.texParameteri(e, t.TEXTURE_MAG_FILTER, l(r.magFilter)), t.texParameteri(e, t.TEXTURE_MIN_FILTER, l(r.minFilter)), 1003 !== r.minFilter && 1006 !== r.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", r)), !(u = n.get("EXT_texture_filter_anisotropic")) || 1015 === r.type && null === n.get("OES_texture_float_linear") || 1016 === r.type && null === n.get("OES_texture_half_float_linear") || !(1 < r.anisotropy || i.get(r).__currentAnisotropy) || (t.texParameterf(e, u.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, s.getMaxAnisotropy())), i.get(r).__currentAnisotropy = r.anisotropy)
        }

        function v(e, n, s, u) {
            var a = o(n.texture.format), f = o(n.texture.type);
            r.texImage2D(u, 0, a, n.width, n.height, 0, a, f, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, s, u, i.get(n.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function m(e, n) {
            t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : n.depthBuffer && n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, n.width, n.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
        }

        var g = u.memory, y = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
        this.setTexture2D = p, this.setTextureCube = function (e, n) {
            var u = i.get(e);
            if (6 === e.image.length)if (0 < e.version && u.__version !== e.version) {
                u.__image__webglTextureCube || (e.addEventListener("dispose", c), u.__image__webglTextureCube = t.createTexture(), g.textures++), r.activeTexture(t.TEXTURE0 + n), r.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                for (var l = e && e.isCompressedTexture, h = e.image[0] && e.image[0].isDataTexture, p = [], v = 0; 6 > v; v++)p[v] = l || h ? h ? e.image[v].image : e.image[v] : a(e.image[v], s.maxCubemapSize);
                var m = f(p[0]), y = o(e.format), b = o(e.type);
                d(t.TEXTURE_CUBE_MAP, e, m);
                for (v = 0; 6 > v; v++)if (l)for (var w, E = p[v].mipmaps, S = 0, x = E.length; S < x; S++)w = E[S], 1023 !== e.format && 1022 !== e.format ? -1 < r.getCompressedTextureFormats().indexOf(y) ? r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, S, y, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, S, y, w.width, w.height, 0, y, b, w.data); else h ? r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, y, p[v].width, p[v].height, 0, y, b, p[v].data) : r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, y, y, b, p[v]);
                e.generateMipmaps && m && t.generateMipmap(t.TEXTURE_CUBE_MAP), u.__version = e.version, e.onUpdate && e.onUpdate(e)
            } else r.activeTexture(t.TEXTURE0 + n), r.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube)
        }, this.setTextureCubeDynamic = function (e, n) {
            r.activeTexture(t.TEXTURE0 + n), r.bindTexture(t.TEXTURE_CUBE_MAP, i.get(e).__webglTexture)
        }, this.setupRenderTarget = function (e) {
            var n = i.get(e), s = i.get(e.texture);
            e.addEventListener("dispose", h), s.__webglTexture = t.createTexture(), g.textures++;
            var o = e && e.isWebGLRenderTargetCube, u = f(e);
            if (o) {
                n.__webglFramebuffer = [];
                for (var a = 0; 6 > a; a++)n.__webglFramebuffer[a] = t.createFramebuffer()
            } else n.__webglFramebuffer = t.createFramebuffer();
            if (o) {
                r.bindTexture(t.TEXTURE_CUBE_MAP, s.__webglTexture), d(t.TEXTURE_CUBE_MAP, e.texture, u);
                for (a = 0; 6 > a; a++)v(n.__webglFramebuffer[a], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + a);
                e.texture.generateMipmaps && u && t.generateMipmap(t.TEXTURE_CUBE_MAP), r.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else r.bindTexture(t.TEXTURE_2D, s.__webglTexture), d(t.TEXTURE_2D, e.texture, u), v(n.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), e.texture.generateMipmaps && u && t.generateMipmap(t.TEXTURE_2D), r.bindTexture(t.TEXTURE_2D, null);
            if (e.depthBuffer) {
                n = i.get(e), s = e && e.isWebGLRenderTargetCube;
                if (e.depthTexture) {
                    if (s)throw Error("target.depthTexture not supported in Cube render targets");
                    if (e && e.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");
                    t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer);
                    if (!e.depthTexture || !e.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0), p(e.depthTexture, 0), n = i.get(e.depthTexture).__webglTexture;
                    if (1026 === e.depthTexture.format) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, n, 0); else {
                        if (1027 !== e.depthTexture.format)throw Error("Unknown depthTexture format");
                        t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, n, 0)
                    }
                } else if (s)for (n.__webglDepthbuffer = [], s = 0; 6 > s; s++)t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[s]), n.__webglDepthbuffer[s] = t.createRenderbuffer(), m(n.__webglDepthbuffer[s], e); else t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), m(n.__webglDepthbuffer, e);
                t.bindFramebuffer(t.FRAMEBUFFER, null)
            }
        }, this.updateRenderTargetMipmap = function (e) {
            var n = e.texture;
            n.generateMipmaps && f(e) && 1003 !== n.minFilter && 1006 !== n.minFilter && (e = e && e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, n = i.get(n).__webglTexture, r.bindTexture(e, n), t.generateMipmap(e), r.bindTexture(e, null))
        }
    }

    function Ut() {
        var e = {};
        return {
            get: function (t) {
                t = t.uuid;
                var n = e[t];
                return void 0 === n && (n = {}, e[t] = n), n
            }, "delete": function (t) {
                delete e[t.uuid]
            }, clear: function () {
                e = {}
            }
        }
    }

    function zt(e, t, n) {
        function r(t, n, r) {
            var i = new Uint8Array(4), s = e.createTexture();
            e.bindTexture(t, s), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
            for (t = 0; t < r; t++)e.texImage2D(n + t, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, i);
            return s
        }

        function s(t) {
            !0 !== S[t] && (e.enable(t), S[t] = !0)
        }

        function o(t) {
            !1 !== S[t] && (e.disable(t), S[t] = !1)
        }

        function u(t, r, i, u, a, f, l, c) {
            if (0 !== t) {
                s(e.BLEND);
                if (t !== T || c !== M) 2 === t ? c ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : 3 === t ? c ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : 4 === t ? c ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : c ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), T = t, M = c;
                if (5 === t) {
                    a = a || r, f = f || i, l = l || u;
                    if (r !== N || a !== L) e.blendEquationSeparate(n(r), n(a)), N = r, L = a;
                    if (i !== C || u !== k || f !== A || l !== O) e.blendFuncSeparate(n(i), n(u), n(f), n(l)), C = i, k = u, A = f, O = l
                } else O = A = L = k = C = N = null
            } else o(e.BLEND), T = t
        }

        function a(e) {
            m.setFunc(e)
        }

        function f(t) {
            _ !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), _ = t)
        }

        function l(t) {
            0 !== t ? (s(e.CULL_FACE), t !== D && (1 === t ? e.cullFace(e.BACK) : 2 === t ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : o(e.CULL_FACE), D = t
        }

        function c(t) {
            void 0 === t && (t = e.TEXTURE0 + F - 1), I !== t && (e.activeTexture(t), I = t)
        }

        function h(e, t, n, r) {
            v.setClear(e, t, n, r)
        }

        function p(e) {
            m.setClear(e)
        }

        function d(e) {
            g.setClear(e)
        }

        var v = new function () {
            var t = !1, n = new i, r = null, s = new i;
            return {
                setMask: function (n) {
                    r === n || t || (e.colorMask(n, n, n, n), r = n)
                }, setLocked: function (e) {
                    t = e
                }, setClear: function (t, r, i, o) {
                    n.set(t, r, i, o), !1 === s.equals(n) && (e.clearColor(t, r, i, o), s.copy(n))
                }, reset: function () {
                    t = !1, r = null, s.set(0, 0, 0, 1)
                }
            }
        }, m = new function () {
            var t = !1, n = null, r = null, i = null;
            return {
                setTest: function (t) {
                    t ? s(e.DEPTH_TEST) : o(e.DEPTH_TEST)
                }, setMask: function (r) {
                    n === r || t || (e.depthMask(r), n = r)
                }, setFunc: function (t) {
                    if (r !== t) {
                        if (t)switch (t) {
                            case 0:
                                e.depthFunc(e.NEVER);
                                break;
                            case 1:
                                e.depthFunc(e.ALWAYS);
                                break;
                            case 2:
                                e.depthFunc(e.LESS);
                                break;
                            case 3:
                                e.depthFunc(e.LEQUAL);
                                break;
                            case 4:
                                e.depthFunc(e.EQUAL);
                                break;
                            case 5:
                                e.depthFunc(e.GEQUAL);
                                break;
                            case 6:
                                e.depthFunc(e.GREATER);
                                break;
                            case 7:
                                e.depthFunc(e.NOTEQUAL);
                                break;
                            default:
                                e.depthFunc(e.LEQUAL)
                        } else e.depthFunc(e.LEQUAL);
                        r = t
                    }
                }, setLocked: function (e) {
                    t = e
                }, setClear: function (t) {
                    i !== t && (e.clearDepth(t), i = t)
                }, reset: function () {
                    t = !1, i = r = n = null
                }
            }
        }, g = new function () {
            var t = !1, n = null, r = null, i = null, u = null, a = null, f = null, l = null, c = null;
            return {
                setTest: function (t) {
                    t ? s(e.STENCIL_TEST) : o(e.STENCIL_TEST)
                }, setMask: function (r) {
                    n === r || t || (e.stencilMask(r), n = r)
                }, setFunc: function (t, n, s) {
                    if (r !== t || i !== n || u !== s) e.stencilFunc(t, n, s), r = t, i = n, u = s
                }, setOp: function (t, n, r) {
                    if (a !== t || f !== n || l !== r) e.stencilOp(t, n, r), a = t, f = n, l = r
                }, setLocked: function (e) {
                    t = e
                }, setClear: function (t) {
                    c !== t && (e.clearStencil(t), c = t)
                }, reset: function () {
                    t = !1, c = l = f = a = u = i = r = n = null
                }
            }
        }, y = e.getParameter(e.MAX_VERTEX_ATTRIBS), b = new Uint8Array(y), w = new Uint8Array(y), E = new Uint8Array(y), S = {}, x = null, T = null, N = null, C = null, k = null, L = null, A = null, O = null, M = !1, _ = null, D = null, P = null, H = null, B = null, j = null, F = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), I = null, q = {}, R = new i, U = new i, z = {};
        return z[e.TEXTURE_2D] = r(e.TEXTURE_2D, e.TEXTURE_2D, 1), z[e.TEXTURE_CUBE_MAP] = r(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), {
            buffers: {
                color: v,
                depth: m,
                stencil: g
            }, init: function () {
                h(0, 0, 0, 1), p(1), d(0), s(e.DEPTH_TEST), a(3), f(!1), l(1), s(e.CULL_FACE), s(e.BLEND), u(1)
            }, initAttributes: function () {
                for (var e = 0, t = b.length; e < t; e++)b[e] = 0
            }, enableAttribute: function (n) {
                b[n] = 1, 0 === w[n] && (e.enableVertexAttribArray(n), w[n] = 1), 0 !== E[n] && (t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n, 0), E[n] = 0)
            }, enableAttributeAndDivisor: function (t, n, r) {
                b[t] = 1, 0 === w[t] && (e.enableVertexAttribArray(t), w[t] = 1), E[t] !== n && (r.vertexAttribDivisorANGLE(t, n), E[t] = n)
            }, disableUnusedAttributes: function () {
                for (var t = 0, n = w.length; t !== n; ++t)w[t] !== b[t] && (e.disableVertexAttribArray(t), w[t] = 0)
            }, enable: s, disable: o, getCompressedTextureFormats: function () {
                if (null === x && (x = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))for (var n = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), r = 0; r < n.length; r++)x.push(n[r]);
                return x
            }, setBlending: u, setColorWrite: function (e) {
                v.setMask(e)
            }, setDepthTest: function (e) {
                m.setTest(e)
            }, setDepthWrite: function (e) {
                m.setMask(e)
            }, setDepthFunc: a, setStencilTest: function (e) {
                g.setTest(e)
            }, setStencilWrite: function (e) {
                g.setMask(e)
            }, setStencilFunc: function (e, t, n) {
                g.setFunc(e, t, n)
            }, setStencilOp: function (e, t, n) {
                g.setOp(e, t, n)
            }, setFlipSided: f, setCullFace: l, setLineWidth: function (t) {
                t !== P && (e.lineWidth(t), P = t)
            }, setPolygonOffset: function (t, n, r) {
                if (t) {
                    if (s(e.POLYGON_OFFSET_FILL), H !== n || B !== r) e.polygonOffset(n, r), H = n, B = r
                } else o(e.POLYGON_OFFSET_FILL)
            }, getScissorTest: function () {
                return j
            }, setScissorTest: function (t) {
                (j = t) ? s(e.SCISSOR_TEST) : o(e.SCISSOR_TEST)
            }, activeTexture: c, bindTexture: function (t, n) {
                null === I && c();
                var r = q[I];
                void 0 === r && (r = {type: void 0, texture: void 0}, q[I] = r);
                if (r.type !== t || r.texture !== n) e.bindTexture(t, n || z[t]), r.type = t, r.texture = n
            }, compressedTexImage2D: function () {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (t) {
                    console.error(t)
                }
            }, texImage2D: function () {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (t) {
                    console.error(t)
                }
            }, clearColor: h, clearDepth: p, clearStencil: d, scissor: function (t) {
                !1 === R.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), R.copy(t))
            }, viewport: function (t) {
                !1 === U.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), U.copy(t))
            }, reset: function () {
                for (var t = 0; t < w.length; t++)1 === w[t] && (e.disableVertexAttribArray(t), w[t] = 0);
                S = {}, I = x = null, q = {}, D = _ = T = null, v.reset(), m.reset(), g.reset()
            }
        }
    }

    function Wt(e, t, n) {
        function r(t) {
            if ("highp" === t) {
                if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision)return "highp";
                t = "mediump"
            }
            return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
        }

        var i, s = void 0 !== n.precision ? n.precision : "highp", o = r(s);
        o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o), n = !0 === n.logarithmicDepthBuffer && !!t.get("EXT_frag_depth");
        var o = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), a = e.getParameter(e.MAX_TEXTURE_SIZE), f = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), l = e.getParameter(e.MAX_VERTEX_ATTRIBS), c = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), h = e.getParameter(e.MAX_VARYING_VECTORS), p = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), d = 0 < u, v = !!t.get("OES_texture_float");
        return {
            getMaxAnisotropy: function () {
                if (void 0 !== i)return i;
                var n = t.get("EXT_texture_filter_anisotropic");
                return i = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: r,
            precision: s,
            logarithmicDepthBuffer: n,
            maxTextures: o,
            maxVertexTextures: u,
            maxTextureSize: a,
            maxCubemapSize: f,
            maxAttributes: l,
            maxVertexUniforms: c,
            maxVaryings: h,
            maxFragmentUniforms: p,
            vertexTextures: d,
            floatFragmentTextures: v,
            floatVertexTextures: d && v
        }
    }

    function Xt(e) {
        var t = {};
        return {
            get: function (n) {
                if (void 0 !== t[n])return t[n];
                var r;
                switch (n) {
                    case"WEBGL_depth_texture":
                        r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case"EXT_texture_filter_anisotropic":
                        r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case"WEBGL_compressed_texture_s3tc":
                        r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case"WEBGL_compressed_texture_pvrtc":
                        r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case"WEBGL_compressed_texture_etc1":
                        r = e.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        r = e.getExtension(n)
                }
                return null === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = r
            }
        }
    }

    function Vt() {
        function e() {
            f.value !== r && (f.value = r, f.needsUpdate = 0 < i), n.numPlanes = i
        }

        function t(e, t, r, i) {
            var s = null !== e ? e.length : 0, o = null;
            if (0 !== s) {
                o = f.value;
                if (!0 !== i || null === o) {
                    i = r + 4 * s, t = t.matrixWorldInverse, a.getNormalMatrix(t);
                    if (null === o || o.length < i) o = new Float32Array(i);
                    for (i = 0; i !== s; ++i, r += 4)u.copy(e[i]).applyMatrix4(t, a), u.normal.toArray(o, r), o[r + 3] = u.constant
                }
                f.value = o, f.needsUpdate = !0
            }
            return n.numPlanes = s, o
        }

        var n = this, r = null, i = 0, s = !1, o = !1, u = new Y, a = new G, f = {
            value: null, needsUpdate: !1
        };
        this.uniform = f, this.numPlanes = 0, this.init = function (e, n, o) {
            var u = 0 !== e.length || n || 0 !== i || s;
            return s = n, r = t(e, o, 0), i = e.length, u
        }, this.beginShadows = function () {
            o = !0, t(null)
        }, this.endShadows = function () {
            o = !1, e()
        }, this.setState = function (n, u, a, l, c) {
            if (!s || null === n || 0 === n.length || o && !u) o ? t(null) : e(); else {
                u = o ? 0 : i;
                var h = 4 * u, p = l.clippingState || null;
                f.value = p, p = t(n, a, h, c);
                for (n = 0; n !== h; ++n)p[n] = r[n];
                l.clippingState = p, this.numPlanes += u
            }
        }
    }

    function $t(t) {
        function n(e, t, n, r) {
            !0 === L && (e *= r, t *= r, n *= r), Pt.clearColor(e, t, n, r)
        }

        function r() {
            Pt.init(), Pt.scissor(G.copy(ft).multiplyScalar(ut)), Pt.viewport(tt.copy(ct).multiplyScalar(ut)), n(rt.r, rt.g, rt.b, it)
        }

        function s() {
            K = I = null, J = "", V = -1, Pt.reset()
        }

        function o(e) {
            e.preventDefault(), s(), r(), Ht.clear()
        }

        function u(e) {
            e = e.target, e.removeEventListener("dispose", u), l(e), Ht["delete"](e)
        }

        function l(e) {
            var t = Ht.get(e).program;
            e.program = void 0, void 0 !== t && It.releaseProgram(t)
        }

        function c(e, t) {
            return Math.abs(t[0]) - Math.abs(e[0])
        }

        function h(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
        }

        function p(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
        }

        function d(e, t, n, r, i) {
            var s;
            n.transparent ? (r = D, s = ++P) : (r = M, s = ++_), s = r[s], void 0 !== s ? (s.id = e.id, s.object = e, s.geometry = t, s.material = n, s.z = kt.z, s.group = i) : (s = {
                    id: e.id,
                    object: e,
                    geometry: t,
                    material: n,
                    z: kt.z,
                    group: i
                }, r.push(s))
        }

        function v(e) {
            if (!ht.intersectsSphere(e))return !1;
            var t = pt.numPlanes;
            if (0 === t)return !0;
            var n = F.clippingPlanes, r = e.center;
            e = -e.radius;
            var i = 0;
            do if (n[i].distanceToPoint(r) < e)return !1; while (++i !== t);
            return !0
        }

        function m(e, t) {
            if (!1 !== e.visible) {
                if (0 !== (e.layers.mask & t.layers.mask))if (e.isLight) O.push(e); else if (e.isSprite) {
                    var n;
                    (n = !1 === e.frustumCulled) || (Nt.center.set(0, 0, 0), Nt.radius = .7071067811865476, Nt.applyMatrix4(e.matrixWorld), n = !0 === v(Nt)), n && B.push(e)
                } else if (e.isLensFlare) j.push(e); else if (e.isImmediateRenderObject) !0 === F.sortObjects && (kt.setFromMatrixPosition(e.matrixWorld), kt.applyProjection(Ct)), d(e, null, e.material, kt.z, null); else if (e.isMesh || e.isLine || e.isPoints)if (e.isSkinnedMesh && e.skeleton.update(), (n = !1 === e.frustumCulled) || (n = e.geometry, null === n.boundingSphere && n.computeBoundingSphere(), Nt.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), n = !0 === v(Nt)), n) {
                    var r = e.material;
                    if (!0 === r.visible)if (!0 === F.sortObjects && (kt.setFromMatrixPosition(e.matrixWorld), kt.applyProjection(Ct)), n = jt.update(e), r.isMultiMaterial)for (var i = n.groups, s = r.materials, r = 0, o = i.length; r < o; r++) {
                        var u = i[r], a = s[u.materialIndex];
                        !0 === a.visible && d(e, n, a, kt.z, u)
                    } else d(e, n, r, kt.z, null)
                }
                n = e.children, r = 0;
                for (o = n.length; r < o; r++)m(n[r], t)
            }
        }

        function g(e, t, n, r) {
            for (var i = 0, s = e.length; i < s; i++) {
                var o = e[i], u = o.object, a = o.geometry, f = void 0 === r ? o.material : r, o = o.group;
                u.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, u.matrixWorld), u.normalMatrix.getNormalMatrix(u.modelViewMatrix);
                if (u.isImmediateRenderObject) {
                    y(f);
                    var l = b(t, n, f, u);
                    J = "", u.render(function (e) {
                        F.renderBufferImmediate(e, l, f)
                    })
                } else null !== u.onBeforeRender && u.onBeforeRender(), F.renderBufferDirect(t, n, a, f, u, o)
            }
        }

        function y(e) {
            2 === e.side ? Pt.disable(Ot.CULL_FACE) : Pt.enable(Ot.CULL_FACE), Pt.setFlipSided(1 === e.side), !0 === e.transparent ? Pt.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : Pt.setBlending(0), Pt.setDepthFunc(e.depthFunc), Pt.setDepthTest(e.depthTest), Pt.setDepthWrite(e.depthWrite), Pt.setColorWrite(e.colorWrite), Pt.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
        }

        function b(t, n, r, i) {
            nt = 0;
            var s = Ht.get(r);
            dt && (bt || t !== K) && pt.setState(r.clippingPlanes, r.clipShadows, t, s, t === K && r.id === V), !1 === r.needsUpdate && (void 0 === s.program ? r.needsUpdate = !0 : r.fog && s.fog !== n ? r.needsUpdate = !0 : r.lights && s.lightsHash !== Lt.hash ? r.needsUpdate = !0 : void 0 !== s.numClippingPlanes && s.numClippingPlanes !== pt.numPlanes && (r.needsUpdate = !0));
            if (r.needsUpdate) {
                e:{
                    var o = Ht.get(r), a = It.getParameters(r, Lt, n, pt.numPlanes, i), f = It.getProgramCode(r, a), c = o.program, h = !0;
                    if (void 0 === c) r.addEventListener("dispose", u); else if (c.code !== f) l(r); else {
                        if (void 0 !== a.shaderID)break e;
                        h = !1
                    }
                    h && (a.shaderID ? (c = $i[a.shaderID], o.__webglShader = {
                            name: r.type,
                            uniforms: e.UniformsUtils.clone(c.uniforms),
                            vertexShader: c.vertexShader,
                            fragmentShader: c.fragmentShader
                        }) : o.__webglShader = {
                            name: r.type,
                            uniforms: r.uniforms,
                            vertexShader: r.vertexShader,
                            fragmentShader: r.fragmentShader
                        }, r.__webglShader = o.__webglShader, c = It.acquireProgram(r, a, f), o.program = c, r.program = c), a = c.getAttributes();
                    if (r.morphTargets)for (f = r.numSupportedMorphTargets = 0; f < F.maxMorphTargets; f++)0 <= a["morphTarget" + f] && r.numSupportedMorphTargets++;
                    if (r.morphNormals)for (f = r.numSupportedMorphNormals = 0; f < F.maxMorphNormals; f++)0 <= a["morphNormal" + f] && r.numSupportedMorphNormals++;
                    a = o.__webglShader.uniforms;
                    if (!r.isShaderMaterial && !r.isRawShaderMaterial || !0 === r.clipping) o.numClippingPlanes = pt.numPlanes, a.clippingPlanes = pt.uniform;
                    o.fog = n, o.lightsHash = Lt.hash, r.lights && (a.ambientLightColor.value = Lt.ambient, a.directionalLights.value = Lt.directional, a.spotLights.value = Lt.spot, a.pointLights.value = Lt.point, a.hemisphereLights.value = Lt.hemi, a.directionalShadowMap.value = Lt.directionalShadowMap, a.directionalShadowMatrix.value = Lt.directionalShadowMatrix, a.spotShadowMap.value = Lt.spotShadowMap, a.spotShadowMatrix.value = Lt.spotShadowMatrix, a.pointShadowMap.value = Lt.pointShadowMap, a.pointShadowMatrix.value = Lt.pointShadowMatrix), f = o.program.getUniforms(), f = R.seqWithValue(f.seq, a), o.uniformsList = f, o.dynamicUniforms = R.splitDynamic(f, a)
                }
                r.needsUpdate = !1
            }
            var p = !1, h = c = !1, o = s.program, f = o.getUniforms(), a = s.__webglShader.uniforms;
            o.id !== I && (Ot.useProgram(o.program), I = o.id, h = c = p = !0), r.id !== V && (V = r.id, c = !0);
            if (p || t !== K) {
                f.set(Ot, t, "projectionMatrix"), Dt.logarithmicDepthBuffer && f.setValue(Ot, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), t !== K && (K = t, h = c = !0);
                if (r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshStandardMaterial || r.envMap) p = f.map.cameraPosition, void 0 !== p && p.setValue(Ot, kt.setFromMatrixPosition(t.matrixWorld));
                (r.isMeshPhongMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.skinning) && f.setValue(Ot, "viewMatrix", t.matrixWorldInverse), f.set(Ot, F, "toneMappingExposure"), f.set(Ot, F, "toneMappingWhitePoint")
            }
            r.skinning && (f.setOptional(Ot, i, "bindMatrix"), f.setOptional(Ot, i, "bindMatrixInverse"), p = i.skeleton) && (Dt.floatVertexTextures && p.useVertexTexture ? (f.set(Ot, p, "boneTexture"), f.set(Ot, p, "boneTextureWidth"), f.set(Ot, p, "boneTextureHeight")) : f.setOptional(Ot, p, "boneMatrices"));
            if (c) {
                r.lights && (c = h, a.ambientLightColor.needsUpdate = c, a.directionalLights.needsUpdate = c, a.pointLights.needsUpdate = c, a.spotLights.needsUpdate = c, a.hemisphereLights.needsUpdate = c), n && r.fog && (a.fogColor.value = n.color, n.isFog ? (a.fogNear.value = n.near, a.fogFar.value = n.far) : n.isFogExp2 && (a.fogDensity.value = n.density));
                if (r.isMeshBasicMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial || r.isMeshStandardMaterial || r.isMeshDepthMaterial) {
                    a.opacity.value = r.opacity, a.diffuse.value = r.color, r.emissive && a.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), a.map.value = r.map, a.specularMap.value = r.specularMap, a.alphaMap.value = r.alphaMap, r.aoMap && (a.aoMap.value = r.aoMap, a.aoMapIntensity.value = r.aoMapIntensity);
                    var d;
                    r.map ? d = r.map : r.specularMap ? d = r.specularMap : r.displacementMap ? d = r.displacementMap : r.normalMap ? d = r.normalMap : r.bumpMap ? d = r.bumpMap : r.roughnessMap ? d = r.roughnessMap : r.metalnessMap ? d = r.metalnessMap : r.alphaMap ? d = r.alphaMap : r.emissiveMap && (d = r.emissiveMap), void 0 !== d && (d.isWebGLRenderTarget && (d = d.texture), n = d.offset, d = d.repeat, a.offsetRepeat.value.set(n.x, n.y, d.x, d.y)), a.envMap.value = r.envMap, a.flipEnvMap.value = r.envMap && r.envMap.isCubeTexture ? -1 : 1, a.reflectivity.value = r.reflectivity, a.refractionRatio.value = r.refractionRatio
                }
                r.isLineBasicMaterial ? (a.diffuse.value = r.color, a.opacity.value = r.opacity) : r.isLineDashedMaterial ? (a.diffuse.value = r.color, a.opacity.value = r.opacity, a.dashSize.value = r.dashSize, a.totalSize.value = r.dashSize + r.gapSize, a.scale.value = r.scale) : r.isPointsMaterial ? (a.diffuse.value = r.color, a.opacity.value = r.opacity, a.size.value = r.size * ut, a.scale.value = .5 * S.clientHeight, a.map.value = r.map, null !== r.map && (d = r.map.offset, n = r.map.repeat, a.offsetRepeat.value.set(d.x, d.y, n.x, n.y))) : r.isMeshLambertMaterial ? (r.lightMap && (a.lightMap.value = r.lightMap, a.lightMapIntensity.value = r.lightMapIntensity), r.emissiveMap && (a.emissiveMap.value = r.emissiveMap)) : r.isMeshPhongMaterial ? (a.specular.value = r.specular, a.shininess.value = Math.max(r.shininess, 1e-4), r.lightMap && (a.lightMap.value = r.lightMap, a.lightMapIntensity.value = r.lightMapIntensity), r.emissiveMap && (a.emissiveMap.value = r.emissiveMap), r.bumpMap && (a.bumpMap.value = r.bumpMap, a.bumpScale.value = r.bumpScale), r.normalMap && (a.normalMap.value = r.normalMap, a.normalScale.value.copy(r.normalScale)), r.displacementMap && (a.displacementMap.value = r.displacementMap, a.displacementScale.value = r.displacementScale, a.displacementBias.value = r.displacementBias)) : r.isMeshPhysicalMaterial ? (a.clearCoat.value = r.clearCoat, a.clearCoatRoughness.value = r.clearCoatRoughness, w(a, r)) : r.isMeshStandardMaterial ? w(a, r) : r.isMeshDepthMaterial ? r.displacementMap && (a.displacementMap.value = r.displacementMap, a.displacementScale.value = r.displacementScale, a.displacementBias.value = r.displacementBias) : r.isMeshNormalMaterial && (a.opacity.value = r.opacity), R.upload(Ot, s.uniformsList, a, F)
            }
            return f.set(Ot, i, "modelViewMatrix"), f.set(Ot, i, "normalMatrix"), f.setValue(Ot, "modelMatrix", i.matrixWorld), s = s.dynamicUniforms, null !== s && (R.evalDynamic(s, a, i, r, t), R.upload(Ot, s, a, F)), o
        }

        function w(e, t) {
            e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
        }

        function E(e) {
            var t;
            if (1e3 === e)return Ot.REPEAT;
            if (1001 === e)return Ot.CLAMP_TO_EDGE;
            if (1002 === e)return Ot.MIRRORED_REPEAT;
            if (1003 === e)return Ot.NEAREST;
            if (1004 === e)return Ot.NEAREST_MIPMAP_NEAREST;
            if (1005 === e)return Ot.NEAREST_MIPMAP_LINEAR;
            if (1006 === e)return Ot.LINEAR;
            if (1007 === e)return Ot.LINEAR_MIPMAP_NEAREST;
            if (1008 === e)return Ot.LINEAR_MIPMAP_LINEAR;
            if (1009 === e)return Ot.UNSIGNED_BYTE;
            if (1017 === e)return Ot.UNSIGNED_SHORT_4_4_4_4;
            if (1018 === e)return Ot.UNSIGNED_SHORT_5_5_5_1;
            if (1019 === e)return Ot.UNSIGNED_SHORT_5_6_5;
            if (1010 === e)return Ot.BYTE;
            if (1011 === e)return Ot.SHORT;
            if (1012 === e)return Ot.UNSIGNED_SHORT;
            if (1013 === e)return Ot.INT;
            if (1014 === e)return Ot.UNSIGNED_INT;
            if (1015 === e)return Ot.FLOAT;
            t = _t.get("OES_texture_half_float");
            if (null !== t && 1016 === e)return t.HALF_FLOAT_OES;
            if (1021 === e)return Ot.ALPHA;
            if (1022 === e)return Ot.RGB;
            if (1023 === e)return Ot.RGBA;
            if (1024 === e)return Ot.LUMINANCE;
            if (1025 === e)return Ot.LUMINANCE_ALPHA;
            if (1026 === e)return Ot.DEPTH_COMPONENT;
            if (1027 === e)return Ot.DEPTH_STENCIL;
            if (100 === e)return Ot.FUNC_ADD;
            if (101 === e)return Ot.FUNC_SUBTRACT;
            if (102 === e)return Ot.FUNC_REVERSE_SUBTRACT;
            if (200 === e)return Ot.ZERO;
            if (201 === e)return Ot.ONE;
            if (202 === e)return Ot.SRC_COLOR;
            if (203 === e)return Ot.ONE_MINUS_SRC_COLOR;
            if (204 === e)return Ot.SRC_ALPHA;
            if (205 === e)return Ot.ONE_MINUS_SRC_ALPHA;
            if (206 === e)return Ot.DST_ALPHA;
            if (207 === e)return Ot.ONE_MINUS_DST_ALPHA;
            if (208 === e)return Ot.DST_COLOR;
            if (209 === e)return Ot.ONE_MINUS_DST_COLOR;
            if (210 === e)return Ot.SRC_ALPHA_SATURATE;
            t = _t.get("WEBGL_compressed_texture_s3tc");
            if (null !== t) {
                if (2001 === e)return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (2002 === e)return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (2003 === e)return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (2004 === e)return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            t = _t.get("WEBGL_compressed_texture_pvrtc");
            if (null !== t) {
                if (2100 === e)return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (2101 === e)return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (2102 === e)return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (2103 === e)return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            t = _t.get("WEBGL_compressed_texture_etc1");
            if (null !== t && 2151 === e)return t.COMPRESSED_RGB_ETC1_WEBGL;
            t = _t.get("EXT_blend_minmax");
            if (null !== t) {
                if (103 === e)return t.MIN_EXT;
                if (104 === e)return t.MAX_EXT
            }
            return t = _t.get("WEBGL_depth_texture"), null !== t && 1020 === e ? t.UNSIGNED_INT_24_8_WEBGL : 0
        }

        console.log("THREE.WebGLRenderer", "81"), t = t || {};
        var S = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), x = void 0 !== t.context ? t.context : null, T = void 0 !== t.alpha ? t.alpha : !1, N = void 0 !== t.depth ? t.depth : !0, C = void 0 !== t.stencil ? t.stencil : !0, k = void 0 !== t.antialias ? t.antialias : !1, L = void 0 !== t.premultipliedAlpha ? t.premultipliedAlpha : !0, A = void 0 !== t.preserveDrawingBuffer ? t.preserveDrawingBuffer : !1, O = [], M = [], _ = -1, D = [], P = -1, H = new Float32Array(8), B = [], j = [];
        this.domElement = S, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1, this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var F = this, I = null, q = null, z = null, V = -1, J = "", K = null, G = new i, Y = null, tt = new i, nt = 0, rt = new U(0), it = 0, st = S.width, ot = S.height, ut = 1, ft = new i(0, 0, st, ot), lt = !1, ct = new i(0, 0, st, ot), ht = new Z, pt = new Vt, dt = !1, bt = !1, Nt = new Q, Ct = new f, kt = new a, Lt = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }, At = {calls: 0, vertices: 0, faces: 0, points: 0};
        this.info = {render: At, memory: {geometries: 0, textures: 0}, programs: null};
        var Ot;
        try {
            T = {
                alpha: T,
                depth: N,
                stencil: C,
                antialias: k,
                premultipliedAlpha: L,
                preserveDrawingBuffer: A
            }, Ot = x || S.getContext("webgl", T) || S.getContext("experimental-webgl", T);
            if (null === Ot)throw null !== S.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === Ot.getShaderPrecisionFormat && (Ot.getShaderPrecisionFormat = function () {
                return {rangeMin: 1, rangeMax: 1, precision: 1}
            }), S.addEventListener("webglcontextlost", o, !1)
        } catch (Mt) {
            console.error("THREE.WebGLRenderer: " + Mt)
        }
        var _t = new Xt(Ot);
        _t.get("WEBGL_depth_texture"), _t.get("OES_texture_float"), _t.get("OES_texture_float_linear"), _t.get("OES_texture_half_float"), _t.get("OES_texture_half_float_linear"), _t.get("OES_standard_derivatives"), _t.get("ANGLE_instanced_arrays"), _t.get("OES_element_index_uint") && (vt.MaxIndex = 4294967296);
        var Dt = new Wt(Ot, _t, t), Pt = new zt(Ot, _t, E), Ht = new Ut, Bt = new Rt(Ot, _t, Pt, Ht, Dt, E, this.info), jt = new qt(Ot, Ht, this.info), It = new Ft(this, Dt), $t = new Tt;
        this.info.programs = It.programs;
        var Jt = new xt(Ot, _t, At), Kt = new St(Ot, _t, At), Qt = new Et(-1, 1, 1, -1, 0, 1), Gt = new wt, Yt = new mt(new yt(2, 2), new at({
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        t = $i.cube;
        var Zt = new mt(new gt(5, 5, 5), new $({
            uniforms: t.uniforms,
            vertexShader: t.vertexShader,
            fragmentShader: t.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        r(), this.context = Ot, this.capabilities = Dt, this.extensions = _t, this.properties = Ht, this.state = Pt;
        var en = new et(this, Lt, jt, Dt);
        this.shadowMap = en;
        var tn = new X(this, B), nn = new W(this, j);
        this.getContext = function () {
            return Ot
        }, this.getContextAttributes = function () {
            return Ot.getContextAttributes()
        }, this.forceContextLoss = function () {
            _t.get("WEBGL_lose_context").loseContext()
        }, this.getMaxAnisotropy = function () {
            return Dt.getMaxAnisotropy()
        }, this.getPrecision = function () {
            return Dt.precision
        }, this.getPixelRatio = function () {
            return ut
        }, this.setPixelRatio = function (e) {
            void 0 !== e && (ut = e, this.setSize(ct.z, ct.w, !1))
        }, this.getSize = function () {
            return {width: st, height: ot}
        }, this.setSize = function (e, t, n) {
            st = e, ot = t, S.width = e * ut, S.height = t * ut, !1 !== n && (S.style.width = e + "px", S.style.height = t + "px"), this.setViewport(0, 0, e, t)
        }, this.setViewport = function (e, t, n, r) {
            Pt.viewport(ct.set(e, t, n, r))
        }, this.setScissor = function (e, t, n, r) {
            Pt.scissor(ft.set(e, t, n, r))
        }, this.setScissorTest = function (e) {
            Pt.setScissorTest(lt = e)
        }, this.getClearColor = function () {
            return rt
        }, this.setClearColor = function (e, t) {
            rt.set(e), it = void 0 !== t ? t : 1, n(rt.r, rt.g, rt.b, it)
        }, this.getClearAlpha = function () {
            return it
        }, this.setClearAlpha = function (e) {
            it = e, n(rt.r, rt.g, rt.b, it)
        }, this.clear = function (e, t, n) {
            var r = 0;
            if (void 0 === e || e) r |= Ot.COLOR_BUFFER_BIT;
            if (void 0 === t || t) r |= Ot.DEPTH_BUFFER_BIT;
            if (void 0 === n || n) r |= Ot.STENCIL_BUFFER_BIT;
            Ot.clear(r)
        }, this.clearColor = function () {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function () {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function () {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function (e, t, n, r) {
            this.setRenderTarget(e), this.clear(t, n, r)
        }, this.resetGLState = s, this.dispose = function () {
            D = [], P = -1, M = [], _ = -1, S.removeEventListener("webglcontextlost", o, !1)
        }, this.renderBufferImmediate = function (e, t, n) {
            Pt.initAttributes();
            var r = Ht.get(e);
            e.hasPositions && !r.position && (r.position = Ot.createBuffer()), e.hasNormals && !r.normal && (r.normal = Ot.createBuffer()), e.hasUvs && !r.uv && (r.uv = Ot.createBuffer()), e.hasColors && !r.color && (r.color = Ot.createBuffer()), t = t.getAttributes(), e.hasPositions && (Ot.bindBuffer(Ot.ARRAY_BUFFER, r.position), Ot.bufferData(Ot.ARRAY_BUFFER, e.positionArray, Ot.DYNAMIC_DRAW), Pt.enableAttribute(t.position), Ot.vertexAttribPointer(t.position, 3, Ot.FLOAT, !1, 0, 0));
            if (e.hasNormals) {
                Ot.bindBuffer(Ot.ARRAY_BUFFER, r.normal);
                if (!n.isMeshPhongMaterial && !n.isMeshStandardMaterial && 1 === n.shading)for (var i = 0, s = 3 * e.count; i < s; i += 9) {
                    var o = e.normalArray, u = (o[i + 0] + o[i + 3] + o[i + 6]) / 3, a = (o[i + 1] + o[i + 4] + o[i + 7]) / 3, f = (o[i + 2] + o[i + 5] + o[i + 8]) / 3;
                    o[i + 0] = u, o[i + 1] = a, o[i + 2] = f, o[i + 3] = u, o[i + 4] = a, o[i + 5] = f, o[i + 6] = u, o[i + 7] = a, o[i + 8] = f
                }
                Ot.bufferData(Ot.ARRAY_BUFFER, e.normalArray, Ot.DYNAMIC_DRAW), Pt.enableAttribute(t.normal), Ot.vertexAttribPointer(t.normal, 3, Ot.FLOAT, !1, 0, 0)
            }
            e.hasUvs && n.map && (Ot.bindBuffer(Ot.ARRAY_BUFFER, r.uv), Ot.bufferData(Ot.ARRAY_BUFFER, e.uvArray, Ot.DYNAMIC_DRAW), Pt.enableAttribute(t.uv), Ot.vertexAttribPointer(t.uv, 2, Ot.FLOAT, !1, 0, 0)), e.hasColors && 0 !== n.vertexColors && (Ot.bindBuffer(Ot.ARRAY_BUFFER, r.color), Ot.bufferData(Ot.ARRAY_BUFFER, e.colorArray, Ot.DYNAMIC_DRAW), Pt.enableAttribute(t.color), Ot.vertexAttribPointer(t.color, 3, Ot.FLOAT, !1, 0, 0)), Pt.disableUnusedAttributes(), Ot.drawArrays(Ot.TRIANGLES, 0, e.count), e.count = 0
        }, this.renderBufferDirect = function (e, t, n, r, i, s) {
            y(r);
            var o = b(e, t, r, i), u = !1;
            e = n.id + "_" + o.id + "_" + r.wireframe, e !== J && (J = e, u = !0), t = i.morphTargetInfluences;
            if (void 0 !== t) {
                var a = [];
                e = 0;
                for (var f = t.length; e < f; e++)u = t[e], a.push([u, e]);
                a.sort(c), 8 < a.length && (a.length = 8);
                var l = n.morphAttributes;
                e = 0;
                for (f = a.length; e < f; e++)u = a[e], H[e] = u[0], 0 !== u[0] ? (t = u[1], !0 === r.morphTargets && l.position && n.addAttribute("morphTarget" + e, l.position[t]), !0 === r.morphNormals && l.normal && n.addAttribute("morphNormal" + e, l.normal[t])) : (!0 === r.morphTargets && n.removeAttribute("morphTarget" + e), !0 === r.morphNormals && n.removeAttribute("morphNormal" + e));
                e = a.length;
                for (t = H.length; e < t; e++)H[e] = 0;
                o.getUniforms().setValue(Ot, "morphTargetInfluences", H), u = !0
            }
            t = n.index, f = n.attributes.position, a = 1, !0 === r.wireframe && (t = jt.getWireframeAttribute(n), a = 2), null !== t ? (e = Kt, e.setIndex(t)) : e = Jt;
            if (u) {
                e:{
                    var u = void 0, h;
                    if (n && n.isInstancedBufferGeometry && (h = _t.get("ANGLE_instanced_arrays"), null === h)) {
                        console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                        break e
                    }
                    void 0 === u && (u = 0), Pt.initAttributes();
                    var l = n.attributes, o = o.getAttributes(), p = r.defaultAttributeValues, d;
                    for (d in o) {
                        var v = o[d];
                        if (0 <= v) {
                            var m = l[d];
                            if (void 0 !== m) {
                                var g = Ot.FLOAT, w = m.array, E = m.normalized;
                                w instanceof Float32Array ? g = Ot.FLOAT : w instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : w instanceof Uint16Array ? g = Ot.UNSIGNED_SHORT : w instanceof Int16Array ? g = Ot.SHORT : w instanceof Uint32Array ? g = Ot.UNSIGNED_INT : w instanceof Int32Array ? g = Ot.INT : w instanceof Int8Array ? g = Ot.BYTE : w instanceof Uint8Array && (g = Ot.UNSIGNED_BYTE);
                                var w = m.itemSize, S = jt.getAttributeBuffer(m);
                                if (m && m.isInterleavedBufferAttribute) {
                                    var x = m.data, T = x.stride, m = m.offset;
                                    x && x.isInstancedInterleavedBuffer ? (Pt.enableAttributeAndDivisor(v, x.meshPerAttribute, h), void 0 === n.maxInstancedCount && (n.maxInstancedCount = x.meshPerAttribute * x.count)) : Pt.enableAttribute(v), Ot.bindBuffer(Ot.ARRAY_BUFFER, S), Ot.vertexAttribPointer(v, w, g, E, T * x.array.BYTES_PER_ELEMENT, (u * T + m) * x.array.BYTES_PER_ELEMENT)
                                } else m && m.isInstancedBufferAttribute ? (Pt.enableAttributeAndDivisor(v, m.meshPerAttribute, h), void 0 === n.maxInstancedCount && (n.maxInstancedCount = m.meshPerAttribute * m.count)) : Pt.enableAttribute(v), Ot.bindBuffer(Ot.ARRAY_BUFFER, S), Ot.vertexAttribPointer(v, w, g, E, 0, u * w * m.array.BYTES_PER_ELEMENT)
                            } else if (void 0 !== p && (g = p[d], void 0 !== g))switch (g.length) {
                                case 2:
                                    Ot.vertexAttrib2fv(v, g);
                                    break;
                                case 3:
                                    Ot.vertexAttrib3fv(v, g);
                                    break;
                                case 4:
                                    Ot.vertexAttrib4fv(v, g);
                                    break;
                                default:
                                    Ot.vertexAttrib1fv(v, g)
                            }
                        }
                    }
                    Pt.disableUnusedAttributes()
                }
                null !== t && Ot.bindBuffer(Ot.ELEMENT_ARRAY_BUFFER, jt.getAttributeBuffer(t))
            }
            h = 0, null !== t ? h = t.count : void 0 !== f && (h = f.count), t = n.drawRange.start * a, f = null !== s ? s.start * a : 0, d = Math.max(t, f), s = Math.max(0, Math.min(h, t + n.drawRange.count * a, f + (null !== s ? s.count * a : Infinity)) - 1 - d + 1);
            if (0 !== s) {
                if (i.isMesh)if (!0 === r.wireframe) Pt.setLineWidth(r.wireframeLinewidth * (null === q ? ut : 1)), e.setMode(Ot.LINES); else switch (i.drawMode) {
                    case 0:
                        e.setMode(Ot.TRIANGLES);
                        break;
                    case 1:
                        e.setMode(Ot.TRIANGLE_STRIP);
                        break;
                    case 2:
                        e.setMode(Ot.TRIANGLE_FAN)
                } else i.isLine ? (r = r.linewidth, void 0 === r && (r = 1), Pt.setLineWidth(r * (null === q ? ut : 1)), i.isLineSegments ? e.setMode(Ot.LINES) : e.setMode(Ot.LINE_STRIP)) : i.isPoints && e.setMode(Ot.POINTS);
                n && n.isInstancedBufferGeometry ? 0 < n.maxInstancedCount && e.renderInstances(n, d, s) : e.render(d, s)
            }
        }, this.render = function (e, t, r, i) {
            if (void 0 !== t && !0 !== t.isCamera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); else {
                var s = e.fog;
                J = "", V = -1, K = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), Ct.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ht.setFromMatrix(Ct), O.length = 0, P = _ = -1, B.length = 0, j.length = 0, bt = this.localClippingEnabled, dt = pt.init(this.clippingPlanes, bt, t), m(e, t), M.length = _ + 1, D.length = P + 1, !0 === F.sortObjects && (M.sort(h), D.sort(p)), dt && pt.beginShadows();
                for (var o = O, u = 0, a = 0, l = o.length; a < l; a++) {
                    var c = o[a];
                    c.castShadow && (Lt.shadows[u++] = c)
                }
                Lt.shadows.length = u, en.render(e, t);
                for (var o = O, d = c = 0, v = 0, y, b, w, E, S = t.matrixWorldInverse, x = 0, T = 0, N = 0, C = 0, u = 0, a = o.length; u < a; u++)if (l = o[u], y = l.color, b = l.intensity, w = l.distance, E = l.shadow && l.shadow.map ? l.shadow.map.texture : null, l.isAmbientLight) c += y.r * b, d += y.g * b, v += y.b * b; else if (l.isDirectionalLight) {
                    var k = $t.get(l);
                    k.color.copy(l.color).multiplyScalar(l.intensity), k.direction.setFromMatrixPosition(l.matrixWorld), kt.setFromMatrixPosition(l.target.matrixWorld), k.direction.sub(kt), k.direction.transformDirection(S);
                    if (k.shadow = l.castShadow) k.shadowBias = l.shadow.bias, k.shadowRadius = l.shadow.radius, k.shadowMapSize = l.shadow.mapSize;
                    Lt.directionalShadowMap[x] = E, Lt.directionalShadowMatrix[x] = l.shadow.matrix, Lt.directional[x++] = k
                } else if (l.isSpotLight) {
                    k = $t.get(l), k.position.setFromMatrixPosition(l.matrixWorld), k.position.applyMatrix4(S), k.color.copy(y).multiplyScalar(b), k.distance = w, k.direction.setFromMatrixPosition(l.matrixWorld), kt.setFromMatrixPosition(l.target.matrixWorld), k.direction.sub(kt), k.direction.transformDirection(S), k.coneCos = Math.cos(l.angle), k.penumbraCos = Math.cos(l.angle * (1 - l.penumbra)), k.decay = 0 === l.distance ? 0 : l.decay;
                    if (k.shadow = l.castShadow) k.shadowBias = l.shadow.bias, k.shadowRadius = l.shadow.radius, k.shadowMapSize = l.shadow.mapSize;
                    Lt.spotShadowMap[N] = E, Lt.spotShadowMatrix[N] = l.shadow.matrix, Lt.spot[N++] = k
                } else if (l.isPointLight) {
                    k = $t.get(l), k.position.setFromMatrixPosition(l.matrixWorld), k.position.applyMatrix4(S), k.color.copy(l.color).multiplyScalar(l.intensity), k.distance = l.distance, k.decay = 0 === l.distance ? 0 : l.decay;
                    if (k.shadow = l.castShadow) k.shadowBias = l.shadow.bias, k.shadowRadius = l.shadow.radius, k.shadowMapSize = l.shadow.mapSize;
                    Lt.pointShadowMap[T] = E, void 0 === Lt.pointShadowMatrix[T] && (Lt.pointShadowMatrix[T] = new f), kt.setFromMatrixPosition(l.matrixWorld).negate(), Lt.pointShadowMatrix[T].identity().setPosition(kt), Lt.point[T++] = k
                } else l.isHemisphereLight && (k = $t.get(l), k.direction.setFromMatrixPosition(l.matrixWorld), k.direction.transformDirection(S), k.direction.normalize(), k.skyColor.copy(l.color).multiplyScalar(b), k.groundColor.copy(l.groundColor).multiplyScalar(b), Lt.hemi[C++] = k);
                Lt.ambient[0] = c, Lt.ambient[1] = d, Lt.ambient[2] = v, Lt.directional.length = x, Lt.spot.length = N, Lt.point.length = T, Lt.hemi.length = C, Lt.hash = x + "," + T + "," + N + "," + C + "," + Lt.shadows.length, dt && pt.endShadows(), At.calls = 0, At.vertices = 0, At.faces = 0, At.points = 0, void 0 === r && (r = null), this.setRenderTarget(r), o = e.background, null === o ? n(rt.r, rt.g, rt.b, it) : o && o.isColor && (n(o.r, o.g, o.b, 1), i = !0), (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), o && o.isCubeTexture ? (Gt.projectionMatrix.copy(t.projectionMatrix), Gt.matrixWorld.extractRotation(t.matrixWorld), Gt.matrixWorldInverse.getInverse(Gt.matrixWorld), Zt.material.uniforms.tCube.value = o, Zt.modelViewMatrix.multiplyMatrices(Gt.matrixWorldInverse, Zt.matrixWorld), jt.update(Zt), F.renderBufferDirect(Gt, null, Zt.geometry, Zt.material, Zt, null)) : o && o.isTexture && (Yt.material.map = o, jt.update(Yt), F.renderBufferDirect(Qt, null, Yt.geometry, Yt.material, Yt, null)), e.overrideMaterial ? (i = e.overrideMaterial, g(M, t, s, i), g(D, t, s, i)) : (Pt.setBlending(0), g(M, t, s), g(D, t, s)), tn.render(e, t), nn.render(e, t, tt), r && Bt.updateRenderTargetMipmap(r), Pt.setDepthTest(!0), Pt.setDepthWrite(!0), Pt.setColorWrite(!0)
            }
        }, this.setFaceCulling = function (e, t) {
            Pt.setCullFace(e), Pt.setFlipSided(0 === t)
        }, this.allocTextureUnit = function () {
            var e = nt;
            return e >= Dt.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + Dt.maxTextures), nt += 1, e
        }, this.setTexture2D = function () {
            var e = !1;
            return function (t, n) {
                t && t.isWebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), Bt.setTexture2D(t, n)
            }
        }(), this.setTexture = function () {
            var e = !1;
            return function (t, n) {
                e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), Bt.setTexture2D(t, n)
            }
        }(), this.setTextureCube = function () {
            var e = !1;
            return function (t, n) {
                t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? Bt.setTextureCube(t, n) : Bt.setTextureCubeDynamic(t, n)
            }
        }(), this.getCurrentRenderTarget = function () {
            return q
        }, this.setRenderTarget = function (e) {
            (q = e) && void 0 === Ht.get(e).__webglFramebuffer && Bt.setupRenderTarget(e);
            var t = e && e.isWebGLRenderTargetCube, n;
            e ? (n = Ht.get(e), n = t ? n.__webglFramebuffer[e.activeCubeFace] : n.__webglFramebuffer, G.copy(e.scissor), Y = e.scissorTest, tt.copy(e.viewport)) : (n = null, G.copy(ft).multiplyScalar(ut), Y = lt, tt.copy(ct).multiplyScalar(ut)), z !== n && (Ot.bindFramebuffer(Ot.FRAMEBUFFER, n), z = n), Pt.scissor(G), Pt.setScissorTest(Y), Pt.viewport(tt), t && (t = Ht.get(e.texture), Ot.framebufferTexture2D(Ot.FRAMEBUFFER, Ot.COLOR_ATTACHMENT0, Ot.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, t.__webglTexture, e.activeMipMapLevel))
        }, this.readRenderTargetPixels = function (e, t, n, r, i, s) {
            if (!1 === (e && e.isWebGLRenderTarget)) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); else {
                var o = Ht.get(e).__webglFramebuffer;
                if (o) {
                    var u = !1;
                    o !== z && (Ot.bindFramebuffer(Ot.FRAMEBUFFER, o), u = !0);
                    try {
                        var a = e.texture, f = a.format, l = a.type;
                        1023 !== f && E(f) !== Ot.getParameter(Ot.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === l || E(l) === Ot.getParameter(Ot.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === l && (_t.get("OES_texture_float") || _t.get("WEBGL_color_buffer_float")) || 1016 === l && _t.get("EXT_color_buffer_half_float") ? Ot.checkFramebufferStatus(Ot.FRAMEBUFFER) === Ot.FRAMEBUFFER_COMPLETE ? 0 <= t && t <= e.width - r && 0 <= n && n <= e.height - i && Ot.readPixels(t, n, r, i, E(f), E(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        u && Ot.bindFramebuffer(Ot.FRAMEBUFFER, z)
                    }
                }
            }
        }
    }

    function Jt(e, t) {
        this.name = "", this.color = new U(e), this.density = void 0 !== t ? t : 25e-5
    }

    function Kt(e, t, n) {
        this.name = "", this.color = new U(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== n ? n : 1e3
    }

    function Qt() {
        it.call(this), this.type = "Scene", this.overrideMaterial = this.fog = this.background = null, this.autoUpdate = !0
    }

    function Gt(e, t, n, r, i) {
        it.call(this), this.lensFlares = [], this.positionScreen = new a, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, n, r, i)
    }

    function Yt(e) {
        V.call(this), this.type = "SpriteMaterial", this.color = new U(16777215), this.map = null, this.rotation = 0, this.lights = this.fog = !1, this.setValues(e)
    }

    function Zt(e) {
        it.call(this), this.type = "Sprite", this.material = void 0 !== e ? e : new Yt
    }

    function en() {
        it.call(this), this.type = "LOD", Object.defineProperties(this, {levels: {enumerable: !0, value: []}})
    }

    function tn(e, t, n, i, s, o, u, a, f, l, c, h) {
        r.call(this, null, o, u, a, f, l, i, s, c, h), this.image = {
            data: e,
            width: t,
            height: n
        }, this.magFilter = void 0 !== f ? f : 1003, this.minFilter = void 0 !== l ? l : 1003, this.generateMipmaps = this.flipY = !1
    }

    function nn(t, n, r) {
        this.useVertexTexture = void 0 !== r ? r : !0, this.identityMatrix = new f, t = t || [], this.bones = t.slice(0), this.useVertexTexture ? (t = Math.sqrt(4 * this.bones.length), t = e.Math.nextPowerOfTwo(Math.ceil(t)), this.boneTextureHeight = this.boneTextureWidth = t = Math.max(t, 4), this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new tn(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, 1023, 1015)) : this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === n) this.calculateInverses(); else if (this.bones.length === n.length) this.boneInverses = n.slice(0); else for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], n = 0, t = this.bones.length; n < t; n++)this.boneInverses.push(new f)
    }

    function rn(e) {
        it.call(this), this.type = "Bone", this.skin = e
    }

    function sn(e, t, n) {
        mt.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new f, this.bindMatrixInverse = new f, e = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var r, i = 0, s = this.geometry.bones.length; i < s; ++i)r = this.geometry.bones[i], t = new rn(this), e.push(t), t.name = r.name, t.position.fromArray(r.pos), t.quaternion.fromArray(r.rotq), void 0 !== r.scl && t.scale.fromArray(r.scl);
            i = 0;
            for (s = this.geometry.bones.length; i < s; ++i)r = this.geometry.bones[i], -1 !== r.parent && null !== r.parent && void 0 !== e[r.parent] ? e[r.parent].add(e[i]) : this.add(e[i])
        }
        this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new nn(e, void 0, n), this.matrixWorld)
    }

    function on(e) {
        V.call(this), this.type = "LineBasicMaterial", this.color = new U(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.lights = !1, this.setValues(e)
    }

    function un(e, t, n) {
        if (1 === n)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new an(e, t);
        it.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new vt, this.material = void 0 !== t ? t : new on({color: 16777215 * Math.random()})
    }

    function an(e, t) {
        un.call(this, e, t), this.type = "LineSegments"
    }

    function fn(e) {
        V.call(this), this.type = "PointsMaterial", this.color = new U(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(e)
    }

    function ln(e, t) {
        it.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new vt, this.material = void 0 !== t ? t : new fn({color: 16777215 * Math.random()})
    }

    function cn() {
        it.call(this), this.type = "Group"
    }

    function hn(e, t, n, i, s, o, u, a, f) {
        function l() {
            requestAnimationFrame(l), e.readyState >= e.HAVE_CURRENT_DATA && (c.needsUpdate = !0)
        }

        r.call(this, e, t, n, i, s, o, u, a, f), this.generateMipmaps = !1;
        var c = this;
        l()
    }

    function pn(e, t, n, i, s, o, u, a, f, l, c, h) {
        r.call(this, null, o, u, a, f, l, i, s, c, h), this.image = {
            width: t,
            height: n
        }, this.mipmaps = e, this.generateMipmaps = this.flipY = !1
    }

    function dn(e,
                t, n, i, s, o, u, a, f) {
        r.call(this, e, t, n, i, s, o, u, a, f), this.needsUpdate = !0
    }

    function vn(e, t, n, i, s, o, u, a, f, l) {
        l = void 0 !== l ? l : 1026;
        if (1026 !== l && 1027 !== l)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        r.call(this, null, i, s, o, u, a, l, n, f), this.image = {
            width: e,
            height: t
        }, this.type = void 0 !== n ? n : 1012, this.magFilter = void 0 !== u ? u : 1003, this.minFilter = void 0 !== a ? a : 1003, this.generateMipmaps = this.flipY = !1
    }

    function mn(e) {
        function t(e, t) {
            return e - t
        }

        vt.call(this);
        var n = [0, 0], r = {}, i = ["a", "b", "c"];
        if (e && e.isGeometry) {
            var s = e.vertices, o = e.faces, u = 0, a = new Uint32Array(6 * o.length);
            e = 0;
            for (var f = o.length; e < f; e++)for (var l = o[e], c = 0; 3 > c; c++) {
                n[0] = l[i[c]], n[1] = l[i[(c + 1) % 3]], n.sort(t);
                var h = n.toString();
                void 0 === r[h] && (a[2 * u] = n[0], a[2 * u + 1] = n[1], r[h] = !0, u++)
            }
            n = new Float32Array(6 * u), e = 0;
            for (f = u; e < f; e++)for (c = 0; 2 > c; c++)r = s[a[2 * e + c]], u = 6 * e + 3 * c, n[u + 0] = r.x, n[u + 1] = r.y, n[u + 2] = r.z;
            this.addAttribute("position", new ft(n, 3))
        } else if (e && e.isBufferGeometry) {
            if (null !== e.index) {
                f = e.index.array, s = e.attributes.position, i = e.groups, u = 0, 0 === i.length && e.addGroup(0, f.length), a = new Uint32Array(2 * f.length), o = 0;
                for (l = i.length; o < l; ++o) {
                    e = i[o], c = e.start, h = e.count, e = c;
                    for (var p = c + h; e < p; e += 3)for (c = 0; 3 > c; c++)n[0] = f[e + c], n[1] = f[e + (c + 1) % 3], n.sort(t), h = n.toString(), void 0 === r[h] && (a[2 * u] = n[0], a[2 * u + 1] = n[1], r[h] = !0, u++)
                }
                n = new Float32Array(6 * u), e = 0;
                for (f = u; e < f; e++)for (c = 0; 2 > c; c++)u = 6 * e + 3 * c, r = a[2 * e + c], n[u + 0] = s.getX(r), n[u + 1] = s.getY(r), n[u + 2] = s.getZ(r)
            } else for (s = e.attributes.position.array, u = s.length / 3, a = u / 3, n = new Float32Array(6 * u), e = 0, f = a; e < f; e++)for (c = 0; 3 > c; c++)u = 18 * e + 6 * c, a = 9 * e + 3 * c, n[u + 0] = s[a], n[u + 1] = s[a + 1], n[u + 2] = s[a + 2], r = 9 * e + (c + 1) % 3 * 3, n[u + 3] = s[r], n[u + 4] = s[r + 1], n[u + 5] = s[r + 2];
            this.addAttribute("position", new ft(n, 3))
        }
    }

    function gn(e, t, r) {
        pt.call(this), this.type = "ParametricGeometry", this.parameters = {func: e, slices: t, stacks: r};
        var i = this.vertices, s = this.faces, o = this.faceVertexUvs[0], u, a, f, l, c = t + 1;
        for (u = 0; u <= r; u++)for (l = u / r, a = 0; a <= t; a++)f = a / t, f = e(f, l), i.push(f);
        var h, p, d, v;
        for (u = 0; u < r; u++)for (a = 0; a < t; a++)e = u * c + a, i = u * c + a + 1, l = (u + 1) * c + a + 1, f = (u + 1) * c + a, h = new n(a / t, u / r), p = new n((a + 1) / t, u / r), d = new n((a + 1) / t, (u + 1) / r), v = new n(a / t, (u + 1) / r), s.push(new ut(e, i, f)), o.push([h, p, v]), s.push(new ut(i, l, f)), o.push([p.clone(), d, v.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }

    function yn(e, t, r, i) {
        function s(e) {
            var t = e.normalize().clone();
            return t.index = l.vertices.push(t) - 1, t.uv = new n(Math.atan2(e.z, -e.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5)), t
        }

        function o(e, t, n) {
            var r = new ut(e.index, t.index, n.index, [e.clone(), t.clone(), n.clone()]);
            l.faces.push(r), y.copy(e).add(t).add(n).divideScalar(3), r = Math.atan2(y.z, -y.x), l.faceVertexUvs[0].push([f(e.uv, e, r), f(t.uv, t, r), f(n.uv, n, r)])
        }

        function u(e, t) {
            for (var n = Math.pow(2, t), r = s(l.vertices[e.a]), i = s(l.vertices[e.b]), u = s(l.vertices[e.c]), a = [], f = 0; f <= n; f++) {
                a[f] = [];
                for (var c = s(r.clone().lerp(u, f / n)), h = s(i.clone().lerp(u, f / n)), p = n - f, d = 0; d <= p; d++)a[f][d] = 0 === d && f === n ? c : s(c.clone().lerp(h, d / p))
            }
            for (f = 0; f < n; f++)for (d = 0; d < 2 * (n - f) - 1; d++)r = Math.floor(d / 2), 0 === d % 2 ? o(a[f][r + 1], a[f + 1][r], a[f][r]) : o(a[f][r + 1], a[f + 1][r + 1], a[f + 1][r])
        }

        function f(e, t, r) {
            return 0 > r && 1 === e.x && (e = new n(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new n(r / 2 / Math.PI + .5, e.y)), e.clone()
        }

        pt.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: r,
            detail: i
        }, r = r || 1, i = i || 0;
        for (var l = this, c = 0, h = e.length; c < h; c += 3)s(new a(e[c], e[c + 1], e[c + 2]));
        e = this.vertices;
        for (var p = [], d = c = 0, h = t.length; c < h; c += 3, d++) {
            var v = e[t[c]], m = e[t[c + 1]], g = e[t[c + 2]];
            p[d] = new ut(v.index, m.index, g.index, [v.clone(), m.clone(), g.clone()])
        }
        for (var y = new a, c = 0, h = p.length; c < h; c++)u(p[c], i);
        c = 0;
        for (h = this.faceVertexUvs[0].length; c < h; c++)t = this.faceVertexUvs[0][c], i = t[0].x, e = t[1].x, p = t[2].x, d = Math.min(i, e, p), .9 < Math.max(i, e, p) && .1 > d && (.2 > i && (t[0].x += 1), .2 > e && (t[1].x += 1), .2 > p && (t[2].x += 1));
        c = 0;
        for (h = this.vertices.length; c < h; c++)this.vertices[c].multiplyScalar(r);
        this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new Q(new a, r)
    }

    function bn(e, t) {
        yn.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function wn(e, t) {
        yn.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function En(e, t) {
        var n = (1 + Math.sqrt(5)) / 2;
        yn.call(this, [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function Sn(e, t) {
        var n = (1 + Math.sqrt(5)) / 2, r = 1 / n;
        yn.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function xn(e, t, r, i, s, o) {
        pt.call(this), this.type = "TubeGeometry", this.parameters = {
            path: e,
            segments: t,
            radius: r,
            radialSegments: i,
            closed: s,
            taper: o
        }, t = t || 64, r = r || 1, i = i || 8, s = s || !1, o = o || xn.NoTaper;
        var u = [], f, l, c = t + 1, h, p, d, v, m, g = new a, y, b, w;
        y = new xn.FrenetFrames(e, t, s), b = y.normals, w = y.binormals, this.tangents = y.tangents, this.normals = b, this.binormals = w;
        for (y = 0; y < c; y++)for (u[y] = [], h = y / (c - 1), m = e.getPointAt(h), f = b[y], l = w[y], d = r * o(h), h = 0; h < i; h++)p = h / i * 2 * Math.PI, v = -d * Math.cos(p), p = d * Math.sin(p), g.copy(m), g.x += v * f.x + p * l.x, g.y += v * f.y + p * l.y, g.z += v * f.z + p * l.z, u[y][h] = this.vertices.push(new a(g.x, g.y, g.z)) - 1;
        for (y = 0; y < t; y++)for (h = 0; h < i; h++)o = s ? (y + 1) % t : y + 1, c = (h + 1) % i, e = u[y][h], r = u[o][h], o = u[o][c], c = u[y][c], g = new n(y / t, h / i), b = new n((y + 1) / t, h / i), w = new n((y + 1) / t, (h + 1) / i), f = new n(y / t, (h + 1) / i), this.faces.push(new ut(e, r, c)), this.faceVertexUvs[0].push([g, b, f]), this.faces.push(new ut(r, o, c)), this.faceVertexUvs[0].push([b.clone(), w, f.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }

    function Tn(e, t, r, i, s, o) {
        function u(e, t, n, r, i) {
            var s = Math.sin(e);
            t = n / t * e, n = Math.cos(t), i.x = r * (2 + n) * .5 * Math.cos(e), i.y = r * (2 + n) * s * .5, i.z = r * Math.sin(t) * .5
        }

        vt.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: r,
            radialSegments: i,
            p: s,
            q: o
        }, e = e || 100, t = t || 40, r = Math.floor(r) || 64, i = Math.floor(i) || 8, s = s || 2, o = o || 3;
        var f = (i + 1) * (r + 1), l = i * r * 6, l = new ft(new (65535 < l ? Uint32Array : Uint16Array)(l), 1), c = new ft(new Float32Array(3 * f), 3), h = new ft(new Float32Array(3 * f), 3), f = new ft(new Float32Array(2 * f), 2), p, d, v = 0, m = 0, g = new a, y = new a, b = new n, w = new a, E = new a, S = new a, x = new a, T = new a;
        for (p = 0; p <= r; ++p)for (d = p / r * s * Math.PI * 2, u(d, s, o, e, w), u(d + .01, s, o, e, E), x.subVectors(E, w), T.addVectors(E, w), S.crossVectors(x, T), T.crossVectors(S, x), S.normalize(), T.normalize(), d = 0; d <= i; ++d) {
            var N = d / i * Math.PI * 2, C = -t * Math.cos(N), N = t * Math.sin(N);
            g.x = w.x + (C * T.x + N * S.x), g.y = w.y + (C * T.y + N * S.y), g.z = w.z + (C * T.z + N * S.z), c.setXYZ(v, g.x, g.y, g.z), y.subVectors(g, w).normalize(), h.setXYZ(v, y.x, y.y, y.z), b.x = p / r, b.y = d / i, f.setXY(v, b.x, b.y), v++
        }
        for (d = 1; d <= r; d++)for (p = 1; p <= i; p++)e = (i + 1) * d + (p - 1), t = (i + 1) * d + p, s = (i + 1) * (d - 1) + p, l.setX(m, (i + 1) * (d - 1) + (p - 1)), m++, l.setX(m, e), m++, l.setX(m, s), m++, l.setX(m, e), m++, l.setX(m, t), m++, l.setX(m, s), m++;
        this.setIndex(l), this.addAttribute("position", c), this.addAttribute("normal", h), this.addAttribute("uv", f)
    }

    function Nn(e, t, n, r, i, s, o) {
        pt.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: s
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Tn(e, t, n, r, i, s)), this.mergeVertices()
    }

    function Cn(e, t, n, r, i) {
        vt.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        }, e = e || 100, t = t || 40, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || 2 * Math.PI;
        var s = (n + 1) * (r + 1), o = n * r * 6, o = new (65535 < o ? Uint32Array : Uint16Array)(o), u = new Float32Array(3 * s), f = new Float32Array(3 * s), s = new Float32Array(2 * s), l = 0, c = 0, h = 0, p = new a, d = new a, v = new a, m, g;
        for (m = 0; m <= n; m++)for (g = 0; g <= r; g++) {
            var y = g / r * i, b = m / n * Math.PI * 2;
            d.x = (e + t * Math.cos(b)) * Math.cos(y), d.y = (e + t * Math.cos(b)) * Math.sin(y), d.z = t * Math.sin(b), u[l] = d.x, u[l + 1] = d.y, u[l + 2] = d.z, p.x = e * Math.cos(y), p.y = e * Math.sin(y), v.subVectors(d, p).normalize(), f[l] = v.x, f[l + 1] = v.y, f[l + 2] = v.z, s[c] = g / r, s[c + 1] = m / n, l += 3, c += 2
        }
        for (m = 1; m <= n; m++)for (g = 1; g <= r; g++)e = (r + 1) * (m - 1) + g - 1, t = (r + 1) * (m - 1) + g, i = (r + 1) * m + g, o[h] = (r + 1) * m + g - 1, o[h + 1] = e, o[h + 2] = i, o[h + 3] = e, o[h + 4] = t, o[h + 5] = i, h += 6;
        this.setIndex(new ft(o, 1)), this.addAttribute("position", new ft(u, 3)), this.addAttribute("normal", new ft(f, 3)), this.addAttribute("uv", new ft(s, 2))
    }

    function kn(e, t, n, r, i) {
        pt.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        }, this.fromBufferGeometry(new Cn(e, t, n, r, i))
    }

    function Ln(e, t) {
        "undefined" != typeof e && (pt.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), this.computeFaceNormals())
    }

    function An(e, t) {
        t = t || {};
        var n = t.font;
        if (!1 === (n && n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new pt;
        n = n.generateShapes(e, t.size, t.curveSegments), t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), Ln.call(this, n, t), this.type = "TextGeometry"
    }

    function On(e, t, n, r, i, s, o) {
        vt.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: s,
            thetaLength: o
        }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI, s = void 0 !== s ? s : 0, o = void 0 !== o ? o : Math.PI;
        for (var u = s + o, f = (t + 1) * (n + 1), l = new ft(new Float32Array(3 * f), 3), c = new ft(new Float32Array(3 * f), 3), f = new ft(new Float32Array(2 * f), 2), h = 0, p = [], d = new a, v = 0; v <= n; v++) {
            for (var m = [], g = v / n, y = 0; y <= t; y++) {
                var b = y / t, w = -e * Math.cos(r + b * i) * Math.sin(s + g * o), E = e * Math.cos(s + g * o), S = e * Math.sin(r + b * i) * Math.sin(s + g * o);
                d.set(w, E, S).normalize(), l.setXYZ(h, w, E, S), c.setXYZ(h, d.x, d.y, d.z), f.setXY(h, b, 1 - g), m.push(h), h++
            }
            p.push(m)
        }
        r = [];
        for (v = 0; v < n; v++)for (y = 0; y < t; y++)i = p[v][y + 1], o = p[v][y], h = p[v + 1][y], d = p[v + 1][y + 1], (0 !== v || 0 < s) && r.push(i, o, d), (v !== n - 1 || u < Math.PI) && r.push(o, h, d);
        this.setIndex(new (65535 < l.count ? ct : lt)(r, 1)), this.addAttribute("position", l), this.addAttribute("normal", c), this.addAttribute("uv", f), this.boundingSphere = new Q(new a, e)
    }

    function Mn(e, t, n, r, i, s, o) {
        pt.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: s,
            thetaLength: o
        }, this.fromBufferGeometry(new On(e, t, n, r, i, s, o))
    }

    function _n(e, t, r, i, s, o) {
        vt.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: r,
            phiSegments: i,
            thetaStart: s,
            thetaLength: o
        }, e = e || 20, t = t || 50, s = void 0 !== s ? s : 0, o = void 0 !== o ? o : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, i = void 0 !== i ? Math.max(1, i) : 1;
        var u = (r + 1) * (i + 1), f = r * i * 6, f = new ft(new (65535 < f ? Uint32Array : Uint16Array)(f), 1), l = new ft(new Float32Array(3 * u), 3), c = new ft(new Float32Array(3 * u), 3), u = new ft(new Float32Array(2 * u), 2), h = 0, p = 0, d, v = e, m = (t - e) / i, g = new a, y = new n, b;
        for (e = 0; e <= i; e++) {
            for (b = 0; b <= r; b++)d = s + b / r * o, g.x = v * Math.cos(d), g.y = v * Math.sin(d), l.setXYZ(h, g.x, g.y, g.z), c.setXYZ(h, 0, 0, 1), y.x = (g.x / t + 1) / 2, y.y = (g.y / t + 1) / 2, u.setXY(h, y.x, y.y), h++;
            v += m
        }
        for (e = 0; e < i; e++)for (t = e * (r + 1), b = 0; b < r; b++)s = d = b + t, o = d + r + 1, h = d + r + 2, d += 1, f.setX(p, s), p++, f.setX(p, o), p++, f.setX(p, h), p++, f.setX(p, s), p++, f.setX(p, h), p++, f.setX(p, d), p++;
        this.setIndex(f), this.addAttribute("position", l), this.addAttribute("normal", c), this.addAttribute("uv", u)
    }

    function Dn(e, t, n, r, i, s) {
        pt.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: s
        }, this.fromBufferGeometry(new _n(e, t, n, r, i, s))
    }

    function Pn(e, t, n, r) {
        pt.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        }, this.fromBufferGeometry(new yt(e, t, n, r))
    }

    function Hn(t, r, i, s) {
        vt.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: r,
            phiStart: i,
            phiLength: s
        }, r = Math.floor(r) || 12, i = i || 0, s = s || 2 * Math.PI, s = e.Math.clamp(s, 0, 2 * Math.PI);
        for (var o = (r + 1) * t.length, u = r * t.length * 6, f = new ft(new (65535 < u ? Uint32Array : Uint16Array)(u), 1), l = new ft(new Float32Array(3 * o), 3), c = new ft(new Float32Array(2 * o), 2), h = 0, p = 0, d = 1 / r, v = new a, m = new n, o = 0; o <= r; o++)for (var u = i + o * d * s, g = Math.sin(u), y = Math.cos(u), u = 0; u <= t.length - 1; u++)v.x = t[u].x * g, v.y = t[u].y, v.z = t[u].x * y, l.setXYZ(h, v.x, v.y, v.z), m.x = o / r, m.y = u / (t.length - 1), c.setXY(h, m.x, m.y), h++;
        for (o = 0; o < r; o++)for (u = 0; u < t.length - 1; u++)i = u + o * t.length, h = i + t.length, d = i + t.length + 1, v = i + 1, f.setX(p, i), p++, f.setX(p, h), p++, f.setX(p, v), p++, f.setX(p, h), p++, f.setX(p, d), p++, f.setX(p, v), p++;
        this.setIndex(f), this.addAttribute("position", l), this.addAttribute("uv", c), this.computeVertexNormals();
        if (s === 2 * Math.PI)for (s = this.attributes.normal.array, f = new a, l = new a, c = new a, i = r * t.length * 3, u = o = 0; o < t.length; o++, u += 3)f.x = s[u + 0], f.y = s[u + 1], f.z = s[u + 2], l.x = s[i + u + 0], l.y = s[i + u + 1], l.z = s[i + u + 2], c.addVectors(f, l).normalize(), s[u + 0] = s[i + u + 0] = c.x, s[u + 1] = s[i + u + 1] = c.y, s[u + 2] = s[i + u + 2] = c.z
    }

    function Bn(e, t, n, r) {
        pt.call(this), this.type = "LatheGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: n,
            phiLength: r
        }, this.fromBufferGeometry(new Hn(e, t, n, r)), this.mergeVertices()
    }

    function jn(e, t) {
        pt.call(this), this.type = "ShapeGeometry", !1 === Array.isArray(e) && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
    }

    function Fn(t, n) {
        function r(e, t) {
            return e - t
        }

        vt.call(this);
        var i = Math.cos(e.Math.DEG2RAD * (void 0 !== n ? n : 1)), s = [0, 0], o = {}, u = ["a", "b", "c"], a;
        t && t.isBufferGeometry ? (a = new pt, a.fromBufferGeometry(t)) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
        var f = a.vertices;
        a = a.faces;
        for (var l = 0, c = a.length; l < c; l++)for (var h = a[l], p = 0; 3 > p; p++) {
            s[0] = h[u[p]], s[1] = h[u[(p + 1) % 3]], s.sort(r);
            var d = s.toString();
            void 0 === o[d] ? o[d] = {vert1: s[0], vert2: s[1], face1: l, face2: void 0} : o[d].face2 = l
        }
        s = [];
        for (d in o)if (u = o[d], void 0 === u.face2 || a[u.face1].normal.dot(a[u.face2].normal) <= i) l = f[u.vert1], s.push(l.x), s.push(l.y), s.push(l.z), l = f[u.vert2], s.push(l.x), s.push(l.y), s.push(l.z);
        this.addAttribute("position", new ft(new Float32Array(s), 3))
    }

    function In(e, t, r, i, s, o, u, f) {
        function l(r) {
            var s, o, l, h = new n, p = new a, d = 0, E = !0 === r ? e : t, T = !0 === r ? 1 : -1;
            o = b;
            for (s = 1; s <= i; s++)m.setXYZ(b, 0, S * T, 0), g.setXYZ(b, 0, T, 0), h.x = .5, h.y = .5, y.setXY(b, h.x, h.y), b++;
            l = b;
            for (s = 0; s <= i; s++) {
                var N = s / i * f + u, C = Math.cos(N), N = Math.sin(N);
                p.x = E * N, p.y = S * T, p.z = E * C, m.setXYZ(b, p.x, p.y, p.z), g.setXYZ(b, 0, T, 0), h.x = .5 * C + .5, h.y = .5 * N * T + .5, y.setXY(b, h.x, h.y), b++
            }
            for (s = 0; s < i; s++)h = o + s, p = l + s, !0 === r ? (v.setX(w, p), w++, v.setX(w, p + 1)) : (v.setX(w, p + 1), w++, v.setX(w, p)), w++, v.setX(w, h), w++, d += 3;
            c.addGroup(x, d, !0 === r ? 1 : 2), x += d
        }

        vt.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: r,
            radialSegments: i,
            heightSegments: s,
            openEnded: o,
            thetaStart: u,
            thetaLength: f
        };
        var c = this;
        e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100, i = Math.floor(i) || 8, s = Math.floor(s) || 1, o = void 0 !== o ? o : !1, u = void 0 !== u ? u : 0, f = void 0 !== f ? f : 2 * Math.PI;
        var h = 0;
        !1 === o && (0 < e && h++, 0 < t && h++);
        var p = function () {
            var e = (i + 1) * (s + 1);
            return !1 === o && (e += (i + 1) * h + i * h), e
        }(), d = function () {
            var e = i * s * 6;
            return !1 === o && (e += i * h * 3), e
        }(), v = new ft(new (65535 < d ? Uint32Array : Uint16Array)(d), 1), m = new ft(new Float32Array(3 * p), 3), g = new ft(new Float32Array(3 * p), 3), y = new ft(new Float32Array(2 * p), 2), b = 0, w = 0, E = [], S = r / 2, x = 0;
        (function () {
            var n, o, l = new a, h = new a, p = 0, d = (t - e) / r;
            for (o = 0; o <= s; o++) {
                var T = [], N = o / s, C = N * (t - e) + e;
                for (n = 0; n <= i; n++) {
                    var k = n / i, L = k * f + u, A = Math.sin(L), L = Math.cos(L);
                    h.x = C * A, h.y = -N * r + S, h.z = C * L, m.setXYZ(b, h.x, h.y, h.z), l.set(A, d, L).normalize(), g.setXYZ(b, l.x, l.y, l.z), y.setXY(b, k, 1 - N), T.push(b), b++
                }
                E.push(T)
            }
            for (n = 0; n < i; n++)for (o = 0; o < s; o++)l = E[o + 1][n], h = E[o + 1][n + 1], d = E[o][n + 1], v.setX(w, E[o][n]), w++, v.setX(w, l), w++, v.setX(w, d), w++, v.setX(w, l), w++, v.setX(w, h), w++, v.setX(w, d), w++, p += 6;
            c.addGroup(x, p, 0), x += p
        })(), !1 === o && (0 < e && l(!0), 0 < t && l(!1)), this.setIndex(v), this.addAttribute("position", m), this.addAttribute("normal", g), this.addAttribute("uv", y)
    }

    function qn(e, t, n, r, i, s, o, u) {
        pt.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: s,
            thetaStart: o,
            thetaLength: u
        }, this.fromBufferGeometry(new In(e, t, n, r, i, s, o, u)), this.mergeVertices()
    }

    function Rn(e, t, n, r, i, s, o) {
        qn.call(this, 0, e, t, n, r, i, s, o), this.type = "ConeGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: s,
            thetaLength: o
        }
    }

    function Un(e, t, n, r, i, s, o) {
        In.call(this, 0, e, t, n, r, i, s, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: r,
            thetaStart: s,
            thetaLength: o
        }
    }

    function zn(e, t, n, r) {
        vt.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: r
        }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var i = t + 2, s = new Float32Array(3 * i), o = new Float32Array(3 * i), i = new Float32Array(2 * i);
        o[2] = 1, i[0] = .5, i[1] = .5;
        for (var u = 0, f = 3, l = 2; u <= t; u++, f += 3, l += 2) {
            var c = n + u / t * r;
            s[f] = e * Math.cos(c), s[f + 1] = e * Math.sin(c), o[f + 2] = 1, i[l] = (s[f] / e + 1) / 2, i[l + 1] = (s[f + 1] / e + 1) / 2
        }
        n = [];
        for (f = 1; f <= t; f++)n.push(f, f + 1, 0);
        this.setIndex(new ft(new Uint16Array(n), 1)), this.addAttribute("position", new ft(s, 3)), this.addAttribute("normal", new ft(o, 3)), this.addAttribute("uv", new ft(i, 2)), this.boundingSphere = new Q(new a, e)
    }

    function Wn(e, t, n, r) {
        pt.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: r
        }, this.fromBufferGeometry(new zn(e, t, n, r))
    }

    function Xn(e, t, n, r, i, s) {
        pt.call(this), this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: s
        }, this.fromBufferGeometry(new gt(e, t, n, r, i, s)), this.mergeVertices()
    }

    function Vn() {
        $.call(this, {
            uniforms: e.UniformsUtils.merge([Vi.lights, {opacity: {value: 1}}]),
            vertexShader: Xi.shadow_vert,
            fragmentShader: Xi.shadow_frag
        }), this.transparent = this.lights = !0, Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function () {
                    return this.uniforms.opacity.value
                },
                set: function (e) {
                    this.uniforms.opacity.value = e
                }
            }
        })
    }

    function $n(e) {
        $.call(this, e), this.type = "RawShaderMaterial"
    }

    function Jn(t) {
        this.uuid = e.Math.generateUUID(), this.type = "MultiMaterial", this.materials = t instanceof Array ? t : [], this.visible = !0
    }

    function Kn(e) {
        V.call(this), this.defines = {STANDARD: ""}, this.type = "MeshStandardMaterial", this.color = new U(16777215), this.metalness = this.roughness = .5, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new U(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }

    function Qn(e) {
        Kn.call(this), this.defines = {PHYSICAL: ""}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoatRoughness = this.clearCoat = 0, this.setValues(e)
    }

    function Gn(e) {
        V.call(this), this.type = "MeshPhongMaterial", this.color = new U(16777215), this.specular = new U(1118481), this.shininess = 30, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new U(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }

    function Yn(e) {
        V.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = this.lights = this.fog = !1, this.setValues(e)
    }

    function Zn(e) {
        V.call(this), this.type = "MeshLambertMaterial", this.color = new U(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new U(0), this.emissiveIntensity = 1, this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(e)
    }

    function er(e) {
        V.call(this), this.type = "LineDashedMaterial", this.color = new U(16777215), this.scale = this.linewidth = 1, this.dashSize = 3, this.gapSize = 1, this.lights = !1, this.setValues(e)
    }

    function tr(e, t, n) {
        var r = this, i = !1, s = 0, o = 0;
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (e) {
            o++, !1 === i && void 0 !== r.onStart && r.onStart(e, s, o), i = !0
        }, this.itemEnd = function (e) {
            s++, void 0 !== r.onProgress && r.onProgress(e, s, o), s === o && (i = !1, void 0 !== r.onLoad) && r.onLoad()
        }, this.itemError = function (e) {
            void 0 !== r.onError && r.onError(e)
        }
    }

    function nr(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function rr(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager, this._parser = null
    }

    function ir(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager, this._parser = null
    }

    function sr(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function or(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function ur(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function ar(e, t) {
        it.call(this), this.type = "Light", this.color = new U(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
    }

    function fr(e, t, n) {
        ar.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(it.DefaultUp), this.updateMatrix(), this.groundColor = new U(t)
    }

    function lr(e) {
        this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new n(512, 512), this.map = null, this.matrix = new f
    }

    function cr() {
        lr.call(this, new wt(50, 1, .5, 500))
    }

    function hr(e, t, n, r, i, s) {
        ar.call(this, e, t), this.type = "SpotLight", this.position.copy(it.DefaultUp), this.updateMatrix(), this.target = new it, Object.defineProperty(this, "power", {
            get: function () {
                return this.intensity * Math.PI
            }, set: function (e) {
                this.intensity = e / Math.PI
            }
        }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== s ? s : 1, this.shadow = new cr
    }

    function pr(e, t, n, r) {
        ar.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function () {
                return 4 * this.intensity * Math.PI
            }, set: function (e) {
                this.intensity = e / (4 * Math.PI)
            }
        }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new lr(new wt(90, 1, .5, 500))
    }

    function dr(e) {
        lr.call(this, new Et(-5, 5, 5, -5, .5, 500))
    }

    function vr(e, t) {
        ar.call(this, e, t), this.type = "DirectionalLight", this.position.copy(it.DefaultUp), this.updateMatrix(), this.target = new it, this.shadow = new dr
    }

    function mr(e, t) {
        ar.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
    }

    function gr(e, t, n, r) {
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n
    }

    function yr(e, t, n, r) {
        gr.call(this, e, t, n, r), this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = 0
    }

    function br(e, t, n, r) {
        gr.call(this, e, t, n, r)
    }

    function wr(e, t, n, r) {
        gr.call(this, e, t, n, r)
    }

    function Er(t, n, r, i) {
        if (void 0 === t)throw Error("track name is undefined");
        if (void 0 === n || 0 === n.length)throw Error("no keyframes in track named " + t);
        this.name = t, this.times = e.AnimationUtils.convertArray(n, this.TimeBufferType), this.values = e.AnimationUtils.convertArray(r, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation), this.validate(), this.optimize()
    }

    function Sr(e, t, n, r) {
        Er.call(this, e, t, n, r)
    }

    function xr(e, t, n, r) {
        gr.call(this, e, t, n, r)
    }

    function Tr(e, t, n, r) {
        Er.call(this, e, t, n, r)
    }

    function Nr(e, t, n, r) {
        Er.call(this, e, t, n, r)
    }

    function Cr(e, t, n, r) {
        Er.call(this, e, t, n, r)
    }

    function kr(e, t, n) {
        Er.call(this, e, t, n)
    }

    function Lr(e, t, n, r) {
        Er.call(this, e, t, n, r)
    }

    function Ar(e, t, n, r) {
        Er.apply(this, arguments)
    }

    function Or(t, n, r) {
        this.name = t, this.tracks = r, this.duration = void 0 !== n ? n : -1, this.uuid = e.Math.generateUUID(), 0 > this.duration && this.resetDuration(), this.optimize()
    }

    function Mr(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager, this.textures = {}
    }

    function _r(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function Dr() {
        this.onLoadStart = function () {
        }, this.onLoadProgress = function () {
        }, this.onLoadComplete = function () {
        }
    }

    function Pr(t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : e.DefaultLoadingManager, this.withCredentials = !1
    }

    function Hr(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager, this.texturePath = ""
    }

    function Br() {
    }

    function jr(e, t) {
        this.v1 = e, this.v2 = t
    }

    function Fr() {
        this.curves = [], this.autoClose = !1
    }

    function Ir(e, t, n, r, i, s, o, u) {
        this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = s, this.aClockwise = o, this.aRotation = u || 0
    }

    function qr(e) {
        this.points = void 0 === e ? [] : e
    }

    function Rr(e, t, n, r) {
        this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r
    }

    function Ur(e, t, n) {
        this.v0 = e, this.v1 = t, this.v2 = n
    }

    function zr() {
        Wr.apply(this, arguments), this.holes = []
    }

    function Wr(e) {
        Fr.call(this), this.currentPoint = new n, e && this.fromPoints(e)
    }

    function Xr() {
        this.subPaths = [], this.currentPath = null
    }

    function Vr(e) {
        this.data = e
    }

    function $r(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function Jr() {
        return void 0 === ns && (ns = new (window.AudioContext || window.webkitAudioContext)), ns
    }

    function Kr(t) {
        this.manager = void 0 !== t ? t : e.DefaultLoadingManager
    }

    function Qr() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new wt, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new wt, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    function Gr(e, t, n) {
        it.call(this), this.type = "CubeCamera";
        var r = new wt(90, 1, e, t);
        r.up.set(0, -1, 0), r.lookAt(new a(1, 0, 0)), this.add(r);
        var i = new wt(90, 1, e, t);
        i.up.set(0, -1, 0), i.lookAt(new a(-1, 0, 0)), this.add(i);
        var s = new wt(90, 1, e, t);
        s.up.set(0, 0, 1), s.lookAt(new a(0, 1, 0)), this.add(s);
        var u = new wt(90, 1, e, t);
        u.up.set(0, 0, -1), u.lookAt(new a(0, -1, 0)), this.add(u);
        var f = new wt(90, 1, e, t);
        f.up.set(0, -1, 0), f.lookAt(new a(0, 0, 1)), this.add(f);
        var l = new wt(90, 1, e, t);
        l.up.set(0, -1, 0), l.lookAt(new a(0, 0, -1)), this.add(l), this.renderTarget = new o(n, n, {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        }), this.updateCubeMap = function (e, t) {
            null === this.parent && this.updateMatrixWorld();
            var n = this.renderTarget, o = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, n.activeCubeFace = 0, e.render(t, r, n), n.activeCubeFace = 1, e.render(t, i, n), n.activeCubeFace = 2, e.render(t, s, n), n.activeCubeFace = 3, e.render(t, u, n), n.activeCubeFace = 4, e.render(t, f, n), n.texture.generateMipmaps = o, n.activeCubeFace = 5, e.render(t, l, n), e.setRenderTarget(null)
        }
    }

    function Yr() {
        it.call(this), this.type = "AudioListener", this.context = Jr(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    function Zr(e) {
        it.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function ei(e) {
        Zr.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function ti(e, t) {
        this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
    }

    function ni(e, t, n) {
        this.binding = e, this.valueSize = n, e = Float64Array;
        switch (t) {
            case"quaternion":
                t = this._slerp;
                break;
            case"string":
            case"bool":
                e = Array, t = this._select;
                break;
            default:
                t = this._lerp
        }
        this.buffer = new e(4 * n), this._mixBufferRegion = t, this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }

    function ri(e, t, n) {
        this.path = t, this.parsedPath = n || ri.parseTrackName(t), this.node = ri.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
    }

    function ii(t) {
        this.uuid = e.Math.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var n = {};
        this._indicesByUUID = n;
        for (var r = 0, i = arguments.length; r !== i; ++r)n[arguments[r].uuid] = r;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var s = this;
        this.stats = {
            objects: {
                get total() {
                    return s._objects.length
                }, get inUse() {
                    return this.total - s.nCachedObjects_
                }
            }, get bindingsPerObject() {
                return s._bindings.length
            }
        }
    }

    function si(e, t, n) {
        this._mixer = e, this._clip = t, this._localRoot = n || null, e = t.tracks, t = e.length, n = Array(t);
        for (var r = {endingStart: 2400, endingEnd: 2400}, i = 0; i !== t; ++i) {
            var s = e[i].createInterpolant(null);
            n[i] = s, s.settings = r
        }
        this._interpolantSettings = r, this._interpolants = n, this._propertyBindings = Array(t), this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1, this.repetitions = Infinity, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }

    function oi(e) {
        this._root = e, this._initMemoryManager(), this.time = this._accuIndex = 0, this.timeScale = 1
    }

    function ui(e, t) {
        "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = t), this.value = e, this.dynamic = !1
    }

    function ai() {
        vt.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function fi(t, n, r, i) {
        this.uuid = e.Math.generateUUID(), this.data = t, this.itemSize = n, this.offset = r, this.normalized = !0 === i
    }

    function li(t, n) {
        this.uuid = e.Math.generateUUID(), this.array = t, this.stride = n, this.count = void 0 !== t ? t.length / n : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    function ci(e, t, n) {
        li.call(this, e, t), this.meshPerAttribute = n || 1
    }

    function hi(e, t, n) {
        ft.call(this, e, t), this.meshPerAttribute = n || 1
    }

    function pi(e, t, n, r) {
        this.ray = new tt(e, t), this.near = n || 0, this.far = r || Infinity, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {threshold: 1},
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function () {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function di(e, t) {
        return e.distance - t.distance
    }

    function vi(e, t, n, r) {
        if (!1 !== e.visible && (e.raycast(t, n), !0 === r)) {
            e = e.children, r = 0;
            for (var i = e.length; r < i; r++)vi(e[r], t, n, !0)
        }
    }

    function mi(e) {
        this.autoStart = void 0 !== e ? e : !0, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1
    }

    function gi(e, t, n) {
        return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== n ? n : 0, this
    }

    function yi(e, t) {
        mt.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
        var n = this.geometry.morphTargets.length;
        this.createAnimation("__default", 0, n - 1, n / 1), this.setAnimationWeight("__default", 1)
    }

    function bi(e) {
        it.call(this), this.material = e, this.render = function (e) {
        }
    }

    function wi(e, t, n, r) {
        this.object = e, this.size = void 0 !== t ? t : 1, e = void 0 !== n ? n : 16711680, r = void 0 !== r ? r : 1, t = 0, (n = this.object.geometry) && n.isGeometry ? t = 3 * n.faces.length : n && n.isBufferGeometry && (t = n.attributes.normal.count), n = new vt, t = new ht(6 * t, 3), n.addAttribute("position", t), an.call(this, n, new on({
            color: e,
            linewidth: r
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Ei(e) {
        it.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, e = new vt;
        for (var t = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], n = 0, r = 1; 32 > n; n++, r++) {
            var i = n / 32 * Math.PI * 2, s = r / 32 * Math.PI * 2;
            t.push(Math.cos(i), Math.sin(i), 1, Math.cos(s), Math.sin(s), 1)
        }
        e.addAttribute("position", new ht(t, 3)), t = new on({fog: !1}), this.cone = new an(e, t), this.add(this.cone), this.update()
    }

    function Si(e) {
        this.bones = this.getBoneList(e);
        for (var t = new pt, n = 0; n < this.bones.length; n++) {
            var r = this.bones[n];
            r.parent && r.parent.isBone && (t.vertices.push(new a), t.vertices.push(new a), t.colors.push(new U(0, 0, 1)), t.colors.push(new U(0, 1, 0)))
        }
        t.dynamic = !0, n = new on({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }), an.call(this, t, n), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function xi(e, t) {
        this.light = e, this.light.updateMatrixWorld();
        var n = new On(t, 4, 2), r = new at({wireframe: !0, fog: !1});
        r.color.copy(this.light.color).multiplyScalar(this.light.intensity), mt.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Ti(e, t) {
        it
            .call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new U, new U];
        var n = new Mn(t, 4, 2);
        n.rotateX(-Math.PI / 2);
        for (var r = 0; 8 > r; r++)n.faces[r].color = this.colors[4 > r ? 0 : 1];
        r = new at({
            vertexColors: 1,
            wireframe: !0
        }), this.lightSphere = new mt(n, r), this.add(this.lightSphere), this.update()
    }

    function Ni(e, t, n, r) {
        t = t || 1, n = new U(void 0 !== n ? n : 4473924), r = new U(void 0 !== r ? r : 8947848);
        for (var i = t / 2, s = 2 * e / t, o = [], u = [], a = 0, f = 0, l = -e; a <= t; a++, l += s) {
            o.push(-e, 0, l, e, 0, l), o.push(l, 0, -e, l, 0, e);
            var c = a === i ? n : r;
            c.toArray(u, f), f += 3, c.toArray(u, f), f += 3, c.toArray(u, f), f += 3, c.toArray(u, f), f += 3
        }
        e = new vt, e.addAttribute("position", new ht(o, 3)), e.addAttribute("color", new ht(u, 3)), o = new on({vertexColors: 2}), an.call(this, e, o)
    }

    function Ci(e, t, n, r) {
        this.object = e, this.size = void 0 !== t ? t : 1, e = void 0 !== n ? n : 16776960, r = void 0 !== r ? r : 1, t = 0, (n = this.object.geometry) && n.isGeometry ? t = n.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."), n = new vt, t = new ht(6 * t, 3), n.addAttribute("position", t), an.call(this, n, new on({
            color: e,
            linewidth: r
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function ki(e, t) {
        it.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, void 0 === t && (t = 1);
        var n = new vt;
        n.addAttribute("position", new ht([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
        var r = new on({fog: !1});
        this.add(new un(n, r)), n = new vt, n.addAttribute("position", new ht([0, 0, 0, 0, 0, 1], 3)), this.add(new un(n, r)), this.update()
    }

    function Li(e) {
        function t(e, t, r) {
            n(e, r), n(t, r)
        }

        function n(e, t) {
            r.vertices.push(new a), r.colors.push(new U(t)), void 0 === s[e] && (s[e] = []), s[e].push(r.vertices.length - 1)
        }

        var r = new pt, i = new on({color: 16777215, vertexColors: 1}), s = {};
        t("n1", "n2", 16755200), t("n2", "n4", 16755200), t("n4", "n3", 16755200), t("n3", "n1", 16755200), t("f1", "f2", 16755200), t("f2", "f4", 16755200), t("f4", "f3", 16755200), t("f3", "f1", 16755200), t("n1", "f1", 16755200), t("n2", "f2", 16755200), t("n3", "f3", 16755200), t("n4", "f4", 16755200), t("p", "n1", 16711680), t("p", "n2", 16711680), t("p", "n3", 16711680), t("p", "n4", 16711680), t("u1", "u2", 43775), t("u2", "u3", 43775), t("u3", "u1", 43775), t("c", "t", 16777215), t("p", "c", 3355443), t("cn1", "cn2", 3355443), t("cn3", "cn4", 3355443), t("cf1", "cf2", 3355443), t("cf3", "cf4", 3355443), an.call(this, r, i), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
    }

    function Ai(e, t) {
        var n = void 0 !== t ? t : 8947848;
        this.object = e, this.box = new K, mt.call(this, new Xn(1, 1, 1), new at({color: n, wireframe: !0}))
    }

    function Oi(e, t) {
        void 0 === t && (t = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = new Float32Array(24), i = new vt;
        i.setIndex(new ft(n, 1)), i.addAttribute("position", new ft(r, 3)), an.call(this, i, new on({color: t})), void 0 !== e && this.update(e)
    }

    function Mi(e, t, n, r, i, s) {
        it.call(this), void 0 === r && (r = 16776960), void 0 === n && (n = 1), void 0 === i && (i = .2 * n), void 0 === s && (s = .2 * i), this.position.copy(t), this.line = new un(rs, new on({color: r})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new mt(is, new at({color: r})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, s)
    }

    function _i(e) {
        e = e || 1;
        var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]), n = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
        e = new vt, e.addAttribute("position", new ft(t, 3)), e.addAttribute("color", new ft(n, 3)), t = new on({vertexColors: 2}), an.call(this, e, t)
    }

    function Di(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."), e.CatmullRomCurve3.call(this, t), this.type = "catmullrom", this.closed = !0
    }

    function Pi(e, t, n, r, i, s) {
        Ir.call(this, e, t, n, n, r, i, s)
    }

    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function (e) {
        return 0 > e ? -1 : 0 < e ? 1 : +e
    }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function () {
            return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
        }
    }), void 0 === Object.assign && function () {
        Object.assign = function (e) {
            if (void 0 === e || null === e)throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (void 0 !== r && null !== r)for (var i in r)Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
            }
            return t
        }
    }(), Object.assign(t.prototype, {
        addEventListener: function (e, t) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
        }, hasEventListener: function (e, t) {
            if (void 0 === this._listeners)return !1;
            var n = this._listeners;
            return void 0 !== n[e] && -1 !== n[e].indexOf(t) ? !0 : !1
        }, removeEventListener: function (e, t) {
            if (void 0 !== this._listeners) {
                var n = this._listeners[e];
                if (void 0 !== n) {
                    var r = n.indexOf(t);
                    -1 !== r && n.splice(r, 1)
                }
            }
        }, dispatchEvent: function (e) {
            if (void 0 !== this._listeners) {
                var t = this._listeners[e.type];
                if (void 0 !== t) {
                    e.target = this;
                    var n = [], r, i = t.length;
                    for (r = 0; r < i; r++)n[r] = t[r];
                    for (r = 0; r < i; r++)n[r].call(this, e)
                }
            }
        }
    });
    var Hi = {
        NoBlending: 0,
        NormalBlending: 1,
        AdditiveBlending: 2,
        SubtractiveBlending: 3,
        MultiplyBlending: 4,
        CustomBlending: 5
    }, Bi = {
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307
    }, ji = {RepeatWrapping: 1e3, ClampToEdgeWrapping: 1001, MirroredRepeatWrapping: 1002}, Fi = {
        NearestFilter: 1003,
        NearestMipMapNearestFilter: 1004,
        NearestMipMapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipMapNearestFilter: 1007,
        LinearMipMapLinearFilter: 1008
    };
    e.Math = {
        DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () {
            var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), t = Array(36), n = 0, r;
            return function () {
                for (var i = 0; 36 > i; i++)8 === i || 13 === i || 18 === i || 23 === i ? t[i] = "-" : 14 === i ? t[i] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0), r = n & 15, n >>= 4, t[i] = e[19 === i ? r & 3 | 8 : r]);
                return t.join("")
            }
        }(), clamp: function (e, t, n) {
            return Math.max(t, Math.min(n, e))
        }, euclideanModulo: function (e, t) {
            return (e % t + t) % t
        }, mapLinear: function (e, t, n, r, i) {
            return r + (e - t) * (i - r) / (n - t)
        }, smoothstep: function (e, t, n) {
            return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e))
        }, smootherstep: function (e, t, n) {
            return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (6 * e - 15) + 10))
        }, random16: function () {
            return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
        }, randInt: function (e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        }, randFloat: function (e, t) {
            return e + Math.random() * (t - e)
        }, randFloatSpread: function (e) {
            return e * (.5 - Math.random())
        }, degToRad: function (t) {
            return t * e.Math.DEG2RAD
        }, radToDeg: function (t) {
            return t * e.Math.RAD2DEG
        }, isPowerOfTwo: function (e) {
            return 0 === (e & e - 1) && 0 !== e
        }, nearestPowerOfTwo: function (e) {
            return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
        }, nextPowerOfTwo: function (e) {
            return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
        }
    }, n.prototype = {
        constructor: n, isVector2: !0, get width() {
            return this.x
        }, set width(e) {
            this.x = e
        }, get height() {
            return this.y
        }, set height(e) {
            this.y = e
        }, set: function (e, t) {
            return this.x = e, this.y = t, this
        }, setScalar: function (e) {
            return this.y = this.x = e, this
        }, setX: function (e) {
            return this.x = e, this
        }, setY: function (e) {
            return this.y = e, this
        }, setComponent: function (e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
            }
        }, getComponent: function (e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + e)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y)
        }, copy: function (e) {
            return this.x = e.x, this.y = e.y, this
        }, add: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
        }, addScalar: function (e) {
            return this.x += e, this.y += e, this
        }, addVectors: function (e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        }, addScaledVector: function (e, t) {
            return this.x += e.x * t, this.y += e.y * t, this
        }, sub: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
        }, subScalar: function (e) {
            return this.x -= e, this.y -= e, this
        }, subVectors: function (e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        }, multiply: function (e) {
            return this.x *= e.x, this.y *= e.y, this
        }, multiplyScalar: function (e) {
            return isFinite(e) ? (this.x *= e, this.y *= e) : this.y = this.x = 0, this
        }, divide: function (e) {
            return this.x /= e.x, this.y /= e.y, this
        }, divideScalar: function (e) {
            return this.multiplyScalar(1 / e)
        }, min: function (e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        }, max: function (e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        }, clamp: function (e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
        }, clampScalar: function () {
            var e, t;
            return function (r, i) {
                return void 0 === e && (e = new n, t = new n), e.set(r, r), t.set(i, i), this.clamp(e, t)
            }
        }(), clampLength: function (e, t) {
            var n = this.length();
            return this.multiplyScalar(Math.max(e, Math.min(t, n)) / n)
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, roundToZero: function () {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        }, dot: function (e) {
            return this.x * e.x + this.y * e.y
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y)
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, angle: function () {
            var e = Math.atan2(this.y, this.x);
            return 0 > e && (e += 2 * Math.PI), e
        }, distanceTo: function (e) {
            return Math.sqrt(this.distanceToSquared(e))
        }, distanceToSquared: function (e) {
            var t = this.x - e.x;
            return e = this.y - e.y, t * t + e * e
        }, distanceToManhattan: function (e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        }, setLength: function (e) {
            return this.multiplyScalar(e / this.length())
        }, lerp: function (e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        }, lerpVectors: function (e, t, n) {
            return this.subVectors(t, e).multiplyScalar(n).add(e)
        }, equals: function (e) {
            return e.x === this.x && e.y === this.y
        }, fromArray: function (e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
        }, toArray: function (e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
        }, fromAttribute: function (e, t, n) {
            return void 0 === n && (n = 0), t = t * e.itemSize + n, this.x = e.array[t], this.y = e.array[t + 1], this
        }, rotateAround: function (e, t) {
            var n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, s = this.y - e.y;
            return this.x = i * n - s * r + e.x, this.y = i * r + s * n + e.y, this
        }
    }, r.DEFAULT_IMAGE = void 0, r.DEFAULT_MAPPING = 300, r.prototype = {
        constructor: r,
        isTexture: !0,
        set needsUpdate(e) {
            !0 === e && this.version++
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (e) {
            return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
        },
        toJSON: function (t) {
            if (void 0 !== t.textures[this.uuid])return t.textures[this.uuid];
            var n = {
                metadata: {version: 4.4, type: "Texture", generator: "Texture.toJSON"},
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var r = this.image;
                void 0 === r.uuid && (r.uuid = e.Math.generateUUID());
                if (void 0 === t.images[r.uuid]) {
                    var i = t.images, s = r.uuid, o = r.uuid, u;
                    void 0 !== r.toDataURL ? u = r : (u = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), u.width = r.width, u.height = r.height, u.getContext("2d").drawImage(r, 0, 0, r.width, r.height)), u = 2048 < u.width || 2048 < u.height ? u.toDataURL("image/jpeg", .6) : u.toDataURL("image/png"), i[s] = {
                        uuid: o,
                        url: u
                    }
                }
                n.image = r.uuid
            }
            return t.textures[this.uuid] = n
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        },
        transformUv: function (e) {
            if (300 === this.mapping) {
                e.multiply(this.repeat), e.add(this.offset);
                if (0 > e.x || 1 < e.x)switch (this.wrapS) {
                    case 1e3:
                        e.x -= Math.floor(e.x);
                        break;
                    case 1001:
                        e.x = 0 > e.x ? 0 : 1;
                        break;
                    case 1002:
                        e.x = 1 === Math.abs(Math.floor(e.x) % 2) ? Math.ceil(e.x) - e.x : e.x - Math.floor(e.x)
                }
                if (0 > e.y || 1 < e.y)switch (this.wrapT) {
                    case 1e3:
                        e.y -= Math.floor(e.y);
                        break;
                    case 1001:
                        e.y = 0 > e.y ? 0 : 1;
                        break;
                    case 1002:
                        e.y = 1 === Math.abs(Math.floor(e.y) % 2) ? Math.ceil(e.y) - e.y : e.y - Math.floor(e.y)
                }
                this.flipY && (e.y = 1 - e.y)
            }
        }
    }, Object.assign(r.prototype, t.prototype);
    var Ii = 0;
    i.prototype = {
        constructor: i, isVector4: !0, set: function (e, t, n, r) {
            return this.x = e, this.y = t, this.z = n, this.w = r, this
        }, setScalar: function (e) {
            return this.w = this.z = this.y = this.x = e, this
        }, setX: function (e) {
            return this.x = e, this
        }, setY: function (e) {
            return this.y = e, this
        }, setZ: function (e) {
            return this.z = e, this
        }, setW: function (e) {
            return this.w = e, this
        }, setComponent: function (e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
            }
        }, getComponent: function (e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + e)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }, copy: function (e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
        }, add: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
        }, addScalar: function (e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        }, addVectors: function (e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        }, addScaledVector: function (e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
        }, sub: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
        }, subScalar: function (e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
        }, subVectors: function (e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        }, multiplyScalar: function (e) {
            return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : this.w = this.z = this.y = this.x = 0, this
        }, applyMatrix4: function (e) {
            var t = this.x, n = this.y, r = this.z, i = this.w;
            return e = e.elements, this.x = e[0] * t + e[4] * n + e[8] * r + e[12] * i, this.y = e[1] * t + e[5] * n + e[9] * r + e[13] * i, this.z = e[2] * t + e[6] * n + e[10] * r + e[14] * i, this.w = e[3] * t + e[7] * n + e[11] * r + e[15] * i, this
        }, divideScalar: function (e) {
            return this.multiplyScalar(1 / e)
        }, setAxisAngleFromQuaternion: function (e) {
            this.w = 2 * Math.acos(e.w);
            var t = Math.sqrt(1 - e.w * e.w);
            return 1e-4 > t ? (this.x = 1, this.z = this.y = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        }, setAxisAngleFromRotationMatrix: function (e) {
            var t, n, r;
            e = e.elements;
            var i = e[0];
            r = e[4];
            var s = e[8], o = e[1], u = e[5], a = e[9];
            n = e[2], t = e[6];
            var f = e[10];
            return .01 > Math.abs(r - o) && .01 > Math.abs(s - n) && .01 > Math.abs(a - t) ? .1 > Math.abs(r + o) && .1 > Math.abs(s + n) && .1 > Math.abs(a + t) && .1 > Math.abs(i + u + f - 3) ? (this.set(1, 0, 0, 0), this) : (e = Math.PI, i = (i + 1) / 2, u = (u + 1) / 2, f = (f + 1) / 2, r = (r + o) / 4, s = (s + n) / 4, a = (a + t) / 4, i > u && i > f ? .01 > i ? (t = 0, r = n = .707106781) : (t = Math.sqrt(i), n = r / t, r = s / t): u > f ? .01 > u ? (t = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(u), t = r / n, r = a / n): .01
            >
            f ? (n = t = .707106781, r = 0) : (r = Math.sqrt(f), t = s / r, n = a / r), this.set(t, n, r, e), this
            ):
            (e = Math.sqrt((t - a) * (t - a) + (s - n) * (s - n) + (o - r) * (o - r)), .001 > Math.abs(e) && (e = 1), this.x = (t - a) / e, this.y = (s - n) / e, this.z = (o - r) / e, this.w = Math.acos((i + u + f - 1) / 2), this)
        }, min: function (e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
        }, max: function (e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
        }, clamp: function (e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
        }, clampScalar: function () {
            var e, t;
            return function (n, r) {
                return void 0 === e && (e = new i, t = new i), e.set(n, n, n, n), t.set(r, r, r, r), this.clamp(e, t)
            }
        }(), floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        }, roundToZero: function () {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }, dot: function (e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, setLength: function (e) {
            return this.multiplyScalar(e / this.length())
        }, lerp: function (e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        }, lerpVectors: function (e, t, n) {
            return this.subVectors(t, e).multiplyScalar(n).add(e)
        }, equals: function (e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        }, fromArray: function (e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
        }, toArray: function (e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
        }, fromAttribute: function (e, t, n) {
            return void 0 === n && (n = 0), t = t * e.itemSize + n, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
        }
    }, Object.assign(s.prototype, t.prototype, {
        isWebGLRenderTarget: !0, setSize: function (e, t) {
            if (this.width !== e || this.height !== t) this.width = e, this.height = t, this.dispose();
            this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }), o.prototype = Object.create(s.prototype), o.prototype.constructor = o, o.prototype.isWebGLRenderTargetCube = !0, u.prototype = {
        constructor: u,
        get x() {
            return this._x
        },
        set x(e) {
            this._x = e, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(e) {
            this._y = e, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(e) {
            this._z = e, this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(e) {
            this._w = e, this.onChangeCallback()
        },
        set: function (e, t, n, r) {
            return this._x = e, this._y = t, this._z = n, this._w = r, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function (e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
        },
        setFromEuler: function (e, t) {
            if (!1 === (e && e.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var n = Math.cos(e._x / 2), r = Math.cos(e._y / 2), i = Math.cos(e._z / 2), s = Math.sin(e._x / 2), o = Math.sin(e._y / 2), u = Math.sin(e._z / 2), a = e.order;
            return "XYZ" === a ? (this._x = s * r * i + n * o * u, this._y = n * o * i - s * r * u, this._z = n * r * u + s * o * i, this._w = n * r * i - s * o * u) : "YXZ" === a ? (this._x = s * r * i + n * o * u, this._y = n * o * i - s * r * u, this._z = n * r * u - s * o * i, this._w = n * r * i + s * o * u) : "ZXY" === a ? (this._x = s * r * i - n * o * u, this._y = n * o * i + s * r * u, this._z = n * r * u + s * o * i, this._w = n * r * i - s * o * u) : "ZYX" === a ? (this._x = s * r * i - n * o * u, this._y = n * o * i + s * r * u, this._z = n * r * u - s * o * i, this._w = n * r * i + s * o * u) : "YZX" === a ? (this._x = s * r * i + n * o * u, this._y = n * o * i + s * r * u, this._z = n * r * u - s * o * i, this._w = n * r * i - s * o * u) : "XZY" === a && (this._x = s * r * i - n * o * u, this._y = n * o * i - s * r * u, this._z = n * r * u + s * o * i, this._w = n * r * i + s * o * u), !1 !== t && this.onChangeCallback(), this
        },
        setFromAxisAngle: function (e, t) {
            var n = t / 2, r = Math.sin(n);
            return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (e) {
            var t = e.elements, n = t[0];
            e = t[4];
            var r = t[8], i = t[1], s = t[5], o = t[9], u = t[2], a = t[6], t = t[10], f = n + s + t;
            return 0 < f ? (n = .5 / Math.sqrt(f + 1), this._w = .25 / n, this._x = (a - o) * n, this._y = (r - u) * n, this._z = (i - e) * n) : n > s && n > t ? (n = 2 * Math.sqrt(1 + n - s - t), this._w = (a - o) / n, this._x = .25 * n, this._y = (e + i) / n, this._z = (r + u) / n) : s > t ? (n = 2 * Math.sqrt(1 + s - n - t), this._w = (r - u) / n, this._x = (e + i) / n, this._y = .25 * n, this._z = (o + a) / n) : (n = 2 * Math.sqrt(1 + t - n - s), this._w = (i - e) / n, this._x = (r + u) / n, this._y = (o + a) / n, this._z = .25 * n), this.onChangeCallback(), this
        },
        setFromUnitVectors: function () {
            var e, t;
            return function (n, r) {
                return void 0 === e && (e = new a), t = n.dot(r) + 1, 1e-6 > t ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, r), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(),
        inverse: function () {
            return this.conjugate().normalize()
        },
        conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function (e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        },
        lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function () {
            var e = this.length();
            return 0 === e ? (this._z = this._y = this._x = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this.onChangeCallback(), this
        },
        multiply: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
        },
        premultiply: function (e) {
            return this.multiplyQuaternions(e, this)
        },
        multiplyQuaternions: function (e, t) {
            var n = e._x, r = e._y, i = e._z, s = e._w, o = t._x, u = t._y, a = t._z, f = t._w;
            return this._x = n * f + s * o + r * a - i * u, this._y = r * f + s * u + i * o - n * a, this._z = i * f + s * a + n * u - r * o, this._w = s * f - n * o - r * u - i * a, this.onChangeCallback(), this
        },
        slerp: function (e, t) {
            if (0 === t)return this;
            if (1 === t)return this.copy(e);
            var n = this._x, r = this._y, i = this._z, s = this._w, o = s * e._w + n * e._x + r * e._y + i * e._z;
            0 > o ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e);
            if (1 <= o)return this._w = s, this._x = n, this._y = r, this._z = i, this;
            var u = Math.sqrt(1 - o * o);
            if (.001 > Math.abs(u))return this._w = .5 * (s + this._w), this._x = .5 * (n + this._x), this._y = .5 * (r + this._y), this._z = .5 * (i + this._z), this;
            var a = Math.atan2(u, o), o = Math.sin((1 - t) * a) / u, u = Math.sin(t * a) / u;
            return this._w = s * o + this._w * u, this._x = n * o + this._x * u, this._y = r * o + this._y * u, this._z = i * o + this._z * u, this.onChangeCallback(), this
        },
        equals: function (e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        },
        fromArray: function (e, t) {
            return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
        },
        toArray: function (e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
        },
        onChange: function (e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function () {
        }
    }, Object.assign(u, {
        slerp: function (e, t, n, r) {
            return n.copy(e).slerp(t, r)
        }, slerpFlat: function (e, t, n, r, i, s, o) {
            var u = n[r + 0], a = n[r + 1], f = n[r + 2];
            n = n[r + 3], r = i[s + 0];
            var l = i[s + 1], c = i[s + 2];
            i = i[s + 3];
            if (n !== i || u !== r || a !== l || f !== c) {
                s = 1 - o;
                var h = u * r + a * l + f * c + n * i, p = 0 <= h ? 1 : -1, d = 1 - h * h;
                d > Number.EPSILON && (d = Math.sqrt(d), h = Math.atan2(d, h * p), s = Math.sin(s * h) / d, o = Math.sin(o * h) / d), p *= o, u = u * s + r * p, a = a * s + l * p, f = f * s + c * p, n = n * s + i * p, s === 1 - o && (o = 1 / Math.sqrt(u * u + a * a + f * f + n * n), u *= o, a *= o, f *= o, n *= o)
            }
            e[t] = u, e[t + 1] = a, e[t + 2] = f, e[t + 3] = n
        }
    }), a.prototype = {
        constructor: a, isVector3: !0, set: function (e, t, n) {
            return this.x = e, this.y = t, this.z = n, this
        }, setScalar: function (e) {
            return this.z = this.y = this.x = e, this
        }, setX: function (e) {
            return this.x = e, this
        }, setY: function (e) {
            return this.y = e, this
        }, setZ: function (e) {
            return this.z = e, this
        }, setComponent: function (e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw Error("index is out of range: " + e)
            }
        }, getComponent: function (e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + e)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y, this.z)
        }, copy: function (e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        }, add: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
        }, addScalar: function (e) {
            return this.x += e, this.y += e, this.z += e, this
        }, addVectors: function (e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        }, addScaledVector: function (e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
        }, sub: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
        }, subScalar: function (e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        }, subVectors: function (e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        }, multiply: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
        }, multiplyScalar: function (e) {
            return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : this.z = this.y = this.x = 0, this
        }, multiplyVectors: function (e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        }, applyEuler: function () {
            var e;
            return function (t) {
                return !1 === (t && t.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new u), this.applyQuaternion(e.setFromEuler(t))
            }
        }(), applyAxisAngle: function () {
            var e;
            return function (t, n) {
                return void 0 === e && (e = new u), this.applyQuaternion(e.setFromAxisAngle(t, n))
            }
        }(), applyMatrix3: function (e) {
            var t = this.x, n = this.y, r = this.z;
            return e = e.elements, this.x = e[0] * t + e[3] * n + e[6] * r, this.y = e[1] * t + e[4] * n + e[7] * r, this.z = e[2] * t + e[5] * n + e[8] * r, this
        }, applyMatrix4: function (e) {
            var t = this.x, n = this.y, r = this.z;
            return e = e.elements, this.x = e[0] * t + e[4] * n + e[8] * r + e[12], this.y = e[1] * t + e[5] * n + e[9] * r + e[13], this.z = e[2] * t + e[6] * n + e[10] * r + e[14], this
        }, applyProjection: function (e) {
            var t = this.x, n = this.y, r = this.z;
            e = e.elements;
            var i = 1 / (e[3] * t + e[7] * n + e[11] * r + e[15]);
            return this.x = (e[0] * t + e[4] * n + e[8] * r + e[12]) * i, this.y = (e[1] * t + e[5] * n + e[9] * r + e[13]) * i, this.z = (e[2] * t + e[6] * n + e[10] * r + e[14]) * i, this
        }, applyQuaternion: function (e) {
            var t = this.x, n = this.y, r = this.z, i = e.x, s = e.y, o = e.z;
            e = e.w;
            var u = e * t + s * r - o * n, a = e * n + o * t - i * r, f = e * r + i * n - s * t, t = -i * t - s * n - o * r;
            return this.x = u * e + t * -i + a * -o - f * -s, this.y = a * e + t * -s + f * -i - u * -o, this.z = f * e + t * -o + u * -s - a * -i, this
        }, project: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
            }
        }(), unproject: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
            }
        }(), transformDirection: function (e) {
            var t = this.x, n = this.y, r = this.z;
            return e = e.elements, this.x = e[0] * t + e[4] * n + e[8] * r, this.y = e[1] * t + e[5] * n + e[9] * r, this.z = e[2] * t + e[6] * n + e[10] * r, this.normalize()
        }, divide: function (e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        }, divideScalar: function (e) {
            return this.multiplyScalar(1 / e)
        }, min: function (e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        }, max: function (e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        }, clamp: function (e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
        }, clampScalar: function () {
            var e, t;
            return function (n, r) {
                return void 0 === e && (e = new a, t = new a), e.set(n, n, n), t.set(r, r, r), this.clamp(e, t)
            }
        }(), clampLength: function (e, t) {
            var n = this.length();
            return this.multiplyScalar(Math.max(e, Math.min(t, n)) / n)
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        }, roundToZero: function () {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, dot: function (e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, setLength: function (e) {
            return this.multiplyScalar(e / this.length())
        }, lerp: function (e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        }, lerpVectors: function (e, t, n) {
            return this.subVectors(t, e).multiplyScalar(n).add(e)
        }, cross: function (e, t) {
            if (void 0 !== t)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
            var n = this.x, r = this.y, i = this.z;
            return this.x = r * e.z - i * e.y, this.y = i * e.x - n * e.z, this.z = n * e.y - r * e.x, this
        }, crossVectors: function (e, t) {
            var n = e.x, r = e.y, i = e.z, s = t.x, o = t.y, u = t.z;
            return this.x = r * u - i * o, this.y = i * s - n * u, this.z = n * o - r * s, this
        }, projectOnVector: function (e) {
            var t = e.dot(this) / e.lengthSq();
            return this.copy(e).multiplyScalar(t)
        }, projectOnPlane: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new a), e.copy(this).projectOnVector(t), this.sub(e)
            }
        }(), reflect: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new a), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
            }
        }(), angleTo: function (t) {
            return t = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()), Math.acos(e.Math.clamp(t, -1, 1))
        }, distanceTo: function (e) {
            return Math.sqrt(this.distanceToSquared(e))
        }, distanceToSquared: function (e) {
            var t = this.x - e.x, n = this.y - e.y;
            return e = this.z - e.z, t * t + n * n + e * e
        }, distanceToManhattan: function (e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        }, setFromSpherical: function (e) {
            var t = Math.sin(e.phi) * e.radius;
            return this.x = t * Math.sin(e.theta), this.y = Math.cos(e.phi) * e.radius, this.z = t * Math.cos(e.theta), this
        }, setFromMatrixPosition: function (e) {
            return this.setFromMatrixColumn(e, 3)
        }, setFromMatrixScale: function (e) {
            var t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length();
            return e = this.setFromMatrixColumn(e, 2).length(), this.x = t, this.y = n, this.z = e, this
        }, setFromMatrixColumn: function (e, t) {
            if ("number" == typeof e) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var n = e;
                e = t, t = n
            }
            return this.fromArray(e.elements, 4 * t)
        }, equals: function (e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        }, fromArray: function (e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
        }, toArray: function (e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
        }, fromAttribute: function (e, t, n) {
            return void 0 === n && (n = 0), t = t * e.itemSize + n, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
        }
    }, f.prototype = {
        constructor: f, isMatrix4: !0, set: function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v) {
            var m = this.elements;
            return m[0] = e, m[4] = t, m[8] = n, m[12] = r, m[1] = i, m[5] = s, m[9] = o, m[13] = u, m[2] = a, m[6] = f, m[10] = l, m[14] = c, m[3] = h, m[7] = p, m[11] = d, m[15] = v, this
        }, identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }, clone: function () {
            return (new f).fromArray(this.elements)
        }, copy: function (e) {
            return this.elements.set(e.elements), this
        }, copyPosition: function (e) {
            var t = this.elements;
            return e = e.elements, t[12] = e[12], t[13] = e[13], t[14] = e[14], this
        }, extractBasis: function (e, t, n) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn
            (this, 2), this
        }, makeBasis: function (e, t, n) {
            return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
        }, extractRotation: function () {
            var e;
            return function (t) {
                void 0 === e && (e = new a);
                var n = this.elements, r = t.elements, i = 1 / e.setFromMatrixColumn(t, 0).length(), s = 1 / e.setFromMatrixColumn(t, 1).length();
                return t = 1 / e.setFromMatrixColumn(t, 2).length(), n[0] = r[0] * i, n[1] = r[1] * i, n[2] = r[2] * i, n[4] = r[4] * s, n[5] = r[5] * s, n[6] = r[6] * s, n[8] = r[8] * t, n[9] = r[9] * t, n[10] = r[10] * t, this
            }
        }(), makeRotationFromEuler: function (e) {
            !1 === (e && e.isEuler) && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var t = this.elements, n = e.x, r = e.y, i = e.z, s = Math.cos(n), n = Math.sin(n), o = Math.cos(r), r = Math.sin(r), u = Math.cos(i), i = Math.sin(i);
            if ("XYZ" === e.order) {
                e = s * u;
                var a = s * i, f = n * u, l = n * i;
                t[0] = o * u, t[4] = -o * i, t[8] = r, t[1] = a + f * r, t[5] = e - l * r, t[9] = -n * o, t[2] = l - e * r, t[6] = f + a * r, t[10] = s * o
            } else"YXZ" === e.order ? (e = o * u, a = o * i, f = r * u, l = r * i, t[0] = e + l * n, t[4] = f * n - a, t[8] = s * r, t[1] = s * i, t[5] = s * u, t[9] = -n, t[2] = a * n - f, t[6] = l + e * n, t[10] = s * o) : "ZXY" === e.order ? (e = o * u, a = o * i, f = r * u, l = r * i, t[0] = e - l * n, t[4] = -s * i, t[8] = f + a * n, t[1] = a + f * n, t[5] = s * u, t[9] = l - e * n, t[2] = -s * r, t[6] = n, t[10] = s * o) : "ZYX" === e.order ? (e = s * u, a = s * i, f = n * u, l = n * i, t[0] = o * u, t[4] = f * r - a, t[8] = e * r + l, t[1] = o * i, t[5] = l * r + e, t[9] = a * r - f, t[2] = -r, t[6] = n * o, t[10] = s * o) : "YZX" === e.order ? (e = s * o, a = s * r, f = n * o, l = n * r, t[0] = o * u, t[4] = l - e * i, t[8] = f * i + a, t[1] = i, t[5] = s * u, t[9] = -n * u, t[2] = -r * u, t[6] = a * i + f, t[10] = e - l * i) : "XZY" === e.order && (e = s * o, a = s * r, f = n * o, l = n * r, t[0] = o * u, t[4] = -i, t[8] = r * u, t[1] = e * i + l, t[5] = s * u, t[9] = a * i - f, t[2] = f * i - a, t[6] = n * u, t[10] = l * i + e);
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }, makeRotationFromQuaternion: function (e) {
            var t = this.elements, n = e.x, r = e.y, i = e.z, s = e.w, o = n + n, u = r + r, a = i + i;
            e = n * o;
            var f = n * u, n = n * a, l = r * u, r = r * a, i = i * a, o = s * o, u = s * u, s = s * a;
            return t[0] = 1 - (l + i), t[4] = f - s, t[8] = n + u, t[1] = f + s, t[5] = 1 - (e + i), t[9] = r - o, t[2] = n - u, t[6] = r + o, t[10] = 1 - (e + l), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        }, lookAt: function () {
            var e, t, n;
            return function (r, i, s) {
                void 0 === e && (e = new a, t = new a, n = new a);
                var o = this.elements;
                return n.subVectors(r, i).normalize(), 0 === n.lengthSq() && (n.z = 1), e.crossVectors(s, n).normalize(), 0 === e.lengthSq() && (n.z += 1e-4, e.crossVectors(s, n).normalize()), t.crossVectors(n, e), o[0] = e.x, o[4] = t.x, o[8] = n.x, o[1] = e.y, o[5] = t.y, o[9] = n.y, o[2] = e.z, o[6] = t.z, o[10] = n.z, this
            }
        }(), multiply: function (e, t) {
            return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
        }, premultiply: function (e) {
            return this.multiplyMatrices(e, this)
        }, multiplyMatrices: function (e, t) {
            var n = e.elements, r = t.elements, i = this.elements, s = n[0], o = n[4], u = n[8], a = n[12], f = n[1], l = n[5], c = n[9], h = n[13], p = n[2], d = n[6], v = n[10], m = n[14], g = n[3], y = n[7], b = n[11], n = n[15], w = r[0], E = r[4], S = r[8], x = r[12], T = r[1], N = r[5], C = r[9], k = r[13], L = r[2], A = r[6], O = r[10], M = r[14], _ = r[3], D = r[7], P = r[11], r = r[15];
            return i[0] = s * w + o * T + u * L + a * _, i[4] = s * E + o * N + u * A + a * D, i[8] = s * S + o * C + u * O + a * P, i[12] = s * x + o * k + u * M + a * r, i[1] = f * w + l * T + c * L + h * _, i[5] = f * E + l * N + c * A + h * D, i[9] = f * S + l * C + c * O + h * P, i[13] = f * x + l * k + c * M + h * r, i[2] = p * w + d * T + v * L + m * _, i[6] = p * E + d * N + v * A + m * D, i[10] = p * S + d * C + v * O + m * P, i[14] = p * x + d * k + v * M + m * r, i[3] = g * w + y * T + b * L + n * _, i[7] = g * E + y * N + b * A + n * D, i[11] = g * S + y * C + b * O + n * P, i[15] = g * x + y * k + b * M + n * r, this
        }, multiplyToArray: function (e, t, n) {
            var r = this.elements;
            return this.multiplyMatrices(e, t), n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], n[4] = r[4], n[5] = r[5], n[6] = r[6], n[7] = r[7], n[8] = r[8], n[9] = r[9], n[10] = r[10], n[11] = r[11], n[12] = r[12], n[13] = r[13], n[14] = r[14], n[15] = r[15], this
        }, multiplyScalar: function (e) {
            var t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        }, applyToVector3Array: function () {
            var e;
            return function (t, n, r) {
                void 0 === e && (e = new a), void 0 === n && (n = 0), void 0 === r && (r = t.length);
                for (var i = 0; i < r; i += 3, n += 3)e.fromArray(t, n), e.applyMatrix4(this), e.toArray(t, n);
                return t
            }
        }(), applyToBuffer: function () {
            var e;
            return function (t, n, r) {
                void 0 === e && (e = new a), void 0 === n && (n = 0), void 0 === r && (r = t.length / t.itemSize);
                for (var i = 0; i < r; i++, n++)e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
                return t
            }
        }(), determinant: function () {
            var e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], s = e[1], o = e[5], u = e[9], a = e[13], f = e[2], l = e[6], c = e[10], h = e[14];
            return e[3] * (+i * u * l - r * a * l - i * o * c + n * a * c + r * o * h - n * u * h) + e[7] * (+t * u * h - t * a * c + i * s * c - r * s * h + r * a * f - i * u * f) + e[11] * (+t * a * l - t * o * h - i * s * l + n * s * h + i * o * f - n * a * f) + e[15] * (-r * o * f - t * u * l + t * o * c + r * s * l - n * s * c + n * u * f)
        }, transpose: function () {
            var e = this.elements, t;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        }, flattenToArrayOffset: function (e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(e, t)
        }, getPosition: function () {
            var e;
            return function () {
                return void 0 === e && (e = new a), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
            }
        }(), setPosition: function (e) {
            var t = this.elements;
            return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
        }, getInverse: function (e, t) {
            var n = this.elements, r = e.elements, i = r[0], s = r[1], o = r[2], u = r[3], a = r[4], f = r[5], l = r[6], c = r[7], h = r[8], p = r[9], d = r[10], v = r[11], m = r[12], g = r[13], y = r[14], r = r[15], b = p * y * c - g * d * c + g * l * v - f * y * v - p * l * r + f * d * r, w = m * d * c - h * y * c - m * l * v + a * y * v + h * l * r - a * d * r, E = h * g * c - m * p * c + m * f * v - a * g * v - h * f * r + a * p * r, S = m * p * l - h * g * l - m * f * d + a * g * d + h * f * y - a * p * y, x = i * b + s * w + o * E + u * S;
            if (0 === x) {
                if (!0 === t)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
                return console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"), this.identity()
            }
            return x = 1 / x, n[0] = b * x, n[1] = (g * d * u - p * y * u - g * o * v + s * y * v + p * o * r - s * d * r) * x, n[2] = (f * y * u - g * l * u + g * o * c - s * y * c - f * o * r + s * l * r) * x, n[3] = (p * l * u - f * d * u - p * o * c + s * d * c + f * o * v - s * l * v) * x, n[4] = w * x, n[5] = (h * y * u - m * d * u + m * o * v - i * y * v - h * o * r + i * d * r) * x, n[6] = (m * l * u - a * y * u - m * o * c + i * y * c + a * o * r - i * l * r) * x, n[7] = (a * d * u - h * l * u + h * o * c - i * d * c - a * o * v + i * l * v) * x, n[8] = E * x, n[9] = (m * p * u - h * g * u - m * s * v + i * g * v + h * s * r - i * p * r) * x, n[10] = (a * g * u - m * f * u + m * s * c - i * g * c - a * s * r + i * f * r) * x, n[11] = (h * f * u - a * p * u - h * s * c + i * p * c + a * s * v - i * f * v) * x, n[12] = S * x, n[13] = (h * g * o - m * p * o + m * s * d - i * g * d - h * s * y + i * p * y) * x, n[14] = (m * f * o - a * g * o - m * s * l + i * g * l + a * s * y - i * f * y) * x, n[15] = (a * p * o - h * f * o + h * s * l - i * p * l - a * s * d + i * f * d) * x, this
        }, scale: function (e) {
            var t = this.elements, n = e.x, r = e.y;
            return e = e.z, t[0] *= n, t[4] *= r, t[8] *= e, t[1] *= n, t[5] *= r, t[9] *= e, t[2] *= n, t[6] *= r, t[10] *= e, t[3] *= n, t[7] *= r, t[11] *= e, this
        }, getMaxScaleOnAxis: function () {
            var e = this.elements;
            return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
        }, makeTranslation: function (e, t, n) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
        }, makeRotationX: function (e) {
            var t = Math.cos(e);
            return e = Math.sin(e), this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1), this
        }, makeRotationY: function (e) {
            var t = Math.cos(e);
            return e = Math.sin(e), this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1), this
        }, makeRotationZ: function (e) {
            var t = Math.cos(e);
            return e = Math.sin(e), this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }, makeRotationAxis: function (e, t) {
            var n = Math.cos(t), r = Math.sin(t), i = 1 - n, s = e.x, o = e.y, u = e.z, a = i * s, f = i * o;
            return this.set(a * s + n, a * o - r * u, a * u + r * o, 0, a * o + r * u, f * o + n, f * u - r * s, 0, a * u - r * o, f * u + r * s, i * u * u + n, 0, 0, 0, 0, 1), this
        }, makeScale: function (e, t, n) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        }, compose: function (e, t, n) {
            return this.makeRotationFromQuaternion(t), this.scale(n), this.setPosition(e), this
        }, decompose: function () {
            var e, t;
            return function (n, r, i) {
                void 0 === e && (e = new a, t = new f);
                var s = this.elements, o = e.set(s[0], s[1], s[2]).length(), u = e.set(s[4], s[5], s[6]).length(), l = e.set(s[8], s[9], s[10]).length();
                0 > this.determinant() && (o = -o), n.x = s[12], n.y = s[13], n.z = s[14], t.elements.set(this.elements), n = 1 / o;
                var s = 1 / u, c = 1 / l;
                return t.elements[0] *= n, t.elements[1] *= n, t.elements[2] *= n, t.elements[4] *= s, t.elements[5] *= s, t.elements[6] *= s, t.elements[8] *= c, t.elements[9] *= c, t.elements[10] *= c, r.setFromRotationMatrix(t), i.x = o, i.y = u, i.z = l, this
            }
        }(), makeFrustum: function (e, t, n, r, i, s) {
            var o = this.elements;
            return o[0] = 2 * i / (t - e), o[4] = 0, o[8] = (t + e) / (t - e), o[12] = 0, o[1] = 0, o[5] = 2 * i / (r - n), o[9] = (r + n) / (r - n), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = -(s + i) / (s - i), o[14] = -2 * s * i / (s - i), o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        }, makePerspective: function (t, n, r, i) {
            t = r * Math.tan(e.Math.DEG2RAD * t * .5);
            var s = -t;
            return this.makeFrustum(s * n, t * n, s, t, r, i)
        }, makeOrthographic: function (e, t, n, r, i, s) {
            var o = this.elements, u = 1 / (t - e), a = 1 / (n - r), f = 1 / (s - i);
            return o[0] = 2 * u, o[4] = 0, o[8] = 0, o[12] = -((t + e) * u), o[1] = 0, o[5] = 2 * a, o[9] = 0, o[13] = -((n + r) * a), o[2] = 0, o[6] = 0, o[10] = -2 * f, o[14] = -((s + i) * f), o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        }, equals: function (e) {
            var t = this.elements;
            e = e.elements;
            for (var n = 0; 16 > n; n++)if (t[n] !== e[n])return !1;
            return !0
        }, fromArray: function (e, t) {
            void 0 === t && (t = 0);
            for (var n = 0; 16 > n; n++)this.elements[n] = e[n + t];
            return this
        }, toArray: function (e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
        }
    }, l.prototype = Object.create(r.prototype), l.prototype.constructor = l, l.prototype.isCubeTexture = !0, Object.defineProperty(l.prototype, "images", {
        get: function () {
            return this.image
        }, set: function (e) {
            this.image = e
        }
    });
    var qi = new r, Ri = new l, Ui = [], zi = [];
    q.prototype.setValue = function (e, t) {
        for (var n = this.seq, r = 0, i = n.length; r !== i; ++r) {
            var s = n[r];
            s.setValue(e, t[s.id])
        }
    };
    var Wi = /([\w\d_]+)(\])?(\[|\.)?/g;
    R.prototype.setValue = function (e, t, n) {
        t = this.map[t], void 0 !== t && t.setValue(e, n, this.renderer)
    }, R.prototype.set = function (e, t, n) {
        var r = this.map[n];
        void 0 !== r && r.setValue(e, t[n], this.renderer)
    }, R.prototype.setOptional = function (e, t, n) {
        t = t[n], void 0 !== t && this.setValue(e, n, t)
    }, R.upload = function (e, t, n, r) {
        for (var i = 0, s = t.length; i !== s; ++i) {
            var o = t[i], u = n[o.id];
            !1 !== u.needsUpdate && o.setValue(e, u.value, r)
        }
    }, R.seqWithValue = function (e, t) {
        for (var n = [], r = 0, i = e.length; r !== i; ++r) {
            var s = e[r];
            s.id in t && n.push(s)
        }
        return n
    }, R.splitDynamic = function (e, t) {
        for (var n = null, r = e.length, i = 0, s = 0; s !== r; ++s) {
            var o = e[s], u = t[o.id];
            u && !0 === u.dynamic ? (null === n && (n = []), n.push(o)) : (i < s && (e[i] = o), ++i)
        }
        return i < r && (e.length = i), n
    }, R.evalDynamic = function (e, t, n, r, i) {
        for (var s = 0, o = e.length; s !== o; ++s) {
            var u = t[e[s].id], a = u.onUpdateCallback;
            void 0 !== a && a.call(u, n, r, i)
        }
    }, e.UniformsUtils = {
        merge: function (e) {
            for (var t = {}, n = 0; n < e.length; n++) {
                var r = this.clone(e[n]), i;
                for (i in r)t[i] = r[i]
            }
            return t
        }, clone: function (e) {
            var t = {}, n;
            for (n in e) {
                t[n] = {};
                for (var r in e[n]) {
                    var i = e[n][r];
                    i && i.isColor || i && i.isVector2 || i && i.isVector3 || i && i.isVector4 || i && i.isMatrix3 || i && i.isMatrix4 || i && i.isTexture ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
                }
            }
            return t
        }
    };
    var Xi = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n",
        alphatest_fragment: "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "\nvec3 transformed = vec3( position );\n",
        beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
        bsdfs: "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n	return any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n#else\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	for ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n#endif\n",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n",
        color_fragment: "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n",
        color_pars_vertex: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif\n",
        defaultnormal_vertex: "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n",
        encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif\n",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif\n",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n"
        ,
        lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		if ( testLightInRange( lightDistance, pointLight.distance ) ) {\n			directLight.color = pointLight.color;\n			directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		#include <normal_flip>\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		#include <normal_flip>\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n	#ifndef STANDARD\n		float clearCoat;\n		float clearCoatRoughness;\n	#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifndef STANDARD\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	#ifndef STANDARD\n		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifndef STANDARD\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		float dotNL = dotNV;\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n	#ifndef STANDARD\n		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
        lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	#ifndef STANDARD\n		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n	#else\n		vec3 clearCoatRadiance = vec3( 0.0 );\n	#endif\n		\n	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
        logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n",
        map_fragment: "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n",
        map_particle_fragment: "#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
        map_particle_pars_fragment: "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n",
        normal_flip: "#ifdef DOUBLE_SIDED\n	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n	float flipNormal = 1.0;\n#endif\n",
        normal_fragment: "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
        project_vertex: "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
        tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n"
        ,
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	gl_FragColor.a *= opacity;\n}\n",
        cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}\n",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n",
        distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
        distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition;\n}\n",
        equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
        equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight;\n	reflectedLight.directDiffuse = vec3( 0.0 );\n	reflectedLight.directSpecular = vec3( 0.0 );\n	reflectedLight.indirectDiffuse = diffuseColor.rgb;\n	reflectedLight.indirectSpecular = vec3( 0.0 );\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n}\n",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n}\n",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n}\n",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n	uniform float clearCoat;\n	uniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n",
        normal_frag: "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	gl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n	#include <logdepthbuf_fragment>\n}\n",
        normal_vert: "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vNormal = normalize( normalMatrix * normal );\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n",
        shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n",
        shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n"
    };
    U.prototype = {
        constructor: U, isColor: !0, r: 1, g: 1, b: 1, set: function (e) {
            return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
        }, setScalar: function (e) {
            this.b = this.g = this.r = e
        }, setHex: function (e) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this
        }, setRGB: function (e, t, n) {
            return this.r = e, this.g = t, this.b = n, this
        }, setHSL: function () {
            function t(e, t, n) {
                return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
            }

            return function (n, r, i) {
                return n = e.Math.euclideanModulo(n, 1), r = e.Math.clamp(r, 0, 1), i = e.Math.clamp(i, 0, 1), 0 === r ? this.r = this.g = this.b = i : (r = .5 >= i ? i * (1 + r) : i + r - i * r, i = 2 * i - r, this.r = t(i, r, n + 1 / 3), this.g = t(i, r, n), this.b = t(i, r, n - 1 / 3)), this
            }
        }(), setStyle: function (t) {
            function n(e) {
                void 0 !== e && 1 > parseFloat(e) && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }

            var r;
            if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var i = r[2];
                switch (r[1]) {
                    case"rgb":
                    case"rgba":
                        if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i))return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, n(r[5]), this;
                        if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i))return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, n(r[5]), this;
                        break;
                    case"hsl":
                    case"hsla":
                        if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) {
                            var i = parseFloat(r[1]) / 360, s = parseInt(r[2], 10) / 100, o = parseInt(r[3], 10) / 100;
                            return n(r[5]), this.setHSL(i, s, o)
                        }
                }
            } else if (r = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                r = r[1], i = r.length;
                if (3 === i)return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, this;
                if (6 === i)return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, this
            }
            return t && 0 < t.length && (r = e.ColorKeywords[t], void 0 !== r ? this.setHex(r) : console.warn("THREE.Color: Unknown color " + t)), this
        }, clone: function () {
            return new this.constructor(this.r, this.g, this.b)
        }, copy: function (e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        }, copyGammaToLinear: function (e, t) {
            return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
        }, copyLinearToGamma: function (e, t) {
            void 0 === t && (t = 2);
            var n = 0 < t ? 1 / t : 1;
            return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
        }, convertGammaToLinear: function () {
            var e = this.r, t = this.g, n = this.b;
            return this.r = e * e, this.g = t * t, this.b = n * n, this
        }, convertLinearToGamma: function () {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        }, getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }, getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        }, getHSL: function (e) {
            e = e || {h: 0, s: 0, l: 0};
            var t = this.r, n = this.g, r = this.b, i = Math.max(t, n, r), s = Math.min(t, n, r), o, u = (s + i) / 2;
            if (s === i) s = o = 0; else {
                var a = i - s, s = .5 >= u ? a / (i + s) : a / (2 - i - s);
                switch (i) {
                    case t:
                        o = (n - r) / a + (n < r ? 6 : 0);
                        break;
                    case n:
                        o = (r - t) / a + 2;
                        break;
                    case r:
                        o = (t - n) / a + 4
                }
                o /= 6
            }
            return e.h = o, e.s = s, e.l = u, e
        }, getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        }, offsetHSL: function (e, t, n) {
            var r = this.getHSL();
            return r.h += e, r.s += t, r.l += n, this.setHSL(r.h, r.s, r.l), this
        }, add: function (e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this
        }, addColors: function (e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
        }, addScalar: function (e) {
            return this.r += e, this.g += e, this.b += e, this
        }, sub: function (e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
        }, multiply: function (e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
        }, multiplyScalar: function (e) {
            return this.r *= e, this.g *= e, this.b *= e, this
        }, lerp: function (e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        }, equals: function (e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        }, fromArray: function (e, t) {
            return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
        }, toArray: function (e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
        }, toJSON: function () {
            return this.getHex()
        }
    }, e.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    var Vi = {
        common: {
            diffuse: {value: new U(15658734)},
            opacity: {value: 1},
            map: {value: null},
            offsetRepeat: {value: new i(0, 0, 1, 1)},
            specularMap: {value: null},
            alphaMap: {value: null},
            envMap: {value: null},
            flipEnvMap: {value: -1},
            reflectivity: {value: 1},
            refractionRatio: {value: .98}
        },
        aomap: {aoMap: {value: null}, aoMapIntensity: {value: 1}},
        lightmap: {lightMap: {value: null}, lightMapIntensity: {value: 1}},
        emissivemap: {emissiveMap: {value: null}},
        bumpmap: {bumpMap: {value: null}, bumpScale: {value: 1}},
        normalmap: {normalMap: {value: null}, normalScale: {value: new n(1, 1)}},
        displacementmap: {displacementMap: {value: null}, displacementScale: {value: 1}, displacementBias: {value: 0}},
        roughnessmap: {roughnessMap: {value: null}},
        metalnessmap: {metalnessMap: {value: null}},
        fog: {
            fogDensity: {value: 25e-5},
            fogNear: {value: 1},
            fogFar: {value: 2e3},
            fogColor: {value: new U(16777215)}
        },
        lights: {
            ambientLightColor: {value: []},
            directionalLights: {
                value: [],
                properties: {direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}}
            },
            directionalShadowMap: {value: []},
            directionalShadowMatrix: {value: []},
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {value: []},
            spotShadowMatrix: {value: []},
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {value: []},
            pointShadowMatrix: {value: []},
            hemisphereLights: {value: [], properties: {direction: {}, skyColor: {}, groundColor: {}}}
        },
        points: {
            diffuse: {value: new U(15658734)},
            opacity: {value: 1},
            size: {value: 1},
            scale: {value: 1},
            map: {value: null},
            offsetRepeat: {value: new i(0, 0, 1, 1)}
        }
    }, $i = {
        basic: {
            uniforms: e.UniformsUtils.merge([Vi.common, Vi.aomap, Vi.fog]),
            vertexShader: Xi.meshbasic_vert,
            fragmentShader: Xi.meshbasic_frag
        },
        lambert: {
            uniforms: e.UniformsUtils.merge([Vi.common, Vi.aomap, Vi.lightmap, Vi.emissivemap, Vi.fog, Vi.lights, {emissive: {value: new U(0)}}]),
            vertexShader: Xi.meshlambert_vert,
            fragmentShader: Xi.meshlambert_frag
        },
        phong: {
            uniforms: e.UniformsUtils.merge([Vi.common, Vi.aomap, Vi.lightmap, Vi.emissivemap, Vi.bumpmap, Vi.normalmap, Vi.displacementmap, Vi.fog, Vi.lights, {
                emissive: {value: new U(0)},
                specular: {value: new U(1118481)},
                shininess: {value: 30}
            }]), vertexShader: Xi.meshphong_vert, fragmentShader: Xi.meshphong_frag
        },
        standard: {
            uniforms: e.UniformsUtils.merge([Vi.common, Vi.aomap, Vi.lightmap, Vi.emissivemap, Vi.bumpmap, Vi.normalmap, Vi.displacementmap, Vi.roughnessmap, Vi.metalnessmap, Vi.fog, Vi.lights, {
                emissive: {value: new U(0)},
                roughness: {value: .5},
                metalness: {value: 0},
                envMapIntensity: {value: 1}
            }]), vertexShader: Xi.meshphysical_vert, fragmentShader: Xi.meshphysical_frag
        },
        points: {
            uniforms: e.UniformsUtils.merge([Vi.points, Vi.fog]),
            vertexShader: Xi.points_vert,
            fragmentShader: Xi.points_frag
        },
        dashed: {
            uniforms: e.UniformsUtils.merge([Vi.common, Vi.fog, {
                scale: {value: 1},
                dashSize: {value: 1},
                totalSize: {value: 2}
            }]), vertexShader: Xi.linedashed_vert, fragmentShader: Xi.linedashed_frag
        },
        depth: {
            uniforms: e.UniformsUtils.merge([Vi.common, Vi.displacementmap]),
            vertexShader: Xi.depth_vert,
            fragmentShader: Xi.depth_frag
        },
        normal: {uniforms: {opacity: {value: 1}}, vertexShader: Xi.normal_vert, fragmentShader: Xi.normal_frag},
        cube: {
            uniforms: {tCube: {value: null}, tFlip: {value: -1}, opacity: {value: 1}},
            vertexShader: Xi.cube_vert,
            fragmentShader: Xi.cube_frag
        },
        equirect: {
            uniforms: {tEquirect: {value: null}, tFlip: {value: -1}},
            vertexShader: Xi.equirect_vert,
            fragmentShader: Xi.equirect_frag
        },
        distanceRGBA: {
            uniforms: {lightPos: {value: new a}},
            vertexShader: Xi.distanceRGBA_vert,
            fragmentShader: Xi.distanceRGBA_frag
        }
    };
    $i.physical = {
        uniforms: e.UniformsUtils.merge([$i.standard.uniforms, {
            clearCoat: {value: 0},
            clearCoatRoughness: {value: 0}
        }]), vertexShader: Xi.meshphysical_vert, fragmentShader: Xi.meshphysical_frag
    }, z.prototype = {
        constructor: z, set: function (e, t) {
            return this.min.copy(e), this.max.copy(t), this
        }, setFromPoints: function (e) {
            this.makeEmpty();
            for (var t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]);
            return this
        }, setFromCenterAndSize: function () {
            var e = new n;
            return function (t, n) {
                var r = e.copy(n).multiplyScalar(.5);
                return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -Infinity, this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        }, getCenter: function (e) {
            return e = e || new n, this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }, getSize: function (e) {
            return e = e || new n, this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        }, expandByPoint: function (e) {
            return this.min.min(e), this.max.max(e), this
        }, expandByVector: function (e) {
            return this.min.sub(e), this.max.add(e), this
        }, expandByScalar: function (e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        }, containsPoint: function (e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
        }, containsBox: function (e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
        }, getParameter: function (e, t) {
            return (t || new n).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        }, intersectsBox: function (e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
        }, clampPoint: function (e, t) {
            return (t || new n).copy(e).clamp(this.min, this.max)
        }, distanceToPoint: function () {
            var e = new n;
            return function (t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(), intersect: function (e) {
            return this.min.max(e.min), this.max.min(e.max), this
        }, union: function (e) {
            return this.min.min(e.min), this.max.max(e.max), this
        }, translate: function (e) {
            return this.min.add(e), this.max.add(e), this
        }, equals: function (e) {
            return e.min.equals(this.min) && e.max.equals
                (this.max)
        }
    }, V.prototype = {
        constructor: V, isMaterial: !0, get needsUpdate() {
            return this._needsUpdate
        }, set needsUpdate(e) {
            !0 === e && this.update(), this._needsUpdate = e
        }, setValues: function (e) {
            if (void 0 !== e)for (var t in e) {
                var n = e[t];
                if (void 0 === n) console.warn("THREE.Material: '" + t + "' parameter is undefined."); else {
                    var r = this[t];
                    void 0 === r ? console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.") : r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = "overdraw" === t ? Number(n) : n
                }
            }
        }, toJSON: function (e) {
            function t(e) {
                var t = [], n;
                for (n in e) {
                    var r = e[n];
                    delete r.metadata, t.push(r)
                }
                return t
            }

            var n = void 0 === e;
            n && (e = {textures: {}, images: {}});
            var r = {metadata: {version: 4.4, type: "Material", generator: "Material.toJSON"}};
            return r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color && this.color.isColor && (r.color = this.color.getHex()), void 0 !== this.roughness && (r.roughness = this.roughness), void 0 !== this.metalness && (r.metalness = this.metalness), this.emissive && this.emissive.isColor && (r.emissive = this.emissive.getHex()), this.specular && this.specular.isColor && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), this.map && this.map.isTexture && (r.map = this.map.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (r.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (r.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap && this.bumpMap.isTexture && (r.bumpMap = this.bumpMap.toJSON(e).uuid, r.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (r.normalMap = this.normalMap.toJSON(e).uuid, r.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r.displacementMap = this.displacementMap.toJSON(e).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (r.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (r.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (r.envMap = this.envMap.toJSON(e).uuid, r.reflectivity = this.reflectivity), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (r.blending = this.blending), 2 !== this.shading && (r.shading = this.shading), 0 !== this.side && (r.side = this.side), 0 !== this.vertexColors && (r.vertexColors = this.vertexColors), 1 > this.opacity && (r.opacity = this.opacity), !0 === this.transparent && (r.transparent = this.transparent), r.depthFunc = this.depthFunc, r.depthTest = this.depthTest, r.depthWrite = this.depthWrite, 0 < this.alphaTest && (r.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (r.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (r.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (r.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (r.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (r.wireframeLinejoin = this.wireframeLinejoin), r.skinning = this.skinning, r.morphTargets = this.morphTargets, n && (n = t(e.textures), e = t(e.images), 0 < n.length && (r.textures = n), 0 < e.length && (r.images = e)), r
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.shading = e.shading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.overdraw = e.overdraw, this.visible = e.visible, this.clipShadows = e.clipShadows, e = e.clippingPlanes;
            var t = null;
            if (null !== e)for (var n = e.length, t = Array(n), r = 0; r !== n; ++r)t[r] = e[r].clone();
            return this.clippingPlanes = t, this
        }, update: function () {
            this.dispatchEvent({type: "update"})
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }, Object.assign(V.prototype, t.prototype);
    var Ji = 0;
    $.prototype = Object.create(V.prototype), $.prototype.constructor = $, $.prototype.isShaderMaterial = !0, $.prototype.copy = function (t) {
        return V.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = e.UniformsUtils.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, $.prototype.toJSON = function (e) {
        return e = V.prototype.toJSON.call(this, e), e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    }, J.prototype = Object.create(V.prototype), J.prototype.constructor = J, J.prototype.isMeshDepthMaterial = !0, J.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, K.prototype = {
        constructor: K, isBox3: !0, set: function (e, t) {
            return this.min.copy(e), this.max.copy(t), this
        }, setFromArray: function (e) {
            for (var t = Infinity, n = Infinity, r = Infinity, i = -Infinity, s = -Infinity, o = -Infinity, u = 0, a = e.length; u < a; u += 3) {
                var f = e[u], l = e[u + 1], c = e[u + 2];
                f < t && (t = f), l < n && (n = l), c < r && (r = c), f > i && (i = f), l > s && (s = l), c > o && (o = c)
            }
            this.min.set(t, n, r), this.max.set(i, s, o)
        }, setFromPoints: function (e) {
            this.makeEmpty();
            for (var t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]);
            return this
        }, setFromCenterAndSize: function () {
            var e = new a;
            return function (t, n) {
                var r = e.copy(n).multiplyScalar(.5);
                return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
            }
        }(), setFromObject: function () {
            var e = new a;
            return function (t) {
                var n = this;
                return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function (t) {
                    var r = t.geometry;
                    if (void 0 !== r)if (r && r.isGeometry)for (var r = r.vertices, i = 0, s = r.length; i < s; i++)e.copy(r[i]), e.applyMatrix4(t.matrixWorld), n.expandByPoint(e); else if (r && r.isBufferGeometry && (s = r.attributes.position, void 0 !== s)) {
                        var o;
                        s && s.isInterleavedBufferAttribute ? (r = s.data.array, i = s.offset, o = s.data.stride) : (r = s.array, i = 0, o = 3);
                        for (s = r.length; i < s; i += o)e.fromArray(r, i), e.applyMatrix4(t.matrixWorld), n.expandByPoint(e)
                    }
                }), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }, getCenter: function (e) {
            return e = e || new a, this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }, getSize: function (e) {
            return e = e || new a, this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        }, expandByPoint: function (e) {
            return this.min.min(e), this.max.max(e), this
        }, expandByVector: function (e) {
            return this.min.sub(e), this.max.add(e), this
        }, expandByScalar: function (e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        }, containsPoint: function (e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
        }, containsBox: function (e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
        }, getParameter: function (e, t) {
            return (t || new a).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        }, intersectsBox: function (e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
        }, intersectsSphere: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new a), this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
            }
        }(), intersectsPlane: function (e) {
            var t, n;
            return 0 < e.normal.x ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), 0 < e.normal.y ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), 0 < e.normal.z ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= e.constant && n >= e.constant
        }, clampPoint: function (e, t) {
            return (t || new a).copy(e).clamp(this.min, this.max)
        }, distanceToPoint: function () {
            var e = new a;
            return function (t) {
                return e.copy(t).clamp(this.min, this.max).sub(t).length()
            }
        }(), getBoundingSphere: function () {
            var e = new a;
            return function (t) {
                return t = t || new Q, this.getCenter(t.center), t.radius = .5 * this.size(e).length(), t
            }
        }(), intersect: function (e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        }, union: function (e) {
            return this.min.min(e.min), this.max.max(e.max), this
        }, applyMatrix4: function () {
            var e = [new a, new a, new a, new a, new a, new a, new a, new a];
            return function (t) {
                return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(e), this)
            }
        }(), translate: function (e) {
            return this.min.add(e), this.max.add(e), this
        }, equals: function (e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }, Q.prototype = {
        constructor: Q, set: function (e, t) {
            return this.center.copy(e), this.radius = t, this
        }, setFromPoints: function () {
            var e = new K;
            return function (t, n) {
                var r = this.center;
                void 0 !== n ? r.copy(n) : e.setFromPoints(t).getCenter(r);
                for (var i = 0, s = 0, o = t.length; s < o; s++)i = Math.max(i, r.distanceToSquared(t[s]));
                return this.radius = Math.sqrt(i), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        }, empty: function () {
            return 0 >= this.radius
        }, containsPoint: function (e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        }, distanceToPoint: function (e) {
            return e.distanceTo(this.center) - this.radius
        }, intersectsSphere: function (e) {
            var t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        }, intersectsBox: function (e) {
            return e.intersectsSphere(this)
        }, intersectsPlane: function (e) {
            return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
        }, clampPoint: function (e, t) {
            var n = this.center.distanceToSquared(e), r = t || new a;
            return r.copy(e), n > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
        }, getBoundingBox: function (e) {
            return e = e || new K, e.set(this.center, this.center), e.expandByScalar(this.radius), e
        }, applyMatrix4: function (e) {
            return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this
        }, translate: function (e) {
            return this.center.add(e), this
        }, equals: function (e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
    }, G.prototype = {
        constructor: G, isMatrix3: !0, set: function (e, t, n, r, i, s, o, u, a) {
            var f = this.elements;
            return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = i, f[5] = u, f[6] = n, f[7] = s, f[8] = a, this
        }, identity: function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }, clone: function () {
            return (new this.constructor).fromArray(this.elements)
        }, copy: function (e) {
            return e = e.elements, this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
        }, setFromMatrix4: function (e) {
            return e = e.elements, this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        }, applyToVector3Array: function () {
            var e;
            return function (t, n, r) {
                void 0 === e && (e = new a), void 0 === n && (n = 0), void 0 === r && (r = t.length);
                for (var i = 0; i < r; i += 3, n += 3)e.fromArray(t, n), e.applyMatrix3(this), e.toArray(t, n);
                return t
            }
        }(), applyToBuffer: function () {
            var e;
            return function (t, n, r) {
                void 0 === e && (e = new a), void 0 === n && (n = 0), void 0 === r && (r = t.length / t.itemSize);
                for (var i = 0; i < r; i++, n++)e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
                return t
            }
        }(), multiplyScalar: function (e) {
            var t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
        }, determinant: function () {
            var e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], s = e[4], o = e[5], u = e[6], a = e[7], e = e[8];
            return t * s * e - t * o * a - n * i * e + n * o * u + r * i * a - r * s * u
        }, getInverse: function (e, t) {
            e && e.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var n = e.elements, r = this.elements, i = n[0], s = n[1], o = n[2], u = n[3], a = n[4], f = n[5], l = n[6], c = n[7], n = n[8], h = n * a - f * c, p = f * l - n * u, d = c * u - a * l, v = i * h + s * p + o * d;
            if (0 === v) {
                if (!0 === t)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
                return console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"), this.identity()
            }
            return v = 1 / v, r[0] = h * v, r[1] = (o * c - n * s) * v, r[2] = (f * s - o * a) * v, r[3] = p * v, r[4] = (n * i - o * l) * v, r[5] = (o * u - f * i) * v, r[6] = d * v, r[7] = (s * l - c * i) * v, r[8] = (a * i - s * u) * v, this
        }, transpose: function () {
            var e, t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        }, flattenToArrayOffset: function (e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(e, t)
        }, getNormalMatrix: function (e) {
            return this.setFromMatrix4(e).getInverse(this).transpose()
        }, transposeIntoArray: function (e) {
            var t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        }, fromArray: function (e, t) {
            void 0 === t && (t = 0);
            for (var n = 0; 9 > n; n++)this.elements[n] = e[n + t];
            return this
        }, toArray: function (e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
        }
    }, Y.prototype = {
        constructor: Y, set: function (e, t) {
            return this.normal.copy(e), this.constant = t, this
        }, setComponents: function (e, t, n, r) {
            return this.normal.set(e, t, n), this.constant = r, this
        }, setFromNormalAndCoplanarPoint: function (e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
        }, setFromCoplanarPoints: function () {
            var e = new a, t = new a;
            return function (n, r, i) {
                return r = e.subVectors(i, r).cross(t.subVectors(n, r)).normalize(), this.setFromNormalAndCoplanarPoint(r, n), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        }, normalize: function () {
            var e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        }, negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        }, distanceToPoint: function (e) {
            return this.normal.dot(e) + this.constant
        }, distanceToSphere: function (e) {
            return this.distanceToPoint(e.center) - e.radius
        }, projectPoint: function (e, t) {
            return this.orthoPoint(e, t).sub(e).negate()
        }, orthoPoint: function (e, t) {
            var n = this.distanceToPoint(e);
            return (t || new a).copy(this.normal).multiplyScalar(n)
        }, intersectLine: function () {
            var e = new a;
            return function (t, n) {
                var r = n || new a, i = t.delta(e), s = this.normal.dot(i);
                if (0 !== s)return s = -(t.start.dot(this.normal) + this.constant) / s, 0 > s || 1 < s ? void 0 : r.copy(i).multiplyScalar(s).add(t.start);
                if (0 === this.distanceToPoint(t.start))return r.copy(t.start)
            }
        }(), intersectsLine: function (e) {
            var t = this.distanceToPoint(e.start);
            return e = this.distanceToPoint(e.end), 0 > t && 0 < e || 0 > e && 0 < t
        }, intersectsBox: function (e) {
            return e.intersectsPlane(this)
        }, intersectsSphere: function (e) {
            return e.intersectsPlane(this)
        }, coplanarPoint: function (e) {
            return (e || new a).copy(this.normal).multiplyScalar(-this.constant)
        }, applyMatrix4: function () {
            var e = new a, t = new G;
            return function (n, r) {
                var i = this.coplanarPoint(e).applyMatrix4(n), s = r || t.getNormalMatrix(n), s = this.normal.applyMatrix3(s).normalize();
                return this.constant = -i.dot(s), this
            }
        }(), translate: function (e) {
            return this.constant -= e.dot(this.normal), this
        }, equals: function (e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
    }, Z.prototype = {
        constructor: Z, set: function (e, t, n, r, i, s) {
            var o = this.planes;
            return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(s), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            for (var t = this.planes, n = 0; 6 > n; n++)t[n].copy(e.planes[n]);
            return this
        }, setFromMatrix: function (e) {
            var t = this.planes, n = e.elements;
            e = n[0];
            var r = n[1], i = n[2], s = n[3], o = n[4], u = n[5], a = n[6], f = n[7], l = n[8], c = n[9], h = n[10], p = n[11], d = n[12], v = n[13], m = n[14], n = n[15];
            return t[0].setComponents(s - e, f - o, p - l, n - d).normalize(), t[1].setComponents(s + e, f + o, p + l, n + d).normalize(), t[2].setComponents(s + r, f + u, p + c, n + v).normalize(), t[3].setComponents(s - r, f - u, p - c, n - v).normalize(), t[4].setComponents(s - i, f - a, p - h, n - m).normalize(), t[5].setComponents(s + i, f + a, p + h, n + m).normalize(), this
        }, intersectsObject: function () {
            var e = new Q;
            return function (t) {
                var n = t.geometry;
                return null === n.boundingSphere && n.computeBoundingSphere(), e.copy(n.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(), intersectsSprite: function () {
            var e = new Q;
            return function (t) {
                return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(), intersectsSphere: function (e) {
            var t = this.planes, n = e.center;
            e = -e.radius;
            for (var r = 0; 6 > r; r++)if (t[r].distanceToPoint(n) < e)return !1;
            return !0
        }, intersectsBox: function () {
            var e = new a, t = new a;
            return function (n) {
                for (var r = this.planes, i = 0; 6 > i; i++) {
                    var s = r[i];
                    e.x = 0 < s.normal.x ? n.min.x : n.max.x, t.x = 0 < s.normal.x ? n.max.x : n.min.x, e.y = 0 < s.normal.y ? n.min.y : n.max.y, t.y = 0 < s.normal.y ? n.max.y : n.min.y, e.z = 0 < s.normal.z ? n.min.z : n.max.z, t.z = 0 < s.normal.z ? n.max.z : n.min.z;
                    var o = s.distanceToPoint(e), s = s.distanceToPoint(t);
                    if (0 > o && 0 > s)return !1
                }
                return !0
            }
        }(), containsPoint: function (e) {
            for (var t = this.planes, n = 0; 6 > n; n++)if (0 > t[n].distanceToPoint(e))return !1;
            return !0
        }
    }, tt.prototype = {
        constructor: tt, set: function (e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        }, at: function (e, t) {
            return (t || new a).copy(this.direction).multiplyScalar(e).add(this.origin)
        }, lookAt: function (e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this
        }, recast: function () {
            var e = new a;
            return function (t) {
                return this.origin.copy(this.at(t, e)), this
            }
        }(), closestPointToPoint: function (e, t) {
            var n = t || new a;
            n.subVectors(e, this.origin);
            var r = n.dot(this.direction);
            return 0 > r ? n.copy(this.origin) : n.copy(this.direction).multiplyScalar(r).add(this.origin)
        }, distanceToPoint: function (e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        }, distanceSqToPoint: function () {
            var e = new a;
            return function (t) {
                var n = e.subVectors(t, this.origin).dot(this.direction);
                return 0 > n ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(n).add(this.origin), e.distanceToSquared(t))
            }
        }(), distanceSqToSegment: function () {
            var e = new a, t = new a, n = new a;
            return function (r, i, s, o) {
                e.copy(r).add(i).multiplyScalar(.5), t.copy(i).sub(r).normalize(), n.copy(this.origin).sub(e);
                var u = .5 * r.distanceTo(i), a = -this.direction.dot(t), f = n.dot(this.direction), l = -n.dot(t), c = n.lengthSq(), h = Math.abs(1 - a * a), p;
                return 0 < h ? (r = a * l - f, i = a * f - l, p = u * h, 0 <= r ? i >= -p ? i <= p ? (u = 1 / h, r *= u, i *= u, a = r * (r + a * i + 2 * f) + i * (a * r + i + 2 * l) + c) : (i = u, r = Math.max(0, -(a * i + f)), a = -r * r + i * (i + 2 * l) + c) : (i = -u, r = Math.max(0, -(a * i + f)), a = -r * r + i * (i + 2 * l) + c): i <= -p ? (r = Math.max(0, -(-a * u + f)), i = 0 < r ? -u : Math.min(Math.max(-u, -l), u), a = -r * r + i * (i + 2 * l) + c): i
                <=
                p ? (r = 0, i = Math.min(Math.max(-u, -l), u), a = i * (i + 2 * l) + c) : (r = Math.max(0, -(a * u + f)), i = 0 < r ? u : Math.min(Math.max(-u, -l), u), a = -r * r + i * (i + 2 * l) + c)
                ):
                (i = 0 < a ? -u : u, r = Math.max(0, -(a * i + f)), a = -r * r + i * (i + 2 * l) + c), s && s.copy(this.direction).multiplyScalar(r).add(this.origin), o && o.copy(t).multiplyScalar(i).add(e), a
            }
        }(), intersectSphere: function () {
            var e = new a;
            return function (t, n) {
                e.subVectors(t.center, this.origin);
                var r = e.dot(this.direction), i = e.dot(e) - r * r, s = t.radius * t.radius;
                return i > s ? null : (s = Math.sqrt(s - i), i = r - s, r += s, 0 > i && 0 > r ? null : 0 > i ? this.at(r, n) : this.at(i, n))
            }
        }(), intersectsSphere: function (e) {
            return this.distanceToPoint(e.center) <= e.radius
        }, distanceToPlane: function (e) {
            var t = e.normal.dot(this.direction);
            return 0 === t ? 0 === e.distanceToPoint(this.origin) ? 0 : null : (e = -(this.origin.dot(e.normal) + e.constant) / t, 0 <= e ? e : null)
        }, intersectPlane: function (e, t) {
            var n = this.distanceToPlane(e);
            return null === n ? null : this.at(n, t)
        }, intersectsPlane: function (e) {
            var t = e.distanceToPoint(this.origin);
            return 0 === t || 0 > e.normal.dot(this.direction) * t ? !0 : !1
        }, intersectBox: function (e, t) {
            var n, r, i, s, o;
            r = 1 / this.direction.x, s = 1 / this.direction.y, o = 1 / this.direction.z;
            var u = this.origin;
            0 <= r ? (n = (e.min.x - u.x) * r, r *= e.max.x - u.x) : (n = (e.max.x - u.x) * r, r *= e.min.x - u.x), 0 <= s ? (i = (e.min.y - u.y) * s, s *= e.max.y - u.y) : (i = (e.max.y - u.y) * s, s *= e.min.y - u.y);
            if (n > s || i > r)return null;
            if (i > n || n !== n) n = i;
            if (s < r || r !== r) r = s;
            0 <= o ? (i = (e.min.z - u.z) * o, o *= e.max.z - u.z) : (i = (e.max.z - u.z) * o, o *= e.min.z - u.z);
            if (n > o || i > r)return null;
            if (i > n || n !== n) n = i;
            if (o < r || r !== r) r = o;
            return 0 > r ? null : this.at(0 <= n ? n : r, t)
        }, intersectsBox: function () {
            var e = new a;
            return function (t) {
                return null !== this.intersectBox(t, e)
            }
        }(), intersectTriangle: function () {
            var e = new a, t = new a, n = new a, r = new a;
            return function (i, s, o, u, a) {
                t.subVectors(s, i), n.subVectors(o, i), r.crossVectors(t, n), s = this.direction.dot(r);
                if (0 < s) {
                    if (u)return null;
                    u = 1
                } else {
                    if (!(0 > s))return null;
                    u = -1, s = -s
                }
                return e.subVectors(this.origin, i), i = u * this.direction.dot(n.crossVectors(e, n)), 0 > i ? null : (o = u * this.direction.dot(t.cross(e)), 0 > o || i + o > s ? null : (i = -u * e.dot(r), 0 > i ? null : this.at(i / s, a)))
            }
        }(), applyMatrix4: function (e) {
            return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
        }, equals: function (e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
    }, nt.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "), nt.DefaultOrder = "XYZ", nt.prototype = {
        constructor: nt,
        isEuler: !0,
        get x() {
            return this._x
        },
        set x(e) {
            this._x = e, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(e) {
            this._y = e, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(e) {
            this._z = e, this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(e) {
            this._order = e, this.onChangeCallback()
        },
        set: function (e, t, n, r) {
            return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function (e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t, n, r) {
            var i = e.Math.clamp, s = t.elements;
            t = s[0];
            var o = s[4], u = s[8], a = s[1], f = s[5], l = s[9], c = s[2], h = s[6], s = s[10];
            return n = n || this._order, "XYZ" === n ? (this._y = Math.asin(i(u, -1, 1)), .99999 > Math.abs(u) ? (this._x = Math.atan2(-l, s), this._z = Math.atan2(-o, t)) : (this._x = Math.atan2(h, f), this._z = 0)) : "YXZ" === n ? (this._x = Math.asin(-i(l, -1, 1)), .99999 > Math.abs(l) ? (this._y = Math.atan2(u, s), this._z = Math.atan2(a, f)) : (this._y = Math.atan2(-c, t), this._z = 0)) : "ZXY" === n ? (this._x = Math.asin(i(h, -1, 1)), .99999 > Math.abs(h) ? (this._y = Math.atan2(-c, s), this._z = Math.atan2(-o, f)) : (this._y = 0, this._z = Math.atan2(a, t))) : "ZYX" === n ? (this._y = Math.asin(-i(c, -1, 1)), .99999 > Math.abs(c) ? (this._x = Math.atan2(h, s), this._z = Math.atan2(a, t)) : (this._x = 0, this._z = Math.atan2(-o, f))) : "YZX" === n ? (this._z = Math.asin(i(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(-l, f), this._y = Math.atan2(-c, t)) : (this._x = 0, this._y = Math.atan2(u, s))) : "XZY" === n ? (this._z = Math.asin(-i(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(h, f), this._y = Math.atan2(u, t)) : (this._x = Math.atan2(-l, s), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + n), this._order = n, !1 !== r && this.onChangeCallback(), this
        },
        setFromQuaternion: function () {
            var e;
            return function (t, n, r) {
                return void 0 === e && (e = new f), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, n, r)
            }
        }(),
        setFromVector3: function (e, t) {
            return this.set(e.x, e.y, e.z, t || this._order)
        },
        reorder: function () {
            var e = new u;
            return function (t) {
                return e.setFromEuler(this), this.setFromQuaternion(e, t)
            }
        }(),
        equals: function (e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        },
        fromArray: function (e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
        },
        toArray: function (e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
        },
        toVector3: function (e) {
            return e ? e.set(this._x, this._y, this._z) : new a(this._x, this._y, this._z)
        },
        onChange: function (e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function () {
        }
    }, rt.prototype = {
        constructor: rt, set: function (e) {
            this.mask = 1 << e
        }, enable: function (e) {
            this.mask |= 1 << e
        }, toggle: function (e) {
            this.mask ^= 1 << e
        }, disable: function (e) {
            this.mask &= ~(1 << e)
        }, test: function (e) {
            return 0 !== (this.mask & e.mask)
        }
    }, it.DefaultUp = new a(0, 1, 0), it.DefaultMatrixAutoUpdate = !0, Object.assign(it.prototype, t.prototype, {
        isObject3D: !0,
        applyMatrix: function (e) {
            this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function (e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        },
        setRotationFromEuler: function (e) {
            this.quaternion.setFromEuler(e, !0)
        },
        setRotationFromMatrix: function (e) {
            this.quaternion.setFromRotationMatrix(e)
        },
        setRotationFromQuaternion: function (e) {
            this.quaternion.copy(e)
        },
        rotateOnAxis: function () {
            var e = new u;
            return function (t, n) {
                return e.setFromAxisAngle(t, n), this.quaternion.multiply(e), this
            }
        }(),
        rotateX: function () {
            var e = new a(1, 0, 0);
            return function (t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateY: function () {
            var e = new a(0, 1, 0);
            return function (t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateZ: function () {
            var e = new a(0, 0, 1);
            return function (t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        translateOnAxis: function () {
            var e = new a;
            return function (t, n) {
                return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(n)), this
            }
        }(),
        translateX: function () {
            var e = new a(1, 0, 0);
            return function (t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateY: function () {
            var e = new a(0, 1, 0);
            return function (t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateZ: function () {
            var e = new a(0, 0, 1);
            return function (t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        localToWorld: function (e) {
            return e.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function () {
            var e = new f;
            return function (t) {
                return t.applyMatrix4(e.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function () {
            var e = new f;
            return function (t) {
                e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
            }
        }(),
        add: function (e) {
            if (1 < arguments.length) {
                for (var t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({type: "added"}), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        },
        remove: function (e) {
            if (1 < arguments.length)for (var t = 0; t < arguments.length; t++)this.remove(arguments[t]);
            t = this.children.indexOf(e), -1 !== t && (e.parent = null, e.dispatchEvent({type: "removed"}), this.children.splice(t, 1))
        },
        getObjectById: function (e) {
            return this.getObjectByProperty("id", e)
        },
        getObjectByName: function (e) {
            return this.getObjectByProperty("name", e)
        },
        getObjectByProperty: function (e, t) {
            if (this[e] === t)return this;
            for (var n = 0, r = this.children.length; n < r; n++) {
                var i = this.children[n].getObjectByProperty(e, t);
                if (void 0 !== i)return i
            }
        },
        getWorldPosition: function (e) {
            return e = e || new a, this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function () {
            var e = new a, t = new a;
            return function (n) {
                return n = n || new u, this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, n, t), n
            }
        }(),
        getWorldRotation: function () {
            var e = new u;
            return function (t) {
                return t = t || new nt, this.getWorldQuaternion(e), t.setFromQuaternion(e, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function () {
            var e = new a, t = new u;
            return function (n) {
                return n = n || new a, this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, n), n
            }
        }(),
        getWorldDirection: function () {
            var e = new u;
            return function (t) {
                return t = t || new a, this.getWorldQuaternion(e), t.set(0, 0, 1).applyQuaternion(e)
            }
        }(),
        raycast: function () {
        },
        traverse: function (e) {
            e(this);
            for (var t = this.children, n = 0, r = t.length; n < r; n++)t[n].traverse(e)
        },
        traverseVisible: function (e) {
            if (!1 !== this.visible) {
                e(this);
                for (var t = this.children, n = 0, r = t.length; n < r; n++)t[n].traverseVisible(e)
            }
        },
        traverseAncestors: function (e) {
            var t = this.parent;
            null !== t && (e(t), t.traverseAncestors(e))
        },
        updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (e) {
            !0 === this.matrixAutoUpdate && this.updateMatrix();
            if (!0 === this.matrixWorldNeedsUpdate || !0 === e) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0;
            for (var t = this.children, n = 0, r = t.length; n < r; n++)t[n].updateMatrixWorld(e)
        },
        toJSON: function (e) {
            function t(e) {
                var t = [], n;
                for (n in e) {
                    var r = e[n];
                    delete r.metadata, t.push(r)
                }
                return t
            }

            var n = void 0 === e || "" === e, r = {};
            n && (e = {geometries: {}, materials: {}, textures: {}, images: {}}, r.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var i = {};
            i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), i.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), i.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), i.material = this.material.uuid);
            if (0 < this.children.length) {
                i.children = [];
                for (var s = 0; s < this.children.length; s++)i.children.push(this.children[s].toJSON(e).object)
            }
            if (n) {
                var n = t(e.geometries), s = t(e.materials), o = t(e.textures);
                e = t(e.images), 0 < n.length && (r.geometries = n), 0 < s.length && (r.materials = s), 0 < o.length && (r.textures = o), 0 < e.length && (r.images = e)
            }
            return r.object = i, r
        },
        clone: function (e) {
            return (new this.constructor).copy(this, e)
        },
        copy: function (e, t) {
            void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData));
            if (!0 === t)for (var n = 0; n < e.children.length; n++)this.add(e.children[n].clone());
            return this
        }
    });
    var Ki = 0;
    st.prototype = {
        constructor: st, set: function (e, t) {
            return this.start.copy(e), this.end.copy(t), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.start.copy(e.start), this.end.copy(e.end), this
        }, getCenter: function (e) {
            return (e || new a).addVectors(this.start, this.end).multiplyScalar(.5)
        }, delta: function (e) {
            return (e || new a).subVectors(this.end, this.start)
        }, distanceSq: function () {
            return this.start.distanceToSquared(this.end)
        }, distance: function () {
            return this.start.distanceTo(this.end)
        }, at: function (e, t) {
            var n = t || new a;
            return this.delta(n).multiplyScalar(e).add(this.start)
        }, closestPointToPointParameter: function () {
            var t = new a, n = new a;
            return function (r, i) {
                t.subVectors(r, this.start), n.subVectors(this.end, this.start);
                var s = n.dot(n), s = n.dot(t) / s;
                return i && (s = e.Math.clamp(s, 0, 1)), s
            }
        }(), closestPointToPoint: function (e, t, n) {
            return e = this.closestPointToPointParameter(e, t), n = n || new a, this.delta(n).multiplyScalar(e).add(this.start)
        }, applyMatrix4: function (e) {
            return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
        }, equals: function (e) {
            return e.start.equals(this.start) && e.end.equals(this.end)
        }
    }, ot.normal = function () {
        var e = new a;
        return function (t, n, r, i) {
            return i = i || new a, i.subVectors(r, n), e.subVectors(t, n), i.cross(e), t = i.lengthSq(), 0 < t ? i.multiplyScalar(1 / Math.sqrt(t)) : i.set(0, 0, 0)
        }
    }(), ot.barycoordFromPoint = function () {
        var e = new a, t = new a, n = new a;
        return function (r, i, s, o, u) {
            e.subVectors(o, i), t.subVectors(s, i), n.subVectors(r, i), r = e.dot(e), i = e.dot(t), s = e.dot(n);
            var f = t.dot(t);
            o = t.dot(n);
            var l = r * f - i * i;
            return u = u || new a, 0 === l ? u.set(-2, -1, -1) : (l = 1 / l, f = (f * s - i * o) * l, r = (r * o - i * s) * l, u.set(1 - f - r, r, f))
        }
    }(), ot.containsPoint = function () {
        var e = new a;
        return function (t, n, r, i) {
            return t = ot.barycoordFromPoint(t, n, r, i, e), 0 <= t.x && 0 <= t.y && 1 >= t.x + t.y
        }
    }(), ot.prototype = {
        constructor: ot, set: function (e, t, n) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
        }, setFromPointsAndIndices: function (e, t, n, r) {
            return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        }, area: function () {
            var e = new a, t = new a;
            return function () {
                return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
            }
        }(), midpoint: function (e) {
            return (e || new a).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }, normal: function (e) {
            return ot.normal(this.a, this.b, this.c, e)
        }, plane: function (e) {
            return (e || new Y).setFromCoplanarPoints(this.a, this.b, this.c)
        }, barycoordFromPoint: function (e, t) {
            return ot.barycoordFromPoint(e, this.a, this.b, this.c, t)
        }, containsPoint: function (e) {
            return ot.containsPoint(e, this.a, this.b, this.c)
        }, closestPointToPoint: function () {
            var e, t, n, r;
            return function (i, s) {
                void 0 === e && (e = new Y, t = [new st, new st, new st], n = new a, r = new a);
                var o = s || new a, u = Infinity;
                e.setFromCoplanarPoints(this.a, this.b, this.c), e.projectPoint(i, n);
                if (!0 === this.containsPoint(n)) o.copy(n); else {
                    t[0].set(this.a, this.b), t[1].set(this.b, this.c), t[2].set(this.c, this.a);
                    for (var f = 0; f < t.length; f++) {
                        t[f].closestPointToPoint(n, !0, r);
                        var l = n.distanceToSquared(r);
                        l < u && (u = l, o.copy(r))
                    }
                }
                return o
            }
        }(), equals: function (e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }, ut.prototype = {
        constructor: ut, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
            for (var t = 0, n = e.vertexNormals.length; t < n; t++)this.vertexNormals[t] = e.vertexNormals[t].clone();
            t = 0;
            for (n = e.vertexColors.length; t < n; t++)this.vertexColors[t] = e.vertexColors[t].clone();
            return this
        }
    }, at.prototype = Object.create(V.prototype), at.prototype.constructor = at, at.prototype.isMeshBasicMaterial = !0, at.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
    }, ft.prototype = {
        constructor: ft, isBufferAttribute: !0, set needsUpdate(e) {
            !0 === e && this.version++
        }, setDynamic: function (e) {
            return this.dynamic = e, this
        }, copy: function (e) {
            return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.dynamic = e.dynamic, this
        }, copyAt: function (e, t, n) {
            e *= this.itemSize, n *= t.itemSize;
            for (var r = 0, i = this.itemSize; r < i; r++)this.array[e + r] = t.array[n + r];
            return this
        }, copyArray: function (e) {
            return this.array.set(e), this
        }, copyColorsArray: function (e) {
            for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                void 0 === s && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), s = new U), t[n++] = s.r, t[n++] = s.g, t[n++] = s.b
            }
            return this
        }, copyIndicesArray: function (e) {
            for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                t[n++] = s.a, t[n++] = s.b, t[n++] = s.c
            }
            return this
        }, copyVector2sArray: function (e) {
            for (var t = this.array, r = 0, i = 0, s = e.length; i < s; i++) {
                var o = e[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new n), t[r++] = o.x, t[r++] = o.y
            }
            return this
        }, copyVector3sArray: function (e) {
            for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
                var s = e[r];
                void 0 === s && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), s = new a), t[n++] = s.x, t[n++] = s.y, t[n++] = s.z
            }
            return this
        }, copyVector4sArray: function (e) {
            for (var t = this.array, n = 0, r = 0, s = e.length; r < s; r++) {
                var o = e[r];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), o = new i), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w
            }
            return this
        }, set: function (e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        }, getX: function (e) {
            return this.array[e * this.itemSize]
        }, setX: function (e, t) {
            return this.array[e * this.itemSize] = t, this
        }, getY: function (e) {
            return this.array[e * this.itemSize + 1]
        }, setY: function (e, t) {
            return this.array[e * this.itemSize + 1] = t, this
        }, getZ: function (e) {
            return this.array[e * this.itemSize + 2]
        }, setZ: function (e, t) {
            return this.array[e * this.itemSize + 2] = t, this
        }, getW: function (e) {
            return this.array[e * this.itemSize + 3]
        }, setW: function (e, t) {
            return this.array[e * this.itemSize + 3] = t, this
        }, setXY: function (e, t, n) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
        }, setXYZ: function (e, t, n, r) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
        }, setXYZW: function (e, t, n, r, i) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }
    }, Object.assign(pt.prototype, t.prototype, {
        isGeometry: !0, applyMatrix: function (e) {
            for (var t = (new G).getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++)this.vertices[n].applyMatrix4(e);
            n = 0;
            for (r = this.faces.length; n < r; n++) {
                e = this.faces[n], e.normal.applyMatrix3(t).normalize();
                for (var i = 0, s = e.vertexNormals.length; i < s; i++)e.vertexNormals[i].applyMatrix3(t).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0, this
        }, rotateX: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(), rotateY: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(), rotateZ: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(), translate: function () {
            var e;
            return function (t, n, r) {
                return void 0 === e && (e = new f), e.makeTranslation(t, n, r), this.applyMatrix(e), this
            }
        }(), scale: function () {
            var e;
            return function (t, n, r) {
                return void 0 === e && (e = new f), e.makeScale(t, n, r), this.applyMatrix(e), this
            }
        }(), lookAt: function () {
            var e;
            return function (t) {
                void 0 === e && (e = new it), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(), fromBufferGeometry: function (e) {
            function t(e, t, n, i) {
                var s = void 0 !== u ? [h[e].clone(), h[t].clone(), h[n].clone()] : [], o = void 0 !== f ? [r.colors[e].clone(), r.colors[t].clone(), r.colors[n].clone()] : [];
                i = new ut(e, t, n, s, o, i), r.faces.push(i), void 0 !== l && r.faceVertexUvs[0].push([p[e].clone(), p[t].clone(), p[n].clone()]), void 0 !== c && r.faceVertexUvs[1].push([d[e].clone(), d[t].clone(), d[n].clone()])
            }

            var r = this, i = null !== e.index ? e.index.array : void 0, s = e.attributes, o = s.position.array, u = void 0 !== s.normal ? s.normal.array : void 0, f = void 0 !== s.color ? s.color.array : void 0, l = void 0 !== s.uv ? s.uv.array : void 0, c = void 0 !== s.uv2 ? s.uv2.array : void 0;
            void 0 !== c && (this.faceVertexUvs[1] = []);
            for (var h = [], p = [], d = [], v = s = 0; s < o.length; s += 3, v += 2)r.vertices.push(new a(o[s], o[s + 1], o[s + 2])), void 0 !== u && h.push(new a(u[s], u[s + 1], u[s + 2])), void 0 !== f && r.colors.push(new U(f[s], f[s + 1], f[s + 2])), void 0 !== l && p.push(new n(l[v], l[v + 1])), void 0 !== c && d.push(new n(c[v], c[v + 1]));
            if (void 0 !== i)if (o = e.groups, 0 < o.length)for (s = 0; s < o.length; s++)for (var m = o[s], g = m.start, y = m.count, v = g, g = g + y; v < g; v += 3)t(i[v], i[v + 1], i[v + 2], m.materialIndex); else for (s = 0; s < i.length; s += 3)t(i[s], i[s + 1], i[s + 2]); else for (s = 0; s < o.length / 3; s += 3)t(s, s + 1, s + 2);
            return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
        }, center: function () {
            this.computeBoundingBox();
            var e = this.boundingBox.getCenter().negate();
            return this.translate(e.x, e.y, e.z), e
        }, normalize: function () {
            this.computeBoundingSphere();
            var e = this.boundingSphere.center, t = this.boundingSphere.radius, t = 0 === t ? 1 : 1 / t, n = new f;
            return n.set(t, 0, 0, -t * e.x, 0, t, 0, -t * e.y, 0, 0, t, -t * e.z, 0, 0, 0, 1), this.applyMatrix(n), this
        }, computeFaceNormals: function () {
            for (var e = new a, t = new a, n = 0, r = this.faces.length; n < r; n++) {
                var i = this.faces[n], s = this.vertices[i.a], o = this.vertices[i.b];
                e.subVectors(this.vertices[i.c], o), t.subVectors(s, o), e.cross(t), e.normalize(), i.normal.copy(e)
            }
        }, computeVertexNormals: function (e) {
            void 0 === e && (e = !0);
            var t, n, r;
            r = Array(this.vertices.length), t = 0;
            for (n = this.vertices.length; t < n; t++)r[t] = new a;
            if (e) {
                var i, s, o, u = new a, f = new a;
                e = 0;
                for (t = this.faces.length; e < t; e++)n = this.faces[e], i = this.vertices[n.a], s = this.vertices[n.b], o = this.vertices[n.c], u.subVectors(o, s), f.subVectors(i, s), u.cross(f), r[n.a].add(u), r[n.b].add(u), r[n.c].add(u)
            } else for (e = 0, t = this.faces.length; e < t; e++)n = this.faces[e], r[n.a].add(n.normal), r[n.b].add(n.normal), r[n.c].add(n.normal);
            t = 0;
            for (n = this.vertices.length; t < n; t++)r[t].normalize();
            e = 0;
            for (t = this.faces.length; e < t; e++)n = this.faces[e], i = n.vertexNormals, 3 === i.length ? (i[0].copy(r[n.a]), i[1].copy(r[n.b]), i[2].copy(r[n.c])) : (i[0] = r[n.a].clone(), i[1] = r[n.b].clone(), i[2] = r[n.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        }, computeMorphNormals: function () {
            var e, t, n, r, i;
            n = 0;
            for (r = this.faces.length; n < r; n++)for (i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; e < t; e++)i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
            var s = new pt;
            s.faces = this.faces, e = 0;
            for (t = this.morphTargets.length; e < t; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [], i = this.morphNormals[e].faceNormals;
                    var o = this.morphNormals[e].vertexNormals, u, f;
                    n = 0;
                    for (r = this.faces.length; n < r; n++)u = new a, f = {
                        a: new a,
                        b: new a,
                        c: new a
                    }, i.push(u), o.push(f)
                }
                o = this.morphNormals[e], s.vertices = this.morphTargets[e].vertices, s.computeFaceNormals(), s.computeVertexNormals(), n = 0;
                for (r = this.faces.length; n < r; n++)i = this.faces[n], u = o.faceNormals[n], f = o.vertexNormals[n], u.copy(i.normal), f.a.copy(i.vertexNormals[0]), f.b.copy(i.vertexNormals[1]), f.c.copy(i.vertexNormals[2])
            }
            n = 0;
            for (r = this.faces.length; n < r; n++)i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
        }, computeTangents: function () {
            console.warn("THREE.Geometry: .computeTangents() has been removed.")
        }, computeLineDistances: function () {
            for (var e = 0, t = this.vertices, n = 0, r = t.length; n < r; n++)0 < n && (e += t[n].distanceTo(t[n - 1])), this.lineDistances[n] = e
        }, computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new K), this.boundingBox.setFromPoints(this.vertices)
        }, computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new Q), this.boundingSphere.setFromPoints(this.vertices)
        }, merge: function (e, t, n) {
            if (!1 === (e && e.isGeometry)) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e); else {
                var r, i = this.vertices.length, s = this.vertices, o = e.vertices, u = this.faces, a = e.faces, f = this.faceVertexUvs[0], l = e.faceVertexUvs[0], c = this.colors, h = e.colors;
                void 0 === n && (n = 0), void 0 !== t && (r = (new G).getNormalMatrix(t)), e = 0;
                for (var p = o.length; e < p; e++) {
                    var d = o[e].clone();
                    void 0 !== t && d.applyMatrix4(t), s.push(d)
                }
                e = 0;
                for (p = h.length; e < p; e++)c.push(h[e].clone());
                e = 0;
                for (p = a.length; e < p; e++) {
                    var o = a[e], v = o.vertexNormals, h = o.vertexColors, c = new ut(o.a + i, o.b + i, o.c + i);
                    c.normal.copy(o.normal), void 0 !== r && c.normal.applyMatrix3(r).normalize(), t = 0;
                    for (s = v.length; t < s; t++)d = v[t].clone(), void 0 !== r && d.applyMatrix3(r).normalize(), c.vertexNormals.push(d);
                    c.color.copy(o.color), t = 0;
                    for (s = h.length; t < s; t++)d = h[t], c.vertexColors.push(d.clone());
                    c.materialIndex = o.materialIndex + n, u.push(c)
                }
                e = 0;
                for (p = l.length; e < p; e++)if (n = l[e], r = [], void 0 !== n) {
                    t = 0;
                    for (s = n.length; t < s; t++)r.push(n[t].clone());
                    f.push(r)
                }
            }
        }, mergeMesh: function (e) {
            !1 === (e && e.isMesh) ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix))
        }, mergeVertices: function () {
            var e = {}, t = [], n = [], r, i = Math.pow(10, 4), s, o;
            s = 0;
            for (o = this.vertices.length; s < o; s++)r = this.vertices[s], r = Math.round(r.x * i) + "_" + Math.round(r.y * i) + "_" + Math.round(r.z * i), void 0 === e[r] ? (e[r] = s, t.push(this.vertices[s]), n[s] = t.length - 1) : n[s] = n[e[r]];
            e = [], s = 0;
            for (o = this.faces.length; s < o; s++)for (i = this.faces[s], i.a = n[i.a], i.b = n[i.b], i.c = n[i.c], i = [i.a, i.b, i.c], r = 0; 3 > r; r++)if (i[r] === i[(r + 1) % 3]) {
                e.push(s);
                break
            }
            for (s = e.length - 1; 0 <= s; s--)for (i = e[s], this.faces.splice(i, 1), n = 0, o = this.faceVertexUvs.length; n < o; n++)this.faceVertexUvs[n].splice(i, 1);
            return s = this.vertices.length - t.length, this.vertices = t, s
        }, sortFacesByMaterialIndex: function () {
            for (var e = this.faces, t = e.length, n = 0; n < t; n++)e[n]._id = n;
            e.sort(function (e, t) {
                return e.materialIndex - t.materialIndex
            });
            var r = this.faceVertexUvs[0], i = this.faceVertexUvs[1], s, o;
            r && r.length === t && (s = []), i && i.length === t && (o = []);
            for (n = 0; n < t; n++) {
                var u = e[n]._id;
                s && s.push(r[u]), o && o.push(i[u])
            }
            s && (this.faceVertexUvs[0] = s), o && (this.faceVertexUvs[1] = o)
        }, toJSON: function () {
            function e(e, t, n) {
                return n ? e | 1 << t : e & ~(1 << t)
            }

            function t(e) {
                var t = e.x.toString() + e.y.toString() + e.z.toString();
                return void 0 !== f[t] ? f[t] : (f[t] = a.length / 3, a.push(e.x, e.y, e.z), f[t])
            }

            function n(e) {
                var t = e.r.toString() + e.g.toString() + e.b.toString();
                return void 0 !== c[t] ? c[t] : (c[t] = l.length, l.push(e.getHex()), c[t])
            }

            function r(e) {
                var t = e.x.toString() + e.y.toString();
                return void 0 !== p[t] ? p[t] : (p[t] = h.length / 2, h.push(e.x, e.y), p[t])
            }

            var i = {metadata: {version: 4.4, type: "Geometry", generator: "Geometry.toJSON"}};
            i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name);
            if (void 0 !== this.parameters) {
                var s = this.parameters, o;
                for (o in s)void 0 !== s[o] && (i[o] = s[o]);
                return i
            }
            s = [];
            for (o = 0; o < this.vertices.length; o++) {
                var u = this.vertices[o];
                s.push(u.x, u.y, u.z)
            }
            var u = [], a = [], f = {}, l = [], c = {}, h = [], p = {};
            for (o = 0; o < this.faces.length; o++) {
                var d = this.faces[o], v = void 0 !== this.faceVertexUvs[0][o], m = 0 < d.normal.length(), g = 0 < d.vertexNormals.length, y = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b, b = 0 < d.vertexColors.length, w = 0, w = e(w, 0, 0), w = e(w, 1, !0), w = e(w, 2, !1), w = e(w, 3, v), w = e(w, 4, m), w = e(w, 5, g), w = e(w, 6, y), w = e(w, 7, b);
                u.push(w), u.push(d.a, d.b, d.c), u.push(d.materialIndex), v && (v = this.faceVertexUvs[0][o], u.push(r(v[0]), r(v[1]), r(v[2]))), m && u.push(t(d.normal)), g && (m = d.vertexNormals, u.push(t(m[0]), t(m[1]), t(m[2]))), y && u.push(n(d.color)), b && (d = d.vertexColors, u.push(n(d[0]), n(d[1]), n(d[2])))
            }
            return i.data = {}, i.data.vertices = s, i.data.normals = a, 0 < l.length && (i.data.colors = l), 0 < h.length && (i.data.uvs = [h]), i.data.faces = u, i
        }, clone: function () {
            return (new pt).copy(this)
        }, copy: function (e) {
            this.vertices = [], this.faces = [], this.faceVertexUvs = [[]], this.colors = [];
            for (var t = e.vertices, n = 0, r = t.length; n < r; n++)this.vertices.push(t[n].clone());
            t = e.colors, n = 0;
            for (r = t.length; n < r; n++)this.colors.push(t[n].clone());
            t = e.faces, n = 0;
            for (r = t.length; n < r; n++)this.faces.push(t[n].clone());
            n = 0;
            for (r = e.faceVertexUvs.length; n < r; n++) {
                t = e.faceVertexUvs[n], void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []);
                for (var i = 0, s = t.length; i < s; i++) {
                    for (var o = t[i], u = [], a = 0, f = o.length; a < f; a++)u.push(o[a].clone());
                    this.faceVertexUvs[n].push(u)
                }
            }
            return this
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    });
    var Qi = 0;
    Object.assign(dt.prototype, t.prototype, {
        computeBoundingBox: pt.prototype.computeBoundingBox,
        computeBoundingSphere: pt.prototype.computeBoundingSphere,
        computeFaceNormals: function () {
            console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
        },
        computeVertexNormals: function () {
            console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
        },
        computeGroups: function (e) {
            var t, n = [], r;
            e = e.faces;
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.materialIndex !== r && (r = s.materialIndex, void 0 !== t && (t.count = 3 * i - t.start, n.push(t)), t = {
                    start: 3 * i,
                    materialIndex: r
                })
            }
            void 0 !== t && (t.count = 3 * i - t.start, n.push(t)), this.groups = n
        },
        fromGeometry: function (e) {
            var t = e.faces, r = e.vertices, i = e.faceVertexUvs, s = i[0] && 0 < i[0].length, o = i[1] && 0 < i[1].length, u = e.morphTargets, a = u.length, f;
            if (0 < a) {
                f = [];
                for (var l = 0; l < a; l++)f[l] = [];
                this.morphTargets.position = f
            }
            var c = e.morphNormals, h = c.length, p;
            if (0 < h) {
                p = [];
                for (l = 0; l < h; l++)p[l] = [];
                this.morphTargets.normal = p
            }
            for (var d = e.skinIndices, v = e.skinWeights, m = d.length === r.length, g = v.length === r.length, l = 0; l < t.length; l++) {
                var y = t[l];
                this.vertices.push(r[y.a], r[y.b], r[y.c]);
                var b = y.vertexNormals;
                3 === b.length ? this.normals.push(b[0], b[1], b[2]) : (b = y.normal, this.normals.push(b, b, b)), b = y.vertexColors, 3 === b.length ? this.colors.push(b[0], b[1], b[2]) : (b = y.color, this.colors.push(b, b, b)), !0 === s && (b = i[0][l], void 0 !== b ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new n, new n, new n))), !0 === o && (b = i[1][l], void 0 !== b ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new n, new n, new n)));
                for (b = 0; b < a; b++) {
                    var w = u[b].vertices;
                    f[b].push(w[y.a], w[y.b], w[y.c])
                }
                for (b = 0; b < h; b++)w = c[b].vertexNormals[l], p[b].push(w.a, w.b, w.c);
                m && this.skinIndices.push(d[y.a], d[y.b], d[y.c]), g && this.skinWeights.push(v[y.a], v[y.b], v[y.c])
            }
            return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }), Object.assign(vt.prototype, t.prototype, {
        isBufferGeometry: !0, getIndex: function () {
            return this.index
        }, setIndex: function (e) {
            this.index = e
        }, addAttribute: function (e, t, n) {
            if (!1 === (t && t.isBufferAttribute) && !1 === (t && t.isInterleavedBufferAttribute)) console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new ft(t, n)); else {
                if ("index" !== e)return this.attributes[e] = t, this;
                console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t)
            }
        }, getAttribute: function (e) {
            return this.attributes[e]
        }, removeAttribute: function (e) {
            return delete this.attributes[e], this
        }, addGroup: function (e, t, n) {
            this.groups.push({start: e, count: t, materialIndex: void 0 !== n ? n : 0})
        }, clearGroups: function () {
            this.groups = []
        }, setDrawRange: function (e, t) {
            this.drawRange.start = e, this.drawRange.count = t
        }, applyMatrix: function (e) {
            var t = this.attributes.position;
            return void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0), t = this.attributes.normal, void 0 !== t && ((new G).getNormalMatrix(e).applyToVector3Array(t.array), t.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        }, rotateX: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(), rotateY: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(), rotateZ: function () {
            var e;
            return function (t) {
                return void 0 === e && (e = new f), e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(), translate: function () {
            var e;
            return function (t, n, r) {
                return void 0 === e && (e = new f), e.makeTranslation(t, n, r), this.applyMatrix(e), this
            }
        }(), scale: function () {
            var e;
            return function (t, n, r) {
                return void 0 === e && (e = new f), e.makeScale(t, n, r), this.applyMatrix(e), this
            }
        }(), lookAt: function () {
            var e;
            return function (t) {
                void 0 === e && (e = new it), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(), center: function () {
            this.computeBoundingBox();
            var e = this.boundingBox.getCenter().negate();
            return this.translate(e.x, e.y, e.z), e
        }, setFromObject: function (e) {
            var t = e.geometry;
            if (e && e.isPoints || e && e.isLine) {
                e = new ht(3 * t.vertices.length, 3);
                var n = new ht(3 * t.colors.length, 3);
                this.addAttribute("position", e.copyVector3sArray(t.vertices)), this.addAttribute("color", n.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length && (e = new ht(t.lineDistances.length, 1), this.addAttribute("lineDistance", e.copyArray(t.lineDistances))), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
            } else e && e.isMesh && t && t.isGeometry && this.fromGeometry(t);
            return this
        }, updateFromObject: function (e) {
            var t = e.geometry;
            if (e && e.isMesh) {
                var n = t.__directGeometry;
                !0 === t.elementsNeedUpdate && (n = void 0, t.elementsNeedUpdate = !1);
                if (void 0 === n)return this.fromGeometry(t);
                n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n
            }
            return !0 === t.verticesNeedUpdate && (n = this.attributes.position, void 0 !== n && (n.copyVector3sArray(t.vertices), n.needsUpdate = !0), t.verticesNeedUpdate = !1), !0 === t.normalsNeedUpdate && (n = this.attributes.normal, void 0 !== n && (n.copyVector3sArray(t.normals), n.needsUpdate = !0), t.normalsNeedUpdate = !1), !0 === t.colorsNeedUpdate && (n = this.attributes.color, void 0 !== n && (n.copyColorsArray(t.colors), n.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (n = this.attributes.uv, void 0 !== n && (n.copyVector2sArray(t.uvs), n.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (n = this.attributes.lineDistance, void 0 !== n && (n.copyArray(t.lineDistances), n.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
        }, fromGeometry: function (e) {
            return e.__directGeometry = (new dt).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
        }, fromDirectGeometry: function (e) {
            var t = new Float32Array(3 * e.vertices.length);
            this.addAttribute("position", (new ft(t, 3)).copyVector3sArray(e.vertices)), 0 < e.normals.length && (t = new Float32Array(3 * e.normals.length), this.addAttribute("normal", (new ft(t, 3)).copyVector3sArray(e.normals))), 0 < e.colors.length && (t = new Float32Array(3 * e.colors.length), this.addAttribute("color", (new ft(t, 3)).copyColorsArray(e.colors))), 0 < e.uvs.length && (t = new Float32Array(2 * e.uvs.length), this.addAttribute("uv", (new ft(t, 2)).copyVector2sArray(e.uvs))), 0 < e.uvs2.length && (t = new Float32Array(2 * e.uvs2.length), this.addAttribute("uv2", (new ft(t, 2)).copyVector2sArray(e.uvs2))), 0 < e.indices.length && (t = new (65535 < e.vertices.length ? Uint32Array : Uint16Array)(3 * e.indices.length), this.setIndex((new ft(t, 1)).copyIndicesArray(e.indices))), this.groups = e.groups;
            for (var n in e.morphTargets) {
                for (var t = [], r = e.morphTargets[n], i = 0, s = r.length; i < s; i++) {
                    var o = r[i], u = new ht(3 * o.length, 3);
                    t.push(u.copyVector3sArray(o))
                }
                this.morphAttributes[n] = t
            }
            return 0 < e.skinIndices.length && (n = new ht(4 * e.skinIndices.length, 4), this.addAttribute("skinIndex", n.copyVector4sArray(e.skinIndices))), 0 < e.skinWeights.length && (n = new ht(4 * e.skinWeights.length, 4), this.addAttribute("skinWeight", n.copyVector4sArray(e.skinWeights))), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
        }, computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new K);
            var e = this.attributes.position.array;
            void 0 !== e ? this.boundingBox.setFromArray(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }, computeBoundingSphere: function () {
            var e = new K, t = new a;
            return function () {
                null === this.boundingSphere && (this.boundingSphere = new Q);
                var n = this.attributes.position;
                if (n) {
                    var n = n.array, r = this.boundingSphere.center;
                    e.setFromArray(n), e.getCenter(r);
                    for (var i = 0, s = 0, o = n.length; s < o; s += 3)t.fromArray(n, s), i = Math.max(i, r.distanceToSquared(t));
                    this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(), computeFaceNormals: function () {
        }, computeVertexNormals: function () {
            var e = this.index, t = this.attributes, n = this.groups;
            if (t.position) {
                var r = t.position.array;
                if (void 0 === t.normal) this.addAttribute("normal", new ft(new Float32Array(r.length), 3)); else for (var i = t.normal.array, s = 0, o = i.length; s < o; s++)i[s] = 0;
                var i = t.normal.array, u, f, l, c = new a, h = new a, p = new a, d = new a, v = new a;
                if (e) {
                    e = e.array, 0 === n.length && this.addGroup(0, e.length);
                    for (var m = 0, g = n.length; m < g; ++m)for (s = n[m], o = s.start, u = s.count, s = o, o += u; s < o; s += 3)u = 3 * e[s + 0], f = 3 * e[s + 1], l = 3 * e[s + 2], c.fromArray(r, u), h.fromArray(r, f), p.fromArray(r, l), d.subVectors(p, h), v.subVectors(c, h), d.cross(v), i[u] += d.x, i[u + 1] += d.y, i[u + 2] += d.z, i[f] += d.x, i[f + 1] += d.y, i[f + 2] += d.z, i[l] += d.x, i[l + 1] += d.y, i[l + 2] += d.z
                } else for (s = 0, o = r.length; s < o; s += 9)c.fromArray(r, s), h.fromArray(r, s + 3), p.fromArray(r, s + 6), d.subVectors(p, h), v.subVectors(c, h), d.cross(v), i[s] = d.x, i[s + 1] = d.y, i[s + 2] = d.z, i[s + 3] = d.x, i[s + 4] = d.y, i[s + 5] = d.z, i[s + 6] = d.x, i[s + 7] = d.y, i[s + 8] = d.z;
                this.normalizeNormals(), t.normal.needsUpdate = !0
            }
        }, merge: function (e, t) {
            if (!1 !== (e && e.isBufferGeometry)) {
                void 0 === t && (t = 0);
                var n = this.attributes, r;
                for (r in n)if (void 0 !== e.attributes[r])for (var i = n[r].array, s = e.attributes[r], o = s.array, u = 0, s = s.itemSize * t; u < o.length; u++, s++)i[s] = o[u];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
        }, normalizeNormals: function () {
            for (var e = this.attributes.normal.array, t, n, r, i = 0, s = e.length; i < s; i += 3)t = e[i], n = e[i + 1], r = e[i + 2], t = 1 / Math.sqrt(t * t + n * n + r * r), e[i] *= t, e[i + 1] *= t, e[i + 2] *= t
        }, toNonIndexed: function () {
            if (null === this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e = new vt, t = this.index.array, n = this.attributes, r;
            for (r in n) {
                for (var i = n[r], s = i.array, i = i.itemSize, o = new s.constructor(t.length * i), u, a = 0, f = 0, l = t.length; f < l; f++) {
                    u = t[f] * i;
                    for (var c = 0; c < i; c++)o[a++] = s[u++]
                }
                e.addAttribute(r, new ft(o, i))
            }
            return e
        }, toJSON: function () {
            var e = {metadata: {version: 4.4, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
            e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name);
            if (void 0 !== this.parameters) {
                var t = this.parameters, n;
                for (n in t)void 0 !== t[n] && (e[n] = t[n]);
                return e
            }
            e.data = {attributes: {}};
            var r = this.index;
            null !== r && (t = Array.prototype.slice.call(r.array), e.data.index = {
                type: r.array.constructor.name,
                array: t
            }), r = this.attributes;
            for (n in r) {
                var i = r[n], t = Array.prototype.slice.call(i.array);
                e.data.attributes[n] = {
                    itemSize: i.itemSize,
                    type: i.array.constructor.name,
                    array: t,
                    normalized: i.normalized
                }
            }
            return n = this.groups, 0 < n.length && (e.data.groups = JSON.parse(JSON.stringify(n))), n = this.boundingSphere, null !== n && (e.data.boundingSphere = {
                center: n.center.toArray(),
                radius: n.radius
            }), e
        }, clone: function () {
            return (new vt).copy(this)
        }, copy: function (e) {
            var t = e.index;
            null !== t && this.setIndex(t.clone());
            var t = e.attributes, n;
            for (n in t)this.addAttribute(n, t[n].clone());
            e = e.groups, n = 0;
            for (t = e.length; n < t; n++) {
                var r = e[n];
                this.addGroup(r.start, r.count, r.materialIndex)
            }
            return this
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }), vt.MaxIndex = 65535, mt.prototype = Object.assign(Object.create(it.prototype), {
        constructor: mt,
        isMesh: !0,
        setDrawMode: function (e) {
            this.drawMode = e
        },
        copy: function (e) {
            return it.prototype.copy.call(this, e), this.drawMode = e.drawMode, this
        },
        updateMorphTargets: function () {
            var e = this.geometry.morphTargets;
            if (void 0 !== e && 0 < e.length) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var t = 0, n = e.length; t < n; t++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[e[t].name] = t
            }
        },
        raycast: function () {
            function e(e, t, n, r, i, s, o) {
                return ot.barycoordFromPoint(e, t, n, r, y), i.multiplyScalar(y.x), s.multiplyScalar(y.y), o.multiplyScalar(y.z), i.add(s).add(o), i.clone()
            }

            function t(e, t, n, r, i, s, o) {
                var u = e.material;
                return null === (1 === u.side ? n.intersectTriangle(s, i, r, !0, o) : n.intersectTriangle(r, i, s, 2 !== u.side, o)) ? null : (w.copy(o), w.applyMatrix4(e.matrixWorld), n = t.ray.origin.distanceTo(w), n < t.near || n > t.far ? null : {
                            distance: n,
                            point: w.clone(),
                            object: e
                        })
            }

            function r(n, r, i, s, o, a, f, h) {
                u.fromArray(s, 3 * a), l.fromArray(s, 3 * f), c.fromArray(s, 3 * h);
                if (n = t(n, r, i, u, l, c, b)) o && (v.fromArray(o, 2 * a), m.fromArray(o, 2 * f), g.fromArray(o, 2 * h), n.uv = e(b, u, l, c, v, m, g)), n.face = new ut(a, f, h, ot.normal(u, l, c)), n.faceIndex = a;
                return n
            }

            var i = new f, s = new tt, o = new Q, u = new a, l = new a, c = new a, h = new a, p = new a, d = new a, v = new n, m = new n, g = new n, y = new a, b = new a, w = new a;
            return function (n, a) {
                var f = this.geometry, y = this.material, w = this.matrixWorld;
                if (void 0 !== y && (null === f.boundingSphere && f.computeBoundingSphere(), o.copy(f.boundingSphere), o.applyMatrix4(w), !1 !== n.ray.intersectsSphere(o) && (i.getInverse(w), s.copy(n.ray).applyMatrix4(i), null === f.boundingBox || !1 !== s.intersectsBox(f.boundingBox)))) {
                    var E, S;
                    if (f && f.isBufferGeometry) {
                        var x, T, y = f.index, w = f.attributes, f = w.position.array;
                        void 0 !== w.uv && (E = w.uv.array);
                        if (null !== y) {
                            for (var w = y.array, N = 0, C = w.length; N < C; N += 3)if (y = w[N], x = w[N + 1], T = w[N + 2], S = r(this, n, s, f, E, y, x, T)) S.faceIndex = Math.floor(N / 3), a.push(S)
                        } else for (N = 0, C = f.length; N < C; N += 9)if (y = N / 3, x = y + 1, T = y + 2, S = r(this, n, s, f, E, y, x, T)) S.index = y, a.push(S)
                    } else if (f && f.isGeometry) {
                        var k, L, w = y && y.isMultiMaterial, N = !0 === w ? y.materials : null, C = f.vertices;
                        x = f.faces, T = f.faceVertexUvs[0], 0 < T.length && (E = T);
                        for (var A = 0, O = x.length; A < O; A++) {
                            var M = x[A];
                            S = !0 === w ? N[M.materialIndex] : y;
                            if (void 0 !== S) {
                                T = C[M.a], k = C[M.b], L = C[M.c];
                                if (!0 === S.morphTargets) {
                                    S = f.morphTargets;
                                    var _ = this.morphTargetInfluences;
                                    u.set(0, 0, 0), l.set(0, 0, 0), c.set(0, 0, 0);
                                    for (var D = 0, P = S.length; D < P; D++) {
                                        var H = _[D];
                                        if (0 !== H) {
                                            var B = S[D].vertices;
                                            u.addScaledVector(h.subVectors(B[M.a], T), H), l.addScaledVector(p.subVectors(B[M.b], k), H), c.addScaledVector(d.subVectors(B[M.c], L), H)
                                        }
                                    }
                                    u.add(T), l.add(k), c.add(L), T = u, k = l, L = c
                                }
                                if (S = t(this, n, s, T, k, L, b)) E && (_ = E[A], v.copy(_[0]), m.copy(_[1]), g.copy(_[2]), S.uv = e(b, T, k, L, v, m, g)), S.face = M, S.faceIndex = A, a.push(S)
                            }
                        }
                    }
                }
            }
        }(),
        clone: function () {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    }), gt.prototype = Object.create(vt.prototype), gt.prototype.constructor = gt, yt.prototype = Object.create(vt.prototype), yt.prototype.constructor = yt, bt.prototype = Object.create(it.prototype), bt.prototype.constructor = bt, bt.prototype.isCamera = !0, bt.prototype.getWorldDirection = function () {
        var e = new u;
        return function (t) {
            return t = t || new a, this.getWorldQuaternion(e), t.set(0, 0, -1).applyQuaternion(e)
        }
    }(), bt.prototype.lookAt = function () {
        var e = new f;
        return function (t) {
            e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
        }
    }(), bt.prototype.clone = function () {
        return (new this.constructor).copy(this)
    }, bt.prototype.copy = function (e) {
        return it.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
    }, wt.prototype = Object.assign(Object.create(bt.prototype), {
        constructor: wt,
        isPerspectiveCamera: !0,
        copy: function (e) {
            return bt.prototype.copy.call(this, e), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        },
        setFocalLength: function (t) {
            t = .5 * this.getFilmHeight() / t, this.fov = 2 * e.Math.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
        },
        getFocalLength: function () {
            var t = Math.tan(.5 * e.Math.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function () {
            return 2 * e.Math.RAD2DEG * Math.atan(Math.tan(.5 * e.Math.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function () {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function () {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function (e, t, n, r, i, s) {
            this.aspect = e / t, this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: n,
                offsetY: r,
                width: i,
                height: s
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = this.near, n = t * Math.tan(.5 * e.Math.DEG2RAD * this.fov) / this.zoom, r = 2 * n, i = this.aspect * r, s = -0.5 * i, o = this.view;
            if (null !== o)var u = o.fullWidth, a = o.fullHeight, s = s + o.offsetX * i / u, n = n - o.offsetY * r / a, i = o.width / u * i, r = o.height / a * r;
            o = this.filmOffset, 0 !== o && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makeFrustum(s, s + i, n - r, n, t, this.far)
        },
        toJSON: function (e) {
            return e = it.prototype.toJSON.call(this, e), e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    }), Et.prototype = Object
        .assign(Object.create(bt.prototype), {
            constructor: Et, isOrthographicCamera: !0, copy: function (e) {
                return bt.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
            }, setViewOffset: function (e, t, n, r, i, s) {
                this.view = {
                    fullWidth: e,
                    fullHeight: t,
                    offsetX: n,
                    offsetY: r,
                    width: i,
                    height: s
                }, this.updateProjectionMatrix()
            }, clearViewOffset: function () {
                this.view = null, this.updateProjectionMatrix()
            }, updateProjectionMatrix: function () {
                var e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, n = n + e, e = r + t, t = r - t;
                if (null !== this.view)var n = this.zoom / (this.view.width / this.view.fullWidth), t = this.zoom / (this.view.height / this.view.fullHeight), s = (this.right - this.left) / this.view.width, r = (this.top - this.bottom) / this.view.height, i = i + this.view.offsetX / n * s, n = i + this.view.width / n * s, e = e - this.view.offsetY / t * r, t = e - this.view.height / t * r;
                this.projectionMatrix.makeOrthographic(i, n, e, t, this.near, this.far)
            }, toJSON: function (e) {
                return e = it.prototype.toJSON.call(this, e), e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
            }
        });
    var Gi = 0;
    Jt.prototype.isFogExp2 = !0, Jt.prototype.clone = function () {
        return new Jt(this.color.getHex(), this.density)
    }, Jt.prototype.toJSON = function (e) {
        return {type: "FogExp2", color: this.color.getHex(), density: this.density}
    }, Kt.prototype.isFog = !0, Kt.prototype.clone = function () {
        return new Kt(this.color.getHex(), this.near, this.far)
    }, Kt.prototype.toJSON = function (e) {
        return {type: "Fog", color: this.color.getHex(), near: this.near, far: this.far}
    }, Qt.prototype = Object.create(it.prototype), Qt.prototype.constructor = Qt, Qt.prototype.copy = function (e, t) {
        return it.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
    }, Qt.prototype.toJSON = function (e) {
        var t = it.prototype.toJSON.call(this, e);
        return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t
    }, Gt.prototype = Object.assign(Object.create(it.prototype), {
        constructor: Gt, isLensFlare: !0, copy: function (e) {
            it.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
            for (var t = 0, n = e.lensFlares.length; t < n; t++)this.lensFlares.push(e.lensFlares[t]);
            return this
        }, add: function (e, t, n, r, i, s) {
            void 0 === t && (t = -1), void 0 === n && (n = 0), void 0 === s && (s = 1), void 0 === i && (i = new U(16777215)), void 0 === r && (r = 1), n = Math.min(n, Math.max(0, n)), this.lensFlares.push({
                texture: e,
                size: t,
                distance: n,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: s,
                color: i,
                blending: r
            })
        }, updateLensFlares: function () {
            var e, t = this.lensFlares.length, n, r = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
            for (e = 0; e < t; e++)n = this.lensFlares[e], n.x = this.positionScreen.x + r * n.distance, n.y = this.positionScreen.y + i * n.distance, n.wantedRotation = n.x * Math.PI * .25, n.rotation += .25 * (n.wantedRotation - n.rotation)
        }
    }), Yt.prototype = Object.create(V.prototype), Yt.prototype.constructor = Yt, Yt.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this
    }, Zt.prototype = Object.assign(Object.create(it.prototype), {
        constructor: Zt, isSprite: !0, raycast: function () {
            var e = new a;
            return function (t, n) {
                e.setFromMatrixPosition(this.matrixWorld);
                var r = t.ray.distanceSqToPoint(e);
                r > this.scale.x * this.scale.y / 4 || n.push({
                    distance: Math.sqrt(r),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(), clone: function () {
            return (new this.constructor(this.material)).copy(this)
        }
    }), en.prototype = Object.assign(Object.create(it.prototype), {
        constructor: en, copy: function (e) {
            it.prototype.copy.call(this, e, !1), e = e.levels;
            for (var t = 0, n = e.length; t < n; t++) {
                var r = e[t];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        }, addLevel: function (e, t) {
            void 0 === t && (t = 0), t = Math.abs(t);
            for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++);
            n.splice(r, 0, {distance: t, object: e}), this.add(e)
        }, getObjectForDistance: function (e) {
            for (var t = this.levels, n = 1, r = t.length; n < r && !(e < t[n].distance); n++);
            return t[n - 1].object
        }, raycast: function () {
            var e = new a;
            return function (t, n) {
                e.setFromMatrixPosition(this.matrixWorld);
                var r = t.ray.origin.distanceTo(e);
                this.getObjectForDistance(r).raycast(t, n)
            }
        }(), update: function () {
            var e = new a, t = new a;
            return function (n) {
                var r = this.levels;
                if (1 < r.length) {
                    e.setFromMatrixPosition(n.matrixWorld), t.setFromMatrixPosition(this.matrixWorld), n = e.distanceTo(t), r[0].object.visible = !0;
                    for (var i = 1, s = r.length; i < s; i++) {
                        if (!(n >= r[i].distance))break;
                        r[i - 1].object.visible = !1, r[i].object.visible = !0
                    }
                    for (; i < s; i++)r[i].object.visible = !1
                }
            }
        }(), toJSON: function (e) {
            e = it.prototype.toJSON.call(this, e), e.object.levels = [];
            for (var t = this.levels, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.object.levels.push({object: i.object.uuid, distance: i.distance})
            }
            return e
        }
    }), tn.prototype = Object.create(r.prototype), tn.prototype.constructor = tn, tn.prototype.isDataTexture = !0, Object.assign(nn.prototype, {
        calculateInverses: function () {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; e < t; e++) {
                var n = new f;
                this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n)
            }
        }, pose: function () {
            for (var e, t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
            t = 0;
            for (n = this.bones.length; t < n; t++)if (e = this.bones[t]) e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale)
        }, update: function () {
            var e = new f;
            return function () {
                for (var t = 0, n = this.bones.length; t < n; t++)e.multiplyMatrices(this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix, this.boneInverses[t]), e.toArray(this.boneMatrices, 16 * t);
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(), clone: function () {
            return new nn(this.bones, this.boneInverses, this.useVertexTexture)
        }
    }), rn.prototype = Object.assign(Object.create(it.prototype), {
        constructor: rn, isBone: !0, copy: function (e) {
            return it.prototype.copy.call(this, e), this.skin = e.skin, this
        }
    }), sn.prototype = Object.assign(Object.create(mt.prototype), {
        constructor: sn,
        isSkinnedMesh: !0,
        bind: function (e, t) {
            this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
        },
        pose: function () {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function () {
            if (this.geometry && this.geometry.isGeometry)for (var e = 0; e < this.geometry.skinWeights.length; e++) {
                var t = this.geometry.skinWeights[e], n = 1 / t.lengthManhattan();
                Infinity !== n ? t.multiplyScalar(n) : t.set(1, 0, 0, 0)
            } else if (this.geometry && this.geometry.isBufferGeometry)for (var t = new i, r = this.geometry.attributes.skinWeight, e = 0; e < r.count; e++)t.x = r.getX(e), t.y = r.getY(e), t.z = r.getZ(e), t.w = r.getW(e), n = 1 / t.lengthManhattan(), Infinity !== n ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), r.setXYZW(e, t.x, t.y, t.z, t.w)
        },
        updateMatrixWorld: function (e) {
            mt.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function () {
            return (new this.constructor(this.geometry, this.material, this.skeleton.useVertexTexture)).copy(this)
        }
    }), on.prototype = Object.create(V.prototype), on.prototype.constructor = on, on.prototype.isLineBasicMaterial = !0, on.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }, un.prototype = Object.assign(Object.create(it.prototype), {
        constructor: un, isLine: !0, raycast: function () {
            var e = new f, t = new tt, n = new Q;
            return function (r, i) {
                var s = r.linePrecision, s = s * s, o = this.geometry, u = this.matrixWorld;
                null === o.boundingSphere && o.computeBoundingSphere(), n.copy(o.boundingSphere), n.applyMatrix4(u);
                if (!1 !== r.ray.intersectsSphere(n)) {
                    e.getInverse(u), t.copy(r.ray).applyMatrix4(e);
                    var f = new a, l = new a, u = new a, c = new a, h = this && this.isLineSegments ? 2 : 1;
                    if (o && o.isBufferGeometry) {
                        var p = o.index, d = o.attributes.position.array;
                        if (null !== p)for (var p = p.array, o = 0, v = p.length - 1; o < v; o += h) {
                            var m = p[o + 1];
                            f.fromArray(d, 3 * p[o]), l.fromArray(d, 3 * m), m = t.distanceSqToSegment(f, l, c, u), m > s || (c.applyMatrix4(this.matrixWorld), m = r.ray.origin.distanceTo(c), m < r.near || m > r.far || i.push({
                                distance: m,
                                point: u.clone().applyMatrix4(this.matrixWorld),
                                index: o,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                        } else for (o = 0, v = d.length / 3 - 1; o < v; o += h)f.fromArray(d, 3 * o), l.fromArray(d, 3 * o + 3), m = t.distanceSqToSegment(f, l, c, u), m > s || (c.applyMatrix4(this.matrixWorld), m = r.ray.origin.distanceTo(c), m < r.near || m > r.far || i.push({
                            distance: m,
                            point: u.clone().applyMatrix4(this.matrixWorld),
                            index: o,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                    } else if (o && o.isGeometry)for (f = o.vertices, l = f.length, o = 0; o < l - 1; o += h)m = t.distanceSqToSegment(f[o], f[o + 1], c, u), m > s || (c.applyMatrix4(this.matrixWorld), m = r.ray.origin.distanceTo(c), m < r.near || m > r.far || i.push({
                        distance: m,
                        point: u.clone().applyMatrix4(this.matrixWorld),
                        index: o,
                        face: null,
                        faceIndex: null,
                        object: this
                    }))
                }
            }
        }(), clone: function () {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    }), an.prototype = Object.assign(Object.create(un.prototype), {
        constructor: an,
        isLineSegments: !0
    }), fn.prototype = Object.create(V.prototype), fn.prototype.constructor = fn, fn.prototype.isPointsMaterial = !0, fn.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
    }, ln.prototype = Object.assign(Object.create(it.prototype), {
        constructor: ln, isPoints: !0, raycast: function () {
            var e = new f, t = new tt, n = new Q;
            return function (r, i) {
                function s(e, n) {
                    var s = t.distanceSqToPoint(e);
                    if (s < c) {
                        var u = t.closestPointToPoint(e);
                        u.applyMatrix4(f);
                        var a = r.ray.origin.distanceTo(u);
                        a < r.near || a > r.far || i.push({
                            distance: a,
                            distanceToRay: Math.sqrt(s),
                            point: u.clone(),
                            index: n,
                            face: null,
                            object: o
                        })
                    }
                }

                var o = this, u = this.geometry, f = this.matrixWorld, l = r.params.Points.threshold;
                null === u.boundingSphere && u.computeBoundingSphere(), n.copy(u.boundingSphere), n.applyMatrix4(f);
                if (!1 !== r.ray.intersectsSphere(n)) {
                    e.getInverse(f), t.copy(r.ray).applyMatrix4(e);
                    var l = l / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = l * l, l = new a;
                    if (u && u.isBufferGeometry) {
                        var h = u.index, u = u.attributes.position.array;
                        if (null !== h)for (var p = h.array, h = 0, d = p.length; h < d; h++) {
                            var v = p[h];
                            l.fromArray(u, 3 * v), s(l, v)
                        } else for (h = 0, p = u.length / 3; h < p; h++)l.fromArray(u, 3 * h), s(l, h)
                    } else for (l = u.vertices, h = 0, p = l.length; h < p; h++)s(l[h], h)
                }
            }
        }(), clone: function () {
            return (new this.constructor(this.geometry, this.material)).copy(this)
        }
    }), cn.prototype = Object.assign(Object.create(it.prototype), {constructor: cn}), hn.prototype = Object.create(r.prototype), hn.prototype.constructor = hn, pn.prototype = Object.create(r.prototype), pn.prototype.constructor = pn, pn.prototype.isCompressedTexture = !0, dn.prototype = Object.create(r.prototype), dn.prototype.constructor = dn, vn.prototype = Object.create(r.prototype), vn.prototype.constructor = vn, vn.prototype.isDepthTexture = !0, mn.prototype = Object.create(vt.prototype), mn.prototype.constructor = mn, gn.prototype = Object.create(pt.prototype), gn.prototype.constructor = gn, yn.prototype = Object.create(pt.prototype), yn.prototype.constructor = yn, bn.prototype = Object.create(yn.prototype), bn.prototype.constructor = bn, wn.prototype = Object.create(yn.prototype), wn.prototype.constructor = wn, En.prototype = Object.create(yn.prototype), En.prototype.constructor = En, Sn.prototype = Object.create(yn.prototype), Sn.prototype.constructor = Sn, xn.prototype = Object.create(pt.prototype), xn.prototype.constructor = xn, xn.NoTaper = function (e) {
        return 1
    }, xn.SinusoidalTaper = function (e) {
        return Math.sin(Math.PI * e)
    }, xn.FrenetFrames = function (t, n, r) {
        var i = new a, s = [], o = [], u = [], l = new a, c = new f;
        n += 1;
        var h, p, d;
        this.tangents = s, this.normals = o, this.binormals = u;
        for (h = 0; h < n; h++)p = h / (n - 1), s[h] = t.getTangentAt(p), s[h].normalize();
        o[0] = new a, u[0] = new a, t = Number.MAX_VALUE, h = Math.abs(s[0].x), p = Math.abs(s[0].y), d = Math.abs(s[0].z), h <= t && (t = h, i.set(1, 0, 0)), p <= t && (t = p, i.set(0, 1, 0)), d <= t && i.set(0, 0, 1), l.crossVectors(s[0], i).normalize(), o[0].crossVectors(s[0], l), u[0].crossVectors(s[0], o[0]);
        for (h = 1; h < n; h++)o[h] = o[h - 1].clone(), u[h] = u[h - 1].clone(), l.crossVectors(s[h - 1], s[h]), l.length() > Number.EPSILON && (l.normalize(), i = Math.acos(e.Math.clamp(s[h - 1].dot(s[h]), -1, 1)), o[h].applyMatrix4(c.makeRotationAxis(l, i))), u[h].crossVectors(s[h], o[h]);
        if (r)for (i = Math.acos(e.Math.clamp(o[0].dot(o[n - 1]), -1, 1)), i /= n - 1, 0 < s[0].dot(l.crossVectors(o[0], o[n - 1])) && (i = -i), h = 1; h < n; h++)o[h].applyMatrix4(c.makeRotationAxis(s[h], i * h)), u[h].crossVectors(s[h], o[h])
    }, Tn.prototype = Object.create(vt.prototype), Tn.prototype.constructor = Tn, Nn.prototype = Object.create(pt.prototype), Nn.prototype.constructor = Nn, Cn.prototype = Object.create(vt.prototype), Cn.prototype.constructor = Cn, kn.prototype = Object.create(pt.prototype), kn.prototype.constructor = kn, e.ShapeUtils = {
        area: function (e) {
            for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++)n += e[r].x * e[i].y - e[i].x * e[r].y;
            return .5 * n
        }, triangulate: function () {
            return function (t, n) {
                var r = t.length;
                if (3 > r)return null;
                var i = [], s = [], o = [], u, a, f;
                if (0 < e.ShapeUtils.area(t))for (a = 0; a < r; a++)s[a] = a; else for (a = 0; a < r; a++)s[a] = r - 1 - a;
                var l = 2 * r;
                for (a = r - 1; 2 < r;) {
                    if (0 >= l--) {
                        console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                        break
                    }
                    u = a, r <= u && (u = 0), a = u + 1, r <= a && (a = 0), f = a + 1, r <= f && (f = 0);
                    var c;
                    e:{
                        var h, p, d, v, m, g, y, b;
                        h = t[s[u]].x, p = t[s[u]].y, d = t[s[a]].x, v = t[s[a]].y, m = t[s[f]].x, g = t[s[f]].y;
                        if (Number.EPSILON > (d - h) * (g - p) - (v - p) * (m - h)) c = !1; else {
                            var w, E, S, x, T, N, C, k, L, A;
                            w = m - d, E = g - v, S = h - m, x = p - g, T = d - h, N = v - p;
                            for (c = 0; c < r; c++)if (y = t[s[c]].x, b = t[s[c]].y, !(y === h && b === p || y === d && b === v || y === m && b === g) && (C = y - h, k = b - p, L = y - d, A = b - v, y -= m, b -= g, L = w * A - E * L, C = T * k - N * C, k = S * b - x * y, L >= -Number.EPSILON && k >= -Number.EPSILON && C >= -Number.EPSILON)) {
                                c = !1;
                                break e
                            }
                            c = !0
                        }
                    }
                    if (c) {
                        i.push([t[s[u]], t[s[a]], t[s[f]]]), o.push([s[u], s[a], s[f]]), u = a;
                        for (f = a + 1; f < r; u++, f++)s[u] = s[f];
                        r--, l = 2 * r
                    }
                }
                return n ? o : i
            }
        }(), triangulateShape: function (t, n) {
            function r(e) {
                var t = e.length;
                2 < t && e[t - 1].equals(e[0]) && e.pop()
            }

            function i(e, t, n) {
                return e.x !== t.x ? e.x < t.x ? e.x <= n.x && n.x <= t.x : t.x <= n.x && n.x <= e.x : e.y < t.y ? e.y <= n.y && n.y <= t.y : t.y <= n.y && n.y <= e.y
            }

            function s(e, t, n, r, s) {
                var o = t.x - e.x, u = t.y - e.y, a = r.x - n.x, f = r.y - n.y, l = e.x - n.x, c = e.y - n.y, h = u * a - o * f, p = u * l - o * c;
                if (Math.abs(h) > Number.EPSILON) {
                    if (0 < h) {
                        if (0 > p || p > h)return [];
                        a = f * l - a * c;
                        if (0 > a || a > h)return []
                    } else {
                        if (0 < p || p < h)return [];
                        a = f * l - a * c;
                        if (0 < a || a < h)return []
                    }
                    return 0 === a ? !s || 0 !== p && p !== h ? [e] : [] : a === h ? !s || 0 !== p && p !== h ? [t] : [] : 0 === p ? [n] : p === h ? [r] : (s = a / h, [{
                                        x: e.x + s * o,
                                        y: e.y + s * u
                                    }])
                }
                return 0 !== p || f * l !== a * c ? [] : (u = 0 === o && 0 === u, a = 0 === a && 0 === f, u && a ? e.x !== n.x || e.y !== n.y ? [] : [e] : u ? i(n, r, e) ? [e] : [] : a ? i(e, t, n) ? [n] : [] : (0 !== o ? (e.x < t.x ? (o = e, a = e.x, u = t, e = t.x) : (o = t, a = t.x, u = e, e = e.x), n.x < r.x ? (t = n, h = n.x, f = r, n = r.x) : (t = r, h = r.x, f = n, n = n.x)) : (e.y < t.y ? (o = e, a = e.y, u = t, e = t.y) : (o = t, a = t.y, u = e, e = e.y), n.y < r.y ? (t = n, h = n.y, f = r, n = r.y) : (t = r, h = r.y, f = n, n = n.y)), a <= h ? e < h ? [] : e === h ? s ? [] : [t] : e <= n ? [t, u] : [t, f] : a > n ? [] : a === n ? s ? [] : [o] : e <= n ? [o, u] : [o, f]))
            }

            function o(e, t, n, r) {
                var i = t.x - e.x, s = t.y - e.y;
                t = n.x - e.x, n = n.y - e.y;
                var o = r.x - e.x;
                return r = r.y - e.y, e = i * n - s * t, i = i * r - s * o, Math.abs(e) > Number.EPSILON ? (t = o * n - r * t, 0 < e ? 0 <= i && 0 <= t : 0 <= i || 0 <= t) : 0 < i
            }

            r(t), n.forEach(r);
            var u, a, f, l, c, h = {};
            f = t.concat(), u = 0;
            for (a = n.length; u < a; u++)Array.prototype.push.apply(f, n[u]);
            u = 0;
            for (a = f.length; u < a; u++)c = f[u].x + ":" + f[u].y, void 0 !== h[c] && console.warn("THREE.ShapeUtils: Duplicate point", c, u), h[c] = u;
            u = function (e, t) {
                function n(e, t) {
                    var n = u.length - 1, r = e - 1;
                    0 > r && (r = n);
                    var i = e + 1;
                    return i > n && (i = 0), n = o(u[e], u[r], u[i], a[t]), n ? (n = a.length - 1, r = t - 1, 0 > r && (r = n), i = t + 1, i > n && (i = 0), (n = o(a[t], a[r], a[i], u[e])) ? !0 : !1) : !1
                }

                function r(e, t) {
                    var n, r;
                    for (n = 0; n < u.length; n++)if (r = n + 1, r %= u.length, r = s(e, t, u[n], u[r], !0), 0 < r.length)return !0;
                    return !1
                }

                function i(e, n) {
                    var r, i, o, u;
                    for (r = 0; r < f.length; r++)for (i = t[f[r]], o = 0; o < i.length; o++)if (u = o + 1, u %= i.length, u = s(e, n, i[o], i[u], !0), 0 < u.length)return !0;
                    return !1
                }

                var u = e.concat(), a, f = [], l, c, h, p, d, v = [], m, g, y, b = 0;
                for (l = t.length; b < l; b++)f.push(b);
                m = 0;
                for (var w = 2 * f.length; 0 < f.length;) {
                    w--;
                    if (0 > w) {
                        console.log("Infinite Loop! Holes left:" + f.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (c = m; c < u.length; c++) {
                        h = u[c], l = -1;
                        for (b = 0; b < f.length; b++)if (p = f[b], d = h.x + ":" + h.y + ":" + p, void 0 === v[d]) {
                            a = t[p];
                            for (g = 0; g < a.length; g++)if (p = a[g], n(c, g) && !r(h, p) && !i(h, p)) {
                                l = g, f.splice(b, 1), m = u.slice(0, c + 1), p = u.slice(c), g = a.slice(l), y = a.slice(0, l + 1), u = m.concat(g).concat(y).concat(p), m = c;
                                break
                            }
                            if (0 <= l)break;
                            v[d] = !0
                        }
                        if (0 <= l)break
                    }
                }
                return u
            }(t, n);
            var p = e.ShapeUtils.triangulate(u, !1);
            u = 0;
            for (a = p.length; u < a; u++)for (l = p[u], f = 0; 3 > f; f++)c = l[f].x + ":" + l[f].y, c = h[c], void 0 !== c && (l[f] = c);
            return p.concat()
        }, isClockWise: function (t) {
            return 0 > e.ShapeUtils.area(t)
        }, b2: function () {
            return function (e, t, n, r) {
                var i = 1 - e;
                return i * i * t + 2 * (1 - e) * e * n + e * e * r
            }
        }(), b3: function () {
            return function (e, t, n, r, i) {
                var s = 1 - e, o = 1 - e;
                return s * s * s * t + 3 * o * o * e * n + 3 * (1 - e) * e * e * r + e * e * e * i
            }
        }()
    }, Ln.prototype = Object.create(pt.prototype), Ln.prototype.constructor = Ln, Ln.prototype.addShapeList = function (e, t) {
        for (var n = e.length, r = 0; r < n; r++)this.addShape(e[r], t)
    }, Ln.prototype.addShape = function (t, r) {
        function i(e, t, n) {
            return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(n).add(e)
        }

        function s(e, t, r) {
            var i, s, o;
            s = e.x - t.x, o = e.y - t.y, i = r.x - e.x;
            var u = r.y - e.y, a = s * s + o * o;
            if (Math.abs(s * u - o * i) > Number.EPSILON) {
                var f = Math.sqrt(a), l = Math.sqrt(i * i + u * u), a = t.x - o / f;
                t = t.y + s / f, u = ((r.x - u / l - a) * u - (r.y + i / l - t) * i) / (s * u - o * i), i = a + s * u - e.x, s = t + o * u - e.y, o = i * i + s * s;
                if (2 >= o)return new n(i, s);
                o = Math.sqrt(o / 2)
            } else e = !1, s > Number.EPSILON ? i > Number.EPSILON && (e = !0) : s < -Number.EPSILON ? i < -Number.EPSILON && (e = !0) : Math.sign(o) === Math.sign(u) && (e = !0), e ? (i = -o, o = Math.sqrt(a)) : (i = s, s = o, o = Math.sqrt(a / 2));
            return new n(i / o, s / o)
        }

        function o(e, t) {
            var n, r;
            for (R = e.length; 0 <= --R;) {
                n = R, r = R - 1, 0 > r && (r = e.length - 1);
                var i, s = m + 2 * p;
                for (i = 0; i < s; i++) {
                    var o = F * i, u = F * (i + 1), a = t + n + o, o = t + r + o, f = t + r + u, u = t + n + u, a = a + A, o = o + A, f = f + A, u = u + A;
                    L.faces.push(new ut(a, o, u, null, null, 1)), L.faces.push(new ut(o, f, u, null, null, 1)), a = w.generateSideWallUV(L, a, o, f, u), L.faceVertexUvs[0].push([a[0], a[1], a[3]]), L.faceVertexUvs[0].push([a[1], a[2], a[3]])
                }
            }
        }

        function u(e, t, n) {
            L.vertices.push(new a(e, t, n))
        }

        function f(e, t, n) {
            e += A, t += A, n += A, L.faces.push(new ut(e, t, n, null, null, 0)), e = w.generateTopUV(L, e, t, n), L.faceVertexUvs[0].push(e)
        }

        var l = void 0 !== r.amount ? r.amount : 100, c = void 0 !== r.bevelThickness ? r.bevelThickness : 6, h = void 0 !== r.bevelSize ? r.bevelSize : c - 2, p = void 0 !== r.bevelSegments ? r.bevelSegments : 3, d = void 0 !== r.bevelEnabled ? r.bevelEnabled : !0, v = void 0 !== r.curveSegments ? r.curveSegments : 12, m = void 0 !== r.steps ? r.steps : 1, g = r.extrudePath, y, b = !1, w = void 0 !== r.UVGenerator ? r.UVGenerator : Ln.WorldUVGenerator, E, S, x, T;
        g && (y = g.getSpacedPoints(m), b = !0, d = !1, E = void 0 !== r.frames ? r.frames : new xn.FrenetFrames(g, m, !1), S = new a, x = new a, T = new a), d || (h = c = p = 0);
        var N, C, k, L = this, A = this.vertices.length, g = t.extractPoints(v), v = g.shape, O = g.holes;
        if (g = !e.ShapeUtils.isClockWise(v)) {
            v = v.reverse(), C = 0;
            for (k = O.length; C < k; C++)N = O[C], e.ShapeUtils.isClockWise(N) && (O[C] = N.reverse());
            g = !1
        }
        var M = e.ShapeUtils.triangulateShape(v, O), _ = v;
        C = 0;
        for (k = O.length; C < k; C++)N = O[C], v = v.concat(N);
        var D, P, H, B, j, F = v.length, I, q = M.length, g = [], R = 0;
        H = _.length, D = H - 1;
        for (P = R + 1; R < H; R++, D++, P++)D === H && (D = 0), P === H && (P = 0), g[R] = s(_[R], _[D], _[P]);
        var U = [], z, W = g.concat();
        C = 0;
        for (k = O.length; C < k; C++) {
            N = O[C], z = [], R = 0, H = N.length, D = H - 1;
            for (P = R + 1; R < H; R++, D++, P++)D === H && (D = 0), P === H && (P = 0), z[R] = s(N[R], N[D], N[P]);
            U.push(z), W = W.concat(z)
        }
        for (D = 0; D < p; D++) {
            H = D / p, B = c * Math.cos(H * Math.PI / 2), P = h * Math.sin(H * Math.PI / 2), R = 0;
            for (H = _.length; R < H; R++)j = i(_[R], g[R], P), u(j.x, j.y, -B);
            C = 0;
            for (k = O.length; C < k; C++)for (N = O[C], z = U[C], R = 0, H = N.length; R < H; R++)j = i(N[R], z[R], P), u(j.x, j.y, -B)
        }
        P = h;
        for (R = 0; R < F; R++)j = d ? i(v[R], W[R], P) : v[R], b ? (x.copy(E.normals[0]).multiplyScalar(j.x), S.copy(E.binormals[0]).multiplyScalar(j.y), T.copy(y[0]).add(x).add(S), u(T.x, T.y, T.z)) : u(j.x, j.y, 0);
        for (H = 1; H <= m; H++)for (R = 0; R < F; R++)j = d ? i(v[R], W[R], P) : v[R], b ? (x.copy(E.normals[H]).multiplyScalar(j.x), S.copy(E.binormals[H]).multiplyScalar(j.y), T.copy(y[H]).add(x).add(S), u(T.x, T.y, T.z)) : u(j.x, j.y, l / m * H);
        for (D = p - 1; 0 <= D; D--) {
            H = D / p, B = c * Math.cos(H * Math.PI / 2), P = h * Math.sin(H * Math.PI / 2), R = 0;
            for (H = _.length; R < H; R++)j = i(_[R], g[R], P), u(j.x, j.y, l + B);
            C = 0;
            for (k = O.length; C < k; C++)for (N = O[C], z = U[C], R = 0, H = N.length; R < H; R++)j = i(N[R], z[R], P), b ? u(j.x, j.y + y[m - 1].y, y[m - 1].x + B) : u(j.x, j.y, l + B)
        }
        (function () {
            if (d) {
                var e = 0 * F;
                for (R = 0; R < q; R++)I = M[R], f(I[2] + e, I[1] + e, I[0] + e);
                e = F * (m + 2 * p);
                for (R = 0; R < q; R++)I = M[R], f(I[0] + e, I[1] + e, I[2] + e)
            } else {
                for (R = 0; R < q; R++)I = M[R], f(I[2], I[1], I[0]);
                for (R = 0; R < q; R++)I = M[R], f(I[0] + F * m, I[1] + F * m, I[2] + F * m)
            }
        })(), function () {
            var e = 0;
            o(_, e), e += _.length, C = 0;
            for (k = O.length; C < k; C++)N = O[C], o(N, e), e += N.length
        }()
    }, Ln.WorldUVGenerator = {
        generateTopUV: function (e, t, r, i) {
            return e = e.vertices, t = e[t], r = e[r], i = e[i], [new n(t.x, t.y), new n(r.x, r.y), new n(i.x, i.y)]
        }, generateSideWallUV: function (e, t, r, i, s) {
            return e = e.vertices, t = e[t], r = e[r], i = e[i], s = e[s], .01 > Math.abs(t.y - r.y) ? [new n(t.x, 1 - t.z), new n(r.x, 1 - r.z), new n(i.x, 1 - i.z), new n(s.x, 1 - s.z)] : [new n(t.y, 1 - t.z), new n(r.y, 1 - r.z), new n(i.y, 1 - i.z), new n(s.y, 1 - s.z)]
        }
    }, An.prototype = Object.create(Ln.prototype), An.prototype.constructor = An, On.prototype = Object.create(vt.prototype), On.prototype.constructor = On, Mn.prototype = Object.create(pt.prototype), Mn.prototype.constructor = Mn, _n.prototype = Object.create(vt.prototype), _n.prototype.constructor = _n, Dn.prototype = Object.create(pt.prototype), Dn.prototype.constructor = Dn, Pn.prototype = Object.create(pt.prototype), Pn.prototype.constructor = Pn, Hn.prototype = Object.create(vt.prototype), Hn.prototype.constructor = Hn, Bn.prototype = Object.create(pt.prototype), Bn.prototype.constructor = Bn, jn.prototype = Object.create(pt.prototype), jn.prototype.constructor = jn, jn.prototype.addShapeList = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)this.addShape(e[n], t);
        return this
    }, jn.prototype.addShape = function (t, n) {
        void 0 === n && (n = {});
        var r = n.material, i = void 0 === n.UVGenerator ? Ln.WorldUVGenerator : n.UVGenerator, s, o, u, f = this.vertices.length;
        s = t.extractPoints(void 0 !== n.curveSegments ? n.curveSegments : 12);
        var l = s.shape, c = s.holes;
        if (!e.ShapeUtils.isClockWise(l))for (l = l.reverse(), s = 0, o = c.length; s < o; s++)u = c[s], e.ShapeUtils.isClockWise(u) && (c[s] = u.reverse());
        var h = e.ShapeUtils.triangulateShape(l, c);
        s = 0;
        for (o = c.length; s < o; s++)u = c[s], l = l.concat(u);
        c = l.length, o = h.length;
        for (s = 0; s < c; s++)u = l[s], this.vertices.push(new a(u.x, u.y, 0));
        for (s = 0; s < o; s++)c = h[s], l = c[0] + f, u = c[1] + f, c = c[2] + f, this.faces.push(new ut(l, u, c, null, null, r)), this.faceVertexUvs[0].push(i.generateTopUV(this, l, u, c))
    }, Fn.prototype = Object.create(vt.prototype), Fn.prototype.constructor = Fn, In.prototype = Object.create(vt.prototype), In.prototype.constructor = In,qn.prototype = Object.create(pt.prototype),qn.prototype.constructor = qn,Rn.prototype = Object.create(qn.prototype),Rn.prototype.constructor = Rn,Un.prototype = Object.create(vt.prototype),Un.prototype.constructor = Un,zn.prototype = Object.create(vt.prototype),zn.prototype.constructor = zn,Wn.prototype = Object.create(pt.prototype),Wn.prototype.constructor = Wn,Xn.prototype = Object.create(pt.prototype),Xn.prototype.constructor = Xn;
    var Yi = Object.freeze({
        WireframeGeometry: mn,
        ParametricGeometry: gn,
        TetrahedronGeometry: bn,
        OctahedronGeometry: wn,
        IcosahedronGeometry: En,
        DodecahedronGeometry: Sn,
        PolyhedronGeometry: yn,
        TubeGeometry: xn,
        TorusKnotGeometry: Nn,
        TorusKnotBufferGeometry: Tn,
        TorusGeometry: kn,
        TorusBufferGeometry: Cn,
        TextGeometry: An,
        SphereBufferGeometry: On,
        SphereGeometry: Mn,
        RingGeometry: Dn,
        RingBufferGeometry: _n,
        PlaneBufferGeometry: yt,
        PlaneGeometry: Pn,
        LatheGeometry: Bn,
        LatheBufferGeometry: Hn,
        ShapeGeometry: jn,
        ExtrudeGeometry: Ln,
        EdgesGeometry: Fn,
        ConeGeometry: Rn,
        ConeBufferGeometry: Un,
        CylinderGeometry: qn,
        CylinderBufferGeometry: In,
        CircleBufferGeometry: zn,
        CircleGeometry: Wn,
        BoxBufferGeometry: gt,
        BoxGeometry: Xn
    });
    Vn.prototype = Object.create($.prototype), Vn.prototype.constructor = Vn, Vn.prototype.isShadowMaterial = !0, $n.prototype = Object.create($.prototype), $n.prototype.constructor = $n, $n.prototype.isRawShaderMaterial = !0, Jn.prototype = {
        constructor: Jn,
        isMultiMaterial: !0,
        toJSON: function (e) {
            for (var t = {
                metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
                uuid: this.uuid,
                type: this.type,
                materials: []
            }, n = this.materials, r = 0, i = n.length; r < i; r++) {
                var s = n[r].toJSON(e);
                delete s.metadata, t.materials.push(s)
            }
            return t.visible = this.visible, t
        },
        clone: function () {
            for (var e = new this.constructor, t = 0; t < this.materials.length; t++)e.materials.push(this.materials[t].clone());
            return e.visible = this.visible, e
        }
    }, Kn.prototype = Object.create(V.prototype), Kn.prototype.constructor = Kn, Kn.prototype.isMeshStandardMaterial = !0, Kn.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.defines = {STANDARD: ""}, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, Qn.prototype = Object.create(Kn.prototype), Qn.prototype.constructor = Qn, Qn.prototype.isMeshPhysicalMaterial = !0, Qn.prototype.copy = function (e) {
        return Kn.prototype.copy.call(this, e), this.defines = {PHYSICAL: ""}, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
    }, Gn.prototype = Object.create(V.prototype), Gn.prototype.constructor = Gn, Gn.prototype.isMeshPhongMaterial = !0, Gn.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, Yn.prototype = Object.create(V.prototype), Yn.prototype.constructor = Yn, Yn.prototype.isMeshNormalMaterial = !0, Yn.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, Zn.prototype = Object.create(V.prototype), Zn.prototype.constructor = Zn, Zn.prototype.isMeshLambertMaterial = !0, Zn.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, er.prototype = Object.create(V.prototype), er.prototype.constructor = er, er.prototype.isLineDashedMaterial = !0, er.prototype.copy = function (e) {
        return V.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    };
    var Zi = Object.freeze({
        ShadowMaterial: Vn,
        SpriteMaterial: Yt,
        RawShaderMaterial: $n,
        ShaderMaterial: $,
        PointsMaterial: fn,
        MultiMaterial: Jn,
        MeshPhysicalMaterial: Qn,
        MeshStandardMaterial: Kn,
        MeshPhongMaterial: Gn,
        MeshNormalMaterial: Yn,
        MeshLambertMaterial: Zn,
        MeshDepthMaterial: J,
        MeshBasicMaterial: at,
        LineDashedMaterial: er,
        LineBasicMaterial: on,
        Material: V
    });
    e.Cache = {
        enabled: !1, files: {}, add: function (e, t) {
            !1 !== this.enabled && (this.files[e] = t)
        }, get: function (e) {
            if (!1 !== this.enabled)return this.files[e]
        }, remove: function (e) {
            delete this.files[e]
        }, clear: function () {
            this.files = {}
        }
    }, e.DefaultLoadingManager = new tr, Object.assign(nr.prototype, {
        load: function (t, n, r, i) {
            void 0 !== this.path && (t = this.path + t);
            var s = this, o = e.Cache.get(t);
            if (void 0 !== o)return s.manager.itemStart(t), setTimeout(function () {
                n && n(o), s.manager.itemEnd(t)
            }, 0), o;
            var u = new XMLHttpRequest;
            return u.open("GET", t, !0), u.addEventListener("load", function (r) {
                var o = r.target.response;
                e.Cache.add(t, o), 200 === this.status ? (n && n(o), s.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."), n && n(o), s.manager.itemEnd(t)) : (i && i(r), s.manager.itemError(t))
            }, !1), void 0 !== r && u.addEventListener("progress", function (e) {
                r(e)
            }, !1), u.addEventListener("error", function (e) {
                i && i(e), s.manager.itemError(t)
            }, !1), void 0 !== this.responseType && (u.responseType = this.responseType), void 0 !== this.withCredentials && (u.withCredentials = this.withCredentials), u.overrideMimeType && u.overrideMimeType("text/plain"), u.send(null), s.manager.itemStart(t), u
        }, setPath: function (e) {
            return this.path = e, this
        }, setResponseType: function (e) {
            return this.responseType = e, this
        }, setWithCredentials: function (e) {
            return this.withCredentials = e, this
        }
    }), Object.assign(rr.prototype, {
        load: function (e, t, n, r) {
            function i(i) {
                a.load(e[i], function (e) {
                    e = s._parser(e, !0), o[i] = {
                        width: e.width,
                        height: e.height,
                        format: e.format,
                        mipmaps: e.mipmaps
                    }, f += 1, 6 === f && (1 === e.mipmapCount && (u.minFilter = 1006), u.format = e.format, u.needsUpdate = !0, t && t(u))
                }, n, r)
            }

            var s = this, o = [], u = new pn;
            u.image = o;
            var a = new nr(this.manager);
            a.setPath(this.path), a.setResponseType("arraybuffer");
            if (Array.isArray(e))for (var f = 0, l = 0, c = e.length; l < c; ++l)i(l); else a.load(e, function (e) {
                e = s._parser(e, !0);
                if (e.isCubemap)for (var n = e.mipmaps.length / e.mipmapCount, r = 0; r < n; r++) {
                    o[r] = {mipmaps: []};
                    for (var i = 0; i < e.mipmapCount; i++)o[r].mipmaps.push(e.mipmaps[r * e.mipmapCount + i]), o[r].format = e.format, o[r].width = e.width, o[r].height = e.height
                } else u.image.width = e.width, u.image.height = e.height, u.mipmaps = e.mipmaps;
                1 === e.mipmapCount && (u.minFilter = 1006), u.format = e.format, u.needsUpdate = !0, t && t(u)
            }, n, r);
            return u
        }, setPath: function (e) {
            return this.path = e, this
        }
    }), Object.assign(ir.prototype, {
        load: function (e, t, n, r) {
            var i = this, s = new tn, o = new nr(this.manager);
            return o.setResponseType("arraybuffer"), o.load(e, function (e) {
                if (e = i._parser(e)) void 0 !== e.image ? s.image = e.image : void 0 !== e.data && (s.image.width = e.width, s.image.height = e.height, s.image.data = e.data), s.wrapS = void 0 !== e.wrapS ? e.wrapS : 1001, s.wrapT = void 0 !== e.wrapT ? e.wrapT : 1001, s.magFilter = void 0 !== e.magFilter ? e.magFilter : 1006, s.minFilter = void 0 !== e.minFilter ? e.minFilter : 1008, s.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1, void 0 !== e.format && (s.format = e.format), void 0 !== e.type && (s.type = e.type), void 0 !== e.mipmaps && (s.mipmaps = e.mipmaps), 1 === e.mipmapCount && (s.minFilter = 1006), s.needsUpdate = !0, t && t(s, e)
            }, n, r), s
        }
    }), Object.assign(sr.prototype, {
        load: function (e, t, n, r) {
            var i = this, s = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            s.onload = function () {
                s.onload = null, URL.revokeObjectURL(s.src), t && t(s), i.manager.itemEnd(e)
            };
            if (0 === e.indexOf("data:")) s.src = e; else {
                var o = new nr;
                o.setPath(this.path), o.setResponseType("blob"), o.setWithCredentials(this.withCredentials), o.load(e, function (e) {
                    s.src = URL.createObjectURL(e)
                }, n, r)
            }
            return i.manager.itemStart(e), s
        }, setCrossOrigin: function (e) {
            return this.crossOrigin = e, this
        }, setWithCredentials: function (e) {
            return this.withCredentials = e, this
        }, setPath: function (e) {
            return this.path = e, this
        }
    }), Object.assign(or.prototype, {
        load: function (e, t, n, r) {
            function i(n) {
                o.load(e[n], function (e) {
                    s.images[n] = e, u++
                        , 6 === u && (s.needsUpdate = !0, t && t(s))
                }, void 0, r)
            }

            var s = new l, o = new sr(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
            var u = 0;
            for (n = 0; n < e.length; ++n)i(n);
            return s
        }, setCrossOrigin: function (e) {
            return this.crossOrigin = e, this
        }, setPath: function (e) {
            return this.path = e, this
        }
    }), Object.assign(ur.prototype, {
        load: function (e, t, n, i) {
            var s = new r, o = new sr(this.manager);
            return o.setCrossOrigin(this.crossOrigin), o.setWithCredentials(this.withCredentials), o.setPath(this.path), o.load(e, function (n) {
                var r = 0 < e.search(/\.(jpg|jpeg)$/) || 0 === e.search(/^data\:image\/jpeg/);
                s.format = r ? 1022 : 1023, s.image = n, s.needsUpdate = !0, void 0 !== t && t(s)
            }, n, i), s
        }, setCrossOrigin: function (e) {
            return this.crossOrigin = e, this
        }, setWithCredentials: function (e) {
            return this.withCredentials = e, this
        }, setPath: function (e) {
            return this.path = e, this
        }
    }), ar.prototype = Object.assign(Object.create(it.prototype), {
        constructor: ar, isLight: !0, copy: function (e) {
            return it.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
        }, toJSON: function (e) {
            return e = it.prototype.toJSON.call(this, e), e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
    }), fr.prototype = Object.assign(Object.create(ar.prototype), {
        constructor: fr,
        isHemisphereLight: !0,
        copy: function (e) {
            return ar.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
        }
    }), Object.assign(lr.prototype, {
        copy: function (e) {
            return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, toJSON: function () {
            var e = {};
            0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius);
            if (512 !== this.mapSize.x || 512 !== this.mapSize.y) e.mapSize = this.mapSize.toArray();
            return e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
        }
    }), cr.prototype = Object.assign(Object.create(lr.prototype), {
        constructor: cr,
        isSpotLightShadow: !0,
        update: function (t) {
            var n = 2 * e.Math.RAD2DEG * t.angle, r = this.mapSize.width / this.mapSize.height;
            t = t.distance || 500;
            var i = this.camera;
            if (n !== i.fov || r !== i.aspect || t !== i.far) i.fov = n, i.aspect = r, i.far = t, i.updateProjectionMatrix()
        }
    }), hr.prototype = Object.assign(Object.create(ar.prototype), {
        constructor: hr,
        isSpotLight: !0,
        copy: function (e) {
            return ar.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        }
    }), pr.prototype = Object.assign(Object.create(ar.prototype), {
        constructor: pr,
        isPointLight: !0,
        copy: function (e) {
            return ar.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
        }
    }), dr.prototype = Object.assign(Object.create(lr.prototype), {constructor: dr}), vr.prototype = Object.assign(Object.create(ar.prototype), {
        constructor: vr,
        isDirectionalLight: !0,
        copy: function (e) {
            return ar.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
        }
    }), mr.prototype = Object.assign(Object.create(ar.prototype), {
        constructor: mr,
        isAmbientLight: !0
    }), e.AnimationUtils = {
        arraySlice: function (t, n, r) {
            return e.AnimationUtils.isTypedArray(t) ? new t.constructor(t.subarray(n, r)) : t.slice(n, r)
        }, convertArray: function (e, t, n) {
            return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
        }, isTypedArray: function (e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView)
        }, getKeyframeOrder: function (e) {
            for (var t = e.length, n = Array(t), r = 0; r !== t; ++r)n[r] = r;
            return n.sort(function (t, n) {
                return e[t] - e[n]
            }), n
        }, sortedArray: function (e, t, n) {
            for (var r = e.length, i = new e.constructor(r), s = 0, o = 0; o !== r; ++s)for (var u = n[s] * t, a = 0; a !== t; ++a)i[o++] = e[u + a];
            return i
        }, flattenJSON: function (e, t, n, r) {
            for (var i = 1, s = e[0]; void 0 !== s && void 0 === s[r];)s = e[i++];
            if (void 0 !== s) {
                var o = s[r];
                if (void 0 !== o)if (Array.isArray(o)) {
                    do o = s[r], void 0 !== o && (t.push(s.time), n.push.apply(n, o)), s = e[i++]; while (void 0 !== s)
                } else if (void 0 !== o.toArray) {
                    do o = s[r], void 0 !== o && (t.push(s.time), o.toArray(n, n.length)), s = e[i++]; while (void 0 !== s)
                } else do o = s[r], void 0 !== o && (t.push(s.time), n.push(o)), s = e[i++]; while (void 0 !== s)
            }
        }
    }, gr.prototype = {
        constructor: gr, evaluate: function (e) {
            var t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
            e:{
                t:{
                    n:{
                        r:if (!(e < r)) {
                            for (var s = n + 2; ;) {
                                if (void 0 === r) {
                                    if (e < i)break r;
                                    return this._cachedIndex = n = t.length, this.afterEnd_(n - 1, e, i)
                                }
                                if (n === s)break;
                                i = r, r = t[++n];
                                if (e < r)break t
                            }
                            r = t.length;
                            break n
                        }
                        if (e >= i)break e;
                        s = t[1], e < s && (n = 2, i = s);
                        for (s = n - 2; ;) {
                            if (void 0 === i)return this._cachedIndex = 0, this.beforeStart_(0, e, r);
                            if (n === s)break;
                            r = i, i = t[--n - 1];
                            if (e >= i)break t
                        }
                        r = n, n = 0
                    }
                    for (; n < r;)i = n + r >>> 1, e < t[i] ? r = i : n = i + 1;
                    r = t[n], i = t[n - 1];
                    if (void 0 === i)return this._cachedIndex = 0, this.beforeStart_(0, e, r);
                    if (void 0 === r)return this._cachedIndex = n = t.length, this.afterEnd_(n - 1, i, e)
                }
                this._cachedIndex = n, this.intervalChanged_(n, i, r)
            }
            return this.interpolate_(n, i, e, r)
        }, settings: null, DefaultSettings_: {}, getSettings_: function () {
            return this.settings || this.DefaultSettings_
        }, copySampleValue_: function (e) {
            var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize;
            e *= r;
            for (var i = 0; i !== r; ++i)t[i] = n[e + i];
            return t
        }, interpolate_: function (e, t, n, r) {
            throw Error("call to abstract method")
        }, intervalChanged_: function (e, t, n) {
        }
    }, Object.assign(gr.prototype, {
        beforeStart_: gr.prototype.copySampleValue_,
        afterEnd_: gr.prototype.copySampleValue_
    }), yr.prototype = Object.assign(Object.create(gr.prototype), {
        constructor: yr,
        DefaultSettings_: {endingStart: 2400, endingEnd: 2400},
        intervalChanged_: function (e, t, n) {
            var r = this.parameterPositions, i = e - 2, s = e + 1, o = r[i], u = r[s];
            if (void 0 === o)switch (this.getSettings_().endingStart) {
                case 2401:
                    i = e, o = 2 * t - n;
                    break;
                case 2402:
                    i = r.length - 2, o = t + r[i] - r[i + 1];
                    break;
                default:
                    i = e, o = n
            }
            if (void 0 === u)switch (this.getSettings_().endingEnd) {
                case 2401:
                    s = e, u = 2 * n - t;
                    break;
                case 2402:
                    s = 1, u = n + r[1] - r[0];
                    break;
                default:
                    s = e - 1, u = t
            }
            e = .5 * (n - t), r = this.valueSize, this._weightPrev = e / (t - o), this._weightNext = e / (u - n), this._offsetPrev = i * r, this._offsetNext = s * r
        },
        interpolate_: function (e, t, n, r) {
            var i = this.resultBuffer, s = this.sampleValues, o = this.valueSize;
            e *= o;
            var u = e - o, a = this._offsetPrev, f = this._offsetNext, l = this._weightPrev, c = this._weightNext, h = (n - t) / (r - t);
            n = h * h, r = n * h, t = -l * r + 2 * l * n - l * h, l = (1 + l) * r + (-1.5 - 2 * l) * n + (-0.5 + l) * h + 1, h = (-1 - c) * r + (1.5 + c) * n + .5 * h, c = c * r - c * n;
            for (n = 0; n !== o; ++n)i[n] = t * s[a + n] + l * s[u + n] + h * s[e + n] + c * s[f + n];
            return i
        }
    }), br.prototype = Object.assign(Object.create(gr.prototype), {
        constructor: br,
        interpolate_: function (e, t, n, r) {
            var i = this.resultBuffer, s = this.sampleValues, o = this.valueSize;
            e *= o;
            var u = e - o;
            t = (n - t) / (r - t), n = 1 - t;
            for (r = 0; r !== o; ++r)i[r] = s[u + r] * n + s[e + r] * t;
            return i
        }
    }), wr.prototype = Object.assign(Object.create(gr.prototype), {
        constructor: wr,
        interpolate_: function (e, t, n, r) {
            return this.copySampleValue_(e - 1)
        }
    });
    var es;
    es = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function (e) {
            return new wr(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodLinear: function (e) {
            return new br(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: function (e) {
            return new yr(this.times, this.values, this.getValueSize(), e)
        },
        setInterpolation: function (e) {
            var t;
            switch (e) {
                case 2300:
                    t = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    t = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    t = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === t) {
                t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (e === this.DefaultInterpolation)throw Error(t);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                console.warn(t)
            } else this.createInterpolant = t
        },
        getInterpolation: function () {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function () {
            return this.values.length / this.times.length
        },
        shift: function (e) {
            if (0 !== e)for (var t = this.times, n = 0, r = t.length; n !== r; ++n)t[n] += e;
            return this
        },
        scale: function (e) {
            if (1 !== e)for (var t = this.times, n = 0, r = t.length; n !== r; ++n)t[n] *= e;
            return this
        },
        trim: function (t, n) {
            for (var r = this.times, i = r.length, s = 0, o = i - 1; s !== i && r[s] < t;)++s;
            for (; -1 !== o && r[o] > n;)--o;
            ++o;
            if (0 !== s || o !== i) s >= o && (o = Math.max(o, 1), s = o - 1), i = this.getValueSize(), this.times = e.AnimationUtils.arraySlice(r, s, o), this.values = e.AnimationUtils.arraySlice(this.values, s * i, o * i);
            return this
        },
        validate: function () {
            var t = !0, n = this.getValueSize();
            0 !== n - Math.floor(n) && (console.error("invalid value size in track", this), t = !1);
            var r = this.times, n = this.values, i = r.length;
            0 === i && (console.error("track is empty", this), t = !1);
            for (var s = null, o = 0; o !== i; o++) {
                var u = r[o];
                if ("number" == typeof u && isNaN(u)) {
                    console.error("time is not a valid number", this, o, u), t = !1;
                    break
                }
                if (null !== s && s > u) {
                    console.error("out of order keys", this, o, u, s), t = !1;
                    break
                }
                s = u
            }
            if (void 0 !== n && e.AnimationUtils.isTypedArray(n))for (o = 0, r = n.length; o !== r; ++o)if (i = n[o], isNaN(i)) {
                console.error("value is not a valid number", this, o, i), t = !1;
                break
            }
            return t
        },
        optimize: function () {
            for (var t = this.times, n = this.values, r = this.getValueSize(), i = 2302 === this.getInterpolation(), s = 1, o = t.length - 1, u = 1; u < o; ++u) {
                var a = !1, f = t[u];
                if (f !== t[u + 1] && (1 !== u || f !== f[0]))if (i) a = !0; else for (var l = u * r, c = l - r, h = l + r, f = 0; f !== r; ++f) {
                    var p = n[l + f];
                    if (p !== n[c + f] || p !== n[h + f]) {
                        a = !0;
                        break
                    }
                }
                if (a) {
                    if (u !== s)for (t[s] = t[u], a = u * r, l = s * r, f = 0; f !== r; ++f)n[l + f] = n[a + f];
                    ++s
                }
            }
            if (0 < o) {
                t[s] = t[o], a = o * r, l = s * r;
                for (f = 0; f !== r; ++f)n[l + f] = n[a + f];
                ++s
            }
            return s !== t.length && (this.times = e.AnimationUtils.arraySlice(t, 0, s), this.values = e.AnimationUtils.arraySlice(n, 0, s * r)), this
        }
    }, Sr.prototype = Object.assign(Object.create(es), {
        constructor: Sr,
        ValueTypeName: "vector"
    }), xr.prototype = Object.assign(Object.create(gr.prototype), {
        constructor: xr,
        interpolate_: function (e, t, n, r) {
            var i = this.resultBuffer, s = this.sampleValues, o = this.valueSize;
            e *= o, t = (n - t) / (r - t);
            for (n = e + o; e !== n; e += 4)u.slerpFlat(i, 0, s, e - o, s, e, t);
            return i
        }
    }), Tr.prototype = Object.assign(Object.create(es), {
        constructor: Tr,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function (e) {
            return new xr(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), Nr.prototype = Object.assign(Object.create(es), {
        constructor: Nr,
        ValueTypeName: "number"
    }), Cr.prototype = Object.assign(Object.create(es), {
        constructor: Cr,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), kr.prototype = Object.assign(Object.create(es), {
        constructor: kr,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Lr.prototype = Object.assign(Object.create(es), {
        constructor: Lr,
        ValueTypeName: "color"
    }), Ar.prototype = es, es.constructor = Ar, Object.assign(Ar, {
        parse: function (t) {
            if (void 0 === t.type)throw Error("track type undefined, can not parse");
            var n = Ar._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var r = [], i = [];
                e.AnimationUtils.flattenJSON(t.keys, r, i, "value"), t.times = r, t.values = i
            }
            return void 0 !== n.parse ? n.parse(t) : new n(t.name, t.times, t.values, t.interpolation)
        }, toJSON: function (t) {
            var n = t.constructor;
            if (void 0 !== n.toJSON) n = n.toJSON(t); else {
                var n = {
                    name: t.name,
                    times: e.AnimationUtils.convertArray(t.times, Array),
                    values: e.AnimationUtils.convertArray(t.values, Array)
                }, r = t.getInterpolation();
                r !== t.DefaultInterpolation && (n.interpolation = r)
            }
            return n.type = t.ValueTypeName, n
        }, _getTrackTypeForValueTypeName: function (e) {
            switch (e.toLowerCase()) {
                case"scalar":
                case"double":
                case"float":
                case"number":
                case"integer":
                    return Nr;
                case"vector":
                case"vector2":
                case"vector3":
                case"vector4":
                    return Sr;
                case"color":
                    return Lr;
                case"quaternion":
                    return Tr;
                case"bool":
                case"boolean":
                    return kr;
                case"string":
                    return Cr
            }
            throw Error("Unsupported typeName: " + e)
        }
    }), Or.prototype = {
        constructor: Or, resetDuration: function () {
            for (var e = 0, t = 0, n = this.tracks.length; t !== n; ++t)var r = this.tracks[t], e = Math.max(e, r.times[r.times.length - 1]);
            this.duration = e
        }, trim: function () {
            for (var e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration);
            return this
        }, optimize: function () {
            for (var e = 0; e < this.tracks.length; e++)this.tracks[e].optimize();
            return this
        }
    }, Object.assign(Or, {
        parse: function (e) {
            for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, s = n.length; i !== s; ++i)t.push(Ar.parse(n[i]).scale(r));
            return new Or(e.name, e.duration, t)
        }, toJSON: function (e) {
            var t = [], n = e.tracks;
            e = {name: e.name, duration: e.duration, tracks: t};
            for (var r = 0, i = n.length; r !== i; ++r)t.push(Ar.toJSON(n[r]));
            return e
        }, CreateFromMorphTargetSequence: function (t, n, r, i) {
            for (var s = n.length, o = [], u = 0; u < s; u++) {
                var a = [], f = [];
                a.push((u + s - 1) % s, u, (u + 1) % s), f.push(0, 1, 0);
                var l = e.AnimationUtils.getKeyframeOrder(a), a = e.AnimationUtils.sortedArray(a, 1, l), f = e.AnimationUtils.sortedArray(f, 1, l);
                i || 0 !== a[0] || (a.push(s), f.push(f[0])), o.push((new Nr(".morphTargetInfluences[" + n[u].name + "]", a, f)).scale(1 / r))
            }
            return new Or(t, -1, o)
        }, findByName: function (e, t) {
            var n = e;
            Array.isArray(e) || (n = e.geometry && e.geometry.animations || e.animations);
            for (var r = 0; r < n.length; r++)if (n[r].name === t)return n[r];
            return null
        }, CreateClipsFromMorphTargetSequences: function (e, t, n) {
            for (var r = {}, i = /^([\w-]*?)([\d]+)$/, s = 0, o = e.length; s < o; s++) {
                var u = e[s], a = u.name.match(i);
                if (a && 1 < a.length) {
                    var f = a[1];
                    (a = r[f]) || (r[f] = a = []), a.push(u)
                }
            }
            e = [];
            for (f in r)e.push(Or.CreateFromMorphTargetSequence(f, r[f], t, n));
            return e
        }, parseAnimation: function (t, n) {
            if (!t)return console.error("  no animation in JSONLoader data"), null;
            for (var r = function (t, n, r, i, s) {
                if (0 !== r.length) {
                    var o = [], u = [];
                    e.AnimationUtils.flattenJSON(r, o, u, i), 0 !== o.length && s.push(new t(n, o, u))
                }
            }, i = [], s = t.name || "default", o = t.length || -1, u = t.fps || 30, a = t.hierarchy || [], f = 0; f < a.length; f++) {
                var l = a[f].keys;
                if (l && 0 !== l.length)if (l[0].morphTargets) {
                    for (var o = {}, c = 0; c < l.length; c++)if (l[c].morphTargets)for (var h = 0; h < l[c].morphTargets.length; h++)o[l[c].morphTargets[h]] = -1;
                    for (var p in o) {
                        for (var d = [], v = [], h = 0; h !== l[c].morphTargets.length; ++h) {
                            var m = l[c];
                            d.push(m.time), v.push(m.morphTarget === p ? 1 : 0)
                        }
                        i.push(new Nr(".morphTargetInfluence[" + p + "]", d, v))
                    }
                    o = o.length * (u || 1)
                } else c = ".bones[" + n[f].name + "]", r(Sr, c + ".position", l, "pos", i), r(Tr, c + ".quaternion", l, "rot", i), r(Sr, c + ".scale", l, "scl", i)
            }
            return 0 === i.length ? null : new Or(s, o, i)
        }
    }), Object.assign(Mr.prototype, {
        load: function (e, t, n, r) {
            var i = this;
            (new nr(i.manager)).load(e, function (e) {
                t(i.parse(JSON.parse(e)))
            }, n, r)
        }, setTextures: function (e) {
            this.textures = e
        }, parse: function (e) {
            function t(e) {
                return void 0 === r[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), r[e]
            }

            var r = this.textures, i = new Zi[e.type];
            void 0 !== e.uuid && (i.uuid = e.uuid), void 0 !== e.name && (i.name = e.name), void 0 !== e.color && i.color.setHex(e.color), void 0 !== e.roughness && (i.roughness = e.roughness), void 0 !== e.metalness && (i.metalness = e.metalness), void 0 !== e.emissive && i.emissive.setHex(e.emissive), void 0 !== e.specular && i.specular.setHex(e.specular), void 0 !== e.shininess && (i.shininess = e.shininess), void 0 !== e.uniforms && (i.uniforms = e.uniforms), void 0 !== e.vertexShader && (i.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (i.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (i.vertexColors = e.vertexColors), void 0 !== e.fog && (i.fog = e.fog), void 0 !== e.shading && (i.shading = e.shading), void 0 !== e.blending && (i.blending = e.blending), void 0 !== e.side && (i.side = e.side), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.transparent && (i.transparent = e.transparent), void 0 !== e.alphaTest && (i.alphaTest = e.alphaTest), void 0 !== e.depthTest && (i.depthTest = e.depthTest), void 0 !== e.depthWrite && (i.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (i.colorWrite = e.colorWrite), void 0 !== e.wireframe && (i.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (i.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.wireframeLinecap && (i.wireframeLinecap = e.wireframeLinecap), void 0 !== e.wireframeLinejoin && (i.wireframeLinejoin = e.wireframeLinejoin), void 0 !== e.skinning && (i.skinning = e.skinning), void 0 !== e.morphTargets && (i.morphTargets = e.morphTargets), void 0 !== e.size && (i.size = e.size), void 0 !== e.sizeAttenuation && (i.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (i.map = t(e.map)), void 0 !== e.alphaMap && (i.alphaMap = t(e.alphaMap), i.transparent = !0), void 0 !== e.bumpMap && (i.bumpMap = t(e.bumpMap)), void 0 !== e.bumpScale && (i.bumpScale = e.bumpScale), void 0 !== e.normalMap && (i.normalMap = t(e.normalMap));
            if (void 0 !== e.normalScale) {
                var s = e.normalScale;
                !1 === Array.isArray(s) && (s = [s, s]), i.normalScale = (new n).fromArray(s)
            }
            void 0 !== e.displacementMap && (i.displacementMap = t(e.displacementMap)), void 0 !== e.displacementScale && (i.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (i.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (i.roughnessMap = t(e.roughnessMap)), void 0 !== e.metalnessMap && (i.metalnessMap = t(e.metalnessMap)), void 0 !== e.emissiveMap && (i.emissiveMap = t(e.emissiveMap)), void 0 !== e.emissiveIntensity && (i.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (i.specularMap = t(e.specularMap)), void 0 !== e.envMap && (i.envMap = t(e.envMap)), void 0 !== e.reflectivity && (i.reflectivity = e.reflectivity), void 0 !== e.lightMap && (i.lightMap = t(e.lightMap)), void 0 !== e.lightMapIntensity && (i.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (i.aoMap = t(e.aoMap)), void 0 !== e.aoMapIntensity && (i.aoMapIntensity = e.aoMapIntensity);
            if (void 0 !== e.materials)for (var s = 0, o = e.materials.length; s < o; s++)i.materials.push(this.parse(e.materials[s]));
            return i
        }
    }), Object.assign(_r.prototype, {
        load: function (e, t, n, r) {
            var i = this;
            (new nr(i.manager)).load(e, function (e) {
                t(i.parse(JSON.parse(e)))
            }, n, r)
        }, parse: function (e) {
            var t = new vt, n = e.data.index, r = {
                Int8Array: Int8Array,
                Uint8Array: Uint8Array,
                Uint8ClampedArray: Uint8ClampedArray,
                Int16Array: Int16Array,
                Uint16Array: Uint16Array,
                Int32Array: Int32Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array
            };
            void 0 !== n && (n = new r[n.type](n.array), t.setIndex(new ft(n, 1)));
            var i = e.data.attributes, s;
            for (s in i) {
                var o = i[s], n = new r[o.type](o.array);
                t.addAttribute(s, new ft(n, o.itemSize, o.normalized))
            }
            r = e.data.groups || e.data.drawcalls || e.data.offsets;
            if (void 0 !== r)for (s = 0, n = r.length; s !== n; ++s)i = r[s], t.addGroup(i.start, i.count, i.materialIndex);
            return e = e.data.boundingSphere, void 0 !== e && (r = new a, void 0 !== e.center && r.fromArray(e.center), t.boundingSphere = new Q(r, e.radius)), t
        }
    }), Dr.prototype = {
        constructor: Dr, crossOrigin: void 0, extractUrlBase: function (e) {
            return e = e.split("/"), 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        }, initMaterials: function (e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i)r[i] = this.createMaterial(e[i], t, n);
            return r
        }, createMaterial: function () {
            var t, n, r;
            return function (i, s, o) {
                function u(t, r, i, u, f) {
                    t = s + t;
                    var l = Dr.Handlers.get(t);
                    return null !== l ? t = l.load(t) : (n.setCrossOrigin(o), t = n.load(t)), void 0 !== r && (t.repeat.fromArray(r), 1 !== r[0] && (t.wrapS = 1e3), 1 !== r[1] && (t.wrapT = 1e3)), void 0 !== i && t.offset.fromArray(i), void 0 !== u && ("repeat" === u[0] && (t.wrapS = 1e3), "mirror" === u[0] && (t.wrapS = 1002), "repeat" === u[1] && (t.wrapT = 1e3), "mirror" === u[1] && (t.wrapT = 1002)), void 0 !== f && (t.anisotropy = f), r = e.Math.generateUUID(), a[r] = t, r
                }

                void 0 === t && (t = new U), void 0 === n && (n = new ur), void 0 === r && (r = new Mr);
                var a = {}, f = {uuid: e.Math.generateUUID(), type: "MeshLambertMaterial"}, l;
                for (l in i) {
                    var c = i[l];
                    switch (l) {
                        case"DbgColor":
                        case"DbgIndex":
                        case"opticalDensity":
                        case"illumination":
                            break;
                        case"DbgName":
                            f.name = c;
                            break;
                        case"blending":
                            f.blending = Hi[c];
                            break;
                        case"colorAmbient":
                        case"mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                            break;
                        case"colorDiffuse":
                            f.color = t.fromArray(c).getHex();
                            break;
                        case"colorSpecular":
                            f.specular = t.fromArray(c).getHex();
                            break;
                        case"colorEmissive":
                            f.emissive = t.fromArray(c).getHex();
                            break;
                        case"specularCoef":
                            f.shininess = c;
                            break;
                        case"shading":
                            "basic" === c.toLowerCase() && (f.type = "MeshBasicMaterial"), "phong" === c.toLowerCase() && (f.type = "MeshPhongMaterial"), "standard" === c.toLowerCase() && (f.type = "MeshStandardMaterial");
                            break;
                        case"mapDiffuse":
                            f.map = u(c, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
                            break;
                        case"mapDiffuseRepeat":
                        case"mapDiffuseOffset":
                        case"mapDiffuseWrap":
                        case"mapDiffuseAnisotropy":
                            break;
                        case"mapEmissive":
                            f.emissiveMap = u(c, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
                            break;
                        case"mapEmissiveRepeat":
                        case"mapEmissiveOffset":
                        case"mapEmissiveWrap":
                        case"mapEmissiveAnisotropy":
                            break;
                        case"mapLight":
                            f.lightMap = u(c, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
                            break;
                        case"mapLightRepeat":
                        case"mapLightOffset":
                        case"mapLightWrap":
                        case"mapLightAnisotropy":
                            break;
                        case"mapAO":
                            f.aoMap = u(c, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
                            break;
                        case"mapAORepeat":
                        case"mapAOOffset":
                        case"mapAOWrap":
                        case"mapAOAnisotropy":
                            break;
                        case"mapBump":
                            f.bumpMap = u(c, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
                            break;
                        case"mapBumpScale":
                            f.bumpScale = c;
                            break;
                        case"mapBumpRepeat":
                        case"mapBumpOffset":
                        case"mapBumpWrap":
                        case"mapBumpAnisotropy":
                            break;
                        case"mapNormal":
                            f.normalMap = u(c, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
                            break;
                        case"mapNormalFactor":
                            f.normalScale = [c, c];
                            break;
                        case"mapNormalRepeat":
                        case"mapNormalOffset":
                        case"mapNormalWrap":
                        case"mapNormalAnisotropy":
                            break;
                        case"mapSpecular":
                            f.specularMap = u(c, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
                            break;
                        case"mapSpecularRepeat":
                        case"mapSpecularOffset":
                        case"mapSpecularWrap":
                        case"mapSpecularAnisotropy":
                            break;
                        case"mapMetalness":
                            f.metalnessMap = u(c, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
                            break;
                        case"mapMetalnessRepeat":
                        case"mapMetalnessOffset":
                        case"mapMetalnessWrap":
                        case"mapMetalnessAnisotropy":
                            break;
                        case"mapRoughness":
                            f.roughnessMap = u(c, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
                            break;
                        case"mapRoughnessRepeat":
                        case"mapRoughnessOffset":
                        case"mapRoughnessWrap":
                        case"mapRoughnessAnisotropy":
                            break;
                        case"mapAlpha":
                            f.alphaMap = u(c, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
                            break;
                        case"mapAlphaRepeat":
                        case"mapAlphaOffset":
                        case"mapAlphaWrap":
                        case"mapAlphaAnisotropy":
                            break;
                        case"flipSided":
                            f.side = 1;
                            break;
                        case"doubleSided":
                            f.side = 2;
                            break;
                        case"transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), f.opacity = c;
                            break;
                        case"depthTest":
                        case"depthWrite":
                        case"colorWrite":
                        case"opacity":
                        case"reflectivity":
                        case"transparent":
                        case"visible":
                        case"wireframe":
                            f[l] = c;
                            break;
                        case"vertexColors":
                            !0 === c && (f.vertexColors = 2), "face" === c && (f.vertexColors = 1);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", l, c)
                    }
                }
                return "MeshBasicMaterial" === f.type && delete f.emissive, "MeshPhongMaterial" !== f.type && delete f.specular, 1 > f.opacity && (f.transparent = !0), r.setTextures(a), r.parse(f)
            }
        }()
    }, Dr.Handlers = {
        handlers: [], add: function (e, t) {
            this.handlers.push(e, t)
        }, get: function (e) {
            for (var t = this.handlers, n = 0, r = t.length; n < r; n += 2) {
                var i = t[n + 1];
                if (t[n].test(e))return i
            }
            return null
        }
    }, Object.assign(Pr.prototype, {
        load: function (e, t, n, r) {
            var i = this, s = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Dr.prototype.extractUrlBase(e), o = new nr(this.manager);
            o.setWithCredentials(this.withCredentials), o.load(e, function (n) {
                n = JSON.parse(n);
                var r = n.metadata;
                if (void 0 !== r && (r = r.type, void 0 !== r)) {
                    if ("object" === r.toLowerCase()) {
                        console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                        return
                    }
                    if ("scene" === r.toLowerCase()) {
                        console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.");
                        return
                    }
                }
                n = i.parse(n, s), t(n.geometry, n.materials)
            }, n, r)
        }, setTexturePath: function (e) {
            this.texturePath = e
        }, parse: function (e, t) {
            var r = new pt, s = void 0 !== e.scale ? 1 / e.scale : 1;
            return function (t) {
                var i, s, o, u, f, l, c, h, p, d, v, m, g, y = e.faces;
                l = e.vertices;
                var b = e.normals, w = e.colors, E = 0;
                if (void 0 !== e.uvs) {
                    for (i = 0; i < e.uvs.length; i++)e.uvs[i].length && E++;
                    for (i = 0; i < E; i++)r.faceVertexUvs[i] = []
                }
                u = 0;
                for (f = l.length; u < f;)i = new a, i.x = l[u++] * t, i.y = l[u++] * t, i.z = l[u++] * t, r.vertices.push(i);
                u = 0;
                for (f = y.length; u < f;)if (t = y[u++], p = t & 1, o = t & 2, i = t & 8, c = t & 16, d = t & 32, l = t & 64, t &= 128, p) {
                    p = new ut, p.a = y[u], p.b = y[u + 1], p.c = y[u + 3], v = new ut, v.a = y[u + 1], v.b = y[u + 2], v.c = y[u + 3], u += 4, o && (o = y[u++], p.materialIndex = o, v.materialIndex = o), o = r.faces.length;
                    if (i)for (i = 0; i < E; i++)for (m = e.uvs[i], r.faceVertexUvs[i][o] = [], r.faceVertexUvs[i][o + 1] = [], s = 0; 4 > s; s++)h = y[u++], g = m[2 * h], h = m[2 * h + 1], g = new n(g, h), 2 !== s && r.faceVertexUvs[i][o].push(g), 0 !== s && r.faceVertexUvs[i][o + 1].push(g);
                    c && (c = 3 * y[u++], p.normal.set(b[c++], b[c++], b[c]), v.normal.copy(p.normal));
                    if (d)for (i = 0; 4 > i; i++)c = 3 * y[u++], d = new a(b[c++], b[c++], b[c]), 2 !== i && p.vertexNormals.push(d), 0 !== i && v.vertexNormals.push(d);
                    l && (l = y[u++], l = w[l], p.color.setHex(l), v.color.setHex(l));
                    if (t)for (i = 0; 4 > i; i++)l = y[u++], l = w[l], 2 !== i && p.vertexColors.push(new U(l)), 0 !== i && v.vertexColors.push(new U(l));
                    r.faces.push(p), r.faces.push(v)
                } else {
                    p = new ut, p.a = y[u++], p.b = y[u++], p.c = y[u++], o && (o = y[u++], p.materialIndex = o), o = r.faces.length;
                    if (i)for (i = 0; i < E; i++)for (m = e.uvs[i], r.faceVertexUvs[i][o] = [], s = 0; 3 > s; s++)h = y[u++], g = m[2 * h], h = m[2 * h + 1], g = new n(g, h), r.faceVertexUvs[i][o].push(g);
                    c && (c = 3 * y[u++], p.normal.set(b[c++], b[c++], b[c]));
                    if (d)for (i = 0; 3 > i; i++)c = 3 * y[u++], d = new a(b[c++], b[c++], b[c]), p.vertexNormals.push(d);
                    l && (l = y[u++], p.color.setHex(w[l]));
                    if (t)for (i = 0; 3 > i; i++)l = y[u++], p.vertexColors.push(new U(w[l]));
                    r.faces.push(p)
                }
            }(s), function () {
                var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                if (e.skinWeights)for (var n = 0, s = e.skinWeights.length; n < s; n += t)r.skinWeights.push(new i(e.skinWeights[n], 1 < t ? e.skinWeights[n + 1] : 0, 2 < t ? e.skinWeights[n + 2] : 0, 3 < t ? e.skinWeights[n + 3] : 0));
                if (e.skinIndices)for (n = 0, s = e.skinIndices.length; n < s; n += t)r.skinIndices.push(new i(e.skinIndices[n], 1 < t ? e.skinIndices[n + 1] : 0, 2 < t ? e.skinIndices[n + 2] : 0, 3 < t ? e.skinIndices[n + 3] : 0));
                r.bones = e.bones, r.bones && 0 < r.bones.length && (r.skinWeights.length !== r.skinIndices.length || r.skinIndices.length !== r.vertices.length) && console.warn("When skinning, number of vertices (" + r.vertices.length + "), skinIndices (" + r.skinIndices.length + "), and skinWeights (" + r.skinWeights.length + ") should match.")
            }(), function (t) {
                if (void 0 !== e.morphTargets)for (var n = 0, i = e.morphTargets.length; n < i; n++) {
                    r.morphTargets[n] = {}, r.morphTargets[n].name = e.morphTargets[n].name, r.morphTargets[n].vertices = [];
                    for (var s = r.morphTargets[n].vertices, o = e.morphTargets[n].vertices, u = 0, f = o.length; u < f; u += 3) {
                        var l = new a;
                        l.x = o[u] * t, l.y = o[u + 1] * t, l.z = o[u + 2] * t, s.push(l)
                    }
                }
                if (void 0 !== e.morphColors && 0 < e.morphColors.length)for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), t = r.faces, s = e.morphColors[0].colors, n = 0, i = t.length; n < i; n++)t[n].color.fromArray(s, 3 * n)
            }(s), function () {
                var t = [], n = [];
                void 0 !== e.animation && n.push(e.animation), void 0 !== e.animations && (e.animations.length ? n = n.concat(e.animations) : n.push(e.animations));
                for (var i = 0; i < n.length; i++) {
                    var s = Or.parseAnimation(n[i], r.bones);
                    s && t.push(s)
                }
                r.morphTargets && (n = Or.CreateClipsFromMorphTargetSequences(r.morphTargets, 10), t = t.concat(n)), 0 < t.length && (r.animations = t)
            }(), r.computeFaceNormals(), r.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length ? {geometry: r} : (s = Dr.prototype.initMaterials(e.materials, t, this.crossOrigin), {
                    geometry: r,
                    materials: s
                })
        }
    }), Object.assign(Hr.prototype, {
        load: function (e, t, n, r) {
            "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
            var i = this;
            (new nr(i.manager)).load(e, function (e) {
                i.parse(JSON.parse(e), t)
            }, n, r)
        }, setTexturePath: function (e) {
            this.texturePath = e
        }, setCrossOrigin: function (e) {
            this.crossOrigin = e
        }, parse: function (e, t) {
            var n = this.parseGeometries(e.geometries), r = this.parseImages(e.images, function () {
                void 0 !== t && t(i)
            }), r = this.parseTextures(e.textures, r), r = this.parseMaterials(e.materials, r), i = this.parseObject(e.object, n, r);
            return e.animations && (i.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 === t || t(i), i
        }, parseGeometries: function (e) {
            var t = {};
            if (void 0 !== e)for (var n = new Pr, r = new _r, i = 0, s = e.length; i < s; i++) {
                var o, u = e[i];
                switch (u.type) {
                    case"PlaneGeometry":
                    case"PlaneBufferGeometry":
                        o = new Yi[u.type](u.width, u.height, u.widthSegments, u.heightSegments);
                        break;
                    case"BoxGeometry":
                    case"BoxBufferGeometry":
                    case"CubeGeometry":
                        o = new Yi[u.type](u.width, u.height, u.depth, u.widthSegments, u.heightSegments, u.depthSegments);
                        break;
                    case"CircleGeometry":
                    case"CircleBufferGeometry":
                        o = new Yi[u.type](u.radius, u.segments, u.thetaStart, u.thetaLength);
                        break;
                    case"CylinderGeometry":
                    case"CylinderBufferGeometry":
                        o = new Yi[u.type](u.radiusTop, u.radiusBottom, u.height, u.radialSegments, u.heightSegments, u.openEnded, u.thetaStart, u.thetaLength);
                        break;
                    case"ConeGeometry":
                    case"ConeBufferGeometry":
                        o = new Yi[u.type](u.radius, u.height, u.radialSegments, u.heightSegments, u.openEnded, u.thetaStart, u.thetaLength);
                        break;
                    case"SphereGeometry":
                    case"SphereBufferGeometry":
                        o = new Yi[u.type](u.radius, u.widthSegments, u.heightSegments, u.phiStart, u.phiLength, u.thetaStart, u.thetaLength);
                        break;
                    case"DodecahedronGeometry":
                    case"IcosahedronGeometry":
                    case"OctahedronGeometry":
                    case"TetrahedronGeometry":
                        o = new Yi[u.type](u.radius, u.detail);
                        break;
                    case"RingGeometry":
                    case"RingBufferGeometry":
                        o = new Yi[u.type](u.innerRadius, u.outerRadius, u.thetaSegments, u.phiSegments, u.thetaStart, u.thetaLength);
                        break;
                    case"TorusGeometry":
                    case"TorusBufferGeometry":
                        o = new Yi[u.type](u.radius, u.tube, u.radialSegments, u.tubularSegments, u.arc);
                        break;
                    case"TorusKnotGeometry":
                    case"TorusKnotBufferGeometry":
                        o = new Yi[u.type](u.radius, u.tube, u.tubularSegments, u.radialSegments, u.p, u.q);
                        break;
                    case"LatheGeometry":
                    case"LatheBufferGeometry":
                        o = new Yi[u.type](u.points, u.segments, u.phiStart, u.phiLength);
                        break;
                    case"BufferGeometry":
                        o = r.parse(u);
                        break;
                    case"Geometry":
                        o = n.parse(u.data, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + u.type + '"');
                        continue
                }
                o.uuid = u.uuid, void 0 !== u.name && (o.name = u.name), t[u.uuid] = o
            }
            return t
        }, parseMaterials: function (e, t) {
            var n = {};
            if (void 0 !== e) {
                var r = new Mr;
                r.setTextures(t);
                for (var i = 0, s = e.length; i < s; i++) {
                    var o = r.parse(e[i]);
                    n[o.uuid] = o
                }
            }
            return n
        }, parseAnimations: function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = Or.parse(e[n]);
                t.push(r)
            }
            return t
        }, parseImages: function (e, t) {
            function n(e) {
                return r.manager.itemStart(e), o.load(e, function () {
                    r.manager.itemEnd(e)
                }, void 0, function () {
                    r.manager.itemError(e)
                })
            }

            var r = this, i = {};
            if (void 0 !== e && 0 < e.length) {
                var s = new tr(t), o = new sr(s);
                o.setCrossOrigin(this.crossOrigin);
                for (var s = 0, u = e.length; s < u; s++) {
                    var a = e[s], f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a.url) ? a.url : r.texturePath + a.url;
                    i[a.uuid] = n(f)
                }
            }
            return i
        }, parseTextures: function (e, t) {
            function n(e, t) {
                return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e])
            }

            var i = {};
            if (void 0 !== e)for (var s = 0, o = e.length; s < o; s++) {
                var u = e[s];
                void 0 === u.image && console.warn('THREE.ObjectLoader: No "image" specified for', u.uuid), void 0 === t[u.image] && console.warn("THREE.ObjectLoader: Undefined image", u.image);
                var a = new r(t[u.image]);
                a.needsUpdate = !0, a.uuid = u.uuid, void 0 !== u.name && (a.name = u.name), void 0 !== u.mapping && (a.mapping = n(u.mapping, Bi)), void 0 !== u.offset && a.offset.fromArray(u.offset), void 0 !== u.repeat && a.repeat.fromArray(u.repeat), void 0 !== u.wrap && (a.wrapS = n(u.wrap[0], ji), a.wrapT = n(u.wrap[1], ji)), void 0 !== u.minFilter && (a.minFilter = n(u.minFilter, Fi)), void 0 !== u.magFilter && (a.magFilter = n(u.magFilter, Fi)), void 0 !== u.anisotropy && (a.anisotropy = u.anisotropy), void 0 !== u.flipY && (a.flipY = u.flipY), i[u.uuid] = a
            }
            return i
        }, parseObject: function () {
            var e = new f;
            return function (t, n, r) {
                function i(e) {
                    return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), n[e]
                }

                function s(e) {
                    if (void 0 !== e)return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined material", e), r[e]
                }

                var o;
                switch (t.type) {
                    case"Scene":
                        o = new Qt, void 0 !== t.background && Number.isInteger(t.background) && (o.background = new U(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? o.fog = new Kt(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (o.fog = new Jt(t.fog.color, t.fog.density)));
                        break;
                    case"PerspectiveCamera":
                        o = new wt(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (o.focus = t.focus), void 0 !== t.zoom && (o.zoom = t.zoom), void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset), void 0 !== t.view && (o.view = Object.assign({}, t.view));
                        break;
                    case"OrthographicCamera":
                        o = new Et(t.left, t.right, t.top, t.bottom, t.near, t.far);
                        break;
                    case"AmbientLight":
                        o = new mr(t.color, t.intensity);
                        break;
                    case"DirectionalLight":
                        o = new vr(t.color, t.intensity);
                        break;
                    case"PointLight":
                        o = new pr(t.color, t.intensity, t.distance, t.decay);
                        break;
                    case"SpotLight":
                        o = new hr(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                        break;
                    case"HemisphereLight"
                    :
                        o = new fr(t.color, t.groundColor, t.intensity);
                        break;
                    case"Mesh":
                        o = i(t.geometry);
                        var u = s(t.material);
                        o = o.bones && 0 < o.bones.length ? new sn(o, u) : new mt(o, u);
                        break;
                    case"LOD":
                        o = new en;
                        break;
                    case"Line":
                        o = new un(i(t.geometry), s(t.material), t.mode);
                        break;
                    case"LineSegments":
                        o = new an(i(t.geometry), s(t.material));
                        break;
                    case"PointCloud":
                    case"Points":
                        o = new ln(i(t.geometry), s(t.material));
                        break;
                    case"Sprite":
                        o = new Zt(s(t.material));
                        break;
                    case"Group":
                        o = new cn;
                        break;
                    default:
                        o = new it
                }
                o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.quaternion && o.quaternion.fromArray(t.quaternion), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.castShadow && (o.castShadow = t.castShadow), void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (o.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (o.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && o.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (o.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData);
                if (void 0 !== t.children)for (var a in t.children)o.add(this.parseObject(t.children[a], n, r));
                if ("LOD" === t.type)for (t = t.levels, u = 0; u < t.length; u++) {
                    var f = t[u];
                    a = o.getObjectByProperty("uuid", f.object), void 0 !== a && o.addLevel(a, f.distance)
                }
                return o
            }
        }()
    }), Br.prototype = {
        constructor: Br, getPoint: function (e) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
        }, getPointAt: function (e) {
            return e = this.getUtoTmapping(e), this.getPoint(e)
        }, getPoints: function (e) {
            e || (e = 5);
            for (var t = [], n = 0; n <= e; n++)t.push(this.getPoint(n / e));
            return t
        }, getSpacedPoints: function (e) {
            e || (e = 5);
            for (var t = [], n = 0; n <= e; n++)t.push(this.getPointAt(n / e));
            return t
        }, getLength: function () {
            var e = this.getLengths();
            return e[e.length - 1]
        }, getLengths: function (e) {
            e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
            if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)return this.cacheArcLengths;
            this.needsUpdate = !1;
            var t = [], n, r = this.getPoint(0), i, s = 0;
            t.push(0);
            for (i = 1; i <= e; i++)n = this.getPoint(i / e), s += n.distanceTo(r), t.push(s), r = n;
            return this.cacheArcLengths = t
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.getLengths()
        }, getUtoTmapping: function (e, t) {
            var n = this.getLengths(), r, i = n.length, s;
            s = t ? t : e * n[i - 1];
            for (var o = 0, u = i - 1, a; o <= u;)if (r = Math.floor(o + (u - o) / 2), a = n[r] - s, 0 > a) o = r + 1; else {
                if (!(0 < a)) {
                    u = r;
                    break
                }
                u = r - 1
            }
            return r = u, n[r] === s ? r / (i - 1) : (o = n[r], (r + (s - o) / (n[r + 1] - o)) / (i - 1))
        }, getTangent: function (e) {
            var t = e - 1e-4;
            return e += 1e-4, 0 > t && (t = 0), 1 < e && (e = 1), t = this.getPoint(t), this.getPoint(e).clone().sub(t).normalize()
        }, getTangentAt: function (e) {
            return e = this.getUtoTmapping(e), this.getTangent(e)
        }
    }, Br.create = function (e, t) {
        return e.prototype = Object.create(Br.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
    }, jr.prototype = Object.create(Br.prototype), jr.prototype.constructor = jr, jr.prototype.isLineCurve = !0, jr.prototype.getPoint = function (e) {
        if (1 === e)return this.v2.clone();
        var t = this.v2.clone().sub(this.v1);
        return t.multiplyScalar(e).add(this.v1), t
    }, jr.prototype.getPointAt = function (e) {
        return this.getPoint(e)
    }, jr.prototype.getTangent = function (e) {
        return this.v2.clone().sub(this.v1).normalize()
    }, Fr.prototype = Object.assign(Object.create(Br.prototype), {
        constructor: Fr, add: function (e) {
            this.curves.push(e)
        }, closePath: function () {
            var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
            e.equals(t) || this.curves.push(new jr(t, e))
        }, getPoint: function (e) {
            var t = e * this.getLength(), n = this.getCurveLengths();
            for (e = 0; e < n.length;) {
                if (n[e] >= t)return t = n[e] - t, e = this.curves[e], n = e.getLength(), e.getPointAt(0 === n ? 0 : 1 - t / n);
                e++
            }
            return null
        }, getLength: function () {
            var e = this.getCurveLengths();
            return e[e.length - 1]
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.cacheLengths = null, this.getLengths()
        }, getCurveLengths: function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)return this.cacheLengths;
            for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++)t += this.curves[n].getLength(), e.push(t);
            return this.cacheLengths = e
        }, getSpacedPoints: function (e) {
            e || (e = 40);
            for (var t = [], n = 0; n <= e; n++)t.push(this.getPoint(n / e));
            return this.autoClose && t.push(t[0]), t
        }, getPoints: function (e) {
            e = e || 12;
            for (var t = [], n, r = 0, i = this.curves; r < i.length; r++)for (var s = i[r], s = s.getPoints(s && s.isEllipseCurve ? 2 * e : s && s.isLineCurve ? 1 : s && s.isSplineCurve ? e * s.points.length : e), o = 0; o < s.length; o++) {
                var u = s[o];
                n && n.equals(u) || (t.push(u), n = u)
            }
            return this.autoClose && 1 < t.length && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t
        }, createPointsGeometry: function (e) {
            return e = this.getPoints(e), this.createGeometry(e)
        }, createSpacedPointsGeometry: function (e) {
            return e = this.getSpacedPoints(e), this.createGeometry(e)
        }, createGeometry: function (e) {
            for (var t = new pt, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                t.vertices.push(new a(i.x, i.y, i.z || 0))
            }
            return t
        }
    }), Ir.prototype = Object.create(Br.prototype), Ir.prototype.constructor = Ir, Ir.prototype.isEllipseCurve = !0, Ir.prototype.getPoint = function (e) {
        for (var t = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, i = Math.abs(r) < Number.EPSILON; 0 > r;)r += t;
        for (; r > t;)r -= t;
        r < Number.EPSILON && (r = i ? 0 : t), !0 !== this.aClockwise || i || (r = r === t ? -t : r - t), t = this.aStartAngle + e * r, e = this.aX + this.xRadius * Math.cos(t);
        var s = this.aY + this.yRadius * Math.sin(t);
        return 0 !== this.aRotation && (t = Math.cos(this.aRotation), r = Math.sin(this.aRotation), i = e - this.aX, s -= this.aY, e = i * t - s * r + this.aX, s = i * r + s * t + this.aY), new n(e, s)
    }, e.CurveUtils = {
        tangentQuadraticBezier: function (e, t, n, r) {
            return 2 * (1 - e) * (n - t) + 2 * e * (r - n)
        }, tangentCubicBezier: function (e, t, n, r, i) {
            return -3 * t * (1 - e) * (1 - e) + 3 * n * (1 - e) * (1 - e) - 6 * e * n * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * i
        }, tangentSpline: function (e, t, n, r, i) {
            return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
        }, interpolate: function (e, t, n, r, i) {
            e = .5 * (n - e), r = .5 * (r - t);
            var s = i * i;
            return (2 * t - 2 * n + e + r) * i * s + (-3 * t + 3 * n - 2 * e - r) * s + e * i + t
        }
    }, qr.prototype = Object.create(Br.prototype), qr.prototype.constructor = qr, qr.prototype.isSplineCurve = !0, qr.prototype.getPoint = function (t) {
        var r = this.points;
        t *= r.length - 1;
        var i = Math.floor(t);
        t -= i;
        var s = r[0 === i ? i : i - 1], o = r[i], u = r[i > r.length - 2 ? r.length - 1 : i + 1], r = r[i > r.length - 3 ? r.length - 1 : i + 2], i = e.CurveUtils.interpolate;
        return new n(i(s.x, o.x, u.x, r.x, t), i(s.y, o.y, u.y, r.y, t))
    }, Rr.prototype = Object.create(Br.prototype), Rr.prototype.constructor = Rr, Rr.prototype.getPoint = function (t) {
        var r = e.ShapeUtils.b3;
        return new n(r(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
    }, Rr.prototype.getTangent = function (t) {
        var r = e.CurveUtils.tangentCubicBezier;
        return (new n(r(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y))).normalize()
    }, Ur.prototype = Object.create(Br.prototype), Ur.prototype.constructor = Ur, Ur.prototype.getPoint = function (t) {
        var r = e.ShapeUtils.b2;
        return new n(r(t, this.v0.x, this.v1.x, this.v2.x), r(t, this.v0.y, this.v1.y, this.v2.y))
    }, Ur.prototype.getTangent = function (t) {
        var r = e.CurveUtils.tangentQuadraticBezier;
        return (new n(r(t, this.v0.x, this.v1.x, this.v2.x), r(t, this.v0.y, this.v1.y, this.v2.y))).normalize()
    };
    var ts = Object.assign(Object.create(Fr.prototype), {
        fromPoints: function (e) {
            this.moveTo(e[0].x, e[0].y);
            for (var t = 1, n = e.length; t < n; t++)this.lineTo(e[t].x, e[t].y)
        }, moveTo: function (e, t) {
            this.currentPoint.set(e, t)
        }, lineTo: function (e, t) {
            var r = new jr(this.currentPoint.clone(), new n(e, t));
            this.curves.push(r), this.currentPoint.set(e, t)
        }, quadraticCurveTo: function (e, t, r, i) {
            e = new Ur(this.currentPoint.clone(), new n(e, t), new n(r, i)), this.curves.push(e), this.currentPoint.set(r, i)
        }, bezierCurveTo: function (e, t, r, i, s, o) {
            e = new Rr(this.currentPoint.clone(), new n(e, t), new n(r, i), new n(s, o)), this.curves.push(e), this.currentPoint.set(s, o)
        }, splineThru: function (e) {
            var t = [this.currentPoint.clone()].concat(e), t = new qr(t);
            this.curves.push(t), this.currentPoint.copy(e[e.length - 1])
        }, arc: function (e, t, n, r, i, s) {
            this.absarc(e + this.currentPoint.x, t + this.currentPoint.y, n, r, i, s)
        }, absarc: function (e, t, n, r, i, s) {
            this.absellipse(e, t, n, n, r, i, s)
        }, ellipse: function (e, t, n, r, i, s, o, u) {
            this.absellipse(e + this.currentPoint.x, t + this.currentPoint.y, n, r, i, s, o, u)
        }, absellipse: function (e, t, n, r, i, s, o, u) {
            e = new Ir(e, t, n, r, i, s, o, u), 0 < this.curves.length && (t = e.getPoint(0), t.equals(this.currentPoint) || this.lineTo(t.x, t.y)), this.curves.push(e), e = e.getPoint(1), this.currentPoint.copy(e)
        }
    });
    zr.prototype = Object.assign(Object.create(ts), {
        constructor: zr, getPointsHoles: function (e) {
            for (var t = [], n = 0, r = this.holes.length; n < r; n++)t[n] = this.holes[n].getPoints(e);
            return t
        }, extractAllPoints: function (e) {
            return {shape: this.getPoints(e), holes: this.getPointsHoles(e)}
        }, extractPoints: function (e) {
            return this.extractAllPoints(e)
        }
    }), Wr.prototype = ts, ts.constructor = Wr, Xr.prototype = {
        moveTo: function (e, t) {
            this.currentPath = new Wr, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
        }, lineTo: function (e, t) {
            this.currentPath.lineTo(e, t)
        }, quadraticCurveTo: function (e, t, n, r) {
            this.currentPath.quadraticCurveTo(e, t, n, r)
        }, bezierCurveTo: function (e, t, n, r, i, s) {
            this.currentPath.bezierCurveTo(e, t, n, r, i, s)
        }, splineThru: function (e) {
            this.currentPath.splineThru(e)
        }, toShapes: function (t, n) {
            function r(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) {
                    var i = e[n], s = new zr;
                    s.curves = i.curves, t.push(s)
                }
                return t
            }

            function i(e, t) {
                for (var n = t.length, r = !1, i = n - 1, s = 0; s < n; i = s++) {
                    var o = t[i], u = t[s], a = u.x - o.x, f = u.y - o.y;
                    if (Math.abs(f) > Number.EPSILON) {
                        if (0 > f && (o = t[s], a = -a, u = t[i], f = -f), !(e.y < o.y || e.y > u.y))if (e.y === o.y) {
                            if (e.x === o.x)return !0
                        } else {
                            i = f * (e.x - o.x) - a * (e.y - o.y);
                            if (0 === i)return !0;
                            0 > i || (r = !r)
                        }
                    } else if (e.y === o.y && (u.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= u.x))return !0
                }
                return r
            }

            var s = e.ShapeUtils.isClockWise, o = this.subPaths;
            if (0 === o.length)return [];
            if (!0 === n)return r(o);
            var u, a, f, l = [];
            if (1 === o.length)return a = o[0], f = new zr, f.curves = a.curves, l.push(f), l;
            var c = !s(o[0].getPoints()), c = t ? !c : c;
            f = [];
            var h = [], p = [], d = 0, v;
            h[d] = void 0, p[d] = [];
            for (var m = 0, g = o.length; m < g; m++)a = o[m], v = a.getPoints(), u = s(v), (u = t ? !u : u) ? (!c && h[d] && d++, h[d] = {
                    s: new zr,
                    p: v
                }, h[d].s.curves = a.curves, c && d++, p[d] = []) : p[d].push({h: a, p: v[0]});
            if (!h[0])return r(o);
            if (1 < h.length) {
                m = !1, a = [], s = 0;
                for (o = h.length; s < o; s++)f[s] = [];
                s = 0;
                for (o = h.length; s < o; s++)for (u = p[s], c = 0; c < u.length; c++) {
                    d = u[c], v = !0;
                    for (g = 0; g < h.length; g++)i(d.p, h[g].p) && (s !== g && a.push({
                        froms: s,
                        tos: g,
                        hole: c
                    }), v ? (v = !1, f[g].push(d)) : m = !0);
                    v && f[s].push(d)
                }
                0 < a.length && (m || (p = f))
            }
            m = 0;
            for (s = h.length; m < s; m++)for (f = h[m].s, l.push(f), a = p[m], o = 0, u = a.length; o < u; o++)f.holes.push(a[o].h);
            return l
        }
    }, Object.assign(Vr.prototype, {
        isFont: !0, generateShapes: function (t, n, r) {
            void 0 === n && (n = 100), void 0 === r && (r = 4);
            var i = this.data;
            t = String(t).split("");
            var s = n / i.resolution, o = 0;
            n = [];
            for (var u = 0; u < t.length; u++) {
                var a;
                a = s;
                var f = o, l = i.glyphs[t[u]] || i.glyphs["?"];
                if (l) {
                    var c = new Xr, h = [], p = e.ShapeUtils.b2, d = e.ShapeUtils.b3, v, m, g, y, b, w, E, S;
                    if (l.o)for (var x = l._cachedOutline || (l._cachedOutline = l.o.split(" ")), T = 0, N = x.length; T < N;)switch (x[T++]) {
                        case"m":
                            v = x[T++] * a + f, m = x[T++] * a, c.moveTo(v, m);
                            break;
                        case"l":
                            v = x[T++] * a + f, m = x[T++] * a, c.lineTo(v, m);
                            break;
                        case"q":
                            v = x[T++] * a + f, m = x[T++] * a, b = x[T++] * a + f, w = x[T++] * a, c.quadraticCurveTo(b, w, v, m);
                            if (y = h[h.length - 1]) {
                                g = y.x, y = y.y;
                                for (var C = 1; C <= r; C++) {
                                    var k = C / r;
                                    p(k, g, b, v), p(k, y, w, m)
                                }
                            }
                            break;
                        case"b":
                            if (v = x[T++] * a + f, m = x[T++] * a, b = x[T++] * a + f, w = x[T++] * a, E = x[T++] * a + f, S = x[T++] * a, c.bezierCurveTo(b, w, E, S, v, m), y = h[h.length - 1])for (g = y.x, y = y.y, C = 1; C <= r; C++)k = C / r, d(k, g, b, E, v), d(k, y, w, S, m)
                    }
                    a = {offset: l.ha * a, path: c}
                } else a = void 0;
                o += a.offset, n.push(a.path)
            }
            r = [], i = 0;
            for (t = n.length; i < t; i++)Array.prototype.push.apply(r, n[i].toShapes());
            return r
        }
    }), Object.assign($r.prototype, {
        load: function (e, t, n, r) {
            var i = this;
            (new nr(this.manager)).load(e, function (e) {
                var n;
                try {
                    n = JSON.parse(e)
                } catch (r) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(e.substring(65, e.length - 2))
                }
                e = i.parse(n), t && t(e)
            }, n, r)
        }, parse: function (e) {
            return new Vr(e)
        }
    });
    var ns;
    Object.assign(Kr.prototype, {
        load: function (e, t, n, r) {
            var i = new nr(this.manager);
            i.setResponseType("arraybuffer"), i.load(e, function (e) {
                Jr().decodeAudioData(e, function (e) {
                    t(e)
                })
            }, n, r)
        }
    }), Object.assign(Qr.prototype, {
        update: function () {
            var t, n, r, i, s, o, u, a = new f, l = new f;
            return function (f) {
                if (t !== this || n !== f.focus || r !== f.fov || i !== f.aspect * this.aspect || s !== f.near || o !== f.far || u !== f.zoom) {
                    t = this, n = f.focus, r = f.fov, i = f.aspect * this.aspect, s = f.near, o = f.far, u = f.zoom;
                    var c = f.projectionMatrix.clone(), h = this.eyeSep / 2, p = h * s / n, d = s * Math.tan(e.Math.DEG2RAD * r * .5) / u, v;
                    l.elements[12] = -h, a.elements[12] = h, h = -d * i + p, v = d * i + p, c.elements[0] = 2 * s / (v - h), c.elements[8] = (v + h) / (v - h), this.cameraL.projectionMatrix.copy(c), h = -d * i - p, v = d * i - p, c.elements[0] = 2 * s / (v - h), c.elements[8] = (v + h) / (v - h), this.cameraR.projectionMatrix.copy(c)
                }
                this.cameraL.matrixWorld.copy(f.matrixWorld).multiply(l), this.cameraR.matrixWorld.copy(f.matrixWorld).multiply(a)
            }
        }()
    }), Gr.prototype = Object.create(it.prototype), Gr.prototype.constructor = Gr, Yr.prototype = Object.assign(Object.create(it.prototype), {
        constructor: Yr,
        getInput: function () {
            return this.gain
        },
        removeFilter: function () {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function () {
            return this.filter
        },
        setFilter: function (e) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function () {
            return this.gain.gain.value
        },
        setMasterVolume: function (e) {
            this.gain.gain.value = e
        },
        updateMatrixWorld: function () {
            var e = new a, t = new u, n = new a, r = new a;
            return function (i) {
                it.prototype.updateMatrixWorld.call(this, i), i = this.context.listener;
                var s = this.up;
                this.matrixWorld.decompose(e, t, n), r.set(0, 0, -1).applyQuaternion(t), i.setPosition(e.x, e.y, e.z), i.setOrientation(r.x, r.y, r.z, s.x, s.y, s.z)
            }
        }()
    }), Zr.prototype = Object.assign(Object.create(it.prototype), {
        constructor: Zr, getOutput: function () {
            return this.gain
        }, setNodeSource: function (e) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
        }, setBuffer: function (e) {
            return this.source.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
        }, play: function () {
            if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing."); else {
                if (!1 !== this.hasPlaybackControl) {
                    var e = this.context.createBufferSource();
                    return e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
        }, pause: function () {
            if (!1 !== this.hasPlaybackControl)return this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, stop: function () {
            if (!1 !== this.hasPlaybackControl)return this.source.stop(), this.startTime = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, connect: function () {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var e = 1, t = this.filters.length; e < t; e++)this.filters[e - 1].connect(this.filters[e]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        }, disconnect: function () {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var e = 1, t = this.filters.length; e < t; e++)this.filters[e - 1].disconnect(this.filters[e]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        }, getFilters: function () {
            return this.filters
        }, setFilters: function (e) {
            return e || (e = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
        }, getFilter: function () {
            return this.getFilters()[0]
        }, setFilter: function (e) {
            return this.setFilters(e ? [e] : [])
        }, setPlaybackRate: function (e) {
            if (!1 !== this.hasPlaybackControl)return this.playbackRate = e, !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        }, getPlaybackRate: function () {
            return this.playbackRate
        }, onEnded: function () {
            this.isPlaying = !1
        }, getLoop: function () {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.source.loop
        }, setLoop: function (e) {
            !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : this.source.loop = e
        }, getVolume: function () {
            return this.gain.gain.value
        }, setVolume: function (e) {
            return this.gain.gain.value = e, this
        }
    }), ei.prototype = Object.assign(Object.create(Zr.prototype), {
        constructor: ei, getOutput: function () {
            return this.panner
        }, getRefDistance: function () {
            return this.panner.refDistance
        }, setRefDistance: function (e) {
            this.panner.refDistance = e
        }, getRolloffFactor: function () {
            return this.panner.rolloffFactor
        }, setRolloffFactor: function (e) {
            this.panner.rolloffFactor = e
        }, getDistanceModel: function () {
            return this.panner.distanceModel
        }, setDistanceModel: function (e) {
            this.panner.distanceModel = e
        }, getMaxDistance: function () {
            return this.panner.maxDistance
        }, setMaxDistance: function (e) {
            this.panner.maxDistance = e
        }, updateMatrixWorld: function () {
            var e = new a;
            return function (t) {
                it.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
            }
        }()
    }), Object.assign(ti.prototype, {
        getFrequencyData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data
        }, getAverageFrequency: function () {
            for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++)e += t[n];
            return e / t.length
        }
    }), ni.prototype = {
        constructor: ni, accumulate: function (e, t) {
            var n = this.buffer, r = this.valueSize, i = e * r + r, s = this.cumulativeWeight;
            if (0 === s) {
                for (s = 0; s !== r; ++s)n[i + s] = n[s];
                s = t
            } else s += t, this._mixBufferRegion(n, i, 0, t / s, r);
            this.cumulativeWeight = s
        }, apply: function (e) {
            var t = this.valueSize, n = this.buffer;
            e = e * t + t;
            var r = this.cumulativeWeight, i = this.binding;
            this.cumulativeWeight = 0, 1 > r && this._mixBufferRegion(n, e, 3 * t, 1 - r, t);
            for (var r = t, s = t + t; r !== s; ++r)if (n[r] !== n[r + t]) {
                i.setValue(n, e);
                break
            }
        }, saveOriginalState: function () {
            var e = this.buffer, t = this.valueSize, n = 3 * t;
            this.binding.getValue(e, n);
            for (var r = t; r !== n; ++r)e[r] = e[n + r % t];
            this.cumulativeWeight = 0
        }, restoreOriginalState: function () {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        }, _select: function (e, t, n, r, i) {
            if (.5 <= r)for (r = 0; r !== i; ++r)e[t + r] = e[n + r]
        }, _slerp: function (e, t, n, r, i) {
            u.slerpFlat(e, t, e, t, e, n, r)
        }, _lerp: function (e, t, n, r, i) {
            for (var s = 1 - r, o = 0; o !== i; ++o) {
                var u = t + o;
                e[u] = e[u] * s + e[n + o] * r
            }
        }
    }, ri.prototype = {
        constructor: ri, getValue: function (e, t) {
            this.bind(), this.getValue(e, t)
        }, setValue: function (e, t) {
            this.bind(), this.setValue(e, t)
        }, bind: function () {
            var e = this.node, t = this.parsedPath, n = t.objectName, r = t.propertyName, i = t.propertyIndex;
            e || (this.node = e = ri.findNode(this.rootNode, t.nodeName) || this.rootNode), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable;
            if (e) {
                if (n) {
                    var s = t.objectIndex;
                    switch (n) {
                        case"materials":
                            if (!e.material) {
                                console.error("  can not bind to material as node does not have a material", this);
                                return
                            }
                            if (!e.material.materials) {
                                console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                                return
                            }
                            e = e.material.materials;
                            break;
                        case"bones":
                            if (!e.skeleton) {
                                console.error("  can not bind to bones as node does not have a skeleton", this);
                                return
                            }
                            e = e.skeleton.bones;
                            for (n = 0; n < e.length; n++)if (e[n].name === s) {
                                s = n;
                                break
                            }
                            break;
                        default:
                            if (void 0 === e[n]) {
                                console.error("  can not bind to objectName of node, undefined", this);
                                return
                            }
                            e = e[n]
                    }
                    if (void 0 !== s) {
                        if (void 0 === e[s]) {
                            console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                            return
                        }
                        e = e[s]
                    }
                }
                s = e[r];
                if (void 0 === s) console.error("  trying to update property for track: " + t.nodeName + "." + r + " but it wasn't found.", e); else {
                    t = this.Versioning.None, void 0 !== e.needsUpdate ? (t = this.Versioning.NeedsUpdate, this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (t = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = e), n = this.BindingType.Direct;
                    if (void 0 !== i) {
                        if ("morphTargetInfluences" === r) {
                            if (!e.geometry) {
                                console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                                return
                            }
                            if (!e.geometry.morphTargets) {
                                console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                                return
                            }
                            for (n = 0; n < this.node.geometry.morphTargets.length; n++)if (e.geometry.morphTargets[n].name === i) {
                                i = n;
                                break
                            }
                        }
                        n = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i
                    } else void 0 !== s.fromArray && void 0 !== s.toArray ? (n = this.BindingType.HasFromToArray, this.resolvedProperty = s) : void 0 !== s.length ? (n = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
                    this.getValue = this.GetterByBindingType[n], this.setValue = this.SetterByBindingTypeAndVersioning[n][t]
                }
            } else console.error("  trying to update node for track: " + this.path + " but it wasn't found.")
        }, unbind: function () {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }, Object.assign(ri.prototype, {
        _getValue_unavailable: function () {
        },
        _setValue_unavailable: function () {
        },
        _getValue_unbound: ri.prototype.getValue,
        _setValue_unbound: ri.prototype.setValue,
        BindingType: {Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3},
        Versioning: {None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2},
        GetterByBindingType: [function (e, t) {
            e[t] = this.node[this.propertyName]
        }, function (e, t) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)e[t++] = n[r]
        }, function (e, t) {
            e[t] = this.resolvedProperty[this.propertyIndex]
        }, function (e, t) {
            this.resolvedProperty.toArray(e, t)
        }],
        SetterByBindingTypeAndVersioning: [[function (e, t) {
            this.node[this.propertyName] = e[t]
        }, function (e, t) {
            this.node[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
        }, function (e, t) {
            this.node[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (e, t) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)n[r] = e[t++]
        }, function (e, t) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)n[r] = e[t++];
            this.targetObject.needsUpdate = !0
        }, function (e, t) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)n[r] = e[t++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t]
        }, function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
        }, function (e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (e, t) {
            this.resolvedProperty.fromArray(e, t)
        }, function (e, t) {
            this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
        }, function (e, t) {
            this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
        }]]
    }), ri.Composite = function (e, t, n) {
        n = n || ri.parseTrackName(t), this._targetGroup = e, this._bindings = e.subscribe_(t, n)
    }, ri.Composite.prototype = {
        constructor: ri.Composite, getValue: function (e, t) {
            this.bind();
            var n = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== n && n.getValue(e, t)
        }, setValue: function (e, t) {
            for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)n[r].setValue(e, t)
        }, bind: function () {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind()
        }, unbind: function () {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind()
        }
    }, ri.create = function (e, t, n) {
        return e && e.isAnimationObjectGroup ? new ri.Composite(e, t, n) : new ri(e, t, n)
    }, ri.parseTrackName = function (e) {
        var t = /^((?:\w+[\/:])*)(\w+)?(?:\.(\w+)(?:\[(.+)\])?)?\.(\w+)(?:\[(.+)\])?$/.exec(e);
        if (!t)throw Error("cannot parse trackName at all: " + e);
        t = {nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6]};
        if (null === t.propertyName || 0 === t.propertyName.length)throw Error("can not parse propertyName from trackName: " + e);
        return t
    }, ri.findNode = function (e, t) {
        if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid)return e;
        if (e.skeleton) {
            var n = function (e) {
                for (var n = 0; n < e.bones.length; n++) {
                    var r = e.bones[n];
                    if (r.name === t)return r
                }
                return null
            }(e.skeleton);
            if (n)return n
        }
        if (e.children) {
            var r = function (e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (i.name === t || i.uuid === t || (i = r(i.children)))return i
                }
                return null
            };
            if (n = r(e.children))return n
        }
        return null
    }, ii.prototype = {
        constructor: ii, isAnimationObjectGroup: !0, add: function (e) {
            for (var t = this._objects, n = t.length, r = this.nCachedObjects_, i = this._indicesByUUID, s = this._paths, o = this._parsedPaths, u = this._bindings, a = u.length, f = 0, l = arguments.length; f !== l; ++f) {
                var c = arguments[f], h = c.uuid, p = i[h];
                if (void 0 === p) {
                    p = n++, i[h] = p, t.push(c);
                    for (var h = 0, d = a; h !== d; ++h)u[h].push(new ri(c, s[h], o[h]))
                } else if (p < r) {
                    var v = t[p], m = --r, d = t[m];
                    i[d.uuid] = p, t[p] = d, i[h] = m, t[m] = c, h = 0;
                    for (d = a; h !== d; ++h) {
                        var g = u[h], y = g[p];
                        g[p] = g[m], void 0 === y && (y = new ri(c, s[h], o[h])), g[m] = y
                    }
                } else t[p] !== v && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = r
        }, remove: function (e) {
            for (var t = this._objects, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, s = i.length, o = 0, u = arguments.length; o !== u; ++o) {
                var a = arguments[o], f = a.uuid, l = r[f];
                if (void 0 !== l && l >= n) {
                    var c = n++, h = t[c];
                    r[h.uuid] = l, t[l] = h, r[f] = c, t[c] = a, a = 0;
                    for (f = s; a !== f; ++a) {
                        var h = i[a], p = h[l];
                        h[l] = h[c], h[c] = p
                    }
                }
            }
            this.nCachedObjects_ = n
        }, uncache: function (e) {
            for (var t = this._objects, n = t.length, r = this.nCachedObjects_, i = this._indicesByUUID, s = this._bindings, o = s.length, u = 0, a = arguments.length; u !== a; ++u) {
                var f = arguments[u].uuid, l = i[f];
                if (void 0 !== l)if (delete i[f], l < r) {
                    var f = --r, c = t[f], h = --n, p = t[h];
                    i[c.uuid] = l, t[l] = c, i[p.uuid] = f, t[f] = p, t.pop(), c = 0;
                    for (p = o; c !== p; ++c) {
                        var d = s[c], v = d[h];
                        d[l] = d[f], d[f] = v, d.pop()
                    }
                } else for (h = --n, p = t[h], i[p.uuid] = l, t[l] = p, t.pop(), c = 0, p = o; c !== p; ++c)d = s[c], d[l] = d[h], d.pop()
            }
            this.nCachedObjects_ = r
        }, subscribe_: function (e, t) {
            var n = this._bindingsIndicesByPath, r = n[e], i = this._bindings;
            if (void 0 !== r)return i[r];
            var s = this._paths, o = this._parsedPaths, u = this._objects, a = this.nCachedObjects_, f = Array(u.length), r = i.length;
            n[e] = r, s.push(e), o.push(t), i.push(f), n = a;
            for (r = u.length; n !== r; ++n)f[n] = new ri(u[n], e, t);
            return f
        }, unsubscribe_: function (e) {
            var t = this._bindingsIndicesByPath, n = t[e];
            if (void 0 !== n) {
                var r = this._paths, i = this._parsedPaths, s = this._bindings, o = s.length - 1, u = s[o];
                t[e[o]] = n, s[n] = u, s.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop()
            }
        }
    }, si.prototype = {
        constructor: si, play: function () {
            return this._mixer._activateAction(this), this
        }, stop: function () {
            return this._mixer._deactivateAction(this), this.reset()
        }, reset: function () {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        }, isRunning: function () {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        }, isScheduled: function () {
            return this._mixer._isActiveAction(this)
        }, startAt: function (e) {
            return this._startTime = e, this
        }, setLoop: function (e, t) {
            return this.loop = e, this.repetitions = t, this
        }, setEffectiveWeight: function (e) {
            return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
        }, getEffectiveWeight: function () {
            return this._effectiveWeight
        }, fadeIn: function (e) {
            return this._scheduleFading(e, 0, 1)
        }, fadeOut: function (e) {
            return this._scheduleFading(e, 1, 0)
        }, crossFadeFrom: function (e, t, n) {
            e.fadeOut(t), this.fadeIn(t);
            if (n) {
                n = this._clip.duration;
                var r = e._clip.duration, i = n / r;
                e.warp(1, r / n, t), this.warp(i, 1, t)
            }
            return this
        }, crossFadeTo: function (e, t, n) {
            return e.crossFadeFrom(this, t, n)
        }, stopFading: function () {
            var e = this._weightInterpolant;
            return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        }, setEffectiveTimeScale: function (e) {
            return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
        }, getEffectiveTimeScale: function () {
            return this._effectiveTimeScale
        }, setDuration: function (e) {
            return this.timeScale = this._clip.duration / e, this.stopWarping()
        }, syncWith: function (e) {
            return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
        }, halt: function (e) {
            return this.warp(this._effectiveTimeScale, 0, e)
        }, warp: function (e, t, n) {
            var r = this._mixer, i = r.time, s = this._timeScaleInterpolant, o = this.timeScale;
            return null === s && (this._timeScaleInterpolant = s = r._lendControlInterpolant()), r = s.parameterPositions, s = s.sampleValues, r[0] = i, r[1] = i + n, s[0] = e / o, s[1] = t / o, this
        }, stopWarping: function () {
            var e = this._timeScaleInterpolant;
            return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        }, getMixer: function () {
            return this._mixer
        }, getClip: function () {
            return this._clip
        }, getRoot: function () {
            return this._localRoot || this._mixer._root
        }, _update: function (e, t, n, r) {
            var i = this._startTime;
            if (null !== i) {
                t = (e - i) * n;
                if (0 > t || 0 === n)return;
                this._startTime = null, t *= n
            }
            t *= this._updateTimeScale(e), n = this._updateTime(t), e = this._updateWeight(e);
            if (0 < e) {
                t = this._interpolants;
                for (var i = this._propertyBindings, s = 0, o = t.length; s !== o; ++s)t[s].evaluate(n), i[s].accumulate(r, e)
            }
        }, _updateWeight: function (e) {
            var t = 0;
            if (this.enabled) {
                var t = this.weight, n = this._weightInterpolant;
                if (null !== n) {
                    var r = n.evaluate(e)[0], t = t * r;
                    e > n.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = t
        }, _updateTimeScale: function (e) {
            var t = 0;
            if (!this.paused) {
                var t = this.timeScale, n = this._timeScaleInterpolant;
                if (null !== n) {
                    var r = n.evaluate(e)[0], t = t * r;
                    e > n.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
                }
            }
            return this._effectiveTimeScale = t
        }, _updateTime: function (e) {
            var t = this.time + e;
            if (0 === e)return t;
            var n = this._clip.duration, r = this.loop, i = this._loopCount;
            if (2200 === r)e:{
                if (-1 === i && (this.loopCount = 0, this._setEndings(!0, !0, !1)), t >= n) t = n; else {
                    if (!(0 > t))break e;
                    t = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 0 > e ? -1 : 1
                })
            } else {
                r = 2202 === r, -1 === i && (0 <= e ? (i = 0, this._setEndings(!0, 0 === this.repetitions, r)) : this._setEndings(0 === this.repetitions, !0, r));
                if (t >= n || 0 > t) {
                    var s = Math.floor(t / n), t = t - n * s, i = i + Math.abs(s), o = this.repetitions - i;
                    0 > o ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = 0 < e ? n : 0, this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: 0 < e ? 1 : -1
                        })) : (0 === o ? (e = 0 > e, this._setEndings(e, !e, r)) : this._setEndings(!1, !1, r), this._loopCount = i, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: s
                        }))
                }
                if (r && 1 === (i & 1))return this.time = t, n - t
            }
            return this.time = t
        }, _setEndings: function (e, t, n) {
            var r = this._interpolantSettings;
            n ? (r.endingStart = 2401, r.endingEnd = 2401) : (r.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, r.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        }, _scheduleFading: function (e, t, n) {
            var r = this._mixer, i = r.time, s = this._weightInterpolant;
            return null === s && (this._weightInterpolant = s = r._lendControlInterpolant()), r = s.parameterPositions, s = s.sampleValues, r[0] = i, s[0] = t, r[1] = i + e, s[1] = n, this
        }
    }, Object.assign(oi.prototype, t.prototype, {
        clipAction: function (e, t) {
            var n = t || this._root, r = n.uuid, i = "string" == typeof e ? Or.findByName(n, e) : e, n = null !== i ? i.uuid : e, s = this._actionsByClip[n], o = null;
            if (void 0 !== s) {
                o = s.actionByRoot[r];
                if (void 0 !== o)return o;
                o = s.knownActions[0], null === i && (i = o._clip)
            }
            return null === i ? null : (i = new si(this, i, t), this._bindAction(i, o), this._addInactiveAction(i, n, r), i)
        }, existingAction: function (e, t) {
            var n = t || this._root, r = n.uuid, n = "string" == typeof e ? Or.findByName(n, e) : e, n = this._actionsByClip[n ? n.uuid : e];
            return void 0 !== n ? n.actionByRoot[r] || null : null
        }, stopAllAction: function () {
            for (var e = this._actions, t = this._nActiveActions, n = this._bindings, r = this._nActiveBindings, i = this._nActiveBindings = this._nActiveActions = 0; i !== t; ++i)e[i].reset();
            for (i = 0; i !== r; ++i)n[i].useCount = 0;
            return this
        }, update: function (e) {
            e *= this.timeScale;
            for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), s = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
                var u = t[o];
                u.enabled && u._update(r, e, i, s)
            }
            e = this._bindings, t = this._nActiveBindings;
            for (o = 0; o !== t; ++o)e[o].apply(s);
            return this
        }, getRoot: function () {
            return this._root
        }, uncacheClip: function (e) {
            var t = this._actions;
            e = e.uuid;
            var n = this._actionsByClip, r = n[e];
            if (void 0 !== r) {
                for (var r = r.knownActions, i = 0, s = r.length; i !== s; ++i) {
                    var o = r[i];
                    this._deactivateAction(o);
                    var u = o._cacheIndex, a = t[t.length - 1];
                    o._cacheIndex = null, o._byClipCacheIndex = null, a._cacheIndex = u, t[u] = a, t.pop(), this._removeInactiveBindingsForAction(o)
                }
                delete n[e]
            }
        }, uncacheRoot: function (e) {
            e = e.uuid;
            var t = this._actionsByClip, n;
            for (n in t) {
                var r = t[n].actionByRoot[e];
                void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
            }
            n = this._bindingsByRootAndName[e];
            if (void 0 !== n)for (var i in n)e = n[i], e.restoreOriginalState(), this._removeInactiveBinding(e)
        }, uncacheAction: function (e, t) {
            var n = this.existingAction(e, t);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
    }), Object.assign(oi.prototype, {
        _bindAction: function (e,
                               t) {
            var n = e._localRoot || this._root, r = e._clip.tracks, i = r.length, s = e._propertyBindings, o = e._interpolants, u = n.uuid, a = this._bindingsByRootAndName, f = a[u];
            void 0 === f && (f = {}, a[u] = f);
            for (a = 0; a !== i; ++a) {
                var l = r[a], c = l.name, h = f[c];
                if (void 0 === h) {
                    h = s[a];
                    if (void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, u, c));
                        continue
                    }
                    h = new ni(ri.create(n, c, t && t._propertyBindings[a].binding.parsedPath), l.ValueTypeName, l.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, u, c)
                }
                s[a] = h, o[a].resultBuffer = h.buffer
            }
        }, _activateAction: function (e) {
            if (!this._isActiveAction(e)) {
                if (null === e._cacheIndex) {
                    var t = (e._localRoot || this._root).uuid, n = e._clip.uuid, r = this._actionsByClip[n];
                    this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t)
                }
                t = e._propertyBindings, n = 0;
                for (r = t.length; n !== r; ++n) {
                    var i = t[n];
                    0 === i.useCount++ && (this._lendBinding(i), i.saveOriginalState())
                }
                this._lendAction(e)
            }
        }, _deactivateAction: function (e) {
            if (this._isActiveAction(e)) {
                for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
                    var i = t[n];
                    0 === --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
                }
                this._takeBackAction(e)
            }
        }, _initMemoryManager: function () {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var e = this;
            this.stats = {
                actions: {
                    get total() {
                        return e._actions.length
                    }, get inUse() {
                        return e._nActiveActions
                    }
                }, bindings: {
                    get total() {
                        return e._bindings.length
                    }, get inUse() {
                        return e._nActiveBindings
                    }
                }, controlInterpolants: {
                    get total() {
                        return e._controlInterpolants.length
                    }, get inUse() {
                        return e._nActiveControlInterpolants
                    }
                }
            }
        }, _isActiveAction: function (e) {
            return e = e._cacheIndex, null !== e && e < this._nActiveActions
        }, _addInactiveAction: function (e, t, n) {
            var r = this._actions, i = this._actionsByClip, s = i[t];
            void 0 === s ? (s = {
                    knownActions: [e],
                    actionByRoot: {}
                }, e._byClipCacheIndex = 0, i[t] = s) : (t = s.knownActions, e._byClipCacheIndex = t.length, t.push(e)), e._cacheIndex = r.length, r.push(e), s.actionByRoot[n] = e
        }, _removeInactiveAction: function (e) {
            var t = this._actions, n = t[t.length - 1], r = e._cacheIndex;
            n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
            var n = e._clip.uuid, r = this._actionsByClip, i = r[n], s = i.knownActions, o = s[s.length - 1], u = e._byClipCacheIndex;
            o._byClipCacheIndex = u, s[u] = o, s.pop(), e._byClipCacheIndex = null, delete i.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete r[n], this._removeInactiveBindingsForAction(e)
        }, _removeInactiveBindingsForAction: function (e) {
            e = e._propertyBindings;
            for (var t = 0, n = e.length; t !== n; ++t) {
                var r = e[t];
                0 === --r.referenceCount && this._removeInactiveBinding(r)
            }
        }, _lendAction: function (e) {
            var t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, i = t[r];
            e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
        }, _takeBackAction: function (e) {
            var t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, i = t[r];
            e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
        }, _addInactiveBinding: function (e, t, n) {
            var r = this._bindingsByRootAndName, i = r[t], s = this._bindings;
            void 0 === i && (i = {}, r[t] = i), i[n] = e, e._cacheIndex = s.length, s.push(e)
        }, _removeInactiveBinding: function (e) {
            var t = this._bindings, n = e.binding, r = n.rootNode.uuid, n = n.path, i = this._bindingsByRootAndName, s = i[r], o = t[t.length - 1];
            e = e._cacheIndex, o._cacheIndex = e, t[e] = o, t.pop(), delete s[n];
            e:{
                for (var u in s)break e;
                delete i[r]
            }
        }, _lendBinding: function (e) {
            var t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, i = t[r];
            e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
        }, _takeBackBinding: function (e) {
            var t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, i = t[r];
            e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
        }, _lendControlInterpolant: function () {
            var e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
            return void 0 === n && (n = new br(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n
        }, _takeBackControlInterpolant: function (e) {
            var t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, i = t[r];
            e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i
        }, _controlInterpolantsResultBuffer: new Float32Array(1)
    }), ui.prototype = {
        constructor: ui, onUpdate: function (e) {
            return this.dynamic = !0, this.onUpdateCallback = e, this
        }
    }, ai.prototype = Object.create(vt.prototype), ai.prototype.constructor = ai, ai.prototype.isInstancedBufferGeometry = !0, ai.prototype.addGroup = function (e, t, n) {
        this.groups.push({start: e, count: t, instances: n})
    }, ai.prototype.copy = function (e) {
        var t = e.index;
        null !== t && this.setIndex(t.clone());
        var t = e.attributes, n;
        for (n in t)this.addAttribute(n, t[n].clone());
        e = e.groups, n = 0;
        for (t = e.length; n < t; n++) {
            var r = e[n];
            this.addGroup(r.start, r.count, r.instances)
        }
        return this
    }, fi.prototype = {
        constructor: fi, isInterleavedBufferAttribute: !0, get count() {
            return this.data.count
        }, get array() {
            return this.data.array
        }, setX: function (e, t) {
            return this.data.array[e * this.data.stride + this.offset] = t, this
        }, setY: function (e, t) {
            return this.data.array[e * this.data.stride + this.offset + 1] = t, this
        }, setZ: function (e, t) {
            return this.data.array[e * this.data.stride + this.offset + 2] = t, this
        }, setW: function (e, t) {
            return this.data.array[e * this.data.stride + this.offset + 3] = t, this
        }, getX: function (e) {
            return this.data.array[e * this.data.stride + this.offset]
        }, getY: function (e) {
            return this.data.array[e * this.data.stride + this.offset + 1]
        }, getZ: function (e) {
            return this.data.array[e * this.data.stride + this.offset + 2]
        }, getW: function (e) {
            return this.data.array[e * this.data.stride + this.offset + 3]
        }, setXY: function (e, t, n) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
        }, setXYZ: function (e, t, n, r) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this
        }, setXYZW: function (e, t, n, r, i) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this
        }
    }, li.prototype = {
        constructor: li, isInterleavedBuffer: !0, set needsUpdate(e) {
            !0 === e && this.version++
        }, setDynamic: function (e) {
            return this.dynamic = e, this
        }, copy: function (e) {
            return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.dynamic = e.dynamic, this
        }, copyAt: function (e, t, n) {
            e *= this.stride, n *= t.stride;
            for (var r = 0, i = this.stride; r < i; r++)this.array[e + r] = t.array[n + r];
            return this
        }, set: function (e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }
    }, ci.prototype = Object.create(li.prototype), ci.prototype.constructor = ci, ci.prototype.isInstancedInterleavedBuffer = !0, ci.prototype.copy = function (e) {
        return li.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
    }, hi.prototype = Object.create(ft.prototype), hi.prototype.constructor = hi, hi.prototype.isInstancedBufferAttribute = !0, hi.prototype.copy = function (e) {
        return ft.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
    }, pi.prototype = {
        constructor: pi, linePrecision: 1, set: function (e, t) {
            this.ray.set(e, t)
        }, setFromCamera: function (e, t) {
            t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        }, intersectObject: function (e, t) {
            var n = [];
            return vi(e, this, n, t), n.sort(di), n
        }, intersectObjects: function (e, t) {
            var n = [];
            if (!1 === Array.isArray(e))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
            for (var r = 0, i = e.length; r < i; r++)vi(e[r], this, n, t);
            return n.sort(di), n
        }
    }, mi.prototype = {
        constructor: mi, start: function () {
            this.oldTime = this.startTime = (performance || Date).now(), this.running = !0
        }, stop: function () {
            this.getElapsedTime(), this.running = !1
        }, getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        }, getDelta: function () {
            var e = 0;
            this.autoStart && !this.running && this.start();
            if (this.running) {
                var t = (performance || Date).now(), e = (t - this.oldTime) / 1e3;
                this.oldTime = t, this.elapsedTime += e
            }
            return e
        }
    }, gi.prototype = {
        constructor: gi, set: function (e, t, n) {
            return this.radius = e, this.phi = t, this.theta = n, this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (e) {
            return this.radius.copy(e.radius), this.phi.copy(e.phi), this.theta.copy(e.theta), this
        }, makeSafe: function () {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        }, setFromVector3: function (t) {
            return this.radius = t.length(), 0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(e.Math.clamp(t.y / this.radius, -1, 1))), this
        }
    }, yi.prototype = Object.create(mt.prototype), yi.prototype.constructor = yi, yi.prototype.createAnimation = function (e, t, n, r) {
        t = {
            start: t,
            end: n,
            length: n - t + 1,
            fps: r,
            duration: (n - t) / r,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        }, this.animationsMap[e] = t, this.animationsList.push(t)
    }, yi.prototype.autoCreateAnimations = function (e) {
        for (var t = /([a-z]+)_?(\d+)/i, n, r = {}, i = this.geometry, s = 0, o = i.morphTargets.length; s < o; s++) {
            var u = i.morphTargets[s].name.match(t);
            if (u && 1 < u.length) {
                var a = u[1];
                r[a] || (r[a] = {
                    start: Infinity,
                    end: -Infinity
                }), u = r[a], s < u.start && (u.start = s), s > u.end && (u.end = s), n || (n = a)
            }
        }
        for (a in r)u = r[a], this.createAnimation(a, u.start, u.end, e);
        this.firstAnimation = n
    }, yi.prototype.setAnimationDirectionForward = function (e) {
        if (e = this.animationsMap[e]) e.direction = 1, e.directionBackwards = !1
    }, yi.prototype.setAnimationDirectionBackward = function (e) {
        if (e = this.animationsMap[e]) e.direction = -1, e.directionBackwards = !0
    }, yi.prototype.setAnimationFPS = function (e, t) {
        var n = this.animationsMap[e];
        n && (n.fps = t, n.duration = (n.end - n.start) / n.fps)
    }, yi.prototype.setAnimationDuration = function (e, t) {
        var n = this.animationsMap[e];
        n && (n.duration = t, n.fps = (n.end - n.start) / n.duration)
    }, yi.prototype.setAnimationWeight = function (e, t) {
        var n = this.animationsMap[e];
        n && (n.weight = t)
    }, yi.prototype.setAnimationTime = function (e, t) {
        var n = this.animationsMap[e];
        n && (n.time = t)
    }, yi.prototype.getAnimationTime = function (e) {
        var t = 0;
        if (e = this.animationsMap[e]) t = e.time;
        return t
    }, yi.prototype.getAnimationDuration = function (e) {
        var t = -1;
        if (e = this.animationsMap[e]) t = e.duration;
        return t
    }, yi.prototype.playAnimation = function (e) {
        var t = this.animationsMap[e];
        t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
    }, yi.prototype.stopAnimation = function (e) {
        if (e = this.animationsMap[e]) e.active = !1
    }, yi.prototype.update = function (t) {
        for (var n = 0, r = this.animationsList.length; n < r; n++) {
            var i = this.animationsList[n];
            if (i.active) {
                var s = i.duration / i.length;
                i.time += i.direction * t;
                if (i.mirroredLoop) {
                    if (i.time > i.duration || 0 > i.time) i.direction *= -1, i.time > i.duration && (i.time = i.duration, i.directionBackwards = !0), 0 > i.time && (i.time = 0, i.directionBackwards = !1)
                } else i.time %= i.duration, 0 > i.time && (i.time += i.duration);
                var o = i.start + e.Math.clamp(Math.floor(i.time / s), 0, i.length - 1), u = i.weight;
                o !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0, this.morphTargetInfluences[i.currentFrame] = 1 * u, this.morphTargetInfluences[o] = 0, i.lastFrame = i.currentFrame, i.currentFrame = o), s = i.time % s / s, i.directionBackwards && (s = 1 - s), i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = s * u, this.morphTargetInfluences[i.lastFrame] = (1 - s) * u) : this.morphTargetInfluences[i.currentFrame] = u
            }
        }
    }, bi.prototype = Object.create(it.prototype), bi.prototype.constructor = bi, bi.prototype.isImmediateRenderObject = !0, wi.prototype = Object.create(an.prototype), wi.prototype.constructor = wi, wi.prototype.update = function () {
        var e = new a, t = new a, n = new G;
        return function () {
            var r = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var i = this.object.matrixWorld, s = this.geometry.attributes.position, o = this.object.geometry;
            if (o && o.isGeometry)for (var u = o.vertices, a = o.faces, f = o = 0, l = a.length; f < l; f++)for (var c = a[f], h = 0, p = c.vertexNormals.length; h < p; h++) {
                var d = c.vertexNormals[h];
                e.copy(u[c[r[h]]]).applyMatrix4(i), t.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), s.setXYZ(o, e.x, e.y, e.z), o += 1, s.setXYZ(o, t.x, t.y, t.z), o += 1
            } else if (o && o.isBufferGeometry)for (r = o.attributes.position, u = o.attributes.normal, h = o = 0, p = r.count; h < p; h++)e.set(r.getX(h), r.getY(h), r.getZ(h)).applyMatrix4(i), t.set(u.getX(h), u.getY(h), u.getZ(h)), t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), s.setXYZ(o, e.x, e.y, e.z), o += 1, s.setXYZ(o, t.x, t.y, t.z), o += 1;
            return s.needsUpdate = !0, this
        }
    }(), Ei.prototype = Object.create(it.prototype), Ei.prototype.constructor = Ei, Ei.prototype.dispose = function () {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, Ei.prototype.update = function () {
        var e = new a, t = new a;
        return function () {
            var n = this.light.distance ? this.light.distance : 1e3, r = n * Math.tan(this.light.angle);
            this.cone.scale.set(r, r, n), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(), Si.prototype = Object.create(an.prototype), Si.prototype.constructor = Si, Si.prototype.getBoneList = function (e) {
        var t = [];
        e && e.isBone && t.push(e);
        for (var n = 0; n < e.children.length; n++)t.push.apply(t, this.getBoneList(e.children[n]));
        return t
    }, Si.prototype.update = function () {
        for (var e = this.geometry, t = (new f).getInverse(this.root.matrixWorld), n = new f, r = 0, i = 0; i < this.bones.length; i++) {
            var s = this.bones[i];
            s.parent && s.parent.isBone && (n.multiplyMatrices(t, s.matrixWorld), e.vertices[r].setFromMatrixPosition(n), n.multiplyMatrices(t, s.parent.matrixWorld), e.vertices[r + 1].setFromMatrixPosition(n), r += 2)
        }
        e.verticesNeedUpdate = !0, e.computeBoundingSphere()
    }, xi.prototype = Object.create(mt.prototype), xi.prototype.constructor = xi, xi.prototype.dispose = function () {
        this.geometry.dispose(), this.material.dispose()
    }, xi.prototype.update = function () {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }, Ti.prototype = Object.create(it.prototype), Ti.prototype.constructor = Ti, Ti.prototype.dispose = function () {
        this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
    }, Ti.prototype.update = function () {
        var e = new a;
        return function () {
            this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
        }
    }(), Ni.prototype = Object.create(an.prototype), Ni.prototype.constructor = Ni, Ni.prototype.setColors = function () {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, Ci.prototype = Object.create(an.prototype), Ci.prototype.constructor = Ci, Ci.prototype.update = function () {
        var e = new a, t = new a, n = new G;
        return function () {
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            for (var r = this.object.matrixWorld, i = this.geometry.attributes.position, s = this.object.geometry, o = s.vertices, s = s.faces, u = 0, a = 0, f = s.length; a < f; a++) {
                var l = s[a], c = l.normal;
                e.copy(o[l.a]).add(o[l.b]).add(o[l.c]).divideScalar(3).applyMatrix4(r), t.copy(c).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), i.setXYZ(u, e.x, e.y, e.z), u += 1, i.setXYZ(u, t.x, t.y, t.z), u += 1
            }
            return i.needsUpdate = !0, this
        }
    }(), ki.prototype = Object.create(it.prototype), ki.prototype.constructor = ki, ki.prototype.dispose = function () {
        var e = this.children[0], t = this.children[1];
        e.geometry.dispose(), e.material.dispose(), t.geometry.dispose(), t.material.dispose()
    }, ki.prototype.update = function () {
        var e = new a, t = new a, n = new a;
        return function () {
            e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(t, e);
            var r = this.children[0], i = this.children[1];
            r.lookAt(n), r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), i.lookAt(n), i.scale.z = n.length()
        }
    }(), Li.prototype = Object.create(an.prototype), Li.prototype.constructor = Li, Li.prototype.update = function () {
        function e(e, s, o, u) {
            r.set(s, o, u).unproject(i), e = n[e];
            if (void 0 !== e)for (s = 0, o = e.length; s < o; s++)t.vertices[e[s]].copy(r)
        }

        var t, n, r = new a, i = new bt;
        return function () {
            t = this.geometry, n = this.pointMap, i.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -1, -1, -1), e("n2", 1, -1, -1), e("n3", -1, 1, -1), e("n4", 1, 1, -1), e("f1", -1, -1, 1), e("f2", 1, -1, 1), e("f3", -1, 1, 1), e("f4", 1, 1, 1), e("u1", .7, 1.1, -1), e("u2", -0.7, 1.1, -1), e("u3", 0, 2, -1), e("cf1", -1, 0, 1), e("cf2", 1, 0, 1), e("cf3", 0, -1, 1), e("cf4", 0, 1, 1), e("cn1", -1, 0, -1), e("cn2", 1, 0, -1), e("cn3", 0, -1, -1), e("cn4", 0, 1, -1), t.verticesNeedUpdate = !0
        }
    }(), Ai.prototype = Object.create(mt.prototype), Ai.prototype.constructor = Ai, Ai.prototype.update = function () {
        this.box.setFromObject(this.object), this.box.size(this.scale), this.box.getCenter(this.position)
    }, Oi.prototype = Object.create(an.prototype), Oi.prototype.constructor = Oi, Oi.prototype.update = function () {
        var e = new K;
        return function (t) {
            t && t.isBox3 ? e.copy(t) : e.setFromObject(t);
            if (!e.isEmpty()) {
                t = e.min;
                var n = e.max, r = this.geometry.attributes.position, i = r.array;
                i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = t.x, i[4] = n.y, i[5] = n.z, i[6] = t.x, i[7] = t.y, i[8] = n.z, i[9] = n.x, i[10] = t.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = t.z, i[15] = t.x, i[16] = n.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = n.x, i[22] = t.y, i[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }();
    var rs = new vt;
    rs.addAttribute("position", new ht([0, 0, 0, 0, 1, 0], 3));
    var is = new In(0, .5, 1, 5, 1);
    is.translate(0, -0.5, 0), Mi.prototype = Object.create(it.prototype), Mi.prototype.constructor = Mi, Mi.prototype.setDirection = function () {
        var e = new a, t;
        return function (n) {
            .99999 < n.y ? this.quaternion.set(0, 0, 0, 1) : -0.99999 > n.y ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), Mi.prototype.setLength = function (e, t, n) {
        void 0 === t && (t = .2 * e), void 0 === n && (n = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix()
    }, Mi.prototype.setColor = function (e) {
        this.line.material.color.copy(e), this.cone.material.color.copy(e)
    }, _i.prototype = Object.create(an.prototype), _i.prototype.constructor = _i, e.CatmullRomCurve3 = function () {
        function e() {
        }

        var t = new a, n = new e, r = new e, i = new e;
        return e.prototype.init = function (e, t, n, r) {
            this.c0 = e, this.c1 = n, this.c2 = -3 * e + 3 * t - 2 * n - r, this.c3 = 2 * e - 2 * t + n + r
        }, e.prototype.initNonuniformCatmullRom = function (e, t, n, r, i, s, o) {
            this.init(t, n, ((t - e) / i - (n - e) / (i + s) + (n - t) / s) * s, ((n - t) / s - (r - t) / (s + o) + (r - n) / o) * s)
        }, e.prototype.initCatmullRom = function (e, t, n, r, i) {
            this.init(t, n, i * (n - e), i * (r - t))
        }, e.prototype.calc = function (e) {
            var t = e * e;
            return this.c0 + this.c1 * e + this.c2 * t + this.c3 * t * e
        }, Br.create(function (e) {
            this.points = e || [], this.closed = !1
        }, function (e) {
            var s = this.points, o, u;
            u = s.length, 2 > u && console.log("duh, you need at least 2 points"), e *= u - (this.closed ? 0 : 1), o = Math.floor(e), e -= o, this.closed ? o += 0 < o ? 0 : (Math.floor(Math.abs(o) / s.length) + 1) * s.length : 0 === e && o === u - 1 && (o = u - 2, e = 1);
            var f, l, c;
            this.closed || 0 < o ? f = s[(o - 1) % u] : (t.subVectors(s[0], s[1]).add(s[0]), f = t), l = s[o % u], c = s[(o + 1) % u], this.closed || o + 2 < u ? s = s[(o + 2) % u] : (t.subVectors(s[u - 1], s[u - 2]).add(s[u - 1]), s = t);
            if (void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var h = "chordal" === this.type ? .5 : .25;
                u = Math.pow(f.distanceToSquared(l), h), o = Math.pow(l.distanceToSquared(c), h), h = Math.pow(c.distanceToSquared(s), h), 1e-4 > o && (o = 1), 1e-4 > u && (u = o), 1e-4 > h && (h = o), n.initNonuniformCatmullRom(f.x, l.x, c.x, s.x, u, o, h), r.initNonuniformCatmullRom(f.y, l.y, c.y, s.y, u, o, h), i.initNonuniformCatmullRom(f.z, l.z, c.z, s.z, u, o, h)
            } else"catmullrom" === this.type && (u = void 0 !== this.tension ? this.tension : .5, n.initCatmullRom(f.x, l.x, c.x, s.x, u), r.initCatmullRom(f.y, l.y, c.y, s.y, u), i.initCatmullRom(f.z, l.z, c.z, s.z, u));
            return new a(n.calc(e), r.calc(e), i.calc(e))
        })
    }(), Di.prototype = Object.create(e.CatmullRomCurve3.prototype);
    var ss = Br.create(function (e) {
        console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 === e ? [] : e
    }, function (t) {
        var n = this.points;
        t *= n.length - 1;
        var r = Math.floor(t);
        t -= r;
        var i = n[0 == r ? r : r - 1], s = n[r], o = n[r > n.length - 2 ? n.length - 1 : r + 1], n = n[r > n.length - 3 ? n.length - 1 : r + 2], r = e.CurveUtils.interpolate;
        return new a(r(i.x, s.x, o.x, n.x, t), r(i.y, s.y, o.y, n.y, t), r(i.z, s.z, o.z, n.z, t))
    });
    e.CubicBezierCurve3 = Br.create(function (e, t, n, r) {
        this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r
    }, function (t) {
        var n = e.ShapeUtils.b3;
        return new a(n(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), n(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), n(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
    }), e.QuadraticBezierCurve3 = Br.create(function (e, t, n) {
        this.v0 = e, this.v1 = t, this.v2 = n
    }, function (t) {
        var n = e.ShapeUtils.b2;
        return new a(n(t, this.v0.x, this.v1.x, this.v2.x), n(t, this.v0.y, this.v1.y, this.v2.y), n(t, this.v0.z, this.v1.z, this.v2.z))
    }), e.LineCurve3 = Br.create(function (e, t) {
        this.v1 = e, this.v2 = t
    }, function (e) {
        if (1 === e)return this.v2.clone();
        var t = new a;
        return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
    }), Pi.prototype = Object.create(Ir.prototype), Pi.prototype.constructor = Pi, e.SceneUtils = {
        createMultiMaterialObject: function (e, t) {
            for (var n = new cn, r = 0, i = t.length; r < i; r++)n.add(new mt(e, t[r]));
            return n
        }, detach: function (e, t, n) {
            e.applyMatrix(t.matrixWorld), t.remove(e), n.add(e)
        }, attach: function (e, t, n) {
            var r = new f;
            r.getInverse(n.matrixWorld), e.applyMatrix(r), t.remove(e), n.add(e)
        }
    }, Object.assign(z.prototype, {
        center: function (e) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
        }, empty: function () {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, isIntersectionBox: function (e) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        }, size: function (e) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
        }
    }), Object.assign(K.prototype, {
        center: function (e) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
        }, empty: function () {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, isIntersectionBox: function (e) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        }, isIntersectionSphere: function (e) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        }, size: function (e) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
        }
    }), Object.assign(st.prototype, {
        center: function (e) {
            return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
        }
    }), Object.assign(G.prototype, {
        multiplyVector3: function (e) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
        }, multiplyVector3Array: function (e) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
        }
    }), Object.assign(f.prototype, {
        extractPosition: function (e) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
        }, setRotationFromQuaternion: function (e) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
        }, multiplyVector3: function (e) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
        }, multiplyVector4: function (e) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        }, multiplyVector3Array: function (e) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
        }, rotateAxis: function (e) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
        }, crossVector: function (e) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        }, translate: function (e) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }, rotateX: function (e) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }, rotateY: function (e) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }, rotateZ: function (e) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }, rotateByAxis: function (e, t) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }), Object.assign(Y.prototype, {
        isIntersectionLine: function (e) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
        }
    }), Object.assign(u.prototype, {
        multiplyVector3: function (e) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
        }
    }), Object.assign(tt.prototype, {
        isIntersectionBox: function (e) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        }, isIntersectionPlane: function (e) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
        }, isIntersectionSphere: function (e) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        }
    }), Object.assign(zr.prototype, {
        extrude: function (e) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Ln(this, e)
        }, makeGeometry: function (e) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new jn(this, e)
        }
    }), Object.assign(a.prototype, {
        setEulerFromRotationMatrix: function () {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }, setEulerFromQuaternion: function () {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }, getPositionFromMatrix: function (e) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
        }, getScaleFromMatrix: function (e) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
        }, getColumnFromMatrix: function (e, t) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
        }
    }), Object.assign(it.prototype, {
        getChildByName: function (e) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
        }, renderDepth: function (e) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }, translate: function (e, t) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
        }
    }), Object.defineProperties(it.prototype, {
        eulerOrder: {
            get: function () {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            }, set: function (e) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
            }
        }, useQuaternion: {
            get: function () {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }, set: function (e) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(en.prototype, {
        objects: {
            get: function () {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), wt.prototype.setLens = function (e, t) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
    }, Object.defineProperties(ar.prototype, {
        onlyShadow: {
            set: function (e) {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        }, shadowCameraFov: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
            }
        }, shadowCameraLeft: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
            }
        }, shadowCameraRight: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
            }
        }, shadowCameraTop: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
            }
        }, shadowCameraBottom: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
            }
        }, shadowCameraNear: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
            }
        }, shadowCameraFar: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
            }
        }, shadowCameraVisible: {
            set: function (e) {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        }, shadowBias: {
            set: function (e) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
            }
        }, shadowDarkness: {
            set: function (e) {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        }, shadowMapWidth: {
            set: function (e) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
            }
        }, shadowMapHeight: {
            set: function (e) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
            }
        }
    }), Object.defineProperties(ft.prototype, {
        length: {
            get: function () {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            }
        }
    }), Object.assign(vt.prototype, {
        addIndex: function (e) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
        }, addDrawCall: function (e, t, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
        }, clearDrawCalls: function () {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        }, computeTangents: function () {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        }, computeOffsets: function () {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(vt.prototype, {
        drawcalls: {
            get: function () {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        }, offsets: {
            get: function () {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(V.prototype, {
        wrapAround: {
            get: function () {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }, set: function (e) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        }, wrapRGB: {
            get: function () {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new U
            }
        }
    }), Object.defineProperties(Gn.prototype, {
        metal: {
            get: function () {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            }, set: function (e) {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties($.prototype, {
        derivatives: {
            get: function () {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            }, set: function (e) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
            }
        }
    }), t.prototype = Object.assign(Object.create({
        constructor: t, apply: function (e) {
            console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."), Object.assign(e, this)
        }
    }), t.prototype), Object.assign($t.prototype, {
        supportsFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        }, supportsHalfFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        }, supportsStandardDerivatives: function () {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives"
            )
        }, supportsCompressedTextureS3TC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        }, supportsCompressedTexturePVRTC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }, supportsBlendMinMax: function () {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        }, supportsVertexTextures: function () {
            return this.capabilities.vertexTextures
        }, supportsInstancedArrays: function () {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        }, enableScissorTest: function (e) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
        }, initMaterial: function () {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }, addPrePlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }, addPostPlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }, updateShadowMap: function () {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties($t.prototype, {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
            }
        }, shadowMapType: {
            get: function () {
                return this.shadowMap.type
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
            }
        }, shadowMapCullFace: {
            get: function () {
                return this.shadowMap.cullFace
            }, set: function (e) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = e
            }
        }
    }), Object.defineProperties(et.prototype, {
        cullFace: {
            get: function () {
                return this.renderReverseSided ? 2 : 1
            }, set: function (e) {
                e = 1 !== e, console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."), this.renderReverseSided = e
            }
        }
    }), Object.defineProperties(s.prototype, {
        wrapS: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
            }
        }, wrapT: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
            }
        }, magFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
            }
        }, minFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
            }
        }, anisotropy: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
            }
        }, offset: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
            }
        }, repeat: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
            }
        }, format: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
            }
        }, type: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
            }
        }, generateMipmaps: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            }, set: function (e) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
            }
        }
    }), Object.assign(Zr.prototype, {
        load: function (e) {
            console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
            var t = this;
            return (new Kr).load(e, function (e) {
                t.setBuffer(e)
            }), this
        }
    }), Object.assign(ti.prototype, {
        getData: function (e) {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
        }
    }), Object.defineProperty(e, "AudioContext", {
        get: function () {
            return e.getAudioContext()
        }
    }), e.WebGLRenderTargetCube = o, e.WebGLRenderTarget = s, e.WebGLRenderer = $t, e.ShaderLib = $i, e.UniformsLib = Vi, e.ShaderChunk = Xi, e.FogExp2 = Jt, e.Fog = Kt, e.Scene = Qt, e.LensFlare = Gt, e.Sprite = Zt, e.LOD = en, e.SkinnedMesh = sn, e.Skeleton = nn, e.Bone = rn, e.Mesh = mt, e.LineSegments = an, e.Line = un, e.Points = ln, e.Group = cn, e.VideoTexture = hn, e.DataTexture = tn, e.CompressedTexture = pn, e.CubeTexture = l, e.CanvasTexture = dn, e.DepthTexture = vn, e.TextureIdCount = function () {
        return Ii++
    }, e.Texture = r, e.MaterialIdCount = function () {
        return Ji++
    }, e.CompressedTextureLoader = rr, e.BinaryTextureLoader = ir, e.DataTextureLoader = ir, e.CubeTextureLoader = or, e.TextureLoader = ur, e.ObjectLoader = Hr, e.MaterialLoader = Mr, e.BufferGeometryLoader = _r, e.LoadingManager = tr, e.JSONLoader = Pr, e.ImageLoader = sr, e.FontLoader = $r, e.XHRLoader = nr, e.Loader = Dr, e.AudioLoader = Kr, e.SpotLightShadow = cr, e.SpotLight = hr, e.PointLight = pr, e.HemisphereLight = fr, e.DirectionalLightShadow = dr, e.DirectionalLight = vr, e.AmbientLight = mr, e.LightShadow = lr, e.Light = ar, e.StereoCamera = Qr, e.PerspectiveCamera = wt, e.OrthographicCamera = Et, e.CubeCamera = Gr, e.Camera = bt, e.AudioListener = Yr, e.PositionalAudio = ei, e.getAudioContext = Jr, e.AudioAnalyser = ti, e.Audio = Zr, e.VectorKeyframeTrack = Sr, e.StringKeyframeTrack = Cr, e.QuaternionKeyframeTrack = Tr,e.NumberKeyframeTrack = Nr,e.ColorKeyframeTrack = Lr,e.BooleanKeyframeTrack = kr,e.PropertyMixer = ni,e.PropertyBinding = ri,e.KeyframeTrack = Ar,e.AnimationObjectGroup = ii,e.AnimationMixer = oi,e.AnimationClip = Or,e.Uniform = ui,e.InstancedBufferGeometry = ai,e.BufferGeometry = vt,e.GeometryIdCount = function () {
        return Qi++
    },e.Geometry = pt,e.InterleavedBufferAttribute = fi,e.InstancedInterleavedBuffer = ci,e.InterleavedBuffer = li,e.InstancedBufferAttribute = hi,e.DynamicBufferAttribute = function (e, t) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), (new ft(e, t)).setDynamic(!0)
    },e.Float64Attribute = function (e, t) {
        return new ft(new Float64Array(e), t)
    },e.Float32Attribute = ht,e.Uint32Attribute = ct,e.Int32Attribute = function (e, t) {
        return new ft(new Int32Array(e), t)
    },e.Uint16Attribute = lt,e.Int16Attribute = function (e, t) {
        return new ft(new Int16Array(e), t)
    },e.Uint8ClampedAttribute = function (e, t) {
        return new ft(new Uint8ClampedArray(e), t)
    },e.Uint8Attribute = function (e, t) {
        return new ft(new Uint8Array(e), t)
    },e.Int8Attribute = function (e, t) {
        return new ft(new Int8Array(e), t)
    },e.BufferAttribute = ft,e.Face3 = ut,e.Object3DIdCount = function () {
        return Ki++
    },e.Object3D = it,e.Raycaster = pi,e.Layers = rt,e.EventDispatcher = t,e.Clock = mi,e.QuaternionLinearInterpolant = xr,e.LinearInterpolant = br,e.DiscreteInterpolant = wr,e.CubicInterpolant = yr,e.Interpolant = gr,e.Triangle = ot,e.Spline = function (e) {
        function t(e, t, n, r, i, s, o) {
            return e = .5 * (n - e), r = .5 * (r - t), (2 * (t - n) + e + r) * o + (-3 * (t - n) - 2 * e - r) * s + e * i + t
        }

        this.points = e;
        var n = [], r = {x: 0, y: 0, z: 0}, i, s, o, u, f, l, c, h, p;
        this.initFromArray = function (e) {
            this.points = [];
            for (var t = 0; t < e.length; t++)this.points[t] = {x: e[t][0], y: e[t][1], z: e[t][2]}
        }, this.getPoint = function (e) {
            return i = (this.points.length - 1) * e, s = Math.floor(i), o = i - s, n[0] = 0 === s ? s : s - 1, n[1] = s, n[2] = s > this.points.length - 2 ? this.points.length - 1 : s + 1, n[3] = s > this.points.length - 3 ? this.points.length - 1 : s + 2, l = this.points[n[0]], c = this.points[n[1]], h = this.points[n[2]], p = this.points[n[3]], u = o * o, f = o * u, r.x = t(l.x, c.x, h.x, p.x, o, u, f), r.y = t(l.y, c.y, h.y, p.y, o, u, f), r.z = t(l.z, c.z, h.z, p.z, o, u, f), r
        }, this.getControlPointsArray = function () {
            var e, t, n = this.points.length, r = [];
            for (e = 0; e < n; e++)t = this.points[e], r[e] = [t.x, t.y, t.z];
            return r
        }, this.getLength = function (e) {
            var t, n, r, i = 0, s = new a, o = new a, u = [], f = 0;
            u[0] = 0, e || (e = 100), n = this.points.length * e, s.copy(this.points[0]);
            for (e = 1; e < n; e++)t = e / n, r = this.getPoint(t), o.copy(r), f += o.distanceTo(s), s.copy(r), t *= this.points.length - 1, t = Math.floor(t), t !== i && (u[t] = f, i = t);
            return u[u.length] = f, {chunks: u, total: f}
        }, this.reparametrizeByArcLength = function (e) {
            var t, n, r, i, s, o, u = [], f = new a, l = this.getLength();
            u.push(f.copy(this.points[0]).clone());
            for (t = 1; t < this.points.length; t++) {
                n = l.chunks[t] - l.chunks[t - 1], o = Math.ceil(e * n / l.total), i = (t - 1) / (this.points.length - 1), s = t / (this.points.length - 1);
                for (n = 1; n < o - 1; n++)r = i + 1 / o * n * (s - i), r = this.getPoint(r), u.push(f.copy(r).clone());
                u.push(f.copy(this.points[t]).clone())
            }
            this.points = u
        }
    },e.Spherical = gi,e.Plane = Y,e.Frustum = Z,e.Sphere = Q,e.Ray = tt,e.Matrix4 = f,e.Matrix3 = G,e.Box3 = K,e.Box2 = z,e.Line3 = st,e.Euler = nt,e.Vector4 = i,e.Vector3 = a,e.Vector2 = n,e.Quaternion = u,e.Color = U,e.MorphBlendMesh = yi,e.ImmediateRenderObject = bi,e.VertexNormalsHelper = wi,e.SpotLightHelper = Ei,e.SkeletonHelper = Si,e.PointLightHelper = xi,e.HemisphereLightHelper = Ti,e.GridHelper = Ni,e.FaceNormalsHelper = Ci,e.DirectionalLightHelper = ki,e.CameraHelper = Li,e.BoundingBoxHelper = Ai,e.BoxHelper = Oi,e.ArrowHelper = Mi,e.AxisHelper = _i,e.ClosedSplineCurve3 = Di,e.SplineCurve3 = ss,e.ArcCurve = Pi,e.EllipseCurve = Ir,e.SplineCurve = qr,e.CubicBezierCurve = Rr,e.QuadraticBezierCurve = Ur,e.LineCurve = jr,e.Shape = zr,e.ShapePath = Xr,e.Path = Wr,e.Font = Vr,e.CurvePath = Fr,e.Curve = Br,e.WireframeGeometry = mn,e.ParametricGeometry = gn,e.TetrahedronGeometry = bn,e.OctahedronGeometry = wn,e.IcosahedronGeometry = En,e.DodecahedronGeometry = Sn,e.PolyhedronGeometry = yn,e.TubeGeometry = xn,e.TorusKnotGeometry = Nn,e.TorusKnotBufferGeometry = Tn,e.TorusGeometry = kn,e.TorusBufferGeometry = Cn,e.TextGeometry = An,e.SphereBufferGeometry = On,e.SphereGeometry = Mn,e.RingGeometry = Dn,e.RingBufferGeometry = _n,e.PlaneBufferGeometry = yt,e.PlaneGeometry = Pn,e.LatheGeometry = Bn,e.LatheBufferGeometry = Hn,e.ShapeGeometry = jn,e.ExtrudeGeometry = Ln,e.EdgesGeometry = Fn,e.ConeGeometry = Rn,e.ConeBufferGeometry = Un,e.CylinderGeometry = qn,e.CylinderBufferGeometry = In,e.CircleBufferGeometry = zn,e.CircleGeometry = Wn,e.BoxBufferGeometry = gt,e.BoxGeometry = Xn,e.ShadowMaterial = Vn,e.SpriteMaterial = Yt,e.RawShaderMaterial = $n,e.ShaderMaterial = $,e.PointsMaterial = fn,e.MultiMaterial = Jn,e.MeshPhysicalMaterial = Qn,e.MeshStandardMaterial = Kn,e.MeshPhongMaterial = Gn,e.MeshNormalMaterial = Yn,e.MeshLambertMaterial = Zn,e.MeshDepthMaterial = J,e.MeshBasicMaterial = at,e.LineDashedMaterial = er,e.LineBasicMaterial = on,e.Material = V,e.REVISION = "81",e.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    },e.CullFaceNone = 0,e.CullFaceBack = 1,e.CullFaceFront = 2,e.CullFaceFrontBack = 3,e.FrontFaceDirectionCW = 0,e.FrontFaceDirectionCCW = 1,e.BasicShadowMap = 0,e.PCFShadowMap = 1,e.PCFSoftShadowMap = 2,e.FrontSide = 0,e.BackSide = 1,e.DoubleSide = 2,e.FlatShading = 1,e.SmoothShading = 2,e.NoColors = 0,e.FaceColors = 1,e.VertexColors = 2,e.NoBlending = 0,e.NormalBlending = 1,e.AdditiveBlending = 2,e.SubtractiveBlending = 3,e.MultiplyBlending = 4,e.CustomBlending = 5,e.BlendingMode = Hi,e.AddEquation = 100,e.SubtractEquation = 101,e.ReverseSubtractEquation = 102,e.MinEquation = 103,e.MaxEquation = 104,e.ZeroFactor = 200,e.OneFactor = 201,e.SrcColorFactor = 202,e.OneMinusSrcColorFactor = 203,e.SrcAlphaFactor = 204,e.OneMinusSrcAlphaFactor = 205,e.DstAlphaFactor = 206,e.OneMinusDstAlphaFactor = 207,e.DstColorFactor = 208,e.OneMinusDstColorFactor = 209,e.SrcAlphaSaturateFactor = 210,e.NeverDepth = 0,e.AlwaysDepth = 1,e.LessDepth = 2,e.LessEqualDepth = 3,e.EqualDepth = 4,e.GreaterEqualDepth = 5,e.GreaterDepth = 6,e.NotEqualDepth = 7,e.MultiplyOperation = 0,e.MixOperation = 1,e.AddOperation = 2,e.NoToneMapping = 0,e.LinearToneMapping = 1,e.ReinhardToneMapping = 2,e.Uncharted2ToneMapping = 3,e.CineonToneMapping = 4,e.UVMapping = 300,e.CubeReflectionMapping = 301,e.CubeRefractionMapping = 302,e.EquirectangularReflectionMapping = 303,e.EquirectangularRefractionMapping = 304,e.SphericalReflectionMapping = 305,e.CubeUVReflectionMapping = 306,e.CubeUVRefractionMapping = 307,e.TextureMapping = Bi,e.RepeatWrapping = 1e3,e.ClampToEdgeWrapping = 1001,e.MirroredRepeatWrapping = 1002,e.TextureWrapping = ji,e.NearestFilter = 1003,e.NearestMipMapNearestFilter = 1004,e.NearestMipMapLinearFilter = 1005,e.LinearFilter = 1006,e.LinearMipMapNearestFilter = 1007,e.LinearMipMapLinearFilter = 1008,e.TextureFilter = Fi,e.UnsignedByteType = 1009,e.ByteType = 1010,e.ShortType = 1011,e.UnsignedShortType = 1012,e.IntType = 1013,e.UnsignedIntType = 1014,e.FloatType = 1015,e.HalfFloatType = 1016,e.UnsignedShort4444Type = 1017,e.UnsignedShort5551Type = 1018,e.UnsignedShort565Type = 1019,e.UnsignedInt248Type = 1020,e.AlphaFormat = 1021,e.RGBFormat = 1022,e.RGBAFormat = 1023,e.LuminanceFormat = 1024,e.LuminanceAlphaFormat = 1025,e.RGBEFormat = 1023,e.DepthFormat = 1026,e.DepthStencilFormat = 1027,e.RGB_S3TC_DXT1_Format = 2001,e.RGBA_S3TC_DXT1_Format = 2002,e.RGBA_S3TC_DXT3_Format = 2003,e.RGBA_S3TC_DXT5_Format = 2004,e.RGB_PVRTC_4BPPV1_Format = 2100,e.RGB_PVRTC_2BPPV1_Format = 2101,e.RGBA_PVRTC_4BPPV1_Format = 2102,e.RGBA_PVRTC_2BPPV1_Format = 2103,e.RGB_ETC1_Format = 2151,e.LoopOnce = 2200,e.LoopRepeat = 2201,e.LoopPingPong = 2202,e.InterpolateDiscrete = 2300,e.InterpolateLinear = 2301,e.InterpolateSmooth = 2302,e.ZeroCurvatureEnding = 2400,e.ZeroSlopeEnding = 2401,e.WrapAroundEnding = 2402,e.TrianglesDrawMode = 0,e.TriangleStripDrawMode = 1,e.TriangleFanDrawMode = 2,e.LinearEncoding = 3e3,e.sRGBEncoding = 3001,e.GammaEncoding = 3007,e.RGBEEncoding = 3002,e.LogLuvEncoding = 3003,e.RGBM7Encoding = 3004,e.RGBM16Encoding = 3005,e.RGBDEncoding = 3006,e.BasicDepthPacking = 3200,e.RGBADepthPacking = 3201,e.CubeGeometry = Xn,e.Face4 = function (e, t, n, r, i, s, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new ut(e, t, n, i, s, o)
    },e.LineStrip = 0,e.LinePieces = 1,e.MeshFaceMaterial = Jn,e.PointCloud = function (e, t) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new ln(e, t)
    },e.Particle = Zt,e.ParticleSystem = function (e, t) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new ln(e, t)
    },e.PointCloudMaterial = function (e) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new fn(e)
    },e.ParticleBasicMaterial = function (e) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new fn(e)
    },e.ParticleSystemMaterial = function (e) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new fn(e)
    },e.Vertex = function (e, t, n) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new a(e, t, n)
    },e.EdgesHelper = function (e, t) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new an(new Fn(e.geometry), new on({color: void 0 !== t ? t : 16777215}))
    },e.WireframeHelper = function (e, t) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new an(new mn(e.geometry), new on({color: void 0 !== t ? t : 16777215}))
    },e.GeometryUtils = {
        merge: function (e, t, n) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var r;
            t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), r = t.matrix, t = t.geometry), e.merge(t, r, n)
        }, center: function (e) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
        }
    },e.ImageUtils = {
        crossOrigin: void 0, loadTexture: function (e, t, n, r) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var i = new ur;
            return i.setCrossOrigin(this.crossOrigin), e = i.load(e, n, void 0, r), t && (e.mapping = t), e
        }, loadTextureCube: function (e, t, n, r) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var i = new or;
            return i.setCrossOrigin(this.crossOrigin), e = i.load(e, n, void 0, r), t && (e.mapping = t), e
        }, loadCompressedTexture: function () {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        }, loadCompressedTextureCube: function () {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    },e.Projector = function () {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (e, t) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
        }, this.unprojectVector = function (e, t) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
        }, this.pickingRay = function (e, t) {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    },e.CanvasRenderer = function () {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function () {
        }, this.render = function () {
        }, this.setClearColor = function () {
        }, this.setSize = function () {
        }
    },Object.defineProperty(e, "__esModule", {value: !0})
}), THREE.OBJLoader = function (e) {
    this.manager = e !== undefined ? e : THREE.DefaultLoadingManager, this.materials = null, this.regexp = {
        vertex_pattern: /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
        normal_pattern: /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
        uv_pattern: /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
        face_vertex: /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
        face_vertex_uv: /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
        face_vertex_uv_normal: /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
        face_vertex_normal: /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
        object_pattern: /^[og]\s*(.+)?/,
        smoothing_pattern: /^s\s+(\d+|on|off)/,
        material_library_pattern: /^mtllib /,
        material_use_pattern: /^usemtl /
    }
}, THREE.OBJLoader.prototype = {
    constructor: THREE.OBJLoader, load: function (e, t, n, r) {
        var i = this, s = new THREE.XHRLoader(i.manager);
        s.setPath(this.path), s.load(e, function (e) {
            t(i.parse(e))
        }, n, r)
    }, setPath: function (e) {
        this.path = e
    }, setMaterials: function (e) {
        this.materials = e
    }, _createParserState: function () {
        var e = {
            objects: [],
            object: {},
            vertices: [],
            normals: [],
            uvs: [],
            materialLibraries: [],
            startObject: function (e, t) {
                if (this.object && this.object.fromDeclaration === !1) {
                    this.object.name = e, this.object.fromDeclaration = t !== !1;
                    return
                }
                var n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : undefined;
                this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
                    name: e || "",
                    fromDeclaration: t !== !1,
                    geometry: {vertices: [], normals: [], uvs: []},
                    materials: [],
                    smooth: !0,
                    startMaterial: function (e, t) {
                        var n = this._finalize(!1);
                        n && (n.inherited || n.groupCount <= 0) && this.materials.splice(n.index, 1);
                        var r = {
                            index: this.materials.length,
                            name: e || "",
                            mtllib: Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "",
                            smooth: n !== undefined ? n.smooth : this.smooth,
                            groupStart: n !== undefined ? n.groupEnd : 0,
                            groupEnd: -1,
                            groupCount: -1,
                            inherited: !1,
                            clone: function (e) {
                                var t = {
                                    index: typeof e == "number" ? e : this.index,
                                    name: this.name,
                                    mtllib: this.mtllib,
                                    smooth: this.smooth,
                                    groupStart: 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1
                                };
                                return t.clone = this.clone.bind(t), t
                            }
                        };
                        return this.materials.push(r), r
                    },
                    currentMaterial: function () {
                        return this.materials.length > 0 ? this.materials[this.materials.length - 1] : undefined
                    },
                    _finalize: function (e) {
                        var t = this.currentMaterial();
                        t && t.groupEnd === -1 && (t.groupEnd = this.geometry.vertices.length / 3, t.groupCount = t.groupEnd - t.groupStart, t.inherited = !1);
                        if (e && this.materials.length > 1)for (var n = this.materials.length - 1; n >= 0; n--)this.materials[n].groupCount <= 0 && this.materials.splice(n, 1);
                        return e && this.materials.length === 0 && this.materials.push({
                            name: "",
                            smooth: this.smooth
                        }), t
                    }
                };
                if (n && n.name && typeof n.clone == "function") {
                    var r = n.clone(0);
                    r.inherited = !0, this.object.materials.push(r)
                }
                this.objects.push(this.object)
            },
            finalize: function () {
                this.object && typeof this.object._finalize == "function" && this.object._finalize(!0)
            },
            parseVertexIndex: function (e, t) {
                var n = parseInt(e, 10);
                return (n >= 0 ? n - 1 : n + t / 3) * 3
            },
            parseNormalIndex: function (e, t) {
                var n = parseInt(e, 10);
                return (n >= 0 ? n - 1 : n + t / 3) * 3
            },
            parseUVIndex: function (e, t) {
                var n = parseInt(e, 10);
                return (n >= 0 ? n - 1 : n + t / 2) * 2
            },
            addVertex: function (e, t, n) {
                var r = this.vertices, i = this.object.geometry.vertices;
                i.push(r[e + 0]), i.push(r[e + 1]), i.push(r[e + 2]), i.push(r[t + 0]), i.push(r[t + 1]), i.push(r[t + 2]), i.push(r[n + 0]), i.push(r[n + 1]), i.push(r[n + 2])
            },
            addVertexLine: function (e) {
                var t = this.vertices, n = this.object.geometry.vertices;
                n.push(t[e + 0]), n.push(t[e + 1]), n.push(t[e + 2])
            },
            addNormal: function (e, t, n) {
                var r = this.normals, i = this.object.geometry.normals;
                i.push(r[e + 0]), i.push(r[e + 1]), i.push(r[e + 2]), i.push(r[t + 0]), i.push(r[t + 1]), i.push(r[t + 2]), i.push(r[n + 0]), i.push(r[n + 1]), i.push(r[n + 2])
            },
            addUV: function (e, t, n) {
                var r = this.uvs, i = this.object.geometry.uvs;
                i.push(r[e + 0]), i.push(r[e + 1]), i.push(r[t + 0]), i.push(r[t + 1]), i.push(r[n + 0]), i.push(r[n + 1])
            },
            addUVLine: function (e) {
                var t = this.uvs, n = this.object.geometry.uvs;
                n.push(t[e + 0]), n.push(t[e + 1])
            },
            addFace: function (e, t, n, r, i, s, o, u, a, f, l, c) {
                var h = this.vertices.length, p = this.parseVertexIndex(e, h), d = this.parseVertexIndex(t, h), v = this.parseVertexIndex(n, h), m;
                r === undefined ? this.addVertex(p, d, v) : (m = this.parseVertexIndex(r, h), this.addVertex(p, d, m), this.addVertex(d, v, m));
                if (i !== undefined) {
                    var g = this.uvs.length;
                    p = this.parseUVIndex(i, g), d = this.parseUVIndex(s, g), v = this.parseUVIndex(o, g), r === undefined ? this.addUV(p, d, v) : (m = this.parseUVIndex(u, g), this.addUV(p, d, m), this.addUV(d, v, m))
                }
                if (a !== undefined) {
                    var y = this.normals.length;
                    p = this.parseNormalIndex(a, y), d = a === f ? p : this.parseNormalIndex(f, y), v = a === l ? p : this.parseNormalIndex(l, y), r === undefined ? this.addNormal(p, d, v) : (m = this.parseNormalIndex(c, y), this.addNormal(p, d, m), this.addNormal(d, v, m))
                }
            },
            addLineGeometry: function (e, t) {
                this.object.geometry.type = "Line";
                var n = this.vertices.length, r = this.uvs.length;
                for (var i = 0, s = e.length; i < s; i++)this.addVertexLine(this.parseVertexIndex(e[i], n));
                for (var o = 0, s = t.length; o < s; o++)this.addUVLine(this.parseUVIndex(t[o], r))
            }
        };
        return e.startObject("", !1), e
    }, parse: function (e) {
        console.time("OBJLoader");
        var t = this._createParserState();
        e.indexOf("\r\n") !== -1 && (e = e.replace(/\r\n/g, "\n")), e.indexOf("\\\n") !== -1 && (e = e.replace(/\\\n/g, ""));
        var n = e.split("\n"), r = "", i = "", s = "", o = 0, u = [], a = typeof "".trimLeft == "function";
        for (var f = 0, l = n.length; f < l; f++) {
            r = n[f], r = a ? r.trimLeft() : r.trim(), o = r.length;
            if (o === 0)continue;
            i = r.charAt(0);
            if (i === "#")continue;
            if (i === "v") {
                s = r.charAt(1);
                if (s === " " && (u = this.regexp.vertex_pattern.exec(r)) !== null) t.vertices.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3])); else if (s === "n" && (u = this.regexp.normal_pattern.exec(r)) !== null) t.normals.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3])); else {
                    if (s !== "t" || (u = this.regexp.uv_pattern.exec(r)) === null)throw new Error("Unexpected vertex/normal/uv line: '" + r + "'");
                    t.uvs.push(parseFloat(u[1]), parseFloat(u[2]))
                }
            } else if (i === "f")if ((u = this.regexp.face_vertex_uv_normal.exec(r)) !== null) t.addFace(u[1], u[4], u[7], u[10], u[2], u[5], u[8], u[11], u[3], u[6], u[9], u[12]); else if ((u = this.regexp.face_vertex_uv.exec(r)) !== null) t.addFace(u[1], u[3], u[5], u[7], u[2], u[4], u[6], u[8]); else if ((u = this.regexp.face_vertex_normal.exec(r)) !== null) t.addFace(u[1], u[3], u[5], u[7], undefined, undefined, undefined, undefined, u[2], u[4], u[6], u[8]); else {
                if ((u = this.regexp.face_vertex.exec(r)) === null)throw new Error("Unexpected face line: '" + r + "'");
                t.addFace(u[1], u[2], u[3], u[4])
            } else if (i === "l") {
                var c = r.substring(1).trim().split(" "), h = [], p = [];
                if (r.indexOf("/") === -1) h = c; else for (var d = 0, v = c.length; d < v; d++) {
                    var m = c[d].split("/");
                    m[0] !== "" && h.push(m[0]), m[1] !== "" && p.push(m[1])
                }
                t.addLineGeometry(h, p)
            } else if ((u = this.regexp.object_pattern.exec(r)) !== null) {
                var g = (" " + u[0].substr(1).trim()).substr(1);
                t.startObject(g)
            } else if (this.regexp.material_use_pattern.test(r)) t.object.startMaterial(r.substring(7).trim(), t.materialLibraries); else if (this.regexp.material_library_pattern.test(r)) t.materialLibraries.push(r.substring(7).trim()); else {
                if ((u = this.regexp.smoothing_pattern.exec(r)) === null) {
                    if (r === "\0")continue;
                    throw new Error("Unexpected line: '" + r + "'")
                }
                var y = u[1].trim().toLowerCase();
                t.object.smooth = y === "1" || y === "on";
                var b = t.object.currentMaterial();
                b && (b.smooth = t.object.smooth)
            }
        }
        t.finalize();
        var w = new THREE.Group;
        w.materialLibraries = [].concat(t.materialLibraries);
        for (var f = 0, l = t.objects.length; f < l; f++) {
            var E = t.objects[f], S = E.geometry, x = E.materials, T = S.type === "Line";
            if (S.vertices.length === 0)continue;
            var N = new THREE.BufferGeometry;
            N.addAttribute("position", new THREE.BufferAttribute(new Float32Array(S.vertices), 3)), S.normals.length > 0 ? N.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(S.normals), 3)) : N.computeVertexNormals(), S.uvs.length > 0 && N.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(S.uvs), 2));
            var C = [];
            for (var k = 0, L = x.length; k < L; k++) {
                var A = x[k], b = undefined;
                if (this.materials !== null) {
                    b = this.materials.create(A.name);
                    if (T && b && !(b instanceof THREE.LineBasicMaterial)) {
                        var O = new THREE.LineBasicMaterial;
                        O.copy(b), b = O
                    }
                }
                b || (b = T ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial, b.name = A.name), b.shading = A.smooth ? THREE.SmoothShading : THREE.FlatShading, C.push(b)
            }
            var M;
            if (C.length > 1) {
                for (var k = 0, L = x.length; k < L; k++) {
                    var A = x[k];
                    N.addGroup(A.groupStart, A.groupCount, k)
                }
                var _ = new THREE.MultiMaterial(C);
                M = T ? new THREE.LineSegments(N, _) : new THREE.Mesh(N, _)
            } else M = T ? new THREE.LineSegments(N, C[0]) : new THREE.Mesh(N, C[0]);
            M.name = E.name, w.add(M)
        }
        return console.timeEnd("OBJLoader"), w
    }
};
var Icosahedron = function (e) {
    var t = this;
    t.options = e || {}, t.container = e.container, t.containerSize = {
        width: t.container.offsetWidth,
        height: t.container.offsetHeight
    }, t.MAX_SIZE = 450, t.OBJ_SCALE = 1.2, t.radius = e.radius || 120, t.vertexLabels = e.vertexLabels || [], t.mouseDown = !1, t.rotateStartPoint = new THREE.Vector3(0, 0, 1), t.rotateEndPoint = new THREE.Vector3(0, 0, 1), t.curQuaternion, t.idleRotationSpeed = .5 * Math.pow(t.containerSize.width / t.MAX_SIZE, 2), t.interactiveRotationSpeed = 1.5, t.lastMoveTimestamp = (new Date).getTime(), t.moveReleaseTimeDelta = 50, t.mouseStartPoint = {
        x: 0,
        y: 0
    }, t.delta = {
        x: 80 * Math.pow(t.containerSize.width / t.MAX_SIZE, 4),
        y: 80 * Math.pow(t.containerSize.width / t.MAX_SIZE, 4)
    }, t.scene = new THREE.Scene, t.camera = new THREE.PerspectiveCamera(75, t.containerSize.width / t.containerSize.height, .1, 2e3), t.camera.position.z = 200, t.renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    }), t.renderer.setPixelRatio(window.devicePixelRatio), t.renderer.setSize(t.containerSize.width, t.containerSize.height), t.renderer.setClearColor(16777215, 0), t.container.appendChild(t.renderer.domElement), t.setupLighting(), t.setupObject(), t.render = t.render.bind(t), t.onDragStart = t.onDragStart.bind(t), t.onDragMove = t.onDragMove.bind(t), t.onDragEnd = t.onDragEnd.bind(t), "ontouchend" in document ? document.addEventListener("touchstart", t.onDragStart, !1) : document.addEventListener("mousedown", t.onDragStart, !1), window.addEventListener("resize", function () {
        t.containerSize = {
            width: t.container.offsetWidth,
            height: t.container.offsetHeight
        }, t.renderer.setSize(t.containerSize.width, t.containerSize.height)
    })
};
Icosahedron.prototype = {
    setupLighting: function () {
        var e = this, t = new THREE.AmbientLight(16759263, .3);
        e.scene.add(t);
        var n = new THREE.PointLight(16768752, .5);
        n.position.z = 350, n.position.y = 200, n.position.x = -200, e.scene.add(n);
        var r = new THREE.PointLight(16756699, .4);
        r.position.z = 150, r.position.y = 100, r.position.x = 250, e.scene.add(r);
        var i = new THREE.PointLight(16777215, .4);
        i.position.z = 150, i.position.y = -300, i.position.x = 25, e.scene.add(i)
    },

    setupObject: function () {

        var e = this;
        e.material = new THREE.MeshPhongMaterial({
            color: new THREE.Color("rgb(195,199,255)"),
            emissive: new THREE.Color("rgb(217,220,255)"),
            emissiveIntensity: .3,
            specular: new THREE.Color("rgb(255,255,255)"),
            shininess: 3
        }),
            e.geometry = new THREE.IcosahedronGeometry(e.radius, 0),
            e.lowResMesh = new THREE.Mesh(e.geometry, e.material), (new THREE.OBJLoader).load("/img/v3/radar/icosa.min.obj", function (t) {
            t.traverse(function (t) {
                if (t instanceof THREE.Mesh) {
                    var n = (new THREE.Geometry).fromBufferGeometry(t.geometry);

                    n.computeFaceNormals(), n.mergeVertices(), n.computeVertexNormals(), t.geometry = (new THREE.BufferGeometry).fromGeometry(n), t.material = e.material

                }


            })
            e.highResMesh = t, e.highResMesh.scale.set(e.OBJ_SCALE, e.OBJ_SCALE, e.OBJ_SCALE), e.scene.add(e.highResMesh)
        }), e.vertices = [];


        for (var t = 0; t < e.geometry.vertices.length; t++) {
            var n = document.createElement("div");
            n.classList.add("vertex-marker"), n.classList.add("initially-hidden");
            var r = document.createElement("div");
            r.classList.add("label-container");
            var i = document.createElement("div");
            i.classList.add("label"), i.innerHTML = e.vertexLabels[t], r.appendChild(i), n.appendChild(r), e.container.appendChild(n), e.vertices.push({
                marker: n,
                labelContainer: r,
                label: i,
                z: -1
            })
        }
    }, onDragStart: function (e) {
        var t = this;
        e.target == t.renderer.domElement && (e.preventDefault(), "ontouchend" in document ? (document.addEventListener("touchmove", t.onDragMove, !1), document.addEventListener("touchend", t.onDragEnd, !1)) : (document.addEventListener("mousemove", t.onDragMove, !1), document.addEventListener("mouseup", t.onDragEnd, !1)), t.mouseDown = !0, e.touches && (e = e.touches[0]), t.mouseStartPoint = {
            x: e.clientX,
            y: e.clientY
        }, t.rotateStartPoint = t.rotateEndPoint = t.projectOnTrackball(0, 0), window.siteAnalytics && window.siteAnalytics.trackRadarIcosahedron && window.siteAnalytics.trackRadarIcosahedron())
    }, onDragMove: function (e) {
        var t = this;
        e.touches && (e = e.touches[0]), t.delta.x = e.clientX - t.mouseStartPoint.x, t.delta.y = e.clientY - t.mouseStartPoint.y, t.rotateObject(), t.mouseStartPoint.x = e.clientX, t.mouseStartPoint.y = e.clientY, t.lastMoveTimestamp = new Date
    }, onDragEnd: function (e) {
        var t = this;
        (new Date).getTime() - t.lastMoveTimestamp.getTime() > t.moveReleaseTimeDelta && (t.delta.x = e.clientX - t.mouseStartPoint.x, t.delta.y = e.clientY - t.mouseStartPoint.y), t.mouseDown = !1, "ontouchend" in document ? (document.removeEventListener("touchmove", t.onDragMove, !1), document.removeEventListener("touchend", t.onDragEnd, !1)) : (document.removeEventListener("mousemove", t.onDragMove, !1), document.removeEventListener("mouseup", t.onDragEnd, !1))
    }, vertexScreenCoordinates: function (e) {
        var t = this, n = t.geometry.vertices[e].clone();
        t.lowResMesh.updateMatrixWorld(), n.applyMatrix4(t.lowResMesh.matrixWorld);
        var r = n.project(t.camera);
        return r.x = (r.x + 1) / 2 * t.containerSize.width, r.y = -(r.y - 1) / 2 * t.containerSize.height, r
    }, projectOnTrackball: function (e, t) {
        var n = this, r = new THREE.Vector3, i = window.innerWidth / 2, s = window.innerHeight / 2;
        r.set(n.clamp(e / i, -1, 1), n.clamp(-t / s, -1, 1), 0);
        var o = r.length();
        return o > 1 ? r.normalize() : r.z = Math.sqrt(1 - o * o), r
    }, rotateMatrix: function (e, t, n) {
        var r = new THREE.Vector3, i = new THREE.Quaternion, s = Math.acos(e.dot(t) / e.length() / t.length());
        return s && (r.crossVectors(e, t).normalize(), s *= n, i.setFromAxisAngle(r, s)), i
    }, rotateObject: function () {
        var e = this;
        e.rotateEndPoint = e.projectOnTrackball(e.delta.x, e.delta.y);
        var t = e.rotateMatrix(e.rotateStartPoint, e.rotateEndPoint, e.interactiveRotationSpeed);
        e.curQuaternion = e.lowResMesh.quaternion, e.curQuaternion.multiplyQuaternions(t, e.curQuaternion), e.curQuaternion.normalize(), e.lowResMesh.setRotationFromQuaternion(e.curQuaternion), e.highResMesh && e.highResMesh.setRotationFromQuaternion(e.curQuaternion), e.rotateEndPoint = e.rotateStartPoint
    },

    updateLabels: function () {
        var e = this, t = e.geometry.vertices.map(function (t) {
            return e.lowResMesh.localToWorld(t.clone()).z
        }).sort(function (e, t) {
            return e - t
        }), n = -e.radius, r = e.radius, i = .75, s = 1, o = r - n, u = s - i;
        for (var a = 0; a < e.geometry.vertices.length; a++) {
            var f = e.vertexScreenCoordinates(a);
            e.vertices[a].marker.style.transform = "translate(" + f.x + "px," + f.y + "px)";
            var l = e.lowResMesh.localToWorld(e.geometry.vertices[a].clone());
            e.vertices[a].worldZ = l.z, l.z < 5 ? e.vertices[a].marker.classList.remove("visible") : e.vertices[a].marker.classList.add("visible");
            var c = t.indexOf(l.z);
            c > -1 && e.vertices[a].z != c && (e.vertices[a].z = c, e.vertices[a].marker.style.zIndex = c + 1e3);
            var h = (l.z - n) * u / o + i;
            e.vertices[a].label.style.transform = "scale(" + h + ")"
        }
    }, render: function () {
        var e = this;
        requestAnimationFrame(e.render);
        if (!e.mouseDown) {
            var t = .92, n = e.idleRotationSpeed;
            e.delta.x < -n || e.delta.x > n ? e.delta.x *= t : e.delta.x = n * (e.delta.x < 0 ? -1 : 1), e.delta.y < -n || e.delta.y > n ? e.delta.y *= t : e.delta.y = n * (e.delta.y < 0 ? -1 : 1), e.rotateObject()
        }
        e.renderer.render(e.scene
            , e.camera), e.updateLabels()
    }, show: function (e) {
        var t = this;
        setTimeout(function () {
            t.container.classList.add("visible"), t.render(), setTimeout(function () {
                t.vertices.forEach(function (e, t) {
                    e.marker.style.display = "flex", setTimeout(function () {
                        e.marker.classList.remove("initially-hidden")
                    }, t * 30 + 100)
                })
            }, 1e3)
        }, e)
    }, showConnection: function () {
        var e = this, t = 30;
        e.updateLabels();
        var n = e.vertices.filter(function (e) {
            return e.worldZ > t
        }), r = [];
        for (var i = 0; i < 2; i++)r.push(n[Math.floor(Math.random() * n.length)]);
        var s = function (e) {
            setTimeout(function () {
                r[e].label.classList.add("highlighted"), setTimeout(function () {
                    r[e].label.classList.remove("highlighted")
                }, e * 100 + 500)
            }, e * 250)
        };
        for (var i = 0; i < 2; i++)s(i)
    }, clamp: function (e, t, n) {
        return Math.min(Math.max(e, t), n)
    }, setInterval: function (e, t) {
        var n = function (i) {
            i - r >= t && (r = i, e()), requestAnimationFrame(n)
        }, r = performance.now();
        requestAnimationFrame(n)
    }
};




var FraudChart = function (e) {
    var t = this;
    t.options = e || {}, t.container = e.container, t.graph = e.graph, t.slider = e.slider, t.xAxis = e.xAxis, t.sliderFill = e.slider.querySelector(".fill"), t.maxBarCount = e.maxBarCount || 22, t.minBarPadding = e.minBarPadding || 7, t.barWidth = e.barWidth || 8, t.initialBarValues = t.generateInitialBarValues(t.maxBarCount), t.animated = !1, t.barOffset = 0, t.render = t.render.bind(t), t.currentEffectiveness = e.effectiveness || 0, t.dragScale = e.dragScale || 350, t.dragStartX = 0, t.dragging = !1, t.hovering = !1, t.toggleInterval = e.toggleInterval || 5e3, t.easings = {
        easeInOutCubic: function (e, t, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
        }, easeInOutQuad: function (e, t, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
        }, linear: function (e, t, n, r) {
            return n * e / r + t
        }
    }, window.addEventListener("resize", function () {
        if (t.graph.offsetWidth != t.graphSize.width || t.graph.offsetHeight != t.graphSize.height) t.graphSize = {
            width: t.graph.offsetWidth,
            height: t.graph.offsetHeight
        }, t.render(t.effectiveness)
    });
    var n = function (e) {
        e.preventDefault();
        var n = e.pageX - t.dragStartX;
        t.dragStartX = e.pageX;
        var r = t.effectiveness + n / t.dragScale;
        t._setEffectivenessValue(r, !0)
    };
    "ontouchend" in document == 0 && (document.body.addEventListener("mousedown", function (e) {
        e.target == t.graph && (t.dragging = !0, t.effectivenessOnMouseDown = t.effectiveness, t.dragStartX = e.pageX, n(e), document.body.addEventListener("mousemove", n), document.body.addEventListener("mouseup", function () {
            t.dragging = !1, document.body.removeEventListener("mousemove", n)
        }), window.siteAnalytics && window.siteAnalytics.trackRadarFraudChart && window.siteAnalytics.trackRadarFraudChart())
    }), t.graph.addEventListener("mouseover", function () {
        t.hovering = !0, t.interval.cancel()
    }), t.graph.addEventListener("mouseout", function () {
        t.hovering = !1, t.interval = t.setInterval(r, t.toggleInterval)
    })), setTimeout(function () {
        t.graphSize = {
            width: t.graph.offsetWidth,
            height: t.graph.offsetHeight
        }, t._setEffectivenessValue(e.effectiveness || 0)
    }, 500);
    var r = function () {
        !t.hovering && !t.dragging && t.setEffectiveness(t.effectiveness < .5 ? 1 : 0, 1e3)
    }, i = !1, s = function () {
        if (!i) {
            var e = t.container.getBoundingClientRect();
            e.top < window.innerHeight - e.height && (i = !0, setTimeout(r, 500), t.interval = t.setInterval(r, t.toggleInterval))
        }
    };
    window.addEventListener("scroll", function () {
        s()
    }), s()
};
FraudChart.prototype = {
    _setEffectivenessValue: function (e, t) {
        var n = this;
        n.effectiveness = Math.max(Math.min(e, 1), 0);
        var r, i = function (e) {
            var t = e - (r || e);
            r = e, n.currentEffectiveness = (n.effectiveness - n.currentEffectiveness) * .15 * (t / 16) + n.currentEffectiveness, Math.abs(n.currentEffectiveness - n.effectiveness) < .01 ? (n.currentEffectiveness = n.effectiveness, n.animated = !1, r = null) : requestAnimationFrame(i), n.sliderFill.style.transform = "scaleX(" + n.currentEffectiveness + ")", n.render(n.currentEffectiveness)
        };
        t ? n.animated || (n.animated = !0, requestAnimationFrame(i)) : (n.sliderFill.style.transform = "scaleX(" + n.effectiveness + ")", n.currentEffectiveness = n.effectiveness, n.render(n.effectiveness))
    }, setEffectiveness: function (e, t, n) {
        var r = this, i = r.effectiveness, s = e;
        if (t > 0) {
            var o, u = function (e) {
                o = o || e;
                var a = e - o, f = r.easings.easeInOutCubic(a, i, s - i, t);
                r._setEffectivenessValue(f), a < t ? requestAnimationFrame(u) : (r._setEffectivenessValue(s), n && onComplete())
            };
            requestAnimationFrame(u)
        } else r._setEffectivenessValue(s), onComplete && onComplete()
    }, generateInitialBarValues: function (e) {
        var t = this, n = t.initialBarValues || [];
        if (e > n.length) {
            var r = .3, i = 1, s = e - n.length;
            for (var o = 0; o < s; o++)n.push(Math.random() * (i - r) + r)
        } else e < n.length && (n = n.slice(0, e));
        return n
    }, generateInterpolatedBarValues: function (e, t) {
        var n = 6;
        return e.map(function (r, i) {
            var s = 2 / (e.length - 1) * i - 1, o = Math.pow(s, n);
            return t * (o - e[i]) + e[i]
        })
    }, render: function (e) {
        var t = this;
        t.barCount = t.maxBarCount;
        var n = Math.max((t.graphSize.width - t.barCount * t.barWidth) / (t.barCount - 1), t.minBarPadding);
        while (t.barWidth * t.barCount + n * (t.barCount - 1) > t.graphSize.width)n > t.minBarPadding ? n-- : (t.barCount--, n = t.minBarPadding);
        t.initialBarValues.length != t.barCount && (t.initialBarValues = t.generateInitialBarValues(t.barCount));
        var r = t.barWidth * t.barCount + n * (t.barCount - 1), i = (t.graphSize.width - r) / 2;
        i != t.barOffset && (t.barOffset = i, t.xAxis.style.padding = "0 " + i + "px");
        var s = t.generateInterpolatedBarValues(t.initialBarValues, e), o = s.map(function (e, r) {
            var s = t.barWidth / t.graphSize.height * 100, o = Math.max(e * 100, s), u = Math.round(r * (t.barWidth + n) + i), a = 100 - o;
            return '<rect width="' + t.barWidth + '" height="' + o + '%" x="' + u + '" y="' + a + '%" rx="' + t.barWidth / 2 + '"/>'
        }), u = ['<svg viewBox="0 0 ' + t.graphSize.width + " " + t.graphSize.height + '">', "<defs>", '<linearGradient id="chart-gradient" x1="100%" x2="0%" y1="0%" y2="0%" gradientUnits="userSpaceOnUse">', '<stop stop-color="#FE94E0" offset="0%"/>', '<stop stop-color="#FFBF8A" offset="100%"/>', "</linearGradient>", "</defs>", '<g fill="url(#chart-gradient)" fill-rule="evenodd">', o.join(""), "</g>", "</svg>"].join("");
        t.graph.innerHTML = u
    }, setInterval: function (e, t) {
        var n, r = function (s) {
            s - i >= t && (i = s, e()), n = requestAnimationFrame(r)
        }, i = performance.now();
        return n = requestAnimationFrame(r), {
            cancel: function () {
                cancelAnimationFrame(n)
            }
        }
    }
};
var ReviewQueue = function (e) {
    var t = this;
    t.options = e || {}, t.container = e.container, t.chargeContainer = e.container.querySelector(".charges"), t.charges = e.charges, t.currentChargeIndex = 0, t.addNewCharge = t.addNewCharge.bind(t), t.setChargeOutcome = t.setChargeOutcome.bind(t);
    for (var n = 0; n < 5; n++)t.addNewCharge();
    t.setInterval(function () {
        t.setChargeOutcome(Math.random() > .45, t.addNewCharge)
    }, 3e3)
};
ReviewQueue.prototype = {
    chargeElement: function (e) {
        var t = document.createElement("div");
        return t.classList.add("charge"), t.innerHTML = ['<div class="content">', '<div class="risk-icon"></div>', '<div class="detail amount">', "<h3>" + e.amount + "</h3><br>", "<p>" + e.time + "</p>", "</div>", '<div class="detail customer">', "<h3>" + e.customerName + "</h3><br>", "<p>" + e.reason + "</p>", "</div>", '<div class="spacer"></div>', '<div class="button refund">', '<svg width="17px" height="17px">', '<path d="M10.82 4.75H5.25L7.42 2.6c.62-.6.62-1.53 0-2.14a1.5 1.5 0 0 0-2.17 0L.46 5.2c-.3.3-.46.61-.46 1.07 0 .46.15.77.46 1.07l4.8 4.75c.3.3.77.46 1.08.46.46 0 .77-.15 1.08-.46.62-.61.62-1.53 0-2.15L5.25 7.81h5.57c1.85 0 3.09 1.23 3.09 3.06 0 1.38-.46 3.07-3.1 3.07-.92 0-1.54.61-1.54 1.53S9.9 17 10.82 17c3.7 0 6.18-2.45 6.18-6.13a5.98 5.98 0 0 0-6.18-6.12z"/>', "</svg>", "</div>", '<div class="button accept">', '<svg width="17px" height="15px">', '<path d="M15.1.33L5 10.4 2.4 7.74C1.16 6.7-.68 7.88.24 9.37l3.21 4.88c.46.6 1.69 1.34 2.91 0 .46-.59 10.27-12.44 10.27-12.44C17.7.48 16.18-.56 15.1.33z"/>', "</svg>", "</div>", "</div>"].join(""), t
    }, setChargeOutcome: function (e, t) {
        var n = this, r = n.chargeContainer.childNodes[2], i = r.querySelector(".button." + (e ? "accept" : "refund")), s = function () {
            i.removeEventListener("transitionend", s), t && t()
        }, o = function () {
            i.removeEventListener("animationend", o), i.addEventListener("transitionend", s), r.classList.add(e ? "accepted" : "refunded")
        };
        i.addEventListener("animationend", o), i.classList.add("click")
    }, addNewCharge: function () {
        var e = this;
        e.chargeContainer.childNodes.length >= 5 && e.chargeContainer.removeChild(e.chargeContainer.firstChild);
        var t = e.chargeElement(e.charges[e.currentChargeIndex]);
        e.chargeContainer.appendChild(t), e.currentChargeIndex < e.charges.length - 1 ? e.currentChargeIndex++ : e.currentChargeIndex = 0
    }, setInterval: function (e, t) {
        var n = function (i) {
            i - r >= t && (r = i, e()), requestAnimationFrame(n)
        }, r = performance.now();
        requestAnimationFrame(n)
    }
};
var videoContainer = document.querySelector(".video-container"), video = videoContainer.querySelector(".video"), player = video.querySelector("video"), videoCaption = document.querySelector(".video-caption"), scrollOffset, SCROLL_COLLAPSE_THRESHOLD = 150, LG_VIEWPORT_WIDTH = 1040, TRANSITION_DURATION = 400, hasAutoplayed = !1;
window.addEventListener("resize", function () {
    updateVideoForViewportSize()
}), player.addEventListener("play", function () {
    videoContainer.classList.remove("show-play")
}), player.addEventListener("pause", function () {
    videoContainer.classList.add("show-play")
});
var autoplayVideo = function () {
    !hasAutoplayed && video.getBoundingClientRect().top < window.innerHeight - 100 && (hasAutoplayed = !0, player.play())
}, updateVideoForViewportSize = function () {
    isLargeViewport() ? (isCollapsed() && hideControls(), player.volume = 0) : (video.style.transform = "", collapseVideo(), showControls())
};
window.addEventListener("scroll", function () {
    autoplayVideo(), Math.abs(window.scrollY - scrollOffset) > SCROLL_COLLAPSE_THRESHOLD && collapseVideo()
}), autoplayVideo();
var setVolume = function (e, t) {
    var n = function (e, t, n, r) {
        return r === 0 ? 0 : n * e / r + t
    }, r, i = player.volume, s = function (o) {
        r = r || o;
        var u = o - r, a = n(u, i, e - i, t);
        player.volume = Math.min(a, 1), u < t ? requestAnimationFrame(s) : player.volume = e
    };
    requestAnimationFrame(s)
}, showControls = function () {
    player.setAttribute("controls", "true")
}, hideControls = function () {
    player.removeAttribute("controls")
}, isLargeViewport = function () {
    return window.innerWidth >= LG_VIEWPORT_WIDTH
}, isCollapsed = function () {
    return videoContainer.classList.contains("collapsed")
}, updateFullsizeVideoBounds = function () {
    var e = videoContainer.getBoundingClientRect().top, t = (window.innerHeight - video.offsetHeight) / 2 - e;
    video.style.transform = "translateY(" + t + "px)"
}, expandVideo = function () {
    isCollapsed() && (setVolume(1, 1500), player.play(), showControls(), video.classList.add("animated"), updateFullsizeVideoBounds(), scrollOffset = window.scrollY, videoContainer.classList.remove("collapsed"), videoCaption.classList.remove("visible"), setTimeout(function () {
        video.classList.remove("animated")
    }, TRANSITION_DURATION), window.siteAnalytics && window.siteAnalytics.trackVideoExpand && window.siteAnalytics.trackVideoExpand(player))
}, collapseVideo = function () {
    isCollapsed() || (setVolume(0, 0), player.pause(), hideControls(), video.classList.add("animated"), videoContainer.classList.add("collapsed"), videoCaption.classList.add("visible"), setTimeout(function () {
        video.classList.remove("animated")
    }, TRANSITION_DURATION))
};
document.addEventListener("click", function (e) {
    !isCollapsed() && e.target != video && window.innerWidth >= LG_VIEWPORT_WIDTH && collapseVideo()
}), video.addEventListener("click", function (e) {
    isLargeViewport() && (e.stopPropagation(), isCollapsed() && expandVideo())
}), updateVideoForViewportSize();



var icosahedron = new Icosahedron({
    container: document.querySelector("aside.icosahedron"),
    radius: 120,
    vertexLabels: getVertexLabels()
});
icosahedron.show(1e3);
var fraudChart = new FraudChart({
    container: document.querySelector("aside.chart"),
    graph: document.querySelector("aside.chart .graph"),
    slider: document.querySelector("aside.chart .effectiveness .slider"),
    xAxis: document.querySelector("aside.chart .x-axis"),
    maxBarCount: 30,
    minBarPadding: 9
}), reviewQueue = new ReviewQueue({
    container: document.querySelector("aside.review-queue"),
    charges: [{
        amount: "$583.95",
        time: "13 mins ago",
        customerName: "Bill Labus",
        reason: "Amount > $400"
    }, {
        amount: "$1580.01",
        time: "20 mins ago",
        customerName: "Steve Mardenfeld",
        reason: "Amount > $400"
    }, {
        amount: "$10.00",
        time: "2 hrs ago",
        customerName: "Krithika Muthukumar",
        reason: "Card location mismatch"
    }, {amount: "$275.50", time: "3 hrs ago", customerName: "Ben Rahn", reason: "Prepaid card"}, {
        amount: "$50.01",
        time: "5 hrs ago",
        customerName: "Michelle Bu",
        reason: "Payment from France"
    }, {
        amount: "$10.00",
        time: "10 hrs ago",
        customerName: "Brianna Wolfson",
        reason: "Payment from Australia"
    }, {
        amount: "$1000.01",
        time: "13 hrs ago",
        customerName: "Michael Manapat",
        reason: "Amount > $400"
    }, {
        amount: "$35.75",
        time: "1 day ago",
        customerName: "Matt DuVall",
        reason: "Disposable email address"
    }, {
        amount: "$146.00",
        time: "1 day ago",
        customerName: "Mike Towber",
        reason: "Payment from U.K."
    }, {
        amount: "$10.00",
        time: "1 day ago",
        customerName: "Jen Huang",
        reason: "Card location mismatch"
    }, {
        amount: "$275.50",
        time: "2 days ago",
        customerName: "Greg Cooper",
        reason: "Payment from U.K."
    }, {
        amount: "$465.95",
        time: "2 days ago",
        customerName: "Gautam Nangia",
        reason: "Amount > $400"
    }, {
        amount: "$33.56",
        time: "2 days ago",
        customerName: "Lauren Dai",
        reason: "Charge attempts > 10"
    }, {
        amount: "$10.00",
        time: "2 days ago",
        customerName: "Jeanne DeWitt",
        reason: "Payment from India"
    }, {amount: "$35.75", time: "3 days ago", customerName: "Isaac Hepworth", reason: "Prepaid card"}]
});