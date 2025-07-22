/**
 * service controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::service.service",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;

            const service = await strapi.entityService.findMany(
                "api::service.service",
                {
                    filters: { slug: id },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singleService = service[0]; // safely extract it

            if (!singleService) {
                return ctx.notFound("Service not found");
            }

            const sanitized = await this.sanitizeOutput(singleService, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
