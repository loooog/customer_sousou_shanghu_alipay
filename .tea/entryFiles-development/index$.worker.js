require('./config$');

function success() {
require('../..//app');
require('../../pages/index/index');
require('../../pages/put-forward/put-forward');
require('../../pages/login/login');
require('../../pages/user/user');
require('../../pages/news/news');
require('../../pages/take-list/take-list');
require('../../pages/receive-list/receive-list');
require('../../pages/invitation/invitation');
require('../../pages/help/help');
require('../../pages/help-list/help-list');
require('../../pages/query/query');
require('../../pages/take-detail/take-detail');
require('../../pages/receive-detail/receive-detail');
require('../../pages/put-forward-list/put-forward-list');
require('../../pages/member/member');
require('../../pages/fund-list/fund-list');
require('../../pages/user-detail/user-detail');
require('../../pages/contract/contract');
require('../../pages/scan/scan');
require('../../pages/scan-detail/scan-detail');
require('../../pages/user-search/user-search');
require('../../pages/audit/audit');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
