import * as wasm from './sejong_bg.wasm';

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* This is a simple wrapper for [`Buffer::put`].
* When used as a WASM module, this lib instantiate a global
* [`Buffer`] and this method is using the global instance.
* @param {string} c
* @returns {string | undefined}
*/
export function put(c) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        wasm.put(retptr, c.codePointAt(0));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        let v0;
        if (r0 !== 0) {
            v0 = getStringFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
        }
        return v0;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* This is a simple wrapper for [`Buffer::pop`].
* When used as a WASM module, this lib instantiate a global
* [`Buffer`] and this method is using the global instance.
* @returns {string | undefined}
*/
export function pop() {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        wasm.pop(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        let v0;
        if (r0 !== 0) {
            v0 = getStringFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
        }
        return v0;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* This is a simple wrapper for [`Buffer::out`].
* When used as a WASM module, this lib instantiate a global
* [`Buffer`] and this method is using the global instance.
* @returns {string}
*/
export function out() {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        wasm.out(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_export_0.value += 16;
        wasm.__wbindgen_free(r0, r1);
    }
}

