"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const base = "/api/v1/";
  router.get(`${base}getList`, controller.list.index);
};
