const _0x3612 = ['intersectObject', 'https://bulanaya@noosphere.com', 'set', 'download', 'addEventListener', 'https://www.facebook.com/tatyana.bulanaya', 'object3D', 'a-marker', 'the\x20end', 'window', '#btns-wrapper', 'log', 'object', 'setAttribute', 'Math', 'createElement', 'pause', 'onload', '#videonew', 'bind', 'clientY', 'bul.vcf', 'action', 'undefined', '#camera', 'removeChild', 'aspect', '#phone', '#vid', 'innerWidth', 'open', '_raycaster', 'model', 'camera', 'a-scene', 'position', 'children', 'marker', 'markerWrapper', '#vidHello', '_updateMousePostion', 'rotation', 'innerHeight', 'opacity', '_cameraMesh', 'Vector2', '_marker', 'addRaycasterCheckListener', 'Raycaster', '_blank', '_raycasterCheck', 'paused', 'scene', 'play', '_window', 'apply', 'setFromCamera', '#animated-model', 'material', '_mouse', 'href', 'click', '#prihodite', 'assets/contact.vcf', 'clientX', 'target', 'querySelector', 'length', '#mail', 'appendChild', '#fb', 'els', 'insertBefore', 'push', '#site', '_camera', 'main', 'parentNode'];
(function(_0x5b181f, _0x3612b0) {
    const _0x5b6470 = function(_0x5a4ea3) { while (--_0x5a4ea3) { _0x5b181f['push'](_0x5b181f['shift']()); } };
    _0x5b6470(++_0x3612b0);
}(_0x3612, 0x1e3));
const _0x5b64 = function(_0x5b181f, _0x3612b0) { _0x5b181f = _0x5b181f - 0x0; let _0x5b6470 = _0x3612[_0x5b181f]; return _0x5b6470; };
console['clear']();
var isStarted = ![];
let calculator = 0x0;

function debounce(_0x905d2a, _0x47753a) {
    let _0x4161ea = null;
    return function() {
        let _0x1b63a6 = this,
            _0x6c6162 = arguments;

        function _0x51f52e() {
            _0x905d2a[_0x5b64('0x28')](_0x1b63a6, _0x6c6162);
            _0x4161ea = null;
        }
        clearTimeout(_0x4161ea);
        _0x4161ea = setTimeout(_0x51f52e, _0x47753a);
    };
}
class RaycasterProxy {
    constructor(_0x187de6, _0x593659, _0x2c76aa) {
        this[_0x5b64('0x1f')] = _0x187de6;
        this[_0x5b64('0x3c')] = _0x593659;
        this[_0x5b64('0x27')] = _0x2c76aa;
        this[_0x5b64('0x1d')] = this[_0x5b64('0x3c')]['object3D'][_0x5b64('0x15')][0x0];
        this[_0x5b64('0x19')] = this[_0x5b64('0x19')][_0x5b64('0x4')](this);
        this[_0x5b64('0x23')] = this[_0x5b64('0x23')]['bind'](this);
        this[_0x5b64('0x10')] = new THREE[(_0x5b64('0x21'))]();
        this['_mouse'] = new THREE[(_0x5b64('0x1e'))]();
    }[_0x5b64('0x23')](_0x5a7e4d, _0x59af8d) {
        this[_0x5b64('0x19')](_0x59af8d);
        this[_0x5b64('0x10')][_0x5b64('0x29')](this[_0x5b64('0x2c')], this[_0x5b64('0x1d')]);
        for (let _0x10d2bc of _0x5a7e4d) { if (_0x10d2bc['el'] === null) console[_0x5b64('0x4a')]('this\x20element\x20is\x20lost\x20:', _0x10d2bc['el']); if (typeof _0x10d2bc['el'] !== 'undefined') { try { let _0x174eff = this['_raycaster'][_0x5b64('0x3f')](_0x10d2bc['el'][_0x5b64('0x45')]['children'][0x0]); if (_0x174eff && _0x174eff[_0x5b64('0x34')]) { if (_0x174eff[0x0][_0x5b64('0x4b')][_0x5b64('0x2b')]['opacity'] === 0x1) _0x10d2bc[_0x5b64('0x7')](); } } catch (_0x31e7be) { console[_0x5b64('0x4a')]('somthg\x20went\x20wrong\x20with\x20this\x20elAction:\x20', _0x10d2bc); throw _0x31e7be; } } else if (typeof _0x10d2bc[_0x5b64('0x38')] !== _0x5b64('0x8')) { for (let _0x1e309f of _0x10d2bc[_0x5b64('0x38')]) { let _0x46115b = this[_0x5b64('0x10')][_0x5b64('0x3f')](_0x1e309f[_0x5b64('0x45')][_0x5b64('0x15')][0x0]); if (_0x46115b && _0x46115b[_0x5b64('0x34')]) { if (_0x46115b[0x0][_0x5b64('0x4b')][_0x5b64('0x2b')][_0x5b64('0x1c')] === 0x1) _0x10d2bc[_0x5b64('0x7')](_0x1e309f); } } } }
    }[_0x5b64('0x20')](_0x53c1d0, _0xbcabe7) {
        const _0x103a29 = debounce(this[_0x5b64('0x23')], 0x384);
        _0x53c1d0[_0x5b64('0x43')]('mousedown', _0x1c4232 => { if (_0x1c4232[_0x5b64('0x32')]['tagName'] === 'CANVAS') _0x103a29(_0xbcabe7, _0x1c4232); }, !![]);
    }[_0x5b64('0x19')](_0x43809a) {
        const _0x3b3df9 = this[_0x5b64('0x27')][_0x5b64('0xe')] / this[_0x5b64('0x27')]['innerHeight'];
        const _0x2f7791 = this[_0x5b64('0x3c')][_0x5b64('0x45')][_0x5b64('0x15')][0x0][_0x5b64('0xb')];
        const _0x18c1ae = { 'x': 0x1, 'y': 0x1 };
        if (_0x3b3df9 < _0x2f7791) _0x18c1ae['x'] = _0x3b3df9 / _0x2f7791;
        else if (_0x3b3df9 > _0x2f7791) _0x18c1ae['y'] = _0x2f7791 / _0x3b3df9;
        this[_0x5b64('0x2c')]['x'] = (_0x43809a[_0x5b64('0x31')] / this[_0x5b64('0x27')][_0x5b64('0xe')] * 0x2 - 0x1) * _0x18c1ae['x'];
        this[_0x5b64('0x2c')]['y'] = (-(_0x43809a[_0x5b64('0x5')] / this[_0x5b64('0x27')][_0x5b64('0x1b')]) * 0x2 + 0x1) * _0x18c1ae['y'];
    }
}
window[_0x5b64('0x2')] = function() {
    const _0x59e553 = [];
    let _0x3e4679 = document[_0x5b64('0x33')](_0x5b64('0x2a'));
    this[_0x5b64('0x11')][_0x5b64('0x1')]();
    console[_0x5b64('0x4a')](_0x5b64('0x48'));

    function _0x373908() {
        var _0x2648e7 = document[_0x5b64('0x0')]('a');
        _0x2648e7[_0x5b64('0x4c')]('href', _0x5b64('0x6'));
        _0x2648e7['setAttribute'](_0x5b64('0x42'), 'download');
        _0x2648e7[_0x5b64('0x4c')]('target', _0x5b64('0x22'));
        _0x2648e7[_0x5b64('0x2e')]();
    }
    _0x59e553[_0x5b64('0x3a')]({ 'el': document[_0x5b64('0x33')](_0x5b64('0xc')), 'action': _0x373908 });

    function _0x11acb1() { window[_0x5b64('0xf')](_0x5b64('0x44'), _0x5b64('0x22')); }
    _0x59e553[_0x5b64('0x3a')]({ 'el': document[_0x5b64('0x33')](_0x5b64('0x37')), 'action': _0x11acb1 });

    function _0x2a59bd() { window['open'](_0x5b64('0x40')); }
    _0x59e553[_0x5b64('0x3a')]({ 'el': document[_0x5b64('0x33')](_0x5b64('0x35')), 'action': _0x2a59bd });

    function _0x176657() { window['open']('https://noosphereengineering.com/'); }
    _0x59e553['push']({ 'el': document['querySelector'](_0x5b64('0x3b')), 'action': _0x176657 });

    function _0x3ed258() { let _0x21820b = document['querySelector']('#videonew'); if (_0x21820b['paused']) { setTimeout(function() { _0x21820b[_0x5b64('0x26')](); }, 0x64); } else if (!_0x21820b['paused']) { _0x21820b['pause'](); } }
    let _0x18f522 = document[_0x5b64('0x33')](_0x5b64('0x3'));
    _0x59e553[_0x5b64('0x3a')]({ 'el': document[_0x5b64('0x33')](_0x5b64('0xd')), 'action': _0x3ed258 });

    function _0x40fa1e() { let _0x35ee62 = document[_0x5b64('0x33')](_0x5b64('0x2f')); if (_0x35ee62[_0x5b64('0x24')]) { setTimeout(function() { _0x35ee62[_0x5b64('0x26')](); }, 0x64); } else if (!_0x35ee62['paused']) { _0x35ee62[_0x5b64('0x1')](); } }
    _0x59e553['push']({ 'el': document[_0x5b64('0x33')](_0x5b64('0x18')), 'action': _0x40fa1e });

    function _0x29293f() { let _0x95958a = document[_0x5b64('0x33')]('#animated-model'); if (_0x18f522[_0x5b64('0x24')]) { setTimeout(function() { _0x95958a[_0x5b64('0x26')](); }, 0x64); } else if (!_0x95958a[_0x5b64('0x24')]) { _0x95958a[_0x5b64('0x1')](); } }
    _0x59e553[_0x5b64('0x3a')]({ 'el': document[_0x5b64('0x33')](_0x5b64('0x2a')), 'action': _0x29293f });
    const _0x246c19 = new RaycasterProxy(document['querySelector']('#main_marker'), document[_0x5b64('0x33')](_0x5b64('0x9')), window);
    _0x246c19[_0x5b64('0x20')](window, _0x59e553);
};

function onVideoTap() { let _0x18e532; if (_0x18e532[_0x5b64('0x24')]) { _0x18e532[_0x5b64('0x26')](); } else if (!_0x18e532[_0x5b64('0x24')]) { _0x18e532['pause'](); } }

function navContactsAction() {
    var _0x2d78ce = document[_0x5b64('0x0')]('a');
    _0x2d78ce['setAttribute'](_0x5b64('0x2d'), _0x5b64('0x30'));
    _0x2d78ce[_0x5b64('0x4c')](_0x5b64('0x42'), 'download');
    _0x2d78ce[_0x5b64('0x4c')](_0x5b64('0x32'), _0x5b64('0x22'));
    _0x2d78ce['click']();
}

function removePos() {
    this[_0x5b64('0x3d')] = document[_0x5b64('0x33')](_0x5b64('0x49'));
    this[_0x5b64('0x16')] = document[_0x5b64('0x33')](_0x5b64('0x46'));
    this[_0x5b64('0x25')] = document[_0x5b64('0x33')]('a-scene');
    this[_0x5b64('0x12')] = document[_0x5b64('0x33')](_0x5b64('0x9'));
    if (this[_0x5b64('0x3d')][_0x5b64('0x3e')] !== this[_0x5b64('0x25')] && this[_0x5b64('0x3d')]['parentNode'] === this[_0x5b64('0x16')]) {
        this[_0x5b64('0x16')][_0x5b64('0xa')](this[_0x5b64('0x3d')]);
        this['main'][_0x5b64('0x45')][_0x5b64('0x14')]['set'](0x0, -0x2, -0xa);
        this[_0x5b64('0x3d')][_0x5b64('0x45')][_0x5b64('0x1a')]['x'] = THREE[_0x5b64('0x4d')]['degToRad'](0x0);
        this[_0x5b64('0x25')][_0x5b64('0x39')](this[_0x5b64('0x3d')], this[_0x5b64('0x17')]);
    }
}

function setNormPos() {
    this[_0x5b64('0x3d')] = document['querySelector'](_0x5b64('0x49'));
    this[_0x5b64('0x16')] = document['querySelector'](_0x5b64('0x46'));
    this[_0x5b64('0x25')] = document[_0x5b64('0x33')](_0x5b64('0x13'));
    this[_0x5b64('0x12')] = document[_0x5b64('0x33')](_0x5b64('0x9'));
    if (this[_0x5b64('0x3d')][_0x5b64('0x3e')] === this[_0x5b64('0x25')] && this[_0x5b64('0x3d')][_0x5b64('0x3e')] !== this[_0x5b64('0x16')]) {
        this[_0x5b64('0x25')]['removeChild'](this[_0x5b64('0x3d')]);
        this[_0x5b64('0x3d')][_0x5b64('0x45')][_0x5b64('0x14')][_0x5b64('0x41')](-0.8, 0x0, 0x0);
        this['main'][_0x5b64('0x45')][_0x5b64('0x1a')]['x'] = THREE[_0x5b64('0x4d')]['degToRad'](-0x5a);
        this[_0x5b64('0x16')][_0x5b64('0x36')](this[_0x5b64('0x3d')]);
    }
}
console[_0x5b64('0x4a')](_0x5b64('0x47'));