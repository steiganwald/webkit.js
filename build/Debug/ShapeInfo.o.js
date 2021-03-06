// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([46,0,0,0,0,0,0,0,85,110,115,97,102,101,32,97,116,116,101,109,112,116,32,116,111,32,108,111,97,100,32,85,82,76,32,0,0,0,0,0,39,39,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore9ShapeInfoINS_11RenderBlockEEE=(H_BASE+104)|0;
  var __ZTVN7WebCore9ShapeInfoINS_9RenderBoxEEE=(H_BASE+56)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = i1 + 16 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) != 0) {
  i28 = i27;
  STACKTOP = i2;
  return i28 | 0;
 }
 i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1) | 0;
 i29 = i1 + 12 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = (HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 20 >> 2] | 0) + 192 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 i33 = HEAP32[i31 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i32;
 HEAP32[i3 + 4 >> 2] = i33;
 if ((i32 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
  i34 = HEAP32[i29 >> 2] | 0;
 } else {
  i34 = i30;
 }
 i30 = (HEAP32[(HEAP32[i34 + 36 >> 2] | 0) + 20 >> 2] | 0) + 200 | 0;
 i33 = HEAP32[i30 >> 2] | 0;
 i32 = HEAP32[i30 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i33;
 HEAP32[i5 + 4 >> 2] = i32;
 if ((i33 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
  i35 = HEAP32[i29 >> 2] | 0;
 } else {
  i35 = i34;
 }
 d36 = +HEAPF32[(HEAP32[(HEAP32[i35 + 36 >> 2] | 0) + 20 >> 2] | 0) + 208 >> 2];
 i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 7](i1) | 0;
 i34 = HEAP32[i35 + 4 >> 2] | 0;
 do {
  if ((i34 | 0) == 3) {
   i32 = HEAP32[i35 + 12 >> 2] | 0;
   i33 = HEAP32[i3 >> 2] | 0;
   i30 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i33;
   HEAP32[i13 + 4 >> 2] = i30;
   if ((i33 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
   }
   i30 = HEAP32[i5 >> 2] | 0;
   i33 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = i30;
   HEAP32[i15 + 4 >> 2] = i33;
   if ((i30 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
   }
   __ZN7WebCore5Shape17createRasterShapeEPKNS_10StyleImageEfRKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_(i12, i32, d36, i1 + 20 | 0, i27, i14, i16);
   i32 = HEAP32[i26 >> 2] | 0;
   i33 = i12 | 0;
   i30 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i26 >> 2] = i30;
   do {
    if ((i32 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 15](i32);
     i30 = HEAP32[i33 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
    }
   } while (0);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   if ((HEAP8[i14 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
  } else if ((i34 | 0) == 0) {
   i33 = HEAP32[i35 + 8 >> 2] | 0;
   i32 = HEAP32[i3 >> 2] | 0;
   i30 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i32;
   HEAP32[i8 + 4 >> 2] = i30;
   if ((i32 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
   }
   i30 = HEAP32[i5 >> 2] | 0;
   i32 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i30;
   HEAP32[i10 + 4 >> 2] = i32;
   if ((i30 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   __ZN7WebCore5Shape11createShapeEPKNS_10BasicShapeERKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_(i7, i33, i1 + 20 | 0, i27, i9, i11);
   i33 = HEAP32[i26 >> 2] | 0;
   i32 = i7 | 0;
   i30 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   HEAP32[i26 >> 2] = i30;
   do {
    if ((i33 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 15](i33);
     i30 = HEAP32[i32 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
    }
   } while (0);
   if ((HEAP8[i11 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   }
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  } else if ((i34 | 0) == 1) {
   i32 = HEAP32[i29 >> 2] | 0;
   i33 = HEAP32[i32 + 36 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   i30 = i18 + 8 | 0;
   i31 = i1 + 20 | 0;
   i37 = HEAP32[i31 + 4 >> 2] | 0;
   HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
   HEAP32[i30 + 4 >> 2] = i37;
   __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i17, i33, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i32 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1, 1);
   i32 = HEAP32[i3 >> 2] | 0;
   i33 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = i32;
   HEAP32[i22 + 4 >> 2] = i33;
   if ((i32 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
   }
   i33 = HEAP32[i5 >> 2] | 0;
   i32 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i33;
   HEAP32[i24 + 4 >> 2] = i32;
   if ((i33 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
   }
   __ZN7WebCore5Shape20createLayoutBoxShapeERKNS_11RoundedRectENS_11WritingModeENS_6LengthES5_(i21, i17, i27, i23, i25);
   i32 = HEAP32[i26 >> 2] | 0;
   i33 = i21 | 0;
   i37 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i26 >> 2] = i37;
   do {
    if ((i32 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 15](i32);
     i37 = HEAP32[i33 >> 2] | 0;
     if ((i37 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 15](i37);
    }
   } while (0);
   if ((HEAP8[i25 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
   }
   if ((HEAP8[i23 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
  }
 } while (0);
 i23 = HEAP32[i26 >> 2] | 0;
 if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 if ((HEAP8[i4 + 5 | 0] | 0) != 10) {
  i28 = i23;
  STACKTOP = i2;
  return i28 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 i28 = i23;
 STACKTOP = i2;
 return i28 | 0;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE13computedShapeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = i1 + 16 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) != 0) {
  i28 = i27;
  STACKTOP = i2;
  return i28 | 0;
 }
 i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1) | 0;
 i29 = i1 + 12 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = (HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 20 >> 2] | 0) + 192 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 i33 = HEAP32[i31 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i32;
 HEAP32[i3 + 4 >> 2] = i33;
 if ((i32 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
  i34 = HEAP32[i29 >> 2] | 0;
 } else {
  i34 = i30;
 }
 i30 = (HEAP32[(HEAP32[i34 + 36 >> 2] | 0) + 20 >> 2] | 0) + 200 | 0;
 i33 = HEAP32[i30 >> 2] | 0;
 i32 = HEAP32[i30 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i33;
 HEAP32[i5 + 4 >> 2] = i32;
 if ((i33 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
  i35 = HEAP32[i29 >> 2] | 0;
 } else {
  i35 = i34;
 }
 d36 = +HEAPF32[(HEAP32[(HEAP32[i35 + 36 >> 2] | 0) + 20 >> 2] | 0) + 208 >> 2];
 i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 7](i1) | 0;
 i34 = HEAP32[i35 + 4 >> 2] | 0;
 do {
  if ((i34 | 0) == 3) {
   i32 = HEAP32[i35 + 12 >> 2] | 0;
   i33 = HEAP32[i3 >> 2] | 0;
   i30 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i33;
   HEAP32[i13 + 4 >> 2] = i30;
   if ((i33 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
   }
   i30 = HEAP32[i5 >> 2] | 0;
   i33 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = i30;
   HEAP32[i15 + 4 >> 2] = i33;
   if ((i30 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
   }
   __ZN7WebCore5Shape17createRasterShapeEPKNS_10StyleImageEfRKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_(i12, i32, d36, i1 + 20 | 0, i27, i14, i16);
   i32 = HEAP32[i26 >> 2] | 0;
   i33 = i12 | 0;
   i30 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i26 >> 2] = i30;
   do {
    if ((i32 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 15](i32);
     i30 = HEAP32[i33 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
    }
   } while (0);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   if ((HEAP8[i14 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
  } else if ((i34 | 0) == 0) {
   i33 = HEAP32[i35 + 8 >> 2] | 0;
   i32 = HEAP32[i3 >> 2] | 0;
   i30 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i32;
   HEAP32[i8 + 4 >> 2] = i30;
   if ((i32 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
   }
   i30 = HEAP32[i5 >> 2] | 0;
   i32 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i30;
   HEAP32[i10 + 4 >> 2] = i32;
   if ((i30 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   __ZN7WebCore5Shape11createShapeEPKNS_10BasicShapeERKNS_10LayoutSizeENS_11WritingModeENS_6LengthES8_(i7, i33, i1 + 20 | 0, i27, i9, i11);
   i33 = HEAP32[i26 >> 2] | 0;
   i32 = i7 | 0;
   i30 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   HEAP32[i26 >> 2] = i30;
   do {
    if ((i33 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 15](i33);
     i30 = HEAP32[i32 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
    }
   } while (0);
   if ((HEAP8[i11 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   }
   if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  } else if ((i34 | 0) == 1) {
   i32 = HEAP32[i29 >> 2] | 0;
   i33 = HEAP32[i32 + 36 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   i30 = i18 + 8 | 0;
   i31 = i1 + 20 | 0;
   i37 = HEAP32[i31 + 4 >> 2] | 0;
   HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
   HEAP32[i30 + 4 >> 2] = i37;
   __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i17, i33, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i32 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1, 1);
   i32 = HEAP32[i3 >> 2] | 0;
   i33 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = i32;
   HEAP32[i22 + 4 >> 2] = i33;
   if ((i32 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
   }
   i33 = HEAP32[i5 >> 2] | 0;
   i32 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i33;
   HEAP32[i24 + 4 >> 2] = i32;
   if ((i33 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
   }
   __ZN7WebCore5Shape20createLayoutBoxShapeERKNS_11RoundedRectENS_11WritingModeENS_6LengthES5_(i21, i17, i27, i23, i25);
   i32 = HEAP32[i26 >> 2] | 0;
   i33 = i21 | 0;
   i37 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i26 >> 2] = i37;
   do {
    if ((i32 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 15](i32);
     i37 = HEAP32[i33 >> 2] | 0;
     if ((i37 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 15](i37);
    }
   } while (0);
   if ((HEAP8[i25 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
   }
   if ((HEAP8[i23 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
  }
 } while (0);
 i23 = HEAP32[i26 >> 2] | 0;
 if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 if ((HEAP8[i4 + 5 | 0] | 0) != 10) {
  i28 = i23;
  STACKTOP = i2;
  return i28 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 i28 = i23;
 STACKTOP = i2;
 return i28 | 0;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEE12setShapeSizeENS_10LayoutUnitES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 7](i1) | 0;
 if ((i13 | 0) == 1) {
  i14 = i1 + 12 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 | 0;
  i17 = i15;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 784 >> 2] & 1](i11, i16, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 788 >> 2] & 1](i12, i16, 0);
  i16 = i3 | 0;
  i17 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
  HEAP32[i16 >> 2] = i17;
  i16 = HEAP32[i14 >> 2] | 0;
  i14 = i16 | 0;
  i11 = i16;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 792 >> 2] & 1](i9, i14, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 796 >> 2] & 1](i10, i14, 0);
  i14 = i2 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) | 0;
  HEAP32[i14 >> 2] = i11;
  i18 = i11;
  i19 = i17;
 } else if ((i13 | 0) == 3) {
  i17 = i1 + 12 | 0;
  i11 = HEAP32[i17 >> 2] | 0;
  i14 = i11 | 0;
  i9 = i11;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 752 >> 2] & 7](i14) | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 756 >> 2] & 7](i14) | 0;
  i14 = i3 | 0;
  i9 = (HEAP32[i14 >> 2] | 0) - (i10 + i11) | 0;
  HEAP32[i14 >> 2] = i9;
  i14 = HEAP32[i17 >> 2] | 0;
  i17 = i14 | 0;
  i11 = i14;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 760 >> 2] & 7](i17) | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 764 >> 2] & 7](i17) | 0;
  i17 = i2 | 0;
  i11 = (HEAP32[i17 >> 2] | 0) - (i10 + i14) | 0;
  HEAP32[i17 >> 2] = i11;
  i18 = i11;
  i19 = i9;
 } else if ((i13 | 0) == 4) {
  i13 = i1 + 12 | 0;
  i9 = HEAP32[i13 >> 2] | 0;
  i11 = i9 | 0;
  i17 = i9;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 7](i11) | 0;
  i10 = i9;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 1](i8, i11);
  i9 = HEAP32[i8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 756 >> 2] & 7](i11) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 1](i7, i11);
  i11 = i3 | 0;
  i10 = (HEAP32[i11 >> 2] | 0) - (i9 + i14 + i8 + (HEAP32[i7 >> 2] | 0)) | 0;
  HEAP32[i11 >> 2] = i10;
  i11 = HEAP32[i13 >> 2] | 0;
  i13 = i11 | 0;
  i7 = i11;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 7](i13) | 0;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 764 >> 2] & 7](i13) | 0;
  i7 = i11;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 728 >> 2] & 1](i5, i13);
  i11 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 732 >> 2] & 1](i6, i13);
  i13 = i2 | 0;
  i7 = (HEAP32[i13 >> 2] | 0) - (i14 + i8 + i11 + (HEAP32[i6 >> 2] | 0)) | 0;
  HEAP32[i13 >> 2] = i7;
  i18 = i7;
  i19 = i10;
 } else {
  i18 = HEAP32[i2 >> 2] | 0;
  i19 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i1 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i18 | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) != (i19 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 }
 i1 = i3;
 HEAP32[i1 >> 2] = i18;
 HEAP32[i1 + 4 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEE12setShapeSizeENS_10LayoutUnitES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 7](i1) | 0;
 if ((i13 | 0) == 1) {
  i14 = i1 + 12 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 | 0;
  i17 = i15;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 784 >> 2] & 1](i11, i16, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 788 >> 2] & 1](i12, i16, 0);
  i16 = i3 | 0;
  i17 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
  HEAP32[i16 >> 2] = i17;
  i16 = HEAP32[i14 >> 2] | 0;
  i14 = i16 | 0;
  i11 = i16;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 792 >> 2] & 1](i9, i14, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 796 >> 2] & 1](i10, i14, 0);
  i14 = i2 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) | 0;
  HEAP32[i14 >> 2] = i11;
  i18 = i11;
  i19 = i17;
 } else if ((i13 | 0) == 3) {
  i17 = i1 + 12 | 0;
  i11 = HEAP32[i17 >> 2] | 0;
  i14 = i11 | 0;
  i9 = i11;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 752 >> 2] & 7](i14) | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 756 >> 2] & 7](i14) | 0;
  i14 = i3 | 0;
  i9 = (HEAP32[i14 >> 2] | 0) - (i10 + i11) | 0;
  HEAP32[i14 >> 2] = i9;
  i14 = HEAP32[i17 >> 2] | 0;
  i17 = i14 | 0;
  i11 = i14;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 760 >> 2] & 7](i17) | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 764 >> 2] & 7](i17) | 0;
  i17 = i2 | 0;
  i11 = (HEAP32[i17 >> 2] | 0) - (i10 + i14) | 0;
  HEAP32[i17 >> 2] = i11;
  i18 = i11;
  i19 = i9;
 } else if ((i13 | 0) == 4) {
  i13 = i1 + 12 | 0;
  i9 = HEAP32[i13 >> 2] | 0;
  i11 = i9 | 0;
  i17 = i9;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 7](i11) | 0;
  i10 = i9;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 1](i8, i11);
  i9 = HEAP32[i8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 756 >> 2] & 7](i11) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 1](i7, i11);
  i11 = i3 | 0;
  i10 = (HEAP32[i11 >> 2] | 0) - (i9 + i14 + i8 + (HEAP32[i7 >> 2] | 0)) | 0;
  HEAP32[i11 >> 2] = i10;
  i11 = HEAP32[i13 >> 2] | 0;
  i13 = i11 | 0;
  i7 = i11;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 7](i13) | 0;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 764 >> 2] & 7](i13) | 0;
  i7 = i11;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 728 >> 2] & 1](i5, i13);
  i11 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 732 >> 2] & 1](i6, i13);
  i13 = i2 | 0;
  i7 = (HEAP32[i13 >> 2] | 0) - (i14 + i8 + i11 + (HEAP32[i6 >> 2] | 0)) | 0;
  HEAP32[i13 >> 2] = i7;
  i18 = i7;
  i19 = i10;
 } else {
  i18 = HEAP32[i2 >> 2] | 0;
  i19 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i1 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i18 | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) != (i19 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 }
 i1 = i3;
 HEAP32[i1 >> 2] = i18;
 HEAP32[i1 + 4 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE22computeSegmentsForLineENS_10LayoutUnitES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 80 | 0;
 i16 = i1 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i17 = i1 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = HEAP32[i2 >> 2] | 0;
 i19 = HEAP32[i18 + 24 >> 2] | 0;
 i20 = i2;
 i21 = FUNCTION_TABLE_ii[HEAP32[i18 + 12 >> 2] & 7](i2) | 0;
 if ((i21 | 0) == 1) {
  i18 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i10, i18 + 60 | 0, (HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i22 = -(HEAP32[i10 >> 2] | 0) | 0;
 } else if ((i21 | 0) == 3) {
  i10 = HEAP32[i2 + 12 >> 2] | 0;
  i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 7](i10 | 0) | 0;
 } else if ((i21 | 0) == 4) {
  i21 = HEAP32[i2 + 12 >> 2] | 0;
  i10 = i21 | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 752 >> 2] & 7](i10) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 720 >> 2] & 1](i9, i10);
  i22 = (HEAP32[i9 >> 2] | 0) + i18 | 0;
 } else {
  i22 = 0;
 }
 i18 = HEAP32[i3 >> 2] | 0;
 HEAP32[i11 >> 2] = i18 - i22;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i8, i2);
 i22 = (HEAP32[i8 + 12 >> 2] | 0) + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i8 | 0) == 4) {
  i20 = HEAP32[i2 + 12 >> 2] | 0;
  i3 = i20 | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 752 >> 2] & 7](i3) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 720 >> 2] & 1](i6, i3);
  i23 = (HEAP32[i6 >> 2] | 0) + i9 | 0;
 } else if ((i8 | 0) == 1) {
  i9 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i7, i9 + 60 | 0, (HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i23 = -(HEAP32[i7 >> 2] | 0) | 0;
 } else if ((i8 | 0) == 3) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i8 | 0) | 0;
 } else {
  i23 = 0;
 }
 i8 = i22 + i23 - i18 | 0;
 HEAP32[i13 >> 2] = i8;
 HEAP32[i12 >> 2] = HEAP32[((i8 | 0) < (HEAP32[i4 >> 2] | 0) ? i13 : i4) >> 2];
 FUNCTION_TABLE_viiii[i19 & 1](i2, i11, i12, i1);
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i14 | 0;
 i12 = i15 | 0;
 i11 = 0;
 while (1) {
  i19 = HEAP32[i16 >> 2] | 0;
  __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i14, i2);
  i4 = i19 + (i11 << 3) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
  if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i24 = 12;
   break;
  }
  i4 = HEAP32[i16 >> 2] | 0;
  __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i15, i2);
  i19 = i4 + (i11 << 3) + 4 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i19 >> 2] | 0);
  i19 = i11 + 1 | 0;
  if (i19 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
   i11 = i19;
  } else {
   i24 = 15;
   break;
  }
 }
 if ((i24 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i24 | 0) == 15) {
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE22computeSegmentsForLineENS_10LayoutUnitES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 80 | 0;
 i16 = i1 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i17 = i1 + 8 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = HEAP32[i2 >> 2] | 0;
 i19 = HEAP32[i18 + 24 >> 2] | 0;
 i20 = i2;
 i21 = FUNCTION_TABLE_ii[HEAP32[i18 + 12 >> 2] & 7](i2) | 0;
 if ((i21 | 0) == 3) {
  i18 = HEAP32[i2 + 12 >> 2] | 0;
  i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 752 >> 2] & 7](i18 | 0) | 0;
 } else if ((i21 | 0) == 1) {
  i18 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i10, i18 + 60 | 0, (HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i22 = -(HEAP32[i10 >> 2] | 0) | 0;
 } else if ((i21 | 0) == 4) {
  i21 = HEAP32[i2 + 12 >> 2] | 0;
  i10 = i21 | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 752 >> 2] & 7](i10) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 720 >> 2] & 1](i9, i10);
  i22 = (HEAP32[i9 >> 2] | 0) + i18 | 0;
 } else {
  i22 = 0;
 }
 i18 = HEAP32[i3 >> 2] | 0;
 HEAP32[i11 >> 2] = i18 - i22;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i8, i2);
 i22 = (HEAP32[i8 + 12 >> 2] | 0) + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i8 | 0) == 1) {
  i20 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i7, i20 + 60 | 0, (HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i23 = -(HEAP32[i7 >> 2] | 0) | 0;
 } else if ((i8 | 0) == 3) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 7](i7 | 0) | 0;
 } else if ((i8 | 0) == 4) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i7 = i8 | 0;
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i7) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 1](i6, i7);
  i23 = (HEAP32[i6 >> 2] | 0) + i20 | 0;
 } else {
  i23 = 0;
 }
 i20 = i22 + i23 - i18 | 0;
 HEAP32[i13 >> 2] = i20;
 HEAP32[i12 >> 2] = HEAP32[((i20 | 0) < (HEAP32[i4 >> 2] | 0) ? i13 : i4) >> 2];
 FUNCTION_TABLE_viiii[i19 & 1](i2, i11, i12, i1);
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i14 | 0;
 i12 = i15 | 0;
 i11 = 0;
 while (1) {
  i19 = HEAP32[i16 >> 2] | 0;
  __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i14, i2);
  i4 = i19 + (i11 << 3) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
  if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i24 = 12;
   break;
  }
  i4 = HEAP32[i16 >> 2] | 0;
  __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i15, i2);
  i19 = i4 + (i11 << 3) + 4 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i19 >> 2] | 0);
  i19 = i11 + 1 | 0;
  if (i19 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
   i11 = i19;
  } else {
   i24 = 16;
   break;
  }
 }
 if ((i24 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i24 | 0) == 16) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore21checkShapeImageOriginERNS_8DocumentERNS_11CachedImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 if (__ZN7WebCore11CachedImage13isOriginCleanEPNS_14SecurityOriginE(i2, HEAP32[i1 + 100 >> 2] | 0) | 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = __ZNK7WebCore19ResourceRequestBase3urlEv(i2 + 48 | 0) | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 48 | 0);
 } else {
  __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i6, i9, 1024);
 }
 i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 316 >> 2] | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i10 = 0;
   i11 = 1;
  } else {
   i12 = i6 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i13 + 2 | 0;
   HEAP32[i12 >> 2] = i13 + 4;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i15 = HEAP32[i12 >> 2] | 0;
   } else {
    HEAP32[i12 >> 2] = i14;
    i15 = i14;
   }
   i14 = i15 + 2 | 0;
   HEAP32[i12 >> 2] = i15 + 4;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i10 = i6;
    i11 = 0;
    break;
   } else {
    HEAP32[i12 >> 2] = i14;
    i10 = i6;
    i11 = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 16;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = i10;
 i15 = (i10 | 0) == 0;
 if (!i15) {
  i14 = i10 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, H_BASE + 8 | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
  return 0;
 }
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i4;
 FUNCTION_TABLE_viiiii[i9 & 1](i1, 8, 3, i7, 0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i7 = i10 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i15 = i10 | 0;
   i1 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = i10 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 } else {
  HEAP32[i2 >> 2] = i11;
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE32computedShapePhysicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i1, i2);
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i6, i2);
 HEAP32[i7 >> 2] = (HEAP32[i6 >> 2] | 0) + i8;
 i8 = i1 + 4 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i9 | 0) == 4) {
  i10 = i2 + 12 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11 | 0;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 752 >> 2] & 7](i12) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 720 >> 2] & 1](i4, i12);
  i14 = (HEAP32[i4 >> 2] | 0) + i13 | 0;
  i15 = i10;
 } else if ((i9 | 0) == 1) {
  i10 = i2 + 12 | 0;
  i13 = HEAP32[i10 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i13 + 60 | 0, (HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i14 = -(HEAP32[i5 >> 2] | 0) | 0;
  i15 = i10;
 } else if ((i9 | 0) == 3) {
  i9 = i2 + 12 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 7](i10 | 0) | 0;
  i15 = i9;
 } else {
  i14 = 0;
  i15 = i2 + 12 | 0;
 }
 i2 = i14 + i6 | 0;
 HEAP32[i8 >> 2] = i2;
 i6 = HEAP32[i15 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0;
 i9 = i14 >>> 13 & 3;
 if ((i9 | 0) == 3) {
  i16 = i6 + 56 | 0;
  i17 = 9;
 } else if ((i9 | 0) == 1) {
  i16 = i6 + 52 | 0;
  i17 = 9;
 } else {
  i18 = i14;
  i19 = i2;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i16 >> 2] | 0) - i2 - (HEAP32[i1 + 12 >> 2] | 0) | 0;
  HEAP32[i8 >> 2] = i17;
  i18 = HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
  i19 = i17;
 }
 i17 = i18 >>> 13 & 3;
 if ((i17 | 0) == 3 | (i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i18 = HEAP32[i1 + 8 >> 2] | 0;
 i15 = i1;
 HEAP32[i15 >> 2] = i19;
 HEAP32[i15 + 4 >> 2] = i17;
 i17 = i1 + 8 | 0;
 HEAP32[i17 >> 2] = i7;
 HEAP32[i17 + 4 >> 2] = i18;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE32computedShapePhysicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i1, i2);
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i6, i2);
 HEAP32[i7 >> 2] = (HEAP32[i6 >> 2] | 0) + i8;
 i8 = i1 + 4 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i9 | 0) == 1) {
  i10 = i2 + 12 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i11 + 60 | 0, (HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i12 = -(HEAP32[i5 >> 2] | 0) | 0;
  i13 = i10;
 } else if ((i9 | 0) == 3) {
  i10 = i2 + 12 | 0;
  i5 = HEAP32[i10 >> 2] | 0;
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
  i13 = i10;
 } else if ((i9 | 0) == 4) {
  i9 = i2 + 12 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i5 = i10 | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 7](i5) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 1](i4, i5);
  i12 = (HEAP32[i4 >> 2] | 0) + i11 | 0;
  i13 = i9;
 } else {
  i12 = 0;
  i13 = i2 + 12 | 0;
 }
 i2 = i12 + i6 | 0;
 HEAP32[i8 >> 2] = i2;
 i6 = HEAP32[i13 >> 2] | 0;
 i12 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0;
 i9 = i12 >>> 13 & 3;
 if ((i9 | 0) == 3) {
  i14 = i6 + 56 | 0;
  i15 = 9;
 } else if ((i9 | 0) == 1) {
  i14 = i6 + 52 | 0;
  i15 = 9;
 } else {
  i16 = i12;
  i17 = i2;
 }
 if ((i15 | 0) == 9) {
  i15 = (HEAP32[i14 >> 2] | 0) - i2 - (HEAP32[i1 + 12 >> 2] | 0) | 0;
  HEAP32[i8 >> 2] = i15;
  i16 = HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
  i17 = i15;
 }
 i15 = i16 >>> 13 & 3;
 if ((i15 | 0) == 3 | (i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i15 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i16 = HEAP32[i1 + 8 >> 2] | 0;
 i13 = i1;
 HEAP32[i13 >> 2] = i17;
 HEAP32[i13 + 4 >> 2] = i15;
 i15 = i1 + 8 | 0;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE20shapeToRendererPointENS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, d18 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 d8 = +HEAPF32[i3 >> 2];
 __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i7, i2);
 d9 = d8 + +(HEAP32[i7 >> 2] | 0);
 d8 = +HEAPF32[i3 + 4 >> 2];
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i3 | 0) == 3) {
  i7 = i2 + 12 | 0;
  i10 = HEAP32[i7 >> 2] | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 7](i10 | 0) | 0;
  i12 = i7;
 } else if ((i3 | 0) == 4) {
  i7 = i2 + 12 | 0;
  i10 = HEAP32[i7 >> 2] | 0;
  i13 = i10 | 0;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 7](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 1](i5, i13);
  i11 = (HEAP32[i5 >> 2] | 0) + i14 | 0;
  i12 = i7;
 } else if ((i3 | 0) == 1) {
  i3 = i2 + 12 | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i7 + 60 | 0, (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i11 = -(HEAP32[i6 >> 2] | 0) | 0;
  i12 = i3;
 } else {
  i11 = 0;
  i12 = i2 + 12 | 0;
 }
 d15 = d8 + +(i11 | 0);
 HEAPF32[i1 >> 2] = d9;
 i11 = i1 + 4 | 0;
 HEAPF32[i11 >> 2] = d15;
 i2 = HEAP32[i12 >> 2] | 0;
 i12 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3) {
  i16 = i2 + 56 | 0;
  i17 = 9;
 } else if ((i12 | 0) == 1) {
  i16 = i2 + 52 | 0;
  i17 = 9;
 } else {
  d18 = d15;
 }
 if ((i17 | 0) == 9) {
  d8 = +(HEAP32[i16 >> 2] | 0) - d15;
  HEAPF32[i11 >> 2] = d8;
  d18 = d8;
 }
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i1;
 d8 = +d18;
 d18 = +d9;
 HEAPF32[i12 >> 2] = d8;
 HEAPF32[i12 + 4 >> 2] = d18;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE20shapeToRendererPointENS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, d16 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 d8 = +HEAPF32[i3 >> 2];
 __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i7, i2);
 d9 = d8 + +(HEAP32[i7 >> 2] | 0);
 d8 = +HEAPF32[i3 + 4 >> 2];
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i3 | 0) == 1) {
  i7 = i2 + 12 | 0;
  i10 = HEAP32[i7 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i10 + 60 | 0, (HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i11 = -(HEAP32[i6 >> 2] | 0) | 0;
  i12 = i7;
 } else if ((i3 | 0) == 3) {
  i7 = i2 + 12 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i6 | 0) | 0;
  i12 = i7;
 } else if ((i3 | 0) == 4) {
  i3 = i2 + 12 | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  i6 = i7 | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 7](i6) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 720 >> 2] & 1](i5, i6);
  i11 = (HEAP32[i5 >> 2] | 0) + i10 | 0;
  i12 = i3;
 } else {
  i11 = 0;
  i12 = i2 + 12 | 0;
 }
 d13 = d8 + +(i11 | 0);
 HEAPF32[i1 >> 2] = d9;
 i11 = i1 + 4 | 0;
 HEAPF32[i11 >> 2] = d13;
 i2 = HEAP32[i12 >> 2] | 0;
 i12 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3) {
  i14 = i2 + 56 | 0;
  i15 = 9;
 } else if ((i12 | 0) == 1) {
  i14 = i2 + 52 | 0;
  i15 = 9;
 } else {
  d16 = d13;
 }
 if ((i15 | 0) == 9) {
  d8 = +(HEAP32[i14 >> 2] | 0) - d13;
  HEAPF32[i11 >> 2] = d8;
  d16 = d8;
 }
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i1;
 d8 = +d16;
 d16 = +d9;
 HEAPF32[i12 >> 2] = d8;
 HEAPF32[i12 + 4 >> 2] = d16;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 148 >> 2] & 7](i7 | 0) | 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i7 | 0) == 1) {
  i2 = HEAP32[i6 >> 2] | 0;
  i8 = HEAP32[i2 + 36 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i5, i2 + 60 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1);
  HEAP32[i1 >> 2] = -(HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 2) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 3) {
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 760 >> 2] & 7](i5 | 0) | 0;
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 4) {
  i7 = HEAP32[i6 >> 2] | 0;
  i6 = i7 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 7](i6) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 728 >> 2] & 1](i4, i6);
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + i5;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 148 >> 2] & 7](i7 | 0) | 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i7 | 0) == 1) {
  i2 = HEAP32[i6 >> 2] | 0;
  i8 = HEAP32[i2 + 36 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i5, i2 + 60 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1);
  HEAP32[i1 >> 2] = -(HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 2) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 3) {
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 760 >> 2] & 7](i5 | 0) | 0;
  STACKTOP = i3;
  return;
 } else if ((i7 | 0) == 4) {
  i7 = HEAP32[i6 >> 2] | 0;
  i6 = i7 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 7](i6) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 728 >> 2] & 1](i4, i6);
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + i5;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLineBottomENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i3 | 0) == 3) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i8 | 0) | 0;
 } else if ((i3 | 0) == 4) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i10 = i8 | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i10) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 1](i5, i10);
  i9 = (HEAP32[i5 >> 2] | 0) + i11 | 0;
 } else if ((i3 | 0) == 1) {
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i3 + 60 | 0, (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i6 >> 2] | 0) | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i7 + i9;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLineBottomENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i3 | 0) == 1) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i8 + 60 | 0, (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i6 >> 2] | 0) | 0;
 } else if ((i3 | 0) == 3) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i6 | 0) | 0;
 } else if ((i3 | 0) == 4) {
  i3 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i3 | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 720 >> 2] & 1](i5, i2);
  i9 = (HEAP32[i5 >> 2] | 0) + i6 | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i7 + i9;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE16logicalTopOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i7 + 60 | 0, (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  HEAP32[i1 >> 2] = -(HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 2) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i6 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + i5;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE18shapeLogicalBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i6, i2);
 i7 = (HEAP32[i6 + 12 >> 2] | 0) + (HEAP32[i6 + 4 >> 2] | 0) | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i8 + 60 | 0, (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i6 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  i9 = (HEAP32[i4 >> 2] | 0) + i5 | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i7 + i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE16logicalTopOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i7 + 60 | 0, (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  HEAP32[i1 >> 2] = -(HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 2) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  HEAP32[i1 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
  STACKTOP = i3;
  return;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i6 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + i5;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE18shapeLogicalBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i6, i2);
 i7 = (HEAP32[i6 + 12 >> 2] | 0) + (HEAP32[i6 + 4 >> 2] | 0) | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i8 + 60 | 0, (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i6 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  i9 = (HEAP32[i4 >> 2] | 0) + i5 | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i7 + i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE15shapeLogicalTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i6, i2);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i8 + 60 | 0, (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i6 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  i9 = (HEAP32[i4 >> 2] | 0) + i5 | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i9 + i7;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE15shapeLogicalTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i6, i2);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i8 + 60 | 0, (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i6 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  i9 = (HEAP32[i4 >> 2] | 0) + i5 | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i9 + i7;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLineBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i7 | 0) == 3) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i8 | 0) | 0;
 } else if ((i7 | 0) == 4) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  i10 = i8 | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i10) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 1](i4, i10);
  i9 = (HEAP32[i4 >> 2] | 0) + i11 | 0;
 } else if ((i7 | 0) == 1) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i7 + 60 | 0, (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i6 + i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLineBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i7 | 0) == 1) {
  i8 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i8 + 60 | 0, (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i9 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else if ((i7 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
 } else if ((i7 | 0) == 4) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  i2 = i7 | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 720 >> 2] & 1](i4, i2);
  i9 = (HEAP32[i4 >> 2] | 0) + i5 | 0;
 } else {
  i9 = 0;
 }
 HEAP32[i1 >> 2] = i6 + i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE14logicalLineTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 3) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 7](i7 | 0) | 0;
 } else if ((i6 | 0) == 4) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  i9 = i7 | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 7](i9) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 720 >> 2] & 1](i4, i9);
  i8 = (HEAP32[i4 >> 2] | 0) + i10 | 0;
 } else if ((i6 | 0) == 1) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i6 + 60 | 0, (HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i8 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else {
  i8 = 0;
 }
 HEAP32[i1 >> 2] = (HEAP32[i2 + 4 >> 2] | 0) + i8;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE14logicalLineTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 7](i2) | 0;
 if ((i6 | 0) == 1) {
  i7 = HEAP32[i2 + 12 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i7 + 60 | 0, (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i8 = -(HEAP32[i5 >> 2] | 0) | 0;
 } else if ((i6 | 0) == 3) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 752 >> 2] & 7](i5 | 0) | 0;
 } else if ((i6 | 0) == 4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
  i5 = i6 | 0;
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 7](i5) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 720 >> 2] & 1](i4, i5);
  i8 = (HEAP32[i4 >> 2] | 0) + i7 | 0;
 } else {
  i8 = 0;
 }
 HEAP32[i1 >> 2] = (HEAP32[i2 + 4 >> 2] | 0) + i8;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE33shapeContainingBlockLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = HEAP32[i2 + 24 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i2 = i6 | 0;
  i8 = i6;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  i10 = i6;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 1](i5, i2);
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 1](i4, i2);
  HEAP32[i1 >> 2] = i9 + i7 + i6 + i5 + (HEAP32[i4 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE33shapeContainingBlockLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = HEAP32[i2 + 24 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i2 = i6 | 0;
  i8 = i6;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 7](i2) | 0;
  i10 = i6;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 1](i5, i2);
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 7](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 1](i4, i2);
  HEAP32[i1 >> 2] = i9 + i7 + i6 + i5 + (HEAP32[i4 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE19shapeToRendererSizeENS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = (HEAP32[(HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i5 = i3;
  i2 = i1;
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i2 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  d7 = +HEAPF32[i3 >> 2];
  HEAPF32[i1 >> 2] = +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 4 >> 2] = d7;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE19shapeToRendererSizeENS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = (HEAP32[(HEAP32[(HEAP32[i2 + 12 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i5 = i3;
  i2 = i1;
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i2 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 } else {
  d7 = +HEAPF32[i3 >> 2];
  HEAPF32[i1 >> 2] = +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 + 4 >> 2] = d7;
  STACKTOP = i4;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 4;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17shapeLogicalRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 i6 = (HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
 __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i5, i2);
 HEAP32[i1 >> 2] = i6 + (HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17shapeLogicalRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 i6 = (HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
 __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i5, i2);
 HEAP32[i1 >> 2] = i6 + (HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE16shapeLogicalLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 i6 = HEAP32[i4 >> 2] | 0;
 __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv(i5, i2);
 HEAP32[i1 >> 2] = (HEAP32[i5 >> 2] | 0) + i6;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE16shapeLogicalLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 i6 = HEAP32[i4 >> 2] | 0;
 __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv(i5, i2);
 HEAP32[i1 >> 2] = (HEAP32[i5 >> 2] | 0) + i6;
 STACKTOP = i3;
 return;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE18shapeLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17shapeLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 + 8 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE18shapeLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17shapeLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i4, i2);
 HEAP32[i1 >> 2] = HEAP32[i4 + 8 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEC2ERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEC2ERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 return;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEE14dirtyShapeSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEE14dirtyShapeSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE9shapeSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 20 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE9shapeSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 20 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE11writingModeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3 | 0;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE11writingModeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEnwEj10NotNullTagPv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return i3 | 0;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEnwEj10NotNullTagPv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return i3 | 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEE14shapeSizeDirtyEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) == 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEE14shapeSizeDirtyEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) == 0 | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEnwEj(i1) {
 i1 = i1 | 0;
 return __ZN3WTF10fastMallocEj(i1) | 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEnaEj(i1) {
 i1 = i1 | 0;
 return __ZN3WTF10fastMallocEj(i1) | 0;
}
function __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE5ownerEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEnwEj(i1) {
 i1 = i1 | 0;
 return __ZN3WTF10fastMallocEj(i1) | 0;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEnaEj(i1) {
 i1 = i1 | 0;
 return __ZN3WTF10fastMallocEj(i1) | 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEdlEPv(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEdaEPv(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore9ShapeInfoINS_9RenderBoxEE5ownerEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEnwEjPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEEnaEjPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEdlEPv(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEdaEPv(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEnwEjPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEEnaEjPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return i2 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore9ShapeInfoINS_11RenderBlockEED0Ev,b1,__ZN7WebCore9ShapeInfoINS_9RenderBoxEED0Ev,b1,__ZN7WebCore9ShapeInfoINS_11RenderBlockEED1Ev,b1,__ZN7WebCore9ShapeInfoINS_9RenderBoxEED1Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE11writingModeEv,b3,__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE11writingModeEv,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE16shapeLogicalLeftEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE33shapeContainingBlockLogicalHeightEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17shapeLogicalRightEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE16logicalTopOffsetEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEE14shapeSizeDirtyEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE18shapeLogicalHeightEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEnaEjPv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE32computedShapePhysicalBoundingBoxEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEED0Ev","_memset","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE18shapeLogicalBottomEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE14logicalLineTopEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE22computeSegmentsForLineENS_10LayoutUnitES3_","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEdaEPv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17shapeLogicalRightEv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEnwEj","__ZN7WebCore9ShapeInfoINS_11RenderBlockEED1Ev","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE19shapeToRendererSizeENS_9FloatSizeE","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE33shapeContainingBlockLogicalHeightEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLineBottomENS_10LayoutUnitE","__ZN7WebCore9ShapeInfoINS_11RenderBlockEE14dirtyShapeSizeEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE32computedShapePhysicalBoundingBoxEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE16shapeLogicalLeftEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE13computedShapeEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLeftOffsetEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE16logicalTopOffsetEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE11writingModeEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEE12setShapeSizeENS_10LayoutUnitES3_","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE13computedShapeEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17shapeLogicalWidthEv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEnwEj10NotNullTagPv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE19shapeToRendererSizeENS_9FloatSizeE","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE18shapeLogicalHeightEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLineBottomEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE15shapeLogicalTopEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE9shapeSizeEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEnaEjPv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEnwEjPv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEnaEj","__ZN7WebCore9ShapeInfoINS_9RenderBoxEE12setShapeSizeENS_10LayoutUnitES3_","__ZN7WebCore9ShapeInfoINS_9RenderBoxEE14shapeSizeDirtyEv","__ZN7WebCore21checkShapeImageOriginERNS_8DocumentERNS_11CachedImageE","__ZN7WebCore9ShapeInfoINS_9RenderBoxEE14dirtyShapeSizeEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLeftOffsetEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE17logicalLineBottomENS_10LayoutUnitE","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE11writingModeEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEdaEPv","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17shapeLogicalWidthEv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE20shapeToRendererPointENS_10FloatPointE","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEnaEj","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE5ownerEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEnwEj","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE18shapeLogicalBottomEv","_strlen","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEdlEPv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEED2Ev","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEdlEPv","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE15shapeLogicalTopEv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEC2ERKS1_","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE14logicalLineTopEv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEC2ERKS1_","__ZN7WebCore9ShapeInfoINS_9RenderBoxEEnwEjPv","__ZN7WebCore9ShapeInfoINS_11RenderBlockEED2Ev","_memcpy","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE9shapeSizeEv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE17logicalLineBottomEv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEED0Ev","__ZNK7WebCore9ShapeInfoINS_11RenderBlockEE22computeSegmentsForLineENS_10LayoutUnitES3_","__ZN7WebCore9ShapeInfoINS_11RenderBlockEEnwEj10NotNullTagPv","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE20shapeToRendererPointENS_10FloatPointE","__ZNK7WebCore9ShapeInfoINS_9RenderBoxEE5ownerEv","__ZN7WebCore9ShapeInfoINS_9RenderBoxEED1Ev"]
