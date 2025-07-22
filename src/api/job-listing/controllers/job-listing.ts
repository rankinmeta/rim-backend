/**
 * job-listing controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::job-listing.job-listing",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;

            const job = await strapi.entityService.findMany(
                "api::job-listing.job-listing",
                {
                    filters: { slug: id },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singleJob = job[0]; // safely extract it

            if (!singleJob) {
                return ctx.notFound("Job not found");
            }

            const sanitized = await this.sanitizeOutput(singleJob, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
