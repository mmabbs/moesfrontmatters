import { createRequire } from 'module';
import path from 'path';
import fs2 from 'fs/promises';
import { styleText } from 'util';
import sharp from 'sharp';

const require$1 = createRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x3) => typeof require$1 !== "undefined" ? require$1 : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a2, b2) => (typeof require$1 !== "undefined" ? require$1 : a2)[b2]
}) : x3)(function(x3) {
  if (typeof require$1 !== "undefined") return require$1.apply(this, arguments);
  throw Error('Dynamic require of "' + x3 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/escape-html/index.js
var require_escape_html = __commonJS({
  "node_modules/escape-html/index.js"(exports2, module) {
    var matchHtmlRegExp = /["'&<>]/;
    module.exports = escapeHtml;
    function escapeHtml(string) {
      var str = "" + string;
      var match = matchHtmlRegExp.exec(str);
      if (!match) {
        return str;
      }
      var escape;
      var html = "";
      var index = 0;
      var lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escape = "&quot;";
            break;
          case 38:
            escape = "&amp;";
            break;
          case 39:
            escape = "&#39;";
            break;
          case 60:
            escape = "&lt;";
            break;
          case 62:
            escape = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
  }
});

// node_modules/tiny-inflate/index.js
var require_tiny_inflate = __commonJS({
  "node_modules/tiny-inflate/index.js"(exports2, module) {
    var TINF_OK = 0;
    var TINF_DATA_ERROR = -3;
    function Tree() {
      this.table = new Uint16Array(16);
      this.trans = new Uint16Array(288);
    }
    function Data(source, dest) {
      this.source = source;
      this.sourceIndex = 0;
      this.tag = 0;
      this.bitcount = 0;
      this.dest = dest;
      this.destLen = 0;
      this.ltree = new Tree();
      this.dtree = new Tree();
    }
    var sltree = new Tree();
    var sdtree = new Tree();
    var length_bits = new Uint8Array(30);
    var length_base = new Uint16Array(30);
    var dist_bits = new Uint8Array(30);
    var dist_base = new Uint16Array(30);
    var clcidx = new Uint8Array([
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ]);
    var code_tree = new Tree();
    var lengths = new Uint8Array(288 + 32);
    function tinf_build_bits_base(bits3, base, delta, first) {
      var i2, sum;
      for (i2 = 0; i2 < delta; ++i2) bits3[i2] = 0;
      for (i2 = 0; i2 < 30 - delta; ++i2) bits3[i2 + delta] = i2 / delta | 0;
      for (sum = first, i2 = 0; i2 < 30; ++i2) {
        base[i2] = sum;
        sum += 1 << bits3[i2];
      }
    }
    function tinf_build_fixed_trees(lt, dt) {
      var i2;
      for (i2 = 0; i2 < 7; ++i2) lt.table[i2] = 0;
      lt.table[7] = 24;
      lt.table[8] = 152;
      lt.table[9] = 112;
      for (i2 = 0; i2 < 24; ++i2) lt.trans[i2] = 256 + i2;
      for (i2 = 0; i2 < 144; ++i2) lt.trans[24 + i2] = i2;
      for (i2 = 0; i2 < 8; ++i2) lt.trans[24 + 144 + i2] = 280 + i2;
      for (i2 = 0; i2 < 112; ++i2) lt.trans[24 + 144 + 8 + i2] = 144 + i2;
      for (i2 = 0; i2 < 5; ++i2) dt.table[i2] = 0;
      dt.table[5] = 32;
      for (i2 = 0; i2 < 32; ++i2) dt.trans[i2] = i2;
    }
    var offs = new Uint16Array(16);
    function tinf_build_tree(t2, lengths2, off, num) {
      var i2, sum;
      for (i2 = 0; i2 < 16; ++i2) t2.table[i2] = 0;
      for (i2 = 0; i2 < num; ++i2) t2.table[lengths2[off + i2]]++;
      t2.table[0] = 0;
      for (sum = 0, i2 = 0; i2 < 16; ++i2) {
        offs[i2] = sum;
        sum += t2.table[i2];
      }
      for (i2 = 0; i2 < num; ++i2) {
        if (lengths2[off + i2]) t2.trans[offs[lengths2[off + i2]]++] = i2;
      }
    }
    function tinf_getbit(d3) {
      if (!d3.bitcount--) {
        d3.tag = d3.source[d3.sourceIndex++];
        d3.bitcount = 7;
      }
      var bit = d3.tag & 1;
      d3.tag >>>= 1;
      return bit;
    }
    function tinf_read_bits(d3, num, base) {
      if (!num)
        return base;
      while (d3.bitcount < 24) {
        d3.tag |= d3.source[d3.sourceIndex++] << d3.bitcount;
        d3.bitcount += 8;
      }
      var val = d3.tag & 65535 >>> 16 - num;
      d3.tag >>>= num;
      d3.bitcount -= num;
      return val + base;
    }
    function tinf_decode_symbol(d3, t2) {
      while (d3.bitcount < 24) {
        d3.tag |= d3.source[d3.sourceIndex++] << d3.bitcount;
        d3.bitcount += 8;
      }
      var sum = 0, cur = 0, len = 0;
      var tag = d3.tag;
      do {
        cur = 2 * cur + (tag & 1);
        tag >>>= 1;
        ++len;
        sum += t2.table[len];
        cur -= t2.table[len];
      } while (cur >= 0);
      d3.tag = tag;
      d3.bitcount -= len;
      return t2.trans[sum + cur];
    }
    function tinf_decode_trees(d3, lt, dt) {
      var hlit, hdist, hclen;
      var i2, num, length;
      hlit = tinf_read_bits(d3, 5, 257);
      hdist = tinf_read_bits(d3, 5, 1);
      hclen = tinf_read_bits(d3, 4, 4);
      for (i2 = 0; i2 < 19; ++i2) lengths[i2] = 0;
      for (i2 = 0; i2 < hclen; ++i2) {
        var clen = tinf_read_bits(d3, 3, 0);
        lengths[clcidx[i2]] = clen;
      }
      tinf_build_tree(code_tree, lengths, 0, 19);
      for (num = 0; num < hlit + hdist; ) {
        var sym = tinf_decode_symbol(d3, code_tree);
        switch (sym) {
          case 16:
            var prev = lengths[num - 1];
            for (length = tinf_read_bits(d3, 2, 3); length; --length) {
              lengths[num++] = prev;
            }
            break;
          case 17:
            for (length = tinf_read_bits(d3, 3, 3); length; --length) {
              lengths[num++] = 0;
            }
            break;
          case 18:
            for (length = tinf_read_bits(d3, 7, 11); length; --length) {
              lengths[num++] = 0;
            }
            break;
          default:
            lengths[num++] = sym;
            break;
        }
      }
      tinf_build_tree(lt, lengths, 0, hlit);
      tinf_build_tree(dt, lengths, hlit, hdist);
    }
    function tinf_inflate_block_data(d3, lt, dt) {
      while (1) {
        var sym = tinf_decode_symbol(d3, lt);
        if (sym === 256) {
          return TINF_OK;
        }
        if (sym < 256) {
          d3.dest[d3.destLen++] = sym;
        } else {
          var length, dist, offs2;
          var i2;
          sym -= 257;
          length = tinf_read_bits(d3, length_bits[sym], length_base[sym]);
          dist = tinf_decode_symbol(d3, dt);
          offs2 = d3.destLen - tinf_read_bits(d3, dist_bits[dist], dist_base[dist]);
          for (i2 = offs2; i2 < offs2 + length; ++i2) {
            d3.dest[d3.destLen++] = d3.dest[i2];
          }
        }
      }
    }
    function tinf_inflate_uncompressed_block(d3) {
      var length, invlength;
      var i2;
      while (d3.bitcount > 8) {
        d3.sourceIndex--;
        d3.bitcount -= 8;
      }
      length = d3.source[d3.sourceIndex + 1];
      length = 256 * length + d3.source[d3.sourceIndex];
      invlength = d3.source[d3.sourceIndex + 3];
      invlength = 256 * invlength + d3.source[d3.sourceIndex + 2];
      if (length !== (~invlength & 65535))
        return TINF_DATA_ERROR;
      d3.sourceIndex += 4;
      for (i2 = length; i2; --i2)
        d3.dest[d3.destLen++] = d3.source[d3.sourceIndex++];
      d3.bitcount = 0;
      return TINF_OK;
    }
    function tinf_uncompress(source, dest) {
      var d3 = new Data(source, dest);
      var bfinal, btype, res;
      do {
        bfinal = tinf_getbit(d3);
        btype = tinf_read_bits(d3, 2, 0);
        switch (btype) {
          case 0:
            res = tinf_inflate_uncompressed_block(d3);
            break;
          case 1:
            res = tinf_inflate_block_data(d3, sltree, sdtree);
            break;
          case 2:
            tinf_decode_trees(d3, d3.ltree, d3.dtree);
            res = tinf_inflate_block_data(d3, d3.ltree, d3.dtree);
            break;
          default:
            res = TINF_DATA_ERROR;
        }
        if (res !== TINF_OK)
          throw new Error("Data error");
      } while (!bfinal);
      if (d3.destLen < d3.dest.length) {
        if (typeof d3.dest.slice === "function")
          return d3.dest.slice(0, d3.destLen);
        else
          return d3.dest.subarray(0, d3.destLen);
      }
      return d3.dest;
    }
    tinf_build_fixed_trees(sltree, sdtree);
    tinf_build_bits_base(length_bits, length_base, 4, 3);
    tinf_build_bits_base(dist_bits, dist_base, 2, 1);
    length_bits[28] = 0;
    length_base[28] = 258;
    module.exports = tinf_uncompress;
  }
});

// node_modules/unicode-trie/swap.js
var require_swap = __commonJS({
  "node_modules/unicode-trie/swap.js"(exports2, module) {
    var isBigEndian = new Uint8Array(new Uint32Array([305419896]).buffer)[0] === 18;
    var swap = (b2, n2, m3) => {
      let i2 = b2[n2];
      b2[n2] = b2[m3];
      b2[m3] = i2;
    };
    var swap32 = (array) => {
      const len = array.length;
      for (let i2 = 0; i2 < len; i2 += 4) {
        swap(array, i2, i2 + 3);
        swap(array, i2 + 1, i2 + 2);
      }
    };
    var swap32LE = (array) => {
      if (isBigEndian) {
        swap32(array);
      }
    };
    module.exports = {
      swap32LE
    };
  }
});

// node_modules/unicode-trie/index.js
var require_unicode_trie = __commonJS({
  "node_modules/unicode-trie/index.js"(exports2, module) {
    var inflate = require_tiny_inflate();
    var { swap32LE } = require_swap();
    var SHIFT_1 = 6 + 5;
    var SHIFT_2 = 5;
    var SHIFT_1_2 = SHIFT_1 - SHIFT_2;
    var OMITTED_BMP_INDEX_1_LENGTH = 65536 >> SHIFT_1;
    var INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;
    var INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;
    var INDEX_SHIFT = 2;
    var DATA_BLOCK_LENGTH = 1 << SHIFT_2;
    var DATA_MASK = DATA_BLOCK_LENGTH - 1;
    var LSCP_INDEX_2_OFFSET = 65536 >> SHIFT_2;
    var LSCP_INDEX_2_LENGTH = 1024 >> SHIFT_2;
    var INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;
    var UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;
    var UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
    var INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;
    var DATA_GRANULARITY = 1 << INDEX_SHIFT;
    var UnicodeTrie = class {
      constructor(data) {
        const isBuffer = typeof data.readUInt32BE === "function" && typeof data.slice === "function";
        if (isBuffer || data instanceof Uint8Array) {
          let uncompressedLength;
          if (isBuffer) {
            this.highStart = data.readUInt32LE(0);
            this.errorValue = data.readUInt32LE(4);
            uncompressedLength = data.readUInt32LE(8);
            data = data.slice(12);
          } else {
            const view = new DataView(data.buffer);
            this.highStart = view.getUint32(0, true);
            this.errorValue = view.getUint32(4, true);
            uncompressedLength = view.getUint32(8, true);
            data = data.subarray(12);
          }
          data = inflate(data, new Uint8Array(uncompressedLength));
          data = inflate(data, new Uint8Array(uncompressedLength));
          swap32LE(data);
          this.data = new Uint32Array(data.buffer);
        } else {
          ({ data: this.data, highStart: this.highStart, errorValue: this.errorValue } = data);
        }
      }
      get(codePoint) {
        let index;
        if (codePoint < 0 || codePoint > 1114111) {
          return this.errorValue;
        }
        if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
          index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
          return this.data[index];
        }
        if (codePoint <= 65535) {
          index = (this.data[LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
          return this.data[index];
        }
        if (codePoint < this.highStart) {
          index = this.data[INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> SHIFT_1)];
          index = this.data[index + (codePoint >> SHIFT_2 & INDEX_2_MASK)];
          index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
          return this.data[index];
        }
        return this.data[this.data.length - DATA_GRANULARITY];
      }
    };
    module.exports = UnicodeTrie;
  }
});

// node_modules/base64-js/lib/b64.js
var require_b64 = __commonJS({
  "node_modules/base64-js/lib/b64.js"(exports2) {
    var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    (function(exports3) {
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var PLUS = "+".charCodeAt(0);
      var SLASH = "/".charCodeAt(0);
      var NUMBER = "0".charCodeAt(0);
      var LOWER = "a".charCodeAt(0);
      var UPPER = "A".charCodeAt(0);
      var PLUS_URL_SAFE = "-".charCodeAt(0);
      var SLASH_URL_SAFE = "_".charCodeAt(0);
      function decode2(elt) {
        var code = elt.charCodeAt(0);
        if (code === PLUS || code === PLUS_URL_SAFE)
          return 62;
        if (code === SLASH || code === SLASH_URL_SAFE)
          return 63;
        if (code < NUMBER)
          return -1;
        if (code < NUMBER + 10)
          return code - NUMBER + 26 + 26;
        if (code < UPPER + 26)
          return code - UPPER;
        if (code < LOWER + 26)
          return code - LOWER + 26;
      }
      function b64ToByteArray(b64) {
        var i2, j2, l3, tmp, placeHolders, arr;
        if (b64.length % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var len = b64.length;
        placeHolders = "=" === b64.charAt(len - 2) ? 2 : "=" === b64.charAt(len - 1) ? 1 : 0;
        arr = new Arr(b64.length * 3 / 4 - placeHolders);
        l3 = placeHolders > 0 ? b64.length - 4 : b64.length;
        var L2 = 0;
        function push(v4) {
          arr[L2++] = v4;
        }
        for (i2 = 0, j2 = 0; i2 < l3; i2 += 4, j2 += 3) {
          tmp = decode2(b64.charAt(i2)) << 18 | decode2(b64.charAt(i2 + 1)) << 12 | decode2(b64.charAt(i2 + 2)) << 6 | decode2(b64.charAt(i2 + 3));
          push((tmp & 16711680) >> 16);
          push((tmp & 65280) >> 8);
          push(tmp & 255);
        }
        if (placeHolders === 2) {
          tmp = decode2(b64.charAt(i2)) << 2 | decode2(b64.charAt(i2 + 1)) >> 4;
          push(tmp & 255);
        } else if (placeHolders === 1) {
          tmp = decode2(b64.charAt(i2)) << 10 | decode2(b64.charAt(i2 + 1)) << 4 | decode2(b64.charAt(i2 + 2)) >> 2;
          push(tmp >> 8 & 255);
          push(tmp & 255);
        }
        return arr;
      }
      function uint8ToBase64(uint8) {
        var i2, extraBytes = uint8.length % 3, output = "", temp, length;
        function encode(num) {
          return lookup.charAt(num);
        }
        function tripletToBase64(num) {
          return encode(num >> 18 & 63) + encode(num >> 12 & 63) + encode(num >> 6 & 63) + encode(num & 63);
        }
        for (i2 = 0, length = uint8.length - extraBytes; i2 < length; i2 += 3) {
          temp = (uint8[i2] << 16) + (uint8[i2 + 1] << 8) + uint8[i2 + 2];
          output += tripletToBase64(temp);
        }
        switch (extraBytes) {
          case 1:
            temp = uint8[uint8.length - 1];
            output += encode(temp >> 2);
            output += encode(temp << 4 & 63);
            output += "==";
            break;
          case 2:
            temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
            output += encode(temp >> 10);
            output += encode(temp >> 4 & 63);
            output += encode(temp << 2 & 63);
            output += "=";
            break;
        }
        return output;
      }
      exports3.toByteArray = b64ToByteArray;
      exports3.fromByteArray = uint8ToBase64;
    })(typeof exports2 === "undefined" ? exports2.base64js = {} : exports2);
  }
});

// node_modules/postcss-value-parser/lib/parse.js
var require_parse = __commonJS({
  "node_modules/postcss-value-parser/lib/parse.js"(exports2, module) {
    var openParentheses = "(".charCodeAt(0);
    var closeParentheses = ")".charCodeAt(0);
    var singleQuote = "'".charCodeAt(0);
    var doubleQuote = '"'.charCodeAt(0);
    var backslash = "\\".charCodeAt(0);
    var slash = "/".charCodeAt(0);
    var comma = ",".charCodeAt(0);
    var colon = ":".charCodeAt(0);
    var star = "*".charCodeAt(0);
    var uLower = "u".charCodeAt(0);
    var uUpper = "U".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var isUnicodeRange = /^[a-f0-9?-]+$/i;
    module.exports = function(input) {
      var tokens = [];
      var value = input;
      var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
      var pos = 0;
      var code = value.charCodeAt(pos);
      var max3 = value.length;
      var stack = [{ nodes: tokens }];
      var balanced = 0;
      var parent;
      var name = "";
      var before = "";
      var after = "";
      while (pos < max3) {
        if (code <= 32) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          token = value.slice(pos, next);
          prev = tokens[tokens.length - 1];
          if (code === closeParentheses && balanced) {
            after = token;
          } else if (prev && prev.type === "div") {
            prev.after = token;
            prev.sourceEndIndex += token.length;
          } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) {
            before = token;
          } else {
            tokens.push({
              type: "space",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        } else if (code === singleQuote || code === doubleQuote) {
          next = pos;
          quote = code === singleQuote ? "'" : '"';
          token = {
            type: "string",
            sourceIndex: pos,
            quote
          };
          do {
            escape = false;
            next = value.indexOf(quote, next + 1);
            if (~next) {
              escapePos = next;
              while (value.charCodeAt(escapePos - 1) === backslash) {
                escapePos -= 1;
                escape = !escape;
              }
            } else {
              value += quote;
              next = value.length - 1;
              token.unclosed = true;
            }
          } while (escape);
          token.value = value.slice(pos + 1, next);
          token.sourceEndIndex = token.unclosed ? next : next + 1;
          tokens.push(token);
          pos = next + 1;
          code = value.charCodeAt(pos);
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
          next = value.indexOf("*/", pos);
          token = {
            type: "comment",
            sourceIndex: pos,
            sourceEndIndex: next + 2
          };
          if (next === -1) {
            token.unclosed = true;
            next = value.length;
            token.sourceEndIndex = next;
          }
          token.value = value.slice(pos + 2, next);
          tokens.push(token);
          pos = next + 2;
          code = value.charCodeAt(pos);
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
          token = value[pos];
          tokens.push({
            type: "word",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token
          });
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (code === slash || code === comma || code === colon) {
          token = value[pos];
          tokens.push({
            type: "div",
            sourceIndex: pos - before.length,
            sourceEndIndex: pos + token.length,
            value: token,
            before,
            after: ""
          });
          before = "";
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (openParentheses === code) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          parenthesesOpenPos = pos;
          token = {
            type: "function",
            sourceIndex: pos - name.length,
            value: name,
            before: value.slice(parenthesesOpenPos + 1, next)
          };
          pos = next;
          if (name === "url" && code !== singleQuote && code !== doubleQuote) {
            next -= 1;
            do {
              escape = false;
              next = value.indexOf(")", next + 1);
              if (~next) {
                escapePos = next;
                while (value.charCodeAt(escapePos - 1) === backslash) {
                  escapePos -= 1;
                  escape = !escape;
                }
              } else {
                value += ")";
                next = value.length - 1;
                token.unclosed = true;
              }
            } while (escape);
            whitespacePos = next;
            do {
              whitespacePos -= 1;
              code = value.charCodeAt(whitespacePos);
            } while (code <= 32);
            if (parenthesesOpenPos < whitespacePos) {
              if (pos !== whitespacePos + 1) {
                token.nodes = [
                  {
                    type: "word",
                    sourceIndex: pos,
                    sourceEndIndex: whitespacePos + 1,
                    value: value.slice(pos, whitespacePos + 1)
                  }
                ];
              } else {
                token.nodes = [];
              }
              if (token.unclosed && whitespacePos + 1 !== next) {
                token.after = "";
                token.nodes.push({
                  type: "space",
                  sourceIndex: whitespacePos + 1,
                  sourceEndIndex: next,
                  value: value.slice(whitespacePos + 1, next)
                });
              } else {
                token.after = value.slice(whitespacePos + 1, next);
                token.sourceEndIndex = next;
              }
            } else {
              token.after = "";
              token.nodes = [];
            }
            pos = next + 1;
            token.sourceEndIndex = token.unclosed ? next : pos;
            code = value.charCodeAt(pos);
            tokens.push(token);
          } else {
            balanced += 1;
            token.after = "";
            token.sourceEndIndex = pos + 1;
            tokens.push(token);
            stack.push(token);
            tokens = token.nodes = [];
            parent = token;
          }
          name = "";
        } else if (closeParentheses === code && balanced) {
          pos += 1;
          code = value.charCodeAt(pos);
          parent.after = after;
          parent.sourceEndIndex += after.length;
          after = "";
          balanced -= 1;
          stack[stack.length - 1].sourceEndIndex = pos;
          stack.pop();
          parent = stack[balanced];
          tokens = parent.nodes;
        } else {
          next = pos;
          do {
            if (code === backslash) {
              next += 1;
            }
            next += 1;
            code = value.charCodeAt(next);
          } while (next < max3 && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
          token = value.slice(pos, next);
          if (openParentheses === code) {
            name = token;
          } else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) {
            tokens.push({
              type: "unicode-range",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          } else {
            tokens.push({
              type: "word",
              sourceIndex: pos,
              sourceEndIndex: next,
              value: token
            });
          }
          pos = next;
        }
      }
      for (pos = stack.length - 1; pos; pos -= 1) {
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
      }
      return stack[0].nodes;
    };
  }
});

// node_modules/postcss-value-parser/lib/walk.js
var require_walk = __commonJS({
  "node_modules/postcss-value-parser/lib/walk.js"(exports2, module) {
    module.exports = function walk(nodes, cb, bubble) {
      var i2, max3, node, result;
      for (i2 = 0, max3 = nodes.length; i2 < max3; i2 += 1) {
        node = nodes[i2];
        if (!bubble) {
          result = cb(node, i2, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
          walk(node.nodes, cb, bubble);
        }
        if (bubble) {
          cb(node, i2, nodes);
        }
      }
    };
  }
});

// node_modules/postcss-value-parser/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/postcss-value-parser/lib/stringify.js"(exports2, module) {
    function stringifyNode(node, custom) {
      var type = node.type;
      var value = node.value;
      var buf;
      var customResult;
      if (custom && (customResult = custom(node)) !== void 0) {
        return customResult;
      } else if (type === "word" || type === "space") {
        return value;
      } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
      } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
      } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
      } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") {
          return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
      }
      return value;
    }
    function stringify(nodes, custom) {
      var result, i2;
      if (Array.isArray(nodes)) {
        result = "";
        for (i2 = nodes.length - 1; ~i2; i2 -= 1) {
          result = stringifyNode(nodes[i2], custom) + result;
        }
        return result;
      }
      return stringifyNode(nodes, custom);
    }
    module.exports = stringify;
  }
});

// node_modules/postcss-value-parser/lib/unit.js
var require_unit = __commonJS({
  "node_modules/postcss-value-parser/lib/unit.js"(exports2, module) {
    var minus = "-".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var dot = ".".charCodeAt(0);
    var exp = "e".charCodeAt(0);
    var EXP = "E".charCodeAt(0);
    function likeNumber(value) {
      var code = value.charCodeAt(0);
      var nextCode;
      if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) {
          return true;
        }
        return false;
      }
      if (code >= 48 && code <= 57) {
        return true;
      }
      return false;
    }
    module.exports = function(value) {
      var pos = 0;
      var length = value.length;
      var code;
      var nextCode;
      var nextNextCode;
      if (length === 0 || !likeNumber(value)) {
        return false;
      }
      code = value.charCodeAt(pos);
      if (code === plus || code === minus) {
        pos++;
      }
      while (pos < length) {
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) {
          break;
        }
        pos += 1;
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      code = value.charCodeAt(pos);
      nextCode = value.charCodeAt(pos + 1);
      nextNextCode = value.charCodeAt(pos + 2);
      if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while (pos < length) {
          code = value.charCodeAt(pos);
          if (code < 48 || code > 57) {
            break;
          }
          pos += 1;
        }
      }
      return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
      };
    };
  }
});

// node_modules/postcss-value-parser/lib/index.js
var require_lib = __commonJS({
  "node_modules/postcss-value-parser/lib/index.js"(exports2, module) {
    var parse2 = require_parse();
    var walk = require_walk();
    var stringify = require_stringify();
    function ValueParser(value) {
      if (this instanceof ValueParser) {
        this.nodes = parse2(value);
        return this;
      }
      return new ValueParser(value);
    }
    ValueParser.prototype.toString = function() {
      return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
    };
    ValueParser.prototype.walk = function(cb, bubble) {
      walk(this.nodes, cb, bubble);
      return this;
    };
    ValueParser.unit = require_unit();
    ValueParser.walk = walk;
    ValueParser.stringify = stringify;
    module.exports = ValueParser;
  }
});

// node_modules/camelize/index.js
var require_camelize = __commonJS({
  "node_modules/camelize/index.js"(exports2, module) {
    module.exports = function(obj) {
      if (typeof obj === "string") {
        return camelCase(obj);
      }
      return walk(obj);
    };
    function walk(obj) {
      if (!obj || typeof obj !== "object") {
        return obj;
      }
      if (isDate(obj) || isRegex(obj)) {
        return obj;
      }
      if (isArray(obj)) {
        return map(obj, walk);
      }
      return reduce(objectKeys(obj), function(acc, key) {
        var camel = camelCase(key);
        acc[camel] = walk(obj[key]);
        return acc;
      }, {});
    }
    function camelCase(str) {
      return str.replace(/[_.-](\w|$)/g, function(_3, x3) {
        return x3.toUpperCase();
      });
    }
    var isArray = Array.isArray || function(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var isDate = function(obj) {
      return Object.prototype.toString.call(obj) === "[object Date]";
    };
    var isRegex = function(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var has = Object.prototype.hasOwnProperty;
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj) {
        if (has.call(obj, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    function map(xs2, f3) {
      if (xs2.map) {
        return xs2.map(f3);
      }
      var res = [];
      for (var i2 = 0; i2 < xs2.length; i2++) {
        res.push(f3(xs2[i2], i2));
      }
      return res;
    }
    function reduce(xs2, f3, acc) {
      if (xs2.reduce) {
        return xs2.reduce(f3, acc);
      }
      for (var i2 = 0; i2 < xs2.length; i2++) {
        acc = f3(acc, xs2[i2], i2);
      }
      return acc;
    }
  }
});

// node_modules/css-color-keywords/colors.json
var require_colors = __commonJS({
  "node_modules/css-color-keywords/colors.json"(exports2, module) {
    module.exports = {
      black: "#000000",
      silver: "#c0c0c0",
      gray: "#808080",
      white: "#ffffff",
      maroon: "#800000",
      red: "#ff0000",
      purple: "#800080",
      fuchsia: "#ff00ff",
      green: "#008000",
      lime: "#00ff00",
      olive: "#808000",
      yellow: "#ffff00",
      navy: "#000080",
      blue: "#0000ff",
      teal: "#008080",
      aqua: "#00ffff",
      orange: "#ffa500",
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      blanchedalmond: "#ffebcd",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      oldlace: "#fdf5e6",
      olivedrab: "#6b8e23",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      whitesmoke: "#f5f5f5",
      yellowgreen: "#9acd32",
      rebeccapurple: "#663399"
    };
  }
});

// node_modules/css-color-keywords/index.js
var require_css_color_keywords = __commonJS({
  "node_modules/css-color-keywords/index.js"(exports2, module) {
    module.exports = require_colors();
  }
});

// node_modules/css-to-react-native/index.js
var require_css_to_react_native = __commonJS({
  "node_modules/css-to-react-native/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var parse2 = require_lib();
    var parse__default = _interopDefault(parse2);
    var camelizeStyleName = _interopDefault(require_camelize());
    var cssColorKeywords = _interopDefault(require_css_color_keywords());
    var matchString = function matchString2(node) {
      if (node.type !== "string") return null;
      return node.value.replace(/\\([0-9a-f]{1,6})(?:\s|$)/gi, function(match, charCode) {
        return String.fromCharCode(parseInt(charCode, 16));
      }).replace(/\\/g, "");
    };
    var hexColorRe = /^(#(?:[0-9a-f]{3,4}){1,2})$/i;
    var cssFunctionNameRe = /^(rgba?|hsla?|hwb|lab|lch|gray|color)$/;
    var matchColor = function matchColor2(node) {
      if (node.type === "word" && (hexColorRe.test(node.value) || node.value in cssColorKeywords || node.value === "transparent")) {
        return node.value;
      } else if (node.type === "function" && cssFunctionNameRe.test(node.value)) {
        return parse2.stringify(node);
      }
      return null;
    };
    var noneRe = /^(none)$/i;
    var autoRe = /^(auto)$/i;
    var identRe = /(^-?[_a-z][_a-z0-9-]*$)/i;
    var numberRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)$/i;
    var lengthRe = /^(0$|(?:[+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(?=px$))/i;
    var unsupportedUnitRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?(ch|em|ex|rem|vh|vw|vmin|vmax|cm|mm|in|pc|pt))$/i;
    var angleRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?(?:deg|rad))$/i;
    var percentRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?%)$/i;
    var noopToken = function noopToken2(predicate) {
      return function(node) {
        return predicate(node) ? "<token>" : null;
      };
    };
    var valueForTypeToken = function valueForTypeToken2(type) {
      return function(node) {
        return node.type === type ? node.value : null;
      };
    };
    var regExpToken = function regExpToken2(regExp, transform2) {
      if (transform2 === void 0) {
        transform2 = String;
      }
      return function(node) {
        if (node.type !== "word") return null;
        var match = node.value.match(regExp);
        if (match === null) return null;
        var value = transform2(match[1]);
        return value;
      };
    };
    var SPACE = noopToken(function(node) {
      return node.type === "space";
    });
    var SLASH = noopToken(function(node) {
      return node.type === "div" && node.value === "/";
    });
    var COMMA = noopToken(function(node) {
      return node.type === "div" && node.value === ",";
    });
    var WORD = valueForTypeToken("word");
    var NONE = regExpToken(noneRe);
    var AUTO = regExpToken(autoRe);
    var NUMBER = regExpToken(numberRe, Number);
    var LENGTH = regExpToken(lengthRe, Number);
    var UNSUPPORTED_LENGTH_UNIT = regExpToken(unsupportedUnitRe);
    var ANGLE = regExpToken(angleRe, function(angle) {
      return angle.toLowerCase();
    });
    var PERCENT = regExpToken(percentRe);
    var IDENT = regExpToken(identRe);
    var STRING = matchString;
    var COLOR = matchColor;
    var LINE = regExpToken(/^(none|underline|line-through)$/i);
    var aspectRatio = function aspectRatio2(tokenStream) {
      var aspectRatio3 = tokenStream.expect(NUMBER);
      if (tokenStream.hasTokens()) {
        tokenStream.expect(SLASH);
        aspectRatio3 /= tokenStream.expect(NUMBER);
      }
      return {
        aspectRatio: aspectRatio3
      };
    };
    var BORDER_STYLE = regExpToken(/^(solid|dashed|dotted)$/);
    var defaultBorderWidth = 1;
    var defaultBorderColor = "black";
    var defaultBorderStyle = "solid";
    var border = function border2(tokenStream) {
      var borderWidth2;
      var borderColor2;
      var borderStyle;
      if (tokenStream.matches(NONE)) {
        tokenStream.expectEmpty();
        return {
          borderWidth: 0,
          borderColor: "black",
          borderStyle: "solid"
        };
      }
      var partsParsed = 0;
      while (partsParsed < 3 && tokenStream.hasTokens()) {
        if (partsParsed !== 0) tokenStream.expect(SPACE);
        if (borderWidth2 === void 0 && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT)) {
          borderWidth2 = tokenStream.lastValue;
        } else if (borderColor2 === void 0 && tokenStream.matches(COLOR)) {
          borderColor2 = tokenStream.lastValue;
        } else if (borderStyle === void 0 && tokenStream.matches(BORDER_STYLE)) {
          borderStyle = tokenStream.lastValue;
        } else {
          tokenStream["throw"]();
        }
        partsParsed += 1;
      }
      tokenStream.expectEmpty();
      if (borderWidth2 === void 0) borderWidth2 = defaultBorderWidth;
      if (borderColor2 === void 0) borderColor2 = defaultBorderColor;
      if (borderStyle === void 0) borderStyle = defaultBorderStyle;
      return {
        borderWidth: borderWidth2,
        borderColor: borderColor2,
        borderStyle
      };
    };
    var directionFactory = function directionFactory2(_ref) {
      var _ref$types = _ref.types, types = _ref$types === void 0 ? [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT] : _ref$types, _ref$directions = _ref.directions, directions = _ref$directions === void 0 ? ["Top", "Right", "Bottom", "Left"] : _ref$directions, _ref$prefix = _ref.prefix, prefix = _ref$prefix === void 0 ? "" : _ref$prefix, _ref$suffix = _ref.suffix, suffix = _ref$suffix === void 0 ? "" : _ref$suffix;
      return function(tokenStream) {
        var _ref2;
        var values = [];
        values.push(tokenStream.expect.apply(tokenStream, types));
        while (values.length < 4 && tokenStream.hasTokens()) {
          tokenStream.expect(SPACE);
          values.push(tokenStream.expect.apply(tokenStream, types));
        }
        tokenStream.expectEmpty();
        var top = values[0], _values$ = values[1], right = _values$ === void 0 ? top : _values$, _values$2 = values[2], bottom = _values$2 === void 0 ? top : _values$2, _values$3 = values[3], left = _values$3 === void 0 ? right : _values$3;
        var keyFor = function keyFor2(n2) {
          return "" + prefix + directions[n2] + suffix;
        };
        return _ref2 = {}, _ref2[keyFor(0)] = top, _ref2[keyFor(1)] = right, _ref2[keyFor(2)] = bottom, _ref2[keyFor(3)] = left, _ref2;
      };
    };
    var parseShadowOffset = function parseShadowOffset2(tokenStream) {
      var width = tokenStream.expect(LENGTH);
      var height = tokenStream.matches(SPACE) ? tokenStream.expect(LENGTH) : width;
      tokenStream.expectEmpty();
      return {
        width,
        height
      };
    };
    var parseShadow = function parseShadow2(tokenStream) {
      var offsetX;
      var offsetY;
      var radius;
      var color;
      if (tokenStream.matches(NONE)) {
        tokenStream.expectEmpty();
        return {
          offset: {
            width: 0,
            height: 0
          },
          radius: 0,
          color: "black"
        };
      }
      var didParseFirst = false;
      while (tokenStream.hasTokens()) {
        if (didParseFirst) tokenStream.expect(SPACE);
        if (offsetX === void 0 && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT)) {
          offsetX = tokenStream.lastValue;
          tokenStream.expect(SPACE);
          offsetY = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT);
          tokenStream.saveRewindPoint();
          if (tokenStream.matches(SPACE) && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT)) {
            radius = tokenStream.lastValue;
          } else {
            tokenStream.rewind();
          }
        } else if (color === void 0 && tokenStream.matches(COLOR)) {
          color = tokenStream.lastValue;
        } else {
          tokenStream["throw"]();
        }
        didParseFirst = true;
      }
      if (offsetX === void 0) tokenStream["throw"]();
      return {
        offset: {
          width: offsetX,
          height: offsetY
        },
        radius: radius !== void 0 ? radius : 0,
        color: color !== void 0 ? color : "black"
      };
    };
    var boxShadow = function boxShadow2(tokenStream) {
      var _parseShadow = parseShadow(tokenStream), offset = _parseShadow.offset, radius = _parseShadow.radius, color = _parseShadow.color;
      return {
        shadowOffset: offset,
        shadowRadius: radius,
        shadowColor: color,
        shadowOpacity: 1
      };
    };
    var defaultFlexGrow = 1;
    var defaultFlexShrink = 1;
    var defaultFlexBasis = 0;
    var flex = function flex2(tokenStream) {
      var flexGrow;
      var flexShrink;
      var flexBasis;
      if (tokenStream.matches(NONE)) {
        tokenStream.expectEmpty();
        return {
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: "auto"
        };
      }
      tokenStream.saveRewindPoint();
      if (tokenStream.matches(AUTO) && !tokenStream.hasTokens()) {
        return {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "auto"
        };
      }
      tokenStream.rewind();
      var partsParsed = 0;
      while (partsParsed < 2 && tokenStream.hasTokens()) {
        if (partsParsed !== 0) tokenStream.expect(SPACE);
        if (flexGrow === void 0 && tokenStream.matches(NUMBER)) {
          flexGrow = tokenStream.lastValue;
          tokenStream.saveRewindPoint();
          if (tokenStream.matches(SPACE) && tokenStream.matches(NUMBER)) {
            flexShrink = tokenStream.lastValue;
          } else {
            tokenStream.rewind();
          }
        } else if (flexBasis === void 0 && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT)) {
          flexBasis = tokenStream.lastValue;
        } else if (flexBasis === void 0 && tokenStream.matches(AUTO)) {
          flexBasis = "auto";
        } else {
          tokenStream["throw"]();
        }
        partsParsed += 1;
      }
      tokenStream.expectEmpty();
      if (flexGrow === void 0) flexGrow = defaultFlexGrow;
      if (flexShrink === void 0) flexShrink = defaultFlexShrink;
      if (flexBasis === void 0) flexBasis = defaultFlexBasis;
      return {
        flexGrow,
        flexShrink,
        flexBasis
      };
    };
    var FLEX_WRAP = regExpToken(/(nowrap|wrap|wrap-reverse)/);
    var FLEX_DIRECTION = regExpToken(/(row|row-reverse|column|column-reverse)/);
    var defaultFlexWrap = "nowrap";
    var defaultFlexDirection = "row";
    var flexFlow = function flexFlow2(tokenStream) {
      var flexWrap;
      var flexDirection;
      var partsParsed = 0;
      while (partsParsed < 2 && tokenStream.hasTokens()) {
        if (partsParsed !== 0) tokenStream.expect(SPACE);
        if (flexWrap === void 0 && tokenStream.matches(FLEX_WRAP)) {
          flexWrap = tokenStream.lastValue;
        } else if (flexDirection === void 0 && tokenStream.matches(FLEX_DIRECTION)) {
          flexDirection = tokenStream.lastValue;
        } else {
          tokenStream["throw"]();
        }
        partsParsed += 1;
      }
      tokenStream.expectEmpty();
      if (flexWrap === void 0) flexWrap = defaultFlexWrap;
      if (flexDirection === void 0) flexDirection = defaultFlexDirection;
      return {
        flexWrap,
        flexDirection
      };
    };
    var fontFamily = function fontFamily2(tokenStream) {
      var fontFamily3;
      if (tokenStream.matches(STRING)) {
        fontFamily3 = tokenStream.lastValue;
      } else {
        fontFamily3 = tokenStream.expect(IDENT);
        while (tokenStream.hasTokens()) {
          tokenStream.expect(SPACE);
          var nextIdent = tokenStream.expect(IDENT);
          fontFamily3 += " " + nextIdent;
        }
      }
      tokenStream.expectEmpty();
      return {
        fontFamily: fontFamily3
      };
    };
    var NORMAL = regExpToken(/^(normal)$/);
    var STYLE = regExpToken(/^(italic)$/);
    var WEIGHT = regExpToken(/^([1-9]00|bold)$/);
    var VARIANT = regExpToken(/^(small-caps)$/);
    var defaultFontStyle = "normal";
    var defaultFontWeight = "normal";
    var defaultFontVariant = [];
    var font = function font2(tokenStream) {
      var fontStyle;
      var fontWeight2;
      var fontVariant2;
      var lineHeight;
      var numStyleWeightVariantMatched = 0;
      while (numStyleWeightVariantMatched < 3 && tokenStream.hasTokens()) {
        if (tokenStream.matches(NORMAL)) ;
        else if (fontStyle === void 0 && tokenStream.matches(STYLE)) {
          fontStyle = tokenStream.lastValue;
        } else if (fontWeight2 === void 0 && tokenStream.matches(WEIGHT)) {
          fontWeight2 = tokenStream.lastValue;
        } else if (fontVariant2 === void 0 && tokenStream.matches(VARIANT)) {
          fontVariant2 = [tokenStream.lastValue];
        } else {
          break;
        }
        tokenStream.expect(SPACE);
        numStyleWeightVariantMatched += 1;
      }
      var fontSize = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT);
      if (tokenStream.matches(SLASH)) {
        lineHeight = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT);
      }
      tokenStream.expect(SPACE);
      var _fontFamily = fontFamily(tokenStream), fontFamily$1 = _fontFamily.fontFamily;
      if (fontStyle === void 0) fontStyle = defaultFontStyle;
      if (fontWeight2 === void 0) fontWeight2 = defaultFontWeight;
      if (fontVariant2 === void 0) fontVariant2 = defaultFontVariant;
      var out = {
        fontStyle,
        fontWeight: fontWeight2,
        fontVariant: fontVariant2,
        fontSize,
        fontFamily: fontFamily$1
      };
      if (lineHeight !== void 0) out.lineHeight = lineHeight;
      return out;
    };
    var fontVariant = function fontVariant2(tokenStream) {
      var values = [tokenStream.expect(IDENT)];
      while (tokenStream.hasTokens()) {
        tokenStream.expect(SPACE);
        values.push(tokenStream.expect(IDENT));
      }
      return {
        fontVariant: values
      };
    };
    var ALIGN_CONTENT = regExpToken(/(flex-(?:start|end)|center|stretch|space-(?:between|around))/);
    var JUSTIFY_CONTENT = regExpToken(/(flex-(?:start|end)|center|space-(?:between|around|evenly))/);
    var placeContent = function placeContent2(tokenStream) {
      var alignContent = tokenStream.expect(ALIGN_CONTENT);
      var justifyContent;
      if (tokenStream.hasTokens()) {
        tokenStream.expect(SPACE);
        justifyContent = tokenStream.expect(JUSTIFY_CONTENT);
      } else {
        justifyContent = "stretch";
      }
      tokenStream.expectEmpty();
      return {
        alignContent,
        justifyContent
      };
    };
    var STYLE$1 = regExpToken(/^(solid|double|dotted|dashed)$/);
    var defaultTextDecorationLine = "none";
    var defaultTextDecorationStyle = "solid";
    var defaultTextDecorationColor = "black";
    var textDecoration = function textDecoration2(tokenStream) {
      var line;
      var style;
      var color;
      var didParseFirst = false;
      while (tokenStream.hasTokens()) {
        if (didParseFirst) tokenStream.expect(SPACE);
        if (line === void 0 && tokenStream.matches(LINE)) {
          var lines = [tokenStream.lastValue.toLowerCase()];
          tokenStream.saveRewindPoint();
          if (lines[0] !== "none" && tokenStream.matches(SPACE) && tokenStream.matches(LINE)) {
            lines.push(tokenStream.lastValue.toLowerCase());
            lines.sort().reverse();
          } else {
            tokenStream.rewind();
          }
          line = lines.join(" ");
        } else if (style === void 0 && tokenStream.matches(STYLE$1)) {
          style = tokenStream.lastValue;
        } else if (color === void 0 && tokenStream.matches(COLOR)) {
          color = tokenStream.lastValue;
        } else {
          tokenStream["throw"]();
        }
        didParseFirst = true;
      }
      return {
        textDecorationLine: line !== void 0 ? line : defaultTextDecorationLine,
        textDecorationColor: color !== void 0 ? color : defaultTextDecorationColor,
        textDecorationStyle: style !== void 0 ? style : defaultTextDecorationStyle
      };
    };
    var textDecorationLine = function textDecorationLine2(tokenStream) {
      var lines = [];
      var didParseFirst = false;
      while (tokenStream.hasTokens()) {
        if (didParseFirst) tokenStream.expect(SPACE);
        lines.push(tokenStream.expect(LINE).toLowerCase());
        didParseFirst = true;
      }
      lines.sort().reverse();
      return {
        textDecorationLine: lines.join(" ")
      };
    };
    var textShadow = function textShadow2(tokenStream) {
      var _parseShadow2 = parseShadow(tokenStream), offset = _parseShadow2.offset, radius = _parseShadow2.radius, color = _parseShadow2.color;
      return {
        textShadowOffset: offset,
        textShadowRadius: radius,
        textShadowColor: color
      };
    };
    var oneOfType = function oneOfType2(tokenType) {
      return function(functionStream) {
        var value = functionStream.expect(tokenType);
        functionStream.expectEmpty();
        return value;
      };
    };
    var singleNumber = oneOfType(NUMBER);
    var singleLength = oneOfType(LENGTH);
    var singleAngle = oneOfType(ANGLE);
    var xyTransformFactory = function xyTransformFactory2(tokenType) {
      return function(key, valueIfOmitted) {
        return function(functionStream) {
          var _ref3, _ref4;
          var x3 = functionStream.expect(tokenType);
          var y2;
          if (functionStream.hasTokens()) {
            functionStream.expect(COMMA);
            y2 = functionStream.expect(tokenType);
          } else if (valueIfOmitted !== void 0) {
            y2 = valueIfOmitted;
          } else {
            return x3;
          }
          functionStream.expectEmpty();
          return [(_ref3 = {}, _ref3[key + "Y"] = y2, _ref3), (_ref4 = {}, _ref4[key + "X"] = x3, _ref4)];
        };
      };
    };
    var xyNumber = xyTransformFactory(NUMBER);
    var xyLength = xyTransformFactory(LENGTH);
    var xyAngle = xyTransformFactory(ANGLE);
    var partTransforms = {
      perspective: singleNumber,
      scale: xyNumber("scale"),
      scaleX: singleNumber,
      scaleY: singleNumber,
      translate: xyLength("translate", 0),
      translateX: singleLength,
      translateY: singleLength,
      rotate: singleAngle,
      rotateX: singleAngle,
      rotateY: singleAngle,
      rotateZ: singleAngle,
      skewX: singleAngle,
      skewY: singleAngle,
      skew: xyAngle("skew", "0deg")
    };
    var transform = function transform2(tokenStream) {
      var transforms2 = [];
      var didParseFirst = false;
      while (tokenStream.hasTokens()) {
        if (didParseFirst) tokenStream.expect(SPACE);
        var functionStream = tokenStream.expectFunction();
        var functionName = functionStream.functionName;
        var transformedValues = partTransforms[functionName](functionStream);
        if (!Array.isArray(transformedValues)) {
          var _ref5;
          transformedValues = [(_ref5 = {}, _ref5[functionName] = transformedValues, _ref5)];
        }
        transforms2 = transformedValues.concat(transforms2);
        didParseFirst = true;
      }
      return {
        transform: transforms2
      };
    };
    var background = function background2(tokenStream) {
      return {
        backgroundColor: tokenStream.expect(COLOR)
      };
    };
    var borderColor = directionFactory({
      types: [COLOR],
      prefix: "border",
      suffix: "Color"
    });
    var borderRadius = directionFactory({
      directions: ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
      prefix: "border",
      suffix: "Radius"
    });
    var borderWidth = directionFactory({
      prefix: "border",
      suffix: "Width"
    });
    var margin = directionFactory({
      types: [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT, AUTO],
      prefix: "margin"
    });
    var padding = directionFactory({
      prefix: "padding"
    });
    var fontWeight = function fontWeight2(tokenStream) {
      return {
        fontWeight: tokenStream.expect(WORD)
        // Also match numbers as strings
      };
    };
    var shadowOffset = function shadowOffset2(tokenStream) {
      return {
        shadowOffset: parseShadowOffset(tokenStream)
      };
    };
    var textShadowOffset = function textShadowOffset2(tokenStream) {
      return {
        textShadowOffset: parseShadowOffset(tokenStream)
      };
    };
    var transforms = {
      aspectRatio,
      background,
      border,
      borderColor,
      borderRadius,
      borderWidth,
      boxShadow,
      flex,
      flexFlow,
      font,
      fontFamily,
      fontVariant,
      fontWeight,
      margin,
      padding,
      placeContent,
      shadowOffset,
      textShadow,
      textShadowOffset,
      textDecoration,
      textDecorationLine,
      transform
    };
    var propertiesWithoutUnits;
    if (process.env.NODE_ENV !== "production") {
      propertiesWithoutUnits = ["aspectRatio", "elevation", "flexGrow", "flexShrink", "opacity", "shadowOpacity", "zIndex"];
    }
    var devPropertiesWithUnitsRegExp = propertiesWithoutUnits != null ? new RegExp(propertiesWithoutUnits.join("|")) : null;
    var SYMBOL_MATCH = "SYMBOL_MATCH";
    var TokenStream = /* @__PURE__ */ (function() {
      function TokenStream2(nodes, parent) {
        this.index = 0;
        this.nodes = nodes;
        this.functionName = parent != null ? parent.value : null;
        this.lastValue = null;
        this.rewindIndex = -1;
      }
      var _proto = TokenStream2.prototype;
      _proto.hasTokens = function hasTokens() {
        return this.index <= this.nodes.length - 1;
      };
      _proto[SYMBOL_MATCH] = function() {
        if (!this.hasTokens()) return null;
        var node = this.nodes[this.index];
        for (var i2 = 0; i2 < arguments.length; i2 += 1) {
          var tokenDescriptor = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
          var value = tokenDescriptor(node);
          if (value !== null) {
            this.index += 1;
            this.lastValue = value;
            return value;
          }
        }
        return null;
      };
      _proto.matches = function matches() {
        return this[SYMBOL_MATCH].apply(this, arguments) !== null;
      };
      _proto.expect = function expect() {
        var value = this[SYMBOL_MATCH].apply(this, arguments);
        return value !== null ? value : this["throw"]();
      };
      _proto.matchesFunction = function matchesFunction() {
        var node = this.nodes[this.index];
        if (node.type !== "function") return null;
        var value = new TokenStream2(node.nodes, node);
        this.index += 1;
        this.lastValue = null;
        return value;
      };
      _proto.expectFunction = function expectFunction() {
        var value = this.matchesFunction();
        return value !== null ? value : this["throw"]();
      };
      _proto.expectEmpty = function expectEmpty() {
        if (this.hasTokens()) this["throw"]();
      };
      _proto["throw"] = function _throw() {
        throw new Error("Unexpected token type: " + this.nodes[this.index].type);
      };
      _proto.saveRewindPoint = function saveRewindPoint() {
        this.rewindIndex = this.index;
      };
      _proto.rewind = function rewind() {
        if (this.rewindIndex === -1) throw new Error("Internal error");
        this.index = this.rewindIndex;
        this.lastValue = null;
      };
      return TokenStream2;
    })();
    var numberOrLengthRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(?:px)?$/i;
    var numberOnlyRe = /^[+-]?(?:\d*\.\d*|[1-9]\d*)(?:e[+-]?\d+)?$/i;
    var boolRe = /^true|false$/i;
    var nullRe = /^null$/i;
    var undefinedRe = /^undefined$/i;
    var transformRawValue = function transformRawValue2(propName, value) {
      if (process.env.NODE_ENV !== "production") {
        var needsUnit = !devPropertiesWithUnitsRegExp.test(propName);
        var isNumberWithoutUnit = numberOnlyRe.test(value);
        if (needsUnit && isNumberWithoutUnit) {
          console.warn('Expected style "' + propName + ": " + value + '" to contain units');
        }
        if (!needsUnit && value !== "0" && !isNumberWithoutUnit) {
          console.warn('Expected style "' + propName + ": " + value + '" to be unitless');
        }
      }
      var numberMatch = value.match(numberOrLengthRe);
      if (numberMatch !== null) return Number(numberMatch[1]);
      var boolMatch = value.match(boolRe);
      if (boolMatch !== null) return boolMatch[0].toLowerCase() === "true";
      var nullMatch = value.match(nullRe);
      if (nullMatch !== null) return null;
      var undefinedMatch = value.match(undefinedRe);
      if (undefinedMatch !== null) return void 0;
      return value;
    };
    var baseTransformShorthandValue = function baseTransformShorthandValue2(propName, value) {
      var ast = parse__default(value);
      var tokenStream = new TokenStream(ast.nodes);
      return transforms[propName](tokenStream);
    };
    var transformShorthandValue = process.env.NODE_ENV === "production" ? baseTransformShorthandValue : function(propName, value) {
      try {
        return baseTransformShorthandValue(propName, value);
      } catch (e2) {
        throw new Error('Failed to parse declaration "' + propName + ": " + value + '"');
      }
    };
    var getStylesForProperty = function getStylesForProperty2(propName, inputValue, allowShorthand) {
      var _ref6;
      var isRawValue = allowShorthand === false || !(propName in transforms);
      var value = inputValue.trim();
      var propValues = isRawValue ? (_ref6 = {}, _ref6[propName] = transformRawValue(propName, value), _ref6) : transformShorthandValue(propName, value);
      return propValues;
    };
    var getPropertyName = function getPropertyName2(propName) {
      var isCustomProp = /^--\w+/.test(propName);
      if (isCustomProp) {
        return propName;
      }
      return camelizeStyleName(propName);
    };
    var index = function index2(rules, shorthandBlacklist) {
      if (shorthandBlacklist === void 0) {
        shorthandBlacklist = [];
      }
      return rules.reduce(function(accum, rule) {
        var propertyName = getPropertyName(rule[0]);
        var value = rule[1];
        var allowShorthand = shorthandBlacklist.indexOf(propertyName) === -1;
        return Object.assign(accum, getStylesForProperty(propertyName, value, allowShorthand));
      }, {});
    };
    exports2["default"] = index;
    exports2.getPropertyName = getPropertyName;
    exports2.getStylesForProperty = getStylesForProperty;
    exports2.transformRawValue = transformRawValue;
  }
});

// node_modules/css-background-parser/index.js
var require_css_background_parser = __commonJS({
  "node_modules/css-background-parser/index.js"(exports2, module) {
    (function(exports3) {
      function BackgroundList(backgrounds) {
        if (!(this instanceof BackgroundList)) {
          return new BackgroundList();
        }
        this.backgrounds = backgrounds || [];
      }
      BackgroundList.prototype.toString = function() {
        return this.backgrounds.join(", ");
      };
      function Background(props) {
        if (!(this instanceof Background)) {
          return new Background(props);
        }
        props = props || {};
        var bg = this;
        function defprop(name, defaultValue) {
          bg[name] = name in props ? props[name] : defaultValue;
        }
        defprop("color", "");
        defprop("image", "none");
        defprop("attachment", "scroll");
        defprop("clip", "border-box");
        defprop("origin", "padding-box");
        defprop("position", "0% 0%");
        defprop("repeat", "repeat");
        defprop("size", "auto");
      }
      Background.prototype.toString = function() {
        var list = [
          this.image,
          this.repeat,
          this.attachment,
          this.position + " / " + this.size,
          this.origin,
          this.clip
        ];
        if (this.color) {
          list.unshift(this.color);
        }
        return list.join(" ");
      };
      exports3.BackgroundList = BackgroundList;
      exports3.Background = Background;
      function parseImages(cssText) {
        var images = [];
        var tokens = /[,\(\)]/;
        var parens = 0;
        var buffer = "";
        if (cssText == null) {
          return images;
        }
        while (cssText.length) {
          var match = tokens.exec(cssText);
          if (!match) {
            break;
          }
          var char = match[0];
          var ignoreChar = false;
          switch (char) {
            case ",":
              if (!parens) {
                images.push(buffer.trim());
                buffer = "";
                ignoreChar = true;
              }
              break;
            case "(":
              parens++;
              break;
            case ")":
              parens--;
              break;
          }
          var index = match.index + 1;
          buffer += cssText.slice(0, ignoreChar ? index - 1 : index);
          cssText = cssText.slice(index);
        }
        if (buffer.length || cssText.length) {
          images.push((buffer + cssText).trim());
        }
        return images;
      }
      function trim(str) {
        return str.trim();
      }
      function parseSimpleList(cssText) {
        return (cssText || "").split(",").map(trim);
      }
      exports3.parseElementStyle = function(styleObject) {
        var list = new BackgroundList();
        if (styleObject == null) {
          return list;
        }
        var bgImage = parseImages(styleObject.backgroundImage);
        var bgColor = styleObject.backgroundColor;
        var bgAttachment = parseSimpleList(styleObject.backgroundAttachment);
        var bgClip = parseSimpleList(styleObject.backgroundClip);
        var bgOrigin = parseSimpleList(styleObject.backgroundOrigin);
        var bgPosition = parseSimpleList(styleObject.backgroundPosition);
        var bgRepeat = parseSimpleList(styleObject.backgroundRepeat);
        var bgSize = parseSimpleList(styleObject.backgroundSize);
        var background;
        for (var i2 = 0, ii2 = bgImage.length; i2 < ii2; i2++) {
          background = new Background({
            image: bgImage[i2],
            attachment: bgAttachment[i2 % bgAttachment.length],
            clip: bgClip[i2 % bgClip.length],
            origin: bgOrigin[i2 % bgOrigin.length],
            position: bgPosition[i2 % bgPosition.length],
            repeat: bgRepeat[i2 % bgRepeat.length],
            size: bgSize[i2 % bgSize.length]
          });
          if (i2 === ii2 - 1) {
            background.color = bgColor;
          }
          list.backgrounds.push(background);
        }
        return list;
      };
    })((function(root) {
      if (typeof module !== "undefined" && module.exports !== void 0) return module.exports;
      return root.cssBgParser = {};
    })(exports2));
  }
});

// node_modules/css-box-shadow/index.js
var require_css_box_shadow = __commonJS({
  "node_modules/css-box-shadow/index.js"(exports2, module) {
    var VALUES_REG = /,(?![^\(]*\))/;
    var PARTS_REG = /\s(?![^(]*\))/;
    var LENGTH_REG = /^[0-9]+[a-zA-Z%]+?$/;
    var parseValue = (str) => {
      const parts = str.split(PARTS_REG);
      const inset = parts.includes("inset");
      const last = parts.slice(-1)[0];
      const color = !isLength(last) ? last : void 0;
      const nums = parts.filter((n2) => n2 !== "inset").filter((n2) => n2 !== color).map(toNum);
      const [offsetX, offsetY, blurRadius, spreadRadius] = nums;
      return {
        inset,
        offsetX,
        offsetY,
        blurRadius,
        spreadRadius,
        color
      };
    };
    var stringifyValue = (obj) => {
      const {
        inset,
        offsetX = 0,
        offsetY = 0,
        blurRadius = 0,
        spreadRadius,
        color
      } = obj || {};
      return [
        inset ? "inset" : null,
        offsetX,
        offsetY,
        blurRadius,
        spreadRadius,
        color
      ].filter((v4) => v4 !== null && v4 !== void 0).map(toPx).map((s2) => ("" + s2).trim()).join(" ");
    };
    var isLength = (v4) => v4 === "0" || LENGTH_REG.test(v4);
    var toNum = (v4) => {
      if (!/px$/.test(v4) && v4 !== "0") return v4;
      const n2 = parseFloat(v4);
      return !isNaN(n2) ? n2 : v4;
    };
    var toPx = (n2) => typeof n2 === "number" && n2 !== 0 ? n2 + "px" : n2;
    var parse2 = (str) => str.split(VALUES_REG).map((s2) => s2.trim()).map(parseValue);
    var stringify = (arr) => arr.map(stringifyValue).join(", ");
    module.exports = {
      parse: parse2,
      stringify
    };
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module) {
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/hex-rgb/index.js
var require_hex_rgb = __commonJS({
  "node_modules/hex-rgb/index.js"(exports2, module) {
    var hexCharacters = "a-f\\d";
    var match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
    var match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
    var nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
    var validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");
    module.exports = (hex, options = {}) => {
      if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) {
        throw new TypeError("Expected a valid hex string");
      }
      hex = hex.replace(/^#/, "");
      let alphaFromHex = 1;
      if (hex.length === 8) {
        alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.slice(0, 6);
      }
      if (hex.length === 4) {
        alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
        hex = hex.slice(0, 3);
      }
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      const number2 = Number.parseInt(hex, 16);
      const red = number2 >> 16;
      const green = number2 >> 8 & 255;
      const blue = number2 & 255;
      const alpha = typeof options.alpha === "number" ? options.alpha : alphaFromHex;
      if (options.format === "array") {
        return [red, green, blue, alpha];
      }
      if (options.format === "css") {
        const alphaString = alpha === 1 ? "" : ` / ${Number((alpha * 100).toFixed(2))}%`;
        return `rgb(${red} ${green} ${blue}${alphaString})`;
      }
      return { red, green, blue, alpha };
    };
  }
});

// node_modules/harfbuzzjs/hbjs.js
var require_hbjs = __commonJS({
  "node_modules/harfbuzzjs/hbjs.js"(exports2, module) {
    function hbjs(Module) {
      var exports3 = Module.wasmExports;
      var utf8Decoder = new TextDecoder("utf8");
      var utf8Encoder = new TextEncoder("utf8");
      let addFunction = Module.addFunction;
      let removeFunction = Module.removeFunction;
      let stackSave = Module.stackSave;
      let stackRestore = Module.stackRestore;
      let stackAlloc = Module.stackAlloc;
      var freeFuncPtr = addFunction(function(ptr) {
        exports3.free(ptr);
      }, "vi");
      const TRACE_PHASE_DONT_STOP = 0;
      const TRACE_PHASE_GSUB = 1;
      const TRACE_PHASE_GPOS = 2;
      const STATIC_ARRAY_SIZE = 128;
      const HB_MEMORY_MODE_WRITABLE = 2;
      const HB_SET_VALUE_INVALID = -1;
      const HB_OT_NAME_ID_INVALID = 65535;
      const bufferContentType = {
        0: "INVALID",
        1: "UNICODE",
        2: "GLYPHS"
      };
      const bufferSerializeFlags = {
        "DEFAULT": 0,
        "NO_CLUSTERS": 1,
        "NO_POSITIONS": 2,
        "NO_GLYPH_NAMES": 4,
        "GLYPH_EXTENTS": 8,
        "GLYPH_FLAGS": 16,
        "NO_ADVANCES": 32
      };
      const bufferFlags = {
        "DEFAULT": 0,
        "BOT": 1,
        "EOT": 2,
        "PRESERVE_DEFAULT_IGNORABLES": 4,
        "REMOVE_DEFAULT_IGNORABLES": 8,
        "DO_NOT_INSERT_DOTTED_CIRCLE": 16,
        "VERIFY": 32,
        "PRODUCE_UNSAFE_TO_CONCAT": 64,
        "PRODUCE_SAFE_TO_INSERT_TATWEEL": 128
      };
      function _hb_tag(s2) {
        return (s2.charCodeAt(0) & 255) << 24 | (s2.charCodeAt(1) & 255) << 16 | (s2.charCodeAt(2) & 255) << 8 | (s2.charCodeAt(3) & 255) << 0;
      }
      function _hb_untag(tag) {
        return [
          String.fromCharCode(tag >> 24 & 255),
          String.fromCharCode(tag >> 16 & 255),
          String.fromCharCode(tag >> 8 & 255),
          String.fromCharCode(tag >> 0 & 255)
        ].join("");
      }
      function _utf8_ptr_to_string(ptr, length) {
        let end;
        if (length === void 0) end = Module.HEAPU8.indexOf(0, ptr);
        else end = ptr + length;
        return utf8Decoder.decode(Module.HEAPU8.subarray(ptr, end));
      }
      function _utf16_ptr_to_string(ptr, length) {
        let end = ptr / 2 + length;
        return String.fromCharCode.apply(null, Module.HEAPU16.subarray(ptr / 2, end));
      }
      function _string_to_ascii_ptr(text) {
        const ptr = exports3.malloc(text.length + 1);
        for (let i2 = 0; i2 < text.length; ++i2) {
          const char = text.charCodeAt(i2);
          if (char > 127) throw new Error("Expected ASCII text");
          Module.HEAPU8[ptr + i2] = char;
        }
        Module.HEAPU8[ptr + text.length] = 0;
        return {
          ptr,
          length: text.length,
          free: function() {
            exports3.free(ptr);
          }
        };
      }
      function _string_to_utf8_ptr(text) {
        const ptr = exports3.malloc(text.length);
        utf8Encoder.encodeInto(text, Module.HEAPU8.subarray(ptr, ptr + text.length));
        return {
          ptr,
          length: text.length,
          free: function() {
            exports3.free(ptr);
          }
        };
      }
      function _string_to_utf16_ptr(text) {
        const ptr = exports3.malloc(text.length * 2);
        const words = Module.HEAPU16.subarray(ptr / 2, ptr / 2 + text.length);
        for (let i2 = 0; i2 < words.length; ++i2) words[i2] = text.charCodeAt(i2);
        return {
          ptr,
          length: words.length,
          free: function() {
            exports3.free(ptr);
          }
        };
      }
      function _language_to_string(language) {
        var ptr = exports3.hb_language_to_string(language);
        return _utf8_ptr_to_string(ptr);
      }
      function _language_from_string(str) {
        var languageStr = _string_to_ascii_ptr(str);
        var languagePtr = exports3.hb_language_from_string(languageStr.ptr, -1);
        languageStr.free();
        return languagePtr;
      }
      function createBlob(blob) {
        var blobPtr = exports3.malloc(blob.byteLength);
        Module.HEAPU8.set(new Uint8Array(blob), blobPtr);
        var ptr = exports3.hb_blob_create(blobPtr, blob.byteLength, HB_MEMORY_MODE_WRITABLE, blobPtr, freeFuncPtr);
        return {
          ptr,
          /**
          * Free the object.
          */
          destroy: function() {
            exports3.hb_blob_destroy(ptr);
          }
        };
      }
      function _typed_array_from_set(setPtr) {
        const setCount = exports3.hb_set_get_population(setPtr);
        const arrayPtr = exports3.malloc(setCount << 2);
        const arrayOffset = arrayPtr >> 2;
        const array = Module.HEAPU32.subarray(arrayOffset, arrayOffset + setCount);
        Module.HEAPU32.set(array, arrayOffset);
        exports3.hb_set_next_many(setPtr, HB_SET_VALUE_INVALID, arrayPtr, setCount);
        return array;
      }
      function createFace(blob, index) {
        var ptr = exports3.hb_face_create(blob.ptr, index);
        const upem = exports3.hb_face_get_upem(ptr);
        return {
          ptr,
          upem,
          /**
           * Return the binary contents of an OpenType table.
           * @param {string} table Table name
           */
          reference_table: function(table) {
            var blob2 = exports3.hb_face_reference_table(ptr, _hb_tag(table));
            var length = exports3.hb_blob_get_length(blob2);
            if (!length) {
              return;
            }
            var blobptr = exports3.hb_blob_get_data(blob2, null);
            var table_string = Module.HEAPU8.subarray(blobptr, blobptr + length);
            return table_string;
          },
          /**
           * Return variation axis infos
           */
          getAxisInfos: function() {
            var sp2 = stackSave();
            var axis = stackAlloc(64 * 32);
            var c3 = stackAlloc(4);
            Module.HEAPU32[c3 / 4] = 64;
            exports3.hb_ot_var_get_axis_infos(ptr, 0, c3, axis);
            var result = {};
            Array.from({ length: Module.HEAPU32[c3 / 4] }).forEach(function(_3, i2) {
              result[_hb_untag(Module.HEAPU32[axis / 4 + i2 * 8 + 1])] = {
                min: Module.HEAPF32[axis / 4 + i2 * 8 + 4],
                default: Module.HEAPF32[axis / 4 + i2 * 8 + 5],
                max: Module.HEAPF32[axis / 4 + i2 * 8 + 6]
              };
            });
            stackRestore(sp2);
            return result;
          },
          /**
           * Return unicodes the face supports
           */
          collectUnicodes: function() {
            var unicodeSetPtr = exports3.hb_set_create();
            exports3.hb_face_collect_unicodes(ptr, unicodeSetPtr);
            var result = _typed_array_from_set(unicodeSetPtr);
            exports3.hb_set_destroy(unicodeSetPtr);
            return result;
          },
          /**
           * Return all scripts enumerated in the specified face's
           * GSUB table or GPOS table.
           * @param {string} table: The table to query, either "GSUB" or "GPOS".
           **/
          getTableScriptTags: function(table) {
            var sp2 = stackSave();
            var tableTag = _hb_tag(table);
            var startOffset = 0;
            var scriptCount = STATIC_ARRAY_SIZE;
            var scriptCountPtr = stackAlloc(4);
            var scriptTagsPtr = stackAlloc(STATIC_ARRAY_SIZE * 4);
            var tags = [];
            while (scriptCount == STATIC_ARRAY_SIZE) {
              Module.HEAPU32[scriptCountPtr / 4] = scriptCount;
              exports3.hb_ot_layout_table_get_script_tags(
                ptr,
                tableTag,
                startOffset,
                scriptCountPtr,
                scriptTagsPtr
              );
              scriptCount = Module.HEAPU32[scriptCountPtr / 4];
              var scriptTags = Module.HEAPU32.subarray(
                scriptTagsPtr / 4,
                scriptTagsPtr / 4 + scriptCount
              );
              tags.push(...Array.from(scriptTags).map(_hb_untag));
              startOffset += scriptCount;
            }
            stackRestore(sp2);
            return tags;
          },
          /**
           * Return all features enumerated in the specified face's
           * GSUB table or GPOS table.
           * @param {string} table: The table to query, either "GSUB" or "GPOS".
           **/
          getTableFeatureTags: function(table) {
            var sp2 = stackSave();
            var tableTag = _hb_tag(table);
            var startOffset = 0;
            var featureCount = STATIC_ARRAY_SIZE;
            var featureCountPtr = stackAlloc(4);
            var featureTagsPtr = stackAlloc(STATIC_ARRAY_SIZE * 4);
            var tags = [];
            while (featureCount == STATIC_ARRAY_SIZE) {
              Module.HEAPU32[featureCountPtr / 4] = featureCount;
              exports3.hb_ot_layout_table_get_feature_tags(
                ptr,
                tableTag,
                startOffset,
                featureCountPtr,
                featureTagsPtr
              );
              featureCount = Module.HEAPU32[featureCountPtr / 4];
              var scriptTags = Module.HEAPU32.subarray(
                featureTagsPtr / 4,
                featureTagsPtr / 4 + featureCount
              );
              tags.push(...Array.from(scriptTags).map(_hb_untag));
              startOffset += featureCount;
            }
            stackRestore(sp2);
            return tags;
          },
          /**
           * Return language tags in the given face's GSUB or GPOS table, underneath
           * the specified script index.
           * @param {string} table: The table to query, either "GSUB" or "GPOS".
           * @param {number} scriptIndex: The index of the script to query.
           **/
          getScriptLanguageTags: function(table, scriptIndex) {
            var sp2 = stackSave();
            var tableTag = _hb_tag(table);
            var startOffset = 0;
            var languageCount = STATIC_ARRAY_SIZE;
            var languageCountPtr = stackAlloc(4);
            var languageTagsPtr = stackAlloc(STATIC_ARRAY_SIZE * 4);
            var tags = [];
            while (languageCount == STATIC_ARRAY_SIZE) {
              Module.HEAPU32[languageCountPtr / 4] = languageCount;
              exports3.hb_ot_layout_script_get_language_tags(
                ptr,
                tableTag,
                scriptIndex,
                startOffset,
                languageCountPtr,
                languageTagsPtr
              );
              languageCount = Module.HEAPU32[languageCountPtr / 4];
              var languageTags = Module.HEAPU32.subarray(
                languageTagsPtr / 4,
                languageTagsPtr / 4 + languageCount
              );
              tags.push(...Array.from(languageTags).map(_hb_untag));
              startOffset += languageCount;
            }
            stackRestore(sp2);
            return tags;
          },
          /**
           * Return all features in the specified face's GSUB table or GPOS table,
           * underneath the specified script and language.
           * @param {string} table: The table to query, either "GSUB" or "GPOS".
           * @param {number} scriptIndex: The index of the script to query.
           * @param {number} languageIndex: The index of the language to query.
           **/
          getLanguageFeatureTags: function(table, scriptIndex, languageIndex) {
            var sp2 = stackSave();
            var tableTag = _hb_tag(table);
            var startOffset = 0;
            var featureCount = STATIC_ARRAY_SIZE;
            var featureCountPtr = stackAlloc(4);
            var featureTagsPtr = stackAlloc(STATIC_ARRAY_SIZE * 4);
            var tags = [];
            while (featureCount == STATIC_ARRAY_SIZE) {
              Module.HEAPU32[featureCountPtr / 4] = featureCount;
              exports3.hb_ot_layout_language_get_feature_tags(
                ptr,
                tableTag,
                scriptIndex,
                languageIndex,
                startOffset,
                featureCountPtr,
                featureTagsPtr
              );
              featureCount = Module.HEAPU32[featureCountPtr / 4];
              var featureTags = Module.HEAPU32.subarray(
                featureTagsPtr / 4,
                featureTagsPtr / 4 + featureCount
              );
              tags.push(...Array.from(featureTags).map(_hb_untag));
              startOffset += featureCount;
            }
            stackRestore(sp2);
            return tags;
          },
          /**
           * Get the GDEF class of the requested glyph.
           * @param {number} glyph The glyph to get the class of.
           * @returns {string} The class of the glyph. Which can be either
           *   UNCLASSIFIED, BASE_GLYPH, LIGATURE, MARK, or COMPONENT.
           **/
          getGlyphClass: function(glyph) {
            const gclass = exports3.hb_ot_layout_get_glyph_class(ptr, glyph);
            switch (gclass) {
              case 0:
                return "UNCLASSIFIED";
              case 1:
                return "BASE_GLYPH";
              case 2:
                return "LIGATURE";
              case 3:
                return "MARK";
              case 4:
                return "COMPONENT";
            }
          },
          /**
           * Return all names in the specified face's name table.
           **/
          listNames: function() {
            var sp2 = stackSave();
            var numEntriesPtr = stackAlloc(4);
            var entriesPtr = exports3.hb_ot_name_list_names(ptr, numEntriesPtr);
            var numEntries = Module.HEAPU32[numEntriesPtr / 4];
            var entries = [];
            for (var i2 = 0; i2 < numEntries; i2++) {
              entries.push({
                nameId: Module.HEAPU32[entriesPtr / 4 + i2 * 3],
                language: _language_to_string(Module.HEAPU32[entriesPtr / 4 + i2 * 3 + 2])
              });
            }
            stackRestore(sp2);
            return entries;
          },
          /**
           * Get the name of the specified face.
           * @param {number} nameId The ID of the name to get.
           * @param {string} language The language of the name to get.
           **/
          getName: function(nameId, language) {
            var sp2 = stackSave();
            var languagePtr = _language_from_string(language);
            var nameLen = exports3.hb_ot_name_get_utf16(ptr, nameId, languagePtr, 0, 0) + 1;
            var textSizePtr = stackAlloc(4);
            var textPtr = exports3.malloc(nameLen * 2);
            Module.HEAPU32[textSizePtr / 4] = nameLen;
            exports3.hb_ot_name_get_utf16(ptr, nameId, languagePtr, textSizePtr, textPtr);
            var name = _utf16_ptr_to_string(textPtr, nameLen - 1);
            exports3.free(textPtr);
            stackRestore(sp2);
            return name;
          },
          /**
           * Get the name IDs of the specified feature.
           * @param {string} table The table to query, either "GSUB" or "GPOS".
           * @param {number} featureIndex The index of the feature to query.
           **/
          getFeatureNameIds: function(table, featureIndex) {
            var sp2 = stackSave();
            var tableTag = _hb_tag(table);
            var labelIdPtr = stackAlloc(4);
            var tooltipIdPtr = stackAlloc(4);
            var sampleIdPtr = stackAlloc(4);
            var numNamedParametersPtr = stackAlloc(4);
            var firstParameterIdPtr = stackAlloc(4);
            var found = exports3.hb_ot_layout_feature_get_name_ids(
              ptr,
              tableTag,
              featureIndex,
              labelIdPtr,
              tooltipIdPtr,
              sampleIdPtr,
              numNamedParametersPtr,
              firstParameterIdPtr
            );
            var names = null;
            if (found) {
              let uiLabelNameId = Module.HEAPU32[labelIdPtr / 4];
              let uiTooltipTextNameId = Module.HEAPU32[tooltipIdPtr / 4];
              let sampleTextNameId = Module.HEAPU32[sampleIdPtr / 4];
              let numNamedParameters = Module.HEAPU32[numNamedParametersPtr / 4];
              let firstParameterId = Module.HEAPU32[firstParameterIdPtr / 4];
              let paramUiLabelNameIds = Array(numNamedParameters).fill().map((_3, i2) => firstParameterId + i2);
              names = {
                uiLabelNameId: uiLabelNameId == HB_OT_NAME_ID_INVALID ? null : uiLabelNameId,
                uiTooltipTextNameId: uiTooltipTextNameId == HB_OT_NAME_ID_INVALID ? null : uiTooltipTextNameId,
                sampleTextNameId: sampleTextNameId == HB_OT_NAME_ID_INVALID ? null : sampleTextNameId,
                paramUiLabelNameIds
              };
            }
            stackRestore(sp2);
            return names;
          },
          /**
           * Free the object.
           */
          destroy: function() {
            exports3.hb_face_destroy(ptr);
          }
        };
      }
      var pathBuffer = "";
      function createFont(face, ptr) {
        var ptr = ptr ? exports3.hb_font_reference(ptr) : exports3.hb_font_create(face.ptr);
        var drawFuncsPtr = null;
        var moveToPtr = null;
        var lineToPtr = null;
        var cubicToPtr = null;
        var quadToPtr = null;
        var closePathPtr = null;
        function glyphToPath(glyphId) {
          if (!drawFuncsPtr) {
            var moveTo = function(dfuncs, draw_data, draw_state, to_x, to_y, user_data) {
              pathBuffer += `M${to_x},${to_y}`;
            };
            var lineTo = function(dfuncs, draw_data, draw_state, to_x, to_y, user_data) {
              pathBuffer += `L${to_x},${to_y}`;
            };
            var cubicTo = function(dfuncs, draw_data, draw_state, c1_x, c1_y, c2_x, c2_y, to_x, to_y, user_data) {
              pathBuffer += `C${c1_x},${c1_y} ${c2_x},${c2_y} ${to_x},${to_y}`;
            };
            var quadTo = function(dfuncs, draw_data, draw_state, c_x, c_y, to_x, to_y, user_data) {
              pathBuffer += `Q${c_x},${c_y} ${to_x},${to_y}`;
            };
            var closePath = function(dfuncs, draw_data, draw_state, user_data) {
              pathBuffer += "Z";
            };
            moveToPtr = addFunction(moveTo, "viiiffi");
            lineToPtr = addFunction(lineTo, "viiiffi");
            cubicToPtr = addFunction(cubicTo, "viiiffffffi");
            quadToPtr = addFunction(quadTo, "viiiffffi");
            closePathPtr = addFunction(closePath, "viiii");
            drawFuncsPtr = exports3.hb_draw_funcs_create();
            exports3.hb_draw_funcs_set_move_to_func(drawFuncsPtr, moveToPtr, 0, 0);
            exports3.hb_draw_funcs_set_line_to_func(drawFuncsPtr, lineToPtr, 0, 0);
            exports3.hb_draw_funcs_set_cubic_to_func(drawFuncsPtr, cubicToPtr, 0, 0);
            exports3.hb_draw_funcs_set_quadratic_to_func(drawFuncsPtr, quadToPtr, 0, 0);
            exports3.hb_draw_funcs_set_close_path_func(drawFuncsPtr, closePathPtr, 0, 0);
          }
          pathBuffer = "";
          exports3.hb_font_draw_glyph(ptr, glyphId, drawFuncsPtr, 0);
          return pathBuffer;
        }
        function glyphName(glyphId) {
          var sp2 = stackSave();
          var strSize = 256;
          var strPtr = stackAlloc(strSize);
          exports3.hb_font_glyph_to_string(ptr, glyphId, strPtr, strSize);
          var name = _utf8_ptr_to_string(strPtr);
          stackRestore(sp2);
          return name;
        }
        return {
          ptr,
          /**
           * Create a sub font.
           * @returns {object} Object representing the sub font.
           **/
          subFont: function() {
            return createFont(null, exports3.hb_font_create_sub_font(ptr));
          },
          /**
           * Return font horizontal extents.
           * @returns {object} Object with ascender, descender, and lineGap properties.
           **/
          hExtents: function() {
            var sp2 = stackSave();
            var extentsPtr = stackAlloc(12);
            exports3.hb_font_get_h_extents(ptr, extentsPtr);
            var extents = {
              ascender: Module.HEAP32[extentsPtr / 4],
              descender: Module.HEAP32[extentsPtr / 4 + 1],
              lineGap: Module.HEAP32[extentsPtr / 4 + 2]
            };
            stackRestore(sp2);
            return extents;
          },
          /**
           * Return font vertical extents.
           * @returns {object} Object with ascender, descender, and lineGap properties.
           **/
          vExtents: function() {
            var sp2 = stackSave();
            var extentsPtr = stackAlloc(12);
            exports3.hb_font_get_v_extents(ptr, extentsPtr);
            var extents = {
              ascender: Module.HEAP32[extentsPtr / 4],
              descender: Module.HEAP32[extentsPtr / 4 + 1],
              lineGap: Module.HEAP32[extentsPtr / 4 + 2]
            };
            stackRestore(sp2);
            return extents;
          },
          glyphName,
          glyphToPath,
          /**
           * Return glyph horizontal advance.
           * @param {number} glyphId ID of the requested glyph in the font.
           **/
          glyphHAdvance: function(glyphId) {
            return exports3.hb_font_get_glyph_h_advance(ptr, glyphId);
          },
          /**
           * Return glyph vertical advance.
           * @param {number} glyphId ID of the requested glyph in the font.
           **/
          glyphVAdvance: function(glyphId) {
            return exports3.hb_font_get_glyph_v_advance(ptr, glyphId);
          },
          /**
           * Return glyph horizontal origin.
           * @param {number} glyphId ID of the requested glyph in the font.
           **/
          glyphHOrigin: function(glyphId) {
            var sp2 = stackSave();
            let xPtr = stackAlloc(4);
            let yPtr = stackAlloc(4);
            let origin = null;
            if (exports3.hb_font_get_glyph_h_origin(ptr, glyphId, xPtr, yPtr)) {
              origin = [Module.HEAP32[xPtr / 4], Module.HEAP32[yPtr / 4]];
            }
            stackRestore(sp2);
            return origin;
          },
          /**
           * Return glyph vertical origin.
           * @param {number} glyphId ID of the requested glyph in the font.
           **/
          glyphVOrigin: function(glyphId) {
            var sp2 = stackSave();
            let xPtr = stackAlloc(4);
            let yPtr = stackAlloc(4);
            let origin = null;
            if (exports3.hb_font_get_glyph_v_origin(ptr, glyphId, xPtr, yPtr)) {
              origin = [Module.HEAP32[xPtr / 4], Module.HEAP32[yPtr / 4]];
            }
            stackRestore(sp2);
            return origin;
          },
          /**
           * Return glyph extents.
           * @param {number} glyphId ID of the requested glyph in the font.
           **/
          glyphExtents: function(glyphId) {
            var sp2 = stackSave();
            var extentsPtr = stackAlloc(16);
            var extents = null;
            if (exports3.hb_font_get_glyph_extents(ptr, glyphId, extentsPtr)) {
              extents = {
                xBearing: Module.HEAP32[extentsPtr / 4],
                yBearing: Module.HEAP32[extentsPtr / 4 + 1],
                width: Module.HEAP32[extentsPtr / 4 + 2],
                height: Module.HEAP32[extentsPtr / 4 + 3]
              };
            }
            stackRestore(sp2);
            return extents;
          },
          /**
           * Return glyph ID from name.
           * @param {string} name Name of the requested glyph in the font.
           **/
          glyphFromName: function(name) {
            var sp2 = stackSave();
            var glyphIdPtr = stackAlloc(4);
            var namePtr = _string_to_utf8_ptr(name);
            var glyphId = null;
            if (exports3.hb_font_get_glyph_from_name(ptr, namePtr.ptr, namePtr.length, glyphIdPtr)) {
              glyphId = Module.HEAPU32[glyphIdPtr / 4];
            }
            namePtr.free();
            stackRestore(sp2);
            return glyphId;
          },
          /**
          * Return a glyph as a JSON path string
          * based on format described on https://svgwg.org/specs/paths/#InterfaceSVGPathSegment
          * @param {number} glyphId ID of the requested glyph in the font.
          **/
          glyphToJson: function(glyphId) {
            var path2 = glyphToPath(glyphId);
            return path2.replace(/([MLQCZ])/g, "|$1 ").split("|").filter(function(x3) {
              return x3.length;
            }).map(function(x3) {
              var row = x3.split(/[ ,]/g);
              return { type: row[0], values: row.slice(1).filter(function(x4) {
                return x4.length;
              }).map(function(x4) {
                return +x4;
              }) };
            });
          },
          /**
          * Set the font's scale factor, affecting the position values returned from
          * shaping.
          * @param {number} xScale Units to scale in the X dimension.
          * @param {number} yScale Units to scale in the Y dimension.
          **/
          setScale: function(xScale, yScale) {
            exports3.hb_font_set_scale(ptr, xScale, yScale);
          },
          /**
           * Set the font's variations.
           * @param {object} variations Dictionary of variations to set
           **/
          setVariations: function(variations) {
            var entries = Object.entries(variations);
            var vars = exports3.malloc(8 * entries.length);
            entries.forEach(function(entry, i2) {
              Module.HEAPU32[vars / 4 + i2 * 2 + 0] = _hb_tag(entry[0]);
              Module.HEAPF32[vars / 4 + i2 * 2 + 1] = entry[1];
            });
            exports3.hb_font_set_variations(ptr, vars, entries.length);
            exports3.free(vars);
          },
          /**
          * Set the font's font functions.
          * @param {object} fontFuncs The font functions.
          **/
          setFuncs: function(fontFuncs) {
            exports3.hb_font_set_funcs(ptr, fontFuncs.ptr);
          },
          /**
          * Free the object.
          */
          destroy: function() {
            exports3.hb_font_destroy(ptr);
            if (drawFuncsPtr) {
              exports3.hb_draw_funcs_destroy(drawFuncsPtr);
              drawFuncsPtr = null;
              removeFunction(moveToPtr);
              removeFunction(lineToPtr);
              removeFunction(cubicToPtr);
              removeFunction(quadToPtr);
              removeFunction(closePathPtr);
            }
          }
        };
      }
      function createFontFuncs() {
        var ptr = exports3.hb_font_funcs_create();
        return {
          ptr,
          /**
          * Set the font's glyph extents function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} glyph The glyph ID.
          *
          * The function should return an object with the following properties, or null on failure:
          * @param {number} xBearing The x bearing of the glyph.
          * @param {number} yBearing The y bearing of the glyph.
          * @param {number} width The width of the glyph.
          * @param {number} height The height of the glyph.
          **/
          setGlyphExtentsFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, glyph, extentsPtr, user_data) {
              let font = createFont(null, fontPtr);
              let extents = func(font, glyph);
              font.destroy();
              if (extents) {
                Module.HEAP32[extentsPtr / 4] = extents.xBearing;
                Module.HEAP32[extentsPtr / 4 + 1] = extents.yBearing;
                Module.HEAP32[extentsPtr / 4 + 2] = extents.width;
                Module.HEAP32[extentsPtr / 4 + 3] = extents.height;
                return 1;
              }
              return 0;
            }, "ippipp");
            exports3.hb_font_funcs_set_glyph_extents_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph from name function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {string} name The glyph name.
          *
          * The function should return an object with the following properties, or null on failure:
          * @param {number} glyph The glyph ID.
          **/
          setGlyphFromNameFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, namePtr, len, glyphPtr, user_data) {
              let font = createFont(null, fontPtr);
              let name = _utf8_ptr_to_string(namePtr, len);
              let glyph = func(font, name);
              font.destroy();
              if (glyph) {
                Module.HEAPU32[glyphPtr / 4] = glyph;
                return 1;
              }
              return 0;
            }, "ipppipp");
            exports3.hb_font_funcs_set_glyph_from_name_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph horizontal advance function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} glyph The glyph ID.
          *
          * The function should return the horizontal advance of the glyph.
          **/
          setGlyphHAdvanceFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, glyph, user_data) {
              let font = createFont(null, fontPtr);
              let advance = func(font, glyph);
              font.destroy();
              return advance;
            }, "ippip");
            exports3.hb_font_funcs_set_glyph_h_advance_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph vertical advance function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} glyph The glyph ID.
          *
          * The function should return the vertical advance of the glyph.
          **/
          setGlyphVAdvanceFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, glyph, user_data) {
              let font = createFont(null, fontPtr);
              let advance = func(font, glyph);
              font.destroy();
              return advance;
            }, "ippip");
            exports3.hb_font_funcs_set_glyph_v_advance_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph horizontal origin function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} glyph The glyph ID.
          *
          * The function should return the x and y horizontal origin of the glyph, or null on failure.
          **/
          setGlyphHOriginFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, glyph, xPtr, yPtr, user_data) {
              let font = createFont(null, fontPtr);
              let origin = func(font, glyph);
              font.destroy();
              if (origin) {
                Module.HEAP32[xPtr / 4] = origin[0];
                Module.HEAP32[yPtr / 4] = origin[1];
                return 1;
              }
              return 0;
            }, "ippippp");
            exports3.hb_font_funcs_set_glyph_h_origin_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph vertical origin function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} glyph The glyph ID.
          *
          * The function should return the x and y vertical origin of the glyph, or null on failure.
          **/
          setGlyphVOriginFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, glyph, xPtr, yPtr, user_data) {
              let font = createFont(null, fontPtr);
              let origin = func(font, glyph);
              font.destroy();
              if (origin) {
                Module.HEAP32[xPtr / 4] = origin[0];
                Module.HEAP32[yPtr / 4] = origin[1];
                return 1;
              }
              return 0;
            }, "ippippp");
            exports3.hb_font_funcs_set_glyph_v_origin_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph horizontal kerning function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} firstGlyph The first glyph ID.
          * @param {number} secondGlyph The second glyph ID.
          *
          * The function should return the horizontal kerning of the glyphs.
          **/
          setGlyphHKerningFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, firstGlyph, secondGlyph, user_data) {
              let font = createFont(null, fontPtr);
              let kerning = func(font, firstGlyph, secondGlyph);
              font.destroy();
              return kerning;
            }, "ippiip");
            exports3.hb_font_funcs_set_glyph_h_kerning_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's glyph name function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} glyph The glyph ID.
          *
          * The function should return the name of the glyph, or null on failure.
          **/
          setGlyphNameFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, glyph, namePtr, size, user_data) {
              let font = createFont(null, fontPtr);
              let name = func(font, glyph);
              font.destroy();
              if (name) {
                utf8Encoder.encodeInto(name, Module.HEAPU8.subarray(namePtr, namePtr + size));
                return 1;
              }
              return 0;
            }, "ippipip");
            exports3.hb_font_funcs_set_glyph_name_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's nominal glyph function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} unicode The unicode.
          *
          * The function should return the nominal glyph of the unicode, or null on failure.
          **/
          setNominalGlyphFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, unicode, glyphPtr, user_data) {
              let font = createFont(null, fontPtr);
              let glyph = func(font, unicode);
              font.destroy();
              if (glyph) {
                Module.HEAPU32[glyphPtr / 4] = glyph;
                return 1;
              }
              return 0;
            }, "ippipp");
            exports3.hb_font_funcs_set_nominal_glyph_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's variation glyph function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          * @param {number} unicode The unicode.
          * @param {number} variationSelector The variation selector.
          *
          * The function should return the variation glyph of the unicode, or null on failure.
          **/
          setVariationGlyphFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, unicode, variationSelector, glyphPtr, user_data) {
              let font = createFont(null, fontPtr);
              let glyph = func(font, unicode, variationSelector);
              font.destroy();
              if (glyph) {
                Module.HEAPU32[glyphPtr / 4] = glyph;
                return 1;
              }
              return 0;
            }, "ippiipp");
            exports3.hb_font_funcs_set_variation_glyph_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's horizontal extents function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          *
          * The function should return an object with the following properties, or null on failure:
          * @param {number} ascender The ascender of the font.
          * @param {number} descender The descender of the font.
          * @param {number} lineGap The line gap of the font.
          **/
          setFontHExtentsFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, extentsPtr, user_data) {
              let font = createFont(null, fontPtr);
              let extents = func(font);
              font.destroy();
              if (extents) {
                Module.HEAP32[extentsPtr / 4] = extents.ascender;
                Module.HEAP32[extentsPtr / 4 + 1] = extents.descender;
                Module.HEAP32[extentsPtr / 4 + 2] = extents.lineGap;
                return 1;
              }
              return 0;
            }, "ipppp");
            exports3.hb_font_funcs_set_font_h_extents_func(ptr, funcPtr, 0, 0);
          },
          /**
          * Set the font's vertical extents function.
          * @param {function} func The function to set.
          *
          * The function takes the following arguments:
          * @param {object} font The font.
          *
          * The function should return an object with the following properties, or null on failure:
          * @param {number} ascender The ascender of the font.
          * @param {number} descender The descender of the font.
          * @param {number} lineGap The line gap of the font.
          **/
          setFontVExtentsFunc: function(func) {
            let funcPtr = addFunction(function(fontPtr, font_data, extentsPtr, user_data) {
              let font = createFont(null, fontPtr);
              let extents = func(font);
              font.destroy();
              if (extents) {
                Module.HEAP32[extentsPtr / 4] = extents.ascender;
                Module.HEAP32[extentsPtr / 4 + 1] = extents.descender;
                Module.HEAP32[extentsPtr / 4 + 2] = extents.lineGap;
                return 1;
              }
              return 0;
            }, "ipppp");
            exports3.hb_font_funcs_set_font_v_extents_func(ptr, funcPtr, 0, 0);
          },
          destroy: function() {
            exports3.hb_font_funcs_destroy(ptr);
          }
        };
      }
      function createBuffer(ptr) {
        var ptr = ptr ? exports3.hb_buffer_reference(ptr) : exports3.hb_buffer_create();
        return {
          ptr,
          /**
          * Add text to the buffer.
          * @param {string} text Text to be added to the buffer.
          * @param {number} itemOffset Optional. The offset of the first character to add to the buffer.
          * @param {number} itemLength Optional. The number of characters to add to the buffer, or null for the end of text.
          **/
          addText: function(text, itemOffset = 0, itemLength = null) {
            const str = _string_to_utf16_ptr(text);
            if (itemLength == null) itemLength = str.length;
            exports3.hb_buffer_add_utf16(ptr, str.ptr, str.length, itemOffset, itemLength);
            str.free();
          },
          /**
          * Add code points to the buffer.
          * @param {number[]} codePoints Array of code points to be added to the buffer.
          * @param {number} itemOffset Optional. The offset of the first code point to add to the buffer.
          * @param {number} itemLength Optional. The number of code points to add to the buffer, or null for the end of the array.
          */
          addCodePoints: function(codePoints, itemOffset = 0, itemLength = null) {
            let codePointsPtr = exports3.malloc(codePoints.length * 4);
            let codePointsArray = Module.HEAPU32.subarray(codePointsPtr / 4, codePointsPtr / 4 + codePoints.length);
            codePointsArray.set(codePoints);
            if (itemLength == null) itemLength = codePoints.length;
            exports3.hb_buffer_add_codepoints(ptr, codePointsPtr, codePoints.length, itemOffset, itemLength);
            exports3.free(codePointsPtr);
          },
          /**
          * Set buffer script, language and direction.
          *
          * This needs to be done before shaping.
          **/
          guessSegmentProperties: function() {
            return exports3.hb_buffer_guess_segment_properties(ptr);
          },
          /**
          * Set buffer direction explicitly.
          * @param {string} direction: One of "ltr", "rtl", "ttb" or "btt"
          */
          setDirection: function(dir) {
            exports3.hb_buffer_set_direction(ptr, {
              ltr: 4,
              rtl: 5,
              ttb: 6,
              btt: 7
            }[dir] || 0);
          },
          /**
          * Set buffer flags explicitly.
          * @param {string[]} flags: A list of strings which may be either:
          * "DEFAULT"
          * "BOT"
          * "EOT"
          * "PRESERVE_DEFAULT_IGNORABLES"
          * "REMOVE_DEFAULT_IGNORABLES"
          * "DO_NOT_INSERT_DOTTED_CIRCLE"
          * "VERIFY"
          * "PRODUCE_UNSAFE_TO_CONCAT"
          * "PRODUCE_SAFE_TO_INSERT_TATWEEL"
          */
          setFlags: function(flags) {
            var flagsValue = 0;
            flags.forEach((s2) => flagsValue |= bufferFlags[s2] || 0);
            exports3.hb_buffer_set_flags(ptr, flagsValue);
          },
          /**
          * Set buffer language explicitly.
          * @param {string} language: The buffer language
          */
          setLanguage: function(language) {
            var str = _string_to_ascii_ptr(language);
            exports3.hb_buffer_set_language(ptr, exports3.hb_language_from_string(str.ptr, -1));
            str.free();
          },
          /**
          * Set buffer script explicitly.
          * @param {string} script: The buffer script
          */
          setScript: function(script) {
            var str = _string_to_ascii_ptr(script);
            exports3.hb_buffer_set_script(ptr, exports3.hb_script_from_string(str.ptr, -1));
            str.free();
          },
          /**
          * Set the Harfbuzz clustering level.
          *
          * Affects the cluster values returned from shaping.
          * @param {number} level: Clustering level. See the Harfbuzz manual chapter
          * on Clusters.
          **/
          setClusterLevel: function(level) {
            exports3.hb_buffer_set_cluster_level(ptr, level);
          },
          /**
          * Reset the buffer to its initial status.
          **/
          reset: function() {
            exports3.hb_buffer_reset(ptr);
          },
          /**
          * Similar to reset(), but does not clear the Unicode functions and the
          * replacement code point.
          **/
          clearContents: function() {
            exports3.hb_buffer_clear_contents(ptr);
          },
          /**
          * Set message func.
          * @param {function} func The function to set.
          *
          * The function should accept three arguments:
          * @param {object} buffer The buffer
          * @param {object} font The font
          * @param {string} message The message
          *
          * Returning false from this function will skip this shaping step and move to the next one.
          */
          setMessageFunc: function(func) {
            var traceFunc = function(bufferPtr, fontPtr, messagePtr, user_data) {
              var message = _utf8_ptr_to_string(messagePtr);
              var buffer = createBuffer(bufferPtr);
              var font = createFont(null, fontPtr);
              var result = func(buffer, font, message);
              buffer.destroy();
              font.destroy();
              return result ? 1 : 0;
            };
            var traceFuncPtr = addFunction(traceFunc, "iiiii");
            exports3.hb_buffer_set_message_func(ptr, traceFuncPtr, 0, 0);
          },
          /**
          * Get the the number of items in the buffer.
          * @returns {number} The buffer length.
          */
          getLength: function() {
            return exports3.hb_buffer_get_length(ptr);
          },
          /**
          * Get the glyph information from the buffer.
          * @returns {object[]} The glyph information.
          *
          * The glyph information is returned as an array of objects with the
          * following properties:
          * @param {number} codepoint either a Unicode code point (before shaping) or a glyph index (after shaping).
          * @param {number} cluster The cluster index of the glyph.
          */
          getGlyphInfos: function() {
            var infosPtr32 = exports3.hb_buffer_get_glyph_infos(ptr, 0) / 4;
            var infosArray = Module.HEAPU32.subarray(infosPtr32, infosPtr32 + this.getLength() * 5);
            var infos = [];
            for (var i2 = 0; i2 < infosArray.length; i2 += 5) {
              infos.push({
                codepoint: infosArray[i2],
                cluster: infosArray[i2 + 2]
              });
            }
            return infos;
          },
          /**
          * Get the glyph positions from the buffer.
          * @returns {object[]} The glyph positions.
          *
          * The glyph positions are returned as an array of objects with the
          * following properties:
          * @param {number} x_advance The x advance of the glyph.
          * @param {number} y_advance The y advance of the glyph.
          * @param {number} x_offset The x offset of the glyph.
          * @param {number} y_offset The y offset of the glyph.
          *
          */
          getGlyphPositions: function() {
            var positionsPtr32 = exports3.hb_buffer_get_glyph_positions(ptr, 0) / 4;
            if (positionsPtr32 == 0) {
              return [];
            }
            var positionsArray = Module.HEAP32.subarray(positionsPtr32, positionsPtr32 + this.getLength() * 5);
            var positions = [];
            for (var i2 = 0; i2 < positionsArray.length; i2 += 5) {
              positions.push({
                x_advance: positionsArray[i2],
                y_advance: positionsArray[i2 + 1],
                x_offset: positionsArray[i2 + 2],
                y_offset: positionsArray[i2 + 3]
              });
            }
            return positions;
          },
          /**
          * Get the glyph information and positions from the buffer.
          * @returns {object[]} The glyph information and positions.
          *
          * The glyph information is returned as an array of objects with the
          * properties from getGlyphInfos and getGlyphPositions combined.
          */
          getGlyphInfosAndPositions: function() {
            var infosPtr32 = exports3.hb_buffer_get_glyph_infos(ptr, 0) / 4;
            var infosArray = Module.HEAPU32.subarray(infosPtr32, infosPtr32 + this.getLength() * 5);
            var positionsPtr32 = exports3.hb_buffer_get_glyph_positions(ptr, 0) / 4;
            var positionsArray = positionsPtr32 ? Module.HEAP32.subarray(positionsPtr32, positionsPtr32 + this.getLength() * 5) : null;
            var out = [];
            for (var i2 = 0; i2 < infosArray.length; i2 += 5) {
              var info = {
                codepoint: infosArray[i2],
                cluster: infosArray[i2 + 2]
              };
              for (var [name, idx] of [["mask", 1], ["var1", 3], ["var2", 4]]) {
                Object.defineProperty(info, name, {
                  value: infosArray[i2 + idx],
                  enumerable: false
                });
              }
              if (positionsArray) {
                info.x_advance = positionsArray[i2];
                info.y_advance = positionsArray[i2 + 1];
                info.x_offset = positionsArray[i2 + 2];
                info.y_offset = positionsArray[i2 + 3];
                Object.defineProperty(info, "var", {
                  value: positionsArray[i2 + 4],
                  enumerable: false
                });
              }
              out.push(info);
            }
            return out;
          },
          /**
          * Update the glyph positions in the buffer.
          * @param {object[]} positions The new glyph positions.
          *
          * WARNING: Do not use unless you know what you are doing.
          */
          updateGlyphPositions: function(positions) {
            var positionsPtr32 = exports3.hb_buffer_get_glyph_positions(ptr, 0) / 4;
            if (positionsPtr32 == 0) {
              return;
            }
            var len = Math.min(positions.length, this.getLength());
            var positionsArray = Module.HEAP32.subarray(positionsPtr32, positionsPtr32 + len * 5);
            for (var i2 = 0; i2 < len; i2++) {
              positionsArray[i2 * 5] = positions[i2].x_advance;
              positionsArray[i2 * 5 + 1] = positions[i2].y_advance;
              positionsArray[i2 * 5 + 2] = positions[i2].x_offset;
              positionsArray[i2 * 5 + 3] = positions[i2].y_offset;
            }
          },
          /**
          * Serialize the buffer contents to a string.
          * @param {object} font Optional. The font to use for serialization.
          * @param {number} start Optional. The starting index of the glyphs to serialize.
          * @param {number} end Optional. The ending index of the glyphs to serialize.
          * @param {string} format Optional. The format to serialize the buffer contents to.
          * @param {string[]} flags Optional. The flags to use for serialization. A list of strings which may be either:
          * "DEFAULT"
          * "NO_CLUSTERS"
          * "NO_POSITIONS"
          * "NO_GLYPH_NAMES"
          * "GLYPH_EXTENTS"
          * "GLYPH_FLAGS"
          * "NO_ADVANCES"
          *
          * @returns {string} The serialized buffer contents.
          */
          serialize: function(font, start = 0, end = null, format = "TEXT", flags = []) {
            var sp2 = stackSave();
            if (end == null) end = this.getLength();
            var bufLen = 32 * 1024;
            var bufPtr = exports3.malloc(bufLen);
            var bufConsumedPtr = stackAlloc(4);
            var flagsValue = 0;
            flags.forEach((flag) => flagsValue |= bufferSerializeFlags[flag] || 0);
            var result = "";
            while (start < end) {
              start += exports3.hb_buffer_serialize(
                ptr,
                start,
                end,
                bufPtr,
                bufLen,
                bufConsumedPtr,
                font ? font.ptr : 0,
                _hb_tag(format),
                flagsValue
              );
              var bufConsumed = Module.HEAPU32[bufConsumedPtr / 4];
              if (bufConsumed == 0) break;
              result += _utf8_ptr_to_string(bufPtr, bufConsumed);
            }
            exports3.free(bufPtr);
            stackRestore(sp2);
            return result;
          },
          /**
          * Return the buffer content type.
          *
          * @returns {string} The buffer content type. One of:
          * "INVALID"
          * "UNICODE"
          * "GLYPHS"
          */
          getContentType: function() {
            return bufferContentType[exports3.hb_buffer_get_content_type(ptr)];
          },
          /**
          * Return the buffer contents as a JSON object.
          *
          * After shaping, this function will return an array of glyph information
          * objects. Each object will have the following attributes:
          *
          *   - g: The glyph ID
          *   - cl: The cluster ID
          *   - ax: Advance width (width to advance after this glyph is painted)
          *   - ay: Advance height (height to advance after this glyph is painted)
          *   - dx: X displacement (adjustment in X dimension when painting this glyph)
          *   - dy: Y displacement (adjustment in Y dimension when painting this glyph)
          *   - flags: Glyph flags like `HB_GLYPH_FLAG_UNSAFE_TO_BREAK` (0x1)
          **/
          json: function() {
            var buf = this.serialize(null, 0, null, "JSON", ["NO_GLYPH_NAMES", "GLYPH_FLAGS"]);
            var json = JSON.parse(buf);
            json.forEach(function(glyph) {
              glyph.flags = glyph.fl || 0;
              delete glyph.fl;
            });
            return json;
          },
          /**
          * Free the object.
          */
          destroy: function() {
            exports3.hb_buffer_destroy(ptr);
          }
        };
      }
      function shape(font, buffer, features) {
        var featuresPtr = 0;
        var featuresLen = 0;
        if (features) {
          features = features.split(",");
          featuresPtr = exports3.malloc(16 * features.length);
          features.forEach(function(feature, i2) {
            var str = _string_to_ascii_ptr(feature);
            if (exports3.hb_feature_from_string(str.ptr, -1, featuresPtr + featuresLen * 16))
              featuresLen++;
            str.free();
          });
        }
        exports3.hb_shape(font.ptr, buffer.ptr, featuresPtr, featuresLen);
        if (featuresPtr)
          exports3.free(featuresPtr);
      }
      function shapeWithTrace(font, buffer, features, stop_at, stop_phase) {
        var trace = [];
        var currentPhase = TRACE_PHASE_DONT_STOP;
        var stopping = false;
        buffer.setMessageFunc((buffer2, font2, message) => {
          if (message.startsWith("start table GSUB"))
            currentPhase = TRACE_PHASE_GSUB;
          else if (message.startsWith("start table GPOS"))
            currentPhase = TRACE_PHASE_GPOS;
          if (currentPhase != stop_phase)
            stopping = false;
          if (stop_phase != TRACE_PHASE_DONT_STOP && currentPhase == stop_phase && message.startsWith("end lookup " + stop_at))
            stopping = true;
          if (stopping)
            return false;
          var traceBuf = buffer2.serialize(font2, 0, null, "JSON", ["NO_GLYPH_NAMES"]);
          trace.push({
            m: message,
            t: JSON.parse(traceBuf),
            glyphs: buffer2.getContentType() == "GLYPHS"
          });
          return true;
        });
        shape(font, buffer, features);
        return trace;
      }
      function version() {
        var sp2 = stackSave();
        var versionPtr = stackAlloc(12);
        exports3.hb_version(versionPtr, versionPtr + 4, versionPtr + 8);
        var version2 = {
          major: Module.HEAPU32[versionPtr / 4],
          minor: Module.HEAPU32[(versionPtr + 4) / 4],
          micro: Module.HEAPU32[(versionPtr + 8) / 4]
        };
        stackRestore(sp2);
        return version2;
      }
      function version_string() {
        var versionPtr = exports3.hb_version_string();
        return _utf8_ptr_to_string(versionPtr);
      }
      function otTagToScript(tag) {
        var hbTag = _hb_tag(tag);
        var script = exports3.hb_ot_tag_to_script(hbTag);
        return _hb_untag(script);
      }
      function otTagToLanguage(tag) {
        var hbTag = _hb_tag(tag);
        var language = exports3.hb_ot_tag_to_language(hbTag);
        return _language_to_string(language);
      }
      return {
        createBlob,
        createFace,
        createFont,
        createFontFuncs,
        createBuffer,
        shape,
        shapeWithTrace,
        version,
        version_string,
        otTagToScript,
        otTagToLanguage
      };
    }
    try {
      module.exports = hbjs;
    } catch (e2) {
    }
  }
});

// node_modules/harfbuzzjs/hb.js
var require_hb = __commonJS({
  "node_modules/harfbuzzjs/hb.js"(exports2, module) {
    var createHarfBuzz = (() => {
      var _scriptName = typeof document != "undefined" ? document.currentScript?.src : void 0;
      return async function(moduleArg = {}) {
        var moduleRtn;
        var Module = moduleArg;
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != "undefined";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && process.versions?.node && process.type != "renderer";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        if (typeof __filename != "undefined") {
          _scriptName = __filename;
        } else if (ENVIRONMENT_IS_WORKER) {
          _scriptName = self.location.href;
        }
        var scriptDirectory = "";
        function locateFile(path2) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path2, scriptDirectory);
          }
          return scriptDirectory + path2;
        }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
          var fs3 = __require("fs");
          scriptDirectory = __dirname + "/";
          readBinary = (filename) => {
            filename = isFileURI(filename) ? new URL(filename) : filename;
            var ret = fs3.readFileSync(filename);
            return ret;
          };
          readAsync = async (filename, binary = true) => {
            filename = isFileURI(filename) ? new URL(filename) : filename;
            var ret = fs3.readFileSync(filename, binary ? void 0 : "utf8");
            return ret;
          };
          if (process.argv.length > 1) {
            process.argv[1].replace(/\\/g, "/");
          }
          process.argv.slice(2);
          quit_ = (status, toThrow) => {
            process.exitCode = status;
            throw toThrow;
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          try {
            scriptDirectory = new URL(".", _scriptName).href;
          } catch {
          }
          {
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = async (url) => {
              if (isFileURI(url)) {
                return new Promise((resolve, reject) => {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url, true);
                  xhr.responseType = "arraybuffer";
                  xhr.onload = () => {
                    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                      resolve(xhr.response);
                      return;
                    }
                    reject(xhr.status);
                  };
                  xhr.onerror = reject;
                  xhr.send(null);
                });
              }
              var response = await fetch(url, { credentials: "same-origin" });
              if (response.ok) {
                return response.arrayBuffer();
              }
              throw new Error(response.status + " : " + response.url);
            };
          }
        } else ;
        console.log.bind(console);
        var err3 = console.error.bind(console);
        var wasmBinary;
        var ABORT = false;
        var EXITSTATUS;
        var isFileURI = (filename) => filename.startsWith("file://");
        var readyPromiseResolve, readyPromiseReject;
        var wasmMemory;
        var HEAPU8;
        var runtimeInitialized = false;
        function updateMemoryViews() {
          var b2 = wasmMemory.buffer;
          Module["HEAP8"] = new Int8Array(b2);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(b2);
          Module["HEAPU16"] = new Uint16Array(b2);
          Module["HEAP32"] = new Int32Array(b2);
          Module["HEAPU32"] = new Uint32Array(b2);
          Module["HEAPF32"] = new Float32Array(b2);
          new BigInt64Array(b2);
          new BigUint64Array(b2);
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(onPreRuns);
        }
        function initRuntime() {
          runtimeInitialized = true;
          wasmExports["__wasm_call_ctors"]();
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(onPostRuns);
        }
        var runDependencies = 0;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          Module["monitorRunDependencies"]?.(runDependencies);
        }
        function removeRunDependency(id) {
          runDependencies--;
          Module["monitorRunDependencies"]?.(runDependencies);
          if (runDependencies == 0) {
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          Module["onAbort"]?.(what);
          what = "Aborted(" + what + ")";
          err3(what);
          ABORT = true;
          what += ". Build with -sASSERTIONS for more info.";
          var e2 = new WebAssembly.RuntimeError(what);
          readyPromiseReject?.(e2);
          throw e2;
        }
        var wasmBinaryFile;
        function findWasmBinary() {
          return locateFile("hb.wasm");
        }
        function getBinarySync(file) {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        async function getWasmBinary(binaryFile) {
          if (!wasmBinary) {
            try {
              var response = await readAsync(binaryFile);
              return new Uint8Array(response);
            } catch {
            }
          }
          return getBinarySync(binaryFile);
        }
        async function instantiateArrayBuffer(binaryFile, imports) {
          try {
            var binary = await getWasmBinary(binaryFile);
            var instance = await WebAssembly.instantiate(binary, imports);
            return instance;
          } catch (reason) {
            err3(`failed to asynchronously prepare wasm: ${reason}`);
            abort(reason);
          }
        }
        async function instantiateAsync(binary, binaryFile, imports) {
          if (!binary && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) {
            try {
              var response = fetch(binaryFile, { credentials: "same-origin" });
              var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
              return instantiationResult;
            } catch (reason) {
              err3(`wasm streaming compile failed: ${reason}`);
              err3("falling back to ArrayBuffer instantiation");
            }
          }
          return instantiateArrayBuffer(binaryFile, imports);
        }
        function getWasmImports() {
          return { env: wasmImports, wasi_snapshot_preview1: wasmImports };
        }
        async function createWasm() {
          function receiveInstance(instance, module2) {
            wasmExports = instance.exports;
            Module["wasmExports"] = wasmExports;
            wasmMemory = wasmExports["memory"];
            updateMemoryViews();
            wasmTable = wasmExports["__indirect_function_table"];
            assignWasmExports(wasmExports);
            removeRunDependency();
            return wasmExports;
          }
          addRunDependency();
          function receiveInstantiationResult(result2) {
            return receiveInstance(result2["instance"]);
          }
          var info = getWasmImports();
          if (Module["instantiateWasm"]) {
            return new Promise((resolve, reject) => {
              Module["instantiateWasm"](info, (mod, inst) => {
                resolve(receiveInstance(mod));
              });
            });
          }
          wasmBinaryFile ??= findWasmBinary();
          var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
          var exports3 = receiveInstantiationResult(result);
          return exports3;
        }
        class ExitStatus {
          name = "ExitStatus";
          constructor(status) {
            this.message = `Program terminated with exit(${status})`;
            this.status = status;
          }
        }
        var callRuntimeCallbacks = (callbacks) => {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        };
        var onPostRuns = [];
        var addOnPostRun = (cb) => onPostRuns.push(cb);
        var onPreRuns = [];
        var addOnPreRun = (cb) => onPreRuns.push(cb);
        var noExitRuntime = true;
        var stackRestore = (val) => __emscripten_stack_restore(val);
        var stackSave = () => _emscripten_stack_get_current();
        var __abort_js = () => abort("");
        var runtimeKeepaliveCounter = 0;
        var __emscripten_runtime_keepalive_clear = () => {
          noExitRuntime = false;
          runtimeKeepaliveCounter = 0;
        };
        var timers = {};
        var handleException = (e2) => {
          if (e2 instanceof ExitStatus || e2 == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e2);
        };
        var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
        var _proc_exit = (code) => {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            Module["onExit"]?.(code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        };
        var exitJS = (status, implicit) => {
          EXITSTATUS = status;
          _proc_exit(status);
        };
        var _exit = exitJS;
        var maybeExit = () => {
          if (!keepRuntimeAlive()) {
            try {
              _exit(EXITSTATUS);
            } catch (e2) {
              handleException(e2);
            }
          }
        };
        var callUserCallback = (func) => {
          if (ABORT) {
            return;
          }
          try {
            func();
            maybeExit();
          } catch (e2) {
            handleException(e2);
          }
        };
        var _emscripten_get_now = () => performance.now();
        var __setitimer_js = (which, timeout_ms) => {
          if (timers[which]) {
            clearTimeout(timers[which].id);
            delete timers[which];
          }
          if (!timeout_ms) return 0;
          var id = setTimeout(() => {
            delete timers[which];
            callUserCallback(() => __emscripten_timeout(which, _emscripten_get_now()));
          }, timeout_ms);
          timers[which] = { id, timeout_ms };
          return 0;
        };
        var getHeapMax = () => 2147483648;
        var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
        var growMemory = (size) => {
          var oldHeapSize = wasmMemory.buffer.byteLength;
          var pages = (size - oldHeapSize + 65535) / 65536 | 0;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e2) {
          }
        };
        var _emscripten_resize_heap = (requestedSize) => {
          var oldSize = HEAPU8.length;
          requestedSize >>>= 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = growMemory(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        };
        var uleb128EncodeWithLen = (arr) => {
          const n2 = arr.length;
          return [n2 % 128 | 128, n2 >> 7, ...arr];
        };
        var wasmTypeCodes = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
        var generateTypePack = (types) => uleb128EncodeWithLen(Array.from(types, (type) => {
          var code = wasmTypeCodes[type];
          return code;
        }));
        var convertJsFunctionToWasm = (func, sig) => {
          var bytes = Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, ...uleb128EncodeWithLen([1, 96, ...generateTypePack(sig.slice(1)), ...generateTypePack(sig[0] === "v" ? "" : sig[0])]), 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
          var module2 = new WebAssembly.Module(bytes);
          var instance = new WebAssembly.Instance(module2, { e: { f: func } });
          var wrappedFunc = instance.exports["f"];
          return wrappedFunc;
        };
        var wasmTable;
        var getWasmTableEntry = (funcPtr) => wasmTable.get(funcPtr);
        var updateTableMap = (offset, count) => {
          if (functionsInTableMap) {
            for (var i2 = offset; i2 < offset + count; i2++) {
              var item = getWasmTableEntry(i2);
              if (item) {
                functionsInTableMap.set(item, i2);
              }
            }
          }
        };
        var functionsInTableMap;
        var getFunctionAddress = (func) => {
          if (!functionsInTableMap) {
            functionsInTableMap = /* @__PURE__ */ new WeakMap();
            updateTableMap(0, wasmTable.length);
          }
          return functionsInTableMap.get(func) || 0;
        };
        var freeTableIndexes = [];
        var getEmptyTableSlot = () => {
          if (freeTableIndexes.length) {
            return freeTableIndexes.pop();
          }
          return wasmTable["grow"](1);
        };
        var setWasmTableEntry = (idx, func) => wasmTable.set(idx, func);
        var addFunction = (func, sig) => {
          var rtn = getFunctionAddress(func);
          if (rtn) {
            return rtn;
          }
          var ret = getEmptyTableSlot();
          try {
            setWasmTableEntry(ret, func);
          } catch (err4) {
            if (!(err4 instanceof TypeError)) {
              throw err4;
            }
            var wrapped = convertJsFunctionToWasm(func, sig);
            setWasmTableEntry(ret, wrapped);
          }
          functionsInTableMap.set(func, ret);
          return ret;
        };
        var removeFunction = (index) => {
          functionsInTableMap.delete(getWasmTableEntry(index));
          setWasmTableEntry(index, null);
          freeTableIndexes.push(index);
        };
        var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
        {
          if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
          if (Module["print"]) Module["print"];
          if (Module["printErr"]) err3 = Module["printErr"];
          if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
          if (Module["arguments"]) Module["arguments"];
          if (Module["thisProgram"]) Module["thisProgram"];
        }
        Module["wasmExports"] = wasmExports;
        Module["stackSave"] = stackSave;
        Module["stackRestore"] = stackRestore;
        Module["stackAlloc"] = stackAlloc;
        Module["addFunction"] = addFunction;
        Module["removeFunction"] = removeFunction;
        var __emscripten_timeout, __emscripten_stack_restore, __emscripten_stack_alloc, _emscripten_stack_get_current;
        function assignWasmExports(wasmExports2) {
          Module["_hb_blob_create"] = wasmExports2["hb_blob_create"];
          Module["_hb_blob_destroy"] = wasmExports2["hb_blob_destroy"];
          Module["_hb_blob_get_length"] = wasmExports2["hb_blob_get_length"];
          Module["_hb_blob_get_data"] = wasmExports2["hb_blob_get_data"];
          Module["_hb_buffer_serialize"] = wasmExports2["hb_buffer_serialize"];
          Module["_hb_buffer_create"] = wasmExports2["hb_buffer_create"];
          Module["_hb_buffer_reset"] = wasmExports2["hb_buffer_reset"];
          Module["_hb_buffer_reference"] = wasmExports2["hb_buffer_reference"];
          Module["_hb_buffer_destroy"] = wasmExports2["hb_buffer_destroy"];
          Module["_hb_buffer_get_content_type"] = wasmExports2["hb_buffer_get_content_type"];
          Module["_hb_buffer_set_direction"] = wasmExports2["hb_buffer_set_direction"];
          Module["_hb_buffer_set_script"] = wasmExports2["hb_buffer_set_script"];
          Module["_hb_buffer_set_language"] = wasmExports2["hb_buffer_set_language"];
          Module["_hb_buffer_set_flags"] = wasmExports2["hb_buffer_set_flags"];
          Module["_hb_buffer_set_cluster_level"] = wasmExports2["hb_buffer_set_cluster_level"];
          Module["_hb_buffer_clear_contents"] = wasmExports2["hb_buffer_clear_contents"];
          Module["_hb_buffer_get_length"] = wasmExports2["hb_buffer_get_length"];
          Module["_hb_buffer_get_glyph_infos"] = wasmExports2["hb_buffer_get_glyph_infos"];
          Module["_hb_buffer_get_glyph_positions"] = wasmExports2["hb_buffer_get_glyph_positions"];
          Module["_hb_glyph_info_get_glyph_flags"] = wasmExports2["hb_glyph_info_get_glyph_flags"];
          Module["_hb_buffer_guess_segment_properties"] = wasmExports2["hb_buffer_guess_segment_properties"];
          Module["_hb_buffer_add_utf8"] = wasmExports2["hb_buffer_add_utf8"];
          Module["_hb_buffer_add_utf16"] = wasmExports2["hb_buffer_add_utf16"];
          Module["_hb_buffer_add_codepoints"] = wasmExports2["hb_buffer_add_codepoints"];
          Module["_hb_buffer_set_message_func"] = wasmExports2["hb_buffer_set_message_func"];
          Module["_hb_language_from_string"] = wasmExports2["hb_language_from_string"];
          Module["_hb_language_to_string"] = wasmExports2["hb_language_to_string"];
          Module["_hb_script_from_string"] = wasmExports2["hb_script_from_string"];
          Module["_hb_version"] = wasmExports2["hb_version"];
          Module["_hb_version_string"] = wasmExports2["hb_version_string"];
          Module["_hb_feature_from_string"] = wasmExports2["hb_feature_from_string"];
          Module["_malloc"] = wasmExports2["malloc"];
          Module["_free"] = wasmExports2["free"];
          Module["_hb_draw_funcs_set_move_to_func"] = wasmExports2["hb_draw_funcs_set_move_to_func"];
          Module["_hb_draw_funcs_set_line_to_func"] = wasmExports2["hb_draw_funcs_set_line_to_func"];
          Module["_hb_draw_funcs_set_quadratic_to_func"] = wasmExports2["hb_draw_funcs_set_quadratic_to_func"];
          Module["_hb_draw_funcs_set_cubic_to_func"] = wasmExports2["hb_draw_funcs_set_cubic_to_func"];
          Module["_hb_draw_funcs_set_close_path_func"] = wasmExports2["hb_draw_funcs_set_close_path_func"];
          Module["_hb_draw_funcs_create"] = wasmExports2["hb_draw_funcs_create"];
          Module["_hb_draw_funcs_destroy"] = wasmExports2["hb_draw_funcs_destroy"];
          Module["_hb_face_create"] = wasmExports2["hb_face_create"];
          Module["_hb_face_destroy"] = wasmExports2["hb_face_destroy"];
          Module["_hb_face_reference_table"] = wasmExports2["hb_face_reference_table"];
          Module["_hb_face_get_upem"] = wasmExports2["hb_face_get_upem"];
          Module["_hb_face_collect_unicodes"] = wasmExports2["hb_face_collect_unicodes"];
          Module["_hb_font_funcs_create"] = wasmExports2["hb_font_funcs_create"];
          Module["_hb_font_funcs_destroy"] = wasmExports2["hb_font_funcs_destroy"];
          Module["_hb_font_funcs_set_font_h_extents_func"] = wasmExports2["hb_font_funcs_set_font_h_extents_func"];
          Module["_hb_font_funcs_set_font_v_extents_func"] = wasmExports2["hb_font_funcs_set_font_v_extents_func"];
          Module["_hb_font_funcs_set_nominal_glyph_func"] = wasmExports2["hb_font_funcs_set_nominal_glyph_func"];
          Module["_hb_font_funcs_set_nominal_glyphs_func"] = wasmExports2["hb_font_funcs_set_nominal_glyphs_func"];
          Module["_hb_font_funcs_set_variation_glyph_func"] = wasmExports2["hb_font_funcs_set_variation_glyph_func"];
          Module["_hb_font_funcs_set_glyph_h_advance_func"] = wasmExports2["hb_font_funcs_set_glyph_h_advance_func"];
          Module["_hb_font_funcs_set_glyph_v_advance_func"] = wasmExports2["hb_font_funcs_set_glyph_v_advance_func"];
          Module["_hb_font_funcs_set_glyph_h_advances_func"] = wasmExports2["hb_font_funcs_set_glyph_h_advances_func"];
          Module["_hb_font_funcs_set_glyph_v_advances_func"] = wasmExports2["hb_font_funcs_set_glyph_v_advances_func"];
          Module["_hb_font_funcs_set_glyph_h_origin_func"] = wasmExports2["hb_font_funcs_set_glyph_h_origin_func"];
          Module["_hb_font_funcs_set_glyph_v_origin_func"] = wasmExports2["hb_font_funcs_set_glyph_v_origin_func"];
          Module["_hb_font_funcs_set_glyph_h_kerning_func"] = wasmExports2["hb_font_funcs_set_glyph_h_kerning_func"];
          Module["_hb_font_funcs_set_glyph_extents_func"] = wasmExports2["hb_font_funcs_set_glyph_extents_func"];
          Module["_hb_font_funcs_set_glyph_name_func"] = wasmExports2["hb_font_funcs_set_glyph_name_func"];
          Module["_hb_font_funcs_set_glyph_from_name_func"] = wasmExports2["hb_font_funcs_set_glyph_from_name_func"];
          Module["_hb_font_get_h_extents"] = wasmExports2["hb_font_get_h_extents"];
          Module["_hb_font_get_v_extents"] = wasmExports2["hb_font_get_v_extents"];
          Module["_hb_font_get_glyph_h_advance"] = wasmExports2["hb_font_get_glyph_h_advance"];
          Module["_hb_font_get_glyph_v_advance"] = wasmExports2["hb_font_get_glyph_v_advance"];
          Module["_hb_font_get_glyph_h_origin"] = wasmExports2["hb_font_get_glyph_h_origin"];
          Module["_hb_font_get_glyph_v_origin"] = wasmExports2["hb_font_get_glyph_v_origin"];
          Module["_hb_font_get_glyph_extents"] = wasmExports2["hb_font_get_glyph_extents"];
          Module["_hb_font_get_glyph_from_name"] = wasmExports2["hb_font_get_glyph_from_name"];
          Module["_hb_font_draw_glyph"] = wasmExports2["hb_font_draw_glyph"];
          Module["_hb_font_glyph_to_string"] = wasmExports2["hb_font_glyph_to_string"];
          Module["_hb_font_create"] = wasmExports2["hb_font_create"];
          Module["_hb_font_set_variations"] = wasmExports2["hb_font_set_variations"];
          Module["_hb_font_create_sub_font"] = wasmExports2["hb_font_create_sub_font"];
          Module["_hb_font_reference"] = wasmExports2["hb_font_reference"];
          Module["_hb_font_destroy"] = wasmExports2["hb_font_destroy"];
          Module["_hb_font_set_funcs"] = wasmExports2["hb_font_set_funcs"];
          Module["_hb_font_set_scale"] = wasmExports2["hb_font_set_scale"];
          Module["_hb_ot_layout_get_glyph_class"] = wasmExports2["hb_ot_layout_get_glyph_class"];
          Module["_hb_ot_layout_table_get_script_tags"] = wasmExports2["hb_ot_layout_table_get_script_tags"];
          Module["_hb_ot_layout_table_get_feature_tags"] = wasmExports2["hb_ot_layout_table_get_feature_tags"];
          Module["_hb_ot_layout_script_get_language_tags"] = wasmExports2["hb_ot_layout_script_get_language_tags"];
          Module["_hb_ot_layout_language_get_feature_tags"] = wasmExports2["hb_ot_layout_language_get_feature_tags"];
          Module["_hb_ot_layout_feature_get_name_ids"] = wasmExports2["hb_ot_layout_feature_get_name_ids"];
          Module["_hb_ot_name_list_names"] = wasmExports2["hb_ot_name_list_names"];
          Module["_hb_ot_name_get_utf16"] = wasmExports2["hb_ot_name_get_utf16"];
          Module["_hb_set_create"] = wasmExports2["hb_set_create"];
          Module["_hb_set_destroy"] = wasmExports2["hb_set_destroy"];
          Module["_hb_ot_tag_to_script"] = wasmExports2["hb_ot_tag_to_script"];
          Module["_hb_ot_tag_to_language"] = wasmExports2["hb_ot_tag_to_language"];
          Module["_hb_ot_var_get_axis_infos"] = wasmExports2["hb_ot_var_get_axis_infos"];
          Module["_hb_set_get_population"] = wasmExports2["hb_set_get_population"];
          Module["_hb_set_next_many"] = wasmExports2["hb_set_next_many"];
          Module["_hb_shape"] = wasmExports2["hb_shape"];
          __emscripten_timeout = wasmExports2["_emscripten_timeout"];
          __emscripten_stack_restore = wasmExports2["_emscripten_stack_restore"];
          __emscripten_stack_alloc = wasmExports2["_emscripten_stack_alloc"];
          _emscripten_stack_get_current = wasmExports2["emscripten_stack_get_current"];
        }
        var wasmImports = { _abort_js: __abort_js, _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear, _setitimer_js: __setitimer_js, emscripten_resize_heap: _emscripten_resize_heap, proc_exit: _proc_exit };
        var wasmExports = await createWasm();
        function run() {
          if (runDependencies > 0) {
            dependenciesFulfilled = run;
            return;
          }
          preRun();
          if (runDependencies > 0) {
            dependenciesFulfilled = run;
            return;
          }
          function doRun() {
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve?.(Module);
            Module["onRuntimeInitialized"]?.();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(() => {
              setTimeout(() => Module["setStatus"](""), 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        function preInit() {
          if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
              Module["preInit"].shift()();
            }
          }
        }
        preInit();
        run();
        if (runtimeInitialized) {
          moduleRtn = Module;
        } else {
          moduleRtn = new Promise((resolve, reject) => {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
          });
        }
        return moduleRtn;
      };
    })();
    if (typeof exports2 === "object" && typeof module === "object") {
      module.exports = createHarfBuzz;
      module.exports.default = createHarfBuzz;
    } else if (typeof define === "function" && define["amd"]) define([], () => createHarfBuzz);
  }
});

// node_modules/harfbuzzjs/index.js
var require_harfbuzzjs = __commonJS({
  "node_modules/harfbuzzjs/index.js"(exports2, module) {
    var hbjs = require_hbjs();
    var hb = require_hb();
    module.exports = new Promise(function(resolve, reject) {
      hb().then((instance) => {
        resolve(hbjs(instance));
      }, reject);
    });
  }
});

// node_modules/reading-time/lib/reading-time.js
var require_reading_time = __commonJS({
  "node_modules/reading-time/lib/reading-time.js"(exports2, module) {
    function codeIsInRanges(number2, arrayOfRanges) {
      return arrayOfRanges.some(
        ([lowerBound, upperBound]) => lowerBound <= number2 && number2 <= upperBound
      );
    }
    function isCJK(c3) {
      if ("string" !== typeof c3) {
        return false;
      }
      const charCode = c3.charCodeAt(0);
      return codeIsInRanges(
        charCode,
        [
          // Hiragana (Katakana not included on purpose,
          // context: https://github.com/ngryman/reading-time/pull/35#issuecomment-853364526)
          // If you think Katakana should be included and have solid reasons, improvement is welcomed
          [12352, 12447],
          // CJK Unified ideographs
          [19968, 40959],
          // Hangul
          [44032, 55203],
          // CJK extensions
          [131072, 191456]
        ]
      );
    }
    function isAnsiWordBound(c3) {
      return " \n\r	".includes(c3);
    }
    function isPunctuation(c3) {
      if ("string" !== typeof c3) {
        return false;
      }
      const charCode = c3.charCodeAt(0);
      return codeIsInRanges(
        charCode,
        [
          [33, 47],
          [58, 64],
          [91, 96],
          [123, 126],
          // CJK Symbols and Punctuation
          [12288, 12351],
          // Full-width ASCII punctuation variants
          [65280, 65519]
        ]
      );
    }
    function readingTime2(text, options = {}) {
      let words = 0, start = 0, end = text.length - 1;
      const wordsPerMinute = options.wordsPerMinute || 200;
      const isWordBound = options.wordBound || isAnsiWordBound;
      while (isWordBound(text[start])) start++;
      while (isWordBound(text[end])) end--;
      const normalizedText = `${text}
`;
      for (let i2 = start; i2 <= end; i2++) {
        if (isCJK(normalizedText[i2]) || !isWordBound(normalizedText[i2]) && (isWordBound(normalizedText[i2 + 1]) || isCJK(normalizedText[i2 + 1]))) {
          words++;
        }
        if (isCJK(normalizedText[i2])) {
          while (i2 <= end && (isPunctuation(normalizedText[i2 + 1]) || isWordBound(normalizedText[i2 + 1]))) {
            i2++;
          }
        }
      }
      const minutes = words / wordsPerMinute;
      const time = Math.round(minutes * 60 * 1e3);
      const displayed = Math.ceil(minutes.toFixed(2));
      return {
        text: displayed + " min read",
        minutes,
        time,
        words
      };
    }
    module.exports = readingTime2;
  }
});

// node_modules/reading-time/lib/stream.js
var require_stream = __commonJS({
  "node_modules/reading-time/lib/stream.js"(exports2, module) {
    var readingTime2 = require_reading_time();
    var Transform = __require("stream").Transform;
    var util = __require("util");
    function ReadingTimeStream(options) {
      if (!(this instanceof ReadingTimeStream)) {
        return new ReadingTimeStream(options);
      }
      Transform.call(this, { objectMode: true });
      this.options = options || {};
      this.stats = {
        minutes: 0,
        time: 0,
        words: 0
      };
    }
    util.inherits(ReadingTimeStream, Transform);
    ReadingTimeStream.prototype._transform = function(chunk, encoding, callback) {
      const stats = readingTime2(chunk.toString(encoding), this.options);
      this.stats.minutes += stats.minutes;
      this.stats.time += stats.time;
      this.stats.words += stats.words;
      callback();
    };
    ReadingTimeStream.prototype._flush = function(callback) {
      this.stats.text = Math.ceil(this.stats.minutes.toFixed(2)) + " min read";
      this.push(this.stats);
      callback();
    };
    module.exports = ReadingTimeStream;
  }
});

// node_modules/reading-time/index.js
var require_reading_time2 = __commonJS({
  "node_modules/reading-time/index.js"(exports2, module) {
    module.exports.default = module.exports = require_reading_time();
    module.exports.readingTimeStream = require_stream();
  }
});

// node_modules/satori/dist/index.js
var import_escape_html = __toESM(require_escape_html(), 1);

// node_modules/linebreak/dist/module.mjs
var import_unicode_trie = __toESM(require_unicode_trie(), 1);
var import_base64_js = __toESM(require_b64(), 1);
var $557adaaeb0c7885f$exports = {};
var $1627905f8be2ef3f$export$fb4028874a74450 = 5;
var $1627905f8be2ef3f$export$1bb1140fe1358b00 = 12;
var $1627905f8be2ef3f$export$f3e416a182673355 = 13;
var $1627905f8be2ef3f$export$24aa617c849a894a = 16;
var $1627905f8be2ef3f$export$a73c4d14459b698d = 17;
var $1627905f8be2ef3f$export$9e5d732f3676a9ba = 22;
var $1627905f8be2ef3f$export$1dff41d5c0caca01 = 28;
var $1627905f8be2ef3f$export$30a74a373318dec6 = 31;
var $1627905f8be2ef3f$export$d710c5f50fc7496a = 33;
var $1627905f8be2ef3f$export$66498d28055820a9 = 34;
var $1627905f8be2ef3f$export$eb6c6d0b7c8826f2 = 35;
var $1627905f8be2ef3f$export$de92be486109a1df = 36;
var $1627905f8be2ef3f$export$606cfc2a8896c91f = 37;
var $1627905f8be2ef3f$export$e51d3c675bb0140d = 38;
var $1627905f8be2ef3f$export$da51c6332ad11d7b = 39;
var $1627905f8be2ef3f$export$bea437c40441867d = 40;
var $1627905f8be2ef3f$export$c4c7eecbfed13dc9 = 41;
var $1627905f8be2ef3f$export$98e1f8a379849661 = 42;
var $32627af916ac1b00$export$98f50d781a474745 = 0;
var $32627af916ac1b00$export$12ee1f8f5315ca7e = 1;
var $32627af916ac1b00$export$e4965ce242860454 = 2;
var $32627af916ac1b00$export$8f14048969dcd45e = 3;
var $32627af916ac1b00$export$133eb141bf58aff4 = 4;
var $32627af916ac1b00$export$5bdb8ccbf5c57afc = [
  //OP   , CL    , CP    , QU    , GL    , NS    , EX    , SY    , IS    , PR    , PO    , NU    , AL    , HL    , ID    , IN    , HY    , BA    , BB    , B2    , ZW    , CM    , WJ    , H2    , H3    , JL    , JV    , JT    , RI    , EB    , EM    , ZWJ   , CB
  [
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$8f14048969dcd45e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ],
  [
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$e4965ce242860454,
    $32627af916ac1b00$export$133eb141bf58aff4,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$98f50d781a474745,
    $32627af916ac1b00$export$12ee1f8f5315ca7e,
    $32627af916ac1b00$export$98f50d781a474745
  ]
  // CB
];
var $557adaaeb0c7885f$var$data = import_base64_js.default.toByteArray("AAgOAAAAAAAQ4QAAAQ0P8vDtnQuMXUUZx+eyu7d7797d9m5bHoWltKVUlsjLWE0VJNigQoMVqkStEoNQQUl5GIo1KKmogEgqkKbBRki72lYabZMGKoGAjQRtJJDaCCIRiiigREBQS3z+xzOTnZ3O+3HOhd5NfpkzZx7fN9988zivu2M9hGwB28F94DnwEngd/Asc1EtIs9c/bIPDwCxwLDgezHcodyo4w5C+CCwBS8FnwSXgCnA1uFbI93XwbXAbWAfWgx+CzWAb+An4KfgFeAzsYWWfYuFz4CXwGvgb+Dfo6yNkEEwGh4CZYB44FpwI3g1OY+kfBItZOo2fB84Hy8DF4HJwNbiWpV8PVoO1LH4n2NRXyN+KcAd4kNVP9XsY4aPgcfAbsBfs6SniL4K/sPjfEf6HlanXCRkCw2BGvUh/keWfXS/CY+pFXs7x9XHmM94LTmWIeU2cgbxnS/k/B3kf86jDhU8L9V2E40vAFWAlWFUfb++NOL4F3C7JX4/4GiE+hvgWsF0oS7mXldspnN+F493gyXrh9xTav0cg3EvzgVfBG6wsmVSEkxBOBgdPGpd7JI6PnqRvJ68/xlbHof53gPeA94OzwLngk+ACsAwsByvASrAK3MB0Ws3CtQjvBJvAVrADPMDSHkb4CNijaccTwvnf4fiPEs8Lxy+D18A/QU8/xjgYBjPAbDAKTgYLwOngTHAO+EQ/8wuEF4EvsPiVCFf2+9tsFStzA8LVHuXXBsi6QyqzUYiPMR/7Mc7dAx7oL8bzw/3u/Bw8Bp4Az4AXwCtgHzsmDXP5fiF9iiVvly5d0sHngar16NKlS5cuXbp06fLmYlqHXrcd3ph4P0THUY3iXh49novju4S0tzfs5d+JPKewfAsRntZb3K9ZhOMlrO6lCC8An28U9+OuovcPcPxlVu5rCL/VmHh/iHIrzn3fIPu7SN8Axmg+8AOwEWwCm7tp3bRuWjetm5Y8bSu4B9zbKO6ZVsnORrVU3f4uXTqZ2H3sLoyx3eDXjfDndE9qyj6L838CfwVvgFpzYnof4oNgOhgBc8Fos9DrZIQLmtXPP1MmF6wGj4H+KXoWguvADkXaPil+YpuQy8Am8Ey7ODdtmJDF4HowBp4De6HDTNjhfHAHeBr0DBBy0kDxfPbcgSIusgrcWhtnJ8vL+TPix7UIOQtcBq4C28Cr4KRBnANbwSuDE+s50JgyNNFuXbp06XIgsXjIvPafjvXozKY+fVFz/z0LT1uCtKVSWbrOLWPnztG8e0Xfy7ol8XtZJi7WtG+5od2UFXQ/A12vUeS7jp27yVKHjdsU9lXB869TyNvAzt0lpP2oWbwLdjiO78bx/Sz+EMJHwK9Y/LcIfw+eZ3F67/Hl5vh9xX80J+rwX8SvRDhpgL17iPAQMHNArfPrqHPewLheI+AERV6efwV418B4nOZ/H+IfYHV8GOF5LJ3eAz0fx8sM9S0fUNud39O9CulfGZhY5huI3wzWgNvBelbHZoTbNPVpfYjKQpkHwUNgl0LWblbnk0LbbDxr0OMFpL3iqWdu9nWYPlVAWkXY39LnGdCkDbeqv1YNbfcMQ3t9oe8lzm6NH9N1ZB6Ln4BwfkJZJk7RyFnYKt6b/JDQXx9p5X+eFdqOjzM9P9MB/lUlFzr20aXIdzlY4dmn9F3YqtvoO76/2hp/D/xA5Zue88nNyL8GbFbs075X0tyUig3Qd2MCnf//HjnzpbsR3g9+1kHzzVjdnE71/qVBX9rGPUh/ysNWe1neFzvIDi5zAufV1sT0N0poR22wkFUfTOPfA4N2mbZ5fSrqOHSw+IbkSBbOGSzSRgf91/GTUWYBOB2cIZQ/G8cfBZ8CFwrnL8XxF8FKcA24jqXdiPA7Qr61OF7H4mMItwzuv2/YLth1ISt3Hzu3k4W7EH5JqPdRHD/O4k+z8A8IX5Lq3y7Z4nXE9xn6kX6vQ4bKfy+ok+hH+xf3hq9dnTTHhjKd2GmDuWA242iHMq4cC7A8kJ7i8o1+skSa7Jieo38HCWnoNjKFhdSFBxzpZ7QE6lI8N4S14aASZcryaV/WWHw66f6NHuCoxuQxmvM56GX9QMd8Q4D65ywGP+ZzRJuM+zQvx/MOS2VFeqQ4IXnH26zM9Xe6/E6D+4foAzzuajPZp8Qyw5ayZVDWuH0z0BtYRkeIDqH9KO9VbH1btd/lhNqCzvl8zeLnG0S/hnU6baHfpiuO6yy0rd+DHURo/zYF5H26j03rQsip2ndzz82u1z9N4VjWKWeb68Tedpt95HRVXp7H1R6p+/Wt4FPy/PpWwscOLRJ+PVWF/+W0iVyGzs18TIvXkOJ1Wxm66vSXz+vylenrZcj1ub439W+K8RNCGTJi2p/TJ1K23VaXr35tRpnzmjxequgfcfyk6B/TGBVlyedsNgpdd/h+W1U3P99QyFPNo1X3TwpM/WLTIWYfoBqXrv6iskHZ/RFr79R6hIyHBrH3f1nrUVnjP8SnZZ+rYtzr9Exld5MNbPNErusAPg+77u/eDOPftU9yj39TH7rezxd1LvsZQJlzkWlOirG/79zjMj/mtHUKu7vKy+3/LnXr9okyKedjX5/0He9iP/j63LwOQdarEVlfy8OO/Lqw023j6xcqmwxLiOd6heM2i9cV9LJy8jMJ23yQ+rpbfu7EQ/pXE8KYvUSqvVnb4XzZa6LrHMXHR+zcLvqWbm/Bn0/HzIs6fWPHoat8XfnDKmZGxRxeMbn2UqZ5Q94nmcZRbqqUXbZ8+lcjE+cPX11t814orvvAXNcG8vqj2vvk1MGn3anlj0bIT72v47bvE+Lc98T9b6r7AKn6j+8Duf7D0nnZx/j7Zjn0j9nbpSTndaLr9WNLivP+iN23xF7L+fqv6ZouFyb78jxVXvv5jJ9YUs9/sddO8h7KNg5jrhfaJGztT6G7KF+1d6yCmD5Kdb2fan60rSc552fZr3zeQ9DpnPp+Si5cx5Ktv2QfSzF/mMbWdOm46rFI4XstnU9xeqX4NKb7TKEdcr6pZOK3ID1k/LvFHkVczEuZLEDr499YqvqBym1aEHWgcvoYOtv0M91qQl5TfpO/in6rWx8OVpT1Wedkv3f5xom3T/xeR/6Gx6V86PWAOB4bBpqWdN+yTcVxjIyGRz/FrDGu6w/3d7kPm8StX8RyPu+uuvpNju/vTLJV37GpvoM0oZPnW87VLnL/5pDno1NoW1R6yedU6TyUv3u19a3KFnIbTLYz+ZCLP4T0tU1uivFgso0pnsJ/UtXvarNY28Xq5cvkBDrQP/E5ZaiuQwwfmTlsOiQRU1fMuqrDd/3ISSuwjOwXOfTyGUMpZIXq4GpLn3pUcdfzch2x7XO1u2uZHOPb1G6b3Xg9PH1IIWeEpJlPQtqos2EKW8b0u8rnuP1UeVLoXJb9be0uG9nnbchjU+XTszT5VeNBThPHnc5OKj1U9aj0GTHIVaGy1YhEWT4ixns00DT+XEzWn/7VAsIc63Cov3OdyhwjrnaqQqZvWKXdypRdlq+k8msZ031U+Rm4fA+3TtyeR9hwfW9G9yxDN0fZMN33F+9TE6md4hwoxumfaUzI9fN3PFT3xVV2msrQ3UsnChm6Nulk8TndpS28D3zX9tTIPsF/z7Am5OkTjm1tI1JZW74+4VgsZ0N3L1yXV3WeP5uR7TGHHdvC3JQlxybfpd22tDlk/2eofRK8TzrN/qnar/K/OUTth6I/+jAnEptNbPvFHP2gs40N3+dfMWtwqvVct7/wfd8gtQ7imifial9ZJ9/3IHLYU6eDj3+4PhsNhX+vwvcWLnu6kGfEMe8DuciPfUfGZB8X/7HJy/Gefe5n+VRGFd/wyP2ta7/LO4yh/sbLV/k9lev6kfO9Dt/5U67b1/6u/epqB1U9Me23jfHY9sscAg4tkbLl+e4/U36rJ9ddxfd6sg5vq5ice42Wpk/pb9FOJ36/W9tpv4kbC79nUbZceX8Zu6/qJ+P3WvhvA8v3reh7Jbn2d6rrNC7XNZTLma4Ba0JI9efX2uLzF5scG/w9UNU1ZxW+ymUfzELeTllXlQ1rUuhzjS5fp9c964iFBOqeSz63bU065nZKdU+mDEz3qHIjjifquw0pnb/raRtvrnsYcb46ihT3taoYz6brdNW9l6rWRnE/navdPn1XlR1km7hcz1WlH/elKuSOSvLLuE8U6m8uzwRdfcGl73VyTHuyMvzJ1Sa2cWDTP/Z63Kc94n2B1PYr24dz1JlyHLlcP+S4B6vD1c9EW4q2LWstCvUjeVy63k/LMYdUNd5D1xQfvVTzX1VjkMsUv88N8VH5fReVn/Fjn++/h6X6Q8a6b1/q3g/i/ewi0/Scs8zxXeV6mWIOUPlPzBgdFerW+bZrm2P18dnjuK6HunEp+rHvPMXbr+sHVb/lnL+pTP57jPw9Cvk3PW178JD9qChfzuvTf7Htl38L1QUf/VKu9SFjwWbTWPvFEvu7Uq76y7+31g6QlYPc669pbsm9Xur2LWI9Pu8ypfDXqm3A2z8s1FWGn4ntL9NfQu2oSlftX9uetvTtv7J8Ql4zxfXGZ3zk8PeQ9w59x2uMfqI8/q5eKh/l9cb2rwsu9rSNl06ZP2Pmxtz+rNMx93yno0n2/82rVH7rQ+y9P15H6FyRun9ViH81ATmffI7nJ5r8uXXW6enbP6b/B8/l5OifVHYLnb9S39s2zcc+Ph+rh8+eQgVPS72elzGWY/tUtbbabBpDiI7yN1q6/4th2y+ErAc5+9BVvu/7KamJbWNZeuqI/R4tRf+YyD1HmOZM1bMV3/14Sn10c0Xu+Sj1nOXb5jL73ncdy02uvlXZNde65dOHYl7Vs4KYuS6FzWLn2zJlpZqPXPVPOa5yzKOyn1VhT9lmMfdbfH7D11Wf2PXN5h9y+dD287+qxgSnaYmnIrRtIb8pJe6/Uv9OVer6Whn0zfGO/BEloZI9ojmfAlUflClDd178bTmVHVTpZXOkAlk/lb42UujmI89HH5V+cl7XtowY6vTxLVWok6UrGzoGTHN+bB+6ri05687VNpvfuvRfaP2uMlNQth1D5JjGelm/8yn+9p3p/7qk9gnfeddXZmq/Sm333PJT659Kv1zjNbZ9uv2Oi//67CV8/N1nj1DmviyXDNVeJkaeaX8UsyesYg8cu2+NvdaPfb+lLDu5tvt/");
var $557adaaeb0c7885f$var$classTrie = new import_unicode_trie.default($557adaaeb0c7885f$var$data);
var $557adaaeb0c7885f$var$mapClass = function(c3) {
  switch (c3) {
    case $1627905f8be2ef3f$export$d710c5f50fc7496a:
      return $1627905f8be2ef3f$export$1bb1140fe1358b00;
    case $1627905f8be2ef3f$export$da51c6332ad11d7b:
    case $1627905f8be2ef3f$export$bea437c40441867d:
    case $1627905f8be2ef3f$export$98e1f8a379849661:
      return $1627905f8be2ef3f$export$1bb1140fe1358b00;
    case $1627905f8be2ef3f$export$eb6c6d0b7c8826f2:
      return $1627905f8be2ef3f$export$fb4028874a74450;
    default:
      return c3;
  }
};
var $557adaaeb0c7885f$var$mapFirst = function(c3) {
  switch (c3) {
    case $1627905f8be2ef3f$export$606cfc2a8896c91f:
    case $1627905f8be2ef3f$export$e51d3c675bb0140d:
      return $1627905f8be2ef3f$export$66498d28055820a9;
    case $1627905f8be2ef3f$export$c4c7eecbfed13dc9:
      return $1627905f8be2ef3f$export$9e5d732f3676a9ba;
    default:
      return c3;
  }
};
var $557adaaeb0c7885f$var$Break = class {
  constructor(position, required = false) {
    this.position = position;
    this.required = required;
  }
};
var $557adaaeb0c7885f$var$LineBreaker = class {
  nextCodePoint() {
    const code = this.string.charCodeAt(this.pos++);
    const next = this.string.charCodeAt(this.pos);
    if (55296 <= code && code <= 56319 && 56320 <= next && next <= 57343) {
      this.pos++;
      return (code - 55296) * 1024 + (next - 56320) + 65536;
    }
    return code;
  }
  nextCharClass() {
    return $557adaaeb0c7885f$var$mapClass($557adaaeb0c7885f$var$classTrie.get(this.nextCodePoint()));
  }
  getSimpleBreak() {
    switch (this.nextClass) {
      case $1627905f8be2ef3f$export$c4c7eecbfed13dc9:
        return false;
      case $1627905f8be2ef3f$export$66498d28055820a9:
      case $1627905f8be2ef3f$export$606cfc2a8896c91f:
      case $1627905f8be2ef3f$export$e51d3c675bb0140d:
        this.curClass = $1627905f8be2ef3f$export$66498d28055820a9;
        return false;
      case $1627905f8be2ef3f$export$de92be486109a1df:
        this.curClass = $1627905f8be2ef3f$export$de92be486109a1df;
        return false;
    }
    return null;
  }
  getPairTableBreak(lastClass) {
    let shouldBreak = false;
    switch ($32627af916ac1b00$export$5bdb8ccbf5c57afc[this.curClass][this.nextClass]) {
      case $32627af916ac1b00$export$98f50d781a474745:
        shouldBreak = true;
        break;
      case $32627af916ac1b00$export$12ee1f8f5315ca7e:
        shouldBreak = lastClass === $1627905f8be2ef3f$export$c4c7eecbfed13dc9;
        break;
      case $32627af916ac1b00$export$e4965ce242860454:
        shouldBreak = lastClass === $1627905f8be2ef3f$export$c4c7eecbfed13dc9;
        if (!shouldBreak) {
          shouldBreak = false;
          return shouldBreak;
        }
        break;
      case $32627af916ac1b00$export$8f14048969dcd45e:
        if (lastClass !== $1627905f8be2ef3f$export$c4c7eecbfed13dc9) return shouldBreak;
        break;
    }
    if (this.LB8a) shouldBreak = false;
    if (this.LB21a && (this.curClass === $1627905f8be2ef3f$export$24aa617c849a894a || this.curClass === $1627905f8be2ef3f$export$a73c4d14459b698d)) {
      shouldBreak = false;
      this.LB21a = false;
    } else this.LB21a = this.curClass === $1627905f8be2ef3f$export$f3e416a182673355;
    if (this.curClass === $1627905f8be2ef3f$export$1dff41d5c0caca01) {
      this.LB30a++;
      if (this.LB30a == 2 && this.nextClass === $1627905f8be2ef3f$export$1dff41d5c0caca01) {
        shouldBreak = true;
        this.LB30a = 0;
      }
    } else this.LB30a = 0;
    this.curClass = this.nextClass;
    return shouldBreak;
  }
  nextBreak() {
    if (this.curClass == null) {
      let firstClass = this.nextCharClass();
      this.curClass = $557adaaeb0c7885f$var$mapFirst(firstClass);
      this.nextClass = firstClass;
      this.LB8a = firstClass === $1627905f8be2ef3f$export$30a74a373318dec6;
      this.LB30a = 0;
    }
    while (this.pos < this.string.length) {
      this.lastPos = this.pos;
      const lastClass = this.nextClass;
      this.nextClass = this.nextCharClass();
      if (this.curClass === $1627905f8be2ef3f$export$66498d28055820a9 || this.curClass === $1627905f8be2ef3f$export$de92be486109a1df && this.nextClass !== $1627905f8be2ef3f$export$606cfc2a8896c91f) {
        this.curClass = $557adaaeb0c7885f$var$mapFirst($557adaaeb0c7885f$var$mapClass(this.nextClass));
        return new $557adaaeb0c7885f$var$Break(this.lastPos, true);
      }
      let shouldBreak = this.getSimpleBreak();
      if (shouldBreak === null) shouldBreak = this.getPairTableBreak(lastClass);
      this.LB8a = this.nextClass === $1627905f8be2ef3f$export$30a74a373318dec6;
      if (shouldBreak) return new $557adaaeb0c7885f$var$Break(this.lastPos);
    }
    if (this.lastPos < this.string.length) {
      this.lastPos = this.string.length;
      return new $557adaaeb0c7885f$var$Break(this.string.length);
    }
    return null;
  }
  constructor(string) {
    this.string = string;
    this.pos = 0;
    this.lastPos = 0;
    this.curClass = null;
    this.nextClass = null;
    this.LB8a = false;
    this.LB21a = false;
    this.LB30a = 0;
  }
};
$557adaaeb0c7885f$exports = $557adaaeb0c7885f$var$LineBreaker;

// node_modules/satori/dist/index.js
var import_css_to_react_native = __toESM(require_css_to_react_native(), 1);
var import_css_background_parser = __toESM(require_css_background_parser(), 1);
var import_css_box_shadow = __toESM(require_css_box_shadow(), 1);

// node_modules/parse-css-color/dist/index.esm.js
var import_color_name = __toESM(require_color_name());
var import_hex_rgb = __toESM(require_hex_rgb());
var pattern = /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;
var hexRe = new RegExp(pattern, "i");
var float = "-?\\d*(?:\\.\\d+)";
var number = `(${float}?)`;
var percentage = `(${float}?%)`;
var numberOrPercentage = `(${float}?%?)`;
var pattern$1 = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var hsl3Re = new RegExp(pattern$1);
var pattern$2 = `^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var hsl4Re = new RegExp(pattern$2);
var pattern$3 = `^
  rgba?\\(
    \\s*${number}\\s*,
    \\s*${number}\\s*,
    \\s*${number}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var rgb3NumberRe = new RegExp(pattern$3);
var pattern$4 = `^
  rgba?\\(
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*,
    \\s*${percentage}\\s*
    (?:,\\s*${numberOrPercentage}\\s*)?
  \\)
  $
`.replace(/\n|\s/g, "");
var rgb3PercentageRe = new RegExp(pattern$4);
var pattern$5 = `^
  rgba?\\(
    \\s*${number}
    \\s+${number}
    \\s+${number}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
var rgb4NumberRe = new RegExp(pattern$5);
var pattern$6 = `^
  rgba?\\(
    \\s*${percentage}
    \\s+${percentage}
    \\s+${percentage}
    \\s*(?:\\s*\\/\\s*${numberOrPercentage}\\s*)?
  \\)
$
`.replace(/\n|\s/g, "");
var rgb4PercentageRe = new RegExp(pattern$6);
var pattern$7 = /^transparent$/;
var transparentRe = new RegExp(pattern$7, "i");
var clamp = (num, min, max3) => Math.min(Math.max(min, num), max3);
var parseRGB = (num) => {
  let n2 = num;
  if (typeof n2 !== "number") n2 = n2.endsWith("%") ? parseFloat(n2) * 255 / 100 : parseFloat(n2);
  return clamp(Math.round(n2), 0, 255);
};
var parsePercentage = (percentage2) => clamp(parseFloat(percentage2), 0, 100);
function parseAlpha(alpha) {
  let a2 = alpha;
  if (typeof a2 !== "number") a2 = a2.endsWith("%") ? parseFloat(a2) / 100 : parseFloat(a2);
  return clamp(a2, 0, 1);
}
function getHEX(hex) {
  const [r2, g3, b2, a2] = (0, import_hex_rgb.default)(hex, { format: "array" });
  return getRGB([null, ...[r2, g3, b2, a2]]);
}
function getHSL([, h3, s2, l3, a2 = 1]) {
  let hh = h3;
  if (hh.endsWith("turn")) {
    hh = parseFloat(hh) * 360 / 1;
  } else if (hh.endsWith("rad")) {
    hh = Math.round(parseFloat(hh) * 180 / Math.PI);
  } else {
    hh = parseFloat(hh);
  }
  return {
    type: "hsl",
    values: [hh, parsePercentage(s2), parsePercentage(l3)],
    alpha: parseAlpha(a2 === null ? 1 : a2)
  };
}
function getRGB([, r2, g3, b2, a2 = 1]) {
  return {
    type: "rgb",
    values: [r2, g3, b2].map(parseRGB),
    alpha: parseAlpha(a2 === null ? 1 : a2)
  };
}
var parseCSSColor = (str) => {
  if (typeof str !== "string") return null;
  const hex = hexRe.exec(str);
  if (hex) return getHEX(hex[0]);
  const hsl = hsl4Re.exec(str) || hsl3Re.exec(str);
  if (hsl) return getHSL(hsl);
  const rgb = rgb4NumberRe.exec(str) || rgb4PercentageRe.exec(str) || rgb3NumberRe.exec(str) || rgb3PercentageRe.exec(str);
  if (rgb) return getRGB(rgb);
  if (transparentRe.exec(str)) return getRGB([null, 0, 0, 0, 0]);
  const cn2 = import_color_name.default[str.toLowerCase()];
  if (cn2) return getRGB([null, cn2[0], cn2[1], cn2[2], 1]);
  return null;
};
var index_esm_default = parseCSSColor;

// node_modules/satori/dist/index.js
var import_postcss_value_parser = __toESM(require_lib(), 1);
var import_css_to_react_native2 = __toESM(require_css_to_react_native(), 1);
var import_postcss_value_parser2 = __toESM(require_lib(), 1);
var import_escape_html2 = __toESM(require_escape_html(), 1);

// node_modules/css-gradient-parser/dist/index.js
function c(e2, o2 = ",") {
  let t2 = [], n2 = 0, i2 = 0;
  o2 = new RegExp(o2);
  for (let r2 = 0; r2 < e2.length; r2++) e2[r2] === "(" ? i2++ : e2[r2] === ")" && i2--, i2 === 0 && o2.test(e2[r2]) && (t2.push(e2.slice(n2, r2).trim()), n2 = r2 + 1);
  return t2.push(e2.slice(n2).trim()), t2;
}
function g(e2) {
  let o2 = [];
  for (let t2 = 0, n2 = e2.length; t2 < n2; ) {
    let [i2, r2] = c(e2[t2], /\s+/);
    m(e2[t2 + 1]) ? (o2.push({ color: i2, offset: l(r2), hint: l(e2[t2 + 1]) }), t2 += 2) : (o2.push({ color: i2, offset: l(r2) }), t2++);
  }
  return o2;
}
var u = /^(-?\d+\.?\d*)(%|vw|vh|px|em|rem|deg|rad|grad|turn|ch|vmin|vmax)?$/;
function m(e2) {
  return u.test(e2);
}
function l(e2) {
  if (!e2) return;
  let [, o2, t2] = e2.trim().match(u) || [];
  return { value: o2, unit: t2 ?? "px" };
}
function P(e2) {
  if (!/^(repeating-)?linear-gradient/.test(e2)) throw new SyntaxError(`could not find syntax for this item: ${e2}`);
  let [, o2, t2] = e2.match(/(repeating-)?linear-gradient\((.+)\)/), n2 = { orientation: { type: "directional", value: "bottom" }, repeating: !!o2, stops: [] }, i2 = c(t2), r2 = x(i2[0]);
  return r2 && (n2.orientation = r2, i2.shift()), { ...n2, stops: g(i2) };
}
function x(e2) {
  return e2.startsWith("to ") ? { type: "directional", value: e2.replace("to ", "") } : ["turn", "deg", "grad", "rad"].some((o2) => e2.endsWith(o2)) ? { type: "angular", value: l(e2) } : null;
}
var v = /* @__PURE__ */ new Set(["closest-corner", "closest-side", "farthest-corner", "farthest-side"]);
var w = /* @__PURE__ */ new Set(["center", "left", "top", "right", "bottom"]);
function d(e2) {
  return v.has(e2);
}
function h(e2) {
  return w.has(e2);
}
function R(e2) {
  let o2 = Array(2).fill("");
  for (let t2 = 0; t2 < 2; t2++) e2[t2] ? o2[t2] = e2[t2] : o2[t2] = "center";
  return o2;
}
function K(e2) {
  if (!/(repeating-)?radial-gradient/.test(e2)) throw new SyntaxError(`could not find syntax for this item: ${e2}`);
  let [, o2, t2] = e2.match(/(repeating-)?radial-gradient\((.+)\)/), n2 = { shape: "ellipse", repeating: !!o2, size: [{ type: "keyword", value: "farthest-corner" }], position: { x: { type: "keyword", value: "center" }, y: { type: "keyword", value: "center" } }, stops: [] }, i2 = c(t2);
  if (S(i2[0])) return { ...n2, stops: g(i2) };
  let r2 = i2[0].split("at").map((f3) => f3.trim()), p2 = ((r2[0] || "").match(/(circle|ellipse)/) || [])[1], a2 = (r2[0] || "").match(/(-?\d+\.?\d*(vw|vh|px|em|rem|%|rad|grad|turn|deg)?|closest-corner|closest-side|farthest-corner|farthest-side)/g) || [], s2 = R((r2[1] || "").split(" "));
  return p2 ? n2.shape = p2 : a2.length === 1 && !d(a2[0]) ? n2.shape = "circle" : n2.shape = "ellipse", a2.length === 0 && a2.push("farthest-corner"), n2.size = a2.map((f3) => d(f3) ? { type: "keyword", value: f3 } : { type: "length", value: l(f3) }), n2.position.x = h(s2[0]) ? { type: "keyword", value: s2[0] } : { type: "length", value: l(s2[0]) }, n2.position.y = h(s2[1]) ? { type: "keyword", value: s2[1] } : { type: "length", value: l(s2[1]) }, (p2 || a2.length > 0 || r2[1]) && i2.shift(), { ...n2, stops: g(i2) };
}
function S(e2) {
  return /(circle|ellipse|at)/.test(e2) ? false : /^(rgba?|hwb|hsl|lab|lch|oklab|color|#|[a-zA-Z]+)/.test(e2);
}

// node_modules/satori/dist/index.js
var import_css_to_react_native3 = __toESM(require_css_to_react_native(), 1);

// node_modules/@shuding/opentype.js/dist/opentype.module.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a = freb(fleb, 2);
var fl = _a[0];
var revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b[0];
var rev = new u16(32768);
for (i2 = 0; i2 < 32768; ++i2) {
  x3 = (i2 & 43690) >>> 1 | (i2 & 21845) << 1;
  x3 = (x3 & 52428) >>> 2 | (x3 & 13107) << 2;
  x3 = (x3 & 61680) >>> 4 | (x3 & 3855) << 4;
  rev[i2] = ((x3 & 65280) >>> 8 | (x3 & 255) << 8) >>> 1;
}
var x3;
var i2;
var hMap = (function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l3 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2]) {
      ++l3[cd[i2] - 1];
    }
  }
  var le2 = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le2[i2] = le2[i2 - 1] + l3[i2 - 1] << 1;
  }
  var co;
  {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v4 = le2[cd[i2] - 1]++ << r_1;
        for (var m3 = v4 | (1 << r_1) - 1; v4 <= m3; ++v4) {
          co[rev[v4] >>> rvb] = sv;
        }
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i2 = 0; i2 < 144; ++i2) {
  flt[i2] = 8;
}
var i2;
for (i2 = 144; i2 < 256; ++i2) {
  flt[i2] = 9;
}
var i2;
for (i2 = 256; i2 < 280; ++i2) {
  flt[i2] = 7;
}
var i2;
for (i2 = 280; i2 < 288; ++i2) {
  flt[i2] = 8;
}
var i2;
var fdt = new u8(32);
for (i2 = 0; i2 < 32; ++i2) {
  fdt[i2] = 5;
}
var i2;
var flrm = /* @__PURE__ */ hMap(flt, 9);
var fdrm = /* @__PURE__ */ hMap(fdt, 5);
var max = function(a2) {
  var m3 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m3) {
      m3 = a2[i2];
    }
  }
  return m3;
};
var bits = function(d3, p2, m3) {
  var o2 = p2 / 8 | 0;
  return (d3[o2] | d3[o2 + 1] << 8) >> (p2 & 7) & m3;
};
var bits16 = function(d3, p2) {
  var o2 = p2 / 8 | 0;
  return (d3[o2] | d3[o2 + 1] << 8 | d3[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v4, s2, e2) {
  if (e2 == null || e2 > v4.length) {
    e2 = v4.length;
  }
  var n2 = new (v4.BYTES_PER_ELEMENT == 2 ? u16 : v4.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v4.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(e2, err);
  }
  if (!nt) {
    throw e2;
  }
  return e2;
};
var inflt = function(dat, buf, st2) {
  var sl2 = dat.length;
  if (!sl2 || st2 && st2.f && !st2.l) {
    return buf || new u8(0);
  }
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2) {
    st2 = {};
  }
  if (!buf) {
    buf = new u8(sl2 * 3);
  }
  var cbuf = function(l4) {
    var bl2 = buf.length;
    if (l4 > bl2) {
      var nbuf = new u8(Math.max(bl2 * 2, l4));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl2 * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft(pos) + 4, l3 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l3;
        if (t2 > sl2) {
          if (noSt) {
            err(0);
          }
          break;
        }
        if (noBuf) {
          cbuf(bt2 + l3);
        }
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l3, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type == 1) {
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      } else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl2 = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl2);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb);
        for (var i2 = 0; i2 < tl2; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c3 = 0, n2 = 0;
            if (s2 == 16) {
              n2 = 3 + bits(dat, pos, 3), pos += 2, c3 = ldt[i2 - 1];
            } else if (s2 == 17) {
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            } else if (s2 == 18) {
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            }
            while (n2--) {
              ldt[i2++] = c3;
            }
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt);
        dm = hMap(dt, dbt);
      } else {
        err(1);
      }
      if (pos > tbts) {
        if (noSt) {
          err(0);
        }
        break;
      }
    }
    if (noBuf) {
      cbuf(bt2 + 131072);
    }
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c3 = lm[bits16(dat, pos) & lms], sym = c3 >>> 4;
      pos += c3 & 15;
      if (pos > tbts) {
        if (noSt) {
          err(0);
        }
        break;
      }
      if (!c3) {
        err(2);
      }
      if (sym < 256) {
        buf[bt2++] = sym;
      } else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d3 = dm[bits16(dat, pos) & dms], dsym = d3 >>> 4;
        if (!d3) {
          err(3);
        }
        pos += d3 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt) {
            err(0);
          }
          break;
        }
        if (noBuf) {
          cbuf(bt2 + 131072);
        }
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm) {
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
    }
  } while (!final);
  return bt2 == buf.length ? buf : slc(buf, 0, bt2);
};
var et = /* @__PURE__ */ new u8(0);
function inflateSync(data, out) {
  return inflt(data, out);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
function Path() {
  this.commands = [];
  this.fill = "black";
  this.stroke = null;
  this.strokeWidth = 1;
}
Path.prototype.moveTo = function(x3, y2) {
  this.commands.push({
    type: "M",
    x: x3,
    y: y2
  });
};
Path.prototype.lineTo = function(x3, y2) {
  this.commands.push({
    type: "L",
    x: x3,
    y: y2
  });
};
Path.prototype.curveTo = Path.prototype.bezierCurveTo = function(x1, y1, x22, y2, x3, y3) {
  this.commands.push({
    type: "C",
    x1,
    y1,
    x2: x22,
    y2,
    x: x3,
    y: y3
  });
};
Path.prototype.quadTo = Path.prototype.quadraticCurveTo = function(x1, y1, x3, y2) {
  this.commands.push({
    type: "Q",
    x1,
    y1,
    x: x3,
    y: y2
  });
};
Path.prototype.close = Path.prototype.closePath = function() {
  this.commands.push({
    type: "Z"
  });
};
Path.prototype.extend = function(pathOrCommands) {
  if (pathOrCommands.commands) {
    pathOrCommands = pathOrCommands.commands;
  }
  Array.prototype.push.apply(this.commands, pathOrCommands);
};
Path.prototype.toPathData = function(decimalPlaces) {
  decimalPlaces = decimalPlaces !== void 0 ? decimalPlaces : 2;
  function floatToString(v4) {
    if (Math.round(v4) === v4) {
      return "" + Math.round(v4);
    } else {
      return v4.toFixed(decimalPlaces);
    }
  }
  function packValues() {
    var arguments$1 = arguments;
    var s2 = "";
    for (var i3 = 0; i3 < arguments.length; i3 += 1) {
      var v4 = arguments$1[i3];
      if (v4 >= 0 && i3 > 0) {
        s2 += " ";
      }
      s2 += floatToString(v4);
    }
    return s2;
  }
  var d3 = "";
  for (var i2 = 0; i2 < this.commands.length; i2 += 1) {
    var cmd = this.commands[i2];
    if (cmd.type === "M") {
      d3 += "M" + packValues(cmd.x, cmd.y);
    } else if (cmd.type === "L") {
      d3 += "L" + packValues(cmd.x, cmd.y);
    } else if (cmd.type === "C") {
      d3 += "C" + packValues(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
    } else if (cmd.type === "Q") {
      d3 += "Q" + packValues(cmd.x1, cmd.y1, cmd.x, cmd.y);
    } else if (cmd.type === "Z") {
      d3 += "Z";
    }
  }
  return d3;
};
var cffStandardStrings = [
  ".notdef",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quoteright",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "quoteleft",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "exclamdown",
  "cent",
  "sterling",
  "fraction",
  "yen",
  "florin",
  "section",
  "currency",
  "quotesingle",
  "quotedblleft",
  "guillemotleft",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "endash",
  "dagger",
  "daggerdbl",
  "periodcentered",
  "paragraph",
  "bullet",
  "quotesinglbase",
  "quotedblbase",
  "quotedblright",
  "guillemotright",
  "ellipsis",
  "perthousand",
  "questiondown",
  "grave",
  "acute",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "dieresis",
  "ring",
  "cedilla",
  "hungarumlaut",
  "ogonek",
  "caron",
  "emdash",
  "AE",
  "ordfeminine",
  "Lslash",
  "Oslash",
  "OE",
  "ordmasculine",
  "ae",
  "dotlessi",
  "lslash",
  "oslash",
  "oe",
  "germandbls",
  "onesuperior",
  "logicalnot",
  "mu",
  "trademark",
  "Eth",
  "onehalf",
  "plusminus",
  "Thorn",
  "onequarter",
  "divide",
  "brokenbar",
  "degree",
  "thorn",
  "threequarters",
  "twosuperior",
  "registered",
  "minus",
  "eth",
  "multiply",
  "threesuperior",
  "copyright",
  "Aacute",
  "Acircumflex",
  "Adieresis",
  "Agrave",
  "Aring",
  "Atilde",
  "Ccedilla",
  "Eacute",
  "Ecircumflex",
  "Edieresis",
  "Egrave",
  "Iacute",
  "Icircumflex",
  "Idieresis",
  "Igrave",
  "Ntilde",
  "Oacute",
  "Ocircumflex",
  "Odieresis",
  "Ograve",
  "Otilde",
  "Scaron",
  "Uacute",
  "Ucircumflex",
  "Udieresis",
  "Ugrave",
  "Yacute",
  "Ydieresis",
  "Zcaron",
  "aacute",
  "acircumflex",
  "adieresis",
  "agrave",
  "aring",
  "atilde",
  "ccedilla",
  "eacute",
  "ecircumflex",
  "edieresis",
  "egrave",
  "iacute",
  "icircumflex",
  "idieresis",
  "igrave",
  "ntilde",
  "oacute",
  "ocircumflex",
  "odieresis",
  "ograve",
  "otilde",
  "scaron",
  "uacute",
  "ucircumflex",
  "udieresis",
  "ugrave",
  "yacute",
  "ydieresis",
  "zcaron",
  "exclamsmall",
  "Hungarumlautsmall",
  "dollaroldstyle",
  "dollarsuperior",
  "ampersandsmall",
  "Acutesmall",
  "parenleftsuperior",
  "parenrightsuperior",
  "266 ff",
  "onedotenleader",
  "zerooldstyle",
  "oneoldstyle",
  "twooldstyle",
  "threeoldstyle",
  "fouroldstyle",
  "fiveoldstyle",
  "sixoldstyle",
  "sevenoldstyle",
  "eightoldstyle",
  "nineoldstyle",
  "commasuperior",
  "threequartersemdash",
  "periodsuperior",
  "questionsmall",
  "asuperior",
  "bsuperior",
  "centsuperior",
  "dsuperior",
  "esuperior",
  "isuperior",
  "lsuperior",
  "msuperior",
  "nsuperior",
  "osuperior",
  "rsuperior",
  "ssuperior",
  "tsuperior",
  "ff",
  "ffi",
  "ffl",
  "parenleftinferior",
  "parenrightinferior",
  "Circumflexsmall",
  "hyphensuperior",
  "Gravesmall",
  "Asmall",
  "Bsmall",
  "Csmall",
  "Dsmall",
  "Esmall",
  "Fsmall",
  "Gsmall",
  "Hsmall",
  "Ismall",
  "Jsmall",
  "Ksmall",
  "Lsmall",
  "Msmall",
  "Nsmall",
  "Osmall",
  "Psmall",
  "Qsmall",
  "Rsmall",
  "Ssmall",
  "Tsmall",
  "Usmall",
  "Vsmall",
  "Wsmall",
  "Xsmall",
  "Ysmall",
  "Zsmall",
  "colonmonetary",
  "onefitted",
  "rupiah",
  "Tildesmall",
  "exclamdownsmall",
  "centoldstyle",
  "Lslashsmall",
  "Scaronsmall",
  "Zcaronsmall",
  "Dieresissmall",
  "Brevesmall",
  "Caronsmall",
  "Dotaccentsmall",
  "Macronsmall",
  "figuredash",
  "hypheninferior",
  "Ogoneksmall",
  "Ringsmall",
  "Cedillasmall",
  "questiondownsmall",
  "oneeighth",
  "threeeighths",
  "fiveeighths",
  "seveneighths",
  "onethird",
  "twothirds",
  "zerosuperior",
  "foursuperior",
  "fivesuperior",
  "sixsuperior",
  "sevensuperior",
  "eightsuperior",
  "ninesuperior",
  "zeroinferior",
  "oneinferior",
  "twoinferior",
  "threeinferior",
  "fourinferior",
  "fiveinferior",
  "sixinferior",
  "seveninferior",
  "eightinferior",
  "nineinferior",
  "centinferior",
  "dollarinferior",
  "periodinferior",
  "commainferior",
  "Agravesmall",
  "Aacutesmall",
  "Acircumflexsmall",
  "Atildesmall",
  "Adieresissmall",
  "Aringsmall",
  "AEsmall",
  "Ccedillasmall",
  "Egravesmall",
  "Eacutesmall",
  "Ecircumflexsmall",
  "Edieresissmall",
  "Igravesmall",
  "Iacutesmall",
  "Icircumflexsmall",
  "Idieresissmall",
  "Ethsmall",
  "Ntildesmall",
  "Ogravesmall",
  "Oacutesmall",
  "Ocircumflexsmall",
  "Otildesmall",
  "Odieresissmall",
  "OEsmall",
  "Oslashsmall",
  "Ugravesmall",
  "Uacutesmall",
  "Ucircumflexsmall",
  "Udieresissmall",
  "Yacutesmall",
  "Thornsmall",
  "Ydieresissmall",
  "001.000",
  "001.001",
  "001.002",
  "001.003",
  "Black",
  "Bold",
  "Book",
  "Light",
  "Medium",
  "Regular",
  "Roman",
  "Semibold"
];
var cffStandardEncoding = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quoteright",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "quoteleft",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "exclamdown",
  "cent",
  "sterling",
  "fraction",
  "yen",
  "florin",
  "section",
  "currency",
  "quotesingle",
  "quotedblleft",
  "guillemotleft",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "",
  "endash",
  "dagger",
  "daggerdbl",
  "periodcentered",
  "",
  "paragraph",
  "bullet",
  "quotesinglbase",
  "quotedblbase",
  "quotedblright",
  "guillemotright",
  "ellipsis",
  "perthousand",
  "",
  "questiondown",
  "",
  "grave",
  "acute",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "dieresis",
  "",
  "ring",
  "cedilla",
  "",
  "hungarumlaut",
  "ogonek",
  "caron",
  "emdash",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "AE",
  "",
  "ordfeminine",
  "",
  "",
  "",
  "",
  "Lslash",
  "Oslash",
  "OE",
  "ordmasculine",
  "",
  "",
  "",
  "",
  "",
  "ae",
  "",
  "",
  "",
  "dotlessi",
  "",
  "",
  "lslash",
  "oslash",
  "oe",
  "germandbls"
];
var cffExpertEncoding = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "space",
  "exclamsmall",
  "Hungarumlautsmall",
  "",
  "dollaroldstyle",
  "dollarsuperior",
  "ampersandsmall",
  "Acutesmall",
  "parenleftsuperior",
  "parenrightsuperior",
  "twodotenleader",
  "onedotenleader",
  "comma",
  "hyphen",
  "period",
  "fraction",
  "zerooldstyle",
  "oneoldstyle",
  "twooldstyle",
  "threeoldstyle",
  "fouroldstyle",
  "fiveoldstyle",
  "sixoldstyle",
  "sevenoldstyle",
  "eightoldstyle",
  "nineoldstyle",
  "colon",
  "semicolon",
  "commasuperior",
  "threequartersemdash",
  "periodsuperior",
  "questionsmall",
  "",
  "asuperior",
  "bsuperior",
  "centsuperior",
  "dsuperior",
  "esuperior",
  "",
  "",
  "isuperior",
  "",
  "",
  "lsuperior",
  "msuperior",
  "nsuperior",
  "osuperior",
  "",
  "",
  "rsuperior",
  "ssuperior",
  "tsuperior",
  "",
  "ff",
  "fi",
  "fl",
  "ffi",
  "ffl",
  "parenleftinferior",
  "",
  "parenrightinferior",
  "Circumflexsmall",
  "hyphensuperior",
  "Gravesmall",
  "Asmall",
  "Bsmall",
  "Csmall",
  "Dsmall",
  "Esmall",
  "Fsmall",
  "Gsmall",
  "Hsmall",
  "Ismall",
  "Jsmall",
  "Ksmall",
  "Lsmall",
  "Msmall",
  "Nsmall",
  "Osmall",
  "Psmall",
  "Qsmall",
  "Rsmall",
  "Ssmall",
  "Tsmall",
  "Usmall",
  "Vsmall",
  "Wsmall",
  "Xsmall",
  "Ysmall",
  "Zsmall",
  "colonmonetary",
  "onefitted",
  "rupiah",
  "Tildesmall",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "exclamdownsmall",
  "centoldstyle",
  "Lslashsmall",
  "",
  "",
  "Scaronsmall",
  "Zcaronsmall",
  "Dieresissmall",
  "Brevesmall",
  "Caronsmall",
  "",
  "Dotaccentsmall",
  "",
  "",
  "Macronsmall",
  "",
  "",
  "figuredash",
  "hypheninferior",
  "",
  "",
  "Ogoneksmall",
  "Ringsmall",
  "Cedillasmall",
  "",
  "",
  "",
  "onequarter",
  "onehalf",
  "threequarters",
  "questiondownsmall",
  "oneeighth",
  "threeeighths",
  "fiveeighths",
  "seveneighths",
  "onethird",
  "twothirds",
  "",
  "",
  "zerosuperior",
  "onesuperior",
  "twosuperior",
  "threesuperior",
  "foursuperior",
  "fivesuperior",
  "sixsuperior",
  "sevensuperior",
  "eightsuperior",
  "ninesuperior",
  "zeroinferior",
  "oneinferior",
  "twoinferior",
  "threeinferior",
  "fourinferior",
  "fiveinferior",
  "sixinferior",
  "seveninferior",
  "eightinferior",
  "nineinferior",
  "centinferior",
  "dollarinferior",
  "periodinferior",
  "commainferior",
  "Agravesmall",
  "Aacutesmall",
  "Acircumflexsmall",
  "Atildesmall",
  "Adieresissmall",
  "Aringsmall",
  "AEsmall",
  "Ccedillasmall",
  "Egravesmall",
  "Eacutesmall",
  "Ecircumflexsmall",
  "Edieresissmall",
  "Igravesmall",
  "Iacutesmall",
  "Icircumflexsmall",
  "Idieresissmall",
  "Ethsmall",
  "Ntildesmall",
  "Ogravesmall",
  "Oacutesmall",
  "Ocircumflexsmall",
  "Otildesmall",
  "Odieresissmall",
  "OEsmall",
  "Oslashsmall",
  "Ugravesmall",
  "Uacutesmall",
  "Ucircumflexsmall",
  "Udieresissmall",
  "Yacutesmall",
  "Thornsmall",
  "Ydieresissmall"
];
function DefaultEncoding(font) {
  this.font = font;
}
DefaultEncoding.prototype.charToGlyphIndex = function(c3) {
  var code = c3.codePointAt(0);
  var glyphs = this.font.glyphs;
  if (glyphs) {
    for (var i2 = 0; i2 < glyphs.length; i2 += 1) {
      var glyph = glyphs.get(i2);
      for (var j2 = 0; j2 < glyph.unicodes.length; j2 += 1) {
        if (glyph.unicodes[j2] === code) {
          return i2;
        }
      }
    }
  }
  return null;
};
function CmapEncoding(cmap2) {
  this.cmap = cmap2;
}
CmapEncoding.prototype.charToGlyphIndex = function(c3) {
  return this.cmap.glyphIndexMap[c3.codePointAt(0)] || 0;
};
function CffEncoding(encoding, charset) {
  this.encoding = encoding;
  this.charset = charset;
}
CffEncoding.prototype.charToGlyphIndex = function(s2) {
  var code = s2.codePointAt(0);
  var charName = this.encoding[code];
  return this.charset.indexOf(charName);
};
function addGlyphNamesAll(font) {
  var glyph;
  var glyphIndexMap = font.tables.cmap.glyphIndexMap;
  var charCodes = Object.keys(glyphIndexMap);
  for (var i2 = 0; i2 < charCodes.length; i2 += 1) {
    var c3 = charCodes[i2];
    var glyphIndex = glyphIndexMap[c3];
    glyph = font.glyphs.get(glyphIndex);
    glyph.addUnicode(parseInt(c3));
  }
}
function addGlyphNamesToUnicodeMap(font) {
  font._IndexToUnicodeMap = {};
  var glyphIndexMap = font.tables.cmap.glyphIndexMap;
  var charCodes = Object.keys(glyphIndexMap);
  for (var i2 = 0; i2 < charCodes.length; i2 += 1) {
    var c3 = charCodes[i2];
    var glyphIndex = glyphIndexMap[c3];
    if (font._IndexToUnicodeMap[glyphIndex] === void 0) {
      font._IndexToUnicodeMap[glyphIndex] = {
        unicodes: [parseInt(c3)]
      };
    } else {
      font._IndexToUnicodeMap[glyphIndex].unicodes.push(parseInt(c3));
    }
  }
}
function addGlyphNames(font, opt) {
  if (opt.lowMemory) {
    addGlyphNamesToUnicodeMap(font);
  } else {
    addGlyphNamesAll(font);
  }
}
function fail(message) {
  throw new Error(message);
}
function argument(predicate, message) {
  if (!predicate) {
    fail(message);
  }
}
var check = { fail, argument, assert: argument };
function getPathDefinition(glyph, path2) {
  var _path = path2 || new Path();
  return {
    configurable: true,
    get: function() {
      if (typeof _path === "function") {
        _path = _path();
      }
      return _path;
    },
    set: function(p2) {
      _path = p2;
    }
  };
}
function Glyph(options) {
  this.bindConstructorValues(options);
}
Glyph.prototype.bindConstructorValues = function(options) {
  this.index = options.index || 0;
  this.name = options.name || null;
  this.unicode = options.unicode || void 0;
  this.unicodes = options.unicodes || options.unicode !== void 0 ? [options.unicode] : [];
  if ("xMin" in options) {
    this.xMin = options.xMin;
  }
  if ("yMin" in options) {
    this.yMin = options.yMin;
  }
  if ("xMax" in options) {
    this.xMax = options.xMax;
  }
  if ("yMax" in options) {
    this.yMax = options.yMax;
  }
  if ("advanceWidth" in options) {
    this.advanceWidth = options.advanceWidth;
  }
  Object.defineProperty(this, "path", getPathDefinition(this, options.path));
};
Glyph.prototype.addUnicode = function(unicode) {
  if (this.unicodes.length === 0) {
    this.unicode = unicode;
  }
  this.unicodes.push(unicode);
};
Glyph.prototype.getPath = function(x3, y2, fontSize, options, font) {
  x3 = x3 !== void 0 ? x3 : 0;
  y2 = y2 !== void 0 ? y2 : 0;
  fontSize = fontSize !== void 0 ? fontSize : 72;
  var commands;
  var hPoints;
  if (!options) {
    options = {};
  }
  var xScale = options.xScale;
  var yScale = options.yScale;
  if (options.hinting && font && font.hinting) {
    hPoints = this.path && font.hinting.exec(this, fontSize);
  }
  if (hPoints) {
    commands = font.hinting.getCommands(hPoints);
    x3 = Math.round(x3);
    y2 = Math.round(y2);
    xScale = yScale = 1;
  } else {
    commands = this.path.commands;
    var scale = 1 / (this.path.unitsPerEm || 1e3) * fontSize;
    if (xScale === void 0) {
      xScale = scale;
    }
    if (yScale === void 0) {
      yScale = scale;
    }
  }
  var p2 = new Path();
  for (var i2 = 0; i2 < commands.length; i2 += 1) {
    var cmd = commands[i2];
    if (cmd.type === "M") {
      p2.moveTo(x3 + cmd.x * xScale, y2 + -cmd.y * yScale);
    } else if (cmd.type === "L") {
      p2.lineTo(x3 + cmd.x * xScale, y2 + -cmd.y * yScale);
    } else if (cmd.type === "Q") {
      p2.quadraticCurveTo(
        x3 + cmd.x1 * xScale,
        y2 + -cmd.y1 * yScale,
        x3 + cmd.x * xScale,
        y2 + -cmd.y * yScale
      );
    } else if (cmd.type === "C") {
      p2.curveTo(
        x3 + cmd.x1 * xScale,
        y2 + -cmd.y1 * yScale,
        x3 + cmd.x2 * xScale,
        y2 + -cmd.y2 * yScale,
        x3 + cmd.x * xScale,
        y2 + -cmd.y * yScale
      );
    } else if (cmd.type === "Z") {
      p2.closePath();
    }
  }
  return p2;
};
Glyph.prototype.getContours = function() {
  if (this.points === void 0) {
    return [];
  }
  var contours = [];
  var currentContour = [];
  for (var i2 = 0; i2 < this.points.length; i2 += 1) {
    var pt = this.points[i2];
    currentContour.push(pt);
    if (pt.lastPointOfContour) {
      contours.push(currentContour);
      currentContour = [];
    }
  }
  check.argument(
    currentContour.length === 0,
    "There are still points left in the current contour."
  );
  return contours;
};
Glyph.prototype.getMetrics = function() {
  var commands = this.path.commands;
  var xCoords = [];
  var yCoords = [];
  for (var i2 = 0; i2 < commands.length; i2 += 1) {
    var cmd = commands[i2];
    if (cmd.type !== "Z") {
      xCoords.push(cmd.x);
      yCoords.push(cmd.y);
    }
    if (cmd.type === "Q" || cmd.type === "C") {
      xCoords.push(cmd.x1);
      yCoords.push(cmd.y1);
    }
    if (cmd.type === "C") {
      xCoords.push(cmd.x2);
      yCoords.push(cmd.y2);
    }
  }
  var metrics = {
    xMin: Math.min.apply(null, xCoords),
    yMin: Math.min.apply(null, yCoords),
    xMax: Math.max.apply(null, xCoords),
    yMax: Math.max.apply(null, yCoords),
    leftSideBearing: this.leftSideBearing
  };
  if (!isFinite(metrics.xMin)) {
    metrics.xMin = 0;
  }
  if (!isFinite(metrics.xMax)) {
    metrics.xMax = this.advanceWidth;
  }
  if (!isFinite(metrics.yMin)) {
    metrics.yMin = 0;
  }
  if (!isFinite(metrics.yMax)) {
    metrics.yMax = 0;
  }
  metrics.rightSideBearing = this.advanceWidth - metrics.leftSideBearing - (metrics.xMax - metrics.xMin);
  return metrics;
};
function defineDependentProperty(glyph, externalName, internalName) {
  Object.defineProperty(glyph, externalName, {
    get: function() {
      glyph.path;
      return glyph[internalName];
    },
    set: function(newValue) {
      glyph[internalName] = newValue;
    },
    enumerable: true,
    configurable: true
  });
}
function GlyphSet(font, glyphs) {
  this.font = font;
  this.glyphs = {};
  if (Array.isArray(glyphs)) {
    for (var i2 = 0; i2 < glyphs.length; i2++) {
      var glyph = glyphs[i2];
      glyph.path.unitsPerEm = font.unitsPerEm;
      this.glyphs[i2] = glyph;
    }
  }
  this.length = glyphs && glyphs.length || 0;
}
GlyphSet.prototype.get = function(index) {
  if (this.glyphs[index] === void 0) {
    this.font._push(index);
    if (typeof this.glyphs[index] === "function") {
      this.glyphs[index] = this.glyphs[index]();
    }
    var glyph = this.glyphs[index];
    var unicodeObj = this.font._IndexToUnicodeMap[index];
    if (unicodeObj) {
      for (var j2 = 0; j2 < unicodeObj.unicodes.length; j2++) {
        glyph.addUnicode(unicodeObj.unicodes[j2]);
      }
    }
    this.glyphs[index].advanceWidth = this.font._hmtxTableData[index].advanceWidth;
    this.glyphs[index].leftSideBearing = this.font._hmtxTableData[index].leftSideBearing;
  } else {
    if (typeof this.glyphs[index] === "function") {
      this.glyphs[index] = this.glyphs[index]();
    }
  }
  return this.glyphs[index];
};
GlyphSet.prototype.push = function(index, loader) {
  this.glyphs[index] = loader;
  this.length++;
};
function glyphLoader(font, index) {
  return new Glyph({ index, font });
}
function ttfGlyphLoader(font, index, parseGlyph2, data, position, buildPath2) {
  return function() {
    var glyph = new Glyph({ index, font });
    glyph.path = function() {
      parseGlyph2(glyph, data, position);
      var path2 = buildPath2(font.glyphs, glyph);
      path2.unitsPerEm = font.unitsPerEm;
      return path2;
    };
    defineDependentProperty(glyph, "xMin", "_xMin");
    defineDependentProperty(glyph, "xMax", "_xMax");
    defineDependentProperty(glyph, "yMin", "_yMin");
    defineDependentProperty(glyph, "yMax", "_yMax");
    return glyph;
  };
}
function cffGlyphLoader(font, index, parseCFFCharstring2, charstring) {
  return function() {
    var glyph = new Glyph({ index, font });
    glyph.path = function() {
      var path2 = parseCFFCharstring2(font, glyph, charstring);
      path2.unitsPerEm = font.unitsPerEm;
      return path2;
    };
    return glyph;
  };
}
var glyphset = { GlyphSet, glyphLoader, ttfGlyphLoader, cffGlyphLoader };
function searchTag(arr, tag) {
  var imin = 0;
  var imax = arr.length - 1;
  while (imin <= imax) {
    var imid = imin + imax >>> 1;
    var val = arr[imid].tag;
    if (val === tag) {
      return imid;
    } else if (val < tag) {
      imin = imid + 1;
    } else {
      imax = imid - 1;
    }
  }
  return -imin - 1;
}
function binSearch(arr, value) {
  var imin = 0;
  var imax = arr.length - 1;
  while (imin <= imax) {
    var imid = imin + imax >>> 1;
    var val = arr[imid];
    if (val === value) {
      return imid;
    } else if (val < value) {
      imin = imid + 1;
    } else {
      imax = imid - 1;
    }
  }
  return -imin - 1;
}
function searchRange(ranges, value) {
  var range;
  var imin = 0;
  var imax = ranges.length - 1;
  while (imin <= imax) {
    var imid = imin + imax >>> 1;
    range = ranges[imid];
    var start = range.start;
    if (start === value) {
      return range;
    } else if (start < value) {
      imin = imid + 1;
    } else {
      imax = imid - 1;
    }
  }
  if (imin > 0) {
    range = ranges[imin - 1];
    if (value > range.end) {
      return 0;
    }
    return range;
  }
}
function Layout(font, tableName) {
  this.font = font;
  this.tableName = tableName;
}
Layout.prototype = {
  /**
   * Binary search an object by "tag" property
   * @instance
   * @function searchTag
   * @memberof opentype.Layout
   * @param  {Array} arr
   * @param  {string} tag
   * @return {number}
   */
  searchTag,
  /**
   * Binary search in a list of numbers
   * @instance
   * @function binSearch
   * @memberof opentype.Layout
   * @param  {Array} arr
   * @param  {number} value
   * @return {number}
   */
  binSearch,
  /**
   * Get or create the Layout table (GSUB, GPOS etc).
   * @param  {boolean} create - Whether to create a new one.
   * @return {Object} The GSUB or GPOS table.
   */
  getTable: function(create) {
    var layout = this.font.tables[this.tableName];
    if (!layout && create) {
      layout = this.font.tables[this.tableName] = this.createDefaultTable();
    }
    return layout;
  },
  /**
   * Returns the best bet for a script name.
   * Returns 'DFLT' if it exists.
   * If not, returns 'latn' if it exists.
   * If neither exist, returns undefined.
   */
  getDefaultScriptName: function() {
    var layout = this.getTable();
    if (!layout) {
      return;
    }
    var hasLatn = false;
    for (var i2 = 0; i2 < layout.scripts.length; i2++) {
      var name = layout.scripts[i2].tag;
      if (name === "DFLT") {
        return name;
      }
      if (name === "latn") {
        hasLatn = true;
      }
    }
    if (hasLatn) {
      return "latn";
    }
  },
  /**
   * Returns all LangSysRecords in the given script.
   * @instance
   * @param {string} [script='DFLT']
   * @param {boolean} create - forces the creation of this script table if it doesn't exist.
   * @return {Object} An object with tag and script properties.
   */
  getScriptTable: function(script, create) {
    var layout = this.getTable(create);
    if (layout) {
      script = script || "DFLT";
      var scripts = layout.scripts;
      var pos = searchTag(layout.scripts, script);
      if (pos >= 0) {
        return scripts[pos].script;
      } else if (create) {
        var scr = {
          tag: script,
          script: {
            defaultLangSys: {
              reserved: 0,
              reqFeatureIndex: 65535,
              featureIndexes: []
            },
            langSysRecords: []
          }
        };
        scripts.splice(-1 - pos, 0, scr);
        return scr.script;
      }
    }
  },
  /**
   * Returns a language system table
   * @instance
   * @param {string} [script='DFLT']
   * @param {string} [language='dlft']
   * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
   * @return {Object}
   */
  getLangSysTable: function(script, language, create) {
    var scriptTable = this.getScriptTable(script, create);
    if (scriptTable) {
      if (!language || language === "dflt" || language === "DFLT") {
        return scriptTable.defaultLangSys;
      }
      var pos = searchTag(scriptTable.langSysRecords, language);
      if (pos >= 0) {
        return scriptTable.langSysRecords[pos].langSys;
      } else if (create) {
        var langSysRecord = {
          tag: language,
          langSys: {
            reserved: 0,
            reqFeatureIndex: 65535,
            featureIndexes: []
          }
        };
        scriptTable.langSysRecords.splice(-1 - pos, 0, langSysRecord);
        return langSysRecord.langSys;
      }
    }
  },
  /**
   * Get a specific feature table.
   * @instance
   * @param {string} [script='DFLT']
   * @param {string} [language='dlft']
   * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
   * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
   * @return {Object}
   */
  getFeatureTable: function(script, language, feature, create) {
    var langSysTable2 = this.getLangSysTable(script, language, create);
    if (langSysTable2) {
      var featureRecord;
      var featIndexes = langSysTable2.featureIndexes;
      var allFeatures = this.font.tables[this.tableName].features;
      for (var i2 = 0; i2 < featIndexes.length; i2++) {
        featureRecord = allFeatures[featIndexes[i2]];
        if (featureRecord.tag === feature) {
          return featureRecord.feature;
        }
      }
      if (create) {
        var index = allFeatures.length;
        check.assert(
          index === 0 || feature >= allFeatures[index - 1].tag,
          "Features must be added in alphabetical order."
        );
        featureRecord = {
          tag: feature,
          feature: { params: 0, lookupListIndexes: [] }
        };
        allFeatures.push(featureRecord);
        featIndexes.push(index);
        return featureRecord.feature;
      }
    }
  },
  /**
   * Get the lookup tables of a given type for a script/language/feature.
   * @instance
   * @param {string} [script='DFLT']
   * @param {string} [language='dlft']
   * @param {string} feature - 4-letter feature code
   * @param {number} lookupType - 1 to 9
   * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
   * @return {Object[]}
   */
  getLookupTables: function(script, language, feature, lookupType, create) {
    var featureTable = this.getFeatureTable(
      script,
      language,
      feature,
      create
    );
    var tables = [];
    if (featureTable) {
      var lookupTable;
      var lookupListIndexes = featureTable.lookupListIndexes;
      var allLookups = this.font.tables[this.tableName].lookups;
      for (var i2 = 0; i2 < lookupListIndexes.length; i2++) {
        lookupTable = allLookups[lookupListIndexes[i2]];
        if (lookupTable.lookupType === lookupType) {
          tables.push(lookupTable);
        }
      }
      if (tables.length === 0 && create) {
        lookupTable = {
          lookupType,
          lookupFlag: 0,
          subtables: [],
          markFilteringSet: void 0
        };
        var index = allLookups.length;
        allLookups.push(lookupTable);
        lookupListIndexes.push(index);
        return [lookupTable];
      }
    }
    return tables;
  },
  /**
   * Find a glyph in a class definition table
   * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
   * @param {object} classDefTable - an OpenType Layout class definition table
   * @param {number} glyphIndex - the index of the glyph to find
   * @returns {number} -1 if not found
   */
  getGlyphClass: function(classDefTable, glyphIndex) {
    switch (classDefTable.format) {
      case 1:
        if (classDefTable.startGlyph <= glyphIndex && glyphIndex < classDefTable.startGlyph + classDefTable.classes.length) {
          return classDefTable.classes[glyphIndex - classDefTable.startGlyph];
        }
        return 0;
      case 2:
        var range = searchRange(classDefTable.ranges, glyphIndex);
        return range ? range.classId : 0;
    }
  },
  /**
   * Find a glyph in a coverage table
   * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
   * @param {object} coverageTable - an OpenType Layout coverage table
   * @param {number} glyphIndex - the index of the glyph to find
   * @returns {number} -1 if not found
   */
  getCoverageIndex: function(coverageTable, glyphIndex) {
    switch (coverageTable.format) {
      case 1:
        var index = binSearch(coverageTable.glyphs, glyphIndex);
        return index >= 0 ? index : -1;
      case 2:
        var range = searchRange(coverageTable.ranges, glyphIndex);
        return range ? range.index + glyphIndex - range.start : -1;
    }
  },
  /**
   * Returns the list of glyph indexes of a coverage table.
   * Format 1: the list is stored raw
   * Format 2: compact list as range records.
   * @instance
   * @param  {Object} coverageTable
   * @return {Array}
   */
  expandCoverage: function(coverageTable) {
    if (coverageTable.format === 1) {
      return coverageTable.glyphs;
    } else {
      var glyphs = [];
      var ranges = coverageTable.ranges;
      for (var i2 = 0; i2 < ranges.length; i2++) {
        var range = ranges[i2];
        var start = range.start;
        var end = range.end;
        for (var j2 = start; j2 <= end; j2++) {
          glyphs.push(j2);
        }
      }
      return glyphs;
    }
  }
};
function Position(font) {
  Layout.call(this, font, "gpos");
}
Position.prototype = Layout.prototype;
Position.prototype.init = function() {
  var script = this.getDefaultScriptName();
  this.defaultKerningTables = this.getKerningTables(script);
};
Position.prototype.getKerningValue = function(kerningLookups, leftIndex, rightIndex) {
  for (var i2 = 0; i2 < kerningLookups.length; i2++) {
    var subtables = kerningLookups[i2].subtables;
    for (var j2 = 0; j2 < subtables.length; j2++) {
      var subtable = subtables[j2];
      var covIndex = this.getCoverageIndex(subtable.coverage, leftIndex);
      if (covIndex < 0) {
        continue;
      }
      switch (subtable.posFormat) {
        case 1:
          var pairSet = subtable.pairSets[covIndex];
          for (var k2 = 0; k2 < pairSet.length; k2++) {
            var pair = pairSet[k2];
            if (pair.secondGlyph === rightIndex) {
              return pair.value1 && pair.value1.xAdvance || 0;
            }
          }
          break;
        // left glyph found, not right glyph - try next subtable
        case 2:
          var class1 = this.getGlyphClass(subtable.classDef1, leftIndex);
          var class2 = this.getGlyphClass(subtable.classDef2, rightIndex);
          var pair$1 = subtable.classRecords[class1][class2];
          return pair$1.value1 && pair$1.value1.xAdvance || 0;
      }
    }
  }
  return 0;
};
Position.prototype.getKerningTables = function(script, language) {
  if (this.font.tables.gpos) {
    return this.getLookupTables(script, language, "kern", 2);
  }
};
function Substitution(font) {
  Layout.call(this, font, "gsub");
}
function arraysEqual(ar1, ar2) {
  var n2 = ar1.length;
  if (n2 !== ar2.length) {
    return false;
  }
  for (var i2 = 0; i2 < n2; i2++) {
    if (ar1[i2] !== ar2[i2]) {
      return false;
    }
  }
  return true;
}
function getSubstFormat(lookupTable, format, defaultSubtable) {
  var subtables = lookupTable.subtables;
  for (var i2 = 0; i2 < subtables.length; i2++) {
    var subtable = subtables[i2];
    if (subtable.substFormat === format) {
      return subtable;
    }
  }
  if (defaultSubtable) {
    subtables.push(defaultSubtable);
    return defaultSubtable;
  }
  return void 0;
}
Substitution.prototype = Layout.prototype;
Substitution.prototype.createDefaultTable = function() {
  return {
    version: 1,
    scripts: [
      {
        tag: "DFLT",
        script: {
          defaultLangSys: {
            reserved: 0,
            reqFeatureIndex: 65535,
            featureIndexes: []
          },
          langSysRecords: []
        }
      }
    ],
    features: [],
    lookups: []
  };
};
Substitution.prototype.getSingle = function(feature, script, language) {
  var substitutions = [];
  var lookupTables = this.getLookupTables(script, language, feature, 1);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i2 = 0; i2 < subtables.length; i2++) {
      var subtable = subtables[i2];
      var glyphs = this.expandCoverage(subtable.coverage);
      var j2 = void 0;
      if (subtable.substFormat === 1) {
        var delta = subtable.deltaGlyphId;
        for (j2 = 0; j2 < glyphs.length; j2++) {
          var glyph = glyphs[j2];
          substitutions.push({ sub: glyph, by: glyph + delta });
        }
      } else {
        var substitute = subtable.substitute;
        for (j2 = 0; j2 < glyphs.length; j2++) {
          substitutions.push({ sub: glyphs[j2], by: substitute[j2] });
        }
      }
    }
  }
  return substitutions;
};
Substitution.prototype.getMultiple = function(feature, script, language) {
  var substitutions = [];
  var lookupTables = this.getLookupTables(script, language, feature, 2);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i2 = 0; i2 < subtables.length; i2++) {
      var subtable = subtables[i2];
      var glyphs = this.expandCoverage(subtable.coverage);
      var j2 = void 0;
      for (j2 = 0; j2 < glyphs.length; j2++) {
        var glyph = glyphs[j2];
        var replacements = subtable.sequences[j2];
        substitutions.push({ sub: glyph, by: replacements });
      }
    }
  }
  return substitutions;
};
Substitution.prototype.getAlternates = function(feature, script, language) {
  var alternates = [];
  var lookupTables = this.getLookupTables(script, language, feature, 3);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i2 = 0; i2 < subtables.length; i2++) {
      var subtable = subtables[i2];
      var glyphs = this.expandCoverage(subtable.coverage);
      var alternateSets = subtable.alternateSets;
      for (var j2 = 0; j2 < glyphs.length; j2++) {
        alternates.push({ sub: glyphs[j2], by: alternateSets[j2] });
      }
    }
  }
  return alternates;
};
Substitution.prototype.getLigatures = function(feature, script, language) {
  var ligatures = [];
  var lookupTables = this.getLookupTables(script, language, feature, 4);
  for (var idx = 0; idx < lookupTables.length; idx++) {
    var subtables = lookupTables[idx].subtables;
    for (var i2 = 0; i2 < subtables.length; i2++) {
      var subtable = subtables[i2];
      var glyphs = this.expandCoverage(subtable.coverage);
      var ligatureSets = subtable.ligatureSets;
      for (var j2 = 0; j2 < glyphs.length; j2++) {
        var startGlyph = glyphs[j2];
        var ligSet = ligatureSets[j2];
        for (var k2 = 0; k2 < ligSet.length; k2++) {
          var lig = ligSet[k2];
          ligatures.push({
            sub: [startGlyph].concat(lig.components),
            by: lig.ligGlyph
          });
        }
      }
    }
  }
  return ligatures;
};
Substitution.prototype.addSingle = function(feature, substitution, script, language) {
  var lookupTable = this.getLookupTables(
    script,
    language,
    feature,
    1,
    true
  )[0];
  var subtable = getSubstFormat(lookupTable, 2, {
    // lookup type 1 subtable, format 2, coverage format 1
    substFormat: 2,
    coverage: { format: 1, glyphs: [] },
    substitute: []
  });
  check.assert(
    subtable.coverage.format === 1,
    "Single: unable to modify coverage table format " + subtable.coverage.format
  );
  var coverageGlyph = substitution.sub;
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos < 0) {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.substitute.splice(pos, 0, 0);
  }
  subtable.substitute[pos] = substitution.by;
};
Substitution.prototype.addMultiple = function(feature, substitution, script, language) {
  check.assert(
    substitution.by instanceof Array && substitution.by.length > 1,
    'Multiple: "by" must be an array of two or more ids'
  );
  var lookupTable = this.getLookupTables(
    script,
    language,
    feature,
    2,
    true
  )[0];
  var subtable = getSubstFormat(lookupTable, 1, {
    // lookup type 2 subtable, format 1, coverage format 1
    substFormat: 1,
    coverage: { format: 1, glyphs: [] },
    sequences: []
  });
  check.assert(
    subtable.coverage.format === 1,
    "Multiple: unable to modify coverage table format " + subtable.coverage.format
  );
  var coverageGlyph = substitution.sub;
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos < 0) {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.sequences.splice(pos, 0, 0);
  }
  subtable.sequences[pos] = substitution.by;
};
Substitution.prototype.addAlternate = function(feature, substitution, script, language) {
  var lookupTable = this.getLookupTables(
    script,
    language,
    feature,
    3,
    true
  )[0];
  var subtable = getSubstFormat(lookupTable, 1, {
    // lookup type 3 subtable, format 1, coverage format 1
    substFormat: 1,
    coverage: { format: 1, glyphs: [] },
    alternateSets: []
  });
  check.assert(
    subtable.coverage.format === 1,
    "Alternate: unable to modify coverage table format " + subtable.coverage.format
  );
  var coverageGlyph = substitution.sub;
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos < 0) {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.alternateSets.splice(pos, 0, 0);
  }
  subtable.alternateSets[pos] = substitution.by;
};
Substitution.prototype.addLigature = function(feature, ligature, script, language) {
  var lookupTable = this.getLookupTables(
    script,
    language,
    feature,
    4,
    true
  )[0];
  var subtable = lookupTable.subtables[0];
  if (!subtable) {
    subtable = {
      // lookup type 4 subtable, format 1, coverage format 1
      substFormat: 1,
      coverage: { format: 1, glyphs: [] },
      ligatureSets: []
    };
    lookupTable.subtables[0] = subtable;
  }
  check.assert(
    subtable.coverage.format === 1,
    "Ligature: unable to modify coverage table format " + subtable.coverage.format
  );
  var coverageGlyph = ligature.sub[0];
  var ligComponents = ligature.sub.slice(1);
  var ligatureTable = {
    ligGlyph: ligature.by,
    components: ligComponents
  };
  var pos = this.binSearch(subtable.coverage.glyphs, coverageGlyph);
  if (pos >= 0) {
    var ligatureSet = subtable.ligatureSets[pos];
    for (var i2 = 0; i2 < ligatureSet.length; i2++) {
      if (arraysEqual(ligatureSet[i2].components, ligComponents)) {
        return;
      }
    }
    ligatureSet.push(ligatureTable);
  } else {
    pos = -1 - pos;
    subtable.coverage.glyphs.splice(pos, 0, coverageGlyph);
    subtable.ligatureSets.splice(pos, 0, [ligatureTable]);
  }
};
Substitution.prototype.getFeature = function(feature, script, language) {
  if (/ss\d\d/.test(feature)) {
    return this.getSingle(feature, script, language);
  }
  switch (feature) {
    case "aalt":
    case "salt":
      return this.getSingle(feature, script, language).concat(
        this.getAlternates(feature, script, language)
      );
    case "dlig":
    case "liga":
    case "rlig":
      return this.getLigatures(feature, script, language);
    case "ccmp":
      return this.getMultiple(feature, script, language).concat(
        this.getLigatures(feature, script, language)
      );
    case "stch":
      return this.getMultiple(feature, script, language);
  }
  return void 0;
};
Substitution.prototype.add = function(feature, sub, script, language) {
  if (/ss\d\d/.test(feature)) {
    return this.addSingle(feature, sub, script, language);
  }
  switch (feature) {
    case "aalt":
    case "salt":
      if (typeof sub.by === "number") {
        return this.addSingle(feature, sub, script, language);
      }
      return this.addAlternate(feature, sub, script, language);
    case "dlig":
    case "liga":
    case "rlig":
      return this.addLigature(feature, sub, script, language);
    case "ccmp":
      if (sub.by instanceof Array) {
        return this.addMultiple(feature, sub, script, language);
      }
      return this.addLigature(feature, sub, script, language);
  }
  return void 0;
};
function checkArgument(expression, message) {
  if (!expression) {
    throw message;
  }
}
function getByte(dataView, offset) {
  return dataView.getUint8(offset);
}
function getUShort(dataView, offset) {
  return dataView.getUint16(offset, false);
}
function getShort(dataView, offset) {
  return dataView.getInt16(offset, false);
}
function getULong(dataView, offset) {
  return dataView.getUint32(offset, false);
}
function getFixed(dataView, offset) {
  var decimal = dataView.getInt16(offset, false);
  var fraction = dataView.getUint16(offset + 2, false);
  return decimal + fraction / 65535;
}
function getTag(dataView, offset) {
  var tag = "";
  for (var i2 = offset; i2 < offset + 4; i2 += 1) {
    tag += String.fromCharCode(dataView.getInt8(i2));
  }
  return tag;
}
function getOffset(dataView, offset, offSize) {
  var v4 = 0;
  for (var i2 = 0; i2 < offSize; i2 += 1) {
    v4 <<= 8;
    v4 += dataView.getUint8(offset + i2);
  }
  return v4;
}
function getBytes(dataView, startOffset, endOffset) {
  var bytes = [];
  for (var i2 = startOffset; i2 < endOffset; i2 += 1) {
    bytes.push(dataView.getUint8(i2));
  }
  return bytes;
}
function bytesToString(bytes) {
  var s2 = "";
  for (var i2 = 0; i2 < bytes.length; i2 += 1) {
    s2 += String.fromCharCode(bytes[i2]);
  }
  return s2;
}
var typeOffsets = {
  byte: 1,
  uShort: 2,
  short: 2,
  uLong: 4,
  fixed: 4,
  longDateTime: 8,
  tag: 4
};
function Parser(data, offset) {
  this.data = data;
  this.offset = offset;
  this.relativeOffset = 0;
}
Parser.prototype.parseByte = function() {
  var v4 = this.data.getUint8(this.offset + this.relativeOffset);
  this.relativeOffset += 1;
  return v4;
};
Parser.prototype.parseChar = function() {
  var v4 = this.data.getInt8(this.offset + this.relativeOffset);
  this.relativeOffset += 1;
  return v4;
};
Parser.prototype.parseCard8 = Parser.prototype.parseByte;
Parser.prototype.parseUShort = function() {
  var v4 = this.data.getUint16(this.offset + this.relativeOffset);
  this.relativeOffset += 2;
  return v4;
};
Parser.prototype.parseCard16 = Parser.prototype.parseUShort;
Parser.prototype.parseSID = Parser.prototype.parseUShort;
Parser.prototype.parseOffset16 = Parser.prototype.parseUShort;
Parser.prototype.parseShort = function() {
  var v4 = this.data.getInt16(this.offset + this.relativeOffset);
  this.relativeOffset += 2;
  return v4;
};
Parser.prototype.parseF2Dot14 = function() {
  var v4 = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
  this.relativeOffset += 2;
  return v4;
};
Parser.prototype.parseULong = function() {
  var v4 = getULong(this.data, this.offset + this.relativeOffset);
  this.relativeOffset += 4;
  return v4;
};
Parser.prototype.parseOffset32 = Parser.prototype.parseULong;
Parser.prototype.parseFixed = function() {
  var v4 = getFixed(this.data, this.offset + this.relativeOffset);
  this.relativeOffset += 4;
  return v4;
};
Parser.prototype.parseString = function(length) {
  var dataView = this.data;
  var offset = this.offset + this.relativeOffset;
  var string = "";
  this.relativeOffset += length;
  for (var i2 = 0; i2 < length; i2++) {
    string += String.fromCharCode(dataView.getUint8(offset + i2));
  }
  return string;
};
Parser.prototype.parseTag = function() {
  return this.parseString(4);
};
Parser.prototype.parseLongDateTime = function() {
  var v4 = getULong(this.data, this.offset + this.relativeOffset + 4);
  v4 -= 2082844800;
  this.relativeOffset += 8;
  return v4;
};
Parser.prototype.parseVersion = function(minorBase) {
  var major = getUShort(this.data, this.offset + this.relativeOffset);
  var minor = getUShort(this.data, this.offset + this.relativeOffset + 2);
  this.relativeOffset += 4;
  if (minorBase === void 0) {
    minorBase = 4096;
  }
  return major + minor / minorBase / 10;
};
Parser.prototype.skip = function(type, amount) {
  if (amount === void 0) {
    amount = 1;
  }
  this.relativeOffset += typeOffsets[type] * amount;
};
Parser.prototype.parseULongList = function(count) {
  if (count === void 0) {
    count = this.parseULong();
  }
  var offsets = new Array(count);
  var dataView = this.data;
  var offset = this.offset + this.relativeOffset;
  for (var i2 = 0; i2 < count; i2++) {
    offsets[i2] = dataView.getUint32(offset);
    offset += 4;
  }
  this.relativeOffset += count * 4;
  return offsets;
};
Parser.prototype.parseOffset16List = Parser.prototype.parseUShortList = function(count) {
  if (count === void 0) {
    count = this.parseUShort();
  }
  var offsets = new Array(count);
  var dataView = this.data;
  var offset = this.offset + this.relativeOffset;
  for (var i2 = 0; i2 < count; i2++) {
    offsets[i2] = dataView.getUint16(offset);
    offset += 2;
  }
  this.relativeOffset += count * 2;
  return offsets;
};
Parser.prototype.parseShortList = function(count) {
  var list = new Array(count);
  var dataView = this.data;
  var offset = this.offset + this.relativeOffset;
  for (var i2 = 0; i2 < count; i2++) {
    list[i2] = dataView.getInt16(offset);
    offset += 2;
  }
  this.relativeOffset += count * 2;
  return list;
};
Parser.prototype.parseByteList = function(count) {
  var list = new Array(count);
  var dataView = this.data;
  var offset = this.offset + this.relativeOffset;
  for (var i2 = 0; i2 < count; i2++) {
    list[i2] = dataView.getUint8(offset++);
  }
  this.relativeOffset += count;
  return list;
};
Parser.prototype.parseList = function(count, itemCallback) {
  if (!itemCallback) {
    itemCallback = count;
    count = this.parseUShort();
  }
  var list = new Array(count);
  for (var i2 = 0; i2 < count; i2++) {
    list[i2] = itemCallback.call(this);
  }
  return list;
};
Parser.prototype.parseList32 = function(count, itemCallback) {
  if (!itemCallback) {
    itemCallback = count;
    count = this.parseULong();
  }
  var list = new Array(count);
  for (var i2 = 0; i2 < count; i2++) {
    list[i2] = itemCallback.call(this);
  }
  return list;
};
Parser.prototype.parseRecordList = function(count, recordDescription) {
  if (!recordDescription) {
    recordDescription = count;
    count = this.parseUShort();
  }
  var records = new Array(count);
  var fields = Object.keys(recordDescription);
  for (var i2 = 0; i2 < count; i2++) {
    var rec = {};
    for (var j2 = 0; j2 < fields.length; j2++) {
      var fieldName = fields[j2];
      var fieldType = recordDescription[fieldName];
      rec[fieldName] = fieldType.call(this);
    }
    records[i2] = rec;
  }
  return records;
};
Parser.prototype.parseRecordList32 = function(count, recordDescription) {
  if (!recordDescription) {
    recordDescription = count;
    count = this.parseULong();
  }
  var records = new Array(count);
  var fields = Object.keys(recordDescription);
  for (var i2 = 0; i2 < count; i2++) {
    var rec = {};
    for (var j2 = 0; j2 < fields.length; j2++) {
      var fieldName = fields[j2];
      var fieldType = recordDescription[fieldName];
      rec[fieldName] = fieldType.call(this);
    }
    records[i2] = rec;
  }
  return records;
};
Parser.prototype.parseStruct = function(description) {
  if (typeof description === "function") {
    return description.call(this);
  } else {
    var fields = Object.keys(description);
    var struct = {};
    for (var j2 = 0; j2 < fields.length; j2++) {
      var fieldName = fields[j2];
      var fieldType = description[fieldName];
      struct[fieldName] = fieldType.call(this);
    }
    return struct;
  }
};
Parser.prototype.parseValueRecord = function(valueFormat) {
  if (valueFormat === void 0) {
    valueFormat = this.parseUShort();
  }
  if (valueFormat === 0) {
    return;
  }
  var valueRecord = {};
  if (valueFormat & 1) {
    valueRecord.xPlacement = this.parseShort();
  }
  if (valueFormat & 2) {
    valueRecord.yPlacement = this.parseShort();
  }
  if (valueFormat & 4) {
    valueRecord.xAdvance = this.parseShort();
  }
  if (valueFormat & 8) {
    valueRecord.yAdvance = this.parseShort();
  }
  if (valueFormat & 16) {
    valueRecord.xPlaDevice = void 0;
    this.parseShort();
  }
  if (valueFormat & 32) {
    valueRecord.yPlaDevice = void 0;
    this.parseShort();
  }
  if (valueFormat & 64) {
    valueRecord.xAdvDevice = void 0;
    this.parseShort();
  }
  if (valueFormat & 128) {
    valueRecord.yAdvDevice = void 0;
    this.parseShort();
  }
  return valueRecord;
};
Parser.prototype.parseValueRecordList = function() {
  var valueFormat = this.parseUShort();
  var valueCount = this.parseUShort();
  var values = new Array(valueCount);
  for (var i2 = 0; i2 < valueCount; i2++) {
    values[i2] = this.parseValueRecord(valueFormat);
  }
  return values;
};
Parser.prototype.parsePointer = function(description) {
  var structOffset = this.parseOffset16();
  if (structOffset > 0) {
    return new Parser(this.data, this.offset + structOffset).parseStruct(description);
  }
  return void 0;
};
Parser.prototype.parsePointer32 = function(description) {
  var structOffset = this.parseOffset32();
  if (structOffset > 0) {
    return new Parser(this.data, this.offset + structOffset).parseStruct(description);
  }
  return void 0;
};
Parser.prototype.parseListOfLists = function(itemCallback) {
  var offsets = this.parseOffset16List();
  var count = offsets.length;
  var relativeOffset = this.relativeOffset;
  var list = new Array(count);
  for (var i2 = 0; i2 < count; i2++) {
    var start = offsets[i2];
    if (start === 0) {
      list[i2] = void 0;
      continue;
    }
    this.relativeOffset = start;
    if (itemCallback) {
      var subOffsets = this.parseOffset16List();
      var subList = new Array(subOffsets.length);
      for (var j2 = 0; j2 < subOffsets.length; j2++) {
        this.relativeOffset = start + subOffsets[j2];
        subList[j2] = itemCallback.call(this);
      }
      list[i2] = subList;
    } else {
      list[i2] = this.parseUShortList();
    }
  }
  this.relativeOffset = relativeOffset;
  return list;
};
Parser.prototype.parseCoverage = function() {
  var startOffset = this.offset + this.relativeOffset;
  var format = this.parseUShort();
  var count = this.parseUShort();
  if (format === 1) {
    return {
      format: 1,
      glyphs: this.parseUShortList(count)
    };
  } else if (format === 2) {
    var ranges = new Array(count);
    for (var i2 = 0; i2 < count; i2++) {
      ranges[i2] = {
        start: this.parseUShort(),
        end: this.parseUShort(),
        index: this.parseUShort()
      };
    }
    return {
      format: 2,
      ranges
    };
  }
  throw new Error("0x" + startOffset.toString(16) + ": Coverage format must be 1 or 2.");
};
Parser.prototype.parseClassDef = function() {
  var startOffset = this.offset + this.relativeOffset;
  var format = this.parseUShort();
  if (format === 1) {
    return {
      format: 1,
      startGlyph: this.parseUShort(),
      classes: this.parseUShortList()
    };
  } else if (format === 2) {
    return {
      format: 2,
      ranges: this.parseRecordList({
        start: Parser.uShort,
        end: Parser.uShort,
        classId: Parser.uShort
      })
    };
  }
  throw new Error("0x" + startOffset.toString(16) + ": ClassDef format must be 1 or 2.");
};
Parser.list = function(count, itemCallback) {
  return function() {
    return this.parseList(count, itemCallback);
  };
};
Parser.list32 = function(count, itemCallback) {
  return function() {
    return this.parseList32(count, itemCallback);
  };
};
Parser.recordList = function(count, recordDescription) {
  return function() {
    return this.parseRecordList(count, recordDescription);
  };
};
Parser.recordList32 = function(count, recordDescription) {
  return function() {
    return this.parseRecordList32(count, recordDescription);
  };
};
Parser.pointer = function(description) {
  return function() {
    return this.parsePointer(description);
  };
};
Parser.pointer32 = function(description) {
  return function() {
    return this.parsePointer32(description);
  };
};
Parser.tag = Parser.prototype.parseTag;
Parser.byte = Parser.prototype.parseByte;
Parser.uShort = Parser.offset16 = Parser.prototype.parseUShort;
Parser.uShortList = Parser.prototype.parseUShortList;
Parser.uLong = Parser.offset32 = Parser.prototype.parseULong;
Parser.uLongList = Parser.prototype.parseULongList;
Parser.struct = Parser.prototype.parseStruct;
Parser.coverage = Parser.prototype.parseCoverage;
Parser.classDef = Parser.prototype.parseClassDef;
var langSysTable = {
  reserved: Parser.uShort,
  reqFeatureIndex: Parser.uShort,
  featureIndexes: Parser.uShortList
};
Parser.prototype.parseScriptList = function() {
  return this.parsePointer(Parser.recordList({
    tag: Parser.tag,
    script: Parser.pointer({
      defaultLangSys: Parser.pointer(langSysTable),
      langSysRecords: Parser.recordList({
        tag: Parser.tag,
        langSys: Parser.pointer(langSysTable)
      })
    })
  })) || [];
};
Parser.prototype.parseFeatureList = function() {
  return this.parsePointer(Parser.recordList({
    tag: Parser.tag,
    feature: Parser.pointer({
      featureParams: Parser.offset16,
      lookupListIndexes: Parser.uShortList
    })
  })) || [];
};
Parser.prototype.parseLookupList = function(lookupTableParsers) {
  return this.parsePointer(Parser.list(Parser.pointer(function() {
    var lookupType = this.parseUShort();
    check.argument(1 <= lookupType && lookupType <= 9, "GPOS/GSUB lookup type " + lookupType + " unknown.");
    var lookupFlag = this.parseUShort();
    var useMarkFilteringSet = lookupFlag & 16;
    return {
      lookupType,
      lookupFlag,
      subtables: this.parseList(Parser.pointer(lookupTableParsers[lookupType])),
      markFilteringSet: useMarkFilteringSet ? this.parseUShort() : void 0
    };
  }))) || [];
};
Parser.prototype.parseFeatureVariationsList = function() {
  return this.parsePointer32(function() {
    var majorVersion = this.parseUShort();
    var minorVersion = this.parseUShort();
    check.argument(majorVersion === 1 && minorVersion < 1, "GPOS/GSUB feature variations table unknown.");
    var featureVariations = this.parseRecordList32({
      conditionSetOffset: Parser.offset32,
      featureTableSubstitutionOffset: Parser.offset32
    });
    return featureVariations;
  }) || [];
};
var parse = {
  getByte,
  getCard8: getByte,
  getUShort,
  getCard16: getUShort,
  getShort,
  getULong,
  getFixed,
  getTag,
  getOffset,
  getBytes,
  bytesToString,
  Parser
};
function parseGlyphCoordinate(p2, flag, previousValue, shortVectorBitMask, sameBitMask) {
  var v4;
  if ((flag & shortVectorBitMask) > 0) {
    v4 = p2.parseByte();
    if ((flag & sameBitMask) === 0) {
      v4 = -v4;
    }
    v4 = previousValue + v4;
  } else {
    if ((flag & sameBitMask) > 0) {
      v4 = previousValue;
    } else {
      v4 = previousValue + p2.parseShort();
    }
  }
  return v4;
}
function parseGlyph(glyph, data, start) {
  var p2 = new parse.Parser(data, start);
  glyph.numberOfContours = p2.parseShort();
  glyph._xMin = p2.parseShort();
  glyph._yMin = p2.parseShort();
  glyph._xMax = p2.parseShort();
  glyph._yMax = p2.parseShort();
  var flags;
  var flag;
  if (glyph.numberOfContours > 0) {
    var endPointIndices = glyph.endPointIndices = [];
    for (var i2 = 0; i2 < glyph.numberOfContours; i2 += 1) {
      endPointIndices.push(p2.parseUShort());
    }
    glyph.instructionLength = p2.parseUShort();
    glyph.instructions = [];
    for (var i$1 = 0; i$1 < glyph.instructionLength; i$1 += 1) {
      glyph.instructions.push(p2.parseByte());
    }
    var numberOfCoordinates = endPointIndices[endPointIndices.length - 1] + 1;
    flags = [];
    for (var i$2 = 0; i$2 < numberOfCoordinates; i$2 += 1) {
      flag = p2.parseByte();
      flags.push(flag);
      if ((flag & 8) > 0) {
        var repeatCount = p2.parseByte();
        for (var j2 = 0; j2 < repeatCount; j2 += 1) {
          flags.push(flag);
          i$2 += 1;
        }
      }
    }
    check.argument(flags.length === numberOfCoordinates, "Bad flags.");
    if (endPointIndices.length > 0) {
      var points = [];
      var point;
      if (numberOfCoordinates > 0) {
        for (var i$3 = 0; i$3 < numberOfCoordinates; i$3 += 1) {
          flag = flags[i$3];
          point = {};
          point.onCurve = !!(flag & 1);
          point.lastPointOfContour = endPointIndices.indexOf(i$3) >= 0;
          points.push(point);
        }
        var px = 0;
        for (var i$4 = 0; i$4 < numberOfCoordinates; i$4 += 1) {
          flag = flags[i$4];
          point = points[i$4];
          point.x = parseGlyphCoordinate(p2, flag, px, 2, 16);
          px = point.x;
        }
        var py = 0;
        for (var i$5 = 0; i$5 < numberOfCoordinates; i$5 += 1) {
          flag = flags[i$5];
          point = points[i$5];
          point.y = parseGlyphCoordinate(p2, flag, py, 4, 32);
          py = point.y;
        }
      }
      glyph.points = points;
    } else {
      glyph.points = [];
    }
  } else if (glyph.numberOfContours === 0) {
    glyph.points = [];
  } else {
    glyph.isComposite = true;
    glyph.points = [];
    glyph.components = [];
    var moreComponents = true;
    while (moreComponents) {
      flags = p2.parseUShort();
      var component = {
        glyphIndex: p2.parseUShort(),
        xScale: 1,
        scale01: 0,
        scale10: 0,
        yScale: 1,
        dx: 0,
        dy: 0
      };
      if ((flags & 1) > 0) {
        if ((flags & 2) > 0) {
          component.dx = p2.parseShort();
          component.dy = p2.parseShort();
        } else {
          component.matchedPoints = [p2.parseUShort(), p2.parseUShort()];
        }
      } else {
        if ((flags & 2) > 0) {
          component.dx = p2.parseChar();
          component.dy = p2.parseChar();
        } else {
          component.matchedPoints = [p2.parseByte(), p2.parseByte()];
        }
      }
      if ((flags & 8) > 0) {
        component.xScale = component.yScale = p2.parseF2Dot14();
      } else if ((flags & 64) > 0) {
        component.xScale = p2.parseF2Dot14();
        component.yScale = p2.parseF2Dot14();
      } else if ((flags & 128) > 0) {
        component.xScale = p2.parseF2Dot14();
        component.scale01 = p2.parseF2Dot14();
        component.scale10 = p2.parseF2Dot14();
        component.yScale = p2.parseF2Dot14();
      }
      glyph.components.push(component);
      moreComponents = !!(flags & 32);
    }
    if (flags & 256) {
      glyph.instructionLength = p2.parseUShort();
      glyph.instructions = [];
      for (var i$6 = 0; i$6 < glyph.instructionLength; i$6 += 1) {
        glyph.instructions.push(p2.parseByte());
      }
    }
  }
}
function transformPoints(points, transform) {
  var newPoints = [];
  for (var i2 = 0; i2 < points.length; i2 += 1) {
    var pt = points[i2];
    var newPt = {
      x: transform.xScale * pt.x + transform.scale01 * pt.y + transform.dx,
      y: transform.scale10 * pt.x + transform.yScale * pt.y + transform.dy,
      onCurve: pt.onCurve,
      lastPointOfContour: pt.lastPointOfContour
    };
    newPoints.push(newPt);
  }
  return newPoints;
}
function getContours(points) {
  var contours = [];
  var currentContour = [];
  for (var i2 = 0; i2 < points.length; i2 += 1) {
    var pt = points[i2];
    currentContour.push(pt);
    if (pt.lastPointOfContour) {
      contours.push(currentContour);
      currentContour = [];
    }
  }
  check.argument(currentContour.length === 0, "There are still points left in the current contour.");
  return contours;
}
function getPath(points) {
  var p2 = new Path();
  if (!points) {
    return p2;
  }
  var contours = getContours(points);
  for (var contourIndex = 0; contourIndex < contours.length; ++contourIndex) {
    var contour = contours[contourIndex];
    var prev = null;
    var curr = contour[contour.length - 1];
    var next = contour[0];
    if (curr.onCurve) {
      p2.moveTo(curr.x, curr.y);
    } else {
      if (next.onCurve) {
        p2.moveTo(next.x, next.y);
      } else {
        var start = { x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5 };
        p2.moveTo(start.x, start.y);
      }
    }
    for (var i2 = 0; i2 < contour.length; ++i2) {
      prev = curr;
      curr = next;
      next = contour[(i2 + 1) % contour.length];
      if (curr.onCurve) {
        p2.lineTo(curr.x, curr.y);
      } else {
        var next2 = next;
        if (!prev.onCurve) {
          ({ x: (curr.x + prev.x) * 0.5, y: (curr.y + prev.y) * 0.5 });
        }
        if (!next.onCurve) {
          next2 = { x: (curr.x + next.x) * 0.5, y: (curr.y + next.y) * 0.5 };
        }
        p2.quadraticCurveTo(curr.x, curr.y, next2.x, next2.y);
      }
    }
    p2.closePath();
  }
  return p2;
}
function buildPath(glyphs, glyph) {
  if (glyph.isComposite) {
    for (var j2 = 0; j2 < glyph.components.length; j2 += 1) {
      var component = glyph.components[j2];
      var componentGlyph = glyphs.get(component.glyphIndex);
      componentGlyph.getPath();
      if (componentGlyph.points) {
        var transformedPoints = void 0;
        if (component.matchedPoints === void 0) {
          transformedPoints = transformPoints(componentGlyph.points, component);
        } else {
          if (component.matchedPoints[0] > glyph.points.length - 1 || component.matchedPoints[1] > componentGlyph.points.length - 1) {
            throw Error("Matched points out of range in " + glyph.name);
          }
          var firstPt = glyph.points[component.matchedPoints[0]];
          var secondPt = componentGlyph.points[component.matchedPoints[1]];
          var transform = {
            xScale: component.xScale,
            scale01: component.scale01,
            scale10: component.scale10,
            yScale: component.yScale,
            dx: 0,
            dy: 0
          };
          secondPt = transformPoints([secondPt], transform)[0];
          transform.dx = firstPt.x - secondPt.x;
          transform.dy = firstPt.y - secondPt.y;
          transformedPoints = transformPoints(componentGlyph.points, transform);
        }
        glyph.points = glyph.points.concat(transformedPoints);
      }
    }
  }
  return getPath(glyph.points);
}
function parseGlyfTableAll(data, start, loca2, font) {
  var glyphs = new glyphset.GlyphSet(font);
  for (var i2 = 0; i2 < loca2.length - 1; i2 += 1) {
    var offset = loca2[i2];
    var nextOffset = loca2[i2 + 1];
    if (offset !== nextOffset) {
      glyphs.push(i2, glyphset.ttfGlyphLoader(font, i2, parseGlyph, data, start + offset, buildPath));
    } else {
      glyphs.push(i2, glyphset.glyphLoader(font, i2));
    }
  }
  return glyphs;
}
function parseGlyfTableOnLowMemory(data, start, loca2, font) {
  var glyphs = new glyphset.GlyphSet(font);
  font._push = function(i2) {
    var offset = loca2[i2];
    var nextOffset = loca2[i2 + 1];
    if (offset !== nextOffset) {
      glyphs.push(i2, glyphset.ttfGlyphLoader(font, i2, parseGlyph, data, start + offset, buildPath));
    } else {
      glyphs.push(i2, glyphset.glyphLoader(font, i2));
    }
  };
  return glyphs;
}
function parseGlyfTable(data, start, loca2, font, opt) {
  if (opt.lowMemory) {
    return parseGlyfTableOnLowMemory(data, start, loca2, font);
  } else {
    return parseGlyfTableAll(data, start, loca2, font);
  }
}
var glyf = { getPath, parse: parseGlyfTable };
var instructionTable;
var exec;
var execGlyph;
var execComponent;
function Hinting(font) {
  this.font = font;
  this.getCommands = function(hPoints) {
    return glyf.getPath(hPoints).commands;
  };
  this._fpgmState = this._prepState = void 0;
  this._errorState = 0;
}
function roundOff(v4) {
  return v4;
}
function roundToGrid(v4) {
  return Math.sign(v4) * Math.round(Math.abs(v4));
}
function roundToDoubleGrid(v4) {
  return Math.sign(v4) * Math.round(Math.abs(v4 * 2)) / 2;
}
function roundToHalfGrid(v4) {
  return Math.sign(v4) * (Math.round(Math.abs(v4) + 0.5) - 0.5);
}
function roundUpToGrid(v4) {
  return Math.sign(v4) * Math.ceil(Math.abs(v4));
}
function roundDownToGrid(v4) {
  return Math.sign(v4) * Math.floor(Math.abs(v4));
}
var roundSuper = function(v4) {
  var period = this.srPeriod;
  var phase = this.srPhase;
  var threshold = this.srThreshold;
  var sign = 1;
  if (v4 < 0) {
    v4 = -v4;
    sign = -1;
  }
  v4 += threshold - phase;
  v4 = Math.trunc(v4 / period) * period;
  v4 += phase;
  if (v4 < 0) {
    return phase * sign;
  }
  return v4 * sign;
};
var xUnitVector = {
  x: 1,
  y: 0,
  axis: "x",
  // Gets the projected distance between two points.
  // o1/o2 ... if true, respective original position is used.
  distance: function(p1, p2, o1, o2) {
    return (o1 ? p1.xo : p1.x) - (o2 ? p2.xo : p2.x);
  },
  // Moves point p so the moved position has the same relative
  // position to the moved positions of rp1 and rp2 than the
  // original positions had.
  //
  // See APPENDIX on INTERPOLATE at the bottom of this file.
  interpolate: function(p2, rp1, rp2, pv) {
    var do1;
    var do2;
    var doa1;
    var doa2;
    var dm1;
    var dm2;
    var dt;
    if (!pv || pv === this) {
      do1 = p2.xo - rp1.xo;
      do2 = p2.xo - rp2.xo;
      dm1 = rp1.x - rp1.xo;
      dm2 = rp2.x - rp2.xo;
      doa1 = Math.abs(do1);
      doa2 = Math.abs(do2);
      dt = doa1 + doa2;
      if (dt === 0) {
        p2.x = p2.xo + (dm1 + dm2) / 2;
        return;
      }
      p2.x = p2.xo + (dm1 * doa2 + dm2 * doa1) / dt;
      return;
    }
    do1 = pv.distance(p2, rp1, true, true);
    do2 = pv.distance(p2, rp2, true, true);
    dm1 = pv.distance(rp1, rp1, false, true);
    dm2 = pv.distance(rp2, rp2, false, true);
    doa1 = Math.abs(do1);
    doa2 = Math.abs(do2);
    dt = doa1 + doa2;
    if (dt === 0) {
      xUnitVector.setRelative(p2, p2, (dm1 + dm2) / 2, pv, true);
      return;
    }
    xUnitVector.setRelative(p2, p2, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
  },
  // Slope of line normal to this
  normalSlope: Number.NEGATIVE_INFINITY,
  // Sets the point 'p' relative to point 'rp'
  // by the distance 'd'.
  //
  // See APPENDIX on SETRELATIVE at the bottom of this file.
  //
  // p   ... point to set
  // rp  ... reference point
  // d   ... distance on projection vector
  // pv  ... projection vector (undefined = this)
  // org ... if true, uses the original position of rp as reference.
  setRelative: function(p2, rp2, d3, pv, org) {
    if (!pv || pv === this) {
      p2.x = (org ? rp2.xo : rp2.x) + d3;
      return;
    }
    var rpx = org ? rp2.xo : rp2.x;
    var rpy = org ? rp2.yo : rp2.y;
    var rpdx = rpx + d3 * pv.x;
    var rpdy = rpy + d3 * pv.y;
    p2.x = rpdx + (p2.y - rpdy) / pv.normalSlope;
  },
  // Slope of vector line.
  slope: 0,
  // Touches the point p.
  touch: function(p2) {
    p2.xTouched = true;
  },
  // Tests if a point p is touched.
  touched: function(p2) {
    return p2.xTouched;
  },
  // Untouches the point p.
  untouch: function(p2) {
    p2.xTouched = false;
  }
};
var yUnitVector = {
  x: 0,
  y: 1,
  axis: "y",
  // Gets the projected distance between two points.
  // o1/o2 ... if true, respective original position is used.
  distance: function(p1, p2, o1, o2) {
    return (o1 ? p1.yo : p1.y) - (o2 ? p2.yo : p2.y);
  },
  // Moves point p so the moved position has the same relative
  // position to the moved positions of rp1 and rp2 than the
  // original positions had.
  //
  // See APPENDIX on INTERPOLATE at the bottom of this file.
  interpolate: function(p2, rp1, rp2, pv) {
    var do1;
    var do2;
    var doa1;
    var doa2;
    var dm1;
    var dm2;
    var dt;
    if (!pv || pv === this) {
      do1 = p2.yo - rp1.yo;
      do2 = p2.yo - rp2.yo;
      dm1 = rp1.y - rp1.yo;
      dm2 = rp2.y - rp2.yo;
      doa1 = Math.abs(do1);
      doa2 = Math.abs(do2);
      dt = doa1 + doa2;
      if (dt === 0) {
        p2.y = p2.yo + (dm1 + dm2) / 2;
        return;
      }
      p2.y = p2.yo + (dm1 * doa2 + dm2 * doa1) / dt;
      return;
    }
    do1 = pv.distance(p2, rp1, true, true);
    do2 = pv.distance(p2, rp2, true, true);
    dm1 = pv.distance(rp1, rp1, false, true);
    dm2 = pv.distance(rp2, rp2, false, true);
    doa1 = Math.abs(do1);
    doa2 = Math.abs(do2);
    dt = doa1 + doa2;
    if (dt === 0) {
      yUnitVector.setRelative(p2, p2, (dm1 + dm2) / 2, pv, true);
      return;
    }
    yUnitVector.setRelative(p2, p2, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
  },
  // Slope of line normal to this.
  normalSlope: 0,
  // Sets the point 'p' relative to point 'rp'
  // by the distance 'd'
  //
  // See APPENDIX on SETRELATIVE at the bottom of this file.
  //
  // p   ... point to set
  // rp  ... reference point
  // d   ... distance on projection vector
  // pv  ... projection vector (undefined = this)
  // org ... if true, uses the original position of rp as reference.
  setRelative: function(p2, rp2, d3, pv, org) {
    if (!pv || pv === this) {
      p2.y = (org ? rp2.yo : rp2.y) + d3;
      return;
    }
    var rpx = org ? rp2.xo : rp2.x;
    var rpy = org ? rp2.yo : rp2.y;
    var rpdx = rpx + d3 * pv.x;
    var rpdy = rpy + d3 * pv.y;
    p2.y = rpdy + pv.normalSlope * (p2.x - rpdx);
  },
  // Slope of vector line.
  slope: Number.POSITIVE_INFINITY,
  // Touches the point p.
  touch: function(p2) {
    p2.yTouched = true;
  },
  // Tests if a point p is touched.
  touched: function(p2) {
    return p2.yTouched;
  },
  // Untouches the point p.
  untouch: function(p2) {
    p2.yTouched = false;
  }
};
Object.freeze(xUnitVector);
Object.freeze(yUnitVector);
function UnitVector(x3, y2) {
  this.x = x3;
  this.y = y2;
  this.axis = void 0;
  this.slope = y2 / x3;
  this.normalSlope = -x3 / y2;
  Object.freeze(this);
}
UnitVector.prototype.distance = function(p1, p2, o1, o2) {
  return this.x * xUnitVector.distance(p1, p2, o1, o2) + this.y * yUnitVector.distance(p1, p2, o1, o2);
};
UnitVector.prototype.interpolate = function(p2, rp1, rp2, pv) {
  var dm1;
  var dm2;
  var do1;
  var do2;
  var doa1;
  var doa2;
  var dt;
  do1 = pv.distance(p2, rp1, true, true);
  do2 = pv.distance(p2, rp2, true, true);
  dm1 = pv.distance(rp1, rp1, false, true);
  dm2 = pv.distance(rp2, rp2, false, true);
  doa1 = Math.abs(do1);
  doa2 = Math.abs(do2);
  dt = doa1 + doa2;
  if (dt === 0) {
    this.setRelative(p2, p2, (dm1 + dm2) / 2, pv, true);
    return;
  }
  this.setRelative(p2, p2, (dm1 * doa2 + dm2 * doa1) / dt, pv, true);
};
UnitVector.prototype.setRelative = function(p2, rp2, d3, pv, org) {
  pv = pv || this;
  var rpx = org ? rp2.xo : rp2.x;
  var rpy = org ? rp2.yo : rp2.y;
  var rpdx = rpx + d3 * pv.x;
  var rpdy = rpy + d3 * pv.y;
  var pvns = pv.normalSlope;
  var fvs = this.slope;
  var px = p2.x;
  var py = p2.y;
  p2.x = (fvs * px - pvns * rpdx + rpdy - py) / (fvs - pvns);
  p2.y = fvs * (p2.x - px) + py;
};
UnitVector.prototype.touch = function(p2) {
  p2.xTouched = true;
  p2.yTouched = true;
};
function getUnitVector(x3, y2) {
  var d3 = Math.sqrt(x3 * x3 + y2 * y2);
  x3 /= d3;
  y2 /= d3;
  if (x3 === 1 && y2 === 0) {
    return xUnitVector;
  } else if (x3 === 0 && y2 === 1) {
    return yUnitVector;
  } else {
    return new UnitVector(x3, y2);
  }
}
function HPoint(x3, y2, lastPointOfContour, onCurve) {
  this.x = this.xo = Math.round(x3 * 64) / 64;
  this.y = this.yo = Math.round(y2 * 64) / 64;
  this.lastPointOfContour = lastPointOfContour;
  this.onCurve = onCurve;
  this.prevPointOnContour = void 0;
  this.nextPointOnContour = void 0;
  this.xTouched = false;
  this.yTouched = false;
  Object.preventExtensions(this);
}
HPoint.prototype.nextTouched = function(v4) {
  var p2 = this.nextPointOnContour;
  while (!v4.touched(p2) && p2 !== this) {
    p2 = p2.nextPointOnContour;
  }
  return p2;
};
HPoint.prototype.prevTouched = function(v4) {
  var p2 = this.prevPointOnContour;
  while (!v4.touched(p2) && p2 !== this) {
    p2 = p2.prevPointOnContour;
  }
  return p2;
};
var HPZero = Object.freeze(new HPoint(0, 0));
var defaultState = {
  cvCutIn: 17 / 16,
  // control value cut in
  deltaBase: 9,
  deltaShift: 0.125,
  loop: 1,
  // loops some instructions
  minDis: 1,
  // minimum distance
  autoFlip: true
};
function State(env, prog) {
  this.env = env;
  this.stack = [];
  this.prog = prog;
  switch (env) {
    case "glyf":
      this.zp0 = this.zp1 = this.zp2 = 1;
      this.rp0 = this.rp1 = this.rp2 = 0;
    /* fall through */
    case "prep":
      this.fv = this.pv = this.dpv = xUnitVector;
      this.round = roundToGrid;
  }
}
Hinting.prototype.exec = function(glyph, ppem) {
  if (typeof ppem !== "number") {
    throw new Error("Point size is not a number!");
  }
  if (this._errorState > 2) {
    return;
  }
  var font = this.font;
  var prepState = this._prepState;
  if (!prepState || prepState.ppem !== ppem) {
    var fpgmState = this._fpgmState;
    if (!fpgmState) {
      State.prototype = defaultState;
      fpgmState = this._fpgmState = new State("fpgm", font.tables.fpgm);
      fpgmState.funcs = [];
      fpgmState.font = font;
      if (exports.DEBUG) {
        console.log("---EXEC FPGM---");
        fpgmState.step = -1;
      }
      try {
        exec(fpgmState);
      } catch (e2) {
        console.log("Hinting error in FPGM:" + e2);
        this._errorState = 3;
        return;
      }
    }
    State.prototype = fpgmState;
    prepState = this._prepState = new State("prep", font.tables.prep);
    prepState.ppem = ppem;
    var oCvt = font.tables.cvt;
    if (oCvt) {
      var cvt = prepState.cvt = new Array(oCvt.length);
      var scale = ppem / font.unitsPerEm;
      for (var c3 = 0; c3 < oCvt.length; c3++) {
        cvt[c3] = oCvt[c3] * scale;
      }
    } else {
      prepState.cvt = [];
    }
    if (exports.DEBUG) {
      console.log("---EXEC PREP---");
      prepState.step = -1;
    }
    try {
      exec(prepState);
    } catch (e2) {
      if (this._errorState < 2) {
        console.log("Hinting error in PREP:" + e2);
      }
      this._errorState = 2;
    }
  }
  if (this._errorState > 1) {
    return;
  }
  try {
    return execGlyph(glyph, prepState);
  } catch (e2) {
    if (this._errorState < 1) {
      console.log("Hinting error:" + e2);
      console.log("Note: further hinting errors are silenced");
    }
    this._errorState = 1;
    return void 0;
  }
};
execGlyph = function(glyph, prepState) {
  var xScale = prepState.ppem / prepState.font.unitsPerEm;
  var yScale = xScale;
  var components = glyph.components;
  var contours;
  var gZone;
  var state;
  State.prototype = prepState;
  if (!components) {
    state = new State("glyf", glyph.instructions);
    if (exports.DEBUG) {
      console.log("---EXEC GLYPH---");
      state.step = -1;
    }
    execComponent(glyph, state, xScale, yScale);
    gZone = state.gZone;
  } else {
    var font = prepState.font;
    gZone = [];
    contours = [];
    for (var i2 = 0; i2 < components.length; i2++) {
      var c3 = components[i2];
      var cg2 = font.glyphs.get(c3.glyphIndex);
      state = new State("glyf", cg2.instructions);
      if (exports.DEBUG) {
        console.log("---EXEC COMP " + i2 + "---");
        state.step = -1;
      }
      execComponent(cg2, state, xScale, yScale);
      var dx = Math.round(c3.dx * xScale);
      var dy = Math.round(c3.dy * yScale);
      var gz = state.gZone;
      var cc2 = state.contours;
      for (var pi2 = 0; pi2 < gz.length; pi2++) {
        var p2 = gz[pi2];
        p2.xTouched = p2.yTouched = false;
        p2.xo = p2.x = p2.x + dx;
        p2.yo = p2.y = p2.y + dy;
      }
      var gLen = gZone.length;
      gZone.push.apply(gZone, gz);
      for (var j2 = 0; j2 < cc2.length; j2++) {
        contours.push(cc2[j2] + gLen);
      }
    }
    if (glyph.instructions && !state.inhibitGridFit) {
      state = new State("glyf", glyph.instructions);
      state.gZone = state.z0 = state.z1 = state.z2 = gZone;
      state.contours = contours;
      gZone.push(
        new HPoint(0, 0),
        new HPoint(Math.round(glyph.advanceWidth * xScale), 0)
      );
      if (exports.DEBUG) {
        console.log("---EXEC COMPOSITE---");
        state.step = -1;
      }
      exec(state);
      gZone.length -= 2;
    }
  }
  return gZone;
};
execComponent = function(glyph, state, xScale, yScale) {
  var points = glyph.points || [];
  var pLen = points.length;
  var gZone = state.gZone = state.z0 = state.z1 = state.z2 = [];
  var contours = state.contours = [];
  var cp2;
  for (var i2 = 0; i2 < pLen; i2++) {
    cp2 = points[i2];
    gZone[i2] = new HPoint(
      cp2.x * xScale,
      cp2.y * yScale,
      cp2.lastPointOfContour,
      cp2.onCurve
    );
  }
  var sp2;
  var np2;
  for (var i$1 = 0; i$1 < pLen; i$1++) {
    cp2 = gZone[i$1];
    if (!sp2) {
      sp2 = cp2;
      contours.push(i$1);
    }
    if (cp2.lastPointOfContour) {
      cp2.nextPointOnContour = sp2;
      sp2.prevPointOnContour = cp2;
      sp2 = void 0;
    } else {
      np2 = gZone[i$1 + 1];
      cp2.nextPointOnContour = np2;
      np2.prevPointOnContour = cp2;
    }
  }
  if (state.inhibitGridFit) {
    return;
  }
  if (exports.DEBUG) {
    console.log("PROCESSING GLYPH", state.stack);
    for (var i$2 = 0; i$2 < pLen; i$2++) {
      console.log(i$2, gZone[i$2].x, gZone[i$2].y);
    }
  }
  gZone.push(
    new HPoint(0, 0),
    new HPoint(Math.round(glyph.advanceWidth * xScale), 0)
  );
  exec(state);
  gZone.length -= 2;
  if (exports.DEBUG) {
    console.log("FINISHED GLYPH", state.stack);
    for (var i$3 = 0; i$3 < pLen; i$3++) {
      console.log(i$3, gZone[i$3].x, gZone[i$3].y);
    }
  }
};
exec = function(state) {
  var prog = state.prog;
  if (!prog) {
    return;
  }
  var pLen = prog.length;
  var ins;
  for (state.ip = 0; state.ip < pLen; state.ip++) {
    if (exports.DEBUG) {
      state.step++;
    }
    ins = instructionTable[prog[state.ip]];
    if (!ins) {
      throw new Error(
        "unknown instruction: 0x" + Number(prog[state.ip]).toString(16)
      );
    }
    ins(state);
  }
};
function initTZone(state) {
  var tZone = state.tZone = new Array(state.gZone.length);
  for (var i2 = 0; i2 < tZone.length; i2++) {
    tZone[i2] = new HPoint(0, 0);
  }
}
function skip(state, handleElse) {
  var prog = state.prog;
  var ip2 = state.ip;
  var nesting = 1;
  var ins;
  do {
    ins = prog[++ip2];
    if (ins === 88) {
      nesting++;
    } else if (ins === 89) {
      nesting--;
    } else if (ins === 64) {
      ip2 += prog[ip2 + 1] + 1;
    } else if (ins === 65) {
      ip2 += 2 * prog[ip2 + 1] + 1;
    } else if (ins >= 176 && ins <= 183) {
      ip2 += ins - 176 + 1;
    } else if (ins >= 184 && ins <= 191) {
      ip2 += (ins - 184 + 1) * 2;
    } else if (handleElse && nesting === 1 && ins === 27) {
      break;
    }
  } while (nesting > 0);
  state.ip = ip2;
}
function SVTCA(v4, state) {
  if (exports.DEBUG) {
    console.log(state.step, "SVTCA[" + v4.axis + "]");
  }
  state.fv = state.pv = state.dpv = v4;
}
function SPVTCA(v4, state) {
  if (exports.DEBUG) {
    console.log(state.step, "SPVTCA[" + v4.axis + "]");
  }
  state.pv = state.dpv = v4;
}
function SFVTCA(v4, state) {
  if (exports.DEBUG) {
    console.log(state.step, "SFVTCA[" + v4.axis + "]");
  }
  state.fv = v4;
}
function SPVTL(a2, state) {
  var stack = state.stack;
  var p2i = stack.pop();
  var p1i = stack.pop();
  var p2 = state.z2[p2i];
  var p1 = state.z1[p1i];
  if (exports.DEBUG) {
    console.log("SPVTL[" + a2 + "]", p2i, p1i);
  }
  var dx;
  var dy;
  if (!a2) {
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
  } else {
    dx = p2.y - p1.y;
    dy = p1.x - p2.x;
  }
  state.pv = state.dpv = getUnitVector(dx, dy);
}
function SFVTL(a2, state) {
  var stack = state.stack;
  var p2i = stack.pop();
  var p1i = stack.pop();
  var p2 = state.z2[p2i];
  var p1 = state.z1[p1i];
  if (exports.DEBUG) {
    console.log("SFVTL[" + a2 + "]", p2i, p1i);
  }
  var dx;
  var dy;
  if (!a2) {
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
  } else {
    dx = p2.y - p1.y;
    dy = p1.x - p2.x;
  }
  state.fv = getUnitVector(dx, dy);
}
function SPVFS(state) {
  var stack = state.stack;
  var y2 = stack.pop();
  var x3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SPVFS[]", y2, x3);
  }
  state.pv = state.dpv = getUnitVector(x3, y2);
}
function SFVFS(state) {
  var stack = state.stack;
  var y2 = stack.pop();
  var x3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SPVFS[]", y2, x3);
  }
  state.fv = getUnitVector(x3, y2);
}
function GPV(state) {
  var stack = state.stack;
  var pv = state.pv;
  if (exports.DEBUG) {
    console.log(state.step, "GPV[]");
  }
  stack.push(pv.x * 16384);
  stack.push(pv.y * 16384);
}
function GFV(state) {
  var stack = state.stack;
  var fv = state.fv;
  if (exports.DEBUG) {
    console.log(state.step, "GFV[]");
  }
  stack.push(fv.x * 16384);
  stack.push(fv.y * 16384);
}
function SFVTPV(state) {
  state.fv = state.pv;
  if (exports.DEBUG) {
    console.log(state.step, "SFVTPV[]");
  }
}
function ISECT(state) {
  var stack = state.stack;
  var pa0i = stack.pop();
  var pa1i = stack.pop();
  var pb0i = stack.pop();
  var pb1i = stack.pop();
  var pi2 = stack.pop();
  var z0 = state.z0;
  var z1 = state.z1;
  var pa0 = z0[pa0i];
  var pa1 = z0[pa1i];
  var pb0 = z1[pb0i];
  var pb1 = z1[pb1i];
  var p2 = state.z2[pi2];
  if (exports.DEBUG) {
    console.log("ISECT[], ", pa0i, pa1i, pb0i, pb1i, pi2);
  }
  var x1 = pa0.x;
  var y1 = pa0.y;
  var x22 = pa1.x;
  var y2 = pa1.y;
  var x3 = pb0.x;
  var y3 = pb0.y;
  var x4 = pb1.x;
  var y4 = pb1.y;
  var div = (x1 - x22) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  var f1 = x1 * y2 - y1 * x22;
  var f22 = x3 * y4 - y3 * x4;
  p2.x = (f1 * (x3 - x4) - f22 * (x1 - x22)) / div;
  p2.y = (f1 * (y3 - y4) - f22 * (y1 - y2)) / div;
}
function SRP0(state) {
  state.rp0 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SRP0[]", state.rp0);
  }
}
function SRP1(state) {
  state.rp1 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SRP1[]", state.rp1);
  }
}
function SRP2(state) {
  state.rp2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SRP2[]", state.rp2);
  }
}
function SZP0(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SZP0[]", n2);
  }
  state.zp0 = n2;
  switch (n2) {
    case 0:
      if (!state.tZone) {
        initTZone(state);
      }
      state.z0 = state.tZone;
      break;
    case 1:
      state.z0 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SZP1(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SZP1[]", n2);
  }
  state.zp1 = n2;
  switch (n2) {
    case 0:
      if (!state.tZone) {
        initTZone(state);
      }
      state.z1 = state.tZone;
      break;
    case 1:
      state.z1 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SZP2(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SZP2[]", n2);
  }
  state.zp2 = n2;
  switch (n2) {
    case 0:
      if (!state.tZone) {
        initTZone(state);
      }
      state.z2 = state.tZone;
      break;
    case 1:
      state.z2 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SZPS(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SZPS[]", n2);
  }
  state.zp0 = state.zp1 = state.zp2 = n2;
  switch (n2) {
    case 0:
      if (!state.tZone) {
        initTZone(state);
      }
      state.z0 = state.z1 = state.z2 = state.tZone;
      break;
    case 1:
      state.z0 = state.z1 = state.z2 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function SLOOP(state) {
  state.loop = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SLOOP[]", state.loop);
  }
}
function RTG(state) {
  if (exports.DEBUG) {
    console.log(state.step, "RTG[]");
  }
  state.round = roundToGrid;
}
function RTHG(state) {
  if (exports.DEBUG) {
    console.log(state.step, "RTHG[]");
  }
  state.round = roundToHalfGrid;
}
function SMD(state) {
  var d3 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SMD[]", d3);
  }
  state.minDis = d3 / 64;
}
function ELSE(state) {
  if (exports.DEBUG) {
    console.log(state.step, "ELSE[]");
  }
  skip(state, false);
}
function JMPR(state) {
  var o2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "JMPR[]", o2);
  }
  state.ip += o2 - 1;
}
function SCVTCI(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SCVTCI[]", n2);
  }
  state.cvCutIn = n2 / 64;
}
function DUP(state) {
  var stack = state.stack;
  if (exports.DEBUG) {
    console.log(state.step, "DUP[]");
  }
  stack.push(stack[stack.length - 1]);
}
function POP(state) {
  if (exports.DEBUG) {
    console.log(state.step, "POP[]");
  }
  state.stack.pop();
}
function CLEAR(state) {
  if (exports.DEBUG) {
    console.log(state.step, "CLEAR[]");
  }
  state.stack.length = 0;
}
function SWAP(state) {
  var stack = state.stack;
  var a2 = stack.pop();
  var b2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SWAP[]");
  }
  stack.push(a2);
  stack.push(b2);
}
function DEPTH(state) {
  var stack = state.stack;
  if (exports.DEBUG) {
    console.log(state.step, "DEPTH[]");
  }
  stack.push(stack.length);
}
function LOOPCALL(state) {
  var stack = state.stack;
  var fn2 = stack.pop();
  var c3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "LOOPCALL[]", fn2, c3);
  }
  var cip = state.ip;
  var cprog = state.prog;
  state.prog = state.funcs[fn2];
  for (var i2 = 0; i2 < c3; i2++) {
    exec(state);
    if (exports.DEBUG) {
      console.log(
        ++state.step,
        i2 + 1 < c3 ? "next loopcall" : "done loopcall",
        i2
      );
    }
  }
  state.ip = cip;
  state.prog = cprog;
}
function CALL(state) {
  var fn2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "CALL[]", fn2);
  }
  var cip = state.ip;
  var cprog = state.prog;
  state.prog = state.funcs[fn2];
  exec(state);
  state.ip = cip;
  state.prog = cprog;
  if (exports.DEBUG) {
    console.log(++state.step, "returning from", fn2);
  }
}
function CINDEX(state) {
  var stack = state.stack;
  var k2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "CINDEX[]", k2);
  }
  stack.push(stack[stack.length - k2]);
}
function MINDEX(state) {
  var stack = state.stack;
  var k2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "MINDEX[]", k2);
  }
  stack.push(stack.splice(stack.length - k2, 1)[0]);
}
function FDEF(state) {
  if (state.env !== "fpgm") {
    throw new Error("FDEF not allowed here");
  }
  var stack = state.stack;
  var prog = state.prog;
  var ip2 = state.ip;
  var fn2 = stack.pop();
  var ipBegin = ip2;
  if (exports.DEBUG) {
    console.log(state.step, "FDEF[]", fn2);
  }
  while (prog[++ip2] !== 45) {
  }
  state.ip = ip2;
  state.funcs[fn2] = prog.slice(ipBegin + 1, ip2);
}
function MDAP(round, state) {
  var pi2 = state.stack.pop();
  var p2 = state.z0[pi2];
  var fv = state.fv;
  var pv = state.pv;
  if (exports.DEBUG) {
    console.log(state.step, "MDAP[" + round + "]", pi2);
  }
  var d3 = pv.distance(p2, HPZero);
  if (round) {
    d3 = state.round(d3);
  }
  fv.setRelative(p2, HPZero, d3, pv);
  fv.touch(p2);
  state.rp0 = state.rp1 = pi2;
}
function IUP(v4, state) {
  var z2 = state.z2;
  var pLen = z2.length - 2;
  var cp2;
  var pp;
  var np2;
  if (exports.DEBUG) {
    console.log(state.step, "IUP[" + v4.axis + "]");
  }
  for (var i2 = 0; i2 < pLen; i2++) {
    cp2 = z2[i2];
    if (v4.touched(cp2)) {
      continue;
    }
    pp = cp2.prevTouched(v4);
    if (pp === cp2) {
      continue;
    }
    np2 = cp2.nextTouched(v4);
    if (pp === np2) {
      v4.setRelative(cp2, cp2, v4.distance(pp, pp, false, true), v4, true);
    }
    v4.interpolate(cp2, pp, np2, v4);
  }
}
function SHP(a2, state) {
  var stack = state.stack;
  var rpi = a2 ? state.rp1 : state.rp2;
  var rp2 = (a2 ? state.z0 : state.z1)[rpi];
  var fv = state.fv;
  var pv = state.pv;
  var loop = state.loop;
  var z2 = state.z2;
  while (loop--) {
    var pi2 = stack.pop();
    var p2 = z2[pi2];
    var d3 = pv.distance(rp2, rp2, false, true);
    fv.setRelative(p2, p2, d3, pv);
    fv.touch(p2);
    if (exports.DEBUG) {
      console.log(
        state.step,
        (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "SHP[" + (a2 ? "rp1" : "rp2") + "]",
        pi2
      );
    }
  }
  state.loop = 1;
}
function SHC(a2, state) {
  var stack = state.stack;
  var rpi = a2 ? state.rp1 : state.rp2;
  var rp2 = (a2 ? state.z0 : state.z1)[rpi];
  var fv = state.fv;
  var pv = state.pv;
  var ci2 = stack.pop();
  var sp2 = state.z2[state.contours[ci2]];
  var p2 = sp2;
  if (exports.DEBUG) {
    console.log(state.step, "SHC[" + a2 + "]", ci2);
  }
  var d3 = pv.distance(rp2, rp2, false, true);
  do {
    if (p2 !== rp2) {
      fv.setRelative(p2, p2, d3, pv);
    }
    p2 = p2.nextPointOnContour;
  } while (p2 !== sp2);
}
function SHZ(a2, state) {
  var stack = state.stack;
  var rpi = a2 ? state.rp1 : state.rp2;
  var rp2 = (a2 ? state.z0 : state.z1)[rpi];
  var fv = state.fv;
  var pv = state.pv;
  var e2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SHZ[" + a2 + "]", e2);
  }
  var z2;
  switch (e2) {
    case 0:
      z2 = state.tZone;
      break;
    case 1:
      z2 = state.gZone;
      break;
    default:
      throw new Error("Invalid zone");
  }
  var p2;
  var d3 = pv.distance(rp2, rp2, false, true);
  var pLen = z2.length - 2;
  for (var i2 = 0; i2 < pLen; i2++) {
    p2 = z2[i2];
    fv.setRelative(p2, p2, d3, pv);
  }
}
function SHPIX(state) {
  var stack = state.stack;
  var loop = state.loop;
  var fv = state.fv;
  var d3 = stack.pop() / 64;
  var z2 = state.z2;
  while (loop--) {
    var pi2 = stack.pop();
    var p2 = z2[pi2];
    if (exports.DEBUG) {
      console.log(
        state.step,
        (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "SHPIX[]",
        pi2,
        d3
      );
    }
    fv.setRelative(p2, p2, d3);
    fv.touch(p2);
  }
  state.loop = 1;
}
function IP(state) {
  var stack = state.stack;
  var rp1i = state.rp1;
  var rp2i = state.rp2;
  var loop = state.loop;
  var rp1 = state.z0[rp1i];
  var rp2 = state.z1[rp2i];
  var fv = state.fv;
  var pv = state.dpv;
  var z2 = state.z2;
  while (loop--) {
    var pi2 = stack.pop();
    var p2 = z2[pi2];
    if (exports.DEBUG) {
      console.log(
        state.step,
        (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "IP[]",
        pi2,
        rp1i,
        "<->",
        rp2i
      );
    }
    fv.interpolate(p2, rp1, rp2, pv);
    fv.touch(p2);
  }
  state.loop = 1;
}
function MSIRP(a2, state) {
  var stack = state.stack;
  var d3 = stack.pop() / 64;
  var pi2 = stack.pop();
  var p2 = state.z1[pi2];
  var rp0 = state.z0[state.rp0];
  var fv = state.fv;
  var pv = state.pv;
  fv.setRelative(p2, rp0, d3, pv);
  fv.touch(p2);
  if (exports.DEBUG) {
    console.log(state.step, "MSIRP[" + a2 + "]", d3, pi2);
  }
  state.rp1 = state.rp0;
  state.rp2 = pi2;
  if (a2) {
    state.rp0 = pi2;
  }
}
function ALIGNRP(state) {
  var stack = state.stack;
  var rp0i = state.rp0;
  var rp0 = state.z0[rp0i];
  var loop = state.loop;
  var fv = state.fv;
  var pv = state.pv;
  var z1 = state.z1;
  while (loop--) {
    var pi2 = stack.pop();
    var p2 = z1[pi2];
    if (exports.DEBUG) {
      console.log(
        state.step,
        (state.loop > 1 ? "loop " + (state.loop - loop) + ": " : "") + "ALIGNRP[]",
        pi2
      );
    }
    fv.setRelative(p2, rp0, 0, pv);
    fv.touch(p2);
  }
  state.loop = 1;
}
function RTDG(state) {
  if (exports.DEBUG) {
    console.log(state.step, "RTDG[]");
  }
  state.round = roundToDoubleGrid;
}
function MIAP(round, state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var pi2 = stack.pop();
  var p2 = state.z0[pi2];
  var fv = state.fv;
  var pv = state.pv;
  var cv = state.cvt[n2];
  if (exports.DEBUG) {
    console.log(
      state.step,
      "MIAP[" + round + "]",
      n2,
      "(",
      cv,
      ")",
      pi2
    );
  }
  var d3 = pv.distance(p2, HPZero);
  if (round) {
    if (Math.abs(d3 - cv) < state.cvCutIn) {
      d3 = cv;
    }
    d3 = state.round(d3);
  }
  fv.setRelative(p2, HPZero, d3, pv);
  if (state.zp0 === 0) {
    p2.xo = p2.x;
    p2.yo = p2.y;
  }
  fv.touch(p2);
  state.rp0 = state.rp1 = pi2;
}
function NPUSHB(state) {
  var prog = state.prog;
  var ip2 = state.ip;
  var stack = state.stack;
  var n2 = prog[++ip2];
  if (exports.DEBUG) {
    console.log(state.step, "NPUSHB[]", n2);
  }
  for (var i2 = 0; i2 < n2; i2++) {
    stack.push(prog[++ip2]);
  }
  state.ip = ip2;
}
function NPUSHW(state) {
  var ip2 = state.ip;
  var prog = state.prog;
  var stack = state.stack;
  var n2 = prog[++ip2];
  if (exports.DEBUG) {
    console.log(state.step, "NPUSHW[]", n2);
  }
  for (var i2 = 0; i2 < n2; i2++) {
    var w3 = prog[++ip2] << 8 | prog[++ip2];
    if (w3 & 32768) {
      w3 = -((w3 ^ 65535) + 1);
    }
    stack.push(w3);
  }
  state.ip = ip2;
}
function WS(state) {
  var stack = state.stack;
  var store = state.store;
  if (!store) {
    store = state.store = [];
  }
  var v4 = stack.pop();
  var l3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "WS", v4, l3);
  }
  store[l3] = v4;
}
function RS(state) {
  var stack = state.stack;
  var store = state.store;
  var l3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "RS", l3);
  }
  var v4 = store && store[l3] || 0;
  stack.push(v4);
}
function WCVTP(state) {
  var stack = state.stack;
  var v4 = stack.pop();
  var l3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "WCVTP", v4, l3);
  }
  state.cvt[l3] = v4 / 64;
}
function RCVT(state) {
  var stack = state.stack;
  var cvte = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "RCVT", cvte);
  }
  stack.push(state.cvt[cvte] * 64);
}
function GC(a2, state) {
  var stack = state.stack;
  var pi2 = stack.pop();
  var p2 = state.z2[pi2];
  if (exports.DEBUG) {
    console.log(state.step, "GC[" + a2 + "]", pi2);
  }
  stack.push(state.dpv.distance(p2, HPZero, a2, false) * 64);
}
function MD(a2, state) {
  var stack = state.stack;
  var pi2 = stack.pop();
  var pi1 = stack.pop();
  var p2 = state.z1[pi2];
  var p1 = state.z0[pi1];
  var d3 = state.dpv.distance(p1, p2, a2, a2);
  if (exports.DEBUG) {
    console.log(state.step, "MD[" + a2 + "]", pi2, pi1, "->", d3);
  }
  state.stack.push(Math.round(d3 * 64));
}
function MPPEM(state) {
  if (exports.DEBUG) {
    console.log(state.step, "MPPEM[]");
  }
  state.stack.push(state.ppem);
}
function FLIPON(state) {
  if (exports.DEBUG) {
    console.log(state.step, "FLIPON[]");
  }
  state.autoFlip = true;
}
function LT(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "LT[]", e2, e1);
  }
  stack.push(e1 < e2 ? 1 : 0);
}
function LTEQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "LTEQ[]", e2, e1);
  }
  stack.push(e1 <= e2 ? 1 : 0);
}
function GT(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "GT[]", e2, e1);
  }
  stack.push(e1 > e2 ? 1 : 0);
}
function GTEQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "GTEQ[]", e2, e1);
  }
  stack.push(e1 >= e2 ? 1 : 0);
}
function EQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "EQ[]", e2, e1);
  }
  stack.push(e2 === e1 ? 1 : 0);
}
function NEQ(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "NEQ[]", e2, e1);
  }
  stack.push(e2 !== e1 ? 1 : 0);
}
function ODD(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "ODD[]", n2);
  }
  stack.push(Math.trunc(n2) % 2 ? 1 : 0);
}
function EVEN(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "EVEN[]", n2);
  }
  stack.push(Math.trunc(n2) % 2 ? 0 : 1);
}
function IF(state) {
  var test = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "IF[]", test);
  }
  if (!test) {
    skip(state, true);
    if (exports.DEBUG) {
      console.log(state.step, "EIF[]");
    }
  }
}
function EIF(state) {
  if (exports.DEBUG) {
    console.log(state.step, "EIF[]");
  }
}
function AND(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "AND[]", e2, e1);
  }
  stack.push(e2 && e1 ? 1 : 0);
}
function OR(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "OR[]", e2, e1);
  }
  stack.push(e2 || e1 ? 1 : 0);
}
function NOT(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "NOT[]", e2);
  }
  stack.push(e2 ? 0 : 1);
}
function DELTAP123(b2, state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var fv = state.fv;
  var pv = state.pv;
  var ppem = state.ppem;
  var base = state.deltaBase + (b2 - 1) * 16;
  var ds2 = state.deltaShift;
  var z0 = state.z0;
  if (exports.DEBUG) {
    console.log(state.step, "DELTAP[" + b2 + "]", n2, stack);
  }
  for (var i2 = 0; i2 < n2; i2++) {
    var pi2 = stack.pop();
    var arg = stack.pop();
    var appem = base + ((arg & 240) >> 4);
    if (appem !== ppem) {
      continue;
    }
    var mag = (arg & 15) - 8;
    if (mag >= 0) {
      mag++;
    }
    if (exports.DEBUG) {
      console.log(state.step, "DELTAPFIX", pi2, "by", mag * ds2);
    }
    var p2 = z0[pi2];
    fv.setRelative(p2, p2, mag * ds2, pv);
  }
}
function SDB(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SDB[]", n2);
  }
  state.deltaBase = n2;
}
function SDS(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SDS[]", n2);
  }
  state.deltaShift = Math.pow(0.5, n2);
}
function ADD(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "ADD[]", n2, n1);
  }
  stack.push(n1 + n2);
}
function SUB(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SUB[]", n2, n1);
  }
  stack.push(n1 - n2);
}
function DIV(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "DIV[]", n2, n1);
  }
  stack.push(n1 * 64 / n2);
}
function MUL(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var n1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "MUL[]", n2, n1);
  }
  stack.push(n1 * n2 / 64);
}
function ABS(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "ABS[]", n2);
  }
  stack.push(Math.abs(n2));
}
function NEG(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "NEG[]", n2);
  }
  stack.push(-n2);
}
function FLOOR(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "FLOOR[]", n2);
  }
  stack.push(Math.floor(n2 / 64) * 64);
}
function CEILING(state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "CEILING[]", n2);
  }
  stack.push(Math.ceil(n2 / 64) * 64);
}
function ROUND(dt, state) {
  var stack = state.stack;
  var n2 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "ROUND[]");
  }
  stack.push(state.round(n2 / 64) * 64);
}
function WCVTF(state) {
  var stack = state.stack;
  var v4 = stack.pop();
  var l3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "WCVTF[]", v4, l3);
  }
  state.cvt[l3] = v4 * state.ppem / state.font.unitsPerEm;
}
function DELTAC123(b2, state) {
  var stack = state.stack;
  var n2 = stack.pop();
  var ppem = state.ppem;
  var base = state.deltaBase + (b2 - 1) * 16;
  var ds2 = state.deltaShift;
  if (exports.DEBUG) {
    console.log(state.step, "DELTAC[" + b2 + "]", n2, stack);
  }
  for (var i2 = 0; i2 < n2; i2++) {
    var c3 = stack.pop();
    var arg = stack.pop();
    var appem = base + ((arg & 240) >> 4);
    if (appem !== ppem) {
      continue;
    }
    var mag = (arg & 15) - 8;
    if (mag >= 0) {
      mag++;
    }
    var delta = mag * ds2;
    if (exports.DEBUG) {
      console.log(state.step, "DELTACFIX", c3, "by", delta);
    }
    state.cvt[c3] += delta;
  }
}
function SROUND(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SROUND[]", n2);
  }
  state.round = roundSuper;
  var period;
  switch (n2 & 192) {
    case 0:
      period = 0.5;
      break;
    case 64:
      period = 1;
      break;
    case 128:
      period = 2;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  state.srPeriod = period;
  switch (n2 & 48) {
    case 0:
      state.srPhase = 0;
      break;
    case 16:
      state.srPhase = 0.25 * period;
      break;
    case 32:
      state.srPhase = 0.5 * period;
      break;
    case 48:
      state.srPhase = 0.75 * period;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  n2 &= 15;
  if (n2 === 0) {
    state.srThreshold = 0;
  } else {
    state.srThreshold = (n2 / 8 - 0.5) * period;
  }
}
function S45ROUND(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "S45ROUND[]", n2);
  }
  state.round = roundSuper;
  var period;
  switch (n2 & 192) {
    case 0:
      period = Math.sqrt(2) / 2;
      break;
    case 64:
      period = Math.sqrt(2);
      break;
    case 128:
      period = 2 * Math.sqrt(2);
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  state.srPeriod = period;
  switch (n2 & 48) {
    case 0:
      state.srPhase = 0;
      break;
    case 16:
      state.srPhase = 0.25 * period;
      break;
    case 32:
      state.srPhase = 0.5 * period;
      break;
    case 48:
      state.srPhase = 0.75 * period;
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  n2 &= 15;
  if (n2 === 0) {
    state.srThreshold = 0;
  } else {
    state.srThreshold = (n2 / 8 - 0.5) * period;
  }
}
function ROFF(state) {
  if (exports.DEBUG) {
    console.log(state.step, "ROFF[]");
  }
  state.round = roundOff;
}
function RUTG(state) {
  if (exports.DEBUG) {
    console.log(state.step, "RUTG[]");
  }
  state.round = roundUpToGrid;
}
function RDTG(state) {
  if (exports.DEBUG) {
    console.log(state.step, "RDTG[]");
  }
  state.round = roundDownToGrid;
}
function SCANCTRL(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SCANCTRL[]", n2);
  }
}
function SDPVTL(a2, state) {
  var stack = state.stack;
  var p2i = stack.pop();
  var p1i = stack.pop();
  var p2 = state.z2[p2i];
  var p1 = state.z1[p1i];
  if (exports.DEBUG) {
    console.log(state.step, "SDPVTL[" + a2 + "]", p2i, p1i);
  }
  var dx;
  var dy;
  if (!a2) {
    dx = p1.x - p2.x;
    dy = p1.y - p2.y;
  } else {
    dx = p2.y - p1.y;
    dy = p1.x - p2.x;
  }
  state.dpv = getUnitVector(dx, dy);
}
function GETINFO(state) {
  var stack = state.stack;
  var sel = stack.pop();
  var r2 = 0;
  if (exports.DEBUG) {
    console.log(state.step, "GETINFO[]", sel);
  }
  if (sel & 1) {
    r2 = 35;
  }
  if (sel & 32) {
    r2 |= 4096;
  }
  stack.push(r2);
}
function ROLL(state) {
  var stack = state.stack;
  var a2 = stack.pop();
  var b2 = stack.pop();
  var c3 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "ROLL[]");
  }
  stack.push(b2);
  stack.push(a2);
  stack.push(c3);
}
function MAX(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "MAX[]", e2, e1);
  }
  stack.push(Math.max(e1, e2));
}
function MIN(state) {
  var stack = state.stack;
  var e2 = stack.pop();
  var e1 = stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "MIN[]", e2, e1);
  }
  stack.push(Math.min(e1, e2));
}
function SCANTYPE(state) {
  var n2 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "SCANTYPE[]", n2);
  }
}
function INSTCTRL(state) {
  var s2 = state.stack.pop();
  var v4 = state.stack.pop();
  if (exports.DEBUG) {
    console.log(state.step, "INSTCTRL[]", s2, v4);
  }
  switch (s2) {
    case 1:
      state.inhibitGridFit = !!v4;
      return;
    case 2:
      state.ignoreCvt = !!v4;
      return;
    default:
      throw new Error("invalid INSTCTRL[] selector");
  }
}
function PUSHB(n2, state) {
  var stack = state.stack;
  var prog = state.prog;
  var ip2 = state.ip;
  if (exports.DEBUG) {
    console.log(state.step, "PUSHB[" + n2 + "]");
  }
  for (var i2 = 0; i2 < n2; i2++) {
    stack.push(prog[++ip2]);
  }
  state.ip = ip2;
}
function PUSHW(n2, state) {
  var ip2 = state.ip;
  var prog = state.prog;
  var stack = state.stack;
  if (exports.DEBUG) {
    console.log(state.ip, "PUSHW[" + n2 + "]");
  }
  for (var i2 = 0; i2 < n2; i2++) {
    var w3 = prog[++ip2] << 8 | prog[++ip2];
    if (w3 & 32768) {
      w3 = -((w3 ^ 65535) + 1);
    }
    stack.push(w3);
  }
  state.ip = ip2;
}
function MDRP_MIRP(indirect, setRp0, keepD, ro, dt, state) {
  var stack = state.stack;
  var cvte = indirect && stack.pop();
  var pi2 = stack.pop();
  var rp0i = state.rp0;
  var rp2 = state.z0[rp0i];
  var p2 = state.z1[pi2];
  var md = state.minDis;
  var fv = state.fv;
  var pv = state.dpv;
  var od;
  var d3;
  var sign;
  var cv;
  d3 = od = pv.distance(p2, rp2, true, true);
  sign = d3 >= 0 ? 1 : -1;
  d3 = Math.abs(d3);
  if (indirect) {
    cv = state.cvt[cvte];
    if (ro && Math.abs(d3 - cv) < state.cvCutIn) {
      d3 = cv;
    }
  }
  if (keepD && d3 < md) {
    d3 = md;
  }
  if (ro) {
    d3 = state.round(d3);
  }
  fv.setRelative(p2, rp2, sign * d3, pv);
  fv.touch(p2);
  if (exports.DEBUG) {
    console.log(
      state.step,
      (indirect ? "MIRP[" : "MDRP[") + (setRp0 ? "M" : "m") + (keepD ? ">" : "_") + (ro ? "R" : "_") + (dt === 0 ? "Gr" : dt === 1 ? "Bl" : dt === 2 ? "Wh" : "") + "]",
      indirect ? cvte + "(" + state.cvt[cvte] + "," + cv + ")" : "",
      pi2,
      "(d =",
      od,
      "->",
      sign * d3,
      ")"
    );
  }
  state.rp1 = state.rp0;
  state.rp2 = pi2;
  if (setRp0) {
    state.rp0 = pi2;
  }
}
instructionTable = [
  /* 0x00 */
  SVTCA.bind(void 0, yUnitVector),
  /* 0x01 */
  SVTCA.bind(void 0, xUnitVector),
  /* 0x02 */
  SPVTCA.bind(void 0, yUnitVector),
  /* 0x03 */
  SPVTCA.bind(void 0, xUnitVector),
  /* 0x04 */
  SFVTCA.bind(void 0, yUnitVector),
  /* 0x05 */
  SFVTCA.bind(void 0, xUnitVector),
  /* 0x06 */
  SPVTL.bind(void 0, 0),
  /* 0x07 */
  SPVTL.bind(void 0, 1),
  /* 0x08 */
  SFVTL.bind(void 0, 0),
  /* 0x09 */
  SFVTL.bind(void 0, 1),
  /* 0x0A */
  SPVFS,
  /* 0x0B */
  SFVFS,
  /* 0x0C */
  GPV,
  /* 0x0D */
  GFV,
  /* 0x0E */
  SFVTPV,
  /* 0x0F */
  ISECT,
  /* 0x10 */
  SRP0,
  /* 0x11 */
  SRP1,
  /* 0x12 */
  SRP2,
  /* 0x13 */
  SZP0,
  /* 0x14 */
  SZP1,
  /* 0x15 */
  SZP2,
  /* 0x16 */
  SZPS,
  /* 0x17 */
  SLOOP,
  /* 0x18 */
  RTG,
  /* 0x19 */
  RTHG,
  /* 0x1A */
  SMD,
  /* 0x1B */
  ELSE,
  /* 0x1C */
  JMPR,
  /* 0x1D */
  SCVTCI,
  /* 0x1E */
  void 0,
  // TODO SSWCI
  /* 0x1F */
  void 0,
  // TODO SSW
  /* 0x20 */
  DUP,
  /* 0x21 */
  POP,
  /* 0x22 */
  CLEAR,
  /* 0x23 */
  SWAP,
  /* 0x24 */
  DEPTH,
  /* 0x25 */
  CINDEX,
  /* 0x26 */
  MINDEX,
  /* 0x27 */
  void 0,
  // TODO ALIGNPTS
  /* 0x28 */
  void 0,
  /* 0x29 */
  void 0,
  // TODO UTP
  /* 0x2A */
  LOOPCALL,
  /* 0x2B */
  CALL,
  /* 0x2C */
  FDEF,
  /* 0x2D */
  void 0,
  // ENDF (eaten by FDEF)
  /* 0x2E */
  MDAP.bind(void 0, 0),
  /* 0x2F */
  MDAP.bind(void 0, 1),
  /* 0x30 */
  IUP.bind(void 0, yUnitVector),
  /* 0x31 */
  IUP.bind(void 0, xUnitVector),
  /* 0x32 */
  SHP.bind(void 0, 0),
  /* 0x33 */
  SHP.bind(void 0, 1),
  /* 0x34 */
  SHC.bind(void 0, 0),
  /* 0x35 */
  SHC.bind(void 0, 1),
  /* 0x36 */
  SHZ.bind(void 0, 0),
  /* 0x37 */
  SHZ.bind(void 0, 1),
  /* 0x38 */
  SHPIX,
  /* 0x39 */
  IP,
  /* 0x3A */
  MSIRP.bind(void 0, 0),
  /* 0x3B */
  MSIRP.bind(void 0, 1),
  /* 0x3C */
  ALIGNRP,
  /* 0x3D */
  RTDG,
  /* 0x3E */
  MIAP.bind(void 0, 0),
  /* 0x3F */
  MIAP.bind(void 0, 1),
  /* 0x40 */
  NPUSHB,
  /* 0x41 */
  NPUSHW,
  /* 0x42 */
  WS,
  /* 0x43 */
  RS,
  /* 0x44 */
  WCVTP,
  /* 0x45 */
  RCVT,
  /* 0x46 */
  GC.bind(void 0, 0),
  /* 0x47 */
  GC.bind(void 0, 1),
  /* 0x48 */
  void 0,
  // TODO SCFS
  /* 0x49 */
  MD.bind(void 0, 0),
  /* 0x4A */
  MD.bind(void 0, 1),
  /* 0x4B */
  MPPEM,
  /* 0x4C */
  void 0,
  // TODO MPS
  /* 0x4D */
  FLIPON,
  /* 0x4E */
  void 0,
  // TODO FLIPOFF
  /* 0x4F */
  void 0,
  // TODO DEBUG
  /* 0x50 */
  LT,
  /* 0x51 */
  LTEQ,
  /* 0x52 */
  GT,
  /* 0x53 */
  GTEQ,
  /* 0x54 */
  EQ,
  /* 0x55 */
  NEQ,
  /* 0x56 */
  ODD,
  /* 0x57 */
  EVEN,
  /* 0x58 */
  IF,
  /* 0x59 */
  EIF,
  /* 0x5A */
  AND,
  /* 0x5B */
  OR,
  /* 0x5C */
  NOT,
  /* 0x5D */
  DELTAP123.bind(void 0, 1),
  /* 0x5E */
  SDB,
  /* 0x5F */
  SDS,
  /* 0x60 */
  ADD,
  /* 0x61 */
  SUB,
  /* 0x62 */
  DIV,
  /* 0x63 */
  MUL,
  /* 0x64 */
  ABS,
  /* 0x65 */
  NEG,
  /* 0x66 */
  FLOOR,
  /* 0x67 */
  CEILING,
  /* 0x68 */
  ROUND.bind(void 0, 0),
  /* 0x69 */
  ROUND.bind(void 0, 1),
  /* 0x6A */
  ROUND.bind(void 0, 2),
  /* 0x6B */
  ROUND.bind(void 0, 3),
  /* 0x6C */
  void 0,
  // TODO NROUND[ab]
  /* 0x6D */
  void 0,
  // TODO NROUND[ab]
  /* 0x6E */
  void 0,
  // TODO NROUND[ab]
  /* 0x6F */
  void 0,
  // TODO NROUND[ab]
  /* 0x70 */
  WCVTF,
  /* 0x71 */
  DELTAP123.bind(void 0, 2),
  /* 0x72 */
  DELTAP123.bind(void 0, 3),
  /* 0x73 */
  DELTAC123.bind(void 0, 1),
  /* 0x74 */
  DELTAC123.bind(void 0, 2),
  /* 0x75 */
  DELTAC123.bind(void 0, 3),
  /* 0x76 */
  SROUND,
  /* 0x77 */
  S45ROUND,
  /* 0x78 */
  void 0,
  // TODO JROT[]
  /* 0x79 */
  void 0,
  // TODO JROF[]
  /* 0x7A */
  ROFF,
  /* 0x7B */
  void 0,
  /* 0x7C */
  RUTG,
  /* 0x7D */
  RDTG,
  /* 0x7E */
  POP,
  // actually SANGW, supposed to do only a pop though
  /* 0x7F */
  POP,
  // actually AA, supposed to do only a pop though
  /* 0x80 */
  void 0,
  // TODO FLIPPT
  /* 0x81 */
  void 0,
  // TODO FLIPRGON
  /* 0x82 */
  void 0,
  // TODO FLIPRGOFF
  /* 0x83 */
  void 0,
  /* 0x84 */
  void 0,
  /* 0x85 */
  SCANCTRL,
  /* 0x86 */
  SDPVTL.bind(void 0, 0),
  /* 0x87 */
  SDPVTL.bind(void 0, 1),
  /* 0x88 */
  GETINFO,
  /* 0x89 */
  void 0,
  // TODO IDEF
  /* 0x8A */
  ROLL,
  /* 0x8B */
  MAX,
  /* 0x8C */
  MIN,
  /* 0x8D */
  SCANTYPE,
  /* 0x8E */
  INSTCTRL,
  /* 0x8F */
  void 0,
  /* 0x90 */
  void 0,
  /* 0x91 */
  void 0,
  /* 0x92 */
  void 0,
  /* 0x93 */
  void 0,
  /* 0x94 */
  void 0,
  /* 0x95 */
  void 0,
  /* 0x96 */
  void 0,
  /* 0x97 */
  void 0,
  /* 0x98 */
  void 0,
  /* 0x99 */
  void 0,
  /* 0x9A */
  void 0,
  /* 0x9B */
  void 0,
  /* 0x9C */
  void 0,
  /* 0x9D */
  void 0,
  /* 0x9E */
  void 0,
  /* 0x9F */
  void 0,
  /* 0xA0 */
  void 0,
  /* 0xA1 */
  void 0,
  /* 0xA2 */
  void 0,
  /* 0xA3 */
  void 0,
  /* 0xA4 */
  void 0,
  /* 0xA5 */
  void 0,
  /* 0xA6 */
  void 0,
  /* 0xA7 */
  void 0,
  /* 0xA8 */
  void 0,
  /* 0xA9 */
  void 0,
  /* 0xAA */
  void 0,
  /* 0xAB */
  void 0,
  /* 0xAC */
  void 0,
  /* 0xAD */
  void 0,
  /* 0xAE */
  void 0,
  /* 0xAF */
  void 0,
  /* 0xB0 */
  PUSHB.bind(void 0, 1),
  /* 0xB1 */
  PUSHB.bind(void 0, 2),
  /* 0xB2 */
  PUSHB.bind(void 0, 3),
  /* 0xB3 */
  PUSHB.bind(void 0, 4),
  /* 0xB4 */
  PUSHB.bind(void 0, 5),
  /* 0xB5 */
  PUSHB.bind(void 0, 6),
  /* 0xB6 */
  PUSHB.bind(void 0, 7),
  /* 0xB7 */
  PUSHB.bind(void 0, 8),
  /* 0xB8 */
  PUSHW.bind(void 0, 1),
  /* 0xB9 */
  PUSHW.bind(void 0, 2),
  /* 0xBA */
  PUSHW.bind(void 0, 3),
  /* 0xBB */
  PUSHW.bind(void 0, 4),
  /* 0xBC */
  PUSHW.bind(void 0, 5),
  /* 0xBD */
  PUSHW.bind(void 0, 6),
  /* 0xBE */
  PUSHW.bind(void 0, 7),
  /* 0xBF */
  PUSHW.bind(void 0, 8),
  /* 0xC0 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 0),
  /* 0xC1 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 1),
  /* 0xC2 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 2),
  /* 0xC3 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 0, 3),
  /* 0xC4 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 0),
  /* 0xC5 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 1),
  /* 0xC6 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 2),
  /* 0xC7 */
  MDRP_MIRP.bind(void 0, 0, 0, 0, 1, 3),
  /* 0xC8 */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 0),
  /* 0xC9 */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 1),
  /* 0xCA */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 2),
  /* 0xCB */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 0, 3),
  /* 0xCC */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 0),
  /* 0xCD */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 1),
  /* 0xCE */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 2),
  /* 0xCF */
  MDRP_MIRP.bind(void 0, 0, 0, 1, 1, 3),
  /* 0xD0 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 0),
  /* 0xD1 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 1),
  /* 0xD2 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 2),
  /* 0xD3 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 0, 3),
  /* 0xD4 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 0),
  /* 0xD5 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 1),
  /* 0xD6 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 2),
  /* 0xD7 */
  MDRP_MIRP.bind(void 0, 0, 1, 0, 1, 3),
  /* 0xD8 */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 0),
  /* 0xD9 */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 1),
  /* 0xDA */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 2),
  /* 0xDB */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 0, 3),
  /* 0xDC */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 0),
  /* 0xDD */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 1),
  /* 0xDE */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 2),
  /* 0xDF */
  MDRP_MIRP.bind(void 0, 0, 1, 1, 1, 3),
  /* 0xE0 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 0),
  /* 0xE1 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 1),
  /* 0xE2 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 2),
  /* 0xE3 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 0, 3),
  /* 0xE4 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 0),
  /* 0xE5 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 1),
  /* 0xE6 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 2),
  /* 0xE7 */
  MDRP_MIRP.bind(void 0, 1, 0, 0, 1, 3),
  /* 0xE8 */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 0),
  /* 0xE9 */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 1),
  /* 0xEA */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 2),
  /* 0xEB */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 0, 3),
  /* 0xEC */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 0),
  /* 0xED */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 1),
  /* 0xEE */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 2),
  /* 0xEF */
  MDRP_MIRP.bind(void 0, 1, 0, 1, 1, 3),
  /* 0xF0 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 0),
  /* 0xF1 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 1),
  /* 0xF2 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 2),
  /* 0xF3 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 0, 3),
  /* 0xF4 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 0),
  /* 0xF5 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 1),
  /* 0xF6 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 2),
  /* 0xF7 */
  MDRP_MIRP.bind(void 0, 1, 1, 0, 1, 3),
  /* 0xF8 */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 0),
  /* 0xF9 */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 1),
  /* 0xFA */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 2),
  /* 0xFB */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 0, 3),
  /* 0xFC */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 0),
  /* 0xFD */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 1),
  /* 0xFE */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 2),
  /* 0xFF */
  MDRP_MIRP.bind(void 0, 1, 1, 1, 1, 3)
];
function Token(char) {
  this.char = char;
  this.state = {};
  this.activeState = null;
}
function ContextRange(startIndex, endOffset, contextName) {
  this.contextName = contextName;
  this.startIndex = startIndex;
  this.endOffset = endOffset;
}
function ContextChecker(contextName, checkStart, checkEnd) {
  this.contextName = contextName;
  this.openRange = null;
  this.ranges = [];
  this.checkStart = checkStart;
  this.checkEnd = checkEnd;
}
function ContextParams(context, currentIndex) {
  this.context = context;
  this.index = currentIndex;
  this.length = context.length;
  this.current = context[currentIndex];
  this.backtrack = context.slice(0, currentIndex);
  this.lookahead = context.slice(currentIndex + 1);
}
function Event(eventId) {
  this.eventId = eventId;
  this.subscribers = [];
}
function initializeCoreEvents(events) {
  var this$1$1 = this;
  var coreEvents = [
    "start",
    "end",
    "next",
    "newToken",
    "contextStart",
    "contextEnd",
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD",
    "updateContextsRanges"
  ];
  coreEvents.forEach(function(eventId) {
    Object.defineProperty(this$1$1.events, eventId, {
      value: new Event(eventId)
    });
  });
  if (!!events) {
    coreEvents.forEach(function(eventId) {
      var event = events[eventId];
      if (typeof event === "function") {
        this$1$1.events[eventId].subscribe(event);
      }
    });
  }
  var requiresContextUpdate = [
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD"
  ];
  requiresContextUpdate.forEach(function(eventId) {
    this$1$1.events[eventId].subscribe(
      this$1$1.updateContextsRanges
    );
  });
}
function Tokenizer(events) {
  this.tokens = [];
  this.registeredContexts = {};
  this.contextCheckers = [];
  this.events = {};
  this.registeredModifiers = [];
  initializeCoreEvents.call(this, events);
}
Token.prototype.setState = function(key, value) {
  this.state[key] = value;
  this.activeState = { key, value: this.state[key] };
  return this.activeState;
};
Token.prototype.getState = function(stateId) {
  return this.state[stateId] || null;
};
Tokenizer.prototype.inboundIndex = function(index) {
  return index >= 0 && index < this.tokens.length;
};
Tokenizer.prototype.composeRUD = function(RUDs) {
  var this$1$1 = this;
  var silent = true;
  var state = RUDs.map(function(RUD) {
    return this$1$1[RUD[0]].apply(this$1$1, RUD.slice(1).concat(silent));
  });
  var hasFAILObject = function(obj) {
    return typeof obj === "object" && obj.hasOwnProperty("FAIL");
  };
  if (state.every(hasFAILObject)) {
    return {
      FAIL: "composeRUD: one or more operations hasn't completed successfully",
      report: state.filter(hasFAILObject)
    };
  }
  this.dispatch("composeRUD", [state.filter(function(op) {
    return !hasFAILObject(op);
  })]);
};
Tokenizer.prototype.replaceRange = function(startIndex, offset, tokens, silent) {
  offset = offset !== null ? offset : this.tokens.length;
  var isTokenType = tokens.every(function(token) {
    return token instanceof Token;
  });
  if (!isNaN(startIndex) && this.inboundIndex(startIndex) && isTokenType) {
    var replaced = this.tokens.splice.apply(
      this.tokens,
      [startIndex, offset].concat(tokens)
    );
    if (!silent) {
      this.dispatch("replaceToken", [startIndex, offset, tokens]);
    }
    return [replaced, tokens];
  } else {
    return { FAIL: "replaceRange: invalid tokens or startIndex." };
  }
};
Tokenizer.prototype.replaceToken = function(index, token, silent) {
  if (!isNaN(index) && this.inboundIndex(index) && token instanceof Token) {
    var replaced = this.tokens.splice(index, 1, token);
    if (!silent) {
      this.dispatch("replaceToken", [index, token]);
    }
    return [replaced[0], token];
  } else {
    return { FAIL: "replaceToken: invalid token or index." };
  }
};
Tokenizer.prototype.removeRange = function(startIndex, offset, silent) {
  offset = !isNaN(offset) ? offset : this.tokens.length;
  var tokens = this.tokens.splice(startIndex, offset);
  if (!silent) {
    this.dispatch("removeRange", [tokens, startIndex, offset]);
  }
  return tokens;
};
Tokenizer.prototype.removeToken = function(index, silent) {
  if (!isNaN(index) && this.inboundIndex(index)) {
    var token = this.tokens.splice(index, 1);
    if (!silent) {
      this.dispatch("removeToken", [token, index]);
    }
    return token;
  } else {
    return { FAIL: "removeToken: invalid token index." };
  }
};
Tokenizer.prototype.insertToken = function(tokens, index, silent) {
  var tokenType = tokens.every(
    function(token) {
      return token instanceof Token;
    }
  );
  if (tokenType) {
    this.tokens.splice.apply(
      this.tokens,
      [index, 0].concat(tokens)
    );
    if (!silent) {
      this.dispatch("insertToken", [tokens, index]);
    }
    return tokens;
  } else {
    return { FAIL: "insertToken: invalid token(s)." };
  }
};
Tokenizer.prototype.registerModifier = function(modifierId, condition, modifier) {
  this.events.newToken.subscribe(function(token, contextParams) {
    var conditionParams = [token, contextParams];
    var canApplyModifier = condition === null || condition.apply(this, conditionParams) === true;
    var modifierParams = [token, contextParams];
    if (canApplyModifier) {
      var newStateValue = modifier.apply(this, modifierParams);
      token.setState(modifierId, newStateValue);
    }
  });
  this.registeredModifiers.push(modifierId);
};
Event.prototype.subscribe = function(eventHandler) {
  if (typeof eventHandler === "function") {
    return this.subscribers.push(eventHandler) - 1;
  } else {
    return { FAIL: "invalid '" + this.eventId + "' event handler" };
  }
};
Event.prototype.unsubscribe = function(subsId) {
  this.subscribers.splice(subsId, 1);
};
ContextParams.prototype.setCurrentIndex = function(index) {
  this.index = index;
  this.current = this.context[index];
  this.backtrack = this.context.slice(0, index);
  this.lookahead = this.context.slice(index + 1);
};
ContextParams.prototype.get = function(offset) {
  switch (true) {
    case offset === 0:
      return this.current;
    case (offset < 0 && Math.abs(offset) <= this.backtrack.length):
      return this.backtrack.slice(offset)[0];
    case (offset > 0 && offset <= this.lookahead.length):
      return this.lookahead[offset - 1];
    default:
      return null;
  }
};
Tokenizer.prototype.rangeToText = function(range) {
  if (range instanceof ContextRange) {
    return this.getRangeTokens(range).map(function(token) {
      return token.char;
    }).join("");
  }
};
Tokenizer.prototype.getText = function() {
  return this.tokens.map(function(token) {
    return token.char;
  }).join("");
};
Tokenizer.prototype.getContext = function(contextName) {
  var context = this.registeredContexts[contextName];
  return !!context ? context : null;
};
Tokenizer.prototype.on = function(eventName, eventHandler) {
  var event = this.events[eventName];
  if (!!event) {
    return event.subscribe(eventHandler);
  } else {
    return null;
  }
};
Tokenizer.prototype.dispatch = function(eventName, args) {
  var this$1$1 = this;
  var event = this.events[eventName];
  if (event instanceof Event) {
    event.subscribers.forEach(function(subscriber) {
      subscriber.apply(this$1$1, args || []);
    });
  }
};
Tokenizer.prototype.registerContextChecker = function(contextName, contextStartCheck, contextEndCheck) {
  if (!!this.getContext(contextName)) {
    return {
      FAIL: "context name '" + contextName + "' is already registered."
    };
  }
  if (typeof contextStartCheck !== "function") {
    return {
      FAIL: "missing context start check."
    };
  }
  if (typeof contextEndCheck !== "function") {
    return {
      FAIL: "missing context end check."
    };
  }
  var contextCheckers = new ContextChecker(
    contextName,
    contextStartCheck,
    contextEndCheck
  );
  this.registeredContexts[contextName] = contextCheckers;
  this.contextCheckers.push(contextCheckers);
  return contextCheckers;
};
Tokenizer.prototype.getRangeTokens = function(range) {
  var endIndex = range.startIndex + range.endOffset;
  return [].concat(
    this.tokens.slice(range.startIndex, endIndex)
  );
};
Tokenizer.prototype.getContextRanges = function(contextName) {
  var context = this.getContext(contextName);
  if (!!context) {
    return context.ranges;
  } else {
    return { FAIL: "context checker '" + contextName + "' is not registered." };
  }
};
Tokenizer.prototype.resetContextsRanges = function() {
  var registeredContexts = this.registeredContexts;
  for (var contextName in registeredContexts) {
    if (registeredContexts.hasOwnProperty(contextName)) {
      var context = registeredContexts[contextName];
      context.ranges = [];
    }
  }
};
Tokenizer.prototype.updateContextsRanges = function() {
  this.resetContextsRanges();
  var chars = this.tokens.map(function(token) {
    return token.char;
  });
  for (var i2 = 0; i2 < chars.length; i2++) {
    var contextParams = new ContextParams(chars, i2);
    this.runContextCheck(contextParams);
  }
  this.dispatch("updateContextsRanges", [this.registeredContexts]);
};
Tokenizer.prototype.setEndOffset = function(offset, contextName) {
  var startIndex = this.getContext(contextName).openRange.startIndex;
  var range = new ContextRange(startIndex, offset, contextName);
  var ranges = this.getContext(contextName).ranges;
  range.rangeId = contextName + "." + ranges.length;
  ranges.push(range);
  this.getContext(contextName).openRange = null;
  return range;
};
Tokenizer.prototype.runContextCheck = function(contextParams) {
  var this$1$1 = this;
  var index = contextParams.index;
  this.contextCheckers.forEach(function(contextChecker) {
    var contextName = contextChecker.contextName;
    var openRange = this$1$1.getContext(contextName).openRange;
    if (!openRange && contextChecker.checkStart(contextParams)) {
      openRange = new ContextRange(index, null, contextName);
      this$1$1.getContext(contextName).openRange = openRange;
      this$1$1.dispatch("contextStart", [contextName, index]);
    }
    if (!!openRange && contextChecker.checkEnd(contextParams)) {
      var offset = index - openRange.startIndex + 1;
      var range = this$1$1.setEndOffset(offset, contextName);
      this$1$1.dispatch("contextEnd", [contextName, range]);
    }
  });
};
Tokenizer.prototype.tokenize = function(text) {
  this.tokens = [];
  this.resetContextsRanges();
  var chars = Array.from(text);
  this.dispatch("start");
  for (var i2 = 0; i2 < chars.length; i2++) {
    var char = chars[i2];
    var contextParams = new ContextParams(chars, i2);
    this.dispatch("next", [contextParams]);
    this.runContextCheck(contextParams);
    var token = new Token(char);
    this.tokens.push(token);
    this.dispatch("newToken", [token, contextParams]);
  }
  this.dispatch("end", [this.tokens]);
  return this.tokens;
};
function isArabicChar(c3) {
  return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(c3);
}
function isIsolatedArabicChar(char) {
  return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(char);
}
function isTashkeelArabicChar(char) {
  return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(char);
}
function isLatinChar(c3) {
  return /[A-z]/.test(c3);
}
function isWhiteSpace(c3) {
  return /\s/.test(c3);
}
function FeatureQuery(font) {
  this.font = font;
  this.features = {};
}
function SubstitutionAction(action) {
  this.id = action.id;
  this.tag = action.tag;
  this.substitution = action.substitution;
}
function lookupCoverage(glyphIndex, coverage) {
  if (!glyphIndex) {
    return -1;
  }
  switch (coverage.format) {
    case 1:
      return coverage.glyphs.indexOf(glyphIndex);
    case 2:
      var ranges = coverage.ranges;
      for (var i2 = 0; i2 < ranges.length; i2++) {
        var range = ranges[i2];
        if (glyphIndex >= range.start && glyphIndex <= range.end) {
          var offset = glyphIndex - range.start;
          return range.index + offset;
        }
      }
      break;
    default:
      return -1;
  }
  return -1;
}
function singleSubstitutionFormat1(glyphIndex, subtable) {
  var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (substituteIndex === -1) {
    return null;
  }
  return glyphIndex + subtable.deltaGlyphId;
}
function singleSubstitutionFormat2(glyphIndex, subtable) {
  var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (substituteIndex === -1) {
    return null;
  }
  return subtable.substitute[substituteIndex];
}
function lookupCoverageList(coverageList, contextParams) {
  var lookupList = [];
  for (var i2 = 0; i2 < coverageList.length; i2++) {
    var coverage = coverageList[i2];
    var glyphIndex = contextParams.current;
    glyphIndex = Array.isArray(glyphIndex) ? glyphIndex[0] : glyphIndex;
    var lookupIndex = lookupCoverage(glyphIndex, coverage);
    if (lookupIndex !== -1) {
      lookupList.push(lookupIndex);
    }
  }
  if (lookupList.length !== coverageList.length) {
    return -1;
  }
  return lookupList;
}
function chainingSubstitutionFormat3(contextParams, subtable) {
  var lookupsCount = subtable.inputCoverage.length + subtable.lookaheadCoverage.length + subtable.backtrackCoverage.length;
  if (contextParams.context.length < lookupsCount) {
    return [];
  }
  var inputLookups = lookupCoverageList(
    subtable.inputCoverage,
    contextParams
  );
  if (inputLookups === -1) {
    return [];
  }
  var lookaheadOffset = subtable.inputCoverage.length - 1;
  if (contextParams.lookahead.length < subtable.lookaheadCoverage.length) {
    return [];
  }
  var lookaheadContext = contextParams.lookahead.slice(lookaheadOffset);
  while (lookaheadContext.length && isTashkeelArabicChar(lookaheadContext[0].char)) {
    lookaheadContext.shift();
  }
  var lookaheadParams = new ContextParams(lookaheadContext, 0);
  var lookaheadLookups = lookupCoverageList(
    subtable.lookaheadCoverage,
    lookaheadParams
  );
  var backtrackContext = [].concat(contextParams.backtrack);
  backtrackContext.reverse();
  while (backtrackContext.length && isTashkeelArabicChar(backtrackContext[0].char)) {
    backtrackContext.shift();
  }
  if (backtrackContext.length < subtable.backtrackCoverage.length) {
    return [];
  }
  var backtrackParams = new ContextParams(backtrackContext, 0);
  var backtrackLookups = lookupCoverageList(
    subtable.backtrackCoverage,
    backtrackParams
  );
  var contextRulesMatch = inputLookups.length === subtable.inputCoverage.length && lookaheadLookups.length === subtable.lookaheadCoverage.length && backtrackLookups.length === subtable.backtrackCoverage.length;
  var substitutions = [];
  if (contextRulesMatch) {
    for (var i2 = 0; i2 < subtable.lookupRecords.length; i2++) {
      var lookupRecord = subtable.lookupRecords[i2];
      var lookupListIndex = lookupRecord.lookupListIndex;
      var lookupTable = this.getLookupByIndex(lookupListIndex);
      for (var s2 = 0; s2 < lookupTable.subtables.length; s2++) {
        var subtable$1 = lookupTable.subtables[s2];
        var lookup = this.getLookupMethod(lookupTable, subtable$1);
        var substitutionType = this.getSubstitutionType(lookupTable, subtable$1);
        if (substitutionType === "12") {
          for (var n2 = 0; n2 < inputLookups.length; n2++) {
            var glyphIndex = contextParams.get(n2);
            var substitution = lookup(glyphIndex);
            if (substitution) {
              substitutions.push(substitution);
            }
          }
        }
      }
    }
  }
  return substitutions;
}
function ligatureSubstitutionFormat1(contextParams, subtable) {
  var glyphIndex = contextParams.current;
  var ligSetIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (ligSetIndex === -1) {
    return null;
  }
  var ligature;
  var ligatureSet = subtable.ligatureSets[ligSetIndex];
  for (var s2 = 0; s2 < ligatureSet.length; s2++) {
    ligature = ligatureSet[s2];
    for (var l3 = 0; l3 < ligature.components.length; l3++) {
      var lookaheadItem = contextParams.lookahead[l3];
      var component = ligature.components[l3];
      if (lookaheadItem !== component) {
        break;
      }
      if (l3 === ligature.components.length - 1) {
        return ligature;
      }
    }
  }
  return null;
}
function decompositionSubstitutionFormat1(glyphIndex, subtable) {
  var substituteIndex = lookupCoverage(glyphIndex, subtable.coverage);
  if (substituteIndex === -1) {
    return null;
  }
  return subtable.sequences[substituteIndex];
}
FeatureQuery.prototype.getDefaultScriptFeaturesIndexes = function() {
  var scripts = this.font.tables.gsub.scripts;
  for (var s2 = 0; s2 < scripts.length; s2++) {
    var script = scripts[s2];
    if (script.tag === "DFLT") {
      return script.script.defaultLangSys.featureIndexes;
    }
  }
  return [];
};
FeatureQuery.prototype.getScriptFeaturesIndexes = function(scriptTag) {
  var tables = this.font.tables;
  if (!tables.gsub) {
    return [];
  }
  if (!scriptTag) {
    return this.getDefaultScriptFeaturesIndexes();
  }
  var scripts = this.font.tables.gsub.scripts;
  for (var i2 = 0; i2 < scripts.length; i2++) {
    var script = scripts[i2];
    if (script.tag === scriptTag && script.script.defaultLangSys) {
      return script.script.defaultLangSys.featureIndexes;
    } else {
      var langSysRecords = script.langSysRecords;
      if (!!langSysRecords) {
        for (var j2 = 0; j2 < langSysRecords.length; j2++) {
          var langSysRecord = langSysRecords[j2];
          if (langSysRecord.tag === scriptTag) {
            var langSys = langSysRecord.langSys;
            return langSys.featureIndexes;
          }
        }
      }
    }
  }
  return this.getDefaultScriptFeaturesIndexes();
};
FeatureQuery.prototype.mapTagsToFeatures = function(features, scriptTag) {
  var tags = {};
  for (var i2 = 0; i2 < features.length; i2++) {
    var tag = features[i2].tag;
    var feature = features[i2].feature;
    tags[tag] = feature;
  }
  this.features[scriptTag].tags = tags;
};
FeatureQuery.prototype.getScriptFeatures = function(scriptTag) {
  var features = this.features[scriptTag];
  if (this.features.hasOwnProperty(scriptTag)) {
    return features;
  }
  var featuresIndexes = this.getScriptFeaturesIndexes(scriptTag);
  if (!featuresIndexes) {
    return null;
  }
  var gsub2 = this.font.tables.gsub;
  features = featuresIndexes.map(function(index) {
    return gsub2.features[index];
  });
  this.features[scriptTag] = features;
  this.mapTagsToFeatures(features, scriptTag);
  return features;
};
FeatureQuery.prototype.getSubstitutionType = function(lookupTable, subtable) {
  var lookupType = lookupTable.lookupType.toString();
  var substFormat = subtable.substFormat.toString();
  return lookupType + substFormat;
};
FeatureQuery.prototype.getLookupMethod = function(lookupTable, subtable) {
  var this$1$1 = this;
  var substitutionType = this.getSubstitutionType(lookupTable, subtable);
  switch (substitutionType) {
    case "11":
      return function(glyphIndex) {
        return singleSubstitutionFormat1.apply(
          this$1$1,
          [glyphIndex, subtable]
        );
      };
    case "12":
      return function(glyphIndex) {
        return singleSubstitutionFormat2.apply(
          this$1$1,
          [glyphIndex, subtable]
        );
      };
    case "63":
      return function(contextParams) {
        return chainingSubstitutionFormat3.apply(
          this$1$1,
          [contextParams, subtable]
        );
      };
    case "41":
      return function(contextParams) {
        return ligatureSubstitutionFormat1.apply(
          this$1$1,
          [contextParams, subtable]
        );
      };
    case "21":
      return function(glyphIndex) {
        return decompositionSubstitutionFormat1.apply(
          this$1$1,
          [glyphIndex, subtable]
        );
      };
    default:
      throw new Error(
        "lookupType: " + lookupTable.lookupType + " - substFormat: " + subtable.substFormat + " is not yet supported"
      );
  }
};
FeatureQuery.prototype.lookupFeature = function(query) {
  var contextParams = query.contextParams;
  var currentIndex = contextParams.index;
  var feature = this.getFeature({
    tag: query.tag,
    script: query.script
  });
  if (!feature) {
    return new Error(
      "font '" + this.font.names.fullName.en + "' doesn't support feature '" + query.tag + "' for script '" + query.script + "'."
    );
  }
  var lookups = this.getFeatureLookups(feature);
  var substitutions = [].concat(contextParams.context);
  for (var l3 = 0; l3 < lookups.length; l3++) {
    var lookupTable = lookups[l3];
    var subtables = this.getLookupSubtables(lookupTable);
    for (var s2 = 0; s2 < subtables.length; s2++) {
      var subtable = subtables[s2];
      var substType = this.getSubstitutionType(lookupTable, subtable);
      var lookup = this.getLookupMethod(lookupTable, subtable);
      var substitution = void 0;
      switch (substType) {
        case "11":
          substitution = lookup(contextParams.current);
          if (substitution) {
            substitutions.splice(currentIndex, 1, new SubstitutionAction({
              id: 11,
              tag: query.tag,
              substitution
            }));
          }
          break;
        case "12":
          substitution = lookup(contextParams.current);
          if (substitution) {
            substitutions.splice(currentIndex, 1, new SubstitutionAction({
              id: 12,
              tag: query.tag,
              substitution
            }));
          }
          break;
        case "63":
          substitution = lookup(contextParams);
          if (Array.isArray(substitution) && substitution.length) {
            substitutions.splice(currentIndex, 1, new SubstitutionAction({
              id: 63,
              tag: query.tag,
              substitution
            }));
          }
          break;
        case "41":
          substitution = lookup(contextParams);
          if (substitution) {
            substitutions.splice(currentIndex, 1, new SubstitutionAction({
              id: 41,
              tag: query.tag,
              substitution
            }));
          }
          break;
        case "21":
          substitution = lookup(contextParams.current);
          if (substitution) {
            substitutions.splice(currentIndex, 1, new SubstitutionAction({
              id: 21,
              tag: query.tag,
              substitution
            }));
          }
          break;
      }
      contextParams = new ContextParams(substitutions, currentIndex);
      if (Array.isArray(substitution) && !substitution.length) {
        continue;
      }
      substitution = null;
    }
  }
  return substitutions.length ? substitutions : null;
};
FeatureQuery.prototype.supports = function(query) {
  if (!query.script) {
    return false;
  }
  this.getScriptFeatures(query.script);
  var supportedScript = this.features.hasOwnProperty(query.script);
  if (!query.tag) {
    return supportedScript;
  }
  var supportedFeature = this.features[query.script].some(function(feature) {
    return feature.tag === query.tag;
  });
  return supportedScript && supportedFeature;
};
FeatureQuery.prototype.getLookupSubtables = function(lookupTable) {
  return lookupTable.subtables || null;
};
FeatureQuery.prototype.getLookupByIndex = function(index) {
  var lookups = this.font.tables.gsub.lookups;
  return lookups[index] || null;
};
FeatureQuery.prototype.getFeatureLookups = function(feature) {
  return feature.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
FeatureQuery.prototype.getFeature = function getFeature(query) {
  if (!this.font) {
    return { FAIL: "No font was found" };
  }
  if (!this.features.hasOwnProperty(query.script)) {
    this.getScriptFeatures(query.script);
  }
  var scriptFeatures = this.features[query.script];
  if (!scriptFeatures) {
    return { FAIL: "No feature for script " + query.script };
  }
  if (!scriptFeatures.tags[query.tag]) {
    return null;
  }
  return this.features[query.script].tags[query.tag];
};
function arabicWordStartCheck(contextParams) {
  var char = contextParams.current;
  var prevChar = contextParams.get(-1);
  return (
    // ? arabic first char
    prevChar === null && isArabicChar(char) || // ? arabic char preceded with a non arabic char
    !isArabicChar(prevChar) && isArabicChar(char)
  );
}
function arabicWordEndCheck(contextParams) {
  var nextChar = contextParams.get(1);
  return (
    // ? last arabic char
    nextChar === null || // ? next char is not arabic
    !isArabicChar(nextChar)
  );
}
var arabicWordCheck = {
  startCheck: arabicWordStartCheck,
  endCheck: arabicWordEndCheck
};
function arabicSentenceStartCheck(contextParams) {
  var char = contextParams.current;
  var prevChar = contextParams.get(-1);
  return (
    // ? an arabic char preceded with a non arabic char
    (isArabicChar(char) || isTashkeelArabicChar(char)) && !isArabicChar(prevChar)
  );
}
function arabicSentenceEndCheck(contextParams) {
  var nextChar = contextParams.get(1);
  switch (true) {
    case nextChar === null:
      return true;
    case (!isArabicChar(nextChar) && !isTashkeelArabicChar(nextChar)):
      var nextIsWhitespace = isWhiteSpace(nextChar);
      if (!nextIsWhitespace) {
        return true;
      }
      if (nextIsWhitespace) {
        var arabicCharAhead = false;
        arabicCharAhead = contextParams.lookahead.some(
          function(c3) {
            return isArabicChar(c3) || isTashkeelArabicChar(c3);
          }
        );
        if (!arabicCharAhead) {
          return true;
        }
      }
      break;
    default:
      return false;
  }
}
var arabicSentenceCheck = {
  startCheck: arabicSentenceStartCheck,
  endCheck: arabicSentenceEndCheck
};
function singleSubstitutionFormat1$1(action, tokens, index) {
  tokens[index].setState(action.tag, action.substitution);
}
function singleSubstitutionFormat2$1(action, tokens, index) {
  tokens[index].setState(action.tag, action.substitution);
}
function chainingSubstitutionFormat3$1(action, tokens, index) {
  action.substitution.forEach(function(subst, offset) {
    var token = tokens[index + offset];
    token.setState(action.tag, subst);
  });
}
function ligatureSubstitutionFormat1$1(action, tokens, index) {
  var token = tokens[index];
  token.setState(action.tag, action.substitution.ligGlyph);
  var compsCount = action.substitution.components.length;
  for (var i2 = 0; i2 < compsCount; i2++) {
    token = tokens[index + i2 + 1];
    token.setState("deleted", true);
  }
}
var SUBSTITUTIONS = {
  11: singleSubstitutionFormat1$1,
  12: singleSubstitutionFormat2$1,
  63: chainingSubstitutionFormat3$1,
  41: ligatureSubstitutionFormat1$1
};
function applySubstitution(action, tokens, index) {
  if (action instanceof SubstitutionAction && SUBSTITUTIONS[action.id]) {
    SUBSTITUTIONS[action.id](action, tokens, index);
  }
}
function willConnectPrev(charContextParams) {
  var backtrack = [].concat(charContextParams.backtrack);
  for (var i2 = backtrack.length - 1; i2 >= 0; i2--) {
    var prevChar = backtrack[i2];
    var isolated = isIsolatedArabicChar(prevChar);
    var tashkeel = isTashkeelArabicChar(prevChar);
    if (!isolated && !tashkeel) {
      return true;
    }
    if (isolated) {
      return false;
    }
  }
  return false;
}
function willConnectNext(charContextParams) {
  if (isIsolatedArabicChar(charContextParams.current)) {
    return false;
  }
  for (var i2 = 0; i2 < charContextParams.lookahead.length; i2++) {
    var nextChar = charContextParams.lookahead[i2];
    var tashkeel = isTashkeelArabicChar(nextChar);
    if (!tashkeel) {
      return true;
    }
  }
  return false;
}
function arabicPresentationForms(range) {
  var this$1$1 = this;
  var script = "arab";
  var tags = this.featuresTags[script];
  var tokens = this.tokenizer.getRangeTokens(range);
  if (tokens.length === 1) {
    return;
  }
  var contextParams = new ContextParams(
    tokens.map(
      function(token) {
        return token.getState("glyphIndex");
      }
    ),
    0
  );
  var charContextParams = new ContextParams(
    tokens.map(
      function(token) {
        return token.char;
      }
    ),
    0
  );
  tokens.forEach(function(token, index) {
    if (isTashkeelArabicChar(token.char)) {
      return;
    }
    contextParams.setCurrentIndex(index);
    charContextParams.setCurrentIndex(index);
    var CONNECT = 0;
    if (willConnectPrev(charContextParams)) {
      CONNECT |= 1;
    }
    if (willConnectNext(charContextParams)) {
      CONNECT |= 2;
    }
    var tag;
    switch (CONNECT) {
      case 1:
        tag = "fina";
        break;
      case 2:
        tag = "init";
        break;
      case 3:
        tag = "medi";
        break;
    }
    if (tags.indexOf(tag) === -1) {
      return;
    }
    var substitutions = this$1$1.query.lookupFeature({
      tag,
      script,
      contextParams
    });
    if (substitutions instanceof Error) {
      return console.info(substitutions.message);
    }
    substitutions.forEach(function(action, index2) {
      if (action instanceof SubstitutionAction) {
        applySubstitution(action, tokens, index2);
        contextParams.context[index2] = action.substitution;
      }
    });
  });
}
function getContextParams(tokens, index) {
  var context = tokens.map(function(token) {
    return token.activeState.value;
  });
  return new ContextParams(context, 0);
}
function arabicRequiredLigatures(range) {
  var this$1$1 = this;
  var script = "arab";
  var tokens = this.tokenizer.getRangeTokens(range);
  var contextParams = getContextParams(tokens);
  contextParams.context.forEach(function(glyphIndex, index) {
    contextParams.setCurrentIndex(index);
    var substitutions = this$1$1.query.lookupFeature({
      tag: "rlig",
      script,
      contextParams
    });
    if (substitutions.length) {
      substitutions.forEach(
        function(action) {
          return applySubstitution(action, tokens, index);
        }
      );
      contextParams = getContextParams(tokens);
    }
  });
}
function latinWordStartCheck(contextParams) {
  var char = contextParams.current;
  var prevChar = contextParams.get(-1);
  return (
    // ? latin first char
    prevChar === null && isLatinChar(char) || // ? latin char preceded with a non latin char
    !isLatinChar(prevChar) && isLatinChar(char)
  );
}
function latinWordEndCheck(contextParams) {
  var nextChar = contextParams.get(1);
  return (
    // ? last latin char
    nextChar === null || // ? next char is not latin
    !isLatinChar(nextChar)
  );
}
var latinWordCheck = {
  startCheck: latinWordStartCheck,
  endCheck: latinWordEndCheck
};
function getContextParams$1(tokens, index) {
  var context = tokens.map(function(token) {
    return token.activeState.value;
  });
  return new ContextParams(context, 0);
}
function latinLigature(range) {
  var this$1$1 = this;
  var script = "latn";
  var tokens = this.tokenizer.getRangeTokens(range);
  var contextParams = getContextParams$1(tokens);
  contextParams.context.forEach(function(glyphIndex, index) {
    contextParams.setCurrentIndex(index);
    var substitutions = this$1$1.query.lookupFeature({
      tag: "liga",
      script,
      contextParams
    });
    if (substitutions.length) {
      substitutions.forEach(
        function(action) {
          return applySubstitution(action, tokens, index);
        }
      );
      contextParams = getContextParams$1(tokens);
    }
  });
}
function Bidi(baseDir) {
  this.baseDir = baseDir || "ltr";
  this.tokenizer = new Tokenizer();
  this.featuresTags = {};
}
Bidi.prototype.setText = function(text) {
  this.text = text;
};
Bidi.prototype.contextChecks = {
  latinWordCheck,
  arabicWordCheck,
  arabicSentenceCheck
};
function registerContextChecker(checkId) {
  var check2 = this.contextChecks[checkId + "Check"];
  return this.tokenizer.registerContextChecker(
    checkId,
    check2.startCheck,
    check2.endCheck
  );
}
function tokenizeText() {
  registerContextChecker.call(this, "latinWord");
  registerContextChecker.call(this, "arabicWord");
  registerContextChecker.call(this, "arabicSentence");
  return this.tokenizer.tokenize(this.text);
}
function reverseArabicSentences() {
  var this$1$1 = this;
  var ranges = this.tokenizer.getContextRanges("arabicSentence");
  ranges.forEach(function(range) {
    var rangeTokens = this$1$1.tokenizer.getRangeTokens(range);
    this$1$1.tokenizer.replaceRange(
      range.startIndex,
      range.endOffset,
      rangeTokens.reverse()
    );
  });
}
Bidi.prototype.registerFeatures = function(script, tags) {
  var this$1$1 = this;
  var supportedTags = tags.filter(
    function(tag) {
      return this$1$1.query.supports({ script, tag });
    }
  );
  if (!this.featuresTags.hasOwnProperty(script)) {
    this.featuresTags[script] = supportedTags;
  } else {
    this.featuresTags[script] = this.featuresTags[script].concat(supportedTags);
  }
};
Bidi.prototype.applyFeatures = function(font, features) {
  if (!font) {
    throw new Error(
      "No valid font was provided to apply features"
    );
  }
  if (!this.query) {
    this.query = new FeatureQuery(font);
  }
  for (var f3 = 0; f3 < features.length; f3++) {
    var feature = features[f3];
    if (!this.query.supports({ script: feature.script })) {
      continue;
    }
    this.registerFeatures(feature.script, feature.tags);
  }
};
Bidi.prototype.registerModifier = function(modifierId, condition, modifier) {
  this.tokenizer.registerModifier(modifierId, condition, modifier);
};
function checkGlyphIndexStatus() {
  if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1) {
    throw new Error(
      "glyphIndex modifier is required to apply arabic presentation features."
    );
  }
}
function applyArabicPresentationForms() {
  var this$1$1 = this;
  var script = "arab";
  if (!this.featuresTags.hasOwnProperty(script)) {
    return;
  }
  checkGlyphIndexStatus.call(this);
  var ranges = this.tokenizer.getContextRanges("arabicWord");
  ranges.forEach(function(range) {
    arabicPresentationForms.call(this$1$1, range);
  });
}
function applyArabicRequireLigatures() {
  var this$1$1 = this;
  var script = "arab";
  if (!this.featuresTags.hasOwnProperty(script)) {
    return;
  }
  var tags = this.featuresTags[script];
  if (tags.indexOf("rlig") === -1) {
    return;
  }
  checkGlyphIndexStatus.call(this);
  var ranges = this.tokenizer.getContextRanges("arabicWord");
  ranges.forEach(function(range) {
    arabicRequiredLigatures.call(this$1$1, range);
  });
}
function applyLatinLigatures() {
  var this$1$1 = this;
  var script = "latn";
  if (!this.featuresTags.hasOwnProperty(script)) {
    return;
  }
  var tags = this.featuresTags[script];
  if (tags.indexOf("liga") === -1) {
    return;
  }
  checkGlyphIndexStatus.call(this);
  var ranges = this.tokenizer.getContextRanges("latinWord");
  ranges.forEach(function(range) {
    latinLigature.call(this$1$1, range);
  });
}
Bidi.prototype.checkContextReady = function(contextId) {
  return !!this.tokenizer.getContext(contextId);
};
Bidi.prototype.applyFeaturesToContexts = function() {
  if (this.checkContextReady("arabicWord")) {
    applyArabicPresentationForms.call(this);
    applyArabicRequireLigatures.call(this);
  }
  if (this.checkContextReady("latinWord")) {
    applyLatinLigatures.call(this);
  }
  if (this.checkContextReady("arabicSentence")) {
    reverseArabicSentences.call(this);
  }
};
Bidi.prototype.processText = function(text) {
  if (!this.text || this.text !== text) {
    this.setText(text);
    tokenizeText.call(this);
    this.applyFeaturesToContexts();
  }
};
Bidi.prototype.getBidiText = function(text) {
  this.processText(text);
  return this.tokenizer.getText();
};
Bidi.prototype.getTextGlyphs = function(text) {
  this.processText(text);
  var indexes = [];
  for (var i2 = 0; i2 < this.tokenizer.tokens.length; i2++) {
    var token = this.tokenizer.tokens[i2];
    if (token.state.deleted) {
      continue;
    }
    var index = token.activeState.value;
    indexes.push(Array.isArray(index) ? index[0] : index);
  }
  return indexes;
};
function Font(options) {
  options = options || {};
  options.tables = options.tables || {};
  if (!options.empty) {
    checkArgument(
      options.familyName,
      "When creating a new Font object, familyName is required."
    );
    checkArgument(
      options.styleName,
      "When creating a new Font object, styleName is required."
    );
    checkArgument(
      options.unitsPerEm,
      "When creating a new Font object, unitsPerEm is required."
    );
    checkArgument(
      options.ascender,
      "When creating a new Font object, ascender is required."
    );
    checkArgument(
      options.descender <= 0,
      "When creating a new Font object, negative descender value is required."
    );
    this.unitsPerEm = options.unitsPerEm || 1e3;
    this.ascender = options.ascender;
    this.descender = options.descender;
    this.createdTimestamp = options.createdTimestamp;
    this.tables = Object.assign(options.tables, {
      os2: Object.assign(
        {
          usWeightClass: options.weightClass || this.usWeightClasses.MEDIUM,
          usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,
          fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR
        },
        options.tables.os2
      )
    });
  }
  this.supported = true;
  this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);
  this.encoding = new DefaultEncoding(this);
  this.position = new Position(this);
  this.substitution = new Substitution(this);
  this.tables = this.tables || {};
  this._push = null;
  this._hmtxTableData = {};
  Object.defineProperty(this, "hinting", {
    get: function() {
      if (this._hinting) {
        return this._hinting;
      }
      if (this.outlinesFormat === "truetype") {
        return this._hinting = new Hinting(this);
      }
    }
  });
}
Font.prototype.hasChar = function(c3) {
  return this.encoding.charToGlyphIndex(c3) !== null;
};
Font.prototype.charToGlyphIndex = function(s2) {
  return this.encoding.charToGlyphIndex(s2);
};
Font.prototype.charToGlyph = function(c3) {
  var glyphIndex = this.charToGlyphIndex(c3);
  var glyph = this.glyphs.get(glyphIndex);
  if (!glyph) {
    glyph = this.glyphs.get(0);
  }
  return glyph;
};
Font.prototype.updateFeatures = function(options) {
  return this.defaultRenderOptions.features.map(function(feature) {
    if (feature.script === "latn") {
      return {
        script: "latn",
        tags: feature.tags.filter(function(tag) {
          return options[tag];
        })
      };
    } else {
      return feature;
    }
  });
};
Font.prototype.stringToGlyphs = function(s2, options) {
  var this$1$1 = this;
  var bidi = new Bidi();
  var charToGlyphIndexMod = function(token) {
    return this$1$1.charToGlyphIndex(token.char);
  };
  bidi.registerModifier("glyphIndex", null, charToGlyphIndexMod);
  var features = options ? this.updateFeatures(options.features) : this.defaultRenderOptions.features;
  bidi.applyFeatures(this, features);
  var indexes = bidi.getTextGlyphs(s2);
  var length = indexes.length;
  var glyphs = new Array(length);
  var notdef = this.glyphs.get(0);
  for (var i2 = 0; i2 < length; i2 += 1) {
    glyphs[i2] = this.glyphs.get(indexes[i2]) || notdef;
  }
  return glyphs;
};
Font.prototype.getKerningValue = function(leftGlyph, rightGlyph) {
  leftGlyph = leftGlyph.index || leftGlyph;
  rightGlyph = rightGlyph.index || rightGlyph;
  var gposKerning = this.position.defaultKerningTables;
  if (gposKerning) {
    return this.position.getKerningValue(
      gposKerning,
      leftGlyph,
      rightGlyph
    );
  }
  return this.kerningPairs[leftGlyph + "," + rightGlyph] || 0;
};
Font.prototype.defaultRenderOptions = {
  kerning: true,
  features: [
    /**
     * these 4 features are required to render Arabic text properly
     * and shouldn't be turned off when rendering arabic text.
     */
    { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
    { script: "latn", tags: ["liga", "rlig"] }
  ]
};
Font.prototype.forEachGlyph = function(text, x3, y2, fontSize, options, callback) {
  x3 = x3 !== void 0 ? x3 : 0;
  y2 = y2 !== void 0 ? y2 : 0;
  fontSize = fontSize !== void 0 ? fontSize : 72;
  options = Object.assign({}, this.defaultRenderOptions, options);
  var fontScale = 1 / this.unitsPerEm * fontSize;
  var glyphs = this.stringToGlyphs(text, options);
  var kerningLookups;
  if (options.kerning) {
    var script = options.script || this.position.getDefaultScriptName();
    kerningLookups = this.position.getKerningTables(
      script,
      options.language
    );
  }
  for (var i2 = 0; i2 < glyphs.length; i2 += 1) {
    var glyph = glyphs[i2];
    callback.call(this, glyph, x3, y2, fontSize, options);
    if (glyph.advanceWidth) {
      x3 += glyph.advanceWidth * fontScale;
    }
    if (options.kerning && i2 < glyphs.length - 1) {
      var kerningValue = kerningLookups ? this.position.getKerningValue(
        kerningLookups,
        glyph.index,
        glyphs[i2 + 1].index
      ) : this.getKerningValue(glyph, glyphs[i2 + 1]);
      x3 += kerningValue * fontScale;
    }
    if (options.letterSpacing) {
      x3 += options.letterSpacing * fontSize;
    } else if (options.tracking) {
      x3 += options.tracking / 1e3 * fontSize;
    }
  }
  return x3;
};
Font.prototype.getPath = function(text, x3, y2, fontSize, options) {
  var fullPath = new Path();
  this.forEachGlyph(
    text,
    x3,
    y2,
    fontSize,
    options,
    function(glyph, gX, gY, gFontSize) {
      var glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
      fullPath.extend(glyphPath);
    }
  );
  return fullPath;
};
Font.prototype.getPaths = function(text, x3, y2, fontSize, options) {
  var glyphPaths = [];
  this.forEachGlyph(
    text,
    x3,
    y2,
    fontSize,
    options,
    function(glyph, gX, gY, gFontSize) {
      var glyphPath = glyph.getPath(gX, gY, gFontSize, options, this);
      glyphPaths.push(glyphPath);
    }
  );
  return glyphPaths;
};
Font.prototype.getAdvanceWidth = function(text, fontSize, options) {
  return this.forEachGlyph(text, 0, 0, fontSize, options, function() {
  });
};
Font.prototype.fsSelectionValues = {
  ITALIC: 1,
  //1
  UNDERSCORE: 2,
  //2
  NEGATIVE: 4,
  //4
  OUTLINED: 8,
  //8
  STRIKEOUT: 16,
  //16
  BOLD: 32,
  //32
  REGULAR: 64,
  //64
  USER_TYPO_METRICS: 128,
  //128
  WWS: 256,
  //256
  OBLIQUE: 512
  //512
};
Font.prototype.usWidthClasses = {
  ULTRA_CONDENSED: 1,
  EXTRA_CONDENSED: 2,
  CONDENSED: 3,
  SEMI_CONDENSED: 4,
  MEDIUM: 5,
  SEMI_EXPANDED: 6,
  EXPANDED: 7,
  EXTRA_EXPANDED: 8,
  ULTRA_EXPANDED: 9
};
Font.prototype.usWeightClasses = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900
};
function parseCmapTableFormat12(cmap2, p2) {
  p2.parseUShort();
  cmap2.length = p2.parseULong();
  cmap2.language = p2.parseULong();
  var groupCount;
  cmap2.groupCount = groupCount = p2.parseULong();
  cmap2.glyphIndexMap = {};
  for (var i2 = 0; i2 < groupCount; i2 += 1) {
    var startCharCode = p2.parseULong();
    var endCharCode = p2.parseULong();
    var startGlyphId = p2.parseULong();
    for (var c3 = startCharCode; c3 <= endCharCode; c3 += 1) {
      cmap2.glyphIndexMap[c3] = startGlyphId;
      startGlyphId++;
    }
  }
}
function parseCmapTableFormat4(cmap2, p2, data, start, offset) {
  cmap2.length = p2.parseUShort();
  cmap2.language = p2.parseUShort();
  var segCount;
  cmap2.segCount = segCount = p2.parseUShort() >> 1;
  p2.skip("uShort", 3);
  cmap2.glyphIndexMap = {};
  var endCountParser = new parse.Parser(data, start + offset + 14);
  var startCountParser = new parse.Parser(
    data,
    start + offset + 16 + segCount * 2
  );
  var idDeltaParser = new parse.Parser(
    data,
    start + offset + 16 + segCount * 4
  );
  var idRangeOffsetParser = new parse.Parser(
    data,
    start + offset + 16 + segCount * 6
  );
  var glyphIndexOffset = start + offset + 16 + segCount * 8;
  for (var i2 = 0; i2 < segCount - 1; i2 += 1) {
    var glyphIndex = void 0;
    var endCount = endCountParser.parseUShort();
    var startCount = startCountParser.parseUShort();
    var idDelta = idDeltaParser.parseShort();
    var idRangeOffset = idRangeOffsetParser.parseUShort();
    for (var c3 = startCount; c3 <= endCount; c3 += 1) {
      if (idRangeOffset !== 0) {
        glyphIndexOffset = idRangeOffsetParser.offset + idRangeOffsetParser.relativeOffset - 2;
        glyphIndexOffset += idRangeOffset;
        glyphIndexOffset += (c3 - startCount) * 2;
        glyphIndex = parse.getUShort(data, glyphIndexOffset);
        if (glyphIndex !== 0) {
          glyphIndex = glyphIndex + idDelta & 65535;
        }
      } else {
        glyphIndex = c3 + idDelta & 65535;
      }
      cmap2.glyphIndexMap[c3] = glyphIndex;
    }
  }
}
function parseCmapTable(data, start) {
  var cmap2 = {};
  cmap2.version = parse.getUShort(data, start);
  check.argument(cmap2.version === 0, "cmap table version should be 0.");
  cmap2.numTables = parse.getUShort(data, start + 2);
  var offset = -1;
  for (var i2 = cmap2.numTables - 1; i2 >= 0; i2 -= 1) {
    var platformId = parse.getUShort(data, start + 4 + i2 * 8);
    var encodingId = parse.getUShort(data, start + 4 + i2 * 8 + 2);
    if (platformId === 3 && (encodingId === 0 || encodingId === 1 || encodingId === 10) || platformId === 0 && (encodingId === 0 || encodingId === 1 || encodingId === 2 || encodingId === 3 || encodingId === 4)) {
      offset = parse.getULong(data, start + 4 + i2 * 8 + 4);
      break;
    }
  }
  if (offset === -1) {
    throw new Error("No valid cmap sub-tables found.");
  }
  var p2 = new parse.Parser(data, start + offset);
  cmap2.format = p2.parseUShort();
  if (cmap2.format === 12) {
    parseCmapTableFormat12(cmap2, p2);
  } else if (cmap2.format === 4) {
    parseCmapTableFormat4(cmap2, p2, data, start, offset);
  } else {
    throw new Error(
      "Only format 4 and 12 cmap tables are supported (found format " + cmap2.format + ")."
    );
  }
  return cmap2;
}
var cmap = { parse: parseCmapTable };
function calcCFFSubroutineBias(subrs) {
  var bias;
  if (subrs.length < 1240) {
    bias = 107;
  } else if (subrs.length < 33900) {
    bias = 1131;
  } else {
    bias = 32768;
  }
  return bias;
}
function parseCFFIndex(data, start, conversionFn) {
  var offsets = [];
  var objects = [];
  var count = parse.getCard16(data, start);
  var objectOffset;
  var endOffset;
  if (count !== 0) {
    var offsetSize = parse.getByte(data, start + 2);
    objectOffset = start + (count + 1) * offsetSize + 2;
    var pos = start + 3;
    for (var i2 = 0; i2 < count + 1; i2 += 1) {
      offsets.push(parse.getOffset(data, pos, offsetSize));
      pos += offsetSize;
    }
    endOffset = objectOffset + offsets[count];
  } else {
    endOffset = start + 2;
  }
  for (var i$1 = 0; i$1 < offsets.length - 1; i$1 += 1) {
    var value = parse.getBytes(
      data,
      objectOffset + offsets[i$1],
      objectOffset + offsets[i$1 + 1]
    );
    if (conversionFn) {
      value = conversionFn(value);
    }
    objects.push(value);
  }
  return { objects, startOffset: start, endOffset };
}
function parseCFFIndexLowMemory(data, start) {
  var offsets = [];
  var count = parse.getCard16(data, start);
  var objectOffset;
  var endOffset;
  if (count !== 0) {
    var offsetSize = parse.getByte(data, start + 2);
    objectOffset = start + (count + 1) * offsetSize + 2;
    var pos = start + 3;
    for (var i2 = 0; i2 < count + 1; i2 += 1) {
      offsets.push(parse.getOffset(data, pos, offsetSize));
      pos += offsetSize;
    }
    endOffset = objectOffset + offsets[count];
  } else {
    endOffset = start + 2;
  }
  return { offsets, startOffset: start, endOffset };
}
function getCffIndexObject(i2, offsets, data, start, conversionFn) {
  var count = parse.getCard16(data, start);
  var objectOffset = 0;
  if (count !== 0) {
    var offsetSize = parse.getByte(data, start + 2);
    objectOffset = start + (count + 1) * offsetSize + 2;
  }
  var value = parse.getBytes(
    data,
    objectOffset + offsets[i2],
    objectOffset + offsets[i2 + 1]
  );
  return value;
}
function parseFloatOperand(parser) {
  var s2 = "";
  var eof = 15;
  var lookup = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "E",
    "E-",
    null,
    "-"
  ];
  while (true) {
    var b2 = parser.parseByte();
    var n1 = b2 >> 4;
    var n2 = b2 & 15;
    if (n1 === eof) {
      break;
    }
    s2 += lookup[n1];
    if (n2 === eof) {
      break;
    }
    s2 += lookup[n2];
  }
  return parseFloat(s2);
}
function parseOperand(parser, b0) {
  var b1;
  var b2;
  var b3;
  var b4;
  if (b0 === 28) {
    b1 = parser.parseByte();
    b2 = parser.parseByte();
    return b1 << 8 | b2;
  }
  if (b0 === 29) {
    b1 = parser.parseByte();
    b2 = parser.parseByte();
    b3 = parser.parseByte();
    b4 = parser.parseByte();
    return b1 << 24 | b2 << 16 | b3 << 8 | b4;
  }
  if (b0 === 30) {
    return parseFloatOperand(parser);
  }
  if (b0 >= 32 && b0 <= 246) {
    return b0 - 139;
  }
  if (b0 >= 247 && b0 <= 250) {
    b1 = parser.parseByte();
    return (b0 - 247) * 256 + b1 + 108;
  }
  if (b0 >= 251 && b0 <= 254) {
    b1 = parser.parseByte();
    return -(b0 - 251) * 256 - b1 - 108;
  }
  throw new Error("Invalid b0 " + b0);
}
function entriesToObject(entries) {
  var o2 = {};
  for (var i2 = 0; i2 < entries.length; i2 += 1) {
    var key = entries[i2][0];
    var values = entries[i2][1];
    var value = void 0;
    if (values.length === 1) {
      value = values[0];
    } else {
      value = values;
    }
    if (o2.hasOwnProperty(key) && !isNaN(o2[key])) {
      throw new Error("Object " + o2 + " already has key " + key);
    }
    o2[key] = value;
  }
  return o2;
}
function parseCFFDict(data, start, size) {
  start = start !== void 0 ? start : 0;
  var parser = new parse.Parser(data, start);
  var entries = [];
  var operands = [];
  size = size !== void 0 ? size : data.length;
  while (parser.relativeOffset < size) {
    var op = parser.parseByte();
    if (op <= 21) {
      if (op === 12) {
        op = 1200 + parser.parseByte();
      }
      entries.push([op, operands]);
      operands = [];
    } else {
      operands.push(parseOperand(parser, op));
    }
  }
  return entriesToObject(entries);
}
function getCFFString(strings, index) {
  if (index <= 390) {
    index = cffStandardStrings[index];
  } else {
    index = strings[index - 391];
  }
  return index;
}
function interpretDict(dict, meta2, strings) {
  var newDict = {};
  var value;
  for (var i2 = 0; i2 < meta2.length; i2 += 1) {
    var m3 = meta2[i2];
    if (Array.isArray(m3.type)) {
      var values = [];
      values.length = m3.type.length;
      for (var j2 = 0; j2 < m3.type.length; j2++) {
        value = dict[m3.op] !== void 0 ? dict[m3.op][j2] : void 0;
        if (value === void 0) {
          value = m3.value !== void 0 && m3.value[j2] !== void 0 ? m3.value[j2] : null;
        }
        if (m3.type[j2] === "SID") {
          value = getCFFString(strings, value);
        }
        values[j2] = value;
      }
      newDict[m3.name] = values;
    } else {
      value = dict[m3.op];
      if (value === void 0) {
        value = m3.value !== void 0 ? m3.value : null;
      }
      if (m3.type === "SID") {
        value = getCFFString(strings, value);
      }
      newDict[m3.name] = value;
    }
  }
  return newDict;
}
function parseCFFHeader(data, start) {
  var header = {};
  header.formatMajor = parse.getCard8(data, start);
  header.formatMinor = parse.getCard8(data, start + 1);
  header.size = parse.getCard8(data, start + 2);
  header.offsetSize = parse.getCard8(data, start + 3);
  header.startOffset = start;
  header.endOffset = start + 4;
  return header;
}
var TOP_DICT_META = [
  { name: "version", op: 0, type: "SID" },
  { name: "notice", op: 1, type: "SID" },
  { name: "copyright", op: 1200, type: "SID" },
  { name: "fullName", op: 2, type: "SID" },
  { name: "familyName", op: 3, type: "SID" },
  { name: "weight", op: 4, type: "SID" },
  { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
  { name: "italicAngle", op: 1202, type: "number", value: 0 },
  { name: "underlinePosition", op: 1203, type: "number", value: -100 },
  { name: "underlineThickness", op: 1204, type: "number", value: 50 },
  { name: "paintType", op: 1205, type: "number", value: 0 },
  { name: "charstringType", op: 1206, type: "number", value: 2 },
  {
    name: "fontMatrix",
    op: 1207,
    type: ["real", "real", "real", "real", "real", "real"],
    value: [1e-3, 0, 0, 1e-3, 0, 0]
  },
  { name: "uniqueId", op: 13, type: "number" },
  {
    name: "fontBBox",
    op: 5,
    type: ["number", "number", "number", "number"],
    value: [0, 0, 0, 0]
  },
  { name: "strokeWidth", op: 1208, type: "number", value: 0 },
  { name: "xuid", op: 14, type: [], value: null },
  { name: "charset", op: 15, type: "offset", value: 0 },
  { name: "encoding", op: 16, type: "offset", value: 0 },
  { name: "charStrings", op: 17, type: "offset", value: 0 },
  { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
  { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
  { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
  { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
  { name: "cidFontType", op: 1233, type: "number", value: 0 },
  { name: "cidCount", op: 1234, type: "number", value: 8720 },
  { name: "uidBase", op: 1235, type: "number" },
  { name: "fdArray", op: 1236, type: "offset" },
  { name: "fdSelect", op: 1237, type: "offset" },
  { name: "fontName", op: 1238, type: "SID" }
];
var PRIVATE_DICT_META = [
  { name: "subrs", op: 19, type: "offset", value: 0 },
  { name: "defaultWidthX", op: 20, type: "number", value: 0 },
  { name: "nominalWidthX", op: 21, type: "number", value: 0 }
];
function parseCFFTopDict(data, strings) {
  var dict = parseCFFDict(data, 0, data.byteLength);
  return interpretDict(dict, TOP_DICT_META, strings);
}
function parseCFFPrivateDict(data, start, size, strings) {
  var dict = parseCFFDict(data, start, size);
  return interpretDict(dict, PRIVATE_DICT_META, strings);
}
function gatherCFFTopDicts(data, start, cffIndex, strings) {
  var topDictArray = [];
  for (var iTopDict = 0; iTopDict < cffIndex.length; iTopDict += 1) {
    var topDictData = new DataView(
      new Uint8Array(cffIndex[iTopDict]).buffer
    );
    var topDict = parseCFFTopDict(topDictData, strings);
    topDict._subrs = [];
    topDict._subrsBias = 0;
    topDict._defaultWidthX = 0;
    topDict._nominalWidthX = 0;
    var privateSize = topDict.private[0];
    var privateOffset = topDict.private[1];
    if (privateSize !== 0 && privateOffset !== 0) {
      var privateDict = parseCFFPrivateDict(
        data,
        privateOffset + start,
        privateSize,
        strings
      );
      topDict._defaultWidthX = privateDict.defaultWidthX;
      topDict._nominalWidthX = privateDict.nominalWidthX;
      if (privateDict.subrs !== 0) {
        var subrOffset = privateOffset + privateDict.subrs;
        var subrIndex = parseCFFIndex(data, subrOffset + start);
        topDict._subrs = subrIndex.objects;
        topDict._subrsBias = calcCFFSubroutineBias(topDict._subrs);
      }
      topDict._privateDict = privateDict;
    }
    topDictArray.push(topDict);
  }
  return topDictArray;
}
function parseCFFCharset(data, start, nGlyphs, strings) {
  var sid;
  var count;
  var parser = new parse.Parser(data, start);
  nGlyphs -= 1;
  var charset = [".notdef"];
  var format = parser.parseCard8();
  if (format === 0) {
    for (var i2 = 0; i2 < nGlyphs; i2 += 1) {
      sid = parser.parseSID();
      charset.push(getCFFString(strings, sid));
    }
  } else if (format === 1) {
    while (charset.length <= nGlyphs) {
      sid = parser.parseSID();
      count = parser.parseCard8();
      for (var i$1 = 0; i$1 <= count; i$1 += 1) {
        charset.push(getCFFString(strings, sid));
        sid += 1;
      }
    }
  } else if (format === 2) {
    while (charset.length <= nGlyphs) {
      sid = parser.parseSID();
      count = parser.parseCard16();
      for (var i$2 = 0; i$2 <= count; i$2 += 1) {
        charset.push(getCFFString(strings, sid));
        sid += 1;
      }
    }
  } else {
    throw new Error("Unknown charset format " + format);
  }
  return charset;
}
function parseCFFEncoding(data, start, charset) {
  var code;
  var enc = {};
  var parser = new parse.Parser(data, start);
  var format = parser.parseCard8();
  if (format === 0) {
    var nCodes = parser.parseCard8();
    for (var i2 = 0; i2 < nCodes; i2 += 1) {
      code = parser.parseCard8();
      enc[code] = i2;
    }
  } else if (format === 1) {
    var nRanges = parser.parseCard8();
    code = 1;
    for (var i$1 = 0; i$1 < nRanges; i$1 += 1) {
      var first = parser.parseCard8();
      var nLeft = parser.parseCard8();
      for (var j2 = first; j2 <= first + nLeft; j2 += 1) {
        enc[j2] = code;
        code += 1;
      }
    }
  } else {
    throw new Error("Unknown encoding format " + format);
  }
  return new CffEncoding(enc, charset);
}
function parseCFFCharstring(font, glyph, code) {
  var c1x;
  var c1y;
  var c2x;
  var c2y;
  var p2 = new Path();
  var stack = [];
  var nStems = 0;
  var haveWidth = false;
  var open = false;
  var x3 = 0;
  var y2 = 0;
  var subrs;
  var subrsBias;
  var defaultWidthX;
  var nominalWidthX;
  if (font.isCIDFont) {
    var fdIndex = font.tables.cff.topDict._fdSelect[glyph.index];
    var fdDict = font.tables.cff.topDict._fdArray[fdIndex];
    subrs = fdDict._subrs;
    subrsBias = fdDict._subrsBias;
    defaultWidthX = fdDict._defaultWidthX;
    nominalWidthX = fdDict._nominalWidthX;
  } else {
    subrs = font.tables.cff.topDict._subrs;
    subrsBias = font.tables.cff.topDict._subrsBias;
    defaultWidthX = font.tables.cff.topDict._defaultWidthX;
    nominalWidthX = font.tables.cff.topDict._nominalWidthX;
  }
  var width = defaultWidthX;
  function newContour(x4, y3) {
    if (open) {
      p2.closePath();
    }
    p2.moveTo(x4, y3);
    open = true;
  }
  function parseStems() {
    var hasWidthArg;
    hasWidthArg = stack.length % 2 !== 0;
    if (hasWidthArg && !haveWidth) {
      width = stack.shift() + nominalWidthX;
    }
    nStems += stack.length >> 1;
    stack.length = 0;
    haveWidth = true;
  }
  function parse2(code2) {
    var b1;
    var b2;
    var b3;
    var b4;
    var codeIndex;
    var subrCode;
    var jpx;
    var jpy;
    var c3x;
    var c3y;
    var c4x;
    var c4y;
    var i2 = 0;
    while (i2 < code2.length) {
      var v4 = code2[i2];
      i2 += 1;
      switch (v4) {
        case 1:
          parseStems();
          break;
        case 3:
          parseStems();
          break;
        case 4:
          if (stack.length > 1 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          y2 += stack.pop();
          newContour(x3, y2);
          break;
        case 5:
          while (stack.length > 0) {
            x3 += stack.shift();
            y2 += stack.shift();
            p2.lineTo(x3, y2);
          }
          break;
        case 6:
          while (stack.length > 0) {
            x3 += stack.shift();
            p2.lineTo(x3, y2);
            if (stack.length === 0) {
              break;
            }
            y2 += stack.shift();
            p2.lineTo(x3, y2);
          }
          break;
        case 7:
          while (stack.length > 0) {
            y2 += stack.shift();
            p2.lineTo(x3, y2);
            if (stack.length === 0) {
              break;
            }
            x3 += stack.shift();
            p2.lineTo(x3, y2);
          }
          break;
        case 8:
          while (stack.length > 0) {
            c1x = x3 + stack.shift();
            c1y = y2 + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x3 = c2x + stack.shift();
            y2 = c2y + stack.shift();
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          }
          break;
        case 10:
          codeIndex = stack.pop() + subrsBias;
          subrCode = subrs[codeIndex];
          if (subrCode) {
            parse2(subrCode);
          }
          break;
        case 11:
          return;
        case 12:
          v4 = code2[i2];
          i2 += 1;
          switch (v4) {
            case 35:
              c1x = x3 + stack.shift();
              c1y = y2 + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y + stack.shift();
              c3x = jpx + stack.shift();
              c3y = jpy + stack.shift();
              c4x = c3x + stack.shift();
              c4y = c3y + stack.shift();
              x3 = c4x + stack.shift();
              y2 = c4y + stack.shift();
              stack.shift();
              p2.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p2.curveTo(c3x, c3y, c4x, c4y, x3, y2);
              break;
            case 34:
              c1x = x3 + stack.shift();
              c1y = y2;
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y;
              c3x = jpx + stack.shift();
              c3y = c2y;
              c4x = c3x + stack.shift();
              c4y = y2;
              x3 = c4x + stack.shift();
              p2.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p2.curveTo(c3x, c3y, c4x, c4y, x3, y2);
              break;
            case 36:
              c1x = x3 + stack.shift();
              c1y = y2 + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y;
              c3x = jpx + stack.shift();
              c3y = c2y;
              c4x = c3x + stack.shift();
              c4y = c3y + stack.shift();
              x3 = c4x + stack.shift();
              p2.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p2.curveTo(c3x, c3y, c4x, c4y, x3, y2);
              break;
            case 37:
              c1x = x3 + stack.shift();
              c1y = y2 + stack.shift();
              c2x = c1x + stack.shift();
              c2y = c1y + stack.shift();
              jpx = c2x + stack.shift();
              jpy = c2y + stack.shift();
              c3x = jpx + stack.shift();
              c3y = jpy + stack.shift();
              c4x = c3x + stack.shift();
              c4y = c3y + stack.shift();
              if (Math.abs(c4x - x3) > Math.abs(c4y - y2)) {
                x3 = c4x + stack.shift();
              } else {
                y2 = c4y + stack.shift();
              }
              p2.curveTo(c1x, c1y, c2x, c2y, jpx, jpy);
              p2.curveTo(c3x, c3y, c4x, c4y, x3, y2);
              break;
            default:
              console.log(
                "Glyph " + glyph.index + ": unknown operator 1200" + v4
              );
              stack.length = 0;
          }
          break;
        case 14:
          if (stack.length > 0 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          if (open) {
            p2.closePath();
            open = false;
          }
          break;
        case 18:
          parseStems();
          break;
        case 19:
        // hintmask
        case 20:
          parseStems();
          i2 += nStems + 7 >> 3;
          break;
        case 21:
          if (stack.length > 2 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          y2 += stack.pop();
          x3 += stack.pop();
          newContour(x3, y2);
          break;
        case 22:
          if (stack.length > 1 && !haveWidth) {
            width = stack.shift() + nominalWidthX;
            haveWidth = true;
          }
          x3 += stack.pop();
          newContour(x3, y2);
          break;
        case 23:
          parseStems();
          break;
        case 24:
          while (stack.length > 2) {
            c1x = x3 + stack.shift();
            c1y = y2 + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x3 = c2x + stack.shift();
            y2 = c2y + stack.shift();
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          }
          x3 += stack.shift();
          y2 += stack.shift();
          p2.lineTo(x3, y2);
          break;
        case 25:
          while (stack.length > 6) {
            x3 += stack.shift();
            y2 += stack.shift();
            p2.lineTo(x3, y2);
          }
          c1x = x3 + stack.shift();
          c1y = y2 + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x3 = c2x + stack.shift();
          y2 = c2y + stack.shift();
          p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          break;
        case 26:
          if (stack.length % 2) {
            x3 += stack.shift();
          }
          while (stack.length > 0) {
            c1x = x3;
            c1y = y2 + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x3 = c2x;
            y2 = c2y + stack.shift();
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          }
          break;
        case 27:
          if (stack.length % 2) {
            y2 += stack.shift();
          }
          while (stack.length > 0) {
            c1x = x3 + stack.shift();
            c1y = y2;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x3 = c2x + stack.shift();
            y2 = c2y;
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          }
          break;
        case 28:
          b1 = code2[i2];
          b2 = code2[i2 + 1];
          stack.push((b1 << 24 | b2 << 16) >> 16);
          i2 += 2;
          break;
        case 29:
          codeIndex = stack.pop() + font.gsubrsBias;
          subrCode = font.gsubrs[codeIndex];
          if (subrCode) {
            parse2(subrCode);
          }
          break;
        case 30:
          while (stack.length > 0) {
            c1x = x3;
            c1y = y2 + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x3 = c2x + stack.shift();
            y2 = c2y + (stack.length === 1 ? stack.shift() : 0);
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
            if (stack.length === 0) {
              break;
            }
            c1x = x3 + stack.shift();
            c1y = y2;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y2 = c2y + stack.shift();
            x3 = c2x + (stack.length === 1 ? stack.shift() : 0);
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          }
          break;
        case 31:
          while (stack.length > 0) {
            c1x = x3 + stack.shift();
            c1y = y2;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y2 = c2y + stack.shift();
            x3 = c2x + (stack.length === 1 ? stack.shift() : 0);
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
            if (stack.length === 0) {
              break;
            }
            c1x = x3;
            c1y = y2 + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x3 = c2x + stack.shift();
            y2 = c2y + (stack.length === 1 ? stack.shift() : 0);
            p2.curveTo(c1x, c1y, c2x, c2y, x3, y2);
          }
          break;
        default:
          if (v4 < 32) {
            console.log(
              "Glyph " + glyph.index + ": unknown operator " + v4
            );
          } else if (v4 < 247) {
            stack.push(v4 - 139);
          } else if (v4 < 251) {
            b1 = code2[i2];
            i2 += 1;
            stack.push((v4 - 247) * 256 + b1 + 108);
          } else if (v4 < 255) {
            b1 = code2[i2];
            i2 += 1;
            stack.push(-(v4 - 251) * 256 - b1 - 108);
          } else {
            b1 = code2[i2];
            b2 = code2[i2 + 1];
            b3 = code2[i2 + 2];
            b4 = code2[i2 + 3];
            i2 += 4;
            stack.push(
              (b1 << 24 | b2 << 16 | b3 << 8 | b4) / 65536
            );
          }
      }
    }
  }
  parse2(code);
  glyph.advanceWidth = width;
  return p2;
}
function parseCFFFDSelect(data, start, nGlyphs, fdArrayCount) {
  var fdSelect = [];
  var fdIndex;
  var parser = new parse.Parser(data, start);
  var format = parser.parseCard8();
  if (format === 0) {
    for (var iGid = 0; iGid < nGlyphs; iGid++) {
      fdIndex = parser.parseCard8();
      if (fdIndex >= fdArrayCount) {
        throw new Error(
          "CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")"
        );
      }
      fdSelect.push(fdIndex);
    }
  } else if (format === 3) {
    var nRanges = parser.parseCard16();
    var first = parser.parseCard16();
    if (first !== 0) {
      throw new Error(
        "CFF Table CID Font FDSelect format 3 range has bad initial GID " + first
      );
    }
    var next;
    for (var iRange = 0; iRange < nRanges; iRange++) {
      fdIndex = parser.parseCard8();
      next = parser.parseCard16();
      if (fdIndex >= fdArrayCount) {
        throw new Error(
          "CFF table CID Font FDSelect has bad FD index value " + fdIndex + " (FD count " + fdArrayCount + ")"
        );
      }
      if (next > nGlyphs) {
        throw new Error(
          "CFF Table CID Font FDSelect format 3 range has bad GID " + next
        );
      }
      for (; first < next; first++) {
        fdSelect.push(fdIndex);
      }
      first = next;
    }
    if (next !== nGlyphs) {
      throw new Error(
        "CFF Table CID Font FDSelect format 3 range has bad final GID " + next
      );
    }
  } else {
    throw new Error(
      "CFF Table CID Font FDSelect table has unsupported format " + format
    );
  }
  return fdSelect;
}
function parseCFFTable(data, start, font, opt) {
  font.tables.cff = {};
  var header = parseCFFHeader(data, start);
  var nameIndex = parseCFFIndex(
    data,
    header.endOffset,
    parse.bytesToString
  );
  var topDictIndex = parseCFFIndex(data, nameIndex.endOffset);
  var stringIndex = parseCFFIndex(
    data,
    topDictIndex.endOffset,
    parse.bytesToString
  );
  var globalSubrIndex = parseCFFIndex(data, stringIndex.endOffset);
  font.gsubrs = globalSubrIndex.objects;
  font.gsubrsBias = calcCFFSubroutineBias(font.gsubrs);
  var topDictArray = gatherCFFTopDicts(
    data,
    start,
    topDictIndex.objects,
    stringIndex.objects
  );
  if (topDictArray.length !== 1) {
    throw new Error(
      "CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + topDictArray.length
    );
  }
  var topDict = topDictArray[0];
  font.tables.cff.topDict = topDict;
  if (topDict._privateDict) {
    font.defaultWidthX = topDict._privateDict.defaultWidthX;
    font.nominalWidthX = topDict._privateDict.nominalWidthX;
  }
  if (topDict.ros[0] !== void 0 && topDict.ros[1] !== void 0) {
    font.isCIDFont = true;
  }
  if (font.isCIDFont) {
    var fdArrayOffset = topDict.fdArray;
    var fdSelectOffset = topDict.fdSelect;
    if (fdArrayOffset === 0 || fdSelectOffset === 0) {
      throw new Error(
        "Font is marked as a CID font, but FDArray and/or FDSelect information is missing"
      );
    }
    fdArrayOffset += start;
    var fdArrayIndex = parseCFFIndex(data, fdArrayOffset);
    var fdArray = gatherCFFTopDicts(
      data,
      start,
      fdArrayIndex.objects,
      stringIndex.objects
    );
    topDict._fdArray = fdArray;
    fdSelectOffset += start;
    topDict._fdSelect = parseCFFFDSelect(
      data,
      fdSelectOffset,
      font.numGlyphs,
      fdArray.length
    );
  }
  var privateDictOffset = start + topDict.private[1];
  var privateDict = parseCFFPrivateDict(
    data,
    privateDictOffset,
    topDict.private[0],
    stringIndex.objects
  );
  font.defaultWidthX = privateDict.defaultWidthX;
  font.nominalWidthX = privateDict.nominalWidthX;
  if (privateDict.subrs !== 0) {
    var subrOffset = privateDictOffset + privateDict.subrs;
    var subrIndex = parseCFFIndex(data, subrOffset);
    font.subrs = subrIndex.objects;
    font.subrsBias = calcCFFSubroutineBias(font.subrs);
  } else {
    font.subrs = [];
    font.subrsBias = 0;
  }
  var charStringsIndex;
  if (opt.lowMemory) {
    charStringsIndex = parseCFFIndexLowMemory(
      data,
      start + topDict.charStrings
    );
    font.nGlyphs = charStringsIndex.offsets.length;
  } else {
    charStringsIndex = parseCFFIndex(data, start + topDict.charStrings);
    font.nGlyphs = charStringsIndex.objects.length;
  }
  var charset = parseCFFCharset(
    data,
    start + topDict.charset,
    font.nGlyphs,
    stringIndex.objects
  );
  if (topDict.encoding === 0) {
    font.cffEncoding = new CffEncoding(cffStandardEncoding, charset);
  } else if (topDict.encoding === 1) {
    font.cffEncoding = new CffEncoding(cffExpertEncoding, charset);
  } else {
    font.cffEncoding = parseCFFEncoding(
      data,
      start + topDict.encoding,
      charset
    );
  }
  font.encoding = font.encoding || font.cffEncoding;
  font.glyphs = new glyphset.GlyphSet(font);
  if (opt.lowMemory) {
    font._push = function(i3) {
      var charString2 = getCffIndexObject(
        i3,
        charStringsIndex.offsets,
        data,
        start + topDict.charStrings
      );
      font.glyphs.push(
        i3,
        glyphset.cffGlyphLoader(font, i3, parseCFFCharstring, charString2)
      );
    };
  } else {
    for (var i2 = 0; i2 < font.nGlyphs; i2 += 1) {
      var charString = charStringsIndex.objects[i2];
      font.glyphs.push(
        i2,
        glyphset.cffGlyphLoader(font, i2, parseCFFCharstring, charString)
      );
    }
  }
}
var cff = { parse: parseCFFTable };
function parseFvarAxis(data, start, names) {
  var axis = {};
  var p2 = new parse.Parser(data, start);
  axis.tag = p2.parseTag();
  axis.minValue = p2.parseFixed();
  axis.defaultValue = p2.parseFixed();
  axis.maxValue = p2.parseFixed();
  p2.skip("uShort", 1);
  axis.name = names[p2.parseUShort()] || {};
  return axis;
}
function parseFvarInstance(data, start, axes, names) {
  var inst = {};
  var p2 = new parse.Parser(data, start);
  inst.name = names[p2.parseUShort()] || {};
  p2.skip("uShort", 1);
  inst.coordinates = {};
  for (var i2 = 0; i2 < axes.length; ++i2) {
    inst.coordinates[axes[i2].tag] = p2.parseFixed();
  }
  return inst;
}
function parseFvarTable(data, start, names) {
  var p2 = new parse.Parser(data, start);
  var tableVersion = p2.parseULong();
  check.argument(
    tableVersion === 65536,
    "Unsupported fvar table version."
  );
  var offsetToData = p2.parseOffset16();
  p2.skip("uShort", 1);
  var axisCount = p2.parseUShort();
  var axisSize = p2.parseUShort();
  var instanceCount = p2.parseUShort();
  var instanceSize = p2.parseUShort();
  var axes = [];
  for (var i2 = 0; i2 < axisCount; i2++) {
    axes.push(
      parseFvarAxis(data, start + offsetToData + i2 * axisSize, names)
    );
  }
  var instances = [];
  var instanceStart = start + offsetToData + axisCount * axisSize;
  for (var j2 = 0; j2 < instanceCount; j2++) {
    instances.push(
      parseFvarInstance(
        data,
        instanceStart + j2 * instanceSize,
        axes,
        names
      )
    );
  }
  return { axes, instances };
}
var fvar = { parse: parseFvarTable };
var attachList = function() {
  return {
    coverage: this.parsePointer(Parser.coverage),
    attachPoints: this.parseList(Parser.pointer(Parser.uShortList))
  };
};
var caretValue = function() {
  var format = this.parseUShort();
  check.argument(
    format === 1 || format === 2 || format === 3,
    "Unsupported CaretValue table version."
  );
  if (format === 1) {
    return { coordinate: this.parseShort() };
  } else if (format === 2) {
    return { pointindex: this.parseShort() };
  } else if (format === 3) {
    return { coordinate: this.parseShort() };
  }
};
var ligGlyph = function() {
  return this.parseList(Parser.pointer(caretValue));
};
var ligCaretList = function() {
  return {
    coverage: this.parsePointer(Parser.coverage),
    ligGlyphs: this.parseList(Parser.pointer(ligGlyph))
  };
};
var markGlyphSets = function() {
  this.parseUShort();
  return this.parseList(Parser.pointer(Parser.coverage));
};
function parseGDEFTable(data, start) {
  start = start || 0;
  var p2 = new Parser(data, start);
  var tableVersion = p2.parseVersion(1);
  check.argument(
    tableVersion === 1 || tableVersion === 1.2 || tableVersion === 1.3,
    "Unsupported GDEF table version."
  );
  var gdef2 = {
    version: tableVersion,
    classDef: p2.parsePointer(Parser.classDef),
    attachList: p2.parsePointer(attachList),
    ligCaretList: p2.parsePointer(ligCaretList),
    markAttachClassDef: p2.parsePointer(Parser.classDef)
  };
  if (tableVersion >= 1.2) {
    gdef2.markGlyphSets = p2.parsePointer(markGlyphSets);
  }
  return gdef2;
}
var gdef = { parse: parseGDEFTable };
var subtableParsers = new Array(10);
subtableParsers[1] = function parseLookup1() {
  var start = this.offset + this.relativeOffset;
  var posformat = this.parseUShort();
  if (posformat === 1) {
    return {
      posFormat: 1,
      coverage: this.parsePointer(Parser.coverage),
      value: this.parseValueRecord()
    };
  } else if (posformat === 2) {
    return {
      posFormat: 2,
      coverage: this.parsePointer(Parser.coverage),
      values: this.parseValueRecordList()
    };
  }
  check.assert(
    false,
    "0x" + start.toString(16) + ": GPOS lookup type 1 format must be 1 or 2."
  );
};
subtableParsers[2] = function parseLookup2() {
  var start = this.offset + this.relativeOffset;
  var posFormat = this.parseUShort();
  check.assert(
    posFormat === 1 || posFormat === 2,
    "0x" + start.toString(16) + ": GPOS lookup type 2 format must be 1 or 2."
  );
  var coverage = this.parsePointer(Parser.coverage);
  var valueFormat1 = this.parseUShort();
  var valueFormat2 = this.parseUShort();
  if (posFormat === 1) {
    return {
      posFormat,
      coverage,
      valueFormat1,
      valueFormat2,
      pairSets: this.parseList(
        Parser.pointer(
          Parser.list(function() {
            return {
              // pairValueRecord
              secondGlyph: this.parseUShort(),
              value1: this.parseValueRecord(valueFormat1),
              value2: this.parseValueRecord(valueFormat2)
            };
          })
        )
      )
    };
  } else if (posFormat === 2) {
    var classDef1 = this.parsePointer(Parser.classDef);
    var classDef2 = this.parsePointer(Parser.classDef);
    var class1Count = this.parseUShort();
    var class2Count = this.parseUShort();
    return {
      // Class Pair Adjustment
      posFormat,
      coverage,
      valueFormat1,
      valueFormat2,
      classDef1,
      classDef2,
      class1Count,
      class2Count,
      classRecords: this.parseList(
        class1Count,
        Parser.list(class2Count, function() {
          return {
            value1: this.parseValueRecord(valueFormat1),
            value2: this.parseValueRecord(valueFormat2)
          };
        })
      )
    };
  }
};
subtableParsers[3] = function parseLookup3() {
  return { error: "GPOS Lookup 3 not supported" };
};
subtableParsers[4] = function parseLookup4() {
  return { error: "GPOS Lookup 4 not supported" };
};
subtableParsers[5] = function parseLookup5() {
  return { error: "GPOS Lookup 5 not supported" };
};
subtableParsers[6] = function parseLookup6() {
  return { error: "GPOS Lookup 6 not supported" };
};
subtableParsers[7] = function parseLookup7() {
  return { error: "GPOS Lookup 7 not supported" };
};
subtableParsers[8] = function parseLookup8() {
  return { error: "GPOS Lookup 8 not supported" };
};
subtableParsers[9] = function parseLookup9() {
  return { error: "GPOS Lookup 9 not supported" };
};
function parseGposTable(data, start) {
  start = start || 0;
  var p2 = new Parser(data, start);
  var tableVersion = p2.parseVersion(1);
  check.argument(
    tableVersion === 1 || tableVersion === 1.1,
    "Unsupported GPOS table version " + tableVersion
  );
  if (tableVersion === 1) {
    return {
      version: tableVersion,
      scripts: p2.parseScriptList(),
      features: p2.parseFeatureList(),
      lookups: p2.parseLookupList(subtableParsers)
    };
  } else {
    return {
      version: tableVersion,
      scripts: p2.parseScriptList(),
      features: p2.parseFeatureList(),
      lookups: p2.parseLookupList(subtableParsers),
      variations: p2.parseFeatureVariationsList()
    };
  }
}
var gpos = { parse: parseGposTable };
var subtableParsers$1 = new Array(9);
subtableParsers$1[1] = function parseLookup12() {
  var start = this.offset + this.relativeOffset;
  var substFormat = this.parseUShort();
  if (substFormat === 1) {
    return {
      substFormat: 1,
      coverage: this.parsePointer(Parser.coverage),
      deltaGlyphId: this.parseUShort()
    };
  } else if (substFormat === 2) {
    return {
      substFormat: 2,
      coverage: this.parsePointer(Parser.coverage),
      substitute: this.parseOffset16List()
    };
  }
  check.assert(
    false,
    "0x" + start.toString(16) + ": lookup type 1 format must be 1 or 2."
  );
};
subtableParsers$1[2] = function parseLookup22() {
  var substFormat = this.parseUShort();
  check.argument(
    substFormat === 1,
    "GSUB Multiple Substitution Subtable identifier-format must be 1"
  );
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    sequences: this.parseListOfLists()
  };
};
subtableParsers$1[3] = function parseLookup32() {
  var substFormat = this.parseUShort();
  check.argument(
    substFormat === 1,
    "GSUB Alternate Substitution Subtable identifier-format must be 1"
  );
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    alternateSets: this.parseListOfLists()
  };
};
subtableParsers$1[4] = function parseLookup42() {
  var substFormat = this.parseUShort();
  check.argument(
    substFormat === 1,
    "GSUB ligature table identifier-format must be 1"
  );
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    ligatureSets: this.parseListOfLists(function() {
      return {
        ligGlyph: this.parseUShort(),
        components: this.parseUShortList(this.parseUShort() - 1)
      };
    })
  };
};
var lookupRecordDesc = {
  sequenceIndex: Parser.uShort,
  lookupListIndex: Parser.uShort
};
subtableParsers$1[5] = function parseLookup52() {
  var start = this.offset + this.relativeOffset;
  var substFormat = this.parseUShort();
  if (substFormat === 1) {
    return {
      substFormat,
      coverage: this.parsePointer(Parser.coverage),
      ruleSets: this.parseListOfLists(function() {
        var glyphCount2 = this.parseUShort();
        var substCount2 = this.parseUShort();
        return {
          input: this.parseUShortList(glyphCount2 - 1),
          lookupRecords: this.parseRecordList(
            substCount2,
            lookupRecordDesc
          )
        };
      })
    };
  } else if (substFormat === 2) {
    return {
      substFormat,
      coverage: this.parsePointer(Parser.coverage),
      classDef: this.parsePointer(Parser.classDef),
      classSets: this.parseListOfLists(function() {
        var glyphCount2 = this.parseUShort();
        var substCount2 = this.parseUShort();
        return {
          classes: this.parseUShortList(glyphCount2 - 1),
          lookupRecords: this.parseRecordList(
            substCount2,
            lookupRecordDesc
          )
        };
      })
    };
  } else if (substFormat === 3) {
    var glyphCount = this.parseUShort();
    var substCount = this.parseUShort();
    return {
      substFormat,
      coverages: this.parseList(
        glyphCount,
        Parser.pointer(Parser.coverage)
      ),
      lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)
    };
  }
  check.assert(
    false,
    "0x" + start.toString(16) + ": lookup type 5 format must be 1, 2 or 3."
  );
};
subtableParsers$1[6] = function parseLookup62() {
  var start = this.offset + this.relativeOffset;
  var substFormat = this.parseUShort();
  if (substFormat === 1) {
    return {
      substFormat: 1,
      coverage: this.parsePointer(Parser.coverage),
      chainRuleSets: this.parseListOfLists(function() {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(lookupRecordDesc)
        };
      })
    };
  } else if (substFormat === 2) {
    return {
      substFormat: 2,
      coverage: this.parsePointer(Parser.coverage),
      backtrackClassDef: this.parsePointer(Parser.classDef),
      inputClassDef: this.parsePointer(Parser.classDef),
      lookaheadClassDef: this.parsePointer(Parser.classDef),
      chainClassSet: this.parseListOfLists(function() {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(lookupRecordDesc)
        };
      })
    };
  } else if (substFormat === 3) {
    return {
      substFormat: 3,
      backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
      inputCoverage: this.parseList(Parser.pointer(Parser.coverage)),
      lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
      lookupRecords: this.parseRecordList(lookupRecordDesc)
    };
  }
  check.assert(
    false,
    "0x" + start.toString(16) + ": lookup type 6 format must be 1, 2 or 3."
  );
};
subtableParsers$1[7] = function parseLookup72() {
  var substFormat = this.parseUShort();
  check.argument(
    substFormat === 1,
    "GSUB Extension Substitution subtable identifier-format must be 1"
  );
  var extensionLookupType = this.parseUShort();
  var extensionParser = new Parser(
    this.data,
    this.offset + this.parseULong()
  );
  return {
    substFormat: 1,
    lookupType: extensionLookupType,
    extension: subtableParsers$1[extensionLookupType].call(extensionParser)
  };
};
subtableParsers$1[8] = function parseLookup82() {
  var substFormat = this.parseUShort();
  check.argument(
    substFormat === 1,
    "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"
  );
  return {
    substFormat,
    coverage: this.parsePointer(Parser.coverage),
    backtrackCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    lookaheadCoverage: this.parseList(Parser.pointer(Parser.coverage)),
    substitutes: this.parseUShortList()
  };
};
function parseGsubTable(data, start) {
  start = start || 0;
  var p2 = new Parser(data, start);
  var tableVersion = p2.parseVersion(1);
  check.argument(
    tableVersion === 1 || tableVersion === 1.1,
    "Unsupported GSUB table version."
  );
  if (tableVersion === 1) {
    return {
      version: tableVersion,
      scripts: p2.parseScriptList(),
      features: p2.parseFeatureList(),
      lookups: p2.parseLookupList(subtableParsers$1)
    };
  } else {
    return {
      version: tableVersion,
      scripts: p2.parseScriptList(),
      features: p2.parseFeatureList(),
      lookups: p2.parseLookupList(subtableParsers$1),
      variations: p2.parseFeatureVariationsList()
    };
  }
}
var gsub = { parse: parseGsubTable };
function parseHeadTable(data, start) {
  var head2 = {};
  var p2 = new parse.Parser(data, start);
  head2.version = p2.parseVersion();
  head2.fontRevision = Math.round(p2.parseFixed() * 1e3) / 1e3;
  head2.checkSumAdjustment = p2.parseULong();
  head2.magicNumber = p2.parseULong();
  check.argument(
    head2.magicNumber === 1594834165,
    "Font header has wrong magic number."
  );
  head2.flags = p2.parseUShort();
  head2.unitsPerEm = p2.parseUShort();
  head2.created = p2.parseLongDateTime();
  head2.modified = p2.parseLongDateTime();
  head2.xMin = p2.parseShort();
  head2.yMin = p2.parseShort();
  head2.xMax = p2.parseShort();
  head2.yMax = p2.parseShort();
  head2.macStyle = p2.parseUShort();
  head2.lowestRecPPEM = p2.parseUShort();
  head2.fontDirectionHint = p2.parseShort();
  head2.indexToLocFormat = p2.parseShort();
  head2.glyphDataFormat = p2.parseShort();
  return head2;
}
var head = { parse: parseHeadTable };
function parseHheaTable(data, start) {
  var hhea2 = {};
  var p2 = new parse.Parser(data, start);
  hhea2.version = p2.parseVersion();
  hhea2.ascender = p2.parseShort();
  hhea2.descender = p2.parseShort();
  hhea2.lineGap = p2.parseShort();
  hhea2.advanceWidthMax = p2.parseUShort();
  hhea2.minLeftSideBearing = p2.parseShort();
  hhea2.minRightSideBearing = p2.parseShort();
  hhea2.xMaxExtent = p2.parseShort();
  hhea2.caretSlopeRise = p2.parseShort();
  hhea2.caretSlopeRun = p2.parseShort();
  hhea2.caretOffset = p2.parseShort();
  p2.relativeOffset += 8;
  hhea2.metricDataFormat = p2.parseShort();
  hhea2.numberOfHMetrics = p2.parseUShort();
  return hhea2;
}
var hhea = { parse: parseHheaTable };
function parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs) {
  var advanceWidth;
  var leftSideBearing;
  var p2 = new parse.Parser(data, start);
  for (var i2 = 0; i2 < numGlyphs; i2 += 1) {
    if (i2 < numMetrics) {
      advanceWidth = p2.parseUShort();
      leftSideBearing = p2.parseShort();
    }
    var glyph = glyphs.get(i2);
    glyph.advanceWidth = advanceWidth;
    glyph.leftSideBearing = leftSideBearing;
  }
}
function parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs) {
  font._hmtxTableData = {};
  var advanceWidth;
  var leftSideBearing;
  var p2 = new parse.Parser(data, start);
  for (var i2 = 0; i2 < numGlyphs; i2 += 1) {
    if (i2 < numMetrics) {
      advanceWidth = p2.parseUShort();
      leftSideBearing = p2.parseShort();
    }
    font._hmtxTableData[i2] = {
      advanceWidth,
      leftSideBearing
    };
  }
}
function parseHmtxTable(font, data, start, numMetrics, numGlyphs, glyphs, opt) {
  if (opt.lowMemory) {
    parseHmtxTableOnLowMemory(font, data, start, numMetrics, numGlyphs);
  } else {
    parseHmtxTableAll(data, start, numMetrics, numGlyphs, glyphs);
  }
}
var hmtx = { parse: parseHmtxTable };
function parseWindowsKernTable(p2) {
  var pairs = {};
  p2.skip("uShort");
  var subtableVersion = p2.parseUShort();
  check.argument(subtableVersion === 0, "Unsupported kern sub-table version.");
  p2.skip("uShort", 2);
  var nPairs = p2.parseUShort();
  p2.skip("uShort", 3);
  for (var i2 = 0; i2 < nPairs; i2 += 1) {
    var leftIndex = p2.parseUShort();
    var rightIndex = p2.parseUShort();
    var value = p2.parseShort();
    pairs[leftIndex + "," + rightIndex] = value;
  }
  return pairs;
}
function parseMacKernTable(p2) {
  var pairs = {};
  p2.skip("uShort");
  var nTables = p2.parseULong();
  if (nTables > 1) {
    console.warn("Only the first kern subtable is supported.");
  }
  p2.skip("uLong");
  var coverage = p2.parseUShort();
  var subtableVersion = coverage & 255;
  p2.skip("uShort");
  if (subtableVersion === 0) {
    var nPairs = p2.parseUShort();
    p2.skip("uShort", 3);
    for (var i2 = 0; i2 < nPairs; i2 += 1) {
      var leftIndex = p2.parseUShort();
      var rightIndex = p2.parseUShort();
      var value = p2.parseShort();
      pairs[leftIndex + "," + rightIndex] = value;
    }
  }
  return pairs;
}
function parseKernTable(data, start) {
  var p2 = new parse.Parser(data, start);
  var tableVersion = p2.parseUShort();
  if (tableVersion === 0) {
    return parseWindowsKernTable(p2);
  } else if (tableVersion === 1) {
    return parseMacKernTable(p2);
  } else {
    throw new Error("Unsupported kern table version (" + tableVersion + ").");
  }
}
var kern = { parse: parseKernTable };
function parseLtagTable(data, start) {
  var p2 = new parse.Parser(data, start);
  var tableVersion = p2.parseULong();
  check.argument(tableVersion === 1, "Unsupported ltag table version.");
  p2.skip("uLong", 1);
  var numTags = p2.parseULong();
  var tags = [];
  for (var i2 = 0; i2 < numTags; i2++) {
    var tag = "";
    var offset = start + p2.parseUShort();
    var length = p2.parseUShort();
    for (var j2 = offset; j2 < offset + length; ++j2) {
      tag += String.fromCharCode(data.getInt8(j2));
    }
    tags.push(tag);
  }
  return tags;
}
var ltag = { parse: parseLtagTable };
function parseLocaTable(data, start, numGlyphs, shortVersion) {
  var p2 = new parse.Parser(data, start);
  var parseFn = shortVersion ? p2.parseUShort : p2.parseULong;
  var glyphOffsets = [];
  for (var i2 = 0; i2 < numGlyphs + 1; i2 += 1) {
    var glyphOffset = parseFn.call(p2);
    if (shortVersion) {
      glyphOffset *= 2;
    }
    glyphOffsets.push(glyphOffset);
  }
  return glyphOffsets;
}
var loca = { parse: parseLocaTable };
function parseMaxpTable(data, start) {
  var maxp2 = {};
  var p2 = new parse.Parser(data, start);
  maxp2.version = p2.parseVersion();
  maxp2.numGlyphs = p2.parseUShort();
  if (maxp2.version === 1) {
    maxp2.maxPoints = p2.parseUShort();
    maxp2.maxContours = p2.parseUShort();
    maxp2.maxCompositePoints = p2.parseUShort();
    maxp2.maxCompositeContours = p2.parseUShort();
    maxp2.maxZones = p2.parseUShort();
    maxp2.maxTwilightPoints = p2.parseUShort();
    maxp2.maxStorage = p2.parseUShort();
    maxp2.maxFunctionDefs = p2.parseUShort();
    maxp2.maxInstructionDefs = p2.parseUShort();
    maxp2.maxStackElements = p2.parseUShort();
    maxp2.maxSizeOfInstructions = p2.parseUShort();
    maxp2.maxComponentElements = p2.parseUShort();
    maxp2.maxComponentDepth = p2.parseUShort();
  }
  return maxp2;
}
var maxp = { parse: parseMaxpTable };
function parseOS2Table(data, start) {
  var os22 = {};
  var p2 = new parse.Parser(data, start);
  os22.version = p2.parseUShort();
  os22.xAvgCharWidth = p2.parseShort();
  os22.usWeightClass = p2.parseUShort();
  os22.usWidthClass = p2.parseUShort();
  os22.fsType = p2.parseUShort();
  os22.ySubscriptXSize = p2.parseShort();
  os22.ySubscriptYSize = p2.parseShort();
  os22.ySubscriptXOffset = p2.parseShort();
  os22.ySubscriptYOffset = p2.parseShort();
  os22.ySuperscriptXSize = p2.parseShort();
  os22.ySuperscriptYSize = p2.parseShort();
  os22.ySuperscriptXOffset = p2.parseShort();
  os22.ySuperscriptYOffset = p2.parseShort();
  os22.yStrikeoutSize = p2.parseShort();
  os22.yStrikeoutPosition = p2.parseShort();
  os22.sFamilyClass = p2.parseShort();
  os22.panose = [];
  for (var i2 = 0; i2 < 10; i2++) {
    os22.panose[i2] = p2.parseByte();
  }
  os22.ulUnicodeRange1 = p2.parseULong();
  os22.ulUnicodeRange2 = p2.parseULong();
  os22.ulUnicodeRange3 = p2.parseULong();
  os22.ulUnicodeRange4 = p2.parseULong();
  os22.achVendID = String.fromCharCode(
    p2.parseByte(),
    p2.parseByte(),
    p2.parseByte(),
    p2.parseByte()
  );
  os22.fsSelection = p2.parseUShort();
  os22.usFirstCharIndex = p2.parseUShort();
  os22.usLastCharIndex = p2.parseUShort();
  os22.sTypoAscender = p2.parseShort();
  os22.sTypoDescender = p2.parseShort();
  os22.sTypoLineGap = p2.parseShort();
  os22.usWinAscent = p2.parseUShort();
  os22.usWinDescent = p2.parseUShort();
  if (os22.version >= 1) {
    os22.ulCodePageRange1 = p2.parseULong();
    os22.ulCodePageRange2 = p2.parseULong();
  }
  if (os22.version >= 2) {
    os22.sxHeight = p2.parseShort();
    os22.sCapHeight = p2.parseShort();
    os22.usDefaultChar = p2.parseUShort();
    os22.usBreakChar = p2.parseUShort();
    os22.usMaxContent = p2.parseUShort();
  }
  return os22;
}
var os2 = { parse: parseOS2Table };
function parsePostTable(data, start) {
  var post2 = {};
  var p2 = new parse.Parser(data, start);
  post2.version = p2.parseVersion();
  post2.italicAngle = p2.parseFixed();
  post2.underlinePosition = p2.parseShort();
  post2.underlineThickness = p2.parseShort();
  post2.isFixedPitch = p2.parseULong();
  post2.minMemType42 = p2.parseULong();
  post2.maxMemType42 = p2.parseULong();
  post2.minMemType1 = p2.parseULong();
  post2.maxMemType1 = p2.parseULong();
  post2.names = [];
  switch (post2.version) {
    case 1:
      break;
    case 2:
      post2.numberOfGlyphs = p2.parseUShort();
      post2.glyphNameIndex = new Array(post2.numberOfGlyphs);
      for (var i2 = 0; i2 < post2.numberOfGlyphs; i2++) {
        post2.glyphNameIndex[i2] = p2.parseUShort();
      }
      break;
    case 2.5:
      post2.numberOfGlyphs = p2.parseUShort();
      post2.offset = new Array(post2.numberOfGlyphs);
      for (var i$1 = 0; i$1 < post2.numberOfGlyphs; i$1++) {
        post2.offset[i$1] = p2.parseChar();
      }
      break;
  }
  return post2;
}
var post = { parse: parsePostTable };
var decode = {};
decode.UTF8 = function(data, offset, numBytes) {
  var codePoints = [];
  var numChars = numBytes;
  for (var j2 = 0; j2 < numChars; j2++, offset += 1) {
    codePoints[j2] = data.getUint8(offset);
  }
  return String.fromCharCode.apply(null, codePoints);
};
decode.UTF16 = function(data, offset, numBytes) {
  var codePoints = [];
  var numChars = numBytes / 2;
  for (var j2 = 0; j2 < numChars; j2++, offset += 2) {
    codePoints[j2] = data.getUint16(offset);
  }
  return String.fromCharCode.apply(null, codePoints);
};
var eightBitMacEncodings = {
  "x-mac-croatian": (
    // Python: 'mac_croatian'
    "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7"
  ),
  "x-mac-cyrillic": (
    // Python: 'mac_cyrillic'
    "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E"
  ),
  "x-mac-gaelic": (
    // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
    "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83"
  ),
  "x-mac-greek": (
    // Python: 'mac_greek'
    "\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD"
  ),
  "x-mac-icelandic": (
    // Python: 'mac_iceland'
    "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
  ),
  "x-mac-inuit": (
    // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
    "\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142"
  ),
  "x-mac-ce": (
    // Python: 'mac_latin2'
    "\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7"
  ),
  macintosh: (
    // Python: 'mac_roman'
    "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
  ),
  "x-mac-romanian": (
    // Python: 'mac_romanian'
    "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
  ),
  "x-mac-turkish": (
    // Python: 'mac_turkish'
    "\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"
  )
};
decode.MACSTRING = function(dataView, offset, dataLength, encoding) {
  var table = eightBitMacEncodings[encoding];
  if (table === void 0) {
    return void 0;
  }
  var result = "";
  for (var i2 = 0; i2 < dataLength; i2++) {
    var c3 = dataView.getUint8(offset + i2);
    if (c3 <= 127) {
      result += String.fromCharCode(c3);
    } else {
      result += table[c3 & 127];
    }
  }
  return result;
};
function parseMetaTable(data, start) {
  var p2 = new parse.Parser(data, start);
  var tableVersion = p2.parseULong();
  check.argument(tableVersion === 1, "Unsupported META table version.");
  p2.parseULong();
  p2.parseULong();
  var numDataMaps = p2.parseULong();
  var tags = {};
  for (var i2 = 0; i2 < numDataMaps; i2++) {
    var tag = p2.parseTag();
    var dataOffset = p2.parseULong();
    var dataLength = p2.parseULong();
    var text = decode.UTF8(data, start + dataOffset, dataLength);
    tags[tag] = text;
  }
  return tags;
}
var meta = { parse: parseMetaTable };
function parseOpenTypeTableEntries(data, numTables) {
  var tableEntries = [];
  var p2 = 12;
  for (var i2 = 0; i2 < numTables; i2 += 1) {
    var tag = parse.getTag(data, p2);
    var checksum = parse.getULong(data, p2 + 4);
    var offset = parse.getULong(data, p2 + 8);
    var length = parse.getULong(data, p2 + 12);
    tableEntries.push({
      tag,
      checksum,
      offset,
      length,
      compression: false
    });
    p2 += 16;
  }
  return tableEntries;
}
function parseWOFFTableEntries(data, numTables) {
  var tableEntries = [];
  var p2 = 44;
  for (var i2 = 0; i2 < numTables; i2 += 1) {
    var tag = parse.getTag(data, p2);
    var offset = parse.getULong(data, p2 + 4);
    var compLength = parse.getULong(data, p2 + 8);
    var origLength = parse.getULong(data, p2 + 12);
    var compression = void 0;
    if (compLength < origLength) {
      compression = "WOFF";
    } else {
      compression = false;
    }
    tableEntries.push({
      tag,
      offset,
      compression,
      compressedLength: compLength,
      length: origLength
    });
    p2 += 20;
  }
  return tableEntries;
}
function uncompressTable(data, tableEntry) {
  if (tableEntry.compression === "WOFF") {
    var inBuffer = new Uint8Array(
      data.buffer,
      tableEntry.offset + 2,
      tableEntry.compressedLength - 2
    );
    var outBuffer = new Uint8Array(tableEntry.length);
    inflateSync(inBuffer, outBuffer);
    if (outBuffer.byteLength !== tableEntry.length) {
      throw new Error(
        "Decompression error: " + tableEntry.tag + " decompressed length doesn't match recorded length"
      );
    }
    var view = new DataView(outBuffer.buffer, 0);
    return { data: view, offset: 0 };
  } else {
    return { data, offset: tableEntry.offset };
  }
}
function parseBuffer(buffer, opt) {
  opt = opt === void 0 || opt === null ? {} : opt;
  var indexToLocFormat;
  var font = new Font({ empty: true });
  var data = new DataView(buffer, 0);
  var numTables;
  var tableEntries = [];
  var signature = parse.getTag(data, 0);
  if (signature === String.fromCharCode(0, 1, 0, 0) || signature === "true" || signature === "typ1") {
    font.outlinesFormat = "truetype";
    numTables = parse.getUShort(data, 4);
    tableEntries = parseOpenTypeTableEntries(data, numTables);
  } else if (signature === "OTTO") {
    font.outlinesFormat = "cff";
    numTables = parse.getUShort(data, 4);
    tableEntries = parseOpenTypeTableEntries(data, numTables);
  } else if (signature === "wOFF") {
    var flavor = parse.getTag(data, 4);
    if (flavor === String.fromCharCode(0, 1, 0, 0)) {
      font.outlinesFormat = "truetype";
    } else if (flavor === "OTTO") {
      font.outlinesFormat = "cff";
    } else {
      throw new Error("Unsupported OpenType flavor " + signature);
    }
    numTables = parse.getUShort(data, 12);
    tableEntries = parseWOFFTableEntries(data, numTables);
  } else {
    throw new Error("Unsupported OpenType signature " + signature);
  }
  var cffTableEntry;
  var fvarTableEntry;
  var glyfTableEntry;
  var gdefTableEntry;
  var gposTableEntry;
  var gsubTableEntry;
  var hmtxTableEntry;
  var kernTableEntry;
  var locaTableEntry;
  var metaTableEntry;
  var p2;
  for (var i2 = 0; i2 < numTables; i2 += 1) {
    var tableEntry = tableEntries[i2];
    var table = void 0;
    switch (tableEntry.tag) {
      case "cmap":
        table = uncompressTable(data, tableEntry);
        font.tables.cmap = cmap.parse(table.data, table.offset);
        font.encoding = new CmapEncoding(font.tables.cmap);
        break;
      case "cvt ":
        table = uncompressTable(data, tableEntry);
        p2 = new parse.Parser(table.data, table.offset);
        font.tables.cvt = p2.parseShortList(tableEntry.length / 2);
        break;
      case "fvar":
        fvarTableEntry = tableEntry;
        break;
      case "fpgm":
        table = uncompressTable(data, tableEntry);
        p2 = new parse.Parser(table.data, table.offset);
        font.tables.fpgm = p2.parseByteList(tableEntry.length);
        break;
      case "head":
        table = uncompressTable(data, tableEntry);
        font.tables.head = head.parse(table.data, table.offset);
        font.unitsPerEm = font.tables.head.unitsPerEm;
        indexToLocFormat = font.tables.head.indexToLocFormat;
        break;
      case "hhea":
        table = uncompressTable(data, tableEntry);
        font.tables.hhea = hhea.parse(table.data, table.offset);
        font.ascender = font.tables.hhea.ascender;
        font.descender = font.tables.hhea.descender;
        font.numberOfHMetrics = font.tables.hhea.numberOfHMetrics;
        break;
      case "hmtx":
        hmtxTableEntry = tableEntry;
        break;
      case "ltag":
        table = uncompressTable(data, tableEntry);
        ltagTable = ltag.parse(table.data, table.offset);
        break;
      case "maxp":
        table = uncompressTable(data, tableEntry);
        font.tables.maxp = maxp.parse(table.data, table.offset);
        font.numGlyphs = font.tables.maxp.numGlyphs;
        break;
      case "OS/2":
        table = uncompressTable(data, tableEntry);
        font.tables.os2 = os2.parse(table.data, table.offset);
        break;
      case "post":
        table = uncompressTable(data, tableEntry);
        font.tables.post = post.parse(table.data, table.offset);
        break;
      case "prep":
        table = uncompressTable(data, tableEntry);
        p2 = new parse.Parser(table.data, table.offset);
        font.tables.prep = p2.parseByteList(tableEntry.length);
        break;
      case "glyf":
        glyfTableEntry = tableEntry;
        break;
      case "loca":
        locaTableEntry = tableEntry;
        break;
      case "CFF ":
        cffTableEntry = tableEntry;
        break;
      case "kern":
        kernTableEntry = tableEntry;
        break;
      case "GDEF":
        gdefTableEntry = tableEntry;
        break;
      case "GPOS":
        gposTableEntry = tableEntry;
        break;
      case "GSUB":
        gsubTableEntry = tableEntry;
        break;
      case "meta":
        metaTableEntry = tableEntry;
        break;
    }
  }
  if (glyfTableEntry && locaTableEntry) {
    var shortVersion = indexToLocFormat === 0;
    var locaTable = uncompressTable(data, locaTableEntry);
    var locaOffsets = loca.parse(
      locaTable.data,
      locaTable.offset,
      font.numGlyphs,
      shortVersion
    );
    var glyfTable = uncompressTable(data, glyfTableEntry);
    font.glyphs = glyf.parse(
      glyfTable.data,
      glyfTable.offset,
      locaOffsets,
      font,
      opt
    );
  } else if (cffTableEntry) {
    var cffTable = uncompressTable(data, cffTableEntry);
    cff.parse(cffTable.data, cffTable.offset, font, opt);
  } else {
    throw new Error("Font doesn't contain TrueType or CFF outlines.");
  }
  var hmtxTable = uncompressTable(data, hmtxTableEntry);
  hmtx.parse(
    font,
    hmtxTable.data,
    hmtxTable.offset,
    font.numberOfHMetrics,
    font.numGlyphs,
    font.glyphs,
    opt
  );
  addGlyphNames(font, opt);
  if (kernTableEntry) {
    var kernTable = uncompressTable(data, kernTableEntry);
    font.kerningPairs = kern.parse(kernTable.data, kernTable.offset);
  } else {
    font.kerningPairs = {};
  }
  if (gdefTableEntry) {
    var gdefTable = uncompressTable(data, gdefTableEntry);
    font.tables.gdef = gdef.parse(gdefTable.data, gdefTable.offset);
  }
  if (gposTableEntry) {
    var gposTable = uncompressTable(data, gposTableEntry);
    font.tables.gpos = gpos.parse(gposTable.data, gposTable.offset);
    font.position.init();
  }
  if (gsubTableEntry) {
    var gsubTable = uncompressTable(data, gsubTableEntry);
    font.tables.gsub = gsub.parse(gsubTable.data, gsubTable.offset);
  }
  if (fvarTableEntry) {
    var fvarTable = uncompressTable(data, fvarTableEntry);
    font.tables.fvar = fvar.parse(
      fvarTable.data,
      fvarTable.offset,
      font.names
    );
  }
  if (metaTableEntry) {
    var metaTable = uncompressTable(data, metaTableEntry);
    font.tables.meta = meta.parse(metaTable.data, metaTable.offset);
    font.metas = font.tables.meta;
  }
  return font;
}
function load() {
}
function loadSync() {
}
var opentype = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Font,
  Glyph,
  Path,
  _parse: parse,
  parse: parseBuffer,
  load,
  loadSync
});
var opentype_module_default = opentype;
var require2 = createRequire("/");
var Worker;
try {
  Worker = require2("worker_threads").Worker;
} catch (e2) {
}
var u82 = Uint8Array;
var u162 = Uint16Array;
var u322 = Uint32Array;
var fleb2 = new u82([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb2 = new u82([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim2 = new u82([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb2 = function(eb, start) {
  var b2 = new u162(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u322(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a2 = freb2(fleb2, 2);
var fl2 = _a2[0];
var revfl2 = _a2[1];
fl2[28] = 258, revfl2[258] = 28;
var _b2 = freb2(fdeb2, 0);
var fd2 = _b2[0];
var rev2 = new u162(32768);
for (i2 = 0; i2 < 32768; ++i2) {
  x3 = (i2 & 43690) >>> 1 | (i2 & 21845) << 1;
  x3 = (x3 & 52428) >>> 2 | (x3 & 13107) << 2;
  x3 = (x3 & 61680) >>> 4 | (x3 & 3855) << 4;
  rev2[i2] = ((x3 & 65280) >>> 8 | (x3 & 255) << 8) >>> 1;
}
var x3;
var i2;
var hMap2 = (function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l3 = new u162(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l3[cd[i2] - 1];
  }
  var le2 = new u162(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le2[i2] = le2[i2 - 1] + l3[i2 - 1] << 1;
  }
  var co;
  {
    co = new u162(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v4 = le2[cd[i2] - 1]++ << r_1;
        for (var m3 = v4 | (1 << r_1) - 1; v4 <= m3; ++v4) {
          co[rev2[v4] >>> rvb] = sv;
        }
      }
    }
  }
  return co;
});
var flt2 = new u82(288);
for (i2 = 0; i2 < 144; ++i2)
  flt2[i2] = 8;
var i2;
for (i2 = 144; i2 < 256; ++i2)
  flt2[i2] = 9;
var i2;
for (i2 = 256; i2 < 280; ++i2)
  flt2[i2] = 7;
var i2;
for (i2 = 280; i2 < 288; ++i2)
  flt2[i2] = 8;
var i2;
var fdt2 = new u82(32);
for (i2 = 0; i2 < 32; ++i2)
  fdt2[i2] = 5;
var i2;
var flrm2 = /* @__PURE__ */ hMap2(flt2, 9);
var fdrm2 = /* @__PURE__ */ hMap2(fdt2, 5);
var max2 = function(a2) {
  var m3 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m3)
      m3 = a2[i2];
  }
  return m3;
};
var bits2 = function(d3, p2, m3) {
  var o2 = p2 / 8 | 0;
  return (d3[o2] | d3[o2 + 1] << 8) >> (p2 & 7) & m3;
};
var bits162 = function(d3, p2) {
  var o2 = p2 / 8 | 0;
  return (d3[o2] | d3[o2 + 1] << 8 | d3[o2 + 2] << 16) >> (p2 & 7);
};
var shft2 = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc2 = function(v4, s2, e2) {
  if (e2 == null || e2 > v4.length)
    e2 = v4.length;
  var n2 = new (v4.BYTES_PER_ELEMENT == 2 ? u162 : v4.BYTES_PER_ELEMENT == 4 ? u322 : u82)(e2 - s2);
  n2.set(v4.subarray(s2, e2));
  return n2;
};
var ec2 = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err2 = function(ind, msg, nt) {
  var e2 = new Error(msg || ec2[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err2);
  if (!nt)
    throw e2;
  return e2;
};
var inflt2 = function(dat, buf, st2) {
  var sl2 = dat.length;
  if (!sl2 || st2 && st2.f && !st2.l)
    return buf || new u82(0);
  var noBuf = !buf || st2;
  var noSt = !st2 || st2.i;
  if (!st2)
    st2 = {};
  if (!buf)
    buf = new u82(sl2 * 3);
  var cbuf = function(l4) {
    var bl2 = buf.length;
    if (l4 > bl2) {
      var nbuf = new u82(Math.max(bl2 * 2, l4));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st2.f || 0, pos = st2.p || 0, bt2 = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n;
  var tbts = sl2 * 8;
  do {
    if (!lm) {
      final = bits2(dat, pos, 1);
      var type = bits2(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s2 = shft2(pos) + 4, l3 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l3;
        if (t2 > sl2) {
          if (noSt)
            err2(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + l3);
        buf.set(dat.subarray(s2, t2), bt2);
        st2.b = bt2 += l3, st2.p = pos = t2 * 8, st2.f = final;
        continue;
      } else if (type == 1)
        lm = flrm2, dm = fdrm2, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits2(dat, pos, 31) + 257, hcLen = bits2(dat, pos + 10, 15) + 4;
        var tl2 = hLit + bits2(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u82(tl2);
        var clt = new u82(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim2[i2]] = bits2(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max2(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap2(clt, clb);
        for (var i2 = 0; i2 < tl2; ) {
          var r2 = clm[bits2(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c3 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits2(dat, pos, 3), pos += 2, c3 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits2(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits2(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c3;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max2(lt);
        dbt = max2(dt);
        lm = hMap2(lt, lbt);
        dm = hMap2(dt, dbt);
      } else
        err2(1);
      if (pos > tbts) {
        if (noSt)
          err2(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt2 + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c3 = lm[bits162(dat, pos) & lms], sym = c3 >>> 4;
      pos += c3 & 15;
      if (pos > tbts) {
        if (noSt)
          err2(0);
        break;
      }
      if (!c3)
        err2(2);
      if (sym < 256)
        buf[bt2++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb2[i2];
          add = bits2(dat, pos, (1 << b2) - 1) + fl2[i2];
          pos += b2;
        }
        var d3 = dm[bits162(dat, pos) & dms], dsym = d3 >>> 4;
        if (!d3)
          err2(3);
        pos += d3 & 15;
        var dt = fd2[dsym];
        if (dsym > 3) {
          var b2 = fdeb2[dsym];
          dt += bits162(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err2(0);
          break;
        }
        if (noBuf)
          cbuf(bt2 + 131072);
        var end = bt2 + add;
        for (; bt2 < end; bt2 += 4) {
          buf[bt2] = buf[bt2 - dt];
          buf[bt2 + 1] = buf[bt2 + 1 - dt];
          buf[bt2 + 2] = buf[bt2 + 2 - dt];
          buf[bt2 + 3] = buf[bt2 + 3 - dt];
        }
        bt2 = end;
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt2, st2.f = final;
    if (lm)
      final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt;
  } while (!final);
  return bt2 == buf.length ? buf : slc2(buf, 0, bt2);
};
var et2 = /* @__PURE__ */ new u82(0);
function inflateSync2(data, out) {
  return inflt2(data, out);
}
var td2 = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds2 = 0;
try {
  td2.decode(et2, { stream: true });
  tds2 = 1;
} catch (e2) {
}

// node_modules/satori/dist/index.js
var import_harfbuzzjs = __toESM(require_harfbuzzjs(), 1);
var ZI = Object.create;
var Jr = Object.defineProperty;
var jI = Object.getOwnPropertyDescriptor;
var $I = Object.getOwnPropertyNames;
var Al = Object.getPrototypeOf;
var el = Object.prototype.hasOwnProperty;
var st = (A2, e2) => () => (A2 && (e2 = A2(A2 = 0)), e2);
var _ = (A2, e2) => () => (e2 || A2((e2 = { exports: {} }).exports, e2), e2.exports);
var Kr = (A2, e2) => {
  for (var t2 in e2) Jr(A2, t2, { get: e2[t2], enumerable: true });
};
var bs = (A2, e2, t2, r2) => {
  if (e2 && typeof e2 == "object" || typeof e2 == "function") for (let n2 of $I(e2)) !el.call(A2, n2) && n2 !== t2 && Jr(A2, n2, { get: () => e2[n2], enumerable: !(r2 = jI(e2, n2)) || r2.enumerable });
  return A2;
};
var tl = (A2, e2, t2) => (t2 = A2 != null ? ZI(Al(A2)) : {}, bs(!A2 || !A2.__esModule ? Jr(t2, "default", { value: A2, enumerable: true }) : t2, A2));
var Wr = (A2) => bs(Jr({}, "__esModule", { value: true }), A2);
var Te;
var Ys;
var qs;
var Wt;
var qn;
var Pe;
var Dt;
var dl;
var Xr;
var Xn;
var bt;
var St;
var Vn;
var Xs;
var zn;
var Zn;
var be;
var jn;
var pl;
var Vs;
var Vr = st(() => {
  Te = (function(A2) {
    return A2[A2.Auto = 0] = "Auto", A2[A2.FlexStart = 1] = "FlexStart", A2[A2.Center = 2] = "Center", A2[A2.FlexEnd = 3] = "FlexEnd", A2[A2.Stretch = 4] = "Stretch", A2[A2.Baseline = 5] = "Baseline", A2[A2.SpaceBetween = 6] = "SpaceBetween", A2[A2.SpaceAround = 7] = "SpaceAround", A2[A2.SpaceEvenly = 8] = "SpaceEvenly", A2;
  })({}), Ys = (function(A2) {
    return A2[A2.BorderBox = 0] = "BorderBox", A2[A2.ContentBox = 1] = "ContentBox", A2;
  })({}), qs = (function(A2) {
    return A2[A2.Width = 0] = "Width", A2[A2.Height = 1] = "Height", A2;
  })({}), Wt = (function(A2) {
    return A2[A2.Inherit = 0] = "Inherit", A2[A2.LTR = 1] = "LTR", A2[A2.RTL = 2] = "RTL", A2;
  })({}), qn = (function(A2) {
    return A2[A2.Flex = 0] = "Flex", A2[A2.None = 1] = "None", A2[A2.Contents = 2] = "Contents", A2;
  })({}), Pe = (function(A2) {
    return A2[A2.Left = 0] = "Left", A2[A2.Top = 1] = "Top", A2[A2.Right = 2] = "Right", A2[A2.Bottom = 3] = "Bottom", A2[A2.Start = 4] = "Start", A2[A2.End = 5] = "End", A2[A2.Horizontal = 6] = "Horizontal", A2[A2.Vertical = 7] = "Vertical", A2[A2.All = 8] = "All", A2;
  })({}), Dt = (function(A2) {
    return A2[A2.None = 0] = "None", A2[A2.StretchFlexBasis = 1] = "StretchFlexBasis", A2[A2.AbsolutePositionWithoutInsetsExcludesPadding = 2] = "AbsolutePositionWithoutInsetsExcludesPadding", A2[A2.AbsolutePercentAgainstInnerSize = 4] = "AbsolutePercentAgainstInnerSize", A2[A2.All = 2147483647] = "All", A2[A2.Classic = 2147483646] = "Classic", A2;
  })({}), dl = (function(A2) {
    return A2[A2.WebFlexBasis = 0] = "WebFlexBasis", A2;
  })({}), Xr = (function(A2) {
    return A2[A2.Column = 0] = "Column", A2[A2.ColumnReverse = 1] = "ColumnReverse", A2[A2.Row = 2] = "Row", A2[A2.RowReverse = 3] = "RowReverse", A2;
  })({}), Xn = (function(A2) {
    return A2[A2.Column = 0] = "Column", A2[A2.Row = 1] = "Row", A2[A2.All = 2] = "All", A2;
  })({}), bt = (function(A2) {
    return A2[A2.FlexStart = 0] = "FlexStart", A2[A2.Center = 1] = "Center", A2[A2.FlexEnd = 2] = "FlexEnd", A2[A2.SpaceBetween = 3] = "SpaceBetween", A2[A2.SpaceAround = 4] = "SpaceAround", A2[A2.SpaceEvenly = 5] = "SpaceEvenly", A2;
  })({}), St = (function(A2) {
    return A2[A2.Error = 0] = "Error", A2[A2.Warn = 1] = "Warn", A2[A2.Info = 2] = "Info", A2[A2.Debug = 3] = "Debug", A2[A2.Verbose = 4] = "Verbose", A2[A2.Fatal = 5] = "Fatal", A2;
  })({}), Vn = (function(A2) {
    return A2[A2.Undefined = 0] = "Undefined", A2[A2.Exactly = 1] = "Exactly", A2[A2.AtMost = 2] = "AtMost", A2;
  })({}), Xs = (function(A2) {
    return A2[A2.Default = 0] = "Default", A2[A2.Text = 1] = "Text", A2;
  })({}), zn = (function(A2) {
    return A2[A2.Visible = 0] = "Visible", A2[A2.Hidden = 1] = "Hidden", A2[A2.Scroll = 2] = "Scroll", A2;
  })({}), Zn = (function(A2) {
    return A2[A2.Static = 0] = "Static", A2[A2.Relative = 1] = "Relative", A2[A2.Absolute = 2] = "Absolute", A2;
  })({}), be = (function(A2) {
    return A2[A2.Undefined = 0] = "Undefined", A2[A2.Point = 1] = "Point", A2[A2.Percent = 2] = "Percent", A2[A2.Auto = 3] = "Auto", A2;
  })({}), jn = (function(A2) {
    return A2[A2.NoWrap = 0] = "NoWrap", A2[A2.Wrap = 1] = "Wrap", A2[A2.WrapReverse = 2] = "WrapReverse", A2;
  })({}), pl = { ALIGN_AUTO: Te.Auto, ALIGN_FLEX_START: Te.FlexStart, ALIGN_CENTER: Te.Center, ALIGN_FLEX_END: Te.FlexEnd, ALIGN_STRETCH: Te.Stretch, ALIGN_BASELINE: Te.Baseline, ALIGN_SPACE_BETWEEN: Te.SpaceBetween, ALIGN_SPACE_AROUND: Te.SpaceAround, ALIGN_SPACE_EVENLY: Te.SpaceEvenly, BOX_SIZING_BORDER_BOX: Ys.BorderBox, BOX_SIZING_CONTENT_BOX: Ys.ContentBox, DIMENSION_WIDTH: qs.Width, DIMENSION_HEIGHT: qs.Height, DIRECTION_INHERIT: Wt.Inherit, DIRECTION_LTR: Wt.LTR, DIRECTION_RTL: Wt.RTL, DISPLAY_FLEX: qn.Flex, DISPLAY_NONE: qn.None, DISPLAY_CONTENTS: qn.Contents, EDGE_LEFT: Pe.Left, EDGE_TOP: Pe.Top, EDGE_RIGHT: Pe.Right, EDGE_BOTTOM: Pe.Bottom, EDGE_START: Pe.Start, EDGE_END: Pe.End, EDGE_HORIZONTAL: Pe.Horizontal, EDGE_VERTICAL: Pe.Vertical, EDGE_ALL: Pe.All, ERRATA_NONE: Dt.None, ERRATA_STRETCH_FLEX_BASIS: Dt.StretchFlexBasis, ERRATA_ABSOLUTE_POSITION_WITHOUT_INSETS_EXCLUDES_PADDING: Dt.AbsolutePositionWithoutInsetsExcludesPadding, ERRATA_ABSOLUTE_PERCENT_AGAINST_INNER_SIZE: Dt.AbsolutePercentAgainstInnerSize, ERRATA_ALL: Dt.All, ERRATA_CLASSIC: Dt.Classic, EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: dl.WebFlexBasis, FLEX_DIRECTION_COLUMN: Xr.Column, FLEX_DIRECTION_COLUMN_REVERSE: Xr.ColumnReverse, FLEX_DIRECTION_ROW: Xr.Row, FLEX_DIRECTION_ROW_REVERSE: Xr.RowReverse, GUTTER_COLUMN: Xn.Column, GUTTER_ROW: Xn.Row, GUTTER_ALL: Xn.All, JUSTIFY_FLEX_START: bt.FlexStart, JUSTIFY_CENTER: bt.Center, JUSTIFY_FLEX_END: bt.FlexEnd, JUSTIFY_SPACE_BETWEEN: bt.SpaceBetween, JUSTIFY_SPACE_AROUND: bt.SpaceAround, JUSTIFY_SPACE_EVENLY: bt.SpaceEvenly, LOG_LEVEL_ERROR: St.Error, LOG_LEVEL_WARN: St.Warn, LOG_LEVEL_INFO: St.Info, LOG_LEVEL_DEBUG: St.Debug, LOG_LEVEL_VERBOSE: St.Verbose, LOG_LEVEL_FATAL: St.Fatal, MEASURE_MODE_UNDEFINED: Vn.Undefined, MEASURE_MODE_EXACTLY: Vn.Exactly, MEASURE_MODE_AT_MOST: Vn.AtMost, NODE_TYPE_DEFAULT: Xs.Default, NODE_TYPE_TEXT: Xs.Text, OVERFLOW_VISIBLE: zn.Visible, OVERFLOW_HIDDEN: zn.Hidden, OVERFLOW_SCROLL: zn.Scroll, POSITION_TYPE_STATIC: Zn.Static, POSITION_TYPE_RELATIVE: Zn.Relative, POSITION_TYPE_ABSOLUTE: Zn.Absolute, UNIT_UNDEFINED: be.Undefined, UNIT_POINT: be.Point, UNIT_PERCENT: be.Percent, UNIT_AUTO: be.Auto, WRAP_NO_WRAP: jn.NoWrap, WRAP_WRAP: jn.Wrap, WRAP_WRAP_REVERSE: jn.WrapReverse }, Vs = pl;
});
function $n(A2) {
  function e2(n2, i2, o2) {
    let s2 = n2[i2];
    n2[i2] = function() {
      for (var a2 = arguments.length, g3 = new Array(a2), u4 = 0; u4 < a2; u4++) g3[u4] = arguments[u4];
      return o2.call(this, s2, ...g3);
    };
  }
  for (let n2 of ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding", "setGap"]) {
    let i2 = { [be.Point]: A2.Node.prototype[n2], [be.Percent]: A2.Node.prototype[`${n2}Percent`], [be.Auto]: A2.Node.prototype[`${n2}Auto`] };
    e2(A2.Node.prototype, n2, function(o2) {
      for (var s2 = arguments.length, a2 = new Array(s2 > 1 ? s2 - 1 : 0), g3 = 1; g3 < s2; g3++) a2[g3 - 1] = arguments[g3];
      let u4 = a2.pop(), I2, B2;
      if (u4 === "auto") I2 = be.Auto, B2 = void 0;
      else if (typeof u4 == "object") I2 = u4.unit, B2 = u4.valueOf();
      else if (I2 = typeof u4 == "string" && u4.endsWith("%") ? be.Percent : be.Point, B2 = parseFloat(u4), u4 !== void 0 && !Number.isNaN(u4) && Number.isNaN(B2)) throw new Error(`Invalid value ${u4} for ${n2}`);
      if (!i2[I2]) throw new Error(`Failed to execute "${n2}": Unsupported unit '${u4}'`);
      return B2 !== void 0 ? i2[I2].call(this, ...a2, B2) : i2[I2].call(this, ...a2);
    });
  }
  function t2(n2) {
    return A2.MeasureCallback.implement({ measure: function() {
      let { width: i2, height: o2 } = n2(...arguments);
      return { width: i2 ?? NaN, height: o2 ?? NaN };
    } });
  }
  e2(A2.Node.prototype, "setMeasureFunc", function(n2, i2) {
    return i2 ? n2.call(this, t2(i2)) : this.unsetMeasureFunc();
  });
  function r2(n2) {
    return A2.DirtiedCallback.implement({ dirtied: n2 });
  }
  return e2(A2.Node.prototype, "setDirtiedFunc", function(n2, i2) {
    n2.call(this, r2(i2));
  }), e2(A2.Config.prototype, "free", function() {
    A2.Config.destroy(this);
  }), e2(A2.Node, "create", (n2, i2) => i2 ? A2.Node.createWithConfig(i2) : A2.Node.createDefault()), e2(A2.Node.prototype, "free", function() {
    A2.Node.destroy(this);
  }), e2(A2.Node.prototype, "freeRecursive", function() {
    for (let n2 = 0, i2 = this.getChildCount(); n2 < i2; ++n2) this.getChild(0).freeRecursive();
    this.free();
  }), e2(A2.Node.prototype, "calculateLayout", function(n2) {
    let i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : NaN, o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN, s2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Wt.LTR;
    return n2.call(this, i2, o2, s2);
  }), { Config: A2.Config, Node: A2.Node, ...Vs };
}
var zs = st(() => {
  Vr();
  Vr();
});
var Zs = {};
Kr(Zs, { default: () => ml });
var hl;
var ml;
var js = st(() => {
  hl = (() => {
    var A2 = import.meta.url;
    return function(e2) {
      e2 = e2 || {};
      var t2;
      t2 || (t2 = typeof e2 < "u" ? e2 : {});
      var r2, n2;
      t2.ready = new Promise(function(l3, c3) {
        r2 = l3, n2 = c3;
      });
      var i2 = Object.assign({}, t2), o2 = "";
      typeof document < "u" && document.currentScript && (o2 = document.currentScript.src), A2 && (o2 = A2), o2.indexOf("blob:") !== 0 ? o2 = o2.substr(0, o2.replace(/[?#].*/, "").lastIndexOf("/") + 1) : o2 = "";
      var s2 = t2.print || console.log.bind(console), a2 = t2.printErr || console.warn.bind(console);
      Object.assign(t2, i2), i2 = null;
      var g3;
      t2.wasmBinary && (g3 = t2.wasmBinary);
      t2.noExitRuntime || true;
      typeof WebAssembly != "object" && hA("no native wasm support detected");
      var I2, B2 = false;
      function f3(l3, c3, Q2) {
        Q2 = c3 + Q2;
        for (var d3 = ""; !(c3 >= Q2); ) {
          var m3 = l3[c3++];
          if (!m3) break;
          if (m3 & 128) {
            var S3 = l3[c3++] & 63;
            if ((m3 & 224) == 192) d3 += String.fromCharCode((m3 & 31) << 6 | S3);
            else {
              var N2 = l3[c3++] & 63;
              m3 = (m3 & 240) == 224 ? (m3 & 15) << 12 | S3 << 6 | N2 : (m3 & 7) << 18 | S3 << 12 | N2 << 6 | l3[c3++] & 63, 65536 > m3 ? d3 += String.fromCharCode(m3) : (m3 -= 65536, d3 += String.fromCharCode(55296 | m3 >> 10, 56320 | m3 & 1023));
            }
          } else d3 += String.fromCharCode(m3);
        }
        return d3;
      }
      var E2, C2, p2, h3, k2, b2, x3, w3, y2;
      function R2() {
        var l3 = I2.buffer;
        E2 = l3, t2.HEAP8 = C2 = new Int8Array(l3), t2.HEAP16 = h3 = new Int16Array(l3), t2.HEAP32 = b2 = new Int32Array(l3), t2.HEAPU8 = p2 = new Uint8Array(l3), t2.HEAPU16 = k2 = new Uint16Array(l3), t2.HEAPU32 = x3 = new Uint32Array(l3), t2.HEAPF32 = w3 = new Float32Array(l3), t2.HEAPF64 = y2 = new Float64Array(l3);
      }
      var F, J2 = [], K3 = [], $2 = [];
      function lA() {
        var l3 = t2.preRun.shift();
        J2.unshift(l3);
      }
      var iA = 0, UA = null;
      function hA(l3) {
        throw t2.onAbort && t2.onAbort(l3), l3 = "Aborted(" + l3 + ")", a2(l3), B2 = true, l3 = new WebAssembly.RuntimeError(l3 + ". Build with -sASSERTIONS for more info."), n2(l3), l3;
      }
      function JA(l3) {
        return l3.startsWith("data:application/octet-stream;base64,");
      }
      var CA;
      if (CA = "data:application/octet-stream;base64,AGFzbQEAAAABugM3YAF/AGACf38AYAF/AX9gA39/fwBgAn98AGACf38Bf2ADf39/AX9gBH9/f30BfWADf398AGAAAGAEf39/fwBgAX8BfGACf38BfGAFf39/f38Bf2AAAX9gA39/fwF9YAZ/f31/fX8AYAV/f39/fwBgAn9/AX1gBX9/f319AX1gAX8BfWADf35/AX5gB39/f39/f38AYAZ/f39/f38AYAR/f39/AX9gBn9/f319fQF9YAR/f31/AGADf399AX1gBn98f39/fwF/YAR/fHx/AGACf30AYAh/f39/f39/fwBgDX9/f39/f39/f39/f38AYAp/f39/f39/f39/AGAFf39/f38BfGAEfHx/fwF9YA1/fX1/f399fX9/f39/AX9gB39/f319f38AYAJ+fwF/YAN/fX0BfWABfAF8YAN/fHwAYAR/f319AGAHf39/fX19fQF9YA1/fX99f31/fX19fX1/AX9gC39/f39/f399fX19AX9gCH9/f39/f319AGAEf39+fgBgB39/f39/f38Bf2ACfH8BfGAFf398fH8AYAN/f38BfGAEf39/fABgA39/fQBgBn9/fX99fwF/ArUBHgFhAWEAHwFhAWIAAwFhAWMACQFhAWQAFgFhAWUAEQFhAWYAIAFhAWcAAAFhAWgAIQFhAWkAAwFhAWoAAAFhAWsAFwFhAWwACgFhAW0ABQFhAW4AAwFhAW8AAQFhAXAAFwFhAXEABgFhAXIAAAFhAXMAIgFhAXQACgFhAXUADQFhAXYAFgFhAXcAAgFhAXgAAwFhAXkAGAFhAXoAAgFhAUEAAQFhAUIAEQFhAUMAAQFhAUQAAAOiAqACAgMSBwcACRkDAAoRBgYKEwAPDxMBBiMTCgcHGgMUASQFJRQHAwMKCgMmAQYYDxobFAAKBw8KBwMDAgkCAAAFGwACBwIHBgIDAQMIDAABKAkHBQURACkZASoAAAIrLAIALQcHBy4HLwkFCgMCMA0xAgMJAgACAQYKAQIBBQEACQIFAQEABQAODQ0GFQIBHBUGAgkCEAAAAAUyDzMMBQYINAUCAwUODg41AgMCAgIDBgICNgIBDAwMAQsLCwsLCx0CAAIAAAABABABBQICAQMCEgMMCwEBAQEBAQsLAQICAwICAgICAgIDAgIICAEICAgEBAQEBAQEBAQABAQABAQEBAAE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GiABQQA2AvADIAFCADcC6AMgAigC7AMiAyACKALoAyIERwRAIAMgBGsiBEEASA0FIAEgBBAeIgM2AuwDIAEgAzYC6AMgASADIARqNgLwAyACKALoAyIEIAIoAuwDIghHBEADQCADIAQoAgA2AgAgA0EEaiEDIARBBGoiBCAIRw0ACwsgASADNgLsAwsgASACKQL0AzcC9AMgASACKAKEBDYChAQgASACKQL8AzcC/AMgAUEANgLkAwsgBSABNgIAIAEgADYC5AMLIAZBAWohBiAFQQRqIgUgB0cNAAsLDwsQAgALUAACQAJAAkACQAJAIAIOBAQAAQIDCyAAIAEgAUEwahBDDwsgACABIAFBMGogAxBEDwsgACABIAFBMGoQQg8LECQACyAAIAEgAUEwaiADEEULcAIBfwF9IwBBEGsiBCQAIARBCGogACABQQJ0QdwlaigCACACEDZDAADAfyEFAkACQAJAIAQtAAxBAWsOAgABAgsgBCoCCCEFDAELIAQqAgggA5RDCtcjPJQhBQsgBEEQaiQAIAVDAAAAACAFIAVbGwt5AgF/AX0jAEEQayIDJAAgA0EIaiAAIAFBAnRB7CVqKAIAIAIQU0MAAMB/IQQCQAJAAkAgAy0ADEEBaw4CAAECCyADKgIIIQQMAQsgAyoCCEMAAAAAlEMK1yM8lCEECyADQRBqJAAgBEMAAAAAl0MAAAAAIAQgBFsbC1QAAkACQAJAAkACQCACDgQEAAECAwsgACABIAFBwgBqEEMPCyAAIAEgAUHCAGogAxBEDwsgACABIAFBwgBqEEIPCxAkAAsgACABIAFBwgBqIAMQRQsvACAAIAJFQQF0IgIgASADEGAgACACIAEQS5IgACACIAEgAxB/IAAgAiABEFKSkgvOAQIDfwJ9IwBBEGsiAyQAQQEhBCADQQhqIABB/ABqIgUgACABQQF0akH2AGoiAS8BABAfAkACQCADKgIIIgcgAioCACIGXARAIAcgB1sEQCACLQAEIQIMAgsgBiAGXCEECyACLQAEIQIgBEUNACADLQAMIAJB/wFxRg0BCyAFIAEgBiACEDkDQCAALQAAIgFBBHENASAAIAFBBHI6AAAgACgCECIBBEAgACABEQAACyAAQYCAgP4HNgKcASAAKALkAyIADQALCyADQRBqJAALzgECA38CfSMAQRBrIgMk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AWsOAgABAgsgBCoCCCEFDAELIAQqAgggA5RDCtcjPJQhBQsgBEEQaiQAIAVDAAAAACAFIAVbGwscACAAIAFBCCACpyACQiCIpyADpyADQiCIpxAVCwUAEFgACzkAIABFBEBBAA8LAn8gAUGAf3FBgL8DRiABQf8ATXJFBEBB/DtBGTYCAEF/DAELIAAgAToAAEEBCwvEAgACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABQQlrDhIACgsMCgsCAwQFDAsMDAoLBwgJCyACIAIoAgAiAUEEajYCACAAIAEoAgA2AgAPCwALIAIgAigCACIBQQRqNgIAIAAgATIBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATMBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATAAADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATEAADcDAA8LAAsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsgACACIAMRAQALDwsgAiACKAIAIgFBBGo2AgAgACABNAIANwMADwsgAiACKAIAIgFBBGo2AgAgACABNQIANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKQMANwMAC84BAgN/An0jAEEQayIDJABBASEEIANBCGogAEH8AGoiBSAAIAFBAXRqQegAaiIBLwEAEB8CQAJAIAMqAggiByACKgIAIgZcBEAgByAHWwRAIAItAAQhAgwCCyAGIAZcIQQLIAItAAQhAiAERQ0AIAMtAAwgAkH/AXFGDQELIAUgASAGIAIQOQNAIAAtAAAiAUEEcQ0BIAAgAUEEcjoAACAAKAIQIgEEQCAAIAERAAALIABBgICA/gc2ApwBIAAoAuQDIgANAAsLIANBEGokAAtdAQR/IAAoAgAhAgNAIAIsAAAiAxBXBEBBfyEEIAAgAkEBaiICNgIAIAFBzJmz5gBNBH9BfyADQTBrIgMgAUEKbCIEaiADIARB/////wdzShsFIAQLIQEMAQsLIAELrhQCEn8BfiMAQdAAayIIJAAgCCABNgJMIAhBN2ohFyAIQThqIRQCQAJAAkACQANAIAEhDSAHIA5B/////wdzSg0BIAcgDmohDgJAAkACQCANIgctAAAiCQRAA0ACQAJAIAlB/wFxIgFFBEAgByEBDAELIAFBJUcNASAH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IQEgAEIANwIEIAAgATYCACABIAA2AgQgAkEQaiQAIAALGwEBfyAABEAgACgCACIBBEAgARAjCyAAECMLC0kBAn9BBBAeIQFBIBAeIgBBADYCHCAAQoCAgICAgIDAPzcCFCAAQgA3AgwgAEEAOgAIIABBAzYCBCAAQQA2AgAgASAANgIAIAELIAAgAkEFR0EAIAIbRQRAQbgwIAMgBBBJDwsgAyAEEHALIgEBfiABIAKtIAOtQiCGhCAEIAARFQAiBUIgiKckASAFpwuoAQEFfyAAKAJUIgMoAgAhBSADKAIEIgQgACgCFCAAKAIcIgdrIgYgBCAGSRsiBgRAIAUgByAGECsaIAMgAygCACAGaiIFNgIAIAMgAygCBCAGayIENgIECyAEIAIgAiAESxsiBARAIAUgASAEECsaIAMgAygCACAEaiIFNgIAIAMgAygCBCAEazYCBAsgBUEAOgAAIAAgACgCLCIBNgIcIAAgATYCFCACCwQAQgALBABBAAuKBQIGfgJ/IAEgASgCAEEHakF4cSIBQRBqNgIAIAAhCSABKQMAIQMgASkDCCEGIwBBIGsiCCQAAkAgBkL///////////8AgyIEQoCAgICAgMCAPH0gBEKAgICAgIDA/8MAfVQEQCAGQgSGIANCPIiEIQQgA0L//////////w+DIgNCgYCAgICAgIAIWgRAIARCgYCAgICAgIDAAHwhAgwCCyAEQoCAgICAgICAQH0hAiADQoCAgICAgICACFINASACIARCAYN8IQIMAQsgA1AgBEKAgICAgIDA//8AVCAEQoCAgICAgMD//wBRG0UEQCAGQgSGIANCPIiEQv////////8Dg0KAgICAgICA/P8AhCECDAELQoCAgICAgID4/wAhAiAEQv///////7//wwBWDQBCACECIARCMIinIgBBkfcASQ0AIAMhAiAGQv///////z+DQoCAgICAgMAAhCIFIQcCQCAAQYH3AGsiAUHAAHEEQCACIAFBQGqthiEHQgAhAgwBCyABRQ0AIAcgAa0iBIYgAkHAACABa62IhCEHIAIgBIYhAgsgCCACNwMQIAggBzcDGAJAQYH4ACAAayIAQcAAcQRAIAUgAEFAaq2IIQNCACEFDAELIABFDQAgBUHAACAAa62GIAMgAK0iAoiEIQMgBSACiCEFCyAIIAM3AwAgCCAF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ASAAKAIAIQAgASACQQFxBH8gASgCACAAaigCAAUgAAsRCwALYQECfyMAQRBrIgIkACABIAAoAgQiA0EBdWohASAAKAIAIQAgAiABIANBAXEEfyABKAIAIABqKAIABSAACxEBAEEQEB4iACACKQMINwMIIAAgAikDADcDACACQRBqJAAgAAtjAQJ/IwBBEGsiAyQAIAEgACgCBCIEQQF1aiEBIAAoAgAhACADIAEgAiAEQQFxBH8gASgCACAAaigCAAUgAAsRAwBBEBAeIgAgAykDCDcDCCAAIAMpAwA3AwAgA0EQaiQAIAALNwEBfyABIAAoAgQiA0EBdWohASAAKAIAIQAgASACIANBAXEEfyABKAIAIABqKAIABSAACxEEAAs5AQF/IAEgACgCBCIEQQF1aiEBIAAoAgAhACABIAIgAyAEQQFxBH8gASgCACAAaigCAAUgAAsRCAALCQAgASAAEQIACwUAQcM7Cw8AIAEgACgCAGogAjYCAAsNACABIAAoAgBqKAIACxgBAX9BEBAeIgBCADcDCCAAQQA2AgAgAAsYAQF/QRAQHiIAQgA3AwAgAEIANwMIIAALDABBMBAeQQBBMBAqCzcBAX8gASAAKAIEIgNBAXVqIQEgACgCACEAIAEgAiADQQFxBH8gASgCACAAaigCAAUgAAsRHgALBQBBvjsLIQAgACABKAIAIAEgASwAC0EASBtBuzsgAigCABAQNgIACyoBAX9BDBAeIgFBADoABCABIAAoAgA2AgggAEEANgIAIAFB2Cc2AgAgAQsFAEG7OwsFAEG4OwshACAAIAEoAgAgASABLAALQQBIG0GkOyACKAIAEBA2AgAL2AEBBH8jAEEgayIDJAAgASgCACIEQfD///8HSQRAAkACQCAEQQtPBEAgBEEPckEBaiIFEB4hBiADIAVBgICAgHhyNgIQIAMgBjYCCCADIAQ2AgwgBCAGaiEFDAELIAMgBDoAEyADQQhqIgYgBGohBSAERQ0BCyAGIAFBBGogBBArGgsgBUEAOgAAIAMgAjYCACADQRhqIANBCGogAyAAEQMAIAMoAhgQHSADKAIYIgAQBiADKAIAEAYgAywAE0EASARAIAMoAggQIwsgA0EgaiQAIAAPCxACAAsqAQF/QQwQHiIBQQA6AAQgASAAKAIANgIIIABBADYCACABQeAmNgIA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AkEIaiAIIAYQHyACIAcgAC8AABAfQQEhAyACKgIIIgogAioCACILXAR/IAogClsNAyALIAtcBSADC0UNAiACLQAMIAItAARHDQILIABBAmohAEEBIQMgBCEGQQEhBCAGRQ0ACyABLwB6IgBBB3FFBEAgBS0AekEHcUUNAgsgCCAAECAiCiAHIAUvAHoQICILWw0BIAogClsNACALIAtcDQELIAFBFGogBUEUakHoABArGiABQfwAaiAFQfwAahCgAQNAIAEtAAAiAEEEcQ0BIAEgAEEEcjoAACABKAIQIgAEQCABIAARAAALIAFBgICA/gc2ApwBIAEoAuQDIgENAAsLIAJBEGokAAvGAwEEfyMAQaAEayICJAAgACgCBCEBIABBADYCBCABBEAgASABKAIAKAIEEQAACyAAKAIIIQEgAEEANgIIIAEEQCABIAEoAgAoAgQRAAALAkAgACgCACIAKALoAyAAKALsA0YEQCAAKALkAw0BIAAgAkEYaiAAKAL0AxBcIgEpAgA3AgAgACABKAIQNgIQIAAgASkCCDcCCCAAQRRqIAFBFGpB6AAQKxogACABKQKMATcCjAEgACABKQKEATcChAEgACABKQJ8NwJ8IAEoApQBIQQgAUEANgKUASAAKAKUASEDIAAgBDYClAEgAwRAIAMQWwsgAEGYAWogAUGYAWpB0AIQKxogACgC6AMiAwRAIAAgAzYC7AMgAxAjCyAAIAEoAugDNgLoAyAAIAEoAuwDNgLsAyAAIAEoAvADNgLwAyABQQA2AvADIAFCADcC6AMgACABKQL8AzcC/AMgACABKQL0AzcC9AMgACABKAKEBDYChAQgASgClAEhACABQQA2ApQBIAAEQCAAEFsLIAJBoARqJAAPCyACQfAcNgIQIABBBUHYJSACQRBqECwQJAALIAJB5hE2AgAgAEEFQdglIAIQLBAkAAsLAEEMEB4gABCiAQsLAEEMEB5BABCiAQsNACAAKAIALQAIQQFxCwoAIAAoAgAoAhQLGQAgAUH/AXEEQBACAAsgACgCACgCEEEBcQsYACAAKAIAIgAgAC0ACEH+AXEgAXI6AAgLJgAgASAAKAIAIgAoAhRHBEAgACABNgIUIAAgACgCDEEBajYCDAsLkgEBAn8jAEEQayICJAAgACgCACEAIAFDAAAAAGAEQCABIAAqAhhcBEAgACABOAIYIAAgACgCDEEBajYCDAsgAkEQaiQADwsgAkGIFDYCACMAQRBrIgMkACADIAI2AgwCQCAARQRAQbgwQdglIAIQSRoMAQsgAEEAQQVB2CUgAiAAKAIEEQ0AGgsgA0EQaiQAECQACz8AIAFB/wFxRQRAIAIgACgCACIAKAIQIgFBAXFHBEAgACABQX5xIAJyNgIQIAAgACgCDEEBajYCDAsPCxACAAsL4CYjAEGACAuBHk9ubHkgbGVhZiBub2RlcyB3aXRoIGN1c3RvbSBtZWFzdXJlIGZ1bmN0aW9ucyBzaG91bGQgbWFudWFsbHkgbWFyayB0aGVtc2VsdmVzIGFzIGRpcnR5AGlzRGlydHkAbWFya0RpcnR5AGRlc3Ryb3kAc2V0RGlzcGxheQBnZXREaXNwbGF5AHNldEZsZXgALSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABzZXRGbGV4R3JvdwBnZXRGbGV4R3JvdwBzZXRPdmVyZmxvdwBnZXRPdmVyZmxvdwBoYXNOZXdMYXlvdXQAY2FsY3VsYXRlTGF5b3V0AGdldENvbXB1dGVkTGF5b3V0AHVuc2lnbmVkIHNob3J0AGdldENoaWxkQ291bnQAdW5zaWduZWQgaW50AHNldEp1c3RpZnlDb250ZW50AGdldEp1c3RpZnlDb250ZW50AGF2YWlsYWJsZUhlaWdodCBpcyBpbmRlZmluaXRlIHNvIGhlaWdodFNpemluZ01vZGUgbXVzdCBiZSBTaXppbmdNb2RlOjpNYXhDb250ZW50AGF2YWlsYWJsZVdpZHRoIGlzIGluZGVmaW5pdGUgc28gd2lkdGhTaXppbmdNb2RlIG11c3QgYmUgU2l6aW5nTW9kZTo6TWF4Q29udGVudABzZXRBbGlnbkNvbnRlbnQAZ2V0QWxpZ25Db250ZW50AGdldFBhcmVudABpbXBsZW1lbnQAc2V0TWF4SGVpZ2h0UGVyY2VudABzZXRIZWlnaHRQZXJjZW50AHNldE1pbkhlaWdodFBlcmNlbnQAc2V0RmxleEJhc2lzUGVyY2VudABzZXRHYXBQZXJjZW50AHNldFBvc2l0aW9uUGVyY2VudABzZXRNYXJnaW5QZXJjZW50AHNldE1heFdpZHRoUGVyY2VudABzZXRXaWR0aFBlcmNlbnQAc2V0TWluV2lkdGhQZXJjZW50AHNldFBhZGRpbmdQZXJjZW50AGhhbmRsZS50eXBlKCkgPT0gU3R5bGVWYWx1ZUhhbmRsZTo6VHlwZTo6UG9pbnQgfHwgaGFuZGxlLnR5cGUoKSA9PSBTdHlsZVZhbHVlSGFuZGxlOjpUeXBlOjpQZXJjZW50AGNyZWF0ZURlZmF1bHQAdW5pdAByaWdodABoZWlnaHQAc2V0TWF4SGVpZ2h0AGdldE1heEhlaWdodABzZXRIZWlnaHQAZ2V0SGVpZ2h0AHNldE1pbkhlaWdodABnZXRNaW5IZWlnaHQAZ2V0Q29tcHV0ZWRIZWlnaHQAZ2V0Q29tcHV0ZWRSaWdodABsZWZ0AGdldENvbXB1dGVkTGVmdAByZXNldABfX2Rlc3RydWN0AGZsb2F0AHVpbnQ2NF90AHVzZVdlYkRlZmF1bHRzAHNldFVzZVdlYkRlZmF1bHRzAHNldEFsaWduSXRlbXMAZ2V0QWxpZ25JdGVtcwBzZXRGbGV4QmFzaXMAZ2V0RmxleEJhc2lzAENhbm5vdCBnZXQgbGF5b3V0IHByb3BlcnRpZXMgb2YgbXVsdGktZWRnZSBzaG9ydGhhbmRzAHNldFBvaW50U2NhbGVGYWN0b3IATWVhc3VyZUNhbGxiYWNrV3JhcHBlcgBEaXJ0aWVkQ2FsbGJhY2tXcmFwcGVyAENhbm5vdCByZXNldCBhIG5vZGUgc3RpbGwgYXR0YWNoZWQgdG8gYSBvd25lcgBzZXRCb3JkZXIAZ2V0Qm9yZGVyAGdldENvbXB1dGVkQm9yZGVyAGdldE51bWJlcgBoYW5kbGUudHlwZSgpID09IFN0eWxlVmFsdWVIYW5kbGU6OlR5cGU6Ok51bWJlcgB1bnNpZ25lZCBjaGFyAHRvcABnZXRDb21wdXRlZFRvcABzZXRGbGV4V3JhcABnZXRGbGV4V3JhcABzZXRHYXAAZ2V0R2FwACVwAHNldEhlaWdodEF1dG8Ac2V0RmxleEJhc2lzQXV0bwBzZXRQb3NpdGlvbkF1dG8Ac2V0TWFyZ2luQXV0bwBzZXRXaWR0aEF1dG8AU2NhbGUgZmFjdG9yIHNob3VsZCBub3QgYmUgbGVzcyB0aGFuIHplcm8Ac2V0QXNwZWN0UmF0aW8AZ2V0QXNwZWN0UmF0aW8Ac2V0UG9zaXRpb24AZ2V0UG9zaXRpb24Abm90aWZ5T25EZXN0cnVjdGlvbgBzZXRGbGV4RGlyZWN0aW9uAGdldEZsZXhEaXJlY3Rpb24Ac2V0RGlyZWN0aW9uAGdldERpcmVjdGlvbgBzZXRNYXJnaW4AZ2V0TWFyZ2luAGdldENvbXB1dGVkTWFyZ2luAG1hcmtMYXlvdXRTZWVuAG5hbgBib3R0b20AZ2V0Q29tcHV0ZWRCb3R0b20AYm9vbABlbXNjcmlwdGVuOjp2YWwAc2V0RmxleFNocmluawBnZXRGbGV4U2hyaW5rAHNldEFsd2F5c0Zvcm1zQ29udGFpbmluZ0Jsb2NrAE1lYXN1cmVDYWxsYmFjawBEaXJ0aWVkQ2FsbGJhY2sAZ2V0TGVuZ3RoAHdpZHRoAHNldE1heFdpZHRoAGdldE1heFdpZHRoAHNldFdpZHRoAGdldFdpZHRoAHNldE1pbldpZHRoAGdldE1pbldpZHRoAGdldENvbXB1dGVkV2lkdGgAcHVzaAAvaG9tZS9ydW5uZXIvd29yay95b2dhL3lvZ2EvamF2YXNjcmlwdC8uLi95b2dhL3N0eWxlL1NtYWxsVmFsdWVCdWZmZXIuaAAvaG9tZS9ydW5uZXIvd29yay95b2dhL3lvZ2EvamF2YXNjcmlwdC8uLi95b2dhL3N0eWxlL1N0eWxlVmFsdWVQb29sLmgAdW5zaWduZWQgbG9uZwBzZXRCb3hTaXppbmcAZ2V0Qm94U2l6aW5nAHN0ZDo6d3N0cmluZwBzdGQ6OnN0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBzZXRQYWRkaW5nAGdldFBhZGRpbmcAZ2V0Q29tcHV0ZWRQYWRkaW5nAFRyaWVkIHRvIGNvbnN0cnVjdCBZR05vZGUgd2l0aCBudWxsIGNvbmZpZwBBdHRlbXB0aW5nIHRvIGNvbnN0cnVjdCBOb2RlIHdpdGggbnVsbCBjb25maWcAY3JlYXRlV2l0aENvbmZpZwBpbmYAc2V0QWxpZ25TZWxmAGdldEFsaWduU2VsZgBTaXplAHZhbHVlAFZhbHVlAGNyZWF0ZQBtZWFzdXJlAHNldFBvc2l0aW9uVHlwZQBnZXRQb3NpdGlvblR5cGUAaXNSZWZlcmVuY2VCYXNlbGluZQBzZXRJc1JlZmVyZW5jZUJhc2VsaW5lAGNvcHlTdHlsZQBkb3VibGUATm9kZQBleHRlbmQAaW5zZXJ0Q2hpbGQAZ2V0Q2hpbGQAcmVtb3ZlQ2hpbGQAdm9pZABzZXRFeHBlcmltZW50YWxGZWF0dXJlRW5hYmxlZABpc0V4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAGRpcnRpZWQAQ2Fubm90IHJlc2V0IGEgbm9kZSB3aGljaCBzdGlsbCBoYXMgY2hpbGRyZW4gYXR0YWNoZWQAdW5zZXRNZWFzdXJlRnVuYwB1bnNldERpcnRpZWRGdW5jAHNldEVycmF0YQBnZXRFcnJhdGEATWVhc3VyZSBmdW5jdGlvbiByZXR1cm5lZCBhbiBpbnZhbGlkIGRpbWVuc2lvbiB0byBZb2dhOiBbd2lkdGg9JWYsIGhlaWdodD0lZl0ARXhwZWN0IGN1c3RvbSBiYXNlbGluZSBmdW5jdGlvbiB0byBub3QgcmV0dXJuIE5hTgBOQU4ASU5GAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4Ac3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVk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", !JA(CA)) {
        var AA = CA;
        CA = t2.locateFile ? t2.locateFile(AA, o2) : o2 + AA;
      }
      function IA() {
        var l3 = CA;
        try {
          if (l3 == CA && g3) return new Uint8Array(g3);
          if (JA(l3)) try {
            var c3 = VI(l3.slice(37)), Q2 = new Uint8Array(c3.length);
            for (l3 = 0; l3 < c3.length; ++l3) Q2[l3] = c3.charCodeAt(l3);
            var d3 = Q2;
          } catch {
            throw Error("Converting base64 string to bytes failed.");
          }
          else d3 = void 0;
          var m3 = d3;
          if (m3) return m3;
          throw "both async and sync fetching of the wasm failed";
        } catch (S3) {
          hA(S3);
        }
      }
      function Ce() {
        return g3 || typeof fetch != "function" ? Promise.resolve().then(function() {
          return IA();
        }) : fetch(CA, { credentials: "same-origin" }).then(function(l3) {
          if (!l3.ok) throw "failed to load wasm binary file at '" + CA + "'";
          return l3.arrayBuffer();
        }).catch(function() {
          return IA();
        });
      }
      function PA(l3) {
        for (; 0 < l3.length; ) l3.shift()(t2);
      }
      function LA(l3) {
        if (l3 === void 0) return "_unknown";
        l3 = l3.replace(/[^a-zA-Z0-9_]/g, "$");
        var c3 = l3.charCodeAt(0);
        return 48 <= c3 && 57 >= c3 ? "_" + l3 : l3;
      }
      function dA(l3, c3) {
        return l3 = LA(l3), function() {
          return c3.apply(this, arguments);
        };
      }
      var V2 = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }], mA = [];
      function eA(l3) {
        var c3 = Error, Q2 = dA(l3, function(d3) {
          this.name = l3, this.message = d3, d3 = Error(d3).stack, d3 !== void 0 && (this.stack = this.toString() + `
` + d3.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        return Q2.prototype = Object.create(c3.prototype), Q2.prototype.constructor = Q2, Q2.prototype.toString = function() {
          return this.message === void 0 ? this.name : this.name + ": " + this.message;
        }, Q2;
      }
      var kA = void 0;
      function W(l3) {
        throw new kA(l3);
      }
      var FA = (l3) => (l3 || W("Cannot use deleted val. handle = " + l3), V2[l3].value), xA = (l3) => {
        switch (l3) {
          case void 0:
            return 1;
          case null:
            return 2;
          case true:
            return 3;
          case false:
            return 4;
          default:
            var c3 = mA.length ? mA.pop() : V2.length;
            return V2[c3] = { ga: 1, value: l3 }, c3;
        }
      }, GA = void 0, YA = void 0;
      function BA(l3) {
        for (var c3 = ""; p2[l3]; ) c3 += YA[p2[l3++]];
        return c3;
      }
      var qA = [];
      function KA() {
        for (; qA.length; ) {
          var l3 = qA.pop();
          l3.M.$ = false, l3.delete();
        }
      }
      var RA = void 0, NA = {};
      function Ct(l3, c3) {
        for (c3 === void 0 && W("ptr should not be undefined"); l3.R; ) c3 = l3.ba(c3), l3 = l3.R;
        return c3;
      }
      var ke = {};
      function Ht(l3) {
        l3 = ms(l3);
        var c3 = BA(l3);
        return Ge(l3), c3;
      }
      function tt(l3, c3) {
        var Q2 = ke[l3];
        return Q2 === void 0 && W(c3 + " has unknown type " + Ht(l3)), Q2;
      }
      function dt() {
      }
      var pt = false;
      function rt(l3) {
        --l3.count.value, l3.count.value === 0 && (l3.T ? l3.U.W(l3.T) : l3.P.N.W(l3.O));
      }
      function xe(l3, c3, Q2) {
        return c3 === Q2 ? l3 : Q2.R === void 0 ? null : (l3 = xe(l3, c3, Q2.R), l3 === null ? null : Q2.na(l3));
      }
      var de = {};
      function oe(l3, c3) {
        return c3 = Ct(l3, c3), NA[c3];
      }
      var nt = void 0;
      function XA(l3) {
        throw new nt(l3);
      }
      function pe(l3, c3) {
        return c3.P && c3.O || XA("makeClassHandle requires ptr and ptrType"), !!c3.U != !!c3.T && XA("Both smartPtrType and smartPtr must be specified"), c3.count = { value: 1 }, he(Object.create(l3, { M: { value: c3 } }));
      }
      function he(l3) {
        return typeof FinalizationRegistry > "u" ? (he = (c3) => c3, l3) : (pt = new FinalizationRegistry((c3) => {
          rt(c3.M);
        }), he = (c3) => {
          var Q2 = c3.M;
          return Q2.T && pt.register(c3, { M: Q2 }, c3), c3;
        }, dt = (c3) => {
          pt.unregister(c3);
        }, he(l3));
      }
      var it = {};
      function Ye(l3) {
        for (; l3.length; ) {
          var c3 = l3.pop();
          l3.pop()(c3);
        }
      }
      function VA(l3) {
        return this.fromWireType(b2[l3 >> 2]);
      }
      var se = {}, ne = {};
      function me(l3, c3, Q2) {
        function d3(M) {
          M = Q2(M), M.length !== l3.length && XA("Mismatched type converter count");
          for (var U = 0; U < l3.length; ++U) q2(l3[U], M[U]);
        }
        l3.forEach(function(M) {
          ne[M] = c3;
        });
        var m3 = Array(c3.length), S3 = [], N2 = 0;
        c3.forEach((M, U) => {
          ke.hasOwnProperty(M) ? m3[U] = ke[M] : (S3.push(M), se.hasOwnProperty(M) || (se[M] = []), se[M].push(() => {
            m3[U] = ke[M], ++N2, N2 === S3.length && d3(m3);
          }));
        }), S3.length === 0 && d3(m3);
      }
      function z2(l3) {
        switch (l3) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 4:
            return 2;
          case 8:
            return 3;
          default:
            throw new TypeError("Unknown type size: " + l3);
        }
      }
      function q2(l3, c3, Q2 = {}) {
        if (!("argPackAdvance" in c3)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
        var d3 = c3.name;
        if (l3 || W('type "' + d3 + '" must have a positive integer typeid pointer'), ke.hasOwnProperty(l3)) {
          if (Q2.ua) return;
          W("Cannot register type '" + d3 + "' twice");
        }
        ke[l3] = c3, delete ne[l3], se.hasOwnProperty(l3) && (c3 = se[l3], delete se[l3], c3.forEach((m3) => m3()));
      }
      function gA(l3) {
        W(l3.M.P.N.name + " instance already deleted");
      }
      function Z() {
      }
      function pA(l3, c3, Q2) {
        if (l3[c3].S === void 0) {
          var d3 = l3[c3];
          l3[c3] = function() {
            return l3[c3].S.hasOwnProperty(arguments.length) || W("Function '" + Q2 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + l3[c3].S + ")!"), l3[c3].S[arguments.length].apply(this, arguments);
          }, l3[c3].S = [], l3[c3].S[d3.Z] = d3;
        }
      }
      function aA(l3, c3) {
        t2.hasOwnProperty(l3) ? (W("Cannot register public name '" + l3 + "' twice"), pA(t2, l3, l3), t2.hasOwnProperty(void 0) && W("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), t2[l3].S[void 0] = c3) : t2[l3] = c3;
      }
      function yA(l3, c3, Q2, d3, m3, S3, N2, M) {
        this.name = l3, this.constructor = c3, this.X = Q2, this.W = d3, this.R = m3, this.pa = S3, this.ba = N2, this.na = M, this.ja = [];
      }
      function tA(l3, c3, Q2) {
        for (; c3 !== Q2; ) c3.ba || W("Expected null or instance of " + Q2.name + ", got an instance of " + c3.name), l3 = c3.ba(l3), c3 = c3.R;
        return l3;
      }
      function rA(l3, c3) {
        return c3 === null ? (this.ea && W("null is not a valid " + this.name), 0) : (c3.M || W('Cannot pass "' + $A(c3) + '" as a ' + this.name), c3.M.O || W("Cannot pass deleted object as a pointer of type " + this.name), tA(c3.M.O, c3.M.P.N, this.N));
      }
      function ae(l3, c3) {
        if (c3 === null) {
          if (this.ea && W("null is not a valid " + this.name), this.da) {
            var Q2 = this.fa();
            return l3 !== null && l3.push(this.W, Q2), Q2;
          }
          return 0;
        }
        if (c3.M || W('Cannot pass "' + $A(c3) + '" as a ' + this.name), c3.M.O || W("Cannot pass deleted object as a pointer of type " + this.name), !this.ca && c3.M.P.ca && W("Cannot convert argument of type " + (c3.M.U ? c3.M.U.name : c3.M.P.name) + " to parameter type " + this.name), Q2 = tA(c3.M.O, c3.M.P.N, this.N), this.da) switch (c3.M.T === void 0 && W("Passing raw pointer to smart pointer is illegal"), this.Ba) {
          case 0:
            c3.M.U === this ? Q2 = c3.M.T : W("Cannot convert argument of type " + (c3.M.U ? c3.M.U.name : c3.M.P.name) + " to parameter type " + this.name);
            break;
          case 1:
            Q2 = c3.M.T;
            break;
          case 2:
            if (c3.M.U === this) Q2 = c3.M.T;
            else {
              var d3 = c3.clone();
              Q2 = this.xa(Q2, xA(function() {
                d3.delete();
              })), l3 !== null && l3.push(this.W, Q2);
            }
            break;
          default:
            W("Unsupporting sharing policy");
        }
        return Q2;
      }
      function j2(l3, c3) {
        return c3 === null ? (this.ea && W("null is not a valid " + this.name), 0) : (c3.M || W('Cannot pass "' + $A(c3) + '" as a ' + this.name), c3.M.O || W("Cannot pass deleted object as a pointer of type " + this.name), c3.M.P.ca && W("Cannot convert argument of type " + c3.M.P.name + " to parameter type " + this.name), tA(c3.M.O, c3.M.P.N, this.N));
      }
      function HA(l3, c3, Q2, d3) {
        this.name = l3, this.N = c3, this.ea = Q2, this.ca = d3, this.da = false, this.W = this.xa = this.fa = this.ka = this.Ba = this.wa = void 0, c3.R !== void 0 ? this.toWireType = ae : (this.toWireType = d3 ? rA : j2, this.V = null);
      }
      function zA(l3, c3) {
        t2.hasOwnProperty(l3) || XA("Replacing nonexistant public symbol"), t2[l3] = c3, t2[l3].Z = void 0;
      }
      function Ot(l3, c3) {
        var Q2 = [];
        return function() {
          if (Q2.length = 0, Object.assign(Q2, arguments), l3.includes("j")) {
            var d3 = t2["dynCall_" + l3];
            d3 = Q2 && Q2.length ? d3.apply(null, [c3].concat(Q2)) : d3.call(null, c3);
          } else d3 = F.get(c3).apply(null, Q2);
          return d3;
        };
      }
      function vA(l3, c3) {
        l3 = BA(l3);
        var Q2 = l3.includes("j") ? Ot(l3, c3) : F.get(c3);
        return typeof Q2 != "function" && W("unknown function pointer with signature " + l3 + ": " + c3), Q2;
      }
      var ot = void 0;
      function WA(l3, c3) {
        function Q2(S3) {
          m3[S3] || ke[S3] || (ne[S3] ? ne[S3].forEach(Q2) : (d3.push(S3), m3[S3] = true));
        }
        var d3 = [], m3 = {};
        throw c3.forEach(Q2), new ot(l3 + ": " + d3.map(Ht).join([", "]));
      }
      function Le(l3, c3, Q2, d3, m3) {
        var S3 = c3.length;
        2 > S3 && W("argTypes array size mismatch! Must at least get return value and 'this' types!");
        var N2 = c3[1] !== null && Q2 !== null, M = false;
        for (Q2 = 1; Q2 < c3.length; ++Q2) if (c3[Q2] !== null && c3[Q2].V === void 0) {
          M = true;
          break;
        }
        var U = c3[0].name !== "void", G2 = S3 - 2, O2 = Array(G2), Y = [], nA = [];
        return function() {
          if (arguments.length !== G2 && W("function " + l3 + " called with " + arguments.length + " arguments, expected " + G2 + " args!"), nA.length = 0, Y.length = N2 ? 2 : 1, Y[0] = m3, N2) {
            var MA = c3[1].toWireType(nA, this);
            Y[1] = MA;
          }
          for (var uA = 0; uA < G2; ++uA) O2[uA] = c3[uA + 2].toWireType(nA, arguments[uA]), Y.push(O2[uA]);
          if (uA = d3.apply(null, Y), M) Ye(nA);
          else for (var ie = N2 ? 1 : 2; ie < c3.length; ie++) {
            var we = ie === 1 ? MA : O2[ie - 2];
            c3[ie].V !== null && c3[ie].V(we);
          }
          return MA = U ? c3[0].fromWireType(uA) : void 0, MA;
        };
      }
      function wA(l3, c3) {
        for (var Q2 = [], d3 = 0; d3 < l3; d3++) Q2.push(x3[c3 + 4 * d3 >> 2]);
        return Q2;
      }
      function SA(l3) {
        4 < l3 && --V2[l3].ga === 0 && (V2[l3] = void 0, mA.push(l3));
      }
      function $A(l3) {
        if (l3 === null) return "null";
        var c3 = typeof l3;
        return c3 === "object" || c3 === "array" || c3 === "function" ? l3.toString() : "" + l3;
      }
      function Ae(l3, c3) {
        switch (c3) {
          case 2:
            return function(Q2) {
              return this.fromWireType(w3[Q2 >> 2]);
            };
          case 3:
            return function(Q2) {
              return this.fromWireType(y2[Q2 >> 3]);
            };
          default:
            throw new TypeError("Unknown float type: " + l3);
        }
      }
      function ge(l3, c3, Q2) {
        switch (c3) {
          case 0:
            return Q2 ? function(d3) {
              return C2[d3];
            } : function(d3) {
              return p2[d3];
            };
          case 1:
            return Q2 ? function(d3) {
              return h3[d3 >> 1];
            } : function(d3) {
              return k2[d3 >> 1];
            };
          case 2:
            return Q2 ? function(d3) {
              return b2[d3 >> 2];
            } : function(d3) {
              return x3[d3 >> 2];
            };
          default:
            throw new TypeError("Unknown integer type: " + l3);
        }
      }
      function ye(l3, c3) {
        for (var Q2 = "", d3 = 0; !(d3 >= c3 / 2); ++d3) {
          var m3 = h3[l3 + 2 * d3 >> 1];
          if (m3 == 0) break;
          Q2 += String.fromCharCode(m3);
        }
        return Q2;
      }
      function ZA(l3, c3, Q2) {
        if (Q2 === void 0 && (Q2 = 2147483647), 2 > Q2) return 0;
        Q2 -= 2;
        var d3 = c3;
        Q2 = Q2 < 2 * l3.length ? Q2 / 2 : l3.length;
        for (var m3 = 0; m3 < Q2; ++m3) h3[c3 >> 1] = l3.charCodeAt(m3), c3 += 2;
        return h3[c3 >> 1] = 0, c3 - d3;
      }
      function ue(l3) {
        return 2 * l3.length;
      }
      function Tt(l3, c3) {
        for (var Q2 = 0, d3 = ""; !(Q2 >= c3 / 4); ) {
          var m3 = b2[l3 + 4 * Q2 >> 2];
          if (m3 == 0) break;
          ++Q2, 65536 <= m3 ? (m3 -= 65536, d3 += String.fromCharCode(55296 | m3 >> 10, 56320 | m3 & 1023)) : d3 += String.fromCharCode(m3);
        }
        return d3;
      }
      function ht(l3, c3, Q2) {
        if (Q2 === void 0 && (Q2 = 2147483647), 4 > Q2) return 0;
        var d3 = c3;
        Q2 = d3 + Q2 - 4;
        for (var m3 = 0; m3 < l3.length; ++m3) {
          var S3 = l3.charCodeAt(m3);
          if (55296 <= S3 && 57343 >= S3) {
            var N2 = l3.charCodeAt(++m3);
            S3 = 65536 + ((S3 & 1023) << 10) | N2 & 1023;
          }
          if (b2[c3 >> 2] = S3, c3 += 4, c3 + 4 > Q2) break;
        }
        return b2[c3 >> 2] = 0, c3 - d3;
      }
      function Hr(l3) {
        for (var c3 = 0, Q2 = 0; Q2 < l3.length; ++Q2) {
          var d3 = l3.charCodeAt(Q2);
          55296 <= d3 && 57343 >= d3 && ++Q2, c3 += 4;
        }
        return c3;
      }
      var Or = {};
      function Pt(l3) {
        var c3 = Or[l3];
        return c3 === void 0 ? BA(l3) : c3;
      }
      var Tr = [];
      function YI(l3) {
        var c3 = Tr.length;
        return Tr.push(l3), c3;
      }
      function qI(l3, c3) {
        for (var Q2 = Array(l3), d3 = 0; d3 < l3; ++d3) Q2[d3] = tt(x3[c3 + 4 * d3 >> 2], "parameter " + d3);
        return Q2;
      }
      var ps = [], XI = [null, [], []];
      kA = t2.BindingError = eA("BindingError"), t2.count_emval_handles = function() {
        for (var l3 = 0, c3 = 5; c3 < V2.length; ++c3) V2[c3] !== void 0 && ++l3;
        return l3;
      }, t2.get_first_emval = function() {
        for (var l3 = 5; l3 < V2.length; ++l3) if (V2[l3] !== void 0) return V2[l3];
        return null;
      }, GA = t2.PureVirtualError = eA("PureVirtualError");
      for (var hs = Array(256), Pr = 0; 256 > Pr; ++Pr) hs[Pr] = String.fromCharCode(Pr);
      YA = hs, t2.getInheritedInstanceCount = function() {
        return Object.keys(NA).length;
      }, t2.getLiveInheritedInstances = function() {
        var l3 = [], c3;
        for (c3 in NA) NA.hasOwnProperty(c3) && l3.push(NA[c3]);
        return l3;
      }, t2.flushPendingDeletes = KA, t2.setDelayFunction = function(l3) {
        RA = l3, qA.length && RA && RA(KA);
      }, nt = t2.InternalError = eA("InternalError"), Z.prototype.isAliasOf = function(l3) {
        if (!(this instanceof Z && l3 instanceof Z)) return false;
        var c3 = this.M.P.N, Q2 = this.M.O, d3 = l3.M.P.N;
        for (l3 = l3.M.O; c3.R; ) Q2 = c3.ba(Q2), c3 = c3.R;
        for (; d3.R; ) l3 = d3.ba(l3), d3 = d3.R;
        return c3 === d3 && Q2 === l3;
      }, Z.prototype.clone = function() {
        if (this.M.O || gA(this), this.M.aa) return this.M.count.value += 1, this;
        var l3 = he, c3 = Object, Q2 = c3.create, d3 = Object.getPrototypeOf(this), m3 = this.M;
        return l3 = l3(Q2.call(c3, d3, { M: { value: { count: m3.count, $: m3.$, aa: m3.aa, O: m3.O, P: m3.P, T: m3.T, U: m3.U } } })), l3.M.count.value += 1, l3.M.$ = false, l3;
      }, Z.prototype.delete = function() {
        this.M.O || gA(this), this.M.$ && !this.M.aa && W("Object already scheduled for deletion"), dt(this), rt(this.M), this.M.aa || (this.M.T = void 0, this.M.O = void 0);
      }, Z.prototype.isDeleted = function() {
        return !this.M.O;
      }, Z.prototype.deleteLater = function() {
        return this.M.O || gA(this), this.M.$ && !this.M.aa && W("Object already scheduled for deletion"), qA.push(this), qA.length === 1 && RA && RA(KA), this.M.$ = true, this;
      }, HA.prototype.qa = function(l3) {
        return this.ka && (l3 = this.ka(l3)), l3;
      }, HA.prototype.ha = function(l3) {
        this.W && this.W(l3);
      }, HA.prototype.argPackAdvance = 8, HA.prototype.readValueFromPointer = VA, HA.prototype.deleteObject = function(l3) {
        l3 !== null && l3.delete();
      }, HA.prototype.fromWireType = function(l3) {
        function c3() {
          return this.da ? pe(this.N.X, { P: this.wa, O: Q2, U: this, T: l3 }) : pe(this.N.X, { P: this, O: l3 });
        }
        var Q2 = this.qa(l3);
        if (!Q2) return this.ha(l3), null;
        var d3 = oe(this.N, Q2);
        if (d3 !== void 0) return d3.M.count.value === 0 ? (d3.M.O = Q2, d3.M.T = l3, d3.clone()) : (d3 = d3.clone(), this.ha(l3), d3);
        if (d3 = this.N.pa(Q2), d3 = de[d3], !d3) return c3.call(this);
        d3 = this.ca ? d3.la : d3.pointerType;
        var m3 = xe(Q2, this.N, d3.N);
        return m3 === null ? c3.call(this) : this.da ? pe(d3.N.X, { P: d3, O: m3, U: this, T: l3 }) : pe(d3.N.X, { P: d3, O: m3 });
      }, ot = t2.UnboundTypeError = eA("UnboundTypeError");
      var VI = typeof atob == "function" ? atob : function(l3) {
        var c3 = "", Q2 = 0;
        l3 = l3.replace(/[^A-Za-z0-9\+\/=]/g, "");
        do {
          var d3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(l3.charAt(Q2++)), m3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(l3.charAt(Q2++)), S3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(l3.charAt(Q2++)), N2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(l3.charAt(Q2++));
          d3 = d3 << 2 | m3 >> 4, m3 = (m3 & 15) << 4 | S3 >> 2;
          var M = (S3 & 3) << 6 | N2;
          c3 += String.fromCharCode(d3), S3 !== 64 && (c3 += String.fromCharCode(m3)), N2 !== 64 && (c3 += String.fromCharCode(M));
        } while (Q2 < l3.length);
        return c3;
      }, zI = { l: function(l3, c3, Q2, d3) {
        hA("Assertion failed: " + (l3 ? f3(p2, l3) : "") + ", at: " + [c3 ? c3 ? f3(p2, c3) : "" : "unknown filename", Q2, d3 ? d3 ? f3(p2, d3) : "" : "unknown function"]);
      }, q: function(l3, c3, Q2) {
        l3 = BA(l3), c3 = tt(c3, "wrapper"), Q2 = FA(Q2);
        var d3 = [].slice, m3 = c3.N, S3 = m3.X, N2 = m3.R.X, M = m3.R.constructor;
        l3 = dA(l3, function() {
          m3.R.ja.forEach(function(G2) {
            if (this[G2] === N2[G2]) throw new GA("Pure virtual function " + G2 + " must be implemented in JavaScript");
          }.bind(this)), Object.defineProperty(this, "__parent", { value: S3 }), this.__construct.apply(this, d3.call(arguments));
        }), S3.__construct = function() {
          this === S3 && W("Pass correct 'this' to __construct");
          var G2 = M.implement.apply(void 0, [this].concat(d3.call(arguments)));
          dt(G2);
          var O2 = G2.M;
          G2.notifyOnDestruction(), O2.aa = true, Object.defineProperties(this, { M: { value: O2 } }), he(this), G2 = O2.O, G2 = Ct(m3, G2), NA.hasOwnProperty(G2) ? W("Tried to register registered instance: " + G2) : NA[G2] = this;
        }, S3.__destruct = function() {
          this === S3 && W("Pass correct 'this' to __destruct"), dt(this);
          var G2 = this.M.O;
          G2 = Ct(m3, G2), NA.hasOwnProperty(G2) ? delete NA[G2] : W("Tried to unregister unregistered instance: " + G2);
        }, l3.prototype = Object.create(S3);
        for (var U in Q2) l3.prototype[U] = Q2[U];
        return xA(l3);
      }, j: function(l3) {
        var c3 = it[l3];
        delete it[l3];
        var Q2 = c3.fa, d3 = c3.W, m3 = c3.ia, S3 = m3.map((N2) => N2.ta).concat(m3.map((N2) => N2.za));
        me([l3], S3, (N2) => {
          var M = {};
          return m3.forEach((U, G2) => {
            var O2 = N2[G2], Y = U.ra, nA = U.sa, MA = N2[G2 + m3.length], uA = U.ya, ie = U.Aa;
            M[U.oa] = { read: (we) => O2.fromWireType(Y(nA, we)), write: (we, _t) => {
              var Ue = [];
              uA(ie, we, MA.toWireType(Ue, _t)), Ye(Ue);
            } };
          }), [{ name: c3.name, fromWireType: function(U) {
            var G2 = {}, O2;
            for (O2 in M) G2[O2] = M[O2].read(U);
            return d3(U), G2;
          }, toWireType: function(U, G2) {
            for (var O2 in M) if (!(O2 in G2)) throw new TypeError('Missing field:  "' + O2 + '"');
            var Y = Q2();
            for (O2 in M) M[O2].write(Y, G2[O2]);
            return U !== null && U.push(d3, Y), Y;
          }, argPackAdvance: 8, readValueFromPointer: VA, V: d3 }];
        });
      }, v: function() {
      }, B: function(l3, c3, Q2, d3, m3) {
        var S3 = z2(Q2);
        c3 = BA(c3), q2(l3, { name: c3, fromWireType: function(N2) {
          return !!N2;
        }, toWireType: function(N2, M) {
          return M ? d3 : m3;
        }, argPackAdvance: 8, readValueFromPointer: function(N2) {
          if (Q2 === 1) var M = C2;
          else if (Q2 === 2) M = h3;
          else if (Q2 === 4) M = b2;
          else throw new TypeError("Unknown boolean type size: " + c3);
          return this.fromWireType(M[N2 >> S3]);
        }, V: null });
      }, f: function(l3, c3, Q2, d3, m3, S3, N2, M, U, G2, O2, Y, nA) {
        O2 = BA(O2), S3 = vA(m3, S3), M && (M = vA(N2, M)), G2 && (G2 = vA(U, G2)), nA = vA(Y, nA);
        var MA = LA(O2);
        aA(MA, function() {
          WA("Cannot construct " + O2 + " due to unbound types", [d3]);
        }), me([l3, c3, Q2], d3 ? [d3] : [], function(uA) {
          if (uA = uA[0], d3) var ie = uA.N, we = ie.X;
          else we = Z.prototype;
          uA = dA(MA, function() {
            if (Object.getPrototypeOf(this) !== _t) throw new kA("Use 'new' to construct " + O2);
            if (Ue.Y === void 0) throw new kA(O2 + " has no accessible constructor");
            var Ds = Ue.Y[arguments.length];
            if (Ds === void 0) throw new kA("Tried to invoke ctor of " + O2 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Ue.Y).toString() + ") parameters instead!");
            return Ds.apply(this, arguments);
          });
          var _t = Object.create(we, { constructor: { value: uA } });
          uA.prototype = _t;
          var Ue = new yA(O2, uA, _t, nA, ie, S3, M, G2);
          ie = new HA(O2, Ue, true, false), we = new HA(O2 + "*", Ue, false, false);
          var ws = new HA(O2 + " const*", Ue, false, true);
          return de[l3] = { pointerType: we, la: ws }, zA(MA, uA), [ie, we, ws];
        });
      }, d: function(l3, c3, Q2, d3, m3, S3, N2) {
        var M = wA(Q2, d3);
        c3 = BA(c3), S3 = vA(m3, S3), me([], [l3], function(U) {
          function G2() {
            WA("Cannot call " + O2 + " due to unbound types", M);
          }
          U = U[0];
          var O2 = U.name + "." + c3;
          c3.startsWith("@@") && (c3 = Symbol[c3.substring(2)]);
          var Y = U.N.constructor;
          return Y[c3] === void 0 ? (G2.Z = Q2 - 1, Y[c3] = G2) : (pA(Y, c3, O2), Y[c3].S[Q2 - 1] = G2), me([], M, function(nA) {
            return nA = Le(O2, [nA[0], null].concat(nA.slice(1)), null, S3, N2), Y[c3].S === void 0 ? (nA.Z = Q2 - 1, Y[c3] = nA) : Y[c3].S[Q2 - 1] = nA, [];
          }), [];
        });
      }, p: function(l3, c3, Q2, d3, m3, S3) {
        0 < c3 || hA();
        var N2 = wA(c3, Q2);
        m3 = vA(d3, m3), me([], [l3], function(M) {
          M = M[0];
          var U = "constructor " + M.name;
          if (M.N.Y === void 0 && (M.N.Y = []), M.N.Y[c3 - 1] !== void 0) throw new kA("Cannot register multiple constructors with identical number of parameters (" + (c3 - 1) + ") for class '" + M.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          return M.N.Y[c3 - 1] = () => {
            WA("Cannot construct " + M.name + " due to unbound types", N2);
          }, me([], N2, function(G2) {
            return G2.splice(1, 0, null), M.N.Y[c3 - 1] = Le(U, G2, null, m3, S3), [];
          }), [];
        });
      }, a: function(l3, c3, Q2, d3, m3, S3, N2, M) {
        var U = wA(Q2, d3);
        c3 = BA(c3), S3 = vA(m3, S3), me([], [l3], function(G2) {
          function O2() {
            WA("Cannot call " + Y + " due to unbound types", U);
          }
          G2 = G2[0];
          var Y = G2.name + "." + c3;
          c3.startsWith("@@") && (c3 = Symbol[c3.substring(2)]), M && G2.N.ja.push(c3);
          var nA = G2.N.X, MA = nA[c3];
          return MA === void 0 || MA.S === void 0 && MA.className !== G2.name && MA.Z === Q2 - 2 ? (O2.Z = Q2 - 2, O2.className = G2.name, nA[c3] = O2) : (pA(nA, c3, Y), nA[c3].S[Q2 - 2] = O2), me([], U, function(uA) {
            return uA = Le(Y, uA, G2, S3, N2), nA[c3].S === void 0 ? (uA.Z = Q2 - 2, nA[c3] = uA) : nA[c3].S[Q2 - 2] = uA, [];
          }), [];
        });
      }, A: function(l3, c3) {
        c3 = BA(c3), q2(l3, { name: c3, fromWireType: function(Q2) {
          var d3 = FA(Q2);
          return SA(Q2), d3;
        }, toWireType: function(Q2, d3) {
          return xA(d3);
        }, argPackAdvance: 8, readValueFromPointer: VA, V: null });
      }, n: function(l3, c3, Q2) {
        Q2 = z2(Q2), c3 = BA(c3), q2(l3, { name: c3, fromWireType: function(d3) {
          return d3;
        }, toWireType: function(d3, m3) {
          return m3;
        }, argPackAdvance: 8, readValueFromPointer: Ae(c3, Q2), V: null });
      }, e: function(l3, c3, Q2, d3, m3) {
        c3 = BA(c3), m3 === -1 && (m3 = 4294967295), m3 = z2(Q2);
        var S3 = (M) => M;
        if (d3 === 0) {
          var N2 = 32 - 8 * Q2;
          S3 = (M) => M << N2 >>> N2;
        }
        Q2 = c3.includes("unsigned") ? function(M, U) {
          return U >>> 0;
        } : function(M, U) {
          return U;
        }, q2(l3, { name: c3, fromWireType: S3, toWireType: Q2, argPackAdvance: 8, readValueFromPointer: ge(c3, m3, d3 !== 0), V: null });
      }, b: function(l3, c3, Q2) {
        function d3(S3) {
          S3 >>= 2;
          var N2 = x3;
          return new m3(E2, N2[S3 + 1], N2[S3]);
        }
        var m3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][c3];
        Q2 = BA(Q2), q2(l3, { name: Q2, fromWireType: d3, argPackAdvance: 8, readValueFromPointer: d3 }, { ua: true });
      }, o: function(l3, c3) {
        c3 = BA(c3);
        var Q2 = c3 === "std::string";
        q2(l3, { name: c3, fromWireType: function(d3) {
          var m3 = x3[d3 >> 2], S3 = d3 + 4;
          if (Q2) for (var N2 = S3, M = 0; M <= m3; ++M) {
            var U = S3 + M;
            if (M == m3 || p2[U] == 0) {
              if (N2 = N2 ? f3(p2, N2, U - N2) : "", G2 === void 0) var G2 = N2;
              else G2 += String.fromCharCode(0), G2 += N2;
              N2 = U + 1;
            }
          }
          else {
            for (G2 = Array(m3), M = 0; M < m3; ++M) G2[M] = String.fromCharCode(p2[S3 + M]);
            G2 = G2.join("");
          }
          return Ge(d3), G2;
        }, toWireType: function(d3, m3) {
          m3 instanceof ArrayBuffer && (m3 = new Uint8Array(m3));
          var S3, N2 = typeof m3 == "string";
          if (N2 || m3 instanceof Uint8Array || m3 instanceof Uint8ClampedArray || m3 instanceof Int8Array || W("Cannot pass non-string to std::string"), Q2 && N2) {
            var M = 0;
            for (S3 = 0; S3 < m3.length; ++S3) {
              var U = m3.charCodeAt(S3);
              127 >= U ? M++ : 2047 >= U ? M += 2 : 55296 <= U && 57343 >= U ? (M += 4, ++S3) : M += 3;
            }
            S3 = M;
          } else S3 = m3.length;
          if (M = Pn(4 + S3 + 1), U = M + 4, x3[M >> 2] = S3, Q2 && N2) {
            if (N2 = U, U = S3 + 1, S3 = p2, 0 < U) {
              U = N2 + U - 1;
              for (var G2 = 0; G2 < m3.length; ++G2) {
                var O2 = m3.charCodeAt(G2);
                if (55296 <= O2 && 57343 >= O2) {
                  var Y = m3.charCodeAt(++G2);
                  O2 = 65536 + ((O2 & 1023) << 10) | Y & 1023;
                }
                if (127 >= O2) {
                  if (N2 >= U) break;
                  S3[N2++] = O2;
                } else {
                  if (2047 >= O2) {
                    if (N2 + 1 >= U) break;
                    S3[N2++] = 192 | O2 >> 6;
                  } else {
                    if (65535 >= O2) {
                      if (N2 + 2 >= U) break;
                      S3[N2++] = 224 | O2 >> 12;
                    } else {
                      if (N2 + 3 >= U) break;
                      S3[N2++] = 240 | O2 >> 18, S3[N2++] = 128 | O2 >> 12 & 63;
                    }
                    S3[N2++] = 128 | O2 >> 6 & 63;
                  }
                  S3[N2++] = 128 | O2 & 63;
                }
              }
              S3[N2] = 0;
            }
          } else if (N2) for (N2 = 0; N2 < S3; ++N2) G2 = m3.charCodeAt(N2), 255 < G2 && (Ge(U), W("String has UTF-16 code units that do not fit in 8 bits")), p2[U + N2] = G2;
          else for (N2 = 0; N2 < S3; ++N2) p2[U + N2] = m3[N2];
          return d3 !== null && d3.push(Ge, M), M;
        }, argPackAdvance: 8, readValueFromPointer: VA, V: function(d3) {
          Ge(d3);
        } });
      }, i: function(l3, c3, Q2) {
        if (Q2 = BA(Q2), c3 === 2) var d3 = ye, m3 = ZA, S3 = ue, N2 = () => k2, M = 1;
        else c3 === 4 && (d3 = Tt, m3 = ht, S3 = Hr, N2 = () => x3, M = 2);
        q2(l3, { name: Q2, fromWireType: function(U) {
          for (var G2 = x3[U >> 2], O2 = N2(), Y, nA = U + 4, MA = 0; MA <= G2; ++MA) {
            var uA = U + 4 + MA * c3;
            (MA == G2 || O2[uA >> M] == 0) && (nA = d3(nA, uA - nA), Y === void 0 ? Y = nA : (Y += String.fromCharCode(0), Y += nA), nA = uA + c3);
          }
          return Ge(U), Y;
        }, toWireType: function(U, G2) {
          typeof G2 != "string" && W("Cannot pass non-string to C++ string type " + Q2);
          var O2 = S3(G2), Y = Pn(4 + O2 + c3);
          return x3[Y >> 2] = O2 >> M, m3(G2, Y + 4, O2 + c3), U !== null && U.push(Ge, Y), Y;
        }, argPackAdvance: 8, readValueFromPointer: VA, V: function(U) {
          Ge(U);
        } });
      }, k: function(l3, c3, Q2, d3, m3, S3) {
        it[l3] = { name: BA(c3), fa: vA(Q2, d3), W: vA(m3, S3), ia: [] };
      }, h: function(l3, c3, Q2, d3, m3, S3, N2, M, U, G2) {
        it[l3].ia.push({ oa: BA(c3), ta: Q2, ra: vA(d3, m3), sa: S3, za: N2, ya: vA(M, U), Aa: G2 });
      }, C: function(l3, c3) {
        c3 = BA(c3), q2(l3, { va: true, name: c3, argPackAdvance: 0, fromWireType: function() {
        }, toWireType: function() {
        } });
      }, s: function(l3, c3, Q2, d3, m3) {
        l3 = Tr[l3], c3 = FA(c3), Q2 = Pt(Q2);
        var S3 = [];
        return x3[d3 >> 2] = xA(S3), l3(c3, Q2, S3, m3);
      }, t: function(l3, c3, Q2, d3) {
        l3 = Tr[l3], c3 = FA(c3), Q2 = Pt(Q2), l3(c3, Q2, null, d3);
      }, g: SA, m: function(l3, c3) {
        var Q2 = qI(l3, c3), d3 = Q2[0];
        c3 = d3.name + "_$" + Q2.slice(1).map(function(N2) {
          return N2.name;
        }).join("_") + "$";
        var m3 = ps[c3];
        if (m3 !== void 0) return m3;
        var S3 = Array(l3 - 1);
        return m3 = YI((N2, M, U, G2) => {
          for (var O2 = 0, Y = 0; Y < l3 - 1; ++Y) S3[Y] = Q2[Y + 1].readValueFromPointer(G2 + O2), O2 += Q2[Y + 1].argPackAdvance;
          for (N2 = N2[M].apply(N2, S3), Y = 0; Y < l3 - 1; ++Y) Q2[Y + 1].ma && Q2[Y + 1].ma(S3[Y]);
          if (!d3.va) return d3.toWireType(U, N2);
        }), ps[c3] = m3;
      }, D: function(l3) {
        4 < l3 && (V2[l3].ga += 1);
      }, r: function(l3) {
        var c3 = FA(l3);
        Ye(c3), SA(l3);
      }, c: function() {
        hA("");
      }, x: function(l3, c3, Q2) {
        p2.copyWithin(l3, c3, c3 + Q2);
      }, w: function(l3) {
        var c3 = p2.length;
        if (l3 >>>= 0, 2147483648 < l3) return false;
        for (var Q2 = 1; 4 >= Q2; Q2 *= 2) {
          var d3 = c3 * (1 + 0.2 / Q2);
          d3 = Math.min(d3, l3 + 100663296);
          var m3 = Math;
          d3 = Math.max(l3, d3), m3 = m3.min.call(m3, 2147483648, d3 + (65536 - d3 % 65536) % 65536);
          A: {
            try {
              I2.grow(m3 - E2.byteLength + 65535 >>> 16), R2();
              var S3 = 1;
              break A;
            } catch {
            }
            S3 = void 0;
          }
          if (S3) return true;
        }
        return false;
      }, z: function() {
        return 52;
      }, u: function() {
        return 70;
      }, y: function(l3, c3, Q2, d3) {
        for (var m3 = 0, S3 = 0; S3 < Q2; S3++) {
          var N2 = x3[c3 >> 2], M = x3[c3 + 4 >> 2];
          c3 += 8;
          for (var U = 0; U < M; U++) {
            var G2 = p2[N2 + U], O2 = XI[l3];
            G2 === 0 || G2 === 10 ? ((l3 === 1 ? s2 : a2)(f3(O2, 0)), O2.length = 0) : O2.push(G2);
          }
          m3 += M;
        }
        return x3[d3 >> 2] = m3, 0;
      } };
      ((function() {
        function l3(m3) {
          t2.asm = m3.exports, I2 = t2.asm.E, R2(), F = t2.asm.J, K3.unshift(t2.asm.F), iA--, t2.monitorRunDependencies && t2.monitorRunDependencies(iA), iA == 0 && (UA && (m3 = UA, UA = null, m3()));
        }
        function c3(m3) {
          l3(m3.instance);
        }
        function Q2(m3) {
          return Ce().then(function(S3) {
            return WebAssembly.instantiate(S3, d3);
          }).then(function(S3) {
            return S3;
          }).then(m3, function(S3) {
            a2("failed to asynchronously prepare wasm: " + S3), hA(S3);
          });
        }
        var d3 = { a: zI };
        if (iA++, t2.monitorRunDependencies && t2.monitorRunDependencies(iA), t2.instantiateWasm) try {
          return t2.instantiateWasm(d3, l3);
        } catch (m3) {
          a2("Module.instantiateWasm callback failed with error: " + m3), n2(m3);
        }
        return (function() {
          return g3 || typeof WebAssembly.instantiateStreaming != "function" || JA(CA) || typeof fetch != "function" ? Q2(c3) : fetch(CA, { credentials: "same-origin" }).then(function(m3) {
            return WebAssembly.instantiateStreaming(m3, d3).then(c3, function(S3) {
              return a2("wasm streaming compile failed: " + S3), a2("falling back to ArrayBuffer instantiation"), Q2(c3);
            });
          });
        })().catch(n2), {};
      }))(), t2.___wasm_call_ctors = function() {
        return (t2.___wasm_call_ctors = t2.asm.F).apply(null, arguments);
      };
      var ms = t2.___getTypeName = function() {
        return (ms = t2.___getTypeName = t2.asm.G).apply(null, arguments);
      };
      t2.__embind_initialize_bindings = function() {
        return (t2.__embind_initialize_bindings = t2.asm.H).apply(null, arguments);
      };
      var Pn = t2._malloc = function() {
        return (Pn = t2._malloc = t2.asm.I).apply(null, arguments);
      }, Ge = t2._free = function() {
        return (Ge = t2._free = t2.asm.K).apply(null, arguments);
      };
      t2.dynCall_jiji = function() {
        return (t2.dynCall_jiji = t2.asm.L).apply(null, arguments);
      };
      var _r;
      UA = function l3() {
        _r || ys(), _r || (UA = l3);
      };
      function ys() {
        function l3() {
          if (!_r && (_r = true, t2.calledRun = true, !B2)) {
            if (PA(K3), r2(t2), t2.onRuntimeInitialized && t2.onRuntimeInitialized(), t2.postRun) for (typeof t2.postRun == "function" && (t2.postRun = [t2.postRun]); t2.postRun.length; ) {
              var c3 = t2.postRun.shift();
              $2.unshift(c3);
            }
            PA($2);
          }
        }
        if (!(0 < iA)) {
          if (t2.preRun) for (typeof t2.preRun == "function" && (t2.preRun = [t2.preRun]); t2.preRun.length; ) lA();
          PA(J2), 0 < iA || (t2.setStatus ? (t2.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
              t2.setStatus("");
            }, 1), l3();
          }, 1)) : l3());
        }
      }
      if (t2.preInit) for (typeof t2.preInit == "function" && (t2.preInit = [t2.preInit]); 0 < t2.preInit.length; ) t2.preInit.pop()();
      return ys(), e2.ready;
    };
  })(), ml = hl;
});
async function $s(A2) {
  let { default: e2 } = await Promise.resolve().then(() => (js(), Zs));
  return $n(await e2(A2));
}
var Aa = st(() => {
  zs();
  Vr();
});
var Ai = {};
Kr(Ai, { getYoga: () => wl });
function wl() {
  return yl;
}
var yl;
var ei = st(() => {
  Aa();
  yl = $s();
});
var Fi = _((vi) => {
  Object.defineProperty(vi, "__esModule", { value: true });
  Object.defineProperty(vi, "default", { enumerable: true, get: () => of });
  function of(A2) {
    if (A2 = `${A2}`, A2 === "0") return "0";
    if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(A2)) return A2.replace(/^[+-]?/, (e2) => e2 === "-" ? "" : "-");
    if (A2.includes("var(") || A2.includes("calc(")) return `calc(${A2} * -1)`;
  }
});
var gg = _((Ni) => {
  Object.defineProperty(Ni, "__esModule", { value: true });
  Object.defineProperty(Ni, "default", { enumerable: true, get: () => sf });
  var sf = ["preflight", "container", "accessibility", "pointerEvents", "visibility", "position", "inset", "isolation", "zIndex", "order", "gridColumn", "gridColumnStart", "gridColumnEnd", "gridRow", "gridRowStart", "gridRowEnd", "float", "clear", "margin", "boxSizing", "display", "aspectRatio", "height", "maxHeight", "minHeight", "width", "minWidth", "maxWidth", "flex", "flexShrink", "flexGrow", "flexBasis", "tableLayout", "borderCollapse", "borderSpacing", "transformOrigin", "translate", "rotate", "skew", "scale", "transform", "animation", "cursor", "touchAction", "userSelect", "resize", "scrollSnapType", "scrollSnapAlign", "scrollSnapStop", "scrollMargin", "scrollPadding", "listStylePosition", "listStyleType", "appearance", "columns", "breakBefore", "breakInside", "breakAfter", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateColumns", "gridTemplateRows", "flexDirection", "flexWrap", "placeContent", "placeItems", "alignContent", "alignItems", "justifyContent", "justifyItems", "gap", "space", "divideWidth", "divideStyle", "divideColor", "divideOpacity", "placeSelf", "alignSelf", "justifySelf", "overflow", "overscrollBehavior", "scrollBehavior", "textOverflow", "whitespace", "wordBreak", "borderRadius", "borderWidth", "borderStyle", "borderColor", "borderOpacity", "backgroundColor", "backgroundOpacity", "backgroundImage", "gradientColorStops", "boxDecorationBreak", "backgroundSize", "backgroundAttachment", "backgroundClip", "backgroundPosition", "backgroundRepeat", "backgroundOrigin", "fill", "stroke", "strokeWidth", "objectFit", "objectPosition", "padding", "textAlign", "textIndent", "verticalAlign", "fontFamily", "fontSize", "fontWeight", "textTransform", "fontStyle", "fontVariantNumeric", "lineHeight", "letterSpacing", "textColor", "textOpacity", "textDecoration", "textDecorationColor", "textDecorationStyle", "textDecorationThickness", "textUnderlineOffset", "fontSmoothing", "placeholderColor", "placeholderOpacity", "caretColor", "accentColor", "opacity", "backgroundBlendMode", "mixBlendMode", "boxShadow", "boxShadowColor", "outlineStyle", "outlineWidth", "outlineOffset", "outlineColor", "ringWidth", "ringColor", "ringOpacity", "ringOffsetWidth", "ringOffsetColor", "blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia", "filter", "backdropBlur", "backdropBrightness", "backdropContrast", "backdropGrayscale", "backdropHueRotate", "backdropInvert", "backdropOpacity", "backdropSaturate", "backdropSepia", "backdropFilter", "transitionProperty", "transitionDelay", "transitionDuration", "transitionTimingFunction", "willChange", "content"];
});
var ug = _((Mi) => {
  Object.defineProperty(Mi, "__esModule", { value: true });
  Object.defineProperty(Mi, "default", { enumerable: true, get: () => af });
  function af(A2, e2) {
    return A2 === void 0 ? e2 : Array.isArray(A2) ? A2 : [...new Set(e2.filter((r2) => A2 !== false && A2[r2] !== false).concat(Object.keys(A2).filter((r2) => A2[r2] !== false)))];
  }
});
var Li = _((Fm, Ig) => {
  Ig.exports = { content: [], presets: [], darkMode: "media", theme: { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: ({ colors: A2 }) => ({ inherit: A2.inherit, current: A2.current, transparent: A2.transparent, black: A2.black, white: A2.white, slate: A2.slate, gray: A2.gray, zinc: A2.zinc, neutral: A2.neutral, stone: A2.stone, red: A2.red, orange: A2.orange, amber: A2.amber, yellow: A2.yellow, lime: A2.lime, green: A2.green, emerald: A2.emerald, teal: A2.teal, cyan: A2.cyan, sky: A2.sky, blue: A2.blue, indigo: A2.indigo, violet: A2.violet, purple: A2.purple, fuchsia: A2.fuchsia, pink: A2.pink, rose: A2.rose }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" }, backdropBlur: ({ theme: A2 }) => A2("blur"), backdropBrightness: ({ theme: A2 }) => A2("brightness"), backdropContrast: ({ theme: A2 }) => A2("contrast"), backdropGrayscale: ({ theme: A2 }) => A2("grayscale"), backdropHueRotate: ({ theme: A2 }) => A2("hueRotate"), backdropInvert: ({ theme: A2 }) => A2("invert"), backdropOpacity: ({ theme: A2 }) => A2("opacity"), backdropSaturate: ({ theme: A2 }) => A2("saturate"), backdropSepia: ({ theme: A2 }) => A2("sepia"), backgroundColor: ({ theme: A2 }) => A2("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: A2 }) => A2("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2" }, borderColor: ({ theme: A2 }) => ({ ...A2("colors"), DEFAULT: A2("colors.gray.200", "currentColor") }), borderOpacity: ({ theme: A2 }) => A2("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: A2 }) => ({ ...A2("spacing") }), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px" }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: A2 }) => A2("colors"), caretColor: ({ theme: A2 }) => A2("colors"), accentColor: ({ theme: A2 }) => ({ ...A2("colors"), auto: "auto" }), contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2" }, container: {}, content: { none: "none" }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: A2 }) => A2("borderColor"), divideOpacity: ({ theme: A2 }) => A2("borderOpacity"), divideWidth: ({ theme: A2 }) => A2("borderWidth"), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: A2 }) => A2("colors"), grayscale: { 0: "0", DEFAULT: "100%" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { 0: "0", DEFAULT: "100%" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: A2 }) => ({ auto: "auto", ...A2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%" }), flexGrow: { 0: "0", DEFAULT: "1" }, flexShrink: { 0: "0", DEFAULT: "1" }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: A2 }) => A2("spacing"), gradientColorStops: ({ theme: A2 }) => A2("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13" }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-full": "1 / -1" }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7" }, gridTemplateColumns: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))" }, gridTemplateRows: { none: "none", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))" }, height: ({ theme: A2 }) => ({ auto: "auto", ...A2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), inset: ({ theme: A2 }) => ({ auto: "auto", ...A2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, margin: ({ theme: A2 }) => ({ auto: "auto", ...A2("spacing") }), maxHeight: ({ theme: A2 }) => ({ ...A2("spacing"), full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }), maxWidth: ({ theme: A2, breakpoints: e2 }) => ({ none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e2(A2("screens")) }), minHeight: { 0: "0px", full: "100%", screen: "100vh", min: "min-content", max: "max-content", fit: "fit-content" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 20: "0.2", 25: "0.25", 30: "0.3", 40: "0.4", 50: "0.5", 60: "0.6", 70: "0.7", 75: "0.75", 80: "0.8", 90: "0.9", 95: "0.95", 100: "1" }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12" }, padding: ({ theme: A2 }) => A2("spacing"), placeholderColor: ({ theme: A2 }) => A2("colors"), placeholderOpacity: ({ theme: A2 }) => A2("opacity"), outlineColor: ({ theme: A2 }) => A2("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringColor: ({ theme: A2 }) => ({ DEFAULT: A2("colors.blue.500", "#3b82f6"), ...A2("colors") }), ringOffsetColor: ({ theme: A2 }) => A2("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, ringOpacity: ({ theme: A2 }) => ({ DEFAULT: "0.5", ...A2("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg" }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5" }, scrollMargin: ({ theme: A2 }) => ({ ...A2("spacing") }), scrollPadding: ({ theme: A2 }) => A2("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" }, space: ({ theme: A2 }) => ({ ...A2("spacing") }), stroke: ({ theme: A2 }) => A2("colors"), strokeWidth: { 0: "0", 1: "1", 2: "2" }, textColor: ({ theme: A2 }) => A2("colors"), textDecorationColor: ({ theme: A2 }) => A2("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" }, textIndent: ({ theme: A2 }) => ({ ...A2("spacing") }), textOpacity: ({ theme: A2 }) => A2("opacity"), transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionDuration: { DEFAULT: "150ms", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: A2 }) => ({ ...A2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%" }), width: ({ theme: A2 }) => ({ auto: "auto", ...A2("spacing"), "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", min: "min-content", max: "max-content", fit: "fit-content" }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50" } }, variantOrder: ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"], plugins: [] };
});
var hn = {};
Kr(hn, { default: () => gf });
var gf;
var mn = st(() => {
  gf = { info(A2, e2) {
    console.info(...Array.isArray(A2) ? [A2] : [e2, A2]);
  }, warn(A2, e2) {
    console.warn(...Array.isArray(A2) ? [A2] : [e2, A2]);
  }, risk(A2, e2) {
    console.error(...Array.isArray(A2) ? [A2] : [e2, A2]);
  } };
});
var lg = _((Gi) => {
  Object.defineProperty(Gi, "__esModule", { value: true });
  Object.defineProperty(Gi, "default", { enumerable: true, get: () => lf });
  var uf = If((mn(), Wr(hn)));
  function If(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function tr({ version: A2, from: e2, to: t2 }) {
    uf.default.warn(`${e2}-color-renamed`, [`As of Tailwind CSS ${A2}, \`${e2}\` has been renamed to \`${t2}\`.`, "Update your configuration file to silence this warning."]);
  }
  var lf = { inherit: "inherit", current: "currentColor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" }, get lightBlue() {
    return tr({ version: "v2.2", from: "lightBlue", to: "sky" }), this.sky;
  }, get warmGray() {
    return tr({ version: "v3.0", from: "warmGray", to: "stone" }), this.stone;
  }, get trueGray() {
    return tr({ version: "v3.0", from: "trueGray", to: "neutral" }), this.neutral;
  }, get coolGray() {
    return tr({ version: "v3.0", from: "coolGray", to: "gray" }), this.gray;
  }, get blueGray() {
    return tr({ version: "v3.0", from: "blueGray", to: "slate" }), this.slate;
  } };
});
var cg = _((Ui) => {
  Object.defineProperty(Ui, "__esModule", { value: true });
  Object.defineProperty(Ui, "defaults", { enumerable: true, get: () => cf });
  function cf(A2, ...e2) {
    for (let n2 of e2) {
      for (let i2 in n2) {
        var t2;
        !(A2 == null || (t2 = A2.hasOwnProperty) === null || t2 === void 0) && t2.call(A2, i2) || (A2[i2] = n2[i2]);
      }
      for (let i2 of Object.getOwnPropertySymbols(n2)) {
        var r2;
        !(A2 == null || (r2 = A2.hasOwnProperty) === null || r2 === void 0) && r2.call(A2, i2) || (A2[i2] = n2[i2]);
      }
    }
    return A2;
  }
});
var fg = _((Hi) => {
  Object.defineProperty(Hi, "__esModule", { value: true });
  Object.defineProperty(Hi, "toPath", { enumerable: true, get: () => ff });
  function ff(A2) {
    if (Array.isArray(A2)) return A2;
    let e2 = A2.split("[").length - 1, t2 = A2.split("]").length - 1;
    if (e2 !== t2) throw new Error(`Path is invalid. Has unbalanced brackets: ${A2}`);
    return A2.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
  }
});
var Eg = _((Oi) => {
  Object.defineProperty(Oi, "__esModule", { value: true });
  Object.defineProperty(Oi, "normalizeConfig", { enumerable: true, get: () => Ef });
  var rr = Bf((mn(), Wr(hn)));
  function Bg(A2) {
    if (typeof WeakMap != "function") return null;
    var e2 = /* @__PURE__ */ new WeakMap(), t2 = /* @__PURE__ */ new WeakMap();
    return (Bg = function(r2) {
      return r2 ? t2 : e2;
    })(A2);
  }
  function Bf(A2, e2) {
    if (A2 && A2.__esModule) return A2;
    if (A2 === null || typeof A2 != "object" && typeof A2 != "function") return { default: A2 };
    var t2 = Bg(e2);
    if (t2 && t2.has(A2)) return t2.get(A2);
    var r2 = {}, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i2 in A2) if (i2 !== "default" && Object.prototype.hasOwnProperty.call(A2, i2)) {
      var o2 = n2 ? Object.getOwnPropertyDescriptor(A2, i2) : null;
      o2 && (o2.get || o2.set) ? Object.defineProperty(r2, i2, o2) : r2[i2] = A2[i2];
    }
    return r2.default = A2, t2 && t2.set(A2, r2), r2;
  }
  function Ef(A2) {
    if ((() => {
      if (A2.purge || !A2.content || !Array.isArray(A2.content) && !(typeof A2.content == "object" && A2.content !== null)) return false;
      if (Array.isArray(A2.content)) return A2.content.every((r2) => typeof r2 == "string" ? true : !(typeof (r2 == null ? void 0 : r2.raw) != "string" || r2 != null && r2.extension && typeof (r2 == null ? void 0 : r2.extension) != "string"));
      if (typeof A2.content == "object" && A2.content !== null) {
        if (Object.keys(A2.content).some((r2) => !["files", "extract", "transform"].includes(r2))) return false;
        if (Array.isArray(A2.content.files)) {
          if (!A2.content.files.every((r2) => typeof r2 == "string" ? true : !(typeof (r2 == null ? void 0 : r2.raw) != "string" || r2 != null && r2.extension && typeof (r2 == null ? void 0 : r2.extension) != "string"))) return false;
          if (typeof A2.content.extract == "object") {
            for (let r2 of Object.values(A2.content.extract)) if (typeof r2 != "function") return false;
          } else if (!(A2.content.extract === void 0 || typeof A2.content.extract == "function")) return false;
          if (typeof A2.content.transform == "object") {
            for (let r2 of Object.values(A2.content.transform)) if (typeof r2 != "function") return false;
          } else if (!(A2.content.transform === void 0 || typeof A2.content.transform == "function")) return false;
        }
        return true;
      }
      return false;
    })() || rr.default.warn("purge-deprecation", ["The `purge`/`content` options have changed in Tailwind CSS v3.0.", "Update your configuration file to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"]), A2.safelist = (() => {
      var r2;
      let { content: n2, purge: i2, safelist: o2 } = A2;
      return Array.isArray(o2) ? o2 : Array.isArray(n2 == null ? void 0 : n2.safelist) ? n2.safelist : Array.isArray(i2 == null ? void 0 : i2.safelist) ? i2.safelist : Array.isArray(i2 == null || (r2 = i2.options) === null || r2 === void 0 ? void 0 : r2.safelist) ? i2.options.safelist : [];
    })(), typeof A2.prefix == "function") rr.default.warn("prefix-function", ["As of Tailwind CSS v3.0, `prefix` cannot be a function.", "Update `prefix` in your configuration to be a string to eliminate this warning.", "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"]), A2.prefix = "";
    else {
      var t2;
      A2.prefix = (t2 = A2.prefix) !== null && t2 !== void 0 ? t2 : "";
    }
    A2.content = { files: (() => {
      let { content: r2, purge: n2 } = A2;
      return Array.isArray(n2) ? n2 : Array.isArray(n2 == null ? void 0 : n2.content) ? n2.content : Array.isArray(r2) ? r2 : Array.isArray(r2 == null ? void 0 : r2.content) ? r2.content : Array.isArray(r2 == null ? void 0 : r2.files) ? r2.files : [];
    })(), extract: (() => {
      let r2 = (() => {
        var o2, s2, a2, g3, u4, I2, B2, f3, E2, C2;
        return !((o2 = A2.purge) === null || o2 === void 0) && o2.extract ? A2.purge.extract : !((s2 = A2.content) === null || s2 === void 0) && s2.extract ? A2.content.extract : !((a2 = A2.purge) === null || a2 === void 0 || (g3 = a2.extract) === null || g3 === void 0) && g3.DEFAULT ? A2.purge.extract.DEFAULT : !((u4 = A2.content) === null || u4 === void 0 || (I2 = u4.extract) === null || I2 === void 0) && I2.DEFAULT ? A2.content.extract.DEFAULT : !((B2 = A2.purge) === null || B2 === void 0 || (f3 = B2.options) === null || f3 === void 0) && f3.extractors ? A2.purge.options.extractors : !((E2 = A2.content) === null || E2 === void 0 || (C2 = E2.options) === null || C2 === void 0) && C2.extractors ? A2.content.options.extractors : {};
      })(), n2 = {}, i2 = (() => {
        var o2, s2, a2, g3;
        if (!((o2 = A2.purge) === null || o2 === void 0 || (s2 = o2.options) === null || s2 === void 0) && s2.defaultExtractor) return A2.purge.options.defaultExtractor;
        if (!((a2 = A2.content) === null || a2 === void 0 || (g3 = a2.options) === null || g3 === void 0) && g3.defaultExtractor) return A2.content.options.defaultExtractor;
      })();
      if (i2 !== void 0 && (n2.DEFAULT = i2), typeof r2 == "function") n2.DEFAULT = r2;
      else if (Array.isArray(r2)) for (let { extensions: o2, extractor: s2 } of r2 ?? []) for (let a2 of o2) n2[a2] = s2;
      else typeof r2 == "object" && r2 !== null && Object.assign(n2, r2);
      return n2;
    })(), transform: (() => {
      let r2 = (() => {
        var i2, o2, s2, a2, g3, u4;
        return !((i2 = A2.purge) === null || i2 === void 0) && i2.transform ? A2.purge.transform : !((o2 = A2.content) === null || o2 === void 0) && o2.transform ? A2.content.transform : !((s2 = A2.purge) === null || s2 === void 0 || (a2 = s2.transform) === null || a2 === void 0) && a2.DEFAULT ? A2.purge.transform.DEFAULT : !((g3 = A2.content) === null || g3 === void 0 || (u4 = g3.transform) === null || u4 === void 0) && u4.DEFAULT ? A2.content.transform.DEFAULT : {};
      })(), n2 = {};
      return typeof r2 == "function" && (n2.DEFAULT = r2), typeof r2 == "object" && r2 !== null && Object.assign(n2, r2), n2;
    })() };
    for (let r2 of A2.content.files) if (typeof r2 == "string" && /{([^,]*?)}/g.test(r2)) {
      rr.default.warn("invalid-glob-braces", [`The glob pattern ${(0, rr.dim)(r2)} in your Tailwind CSS configuration is invalid.`, `Update it to ${(0, rr.dim)(r2.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`]);
      break;
    }
    return A2;
  }
});
var Qg = _((Ti) => {
  Object.defineProperty(Ti, "__esModule", { value: true });
  Object.defineProperty(Ti, "default", { enumerable: true, get: () => Qf });
  function Qf(A2) {
    if (Object.prototype.toString.call(A2) !== "[object Object]") return false;
    let e2 = Object.getPrototypeOf(A2);
    return e2 === null || e2 === Object.prototype;
  }
});
var Cg = _((_i) => {
  Object.defineProperty(_i, "__esModule", { value: true });
  Object.defineProperty(_i, "cloneDeep", { enumerable: true, get: () => Pi });
  function Pi(A2) {
    return Array.isArray(A2) ? A2.map((e2) => Pi(e2)) : typeof A2 == "object" && A2 !== null ? Object.fromEntries(Object.entries(A2).map(([e2, t2]) => [e2, Pi(t2)])) : A2;
  }
});
var Ji = _((yn, dg) => {
  yn.__esModule = true;
  yn.default = pf;
  function Cf(A2) {
    for (var e2 = A2.toLowerCase(), t2 = "", r2 = false, n2 = 0; n2 < 6 && e2[n2] !== void 0; n2++) {
      var i2 = e2.charCodeAt(n2), o2 = i2 >= 97 && i2 <= 102 || i2 >= 48 && i2 <= 57;
      if (r2 = i2 === 32, !o2) break;
      t2 += e2[n2];
    }
    if (t2.length !== 0) {
      var s2 = parseInt(t2, 16), a2 = s2 >= 55296 && s2 <= 57343;
      return a2 || s2 === 0 || s2 > 1114111 ? ["\uFFFD", t2.length + (r2 ? 1 : 0)] : [String.fromCodePoint(s2), t2.length + (r2 ? 1 : 0)];
    }
  }
  var df = /\\/;
  function pf(A2) {
    var e2 = df.test(A2);
    if (!e2) return A2;
    for (var t2 = "", r2 = 0; r2 < A2.length; r2++) {
      if (A2[r2] === "\\") {
        var n2 = Cf(A2.slice(r2 + 1, r2 + 7));
        if (n2 !== void 0) {
          t2 += n2[0], r2 += n2[1];
          continue;
        }
        if (A2[r2 + 1] === "\\") {
          t2 += "\\", r2++;
          continue;
        }
        A2.length === r2 + 1 && (t2 += A2[r2]);
        continue;
      }
      t2 += A2[r2];
    }
    return t2;
  }
  dg.exports = yn.default;
});
var hg = _((wn, pg) => {
  wn.__esModule = true;
  wn.default = hf;
  function hf(A2) {
    for (var e2 = arguments.length, t2 = new Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++) t2[r2 - 1] = arguments[r2];
    for (; t2.length > 0; ) {
      var n2 = t2.shift();
      if (!A2[n2]) return;
      A2 = A2[n2];
    }
    return A2;
  }
  pg.exports = wn.default;
});
var yg = _((Dn, mg) => {
  Dn.__esModule = true;
  Dn.default = mf;
  function mf(A2) {
    for (var e2 = arguments.length, t2 = new Array(e2 > 1 ? e2 - 1 : 0), r2 = 1; r2 < e2; r2++) t2[r2 - 1] = arguments[r2];
    for (; t2.length > 0; ) {
      var n2 = t2.shift();
      A2[n2] || (A2[n2] = {}), A2 = A2[n2];
    }
  }
  mg.exports = Dn.default;
});
var Dg = _((bn, wg) => {
  bn.__esModule = true;
  bn.default = yf;
  function yf(A2) {
    for (var e2 = "", t2 = A2.indexOf("/*"), r2 = 0; t2 >= 0; ) {
      e2 = e2 + A2.slice(r2, t2);
      var n2 = A2.indexOf("*/", t2 + 2);
      if (n2 < 0) return e2;
      r2 = n2 + 2, t2 = A2.indexOf("/*", r2);
    }
    return e2 = e2 + A2.slice(r2), e2;
  }
  wg.exports = bn.default;
});
var nr = _((Fe) => {
  Fe.__esModule = true;
  Fe.stripComments = Fe.ensureObject = Fe.getProp = Fe.unesc = void 0;
  var wf = Sn(Ji());
  Fe.unesc = wf.default;
  var Df = Sn(hg());
  Fe.getProp = Df.default;
  var bf = Sn(yg());
  Fe.ensureObject = bf.default;
  var Sf = Sn(Dg());
  Fe.stripComments = Sf.default;
  function Sn(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
});
var Je = _((ir, kg) => {
  ir.__esModule = true;
  ir.default = void 0;
  var bg = nr();
  function Sg(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function kf(A2, e2, t2) {
    return e2 && Sg(A2.prototype, e2), A2;
  }
  var xf = function A2(e2, t2) {
    if (typeof e2 != "object" || e2 === null) return e2;
    var r2 = new e2.constructor();
    for (var n2 in e2) if (e2.hasOwnProperty(n2)) {
      var i2 = e2[n2], o2 = typeof i2;
      n2 === "parent" && o2 === "object" ? t2 && (r2[n2] = t2) : i2 instanceof Array ? r2[n2] = i2.map(function(s2) {
        return A2(s2, r2);
      }) : r2[n2] = A2(i2, r2);
    }
    return r2;
  }, Rf = (function() {
    function A2(t2) {
      t2 === void 0 && (t2 = {}), Object.assign(this, t2), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
    }
    var e2 = A2.prototype;
    return e2.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, e2.replaceWith = function() {
      if (this.parent) {
        for (var r2 in arguments) this.parent.insertBefore(this, arguments[r2]);
        this.remove();
      }
      return this;
    }, e2.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, e2.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, e2.clone = function(r2) {
      r2 === void 0 && (r2 = {});
      var n2 = xf(this);
      for (var i2 in r2) n2[i2] = r2[i2];
      return n2;
    }, e2.appendToPropertyAndEscape = function(r2, n2, i2) {
      this.raws || (this.raws = {});
      var o2 = this[r2], s2 = this.raws[r2];
      this[r2] = o2 + n2, s2 || i2 !== n2 ? this.raws[r2] = (s2 || o2) + i2 : delete this.raws[r2];
    }, e2.setPropertyAndEscape = function(r2, n2, i2) {
      this.raws || (this.raws = {}), this[r2] = n2, this.raws[r2] = i2;
    }, e2.setPropertyWithoutEscape = function(r2, n2) {
      this[r2] = n2, this.raws && delete this.raws[r2];
    }, e2.isAtPosition = function(r2, n2) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > r2 || this.source.end.line < r2 || this.source.start.line === r2 && this.source.start.column > n2 || this.source.end.line === r2 && this.source.end.column < n2);
    }, e2.stringifyProperty = function(r2) {
      return this.raws && this.raws[r2] || this[r2];
    }, e2.valueToString = function() {
      return String(this.stringifyProperty("value"));
    }, e2.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
    }, kf(A2, [{ key: "rawSpaceBefore", get: function() {
      var r2 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return r2 === void 0 && (r2 = this.spaces && this.spaces.before), r2 || "";
    }, set: function(r2) {
      (0, bg.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = r2;
    } }, { key: "rawSpaceAfter", get: function() {
      var r2 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return r2 === void 0 && (r2 = this.spaces.after), r2 || "";
    }, set: function(r2) {
      (0, bg.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = r2;
    } }]), A2;
  })();
  ir.default = Rf;
  kg.exports = ir.default;
});
var _A = _((EA) => {
  EA.__esModule = true;
  EA.UNIVERSAL = EA.ATTRIBUTE = EA.CLASS = EA.COMBINATOR = EA.COMMENT = EA.ID = EA.NESTING = EA.PSEUDO = EA.ROOT = EA.SELECTOR = EA.STRING = EA.TAG = void 0;
  var vf = "tag";
  EA.TAG = vf;
  var Ff = "string";
  EA.STRING = Ff;
  var Nf = "selector";
  EA.SELECTOR = Nf;
  var Mf = "root";
  EA.ROOT = Mf;
  var Lf = "pseudo";
  EA.PSEUDO = Lf;
  var Gf = "nesting";
  EA.NESTING = Gf;
  var Uf = "id";
  EA.ID = Uf;
  var Hf = "comment";
  EA.COMMENT = Hf;
  var Of = "combinator";
  EA.COMBINATOR = Of;
  var Tf = "class";
  EA.CLASS = Tf;
  var Pf = "attribute";
  EA.ATTRIBUTE = Pf;
  var _f = "universal";
  EA.UNIVERSAL = _f;
});
var kn = _((or, Fg) => {
  or.__esModule = true;
  or.default = void 0;
  var Jf = Wf(Je()), Ke = Kf(_A());
  function vg() {
    if (typeof WeakMap != "function") return null;
    var A2 = /* @__PURE__ */ new WeakMap();
    return vg = function() {
      return A2;
    }, A2;
  }
  function Kf(A2) {
    if (A2 && A2.__esModule) return A2;
    if (A2 === null || typeof A2 != "object" && typeof A2 != "function") return { default: A2 };
    var e2 = vg();
    if (e2 && e2.has(A2)) return e2.get(A2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n2 in A2) if (Object.prototype.hasOwnProperty.call(A2, n2)) {
      var i2 = r2 ? Object.getOwnPropertyDescriptor(A2, n2) : null;
      i2 && (i2.get || i2.set) ? Object.defineProperty(t2, n2, i2) : t2[n2] = A2[n2];
    }
    return t2.default = A2, e2 && e2.set(A2, t2), t2;
  }
  function Wf(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function Yf(A2, e2) {
    var t2;
    if (typeof Symbol > "u" || A2[Symbol.iterator] == null) {
      if (Array.isArray(A2) || (t2 = qf(A2)) || e2) {
        t2 && (A2 = t2);
        var r2 = 0;
        return function() {
          return r2 >= A2.length ? { done: true } : { done: false, value: A2[r2++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    return t2 = A2[Symbol.iterator](), t2.next.bind(t2);
  }
  function qf(A2, e2) {
    if (A2) {
      if (typeof A2 == "string") return xg(A2, e2);
      var t2 = Object.prototype.toString.call(A2).slice(8, -1);
      if (t2 === "Object" && A2.constructor && (t2 = A2.constructor.name), t2 === "Map" || t2 === "Set") return Array.from(A2);
      if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2)) return xg(A2, e2);
    }
  }
  function xg(A2, e2) {
    (e2 == null || e2 > A2.length) && (e2 = A2.length);
    for (var t2 = 0, r2 = new Array(e2); t2 < e2; t2++) r2[t2] = A2[t2];
    return r2;
  }
  function Rg(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function Xf(A2, e2, t2) {
    return e2 && Rg(A2.prototype, e2), A2;
  }
  function Vf(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, Ki(A2, e2);
  }
  function Ki(A2, e2) {
    return Ki = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, Ki(A2, e2);
  }
  var zf = (function(A2) {
    Vf(e2, A2);
    function e2(r2) {
      var n2;
      return n2 = A2.call(this, r2) || this, n2.nodes || (n2.nodes = []), n2;
    }
    var t2 = e2.prototype;
    return t2.append = function(n2) {
      return n2.parent = this, this.nodes.push(n2), this;
    }, t2.prepend = function(n2) {
      return n2.parent = this, this.nodes.unshift(n2), this;
    }, t2.at = function(n2) {
      return this.nodes[n2];
    }, t2.index = function(n2) {
      return typeof n2 == "number" ? n2 : this.nodes.indexOf(n2);
    }, t2.removeChild = function(n2) {
      n2 = this.index(n2), this.at(n2).parent = void 0, this.nodes.splice(n2, 1);
      var i2;
      for (var o2 in this.indexes) i2 = this.indexes[o2], i2 >= n2 && (this.indexes[o2] = i2 - 1);
      return this;
    }, t2.removeAll = function() {
      for (var n2 = Yf(this.nodes), i2; !(i2 = n2()).done; ) {
        var o2 = i2.value;
        o2.parent = void 0;
      }
      return this.nodes = [], this;
    }, t2.empty = function() {
      return this.removeAll();
    }, t2.insertAfter = function(n2, i2) {
      i2.parent = this;
      var o2 = this.index(n2);
      this.nodes.splice(o2 + 1, 0, i2), i2.parent = this;
      var s2;
      for (var a2 in this.indexes) s2 = this.indexes[a2], o2 <= s2 && (this.indexes[a2] = s2 + 1);
      return this;
    }, t2.insertBefore = function(n2, i2) {
      i2.parent = this;
      var o2 = this.index(n2);
      this.nodes.splice(o2, 0, i2), i2.parent = this;
      var s2;
      for (var a2 in this.indexes) s2 = this.indexes[a2], s2 <= o2 && (this.indexes[a2] = s2 + 1);
      return this;
    }, t2._findChildAtPosition = function(n2, i2) {
      var o2 = void 0;
      return this.each(function(s2) {
        if (s2.atPosition) {
          var a2 = s2.atPosition(n2, i2);
          if (a2) return o2 = a2, false;
        } else if (s2.isAtPosition(n2, i2)) return o2 = s2, false;
      }), o2;
    }, t2.atPosition = function(n2, i2) {
      if (this.isAtPosition(n2, i2)) return this._findChildAtPosition(n2, i2) || this;
    }, t2._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, t2.each = function(n2) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var i2 = this.lastEach;
      if (this.indexes[i2] = 0, !!this.length) {
        for (var o2, s2; this.indexes[i2] < this.length && (o2 = this.indexes[i2], s2 = n2(this.at(o2), o2), s2 !== false); ) this.indexes[i2] += 1;
        if (delete this.indexes[i2], s2 === false) return false;
      }
    }, t2.walk = function(n2) {
      return this.each(function(i2, o2) {
        var s2 = n2(i2, o2);
        if (s2 !== false && i2.length && (s2 = i2.walk(n2)), s2 === false) return false;
      });
    }, t2.walkAttributes = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.ATTRIBUTE) return n2.call(i2, o2);
      });
    }, t2.walkClasses = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.CLASS) return n2.call(i2, o2);
      });
    }, t2.walkCombinators = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.COMBINATOR) return n2.call(i2, o2);
      });
    }, t2.walkComments = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.COMMENT) return n2.call(i2, o2);
      });
    }, t2.walkIds = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.ID) return n2.call(i2, o2);
      });
    }, t2.walkNesting = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.NESTING) return n2.call(i2, o2);
      });
    }, t2.walkPseudos = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.PSEUDO) return n2.call(i2, o2);
      });
    }, t2.walkTags = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.TAG) return n2.call(i2, o2);
      });
    }, t2.walkUniversals = function(n2) {
      var i2 = this;
      return this.walk(function(o2) {
        if (o2.type === Ke.UNIVERSAL) return n2.call(i2, o2);
      });
    }, t2.split = function(n2) {
      var i2 = this, o2 = [];
      return this.reduce(function(s2, a2, g3) {
        var u4 = n2.call(i2, a2);
        return o2.push(a2), u4 ? (s2.push(o2), o2 = []) : g3 === i2.length - 1 && s2.push(o2), s2;
      }, []);
    }, t2.map = function(n2) {
      return this.nodes.map(n2);
    }, t2.reduce = function(n2, i2) {
      return this.nodes.reduce(n2, i2);
    }, t2.every = function(n2) {
      return this.nodes.every(n2);
    }, t2.some = function(n2) {
      return this.nodes.some(n2);
    }, t2.filter = function(n2) {
      return this.nodes.filter(n2);
    }, t2.sort = function(n2) {
      return this.nodes.sort(n2);
    }, t2.toString = function() {
      return this.map(String).join("");
    }, Xf(e2, [{ key: "first", get: function() {
      return this.at(0);
    } }, { key: "last", get: function() {
      return this.at(this.length - 1);
    } }, { key: "length", get: function() {
      return this.nodes.length;
    } }]), e2;
  })(Jf.default);
  or.default = zf;
  Fg.exports = or.default;
});
var Yi = _((sr, Mg) => {
  sr.__esModule = true;
  sr.default = void 0;
  var Zf = $f(kn()), jf = _A();
  function $f(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function Ng(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function AB(A2, e2, t2) {
    return e2 && Ng(A2.prototype, e2), A2;
  }
  function eB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, Wi(A2, e2);
  }
  function Wi(A2, e2) {
    return Wi = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, Wi(A2, e2);
  }
  var tB = (function(A2) {
    eB(e2, A2);
    function e2(r2) {
      var n2;
      return n2 = A2.call(this, r2) || this, n2.type = jf.ROOT, n2;
    }
    var t2 = e2.prototype;
    return t2.toString = function() {
      var n2 = this.reduce(function(i2, o2) {
        return i2.push(String(o2)), i2;
      }, []).join(",");
      return this.trailingComma ? n2 + "," : n2;
    }, t2.error = function(n2, i2) {
      return this._error ? this._error(n2, i2) : new Error(n2);
    }, AB(e2, [{ key: "errorGenerator", set: function(n2) {
      this._error = n2;
    } }]), e2;
  })(Zf.default);
  sr.default = tB;
  Mg.exports = sr.default;
});
var Xi = _((ar, Lg) => {
  ar.__esModule = true;
  ar.default = void 0;
  var rB = iB(kn()), nB = _A();
  function iB(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function oB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, qi(A2, e2);
  }
  function qi(A2, e2) {
    return qi = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, qi(A2, e2);
  }
  var sB = (function(A2) {
    oB(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = nB.SELECTOR, r2;
    }
    return e2;
  })(rB.default);
  ar.default = sB;
  Lg.exports = ar.default;
});
var xn = _((Pm, Gg) => {
  var aB = {}, gB = aB.hasOwnProperty, uB = function(e2, t2) {
    if (!e2) return t2;
    var r2 = {};
    for (var n2 in t2) r2[n2] = gB.call(e2, n2) ? e2[n2] : t2[n2];
    return r2;
  }, IB = /[ -,\.\/:-@\[-\^`\{-~]/, lB = /[ -,\.\/:-@\[\]\^`\{-~]/, cB = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, Vi = function A2(e2, t2) {
    t2 = uB(t2, A2.options), t2.quotes != "single" && t2.quotes != "double" && (t2.quotes = "single");
    for (var r2 = t2.quotes == "double" ? '"' : "'", n2 = t2.isIdentifier, i2 = e2.charAt(0), o2 = "", s2 = 0, a2 = e2.length; s2 < a2; ) {
      var g3 = e2.charAt(s2++), u4 = g3.charCodeAt(), I2 = void 0;
      if (u4 < 32 || u4 > 126) {
        if (u4 >= 55296 && u4 <= 56319 && s2 < a2) {
          var B2 = e2.charCodeAt(s2++);
          (B2 & 64512) == 56320 ? u4 = ((u4 & 1023) << 10) + (B2 & 1023) + 65536 : s2--;
        }
        I2 = "\\" + u4.toString(16).toUpperCase() + " ";
      } else t2.escapeEverything ? IB.test(g3) ? I2 = "\\" + g3 : I2 = "\\" + u4.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(g3) ? I2 = "\\" + u4.toString(16).toUpperCase() + " " : g3 == "\\" || !n2 && (g3 == '"' && r2 == g3 || g3 == "'" && r2 == g3) || n2 && lB.test(g3) ? I2 = "\\" + g3 : I2 = g3;
      o2 += I2;
    }
    return n2 && (/^-[-\d]/.test(o2) ? o2 = "\\-" + o2.slice(1) : /\d/.test(i2) && (o2 = "\\3" + i2 + " " + o2.slice(1))), o2 = o2.replace(cB, function(f3, E2, C2) {
      return E2 && E2.length % 2 ? f3 : (E2 || "") + C2;
    }), !n2 && t2.wrap ? r2 + o2 + r2 : o2;
  };
  Vi.options = { escapeEverything: false, isIdentifier: false, quotes: "single", wrap: false };
  Vi.version = "3.0.0";
  Gg.exports = Vi;
});
var Zi = _((gr, Og) => {
  gr.__esModule = true;
  gr.default = void 0;
  var fB = Hg(xn()), BB = nr(), EB = Hg(Je()), QB = _A();
  function Hg(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function Ug(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function CB(A2, e2, t2) {
    return e2 && Ug(A2.prototype, e2), A2;
  }
  function dB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, zi(A2, e2);
  }
  function zi(A2, e2) {
    return zi = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, zi(A2, e2);
  }
  var pB = (function(A2) {
    dB(e2, A2);
    function e2(r2) {
      var n2;
      return n2 = A2.call(this, r2) || this, n2.type = QB.CLASS, n2._constructed = true, n2;
    }
    var t2 = e2.prototype;
    return t2.valueToString = function() {
      return "." + A2.prototype.valueToString.call(this);
    }, CB(e2, [{ key: "value", get: function() {
      return this._value;
    }, set: function(n2) {
      if (this._constructed) {
        var i2 = (0, fB.default)(n2, { isIdentifier: true });
        i2 !== n2 ? ((0, BB.ensureObject)(this, "raws"), this.raws.value = i2) : this.raws && delete this.raws.value;
      }
      this._value = n2;
    } }]), e2;
  })(EB.default);
  gr.default = pB;
  Og.exports = gr.default;
});
var $i = _((ur, Tg) => {
  ur.__esModule = true;
  ur.default = void 0;
  var hB = yB(Je()), mB = _A();
  function yB(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function wB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, ji(A2, e2);
  }
  function ji(A2, e2) {
    return ji = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, ji(A2, e2);
  }
  var DB = (function(A2) {
    wB(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = mB.COMMENT, r2;
    }
    return e2;
  })(hB.default);
  ur.default = DB;
  Tg.exports = ur.default;
});
var eo = _((Ir, Pg) => {
  Ir.__esModule = true;
  Ir.default = void 0;
  var bB = kB(Je()), SB = _A();
  function kB(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function xB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, Ao(A2, e2);
  }
  function Ao(A2, e2) {
    return Ao = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, Ao(A2, e2);
  }
  var RB = (function(A2) {
    xB(e2, A2);
    function e2(r2) {
      var n2;
      return n2 = A2.call(this, r2) || this, n2.type = SB.ID, n2;
    }
    var t2 = e2.prototype;
    return t2.valueToString = function() {
      return "#" + A2.prototype.valueToString.call(this);
    }, e2;
  })(bB.default);
  Ir.default = RB;
  Pg.exports = Ir.default;
});
var Rn = _((lr, Kg) => {
  lr.__esModule = true;
  lr.default = void 0;
  var vB = Jg(xn()), FB = nr(), NB = Jg(Je());
  function Jg(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function _g(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function MB(A2, e2, t2) {
    return e2 && _g(A2.prototype, e2), A2;
  }
  function LB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, to(A2, e2);
  }
  function to(A2, e2) {
    return to = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, to(A2, e2);
  }
  var GB = (function(A2) {
    LB(e2, A2);
    function e2() {
      return A2.apply(this, arguments) || this;
    }
    var t2 = e2.prototype;
    return t2.qualifiedName = function(n2) {
      return this.namespace ? this.namespaceString + "|" + n2 : n2;
    }, t2.valueToString = function() {
      return this.qualifiedName(A2.prototype.valueToString.call(this));
    }, MB(e2, [{ key: "namespace", get: function() {
      return this._namespace;
    }, set: function(n2) {
      if (n2 === true || n2 === "*" || n2 === "&") {
        this._namespace = n2, this.raws && delete this.raws.namespace;
        return;
      }
      var i2 = (0, vB.default)(n2, { isIdentifier: true });
      this._namespace = n2, i2 !== n2 ? ((0, FB.ensureObject)(this, "raws"), this.raws.namespace = i2) : this.raws && delete this.raws.namespace;
    } }, { key: "ns", get: function() {
      return this._namespace;
    }, set: function(n2) {
      this.namespace = n2;
    } }, { key: "namespaceString", get: function() {
      if (this.namespace) {
        var n2 = this.stringifyProperty("namespace");
        return n2 === true ? "" : n2;
      } else return "";
    } }]), e2;
  })(NB.default);
  lr.default = GB;
  Kg.exports = lr.default;
});
var no = _((cr, Wg) => {
  cr.__esModule = true;
  cr.default = void 0;
  var UB = OB(Rn()), HB = _A();
  function OB(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function TB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, ro(A2, e2);
  }
  function ro(A2, e2) {
    return ro = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, ro(A2, e2);
  }
  var PB = (function(A2) {
    TB(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = HB.TAG, r2;
    }
    return e2;
  })(UB.default);
  cr.default = PB;
  Wg.exports = cr.default;
});
var oo = _((fr, Yg) => {
  fr.__esModule = true;
  fr.default = void 0;
  var _B = KB(Je()), JB = _A();
  function KB(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function WB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, io(A2, e2);
  }
  function io(A2, e2) {
    return io = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, io(A2, e2);
  }
  var YB = (function(A2) {
    WB(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = JB.STRING, r2;
    }
    return e2;
  })(_B.default);
  fr.default = YB;
  Yg.exports = fr.default;
});
var ao = _((Br, qg) => {
  Br.__esModule = true;
  Br.default = void 0;
  var qB = VB(kn()), XB = _A();
  function VB(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function zB(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, so(A2, e2);
  }
  function so(A2, e2) {
    return so = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, so(A2, e2);
  }
  var ZB = (function(A2) {
    zB(e2, A2);
    function e2(r2) {
      var n2;
      return n2 = A2.call(this, r2) || this, n2.type = XB.PSEUDO, n2;
    }
    var t2 = e2.prototype;
    return t2.toString = function() {
      var n2 = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.rawSpaceBefore, this.stringifyProperty("value"), n2, this.rawSpaceAfter].join("");
    }, e2;
  })(qB.default);
  Br.default = ZB;
  qg.exports = Br.default;
});
var Vg = _((_m, Xg) => {
  Xg.exports = function(e2, t2) {
    return function(...r2) {
      return console.warn(t2), e2(...r2);
    };
  };
});
var fo = _((Cr) => {
  Cr.__esModule = true;
  Cr.unescapeValue = co;
  Cr.default = void 0;
  var Er = lo(xn()), jB = lo(Ji()), $B = lo(Rn()), AE = _A(), go;
  function lo(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function zg(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function eE(A2, e2, t2) {
    return e2 && zg(A2.prototype, e2), A2;
  }
  function tE(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, Io(A2, e2);
  }
  function Io(A2, e2) {
    return Io = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, Io(A2, e2);
  }
  var Qr = Vg(), rE = /^('|")([^]*)\1$/, nE = Qr(function() {
  }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), iE = Qr(function() {
  }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), oE = Qr(function() {
  }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
  function co(A2) {
    var e2 = false, t2 = null, r2 = A2, n2 = r2.match(rE);
    return n2 && (t2 = n2[1], r2 = n2[2]), r2 = (0, jB.default)(r2), r2 !== A2 && (e2 = true), { deprecatedUsage: e2, unescaped: r2, quoteMark: t2 };
  }
  function sE(A2) {
    if (A2.quoteMark !== void 0 || A2.value === void 0) return A2;
    oE();
    var e2 = co(A2.value), t2 = e2.quoteMark, r2 = e2.unescaped;
    return A2.raws || (A2.raws = {}), A2.raws.value === void 0 && (A2.raws.value = A2.value), A2.value = r2, A2.quoteMark = t2, A2;
  }
  var vn = (function(A2) {
    tE(e2, A2);
    function e2(r2) {
      var n2;
      return r2 === void 0 && (r2 = {}), n2 = A2.call(this, sE(r2)) || this, n2.type = AE.ATTRIBUTE, n2.raws = n2.raws || {}, Object.defineProperty(n2.raws, "unquoted", { get: Qr(function() {
        return n2.value;
      }, "attr.raws.unquoted is deprecated. Call attr.value instead."), set: Qr(function() {
        return n2.value;
      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.") }), n2._constructed = true, n2;
    }
    var t2 = e2.prototype;
    return t2.getQuotedValue = function(n2) {
      n2 === void 0 && (n2 = {});
      var i2 = this._determineQuoteMark(n2), o2 = uo[i2], s2 = (0, Er.default)(this._value, o2);
      return s2;
    }, t2._determineQuoteMark = function(n2) {
      return n2.smart ? this.smartQuoteMark(n2) : this.preferredQuoteMark(n2);
    }, t2.setValue = function(n2, i2) {
      i2 === void 0 && (i2 = {}), this._value = n2, this._quoteMark = this._determineQuoteMark(i2), this._syncRawValue();
    }, t2.smartQuoteMark = function(n2) {
      var i2 = this.value, o2 = i2.replace(/[^']/g, "").length, s2 = i2.replace(/[^"]/g, "").length;
      if (o2 + s2 === 0) {
        var a2 = (0, Er.default)(i2, { isIdentifier: true });
        if (a2 === i2) return e2.NO_QUOTE;
        var g3 = this.preferredQuoteMark(n2);
        if (g3 === e2.NO_QUOTE) {
          var u4 = this.quoteMark || n2.quoteMark || e2.DOUBLE_QUOTE, I2 = uo[u4], B2 = (0, Er.default)(i2, I2);
          if (B2.length < a2.length) return u4;
        }
        return g3;
      } else return s2 === o2 ? this.preferredQuoteMark(n2) : s2 < o2 ? e2.DOUBLE_QUOTE : e2.SINGLE_QUOTE;
    }, t2.preferredQuoteMark = function(n2) {
      var i2 = n2.preferCurrentQuoteMark ? this.quoteMark : n2.quoteMark;
      return i2 === void 0 && (i2 = n2.preferCurrentQuoteMark ? n2.quoteMark : this.quoteMark), i2 === void 0 && (i2 = e2.DOUBLE_QUOTE), i2;
    }, t2._syncRawValue = function() {
      var n2 = (0, Er.default)(this._value, uo[this.quoteMark]);
      n2 === this._value ? this.raws && delete this.raws.value : this.raws.value = n2;
    }, t2._handleEscapes = function(n2, i2) {
      if (this._constructed) {
        var o2 = (0, Er.default)(i2, { isIdentifier: true });
        o2 !== i2 ? this.raws[n2] = o2 : delete this.raws[n2];
      }
    }, t2._spacesFor = function(n2) {
      var i2 = { before: "", after: "" }, o2 = this.spaces[n2] || {}, s2 = this.raws.spaces && this.raws.spaces[n2] || {};
      return Object.assign(i2, o2, s2);
    }, t2._stringFor = function(n2, i2, o2) {
      i2 === void 0 && (i2 = n2), o2 === void 0 && (o2 = Zg);
      var s2 = this._spacesFor(i2);
      return o2(this.stringifyProperty(n2), s2);
    }, t2.offsetOf = function(n2) {
      var i2 = 1, o2 = this._spacesFor("attribute");
      if (i2 += o2.before.length, n2 === "namespace" || n2 === "ns") return this.namespace ? i2 : -1;
      if (n2 === "attributeNS" || (i2 += this.namespaceString.length, this.namespace && (i2 += 1), n2 === "attribute")) return i2;
      i2 += this.stringifyProperty("attribute").length, i2 += o2.after.length;
      var s2 = this._spacesFor("operator");
      i2 += s2.before.length;
      var a2 = this.stringifyProperty("operator");
      if (n2 === "operator") return a2 ? i2 : -1;
      i2 += a2.length, i2 += s2.after.length;
      var g3 = this._spacesFor("value");
      i2 += g3.before.length;
      var u4 = this.stringifyProperty("value");
      if (n2 === "value") return u4 ? i2 : -1;
      i2 += u4.length, i2 += g3.after.length;
      var I2 = this._spacesFor("insensitive");
      return i2 += I2.before.length, n2 === "insensitive" && this.insensitive ? i2 : -1;
    }, t2.toString = function() {
      var n2 = this, i2 = [this.rawSpaceBefore, "["];
      return i2.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (i2.push(this._stringFor("operator")), i2.push(this._stringFor("value")), i2.push(this._stringFor("insensitiveFlag", "insensitive", function(o2, s2) {
        return o2.length > 0 && !n2.quoted && s2.before.length === 0 && !(n2.spaces.value && n2.spaces.value.after) && (s2.before = " "), Zg(o2, s2);
      }))), i2.push("]"), i2.push(this.rawSpaceAfter), i2.join("");
    }, eE(e2, [{ key: "quoted", get: function() {
      var n2 = this.quoteMark;
      return n2 === "'" || n2 === '"';
    }, set: function(n2) {
      iE();
    } }, { key: "quoteMark", get: function() {
      return this._quoteMark;
    }, set: function(n2) {
      if (!this._constructed) {
        this._quoteMark = n2;
        return;
      }
      this._quoteMark !== n2 && (this._quoteMark = n2, this._syncRawValue());
    } }, { key: "qualifiedAttribute", get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: "insensitiveFlag", get: function() {
      return this.insensitive ? "i" : "";
    } }, { key: "value", get: function() {
      return this._value;
    }, set: function(n2) {
      if (this._constructed) {
        var i2 = co(n2), o2 = i2.deprecatedUsage, s2 = i2.unescaped, a2 = i2.quoteMark;
        if (o2 && nE(), s2 === this._value && a2 === this._quoteMark) return;
        this._value = s2, this._quoteMark = a2, this._syncRawValue();
      } else this._value = n2;
    } }, { key: "attribute", get: function() {
      return this._attribute;
    }, set: function(n2) {
      this._handleEscapes("attribute", n2), this._attribute = n2;
    } }]), e2;
  })($B.default);
  Cr.default = vn;
  vn.NO_QUOTE = null;
  vn.SINGLE_QUOTE = "'";
  vn.DOUBLE_QUOTE = '"';
  var uo = (go = { "'": { quotes: "single", wrap: true }, '"': { quotes: "double", wrap: true } }, go[null] = { isIdentifier: true }, go);
  function Zg(A2, e2) {
    return "" + e2.before + A2 + e2.after;
  }
});
var Eo = _((dr, jg) => {
  dr.__esModule = true;
  dr.default = void 0;
  var aE = uE(Rn()), gE = _A();
  function uE(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function IE(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, Bo(A2, e2);
  }
  function Bo(A2, e2) {
    return Bo = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, Bo(A2, e2);
  }
  var lE = (function(A2) {
    IE(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = gE.UNIVERSAL, r2.value = "*", r2;
    }
    return e2;
  })(aE.default);
  dr.default = lE;
  jg.exports = dr.default;
});
var Co = _((pr, $g) => {
  pr.__esModule = true;
  pr.default = void 0;
  var cE = BE(Je()), fE = _A();
  function BE(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function EE(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, Qo(A2, e2);
  }
  function Qo(A2, e2) {
    return Qo = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, Qo(A2, e2);
  }
  var QE = (function(A2) {
    EE(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = fE.COMBINATOR, r2;
    }
    return e2;
  })(cE.default);
  pr.default = QE;
  $g.exports = pr.default;
});
var ho = _((hr, Au) => {
  hr.__esModule = true;
  hr.default = void 0;
  var CE = pE(Je()), dE = _A();
  function pE(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function hE(A2, e2) {
    A2.prototype = Object.create(e2.prototype), A2.prototype.constructor = A2, po(A2, e2);
  }
  function po(A2, e2) {
    return po = Object.setPrototypeOf || function(r2, n2) {
      return r2.__proto__ = n2, r2;
    }, po(A2, e2);
  }
  var mE = (function(A2) {
    hE(e2, A2);
    function e2(t2) {
      var r2;
      return r2 = A2.call(this, t2) || this, r2.type = dE.NESTING, r2.value = "&", r2;
    }
    return e2;
  })(CE.default);
  hr.default = mE;
  Au.exports = hr.default;
});
var tu = _((Fn, eu) => {
  Fn.__esModule = true;
  Fn.default = yE;
  function yE(A2) {
    return A2.sort(function(e2, t2) {
      return e2 - t2;
    });
  }
  eu.exports = Fn.default;
});
var mo = _((P3) => {
  P3.__esModule = true;
  P3.combinator = P3.word = P3.comment = P3.str = P3.tab = P3.newline = P3.feed = P3.cr = P3.backslash = P3.bang = P3.slash = P3.doubleQuote = P3.singleQuote = P3.space = P3.greaterThan = P3.pipe = P3.equals = P3.plus = P3.caret = P3.tilde = P3.dollar = P3.closeSquare = P3.openSquare = P3.closeParenthesis = P3.openParenthesis = P3.semicolon = P3.colon = P3.comma = P3.at = P3.asterisk = P3.ampersand = void 0;
  var wE = 38;
  P3.ampersand = wE;
  var DE = 42;
  P3.asterisk = DE;
  var bE = 64;
  P3.at = bE;
  var SE = 44;
  P3.comma = SE;
  var kE = 58;
  P3.colon = kE;
  var xE = 59;
  P3.semicolon = xE;
  var RE = 40;
  P3.openParenthesis = RE;
  var vE = 41;
  P3.closeParenthesis = vE;
  var FE = 91;
  P3.openSquare = FE;
  var NE = 93;
  P3.closeSquare = NE;
  var ME = 36;
  P3.dollar = ME;
  var LE = 126;
  P3.tilde = LE;
  var GE = 94;
  P3.caret = GE;
  var UE = 43;
  P3.plus = UE;
  var HE = 61;
  P3.equals = HE;
  var OE = 124;
  P3.pipe = OE;
  var TE = 62;
  P3.greaterThan = TE;
  var PE = 32;
  P3.space = PE;
  var ru = 39;
  P3.singleQuote = ru;
  var _E = 34;
  P3.doubleQuote = _E;
  var JE = 47;
  P3.slash = JE;
  var KE = 33;
  P3.bang = KE;
  var WE = 92;
  P3.backslash = WE;
  var YE = 13;
  P3.cr = YE;
  var qE = 12;
  P3.feed = qE;
  var XE = 10;
  P3.newline = XE;
  var VE = 9;
  P3.tab = VE;
  var zE = ru;
  P3.str = zE;
  var ZE = -1;
  P3.comment = ZE;
  var jE = -2;
  P3.word = jE;
  var $E = -3;
  P3.combinator = $E;
});
var ou = _((mr) => {
  mr.__esModule = true;
  mr.default = oQ;
  mr.FIELDS = void 0;
  var H2 = AQ(mo()), Ft, fA;
  function iu() {
    if (typeof WeakMap != "function") return null;
    var A2 = /* @__PURE__ */ new WeakMap();
    return iu = function() {
      return A2;
    }, A2;
  }
  function AQ(A2) {
    if (A2 && A2.__esModule) return A2;
    if (A2 === null || typeof A2 != "object" && typeof A2 != "function") return { default: A2 };
    var e2 = iu();
    if (e2 && e2.has(A2)) return e2.get(A2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n2 in A2) if (Object.prototype.hasOwnProperty.call(A2, n2)) {
      var i2 = r2 ? Object.getOwnPropertyDescriptor(A2, n2) : null;
      i2 && (i2.get || i2.set) ? Object.defineProperty(t2, n2, i2) : t2[n2] = A2[n2];
    }
    return t2.default = A2, e2 && e2.set(A2, t2), t2;
  }
  var eQ = (Ft = {}, Ft[H2.tab] = true, Ft[H2.newline] = true, Ft[H2.cr] = true, Ft[H2.feed] = true, Ft), tQ = (fA = {}, fA[H2.space] = true, fA[H2.tab] = true, fA[H2.newline] = true, fA[H2.cr] = true, fA[H2.feed] = true, fA[H2.ampersand] = true, fA[H2.asterisk] = true, fA[H2.bang] = true, fA[H2.comma] = true, fA[H2.colon] = true, fA[H2.semicolon] = true, fA[H2.openParenthesis] = true, fA[H2.closeParenthesis] = true, fA[H2.openSquare] = true, fA[H2.closeSquare] = true, fA[H2.singleQuote] = true, fA[H2.doubleQuote] = true, fA[H2.plus] = true, fA[H2.pipe] = true, fA[H2.tilde] = true, fA[H2.greaterThan] = true, fA[H2.equals] = true, fA[H2.dollar] = true, fA[H2.caret] = true, fA[H2.slash] = true, fA), yo = {}, nu = "0123456789abcdefABCDEF";
  for (Nn = 0; Nn < nu.length; Nn++) yo[nu.charCodeAt(Nn)] = true;
  var Nn;
  function rQ(A2, e2) {
    var t2 = e2, r2;
    do {
      if (r2 = A2.charCodeAt(t2), tQ[r2]) return t2 - 1;
      r2 === H2.backslash ? t2 = nQ(A2, t2) + 1 : t2++;
    } while (t2 < A2.length);
    return t2 - 1;
  }
  function nQ(A2, e2) {
    var t2 = e2, r2 = A2.charCodeAt(t2 + 1);
    if (!eQ[r2]) if (yo[r2]) {
      var n2 = 0;
      do
        t2++, n2++, r2 = A2.charCodeAt(t2 + 1);
      while (yo[r2] && n2 < 6);
      n2 < 6 && r2 === H2.space && t2++;
    } else t2++;
    return t2;
  }
  var iQ = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  mr.FIELDS = iQ;
  function oQ(A2) {
    var e2 = [], t2 = A2.css.valueOf(), r2 = t2, n2 = r2.length, i2 = -1, o2 = 1, s2 = 0, a2 = 0, g3, u4, I2, B2, f3, E2, C2, p2, h3, k2, b2, x3, w3;
    function y2(R2, F) {
      if (A2.safe) t2 += F, h3 = t2.length - 1;
      else throw A2.error("Unclosed " + R2, o2, s2 - i2, s2);
    }
    for (; s2 < n2; ) {
      switch (g3 = t2.charCodeAt(s2), g3 === H2.newline && (i2 = s2, o2 += 1), g3) {
        case H2.space:
        case H2.tab:
        case H2.newline:
        case H2.cr:
        case H2.feed:
          h3 = s2;
          do
            h3 += 1, g3 = t2.charCodeAt(h3), g3 === H2.newline && (i2 = h3, o2 += 1);
          while (g3 === H2.space || g3 === H2.newline || g3 === H2.tab || g3 === H2.cr || g3 === H2.feed);
          w3 = H2.space, B2 = o2, I2 = h3 - i2 - 1, a2 = h3;
          break;
        case H2.plus:
        case H2.greaterThan:
        case H2.tilde:
        case H2.pipe:
          h3 = s2;
          do
            h3 += 1, g3 = t2.charCodeAt(h3);
          while (g3 === H2.plus || g3 === H2.greaterThan || g3 === H2.tilde || g3 === H2.pipe);
          w3 = H2.combinator, B2 = o2, I2 = s2 - i2, a2 = h3;
          break;
        case H2.asterisk:
        case H2.ampersand:
        case H2.bang:
        case H2.comma:
        case H2.equals:
        case H2.dollar:
        case H2.caret:
        case H2.openSquare:
        case H2.closeSquare:
        case H2.colon:
        case H2.semicolon:
        case H2.openParenthesis:
        case H2.closeParenthesis:
          h3 = s2, w3 = g3, B2 = o2, I2 = s2 - i2, a2 = h3 + 1;
          break;
        case H2.singleQuote:
        case H2.doubleQuote:
          x3 = g3 === H2.singleQuote ? "'" : '"', h3 = s2;
          do
            for (f3 = false, h3 = t2.indexOf(x3, h3 + 1), h3 === -1 && y2("quote", x3), E2 = h3; t2.charCodeAt(E2 - 1) === H2.backslash; ) E2 -= 1, f3 = !f3;
          while (f3);
          w3 = H2.str, B2 = o2, I2 = s2 - i2, a2 = h3 + 1;
          break;
        default:
          g3 === H2.slash && t2.charCodeAt(s2 + 1) === H2.asterisk ? (h3 = t2.indexOf("*/", s2 + 2) + 1, h3 === 0 && y2("comment", "*/"), u4 = t2.slice(s2, h3 + 1), p2 = u4.split(`
`), C2 = p2.length - 1, C2 > 0 ? (k2 = o2 + C2, b2 = h3 - p2[C2].length) : (k2 = o2, b2 = i2), w3 = H2.comment, o2 = k2, B2 = k2, I2 = h3 - b2) : g3 === H2.slash ? (h3 = s2, w3 = g3, B2 = o2, I2 = s2 - i2, a2 = h3 + 1) : (h3 = rQ(t2, s2), w3 = H2.word, B2 = o2, I2 = h3 - i2), a2 = h3 + 1;
          break;
      }
      e2.push([w3, o2, s2 - i2, B2, I2, s2, a2]), b2 && (i2 = b2, b2 = null), s2 = a2;
    }
    return e2;
  }
});
var fu = _((yr, cu) => {
  yr.__esModule = true;
  yr.default = void 0;
  var sQ = ce(Yi()), wo = ce(Xi()), aQ = ce(Zi()), su = ce($i()), gQ = ce(eo()), uQ = ce(no()), Do = ce(oo()), IQ = ce(ao()), au = Mn(fo()), lQ = ce(Eo()), bo = ce(Co()), cQ = ce(ho()), fQ = ce(tu()), L2 = Mn(ou()), T2 = Mn(mo()), BQ = Mn(_A()), DA = nr(), lt, So;
  function lu() {
    if (typeof WeakMap != "function") return null;
    var A2 = /* @__PURE__ */ new WeakMap();
    return lu = function() {
      return A2;
    }, A2;
  }
  function Mn(A2) {
    if (A2 && A2.__esModule) return A2;
    if (A2 === null || typeof A2 != "object" && typeof A2 != "function") return { default: A2 };
    var e2 = lu();
    if (e2 && e2.has(A2)) return e2.get(A2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n2 in A2) if (Object.prototype.hasOwnProperty.call(A2, n2)) {
      var i2 = r2 ? Object.getOwnPropertyDescriptor(A2, n2) : null;
      i2 && (i2.get || i2.set) ? Object.defineProperty(t2, n2, i2) : t2[n2] = A2[n2];
    }
    return t2.default = A2, e2 && e2.set(A2, t2), t2;
  }
  function ce(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function gu(A2, e2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      var r2 = e2[t2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(A2, r2.key, r2);
    }
  }
  function EQ2(A2, e2, t2) {
    return e2 && gu(A2.prototype, e2), A2;
  }
  var Ro = (lt = {}, lt[T2.space] = true, lt[T2.cr] = true, lt[T2.feed] = true, lt[T2.newline] = true, lt[T2.tab] = true, lt), QQ = Object.assign({}, Ro, (So = {}, So[T2.comment] = true, So));
  function uu(A2) {
    return { line: A2[L2.FIELDS.START_LINE], column: A2[L2.FIELDS.START_COL] };
  }
  function Iu(A2) {
    return { line: A2[L2.FIELDS.END_LINE], column: A2[L2.FIELDS.END_COL] };
  }
  function ct(A2, e2, t2, r2) {
    return { start: { line: A2, column: e2 }, end: { line: t2, column: r2 } };
  }
  function Nt(A2) {
    return ct(A2[L2.FIELDS.START_LINE], A2[L2.FIELDS.START_COL], A2[L2.FIELDS.END_LINE], A2[L2.FIELDS.END_COL]);
  }
  function ko(A2, e2) {
    if (A2) return ct(A2[L2.FIELDS.START_LINE], A2[L2.FIELDS.START_COL], e2[L2.FIELDS.END_LINE], e2[L2.FIELDS.END_COL]);
  }
  function Mt(A2, e2) {
    var t2 = A2[e2];
    if (typeof t2 == "string") return t2.indexOf("\\") !== -1 && ((0, DA.ensureObject)(A2, "raws"), A2[e2] = (0, DA.unesc)(t2), A2.raws[e2] === void 0 && (A2.raws[e2] = t2)), A2;
  }
  function xo(A2, e2) {
    for (var t2 = -1, r2 = []; (t2 = A2.indexOf(e2, t2 + 1)) !== -1; ) r2.push(t2);
    return r2;
  }
  function CQ() {
    var A2 = Array.prototype.concat.apply([], arguments);
    return A2.filter(function(e2, t2) {
      return t2 === A2.indexOf(e2);
    });
  }
  var dQ = (function() {
    function A2(t2, r2) {
      r2 === void 0 && (r2 = {}), this.rule = t2, this.options = Object.assign({ lossy: false, safe: false }, r2), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, L2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var n2 = ko(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new sQ.default({ source: n2 }), this.root.errorGenerator = this._errorGenerator();
      var i2 = new wo.default({ source: { start: { line: 1, column: 1 } } });
      this.root.append(i2), this.current = i2, this.loop();
    }
    var e2 = A2.prototype;
    return e2._errorGenerator = function() {
      var r2 = this;
      return function(n2, i2) {
        return typeof r2.rule == "string" ? new Error(n2) : r2.rule.error(n2, i2);
      };
    }, e2.attribute = function() {
      var r2 = [], n2 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[L2.FIELDS.TYPE] !== T2.closeSquare; ) r2.push(this.currToken), this.position++;
      if (this.currToken[L2.FIELDS.TYPE] !== T2.closeSquare) return this.expected("closing square bracket", this.currToken[L2.FIELDS.START_POS]);
      var i2 = r2.length, o2 = { source: ct(n2[1], n2[2], this.currToken[3], this.currToken[4]), sourceIndex: n2[L2.FIELDS.START_POS] };
      if (i2 === 1 && !~[T2.word].indexOf(r2[0][L2.FIELDS.TYPE])) return this.expected("attribute", r2[0][L2.FIELDS.START_POS]);
      for (var s2 = 0, a2 = "", g3 = "", u4 = null, I2 = false; s2 < i2; ) {
        var B2 = r2[s2], f3 = this.content(B2), E2 = r2[s2 + 1];
        switch (B2[L2.FIELDS.TYPE]) {
          case T2.space:
            if (I2 = true, this.options.lossy) break;
            if (u4) {
              (0, DA.ensureObject)(o2, "spaces", u4);
              var C2 = o2.spaces[u4].after || "";
              o2.spaces[u4].after = C2 + f3;
              var p2 = (0, DA.getProp)(o2, "raws", "spaces", u4, "after") || null;
              p2 && (o2.raws.spaces[u4].after = p2 + f3);
            } else a2 = a2 + f3, g3 = g3 + f3;
            break;
          case T2.asterisk:
            if (E2[L2.FIELDS.TYPE] === T2.equals) o2.operator = f3, u4 = "operator";
            else if ((!o2.namespace || u4 === "namespace" && !I2) && E2) {
              a2 && ((0, DA.ensureObject)(o2, "spaces", "attribute"), o2.spaces.attribute.before = a2, a2 = ""), g3 && ((0, DA.ensureObject)(o2, "raws", "spaces", "attribute"), o2.raws.spaces.attribute.before = a2, g3 = ""), o2.namespace = (o2.namespace || "") + f3;
              var h3 = (0, DA.getProp)(o2, "raws", "namespace") || null;
              h3 && (o2.raws.namespace += f3), u4 = "namespace";
            }
            I2 = false;
            break;
          case T2.dollar:
            if (u4 === "value") {
              var k2 = (0, DA.getProp)(o2, "raws", "value");
              o2.value += "$", k2 && (o2.raws.value = k2 + "$");
              break;
            }
          case T2.caret:
            E2[L2.FIELDS.TYPE] === T2.equals && (o2.operator = f3, u4 = "operator"), I2 = false;
            break;
          case T2.combinator:
            if (f3 === "~" && E2[L2.FIELDS.TYPE] === T2.equals && (o2.operator = f3, u4 = "operator"), f3 !== "|") {
              I2 = false;
              break;
            }
            E2[L2.FIELDS.TYPE] === T2.equals ? (o2.operator = f3, u4 = "operator") : !o2.namespace && !o2.attribute && (o2.namespace = true), I2 = false;
            break;
          case T2.word:
            if (E2 && this.content(E2) === "|" && r2[s2 + 2] && r2[s2 + 2][L2.FIELDS.TYPE] !== T2.equals && !o2.operator && !o2.namespace) o2.namespace = f3, u4 = "namespace";
            else if (!o2.attribute || u4 === "attribute" && !I2) {
              a2 && ((0, DA.ensureObject)(o2, "spaces", "attribute"), o2.spaces.attribute.before = a2, a2 = ""), g3 && ((0, DA.ensureObject)(o2, "raws", "spaces", "attribute"), o2.raws.spaces.attribute.before = g3, g3 = ""), o2.attribute = (o2.attribute || "") + f3;
              var b2 = (0, DA.getProp)(o2, "raws", "attribute") || null;
              b2 && (o2.raws.attribute += f3), u4 = "attribute";
            } else if (!o2.value && o2.value !== "" || u4 === "value" && !I2) {
              var x3 = (0, DA.unesc)(f3), w3 = (0, DA.getProp)(o2, "raws", "value") || "", y2 = o2.value || "";
              o2.value = y2 + x3, o2.quoteMark = null, (x3 !== f3 || w3) && ((0, DA.ensureObject)(o2, "raws"), o2.raws.value = (w3 || y2) + f3), u4 = "value";
            } else {
              var R2 = f3 === "i" || f3 === "I";
              (o2.value || o2.value === "") && (o2.quoteMark || I2) ? (o2.insensitive = R2, (!R2 || f3 === "I") && ((0, DA.ensureObject)(o2, "raws"), o2.raws.insensitiveFlag = f3), u4 = "insensitive", a2 && ((0, DA.ensureObject)(o2, "spaces", "insensitive"), o2.spaces.insensitive.before = a2, a2 = ""), g3 && ((0, DA.ensureObject)(o2, "raws", "spaces", "insensitive"), o2.raws.spaces.insensitive.before = g3, g3 = "")) : (o2.value || o2.value === "") && (u4 = "value", o2.value += f3, o2.raws.value && (o2.raws.value += f3));
            }
            I2 = false;
            break;
          case T2.str:
            if (!o2.attribute || !o2.operator) return this.error("Expected an attribute followed by an operator preceding the string.", { index: B2[L2.FIELDS.START_POS] });
            var F = (0, au.unescapeValue)(f3), J2 = F.unescaped, K3 = F.quoteMark;
            o2.value = J2, o2.quoteMark = K3, u4 = "value", (0, DA.ensureObject)(o2, "raws"), o2.raws.value = f3, I2 = false;
            break;
          case T2.equals:
            if (!o2.attribute) return this.expected("attribute", B2[L2.FIELDS.START_POS], f3);
            if (o2.value) return this.error('Unexpected "=" found; an operator was already defined.', { index: B2[L2.FIELDS.START_POS] });
            o2.operator = o2.operator ? o2.operator + f3 : f3, u4 = "operator", I2 = false;
            break;
          case T2.comment:
            if (u4) if (I2 || E2 && E2[L2.FIELDS.TYPE] === T2.space || u4 === "insensitive") {
              var $2 = (0, DA.getProp)(o2, "spaces", u4, "after") || "", lA = (0, DA.getProp)(o2, "raws", "spaces", u4, "after") || $2;
              (0, DA.ensureObject)(o2, "raws", "spaces", u4), o2.raws.spaces[u4].after = lA + f3;
            } else {
              var iA = o2[u4] || "", cA = (0, DA.getProp)(o2, "raws", u4) || iA;
              (0, DA.ensureObject)(o2, "raws"), o2.raws[u4] = cA + f3;
            }
            else g3 = g3 + f3;
            break;
          default:
            return this.error('Unexpected "' + f3 + '" found.', { index: B2[L2.FIELDS.START_POS] });
        }
        s2++;
      }
      Mt(o2, "attribute"), Mt(o2, "namespace"), this.newNode(new au.default(o2)), this.position++;
    }, e2.parseWhitespaceEquivalentTokens = function(r2) {
      r2 < 0 && (r2 = this.tokens.length);
      var n2 = this.position, i2 = [], o2 = "", s2 = void 0;
      do
        if (Ro[this.currToken[L2.FIELDS.TYPE]]) this.options.lossy || (o2 += this.content());
        else if (this.currToken[L2.FIELDS.TYPE] === T2.comment) {
          var a2 = {};
          o2 && (a2.before = o2, o2 = ""), s2 = new su.default({ value: this.content(), source: Nt(this.currToken), sourceIndex: this.currToken[L2.FIELDS.START_POS], spaces: a2 }), i2.push(s2);
        }
      while (++this.position < r2);
      if (o2) {
        if (s2) s2.spaces.after = o2;
        else if (!this.options.lossy) {
          var g3 = this.tokens[n2], u4 = this.tokens[this.position - 1];
          i2.push(new Do.default({ value: "", source: ct(g3[L2.FIELDS.START_LINE], g3[L2.FIELDS.START_COL], u4[L2.FIELDS.END_LINE], u4[L2.FIELDS.END_COL]), sourceIndex: g3[L2.FIELDS.START_POS], spaces: { before: o2, after: "" } }));
        }
      }
      return i2;
    }, e2.convertWhitespaceNodesToSpace = function(r2, n2) {
      var i2 = this;
      n2 === void 0 && (n2 = false);
      var o2 = "", s2 = "";
      r2.forEach(function(g3) {
        var u4 = i2.lossySpace(g3.spaces.before, n2), I2 = i2.lossySpace(g3.rawSpaceBefore, n2);
        o2 += u4 + i2.lossySpace(g3.spaces.after, n2 && u4.length === 0), s2 += u4 + g3.value + i2.lossySpace(g3.rawSpaceAfter, n2 && I2.length === 0);
      }), s2 === o2 && (s2 = void 0);
      var a2 = { space: o2, rawSpace: s2 };
      return a2;
    }, e2.isNamedCombinator = function(r2) {
      return r2 === void 0 && (r2 = this.position), this.tokens[r2 + 0] && this.tokens[r2 + 0][L2.FIELDS.TYPE] === T2.slash && this.tokens[r2 + 1] && this.tokens[r2 + 1][L2.FIELDS.TYPE] === T2.word && this.tokens[r2 + 2] && this.tokens[r2 + 2][L2.FIELDS.TYPE] === T2.slash;
    }, e2.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var r2 = this.content(this.tokens[this.position + 1]), n2 = (0, DA.unesc)(r2).toLowerCase(), i2 = {};
        n2 !== r2 && (i2.value = "/" + r2 + "/");
        var o2 = new bo.default({ value: "/" + n2 + "/", source: ct(this.currToken[L2.FIELDS.START_LINE], this.currToken[L2.FIELDS.START_COL], this.tokens[this.position + 2][L2.FIELDS.END_LINE], this.tokens[this.position + 2][L2.FIELDS.END_COL]), sourceIndex: this.currToken[L2.FIELDS.START_POS], raws: i2 });
        return this.position = this.position + 3, o2;
      } else this.unexpected();
    }, e2.combinator = function() {
      var r2 = this;
      if (this.content() === "|") return this.namespace();
      var n2 = this.locateNextMeaningfulToken(this.position);
      if (n2 < 0 || this.tokens[n2][L2.FIELDS.TYPE] === T2.comma) {
        var i2 = this.parseWhitespaceEquivalentTokens(n2);
        if (i2.length > 0) {
          var o2 = this.current.last;
          if (o2) {
            var s2 = this.convertWhitespaceNodesToSpace(i2), a2 = s2.space, g3 = s2.rawSpace;
            g3 !== void 0 && (o2.rawSpaceAfter += g3), o2.spaces.after += a2;
          } else i2.forEach(function(w3) {
            return r2.newNode(w3);
          });
        }
        return;
      }
      var u4 = this.currToken, I2 = void 0;
      n2 > this.position && (I2 = this.parseWhitespaceEquivalentTokens(n2));
      var B2;
      if (this.isNamedCombinator() ? B2 = this.namedCombinator() : this.currToken[L2.FIELDS.TYPE] === T2.combinator ? (B2 = new bo.default({ value: this.content(), source: Nt(this.currToken), sourceIndex: this.currToken[L2.FIELDS.START_POS] }), this.position++) : Ro[this.currToken[L2.FIELDS.TYPE]] || I2 || this.unexpected(), B2) {
        if (I2) {
          var f3 = this.convertWhitespaceNodesToSpace(I2), E2 = f3.space, C2 = f3.rawSpace;
          B2.spaces.before = E2, B2.rawSpaceBefore = C2;
        }
      } else {
        var p2 = this.convertWhitespaceNodesToSpace(I2, true), h3 = p2.space, k2 = p2.rawSpace;
        k2 || (k2 = h3);
        var b2 = {}, x3 = { spaces: {} };
        h3.endsWith(" ") && k2.endsWith(" ") ? (b2.before = h3.slice(0, h3.length - 1), x3.spaces.before = k2.slice(0, k2.length - 1)) : h3.startsWith(" ") && k2.startsWith(" ") ? (b2.after = h3.slice(1), x3.spaces.after = k2.slice(1)) : x3.value = k2, B2 = new bo.default({ value: " ", source: ko(u4, this.tokens[this.position - 1]), sourceIndex: u4[L2.FIELDS.START_POS], spaces: b2, raws: x3 });
      }
      return this.currToken && this.currToken[L2.FIELDS.TYPE] === T2.space && (B2.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(B2);
    }, e2.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var r2 = new wo.default({ source: { start: uu(this.tokens[this.position + 1]) } });
      this.current.parent.append(r2), this.current = r2, this.position++;
    }, e2.comment = function() {
      var r2 = this.currToken;
      this.newNode(new su.default({ value: this.content(), source: Nt(r2), sourceIndex: r2[L2.FIELDS.START_POS] })), this.position++;
    }, e2.error = function(r2, n2) {
      throw this.root.error(r2, n2);
    }, e2.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.", { index: this.currToken[L2.FIELDS.START_POS] });
    }, e2.missingParenthesis = function() {
      return this.expected("opening parenthesis", this.currToken[L2.FIELDS.START_POS]);
    }, e2.missingSquareBracket = function() {
      return this.expected("opening square bracket", this.currToken[L2.FIELDS.START_POS]);
    }, e2.unexpected = function() {
      return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[L2.FIELDS.START_POS]);
    }, e2.namespace = function() {
      var r2 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[L2.FIELDS.TYPE] === T2.word) return this.position++, this.word(r2);
      if (this.nextToken[L2.FIELDS.TYPE] === T2.asterisk) return this.position++, this.universal(r2);
    }, e2.nesting = function() {
      if (this.nextToken) {
        var r2 = this.content(this.nextToken);
        if (r2 === "|") {
          this.position++;
          return;
        }
      }
      var n2 = this.currToken;
      this.newNode(new cQ.default({ value: this.content(), source: Nt(n2), sourceIndex: n2[L2.FIELDS.START_POS] })), this.position++;
    }, e2.parentheses = function() {
      var r2 = this.current.last, n2 = 1;
      if (this.position++, r2 && r2.type === BQ.PSEUDO) {
        var i2 = new wo.default({ source: { start: uu(this.tokens[this.position - 1]) } }), o2 = this.current;
        for (r2.append(i2), this.current = i2; this.position < this.tokens.length && n2; ) this.currToken[L2.FIELDS.TYPE] === T2.openParenthesis && n2++, this.currToken[L2.FIELDS.TYPE] === T2.closeParenthesis && n2--, n2 ? this.parse() : (this.current.source.end = Iu(this.currToken), this.current.parent.source.end = Iu(this.currToken), this.position++);
        this.current = o2;
      } else {
        for (var s2 = this.currToken, a2 = "(", g3; this.position < this.tokens.length && n2; ) this.currToken[L2.FIELDS.TYPE] === T2.openParenthesis && n2++, this.currToken[L2.FIELDS.TYPE] === T2.closeParenthesis && n2--, g3 = this.currToken, a2 += this.parseParenthesisToken(this.currToken), this.position++;
        r2 ? r2.appendToPropertyAndEscape("value", a2, a2) : this.newNode(new Do.default({ value: a2, source: ct(s2[L2.FIELDS.START_LINE], s2[L2.FIELDS.START_COL], g3[L2.FIELDS.END_LINE], g3[L2.FIELDS.END_COL]), sourceIndex: s2[L2.FIELDS.START_POS] }));
      }
      if (n2) return this.expected("closing parenthesis", this.currToken[L2.FIELDS.START_POS]);
    }, e2.pseudo = function() {
      for (var r2 = this, n2 = "", i2 = this.currToken; this.currToken && this.currToken[L2.FIELDS.TYPE] === T2.colon; ) n2 += this.content(), this.position++;
      if (!this.currToken) return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
      if (this.currToken[L2.FIELDS.TYPE] === T2.word) this.splitWord(false, function(o2, s2) {
        n2 += o2, r2.newNode(new IQ.default({ value: n2, source: ko(i2, r2.currToken), sourceIndex: i2[L2.FIELDS.START_POS] })), s2 > 1 && r2.nextToken && r2.nextToken[L2.FIELDS.TYPE] === T2.openParenthesis && r2.error("Misplaced parenthesis.", { index: r2.nextToken[L2.FIELDS.START_POS] });
      });
      else return this.expected(["pseudo-class", "pseudo-element"], this.currToken[L2.FIELDS.START_POS]);
    }, e2.space = function() {
      var r2 = this.content();
      this.position === 0 || this.prevToken[L2.FIELDS.TYPE] === T2.comma || this.prevToken[L2.FIELDS.TYPE] === T2.openParenthesis || this.current.nodes.every(function(n2) {
        return n2.type === "comment";
      }) ? (this.spaces = this.optionalSpace(r2), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[L2.FIELDS.TYPE] === T2.comma || this.nextToken[L2.FIELDS.TYPE] === T2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(r2), this.position++) : this.combinator();
    }, e2.string = function() {
      var r2 = this.currToken;
      this.newNode(new Do.default({ value: this.content(), source: Nt(r2), sourceIndex: r2[L2.FIELDS.START_POS] })), this.position++;
    }, e2.universal = function(r2) {
      var n2 = this.nextToken;
      if (n2 && this.content(n2) === "|") return this.position++, this.namespace();
      var i2 = this.currToken;
      this.newNode(new lQ.default({ value: this.content(), source: Nt(i2), sourceIndex: i2[L2.FIELDS.START_POS] }), r2), this.position++;
    }, e2.splitWord = function(r2, n2) {
      for (var i2 = this, o2 = this.nextToken, s2 = this.content(); o2 && ~[T2.dollar, T2.caret, T2.equals, T2.word].indexOf(o2[L2.FIELDS.TYPE]); ) {
        this.position++;
        var a2 = this.content();
        if (s2 += a2, a2.lastIndexOf("\\") === a2.length - 1) {
          var g3 = this.nextToken;
          g3 && g3[L2.FIELDS.TYPE] === T2.space && (s2 += this.requiredSpace(this.content(g3)), this.position++);
        }
        o2 = this.nextToken;
      }
      var u4 = xo(s2, ".").filter(function(E2) {
        var C2 = s2[E2 - 1] === "\\", p2 = /^\d+\.\d+%$/.test(s2);
        return !C2 && !p2;
      }), I2 = xo(s2, "#").filter(function(E2) {
        return s2[E2 - 1] !== "\\";
      }), B2 = xo(s2, "#{");
      B2.length && (I2 = I2.filter(function(E2) {
        return !~B2.indexOf(E2);
      }));
      var f3 = (0, fQ.default)(CQ([0].concat(u4, I2)));
      f3.forEach(function(E2, C2) {
        var p2 = f3[C2 + 1] || s2.length, h3 = s2.slice(E2, p2);
        if (C2 === 0 && n2) return n2.call(i2, h3, f3.length);
        var k2, b2 = i2.currToken, x3 = b2[L2.FIELDS.START_POS] + f3[C2], w3 = ct(b2[1], b2[2] + E2, b2[3], b2[2] + (p2 - 1));
        if (~u4.indexOf(E2)) {
          var y2 = { value: h3.slice(1), source: w3, sourceIndex: x3 };
          k2 = new aQ.default(Mt(y2, "value"));
        } else if (~I2.indexOf(E2)) {
          var R2 = { value: h3.slice(1), source: w3, sourceIndex: x3 };
          k2 = new gQ.default(Mt(R2, "value"));
        } else {
          var F = { value: h3, source: w3, sourceIndex: x3 };
          Mt(F, "value"), k2 = new uQ.default(F);
        }
        i2.newNode(k2, r2), r2 = null;
      }), this.position++;
    }, e2.word = function(r2) {
      var n2 = this.nextToken;
      return n2 && this.content(n2) === "|" ? (this.position++, this.namespace()) : this.splitWord(r2);
    }, e2.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, e2.parse = function(r2) {
      switch (this.currToken[L2.FIELDS.TYPE]) {
        case T2.space:
          this.space();
          break;
        case T2.comment:
          this.comment();
          break;
        case T2.openParenthesis:
          this.parentheses();
          break;
        case T2.closeParenthesis:
          r2 && this.missingParenthesis();
          break;
        case T2.openSquare:
          this.attribute();
          break;
        case T2.dollar:
        case T2.caret:
        case T2.equals:
        case T2.word:
          this.word();
          break;
        case T2.colon:
          this.pseudo();
          break;
        case T2.comma:
          this.comma();
          break;
        case T2.asterisk:
          this.universal();
          break;
        case T2.ampersand:
          this.nesting();
          break;
        case T2.slash:
        case T2.combinator:
          this.combinator();
          break;
        case T2.str:
          this.string();
          break;
        case T2.closeSquare:
          this.missingSquareBracket();
        case T2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, e2.expected = function(r2, n2, i2) {
      if (Array.isArray(r2)) {
        var o2 = r2.pop();
        r2 = r2.join(", ") + " or " + o2;
      }
      var s2 = /^[aeiou]/.test(r2[0]) ? "an" : "a";
      return i2 ? this.error("Expected " + s2 + " " + r2 + ', found "' + i2 + '" instead.', { index: n2 }) : this.error("Expected " + s2 + " " + r2 + ".", { index: n2 });
    }, e2.requiredSpace = function(r2) {
      return this.options.lossy ? " " : r2;
    }, e2.optionalSpace = function(r2) {
      return this.options.lossy ? "" : r2;
    }, e2.lossySpace = function(r2, n2) {
      return this.options.lossy ? n2 ? " " : "" : r2;
    }, e2.parseParenthesisToken = function(r2) {
      var n2 = this.content(r2);
      return r2[L2.FIELDS.TYPE] === T2.space ? this.requiredSpace(n2) : n2;
    }, e2.newNode = function(r2, n2) {
      return n2 && (/^ +$/.test(n2) && (this.options.lossy || (this.spaces = (this.spaces || "") + n2), n2 = true), r2.namespace = n2, Mt(r2, "namespace")), this.spaces && (r2.spaces.before = this.spaces, this.spaces = ""), this.current.append(r2);
    }, e2.content = function(r2) {
      return r2 === void 0 && (r2 = this.currToken), this.css.slice(r2[L2.FIELDS.START_POS], r2[L2.FIELDS.END_POS]);
    }, e2.locateNextMeaningfulToken = function(r2) {
      r2 === void 0 && (r2 = this.position + 1);
      for (var n2 = r2; n2 < this.tokens.length; ) if (QQ[this.tokens[n2][L2.FIELDS.TYPE]]) {
        n2++;
        continue;
      } else return n2;
      return -1;
    }, EQ2(A2, [{ key: "currToken", get: function() {
      return this.tokens[this.position];
    } }, { key: "nextToken", get: function() {
      return this.tokens[this.position + 1];
    } }, { key: "prevToken", get: function() {
      return this.tokens[this.position - 1];
    } }]), A2;
  })();
  yr.default = dQ;
  cu.exports = yr.default;
});
var Eu = _((wr, Bu) => {
  wr.__esModule = true;
  wr.default = void 0;
  var pQ = hQ(fu());
  function hQ(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  var mQ = (function() {
    function A2(t2, r2) {
      this.func = t2 || function() {
      }, this.funcRes = null, this.options = r2;
    }
    var e2 = A2.prototype;
    return e2._shouldUpdateSelector = function(r2, n2) {
      n2 === void 0 && (n2 = {});
      var i2 = Object.assign({}, this.options, n2);
      return i2.updateSelector === false ? false : typeof r2 != "string";
    }, e2._isLossy = function(r2) {
      r2 === void 0 && (r2 = {});
      var n2 = Object.assign({}, this.options, r2);
      return n2.lossless === false;
    }, e2._root = function(r2, n2) {
      n2 === void 0 && (n2 = {});
      var i2 = new pQ.default(r2, this._parseOptions(n2));
      return i2.root;
    }, e2._parseOptions = function(r2) {
      return { lossy: this._isLossy(r2) };
    }, e2._run = function(r2, n2) {
      var i2 = this;
      return n2 === void 0 && (n2 = {}), new Promise(function(o2, s2) {
        try {
          var a2 = i2._root(r2, n2);
          Promise.resolve(i2.func(a2)).then(function(g3) {
            var u4 = void 0;
            return i2._shouldUpdateSelector(r2, n2) && (u4 = a2.toString(), r2.selector = u4), { transform: g3, root: a2, string: u4 };
          }).then(o2, s2);
        } catch (g3) {
          s2(g3);
          return;
        }
      });
    }, e2._runSync = function(r2, n2) {
      n2 === void 0 && (n2 = {});
      var i2 = this._root(r2, n2), o2 = this.func(i2);
      if (o2 && typeof o2.then == "function") throw new Error("Selector processor returned a promise to a synchronous call.");
      var s2 = void 0;
      return n2.updateSelector && typeof r2 != "string" && (s2 = i2.toString(), r2.selector = s2), { transform: o2, root: i2, string: s2 };
    }, e2.ast = function(r2, n2) {
      return this._run(r2, n2).then(function(i2) {
        return i2.root;
      });
    }, e2.astSync = function(r2, n2) {
      return this._runSync(r2, n2).root;
    }, e2.transform = function(r2, n2) {
      return this._run(r2, n2).then(function(i2) {
        return i2.transform;
      });
    }, e2.transformSync = function(r2, n2) {
      return this._runSync(r2, n2).transform;
    }, e2.process = function(r2, n2) {
      return this._run(r2, n2).then(function(i2) {
        return i2.string || i2.root.toString();
      });
    }, e2.processSync = function(r2, n2) {
      var i2 = this._runSync(r2, n2);
      return i2.string || i2.root.toString();
    }, A2;
  })();
  wr.default = mQ;
  Bu.exports = wr.default;
});
var Qu = _((QA) => {
  QA.__esModule = true;
  QA.universal = QA.tag = QA.string = QA.selector = QA.root = QA.pseudo = QA.nesting = QA.id = QA.comment = QA.combinator = QA.className = QA.attribute = void 0;
  var yQ = fe(fo()), wQ = fe(Zi()), DQ = fe(Co()), bQ = fe($i()), SQ = fe(eo()), kQ = fe(ho()), xQ = fe(ao()), RQ = fe(Yi()), vQ = fe(Xi()), FQ = fe(oo()), NQ = fe(no()), MQ = fe(Eo());
  function fe(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  var LQ = function(e2) {
    return new yQ.default(e2);
  };
  QA.attribute = LQ;
  var GQ = function(e2) {
    return new wQ.default(e2);
  };
  QA.className = GQ;
  var UQ = function(e2) {
    return new DQ.default(e2);
  };
  QA.combinator = UQ;
  var HQ = function(e2) {
    return new bQ.default(e2);
  };
  QA.comment = HQ;
  var OQ = function(e2) {
    return new SQ.default(e2);
  };
  QA.id = OQ;
  var TQ = function(e2) {
    return new kQ.default(e2);
  };
  QA.nesting = TQ;
  var PQ = function(e2) {
    return new xQ.default(e2);
  };
  QA.pseudo = PQ;
  var _Q = function(e2) {
    return new RQ.default(e2);
  };
  QA.root = _Q;
  var JQ = function(e2) {
    return new vQ.default(e2);
  };
  QA.selector = JQ;
  var KQ = function(e2) {
    return new FQ.default(e2);
  };
  QA.string = KQ;
  var WQ = function(e2) {
    return new NQ.default(e2);
  };
  QA.tag = WQ;
  var YQ = function(e2) {
    return new MQ.default(e2);
  };
  QA.universal = YQ;
});
var hu = _((oA) => {
  oA.__esModule = true;
  oA.isNode = vo;
  oA.isPseudoElement = pu;
  oA.isPseudoClass = rC;
  oA.isContainer = nC;
  oA.isNamespace = iC;
  oA.isUniversal = oA.isTag = oA.isString = oA.isSelector = oA.isRoot = oA.isPseudo = oA.isNesting = oA.isIdentifier = oA.isComment = oA.isCombinator = oA.isClassName = oA.isAttribute = void 0;
  var bA = _A(), ee, qQ = (ee = {}, ee[bA.ATTRIBUTE] = true, ee[bA.CLASS] = true, ee[bA.COMBINATOR] = true, ee[bA.COMMENT] = true, ee[bA.ID] = true, ee[bA.NESTING] = true, ee[bA.PSEUDO] = true, ee[bA.ROOT] = true, ee[bA.SELECTOR] = true, ee[bA.STRING] = true, ee[bA.TAG] = true, ee[bA.UNIVERSAL] = true, ee);
  function vo(A2) {
    return typeof A2 == "object" && qQ[A2.type];
  }
  function Be(A2, e2) {
    return vo(e2) && e2.type === A2;
  }
  var Cu = Be.bind(null, bA.ATTRIBUTE);
  oA.isAttribute = Cu;
  var XQ = Be.bind(null, bA.CLASS);
  oA.isClassName = XQ;
  var VQ = Be.bind(null, bA.COMBINATOR);
  oA.isCombinator = VQ;
  var zQ = Be.bind(null, bA.COMMENT);
  oA.isComment = zQ;
  var ZQ = Be.bind(null, bA.ID);
  oA.isIdentifier = ZQ;
  var jQ = Be.bind(null, bA.NESTING);
  oA.isNesting = jQ;
  var Fo = Be.bind(null, bA.PSEUDO);
  oA.isPseudo = Fo;
  var $Q = Be.bind(null, bA.ROOT);
  oA.isRoot = $Q;
  var AC = Be.bind(null, bA.SELECTOR);
  oA.isSelector = AC;
  var eC = Be.bind(null, bA.STRING);
  oA.isString = eC;
  var du = Be.bind(null, bA.TAG);
  oA.isTag = du;
  var tC = Be.bind(null, bA.UNIVERSAL);
  oA.isUniversal = tC;
  function pu(A2) {
    return Fo(A2) && A2.value && (A2.value.startsWith("::") || A2.value.toLowerCase() === ":before" || A2.value.toLowerCase() === ":after" || A2.value.toLowerCase() === ":first-letter" || A2.value.toLowerCase() === ":first-line");
  }
  function rC(A2) {
    return Fo(A2) && !pu(A2);
  }
  function nC(A2) {
    return !!(vo(A2) && A2.walk);
  }
  function iC(A2) {
    return Cu(A2) || du(A2);
  }
});
var mu = _((Se) => {
  Se.__esModule = true;
  var No = _A();
  Object.keys(No).forEach(function(A2) {
    A2 === "default" || A2 === "__esModule" || A2 in Se && Se[A2] === No[A2] || (Se[A2] = No[A2]);
  });
  var Mo = Qu();
  Object.keys(Mo).forEach(function(A2) {
    A2 === "default" || A2 === "__esModule" || A2 in Se && Se[A2] === Mo[A2] || (Se[A2] = Mo[A2]);
  });
  var Lo = hu();
  Object.keys(Lo).forEach(function(A2) {
    A2 === "default" || A2 === "__esModule" || A2 in Se && Se[A2] === Lo[A2] || (Se[A2] = Lo[A2]);
  });
});
var Du = _((Dr, wu) => {
  Dr.__esModule = true;
  Dr.default = void 0;
  var oC = gC(Eu()), sC = aC(mu());
  function yu() {
    if (typeof WeakMap != "function") return null;
    var A2 = /* @__PURE__ */ new WeakMap();
    return yu = function() {
      return A2;
    }, A2;
  }
  function aC(A2) {
    if (A2 && A2.__esModule) return A2;
    if (A2 === null || typeof A2 != "object" && typeof A2 != "function") return { default: A2 };
    var e2 = yu();
    if (e2 && e2.has(A2)) return e2.get(A2);
    var t2 = {}, r2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n2 in A2) if (Object.prototype.hasOwnProperty.call(A2, n2)) {
      var i2 = r2 ? Object.getOwnPropertyDescriptor(A2, n2) : null;
      i2 && (i2.get || i2.set) ? Object.defineProperty(t2, n2, i2) : t2[n2] = A2[n2];
    }
    return t2.default = A2, e2 && e2.set(A2, t2), t2;
  }
  function gC(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  var Go = function(e2) {
    return new oC.default(e2);
  };
  Object.assign(Go, sC);
  delete Go.__esModule;
  var uC = Go;
  Dr.default = uC;
  wu.exports = Dr.default;
});
var bu = _((Uo) => {
  Object.defineProperty(Uo, "__esModule", { value: true });
  Object.defineProperty(Uo, "default", { enumerable: true, get: () => IC });
  function IC(A2) {
    return A2.replace(/\\,/g, "\\2c ");
  }
});
var ku = _((zm, Su) => {
  Su.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
});
var Oo = _((Ho) => {
  Object.defineProperty(Ho, "__esModule", { value: true });
  function lC(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  lC(Ho, { parseColor: () => CC, formatColor: () => dC });
  var xu = cC(ku());
  function cC(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  var fC = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, BC = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, je = /(?:\d+|\d*\.\d+)%?/, Ln = /(?:\s*,\s*|\s+)/, Ru = /\s*[,/]\s*/, $e = /var\(--(?:[^ )]*?)\)/, EC = new RegExp(`^(rgb)a?\\(\\s*(${je.source}|${$e.source})(?:${Ln.source}(${je.source}|${$e.source}))?(?:${Ln.source}(${je.source}|${$e.source}))?(?:${Ru.source}(${je.source}|${$e.source}))?\\s*\\)$`), QC = new RegExp(`^(hsl)a?\\(\\s*((?:${je.source})(?:deg|rad|grad|turn)?|${$e.source})(?:${Ln.source}(${je.source}|${$e.source}))?(?:${Ln.source}(${je.source}|${$e.source}))?(?:${Ru.source}(${je.source}|${$e.source}))?\\s*\\)$`);
  function CC(A2, { loose: e2 = false } = {}) {
    var t2, r2;
    if (typeof A2 != "string") return null;
    if (A2 = A2.trim(), A2 === "transparent") return { mode: "rgb", color: ["0", "0", "0"], alpha: "0" };
    if (A2 in xu.default) return { mode: "rgb", color: xu.default[A2].map((a2) => a2.toString()) };
    let n2 = A2.replace(BC, (a2, g3, u4, I2, B2) => ["#", g3, g3, u4, u4, I2, I2, B2 ? B2 + B2 : ""].join("")).match(fC);
    if (n2 !== null) return { mode: "rgb", color: [parseInt(n2[1], 16), parseInt(n2[2], 16), parseInt(n2[3], 16)].map((a2) => a2.toString()), alpha: n2[4] ? (parseInt(n2[4], 16) / 255).toString() : void 0 };
    var i2;
    let o2 = (i2 = A2.match(EC)) !== null && i2 !== void 0 ? i2 : A2.match(QC);
    if (o2 === null) return null;
    let s2 = [o2[2], o2[3], o2[4]].filter(Boolean).map((a2) => a2.toString());
    return !e2 && s2.length !== 3 || s2.length < 3 && !s2.some((a2) => /^var\(.*?\)$/.test(a2)) ? null : { mode: o2[1], color: s2, alpha: (t2 = o2[5]) === null || t2 === void 0 || (r2 = t2.toString) === null || r2 === void 0 ? void 0 : r2.call(t2) };
  }
  function dC({ mode: A2, color: e2, alpha: t2 }) {
    let r2 = t2 !== void 0;
    return `${A2}(${e2.join(" ")}${r2 ? ` / ${t2}` : ""})`;
  }
});
var Po = _((To) => {
  Object.defineProperty(To, "__esModule", { value: true });
  function pC(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  pC(To, { withAlphaValue: () => hC, default: () => mC });
  var Gn = Oo();
  function hC(A2, e2, t2) {
    if (typeof A2 == "function") return A2({ opacityValue: e2 });
    let r2 = (0, Gn.parseColor)(A2, { loose: true });
    return r2 === null ? t2 : (0, Gn.formatColor)({ ...r2, alpha: e2 });
  }
  function mC({ color: A2, property: e2, variable: t2 }) {
    let r2 = [].concat(e2);
    if (typeof A2 == "function") return { [t2]: "1", ...Object.fromEntries(r2.map((i2) => [i2, A2({ opacityVariable: t2, opacityValue: `var(${t2})` })])) };
    let n2 = (0, Gn.parseColor)(A2);
    return n2 === null ? Object.fromEntries(r2.map((i2) => [i2, A2])) : n2.alpha !== void 0 ? Object.fromEntries(r2.map((i2) => [i2, A2])) : { [t2]: "1", ...Object.fromEntries(r2.map((i2) => [i2, (0, Gn.formatColor)({ ...n2, alpha: `var(${t2})` })])) };
  }
});
var Lu = _((_o) => {
  Object.defineProperty(_o, "__esModule", { value: true });
  function yC(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  yC(_o, { pattern: () => DC, withoutCapturing: () => Fu, any: () => Nu, optional: () => bC, zeroOrMore: () => SC, nestedBrackets: () => Mu, escape: () => ft });
  var vu = /[\\^$.*+?()[\]{}|]/g, wC = RegExp(vu.source);
  function br(A2) {
    return A2 = Array.isArray(A2) ? A2 : [A2], A2 = A2.map((e2) => e2 instanceof RegExp ? e2.source : e2), A2.join("");
  }
  function DC(A2) {
    return new RegExp(br(A2), "g");
  }
  function Fu(A2) {
    return new RegExp(`(?:${br(A2)})`, "g");
  }
  function Nu(A2) {
    return `(?:${A2.map(br).join("|")})`;
  }
  function bC(A2) {
    return `(?:${br(A2)})?`;
  }
  function SC(A2) {
    return `(?:${br(A2)})*`;
  }
  function Mu(A2, e2, t2 = 1) {
    return Fu([ft(A2), /[^\s]*/, t2 === 1 ? `[^${ft(A2)}${ft(e2)}s]*` : Nu([`[^${ft(A2)}${ft(e2)}s]*`, Mu(A2, e2, t2 - 1)]), /[^\s]*/, ft(e2)]);
  }
  function ft(A2) {
    return A2 && wC.test(A2) ? A2.replace(vu, "\\$&") : A2 || "";
  }
});
var Uu = _((Jo) => {
  Object.defineProperty(Jo, "__esModule", { value: true });
  Object.defineProperty(Jo, "splitAtTopLevelOnly", { enumerable: true, get: () => RC });
  var kC = xC(Lu());
  function Gu(A2) {
    if (typeof WeakMap != "function") return null;
    var e2 = /* @__PURE__ */ new WeakMap(), t2 = /* @__PURE__ */ new WeakMap();
    return (Gu = function(r2) {
      return r2 ? t2 : e2;
    })(A2);
  }
  function xC(A2, e2) {
    if (A2 && A2.__esModule) return A2;
    if (A2 === null || typeof A2 != "object" && typeof A2 != "function") return { default: A2 };
    var t2 = Gu(e2);
    if (t2 && t2.has(A2)) return t2.get(A2);
    var r2 = {}, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i2 in A2) if (i2 !== "default" && Object.prototype.hasOwnProperty.call(A2, i2)) {
      var o2 = n2 ? Object.getOwnPropertyDescriptor(A2, i2) : null;
      o2 && (o2.get || o2.set) ? Object.defineProperty(r2, i2, o2) : r2[i2] = A2[i2];
    }
    return r2.default = A2, t2 && t2.set(A2, r2), r2;
  }
  function* RC(A2, e2) {
    let t2 = new RegExp(`[(){}\\[\\]${kC.escape(e2)}]`, "g"), r2 = 0, n2 = 0, i2 = false, o2 = 0, s2 = 0, a2 = e2.length;
    for (let g3 of A2.matchAll(t2)) {
      let u4 = g3[0] === e2[o2], I2 = o2 === a2 - 1, B2 = u4 && I2;
      g3[0] === "(" && r2++, g3[0] === ")" && r2--, g3[0] === "[" && r2++, g3[0] === "]" && r2--, g3[0] === "{" && r2++, g3[0] === "}" && r2--, u4 && r2 === 0 && (s2 === 0 && (s2 = g3.index), o2++), B2 && r2 === 0 && (i2 = true, yield A2.substring(n2, s2), n2 = s2 + a2), o2 === a2 && (o2 = 0, s2 = 0);
    }
    i2 ? yield A2.substring(n2) : yield A2;
  }
});
var Ou = _((Ko) => {
  Object.defineProperty(Ko, "__esModule", { value: true });
  function vC(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  vC(Ko, { parseBoxShadowValue: () => LC, formatBoxShadowValue: () => GC2 });
  var FC = Uu(), NC = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]), MC = /\ +(?![^(]*\))/g, Hu = /^-?(\d+|\.\d+)(.*?)$/g;
  function LC(A2) {
    return Array.from((0, FC.splitAtTopLevelOnly)(A2, ",")).map((t2) => {
      let r2 = t2.trim(), n2 = { raw: r2 }, i2 = r2.split(MC), o2 = /* @__PURE__ */ new Set();
      for (let s2 of i2) Hu.lastIndex = 0, !o2.has("KEYWORD") && NC.has(s2) ? (n2.keyword = s2, o2.add("KEYWORD")) : Hu.test(s2) ? o2.has("X") ? o2.has("Y") ? o2.has("BLUR") ? o2.has("SPREAD") || (n2.spread = s2, o2.add("SPREAD")) : (n2.blur = s2, o2.add("BLUR")) : (n2.y = s2, o2.add("Y")) : (n2.x = s2, o2.add("X")) : n2.color ? (n2.unknown || (n2.unknown = []), n2.unknown.push(s2)) : n2.color = s2;
      return n2.valid = n2.x !== void 0 && n2.y !== void 0, n2;
    });
  }
  function GC2(A2) {
    return A2.map((e2) => e2.valid ? [e2.keyword, e2.x, e2.y, e2.blur, e2.spread, e2.color].filter(Boolean).join(" ") : e2.raw).join(", ");
  }
});
var Yu = _((Yo) => {
  Object.defineProperty(Yo, "__esModule", { value: true });
  function UC(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  UC(Yo, { normalize: () => At, url: () => _u, number: () => TC, percentage: () => Ju, length: () => Ku, lineWidth: () => JC, shadow: () => KC, color: () => WC, image: () => YC, gradient: () => Wu, position: () => VC, familyName: () => zC, genericName: () => jC, absoluteSize: () => Ad, relativeSize: () => td3 });
  var HC = Oo(), OC = Ou(), Wo = ["min", "max", "clamp", "calc"], Pu = /,(?![^(]*\))/g, Un = /_(?![^(]*\))/g;
  function At(A2, e2 = true) {
    return A2.includes("url(") ? A2.split(/(url\(.*?\))/g).filter(Boolean).map((t2) => /^url\(.*?\)$/.test(t2) ? t2 : At(t2, false)).join("") : (A2 = A2.replace(/([^\\])_+/g, (t2, r2) => r2 + " ".repeat(t2.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), e2 && (A2 = A2.trim()), A2 = A2.replace(/(calc|min|max|clamp)\(.+\)/g, (t2) => t2.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ")), A2);
  }
  function _u(A2) {
    return A2.startsWith("url(");
  }
  function TC(A2) {
    return !isNaN(Number(A2)) || Wo.some((e2) => new RegExp(`^${e2}\\(.+?`).test(A2));
  }
  function Ju(A2) {
    return A2.split(Un).every((e2) => /%$/g.test(e2) || Wo.some((t2) => new RegExp(`^${t2}\\(.+?%`).test(e2)));
  }
  var PC = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "vw", "vh", "vmin", "vmax"], Tu = `(?:${PC.join("|")})`;
  function Ku(A2) {
    return A2.split(Un).every((e2) => e2 === "0" || new RegExp(`${Tu}$`).test(e2) || Wo.some((t2) => new RegExp(`^${t2}\\(.+?${Tu}`).test(e2)));
  }
  var _C = /* @__PURE__ */ new Set(["thin", "medium", "thick"]);
  function JC(A2) {
    return _C.has(A2);
  }
  function KC(A2) {
    let e2 = (0, OC.parseBoxShadowValue)(At(A2));
    for (let t2 of e2) if (!t2.valid) return false;
    return true;
  }
  function WC(A2) {
    let e2 = 0;
    return A2.split(Un).every((r2) => (r2 = At(r2), r2.startsWith("var(") ? true : (0, HC.parseColor)(r2, { loose: true }) !== null ? (e2++, true) : false)) ? e2 > 0 : false;
  }
  function YC(A2) {
    let e2 = 0;
    return A2.split(Pu).every((r2) => (r2 = At(r2), r2.startsWith("var(") ? true : _u(r2) || Wu(r2) || ["element(", "image(", "cross-fade(", "image-set("].some((n2) => r2.startsWith(n2)) ? (e2++, true) : false)) ? e2 > 0 : false;
  }
  var qC = /* @__PURE__ */ new Set(["linear-gradient", "radial-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "conic-gradient"]);
  function Wu(A2) {
    A2 = At(A2);
    for (let e2 of qC) if (A2.startsWith(`${e2}(`)) return true;
    return false;
  }
  var XC = /* @__PURE__ */ new Set(["center", "top", "right", "bottom", "left"]);
  function VC(A2) {
    let e2 = 0;
    return A2.split(Un).every((r2) => (r2 = At(r2), r2.startsWith("var(") ? true : XC.has(r2) || Ku(r2) || Ju(r2) ? (e2++, true) : false)) ? e2 > 0 : false;
  }
  function zC(A2) {
    let e2 = 0;
    return A2.split(Pu).every((r2) => (r2 = At(r2), r2.startsWith("var(") ? true : r2.includes(" ") && !/(['"])([^"']+)\1/g.test(r2) || /^\d/g.test(r2) ? false : (e2++, true))) ? e2 > 0 : false;
  }
  var ZC = /* @__PURE__ */ new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]);
  function jC(A2) {
    return ZC.has(A2);
  }
  var $C = /* @__PURE__ */ new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "x-large", "xxx-large"]);
  function Ad(A2) {
    return $C.has(A2);
  }
  var ed = /* @__PURE__ */ new Set(["larger", "smaller"]);
  function td3(A2) {
    return ed.has(A2);
  }
});
var AI = _((Vo) => {
  Object.defineProperty(Vo, "__esModule", { value: true });
  function rd(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  rd(Vo, { updateAllClasses: () => od, asValue: () => kr, parseColorFormat: () => qo, asColor: () => Zu, asLookupValue: () => ju, coerceValue: () => ud });
  var nd = Xo(Du()), id = Xo(bu()), qu = Po(), te = Yu(), Xu = Xo(Fi());
  function Xo(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function od(A2, e2) {
    return (0, nd.default)((n2) => {
      n2.walkClasses((i2) => {
        let o2 = e2(i2.value);
        i2.value = o2, i2.raws && i2.raws.value && (i2.raws.value = (0, id.default)(i2.raws.value));
      });
    }).processSync(A2);
  }
  function zu(A2, e2) {
    if (!Sr(A2)) return;
    let t2 = A2.slice(1, -1);
    if (e2(t2)) return (0, te.normalize)(t2);
  }
  function sd(A2, e2 = {}, t2) {
    let r2 = e2[A2];
    if (r2 !== void 0) return (0, Xu.default)(r2);
    if (Sr(A2)) {
      let n2 = zu(A2, t2);
      return n2 === void 0 ? void 0 : (0, Xu.default)(n2);
    }
  }
  function kr(A2, e2 = {}, { validate: t2 = () => true } = {}) {
    var r2;
    let n2 = (r2 = e2.values) === null || r2 === void 0 ? void 0 : r2[A2];
    return n2 !== void 0 ? n2 : e2.supportsNegativeValues && A2.startsWith("-") ? sd(A2.slice(1), e2.values, t2) : zu(A2, t2);
  }
  function Sr(A2) {
    return A2.startsWith("[") && A2.endsWith("]");
  }
  function ad(A2) {
    let e2 = A2.lastIndexOf("/");
    return e2 === -1 || e2 === A2.length - 1 ? [A2] : [A2.slice(0, e2), A2.slice(e2 + 1)];
  }
  function qo(A2) {
    if (typeof A2 == "string" && A2.includes("<alpha-value>")) {
      let e2 = A2;
      return ({ opacityValue: t2 = 1 }) => e2.replace("<alpha-value>", t2);
    }
    return A2;
  }
  function Zu(A2, e2 = {}, { tailwindConfig: t2 = {} } = {}) {
    var r2;
    if (((r2 = e2.values) === null || r2 === void 0 ? void 0 : r2[A2]) !== void 0) {
      var n2;
      return qo((n2 = e2.values) === null || n2 === void 0 ? void 0 : n2[A2]);
    }
    let [i2, o2] = ad(A2);
    if (o2 !== void 0) {
      var s2, a2, g3, u4;
      let I2 = (u4 = (s2 = e2.values) === null || s2 === void 0 ? void 0 : s2[i2]) !== null && u4 !== void 0 ? u4 : Sr(i2) ? i2.slice(1, -1) : void 0;
      return I2 === void 0 ? void 0 : (I2 = qo(I2), Sr(o2) ? (0, qu.withAlphaValue)(I2, o2.slice(1, -1)) : ((a2 = t2.theme) === null || a2 === void 0 || (g3 = a2.opacity) === null || g3 === void 0 ? void 0 : g3[o2]) === void 0 ? void 0 : (0, qu.withAlphaValue)(I2, t2.theme.opacity[o2]));
    }
    return kr(A2, e2, { validate: te.color });
  }
  function ju(A2, e2 = {}) {
    var t2;
    return (t2 = e2.values) === null || t2 === void 0 ? void 0 : t2[A2];
  }
  function Ee(A2) {
    return (e2, t2) => kr(e2, t2, { validate: A2 });
  }
  var $u = { any: kr, color: Zu, url: Ee(te.url), image: Ee(te.image), length: Ee(te.length), percentage: Ee(te.percentage), position: Ee(te.position), lookup: ju, "generic-name": Ee(te.genericName), "family-name": Ee(te.familyName), number: Ee(te.number), "line-width": Ee(te.lineWidth), "absolute-size": Ee(te.absoluteSize), "relative-size": Ee(te.relativeSize), shadow: Ee(te.shadow) }, Vu = Object.keys($u);
  function gd(A2, e2) {
    let t2 = A2.indexOf(e2);
    return t2 === -1 ? [void 0, A2] : [A2.slice(0, t2), A2.slice(t2 + 1)];
  }
  function ud(A2, e2, t2, r2) {
    if (Sr(e2)) {
      let n2 = e2.slice(1, -1), [i2, o2] = gd(n2, ":");
      if (!/^[\w-_]+$/g.test(i2)) o2 = n2;
      else if (i2 !== void 0 && !Vu.includes(i2)) return [];
      if (o2.length > 0 && Vu.includes(i2)) return [kr(`[${o2}]`, t2), i2];
    }
    for (let n2 of [].concat(A2)) {
      let i2 = $u[n2](e2, t2, { tailwindConfig: r2 });
      if (i2 !== void 0) return [i2, n2];
    }
    return [];
  }
});
var eI = _((zo) => {
  Object.defineProperty(zo, "__esModule", { value: true });
  Object.defineProperty(zo, "default", { enumerable: true, get: () => Id });
  function Id(A2) {
    return typeof A2 == "function" ? A2({}) : A2;
  }
});
var oI = _((jo) => {
  Object.defineProperty(jo, "__esModule", { value: true });
  Object.defineProperty(jo, "default", { enumerable: true, get: () => vd });
  var ld = Bt(Fi()), cd = Bt(gg()), fd3 = Bt(ug()), Bd = Bt(Li()), Ed = Bt(lg()), nI = cg(), tI = fg(), Qd = Eg(), Cd = Bt(Qg()), dd = Cg(), pd = AI(), hd = Po(), md = Bt(eI());
  function Bt(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function Lt(A2) {
    return typeof A2 == "function";
  }
  function xr(A2) {
    return typeof A2 == "object" && A2 !== null;
  }
  function Rr(A2, ...e2) {
    let t2 = e2.pop();
    for (let r2 of e2) for (let n2 in r2) {
      let i2 = t2(A2[n2], r2[n2]);
      i2 === void 0 ? xr(A2[n2]) && xr(r2[n2]) ? A2[n2] = Rr(A2[n2], r2[n2], t2) : A2[n2] = r2[n2] : A2[n2] = i2;
    }
    return A2;
  }
  var Zo = { colors: Ed.default, negative(A2) {
    return Object.keys(A2).filter((e2) => A2[e2] !== "0").reduce((e2, t2) => {
      let r2 = (0, ld.default)(A2[t2]);
      return r2 !== void 0 && (e2[`-${t2}`] = r2), e2;
    }, {});
  }, breakpoints(A2) {
    return Object.keys(A2).filter((e2) => typeof A2[e2] == "string").reduce((e2, t2) => ({ ...e2, [`screen-${t2}`]: A2[t2] }), {});
  } };
  function yd(A2, ...e2) {
    return Lt(A2) ? A2(...e2) : A2;
  }
  function wd(A2) {
    return A2.reduce((e2, { extend: t2 }) => Rr(e2, t2, (r2, n2) => r2 === void 0 ? [n2] : Array.isArray(r2) ? [n2, ...r2] : [n2, r2]), {});
  }
  function Dd(A2) {
    return { ...A2.reduce((e2, t2) => (0, nI.defaults)(e2, t2), {}), extend: wd(A2) };
  }
  function rI(A2, e2) {
    if (Array.isArray(A2) && xr(A2[0])) return A2.concat(e2);
    if (Array.isArray(e2) && xr(e2[0]) && xr(A2)) return [A2, ...e2];
    if (Array.isArray(e2)) return e2;
  }
  function bd({ extend: A2, ...e2 }) {
    return Rr(e2, A2, (t2, r2) => !Lt(t2) && !r2.some(Lt) ? Rr({}, t2, ...r2, rI) : (n2, i2) => Rr({}, ...[t2, ...r2].map((o2) => yd(o2, n2, i2)), rI));
  }
  function* Sd(A2) {
    let e2 = (0, tI.toPath)(A2);
    if (e2.length === 0 || (yield e2, Array.isArray(A2))) return;
    let t2 = /^(.*?)\s*\/\s*([^/]+)$/, r2 = A2.match(t2);
    if (r2 !== null) {
      let [, n2, i2] = r2, o2 = (0, tI.toPath)(n2);
      o2.alpha = i2, yield o2;
    }
  }
  function kd(A2) {
    let e2 = (t2, r2) => {
      for (let n2 of Sd(t2)) {
        let i2 = 0, o2 = A2;
        for (; o2 != null && i2 < n2.length; ) o2 = o2[n2[i2++]], o2 = Lt(o2) && (n2.alpha === void 0 || i2 <= n2.length - 1) ? o2(e2, Zo) : o2;
        if (o2 !== void 0) {
          if (n2.alpha !== void 0) {
            let s2 = (0, pd.parseColorFormat)(o2);
            return (0, hd.withAlphaValue)(s2, n2.alpha, (0, md.default)(s2));
          }
          return (0, Cd.default)(o2) ? (0, dd.cloneDeep)(o2) : o2;
        }
      }
      return r2;
    };
    return Object.assign(e2, { theme: e2, ...Zo }), Object.keys(A2).reduce((t2, r2) => (t2[r2] = Lt(A2[r2]) ? A2[r2](e2, Zo) : A2[r2], t2), {});
  }
  function iI(A2) {
    let e2 = [];
    return A2.forEach((t2) => {
      e2 = [...e2, t2];
      var r2;
      let n2 = (r2 = t2 == null ? void 0 : t2.plugins) !== null && r2 !== void 0 ? r2 : [];
      n2.length !== 0 && n2.forEach((i2) => {
        i2.__isOptionsFunction && (i2 = i2());
        var o2;
        e2 = [...e2, ...iI([(o2 = i2 == null ? void 0 : i2.config) !== null && o2 !== void 0 ? o2 : {}])];
      });
    }), e2;
  }
  function xd(A2) {
    return [...A2].reduceRight((t2, r2) => Lt(r2) ? r2({ corePlugins: t2 }) : (0, fd3.default)(r2, t2), cd.default);
  }
  function Rd(A2) {
    return [...A2].reduceRight((t2, r2) => [...t2, ...r2], []);
  }
  function vd(A2) {
    let e2 = [...iI(A2), { prefix: "", important: false, separator: ":", variantOrder: Bd.default.variantOrder }];
    var t2, r2;
    return (0, Qd.normalizeConfig)((0, nI.defaults)({ theme: kd(bd(Dd(e2.map((n2) => (t2 = n2 == null ? void 0 : n2.theme) !== null && t2 !== void 0 ? t2 : {})))), corePlugins: xd(e2.map((n2) => n2.corePlugins)), plugins: Rd(A2.map((n2) => (r2 = n2 == null ? void 0 : n2.plugins) !== null && r2 !== void 0 ? r2 : [])) }, ...e2));
  }
});
var sI = {};
Kr(sI, { default: () => Fd });
var Fd;
var aI = st(() => {
  Fd = { yellow: (A2) => A2 };
});
var lI = _(($o) => {
  Object.defineProperty($o, "__esModule", { value: true });
  function Nd(A2, e2) {
    for (var t2 in e2) Object.defineProperty(A2, t2, { enumerable: true, get: e2[t2] });
  }
  Nd($o, { flagEnabled: () => Gd, issueFlagNotices: () => Ud, default: () => Hd });
  var Md = II((aI(), Wr(sI))), Ld = II((mn(), Wr(hn)));
  function II(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  var gI = { optimizeUniversalDefaults: false }, vr = { future: ["hoverOnlyWhenSupported", "respectDefaultRingColorOpacity"], experimental: ["optimizeUniversalDefaults", "matchVariant"] };
  function Gd(A2, e2) {
    if (vr.future.includes(e2)) {
      var t2, r2, n2;
      return A2.future === "all" || ((n2 = (r2 = A2 == null || (t2 = A2.future) === null || t2 === void 0 ? void 0 : t2[e2]) !== null && r2 !== void 0 ? r2 : gI[e2]) !== null && n2 !== void 0 ? n2 : false);
    }
    if (vr.experimental.includes(e2)) {
      var i2, o2, s2;
      return A2.experimental === "all" || ((s2 = (o2 = A2 == null || (i2 = A2.experimental) === null || i2 === void 0 ? void 0 : i2[e2]) !== null && o2 !== void 0 ? o2 : gI[e2]) !== null && s2 !== void 0 ? s2 : false);
    }
    return false;
  }
  function uI(A2) {
    if (A2.experimental === "all") return vr.experimental;
    var e2;
    return Object.keys((e2 = A2 == null ? void 0 : A2.experimental) !== null && e2 !== void 0 ? e2 : {}).filter((t2) => vr.experimental.includes(t2) && A2.experimental[t2]);
  }
  function Ud(A2) {
    if (process.env.JEST_WORKER_ID === void 0 && uI(A2).length > 0) {
      let e2 = uI(A2).map((t2) => Md.default.yellow(t2)).join(", ");
      Ld.default.warn("experimental-flags-enabled", [`You have enabled experimental features: ${e2}`, "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."]);
    }
  }
  var Hd = vr;
});
var fI = _((As) => {
  Object.defineProperty(As, "__esModule", { value: true });
  Object.defineProperty(As, "default", { enumerable: true, get: () => cI });
  var Od = Pd(Li()), Td = lI();
  function Pd(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function cI(A2) {
    var e2;
    let t2 = ((e2 = A2 == null ? void 0 : A2.presets) !== null && e2 !== void 0 ? e2 : [Od.default]).slice().reverse().flatMap((i2) => cI(typeof i2 == "function" ? i2() : i2)), r2 = { respectDefaultRingColorOpacity: { theme: { ringColor: { DEFAULT: "#3b82f67f" } } } }, n2 = Object.keys(r2).filter((i2) => (0, Td.flagEnabled)(A2, i2)).map((i2) => r2[i2]);
    return [A2, ...n2, ...t2];
  }
});
var EI = _((es) => {
  Object.defineProperty(es, "__esModule", { value: true });
  Object.defineProperty(es, "default", { enumerable: true, get: () => Kd });
  var _d = BI(oI()), Jd = BI(fI());
  function BI(A2) {
    return A2 && A2.__esModule ? A2 : { default: A2 };
  }
  function Kd(...A2) {
    let [, ...e2] = (0, Jd.default)(A2[0]);
    return (0, _d.default)([...A2, ...e2]);
  }
});
var CI = _((gy, QI) => {
  var ts = EI();
  QI.exports = (ts.__esModule ? ts : { default: ts }).default;
});
var Jt = (A2, e2) => () => (e2 || A2((e2 = { exports: {} }).exports, e2), e2.exports);
var rl = Jt((A2, e2) => {
  e2.exports = ["em", "ex", "ch", "rem", "vh", "vw", "vmin", "vmax", "px", "mm", "cm", "in", "pt", "pc", "mozmm"];
});
var nl = Jt((A2, e2) => {
  e2.exports = ["deg", "grad", "rad", "turn"];
});
var il = Jt((A2, e2) => {
  e2.exports = ["dpi", "dpcm", "dppx"];
});
var ol = Jt((A2, e2) => {
  e2.exports = ["Hz", "kHz"];
});
var sl = Jt((A2, e2) => {
  e2.exports = ["s", "ms"];
});
var al = rl();
var Ss = nl();
var ks = il();
var xs = ol();
var Rs = sl();
function Jn(A2) {
  if (/\.\D?$/.test(A2)) throw new Error("The dot should be followed by a number");
  if (/^[+-]{2}/.test(A2)) throw new Error("Only one leading +/- is allowed");
  if (gl(A2) > 1) throw new Error("Only one dot is allowed");
  if (/%$/.test(A2)) {
    this.type = "percentage", this.value = _n(A2), this.unit = "%";
    return;
  }
  var e2 = Il(A2);
  if (!e2) {
    this.type = "number", this.value = _n(A2);
    return;
  }
  this.type = cl(e2), this.value = _n(A2.substr(0, A2.length - e2.length)), this.unit = e2;
}
Jn.prototype.valueOf = function() {
  return this.value;
};
Jn.prototype.toString = function() {
  return this.value + (this.unit || "");
};
function De(A2) {
  return new Jn(A2);
}
function gl(A2) {
  var e2 = A2.match(/\./g);
  return e2 ? e2.length : 0;
}
function _n(A2) {
  var e2 = parseFloat(A2);
  if (isNaN(e2)) throw new Error("Invalid number: " + A2);
  return e2;
}
var ul = [].concat(Ss, xs, al, ks, Rs);
function Il(A2) {
  var e2 = A2.match(/\D+$/), t2 = e2 && e2[0];
  if (t2 && ul.indexOf(t2) === -1) throw new Error("Invalid unit: " + t2);
  return t2;
}
var ll = Object.assign(Yr(Ss, "angle"), Yr(xs, "frequency"), Yr(ks, "resolution"), Yr(Rs, "time"));
function Yr(A2, e2) {
  return Object.fromEntries(A2.map((t2) => [t2, e2]));
}
function cl(A2) {
  return ll[A2] || "length";
}
function yt(A2) {
  let e2 = typeof A2;
  return !(e2 === "number" || e2 === "bigint" || e2 === "string" || e2 === "boolean");
}
function Ms(A2) {
  return /^class\s/.test(A2.toString());
}
function Yn(A2) {
  return A2 && A2.$$typeof === /* @__PURE__ */ Symbol.for("react.forward_ref");
}
function Ls(A2) {
  return typeof A2 == "function" || Yn(A2);
}
function Gs(A2) {
  return "dangerouslySetInnerHTML" in A2;
}
function Us(A2) {
  let e2 = typeof A2 > "u" ? [] : [].concat(A2).flat(1 / 0), t2 = [];
  for (let r2 = 0; r2 < e2.length; r2++) {
    let n2 = e2[r2];
    typeof n2 > "u" || typeof n2 == "boolean" || n2 === null || (typeof n2 == "number" && (n2 = String(n2)), typeof n2 == "string" && t2.length && typeof t2[t2.length - 1] == "string" ? t2[t2.length - 1] += n2 : t2.push(n2));
  }
  return t2;
}
function X(A2, e2, t2, r2, n2 = false) {
  if (typeof A2 == "number") return A2;
  try {
    if (A2 = A2.trim(), /[ /\(,]/.test(A2)) return;
    if (A2 === String(+A2)) return +A2;
    let i2 = new De(A2);
    if (i2.type === "length") switch (i2.unit) {
      case "em":
        return i2.value * e2;
      case "rem":
        return i2.value * 16;
      case "vw":
        return ~~(i2.value * r2._viewportWidth / 100);
      case "vh":
        return ~~(i2.value * r2._viewportHeight / 100);
      default:
        return i2.value;
    }
    else {
      if (i2.type === "angle") return at(A2);
      if (i2.type === "percentage" && n2) return i2.value / 100 * t2;
    }
  } catch {
  }
}
function at(A2) {
  let e2 = new De(A2);
  switch (e2.unit) {
    case "deg":
      return e2.value;
    case "rad":
      return e2.value * 180 / Math.PI;
    case "turn":
      return e2.value * 360;
    case "grad":
      return 0.9 * e2.value;
  }
}
function Kt(A2, e2) {
  return [A2[0] * e2[0] + A2[2] * e2[1], A2[1] * e2[0] + A2[3] * e2[1], A2[0] * e2[2] + A2[2] * e2[3], A2[1] * e2[2] + A2[3] * e2[3], A2[0] * e2[4] + A2[2] * e2[5] + A2[4], A2[1] * e2[4] + A2[3] * e2[5] + A2[5]];
}
function jA(A2, e2, t2, r2) {
  let n2 = e2[A2];
  if (typeof n2 > "u") {
    if (r2 && typeof A2 < "u") throw new Error(`Invalid value for CSS property "${r2}". Allowed values: ${Object.keys(e2).map((i2) => `"${i2}"`).join(" | ")}. Received: "${A2}".`);
    n2 = t2;
  }
  return n2;
}
var Kn;
var Wn;
var Hs = [32, 160, 4961, 65792, 65793, 4153, 4241, 10].map((A2) => String.fromCodePoint(A2));
var mt = /* @__PURE__ */ new Map();
var Bl = 500;
function OA(A2, e2, t2) {
  let r2 = `${e2}:${t2 || ""}:${A2}`;
  if (mt.has(r2)) return mt.get(r2);
  if (!Kn || !Wn) {
    if (!(typeof Intl < "u" && "Segmenter" in Intl)) throw new Error("Intl.Segmenter does not exist, please use import a polyfill.");
    Kn = new Intl.Segmenter(t2, { granularity: "word" }), Wn = new Intl.Segmenter(t2, { granularity: "grapheme" });
  }
  let n2;
  if (e2 === "grapheme") n2 = [...Wn.segment(A2)].map((i2) => i2.segment);
  else {
    let i2 = [...Kn.segment(A2)].map((a2) => a2.segment), o2 = [], s2 = 0;
    for (; s2 < i2.length; ) {
      let a2 = i2[s2];
      if (a2 == "\xA0") {
        let g3 = s2 === 0 ? "" : o2.pop(), u4 = s2 === i2.length - 1 ? "" : i2[s2 + 1];
        o2.push(g3 + "\xA0" + u4), s2 += 2;
      } else o2.push(a2), s2++;
    }
    n2 = o2;
  }
  if (mt.size >= Bl) {
    let i2 = mt.keys().next().value;
    mt.delete(i2);
  }
  return mt.set(r2, n2), n2;
}
function v2(A2, e2, t2) {
  Fs(A2, "element");
  let r2 = "";
  for (let [n2, i2] of Object.entries(e2)) typeof i2 < "u" && (Fs(n2, "attribute"), r2 += ` ${n2}="${Cl(i2)}"`);
  return t2 ? `<${A2}${r2}>${t2}</${A2}>` : `<${A2}${r2}/>`;
}
var Os = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var El = Os + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var Ql = new RegExp("^[" + Os + "][" + El + "]*$", "u");
var vs = /* @__PURE__ */ new Set();
function Fs(A2, e2) {
  if (!vs.has(A2)) {
    if (!Ql.test(A2)) throw new Error(`Invalid XML ${e2} name: ${JSON.stringify(A2)}`);
    vs.add(A2);
  }
}
function Cl(A2) {
  return typeof A2 == "number" || typeof A2 == "bigint" || typeof A2 == "boolean" ? "" + A2 : (0, import_escape_html.default)(String(A2));
}
function Ts(A2) {
  return (0, import_escape_html.default)(String(A2));
}
function Ps(A2 = 20) {
  let e2 = /* @__PURE__ */ new Map();
  function t2(i2) {
    let o2 = e2.get(i2);
    if (o2 !== void 0) return e2.delete(i2), e2.set(i2, o2), o2;
  }
  function r2(i2, o2) {
    if (e2.has(i2)) e2.delete(i2);
    else if (e2.size >= A2) {
      let s2 = e2.keys().next().value;
      e2.delete(s2);
    }
    e2.set(i2, o2);
  }
  function n2() {
    e2.clear();
  }
  return { set: r2, get: t2, clear: n2 };
}
function wt(A2) {
  return A2 ? A2.split(/[, ]/).filter(Boolean).map(Number) : null;
}
function qr(A2) {
  return typeof A2 == "string";
}
function _s(A2) {
  return typeof A2 == "number";
}
function Js(A2) {
  return typeof A2 > "u";
}
function He(A2, e2) {
  if (typeof A2 == "number") return A2;
  if (A2.endsWith("%")) {
    let t2 = parseFloat(A2.slice(0, -1));
    if (isNaN(t2)) {
      console.warn(`Invalid value "${A2}"${typeof e2 == "string" ? ` for "${e2}"` : ""}. Expected a percentage value (e.g., "50%").`);
      return;
    }
    return `${t2}%`;
  }
  console.warn(`Invalid value "${A2}"${typeof e2 == "string" ? ` for "${e2}"` : ""}. Expected a number or a percentage value (e.g., "50%").`);
}
function qe(A2, e2) {
  if (typeof A2 == "number") return A2;
  if (A2 === "auto") return "auto";
  if (A2.endsWith("%")) {
    let t2 = parseFloat(A2.slice(0, -1));
    if (isNaN(t2)) {
      console.warn(`Invalid value "${A2}"${typeof e2 == "string" ? ` for "${e2}"` : ""}. Expected a percentage value (e.g., "50%").`);
      return;
    }
    return `${t2}%`;
  }
  console.warn(`Invalid value "${A2}"${typeof e2 == "string" ? ` for "${e2}"` : ""}. Expected a number, "auto", or a percentage value (e.g., "50%").`);
}
function Ks(A2, e2) {
  if (e2 === "break-all") return { words: OA(A2, "grapheme"), requiredBreaks: [] };
  if (e2 === "keep-all") return { words: OA(A2, "word"), requiredBreaks: [] };
  let t2 = new $557adaaeb0c7885f$exports(A2), r2 = 0, n2 = t2.nextBreak(), i2 = [], o2 = [false];
  for (; n2; ) {
    let s2 = A2.slice(r2, n2.position);
    i2.push(s2), n2.required ? o2.push(true) : o2.push(false), r2 = n2.position, n2 = t2.nextBreak();
  }
  return { words: i2, requiredBreaks: o2 };
}
var Ws = (A2) => A2.replaceAll(/([A-Z])/g, (e2, t2) => `-${t2.toLowerCase()}`);
function Oe(A2, e2 = ",") {
  let t2 = [], r2 = 0, n2 = 0;
  e2 = new RegExp(e2);
  for (let i2 = 0; i2 < A2.length; i2++) A2[i2] === "(" ? n2++ : A2[i2] === ")" && n2--, n2 === 0 && e2.test(A2[i2]) && (t2.push(A2.slice(r2, i2).trim()), r2 = i2 + 1);
  return t2.push(A2.slice(r2).trim()), t2;
}
function Xe() {
  return Promise.resolve().then(() => (ei(), Ai)).then((A2) => A2.getYoga());
}
Promise.resolve().then(() => ei());
var ea = /* @__PURE__ */ Symbol.for("react.fragment");
var Zr = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var bl = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function ti(A2) {
  let e2 = A2.split(".").map((i2) => Number.parseInt(i2, 10));
  if (e2.length !== 4 || e2.some((i2) => !Number.isInteger(i2) || i2 < 0 || i2 > 255)) return true;
  let [t2, r2, n2] = e2;
  return t2 === 0 || t2 === 10 || t2 === 100 && r2 >= 64 && r2 <= 127 || t2 === 127 || t2 === 169 && r2 === 254 || t2 === 172 && r2 >= 16 && r2 <= 31 || t2 === 192 && r2 === 0 && n2 === 0 || t2 === 192 && r2 === 168 || t2 === 198 && (r2 === 18 || r2 === 19) || t2 >= 224;
}
function Sl(A2) {
  let e2 = A2, t2 = e2.indexOf("%");
  t2 !== -1 && (e2 = e2.slice(0, t2));
  let r2 = e2.split("::");
  if (r2.length > 2) return null;
  let n2 = (o2) => {
    if (o2 === "") return [];
    let s2 = [], a2 = o2.split(":");
    for (let g3 = 0; g3 < a2.length; g3++) {
      let u4 = a2[g3];
      if (u4.includes(".")) {
        if (g3 !== a2.length - 1 || !Zr.test(u4)) return null;
        let [I2, B2, f3, E2] = u4.split(".").map((C2) => Number.parseInt(C2, 10));
        if ([I2, B2, f3, E2].some((C2) => !Number.isInteger(C2) || C2 < 0 || C2 > 255)) return null;
        s2.push(I2 << 8 | B2, f3 << 8 | E2);
        continue;
      }
      if (!/^[0-9a-f]{1,4}$/.test(u4)) return null;
      s2.push(Number.parseInt(u4, 16));
    }
    return s2;
  }, i2 = n2(r2[0]);
  if (i2 === null) return null;
  if (r2.length === 2) {
    let o2 = n2(r2[1]);
    if (o2 === null) return null;
    let s2 = 8 - i2.length - o2.length;
    return s2 < 0 ? null : [...i2, ...new Array(s2).fill(0), ...o2];
  }
  return i2.length === 8 ? i2 : null;
}
function kl(A2) {
  let e2 = (s2) => A2.slice(0, s2).every((a2) => a2 === 0);
  if (!(e2(6) || e2(5) && A2[5] === 65535 || e2(4) && A2[4] === 65535 && A2[5] === 0 || A2[0] === 100 && A2[1] === 65435 && A2[2] === 0 && A2[3] === 0 && A2[4] === 0 && A2[5] === 0 || A2[0] === 100 && A2[1] === 65435 && A2[2] === 1)) return null;
  let r2 = A2[6] >> 8 & 255, n2 = A2[6] & 255, i2 = A2[7] >> 8 & 255, o2 = A2[7] & 255;
  return `${r2}.${n2}.${i2}.${o2}`;
}
function ra(A2) {
  let e2 = Sl(A2);
  if (e2 === null) return true;
  let t2 = kl(e2);
  return t2 ? ti(t2) : !!(e2.every((r2) => r2 === 0) || e2.slice(0, 7).every((r2) => r2 === 0) && e2[7] === 1 || (e2[0] & 65024) === 64512 || (e2[0] & 65472) === 65152 || (e2[0] & 65472) === 65216 || (e2[0] & 65280) === 65280 || e2[0] === 8193 && e2[1] === 3512);
}
function xl(A2) {
  let e2 = A2.toLowerCase().replace(/^\[|\]$/g, "");
  return Zr.test(e2) ? ti(e2) : e2.includes(":") ? ra(e2) : true;
}
function na(A2) {
  let e2;
  try {
    e2 = new URL(A2);
  } catch {
    return null;
  }
  if (e2.protocol !== "http:" && e2.protocol !== "https:") return null;
  let t2 = e2.hostname.toLowerCase().replace(/\.+$/, "");
  return t2.startsWith("[") && t2.endsWith("]") && (t2 = t2.slice(1, -1)), t2 ? { url: e2, host: t2 } : null;
}
function Rl(A2) {
  let e2 = na(A2);
  if (!e2) return true;
  let { host: t2 } = e2;
  return t2 === "localhost" || t2.endsWith(".localhost") || t2 === "local" || t2.endsWith(".local") || t2 === "internal" || t2.endsWith(".internal") ? true : Zr.test(t2) ? ti(t2) : t2.includes(":") ? ra(t2) : false;
}
function zr(A2) {
  return new Error(`Image source resolves to a blocked address (SSRF protection): ${A2}`);
}
function vl(A2) {
  if (Rl(A2)) throw zr(A2);
}
var kt;
async function Fl() {
  if (kt !== void 0) return kt;
  if (typeof window < "u") return kt = null, null;
  try {
    let e2 = await new Function("s", "return import(s)")("node:dns/promises");
    return kt = (t2, r2) => e2.lookup(t2, r2), kt;
  } catch {
    return kt = null, null;
  }
}
async function Nl(A2, e2) {
  vl(A2);
  let t2 = na(A2);
  if (!t2) throw zr(A2);
  let { host: r2 } = t2;
  if (Zr.test(r2) || r2.includes(":")) return;
  let n2 = await Fl();
  if (!n2) return;
  let i2;
  try {
    i2 = await n2(r2, { all: true });
  } catch {
    throw new Error(`Can't resolve image host: ${A2}`);
  }
  if (i2.length === 0) throw new Error(`Can't resolve image host: ${A2}`);
  for (let { address: o2 } of i2) if (xl(o2)) throw zr(A2);
}
async function ta(A2) {
  try {
    A2.body && typeof A2.body.cancel == "function" ? await A2.body.cancel() : typeof A2.arrayBuffer == "function" && await A2.arrayBuffer();
  } catch {
  }
}
async function ia(A2, e2) {
  let t2 = globalThis.fetch, r2 = A2;
  for (let n2 = 0; n2 <= 10; n2++) {
    await Nl(r2);
    let i2 = await t2(r2, { redirect: "manual" });
    if (i2.type === "opaqueredirect") throw await ta(i2), zr(r2);
    let o2 = i2.headers.get("location");
    if (bl.has(i2.status) && o2) {
      await ta(i2), r2 = new URL(o2, r2).href;
      continue;
    }
    return i2;
  }
  throw new Error(`Image source redirected too many times (SSRF protection): ${A2}`);
}
var Ml = "image/avif";
var jr = "image/webp";
var $r = "image/apng";
var An = "image/png";
var en = "image/jpeg";
var tn = "image/gif";
var ri = "image/svg+xml";
function aa(A2) {
  let e2 = new DataView(A2), t2 = 4, r2 = e2.byteLength;
  for (; t2 < r2; ) {
    let n2 = e2.getUint16(t2, false);
    if (n2 > r2) throw new TypeError("Invalid JPEG");
    let i2 = e2.getUint8(n2 + 1 + t2);
    if (i2 === 192 || i2 === 193 || i2 === 194) return [e2.getUint16(n2 + 7 + t2, false), e2.getUint16(n2 + 5 + t2, false)];
    t2 += n2 + 2;
  }
  throw new TypeError("Invalid JPEG");
}
function ga(A2) {
  let e2 = new DataView(A2), t2 = new Uint8Array(A2);
  if (e2.byteLength < 20 || e2.getUint32(0) !== 1380533830 || e2.getUint32(8) !== 1464156752) throw new TypeError("Invalid WebP");
  let r2 = e2.getUint32(4, true) + 8;
  if (r2 < 20 || r2 > e2.byteLength) throw new TypeError("Invalid WebP");
  let n2 = 12;
  for (; n2 + 8 <= r2; ) {
    let i2 = e2.getUint32(n2), o2 = e2.getUint32(n2 + 4, true), s2 = n2 + 8, a2 = s2 + o2;
    if (a2 > r2) throw new TypeError("Invalid WebP");
    if (i2 === 1448097824) {
      if (o2 < 10 || t2[s2 + 3] !== 157 || t2[s2 + 4] !== 1 || t2[s2 + 5] !== 42) throw new TypeError("Invalid WebP");
      let g3 = e2.getUint16(s2 + 6, true) & 16383, u4 = e2.getUint16(s2 + 8, true) & 16383;
      if (!g3 || !u4) throw new TypeError("Invalid WebP");
      return [g3, u4];
    }
    if (i2 === 1448097868) {
      if (o2 < 5 || t2[s2] !== 47) throw new TypeError("Invalid WebP");
      let g3 = e2.getUint32(s2 + 1, true);
      return [(g3 & 16383) + 1, (g3 >>> 14 & 16383) + 1];
    }
    if (i2 === 1448097880) {
      if (o2 < 10) throw new TypeError("Invalid WebP");
      return [t2[s2 + 4] + (t2[s2 + 5] << 8) + (t2[s2 + 6] << 16) + 1, t2[s2 + 7] + (t2[s2 + 8] << 8) + (t2[s2 + 9] << 16) + 1];
    }
    n2 = a2 + o2 % 2;
  }
  throw new TypeError("Invalid WebP");
}
function ua(A2) {
  let e2 = new Uint8Array(A2.slice(6, 10));
  return [e2[0] | e2[1] << 8, e2[2] | e2[3] << 8];
}
function Ia(A2) {
  let e2 = new DataView(A2);
  return [e2.getUint16(18, false), e2.getUint16(22, false)];
}
var Re = Ps(500);
var Yt = /* @__PURE__ */ new Map();
var Ll = [An, $r, en, tn, ri, jr];
var Gl = /<svg[^>]*>/i;
var Ul = /viewBox=['"]([^'"]+)['"]/;
var Hl = /width=['"](\d*\.?\d+)['"]/;
var Ol = /height=['"](\d*\.?\d+)['"]/;
function Tl(A2) {
  let e2 = new Uint8Array(A2), t2 = 32768, r2 = "";
  for (let n2 = 0; n2 < e2.length; n2 += t2) {
    let i2 = e2.subarray(n2, Math.min(n2 + t2, e2.length));
    r2 += String.fromCharCode(...i2);
  }
  return btoa(r2);
}
function Pl(A2) {
  let e2 = atob(A2), t2 = e2.length, r2 = new Uint8Array(t2);
  for (let n2 = 0; n2 < t2; n2++) r2[n2] = e2.charCodeAt(n2);
  return r2.buffer;
}
function oa(A2, e2) {
  let t2 = e2.match(Gl);
  if (!t2) throw new Error(`Failed to parse SVG from ${A2}`);
  let r2 = t2[0], n2 = Ul.exec(r2), i2 = Hl.exec(r2), o2 = Ol.exec(r2), s2 = n2 ? wt(n2[1]) : null;
  if (!s2 && (!i2 || !o2)) throw new Error(`Failed to parse SVG from ${A2}: missing "viewBox"`);
  let a2 = s2 ? [s2[2], s2[3]] : [+i2[1], +o2[1]], g3 = a2[0] / a2[1];
  return i2 && o2 ? [+i2[1], +o2[1]] : i2 ? [+i2[1], +i2[1] / g3] : o2 ? [+o2[1] * g3, +o2[1]] : [a2[0], a2[1]];
}
function sa(A2) {
  let e2, t2 = _l(new Uint8Array(A2));
  switch (t2) {
    case An:
    case $r:
      e2 = Ia(A2);
      break;
    case tn:
      e2 = ua(A2);
      break;
    case en:
      e2 = aa(A2);
      break;
    case jr:
      e2 = ga(A2);
      break;
  }
  if (!Ll.includes(t2)) throw new Error(`Unsupported image type: ${t2 || "unknown"}`);
  return [`data:${t2};base64,${Tl(A2)}`, e2];
}
async function xt(A2) {
  if (!A2) throw new Error("Image source is not provided.");
  if (typeof A2 == "object") {
    let [i2, o2] = sa(A2);
    return [i2, ...o2];
  }
  if ((A2.startsWith('"') && A2.endsWith('"') || A2.startsWith("'") && A2.endsWith("'")) && (A2 = A2.slice(1, -1)), typeof window > "u" && !A2.startsWith("http") && !A2.startsWith("data:")) throw new Error(`Image source must be an absolute URL: ${A2}`);
  if (A2.startsWith("data:")) {
    let i2;
    try {
      i2 = /data:(?<imageType>[a-z/+]+)(;[^;=]+=[^;=]+)*?(;(?<encodingType>[^;,]+))?,(?<dataString>.*)/g.exec(A2).groups;
    } catch {
      return console.warn("Image data URI resolved without size:" + A2), [A2];
    }
    let { imageType: o2, encodingType: s2, dataString: a2 } = i2;
    if (o2 === ri) {
      let g3 = s2 === "base64" ? atob(a2) : decodeURIComponent(a2.replace(/ /g, "%20")), u4 = s2 === "base64" ? A2 : `data:image/svg+xml;base64,${btoa(g3)}`, I2 = oa(A2, g3);
      return Re.set(A2, [u4, ...I2]), [u4, ...I2];
    } else if (s2 === "base64") {
      let g3, u4 = Pl(a2);
      switch (o2) {
        case An:
        case $r:
          g3 = Ia(u4);
          break;
        case tn:
          g3 = ua(u4);
          break;
        case en:
          g3 = aa(u4);
          break;
        case jr:
          g3 = ga(u4);
          break;
      }
      return Re.set(A2, [A2, ...g3]), [A2, ...g3];
    } else return console.warn("Image data URI resolved without size:" + A2), Re.set(A2, [A2]), [A2];
  }
  if (!globalThis.fetch) throw new Error("`fetch` is required to be polyfilled to load images.");
  if (Yt.has(A2)) return Yt.get(A2);
  let e2 = Re.get(A2);
  if (e2) return e2;
  let t2 = A2, n2 = (typeof window > "u" ? () => ia(t2) : () => fetch(t2))().then((i2) => {
    let o2 = i2.headers.get("content-type");
    return o2 === "image/svg+xml" || o2 === "application/svg+xml" ? i2.text() : i2.arrayBuffer();
  }).then((i2) => {
    if (typeof i2 == "string") try {
      let a2 = `data:image/svg+xml;base64,${btoa(i2)}`, g3 = oa(t2, i2);
      return [a2, ...g3];
    } catch (a2) {
      throw new Error(`Failed to parse SVG image: ${a2.message}`);
    }
    let [o2, s2] = sa(i2);
    return [o2, ...s2];
  }).then((i2) => (Re.set(t2, i2), i2)).catch((i2) => {
    if (i2 instanceof Error && i2.message.includes("SSRF protection")) throw i2;
    return console.error(`Can't load image ${t2}: ` + i2.message), Re.set(t2, []), [];
  });
  return Yt.set(t2, n2), n2;
}
function _l(A2) {
  return [255, 216, 255].every((e2, t2) => A2[t2] === e2) ? en : [137, 80, 78, 71, 13, 10, 26, 10].every((e2, t2) => A2[t2] === e2) ? Jl(A2) ? $r : An : [71, 73, 70, 56].every((e2, t2) => A2[t2] === e2) ? tn : [82, 73, 70, 70, 0, 0, 0, 0, 87, 69, 66, 80].every((e2, t2) => !e2 || A2[t2] === e2) ? jr : [60, 63, 120, 109, 108].every((e2, t2) => A2[t2] === e2) ? ri : [0, 0, 0, 0, 102, 116, 121, 112, 97, 118, 105, 102].every((e2, t2) => !e2 || A2[t2] === e2) ? Ml : null;
}
function Jl(A2) {
  let e2 = new DataView(A2.buffer), t2, r2, n2 = 8, i2 = false;
  for (; !i2 && t2 !== "IEND" && n2 < A2.length; ) {
    r2 = e2.getUint32(n2);
    let o2 = A2.subarray(n2 + 4, n2 + 8);
    t2 = String.fromCharCode(...o2), i2 = t2 === "acTL", n2 += 12 + r2;
  }
  return i2;
}
var la = { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", href: "href", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDasharray: "stroke-dasharray", strokeDashoffset: "stroke-dashoffset", strokeLinecap: "stroke-linecap", strokeLinejoin: "stroke-linejoin", strokeMiterlimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", xlinkActuate: "xlink:actuate", xlinkArcrole: "xlink:arcrole", xlinkHref: "xlink:href", xlinkRole: "xlink:role", xlinkShow: "xlink:show", xlinkTitle: "xlink:title", xlinkType: "xlink:type", xmlBase: "xml:base", xmlLang: "xml:lang", xmlSpace: "xml:space", xmlnsXlink: "xmlns:xlink" };
var Kl = /[\r\n%#()<>?[\\\]^`{|}"'&]/g;
function rn(A2, e2) {
  if (!A2) return "";
  if (Array.isArray(A2)) return A2.map((a2) => rn(a2, e2)).join("");
  if (typeof A2 != "object") return Ts(A2);
  let t2 = A2.type;
  if (t2 === "text") throw new Error("<text> nodes are not currently supported, please convert them to <path>");
  let { children: r2, style: n2, ...i2 } = A2.props || {}, o2 = (n2 == null ? void 0 : n2.color) || e2;
  if (t2 === ea) return rn(r2, o2);
  if (typeof t2 != "string") throw new Error("Only intrinsic elements are supported inside <svg>");
  let s2 = {};
  for (let [a2, g3] of Object.entries(i2)) {
    let u4 = g3;
    typeof u4 == "string" && u4.toLowerCase() === "currentcolor" && (u4 = o2), (a2 === "href" || a2 === "xlinkHref") && t2 === "image" && (u4 = Re.get(u4)[0]);
    let I2 = la[a2] || a2;
    s2[I2] = u4;
  }
  return n2 && (s2.style = Object.entries(n2).map(([a2, g3]) => `${Ws(a2)}:${g3}`).join(";")), v2(t2, s2, rn(r2, o2));
}
async function ca(A2) {
  let e2 = /* @__PURE__ */ new Set(), t2 = (r2) => {
    if (r2 && yt(r2)) {
      if (Array.isArray(r2)) {
        r2.forEach((n2) => t2(n2));
        return;
      } else if (typeof r2 == "object") if (r2.type === "image") {
        let n2 = r2.props.href || r2.props.xlinkHref;
        n2 && (e2.has(n2) || e2.add(n2));
      } else r2.type === "img" && (e2.has(r2.props.src) || e2.add(r2.props.src));
      Array.isArray(r2.props.children) ? r2.props.children.map((n2) => t2(n2)) : t2(r2.props.children);
    }
  };
  return t2(A2), Promise.all(Array.from(e2).map((r2) => xt(r2)));
}
async function fa(A2, e2) {
  let { viewBox: t2, viewbox: r2, width: n2, height: i2, className: o2, style: s2, children: a2, ...g3 } = A2.props || {};
  t2 ||= r2, g3.xmlns = "http://www.w3.org/2000/svg";
  let u4 = (s2 == null ? void 0 : s2.color) || e2, I2 = wt(t2), B2 = I2 ? I2[3] / I2[2] : null;
  n2 = n2 || B2 && i2 ? i2 / B2 : null, i2 = i2 || B2 && n2 ? n2 * B2 : null, g3.width = n2, g3.height = i2, t2 && (g3.viewBox = t2);
  let f3 = {};
  for (let [C2, p2] of Object.entries(g3)) {
    let h3 = la[C2] || C2;
    f3[h3] = typeof p2 == "string" && p2.toLowerCase() === "currentcolor" ? u4 : p2;
  }
  return `data:image/svg+xml;utf8,${v2("svg", f3, rn(a2, u4)).replace(Kl, encodeURIComponent)}`;
}
var Ie = "flex";
var Ba = { p: { display: Ie, marginTop: "1em", marginBottom: "1em" }, div: { display: Ie }, blockquote: { display: Ie, marginTop: "1em", marginBottom: "1em", marginLeft: 40, marginRight: 40 }, center: { display: Ie, textAlign: "center" }, hr: { display: Ie, marginTop: "0.5em", marginBottom: "0.5em", marginLeft: "auto", marginRight: "auto", borderWidth: 1, borderStyle: "solid" }, h1: { display: Ie, fontSize: "2em", marginTop: "0.67em", marginBottom: "0.67em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h2: { display: Ie, fontSize: "1.5em", marginTop: "0.83em", marginBottom: "0.83em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h3: { display: Ie, fontSize: "1.17em", marginTop: "1em", marginBottom: "1em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h4: { display: Ie, marginTop: "1.33em", marginBottom: "1.33em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h5: { display: Ie, fontSize: "0.83em", marginTop: "1.67em", marginBottom: "1.67em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, h6: { display: Ie, fontSize: "0.67em", marginTop: "2.33em", marginBottom: "2.33em", marginLeft: 0, marginRight: 0, fontWeight: "bold" }, u: { textDecoration: "underline" }, strong: { fontWeight: "bold" }, b: { fontWeight: "bold" }, i: { fontStyle: "italic" }, em: { fontStyle: "italic" }, code: { fontFamily: "monospace" }, kbd: { fontFamily: "monospace" }, pre: { display: Ie, fontFamily: "monospace", whiteSpace: "pre", marginTop: "1em", marginBottom: "1em" }, mark: { backgroundColor: "yellow", color: "black" }, big: { fontSize: "larger" }, small: { fontSize: "smaller" }, s: { textDecoration: "line-through" } };
var Wl = /* @__PURE__ */ new Set(["color", "font", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontFeatureSettings", "letterSpacing", "lineHeight", "textAlign", "textIndent", "textTransform", "textShadowOffset", "textShadowColor", "textShadowRadius", "WebkitTextStrokeWidth", "WebkitTextStrokeColor", "textDecorationLine", "textDecorationStyle", "textDecorationColor", "textDecorationSkipInk", "whiteSpace", "transform", "wordBreak", "tabSize", "opacity", "filter", "_viewportWidth", "_viewportHeight", "_inheritedClipPathId", "_inheritedMaskId", "_inheritedBackgroundClipTextPath", "_inheritedBackgroundClipTextHasBackground"]);
function ni(A2) {
  let e2 = {};
  for (let t2 in A2) (Wl.has(t2) || t2.startsWith("--")) && (e2[t2] = A2[t2]);
  return e2;
}
function ql(A2, e2) {
  try {
    let t2 = new De(A2);
    switch (t2.unit) {
      case "px":
        return { absolute: t2.value };
      case "em":
        return { absolute: t2.value * e2 };
      case "rem":
        return { absolute: t2.value * 16 };
      case "%":
        return { relative: t2.value };
      default:
        return {};
    }
  } catch {
    return {};
  }
}
function ii(A2, e2, t2) {
  switch (A2) {
    case "top":
      return { yRelative: 0 };
    case "left":
      return { xRelative: 0 };
    case "right":
      return { xRelative: 100 };
    case "bottom":
      return { yRelative: 100 };
    case "center":
      return {};
    default: {
      let r2 = ql(A2, e2);
      return r2.absolute ? { [t2 ? "xAbsolute" : "yAbsolute"]: r2.absolute } : r2.relative ? { [t2 ? "xRelative" : "yRelative"]: r2.relative } : {};
    }
  }
}
function oi(A2, e2) {
  if (typeof A2 == "number") return { xAbsolute: A2 };
  let t2;
  try {
    t2 = (0, import_postcss_value_parser.default)(A2).nodes.filter((r2) => r2.type === "word").map((r2) => r2.value);
  } catch {
    return {};
  }
  return t2.length === 1 ? ii(t2[0], e2, true) : t2.length === 2 ? ((t2[0] === "top" || t2[0] === "bottom" || t2[1] === "left" || t2[1] === "right") && t2.reverse(), { ...ii(t2[0], e2, true), ...ii(t2[1], e2, false) }) : {};
}
function qt(A2, e2) {
  let t2 = (0, import_css_to_react_native2.getPropertyName)(`mask-${e2}`);
  return A2[t2] || A2[`WebkitM${t2.substring(1)}`];
}
function Ea(A2) {
  let e2 = A2.maskImage || A2.WebkitMaskImage, t2 = { position: qt(A2, "position") || "0% 0%", size: qt(A2, "size") || "100% 100%", repeat: qt(A2, "repeat") || "repeat", origin: qt(A2, "origin") || "border-box", clip: qt(A2, "origin") || "border-box" };
  return Oe(e2).filter((n2) => n2 && n2 !== "none").reverse().map((n2) => ({ image: n2, ...t2 }));
}
var Vl = { round: 1, squircle: 2, square: 1 / 0, bevel: 0, scoop: -1, notch: -1 / 0 };
function si(A2) {
  let e2 = A2.trim().toLowerCase(), t2 = Vl[e2];
  if (typeof t2 < "u") return t2;
  let r2 = e2.match(/^superellipse\(\s*(-?infinity|[-+]?(?:\d*\.)?\d+(?:e[-+]?\d+)?)\s*\)$/);
  if (!r2) throw new Error('Invalid corner shape value: "' + A2 + '".');
  if (r2[1] === "infinity") return 1 / 0;
  if (r2[1] === "-infinity") return -1 / 0;
  let n2 = Number(r2[1]);
  if (!Number.isFinite(n2)) throw new Error('Invalid corner shape value: "' + A2 + '".');
  return n2;
}
function nn(A2, e2 = 4) {
  let t2 = A2.match(/superellipse\([^)]*\)|[^\s]+/gi) || [];
  if (t2.length < 1 || t2.length > e2) throw new Error('Invalid corner shape value: "' + A2 + '".');
  for (let r2 of t2) si(r2);
  return t2;
}
var Qa = { brightness: 1, contrast: 1, grayscale: 1, invert: 1, opacity: 1, saturate: 1, sepia: 1 };
function Ca(A2, e2, t2 = "black") {
  if (A2 === "none") return [];
  if (typeof A2 != "string") throw new Error('Invalid `backdropFilter` value: "' + A2 + '".');
  let r2 = Oe(A2, /\s/).filter(Boolean);
  if (!r2.length) throw new Error('Invalid `backdropFilter` value: "' + A2 + '".');
  return r2.map((n2) => {
    let i2 = n2.match(/^([a-z-]+)\((.*)\)$/i);
    if (!i2) throw new Error("Invalid filter function in `backdropFilter`.");
    let o2 = i2[1].toLowerCase(), s2 = i2[2].trim();
    if (o2 === "blur") {
      let a2 = s2 ? on(s2, e2, "blur()") : 0;
      if (a2 < 0) throw new Error("Invalid `blur()` radius in `backdropFilter`.");
      return { type: "blur", value: a2 };
    }
    if (o2 === "hue-rotate") {
      let a2 = s2 === "0" || !s2 ? 0 : at(s2);
      if (typeof a2 > "u") throw new Error("Invalid `hue-rotate()` angle in `backdropFilter`.");
      return { type: "hue-rotate", value: a2 };
    }
    if (o2 === "drop-shadow") return Zl(s2, e2, t2);
    if (o2 in Qa) {
      let a2 = o2, g3 = s2 ? jl(s2, `${a2}()`) : Qa[a2], u4 = ["grayscale", "invert", "opacity", "sepia"].includes(a2) ? Math.min(g3, 1) : g3;
      return { type: a2, value: u4 };
    }
    throw new Error(`Unsupported \`${o2}()\` in \`backdropFilter\`.`);
  });
}
function Zl(A2, e2, t2) {
  let r2 = Oe(A2, /\s/).filter(Boolean), n2 = t2, i2 = [];
  for (let g3 of r2) index_esm_default(g3) ? n2 = g3 : i2.push(g3);
  if (i2.length < 2 || i2.length > 3) throw new Error("Invalid `drop-shadow()` value in `backdropFilter`.");
  let o2 = on(i2[0], e2, "drop-shadow()"), s2 = on(i2[1], e2, "drop-shadow()"), a2 = i2[2] ? on(i2[2], e2, "drop-shadow()") : 0;
  if (a2 < 0) throw new Error("Invalid `drop-shadow()` blur radius in `backdropFilter`.");
  return { type: "drop-shadow", offsetX: o2, offsetY: s2, blurRadius: a2, color: n2 };
}
function on(A2, e2, t2) {
  let r2 = X(A2, e2.fontSize, 0, e2);
  if (typeof r2 > "u") throw new Error(`Invalid length \`${A2}\` in \`${t2}\` for \`backdropFilter\`.`);
  return r2;
}
function jl(A2, e2) {
  let t2 = A2.match(/^([+-]?(?:\d+\.?\d*|\.\d+))%$/), r2 = t2 ? Number(t2[1]) / 100 : Number(A2);
  if (!Number.isFinite(r2) || r2 < 0) throw new Error(`Invalid amount \`${A2}\` in \`${e2}\` for \`backdropFilter\`.`);
  return r2;
}
function pa(A2) {
  let e2 = {}, t2 = {};
  for (let r2 in A2) r2.startsWith("--") ? e2[r2] = String(A2[r2]) : t2[r2] = A2[r2];
  return { variables: e2, remainingStyle: t2 };
}
function ha(A2, e2) {
  return { ...A2, ...e2 };
}
function Vt(A2, e2, t2 = /* @__PURE__ */ new Set()) {
  if (typeof A2 != "string" || !A2.includes("var(")) return A2;
  try {
    let r2 = (0, import_postcss_value_parser2.default)(A2), n2 = false;
    if (r2.walk((i2) => {
      if (i2.type === "function" && i2.value === "var") {
        n2 = true;
        let o2 = $l(i2);
        if (!o2) return;
        let { varName: s2, fallback: a2 } = o2;
        if (t2.has(s2)) {
          console.warn(`Circular reference detected for CSS variable: ${s2}`), a2 !== void 0 ? Xt(i2, a2) : Xt(i2, "initial");
          return;
        }
        let g3 = e2[s2];
        if (g3 !== void 0) {
          let u4 = new Set(t2);
          u4.add(s2);
          let I2 = Vt(g3, e2, u4);
          Xt(i2, String(I2));
        } else if (a2 !== void 0) {
          let u4 = Vt(a2, e2, t2);
          Xt(i2, String(u4));
        } else Xt(i2, "initial");
      }
    }), n2) return r2.toString();
  } catch {
    console.warn(`Failed to parse CSS value for variable resolution: ${A2}`);
  }
  return A2;
}
function $l(A2) {
  if (!A2.nodes || A2.nodes.length === 0) return null;
  let e2, t2 = -1;
  for (let n2 = 0; n2 < A2.nodes.length; n2++) {
    let i2 = A2.nodes[n2];
    if (i2.type === "word" && !e2) e2 = i2;
    else if (i2.type === "div" && i2.value === ",") {
      t2 = n2;
      break;
    }
  }
  if (!e2 || e2.type !== "word") return null;
  let r2 = e2.value.trim();
  if (t2 !== -1 && t2 < A2.nodes.length - 1) {
    let n2 = A2.nodes.slice(t2 + 1), i2 = import_postcss_value_parser2.default.stringify(n2).trim();
    return { varName: r2, fallback: i2 };
  }
  return { varName: r2 };
}
function Xt(A2, e2) {
  A2.type = "word", A2.value = e2, delete A2.nodes;
}
var nc = /* @__PURE__ */ new Set(["flex", "flexGrow", "flexShrink", "flexBasis", "fontWeight", "lineHeight", "opacity", "scale", "scaleX", "scaleY"]);
var ic = /* @__PURE__ */ new Set(["lineHeight"]);
function oc(A2, e2, t2, r2) {
  return A2 === "textDecoration" && !t2.includes(e2.textDecorationColor) && (e2.textDecorationColor = r2), e2;
}
function gt(A2, e2) {
  let t2 = Number(e2);
  return isNaN(t2) ? e2 : nc.has(A2) ? ic.has(A2) ? t2 : String(e2) : t2 + "px";
}
function sc(A2, e2, t2, r2) {
  if (A2 === "zIndex") return console.warn("`z-index` is currently not supported."), { [A2]: e2 };
  if (A2 === "lineHeight") return { lineHeight: gt(A2, e2) };
  if (A2 === "fontFamily") return { fontFamily: e2.split(",").map((i2) => i2.trim().replace(/(^['"])|(['"]$)/g, "").toLocaleLowerCase()) };
  if (A2 === "borderRadius") {
    if (typeof e2 != "string" || !e2.includes("/")) return;
    let [i2, o2] = e2.split("/"), s2 = (0, import_css_to_react_native.getStylesForProperty)(A2, i2, true), a2 = (0, import_css_to_react_native.getStylesForProperty)(A2, o2, true);
    for (let g3 in s2) a2[g3] = gt(A2, s2[g3]) + " " + gt(A2, a2[g3]);
    return a2;
  }
  if (A2 === "cornerShape") {
    if (typeof e2 != "string") throw new Error('Invalid `cornerShape` value: "' + e2 + '".');
    let i2 = nn(e2), o2 = i2[0], s2 = i2[1] || o2, a2 = i2[2] || o2, g3 = i2[3] || s2;
    return { cornerTopLeftShape: o2, cornerTopRightShape: s2, cornerBottomRightShape: a2, cornerBottomLeftShape: g3 };
  }
  if (/^corner(TopLeft|TopRight|BottomRight|BottomLeft)Shape$/.test(A2)) {
    if (typeof e2 != "string" || nn(e2, 1).length !== 1) throw new Error("Invalid `" + A2 + '` value: "' + e2 + '".');
    return { [A2]: e2 };
  }
  let n2 = A2.match(/^corner(Top|Right|Bottom|Left)Shape$/);
  if (n2) {
    if (typeof e2 != "string") throw new Error("Invalid `" + A2 + '` value: "' + e2 + '".');
    let i2 = nn(e2, 2), o2 = i2[0], s2 = i2[1] || o2, a2 = { Top: ["cornerTopLeftShape", "cornerTopRightShape"], Right: ["cornerTopRightShape", "cornerBottomRightShape"], Bottom: ["cornerBottomLeftShape", "cornerBottomRightShape"], Left: ["cornerTopLeftShape", "cornerBottomLeftShape"] }[n2[1]];
    return { [a2[0]]: o2, [a2[1]]: s2 };
  }
  if (/^border(Top|Right|Bottom|Left)?$/.test(A2)) {
    let i2 = (0, import_css_to_react_native.getStylesForProperty)("border", e2, true);
    i2.borderWidth === 1 && !String(e2).includes("1px") && (i2.borderWidth = 3), i2.borderColor === "black" && !String(e2).includes("black") && (i2.borderColor = t2);
    let o2 = { Width: gt(A2 + "Width", i2.borderWidth), Style: jA(i2.borderStyle, { solid: "solid", dashed: "dashed" }, "solid", A2 + "Style"), Color: i2.borderColor }, s2 = {};
    for (let a2 of A2 === "border" ? ["Top", "Right", "Bottom", "Left"] : [A2.slice(6)]) for (let g3 in o2) s2["border" + a2 + g3] = o2[g3];
    return s2;
  }
  if (A2 === "boxShadow") {
    if (!e2) throw new Error('Invalid `boxShadow` value: "' + e2 + '".');
    return { [A2]: typeof e2 == "string" ? (0, import_css_box_shadow.parse)(e2) : e2 };
  }
  if (A2 === "backdropFilter" || A2 === "WebkitBackdropFilter") return { _backdropFilters: Ca(e2, r2, t2) };
  if (A2 === "transform") {
    if (typeof e2 != "string") throw new Error("Invalid `transform` value.");
    let i2 = {}, o2 = e2.replace(/(-?[\d.]+%)/g, (a2, g3) => {
      let u4 = ~~(Math.random() * 1e9);
      return i2[u4] = g3, u4 + "px";
    }), s2 = (0, import_css_to_react_native.getStylesForProperty)("transform", o2, true);
    for (let a2 of s2.transform) for (let g3 in a2) i2[a2[g3]] && (a2[g3] = i2[a2[g3]]);
    return s2;
  }
  if (A2 === "background") return e2 = e2.toString().trim(), /^(linear-gradient|radial-gradient|url|repeating-linear-gradient|repeating-radial-gradient)\(/.test(e2) ? (0, import_css_to_react_native.getStylesForProperty)("backgroundImage", e2, true) : (0, import_css_to_react_native.getStylesForProperty)("background", e2, true);
  if (A2 === "textShadow") {
    e2 = e2.toString().trim();
    let i2 = {}, o2 = Oe(e2);
    for (let s2 of o2) {
      let a2 = (0, import_css_to_react_native.getStylesForProperty)("textShadow", s2, true);
      for (let g3 in a2) i2[g3] ? i2[g3].push(a2[g3]) : i2[g3] = [a2[g3]];
    }
    return i2;
  }
  if (A2 === "WebkitTextStroke") {
    e2 = e2.toString().trim();
    let i2 = e2.split(" ");
    if (i2.length !== 2) throw new Error("Invalid `WebkitTextStroke` value.");
    return { WebkitTextStrokeWidth: gt(A2, i2[0]), WebkitTextStrokeColor: gt(A2, i2[1]) };
  }
  if (A2 === "textDecorationSkipInk") {
    let i2 = e2.toString().trim().toLowerCase();
    if (!["auto", "none", "all"].includes(i2)) throw new Error("Invalid `textDecorationSkipInk` value.");
    return { textDecorationSkipInk: i2 };
  }
}
function ma(A2) {
  return A2 === "transform" ? " Only absolute lengths such as `10px` are supported." : "";
}
var ya = /rgb\((\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\.\d]+)\)/;
function Da(A2) {
  if (typeof A2 == "string" && ya.test(A2.trim())) return A2.trim().replace(ya, (e2, t2, r2, n2, i2) => `rgba(${t2}, ${r2}, ${n2}, ${i2})`);
  if (typeof A2 == "object" && A2 !== null) {
    for (let e2 in A2) A2[e2] = Da(A2[e2]);
    return A2;
  }
  return A2;
}
function sn(A2, e2) {
  let t2 = {}, r2 = {};
  for (let a2 in e2) a2.startsWith("--") && (r2[a2] = String(e2[a2]));
  let n2 = {}, i2 = A2;
  if (A2) {
    let { variables: a2, remainingStyle: g3 } = pa(A2);
    n2 = a2, i2 = g3;
  }
  let o2 = ha(r2, n2);
  for (let a2 in o2) t2[a2] = o2[a2];
  if (i2) {
    let a2 = i2.color ? Vt(i2.color, o2) : void 0, g3 = gc(a2, e2.color);
    t2.color = g3;
    for (let u4 in i2) {
      if (u4.startsWith("_")) throw new Error(`Invalid style property: ${JSON.stringify(u4)}`);
      if (u4 === "color") continue;
      let I2 = (0, import_css_to_react_native.getPropertyName)(u4), B2 = Vt(i2[u4], o2), f3 = Ic(B2, g3);
      try {
        let E2 = sc(I2, f3, g3, e2) || oc(I2, (0, import_css_to_react_native.getStylesForProperty)(I2, gt(I2, f3), true), f3, g3);
        Object.assign(t2, E2);
      } catch (E2) {
        throw new Error(E2.message + (E2.message.includes(f3) ? `
  ` + ma(I2) : `
  in CSS rule \`${I2}: ${f3}\`.${ma(I2)}`));
      }
    }
  }
  if (t2.backgroundImage) {
    let { backgrounds: a2 } = (0, import_css_background_parser.parseElementStyle)(t2);
    t2.backgroundImage = a2;
  }
  (t2.maskImage || t2.WebkitMaskImage) && (t2.maskImage = Ea(t2));
  let s2 = ac(t2.fontSize, e2.fontSize);
  typeof t2.fontSize < "u" && (t2.fontSize = s2), t2.transformOrigin && (t2.transformOrigin = oi(t2.transformOrigin, s2));
  for (let a2 in t2) {
    let g3 = t2[a2];
    if (a2 === "lineHeight") typeof g3 == "string" && g3 !== "normal" && (g3 = t2[a2] = X(g3, s2, s2, e2, true) / s2);
    else {
      if (typeof g3 == "string") {
        let u4 = X(g3, s2, s2, e2);
        typeof u4 < "u" && (t2[a2] = u4), g3 = t2[a2];
      }
      if (typeof g3 == "string" || typeof g3 == "object") {
        let u4 = Da(g3);
        u4 && (t2[a2] = u4), g3 = t2[a2];
      }
    }
    if (a2 === "opacity" && typeof g3 == "number" && (t2.opacity = g3 * e2.opacity), a2 === "transform") {
      let u4 = g3;
      for (let I2 of u4) {
        let B2 = Object.keys(I2)[0], f3 = I2[B2], E2 = typeof f3 == "string" ? X(f3, s2, s2, e2) ?? f3 : f3;
        I2[B2] = E2;
      }
    }
    if (a2 === "textShadowRadius") {
      let u4 = g3;
      t2.textShadowRadius = u4.map((I2) => X(I2, s2, 0, e2, false));
    }
    if (a2 === "textShadowOffset") {
      let u4 = g3;
      t2.textShadowOffset = u4.map(({ height: I2, width: B2 }) => ({ height: X(I2, s2, 0, e2, false), width: X(B2, s2, 0, e2, false) }));
    }
  }
  return t2;
}
function ac(A2, e2) {
  if (typeof A2 == "number") return A2;
  try {
    let t2 = new De(A2);
    switch (t2.unit) {
      case "em":
        return t2.value * e2;
      case "rem":
        return t2.value * 16;
    }
  } catch {
    return e2;
  }
}
function wa(A2) {
  if (A2.startsWith("hsl")) {
    let e2 = index_esm_default(A2), [t2, r2, n2] = e2.values;
    return `hsl(${[t2, `${r2}%`, `${n2}%`].concat(e2.alpha === 1 ? [] : [e2.alpha]).join(",")})`;
  }
  return A2;
}
function gc(A2, e2) {
  return A2 && A2.toLowerCase() !== "currentcolor" ? wa(A2) : wa(e2);
}
function uc(A2, e2) {
  return A2.replace(/currentcolor/gi, e2);
}
function Ic(A2, e2) {
  return qr(A2) && (A2 = uc(A2, e2)), A2;
}
async function ai(A2, e2, t2, r2, n2) {
  let i2 = await Xe(), o2 = Object.assign({}, t2, sn(Ba[e2], t2), sn(r2, t2));
  if (e2 === "img") {
    let [s2, a2, g3] = await xt(n2.src);
    if (a2 === void 0 && g3 === void 0) {
      if (n2.width === void 0 || n2.height === void 0) throw new Error("Image size cannot be determined. Please provide the width and height of the image.");
      a2 = parseInt(n2.width), g3 = parseInt(n2.height);
    }
    let u4 = g3 / a2, I2 = (o2.borderLeftWidth || 0) + (o2.borderRightWidth || 0) + (o2.paddingLeft || 0) + (o2.paddingRight || 0), B2 = (o2.borderTopWidth || 0) + (o2.borderBottomWidth || 0) + (o2.paddingTop || 0) + (o2.paddingBottom || 0), f3 = o2.width || n2.width, E2 = o2.height || n2.height, C2 = typeof f3 == "number" && typeof E2 == "number";
    C2 && (f3 -= I2, E2 -= B2), f3 === void 0 && E2 === void 0 ? (f3 = "100%", A2.setAspectRatio(1 / u4)) : f3 === void 0 ? typeof E2 == "number" ? f3 = E2 / u4 : A2.setAspectRatio(1 / u4) : E2 === void 0 && (typeof f3 == "number" ? E2 = f3 * u4 : A2.setAspectRatio(1 / u4)), o2.width = C2 ? f3 + I2 : f3, o2.height = C2 ? E2 + B2 : E2, o2.__src = s2, o2.__naturalWidth = a2, o2.__naturalHeight = g3;
  }
  if (e2 === "svg") {
    let s2 = n2.viewBox || n2.viewbox, a2 = wt(s2), g3 = a2 ? a2[3] / a2[2] : null, { width: u4, height: I2 } = n2;
    typeof u4 > "u" && I2 ? g3 == null ? u4 = 0 : typeof I2 == "string" && I2.endsWith("%") ? u4 = parseInt(I2) / g3 + "%" : (I2 = X(I2, t2.fontSize, 1, t2), u4 = I2 / g3) : typeof I2 > "u" && u4 ? g3 == null ? u4 = 0 : typeof u4 == "string" && u4.endsWith("%") ? I2 = parseInt(u4) * g3 + "%" : (u4 = X(u4, t2.fontSize, 1, t2), I2 = u4 * g3) : (typeof u4 < "u" && (u4 = X(u4, t2.fontSize, 1, t2) || u4), typeof I2 < "u" && (I2 = X(I2, t2.fontSize, 1, t2) || I2), u4 ||= a2 == null ? void 0 : a2[2], I2 ||= a2 == null ? void 0 : a2[3]), !o2.width && u4 && (o2.width = u4), !o2.height && I2 && (o2.height = I2);
  }
  return A2.setDisplay(jA(o2.display, { flex: i2.DISPLAY_FLEX, block: i2.DISPLAY_FLEX, contents: i2.DISPLAY_CONTENTS, none: i2.DISPLAY_NONE, "-webkit-box": i2.DISPLAY_FLEX }, i2.DISPLAY_FLEX, "display")), A2.setAlignContent(jA(o2.alignContent, { stretch: i2.ALIGN_STRETCH, center: i2.ALIGN_CENTER, "flex-start": i2.ALIGN_FLEX_START, "flex-end": i2.ALIGN_FLEX_END, "space-between": i2.ALIGN_SPACE_BETWEEN, "space-around": i2.ALIGN_SPACE_AROUND, baseline: i2.ALIGN_BASELINE, normal: i2.ALIGN_AUTO }, i2.ALIGN_AUTO, "alignContent")), A2.setAlignItems(jA(o2.alignItems, { stretch: i2.ALIGN_STRETCH, center: i2.ALIGN_CENTER, "flex-start": i2.ALIGN_FLEX_START, "flex-end": i2.ALIGN_FLEX_END, baseline: i2.ALIGN_BASELINE, normal: i2.ALIGN_AUTO }, i2.ALIGN_STRETCH, "alignItems")), A2.setAlignSelf(jA(o2.alignSelf, { stretch: i2.ALIGN_STRETCH, center: i2.ALIGN_CENTER, "flex-start": i2.ALIGN_FLEX_START, "flex-end": i2.ALIGN_FLEX_END, baseline: i2.ALIGN_BASELINE, normal: i2.ALIGN_AUTO }, i2.ALIGN_AUTO, "alignSelf")), A2.setJustifyContent(jA(o2.justifyContent, { center: i2.JUSTIFY_CENTER, "flex-start": i2.JUSTIFY_FLEX_START, "flex-end": i2.JUSTIFY_FLEX_END, "space-between": i2.JUSTIFY_SPACE_BETWEEN, "space-around": i2.JUSTIFY_SPACE_AROUND }, i2.JUSTIFY_FLEX_START, "justifyContent")), A2.setFlexDirection(jA(o2.flexDirection, { row: i2.FLEX_DIRECTION_ROW, column: i2.FLEX_DIRECTION_COLUMN, "row-reverse": i2.FLEX_DIRECTION_ROW_REVERSE, "column-reverse": i2.FLEX_DIRECTION_COLUMN_REVERSE }, i2.FLEX_DIRECTION_ROW, "flexDirection")), A2.setFlexWrap(jA(o2.flexWrap, { wrap: i2.WRAP_WRAP, nowrap: i2.WRAP_NO_WRAP, "wrap-reverse": i2.WRAP_WRAP_REVERSE }, i2.WRAP_NO_WRAP, "flexWrap")), typeof o2.gap < "u" && A2.setGap(i2.GUTTER_ALL, o2.gap), typeof o2.rowGap < "u" && A2.setGap(i2.GUTTER_ROW, o2.rowGap), typeof o2.columnGap < "u" && A2.setGap(i2.GUTTER_COLUMN, o2.columnGap), typeof o2.flexBasis < "u" && A2.setFlexBasis(qe(o2.flexBasis, "flexBasis")), A2.setFlexGrow(typeof o2.flexGrow > "u" ? 0 : o2.flexGrow), A2.setFlexShrink(typeof o2.flexShrink > "u" ? 0 : o2.flexShrink), typeof o2.maxHeight < "u" && A2.setMaxHeight(He(o2.maxHeight, "maxHeight")), typeof o2.maxWidth < "u" && A2.setMaxWidth(He(o2.maxWidth, "maxWidth")), typeof o2.minHeight < "u" && A2.setMinHeight(He(o2.minHeight, "minHeight")), typeof o2.minWidth < "u" && A2.setMinWidth(He(o2.minWidth, "minWidth")), A2.setOverflow(jA(o2.overflow, { visible: i2.OVERFLOW_VISIBLE, hidden: i2.OVERFLOW_HIDDEN }, i2.OVERFLOW_VISIBLE, "overflow")), A2.setMargin(i2.EDGE_TOP, qe(o2.marginTop || 0)), A2.setMargin(i2.EDGE_BOTTOM, qe(o2.marginBottom || 0)), A2.setMargin(i2.EDGE_LEFT, qe(o2.marginLeft || 0)), A2.setMargin(i2.EDGE_RIGHT, qe(o2.marginRight || 0)), A2.setBorder(i2.EDGE_TOP, o2.borderTopWidth || 0), A2.setBorder(i2.EDGE_BOTTOM, o2.borderBottomWidth || 0), A2.setBorder(i2.EDGE_LEFT, o2.borderLeftWidth || 0), A2.setBorder(i2.EDGE_RIGHT, o2.borderRightWidth || 0), A2.setPadding(i2.EDGE_TOP, o2.paddingTop || 0), A2.setPadding(i2.EDGE_BOTTOM, o2.paddingBottom || 0), A2.setPadding(i2.EDGE_LEFT, o2.paddingLeft || 0), A2.setPadding(i2.EDGE_RIGHT, o2.paddingRight || 0), A2.setBoxSizing(jA(o2.boxSizing, { "border-box": i2.BOX_SIZING_BORDER_BOX, "content-box": i2.BOX_SIZING_CONTENT_BOX }, i2.BOX_SIZING_BORDER_BOX, "boxSizing")), A2.setPositionType(jA(o2.position, { absolute: i2.POSITION_TYPE_ABSOLUTE, relative: i2.POSITION_TYPE_RELATIVE, static: i2.POSITION_TYPE_STATIC }, i2.POSITION_TYPE_RELATIVE, "position")), typeof o2.top < "u" && A2.setPosition(i2.EDGE_TOP, He(o2.top, "top")), typeof o2.bottom < "u" && A2.setPosition(i2.EDGE_BOTTOM, He(o2.bottom, "bottom")), typeof o2.left < "u" && A2.setPosition(i2.EDGE_LEFT, He(o2.left, "left")), typeof o2.right < "u" && A2.setPosition(i2.EDGE_RIGHT, He(o2.right, "right")), typeof o2.height < "u" ? A2.setHeight(qe(o2.height, "height")) : A2.setHeightAuto(), typeof o2.width < "u" ? A2.setWidth(qe(o2.width, "width")) : A2.setWidthAuto(), [o2, ni(o2)];
}
var ba = [1, 0, 0, 1, 0, 0];
function lc(A2, e2, t2) {
  let r2 = [...ba];
  for (let n2 of A2) {
    let i2 = Object.keys(n2)[0], o2 = n2[i2];
    if (typeof o2 == "string") if (i2 === "translateX") o2 = parseFloat(o2) / 100 * e2, n2[i2] = o2;
    else if (i2 === "translateY") o2 = parseFloat(o2) / 100 * t2, n2[i2] = o2;
    else throw new Error(`Invalid transform: "${i2}: ${o2}".`);
    let s2 = o2, a2 = [...ba];
    switch (i2) {
      case "translateX":
        a2[4] = s2;
        break;
      case "translateY":
        a2[5] = s2;
        break;
      case "scale":
        a2[0] = s2, a2[3] = s2;
        break;
      case "scaleX":
        a2[0] = s2;
        break;
      case "scaleY":
        a2[3] = s2;
        break;
      case "rotate": {
        let g3 = s2 * Math.PI / 180, u4 = Math.cos(g3), I2 = Math.sin(g3);
        a2[0] = u4, a2[1] = I2, a2[2] = -I2, a2[3] = u4;
        break;
      }
      case "skewX":
        a2[2] = Math.tan(s2 * Math.PI / 180);
        break;
      case "skewY":
        a2[1] = Math.tan(s2 * Math.PI / 180);
        break;
    }
    r2 = Kt(a2, r2);
  }
  A2.splice(0, A2.length), A2.push(...r2), A2.__resolved = true;
}
function zt({ left: A2, top: e2, width: t2, height: r2 }, n2, i2, o2) {
  let s2;
  n2.__resolved || lc(n2, t2, r2);
  let a2 = n2;
  if (i2) s2 = a2;
  else {
    let g3 = (o2 == null ? void 0 : o2.xAbsolute) ?? ((o2 == null ? void 0 : o2.xRelative) ?? 50) * t2 / 100, u4 = (o2 == null ? void 0 : o2.yAbsolute) ?? ((o2 == null ? void 0 : o2.yRelative) ?? 50) * r2 / 100, I2 = A2 + g3, B2 = e2 + u4;
    s2 = Kt([1, 0, 0, 1, I2, B2], Kt(a2, [1, 0, 0, 1, -I2, -B2])), a2.__parent && (s2 = Kt(a2.__parent, s2)), a2.splice(0, 6, ...s2);
  }
  return `matrix(${s2.map((g3) => g3.toFixed(2)).join(",")})`;
}
function ka({ left: A2, top: e2, width: t2, height: r2, isInheritingTransform: n2 }, i2) {
  let o2 = "", s2 = 1;
  return i2.transform && (o2 = zt({ left: A2, top: e2, width: t2, height: r2 }, i2.transform, n2, i2.transformOrigin)), i2.opacity !== void 0 && (s2 = +i2.opacity), { matrix: o2, opacity: s2 };
}
function gi({ id: A2, content: e2, filter: t2, left: r2, top: n2, width: i2, height: o2, matrix: s2, opacity: a2, image: g3, clipPathId: u4, debug: I2, shape: B2, decorationShape: f3 }, E2) {
  let C2 = "";
  if (I2 && (C2 = v2("rect", { x: r2, y: n2 - o2, width: i2, height: o2, fill: "transparent", stroke: "#575eff", "stroke-width": 1, transform: s2 || void 0, "clip-path": u4 ? `url(#${u4})` : void 0 })), g3) {
    let k2 = { href: g3, x: r2, y: n2, width: i2, height: o2, transform: s2 || void 0, "clip-path": u4 ? `url(#${u4})` : void 0, style: E2.filter ? `filter:${E2.filter}` : void 0 }, b2 = v2("image", { ...k2, opacity: a2 !== 1 ? a2 : void 0 }) + (f3 || "");
    return [(t2 ? t2 + v2("g", { filter: `url(#satori_s-${A2})` }, b2) : b2) + C2, ""];
  }
  let p2 = { x: r2, y: n2, width: i2, height: o2, "font-weight": E2.fontWeight, "font-style": E2.fontStyle, "font-size": E2.fontSize, "font-family": E2.fontFamily, "letter-spacing": E2.letterSpacing || void 0, transform: s2 || void 0, "clip-path": u4 ? `url(#${u4})` : void 0, style: E2.filter ? `filter:${E2.filter}` : void 0, "stroke-width": E2.WebkitTextStrokeWidth ? `${E2.WebkitTextStrokeWidth}px` : void 0, stroke: E2.WebkitTextStrokeWidth ? E2.WebkitTextStrokeColor : void 0, "stroke-linejoin": E2.WebkitTextStrokeWidth ? "round" : void 0, "paint-order": E2.WebkitTextStrokeWidth ? "stroke" : void 0 }, h3 = v2("text", { ...p2, fill: E2.color, opacity: a2 !== 1 ? a2 : void 0 }, (0, import_escape_html2.default)(e2)) + (f3 || "");
  return [(t2 ? t2 + v2("g", { filter: `url(#satori_s-${A2})` }, h3) : h3) + C2, B2 ? v2("text", p2, (0, import_escape_html2.default)(e2)) : ""];
}
function cc(A2, e2, t2) {
  return A2.replace(/([MA])([0-9.-]+),([0-9.-]+)/g, function(r2, n2, i2, o2) {
    return n2 + (parseFloat(i2) + e2) + "," + (parseFloat(o2) + t2);
  });
}
var an = 1.1;
function xa({ id: A2, width: e2, height: t2 }, r2, n2 = false) {
  if (!r2.shadowColor || !r2.shadowOffset || typeof r2.shadowRadius > "u") return "";
  let i2 = r2.shadowColor.length, o2 = "", s2 = "", a2 = 0, g3 = e2, u4 = 0, I2 = t2;
  for (let B2 = 0; B2 < i2; B2++) {
    let f3 = r2.shadowRadius[B2] * r2.shadowRadius[B2] / 4;
    if (a2 = Math.min(r2.shadowOffset[B2].width - f3, a2), g3 = Math.max(r2.shadowOffset[B2].width + f3 + e2, g3), u4 = Math.min(r2.shadowOffset[B2].height - f3, u4), I2 = Math.max(r2.shadowOffset[B2].height + f3 + t2, I2), n2) {
      let E2 = `satori_s-${A2}-result-${B2}`;
      o2 += v2("feGaussianBlur", { in: "SourceAlpha", stdDeviation: r2.shadowRadius[B2] / 2, result: `${E2}-blur` }) + v2("feOffset", { in: `${E2}-blur`, dx: r2.shadowOffset[B2].width, dy: r2.shadowOffset[B2].height, result: `${E2}-offset` }) + v2("feFlood", { "flood-color": r2.shadowColor[B2], "flood-opacity": 1, result: `${E2}-color` }) + v2("feComposite", { in: `${E2}-color`, in2: `${E2}-offset`, operator: "in", result: i2 > 1 ? E2 : void 0 });
    } else o2 += v2("feDropShadow", { dx: r2.shadowOffset[B2].width, dy: r2.shadowOffset[B2].height, stdDeviation: r2.shadowRadius[B2] / 2, "flood-color": r2.shadowColor[B2], "flood-opacity": 1, ...i2 > 1 ? { in: "SourceGraphic", result: `satori_s-${A2}-result-${B2}` } : {} });
    i2 > 1 && (s2 = v2("feMergeNode", { in: `satori_s-${A2}-result-${B2}` }) + s2);
  }
  return v2("filter", { id: `satori_s-${A2}`, x: (a2 / e2 * 100 * an).toFixed(2) + "%", y: (u4 / t2 * 100 * an).toFixed(2) + "%", width: ((g3 - a2) / e2 * 100 * an).toFixed(2) + "%", height: ((I2 - u4) / t2 * 100 * an).toFixed(2) + "%" }, o2 + (s2 ? v2("feMerge", {}, s2) : ""));
}
function Ra({ width: A2, height: e2, shape: t2, opacity: r2, id: n2 }, i2) {
  if (!i2.boxShadow) return null;
  let o2 = "", s2 = "";
  for (let a2 = i2.boxShadow.length - 1; a2 >= 0; a2--) {
    let g3 = "", u4 = i2.boxShadow[a2];
    u4.spreadRadius && u4.inset && (u4.spreadRadius = -u4.spreadRadius);
    let I2 = u4.blurRadius * u4.blurRadius / 4 + (u4.spreadRadius || 0), B2 = Math.min(-I2 - (u4.inset ? u4.offsetX : 0), 0), f3 = Math.max(I2 + A2 - (u4.inset ? u4.offsetX : 0), A2), E2 = Math.min(-I2 - (u4.inset ? u4.offsetY : 0), 0), C2 = Math.max(I2 + e2 - (u4.inset ? u4.offsetY : 0), e2), p2 = `satori_s-${n2}-${a2}`, h3 = `satori_ms-${n2}-${a2}`, k2 = u4.spreadRadius ? t2.replace('stroke-width="0"', `stroke-width="${u4.spreadRadius * 2}"`) : t2;
    g3 += v2("mask", { id: h3, maskUnits: "userSpaceOnUse" }, v2("rect", { x: 0, y: 0, width: i2._viewportWidth || "100%", height: i2._viewportHeight || "100%", fill: u4.inset ? "#000" : "#fff" }) + k2.replace('fill="#fff"', u4.inset ? 'fill="#fff"' : 'fill="#000"').replace('stroke="#fff"', ""));
    let b2 = k2.replace(/d="([^"]+)"/, (x3, w3) => 'd="' + cc(w3, u4.offsetX, u4.offsetY) + '"').replace(/x="([^"]+)"/, (x3, w3) => 'x="' + (parseFloat(w3) + u4.offsetX) + '"').replace(/y="([^"]+)"/, (x3, w3) => 'y="' + (parseFloat(w3) + u4.offsetY) + '"');
    u4.spreadRadius && u4.spreadRadius < 0 && (g3 += v2("mask", { id: h3 + "-neg", maskUnits: "userSpaceOnUse" }, b2.replace('stroke="#fff"', 'stroke="#000"').replace(/stroke-width="[^"]+"/, `stroke-width="${-u4.spreadRadius * 2}"`))), u4.spreadRadius && u4.spreadRadius < 0 && (b2 = v2("g", { mask: `url(#${h3}-neg)` }, b2)), g3 += v2("defs", {}, v2("filter", { id: p2, x: `${B2 / A2 * 100}%`, y: `${E2 / e2 * 100}%`, width: `${(f3 - B2) / A2 * 100}%`, height: `${(C2 - E2) / e2 * 100}%` }, v2("feGaussianBlur", { stdDeviation: u4.blurRadius / 2, result: "b" }) + v2("feFlood", { "flood-color": u4.color, in: "SourceGraphic", result: "f" }) + v2("feComposite", { in: "f", in2: "b", operator: u4.inset ? "out" : "in" }))) + v2("g", { mask: `url(#${h3})`, filter: `url(#${p2})`, opacity: r2 }, b2), u4.inset ? s2 += g3 : o2 += g3;
  }
  return [o2, s2];
}
function fc(A2, e2, t2, r2, n2, i2) {
  let o2 = n2 / 2, s2 = Math.max(o2, n2 * 1.25), a2 = [];
  for (let I2 of t2) {
    if (I2.y2 < i2 + o2 || I2.y1 > r2 + o2) continue;
    let B2 = Math.max(A2, I2.x1 - s2), f3 = Math.min(e2, I2.x2 + s2);
    if (B2 >= f3) continue;
    if (a2.length === 0) {
      a2.push([B2, f3]);
      continue;
    }
    let E2 = a2[a2.length - 1];
    B2 <= E2[1] ? E2[1] = Math.max(E2[1], f3) : a2.push([B2, f3]);
  }
  if (!a2.length) return [[A2, e2]];
  let g3 = [], u4 = A2;
  for (let [I2, B2] of a2) if (I2 > u4 && g3.push([u4, I2]), u4 = Math.max(u4, B2), u4 >= e2) break;
  return u4 < e2 && g3.push([u4, e2]), g3;
}
function ui({ width: A2, left: e2, top: t2, ascender: r2, clipPathId: n2, matrix: i2, glyphBoxes: o2 }, s2) {
  let { textDecorationColor: a2, textDecorationStyle: g3, textDecorationLine: u4, textDecorationSkipInk: I2, fontSize: B2, color: f3 } = s2;
  if (!u4 || u4 === "none") return "";
  let E2 = Math.max(1, B2 * 0.1), C2 = u4 === "line-through" ? t2 + r2 * 0.7 : u4 === "underline" ? t2 + r2 * 1.1 : t2, p2 = g3 === "dashed" ? `${E2 * 1.2} ${E2 * 2}` : g3 === "dotted" ? `0 ${E2 * 2}` : void 0, h3 = u4 === "underline" && (I2 || "auto") !== "none" && (o2 == null ? void 0 : o2.length), k2 = t2 + r2, b2 = h3 ? fc(e2, e2 + A2, o2, C2, E2, k2) : [[e2, e2 + A2]], x3 = g3 === "double" ? b2.map(([y2, R2]) => v2("line", { x1: y2, y1: C2 + E2 + 1, x2: R2, y2: C2 + E2 + 1, stroke: a2 || f3, "stroke-width": E2, "stroke-dasharray": p2, "stroke-linecap": g3 === "dotted" ? "round" : "square", transform: i2 })).join("") : "", w3 = b2.map(([y2, R2]) => v2("line", { x1: y2, y1: C2, x2: R2, y2: C2, stroke: a2 || f3, "stroke-width": E2, "stroke-dasharray": p2, "stroke-linecap": g3 === "dotted" ? "round" : "square", transform: i2 })).join("") + x3;
  return n2 ? v2("g", { "clip-path": `url(#${n2})` }, w3) : w3;
}
function Ii(A2) {
  return A2 = A2.replace("U+", "0x"), String.fromCodePoint(Number(A2));
}
var ut = Ii("U+0020");
var li = Ii("U+0009");
var Rt = Ii("U+2026");
function va(A2, e2, t2) {
  let { fontSize: r2, letterSpacing: n2, fontFeatureSettings: i2 } = t2, o2 = /* @__PURE__ */ new Map();
  function s2(I2) {
    let B2 = o2.get(I2);
    return B2 === void 0 && (B2 = A2.measure(I2, { fontSize: r2, letterSpacing: n2, fontFeatureSettings: i2 }), o2.set(I2, B2)), B2;
  }
  function a2(I2) {
    return s2(I2);
  }
  function g3(I2) {
    let B2 = 0, f3 = "", E2 = () => {
      f3 && (B2 += s2(f3), f3 = "");
    };
    for (let C2 of I2) e2(C2) ? (E2(), B2 += r2) : f3 += C2;
    return E2(), B2;
  }
  function u4(I2) {
    return g3(OA(I2, "grapheme"));
  }
  return { measureGrapheme: a2, measureGraphemeArray: g3, measureText: u4 };
}
function Fa(A2, e2, t2) {
  let { textTransform: r2, whiteSpace: n2, wordBreak: i2 } = e2;
  A2 = Bc(A2, r2, t2);
  let { content: o2, shouldCollapseTabsAndSpaces: s2, allowSoftWrap: a2 } = Cc(A2, n2), { words: g3, requiredBreaks: u4, allowBreakWord: I2 } = Qc(o2, i2), [B2, f3] = Ec(e2, a2);
  return { words: g3, requiredBreaks: u4, allowSoftWrap: a2, allowBreakWord: I2, processedContent: o2, shouldCollapseTabsAndSpaces: s2, lineLimit: B2, blockEllipsis: f3 };
}
function Bc(A2, e2, t2) {
  return e2 === "uppercase" ? A2 = A2.toLocaleUpperCase(t2) : e2 === "lowercase" ? A2 = A2.toLocaleLowerCase(t2) : e2 === "capitalize" && (A2 = OA(A2, "word", t2).map((r2) => OA(r2, "grapheme", t2).map((n2, i2) => i2 === 0 ? n2.toLocaleUpperCase(t2) : n2).join("")).join("")), A2;
}
function Ec(A2, e2) {
  let { textOverflow: t2, lineClamp: r2, WebkitLineClamp: n2, WebkitBoxOrient: i2, overflow: o2, display: s2 } = A2;
  if (s2 === "block" && r2) {
    let [a2, g3 = Rt] = dc(r2);
    if (a2) return [a2, g3];
  }
  return t2 === "ellipsis" && s2 === "-webkit-box" && i2 === "vertical" && _s(n2) && n2 > 0 ? [n2, Rt] : t2 === "ellipsis" && o2 === "hidden" && !e2 ? [1, Rt] : [1 / 0];
}
function Qc(A2, e2) {
  let t2 = ["break-all", "break-word"].includes(e2), { words: r2, requiredBreaks: n2 } = Ks(A2, e2);
  return { words: r2, requiredBreaks: n2, allowBreakWord: t2 };
}
function Cc(A2, e2) {
  let t2 = ["pre", "pre-wrap", "pre-line"].includes(e2), r2 = ["normal", "nowrap", "pre-line"].includes(e2), n2 = !["pre", "nowrap"].includes(e2);
  return t2 || (A2 = A2.replace(/\n/g, ut)), r2 && (A2 = A2.replace(/([ ]|\t)+/g, ut).replace(/^[ ]|[ ]$/g, "")), { content: A2, shouldCollapseTabsAndSpaces: r2, allowSoftWrap: n2 };
}
function dc(A2) {
  if (typeof A2 == "number") return [A2];
  let e2 = /^(\d+)\s*"(.*)"$/, t2 = /^(\d+)\s*'(.*)'$/, r2 = e2.exec(A2), n2 = t2.exec(A2);
  if (r2) {
    let i2 = +r2[1], o2 = r2[2];
    return [i2, o2];
  } else if (n2) {
    let i2 = +n2[1], o2 = n2[2];
    return [i2, o2];
  }
  return [];
}
var pc = /* @__PURE__ */ new Set([li]);
function hc(A2) {
  return pc.has(A2);
}
function ci(A2) {
  if (A2 === "transparent") return true;
  let e2 = index_esm_default(A2);
  return e2 ? e2.alpha === 0 : false;
}
function Na(A2) {
  if (!A2) return false;
  let e2 = index_esm_default(A2);
  if (!e2) return false;
  let [t2, r2, n2, i2] = e2.values;
  return t2 === 255 && r2 === 255 && n2 === 255 && (i2 === void 0 || i2 === 1);
}
async function* fi(A2, e2) {
  let t2 = await Xe(), { parentStyle: r2, inheritedStyle: n2, parent: i2, font: o2, id: s2, isInheritingTransform: a2, debug: g3, embedFont: u4, graphemeImages: I2, locale: B2, canLoadAdditionalAssets: f3 } = e2, { textAlign: E2, textIndent: C2 = 0, lineHeight: p2, textWrap: h3, fontSize: k2, filter: b2, tabSize: x3 = 8, letterSpacing: w3, fontFeatureSettings: y2, _inheritedBackgroundClipTextPath: R2, _inheritedBackgroundClipTextHasBackground: F, flexShrink: J2 } = r2, { words: K3, requiredBreaks: $2, allowSoftWrap: lA, allowBreakWord: iA, processedContent: cA, shouldCollapseTabsAndSpaces: UA, lineLimit: hA, blockEllipsis: JA } = Fa(A2, r2, B2), CA = mc(t2, E2);
  i2.insertChild(CA, i2.getChildCount()), Js(J2) && i2.setFlexShrink(1);
  let AA = o2.getEngine(k2, p2, r2, B2), IA = f3 ? OA(cA, "grapheme").filter((z2) => !hc(z2) && !AA.has(z2)) : [];
  yield IA.map((z2) => ({ word: z2, locale: B2 })), IA.length && (AA = o2.getEngine(k2, p2, r2, B2));
  function Ce(z2) {
    return !!(I2 && Object.prototype.hasOwnProperty.call(I2, z2) && I2[z2]);
  }
  let { measureGrapheme: PA, measureGraphemeArray: LA, measureText: dA } = va(AA, Ce, { fontSize: k2, letterSpacing: w3, fontFeatureSettings: y2 }), V2 = qr(x3) ? X(x3, k2, 1, r2) : PA(ut) * x3, mA = (z2, q2) => {
    if (z2.length === 0) return { originWidth: 0, endingSpacesWidth: 0, text: z2 };
    let { index: gA, tabCount: Z } = yc(z2), pA = 0;
    if (Z > 0) {
      let yA = z2.slice(0, gA), tA = z2.slice(gA + Z), rA = dA(yA), ae = rA + q2;
      pA = (V2 === 0 ? rA : (Math.floor(ae / V2) + Z) * V2) + dA(tA);
    } else pA = dA(z2);
    let aA = z2.trimEnd() === z2 ? pA : dA(z2.trimEnd());
    return { originWidth: pA, endingSpacesWidth: pA - aA, text: z2 };
  }, eA = [], kA = [], W = [], FA = [], xA = [];
  function GA(z2) {
    let q2 = 0, gA = 0, Z = -1, pA = 0, aA = 0, yA = 0, tA = 0;
    eA = [], W = [0], FA = [], xA = [];
    let rA = 0, ae = 0;
    for (; rA < K3.length && q2 < hA; ) {
      let j2 = K3[rA], HA = $2[rA], zA = 0, { originWidth: Ot, endingSpacesWidth: vA, text: ot } = mA(j2, aA);
      j2 = ot, zA = Ot;
      let WA = vA;
      HA && yA === 0 && (yA = AA.height(j2));
      let Le = E2 === "justify", wA = rA && aA + zA > z2 + WA && lA;
      if (iA && zA > z2 && (!aA || wA || HA)) {
        let Ae = OA(j2, "grapheme");
        K3.splice(rA, 1, ...Ae), aA > 0 && (eA.push(aA - ae), kA.push(tA), q2++, pA += yA, aA = 0, yA = 0, tA = 0, W.push(1), Z = -1), ae = WA;
        continue;
      }
      if (HA || wA) UA && j2 === ut && (zA = 0), eA.push(aA - ae), kA.push(tA), q2++, pA += yA, aA = zA, yA = zA ? Math.round(AA.height(j2)) : 0, tA = zA ? Math.round(AA.baseline(j2)) : 0, W.push(1), Z = -1, HA || (gA = Math.max(gA, z2));
      else {
        aA += zA;
        let Ae = Math.round(AA.height(j2));
        Ae > yA && (yA = Ae, tA = Math.round(AA.baseline(j2))), Le && W[W.length - 1]++;
      }
      Le && Z++, gA = Math.max(gA, aA);
      let $A = aA - zA;
      if (zA === 0) xA.push({ y: pA, x: $A, width: 0, line: q2, lineIndex: Z, isImage: false });
      else {
        let Ae = OA(j2, "word");
        for (let ge = 0; ge < Ae.length; ge++) {
          let ye = Ae[ge], ZA = 0, ue = false;
          Ce(ye) ? (ZA = k2, ue = true) : !u4 && ye.length > 1 ? ZA = dA(ye) : ZA = PA(ye), FA.push(ye), xA.push({ y: pA, x: $A, width: ZA, line: q2, lineIndex: Z, isImage: ue }), $A += ZA, ge < Ae.length - 1 && w3 > 0 && ($A += w3);
        }
      }
      rA++, ae = WA;
    }
    return aA && (q2 < hA && (pA += yA), q2++, eA.push(aA), kA.push(tA)), { width: gA, height: pA };
  }
  let YA = { width: 0, height: 0 };
  CA.setMeasureFunc((z2) => {
    let { width: q2, height: gA } = GA(z2);
    if (h3 === "balance") {
      let pA = q2 / 2, aA = q2, yA = q2;
      for (; pA + 1 < aA; ) {
        yA = (pA + aA) / 2;
        let { height: rA } = GA(yA);
        rA > gA ? pA = yA : aA = yA;
      }
      GA(aA);
      let tA = Math.ceil(aA);
      return YA = { width: tA, height: gA }, { width: tA, height: gA };
    }
    if (h3 === "pretty" && eA[eA.length - 1] < q2 / 3) {
      let yA = q2 * 0.9, tA = GA(yA);
      if (tA.height <= gA * 1.3) return YA = { width: q2, height: tA.height }, { width: q2, height: tA.height };
    }
    let Z = Math.ceil(q2);
    return YA = { width: Z, height: gA }, { width: Z, height: gA };
  });
  let [BA, qA] = yield, KA = "", RA = "", NA = n2._inheritedClipPathId, Ct = n2._inheritedMaskId, { left: ke, top: Ht, width: tt, height: dt } = CA.getComputedLayout(), pt = typeof C2 == "string" ? X(C2, k2, tt, r2, true) || 0 : C2, rt = i2.getComputedWidth() - i2.getComputedPadding(t2.EDGE_LEFT) - i2.getComputedPadding(t2.EDGE_RIGHT) - i2.getComputedBorder(t2.EDGE_LEFT) - i2.getComputedBorder(t2.EDGE_RIGHT), xe = BA + ke, de = qA + Ht, { matrix: oe, opacity: nt } = ka({ left: ke, top: Ht, width: tt, height: dt, isInheritingTransform: a2 }, r2), XA = "";
  if (r2.textShadowOffset) {
    let { textShadowColor: z2, textShadowOffset: q2, textShadowRadius: gA } = r2;
    XA = xa({ width: YA.width, height: YA.height, id: s2 }, { shadowColor: z2, shadowOffset: q2, shadowRadius: gA }, ci(r2.color) || F && Na(r2.color)), XA = v2("defs", {}, XA);
  }
  let pe = "", he = "", it = "", Ye = -1, VA = {}, se = {}, ne = null, me = 0;
  for (let z2 = 0; z2 < FA.length; z2++) {
    let q2 = xA[z2], gA = xA[z2 + 1];
    if (!q2) continue;
    let Z = FA[z2], pA = null, aA = false, yA = I2 && Object.prototype.hasOwnProperty.call(I2, Z) ? I2[Z] : null, tA = q2.y, rA = q2.x, ae = q2.width, j2 = q2.line, HA = r2.textDecorationLine === "underline" && (r2.textDecorationSkipInk || "auto") !== "none";
    if (j2 === Ye) continue;
    let zA = false;
    if (j2 === 0 && pt !== 0 && (rA += pt), eA.length > 1) {
      let wA = tt - eA[j2];
      if (E2 === "right" || E2 === "end") rA += wA;
      else if (E2 === "center") rA += wA / 2;
      else if (E2 === "justify" && j2 < eA.length - 1) {
        let SA = W[j2], $A = SA > 1 ? wA / (SA - 1) : 0;
        rA += $A * q2.lineIndex, zA = true;
      }
      u4 && (rA = Math.round(rA));
    }
    let Ot = kA[j2], vA = AA.baseline(Z), ot = AA.height(Z), WA = Ot - vA, Le = (wA) => !HA || r2.textDecorationLine !== "underline" ? void 0 : { underlineY: de + wA + WA + vA + vA * 0.1, strokeWidth: Math.max(1, k2 * 0.1) };
    if (VA[j2] || (VA[j2] = { left: rA, top: de + tA + WA, ascender: vA, width: zA ? tt : eA[j2] }), hA !== 1 / 0) {
      let ye = function(ZA, ue) {
        let Tt = OA(ue, "grapheme", B2), ht = "", Hr = 0;
        for (let Or of Tt) {
          let Pt = ZA + LA([ht + Or]);
          if (ht && Pt + SA > rt) break;
          ht += Or, Hr = Pt;
        }
        return { subset: ht, resolvedWidth: Hr };
      }, wA = JA, SA = PA(JA);
      SA > rt && (wA = Rt, SA = PA(wA));
      let $A = PA(ut), Ae = j2 < eA.length - 1;
      if (j2 + 1 === hA && (Ae || eA[j2] > rt)) {
        if (rA + ae + SA + $A > rt) {
          let { subset: ZA, resolvedWidth: ue } = ye(rA, Z);
          Z = ZA + wA, Ye = j2, VA[j2].width = Math.max(0, ue - VA[j2].left), aA = true;
        } else if (gA && gA.line !== j2) if (E2 === "center") {
          let { subset: ZA, resolvedWidth: ue } = ye(rA, Z);
          Z = ZA + wA, Ye = j2, VA[j2].width = Math.max(0, ue - VA[j2].left), aA = true;
        } else {
          let ZA = FA[z2 + 1], { subset: ue, resolvedWidth: Tt } = ye(ae + rA, ZA);
          Z = Z + ue + wA, Ye = j2, VA[j2].width = Math.max(0, Tt - VA[j2].left), aA = true;
        }
      }
    }
    if (yA) tA += 0;
    else if (u4) {
      if (!Z.includes(li) && !Hs.includes(Z) && FA[z2 + 1] && gA && !gA.isImage && tA === gA.y && !aA) {
        ne === null && (me = rA), ne = ne === null ? Z : ne + Z;
        continue;
      }
      let wA = ne === null ? Z : ne + Z, SA = ne === null ? rA : me, $A = q2.width + rA - SA, Ae = Le(tA), ge = AA.getSVG(wA.replace(/(\t)+/g, ""), { fontSize: k2, left: xe + SA, top: de + tA + vA + WA, letterSpacing: w3, fontFeatureSettings: y2 }, Ae);
      pA = ge.path, HA && ge.boxes && ge.boxes.length && (se[j2] || (se[j2] = [])).push(...ge.boxes), ne = null, g3 && (it += v2("rect", { x: xe + SA, y: de + tA + WA, width: $A, height: ot, fill: "transparent", stroke: "#575eff", "stroke-width": 1, transform: oe || void 0, "clip-path": NA ? `url(#${NA})` : void 0 }) + v2("line", { x1: xe + rA, x2: xe + rA + q2.width, y1: de + tA + WA + vA, y2: de + tA + WA + vA, stroke: "#14c000", "stroke-width": 1, transform: oe || void 0, "clip-path": NA ? `url(#${NA})` : void 0 }));
    } else if (tA += vA + WA, HA && !yA) {
      let wA = Le(tA), SA = AA.getSVG(Z.replace(/(\t)+/g, ""), { fontSize: k2, left: xe + rA, top: de + tA, letterSpacing: w3, fontFeatureSettings: y2 }, wA);
      SA.boxes && SA.boxes.length && (se[j2] || (se[j2] = [])).push(...SA.boxes);
    }
    if (pA !== null) he += pA + " ";
    else {
      let [wA, SA] = gi({ content: Z, filter: XA, id: s2, left: xe + rA, top: de + tA, width: ae, height: ot, matrix: oe, opacity: nt, image: yA, clipPathId: NA, debug: g3, shape: !!R2 }, r2);
      KA += wA, RA += SA;
    }
    if (aA) break;
  }
  if (r2.textDecorationLine && (pe = Object.entries(VA).map(([z2, q2]) => {
    if (!q2) return "";
    let gA = se[z2] || [];
    return ui({ left: xe + q2.left, top: q2.top, width: q2.width, ascender: q2.ascender, clipPathId: NA, matrix: oe, glyphBoxes: gA }, r2);
  }).join("")), he) {
    let z2 = (!ci(r2.color) || XA) && nt !== 0 ? v2("path", { fill: XA && (ci(r2.color) || F && Na(r2.color)) ? "black" : r2.color, d: he, transform: oe || void 0, [n2.WebkitTextStrokeWidth || b2 || XA ? "opacity" : "fill-opacity"]: nt !== 1 ? nt : void 0, style: b2 ? `filter:${b2}` : void 0, "stroke-width": n2.WebkitTextStrokeWidth ? `${n2.WebkitTextStrokeWidth}px` : void 0, stroke: n2.WebkitTextStrokeWidth ? n2.WebkitTextStrokeColor : void 0, "stroke-linejoin": n2.WebkitTextStrokeWidth ? "round" : void 0, "paint-order": n2.WebkitTextStrokeWidth ? "stroke" : void 0 }) : "", q2 = z2 ? v2("g", { mask: Ct ? `url(#${Ct})` : void 0, "clip-path": NA ? `url(#${NA})` : void 0 }, z2) : "";
    R2 && (RA = v2("path", { d: he, transform: oe || void 0 })), KA += (XA ? XA + v2("g", { filter: `url(#satori_s-${s2})` }, q2 + pe) : q2 + pe) + it;
  } else pe && (KA += XA ? v2("g", { filter: `url(#satori_s-${s2})` }, pe) : pe);
  return RA && (r2._inheritedBackgroundClipTextPath.value += RA), KA;
}
function mc(A2, e2) {
  let t2 = A2.Node.create();
  return t2.setAlignItems(A2.ALIGN_BASELINE), t2.setJustifyContent(jA(e2, { left: A2.JUSTIFY_FLEX_START, right: A2.JUSTIFY_FLEX_END, center: A2.JUSTIFY_CENTER, justify: A2.JUSTIFY_SPACE_BETWEEN, start: A2.JUSTIFY_FLEX_START, end: A2.JUSTIFY_FLEX_END }, A2.JUSTIFY_FLEX_START, "textAlign")), t2;
}
function yc(A2) {
  let e2 = /(\t)+/.exec(A2);
  return e2 ? { index: e2.index, tabCount: e2[0].length } : { index: null, tabCount: 0 };
}
function gn(A2, e2, t2, r2, n2) {
  let i2 = [], o2 = e2.at(-1), s2 = o2 && o2.offset && o2.offset.unit === "%" && r2 ? +o2.offset.value : 100;
  for (let I2 of e2) {
    let { color: B2 } = I2;
    if (!i2.length && (i2.push({ offset: 0, color: B2 }), !I2.offset || I2.offset.value === "0")) continue;
    let f3 = typeof I2.offset > "u" ? void 0 : I2.offset.unit === "%" ? +I2.offset.value / s2 : Number(X(`${I2.offset.value}${I2.offset.unit}`, t2.fontSize, A2, t2, true)) / A2;
    i2.push({ offset: f3, color: B2 });
  }
  i2.length || i2.push({ offset: 0, color: "transparent" });
  let a2 = i2[i2.length - 1];
  a2.offset !== 1 && (typeof a2.offset > "u" ? a2.offset = 1 : r2 ? i2[i2.length - 1] = { offset: 1, color: a2.color } : i2.push({ offset: 1, color: a2.color }));
  let g3 = 0, u4 = 1;
  for (let I2 = 0; I2 < i2.length; I2++) if (typeof i2[I2].offset > "u") {
    for (u4 < I2 && (u4 = I2); typeof i2[u4].offset > "u"; ) u4++;
    i2[I2].offset = (i2[u4].offset - i2[g3].offset) / (u4 - g3) * (I2 - g3) + i2[g3].offset;
  } else g3 = I2;
  return n2 === "mask" ? i2.map((I2) => {
    let B2 = index_esm_default(I2.color);
    return B2 ? B2.alpha === 0 ? { ...I2, color: "rgba(0, 0, 0, 1)" } : { ...I2, color: `rgba(255, 255, 255, ${B2.alpha})` } : I2;
  }) : i2;
}
function La({ id: A2, width: e2, height: t2, repeatX: r2, repeatY: n2 }, i2, o2, s2, a2, g3) {
  let u4 = P(i2), [I2, B2] = o2, f3 = i2.startsWith("repeating"), E2, C2, p2;
  if (u4.orientation.type === "directional") E2 = Sc(u4.orientation.value), C2 = Math.sqrt(Math.pow((E2.x2 - E2.x1) * I2, 2) + Math.pow((E2.y2 - E2.y1) * B2, 2));
  else if (u4.orientation.type === "angular") {
    let { length: w3, ...y2 } = kc(at(`${u4.orientation.value.value}${u4.orientation.value.unit}`) / 180 * Math.PI, I2, B2);
    C2 = w3, E2 = y2;
  }
  p2 = f3 ? xc(u4.stops, C2, E2, a2) : E2;
  let h3 = gn(f3 ? bc(u4.stops, C2) : C2, u4.stops, a2, f3, g3), k2 = `satori_bi${A2}`, b2 = `satori_pattern_${A2}`, x3 = v2("pattern", { id: b2, x: s2[0] / e2, y: s2[1] / t2, width: r2 ? I2 / e2 : "1", height: n2 ? B2 / t2 : "1", patternUnits: "objectBoundingBox" }, v2("linearGradient", { id: k2, ...p2, spreadMethod: f3 ? "repeat" : "pad" }, h3.map((w3) => v2("stop", { offset: (w3.offset ?? 0) * 100 + "%", "stop-color": w3.color })).join("")) + v2("rect", { x: 0, y: 0, width: I2, height: B2, fill: `url(#${k2})` }));
  return [b2, x3];
}
function bc(A2, e2) {
  let t2 = A2[A2.length - 1], { offset: r2 } = t2;
  return r2 ? r2.unit === "%" ? Number(r2.value) / 100 * e2 : Number(r2.value) : e2;
}
function Sc(A2) {
  let e2 = 0, t2 = 0, r2 = 0, n2 = 0;
  return A2.includes("top") ? t2 = 1 : A2.includes("bottom") && (n2 = 1), A2.includes("left") ? e2 = 1 : A2.includes("right") && (r2 = 1), !e2 && !r2 && !t2 && !n2 && (t2 = 1), { x1: e2, y1: t2, x2: r2, y2: n2 };
}
function kc(A2, e2, t2) {
  let r2 = Math.pow(t2 / e2, 2);
  A2 = (A2 % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  let n2, i2, o2, s2, a2, g3, u4, I2, B2 = (f3) => {
    if (f3 === 0) {
      n2 = 0, i2 = t2, o2 = 0, s2 = 0, a2 = t2;
      return;
    } else if (f3 === Math.PI / 2) {
      n2 = 0, i2 = 0, o2 = e2, s2 = 0, a2 = e2;
      return;
    }
    if (f3 > 0 && f3 < Math.PI / 2) {
      n2 = (r2 * e2 / 2 / Math.tan(f3) - t2 / 2) / (Math.tan(f3) + r2 / Math.tan(f3)), i2 = Math.tan(f3) * n2 + t2, o2 = Math.abs(e2 / 2 - n2) + e2 / 2, s2 = t2 / 2 - Math.abs(i2 - t2 / 2), a2 = Math.sqrt(Math.pow(o2 - n2, 2) + Math.pow(s2 - i2, 2)), u4 = (e2 / 2 / Math.tan(f3) - t2 / 2) / (Math.tan(f3) + 1 / Math.tan(f3)), I2 = Math.tan(f3) * u4 + t2, a2 = 2 * Math.sqrt(Math.pow(e2 / 2 - u4, 2) + Math.pow(t2 / 2 - I2, 2));
      return;
    } else if (f3 > Math.PI / 2 && f3 < Math.PI) {
      n2 = (t2 / 2 + r2 * e2 / 2 / Math.tan(f3)) / (Math.tan(f3) + r2 / Math.tan(f3)), i2 = Math.tan(f3) * n2, o2 = Math.abs(e2 / 2 - n2) + e2 / 2, s2 = t2 / 2 + Math.abs(i2 - t2 / 2), u4 = (e2 / 2 / Math.tan(f3) + t2 / 2) / (Math.tan(f3) + 1 / Math.tan(f3)), I2 = Math.tan(f3) * u4, a2 = 2 * Math.sqrt(Math.pow(e2 / 2 - u4, 2) + Math.pow(t2 / 2 - I2, 2));
      return;
    } else f3 >= Math.PI && (B2(f3 - Math.PI), g3 = n2, n2 = o2, o2 = g3, g3 = i2, i2 = s2, s2 = g3);
  };
  return B2(A2), { x1: n2 / e2, y1: i2 / t2, x2: o2 / e2, y2: s2 / t2, length: a2 };
}
function xc(A2, e2, t2, r2) {
  let { x1: n2, x2: i2, y1: o2, y2: s2 } = t2, a2 = A2[0].offset ? A2[0].offset.unit === "%" ? Number(A2[0].offset.value) / 100 : X(`${A2[0].offset.value}${A2[0].offset.unit}`, r2.fontSize, e2, r2, true) / e2 : 0, g3 = A2.at(-1).offset ? A2.at(-1).offset.unit === "%" ? Number(A2.at(-1).offset.value) / 100 : X(`${A2.at(-1).offset.value}${A2.at(-1).offset.unit}`, r2.fontSize, e2, r2, true) / e2 : 1, u4 = (i2 - n2) * a2 + n2, I2 = (s2 - o2) * a2 + o2, B2 = (i2 - n2) * g3 + n2, f3 = (s2 - o2) * g3 + o2;
  return { x1: u4, y1: I2, x2: B2, y2: f3 };
}
function Ua({ id: A2, width: e2, height: t2, repeatX: r2, repeatY: n2 }, i2, o2, s2, a2, g3) {
  var iA;
  let { shape: u4, stops: I2, position: B2, size: f3, repeating: E2 } = K(i2), [C2, p2] = o2, h3 = C2 / 2, k2 = p2 / 2, b2 = Fc(B2.x, B2.y, C2, p2, a2.fontSize, a2);
  h3 = b2.x, k2 = b2.y;
  let x3 = vc(e2, I2, E2, a2), w3 = gn(x3, I2, a2, E2, g3), y2 = `satori_radial_${A2}`, R2 = `satori_pattern_${A2}`, F = `satori_mask_${A2}`, J2 = Mc(u4, f3, a2.fontSize, { x: h3, y: k2 }, [C2, p2], a2, E2), K3 = Nc(u4, a2.fontSize, I2, [C2, p2], a2, E2, J2), $2 = v2("pattern", { id: R2, x: s2[0] / e2, y: s2[1] / t2, width: r2 ? C2 / e2 : "1", height: n2 ? p2 / t2 : "1", patternUnits: "objectBoundingBox" }, v2("radialGradient", { id: y2, ...K3 }, w3.map((cA) => v2("stop", { offset: cA.offset || 0, "stop-color": cA.color })).join("")) + v2("mask", { id: F }, v2("rect", { x: 0, y: 0, width: C2, height: p2, fill: "#fff" })) + v2("rect", { x: 0, y: 0, width: C2, height: p2, fill: ((iA = w3.at(-1)) == null ? void 0 : iA.color) || "transparent" }) + v2(u4, { cx: h3, cy: k2, width: C2, height: p2, ...J2, fill: `url(#${y2})`, mask: `url(#${F})` }));
  return [R2, $2];
}
function vc(A2, e2, t2, r2) {
  if (!t2) return A2;
  let n2 = e2.at(-1);
  return !n2 || !n2.offset || n2.offset.unit === "%" ? A2 : X(`${n2.offset.value}${n2.offset.unit}`, +r2.fontSize, A2, r2, true);
}
function Fc(A2, e2, t2, r2, n2, i2) {
  let o2 = { x: t2 / 2, y: r2 / 2 };
  return A2.type === "keyword" ? Object.assign(o2, Ga(A2.value, t2, r2, "x")) : o2.x = X(`${A2.value.value}${A2.value.unit}`, n2, t2, i2, true) ?? t2 / 2, e2.type === "keyword" ? Object.assign(o2, Ga(e2.value, t2, r2, "y")) : o2.y = X(`${e2.value.value}${e2.value.unit}`, n2, r2, i2, true) ?? r2 / 2, o2;
}
function Ga(A2, e2, t2, r2) {
  switch (A2) {
    case "center":
      return { [r2]: r2 === "x" ? e2 / 2 : t2 / 2 };
    case "left":
      return { x: 0 };
    case "top":
      return { y: 0 };
    case "right":
      return { x: e2 };
    case "bottom":
      return { y: t2 };
  }
}
function Nc(A2, e2, t2, [r2, n2], i2, o2, s2) {
  let { r: a2, rx: g3, ratio: u4 = 1 } = s2;
  if (!o2) return { spreadMethod: "pad" };
  let I2 = t2.at(-1), B2 = A2 === "circle" ? a2 * 2 : g3 * 2;
  return { spreadMethod: "repeat", cx: "50%", cy: "50%", r: I2.offset.unit === "%" ? `${Number(I2.offset.value) * Math.min(n2 / r2, 1) / u4}%` : Number(X(`${I2.offset.value}${I2.offset.unit}`, e2, r2, i2, true) / B2) };
}
function Mc(A2, e2, t2, r2, n2, i2, o2) {
  let [s2, a2] = n2, { x: g3, y: u4 } = r2, I2 = {}, B2 = 0, f3 = 0;
  if (Lc(e2)) {
    if (e2.some((E2) => E2.value.value.startsWith("-"))) throw new Error("disallow setting negative values to the size of the shape. Check https://w3c.github.io/csswg-drafts/css-images/#valdef-rg-size-length-0");
    return A2 === "circle" ? Object.assign(I2, { r: Number(X(`${e2[0].value.value}${e2[0].value.unit}`, t2, s2, i2, true)) }) : Object.assign(I2, { rx: Number(X(`${e2[0].value.value}${e2[0].value.unit}`, t2, s2, i2, true)), ry: Number(X(`${e2[1].value.value}${e2[1].value.unit}`, t2, a2, i2, true)) }), un(I2, s2, a2, g3, u4, o2, A2), I2;
  }
  switch (e2[0].value) {
    case "farthest-corner":
      B2 = Math.max(Math.abs(s2 - g3), Math.abs(g3)), f3 = Math.max(Math.abs(a2 - u4), Math.abs(u4));
      break;
    case "closest-corner":
      B2 = Math.min(Math.abs(s2 - g3), Math.abs(g3)), f3 = Math.min(Math.abs(a2 - u4), Math.abs(u4));
      break;
    case "farthest-side":
      return A2 === "circle" ? I2.r = Math.max(Math.abs(s2 - g3), Math.abs(g3), Math.abs(a2 - u4), Math.abs(u4)) : (I2.rx = Math.max(Math.abs(s2 - g3), Math.abs(g3)), I2.ry = Math.max(Math.abs(a2 - u4), Math.abs(u4))), un(I2, s2, a2, g3, u4, o2, A2), I2;
    case "closest-side":
      return A2 === "circle" ? I2.r = Math.min(Math.abs(s2 - g3), Math.abs(g3), Math.abs(a2 - u4), Math.abs(u4)) : (I2.rx = Math.min(Math.abs(s2 - g3), Math.abs(g3)), I2.ry = Math.min(Math.abs(a2 - u4), Math.abs(u4))), un(I2, s2, a2, g3, u4, o2, A2), I2;
  }
  return A2 === "circle" ? I2.r = Math.sqrt(B2 * B2 + f3 * f3) : Object.assign(I2, Ha(B2, f3)), un(I2, s2, a2, g3, u4, o2, A2), I2;
}
function un(A2, e2, t2, r2, n2, i2, o2) {
  if (i2) if (o2 === "ellipse") {
    let s2 = Math.max(Math.abs(e2 - r2), Math.abs(r2)), a2 = Math.max(Math.abs(t2 - n2), Math.abs(n2)), { rx: g3, ry: u4 } = Ha(s2, a2);
    A2.ratio = Math.max(g3 / A2.rx, u4 / A2.ry), A2.ratio > 1 && (A2.rx *= A2.ratio, A2.ry *= A2.ratio);
  } else {
    let s2 = Math.max(Math.abs(e2 - r2), Math.abs(r2)), a2 = Math.max(Math.abs(t2 - n2), Math.abs(n2)), g3 = Math.sqrt(s2 * s2 + a2 * a2);
    A2.ratio = g3 / A2.r, A2.ratio > 1 && (A2.r = g3);
  }
}
function Ha(A2, e2) {
  let t2 = e2 !== 0 ? A2 / e2 : 1;
  if (A2 === 0) return { rx: 0, ry: 0 };
  {
    let r2 = Math.sqrt(A2 * A2 + e2 * e2 * t2 * t2) / t2;
    return { ry: r2, rx: r2 * t2 };
  }
}
function Lc(A2) {
  return !A2.some((e2) => e2.type === "keyword");
}
function Ei(A2, e2) {
  return typeof A2 == "string" && A2.endsWith("%") ? e2 * parseFloat(A2) / 100 : +A2;
}
function Gc(A2, e2, t2, r2, n2) {
  if (!r2 || !n2) return [e2, t2];
  if (A2 === "cover") {
    let i2 = e2 / r2, o2 = t2 / n2, s2 = Math.max(i2, o2);
    return [r2 * s2, n2 * s2];
  }
  if (A2 === "contain") {
    let i2 = e2 / r2, o2 = t2 / n2, s2 = Math.min(i2, o2);
    return [r2 * s2, n2 * s2];
  }
  if (A2 === "auto" || A2.includes("auto")) {
    let i2 = A2.split(" "), o2 = i2[0] || "auto", s2 = i2[1] || i2[0] || "auto", a2 = r2, g3 = n2;
    if (o2 === "auto" && s2 !== "auto") {
      let u4 = Ei(s2, t2);
      g3 = u4, a2 = r2 / n2 * u4;
    } else if (s2 === "auto" && o2 !== "auto") {
      let u4 = Ei(o2, e2);
      a2 = u4, g3 = n2 / r2 * u4;
    }
    return [a2, g3];
  }
  return [e2, t2];
}
function Bi(A2, { x: e2, y: t2, defaultX: r2, defaultY: n2 }) {
  return (A2 ? A2.split(" ").map((i2) => {
    try {
      let o2 = new De(i2);
      return o2.type === "length" || o2.type === "number" ? o2.value : o2.value + o2.unit;
    } catch {
      return null;
    }
  }).filter((i2) => i2 !== null) : [r2, n2]).map((i2, o2) => Ei(i2, [e2, t2][o2]));
}
async function Zt({ id: A2, width: e2, height: t2, left: r2, top: n2 }, { image: i2, size: o2, position: s2, repeat: a2 }, g3, u4) {
  a2 = a2 || "repeat", u4 = u4 || "background";
  let I2 = a2 === "repeat-x" || a2 === "repeat", B2 = a2 === "repeat-y" || a2 === "repeat", f3 = o2 && (o2 === "cover" || o2 === "contain" || o2 === "auto" || o2.includes("auto")), E2 = i2.startsWith("linear-gradient(") || i2.startsWith("repeating-linear-gradient(") || i2.startsWith("radial-gradient(") || i2.startsWith("repeating-radial-gradient("), C2 = f3 && E2 ? [e2, t2] : f3 ? [0, 0] : Bi(o2, { x: e2, y: t2, defaultX: e2, defaultY: t2 }), p2 = Bi(s2, { x: e2, y: t2, defaultX: 0, defaultY: 0 });
  if (i2.startsWith("linear-gradient(") || i2.startsWith("repeating-linear-gradient(")) return La({ id: A2, width: e2, height: t2, repeatX: I2, repeatY: B2 }, i2, C2, p2, g3, u4);
  if (i2.startsWith("radial-gradient(") || i2.startsWith("repeating-radial-gradient(")) return Ua({ id: A2, width: e2, height: t2, repeatX: I2, repeatY: B2 }, i2, C2, p2, g3, u4);
  if (i2.startsWith("url(")) {
    let [h3, k2, b2] = await xt(i2.slice(4, -1)), x3, w3;
    if (f3) {
      let [y2, R2] = Gc(o2, e2, t2, k2, b2);
      x3 = y2, w3 = R2;
    } else {
      let y2 = Bi(o2, { x: e2, y: t2, defaultX: 0, defaultY: 0 });
      x3 = u4 === "mask" ? k2 || y2[0] : y2[0] || k2, w3 = u4 === "mask" ? b2 || y2[1] : y2[1] || b2;
    }
    return [`satori_bi${A2}`, v2("pattern", { id: `satori_bi${A2}`, patternContentUnits: "userSpaceOnUse", patternUnits: "userSpaceOnUse", x: p2[0] + r2, y: p2[1] + n2, width: I2 ? x3 : "100%", height: B2 ? w3 : "100%" }, v2("image", { x: 0, y: 0, width: x3, height: w3, preserveAspectRatio: "none", href: h3 }))];
  }
  if (index_esm_default(i2)) {
    let h3 = index_esm_default(i2), [k2, b2, x3, w3] = h3.values, R2 = `rgba(${k2},${b2},${x3},${w3 !== void 0 ? w3 : 1})`;
    return [`satori_bi${A2}`, v2("pattern", { id: `satori_bi${A2}`, patternContentUnits: "userSpaceOnUse", patternUnits: "userSpaceOnUse", x: r2, y: n2, width: e2, height: t2 }, v2("rect", { x: 0, y: 0, width: e2, height: t2, fill: R2 }))];
  }
  throw new Error(`Invalid background image: "${i2}"`);
}
function Uc([A2, e2]) {
  return Math.round(A2 * 1e3) === 0 && Math.round(e2 * 1e3) === 0 ? 0 : Math.round(A2 * e2 / Math.sqrt(A2 * A2 + e2 * e2) * 1e3) / 1e3;
}
function In(A2, e2, t2) {
  return t2 < A2 + e2 && (t2 / 2 < A2 && t2 / 2 < e2 ? A2 = e2 = t2 / 2 : t2 / 2 < A2 ? A2 = t2 - e2 : t2 / 2 < e2 && (e2 = t2 - A2)), [A2, e2];
}
function ln(A2) {
  A2[0] = A2[1] = Math.min(A2[0], A2[1]);
}
function cn(A2, e2, t2, r2, n2) {
  if (typeof A2 == "string") {
    let i2 = A2.split(" ").map((s2) => s2.trim()), o2 = !i2[1] && !i2[0].endsWith("%");
    return i2[1] = i2[1] || i2[0], [o2, [Math.min(X(i2[0], r2, e2, n2, true), e2), Math.min(X(i2[1], r2, t2, n2, true), t2)]];
  }
  return typeof A2 == "number" ? [true, [Math.min(A2, e2), Math.min(A2, t2)]] : [true, void 0];
}
var fn = (A2) => A2 && A2[0] !== 0 && A2[1] !== 0;
function Bn(A2) {
  return typeof A2 != "string" ? 1 : si(A2);
}
function En(A2, e2, t2, r2, n2) {
  if (n2 === 1 / 0) return [A2, t2, e2];
  if (n2 === -1 / 0) return [A2, r2, e2];
  if (n2 === 0) return [A2, [(A2[0] + e2[0]) / 2, (A2[1] + e2[1]) / 2], e2];
  let i2 = n2 < 0 ? t2 : r2, o2 = Math.pow(2, 1 - Math.abs(n2));
  if (o2 === 0) return n2 > 0 ? [A2, t2, e2] : [A2, r2, e2];
  let s2 = [], a2 = 16;
  for (let g3 = 0; g3 <= a2; g3++) {
    let u4 = Math.PI * g3 / a2 / 2, I2 = Math.pow(Math.sin(u4), o2), B2 = Math.pow(Math.cos(u4), o2);
    s2.push([i2[0] + (e2[0] - i2[0]) * I2 + (A2[0] - i2[0]) * B2, i2[1] + (e2[1] - i2[1]) * I2 + (A2[1] - i2[1]) * B2]);
  }
  return s2;
}
function It(A2) {
  return `${Math.round(A2[0] * 1e3) / 1e3},${Math.round(A2[1] * 1e3) / 1e3}`;
}
function Ta(A2, e2, t2, r2) {
  return Math.min(1, t2 / (A2[0] + e2[0] || t2), r2 / (A2[1] + e2[1] || r2));
}
function Hc(A2, e2, t2, r2, n2, i2, o2) {
  o2 != null && o2.every(Boolean) && (o2 = void 0);
  let s2 = A2 + t2, a2 = e2 + r2, [g3, u4, I2, B2] = n2, f3 = [En([A2, e2 + g3[1]], [A2 + g3[0], e2], [A2, e2], [A2 + g3[0], e2 + g3[1]], i2[0]), En([s2 - u4[0], e2], [s2, e2 + u4[1]], [s2, e2], [s2 - u4[0], e2 + u4[1]], i2[1]), En([s2, a2 - I2[1]], [s2 - I2[0], a2], [s2, a2], [s2 - I2[0], a2 - I2[1]], i2[2]), En([A2 + B2[0], a2], [A2, a2 - B2[1]], [A2, a2], [A2 + B2[0], a2 - B2[1]], i2[3])];
  if (o2) {
    let C2 = o2.indexOf(true);
    if (C2 === -1) throw new Error("Invalid `partialSides`.");
    for (; o2[(C2 + 3) % 4]; ) C2 = (C2 + 3) % 4;
    let p2 = f3[C2], h3 = Math.floor(p2.length / 2), k2 = `M${It(p2[h3])}`, b2 = C2;
    do {
      let x3 = f3[b2], w3 = Math.floor(x3.length / 2);
      for (let F = w3 + 1; F < x3.length; F++) k2 += ` L${It(x3[F])}`;
      let y2 = f3[(b2 + 1) % 4];
      k2 += ` L${It(y2[0])}`;
      let R2 = Math.floor(y2.length / 2);
      for (let F = 1; F <= R2; F++) k2 += ` L${It(y2[F])}`;
      b2 = (b2 + 1) % 4;
    } while (o2[b2] && b2 !== C2);
    return k2;
  }
  let E2 = `M${It(f3[0][f3[0].length - 1])}`;
  for (let C2 = 0; C2 < 4; C2++) {
    let p2 = f3[(C2 + 1) % 4];
    E2 += ` L${It(p2[0])}`;
    for (let h3 = 1; h3 < p2.length; h3++) E2 += ` L${It(p2[h3])}`;
  }
  return E2 + " Z";
}
function Pa({ id: A2, borderRadiusPath: e2, borderType: t2, left: r2, top: n2, width: i2, height: o2 }, s2) {
  let a2 = `satori_brc-${A2}`;
  return [v2("clipPath", { id: a2 }, v2(t2, { x: r2, y: n2, width: i2, height: o2, d: e2 || void 0 })), a2];
}
function ze({ left: A2, top: e2, width: t2, height: r2 }, n2, i2) {
  let { borderTopLeftRadius: o2, borderTopRightRadius: s2, borderBottomLeftRadius: a2, borderBottomRightRadius: g3, fontSize: u4 } = n2, I2 = [Bn(n2.cornerTopLeftShape), Bn(n2.cornerTopRightShape), Bn(n2.cornerBottomRightShape), Bn(n2.cornerBottomLeftShape)], B2, f3, E2, C2;
  if ([B2, o2] = cn(o2, t2, r2, u4, n2), [f3, s2] = cn(s2, t2, r2, u4, n2), [E2, a2] = cn(a2, t2, r2, u4, n2), [C2, g3] = cn(g3, t2, r2, u4, n2), !i2 && !fn(o2) && !fn(s2) && !fn(a2) && !fn(g3)) return "";
  if (o2 ||= [0, 0], s2 ||= [0, 0], a2 ||= [0, 0], g3 ||= [0, 0], [o2[0], s2[0]] = In(o2[0], s2[0], t2), [a2[0], g3[0]] = In(a2[0], g3[0], t2), [o2[1], a2[1]] = In(o2[1], a2[1], r2), [s2[1], g3[1]] = In(s2[1], g3[1], r2), B2 && ln(o2), f3 && ln(s2), E2 && ln(a2), C2 && ln(g3), I2.some((w3) => w3 < 0)) {
    let w3 = Math.min(Ta(o2, g3, t2, r2), Ta(s2, a2, t2, r2));
    if (w3 < 1) for (let y2 of [o2, s2, g3, a2]) y2[0] *= w3, y2[1] *= w3;
  }
  if (I2.some((w3) => w3 !== 1)) return Hc(A2, e2, t2, r2, [o2, s2, g3, a2], I2, i2);
  let p2 = [];
  p2[0] = [s2, s2], p2[1] = [g3, [-g3[0], g3[1]]], p2[2] = [a2, [-a2[0], -a2[1]]], p2[3] = [o2, [o2[0], -o2[1]]];
  let h3 = `h${t2 - o2[0] - s2[0]} a${p2[0][0]} 0 0 1 ${p2[0][1]}`, k2 = `v${r2 - s2[1] - g3[1]} a${p2[1][0]} 0 0 1 ${p2[1][1]}`, b2 = `h${g3[0] + a2[0] - t2} a${p2[2][0]} 0 0 1 ${p2[2][1]}`, x3 = `v${a2[1] + o2[1] - r2} a${p2[3][0]} 0 0 1 ${p2[3][1]}`;
  if (i2) {
    let y2 = function(iA) {
      let cA = Uc([o2, s2, g3, a2][iA]);
      return iA === 0 ? [[A2 + o2[0] - cA, e2 + o2[1] - cA], [A2 + o2[0], e2]] : iA === 1 ? [[A2 + t2 - s2[0] + cA, e2 + s2[1] - cA], [A2 + t2, e2 + s2[1]]] : iA === 2 ? [[A2 + t2 - g3[0] + cA, e2 + r2 - g3[1] + cA], [A2 + t2 - g3[0], e2 + r2]] : [[A2 + a2[0] - cA, e2 + r2 - a2[1] + cA], [A2, e2 + r2 - a2[1]]];
    }, w3 = i2.indexOf(false);
    if (!i2.includes(true)) throw new Error("Invalid `partialSides`.");
    if (w3 === -1) w3 = 0;
    else for (; !i2[w3]; ) w3 = (w3 + 1) % 4;
    let R2 = "", F = y2(w3), J2 = `M${F[0]} A${p2[(w3 + 3) % 4][0]} 0 0 1 ${F[1]}`, K3 = 0;
    for (; K3 < 4 && i2[(w3 + K3) % 4]; K3++) R2 += J2 + " ", J2 = [h3, k2, b2, x3][(w3 + K3) % 4];
    let $2 = (w3 + K3) % 4;
    R2 += J2.split(" ")[0];
    let lA = y2($2);
    return R2 += ` A${p2[($2 + 3) % 4][0]} 0 0 1 ${lA[0]}`, R2;
  }
  return `M${A2 + o2[0]},${e2} ${h3} ${k2} ${b2} ${x3}`;
}
function _a3(A2, e2, t2) {
  return t2[A2 + "Width"] === t2[e2 + "Width"] && t2[A2 + "Style"] === t2[e2 + "Style"] && t2[A2 + "Color"] === t2[e2 + "Color"];
}
function Ja({ id: A2, currentClipPathId: e2, borderPath: t2, borderType: r2, left: n2, top: i2, width: o2, height: s2 }, a2) {
  if (!(a2.borderTopWidth || a2.borderRightWidth || a2.borderBottomWidth || a2.borderLeftWidth)) return null;
  let u4 = `satori_bc-${A2}`;
  return [v2("clipPath", { id: u4, "clip-path": e2 ? `url(#${e2})` : void 0 }, v2(r2, { x: n2, y: i2, width: o2, height: s2, d: t2 || void 0 })), u4];
}
function jt({ left: A2, top: e2, width: t2, height: r2, props: n2, asContentMask: i2, maskBorderOnly: o2 }, s2) {
  let a2 = ["borderTop", "borderRight", "borderBottom", "borderLeft"];
  if (!i2 && !a2.some((f3) => s2[f3 + "Width"])) return "";
  let g3 = "", u4 = 0;
  for (; u4 > 0 && _a3(a2[u4], a2[(u4 + 3) % 4], s2); ) u4 = (u4 + 3) % 4;
  let I2 = [false, false, false, false], B2 = [];
  for (let f3 = 0; f3 < 4; f3++) {
    let E2 = (u4 + f3) % 4, C2 = (u4 + f3 + 1) % 4, p2 = a2[E2], h3 = a2[C2];
    if (I2[E2] = true, B2 = [s2[p2 + "Width"], s2[p2 + "Style"], s2[p2 + "Color"], p2], !_a3(p2, h3, s2)) {
      let k2 = (B2[0] || 0) + (i2 && !o2 && s2[p2.replace("border", "padding")] || 0);
      k2 && (g3 += v2("path", { width: t2, height: r2, ...n2, fill: "none", stroke: i2 ? "#000" : B2[2], "stroke-width": k2 * 2, "stroke-dasharray": !i2 && B2[1] === "dashed" ? k2 * 2 + " " + k2 : void 0, d: ze({ left: A2, top: e2, width: t2, height: r2 }, s2, I2) })), I2 = [false, false, false, false];
    }
  }
  if (I2.some(Boolean)) {
    let f3 = (B2[0] || 0) + (i2 && !o2 && s2[B2[3].replace("border", "padding")] || 0);
    f3 && (g3 += v2("path", { width: t2, height: r2, ...n2, fill: "none", stroke: i2 ? "#000" : B2[2], "stroke-width": f3 * 2, "stroke-dasharray": !i2 && B2[1] === "dashed" ? f3 * 2 + " " + f3 : void 0, d: ze({ left: A2, top: e2, width: t2, height: r2 }, s2, I2) }));
  }
  return g3;
}
function Qi({ id: A2, left: e2, top: t2, width: r2, height: n2, matrix: i2, borderOnly: o2 }, s2) {
  let a2 = (s2.borderLeftWidth || 0) + (o2 ? 0 : s2.paddingLeft || 0), g3 = (s2.borderTopWidth || 0) + (o2 ? 0 : s2.paddingTop || 0), u4 = (s2.borderRightWidth || 0) + (o2 ? 0 : s2.paddingRight || 0), I2 = (s2.borderBottomWidth || 0) + (o2 ? 0 : s2.paddingBottom || 0), B2 = { x: e2 + a2, y: t2 + g3, width: r2 - a2 - u4, height: n2 - g3 - I2 };
  return v2("mask", { id: A2 }, v2("rect", { ...B2, fill: "#fff", transform: s2.overflow === "hidden" && s2.transform && i2 ? i2 : void 0, mask: s2._inheritedMaskId ? `url(#${s2._inheritedMaskId})` : void 0 }) + jt({ left: e2, top: t2, width: r2, height: n2, props: { transform: i2 || void 0 }, asContentMask: true, maskBorderOnly: o2 }, s2));
}
var pi = { left: 0, "x-start": 0, center: 0.5, right: 1, "x-end": 1 };
var hi = { top: 0, "y-start": 0, center: 0.5, bottom: 1, "y-end": 1 };
function ve(A2) {
  return Math.round(A2 * 1e3) / 1e3;
}
function Wa(A2, e2, t2, r2) {
  let n2 = A2.match(/^shape\((.*)\)$/s);
  if (!n2) return null;
  let i2 = Oe(n2[1]), o2 = i2.shift();
  if (!o2) throw new Error("Invalid `shape()` value.");
  let s2 = o2.match(/^(?:(nonzero|evenodd)\s+)?from\s+(.+)$/);
  if (!s2) throw new Error("Invalid `shape()` starting point.");
  let a2 = s2[1] || "nonzero", g3 = mi(Ka(s2[2]), e2, t2, r2), u4 = g3, I2 = `M${ve(g3[0])},${ve(g3[1])}`;
  for (let B2 of i2) {
    let f3 = Ka(B2), E2 = f3.shift();
    if (E2 === "close") {
      if (f3.length) throw new Error("Invalid `close` command in `shape()`.");
      I2 += " Z", g3 = u4;
      continue;
    }
    if (E2 === "move" || E2 === "line") {
      let C2 = Ci(f3, g3, e2, t2, r2);
      I2 += ` ${E2 === "move" ? "M" : "L"}${ve(C2[0])},${ve(C2[1])}`, g3 = C2, E2 === "move" && (u4 = C2);
      continue;
    }
    if (E2 === "hline" || E2 === "vline") {
      let C2 = E2 === "hline" ? 0 : 1, p2 = f3.shift(), h3 = f3.shift();
      if (p2 !== "to" && p2 !== "by" || !h3 || f3.length) throw new Error(`Invalid \`${E2}\` command in \`shape()\`.`);
      let k2 = C2 === 0 ? e2 : t2, b2 = C2 === 0 ? pi : hi, x3 = p2 === "to" && h3 in b2 ? b2[h3] * k2 : Ze(h3, k2, r2);
      g3 = [...g3], g3[C2] = p2 === "by" ? g3[C2] + x3 : x3, I2 += ` ${C2 === 0 ? "H" : "V"}${ve(g3[C2])}`;
      continue;
    }
    if (E2 === "curve" || E2 === "smooth") {
      let C2 = f3.indexOf("with"), p2 = C2 === -1 ? f3 : f3.slice(0, C2), h3 = C2 === -1 ? [] : f3.slice(C2 + 1); p2[0]; let b2 = Ci(p2, g3, e2, t2, r2);
      if (E2 === "curve" && C2 === -1) throw new Error("A `curve` command requires a control point.");
      let x3 = Oc(h3).map((w3) => Tc(w3, g3, b2, e2, t2, r2));
      if (E2 === "curve") if (x3.length === 1) I2 += ` Q${_e(x3[0])} ${_e(b2)}`;
      else if (x3.length === 2) I2 += ` C${_e(x3[0])} ${_e(x3[1])} ${_e(b2)}`;
      else throw new Error("A `curve` command accepts one or two control points.");
      else if (!x3.length) I2 += ` T${_e(b2)}`;
      else if (x3.length === 1) I2 += ` S${_e(x3[0])} ${_e(b2)}`;
      else throw new Error("A `smooth` command accepts at most one control point.");
      g3 = b2;
      continue;
    }
    if (E2 === "arc") {
      let C2 = f3.findIndex((F) => ["of", "cw", "ccw", "large", "small", "rotate"].includes(F)), p2 = C2 === -1 ? f3 : f3.slice(0, C2), h3 = C2 === -1 ? [] : f3.slice(C2), k2 = Ci(p2, g3, e2, t2, r2), b2 = 0, x3 = 0, w3 = 0, y2 = 0, R2 = 0;
      for (let F = 0; F < h3.length; F++) {
        let J2 = h3[F];
        if (J2 === "of") {
          let K3 = h3[++F];
          if (!K3) throw new Error("Invalid `arc` radius in `shape()`.");
          let $2 = h3[F + 1], lA = $2 && !["cw", "ccw", "large", "small", "rotate"].includes($2);
          if (lA && F++, lA) b2 = Ze(K3, e2, r2), x3 = Ze($2, t2, r2);
          else {
            let iA = Math.sqrt(e2 * e2 + t2 * t2) / Math.sqrt(2);
            b2 = x3 = Ze(K3, iA, r2);
          }
        } else if (J2 === "cw" || J2 === "ccw") R2 = J2 === "cw" ? 1 : 0;
        else if (J2 === "large" || J2 === "small") y2 = J2 === "large" ? 1 : 0;
        else if (J2 === "rotate") {
          let K3 = h3[++F];
          if (!K3) throw new Error("Invalid `arc` rotation in `shape()`.");
          let $2 = at(K3);
          if (typeof $2 > "u") throw new Error("Invalid `arc` rotation in `shape()`.");
          w3 = $2;
        } else throw new Error("Invalid `arc` option in `shape()`.");
      }
      I2 += ` A${ve(Math.abs(b2))},${ve(Math.abs(x3))} ${ve(w3)} ${y2} ${R2} ${_e(k2)}`, g3 = k2;
      continue;
    }
    throw new Error(`Unsupported \`${E2}\` command in \`shape()\`.`);
  }
  return { type: "path", d: I2, "fill-rule": a2 };
}
function Ka(A2) {
  return A2.trim().replace(/\//g, " / ").split(/\s+/).filter(Boolean);
}
function Oc(A2) {
  if (!A2.length) return [];
  let e2 = A2.indexOf("/");
  return e2 === -1 ? [A2] : [A2.slice(0, e2), A2.slice(e2 + 1)];
}
function Ci(A2, e2, t2, r2, n2) {
  let i2 = A2[0];
  if (i2 !== "to" && i2 !== "by") throw new Error("A `shape()` command must use `to` or `by`.");
  let o2 = mi(A2.slice(1), t2, r2, n2);
  return i2 === "by" ? [e2[0] + o2[0], e2[1] + o2[1]] : o2;
}
function Tc(A2, e2, t2, r2, n2, i2) {
  let o2 = A2.indexOf("from"), s2 = o2 === -1 ? A2 : A2.slice(0, o2), a2 = o2 === -1 ? void 0 : A2[o2 + 1];
  if (o2 !== -1 && (o2 + 2 !== A2.length || !a2)) throw new Error("Invalid control point reference in `shape()`.");
  let g3 = mi(s2, r2, n2, i2, true);
  return a2 === "start" || !a2 && !Pc(A2) ? [e2[0] + g3[0], e2[1] + g3[1]] : a2 === "end" ? [t2[0] + g3[0], t2[1] + g3[1]] : g3;
}
function mi(A2, e2, t2, r2, n2 = false) {
  if (!A2.length || A2.length > 4) throw new Error("Invalid position in `shape()`.");
  let i2, o2, s2 = [...A2];
  for (let a2 = 0; a2 < s2.length; a2++) {
    let g3 = s2[a2];
    if (g3 === "left" || g3 === "right" || g3 === "x-start" || g3 === "x-end") {
      let u4 = s2[a2 + 1];
      if (u4 && !di(u4)) {
        let I2 = Ze(u4, e2, r2);
        i2 = g3 === "left" || g3 === "x-start" ? I2 : e2 - I2, a2++;
      } else i2 = pi[g3] * e2;
    } else if (g3 === "top" || g3 === "bottom" || g3 === "y-start" || g3 === "y-end") {
      let u4 = s2[a2 + 1];
      if (u4 && !di(u4)) {
        let I2 = Ze(u4, t2, r2);
        o2 = g3 === "top" || g3 === "y-start" ? I2 : t2 - I2, a2++;
      } else o2 = hi[g3] * t2;
    } else if (g3 === "center") if (i2 === void 0) i2 = e2 / 2;
    else if (o2 === void 0) o2 = t2 / 2;
    else throw new Error("Invalid position in `shape()`.");
    else if (i2 === void 0) i2 = Ze(g3, e2, r2);
    else if (o2 === void 0) o2 = Ze(g3, t2, r2);
    else throw new Error("Invalid position in `shape()`.");
  }
  return !n2 && A2.length === 1 && o2 === void 0 && (o2 = t2 / 2), [i2 ?? (n2 ? 0 : e2 / 2), o2 ?? (n2 ? 0 : t2 / 2)];
}
function di(A2) {
  return A2 in pi || A2 in hi;
}
function Pc(A2) {
  return A2.some(di);
}
function Ze(A2, e2, t2) {
  let r2 = X(A2, t2.fontSize, e2, t2, true);
  if (typeof r2 > "u") throw new Error(`Invalid length \`${A2}\` in \`shape()\`.`);
  return r2;
}
function _e(A2) {
  return `${ve(A2[0])},${ve(A2[1])}`;
}
var vt = { circle: /circle\((.+)\)/, ellipse: /ellipse\((.+)\)/, path: /path\((.+)\)/, polygon: /polygon\((.+)\)/, inset: /inset\((.+)\)/, shape: /shape\((.+)\)/ };
function Va({ width: A2, height: e2 }, t2, r2) {
  function n2(u4) {
    let I2 = u4.match(vt.circle);
    if (!I2) return null;
    let [, B2] = I2, [f3, E2 = ""] = B2.split("at").map((h3) => h3.trim()), { x: C2, y: p2 } = Xa(E2, A2, e2);
    return { type: "circle", r: X(f3, r2.fontSize, Math.sqrt(Math.pow(A2, 2) + Math.pow(e2, 2)) / Math.sqrt(2), r2, true), cx: X(C2, r2.fontSize, A2, r2, true), cy: X(p2, r2.fontSize, e2, r2, true) };
  }
  function i2(u4) {
    let I2 = u4.match(vt.ellipse);
    if (!I2) return null;
    let [, B2] = I2, [f3, E2 = ""] = B2.split("at").map((b2) => b2.trim()), [C2, p2] = f3.split(" "), { x: h3, y: k2 } = Xa(E2, A2, e2);
    return { type: "ellipse", rx: X(C2 || "50%", r2.fontSize, A2, r2, true), ry: X(p2 || "50%", r2.fontSize, e2, r2, true), cx: X(h3, r2.fontSize, A2, r2, true), cy: X(k2, r2.fontSize, e2, r2, true) };
  }
  function o2(u4) {
    let I2 = u4.match(vt.path);
    if (!I2) return null;
    let [B2, f3] = qa(I2[1]);
    return { type: "path", d: f3, "fill-rule": B2 };
  }
  function s2(u4) {
    let I2 = u4.match(vt.polygon);
    if (!I2) return null;
    let [B2, f3] = qa(I2[1]);
    return { type: "polygon", "fill-rule": B2, points: f3.split(",").map((E2) => E2.split(" ").map((C2, p2) => X(C2, r2.fontSize, p2 === 0 ? A2 : e2, r2, true)).join(" ")).join(",") };
  }
  function a2(u4) {
    let I2 = u4.match(vt.inset);
    if (!I2) return null;
    let [B2, f3] = (I2[1].includes("round") ? I2[1] : `${I2[1].trim()} round 0`).split("round"), E2 = (0, import_css_to_react_native3.getStylesForProperty)("borderRadius", f3, true), C2 = Object.values(E2).map((w3) => String(w3)).map((w3, y2) => X(w3, r2.fontSize, y2 === 0 || y2 === 2 ? e2 : A2, r2, true) || 0), p2 = Object.values((0, import_css_to_react_native3.getStylesForProperty)("margin", B2, true)).map((w3) => String(w3)).map((w3, y2) => X(w3, r2.fontSize, y2 === 0 || y2 === 2 ? e2 : A2, r2, true) || 0), h3 = p2[3], k2 = p2[0], b2 = A2 - (p2[1] + p2[3]), x3 = e2 - (p2[0] + p2[2]);
    return C2.some((w3) => w3 > 0) ? { type: "path", d: ze({ left: h3, top: k2, width: b2, height: x3 }, { ...t2, ...E2 }) } : { type: "rect", x: h3, y: k2, width: b2, height: x3 };
  }
  function g3(u4) {
    return vt.shape.test(u4) ? Wa(u4, A2, e2, r2) : null;
  }
  return { parseCircle: n2, parseEllipse: i2, parsePath: o2, parsePolygon: s2, parseInset: a2, parseShape: g3 };
}
function qa(A2) {
  let [, e2 = "nonzero", t2] = A2.replace(/('|")/g, "").match(/^(nonzero|evenodd)?,?(.+)/) || [];
  return [e2, t2];
}
function Xa(A2, e2, t2) {
  let r2 = A2.split(" "), n2 = { x: r2[0] || "50%", y: r2[1] || "50%" };
  return r2.forEach((i2) => {
    i2 === "top" ? n2.y = 0 : i2 === "bottom" ? n2.y = t2 : i2 === "left" ? n2.x = 0 : i2 === "right" ? n2.x = e2 : i2 === "center" && (n2.x = e2 / 2, n2.y = t2 / 2);
  }), n2;
}
function Qn(A2) {
  return `satori_cp-${A2}`;
}
function za(A2) {
  return `url(#${Qn(A2)})`;
}
function Za(A2, e2, t2) {
  if (e2.clipPath === "none") return "";
  let r2 = Va(A2, e2, t2), n2 = e2.clipPath, i2 = { type: "" };
  for (let o2 of Object.keys(r2)) if (i2 = r2[o2](n2), i2) break;
  if (i2) {
    let { type: o2, ...s2 } = i2;
    return v2("clipPath", { id: Qn(A2.id), "clip-path": A2.currentClipPath, transform: `translate(${A2.left}, ${A2.top})` }, v2(o2, s2));
  }
  return "";
}
function yi({ left: A2, top: e2, width: t2, height: r2, path: n2, matrix: i2, id: o2, currentClipPath: s2, src: a2 }, g3, u4) {
  let I2 = "", B2 = g3.clipPath && g3.clipPath !== "none" ? Za({ left: A2, top: e2, width: t2, height: r2, id: o2, currentClipPath: s2}, g3, u4) : "";
  if (g3.overflow !== "hidden" && !a2) I2 = "";
  else {
    let E2 = B2 ? `satori_ocp-${o2}` : Qn(o2);
    I2 = v2("clipPath", { id: E2, "clip-path": s2 }, v2(n2 ? "path" : "rect", { x: A2, y: e2, width: t2, height: r2, d: n2 || void 0, transform: g3.overflow === "hidden" && g3.transform && i2 ? i2 : void 0 }));
  }
  let f3 = Qi({ id: `satori_om-${o2}`, left: A2, top: e2, width: t2, height: r2, matrix: i2, borderOnly: !a2 }, g3);
  return B2 + I2 + f3;
}
var _c = (A2) => `satori_mi-${A2}`;
async function wi(A2, e2, t2) {
  if (!e2.maskImage) return ["", ""];
  let { left: r2, top: n2, width: i2, height: o2, id: s2 } = A2, a2 = e2.maskImage, g3 = a2.length;
  if (!g3) return ["", ""];
  let u4 = _c(s2), I2 = "";
  for (let B2 = 0; B2 < g3; B2++) {
    let f3 = a2[B2], [E2, C2] = await Zt({ id: `${u4}-${B2}`, left: r2, top: n2, width: i2, height: o2 }, f3, t2, "mask");
    I2 += C2 + v2("rect", { x: r2, y: n2, width: i2, height: o2, fill: `url(#${E2})` });
  }
  return I2 = v2("mask", { id: u4 }, I2), [u4, I2];
}
function ja({ id: A2, left: e2, top: t2, width: r2, height: n2, path: i2, type: o2, matrix: s2, currentClipPath: a2, mask: g3, filters: u4 }) {
  if (!u4.length) return ["", ""];
  let I2 = `satori_bf-${A2}`, B2 = `satori_bfc-${A2}`, f3 = Kc(u4), E2 = "BackgroundImage", C2 = "";
  u4.forEach((k2, b2) => {
    let x3 = `${I2}-${b2}`;
    C2 += Jc(k2, E2, x3), E2 = x3;
  });
  let p2 = v2("filter", { id: I2, x: e2 - f3.left, y: t2 - f3.top, width: r2 + f3.left + f3.right, height: n2 + f3.top + f3.bottom, filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" }, C2) + v2("clipPath", { id: B2, "clip-path": a2 }, v2(o2, { x: e2, y: t2, width: r2, height: n2, d: i2 || void 0, transform: s2 || void 0 })), h3 = v2(o2, { x: e2, y: t2, width: r2, height: n2, d: i2 || void 0, fill: "#000", transform: s2 || void 0, filter: `url(#${I2})`, "clip-path": `url(#${B2})`, mask: g3 });
  return [p2, h3];
}
function Jc(A2, e2, t2) {
  if (A2.type === "blur") return v2("feGaussianBlur", { in: e2, stdDeviation: A2.value, result: t2 });
  if (A2.type === "hue-rotate") return v2("feColorMatrix", { in: e2, type: "hueRotate", values: A2.value, result: t2 });
  if (A2.type === "saturate" || A2.type === "grayscale") return v2("feColorMatrix", { in: e2, type: "saturate", values: A2.type === "grayscale" ? 1 - A2.value : A2.value, result: t2 });
  if (A2.type === "sepia") {
    let o2 = A2.value, s2 = 1 - o2;
    return v2("feColorMatrix", { in: e2, type: "matrix", values: [s2 + 0.393 * o2, 0.769 * o2, 0.189 * o2, 0, 0, 0.349 * o2, s2 + 0.686 * o2, 0.168 * o2, 0, 0, 0.272 * o2, 0.534 * o2, s2 + 0.131 * o2, 0, 0, 0, 0, 0, 1, 0].join(" "), result: t2 });
  }
  if (A2.type === "drop-shadow") {
    let o2 = `${t2}-input`;
    return v2("feComposite", { in: e2, in2: "SourceAlpha", operator: "in", result: o2 }) + v2("feDropShadow", { in: o2, dx: A2.offsetX, dy: A2.offsetY, stdDeviation: A2.blurRadius, "flood-color": A2.color, result: t2 });
  }
  let r2 = A2.value, n2 = A2.type === "brightness" ? { slope: r2 } : A2.type === "contrast" ? { slope: r2, intercept: 0.5 - 0.5 * r2 } : A2.type === "invert" ? { slope: 1 - 2 * r2, intercept: r2 } : { slope: r2 }, i2 = A2.type === "opacity" ? ["A"] : ["R", "G", "B"];
  return v2("feComponentTransfer", { in: e2, result: t2 }, i2.map((o2) => v2(`feFunc${o2}`, { type: "linear", ...n2 })).join(""));
}
function Kc(A2) {
  let e2 = 0, t2 = 0, r2 = 0, n2 = 0;
  for (let i2 of A2) if (i2.type === "blur") {
    let o2 = i2.value * 3;
    e2 = Math.max(e2, o2), t2 = Math.max(t2, o2), r2 = Math.max(r2, o2), n2 = Math.max(n2, o2);
  } else if (i2.type === "drop-shadow") {
    let o2 = i2.blurRadius * 3;
    e2 = Math.max(e2, o2 - i2.offsetX), t2 = Math.max(t2, o2 - i2.offsetY), r2 = Math.max(r2, o2 + i2.offsetX), n2 = Math.max(n2, o2 + i2.offsetY);
  }
  return { left: e2, top: t2, right: r2, bottom: n2 };
}
function Wc(A2, e2, t2) {
  let r2 = A2.toLowerCase().trim().split(/\s+/), n2 = (a2, g3) => ({ left: "0%", center: "50%", right: "100%", top: "0%", bottom: "100%" })[a2] || a2, i2, o2;
  if (r2.length === 1) {
    let a2 = r2[0];
    a2 === "left" || a2 === "center" || a2 === "right" ? (i2 = n2(a2), o2 = "50%") : a2 === "top" || a2 === "bottom" ? (i2 = "50%", o2 = n2(a2)) : (i2 = a2, o2 = "50%");
  } else {
    let a2 = r2[0], g3 = r2[1];
    a2 === "top" || a2 === "bottom" ? (o2 = n2(a2), g3 === "left" || g3 === "right" || g3 === "center" ? i2 = n2(g3) : (i2 = "50%", o2 = a2 === "top" || a2 === "bottom" ? n2(a2) : g3)) : (i2 = n2(a2), o2 = n2(g3));
  }
  let s2 = (a2, g3) => {
    try {
      if (a2.endsWith("%")) return g3 * parseFloat(a2) / 100;
      let u4 = new De(a2);
      return u4.type === "length" || u4.type === "number" ? u4.value : 0;
    } catch {
      return 0;
    }
  };
  return [s2(i2, e2), s2(o2, t2)];
}
async function $t({ id: A2, left: e2, top: t2, width: r2, height: n2, isInheritingTransform: i2, src: o2, debug: s2 }, a2, g3) {
  if (a2.display === "none") return "";
  let u4 = !!o2, I2 = "rect", B2 = "", f3 = "", E2 = [], C2 = 1, p2 = "";
  a2.backgroundColor && E2.push(a2.backgroundColor), a2.opacity !== void 0 && (C2 = +a2.opacity), a2.transform && (B2 = zt({ left: e2, top: t2, width: r2, height: n2 }, a2.transform, i2, a2.transformOrigin));
  let h3 = "";
  if (a2.backgroundImage) {
    let AA = [];
    for (let IA = 0; IA < a2.backgroundImage.length; IA++) {
      let Ce = a2.backgroundImage[IA], PA = await Zt({ id: A2 + "_" + IA, width: r2, height: n2, left: e2, top: t2 }, Ce, g3);
      PA && AA.unshift(PA);
    }
    for (let IA of AA) E2.push(`url(#${IA[0]})`), f3 += IA[1], IA[2] && (h3 += IA[2]);
  }
  let [k2, b2] = await wi({ id: A2, left: e2, top: t2, width: r2, height: n2 }, a2, g3);
  f3 += b2;
  let x3 = k2 ? `url(#${k2})` : a2._inheritedMaskId ? `url(#${a2._inheritedMaskId})` : void 0, w3 = ze({ left: e2, top: t2, width: r2, height: n2 }, a2);
  w3 && (I2 = "path");
  let y2 = a2._inheritedClipPathId;
  s2 && (p2 = v2("rect", { x: e2, y: t2, width: r2, height: n2, fill: "transparent", stroke: "#ff5757", "stroke-width": 1, transform: B2 || void 0, "clip-path": y2 ? `url(#${y2})` : void 0 }));
  let { backgroundClip: R2, filter: F } = a2, J2 = R2 === "text" ? `url(#satori_bct-${A2})` : y2 ? `url(#${y2})` : a2.clipPath ? za(A2) : void 0, K3 = yi({ left: e2, top: t2, width: r2, height: n2, path: w3, id: A2, matrix: B2, currentClipPath: J2, src: o2 }, a2, g3), [$2, lA] = ja({ id: A2, left: e2, top: t2, width: r2, height: n2, path: w3, type: I2, matrix: B2 || void 0, currentClipPath: J2, mask: x3, filters: a2._backdropFilters || [] });
  f3 += $2;
  let iA = C2 !== 1 && !u4 && E2.length === 1 && !lA && !h3 && !F && !x3 && !a2.boxShadow && !(a2.borderTopWidth || a2.borderRightWidth || a2.borderBottomWidth || a2.borderLeftWidth), cA = E2.map((AA) => v2(I2, { x: e2, y: t2, width: r2, height: n2, fill: AA, "fill-opacity": iA ? C2 : void 0, d: w3 || void 0, transform: B2 || void 0, "clip-path": a2.transform ? void 0 : J2, style: F ? `filter:${F}` : void 0, mask: a2.transform ? void 0 : x3 })).join(""), UA = Ja({ id: A2, left: e2, top: t2, width: r2, height: n2, currentClipPathId: y2, borderPath: w3, borderType: I2 }, a2), hA;
  if (u4) {
    let AA = (a2.borderLeftWidth || 0) + (a2.paddingLeft || 0), IA = (a2.borderTopWidth || 0) + (a2.paddingTop || 0), Ce = (a2.borderRightWidth || 0) + (a2.paddingRight || 0), PA = (a2.borderBottomWidth || 0) + (a2.paddingBottom || 0), LA = r2 - AA - Ce, dA = n2 - IA - PA, V2 = (a2.objectPosition || "center").toString(), [mA, eA] = Wc(V2, LA, dA), kA = a2.__naturalWidth || LA, W = a2.__naturalHeight || dA, FA, xA = LA, GA = dA, YA = e2 + AA, BA = t2 + IA;
    if (a2.objectFit === "contain") {
      let qA = LA / kA, KA = dA / W, RA = Math.min(qA, KA);
      xA = kA * RA, GA = W * RA, YA = e2 + AA + mA - xA * mA / LA, BA = t2 + IA + eA - GA * eA / dA, FA = "none";
    } else if (a2.objectFit === "cover") {
      let qA = LA / kA, KA = dA / W, RA = Math.max(qA, KA);
      xA = kA * RA, GA = W * RA, YA = e2 + AA + mA - xA * mA / LA, BA = t2 + IA + eA - GA * eA / dA, FA = "none";
    } else if (a2.objectFit === "fill") FA = "none";
    else if (a2.objectFit === "scale-down") if (kA && W) {
      let qA = LA / kA, KA = dA / W, RA = Math.min(qA, KA);
      if (RA >= 1) xA = kA, GA = W, FA = "none", YA = e2 + AA + mA - xA * mA / LA, BA = t2 + IA + eA - GA * eA / dA;
      else {
        let NA = RA;
        xA = kA * NA, GA = W * NA, YA = e2 + AA + mA - xA * mA / LA, BA = t2 + IA + eA - GA * eA / dA, FA = "none";
      }
    } else {
      let qA = LA / kA, KA = dA / W, RA = Math.min(qA, KA);
      xA = kA * RA, GA = W * RA, YA = e2 + AA + mA - xA * mA / LA, BA = t2 + IA + eA - GA * eA / dA, FA = "none";
    }
    else FA = "none";
    a2.transform && (hA = Pa({ id: A2, borderRadiusPath: w3, borderType: I2, left: e2, top: t2, width: r2, height: n2 })), cA += v2("image", { x: YA, y: BA, width: xA, height: GA, href: o2, preserveAspectRatio: FA, transform: B2 || void 0, style: F ? `filter:${F}` : void 0, "clip-path": a2.transform ? hA ? `url(#${hA[1]})` : void 0 : `url(#satori_cp-${A2})`, mask: a2.transform ? void 0 : k2 ? `url(#${k2})` : `url(#satori_om-${A2})` });
  }
  if (UA) {
    f3 += UA[0];
    let AA = UA[1];
    cA += jt({ left: e2, top: t2, width: r2, height: n2, props: { transform: B2 || void 0, "clip-path": `url(#${AA})` } }, a2);
  }
  let JA = Ra({ width: r2, height: n2, id: A2, opacity: C2, shape: v2(I2, { x: e2, y: t2, width: r2, height: n2, fill: "#fff", stroke: "#fff", "stroke-width": 0, d: w3 || void 0, transform: B2 || void 0, "clip-path": J2, mask: x3 }) }, a2), CA = lA + (h3 || cA);
  return a2.transform && (J2 || x3) && (CA = v2("g", { "clip-path": J2 || void 0, mask: x3 || void 0 }, CA)), C2 !== 1 && !iA && (CA = v2("g", { opacity: C2 }, CA)), (f3 ? v2("defs", {}, f3) : "") + (JA ? JA[0] : "") + (hA ? hA[0] : "") + K3 + CA + (JA ? JA[1] : "") + p2;
}
var Ag = String.raw;
var $a = Ag`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
var eg = () => new RegExp(Ag`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${$a}(?:\u200D${$a})*`, "gu");
var Yc = new RegExp(eg(), "u");
var Di = { emoji: Yc, symbol: /\p{Symbol}/u, math: /\p{Math}/u };
var bi = { "ja-JP": /\p{scx=Hira}|\p{scx=Kana}|\p{scx=Han}|[\u3000]|[\uFF00-\uFFEF]/u, "ko-KR": /\p{scx=Hangul}/u, "zh-CN": /\p{scx=Han}/u, "zh-TW": /\p{scx=Han}/u, "zh-HK": /\p{scx=Han}/u, "th-TH": /\p{scx=Thai}/u, "bn-IN": /\p{scx=Bengali}/u, "ar-AR": /\p{scx=Arabic}/u, "ta-IN": /\p{scx=Tamil}/u, "ml-IN": /\p{scx=Malayalam}/u, "he-IL": /\p{scx=Hebrew}/u, "te-IN": /\p{scx=Telugu}/u, devanagari: /\p{scx=Devanagari}/u, kannada: /\p{scx=Kannada}/u };
var Cn = Object.keys({ ...bi, ...Di });
function tg(A2) {
  return Cn.includes(A2);
}
function rg(A2, e2) {
  for (let r2 of Object.keys(Di)) if (Di[r2].test(A2)) return [r2];
  let t2 = Object.keys(bi).filter((r2) => bi[r2].test(A2));
  if (t2.length === 0) return ["unknown"];
  if (e2) {
    let r2 = t2.findIndex((n2) => n2 === e2);
    r2 !== -1 && (t2.splice(r2, 1), t2.unshift(e2));
  }
  return t2;
}
function ng(A2) {
  if (A2) return Cn.find((e2) => e2.toLowerCase().startsWith(A2.toLowerCase()));
}
async function* Ar(A2, e2) {
  var dA;
  let t2 = await Xe(), { id: r2, inheritedStyle: n2, parent: i2, font: o2, debug: s2, locale: a2, embedFont: g3 = true, graphemeImages: u4, canLoadAdditionalAssets: I2, getTwStyles: B2 } = e2;
  if (A2 === null || typeof A2 > "u") return yield, yield, "";
  if (!yt(A2) || Ls(A2.type)) {
    let V2;
    if (!yt(A2)) V2 = fi(String(A2), e2), yield (await V2.next()).value;
    else {
      if (Ms(A2.type)) throw new Error("Class component is not supported.");
      let eA;
      Yn(A2.type) ? eA = A2.type.render : eA = A2.type, V2 = Ar(await eA(A2.props), e2), yield (await V2.next()).value;
    }
    await V2.next();
    let mA = yield;
    return (await V2.next(mA)).value;
  }
  let { type: f3, props: E2 } = A2, C2 = f3;
  if (E2 && Gs(E2)) throw new Error("dangerouslySetInnerHTML property is not supported. See documentation for more information https://github.com/vercel/satori#jsx.");
  let { style: p2, children: h3, tw: k2, lang: b2 = a2 } = E2 || {}, x3 = ng(b2);
  if (k2) {
    let V2 = B2(k2, p2);
    p2 = Object.assign(V2, p2);
  }
  let w3 = t2.Node.create();
  i2.insertChild(w3, i2.getChildCount());
  let [y2, R2] = await ai(w3, C2, n2, p2, E2), F = y2.transform === n2.transform;
  if (F || (y2.transform.__parent = n2.transform), (y2.overflow === "hidden" || y2.clipPath && y2.clipPath !== "none") && (R2._inheritedClipPathId = `satori_cp-${r2}`, R2._inheritedMaskId = `satori_om-${r2}`), y2.maskImage && (R2._inheritedMaskId = `satori_mi-${r2}`), y2.backgroundClip === "text") {
    let V2 = { value: "" };
    R2._inheritedBackgroundClipTextPath = V2, y2._inheritedBackgroundClipTextPath = V2, y2.backgroundImage && (R2._inheritedBackgroundClipTextHasBackground = "true", y2._inheritedBackgroundClipTextHasBackground = "true");
  }
  let J2 = Us(h3), K3 = [], $2 = 0, lA = [];
  for (let V2 of J2) {
    let mA = Ar(V2, { id: r2 + "-" + $2++, parentStyle: y2, inheritedStyle: R2, isInheritingTransform: true, parent: w3, font: o2, embedFont: g3, debug: s2, graphemeImages: u4, canLoadAdditionalAssets: I2, locale: x3, getTwStyles: B2, onNodeDetected: e2.onNodeDetected });
    I2 ? lA.push(...(await mA.next()).value || []) : await mA.next(), K3.push(mA);
  }
  yield lA;
  for (let V2 of K3) await V2.next();
  let [iA, cA] = yield, { left: UA, top: hA, width: JA, height: CA } = w3.getComputedLayout();
  UA += iA, hA += cA;
  let AA = "", IA = "", Ce = "", { children: PA, ...LA } = E2;
  if ((dA = e2.onNodeDetected) == null || dA.call(e2, { left: UA, top: hA, width: JA, height: CA, type: C2, props: LA, key: A2.key, textContent: yt(PA) ? void 0 : PA }), C2 === "img") {
    let V2 = y2.__src;
    IA = await $t({ id: r2, left: UA, top: hA, width: JA, height: CA, src: V2, isInheritingTransform: F, debug: s2 }, y2, R2);
  } else if (C2 === "svg") {
    let V2 = y2.color, mA = await fa(A2, V2);
    IA = await $t({ id: r2, left: UA, top: hA, width: JA, height: CA, src: mA, isInheritingTransform: F, debug: s2 }, y2, R2);
  } else {
    let V2 = p2 == null ? void 0 : p2.display;
    if (C2 === "div" && h3 && typeof h3 != "string" && V2 !== "flex" && V2 !== "none" && V2 !== "contents") throw new Error('Expected <div> to have explicit "display: flex", "display: contents", or "display: none" if it has more than one child node.');
    IA = await $t({ id: r2, left: UA, top: hA, width: JA, height: CA, isInheritingTransform: F, debug: s2 }, y2, R2);
  }
  for (let V2 of K3) AA += (await V2.next([UA, hA])).value;
  return y2._inheritedBackgroundClipTextPath && (Ce += v2("clipPath", { id: `satori_bct-${r2}`, "clip-path": y2._inheritedClipPathId ? `url(#${y2._inheritedClipPathId})` : void 0 }, y2._inheritedBackgroundClipTextPath.value)), Ce + IA + AA;
}
var le = null;
var dn = null;
var Si = /* @__PURE__ */ new WeakMap();
var ki = typeof FinalizationRegistry == "function" ? new FinalizationRegistry((A2) => A2.destroy()) : null;
async function ig() {
  if (!le) {
    if (dn) {
      await dn;
      return;
    }
    dn = (async () => {
      if (le = await import_harfbuzzjs.default, !le || typeof le.createBlob != "function") throw new Error("HarfBuzz module loaded but API is not available");
    })(), await dn;
  }
}
function Xc(A2) {
  if (!le) throw new Error("HarfBuzz not initialized. Call initHarfBuzz() first.");
  if (Si.has(A2)) return Si.get(A2);
  let e2 = A2._rawFontData;
  if (!e2) throw new Error("Font does not have _rawFontData. Make sure to store the original ArrayBuffer when loading fonts.");
  let t2 = le.createBlob(new Uint8Array(e2)), r2 = le.createFace(t2, 0), n2 = le.createFont(r2);
  r2.destroy(), t2.destroy();
  let i2 = A2.unitsPerEm;
  return n2.setScale(i2, i2), Si.set(A2, n2), ki == null || ki.register(A2, n2), n2;
}
function og(A2, e2, t2 = {}) {
  if (!le) throw new Error("HarfBuzz not initialized");
  if (!e2 || e2.length === 0) return [];
  let { features: r2, language: n2, script: i2, direction: o2 } = t2, s2 = Xc(A2), a2 = le.createBuffer();
  try {
    a2.addText(e2), a2.guessSegmentProperties(), n2 && a2.setLanguage(n2), i2 && a2.setScript(i2), o2 && a2.setDirection(o2);
    let g3;
    if (r2 && Object.keys(r2).length > 0) {
      let I2 = [];
      for (let [B2, f3] of Object.entries(r2)) typeof f3 == "boolean" ? I2.push(f3 ? `+${B2}` : `-${B2}`) : I2.push(`${B2}=${f3}`);
      g3 = I2.join(",");
    }
    return g3 ? le.shape(s2, a2, g3) : le.shape(s2, a2), a2.json(s2);
  } finally {
    a2.destroy();
  }
}
function sg(A2) {
  if (!A2 || A2 === "normal") return {};
  let e2 = {}, t2 = A2.split(",").map((r2) => r2.trim());
  for (let r2 of t2) {
    let n2 = r2.match(/["']([a-z0-9]{4})["']\s*(?:(on|off|[0-9]+))?/i);
    if (n2) {
      let i2 = n2[1], o2 = n2[2];
      if (!o2 || o2 === "on" || o2 === "1") e2[i2] = true;
      else if (o2 === "off" || o2 === "0") e2[i2] = false;
      else {
        let s2 = parseInt(o2, 10);
        isNaN(s2) || (e2[i2] = s2);
      }
    }
  }
  return e2;
}
var zc = 256;
function Zc(A2) {
  return /^\s$/.test(A2);
}
function jc(A2, e2) {
  if (!A2) return [];
  let t2 = OA(A2, "grapheme"), r2 = [], n2 = "", i2 = null;
  for (let o2 of t2) {
    let s2;
    Zc(o2) && i2 !== null && i2.charToGlyphIndex(o2) ? s2 = i2 : s2 = e2(o2), i2 === null ? (i2 = s2, n2 = o2) : s2 === i2 ? n2 += o2 : (r2.push([n2, i2]), n2 = o2, i2 = s2);
  }
  return n2 && i2 && r2.push([n2, i2]), r2;
}
function $c(A2) {
  let e2 = new DataView(A2), t2 = e2.getUint16(12), r2 = e2.getUint32(16), n2 = new ArrayBuffer(r2), i2 = new DataView(n2), o2 = new Uint8Array(n2);
  i2.setUint32(0, e2.getUint32(4)), i2.setUint16(4, t2);
  let s2 = Math.floor(Math.log2(t2)), a2 = (1 << s2) * 16;
  i2.setUint16(6, a2), i2.setUint16(8, s2), i2.setUint16(10, t2 * 16 - a2);
  let g3 = 12 + t2 * 16;
  for (let u4 = 0; u4 < t2; u4++) {
    let I2 = 44 + u4 * 20, B2 = e2.getUint32(I2), f3 = e2.getUint32(I2 + 4), E2 = e2.getUint32(I2 + 8), C2 = e2.getUint32(I2 + 12), p2 = e2.getUint32(I2 + 16), h3 = 12 + u4 * 16;
    if (i2.setUint32(h3, B2), i2.setUint32(h3 + 4, p2), i2.setUint32(h3 + 8, g3), i2.setUint32(h3 + 12, C2), E2 < C2) {
      let k2 = new Uint8Array(A2, f3 + 2, E2 - 2), b2 = new Uint8Array(C2);
      inflateSync2(k2, b2), o2.set(b2, g3);
    } else o2.set(new Uint8Array(A2, f3, C2), g3);
    g3 += C2 + 3 & -4;
  }
  return n2;
}
var ag = "unknown";
function Af(A2) {
  let e2 = [], t2 = [0, 0], r2 = [0, 0], n2 = (i2, o2) => {
    let s2 = i2[0];
    for (let a2 = 1; a2 <= o2; a2++) {
      let g3 = a2 / o2, u4 = ef(i2, g3);
      e2.push({ from: s2, to: u4 }), s2 = u4;
    }
    r2 = i2[i2.length - 1];
  };
  for (let i2 of A2) {
    if (i2.type === "M") {
      t2 = r2 = [i2.x, i2.y];
      continue;
    }
    if (i2.type === "L") {
      let o2 = [i2.x, i2.y];
      e2.push({ from: r2, to: o2 }), r2 = o2;
      continue;
    }
    if (i2.type === "Q") {
      n2([r2, [i2.x1, i2.y1], [i2.x, i2.y]], 12);
      continue;
    }
    if (i2.type === "C") {
      n2([r2, [i2.x1, i2.y1], [i2.x2, i2.y2], [i2.x, i2.y]], 16);
      continue;
    }
    i2.type === "Z" && (e2.push({ from: r2, to: t2 }), r2 = t2);
  }
  return e2;
}
function ef(A2, e2) {
  let t2 = A2;
  for (; t2.length > 1; ) {
    let r2 = [];
    for (let n2 = 0; n2 < t2.length - 1; n2++) r2.push([t2[n2][0] + (t2[n2 + 1][0] - t2[n2][0]) * e2, t2[n2][1] + (t2[n2 + 1][1] - t2[n2][1]) * e2]);
    t2 = r2;
  }
  return t2[0];
}
function tf(A2, e2) {
  if (!e2) return [];
  let t2 = e2.strokeWidth, r2 = e2.underlineY - t2 * 0.25, n2 = e2.underlineY + t2 * 2.5, i2 = Af(A2);
  if (!i2.length) return [];
  let o2 = n2 - r2, s2 = Math.max(12, Math.ceil(o2 / 0.25)), a2 = o2 / s2, g3 = r2 + a2 / 2, u4 = /* @__PURE__ */ new Set();
  for (let b2 = 0; b2 < s2; b2++) {
    let x3 = g3 + a2 * b2, w3 = [];
    for (let y2 of i2) {
      let [R2, F] = y2.from, [J2, K3] = y2.to;
      if (F === K3) continue;
      let $2 = Math.min(F, K3), lA = Math.max(F, K3);
      if (x3 < $2 || x3 >= lA) continue;
      let iA = (x3 - F) / (K3 - F), cA = R2 + (J2 - R2) * iA;
      w3.push(cA);
    }
    if (w3.length) {
      w3.sort((y2, R2) => y2 - R2);
      for (let y2 = 0; y2 < w3.length - 1; y2 += 2) {
        let R2 = Math.min(w3[y2], w3[y2 + 1]), F = Math.max(w3[y2], w3[y2 + 1]), J2 = Math.floor(R2), K3 = Math.ceil(F);
        for (let $2 = J2; $2 < K3; $2++) u4.add($2);
      }
    }
  }
  if (!u4.size) return [];
  let I2 = Array.from(u4.values()).sort((b2, x3) => b2 - x3), B2 = [], f3 = I2[0], E2 = I2[0];
  for (let b2 = 1; b2 < I2.length; b2++) {
    let x3 = I2[b2];
    x3 > E2 + 1 && (B2.push([f3, E2 + 1]), f3 = x3), E2 = x3;
  }
  B2.push([f3, E2 + 1]);
  let C2 = [], p2 = t2 * 0.6, h3 = B2[0][0], k2 = B2[B2.length - 1][1];
  for (let [b2, x3] of B2) {
    let w3 = Math.min(b2, h3) - p2, y2 = Math.max(x3, k2) + p2;
    C2.push({ x1: w3, x2: y2, y1: r2, y2: n2 });
  }
  return C2;
}
function rf(A2, e2, [t2, r2], [n2, i2]) {
  if (t2 !== n2) return t2 ? !n2 || t2 === A2 ? -1 : n2 === A2 ? 1 : A2 === 400 && t2 === 500 || A2 === 500 && t2 === 400 ? -1 : A2 === 400 && n2 === 500 || A2 === 500 && n2 === 400 ? 1 : A2 < 400 ? t2 < A2 && n2 < A2 ? n2 - t2 : t2 < A2 ? -1 : n2 < A2 ? 1 : t2 - n2 : A2 < t2 && A2 < n2 ? t2 - n2 : A2 < t2 ? -1 : A2 < n2 ? 1 : n2 - t2 : 1;
  if (r2 !== i2) {
    if (r2 === e2) return -1;
    if (i2 === e2) return 1;
  }
  return -1;
}
var xi = /* @__PURE__ */ new WeakMap();
var er = class {
  constructor(e2) {
    this.fonts = /* @__PURE__ */ new Map();
    this.shapedRunCache = /* @__PURE__ */ new Map();
    this.addFonts(e2);
  }
  get({ name: e2, weight: t2, style: r2 }) {
    if (!this.fonts.has(e2)) return null;
    t2 === "normal" && (t2 = 400), t2 === "bold" && (t2 = 700), typeof t2 == "string" && (t2 = Number.parseInt(t2, 10));
    let n2 = [...this.fonts.get(e2)], i2 = n2[0];
    for (let o2 = 1; o2 < n2.length; o2++) {
      let [, s2, a2] = i2, [, g3, u4] = n2[o2];
      rf(t2, r2, [s2, a2], [g3, u4]) > 0 && (i2 = n2[o2]);
    }
    return i2[0];
  }
  addFonts(e2) {
    e2.length && this.fonts.size && this.shapedRunCache.clear();
    for (let t2 of e2) {
      let { name: r2, data: n2, lang: i2 } = t2;
      if (i2 && !tg(i2)) throw new Error(`Invalid value for props \`lang\`: "${i2}". The value must be one of the following: ${Cn.join(", ")}.`);
      let o2 = i2 ?? ag, s2;
      if (xi.has(n2)) s2 = xi.get(n2);
      else {
        let g3 = "buffer" in n2 ? n2.buffer.slice(n2.byteOffset, n2.byteOffset + n2.byteLength) : n2;
        s2 = opentype_module_default.parse(g3, { lowMemory: true });
        let u4 = new Uint8Array(g3), I2 = u4[0] === 119 && u4[1] === 79 && u4[2] === 70 && u4[3] === 70;
        s2._rawFontData = I2 ? $c(g3) : g3;
        let B2 = s2.charToGlyphIndex;
        s2.charToGlyphIndex = (f3) => {
          let E2 = B2.call(s2, f3);
          return E2 === 0 && s2._trackBrokenChars && s2._trackBrokenChars.push(f3), E2;
        }, xi.set(n2, s2);
      }
      this.defaultFont || (this.defaultFont = s2);
      let a2 = `${r2.toLowerCase()}_${o2}`;
      this.fonts.has(a2) || this.fonts.set(a2, []), this.fonts.get(a2).push([s2, t2.weight, t2.style]);
    }
  }
  getEngine(e2 = 16, t2 = "normal", { fontFamily: r2 = "sans-serif", fontWeight: n2 = 400, fontStyle: i2 = "normal" }, o2) {
    if (!this.fonts.size) throw new Error("No fonts are loaded. At least one font is required to calculate the layout.");
    r2 = (Array.isArray(r2) ? r2 : [r2]).map((y2) => y2.toLowerCase());
    let s2 = [];
    r2.forEach((y2) => {
      let R2 = this.get({ name: y2, weight: n2, style: i2 });
      if (R2) {
        s2.push(R2);
        return;
      }
      let F = this.get({ name: y2 + "_unknown", weight: n2, style: i2 });
      if (F) {
        s2.push(F);
        return;
      }
    });
    let a2 = Array.from(this.fonts.keys()), g3 = [], u4 = [], I2 = [];
    for (let y2 of a2) if (!r2.includes(y2)) if (o2) {
      let R2 = nf(y2);
      R2 ? R2 === o2 ? g3.push(this.get({ name: y2, weight: n2, style: i2 })) : u4.push(this.get({ name: y2, weight: n2, style: i2 })) : I2.push(this.get({ name: y2, weight: n2, style: i2 }));
    } else I2.push(this.get({ name: y2, weight: n2, style: i2 }));
    let B2 = /* @__PURE__ */ new Map(), f3 = (y2, R2 = true) => {
      let F = [...s2, ...I2, ...g3, ...R2 ? u4 : []];
      if (typeof y2 > "u") return R2 ? F[F.length - 1] : void 0;
      let J2 = y2.charCodeAt(0);
      if (B2.has(J2)) return B2.get(J2);
      let K3 = F.find(($2, lA) => !!$2.charToGlyphIndex(y2) || R2 && lA === F.length - 1);
      return K3 && B2.set(J2, K3), K3;
    }, E2 = (y2, R2 = false) => {
      var J2, K3;
      return ((R2 ? (K3 = (J2 = y2.tables) == null ? void 0 : J2.os2) == null ? void 0 : K3.sTypoAscender : 0) || y2.ascender) / y2.unitsPerEm * e2;
    }, C2 = (y2, R2 = false) => {
      var J2, K3;
      return ((R2 ? (K3 = (J2 = y2.tables) == null ? void 0 : J2.os2) == null ? void 0 : K3.sTypoDescender : 0) || y2.descender) / y2.unitsPerEm * e2;
    }, p2 = (y2, R2 = false) => {
      var F, J2;
      if (typeof t2 == "string" && t2 === "normal") {
        let K3 = (R2 ? (J2 = (F = y2.tables) == null ? void 0 : F.os2) == null ? void 0 : J2.sTypoLineGap : 0) || 0;
        return E2(y2, R2) - C2(y2, R2) + K3 / y2.unitsPerEm * e2;
      } else if (typeof t2 == "number") return e2 * t2;
    }, h3 = (y2) => f3(y2, false), k2 = this.shapedRunCache, b2 = `${r2.join(",")}|${n2}|${i2}|${o2 || ""}`, x3 = (y2, R2) => {
      let F = `${b2}\0${R2 || ""}\0${y2}`, J2 = k2.get(F);
      if (J2 !== void 0) return k2.delete(F), k2.set(F, J2), J2;
      let K3 = R2 ? sg(R2) : {}, $2 = jc(y2, f3).map(([lA, iA]) => [lA, iA, og(iA, lA, { features: K3 })]);
      if (k2.size >= zc) {
        let lA = k2.keys().next().value;
        lA !== void 0 && k2.delete(lA);
      }
      return k2.set(F, $2), $2;
    };
    return { has: (y2) => {
      if (y2 === `
`) return true;
      let R2 = h3(y2);
      if (!R2) return false;
      for (let F of OA(y2, "grapheme")) if (!R2.charToGlyphIndex(F)) return false;
      return true;
    }, baseline: (y2, R2 = typeof y2 > "u" ? s2[0] : f3(y2)) => {
      let F = E2(R2), J2 = C2(R2), K3 = F - J2;
      return F + (p2(R2) - K3) / 2;
    }, height: (y2, R2 = typeof y2 > "u" ? s2[0] : f3(y2)) => p2(R2), measure: (y2, R2) => this.measure(y2, R2, x3), getSVG: (y2, R2, F) => this.getSVG(y2, R2, x3, F) };
  }
  patchFontFallbackResolver(e2, t2) {
    let r2 = [];
    e2._trackBrokenChars = r2;
    let n2 = e2.stringToGlyphs;
    return e2.stringToGlyphs = (i2, ...o2) => {
      let s2 = n2.call(e2, i2, ...o2);
      for (let a2 = 0; a2 < s2.length; a2++) if (s2[a2].unicode === void 0) {
        let g3 = r2.shift(), u4 = t2(g3);
        if (u4 !== e2) {
          let I2 = u4.charToGlyph(g3), B2 = e2.unitsPerEm / u4.unitsPerEm, f3 = new opentype_module_default.Path();
          f3.unitsPerEm = e2.unitsPerEm, f3.commands = I2.path.commands.map((C2) => {
            let p2 = { ...C2 };
            for (let h3 in p2) typeof p2[h3] == "number" && (p2[h3] *= B2);
            return p2;
          });
          let E2 = new opentype_module_default.Glyph({ ...I2, advanceWidth: I2.advanceWidth * B2, xMin: I2.xMin * B2, xMax: I2.xMax * B2, yMin: I2.yMin * B2, yMax: I2.yMax * B2, path: f3 });
          s2[a2] = E2;
        }
      }
      return s2;
    }, () => {
      e2.stringToGlyphs = n2, e2._trackBrokenChars = void 0;
    };
  }
  measure(e2, { fontSize: t2, letterSpacing: r2 = 0, fontFeatureSettings: n2 }, i2) {
    let o2 = i2(e2, n2), s2 = 0, a2 = 0;
    for (let [, u4, I2] of o2) {
      let B2 = 0;
      for (let f3 of I2) B2 += f3.ax;
      s2 += B2 / u4.unitsPerEm * t2, a2 += I2.length;
    }
    let g3 = r2 * Math.max(0, a2 - 1);
    return s2 + g3;
  }
  getSVG(e2, { fontSize: t2, top: r2, left: n2, letterSpacing: i2 = 0, fontFeatureSettings: o2 }, s2, a2) {
    if (t2 === 0) return { path: "", boxes: [] };
    let g3 = s2(e2.replace(/\n/g, ""), o2), u4 = [], I2 = n2, B2 = r2, f3 = false, E2 = new opentype_module_default.Path();
    for (let [, C2, p2] of g3) {
      let h3 = t2 / C2.unitsPerEm;
      for (let k2 = 0; k2 < p2.length; k2++) {
        let b2 = p2[k2];
        f3 && (I2 += i2);
        let x3 = C2.glyphs.get(b2.g);
        if (x3 && x3.path) {
          let w3 = I2 + b2.dx * h3, y2 = B2 + b2.dy * h3, R2 = x3.getPath(w3, y2, t2, {}), F = a2 ? tf(R2.commands, a2) : [];
          F.length && u4.push(...F), E2.extend(R2);
        }
        I2 += b2.ax * h3, f3 = true;
      }
    }
    return { path: E2.toPathData(1), boxes: u4 };
  }
};
function nf(A2) {
  let e2 = A2.split("_"), t2 = e2[e2.length - 1];
  return t2 === ag ? void 0 : t2;
}
function Ri({ width: A2, height: e2, content: t2 }) {
  return v2("svg", { width: A2, height: e2, viewBox: `0 0 ${A2} ${e2}`, xmlns: "http://www.w3.org/2000/svg", "enable-background": t2.includes('in="BackgroundImage"') ? "new" : void 0 }, t2);
}
var PI = tl(CI());
var Wd = ["ios", "android", "windows", "macos", "web"];
function pI(A2) {
  return Wd.includes(A2);
}
var Yd = ["portrait", "landscape"];
function hI(A2) {
  return Yd.includes(A2);
}
var dI;
(function(A2) {
  A2.fontSize = "fontSize", A2.lineHeight = "lineHeight";
})(dI || (dI = {}));
var sA;
(function(A2) {
  A2.rem = "rem", A2.em = "em", A2.px = "px", A2.percent = "%", A2.vw = "vw", A2.vh = "vh", A2.none = "<no-css-unit>";
})(sA || (sA = {}));
function rs(A2) {
  return typeof A2 == "string";
}
function ns(A2) {
  return typeof A2 == "object";
}
var is;
function D(A2) {
  return { kind: "complete", style: A2 };
}
function TA(A2, e2 = {}) {
  let { fractions: t2 } = e2;
  if (t2 && A2.includes("/")) {
    let [i2 = "", o2 = ""] = A2.split("/", 2), s2 = TA(i2), a2 = TA(o2);
    return !s2 || !a2 ? null : [s2[0] / a2[0], a2[1]];
  }
  let r2 = parseFloat(A2);
  if (Number.isNaN(r2)) return null;
  let n2 = A2.match(/(([a-z]{2,}|%))$/);
  if (!n2) return [r2, sA.none];
  switch (n2 == null ? void 0 : n2[1]) {
    case "rem":
      return [r2, sA.rem];
    case "px":
      return [r2, sA.px];
    case "em":
      return [r2, sA.em];
    case "%":
      return [r2, sA.percent];
    case "vw":
      return [r2, sA.vw];
    case "vh":
      return [r2, sA.vh];
    default:
      return null;
  }
}
function We(A2, e2, t2 = {}) {
  let r2 = Ne(e2, t2);
  return r2 === null ? null : D({ [A2]: r2 });
}
function Hn(A2, e2, t2) {
  let r2 = Ne(e2);
  return r2 !== null && (t2[A2] = r2), t2;
}
function yI(A2, e2) {
  let t2 = Ne(e2);
  return t2 === null ? null : { [A2]: t2 };
}
function Ne(A2, e2 = {}) {
  if (A2 === void 0) return null;
  let t2 = TA(String(A2), e2);
  return t2 ? et3(...t2, e2) : null;
}
function et3(A2, e2, t2 = {}) {
  let { isNegative: r2, device: n2 } = t2;
  switch (e2) {
    case sA.rem:
      return A2 * 16 * (r2 ? -1 : 1);
    case sA.px:
      return A2 * (r2 ? -1 : 1);
    case sA.percent:
      return `${r2 ? "-" : ""}${A2}%`;
    case sA.none:
      return A2 * (r2 ? -1 : 1);
    case sA.vw:
      return n2 != null && n2.windowDimensions ? n2.windowDimensions.width * (A2 / 100) : (re("`vw` CSS unit requires configuration with `useDeviceContext()`"), null);
    case sA.vh:
      return n2 != null && n2.windowDimensions ? n2.windowDimensions.height * (A2 / 100) : (re("`vh` CSS unit requires configuration with `useDeviceContext()`"), null);
    default:
      return null;
  }
}
function os(A2) {
  let e2 = TA(A2);
  if (!e2) return null;
  let [t2, r2] = e2;
  switch (r2) {
    case sA.rem:
      return t2 * 16;
    case sA.px:
      return t2;
    default:
      return null;
  }
}
var qd = { t: "Top", tr: "TopRight", tl: "TopLeft", b: "Bottom", br: "BottomRight", bl: "BottomLeft", l: "Left", r: "Right", x: "Horizontal", y: "Vertical" };
function ss(A2) {
  return qd[A2 ?? ""] || "All";
}
function as(A2) {
  let e2 = "All";
  return [A2.replace(/^-(t|b|r|l|tr|tl|br|bl)(-|$)/, (r2, n2) => (e2 = ss(n2), "")), e2];
}
function Et(A2, e2 = {}) {
  if (A2.includes("/")) {
    let t2 = mI(A2, { ...e2, fractions: true });
    if (t2) return t2;
  }
  return A2[0] === "[" && (A2 = A2.slice(1, -1)), mI(A2, e2);
}
function Qe(A2, e2, t2 = {}) {
  let r2 = Et(e2, t2);
  return r2 === null ? null : D({ [A2]: r2 });
}
function mI(A2, e2 = {}) {
  if (A2 === "px") return 1;
  let t2 = TA(A2, e2);
  if (!t2) return null;
  let [r2, n2] = t2;
  return e2.fractions && (n2 = sA.percent, r2 *= 100), n2 === sA.none && (r2 = r2 / 4, n2 = sA.rem), et3(r2, n2, e2);
}
function Xd(...A2) {
  console.warn(...A2);
}
function Vd(...A2) {
}
var re = typeof process > "u" || ((is = process == null ? void 0 : process.env) === null || is === void 0 ? void 0 : is.JEST_WORKER_ID) === void 0 ? Xd : Vd;
var zd = [["aspect-square", D({ aspectRatio: 1 })], ["aspect-video", D({ aspectRatio: 16 / 9 })], ["items-center", D({ alignItems: "center" })], ["items-start", D({ alignItems: "flex-start" })], ["items-end", D({ alignItems: "flex-end" })], ["items-baseline", D({ alignItems: "baseline" })], ["items-stretch", D({ alignItems: "stretch" })], ["justify-start", D({ justifyContent: "flex-start" })], ["justify-end", D({ justifyContent: "flex-end" })], ["justify-center", D({ justifyContent: "center" })], ["justify-between", D({ justifyContent: "space-between" })], ["justify-around", D({ justifyContent: "space-around" })], ["justify-evenly", D({ justifyContent: "space-evenly" })], ["content-start", D({ alignContent: "flex-start" })], ["content-end", D({ alignContent: "flex-end" })], ["content-between", D({ alignContent: "space-between" })], ["content-around", D({ alignContent: "space-around" })], ["content-stretch", D({ alignContent: "stretch" })], ["content-center", D({ alignContent: "center" })], ["self-auto", D({ alignSelf: "auto" })], ["self-start", D({ alignSelf: "flex-start" })], ["self-end", D({ alignSelf: "flex-end" })], ["self-center", D({ alignSelf: "center" })], ["self-stretch", D({ alignSelf: "stretch" })], ["self-baseline", D({ alignSelf: "baseline" })], ["direction-inherit", D({ direction: "inherit" })], ["direction-ltr", D({ direction: "ltr" })], ["direction-rtl", D({ direction: "rtl" })], ["hidden", D({ display: "none" })], ["flex", D({ display: "flex" })], ["flex-row", D({ flexDirection: "row" })], ["flex-row-reverse", D({ flexDirection: "row-reverse" })], ["flex-col", D({ flexDirection: "column" })], ["flex-col-reverse", D({ flexDirection: "column-reverse" })], ["flex-wrap", D({ flexWrap: "wrap" })], ["flex-wrap-reverse", D({ flexWrap: "wrap-reverse" })], ["flex-nowrap", D({ flexWrap: "nowrap" })], ["flex-auto", D({ flexGrow: 1, flexShrink: 1, flexBasis: "auto" })], ["flex-initial", D({ flexGrow: 0, flexShrink: 1, flexBasis: "auto" })], ["flex-none", D({ flexGrow: 0, flexShrink: 0, flexBasis: "auto" })], ["overflow-hidden", D({ overflow: "hidden" })], ["overflow-visible", D({ overflow: "visible" })], ["overflow-scroll", D({ overflow: "scroll" })], ["absolute", D({ position: "absolute" })], ["relative", D({ position: "relative" })], ["italic", D({ fontStyle: "italic" })], ["not-italic", D({ fontStyle: "normal" })], ["oldstyle-nums", Fr("oldstyle-nums")], ["small-caps", Fr("small-caps")], ["lining-nums", Fr("lining-nums")], ["tabular-nums", Fr("tabular-nums")], ["proportional-nums", Fr("proportional-nums")], ["font-thin", D({ fontWeight: "100" })], ["font-100", D({ fontWeight: "100" })], ["font-extralight", D({ fontWeight: "200" })], ["font-200", D({ fontWeight: "200" })], ["font-light", D({ fontWeight: "300" })], ["font-300", D({ fontWeight: "300" })], ["font-normal", D({ fontWeight: "normal" })], ["font-400", D({ fontWeight: "400" })], ["font-medium", D({ fontWeight: "500" })], ["font-500", D({ fontWeight: "500" })], ["font-semibold", D({ fontWeight: "600" })], ["font-600", D({ fontWeight: "600" })], ["font-bold", D({ fontWeight: "bold" })], ["font-700", D({ fontWeight: "700" })], ["font-extrabold", D({ fontWeight: "800" })], ["font-800", D({ fontWeight: "800" })], ["font-black", D({ fontWeight: "900" })], ["font-900", D({ fontWeight: "900" })], ["include-font-padding", D({ includeFontPadding: true })], ["remove-font-padding", D({ includeFontPadding: false })], ["max-w-none", D({ maxWidth: "99999%" })], ["text-left", D({ textAlign: "left" })], ["text-center", D({ textAlign: "center" })], ["text-right", D({ textAlign: "right" })], ["text-justify", D({ textAlign: "justify" })], ["text-auto", D({ textAlign: "auto" })], ["underline", D({ textDecorationLine: "underline" })], ["line-through", D({ textDecorationLine: "line-through" })], ["no-underline", D({ textDecorationLine: "none" })], ["uppercase", D({ textTransform: "uppercase" })], ["lowercase", D({ textTransform: "lowercase" })], ["capitalize", D({ textTransform: "capitalize" })], ["normal-case", D({ textTransform: "none" })], ["w-auto", D({ width: "auto" })], ["h-auto", D({ height: "auto" })], ["shadow-sm", D({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowRadius: 1, shadowOpacity: 0.025, elevation: 1 })], ["shadow", D({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowRadius: 1, shadowOpacity: 0.075, elevation: 2 })], ["shadow-md", D({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowRadius: 3, shadowOpacity: 0.125, elevation: 3 })], ["shadow-lg", D({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 8, elevation: 8 })], ["shadow-xl", D({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowOpacity: 0.19, shadowRadius: 20, elevation: 12 })], ["shadow-2xl", D({ shadowOffset: { width: 1, height: 1 }, shadowColor: "#000", shadowOpacity: 0.25, shadowRadius: 30, elevation: 16 })], ["shadow-none", D({ shadowOffset: { width: 0, height: 0 }, shadowColor: "#000", shadowRadius: 0, shadowOpacity: 0, elevation: 0 })]];
var gs = zd;
function Fr(A2) {
  return { kind: "dependent", complete(e2) {
    (!e2.fontVariant || !Array.isArray(e2.fontVariant)) && (e2.fontVariant = []), e2.fontVariant.push(A2);
  } };
}
var Nr = class {
  constructor(e2) {
    this.ir = new Map(gs), this.styles = /* @__PURE__ */ new Map(), this.prefixes = /* @__PURE__ */ new Map(), this.ir = new Map([...gs, ...e2 ?? []]);
  }
  getStyle(e2) {
    return this.styles.get(e2);
  }
  setStyle(e2, t2) {
    this.styles.set(e2, t2);
  }
  getIr(e2) {
    return this.ir.get(e2);
  }
  setIr(e2, t2) {
    this.ir.set(e2, t2);
  }
  getPrefixMatch(e2) {
    return this.prefixes.get(e2);
  }
  setPrefixMatch(e2, t2) {
    this.prefixes.set(e2, t2);
  }
};
function us(A2, e2, t2 = {}) {
  let r2 = e2 == null ? void 0 : e2[A2];
  if (!r2) return Qe("fontSize", A2, t2);
  if (typeof r2 == "string") return We("fontSize", r2);
  let n2 = {}, [i2, o2] = r2, s2 = yI("fontSize", i2);
  if (s2 && (n2 = s2), typeof o2 == "string") return D(Hn("lineHeight", wI(o2, n2), n2));
  let { lineHeight: a2, letterSpacing: g3 } = o2;
  return a2 && Hn("lineHeight", wI(a2, n2), n2), g3 && Hn("letterSpacing", g3, n2), D(n2);
}
function wI(A2, e2) {
  let t2 = TA(A2);
  if (t2) {
    let [r2, n2] = t2;
    if ((n2 === sA.none || n2 === sA.em) && typeof e2.fontSize == "number") return e2.fontSize * r2;
  }
  return A2;
}
function Is(A2, e2) {
  var t2;
  let r2 = (t2 = e2 == null ? void 0 : e2[A2]) !== null && t2 !== void 0 ? t2 : A2.startsWith("[") ? A2.slice(1, -1) : A2, n2 = TA(r2);
  if (!n2) return null;
  let [i2, o2] = n2;
  if (o2 === sA.none) return { kind: "dependent", complete(a2) {
    if (typeof a2.fontSize != "number") return "relative line-height utilities require that font-size be set";
    a2.lineHeight = a2.fontSize * i2;
  } };
  let s2 = et3(i2, o2);
  return s2 !== null ? D({ lineHeight: s2 }) : null;
}
function ls(A2, e2, t2, r2, n2) {
  let i2 = "";
  if (r2[0] === "[") i2 = r2.slice(1, -1);
  else {
    let g3 = n2 == null ? void 0 : n2[r2];
    if (g3) i2 = g3;
    else {
      let u4 = Et(r2);
      return u4 && typeof u4 == "number" ? DI(u4, sA.px, e2, A2) : null;
    }
  }
  if (i2 === "auto") return bI(e2, A2, "auto");
  let o2 = TA(i2);
  if (!o2) return null;
  let [s2, a2] = o2;
  return t2 && (s2 = -s2), DI(s2, a2, e2, A2);
}
function DI(A2, e2, t2, r2) {
  let n2 = et3(A2, e2);
  return n2 === null ? null : bI(t2, r2, n2);
}
function bI(A2, e2, t2) {
  switch (A2) {
    case "All":
      return { kind: "complete", style: { [`${e2}Top`]: t2, [`${e2}Right`]: t2, [`${e2}Bottom`]: t2, [`${e2}Left`]: t2 } };
    case "Bottom":
    case "Top":
    case "Left":
    case "Right":
      return { kind: "complete", style: { [`${e2}${A2}`]: t2 } };
    case "Vertical":
      return { kind: "complete", style: { [`${e2}Top`]: t2, [`${e2}Bottom`]: t2 } };
    case "Horizontal":
      return { kind: "complete", style: { [`${e2}Left`]: t2, [`${e2}Right`]: t2 } };
    default:
      return null;
  }
}
function cs(A2) {
  if (!A2) return {};
  let e2 = Object.entries(A2).reduce((n2, [i2, o2]) => {
    let s2 = [0, 1 / 0, 0], a2 = typeof o2 == "string" ? { min: o2 } : o2, g3 = a2.min ? os(a2.min) : 0;
    g3 === null ? re(`invalid screen config value: ${i2}->min: ${a2.min}`) : s2[0] = g3;
    let u4 = a2.max ? os(a2.max) : 1 / 0;
    return u4 === null ? re(`invalid screen config value: ${i2}->max: ${a2.max}`) : s2[1] = u4, n2[i2] = s2, n2;
  }, {}), t2 = Object.values(e2);
  t2.sort((n2, i2) => {
    let [o2, s2] = n2, [a2, g3] = i2;
    return s2 === 1 / 0 || g3 === 1 / 0 ? o2 - a2 : s2 - g3;
  });
  let r2 = 0;
  return t2.forEach((n2) => n2[2] = r2++), e2;
}
function fs(A2, e2) {
  let t2 = e2 == null ? void 0 : e2[A2];
  if (!t2) return null;
  if (typeof t2 == "string") return D({ fontFamily: t2 });
  let r2 = t2[0];
  return r2 ? D({ fontFamily: r2 }) : null;
}
function Qt(A2, e2, t2) {
  if (!t2) return null;
  let r2;
  e2.includes("/") && ([e2 = "", r2] = e2.split("/", 2));
  let n2 = "";
  if (e2.startsWith("[#") || e2.startsWith("[rgb") ? n2 = e2.slice(1, -1) : n2 = xI(e2, t2), !n2) return null;
  if (r2) {
    let i2 = Number(r2);
    if (!Number.isNaN(i2)) return n2 = SI(n2, i2 / 100), D({ [On[A2].color]: n2 });
  }
  return { kind: "dependent", complete(i2) {
    let o2 = On[A2].opacity, s2 = i2[o2];
    typeof s2 == "number" && (n2 = SI(n2, s2)), i2[On[A2].color] = n2;
  } };
}
function Mr(A2, e2) {
  let t2 = parseInt(e2, 10);
  if (Number.isNaN(t2)) return null;
  let r2 = t2 / 100;
  return { kind: "complete", style: { [On[A2].opacity]: r2 } };
}
function SI(A2, e2) {
  return A2.startsWith("#") ? A2 = Zd(A2) : A2.startsWith("rgb(") && (A2 = A2.replace(/^rgb\(/, "rgba(").replace(/\)$/, ", 1)")), A2.replace(/, ?\d*\.?(\d+)\)$/, `, ${e2})`);
}
function kI(A2) {
  for (let e2 in A2) e2.startsWith("__opacity_") && delete A2[e2];
}
var On = { bg: { opacity: "__opacity_bg", color: "backgroundColor" }, text: { opacity: "__opacity_text", color: "color" }, border: { opacity: "__opacity_border", color: "borderColor" }, borderTop: { opacity: "__opacity_border", color: "borderTopColor" }, borderBottom: { opacity: "__opacity_border", color: "borderBottomColor" }, borderLeft: { opacity: "__opacity_border", color: "borderLeftColor" }, borderRight: { opacity: "__opacity_border", color: "borderRightColor" }, shadow: { opacity: "__opacity_shadow", color: "shadowColor" }, tint: { opacity: "__opacity_tint", color: "tintColor" } };
function Zd(A2) {
  let e2 = A2;
  A2 = A2.replace(jd, (o2, s2, a2, g3) => s2 + s2 + a2 + a2 + g3 + g3);
  let t2 = $d.exec(A2);
  if (!t2) return re(`invalid config hex color value: ${e2}`), "rgba(0, 0, 0, 1)";
  let r2 = parseInt(t2[1], 16), n2 = parseInt(t2[2], 16), i2 = parseInt(t2[3], 16);
  return `rgba(${r2}, ${n2}, ${i2}, 1)`;
}
function xI(A2, e2) {
  let t2 = e2[A2];
  if (rs(t2)) return t2;
  if (ns(t2) && rs(t2.DEFAULT)) return t2.DEFAULT;
  let [r2 = "", ...n2] = A2.split("-");
  for (; r2 !== A2; ) {
    let i2 = e2[r2];
    if (ns(i2)) return xI(n2.join("-"), i2);
    if (n2.length === 0) return "";
    r2 = `${r2}-${n2.shift()}`;
  }
  return "";
}
var jd = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
var $d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function vI(A2, e2) {
  let [t2, r2] = as(A2);
  if (t2.match(/^(-?(\d)+)?$/)) return Ap(t2, r2, e2 == null ? void 0 : e2.borderWidth);
  if (t2 = t2.replace(/^-/, ""), ["dashed", "solid", "dotted"].includes(t2)) return D({ borderStyle: t2 });
  let i2 = "border";
  switch (r2) {
    case "Bottom":
      i2 = "borderBottom";
      break;
    case "Top":
      i2 = "borderTop";
      break;
    case "Left":
      i2 = "borderLeft";
      break;
    case "Right":
      i2 = "borderRight";
      break;
  }
  let o2 = Qt(i2, t2, e2 == null ? void 0 : e2.borderColor);
  if (o2) return o2;
  let s2 = `border${r2 === "All" ? "" : r2}Width`;
  t2 = t2.replace(/^-/, "");
  let a2 = t2.slice(1, -1), g3 = Qe(s2, a2);
  return typeof (g3 == null ? void 0 : g3.style[s2]) != "number" ? null : g3;
}
function Ap(A2, e2, t2) {
  if (!t2) return null;
  A2 = A2.replace(/^-/, "");
  let n2 = t2[A2 === "" ? "DEFAULT" : A2];
  if (n2 === void 0) return null;
  let i2 = `border${e2 === "All" ? "" : e2}Width`;
  return We(i2, n2);
}
function FI(A2, e2) {
  if (!e2) return null;
  let [t2, r2] = as(A2);
  t2 = t2.replace(/^-/, ""), t2 === "" && (t2 = "DEFAULT");
  let n2 = `border${r2 === "All" ? "" : r2}Radius`, i2 = e2[t2];
  if (i2) return RI(We(n2, i2));
  let o2 = Qe(n2, t2);
  return typeof (o2 == null ? void 0 : o2.style[n2]) != "number" ? null : RI(o2);
}
function RI(A2) {
  if ((A2 == null ? void 0 : A2.kind) !== "complete") return A2;
  let e2 = A2.style.borderTopRadius;
  e2 !== void 0 && (A2.style.borderTopLeftRadius = e2, A2.style.borderTopRightRadius = e2, delete A2.style.borderTopRadius);
  let t2 = A2.style.borderBottomRadius;
  t2 !== void 0 && (A2.style.borderBottomLeftRadius = t2, A2.style.borderBottomRightRadius = t2, delete A2.style.borderBottomRadius);
  let r2 = A2.style.borderLeftRadius;
  r2 !== void 0 && (A2.style.borderBottomLeftRadius = r2, A2.style.borderTopLeftRadius = r2, delete A2.style.borderLeftRadius);
  let n2 = A2.style.borderRightRadius;
  return n2 !== void 0 && (A2.style.borderBottomRightRadius = n2, A2.style.borderTopRightRadius = n2, delete A2.style.borderRightRadius), A2;
}
function Gt(A2, e2, t2, r2) {
  let n2 = null;
  A2 === "inset" && (e2 = e2.replace(/^(x|y)-/, (s2, a2) => (n2 = a2 === "x" ? "x" : "y", "")));
  let i2 = r2 == null ? void 0 : r2[e2];
  if (i2) {
    let s2 = Ne(i2, { isNegative: t2 });
    if (s2 !== null) return NI(A2, n2, s2);
  }
  let o2 = Et(e2, { isNegative: t2 });
  return o2 !== null ? NI(A2, n2, o2) : null;
}
function NI(A2, e2, t2) {
  if (A2 !== "inset") return D({ [A2]: t2 });
  switch (e2) {
    case null:
      return D({ top: t2, left: t2, right: t2, bottom: t2 });
    case "y":
      return D({ top: t2, bottom: t2 });
    case "x":
      return D({ left: t2, right: t2 });
  }
}
function Lr(A2, e2, t2) {
  var r2;
  e2 = e2.replace(/^-/, "");
  let n2 = e2 === "" ? "DEFAULT" : e2, i2 = Number((r2 = t2 == null ? void 0 : t2[n2]) !== null && r2 !== void 0 ? r2 : e2);
  return Number.isNaN(i2) ? null : D({ [`flex${A2}`]: i2 });
}
function MI(A2, e2) {
  var t2, r2;
  if (A2 = (e2 == null ? void 0 : e2[A2]) || A2, ["min-content", "revert", "unset"].includes(A2)) return null;
  if (A2.match(/^\d+(\.\d+)?$/)) return D({ flexGrow: Number(A2), flexBasis: "0%" });
  let n2 = A2.match(/^(\d+)\s+(\d+)$/);
  if (n2) return D({ flexGrow: Number(n2[1]), flexShrink: Number(n2[2]) });
  if (n2 = A2.match(/^(\d+)\s+([^ ]+)$/), n2) {
    let i2 = Ne((t2 = n2[2]) !== null && t2 !== void 0 ? t2 : "");
    return i2 ? D({ flexGrow: Number(n2[1]), flexBasis: i2 }) : null;
  }
  if (n2 = A2.match(/^(\d+)\s+(\d+)\s+(.+)$/), n2) {
    let i2 = Ne((r2 = n2[3]) !== null && r2 !== void 0 ? r2 : "");
    return i2 ? D({ flexGrow: Number(n2[1]), flexShrink: Number(n2[2]), flexBasis: i2 }) : null;
  }
  return null;
}
function Bs(A2, e2, t2 = {}, r2) {
  let n2 = r2 == null ? void 0 : r2[e2];
  return n2 !== void 0 ? We(A2, n2, t2) : Qe(A2, e2, t2);
}
function Gr(A2, e2, t2 = {}, r2) {
  let n2 = Ne(r2 == null ? void 0 : r2[e2], t2);
  return n2 ? D({ [A2]: n2 }) : (e2 === "screen" && (e2 = A2.includes("Width") ? "100vw" : "100vh"), Qe(A2, e2, t2));
}
function LI(A2, e2, t2) {
  let r2 = t2 == null ? void 0 : t2[A2];
  if (r2) {
    let n2 = TA(r2, { });
    if (!n2) return null;
    let [i2, o2] = n2;
    if (o2 === sA.em) return ep(i2);
    if (o2 === sA.percent) return re("percentage-based letter-spacing configuration currently unsupported, switch to `em`s, or open an issue if you'd like to see support added."), null;
    let s2 = et3(i2, o2, { isNegative: e2 });
    return s2 !== null ? D({ letterSpacing: s2 }) : null;
  }
  return Qe("letterSpacing", A2, { isNegative: e2 });
}
function ep(A2) {
  return { kind: "dependent", complete(e2) {
    let t2 = e2.fontSize;
    if (typeof t2 != "number" || Number.isNaN(t2)) return "tracking-X relative letter spacing classes require font-size to be set";
    e2.letterSpacing = Math.round((A2 * t2 + Number.EPSILON) * 100) / 100;
  } };
}
function GI(A2, e2) {
  let t2 = e2 == null ? void 0 : e2[A2];
  if (t2) {
    let n2 = TA(String(t2));
    if (n2) return D({ opacity: n2[0] });
  }
  let r2 = TA(A2);
  return r2 ? D({ opacity: r2[0] / 100 }) : null;
}
function UI(A2) {
  let e2 = parseInt(A2, 10);
  return Number.isNaN(e2) ? null : { kind: "complete", style: { shadowOpacity: e2 / 100 } };
}
function HI(A2) {
  if (A2.includes("/")) {
    let [t2 = "", r2 = ""] = A2.split("/", 2), n2 = Es(t2), i2 = Es(r2);
    return n2 === null || i2 === null ? null : { kind: "complete", style: { shadowOffset: { width: n2, height: i2 } } };
  }
  let e2 = Es(A2);
  return e2 === null ? null : { kind: "complete", style: { shadowOffset: { width: e2, height: e2 } } };
}
function Es(A2) {
  let e2 = Et(A2);
  return typeof e2 == "number" ? e2 : null;
}
var Ut = class {
  constructor(e2, t2 = {}, r2, n2, i2) {
    var o2, s2, a2, g3, u4, I2;
    this.config = t2, this.cache = r2, this.position = 0, this.isNull = false, this.isNegative = false, this.context = {}, this.context.device = n2;
    let B2 = e2.trim().split(":"), f3 = [];
    B2.length === 1 ? this.string = e2 : (this.string = (o2 = B2.pop()) !== null && o2 !== void 0 ? o2 : "", f3 = B2), this.char = this.string[0];
    let E2 = cs((s2 = this.config.theme) === null || s2 === void 0 ? void 0 : s2.screens);
    for (let C2 of f3) if (E2[C2]) {
      let p2 = (a2 = E2[C2]) === null || a2 === void 0 ? void 0 : a2[2];
      p2 !== void 0 && (this.order = ((g3 = this.order) !== null && g3 !== void 0 ? g3 : 0) + p2);
      let h3 = (u4 = n2.windowDimensions) === null || u4 === void 0 ? void 0 : u4.width;
      if (h3) {
        let [k2, b2] = (I2 = E2[C2]) !== null && I2 !== void 0 ? I2 : [0, 0];
        (h3 <= k2 || h3 > b2) && (this.isNull = true);
      } else this.isNull = true;
    } else pI(C2) ? this.isNull = C2 !== i2 : hI(C2) ? n2.windowDimensions ? (n2.windowDimensions.width > n2.windowDimensions.height ? "landscape" : "portrait") !== C2 ? this.isNull = true : this.incrementOrder() : this.isNull = true : C2 === "retina" ? n2.pixelDensity === 2 ? this.incrementOrder() : this.isNull = true : C2 === "dark" ? n2.colorScheme !== "dark" ? this.isNull = true : this.incrementOrder() : this.handlePossibleArbitraryBreakpointPrefix(C2) || (this.isNull = true);
  }
  parse() {
    if (this.isNull) return { kind: "null" };
    let e2 = this.cache.getIr(this.rest);
    if (e2) return e2;
    this.parseIsNegative();
    let t2 = this.parseUtility();
    return t2 ? this.order !== void 0 ? { kind: "ordered", order: this.order, styleIr: t2 } : t2 : { kind: "null" };
  }
  parseUtility() {
    var e2, t2, r2, n2, i2;
    let o2 = this.config.theme, s2 = null;
    switch (this.char) {
      case "m":
      case "p": {
        let a2 = this.peekSlice(1, 3).match(/^(t|b|r|l|x|y)?-/);
        if (a2) {
          let g3 = this.char === "m" ? "margin" : "padding";
          this.advance(((t2 = (e2 = a2[0]) === null || e2 === void 0 ? void 0 : e2.length) !== null && t2 !== void 0 ? t2 : 0) + 1);
          let u4 = ss(a2[1]), I2 = ls(g3, u4, this.isNegative, this.rest, (r2 = this.config.theme) === null || r2 === void 0 ? void 0 : r2[g3]);
          if (I2) return I2;
        }
      }
    }
    if (this.consumePeeked("h-") && (s2 = Bs("height", this.rest, this.context, o2 == null ? void 0 : o2.height), s2) || this.consumePeeked("w-") && (s2 = Bs("width", this.rest, this.context, o2 == null ? void 0 : o2.width), s2) || this.consumePeeked("min-w-") && (s2 = Gr("minWidth", this.rest, this.context, o2 == null ? void 0 : o2.minWidth), s2) || this.consumePeeked("min-h-") && (s2 = Gr("minHeight", this.rest, this.context, o2 == null ? void 0 : o2.minHeight), s2) || this.consumePeeked("max-w-") && (s2 = Gr("maxWidth", this.rest, this.context, o2 == null ? void 0 : o2.maxWidth), s2) || this.consumePeeked("max-h-") && (s2 = Gr("maxHeight", this.rest, this.context, o2 == null ? void 0 : o2.maxHeight), s2) || this.consumePeeked("leading-") && (s2 = Is(this.rest, o2 == null ? void 0 : o2.lineHeight), s2) || this.consumePeeked("text-") && (s2 = us(this.rest, o2 == null ? void 0 : o2.fontSize, this.context), s2 || (s2 = Qt("text", this.rest, o2 == null ? void 0 : o2.textColor), s2) || this.consumePeeked("opacity-") && (s2 = Mr("text", this.rest), s2)) || this.consumePeeked("font-") && (s2 = fs(this.rest, o2 == null ? void 0 : o2.fontFamily), s2) || this.consumePeeked("aspect-") && (this.consumePeeked("ratio-") && re("`aspect-ratio-{ratio}` is deprecated, use `aspect-{ratio}` instead"), s2 = We("aspectRatio", this.rest, { fractions: true }), s2) || this.consumePeeked("tint-") && (s2 = Qt("tint", this.rest, o2 == null ? void 0 : o2.colors), s2) || this.consumePeeked("bg-") && (s2 = Qt("bg", this.rest, o2 == null ? void 0 : o2.backgroundColor), s2 || this.consumePeeked("opacity-") && (s2 = Mr("bg", this.rest), s2)) || this.consumePeeked("border") && (s2 = vI(this.rest, o2), s2 || this.consumePeeked("-opacity-") && (s2 = Mr("border", this.rest), s2)) || this.consumePeeked("rounded") && (s2 = FI(this.rest, o2 == null ? void 0 : o2.borderRadius), s2) || this.consumePeeked("bottom-") && (s2 = Gt("bottom", this.rest, this.isNegative, o2 == null ? void 0 : o2.inset), s2) || this.consumePeeked("top-") && (s2 = Gt("top", this.rest, this.isNegative, o2 == null ? void 0 : o2.inset), s2) || this.consumePeeked("left-") && (s2 = Gt("left", this.rest, this.isNegative, o2 == null ? void 0 : o2.inset), s2) || this.consumePeeked("right-") && (s2 = Gt("right", this.rest, this.isNegative, o2 == null ? void 0 : o2.inset), s2) || this.consumePeeked("inset-") && (s2 = Gt("inset", this.rest, this.isNegative, o2 == null ? void 0 : o2.inset), s2) || this.consumePeeked("flex-") && (this.consumePeeked("grow") ? s2 = Lr("Grow", this.rest, o2 == null ? void 0 : o2.flexGrow) : this.consumePeeked("shrink") ? s2 = Lr("Shrink", this.rest, o2 == null ? void 0 : o2.flexShrink) : s2 = MI(this.rest, o2 == null ? void 0 : o2.flex), s2) || this.consumePeeked("grow") && (s2 = Lr("Grow", this.rest, o2 == null ? void 0 : o2.flexGrow), s2) || this.consumePeeked("shrink") && (s2 = Lr("Shrink", this.rest, o2 == null ? void 0 : o2.flexShrink), s2) || this.consumePeeked("shadow-color-opacity-") && (s2 = Mr("shadow", this.rest), s2) || this.consumePeeked("shadow-opacity-") && (s2 = UI(this.rest), s2) || this.consumePeeked("shadow-offset-") && (s2 = HI(this.rest), s2) || this.consumePeeked("shadow-radius-") && (s2 = Qe("shadowRadius", this.rest), s2) || this.consumePeeked("shadow-") && (s2 = Qt("shadow", this.rest, o2 == null ? void 0 : o2.colors), s2)) return s2;
    if (this.consumePeeked("elevation-")) {
      let a2 = parseInt(this.rest, 10);
      if (!Number.isNaN(a2)) return D({ elevation: a2 });
    }
    if (this.consumePeeked("opacity-") && (s2 = GI(this.rest, o2 == null ? void 0 : o2.opacity), s2) || this.consumePeeked("tracking-") && (s2 = LI(this.rest, this.isNegative, o2 == null ? void 0 : o2.letterSpacing), s2)) return s2;
    if (this.consumePeeked("z-")) {
      let a2 = Number((i2 = (n2 = o2 == null ? void 0 : o2.zIndex) === null || n2 === void 0 ? void 0 : n2[this.rest]) !== null && i2 !== void 0 ? i2 : this.rest);
      if (!Number.isNaN(a2)) return D({ zIndex: a2 });
    }
    return re(`\`${this.rest}\` unknown or invalid utility`), null;
  }
  handlePossibleArbitraryBreakpointPrefix(e2) {
    var t2;
    if (e2[0] !== "m") return false;
    let r2 = e2.match(/^(min|max)-(w|h)-\[([^\]]+)\]$/);
    if (!r2) return false;
    if (!(!((t2 = this.context.device) === null || t2 === void 0) && t2.windowDimensions)) return this.isNull = true, true;
    let n2 = this.context.device.windowDimensions, [, i2 = "", o2 = "", s2 = ""] = r2, a2 = o2 === "w" ? n2.width : n2.height, g3 = TA(s2, this.context);
    if (g3 === null) return this.isNull = true, true;
    let [u4, I2] = g3;
    return I2 !== "px" && (this.isNull = true), (i2 === "min" ? a2 >= u4 : a2 <= u4) ? this.incrementOrder() : this.isNull = true, true;
  }
  advance(e2 = 1) {
    this.position += e2, this.char = this.string[this.position];
  }
  get rest() {
    return this.peekSlice(0, this.string.length);
  }
  peekSlice(e2, t2) {
    return this.string.slice(this.position + e2, this.position + t2);
  }
  consumePeeked(e2) {
    return this.peekSlice(0, e2.length) === e2 ? (this.advance(e2.length), true) : false;
  }
  parseIsNegative() {
    this.char === "-" && (this.advance(), this.isNegative = true, this.context.isNegative = true);
  }
  incrementOrder() {
    var e2;
    this.order = ((e2 = this.order) !== null && e2 !== void 0 ? e2 : 0) + 1;
  }
};
function OI(A2) {
  let e2 = [], t2 = null;
  return A2.forEach((r2) => {
    if (typeof r2 == "string") e2 = [...e2, ...Qs(r2)];
    else if (Array.isArray(r2)) e2 = [...e2, ...r2.flatMap(Qs)];
    else if (typeof r2 == "object" && r2 !== null) for (let [n2, i2] of Object.entries(r2)) typeof i2 == "boolean" ? e2 = [...e2, ...i2 ? Qs(n2) : []] : t2 ? t2[n2] = i2 : t2 = { [n2]: i2 };
  }), [e2.filter(Boolean).filter(tp), t2];
}
function Qs(A2) {
  return A2.trim().split(/\s+/);
}
function tp(A2, e2, t2) {
  return t2.indexOf(A2) === e2;
}
function TI(A2) {
  var e2;
  return (e2 = A2 == null ? void 0 : A2.reduce((t2, r2) => ({ ...t2, ...rp(r2.handler) }), {})) !== null && e2 !== void 0 ? e2 : {};
}
function rp(A2) {
  let e2 = {};
  return A2({ addUtilities: (t2) => {
    e2 = t2;
  }, ...np }), e2;
}
function Me(A2) {
  throw new Error(`tailwindcss plugin function argument object prop "${A2}" not implemented`);
}
var np = { addComponents: Me, addBase: Me, addVariant: Me, e: Me, prefix: Me, theme: Me, variants: Me, config: Me, corePlugins: Me, matchUtilities: Me, postcss: null };
function _I(A2, e2) {
  let t2 = (0, PI.default)(ip(A2)), r2 = {}, n2 = TI(t2.plugins), i2 = {}, o2 = Object.entries(n2).map(([E2, C2]) => typeof C2 == "string" ? (i2[E2] = C2, [E2, { kind: "null" }]) : [E2, D(C2)]).filter(([, E2]) => E2.kind !== "null");
  function s2() {
    return [r2.windowDimensions ? `w${r2.windowDimensions.width}` : false, r2.windowDimensions ? `h${r2.windowDimensions.height}` : false, r2.fontScale ? `fs${r2.fontScale}` : false, r2.colorScheme === "dark" ? "dark" : false, r2.pixelDensity === 2 ? "retina" : false].filter(Boolean).join("--") || "default";
  }
  let a2 = s2(), g3 = {};
  function u4() {
    let E2 = g3[a2];
    if (E2) return E2;
    let C2 = new Nr(o2);
    return g3[a2] = C2, C2;
  }
  function I2(...E2) {
    let C2 = u4(), p2 = {}, h3 = [], k2 = [], [b2, x3] = OI(E2), w3 = b2.join(" "), y2 = C2.getStyle(w3);
    if (y2) return { ...y2, ...x3 || {} };
    for (let R2 of b2) {
      let F = C2.getIr(R2);
      if (!F && R2 in i2) {
        let K3 = I2(i2[R2]);
        C2.setIr(R2, D(K3)), p2 = { ...p2, ...K3 };
        continue;
      }
      switch (F = new Ut(R2, t2, C2, r2, e2).parse(), F.kind) {
        case "complete":
          p2 = { ...p2, ...F.style }, C2.setIr(R2, F);
          break;
        case "dependent":
          h3.push(F);
          break;
        case "ordered":
          k2.push(F);
          break;
        case "null":
          C2.setIr(R2, F);
          break;
      }
    }
    if (k2.length > 0) {
      k2.sort((R2, F) => R2.order - F.order);
      for (let R2 of k2) switch (R2.styleIr.kind) {
        case "complete":
          p2 = { ...p2, ...R2.styleIr.style };
          break;
        case "dependent":
          h3.push(R2.styleIr);
          break;
      }
    }
    if (h3.length > 0) {
      for (let R2 of h3) {
        let F = R2.complete(p2);
        F && re(F);
      }
      kI(p2);
    }
    return w3 !== "" && C2.setStyle(w3, p2), x3 && (p2 = { ...p2, ...x3 }), p2;
  }
  function B2(E2) {
    let C2 = I2(E2.split(/\s+/g).map((p2) => p2.replace(/^(bg|text|border)-/, "")).map((p2) => `bg-${p2}`).join(" "));
    return typeof C2.backgroundColor == "string" ? C2.backgroundColor : void 0;
  }
  let f3 = (E2, ...C2) => {
    let p2 = "";
    return E2.forEach((h3, k2) => {
      var b2;
      p2 += h3 + ((b2 = C2[k2]) !== null && b2 !== void 0 ? b2 : "");
    }), I2(p2);
  };
  return f3.style = I2, f3.color = B2, f3.prefixMatch = (...E2) => {
    let C2 = E2.sort().join(":"), p2 = u4(), h3 = p2.getPrefixMatch(C2);
    if (h3 !== void 0) return h3;
    let x3 = new Ut(`${C2}:flex`, t2, p2, r2, e2).parse().kind !== "null";
    return p2.setPrefixMatch(C2, x3), x3;
  }, f3.setWindowDimensions = (E2) => {
    r2.windowDimensions = E2, a2 = s2();
  }, f3.setFontScale = (E2) => {
    r2.fontScale = E2, a2 = s2();
  }, f3.setPixelDensity = (E2) => {
    r2.pixelDensity = E2, a2 = s2();
  }, f3.setColorScheme = (E2) => {
    r2.colorScheme = E2, a2 = s2();
  }, f3;
}
function ip(A2) {
  return { ...A2, content: ["_no_warnings_please"] };
}
var sp = { handler: ({ addUtilities: A2 }) => {
  A2({ "shadow-sm": { boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" }, shadow: { boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" }, "shadow-md": { boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" }, "shadow-lg": { boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }, "shadow-xl": { boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }, "shadow-2xl": { boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }, "shadow-inner": { boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" }, "shadow-none": { boxShadow: "0 0 #0000" } });
} };
function ap(A2) {
  return _I({ ...A2, plugins: [...(A2 == null ? void 0 : A2.plugins) ?? [], sp] }, "web");
}
var Tn;
function Cs({ width: A2, height: e2, config: t2 }) {
  return Tn || (Tn = ap(t2)), Tn.setWindowDimensions({ width: +A2, height: +e2 }), Tn;
}
var ds = /* @__PURE__ */ new WeakMap();
var JI = /* @__PURE__ */ new WeakMap();
var gp = 0;
var up = 8;
var Ur = /* @__PURE__ */ new Map();
function Ip(A2) {
  let e2 = "";
  for (let t2 of A2) {
    let r2 = JI.get(t2.data);
    r2 === void 0 && (r2 = ++gp, JI.set(t2.data, r2)), e2 += `${r2}:${t2.name}:${t2.weight ?? ""}:${t2.style ?? ""}:${t2.lang ?? ""};`;
  }
  return e2;
}
function lp(A2) {
  if (ds.has(A2)) return ds.get(A2);
  let e2 = Ip(A2), t2 = Ur.get(e2);
  if (!t2) {
    if (t2 = new er(A2), Ur.size >= up) {
      let r2 = Ur.keys().next().value;
      r2 !== void 0 && Ur.delete(r2);
    }
    Ur.set(e2, t2);
  }
  return ds.set(A2, t2), t2;
}
async function WI(A2, e2) {
  let [t2] = await Promise.all([Xe(), ig()]);
  if (!t2 || !t2.Node) throw new Error("Satori is not initialized: expect `yoga` to be loaded, got " + t2);
  e2.fonts = e2.fonts || [];
  let r2 = lp(e2.fonts), n2 = "width" in e2 ? e2.width : void 0, i2 = "height" in e2 ? e2.height : void 0, o2 = cp(t2, e2.pointScaleFactor);
  n2 && o2.setWidth(n2), i2 && o2.setHeight(i2), o2.setFlexDirection(t2.FLEX_DIRECTION_ROW), o2.setFlexWrap(t2.WRAP_WRAP), o2.setAlignContent(t2.ALIGN_AUTO), o2.setAlignItems(t2.ALIGN_FLEX_START), o2.setJustifyContent(t2.JUSTIFY_FLEX_START), o2.setOverflow(t2.OVERFLOW_HIDDEN);
  let s2 = Object.assign(/* @__PURE__ */ Object.create(null), e2.graphemeImages), a2 = /* @__PURE__ */ new Set();
  Re.clear(), Yt.clear(), await ca(A2);
  let g3 = Ar(A2, { id: "id", parentStyle: {}, inheritedStyle: { fontSize: 16, fontWeight: "normal", fontFamily: "serif", fontStyle: "normal", lineHeight: "normal", color: "black", opacity: 1, whiteSpace: "normal", _viewportWidth: n2, _viewportHeight: i2 }, parent: o2, font: r2, embedFont: e2.embedFont, debug: e2.debug, graphemeImages: s2, canLoadAdditionalAssets: !!e2.loadAdditionalAsset, onNodeDetected: e2.onNodeDetected, getTwStyles: (E2, C2) => {
    let h3 = { ...Cs({ width: n2, height: i2, config: e2.tailwindConfig })([E2]) };
    return typeof h3.lineHeight == "number" && (h3.lineHeight = h3.lineHeight / (+h3.fontSize || C2.fontSize || 16)), h3.shadowColor && h3.boxShadow && (h3.boxShadow = h3.boxShadow.replace(/rgba?\([^)]+\)/, h3.shadowColor)), h3;
  } }), u4 = (await g3.next()).value;
  if (e2.loadAdditionalAsset && u4.length) {
    let E2 = fp(u4), C2 = [], p2 = {};
    await Promise.all(Object.entries(E2).flatMap(([h3, k2]) => k2.map((b2) => {
      let x3 = `${h3}_${b2}`;
      return a2.has(x3) ? null : (a2.add(x3), e2.loadAdditionalAsset(h3, b2).then((w3) => {
        typeof w3 == "string" ? p2[b2] = w3 : w3 && (Array.isArray(w3) ? C2.push(...w3) : C2.push(w3));
      }));
    }))), r2.addFonts(C2), Object.assign(s2, p2);
  }
  await g3.next(), o2.calculateLayout(n2, i2, t2.DIRECTION_LTR);
  let I2 = (await g3.next([0, 0])).value, B2 = o2.getComputedWidth(), f3 = o2.getComputedHeight();
  return o2.freeRecursive(), Ri({ width: B2, height: f3, content: I2 });
}
function cp(A2, e2) {
  if (e2) {
    let t2 = A2.Config.create();
    return t2.setPointScaleFactor(e2), A2.Node.createWithConfig(t2);
  } else return A2.Node.create();
}
function fp(A2) {
  let e2 = {}, t2 = {};
  for (let { word: r2, locale: n2 } of A2) {
    let i2 = rg(r2, n2).join("|");
    t2[i2] = t2[i2] || "", t2[i2] += r2;
  }
  return Object.keys(t2).forEach((r2) => {
    e2[r2] = e2[r2] || [], r2 === "emoji" ? e2[r2].push(...KI(OA(t2[r2], "grapheme"))) : (e2[r2][0] = e2[r2][0] || "", e2[r2][0] += KI(OA(t2[r2], "grapheme", r2 === "unknown" ? void 0 : r2)).join(""));
  }), e2;
}
function KI(A2) {
  return Array.from(new Set(A2));
}

// src/emitter.tsx
var import_reading_time = __toESM(require_reading_time2(), 1);

// node_modules/@quartz-community/types/dist/index.js
function joinSegments(...segments) {
  return segments.filter((segment) => segment.length > 0).join("/").replace(/\/+/g, "/");
}
var l2;
function S2(n2) {
  return n2.children;
}
l2 = { __e: function(n2, l3, u4, t2) {
  for (var i2, r2, o2; l3 = l3.__; ) if ((i2 = l3.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u3(e2, t2, n2, o2, i2, u4) {
  t2 || (t2 = {});
  var a2, c3, p2 = t2;
  if ("ref" in p2) for (c3 in p2 = {}, t2) "ref" == c3 ? a2 = t2[c3] : p2[c3] = t2[c3];
  var l3 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u4 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c3 in a2) void 0 === p2[c3] && (p2[c3] = a2[c3]);
  return l2.vnode && l2.vnode(l3), l3;
}

// node_modules/@quartz-community/utils/dist/index.js
function unescapeHTML(html) {
  return html.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'");
}

// node_modules/@quartz-community/utils/dist/sort.js
function getDate(data) {
  const defaultDateType = data.defaultDateType;
  if (!defaultDateType) {
    return void 0;
  }
  const dates = data.dates;
  return dates?.[defaultDateType];
}

// node_modules/@quartz-community/utils/dist/emoji.js
var U200D2 = String.fromCharCode(8205);
var UFE0Fg = /\uFE0F/g;
function getIconCode(char) {
  return toCodePoint(char.indexOf(U200D2) < 0 ? char.replace(UFE0Fg, "") : char);
}
function toCodePoint(unicodeSurrogates) {
  const r2 = [];
  let c3 = 0, p2 = 0, i2 = 0;
  while (i2 < unicodeSurrogates.length) {
    c3 = unicodeSurrogates.charCodeAt(i2++);
    if (p2) {
      r2.push((65536 + (p2 - 55296 << 10) + (c3 - 56320)).toString(16));
      p2 = 0;
    } else if (55296 <= c3 && c3 <= 56319) {
      p2 = c3;
    } else {
      r2.push(c3.toString(16));
    }
  }
  return r2.join("-");
}

// src/theme.ts
function getFontSpecificationName(spec) {
  if (typeof spec === "string") {
    return spec;
  }
  return spec.name;
}

// src/emoji.ts
var emojimap = void 0;
async function loadEmoji(code) {
  if (!emojimap) {
    const path2 = await import('path');
    const fs3 = await import('fs/promises');
    const mapPath = path2.join("quartz", "util", "emojimap.json");
    const data = JSON.parse(await fs3.readFile(mapPath, "utf-8"));
    emojimap = data;
  }
  const name = emojimap.codePointToName[`${code.toUpperCase()}`];
  if (!name) throw new Error(`codepoint ${code} not found in map`);
  const b64 = emojimap.nameToBase64[name];
  if (!b64) throw new Error(`name ${name} not found in map`);
  return b64;
}

// src/emitter.tsx
var QUARTZ = "quartz";
var defaultHeaderWeight = [700];
var defaultBodyWeight = [400];
var write = async (args) => {
  const pathToPage = joinSegments(args.ctx.argv.output, args.slug + args.ext);
  const dir = path.dirname(pathToPage);
  await fs2.mkdir(dir, { recursive: true });
  await fs2.writeFile(pathToPage, args.content);
  return pathToPage;
};
function getFileExtension(path2) {
  return path2.match(/\.([^./?#]+)(?:[?#]|$)/)?.[1];
}
function isAbsoluteURL(url) {
  return /^https?:\/\//.test(url);
}
function formatDate(d3, locale = "en-US") {
  return d3.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}
async function getSatoriFonts(headerFont, bodyFont, fontshare = []) {
  const headerWeights = typeof headerFont === "string" ? defaultHeaderWeight : headerFont.weights ?? defaultHeaderWeight;
  const bodyWeights = typeof bodyFont === "string" ? defaultBodyWeight : bodyFont.weights ?? defaultBodyWeight;
  const headerFontName = typeof headerFont === "string" ? headerFont : headerFont.name;
  const bodyFontName = typeof bodyFont === "string" ? bodyFont : bodyFont.name;
  const fromFontshare = (name) => fontshare.includes(name);
  const headerFontPromises = headerWeights.map(async (weight) => {
    const data = await fetchTtf(headerFontName, weight, fromFontshare(headerFontName));
    if (!data) return null;
    return {
      name: headerFontName,
      data,
      weight,
      style: "normal"
    };
  });
  const bodyFontPromises = bodyWeights.map(async (weight) => {
    const data = await fetchTtf(bodyFontName, weight, fromFontshare(bodyFontName));
    if (!data) return null;
    return {
      name: bodyFontName,
      data,
      weight,
      style: "normal"
    };
  });
  const [headerFonts, bodyFonts] = await Promise.all([
    Promise.all(headerFontPromises),
    Promise.all(bodyFontPromises)
  ]);
  const fonts = [
    ...headerFonts.filter((font) => font !== null),
    ...bodyFonts.filter((font) => font !== null)
  ];
  if (fonts.length > 0) {
    return fonts;
  }
  console.log(
    styleText(
      "yellow",
      `
Warning: Could not fetch any Google Fonts. Attempting to use a system font as fallback for OG image generation.`
    )
  );
  const [regularFont, boldFont] = await Promise.all([loadSystemFont(false), loadSystemFont(true)]);
  const systemFonts = [];
  if (regularFont) {
    systemFonts.push({
      name: headerFontName,
      data: regularFont.data,
      weight: 400,
      style: "normal"
    });
    systemFonts.push({
      name: bodyFontName,
      data: regularFont.data,
      weight: 400,
      style: "normal"
    });
  }
  if (boldFont) {
    systemFonts.push({
      name: headerFontName,
      data: boldFont.data,
      weight: 700,
      style: "normal"
    });
  }
  if (systemFonts.length > 0) {
    const fontName = regularFont?.name ?? boldFont?.name;
    console.log(
      styleText(
        "yellow",
        `Warning: Using system font "${fontName}" as fallback. OG images may look different than intended.`
      )
    );
  }
  return systemFonts;
}
async function fetchTtf(rawFontName, weight, fromFontshare = false) {
  const fontName = rawFontName.replaceAll(" ", "+");
  const cacheKey = `${fontName}-${weight}`;
  const cacheDir = path.join(QUARTZ, ".quartz-cache", "fonts");
  const cachePath = path.join(cacheDir, cacheKey);
  try {
    await fs2.access(cachePath);
    return fs2.readFile(cachePath);
  } catch {
  }
  if (fromFontshare) {
    return fetchFontshareTtf(rawFontName, weight, cacheDir, cachePath);
  }
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${fontName}:wght@${weight}`;
    const cssResponse = await fetch(cssUrl);
    if (!cssResponse.ok) {
      console.log(
        styleText(
          "yellow",
          `
Warning: Google Fonts returned HTTP ${cssResponse.status} for ${rawFontName} (weight ${weight})`
        )
      );
      return;
    }
    const css = await cssResponse.text();
    const urlRegex = /url\((https:\/\/fonts.gstatic.com\/s\/.*?.ttf)\)/g;
    const match = urlRegex.exec(css);
    if (!match) {
      console.log(
        styleText(
          "yellow",
          `
Warning: Could not extract font URL for ${rawFontName} (weight ${weight}) from Google Fonts CSS`
        )
      );
      return;
    }
    const fontUrl = match[1];
    if (!fontUrl) {
      return;
    }
    const fontResponse = await fetch(fontUrl);
    if (!fontResponse.ok) {
      console.log(
        styleText(
          "yellow",
          `
Warning: Failed to download font file for ${rawFontName} (weight ${weight}): HTTP ${fontResponse.status}`
        )
      );
      return;
    }
    const fontData = Buffer.from(await fontResponse.arrayBuffer());
    await fs2.mkdir(cacheDir, { recursive: true });
    await fs2.writeFile(cachePath, fontData);
    return fontData;
  } catch (err3) {
    const message = err3 instanceof Error ? err3.message : String(err3);
    console.log(
      styleText(
        "yellow",
        `
Warning: Failed to fetch font "${rawFontName}" (weight ${weight}) from Google Fonts: ${message}`
      )
    );
    return;
  }
}
async function fetchFontshareTtf(rawFontName, weight, cacheDir, cachePath) {
  const slug2 = rawFontName.toLowerCase().replaceAll(" ", "-");
  try {
    const cssResponse = await fetch(`https://api.fontshare.com/v2/css?f[]=${slug2}@${weight}`);
    if (!cssResponse.ok) {
      console.log(
        styleText(
          "yellow",
          `
Warning: Fontshare returned HTTP ${cssResponse.status} for ${rawFontName} (weight ${weight})`
        )
      );
      return;
    }
    const css = await cssResponse.text();
    const match = /url\('(\/\/cdn\.fontshare\.com\/[^']+?\.ttf)'\)\s*format\('truetype'\)/.exec(css);
    if (!match?.[1]) {
      console.log(
        styleText(
          "yellow",
          `
Warning: Could not extract a .ttf URL for ${rawFontName} (weight ${weight}) from Fontshare CSS`
        )
      );
      return;
    }
    const fontResponse = await fetch(`https:${match[1]}`);
    if (!fontResponse.ok) {
      console.log(
        styleText(
          "yellow",
          `
Warning: Failed to download font file for ${rawFontName} (weight ${weight}) from Fontshare: HTTP ${fontResponse.status}`
        )
      );
      return;
    }
    const fontData = Buffer.from(await fontResponse.arrayBuffer());
    await fs2.mkdir(cacheDir, { recursive: true });
    await fs2.writeFile(cachePath, fontData);
    return fontData;
  } catch (err3) {
    const message = err3 instanceof Error ? err3.message : String(err3);
    console.log(
      styleText(
        "yellow",
        `
Warning: Failed to fetch font "${rawFontName}" (weight ${weight}) from Fontshare: ${message}`
      )
    );
    return;
  }
}
var SYSTEM_FONT_CANDIDATES = {
  darwin: [
    // San Francisco (macOS 10.15+)
    "/System/Library/Fonts/SFNS.ttf",
    // Helvetica Neue
    "/System/Library/Fonts/HelveticaNeue.ttc",
    // Helvetica
    "/System/Library/Fonts/Helvetica.ttc",
    // Arial
    "/Library/Fonts/Arial.ttf",
    // Fallback: guaranteed present on every macOS
    "/System/Library/Fonts/Supplemental/Arial.ttf"
  ],
  linux: [
    // DejaVu Sans — ubiquitous on most distros
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    // Liberation Sans (Red Hat / Fedora)
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    "/usr/share/fonts/liberation-sans/LiberationSans-Regular.ttf",
    // Noto Sans
    "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf",
    "/usr/share/fonts/noto/NotoSans-Regular.ttf",
    // FreeSans
    "/usr/share/fonts/truetype/freefont/FreeSans.ttf"
  ],
  win32: [
    "C:\\Windows\\Fonts\\arial.ttf",
    "C:\\Windows\\Fonts\\segoeui.ttf",
    "C:\\Windows\\Fonts\\calibri.ttf",
    "C:\\Windows\\Fonts\\verdana.ttf"
  ]
};
var SYSTEM_FONT_CANDIDATES_BOLD = {
  darwin: [
    "/System/Library/Fonts/SFNS.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
  ],
  linux: [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "/usr/share/fonts/liberation-sans/LiberationSans-Bold.ttf",
    "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf",
    "/usr/share/fonts/noto/NotoSans-Bold.ttf",
    "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf"
  ],
  win32: [
    "C:\\Windows\\Fonts\\arialbd.ttf",
    "C:\\Windows\\Fonts\\segoeuib.ttf",
    "C:\\Windows\\Fonts\\calibrib.ttf",
    "C:\\Windows\\Fonts\\verdanab.ttf"
  ]
};
async function loadSystemFont(bold) {
  const candidates = bold ? SYSTEM_FONT_CANDIDATES_BOLD[process.platform] ?? [] : SYSTEM_FONT_CANDIDATES[process.platform] ?? [];
  for (const fontPath of candidates) {
    try {
      const data = await fs2.readFile(fontPath);
      const name = path.basename(fontPath, path.extname(fontPath));
      return { data, name };
    } catch {
    }
  }
  return void 0;
}
var defaultImage = ({
  cfg,
  userOpts,
  title,
  description,
  fileData,
  iconBase64
}) => {
  const { colorScheme } = userOpts;
  const theme = cfg.theme;
  const fontBreakPoint = 32;
  const useSmallerFont = title.length > fontBreakPoint;
  const rawDate = getDate(fileData);
  const date = rawDate ? formatDate(rawDate, cfg.locale) : null;
  const { minutes } = (0, import_reading_time.default)(fileData.text ?? "");
  const readingTimeText = (userOpts.readingTimeText ?? ((time) => `${time} min read`))(
    Math.ceil(minutes)
  );
  const tags = fileData.frontmatter?.tags ?? [];
  const bodyFont = getFontSpecificationName(theme.typography.body);
  const headerFont = getFontSpecificationName(theme.typography.header);
  return /* @__PURE__ */ u3(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: theme.colors[colorScheme].light,
        padding: "2.5rem",
        fontFamily: bodyFont
      },
      children: [
        /* @__PURE__ */ u3(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "0.5rem"
            },
            children: [
              iconBase64 && /* @__PURE__ */ u3(
                "img",
                {
                  src: iconBase64,
                  alt: "",
                  width: 56,
                  height: 56,
                  style: {
                    borderRadius: "50%"
                  }
                }
              ),
              /* @__PURE__ */ u3(
                "div",
                {
                  style: {
                    display: "flex",
                    fontSize: 32,
                    color: theme.colors[colorScheme].gray,
                    fontFamily: bodyFont
                  },
                  children: cfg.baseUrl
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u3(
          "div",
          {
            style: {
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1.5rem"
            },
            children: /* @__PURE__ */ u3(
              "h1",
              {
                style: {
                  margin: 0,
                  fontSize: useSmallerFont ? 64 : 72,
                  fontFamily: headerFont,
                  fontWeight: 700,
                  color: theme.colors[colorScheme].dark,
                  lineHeight: 1.2,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: title
              }
            )
          }
        ),
        /* @__PURE__ */ u3(
          "div",
          {
            style: {
              display: "flex",
              flex: 1,
              fontSize: 36,
              color: theme.colors[colorScheme].darkgray,
              lineHeight: 1.4
            },
            children: /* @__PURE__ */ u3(
              "p",
              {
                style: {
                  margin: 0,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: description
              }
            )
          }
        ),
        /* @__PURE__ */ u3(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${theme.colors[colorScheme].lightgray}`
            },
            children: [
              /* @__PURE__ */ u3(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    color: theme.colors[colorScheme].gray,
                    fontSize: 28
                  },
                  children: [
                    date && /* @__PURE__ */ u3("div", { style: { display: "flex", alignItems: "center" }, children: [
                      /* @__PURE__ */ u3(
                        "svg",
                        {
                          style: { marginRight: "0.5rem" },
                          width: "28",
                          height: "28",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          role: "img",
                          "aria-label": "Date",
                          children: [
                            /* @__PURE__ */ u3("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                            /* @__PURE__ */ u3("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                            /* @__PURE__ */ u3("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                            /* @__PURE__ */ u3("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                          ]
                        }
                      ),
                      date
                    ] }),
                    /* @__PURE__ */ u3("div", { style: { display: "flex", alignItems: "center" }, children: [
                      /* @__PURE__ */ u3(
                        "svg",
                        {
                          style: { marginRight: "0.5rem" },
                          width: "28",
                          height: "28",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          role: "img",
                          "aria-label": "Reading time",
                          children: [
                            /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "10" }),
                            /* @__PURE__ */ u3("polyline", { points: "12 6 12 12 16 14" })
                          ]
                        }
                      ),
                      readingTimeText
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ u3(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    maxWidth: "60%"
                  },
                  children: tags.slice(0, 3).map((tag) => /* @__PURE__ */ u3(
                    "div",
                    {
                      style: {
                        display: "flex",
                        padding: "0.5rem 1rem",
                        backgroundColor: theme.colors[colorScheme].highlight,
                        color: theme.colors[colorScheme].secondary,
                        borderRadius: "10px",
                        fontSize: 24
                      },
                      children: [
                        "#",
                        tag
                      ]
                    }
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var defaultOptions = {
  colorScheme: "lightMode",
  width: 1200,
  height: 630,
  imageStructure: defaultImage,
  excludeRoot: false,
  defaultTitle: "Untitled",
  defaultDescription: "No description provided",
  readingTimeText: (minutes) => `${minutes} min read`
};
async function generateSocialImage({ cfg, description, fonts, title, fileData }, userOpts) {
  const { width, height } = userOpts;
  const iconPath = joinSegments(QUARTZ, "static", "icon.png");
  let iconBase64 = void 0;
  try {
    const iconData = await fs2.readFile(iconPath);
    iconBase64 = `data:image/png;base64,${iconData.toString("base64")}`;
  } catch {
    console.warn(styleText("yellow", `Warning: Could not find icon at ${iconPath}`));
  }
  const imageComponent = userOpts.imageStructure({
    cfg,
    userOpts,
    title,
    description,
    fonts,
    fileData,
    iconBase64
  });
  const svg = await WI(imageComponent, {
    width,
    height,
    fonts,
    loadAdditionalAsset: async (languageCode, segment) => {
      if (languageCode === "emoji") {
        return await loadEmoji(getIconCode(segment));
      }
      return languageCode;
    }
  });
  return sharp(Buffer.from(svg)).webp({ quality: 40 });
}
async function processOgImage(ctx, fileData, fonts, fullOptions) {
  const cfg = ctx.cfg.configuration;
  const slug2 = fileData.slug;
  const titleSuffix = cfg.pageTitleSuffix ?? "";
  const frontmatter = fileData.frontmatter;
  const title = (frontmatter?.title ?? fullOptions.defaultTitle ?? "") + titleSuffix;
  const description = frontmatter?.socialDescription ?? frontmatter?.description ?? unescapeHTML(fileData.description?.trim() ?? fullOptions.defaultDescription ?? "");
  const stream = await generateSocialImage(
    {
      title,
      description,
      fonts,
      cfg,
      fileData
    },
    fullOptions
  );
  return write({
    ctx,
    content: stream,
    slug: `${slug2}-og-image`,
    ext: ".webp"
  });
}
var CustomOgImagesEmitterName = "CustomOgImages";
var CustomOgImages = (userOpts) => {
  const fullOptions = { ...defaultOptions, ...userOpts };
  return {
    name: CustomOgImagesEmitterName,
    getQuartzComponents() {
      return [];
    },
    async *emit(ctx, content, _resources) {
      const cfg = ctx.cfg.configuration;
      const theme = cfg.theme;
      const headerFont = theme.typography.header;
      const bodyFont = theme.typography.body;
      const fonts = await getSatoriFonts(headerFont, bodyFont, fullOptions.fontshare);
      if (fonts.length === 0) {
        console.log(
          styleText(
            "yellow",
            `
Warning: Skipping OG image generation \u2014 no fonts available (Google Fonts unreachable and no system fonts found). To suppress this warning, disable the plugin in your config:
  - source: "@quartz-community/og-image"
    enabled: false`
          )
        );
        return;
      }
      for (const [_tree, vfile] of content) {
        const data = vfile.data;
        if (data.frontmatter?.socialImage !== void 0) continue;
        yield processOgImage(ctx, data, fonts, fullOptions);
      }
    },
    async *partialEmit(ctx, _content, _resources, changeEvents) {
      const cfg = ctx.cfg.configuration;
      const theme = cfg.theme;
      const headerFont = theme.typography.header;
      const bodyFont = theme.typography.body;
      const fonts = await getSatoriFonts(headerFont, bodyFont, fullOptions.fontshare);
      if (fonts.length === 0) {
        return;
      }
      for (const changeEvent of changeEvents) {
        if (!changeEvent.file) continue;
        const data = changeEvent.file.data;
        if (data.frontmatter?.socialImage !== void 0) continue;
        if (changeEvent.type === "add" || changeEvent.type === "change") {
          yield processOgImage(ctx, data, fonts, fullOptions);
        }
      }
    },
    externalResources: (ctx) => {
      if (!ctx.cfg.configuration.baseUrl) {
        return {};
      }
      const baseUrl = ctx.cfg.configuration.baseUrl;
      return {
        additionalHead: [
          (pageData) => {
            const isRealFile = pageData.filePath !== void 0;
            let userDefinedOgImagePath = pageData.frontmatter?.socialImage;
            if (userDefinedOgImagePath) {
              userDefinedOgImagePath = isAbsoluteURL(userDefinedOgImagePath) ? userDefinedOgImagePath : `https://${baseUrl}/static/${userDefinedOgImagePath}`;
            }
            const generatedOgImagePath = isRealFile ? `https://${baseUrl}/${pageData.slug}-og-image.webp` : void 0;
            const defaultOgImagePath = `https://${baseUrl}/static/og-image.png`;
            const ogImagePath = userDefinedOgImagePath ?? generatedOgImagePath ?? defaultOgImagePath;
            const ogImageMimeType = `image/${getFileExtension(ogImagePath) ?? "png"}`;
            return /* @__PURE__ */ u3(S2, { children: [
              !userDefinedOgImagePath && /* @__PURE__ */ u3(S2, { children: [
                /* @__PURE__ */ u3("meta", { property: "og:image:width", content: fullOptions.width.toString() }),
                /* @__PURE__ */ u3("meta", { property: "og:image:height", content: fullOptions.height.toString() })
              ] }),
              /* @__PURE__ */ u3("meta", { property: "og:image", content: ogImagePath }),
              /* @__PURE__ */ u3("meta", { property: "og:image:url", content: ogImagePath }),
              /* @__PURE__ */ u3("meta", { name: "twitter:image", content: ogImagePath }),
              /* @__PURE__ */ u3("meta", { property: "og:image:type", content: ogImageMimeType })
            ] });
          }
        ]
      };
    }
  };
};
/*! Bundled license information:

escape-html/index.js:
  (*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   *)

css-background-parser/index.js:
  (*!
   * https://github.com/gilmoreorless/css-background-parser
   * Copyright © 2015 Gilmore Davidson under the MIT license: http://gilmoreorless.mit-license.org/
   *)

reading-time/lib/reading-time.js:
reading-time/lib/stream.js:
  (*!
   * reading-time
   * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
   * MIT Licensed
   *)

parse-css-color/dist/index.esm.js:
  (**
   * parse-css-color
   * @version v0.2.1
   * @link http://github.com/noeldelgado/parse-css-color/
   * @license MIT
   *)
*/

export { CustomOgImages, CustomOgImagesEmitterName };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map