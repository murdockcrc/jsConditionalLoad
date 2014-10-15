//Conditional loading of Intl.js, as Safari DOES NOT include this library
$(function () {
    if (!window.Intl) {
        $.getScript('/js/localization/Intl/Intl.min.js'); //Path to Intl.min.js file
        //Include localization files that are needed. In this case, I am including German localization files. These are included in Intl.js source code.
        $.getScript('/js/localization/Intl/de.js');
        $.getScript('/js/localization/Intl/de-DE.js');
    }
});
