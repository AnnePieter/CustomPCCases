THREE.OrbitControls = function(a, b) {
    function x() {
        return 2 * Math.PI / 60 / 60 * c.autoRotateSpeed
    }

    function y() {
        return Math.pow(.95, c.zoomSpeed)
    }

    function z(a) {
        k.theta -= a
    }

    function A(a) {
        k.phi -= a
    }

    function E(a) {
        c.object instanceof THREE.PerspectiveCamera ? l /= a : c.object instanceof THREE.OrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom * a)), c.object.updateProjectionMatrix(), n = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
    }

    function F(a) {
        c.object instanceof THREE.PerspectiveCamera ? l *= a : c.object instanceof THREE.OrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom / a)), c.object.updateProjectionMatrix(), n = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
    }

    function G(a) {
        o.set(a.clientX, a.clientY)
    }

    function H(a) {
        u.set(a.clientX, a.clientY)
    }

    function I(a) {
        r.set(a.clientX, a.clientY)
    }

    function J(a) {
        p.set(a.clientX, a.clientY), q.subVectors(p, o);
        var b = c.domElement === document ? c.domElement.body : c.domElement;
        z(2 * Math.PI * q.x / b.clientWidth * c.rotateSpeed), A(2 * Math.PI * q.y / b.clientHeight * c.rotateSpeed), o.copy(p), c.update()
    }

    function K(a) {
        v.set(a.clientX, a.clientY), w.subVectors(v, u), w.y > 0 ? E(y()) : w.y < 0 && F(y()), u.copy(v), c.update()
    }

    function L(a) {
        s.set(a.clientX, a.clientY), t.subVectors(s, r), D(t.x, t.y), r.copy(s), c.update()
    }

    function M(a) {}

    function N(a) {
        a.deltaY < 0 ? F(y()) : a.deltaY > 0 && E(y()), c.update()
    }

    function O(a) {
        switch (a.keyCode) {
            case c.keys.UP:
                D(0, c.keyPanSpeed), c.update();
                break;
            case c.keys.BOTTOM:
                D(0, -c.keyPanSpeed), c.update();
                break;
            case c.keys.LEFT:
                D(c.keyPanSpeed, 0), c.update();
                break;
            case c.keys.RIGHT:
                D(-c.keyPanSpeed, 0), c.update()
        }
    }

    function P(a) {
        o.set(a.touches[0].pageX, a.touches[0].pageY)
    }

    function Q(a) {
        var b = a.touches[0].pageX - a.touches[1].pageX,
            c = a.touches[0].pageY - a.touches[1].pageY,
            d = Math.sqrt(b * b + c * c);
        u.set(0, d)
    }

    function R(a) {
        r.set(a.touches[0].pageX, a.touches[0].pageY)
    }

    function S(a) {
        p.set(a.touches[0].pageX, a.touches[0].pageY), q.subVectors(p, o);
        var b = c.domElement === document ? c.domElement.body : c.domElement;
        z(2 * Math.PI * q.x / b.clientWidth * c.rotateSpeed), A(2 * Math.PI * q.y / b.clientHeight * c.rotateSpeed), o.copy(p), c.update()
    }

    function T(a) {
        var b = a.touches[0].pageX - a.touches[1].pageX,
            d = a.touches[0].pageY - a.touches[1].pageY,
            e = Math.sqrt(b * b + d * d);
        v.set(0, e), w.subVectors(v, u), w.y > 0 ? F(y()) : w.y < 0 && E(y()), u.copy(v), c.update()
    }

    function U(a) {
        s.set(a.touches[0].pageX, a.touches[0].pageY), t.subVectors(s, r), D(t.x, t.y), r.copy(s), c.update()
    }

    function V(a) {}

    function W(a) {
        if (c.enabled !== !1) {
            if (a.preventDefault(), a.button === c.mouseButtons.ORBIT) {
                if (c.enableRotate === !1) return;
                G(a), h = g.ROTATE
            } else if (a.button === c.mouseButtons.ZOOM) {
                if (c.enableZoom === !1) return;
                H(a), h = g.DOLLY
            } else if (a.button === c.mouseButtons.PAN) {
                if (c.enablePan === !1) return;
                I(a), h = g.PAN
            }
            h !== g.NONE && (document.addEventListener("mousemove", X, !1), document.addEventListener("mouseup", Y, !1), c.dispatchEvent(e))
        }
    }

    function X(a) {
        if (c.enabled !== !1)
            if (a.preventDefault(), h === g.ROTATE) {
                if (c.enableRotate === !1) return;
                J(a)
            } else if (h === g.DOLLY) {
                if (c.enableZoom === !1) return;
                K(a)
            } else if (h === g.PAN) {
                if (c.enablePan === !1) return;
                L(a)
            }
    }

    function Y(a) {
        c.enabled !== !1 && (M(a), document.removeEventListener("mousemove", X, !1), document.removeEventListener("mouseup", Y, !1), c.dispatchEvent(f), h = g.NONE)
    }

    function Z(a) {
        c.enabled === !1 || c.enableZoom === !1 || h !== g.NONE && h !== g.ROTATE || (a.preventDefault(), a.stopPropagation(), N(a), c.dispatchEvent(e), c.dispatchEvent(f))
    }

    function $(a) {
        c.enabled !== !1 && c.enableKeys !== !1 && c.enablePan !== !1 && O(a)
    }

    function _(a) {
        if (c.enabled !== !1) {
            switch (a.touches.length) {
                case 1:
                    if (c.enableRotate === !1) return;
                    P(a), h = g.TOUCH_ROTATE;
                    break;
                case 2:
                    if (c.enableZoom === !1) return;
                    Q(a), h = g.TOUCH_DOLLY;
                    break;
                case 3:
                    if (c.enablePan === !1) return;
                    R(a), h = g.TOUCH_PAN;
                    break;
                default:
                    h = g.NONE
            }
            h !== g.NONE && c.dispatchEvent(e)
        }
    }

    function aa(a) {
        if (c.enabled !== !1) switch (a.preventDefault(), a.stopPropagation(), a.touches.length) {
            case 1:
                if (c.enableRotate === !1) return;
                if (h !== g.TOUCH_ROTATE) return;
                S(a);
                break;
            case 2:
                if (c.enableZoom === !1) return;
                if (h !== g.TOUCH_DOLLY) return;
                T(a);
                break;
            case 3:
                if (c.enablePan === !1) return;
                if (h !== g.TOUCH_PAN) return;
                U(a);
                break;
            default:
                h = g.NONE
        }
    }

    function ba(a) {
        c.enabled !== !1 && (V(a), c.dispatchEvent(f), h = g.NONE)
    }

    function ca(a) {
        a.preventDefault()
    }
    this.object = a, this.domElement = void 0 !== b ? b : document, this.enabled = !0, this.target = new THREE.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI / 2, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 10, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        BOTTOM: 40
    }, this.mouseButtons = {
        ORBIT: THREE.MOUSE.LEFT,
        ZOOM: THREE.MOUSE.MIDDLE,
        PAN: THREE.MOUSE.RIGHT
    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
        return j.phi
    }, this.getAzimuthalAngle = function() {
        return j.theta
    }, this.reset = function() {
        c.target.copy(c.target0), c.object.position.copy(c.position0), c.object.zoom = c.zoom0, c.object.updateProjectionMatrix(), c.dispatchEvent(d), c.update(), h = g.NONE
    }, this.update = function() {
        var b = new THREE.Vector3,
            e = (new THREE.Quaternion).setFromUnitVectors(a.up, new THREE.Vector3(0, 1, 0)),
            f = e.clone().inverse(),
            o = new THREE.Vector3,
            p = new THREE.Quaternion;
        return function() {
            var q = c.object.position;
            return b.copy(q).sub(c.target), b.applyQuaternion(e), j.setFromVector3(b), c.autoRotate && h === g.NONE && z(x()), j.theta += k.theta, j.phi += k.phi, j.theta = Math.max(c.minAzimuthAngle, Math.min(c.maxAzimuthAngle, j.theta)), j.phi = Math.max(c.minPolarAngle, Math.min(c.maxPolarAngle, j.phi)), j.makeSafe(), j.radius *= l, j.radius = Math.max(c.minDistance, Math.min(c.maxDistance, j.radius)), c.target.add(m), b.setFromSpherical(j), b.applyQuaternion(f), q.copy(c.target).add(b), c.object.lookAt(c.target), c.enableDamping === !0 ? (k.theta *= 1 - c.dampingFactor, k.phi *= 1 - c.dampingFactor) : k.set(0, 0, 0), l = 1, m.set(0, 0, 0), !!(n || o.distanceToSquared(c.object.position) > i || 8 * (1 - p.dot(c.object.quaternion)) > i) && (c.dispatchEvent(d), o.copy(c.object.position), p.copy(c.object.quaternion), n = !1, !0)
        }
    }(), this.dispose = function() {
        c.domElement.removeEventListener("contextmenu", ca, !1), c.domElement.removeEventListener("mousedown", W, !1), c.domElement.removeEventListener("wheel", Z, !1), c.domElement.removeEventListener("touchstart", _, !1), c.domElement.removeEventListener("touchend", ba, !1), c.domElement.removeEventListener("touchmove", aa, !1), document.removeEventListener("mousemove", X, !1), document.removeEventListener("mouseup", Y, !1), window.removeEventListener("keydown", $, !1)
    };
    var c = this,
        d = {
            type: "change"
        },
        e = {
            type: "start"
        },
        f = {
            type: "end"
        },
        g = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_DOLLY: 4,
            TOUCH_PAN: 5
        },
        h = g.NONE,
        i = 1e-6,
        j = new THREE.Spherical,
        k = new THREE.Spherical,
        l = 1,
        m = new THREE.Vector3,
        n = !1,
        o = new THREE.Vector2,
        p = new THREE.Vector2,
        q = new THREE.Vector2,
        r = new THREE.Vector2,
        s = new THREE.Vector2,
        t = new THREE.Vector2,
        u = new THREE.Vector2,
        v = new THREE.Vector2,
        w = new THREE.Vector2,
        B = function() {
            var a = new THREE.Vector3;
            return function(c, d) {
                a.setFromMatrixColumn(d, 0), a.multiplyScalar(-c), m.add(a)
            }
        }(),
        C = function() {
            var a = new THREE.Vector3;
            return function(c, d) {
                a.setFromMatrixColumn(d, 1), a.multiplyScalar(c), m.add(a)
            }
        }(),
        D = function() {
            var a = new THREE.Vector3;
            return function(d, e) {
                var f = c.domElement === document ? c.domElement.body : c.domElement;
                if (c.object instanceof THREE.PerspectiveCamera) {
                    var g = c.object.position;
                    a.copy(g).sub(c.target);
                    var h = a.length();
                    h *= Math.tan(c.object.fov / 2 * Math.PI / 180), B(2 * d * h / f.clientHeight, c.object.matrix), C(2 * e * h / f.clientHeight, c.object.matrix)
                } else c.object instanceof THREE.OrthographicCamera ? (B(d * (c.object.right - c.object.left) / c.object.zoom / f.clientWidth, c.object.matrix), C(e * (c.object.top - c.object.bottom) / c.object.zoom / f.clientHeight, c.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), c.enablePan = !1)
            }
        }();
    c.domElement.addEventListener("contextmenu", ca, !1), c.domElement.addEventListener("mousedown", W, !1), c.domElement.addEventListener("wheel", Z, !1), c.domElement.addEventListener("touchstart", _, !1), c.domElement.addEventListener("touchend", ba, !1), c.domElement.addEventListener("touchmove", aa, !1), window.addEventListener("keydown", $, !1), this.update()
}, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, Object.defineProperties(THREE.OrbitControls.prototype, {
    center: {
        get: function() {
            return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
        }
    },
    noZoom: {
        get: function() {
            return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
        },
        set: function(a) {
            console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !a
        }
    },
    noRotate: {
        get: function() {
            return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
        },
        set: function(a) {
            console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !a
        }
    },
    noPan: {
        get: function() {
            return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
        },
        set: function(a) {
            console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !a
        }
    },
    noKeys: {
        get: function() {
            return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
        },
        set: function(a) {
            console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !a
        }
    },
    staticMoving: {
        get: function() {
            return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
        },
        set: function(a) {
            console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !a
        }
    },
    dynamicDampingFactor: {
        get: function() {
            return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
        },
        set: function(a) {
            console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = a
        }
    }
});