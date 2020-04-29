console.clear();
var isStarted = false;
let calculator = 0;

function debounce(func, wait) {
    let timerId = null;
    return function() {
        let context = this,
            args = arguments;

        function latter() {
            func.apply(context, args);
            timerId = null;
        }
        clearTimeout(timerId);
        timerId = setTimeout(latter, wait);
    };
}

class RaycasterProxy {
    constructor(marker, camera, window) {
        this._marker = marker;
        this._camera = camera;
        this._window = window;
        this._cameraMesh = this._camera.object3D.children[0];
        this._updateMousePostion = this._updateMousePostion.bind(this);
        this._raycasterCheck = this._raycasterCheck.bind(this);

        this._raycaster = new THREE.Raycaster();
        this._mouse = new THREE.Vector2();
    }

    _raycasterCheck(elActions, event) {
        this._updateMousePostion(event);
        // update the picking ray with the camera and mouse position
        this._raycaster.setFromCamera(this._mouse, this._cameraMesh);
        // calculate objects intersecting the picking ray
        for (let elAction of elActions) {
            if (elAction.el === null)
                console.log("this element is lost :", elAction.el);
            if (typeof elAction.el !== "undefined") {
                try {
                    let intersect = this._raycaster.intersectObject(
                        elAction.el.object3D.children[0]
                    );
                    if (intersect && intersect.length) {
                        if (intersect[0].object.material.opacity === 1) elAction.action();
                    }
                } catch (e) {
                    console.log("somthg went wrong with this elAction: ", elAction);
                    throw e;
                }
            } else if (typeof elAction.els !== "undefined") {
                for (let el of elAction.els) {
                    let intersect = this._raycaster.intersectObject(
                        el.object3D.children[0]
                    );
                    if (intersect && intersect.length) {
                        if (intersect[0].object.material.opacity === 1) elAction.action(el);
                    }
                }
            }
        }
    }

    addRaycasterCheckListener(target, elActions) {
        const raycasterCheckWithDebounce = debounce(this._raycasterCheck, 900);
        target.addEventListener(
            "mousedown",
            event => {
                // event.preventDefault();
                // если нужны клики не только по картинкам/видео, необходимо изменить это условие
                if (event.target.tagName === "CANVAS")
                    raycasterCheckWithDebounce(elActions, event);
            },
            true
        );
    }

    _updateMousePostion(event) {
        const windowRatio = this._window.innerWidth / this._window.innerHeight;
        const cameraAspect = this._camera.object3D.children[0].aspect;

        const delta = { x: 1, y: 1 };
        if (windowRatio < cameraAspect) delta.x = windowRatio / cameraAspect;
        else if (windowRatio > cameraAspect) delta.y = cameraAspect / windowRatio;

        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        this._mouse.x =
            ((event.clientX / this._window.innerWidth) * 2 - 1) * delta.x;
        this._mouse.y =
            (-(event.clientY / this._window.innerHeight) * 2 + 1) * delta.y;
    }
}

window.onload = function() {
        const elActions = [];



        console.log('window')



        function navContactsAction() {
            var link = document.createElement("a");
            link.setAttribute(
                "href",
                'bul.vcf'
            );
            link.setAttribute("download", "download");
            link.setAttribute("target", "_blank");
            link.click();
        }

        elActions.push({
            el: document.querySelector("#phone"),
            action: navContactsAction
        });

        function navFB() {
            window.open("https://www.facebook.com/tatyana.bulanaya", "_blank");
        }
        elActions.push({
            el: document.querySelector("#fb"),
            action: navFB
        });


        function navMail() {
            window.open("https://bulanaya@noosphere.com");
        }
        elActions.push({
            el: document.querySelector("#mail"),
            action: navMail
        });


        function navSite() {
            window.open("https://noosphereengineering.com/");
        }
        elActions.push({
            el: document.querySelector("#site"),
            action: navSite
        });


        //video ofice
        function onVideoTap() {
            let video = document.querySelector("#videonew")
            if (video.paused) {
                // document.querySelector('#vid').emit('fade');
                setTimeout(function() {
                    // document.querySelector("#main-wrapper").setAttribute('scale', { x: 0, y: 0, z: 0 });
                    video.play()

                }, 1500);

            } else if (!video.paused) {
                // document.querySelector('#vid').emit('return');
                // document.querySelector("#main-wrapper").setAttribute('scale', { x: 1, y: 1, z: 1 });
                video.pause()
            }
        }


        let video = document.querySelector("#videonew")
        elActions.push({
            el: document.querySelector("#vid"),
            action: onVideoTap
        })

        //video hello
        function onVideoHelloTap() {
            let video = document.querySelector("#prihodite")
            if (video.paused) {
                // document.querySelector('#vid').emit('fade');
                setTimeout(function() {
                    // document.querySelector("#main-wrapper").setAttribute('scale', { x: 0, y: 0, z: 0 });
                    video.play()

                }, 1500);

            } else if (!video.paused) {
                // document.querySelector('#vid').emit('return');
                // document.querySelector("#main-wrapper").setAttribute('scale', { x: 1, y: 1, z: 1 });
                video.pause()
            }
        }


        // let video = document.querySelector("#prihodite")
        elActions.push({
            el: document.querySelector("#vidHello"),
            action: onVideoHelloTap
        })



        const raycasterProxy = new RaycasterProxy(
            document.querySelector("#main_marker"),
            document.querySelector("#camera"),
            window
        );
        raycasterProxy.addRaycasterCheckListener(window, elActions);
    }
    // ////////////////////////////////////////// video

function onVideoTap() {
    let video
    if (video.paused) {
        video.play()
    } else if (!video.paused) {
        video.pause()
    }
}







function navContactsAction() {
    var link = document.createElement("a");
    link.setAttribute(
        "href",
        'assets/contact.vcf'
    );
    link.setAttribute("download", "download");
    link.setAttribute("target", "_blank");
    link.click();
}






function removePos() {
    this.main = document.querySelector("#btns-wrapper");
    this.marker = document.querySelector("a-marker");
    this.scene = document.querySelector("a-scene");
    this.camera = document.querySelector("#camera");
    //     // this.markerWrapper = document.querySelector("#marker-wrapper");
    if (
        this.main.parentNode !== this.scene &&
        this.main.parentNode === this.marker
    ) {
        this.marker.removeChild(this.main);
        this.main.object3D.position.set(0, -2, -10);
        // this.main.object3D.scale.set(1, 1, 1);
        this.main.object3D.rotation.x = THREE.Math.degToRad(0);
        this.scene.insertBefore(this.main, this.markerWrapper);
    }
}

function setNormPos() {
    this.main = document.querySelector("#btns-wrapper");
    this.marker = document.querySelector("a-marker");
    this.scene = document.querySelector("a-scene");
    this.camera = document.querySelector("#camera");
    if (
        this.main.parentNode === this.scene &&
        this.main.parentNode !== this.marker
    ) {
        this.scene.removeChild(this.main);
        this.main.object3D.position.set(-0.8, 0, 0);
        // this.main.object3D.scale.set(0.75, 0.75, 0.75);
        this.main.object3D.rotation.x = THREE.Math.degToRad(-90);
        this.marker.appendChild(this.main);
    }
}

console.log('the end')