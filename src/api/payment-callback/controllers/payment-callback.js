"use strict";

/**
 * payment-callback controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::payment-callback.payment-callback",
  ({ strapi }) => ({
    async create(params) {
      let request = params.request.body;
      let tampung = {
        data: {
          history: request,
        },
      };
      console.log(tampung);

      let dataUpdate = {};

      const check_data = await strapi
        .service("api::payment-callback.payment-callback")
        .find(tampung.data.history.order_id);
      if (check_data.pagination.total == 0) {
        await strapi
          .service("api::payment-callback.payment-callback")
          .create(tampung);
      } else {
        await strapi
          .service("api::payment-callback.payment-callback")
          .update(check_data.results[0].id, tampung);
      }

      if (tampung.data.history.transaction_status == "settlement") {
        dataUpdate = {
          data: {
            status_order: "success_payment",
          },
        };
      } else {
        dataUpdate = {
          data: {
            status_order: "error_payment",
          },
        };
      }

      await strapi
        .service("api::order.order")
        .update(tampung.data.history.order_id, dataUpdate);

      return tampung;
    },
  })
);
