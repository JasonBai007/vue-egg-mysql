"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const base = "/api/v1/";
  router.get(`${base}getList`, controller.list.index);
  router.post(`${base}add`, controller.list.create);
  router.post(`${base}edit/:id`, controller.list.update);
  router.delete(`${base}delete/:id`, controller.list.delete);
};
