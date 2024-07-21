"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var meuMap = new Map();
meuMap.set("nome", "Alex");
console.log(meuMap);
var nome = meuMap.get("nome");
console.log(nome);
console.log(meuMap.size);

//set

var cpfs = new Set();
cpfs.add('00785716009');
cpfs.add('23974937056');
cpfs.add('31131279042');
console.log(cpfs);

// para nao duplicar itens

var array = ['Alex soares', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Alex Soares'];
var arrayComoSet = new Set([].concat(array));
var arraySemItensDuplicados = _toConsumableArray(arrayComoSet);
console.log(arrayComoSet);
console.log(arraySemItensDuplicados);