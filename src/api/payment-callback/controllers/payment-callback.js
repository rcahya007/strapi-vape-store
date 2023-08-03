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

      let updateOrder = await strapi
        .service("api::order.order")
        .update(tampung.data.history.order_id, dataUpdate);

      // @ts-ignore
      const result = await strapi
        .service("api::payment-callback.payment-callback")
        .create(tampung);
    },
  })
);
