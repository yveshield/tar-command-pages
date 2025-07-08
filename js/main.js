let add_verb = function (cmd) {
  let verb = document.getElementById('verbose-chk').checked
  if (verb) {
    cmd.u += 'v'
    cmd.g += ' --verbose'
  }

  let verb2 = document.getElementById('verbose2-chk').checked
  if (verb2) {
    cmd.u += 'v'
    cmd.g += ' --verbose'
  }
}

let add_S = function (cmd) {
  let sparse = document.getElementById('sparse-chk').checked
  if (sparse) {
    cmd.u += 'S'
    cmd.g += ' --sparse'
  }
}

let arfv = function () {
  let arf = document.querySelector('input[name="arf"]:checked').value
  let a = ''
  let b = ''
  let c = ''
  switch (arf) {
    case '122':
      a = 'z'
      b = 'gzip'
      c = '.gz'
      break
    case '104':
      a = 'j'
      b = 'bzip2'
      c = '.bz2'
      break
    case 'lbzip2':
      a = 'I lbzip2 -'
      b = 'use-compress-program=lbzip2'
      c = '.bz2'
      break
    case '74':
      a = 'J'
      b = 'xz'
      c = '.xz'
      break
    case 'lzip':
      a = arf
      b = a
      c = '.lz'
      break
    case 'lzma':
      a = arf
      b = a
      c = '.lzma'
      break
    case 'lzop':
      a = arf
      b = a
      c = '.lzo'
      break
    case 'zstd':
      a = arf
      b = a
      c = '.zst'
      break
    case 'pzstd':
      a = 'I pzstd -'
      b = 'use-compress-program=pzstd'
      c = '.zst'
      break
    case '90':
      a = 'Z'
      b = 'compress'
      c = '.Z'
      break
  }
  return [a, b, c]
}

let add_arf = function (cmd) {
  let v = arfv()
  let a = v[0]
  let b = v[1]
  let c = v[2]

  if (a !== '') {
    if (a.length === 1 || a[0] === 'I') {
      cmd.u += a
    } else {
      cmd.u += ' --' + a + ' -'
    }
    cmd.g += ' --' + b
  }
  return c
}

let set_cmd = function (cmd) {
  document.getElementById('taru').innerText = cmd.u
  document.getElementById('targ').innerText = cmd.g
}

let par_c = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-c'
  cmd.g += '--create'

  add_verb(cmd)

  add_S(cmd)

  let c = add_arf(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' etc.tar' + c
  cmd.g += ' etc.tar' + c

  cmd.u += ' /etc'
  cmd.g += ' /etc'

  set_cmd(cmd)
}

let par_r = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-r'
  cmd.g += '--append'

  add_verb(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar'
  cmd.g += ' collection.tar'

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par_u = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-u'
  cmd.g += '--update'

  add_verb(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar'
  cmd.g += ' collection.tar'

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par_A = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-A'
  cmd.g += '--concatenate'

  add_verb(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' bluesrock.tar'
  cmd.g += ' bluesrock.tar'

  cmd.u += ' folkjazz.tar'
  cmd.g += ' folkjazz.tar'

  set_cmd(cmd)
}

let par_d = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-d'
  cmd.g += '--diff'

  add_verb(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar'
  cmd.g += ' collection.tar'

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par_t = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-t'
  cmd.g += '--list'

  add_verb(cmd)

  let c = add_arf(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar' + c
  cmd.g += ' collection.tar' + c

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par_del = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '--delete -'
  cmd.g += '--delete'

  add_verb(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar'
  cmd.g += ' collection.tar'

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par_tl = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '--test-label -'
  cmd.g += '--test-label'

  add_verb(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar'
  cmd.g += ' collection.tar'

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par_x = function () {
  let cmd = { u: ' ', g: ' ' }

  cmd.u += '-x'
  cmd.g += '--extract'

  add_verb(cmd)

  let c = add_arf(cmd)

  cmd.u += 'f'
  cmd.g += ' --file'

  cmd.u += ' collection.tar' + c
  cmd.g += ' collection.tar' + c

  cmd.u += ' rock'
  cmd.g += ' rock'

  set_cmd(cmd)
}

let par = function () {
  let sfg = document.querySelector('input[name="sfg"]:checked').value
  let arfw = document.getElementById('arfw')
  let spaw = document.getElementById('spaw')
  spaw.style.display = 'none'
  switch (sfg) {
    case '99':
      arfw.style.display = ''
      spaw.style.display = ''
      par_c()
      break
    case '114':
      arfw.style.display = 'none'
      par_r()
      break
    case '117':
      arfw.style.display = 'none'
      par_u()
      break
    case '65':
      arfw.style.display = 'none'
      par_A()
      break
    case '100':
      arfw.style.display = 'none'
      par_d()
      break
    case '116':
      arfw.style.display = ''
      par_t()
      break
    case 'test_label':
      arfw.style.display = 'none'
      par_tl()
      break
    case '127':
      arfw.style.display = 'none'
      par_del()
      break
    case '120':
      arfw.style.display = ''
      par_x()
      break
  }
}

let j = function () {
  const paths = ['tar'];

  const sfgSelected = document.querySelector('input[name="sfg"]:checked');
  const sfgText = sfgSelected?.closest('label')?.querySelector('.title')?.textContent.trim().toLowerCase();

  if (sfgText) {
    sfgText = sfgText.replace(/\s+/g, '-');
    paths.push(sfgText);
  }

  const triggerValues = ['create', 'list', 'extract'];

  if (triggerValues.includes(sfgText)) {
    const arfSelected = document.querySelector('input[name="arf"]:checked');
    const arfText = arfSelected?.closest('label')?.querySelector('.title')?.textContent.trim().toLowerCase();

    if (arfText && arfText !== 'none') paths.push(arfText);
  }

  const verb = document.getElementById('verbose-chk').checked;
  const verb2 = document.getElementById('verbose2-chk').checked;

  if (verb2) {
    paths.push('vv');
  } else if (verb) {
    paths.push('v');
  }

  if (sfgText === 'create') {
    const sparse = document.getElementById('sparse-chk').checked;

    if (sparse) paths.push('sparse');
  }

  const pathname = '/' + paths.join('-') + '.html';
  if (pathname !== window.location.pathname) {
    window.location.href = pathname;
  }
}

let callback = function () {
  let rad = document.getElementsByName('sfg')
  let prev = null
  for (let i = 0; i < rad.length; i++) {
    rad[i].addEventListener(
      'change',
      function () {
        if (this !== prev) {
          prev = this
        }
        par()
        j()
      },
      true
    )
  }

  rad = document.getElementsByName('arf')
  prev = null
  for (let i = 0; i < rad.length; i++) {
    rad[i].addEventListener(
      'change',
      function () {
        if (this !== prev) {
          prev = this
        }
        par()
        j()
      },
      true
    )
  }

  document.getElementById('verbose-chk').addEventListener(
    'change',
    function () {
      let verb = document.getElementById('verbose-chk').checked
      if (!verb) {
        document.getElementById('verbose2-chk').checked = false
      }
      par()
      j()
    },
    true
  )

  document.getElementById('verbose2-chk').addEventListener(
    'change',
    function () {
      let verb2 = document.getElementById('verbose2-chk').checked
      if (verb2) {
        let verb = document.getElementById('verbose-chk').checked
        if (!verb) {
          document.getElementById('verbose-chk').checked = true
        }
      }
      par()
      j()
    },
    true
  )

  document.getElementById('sparse-chk').addEventListener(
    'change',
    function () {
      par()
      j()
    },
    true
  )

  const reg = /^\/tar[\w-]+\.html$/gi
  const res = window.location.pathname.toLowerCase()
  if (reg.test(res)) {
    const opt = res.substring(5, res.length - 5).split('-')
    if (opt.length == 0) {
      opt = [,]
    } else if (opt.length == 1) {
      opt.push(null)
    }
    let set_arf = function (a) {
      switch (a) {
        case 'gzip':
          a = '122'
          break
        case 'bzip2':
          a = '104'
          break
        case 'lbzip2':
          break
        case 'xz':
          a = '74'
          break
        case 'lzip':
        case 'lzma':
        case 'lzop':
        case 'zstd':
        case 'pzstd':
          break
        case 'z':
          a = '90'
          break
        default:
          a = ''
      }
      if (a != '') {
        document.tcform.arf.value = a
      }
    }
    let val = ''
    switch (opt[0]) {
      case 'create':
        val = '99'
        set_arf(opt[1])
        break
      case 'append':
        val = '114'
        break
      case 'update':
        val = '117'
        break
      case 'catenate':
      case 'concatenate':
        val = '65'
        break
      case 'diff':
      case 'compare':
        val = '100'
        break
      case 'list':
        val = '116'
        set_arf(opt[1])
        break
      case 'test':
        if (opt[1] == 'label') {
          val = 'test_label'
        }
        break
      case 'delete':
        val = '127'
        break
      case 'extract':
      case 'get':
        val = '120'
        set_arf(opt[1])
        break
      default:
        val = ''
    }
    if (val != '') {
      document.tcform.sfg.value = val
      if (res.includes('-vv')) {
        document.getElementById('verbose2-chk').checked = true;
      } else if (res.includes('-v')) {
        document.getElementById('verbose-chk').checked = true
      } else {
        document.getElementById('verbose-chk').checked = false;
      }
      if (res.includes('-sparse')) {
        document.getElementById('sparse-chk').checked = true;
      }
      par()
    }
  }
  document.getElementById('year').innerHTML = new Date().getFullYear()
}

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback()
} else {
  document.addEventListener('DOMContentLoaded', callback)
}
