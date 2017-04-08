var scene = new THREE.Scene();

Icosahedron.prototype = {
    radius: 120,
    // 设置光源
    setupLighting: function () {

        var ambientLight = new THREE.AmbientLight(0xFFB9DF, .3);
        // var sence = this;
        scene.add(light);

        var e = this, t = new THREE.AmbientLight(0xffb9df, .3);
        e.scene.add(t);

        var light1 = new THREE.PointLight(0xffdef0, .5);
        light1.position.set(350, 200, -200);
        scene.add(light1);
        var light2 = new THREE.PointLight(0xffafdb, .4);

        light2.position.set(150, 100, 250);
        scene.add(light2);

        var light3 = new THREE.PointLight(0xffffff, .4);
        light3.position.set(150, -300, 25);
        scene.add(light3);
        // var n = new THREE.PointLight(0xffdef0, .5);
        // n.position.z = 350, n.position.y = 200, n.position.x = -200, e.scene.add(n);
        // var r = new THREE.PointLight(0xffafdb, .4);
        // r.position.z = 150, r.position.y = 100, r.position.x = 250, e.scene.add(r);
        // var i = new THREE.PointLight(0xffffff, .4);
        // i.position.z = 150, i.position.y = -300, i.position.x = 25, e.scene.add(i)
    },
    // 设置对象
    setupObject: function () {

        var _this = this;
        _this.material = new THREE.MeshPhongMaterial({
            color: new THREE.Color("rgb(195,199,255)"),
            emissive: new THREE.Color("rgb(217,220,255)"),
            emissiveIntensity: .3,
            specular: new THREE.Color("rgb(255,255,255)"),
            shininess: 3
        });

        _this.geometry = new THREE.IcosahedronGeometry(_this.radius, 0);

        _this.lowResMesh = new THREE.Mesh(_this.geometry, _this.material);


        var loader = new THREE.OBJLoader();
        loader.load('img/radar/icosa.min.obj', function (object) {
            object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {

                    var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry)
                    geometry.computeFaceNormals();
                    geometry.mergeVertices();
                    geometry.computeVertexNormals();

                    child.geometry = new THREE.BufferGeometry().fromGeometry(geometry);
                    child.material = _this.material;

                }
            })
            _this.hightResMesh = object;
            _this.hightResMesh.scale.set(_this.OBJ_SCALE, _this.OBJ_SCALE, _this.OBJ_SCALE);
            _this.scene.add(_this.hightResMesh);
        });
        _this.vertices = [];

        for (var i = 0; i < _this.geometry.vertices.length; i++) {
            var div1 = document.createElement('div');
            div1.classList.add("vertex-marker");
            div1.classList.add("initially-hidden");

            var div2 = document.createElement('div');
            div2.classList.add("label-container");

            var div3 = document.createElement('div');
            div3.classList.add("label");
            div3.innnerHTML = _this.vertexLabels[i];

            div2.appendChild(div3);
            div1.appendChild(div2);

            _this.container.appendChild(div1);
            _this.vertices.push({
                marker: div1,
                labelContainer: div2,
                label: div3,
                z: -1
            })
        }

        /*        _this.lowResMesh = new THREE.Mesh(e.geometry, e.material),
         (new THREE.OBJLoader).load("/img/v3/radar/icosa.min.obj", function (t) {
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
         }*/
    },
    onDragStart: function (e) {
        var t = this;
        e.target == t.renderer.domElement && (e.preventDefault(), "ontouchend" in document ? (document.addEventListener("touchmove", t.onDragMove, !1), document.addEventListener("touchend", t.onDragEnd, !1)) : (document.addEventListener("mousemove", t.onDragMove, !1), document.addEventListener("mouseup", t.onDragEnd, !1)), t.mouseDown = !0, e.touches && (e = e.touches[0]), t.mouseStartPoint = {
            x: e.clientX,
            y: e.clientY
        }, t.rotateStartPoint = t.rotateEndPoint = t.projectOnTrackball(0, 0), window.siteAnalytics && window.siteAnalytics.trackRadarIcosahedron && window.siteAnalytics.trackRadarIcosahedron())
    },
    onDragMove: function (e) {
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
    },

    render: function () {
        var _this = this;
        requestAnimationFrame(_this.render);
        if (!_this.mouseDown) {
            var t = .92, n = _this.idleRotationSpeed;
            _this.delta.x < -n || _this.delta.x > n ? _this.delta.x *= t : _this.delta.x = n * (_this.delta.x < 0 ? -1 : 1), _this.delta.y < -n || _this.delta.y > n ? _this.delta.y *= t : _this.delta.y = n * (_this.delta.y < 0 ? -1 : 1), _this.rotateObject()
        }
        _this.renderer.render(_this.scene
            , _this.camera), _this.updateLabels()
    },

    show: function (millisec) {
        var _this = this;
        setTimeout(function () {
            _this.container.classList.add("visible"), _this.render(), setTimeout(function () {
                _this.vertices.forEach(function (e, t) {
                    e.marker.style.display = "flex", setTimeout(function () {
                        e.marker.classList.remove("initially-hidden")
                    }, t * 30 + 100)
                })
            }, 1e3)
        }, millisec)
    },

    showConnection: function () {
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
    },

    clamp: function (e, t, n) {
        return Math.min(Math.max(e, t), n)
    },

    setInterval: function (e, t) {
        var n = function (i) {
            i - r >= t && (r = i, e()), requestAnimationFrame(n)
        }, r = performance.now();
        requestAnimationFrame(n)
    }
};
