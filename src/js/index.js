import 'wicg-inert';
import 'what-input';
import { defocusButton } from './modules/defocus-button.js';
import { initPhoneMask } from './modules/init-phone-mask.js';
import { initPhoneHref } from './modules/init-phone-href.js';
import { initMenu } from './modules/init-burger-menu.js';
import { initSettingTabs } from './modules/init-setting-tabs.js';
import { avatarChoser } from './modules/avatar-choser.js';
import { initSettingForm } from './modules/sendFormSetting.js';


defocusButton();
initPhoneHref();
initPhoneMask();
initMenu();
initSettingTabs();
avatarChoser();
initSettingForm();
