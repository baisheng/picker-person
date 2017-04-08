function getVertexLabels() {
    var e = ["Sketch", "JAVA", "NODE.js", "VI", "UI/UE", "产品设计", "技术咨询", "互联网教育", "微服务", "新媒体运营", "技术服务", "创新产品"], t = document.getElementById("animation-strings");
    return t ? JSON.parse(t.innerHTML) : e
}


var Icosahedron = function (e) {
    var t = this;
    t.options = e || {},
        t.container = e.container,
        t.containerSize = {
            width: t.container.offsetWidth,
            height: t.container.offsetHeight
        },

        t.MAX_SIZE = 450,
        t.OBJ_SCALE = 1.2,
        t.radius = e.radius || 120,
        t.vertexLabels = e.vertexLabels || [],
        t.mouseDown = !1,
        t.rotateStartPoint = new THREE.Vector3(0, 0, 1),
        t.rotateEndPoint = new THREE.Vector3(0, 0, 1),
        t.curQuaternion,

        // t.idleRotationSpeed = .5 * Math.pow(t.containerSize.width / t.MAX_SIZE, 2),
        // t.idleRotationSpeed = .5 * Math.pow(t.containerSize.width / t.MAX_SIZE, 2),
        t.idleRotationSpeed = .5 * Math.pow((t.containerSize.width / 2) / t.MAX_SIZE, 2),
        // t.idleRotationSpeed = .5,
        t.interactiveRotationSpeed = 1.5,
        t.lastMoveTimestamp = (new Date).getTime(),
        t.moveReleaseTimeDelta = 50, t.mouseStartPoint = {
        x: 0,
        y: 0
    },
        t.delta = {
            x: 80 * Math.pow(t.containerSize.width / t.MAX_SIZE, 4),
            y: 80 * Math.pow(t.containerSize.width / t.MAX_SIZE, 4)
        },
        t.scene = new THREE.Scene(),
        // t.camera = new THREE.PerspectiveCamera(75, t.containerSize.width / t.containerSize.height, .1, 2e3), t.camera.position.z = 200,
        // t.camera = new THREE.PerspectiveCamera( 100, t.containerSize.width / t.containerSize.height, 1, 100 );
        //
        t.camera = new THREE.PerspectiveCamera(115, t.containerSize.width / t.containerSize.height, .1, 2e3);


    // t.camera.position.z = 30;
    t.camera.position.z = 200;
    t.camera.position.y = 0;

    // t.scene.add(t.camera);

    // t.renderer = new THREE.WebGLRenderer({
    //     antialias: !0,
    //     alpha: !0
    // });

    if ( Detector.webgl ) {
        t.renderer = new THREE.WebGLRenderer( {
            alpha: true,
            antialias: false
        } );
    } else {
        t.renderer = new THREE.CanvasRenderer();
    }

    t.renderHalfX = t.container.clientWidth / 2;
    t.renderHalfY = t.container.clientHeight / 2;

        t.renderer.setPixelRatio(window.devicePixelRatio),
        t.renderer.setSize(t.containerSize.width, t.containerSize.height),
        t.renderer.setClearColor(0xFFFFFF, 0),
        t.container.appendChild(t.renderer.domElement),

        t.renderer.shadowMap.enabled = true;
    t.renderer.shadowMapSoft = true;

    // t.renderer.shadowCameraNear = 3;
    // t.renderer.shadowCameraFar = t.camera.far;
    // t.renderer.shadowCameraFov = 75;
    // t.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //
    // t.renderer.shadowMapBias = 0.0039;
    // t.renderer.shadowMapDarkness = 0.5;
    // t.renderer.shadowMapWidth = 1024;
    // t.renderer.shadowMapHeight = 1024;

    // controls = new THREE.OrbitControls( t.camera, t.renderer.domElement );
    // controls.enableDamping = true;
    // controls.dampingFactor = .05;
    // controls.enableZoom = false;
    // controls.rotateSpeed = .05;
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.2;
    //
    // t.container.appendChild( t.renderer.domElement );

        t.setupLighting(),
        t.setupObject(),
        t.render = t.render.bind(t),
        t.onDragStart = t.onDragStart.bind(t),
        t.onDragMove = t.onDragMove.bind(t),
        t.onDragEnd = t.onDragEnd.bind(t),
        "ontouchend" in document ? document.addEventListener("touchstart", t.onDragStart, !1) : document.addEventListener("mousedown", t.onDragStart, !1),

        window.addEventListener("resize", function () {
            t.containerSize = {
                width: t.container.offsetWidth,
                height: t.container.offsetHeight

            },
                t.renderer.setSize(t.containerSize.width, t.containerSize.height)
            t.camera.aspect = t.containerSize.width / t.containerSize.height;
            t.camera.updateProjectionMatrix();

        })


};


Icosahedron.prototype = {
    setupLighting: function () {
        var e = this;

        t = new THREE.AmbientLight(0x949494, .3);
        e.scene.add(t);
        var n = new THREE.PointLight(0xFFFFFF, .5);
        n.position.z = 350, n.position.y = 200, n.position.x = -200, e.scene.add(n);
        var r = new THREE.PointLight(0xF5f5f5, .4);
        r.position.z = 150, r.position.y = 100, r.position.x = 250, e.scene.add(r);
        var i = new THREE.PointLight(0xFafafa, .4);
        i.position.z = 150, i.position.y = -300, i.position.x = 25, e.scene.add(i)

        /*

        var lightGroup = [];

        lightGroup[0] = new THREE.SpotLight(0xFFFFFF);
        lightGroup[0].position.set(0, 25, 69);
        lightGroup[0].castShadow = true;
        lightGroup[0].angle = .2;
        lightGroup[0].intensity = 0.1;
        lightGroup[0].shadowMapDarkness = 0.9;
        lightGroup[0].lookAt(e.scene);

        e.camera.add(lightGroup[0]);

        lightGroup[1] = new THREE.DirectionalLight(0xFFFFFF, 0.5);
        lightGroup[1].position.set(e.camera.position.x, e.camera.position.y, e.camera.position.z);
        lightGroup[1].castShadow = true;
        lightGroup[1].shadowMapDarkness = 0.9;

        e.camera.add(lightGroup[1]);
        */
    },

    setupObject: function () {

        var e = this;

        e.material = new THREE.MeshPhongMaterial({
            // color: 0x949494,
            // emissive: 0xa8a8a8,
            // shading: THREE.FlatShading,
            // shininess: 75,
            // color: new THREE.Color("rgb(195,199,255)"),
            color: new THREE.Color("rgb(215,215,215)"),
            emissive: new THREE.Color("rgb(245,245,245)"),
            emissiveIntensity: .3,
            specular: new THREE.Color("rgb(255,255,255)"),
            shininess: 3
        });

        // e.material = new THREE.MeshPhongMaterial({
        // color: new THREE.Color("rgb(195,199,255)"),
        // emissive: new THREE.Color("rgb(217,220,255)"),
        // emissiveIntensity: .85,
        // specular: new THREE.Color("rgb(255,255,255)"),

        // color: 0x949494,
        // emissive: 0xa8a8a8,
        // shading: THREE.FlatShading,
        // shininess: 75
        // }),
        // e.geometry = new THREE.IcosahedronGeometry(e.radius, 0),
        e.geometry = new THREE.IcosahedronGeometry(e.radius, 0),
            e.lowResMesh = new THREE.Mesh(e.geometry, e.material),
            (new THREE.OBJLoader).load("/themes/caixie/img/radar/icosa.min.obj", function (t) {
                t.traverse(function (t) {
                    if (t instanceof THREE.Mesh) {
                        var n = (new THREE.Geometry).fromBufferGeometry(t.geometry);

                        n.computeFaceNormals(),
                            n.mergeVertices(),
                            n.computeVertexNormals(),
                            t.geometry = (new THREE.BufferGeometry).fromGeometry(n),
                            t.material = e.material

                    }


                })
                e.highResMesh = t,
                    e.highResMesh.scale.set(e.OBJ_SCALE, e.OBJ_SCALE, e.OBJ_SCALE),
                    e.scene.add(e.highResMesh)
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
    },
    onDragEnd: function (e) {
        var t = this;
        (new Date).getTime() - t.lastMoveTimestamp.getTime() > t.moveReleaseTimeDelta && (t.delta.x = e.clientX - t.mouseStartPoint.x, t.delta.y = e.clientY - t.mouseStartPoint.y), t.mouseDown = !1, "ontouchend" in document ? (document.removeEventListener("touchmove", t.onDragMove, !1), document.removeEventListener("touchend", t.onDragEnd, !1)) : (document.removeEventListener("mousemove", t.onDragMove, !1), document.removeEventListener("mouseup", t.onDragEnd, !1))
    },

    vertexScreenCoordinates: function (e) {
        var t = this, n = t.geometry.vertices[e].clone();
        t.lowResMesh.updateMatrixWorld(), n.applyMatrix4(t.lowResMesh.matrixWorld);
        var r = n.project(t.camera);
        return r.x = (r.x + 1) / 2 * t.containerSize.width, r.y = -(r.y - 1) / 2 * t.containerSize.height, r
    },

    projectOnTrackball: function (e, t) {
        var n = this, r = new THREE.Vector3, i = window.innerWidth / 2, s = window.innerHeight / 2;
        r.set(n.clamp(e / i, -1, 1), n.clamp(-t / s, -1, 1), 0);
        var o = r.length();
        return o > 1 ? r.normalize() : r.z = Math.sqrt(1 - o * o), r
    },

    rotateMatrix: function (e, t, n) {
        var r = new THREE.Vector3, i = new THREE.Quaternion, s = Math.acos(e.dot(t) / e.length() / t.length());
        return s && (r.crossVectors(e, t).normalize(), s *= n, i.setFromAxisAngle(r, s)), i
    },

    rotateObject: function () {
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
        var e = this;
        requestAnimationFrame(e.render);

        if (!e.mouseDown) {
            var t = .92, n = e.idleRotationSpeed;
            e.delta.x < -n || e.delta.x > n ? e.delta.x *= t : e.delta.x = n * (e.delta.x < 0 ? -1 : 1), e.delta.y < -n || e.delta.y > n ? e.delta.y *= t : e.delta.y = n * (e.delta.y < 0 ? -1 : 1),
                e.rotateObject()
        }

        e.renderer.render(e.scene, e.camera),
            e.updateLabels()

    },

    show: function (e) {
        var t = this;
        setTimeout(function () {
            t.container.classList.add("visible"), t.render(), setTimeout(function () {
                t.vertices.forEach(function (e, t) {
                    e.marker.style.display = "flex",
                        setTimeout(function () {
                            e.marker.classList.remove("initially-hidden")
                        }, t * 30 + 100)
                })
            }, 1e3)
        }, e)

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
