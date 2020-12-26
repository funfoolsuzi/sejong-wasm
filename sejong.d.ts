/* tslint:disable */
/* eslint-disable */
/**
* This is a simple wrapper for [`Buffer::put`]. 
* When used as a WASM module, this lib instantiate a global
* [`Buffer`] and this method is using the global instance.
* @param {string} c
* @returns {string | undefined}
*/
export function put(c: string): string | undefined;
/**
* This is a simple wrapper for [`Buffer::pop`]. 
* When used as a WASM module, this lib instantiate a global
* [`Buffer`] and this method is using the global instance.
* @returns {string | undefined}
*/
export function pop(): string | undefined;
/**
* This is a simple wrapper for [`Buffer::out`]. 
* When used as a WASM module, this lib instantiate a global
* [`Buffer`] and this method is using the global instance.
* @returns {string}
*/
export function out(): string;
