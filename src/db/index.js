/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description db
 */

'use strict';

// 绑定实体关系
require('./associations');

module.exports.sequelize = require('./instance');
