/**
 * case-study controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::case-study.case-study",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;

            const caseStudy = await strapi.entityService.findMany(
                "api::case-study.case-study",
                {
                    filters: { slug: id },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singleCaseStudy = caseStudy[0]; // safely extract it

            if (!singleCaseStudy) {
                return ctx.notFound("Case study not found");
            }

            const sanitized = await this.sanitizeOutput(singleCaseStudy, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
