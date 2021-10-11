import {Sound1} from "./sound/sound1";
import {Sound2} from "./sound/sound2";
import {Texture1} from "./texture/texture1";
import {Texture2} from "./texture/texture2";
import {Punzer} from "./unit/punzer";
import {Military} from "./unit/military";

const sound1 = new Sound1();
const sound2 = new Sound2();

const texture1 = new Texture1();
const texture2 = new Texture2();

new Array(100).fill(new Punzer(texture1, sound1));

new Array(10000).fill(new Military(texture2, sound2));
