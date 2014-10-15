//Conditional loading of Intl.js, as Safari DOES NOT include this library
$(function () {
    if (!window.Intl) {
        $.getScript('/js/localization/Intl/Intl.min.js');
        $.getScript('/js/localization/Intl/de.js');
        $.getScript('/js/localization/Intl/de-DE.js');
    }
});