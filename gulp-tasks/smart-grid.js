"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "0.9375rem" // side fields - 15px
        },
        breakPoints: {
            xs: {
                width: "375px" // 375px
            },
            sm: {
                width: "600px" // 600px
            },
            md: {
                width: "768px" // 768px
            },
            lg: {
                width: "992px" // 992px
            },
            xl: {
                width: "1340px" // 1240px
            }
        }
    });
    cb();
});
