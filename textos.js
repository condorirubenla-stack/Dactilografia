const lecciones = [
`asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj
asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj
asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj
asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj
asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj asdf ñlkj`,
`asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj
asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj
asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj
asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj
asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj asdfgf ñlkjhj`,
`asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ
asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ
asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ
asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ
asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ asdfgfdsa ñlkjhjklñ`,
`asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl
asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl
asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl
asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl
asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl asdf hjkl`,
`gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ
gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ
gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ
gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ
gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ gfdsa hjklñ`,
`qwer poiu qwer poiu qwer poiu qwer poiu qwer poiu
qwer poiu qwer poiu qwer poiu qwer poiu qwer poiu
qwer poiu qwer poiu qwer poiu qwer poiu qwer poiu
qwer poiu qwer poiu qwer poiu qwer poiu qwer poiu
qwer poiu qwer poiu qwer poiu qwer poiu qwer poiu`,
`qwert poiu qwert poiu qwert poiu qwert poiu qwert poiu
qwert poiu qwert poiu qwert poiu qwert poiu qwert poiu
qwert poiu qwert poiu qwert poiu qwert poiu qwert poiu
qwert poiu qwert poiu qwert poiu qwert poiu qwert poiu
qwert poiu qwert poiu qwert poiu qwert poiu qwert poiu`,
`qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop
qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop
qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop
qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop
qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop qwertrewq poiuyuiop`,
`qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj
qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj
qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj
qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj
qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj qwer asdf poiu ñlkj`,
`trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ
trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ
trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ
trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ
trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ trewq asdfg yuiop hjklñ`,
`zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.-
zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.-
zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.-
zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.-
zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.- zxcv ,.-`,
`zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.-
zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.-
zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.-
zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.-
zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.- zxcvb m,.-`,
`zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.-
zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.-
zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.-
zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.-
zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.- zxcvbnm ,.-`,
`zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj
zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj
zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj
zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj
zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj zxcv asdf ,.- ñlkj`,
`bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ
bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ
bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ
bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ
bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ bvcxz gfdsa m,.- hjklñ`,
`87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550
87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550
87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550
87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550
87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550 87703478 23050550`,
`DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA
DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA
DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA
DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA
DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA DDGAFDHS SKSÑLÑSA`,
`OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT
OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT
OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT
OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT
OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT OPYEQUIU WRTUTWUT`,
`adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk
adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk
adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk
adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk
adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk adadlñaj lkfsñhkk`,
`uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew
uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew
uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew
uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew
uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew uuuueppw tooryuew`,
`bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn,
bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn,
bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn,
bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn,
bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn, bmxmzv-, bc-vvnn,`,
`03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257
03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257
03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257
03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257
03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257 03086544 27027257`,
`ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS
ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS
ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS
ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS
ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS ÑGJÑADSJ HSGHAHHS`,
`PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI
PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI
PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI
PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI
PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI PTWQYEQI ORPPYYPI`,
`hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd
hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd
hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd
hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd
hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd hdñffajh fñhdshdd`,
`tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy
tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy
tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy
tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy
tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy tqroeoyo teeqroyy`,
`cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m
cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m
cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m
cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m
cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m cnnvbcm. .cvn.x,m`,
`40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438
40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438
40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438
40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438
40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438 40790535 15807438`,
`GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH
GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH
GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH
GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH
GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH GFGFLHÑK HSDFFDJH`,
`PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW
PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW
PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW
PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW
PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW PEQIYTPU IEEWRRIW`,
`gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs
gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs
gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs
gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs
gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs gñhhklls dfgsñfhs`,
`oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt
oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt
oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt
oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt
oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt oquptuwt rpyuuprt`,
`b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc
b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc
b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc
b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc
b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc b.vzmx,z b-x-b-zc`,
`06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427
06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427
06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427
06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427
06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427 06196167 02469427`,
`JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG
JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG
JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG
JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG
JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG JAJGGALÑ LÑÑDGSLG`,
`TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE
TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE
TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE
TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE
TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE TUQRYQPQ OIYERTPE`,
`aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ
aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ
aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ
aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ
aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ aadañgñj hlgsjkgñ`,
`wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet
wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet
wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet
wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet
wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet wiotqpor yeiwuoet`,
`,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x
,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x
,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x
,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x
,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x ,ncv-zbx ,,vm.z-x`,
`98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158
98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158
98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158
98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158
98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158 98593761 60709158`,
`FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG
FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG
FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG
FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG
FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG FDGSASDH AJHHGDJG`,
`EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ
EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ
EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ
EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ
EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ EOUIURRT RRTIQQTQ`,
`hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk
hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk
hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk
hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk
hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk hjñlgkdñ gssjshfk`,
`pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy
pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy
pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy
pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy
pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy pqyqrete wyryrupy`,
`ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx
ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx
ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx
ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx
ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx ccbz.vxc nvccvmzx`,
`36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573
36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573
36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573
36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573
36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573 36367731 19308573`,
`GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD
GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD
GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD
GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD
GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD GSKFÑHKS DÑAHAGGD`,
`TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE
TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE
TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE
TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE
TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE TQOTEIEY IROPRRQE`,
`jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf
jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf
jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf
jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf
jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf jhñkgdlñ fajhjjjf`,
`pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop
pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop
pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop
pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop
pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop pyeitpeq uqyiowop`,
`n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x
n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x
n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x
n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x
n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x n--xz-.- -bbb-z-x`,
`22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770
22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770
22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770
22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770
22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770 22103262 73087770`,
`ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ
ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ
ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ
ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ
ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ ÑHDJJDLS JLJSFÑLJ`,
`PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU
PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU
PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU
PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU
PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU PQWOYEEY OIQTPTIU`,
`lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj
lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj
lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj
lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj
lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj lhghahhj alhlñsñj`,
`epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp
epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp
epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp
epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp
epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp epiwuqww iryeutqp`,
`,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x
,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x
,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x
,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x
,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x ,v.xxcmc cnv.z-,x`,
`48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959
48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959
48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959
48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959
48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959 48142306 86701959`,
`GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ
GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ
GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ
GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ
GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ GASLFGJD AJJKDHKÑ`,
`PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW
PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW
PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW
PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW
PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW PQWWWQQT TOYTOTPW`,
`jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa
jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa
jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa
jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa
jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa jlgfshhh dlkñkssa`,
`ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee
ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee
ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee
ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee
ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee ortrtowy oittpqee`,
`-xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc
-xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc
-xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc
-xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc
-xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc -xnvz.xz ,xb,ncmc`,
`57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267
57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267
57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267
57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267
57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267 57547593 42168267`,
`ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ
ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ
ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ
ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ
ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ ÑALÑDJLF FÑHLJDÑJ`,
`QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO
QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO
QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO
QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO
QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO QWEOOURR UPEIEIUO`,
`djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg
djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg
djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg
djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg
djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg djkñjaah fakkhfgg`,
`wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu
wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu
wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu
wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu
wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu wuwqeyyy iwpoiiyu`,
`mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn
mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn
mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn
mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn
mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn mb.xm.m- mz.bzbxn`,
`88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064
88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064
88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064
88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064
88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064 88844830 06394064`,
`JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD
JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD
JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD
JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD
JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD JFLLHHKJ LFÑASAHD`,
`PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE
PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE
PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE
PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE
PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE PWPWQROU OTOIQOPE`,
`sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ
sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ
sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ
sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ
sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ sñsdglsa ññfkñhhñ`,
`uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw
uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw
uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw
uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw
uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw uqoretoi wqppwtpw`,
`-m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.-
-m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.-
-m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.-
-m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.-
-m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.- -m,z,nmb .v.--x.-`,
`El Estado Plurinacional de Bolivia es un país situado en el centro-oeste de América del Sur. Cuenta con una gran diversidad geográfica y cultural, abarcando desde la cordillera de los Andes hasta la Amazonía.`,
`El departamento de Santa Cruz es el más extenso y poblado de Bolivia. Es conocido como el motor económico del país, destacando por su producción agrícola, ganadera e industrial, así como por su clima cálido.`,
`La provincia Chiquitos es una de las quince provincias del departamento de Santa Cruz. Su capital es San José de Chiquitos, y es famosa por albergar parte de las misiones jesuíticas y un paisaje espectacular.`,
`El municipio de Pailón es considerado la 'Primera Puerta de la Gran Chiquitania'. Se encuentra ubicado en la provincia Chiquitos y es un importante centro agrícola, destacando por sus extensos cultivos de soya y girasol.`,
`Pailón se caracteriza por su gente trabajadora y su rápido crecimiento. El puente que cruza el Río Grande es un punto clave que conecta a Pailón con la ciudad de Santa Cruz de la Sierra y el resto del occidente boliviano.`,
`El CEA Herman Ortiz Camargo es una institución educativa comprometida con la formación integral de jóvenes y adultos en el municipio de Pailón. Su labor es fundamental para el desarrollo humano de la región chiquitana.`,
`A través del CEA Herman Ortiz Camargo, muchos estudiantes logran adquirir habilidades técnicas y humanísticas. Esta institución se ha convertido en un pilar de la educación alternativa y de la capacitación profesional.`,
`El profesor Herman Ortiz Camargo dejó un legado imborrable en la educación de la zona. El centro que lleva su nombre honra su dedicación y esfuerzo continuo por brindar oportunidades de aprendizaje a todos por igual.`,
`EduConnectRuben es una iniciativa innovadora enfocada en la integración de la tecnología y la educación. Busca potenciar el aprendizaje mediante el uso de herramientas digitales modernas y accesibles para los estudiantes.`,
`Con el apoyo de proyectos como EduConnectRuben, la enseñanza en lugares como Pailón da un salto hacia el futuro. Los estudiantes aprenden mecanografía, informática y habilidades digitales indispensables en la actualidad.`,
`Aprender mecanografía computarizada es un paso esencial para cualquier estudiante. Nos permite escribir con mayor rapidez, precisión y eficiencia, abriendo puertas a nuevas oportunidades laborales y académicas.`,
`En Santa Cruz y toda Bolivia, la educación técnica es una herramienta poderosa. Permite que jóvenes y adultos de diversas comunidades puedan emprender, mejorar sus ingresos y contribuir al progreso de su municipio.`,
`La región de la Chiquitania no solo es rica en cultura e historia, sino que también tiene un enorme potencial humano. La capacitación constante es la llave para aprovechar los recursos y construir un futuro próspero.`,
`Cada tecla que presionamos al practicar nos acerca más a dominar la computadora. En el CEA Herman Ortiz Camargo, la práctica constante y la perseverancia son valores fundamentales para alcanzar el éxito profesional.`,
`Invitamos a todos los estudiantes de Pailón y de la provincia Chiquitos a seguir aprendiendo. El conocimiento es el único tesoro que nadie nos puede quitar y que crece cada vez que lo compartimos con los demás.`
,
  "La mecanografía no solo mejora la velocidad al escribir, sino que también estimula la coordinación motriz y la concentración. En Pailón, los estudiantes están descubriendo cómo esta habilidad transforma su manera de trabajar y aprender.",
  "Cada día, los profesores del CEA Herman Ortiz Camargo dedican su tiempo a enseñar con paciencia y dedicación. Ellos saben que la educación es la herramienta más poderosa para cambiar el mundo y mejorar la vida de las personas.",
  "El desarrollo tecnológico en Santa Cruz ha impulsado a muchas comunidades a modernizarse. Hoy en día, saber manejar una computadora es tan importante como saber leer y escribir, abriendo puertas a empleos en todo el país.",
  "EduConnectRuben se enfoca en crear soluciones educativas que se adapten a la realidad de cada estudiante. Con un enfoque práctico y ameno, busca que el aprendizaje de la informática sea una experiencia positiva y enriquecedora.",
  "La provincia Chiquitos es rica en historia, pero también en futuro. Sus jóvenes, armados con conocimiento tecnológico, están listos para llevar el desarrollo a sus hogares y convertirse en líderes dentro de sus propias comunidades.",
  "Practicar al menos veinte minutos diarios de mecanografía garantiza resultados notables en pocas semanas. La memoria muscular se desarrolla gradualmente hasta que los dedos encuentran las teclas de forma completamente automática.",
  "La perseverancia es la clave del éxito. Al principio, escribir sin mirar el teclado puede parecer un desafío imposible, pero con cada lección superada, la confianza aumenta y la velocidad fluye de manera natural.",
  "En un mundo hiperconectado, la comunicación escrita digital es la forma principal de interacción. Dominar el teclado nos permite expresar nuestras ideas con claridad y rapidez, sin que la tecnología sea un obstáculo.",
  "El municipio de Pailón es un ejemplo de progreso y superación constante. Las iniciativas educativas que aquí se desarrollan son un modelo a seguir para otras regiones que buscan fortalecer la educación técnica alternativa.",
  "Felicitaciones por llegar a este nivel avanzado de mecanografía. Has demostrado disciplina y constancia. Sigue perfeccionando tu técnica y recuerda que el conocimiento adquirido hoy será tu mayor ventaja el día de mañana."
];

const examenes = [
`El municipio de Pailón, conocido como la Primera Puerta de la Gran Chiquitania, es un centro neurálgico de la producción agrícola en Santa Cruz. Su desarrollo es un ejemplo del empuje de la región oriental de Bolivia.`,
`El CEA Herman Ortiz Camargo brinda educación de calidad a jóvenes y adultos en Pailón. Instituciones como esta son vitales para garantizar que toda la población tenga acceso a oportunidades de formación técnica.`,
`Gracias a iniciativas tecnológicas como EduConnectRuben, los estudiantes bolivianos pueden familiarizarse con el uso de herramientas digitales avanzadas, preparándose para los grandes desafíos del mundo laboral moderno.`,
`La mecanografía es fundamental para interactuar con fluidez en el entorno digital. Un buen dominio del teclado incrementa significativamente la productividad tanto en el ámbito educativo como en el profesional.`
];

const textosGrandes = [
`El departamento de Santa Cruz es el motor económico de Bolivia. Ubicado en el corazón de Sudamérica, su vasto territorio abarca llanuras, selvas amazónicas y la región de la Chiquitania. Dentro de este departamento, la provincia Chiquitos destaca por su rica historia, sus impresionantes misiones jesuíticas y su enorme potencial agropecuario. El municipio de Pailón, situado a orillas del Río Grande, es conocido como la Primera Puerta de la Gran Chiquitania y es un símbolo del trabajo constante de su gente, con grandes extensiones de cultivos de soya, sorgo y girasol que impulsan la economía local y nacional.`,
`La educación es el pilar del desarrollo de cualquier municipio, y en Pailón, el Centro de Educación Alternativa (CEA) Herman Ortiz Camargo juega un rol insustituible. Esta noble institución se dedica a la formación de jóvenes y adultos, brindándoles herramientas técnicas y humanísticas que les permiten acceder a mejores oportunidades laborales. El nombre del centro rinde homenaje al profesor Herman Ortiz Camargo, cuyo legado de servicio y vocación educadora sigue inspirando a las nuevas generaciones a superarse día a día mediante el estudio y la capacitación técnica.`,
`En la era de la información, el manejo fluido de las computadoras es una habilidad obligatoria. Proyectos educativos como EduConnectRuben nacen con la visión de cerrar la brecha digital y acercar la tecnología a todos los estudiantes. A través de la enseñanza de mecanografía computarizada y ofimática, EduConnectRuben busca empoderar a los alumnos del CEA Herman Ortiz Camargo y de toda la provincia Chiquitos, dotándolos de las competencias necesarias para triunfar en un mundo globalizado y cada vez más competitivo.`
];
