/**
 * Created by Ranshaw on 2017/8/24.
 */
'use strict';

const { refreshWx } = require('./router/weixin/');
const schedule      = require('node-schedule');



module.exports = function () {
  let rule = new schedule.RecurrenceRule();

  	rule.minute = 20;

  schedule.scheduleJob(rule, function(){

	refreshWx();
	console.log('初始化数据中...')

  });
  refreshWx();
};

