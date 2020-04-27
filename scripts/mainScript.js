console.clear();

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
        const raycasterCheckWithDebounce = debounce(this._raycasterCheck, 300);
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

    // function navPhoneAction() {
    //     var number = "+79169466834";
    //     window.open(`tel:${number}`);
    // }
    function sayHello() {
        alert("hello mthfucker!")
    }
    elActions.push({
        el: document.querySelector("#phone"),
        action: sayHello
    });


    const raycasterProxy = new RaycasterProxy(
        document.querySelector("#main_marker"),
        document.querySelector("#camera"),
        window
    );
    raycasterProxy.addRaycasterCheckListener(window, elActions);
}