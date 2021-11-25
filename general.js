// For checking device
function checkDevice() {
    if (jQuery(window).innerWidth() >= 992) {
        jQuery("body").removeClass("mobile").addClass("desktop");
    } else {
        jQuery("body").removeClass("desktop").addClass("mobile");
    }
}

var flag;
function toggleNavbarMethod() {
    if (jQuery(window).innerWidth() >= 1200) {
        if (flag) {
            jQuery(".menu-navigation>li.has-megamenu .sub-menu-inner").removeAttr('style');
            jQuery(".menu-navigation>li.has-megamenu .sub-menu-wrapper").removeAttr('style');
            jQuery('body').removeClass('open-menu');
            jQuery('.menu-navigation>li.has-megamenu.expertise-submenu .sub-menu-wrapper .menu-links-block .sub-title .sub-menu-arrow').remove();
            jQuery('.main-nav .sub-menu-arrow, .menu-navigation>li.has-megamenu.expertise-submenu .sub-menu-wrapper .menu-links-block .sub-title, .menu-navigation>li.has-megamenu>a').removeClass('sub-menu-open');
            jQuery('.main-nav .nav-icon-mobo').removeClass('open-menu-bar');
            jQuery('li.has-megamenu').removeClass('active-mobile-menu');
            jQuery(".menu-navigation li").unbind("mouseenter mouseleave");
            jQuery(".menu-navigation>li.has-megamenu").unbind('click');
            jQuery(".menu-navigation>li.has-megamenu").on('mouseenter', function () {
                jQuery('.menu-navigation>li.has-megamenu').removeClass('active-nav');
                jQuery(this).addClass('active-nav');
                jQuery('body').addClass('active-nav');
            });
            jQuery(".menu-navigation>li.has-megamenu").on('mouseleave', function () {
                jQuery('.menu-navigation>li.has-megamenu').removeClass('active-nav');
                jQuery('body').removeClass('active-nav');
            });
        }
        flag = false;
    } else {
        if (!flag) {
            jQuery('.menu-navigation>li.has-megamenu').removeClass('active');
            jQuery(".menu-navigation>li.has-megamenu").unbind("mouseenter mouseleave");
            jQuery('.menu-navigation>li.has-megamenu.expertise-submenu .sub-menu-wrapper .menu-links-block .sub-title').append('<span class="sub-menu-arrow"></span>');
            jQuery(".menu-navigation>li.has-megamenu:first-child").find('.sub-menu-wrapper').slideDown();
            jQuery(".menu-navigation>li.has-megamenu:first-child>a").addClass('sub-menu-open');
            jQuery(".menu-navigation>li.has-megamenu>a").unbind('click').on('click', function (e) {
                var attr_href = jQuery(this).attr('href');
                if (attr_href == "javascript:void(0);") {
                    if (jQuery(this).siblings('.sub-menu-wrapper').is(':visible')) {
                        jQuery(this).siblings('.sub-menu-wrapper').slideUp();
                        jQuery(this).removeClass('sub-menu-open');
                    }
                    else {
                        jQuery(this).parents('.has-megamenu').siblings('.has-megamenu').find('.sub-menu-wrapper').slideUp();
                        jQuery(this).parents('.has-megamenu').siblings('.has-megamenu').find('a').removeClass('sub-menu-open');
                        jQuery(this).siblings('.sub-menu-wrapper').stop(true, true).slideDown();
                        jQuery(this).addClass('sub-menu-open');
                    }
                }
            });
            jQuery(".menu-navigation>li.has-megamenu>a .sub-menu-arrow,.menu-navigation>li.has-megamenu.expertise-submenu .sub-menu-wrapper .menu-links-block .sub-title").unbind('click').on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (jQuery(this).closest('a').siblings('.sub-menu-wrapper').is(':visible') || jQuery(this).siblings('.sub-menu-inner').is(':visible')) {
                    jQuery(this).siblings('.sub-menu-inner').slideUp();
                    jQuery(this).removeClass('sub-menu-open');
                    jQuery(this).closest('a').siblings('.sub-menu-wrapper').find('.sub-title').removeClass('sub-menu-open');
                    jQuery(this).closest('a').siblings('.sub-menu-wrapper').find('.sub-menu-inner').slideUp();
                    jQuery(this).closest('a').siblings('.sub-menu-wrapper').slideUp();
                    jQuery(this).closest('a').removeClass('sub-menu-open');
                }
                else {
                    jQuery(this).addClass('sub-menu-open');
                    jQuery(this).siblings('.sub-menu-inner').slideDown();
                    jQuery(this).closest('li').siblings('li').find('.sub-title').removeClass('sub-menu-open');
                    jQuery(this).closest('li').siblings('li').find('.sub-menu-inner').slideUp();
                    jQuery(this).closest('.has-megamenu').siblings('.has-megamenu').find('.sub-menu-wrapper').slideUp();
                    jQuery(this).closest('.has-megamenu').siblings('.has-megamenu').find('.sub-menu-wrapper').find('.sub-title').removeClass('sub-menu-open');
                    jQuery(this).closest('.has-megamenu').siblings('.has-megamenu').find('.sub-menu-wrapper').find('.sub-menu-inner').slideUp();
                    jQuery(this).closest('.has-megamenu').siblings('.has-megamenu').find('a').removeClass('sub-menu-open');
                    jQuery(this).closest('a').siblings('.sub-menu-wrapper').stop(true, true).slideDown();
                    jQuery(this).closest('a').addClass('sub-menu-open');
                }
            });
            flag = true;
        }
    }
}


jQuery(document).ready(function () {

    checkDevice();
    if (jQuery("body").hasClass("desktop")) {
        flag = true;
    }
    if (jQuery("body").hasClass("mobile")) {
        flag = false;
    }
    toggleNavbarMethod();

    jQuery('.nav-icon-mobo').click(function () {
        jQuery('body').toggleClass('open-menu');
        jQuery(this).toggleClass('open-menu-bar');
        jQuery('li.has-megamenu').removeClass('active-mobile-menu');
    });
});

jQuery(window).resize(function () {
    toggleNavbarMethod();
});