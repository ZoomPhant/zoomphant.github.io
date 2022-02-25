/* tslint:disable */
/* eslint-disable */
/**
* @param {string} text
* @param {boolean} hmm
* @returns {any[]}
*/
export function cut(text: string, hmm: boolean): any[];
/**
* @param {string} text
* @returns {any[]}
*/
export function cut_all(text: string): any[];
/**
* @param {string} text
* @param {boolean} hmm
* @returns {any[]}
*/
export function cut_for_search(text: string, hmm: boolean): any[];
/**
* @param {string} text
* @param {string} mode
* @param {boolean} hmm
* @returns {any[]}
*/
export function tokenize(text: string, mode: string, hmm: boolean): any[];
/**
* @param {string} word
* @param {number | undefined} freq
* @param {string | undefined} tag
* @returns {number}
*/
export function add_word(word: string, freq?: number, tag?: string): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly cut: (a: number, b: number, c: number, d: number) => void;
  readonly cut_all: (a: number, b: number, c: number) => void;
  readonly cut_for_search: (a: number, b: number, c: number, d: number) => void;
  readonly tokenize: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly add_word: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
