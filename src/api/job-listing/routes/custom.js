module.exports = {
    routes: [
        {
            method: "GET",
            path: "/job-listings/:slug",
            handler: "job-listing.findOne",
            config: {
                auth: false,
            },
        },
    ],
};
