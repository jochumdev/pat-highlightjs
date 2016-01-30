(function (root, factory) {
    // We use AMD (Asynchronous Module Definition) or browser globals to create
    // this module.
    if (typeof define === 'function' && define.amd) {
        define([
            "jquery",
            "pat-base",
            "pat-logger",
            "hljs"
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        // If require.js is not available, you'll need to make sure that these
        // global variables are available.
        factory($, patterns.Base, patterns.logger, hljs);
    }
}(this, function($, Base, logger, hljs) {
    'use strict';

    var log = logger.getLogger("pat-highlightjs");
    /* For logging, you can call log.debug, log.info, log.warn, log.error and log.fatal.
     *
     * For more information on how to use the logger and how to view log messages, please read:
     * https://github.com/Patternslib/logging
     */
    log.debug("pattern loaded");

    return Base.extend({
        /* The name is used to store the pattern in a registry and needs to be
         * unique.
         */
        name: 'highlightjs',
        /* The trigger specifies the selector (CSS or jQuery) which Patternslib
         * will scan for in order to identifiy and initialize this pattern.
         */
        trigger: "pre",

        init: function($el, opts, trigger) {
            var code = $el.children("code").get(0)
            // Skip this <pre> element if it doesn't got a <code> element.
            if (!code) {
                return;
            }

            hljs.highlightBlock(code);

            log.debug("pattern initialized");
        }
    });
}));
