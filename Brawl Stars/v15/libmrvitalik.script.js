var _0x3306 = ['size', 'protection', 'findExportByName', 'libc.so', 'getaddrinfo', 'perform', 'java.lang.System', 'use', 'java.lang.Runtime', 'overload', 'dalvik.system.VMStack', 'implementation', 'loadLibrary0', 'getCallingClassLoader', '.so', 'libg.so', 'readPointer', 'add', 'int', 'pointer', 'pthread_mutex_unlock', 'sendto', 'writeU8', 'readU8', 'void', 'readInt', 'sub', 'writeInt', 'replace', 'writePointer', 'redirectHost', 'options', 'pthread_cond_signal', 'context', 'equals', 'detach', 'exports', 'modules', 'findModuleByName', 'enumerateRangesSync', 'base', 'length', 'ranges', 'push'];
(function (_0x417e8b, _0x379a56) {
  var _0x180d18 = function (_0x5c957e) {
    while (--_0x5c957e) {
      _0x417e8b.push(_0x417e8b.shift());
    }
  };
  _0x180d18(++_0x379a56);
})(_0x3306, 0x12d);
var _0x5369 = function (_0x466f22, _0x4575aa) {
  _0x466f22 = _0x466f22 - 0x0;
  var _0x45c134 = _0x3306[_0x466f22];
  return _0x45c134;
};
var cache = {
  'modules': {},
  'options': {}
};
function moduleInfo(_0x33241b, _0x19f7c5) {
  if (cache[_0x5369('0x0')][_0x33241b] && !_0x19f7c5) {
    return cache[_0x5369('0x0')][_0x33241b];
  }
  const _0x3cdd33 = Process[_0x5369('0x1')](_0x33241b);
  const _0x48781e = Module[_0x5369('0x2')](_0x33241b, '---');
  const _0x53d1bc = {
    'name': _0x33241b,
    'base': _0x3cdd33[_0x5369('0x3')],
    'ranges': []
  };
  for (var _0x355ad2 = 0x0; _0x355ad2 < _0x48781e[_0x5369('0x4')]; _0x355ad2 += 0x1) {
    _0x53d1bc[_0x5369('0x5')][_0x5369('0x6')]({
      'base': _0x48781e[_0x355ad2][_0x5369('0x3')],
      'size': _0x48781e[_0x355ad2][_0x5369('0x7')],
      'protection': _0x48781e[_0x355ad2][_0x5369('0x8')]
    });
  }
  cache[_0x5369('0x0')][_0x33241b] = _0x53d1bc;
  return _0x53d1bc;
}
function lptr(_0x4eaf13, _0x29dc09) {
  const _0xb193d5 = moduleInfo(_0x4eaf13);
  return _0xb193d5.base.add(_0x29dc09);
}
function redirectHost(ifuckedup) { //blyat
  const _0x4d0e20 = new NativeFunction(Module.findExportByName('libc.so', 'ntohs'), 'uint16', ['uint16']);
  const _0x21aad8 = new NativeFunction(Module.findExportByName('libc.so', 'inet_addr'), 'int', ['pointer']);
  Interceptor.attach(Module.findExportByName('libc.so', 'connect'), {
    'onEnter': function (_0x1efefd) {
      if (_0x4d0e20(Memory.readU16(_0x1efefd[0x1].add(0x2))) === 0x247b) {
        var _0x42715c = Memory.allocUtf8String("127.0.0.1"); //ip
        Memory.writeInt(_0x1efefd[0x1].add(0x4), _0x21aad8(9339)); //port
      }
    }
  });
}
function onLoad(_0x109945, _0xf8bf96) {
  Java[_0x5369('0xc')](function () {
    const _0x4dd991 = Java.use(_0x5369('0xd'));
    const _0x21a157 = Java[_0x5369('0xe')](_0x5369('0xf'));
    const _0xceb5ec = _0x4dd991.loadLibrary[_0x5369('0x10')]('java.lang.String');
    const _0x3572ed = Java[_0x5369('0xe')](_0x5369('0x11'));
    _0xceb5ec[_0x5369('0x12')] = function (_0x44d38e) {
      try {
        const _0x56d060 = _0x21a157.getRuntime()[_0x5369('0x13')](_0x3572ed[_0x5369('0x14')](), _0x44d38e);
        if (_0x109945 === 'lib' + _0x44d38e + _0x5369('0x15')) {
          _0xf8bf96();
        }
        return _0x56d060;
      } catch (_0x567ccd) {}
    };
  });
}
function setupMessaging() {
  const _0x1d3817 = Process[_0x5369('0x1')](_0x5369('0x16')).base;
  var _0x1674a0 = Memory[_0x5369('0x17')](_0x1d3817.add(0xac6820));
  var _0x5c2db2 = Memory.readPointer(_0x1674a0[_0x5369('0x18')](0x28));
  var _0x2346a8 = Memory[_0x5369('0x17')](_0x5c2db2[_0x5369('0x18')](0x138));
  const _0x5a9973 = new NativeFunction(Module.findExportByName('libc.so', 'pthread_mutex_lock'), _0x5369('0x19'), [_0x5369('0x1a')]);
  const _0x4d81b9 = new NativeFunction(Module[_0x5369('0x9')](_0x5369('0xa'), _0x5369('0x1b')), _0x5369('0x19'), [_0x5369('0x1a')]);
  const _0x3edec9 = new NativeFunction(Module.findExportByName(_0x5369('0xa'), _0x5369('0x1c')), 'int', [_0x5369('0x19'), _0x5369('0x1a'), _0x5369('0x19'), 'int', _0x5369('0x1a'), 'int']);
  const _0xef3e34 = new NativeFunction(Module[_0x5369('0x9')](_0x5369('0xa'), 'memmove'), _0x5369('0x1a'), [_0x5369('0x1a'), _0x5369('0x1a'), 'int']);
  const _0x2a49da = new NativeFunction(_0x1d3817.add(0x5df688), 'pointer', [_0x5369('0x19')]);
  const _0x5debe1 = function (_0x396671, _0x2a2f23) {
    Memory.writeU8(_0x396671[_0x5369('0x18')](0x2), _0x2a2f23 >> 0x10 & 0xff);
    Memory.writeU8(_0x396671[_0x5369('0x18')](0x3), _0x2a2f23 >> 0x8 & 0xff);
    Memory.writeU8(_0x396671[_0x5369('0x18')](0x4), _0x2a2f23 & 0xff);
  };
  const _0x347a09 = function (_0x2b259e, _0x40c763) {
    Memory[_0x5369('0x1d')](_0x2b259e[_0x5369('0x18')](0x0), _0x40c763 >> 0x8 & 0xff);
    Memory[_0x5369('0x1d')](_0x2b259e.add(0x1), _0x40c763 & 0xff);
  };
  const _0x1c18e3 = function (_0x22389b, _0x245a0c) {
    Memory.writeU8(_0x22389b[_0x5369('0x18')](0x5), _0x245a0c >> 0x8 & 0xff);
    Memory.writeU8(_0x22389b[_0x5369('0x18')](0x6), _0x245a0c & 0xff);
  };
  const _0x3655c7 = function (_0x1a08cd) {
    new NativeFunction(Memory.readPointer(Memory[_0x5369('0x17')](_0x1a08cd)[_0x5369('0x18')](0x10)), _0x5369('0x1f'), ['pointer'])(_0x1a08cd);
  };
  const _0xb352e = function (_0x2402bd) {
    new NativeFunction(Memory[_0x5369('0x17')](Memory[_0x5369('0x17')](_0x2402bd).add(0x18)), 'void', [_0x5369('0x1a')])(_0x2402bd);
  };
  const _0x2dea34 = function (_0x716eb5, _0x364343) {
    _0x5a9973(_0x716eb5[_0x5369('0x21')](0x28));
    const _0x37ec61 = Memory[_0x5369('0x20')](_0x716eb5[_0x5369('0x18')](0x14));
    const _0xa790e1 = Memory[_0x5369('0x20')](_0x716eb5[_0x5369('0x18')](0x8));
    Memory.writePointer(Memory[_0x5369('0x17')](_0x716eb5)[_0x5369('0x18')](0x8 * _0x37ec61), _0x364343);
    Memory.writeInt(_0x716eb5[_0x5369('0x18')](0x14), (_0x37ec61 + 0x1) % _0xa790e1);
    Memory[_0x5369('0x22')](_0x716eb5[_0x5369('0x18')](0xc), Memory[_0x5369('0x20')](_0x716eb5[_0x5369('0x18')](0xc)) + 0x1);
    _0x4d81b9(_0x716eb5[_0x5369('0x21')](0x28));
  };
  Interceptor[_0x5369('0x23')](_0x1d3817[_0x5369('0x18')](0x58a7a0), new NativeCallback(function (_0x1de487, _0x311227, _0x4b144b, _0x158c00, _0x3e638c, _0x3987e9) {
    const _0xee28c5 = Memory[_0x5369('0x1e')](_0x311227) << 0x8 | Memory[_0x5369('0x1e')](_0x311227.add(0x1));
    var _0x1cd7ec;
    if (_0xee28c5 === 0x2774) {
      var _0x478dc5;
      var _0x474097;
      _0x1cd7ec = Memory[_0x5369('0x17')](_0x5c2db2[_0x5369('0x18')](0x258));
      _0x3655c7(_0x1cd7ec);
      _0x474097 = Memory[_0x5369('0x20')](_0x1cd7ec[_0x5369('0x18')](0x10)[_0x5369('0x18')](0x14));
      _0x478dc5 = _0x2a49da(_0x474097 + 0x7);
      _0xef3e34(_0x478dc5[_0x5369('0x18')](0x7), Memory[_0x5369('0x17')](_0x1cd7ec[_0x5369('0x18')](0x10)[_0x5369('0x18')](0x20)), _0x474097);
      _0x5debe1(_0x478dc5, _0x474097);
      _0x347a09(_0x478dc5, 0x2775);
      _0x1c18e3(_0x478dc5, 0xa);
      _0x3edec9(_0x1de487, _0x478dc5, _0x474097 + 0x7, _0x158c00, _0x3e638c, _0x3987e9);
      Memory[_0x5369('0x24')](_0x5c2db2[_0x5369('0x18')](0x258), ptr(0x0));
    } else {
      _0x5a9973(_0x5c2db2.add(0x138).sub(0x28));
      const _0x27fbdb = Memory[_0x5369('0x20')](_0x5c2db2[_0x5369('0x18')](0x140));
      var _0x94a9c5 = (Memory.readInt(_0x5c2db2[_0x5369('0x18')](0x148)) - 0x1) % _0x27fbdb;
      if (_0x94a9c5 < 0x0) {
        _0x94a9c5 += _0x27fbdb;
      }
      _0x1cd7ec = Memory[_0x5369('0x17')](_0x2346a8[_0x5369('0x18')](0x8 * _0x94a9c5));
      const _0x3852fe = Memory[_0x5369('0x20')](_0x1cd7ec[_0x5369('0x18')](0x10)[_0x5369('0x18')](0x14));
      _0x5debe1(_0x311227, _0x3852fe);
      _0xef3e34(_0x311227.add(0x7), Memory[_0x5369('0x17')](_0x1cd7ec[_0x5369('0x18')](0x10)[_0x5369('0x18')](0x20)), _0x3852fe);
      _0x3edec9(_0x1de487, _0x311227, _0x3852fe + 0x7, _0x158c00, _0x3e638c, _0x3987e9);
      _0x4d81b9(_0x5c2db2.add(0x138)[_0x5369('0x21')](0x28));
    }
    return _0x4b144b;
  }, _0x5369('0x19'), [_0x5369('0x19'), _0x5369('0x1a'), _0x5369('0x19'), 'int', _0x5369('0x1a'), _0x5369('0x19')]));
  const _0x2f4ac0 = new NativeFunction(Module[_0x5369('0x9')](_0x5369('0xa'), 'recvfrom'), _0x5369('0x19'), [_0x5369('0x19'), _0x5369('0x1a'), 'int', _0x5369('0x19'), _0x5369('0x1a'), _0x5369('0x1a')]);
  const _0x1dd66d = new NativeFunction(_0x1d3817[_0x5369('0x18')](0x47bba8), 'pointer', [_0x5369('0x1a'), _0x5369('0x19')]);
  var _0x5ba317;
  var _0x37e376;
  var _0x145958;
  Interceptor.replace(_0x1d3817.add(0x58a780), new NativeCallback(function (_0x3d0342, _0x2c80fc, _0x445f4d, _0x41264a, _0x2c71be, _0x2a907f) {
    var _0x58d20d = _0x2f4ac0(_0x3d0342, _0x2c80fc, _0x445f4d, _0x41264a, _0x2c71be, _0x2a907f);
    if (_0x5ba317 === 0x4e84) {
      _0x5ba317 = null;
      return _0x58d20d;
    }
    if (_0x5ba317 === 0x4e88) {
      Memory.writeInt(_0x5c2db2[_0x5369('0x18')](0x254), 0x5);
    }
    if (!_0x5ba317) {
      _0x5ba317 = Memory[_0x5369('0x1e')](_0x2c80fc) << 0x8 | Memory[_0x5369('0x1e')](_0x2c80fc.add(0x1));
      _0x37e376 = Memory[_0x5369('0x1e')](_0x2c80fc.add(0x5)) << 0x8 | Memory[_0x5369('0x1e')](_0x2c80fc.add(0x6));
      if (_0x5ba317 === 0x4e84) {
        return _0x58d20d;
      }
      const _0x246e49 = Memory[_0x5369('0x1e')](_0x2c80fc.add(0x2)) << 0x10 | Memory[_0x5369('0x1e')](_0x2c80fc[_0x5369('0x18')](0x3)) << 0x8 | Memory[_0x5369('0x1e')](_0x2c80fc.add(0x4));
      if (_0x246e49 === 0x0) {
        _0x145958 = _0x1dd66d(Memory[_0x5369('0x17')](_0x5c2db2[_0x5369('0x18')](0xc8)), _0x5ba317);
        Memory[_0x5369('0x22')](_0x145958[_0x5369('0x18')](0x8), _0x37e376);
        Memory.writeInt(_0x145958[_0x5369('0x18')](0x10)[_0x5369('0x18')](0x18), 0x0);
        _0xb352e(_0x145958);
        _0x2dea34(_0x5c2db2[_0x5369('0x18')](0xf8), _0x145958);
        _0x5ba317 = null;
      }
      _0x347a09(_0x2c80fc, 0xffff);
    } else {
      _0x145958 = _0x1dd66d(Memory[_0x5369('0x17')](_0x5c2db2[_0x5369('0x18')](0xc8)), _0x5ba317);
      Memory.writeInt(_0x145958[_0x5369('0x18')](0x8), _0x37e376);
      Memory.writeInt(_0x145958.add(0x10)[_0x5369('0x18')](0x18), _0x445f4d);
      const _0xc94a2e = _0x2a49da(_0x445f4d);
      _0xef3e34(_0xc94a2e, _0x2c80fc, _0x445f4d);
      Memory[_0x5369('0x24')](_0x145958.add(0x10)[_0x5369('0x18')](0x20), _0xc94a2e);
      _0xb352e(_0x145958);
      _0x2dea34(_0x5c2db2[_0x5369('0x18')](0xf8), _0x145958);
      _0x5ba317 = null;
    }
    return _0x58d20d;
  }, _0x5369('0x19'), [_0x5369('0x19'), 'pointer', 'int', _0x5369('0x19'), _0x5369('0x1a'), _0x5369('0x1a')]));
}
function setup() {
  if (cache.options[_0x5369('0x25')]) {
    redirectHost(cache[_0x5369('0x26')][_0x5369('0x25')]);
  }
  var _0x41fae5 = lptr(_0x5369('0x16'), 5810516);
  var _0x134808 = Interceptor.attach(Module.findExportByName(_0x5369('0xa'), _0x5369('0x27')), {
    'onEnter': function () {
      if (this[_0x5369('0x28')].lr[_0x5369('0x29')](_0x41fae5)) {
        _0x134808[_0x5369('0x2a')]();
        setupMessaging();
      }
    }
  });
}
rpc[_0x5369('0x2b')] = {
  'init': function (_0x15a853, _0xec51cf) {
    try {
      cache[_0x5369('0x26')] = _0xec51cf || {};
      onLoad(_0x5369('0x16'), function () {
        setup();
      });
    } catch (_0x455663) {}
  }
};
