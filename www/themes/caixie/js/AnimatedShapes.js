'use strict';

var AnimatedShape = function ( container, shape ) {

    container = typeof container == 'string' ? document.getElementById( container ) : console.info( 'An ID container is here required' );

    var scene,
        camera,
        renderer,
        mesh,
        delta,
        controls,
        lightGroup,
        previousMousePosition,
        time,
        mouseX,
        mouseY,
        renderHalfX,
        renderHalfY,
        Controls;

    var targetRotationX = 0;
    var targetRotationY = 0;
    var targetRotationOnMouseDownX = 0;
    var targetRotationOnMouseDownY = 0;
    var mouseXOnMouseDown = 0;
    var mouseYOnMouseDown = 0;
    var dragConst = 0.15;

    var sizes = {
        HEIGHT: container.offsetHeight,
        WIDTH: container.offsetWidth
    }

    var isDragging = false;
    var previousMousePosition = {
        x: 0,
        y: 0
    };

    var targets;

    function createScene() {
        scene = new THREE.Scene();

        var HEIGHT = sizes.HEIGHT;
        var WIDTH = sizes.WIDTH;

        camera = new THREE.PerspectiveCamera( 100, WIDTH / HEIGHT, 1, 100 );
        camera.position.z = 30;
        camera.position.y = 0;

        if ( Detector.webgl ) {
            renderer = new THREE.WebGLRenderer( {
                alpha: true,
                antialias: false
            } );
        } else {
            renderer = new THREE.CanvasRenderer();
        }

        renderHalfX = container.clientWidth / 2;
        renderHalfY = container.clientHeight / 2;

        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( WIDTH, HEIGHT );
        renderer.shadowMap.enabled = true;
        renderer.shadowMapSoft = true;

        renderer.shadowCameraNear = 3;
        renderer.shadowCameraFar = camera.far;
        renderer.shadowCameraFov = 75;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        renderer.shadowMapBias = 0.0039;
        renderer.shadowMapDarkness = 0.5;
        renderer.shadowMapWidth = 1024;
        renderer.shadowMapHeight = 1024;

        controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.enableDamping = true;
        controls.dampingFactor = .05;
        controls.enableZoom = false;
        controls.rotateSpeed = .05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.2;

        container.appendChild( renderer.domElement );

        scene.add( camera );
    }

    function createLight() {
        lightGroup = [];

        lightGroup[ 0 ] = new THREE.SpotLight( 0xFFFFFF );
        lightGroup[ 0 ].position.set( 0, 25, 69 );
        lightGroup[ 0 ].castShadow = true;
        lightGroup[ 0 ].angle = .2;
        lightGroup[ 0 ].intensity = 0.1;
        lightGroup[ 0 ].shadowMapDarkness = 0.9;
        lightGroup[ 0 ].lookAt( scene );

        camera.add( lightGroup[ 0 ] );

        lightGroup[ 1 ] = new THREE.DirectionalLight( 0xFFFFFF, 0.5 );
        lightGroup[ 1 ].position.set( camera.position.x, camera.position.y, camera.position.z );
        lightGroup[ 1 ].castShadow = true;
        lightGroup[ 1 ].shadowMapDarkness = 0.9;

        camera.add( lightGroup[ 1 ] );
    }

    function createShape() {

        // var material = new THREE.MeshPhongMaterial( {
        //     color: 0x949494,
        //     emissive: 0xa8a8a8,
        //     shading: THREE.FlatShading,
        //     shininess: 75,
            // color: new THREE.Color("rgb(195,199,255)"),
            // emissive: new THREE.Color("rgb(217,220,255)"),
            // emissiveIntensity: .3,
            // specular: new THREE.Color("rgb(255,255,255)"),
            // shininess: 3
        // } );

        var material = new THREE.MeshPhongMaterial({
            color: new THREE.Color("rgb(195,199,255)"),
            emissive: new THREE.Color("rgb(217,220,255)"),
            emissiveIntensity: .3,
            specular: new THREE.Color("rgb(255,255,255)"),
            shininess: 3
        });

        switch ( shape ) {
          case 'icosahedron':
            var geometry = getIcosahedron();
            break;
          case 'cube':
            var geometry = getCube();
            break;
          case 'tetrahedron':
            var geometry = getTetrahedron();
            break;
          case 'octahedron':
            var geometry = getOctahedron();
            break;
        }

        // var loader = new THREE.OBJLoader();
        // loader.load('../img/radar/icosa.min.obj', function ( object ) {
        //     scene.add( object );
        // } );

        var loader = new THREE.OBJLoader(  );
        loader.load( 'img/radar/icosa.min.obj', function ( object ) {
            object.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material.map = texture;
                    var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry)



                    // geometry.vertices = vertices;
                    // geometry.faces = faces;
                    geometry.computeFaceNormals();
                    geometry.mergeVertices();
                    geometry.computeVertexNormals();


                    mesh = new THREE.Mesh( geometry, material );

                }
            } );
            // object.position.y = - 95;
            scene.add( object );
        });



        // mesh = new THREE.Mesh( loader, material );
        //
        // mesh.position.y = 0;
        // mesh.position.z = 0;
        // mesh.castShadow = true;
        //
        // scene.add( mesh );
    }

    function getIcosahedron() {
        return new THREE.IcosahedronGeometry( 15 );
    }

    function getCube() {
      return new THREE.BoxGeometry( 15, 15, 15 );
    }

    function getTetrahedron() {
      return new THREE.TetrahedronGeometry(15);
    }

    function getOctahedron() {
      return new THREE.OctahedronGeometry(15);
    }

    function getAmountAway() {
        return fullRotation - mesh.rotation.y;
    }

    function getAmountPossible() {
        return time * velocity;
    }

    function toRadians( angle ) {
        return angle * ( Math.PI / 180 );
    }

    function toDegrees( angle ) {
        return angle * ( 180 / Math.PI );
    }

    function move( delta ) {

        if ( typeof delta === 'boolean' ) {
            return velocity;
        } else {

            if ( velocity < 0 && mesh.rotation.y == 0 ) {
                return false;
            }

            mesh.rotation.y = ( mesh.rotation.y + delta * velocity ) % fullRotation;
            time -= delta;

            if ( endVelocity ) {
                velocity = endVelocity * ( getAmountAway() / endRotation );
            } else if ( getAmountAway() >= getAmountPossible() ) {
                endVelocity = velocity;
                endRotation = getAmountAway();
            } else {
                velocity = parseFloat( speedUp * time );
            }
        }
    }

    var realVelocity;
    var wait = 0;

    function spinning( velocity, delta ) {

        if ( !isDragging ) {

            mesh.rotation.y = ( mesh.rotation.y + delta * velocity / 2 ) % fullRotation;

            if ( wait >= delta * 2 ) {
                mesh.rotation.x = ( mesh.rotation.x + delta * velocity / 4 ) % fullRotation;
            } else {
                wait += delta;
            }
        }

    }

    function onMouseDown( event ) {
        event.preventDefault();

        document.addEventListener( 'mousemove', onMouseMove, false );
        document.addEventListener( 'mouseup', onMouseUp, false );
        document.addEventListener( 'mouseout', onMouseOut, false );

        isDragging = true;
    }

    function onMouseMove( event ) {

        previousMousePosition = {
            x: event.offsetX,
            y: event.offsetY
        };

        return targets = {
            targetRotationX,
            targetRotationY
        };
    }

    function onTouchStart( event ) {
        if ( event.touches.length == 1 ) {
            event.preventDefault();

            mouseXOnMouseDown = event.touches[ 0 ].pageX - renderHalfX;
            targetRotationOnMouseDownX = targetRotationX;

            mouseYOnMouseDown = event.touches[ 0 ].pageY - renderHalfY;
            targetRotationOnMouseDownY = targetRotationY;
        }
    }

    function onTouchMove( event ) {
        if ( event.touches.length == 1 ) {
            event.preventDefault();

            mouseX = event.touches[ 0 ].pageX - renderHalfX;
            targetRotationX = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.05;

            mouseY = event.touches[ 0 ].pageY - renderHalfY;
            targetRotationY = targetRotationOnMouseDownY + ( mouseY - mouseYOnMouseDown ) * 0.05;
        }
    }

    function onMouseUp( event ) {

        isDragging = false;

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );
        document.removeEventListener( 'mouseout', onMouseOut, false );
    }


    function onMouseOut( event ) {

        isDragging = false;
        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );
        document.removeEventListener( 'mouseout', onMouseOut, false );
    }

    function loop( time ) {

        if ( !loop.lastTime ) {
            loop.lastTime = time;
        }

        var delta = time - loop.lastTime;
        loop.lastTime = time;

        requestAnimationFrame( loop );

        controls.update();

        renderer.render( scene, camera );
    }

    function onWindowResize() {

        sizes.HEIGHT = container.offsetHeight;
        sizes.WIDTH = container.offsetWidth;

        var HEIGHT = sizes.HEIGHT;
        var WIDTH = sizes.WIDTH;

        renderer.setSize( WIDTH, HEIGHT );
        camera.aspect = WIDTH / HEIGHT;

        camera.updateProjectionMatrix();
    }

    return {
        init: function () {

            createScene();
            createLight();
            createShape();
            loop();

            window.addEventListener( 'resize', onWindowResize, false );

            container.addEventListener( 'mousedown', onMouseDown, false );
            container.addEventListener( 'touchstart', onTouchStart, false );
            container.addEventListener( 'touchmove', onTouchMove, false );
        }
    };
};
