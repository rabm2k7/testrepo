/**
 * Created by alistair on 29/09/2014.
 * Revised 05/01/2015 - fixed error that caused a new event handler
 * to be added to 'close' buttons on each call, resulting in multiple
 * close-function calls.
 * Revised 17/01/2015 - fixed problem where the screen overlay did not
 * fade out if the popup was closed by clicking on the background.
 * Revised 21/02/2015 - fixed problem where greyed out background scrolled
 * with the page.
 */

$(document).bind('pageinit', function() {
    /*
        Here we need to initialize the whole popups subsystem.
        This means we need to load the pop-up page definitions 
        into the current page (which should be the main page) of
        the app.
        Because the whole <body> element must be in place before this
        code is executed, it is placed in $(document).ready().  It should not
        conflict with other $(document).ready() functions.
        ***THIS CODE MUST BE LINKED BEFORE ANY CODE THAT USES IT***
     */
    // Check if the code is already loaded...
    if($("#__popups__").length == 0) {
        var __blur = "<style>.__blur{filter:blur(3px);-webkit-filter:blur(3px)}</style>",
            __overlay = "<style> html, body {width:100%;height:100%;} #overlay-back {position:fixed;top:0;left:0;width:100%;" +
                "height:100%;background:#000;opacity:0.5;filter:alpha(opacity=50);z-index:5;display:none;}</style>" +
                "<div id='overlay-back'></div>",
            __popupalert = "<div data-role='popup' id='__jqm_popupAlert' data-theme='a' class='ui-content' data-position-to='window'>" +
                "<h1 id='__jqm_popup_alertHead'>Alert</h1>" +
                "<p id='__jqm_popup_alertText'>Sample Alert Text</p>" +
                "<a href='#' data-role='button' data-rel='back' data-icon='delete' data-iconpos='notext' class='ui-btn-right btn_close'></a>" +
                "</div>",
            __popupconfirm = "<div data-role='popup' id='__jqm_popupConfirm' data-theme='a' class='ui-content' data-position-to='window'>" +
                "<h1 id='__jqm_popup_confirmHead'>Confirm</h1>" +
                "<p id='__jqm_popup_confirmText'>Text text text text text</p>" +
                "<div data-role='navbar'><form>" +
                "<ul data-role='listview' data-inset='true'>" +
                "<li><a href='#' id='__jqm_popup_confirmOk' data-rel='back' data-role='button' class='btn_close'>Ok</a></li>" +
                "<li><a href='#' id='__jqm_popup_confirmCancel' data-rel='back' data-role='button' class='btn_close'>Cancel</a></li>" +
                "</ul></form></div></div>",
            __popupprompt = "<div data-role='popup' id='__jqm_popupPrompt' data-theme='a' class='ui-content' data-position-to='window'>" +
                "<form><h1 id='__jqm_popup_promptHead'>Prompt</h1><label id='__jqm_popup_promptLabel' for='__jqm_popup_promptText'>Label</label>" +
                "<textarea rows='5' cols='30' id='__jqm_popup_promptText'></textarea><div data-role='navbar'>" +
                "<ul data-role='listview' data-inset='true'><li><a href='#' id='__jqm_popup_promptOk' data-rel='back' data-role='button' class='btn_close'>Ok</a></li>" +
                "<li><a href='#' id='__jqm_popup_promptCancel' data-rel='back' data-role='button' class='btn_close'>Cancel</a></li></ul></div></form></div>",
			__popupbid = "<div data-role='popup' id='__jqm_popupBid' data-theme='a' class='ui-content' data-position-to='window'>" +
                "<form><h1 id='__jqm_popup_promptBid'>Prompt</h1>" +
                "<label for='sliderpointbid'>Bid Per Point (0.1) </label><input type='range' data-popup-enabled='true' name='sliderpointbid' id='sliderpointbid' value='1' min='1' max='10'>" +
				"<label for='timerSlider'>Timer</label><input type='range' data-popup-enabled='true' name='slidertime' id='slidertime' value='1' min='1' max='60'>"+
				"<table><tr><td style='padding:5px;'>Bid For</td><td style='padding:5px;'><input type='radio' name='bid' value='for'></td></tr><tr><td style='padding:5px;'>Bid Against</td><td style='padding:5px;'><input type='radio' name='bid' value='against'></td></tr><table>" +
				"<div data-role='navbar'>" +
                "<ul data-role='listview' data-inset='true'><li><a href='#' id='__jqm_popup_bidOk' data-rel='back' data-role='button' class='btn_close'>Ok</a></li>" +
                "<li><a href='#' id='__jqm_popup_bidCancel' data-rel='back' data-role='button' class='btn_close'>Cancel</a></li></ul></div></form></div>",
            __popuplogin = "<div data-role='popup' id='popupLogin' data-theme='a' class='ui-content' data-position-to='window'><h1>Log-In</h1>" +
                "<form><label for='userid'>User:</label><input type='text' size='30' id='userid'/><label for='passwordid'>Password:</label>" +
                "<input type='password' id='passwordid' size='20'/><div data-role='navbar'><ul data-role='listview' data-inset='true'>" +
                "<li><a href='#' id='okid' data-rel='back' data-role='button' class='btn_close'>Ok</a></li><li>" +
                "<a href='#' id='cancelid' data-rel='back' data-role='button' class='btn_close'>Cancel</a></li></ul></div></form></div>";

        // Append these to the current <body> element...
        $('body').append("<div id='__popups__'>" + __blur + __overlay + __popupalert + __popupconfirm + __popupprompt + __popupbid + __popuplogin + "</div>")
            .trigger("create");
	}
});

/**
 * Possible animation of blur feature.
 * This code can be used to generate a transition to a blur.
 * Need to investigate before proceeding.
 */
function blurPage(){
    $("div[data-role='page']")
        .css("filter", 'blur(3px)')
        .css("webkitFilter", 'blur(3px)')
        .css("mozFilter", 'blur(3px)')
        .css("oFilter", 'blur(3px)')
        .css("msFilter", 'blur(3px)')
        .css("transition", 'all 0.5s ease-out')
        .css("-webkit-transition", 'all 0.5s ease-out')
        .css("-moz-transition", 'all 0.5s ease-out')
        .css("-o-transition", 'all 0.5s ease-out');
}

function addBlur(){
    $("div[data-role='page']").addClass("__blur");
}

function removeBlur(){
    $("div[data-role='page']").removeClass("__blur");
}
function popupAlert(head, text) {
    setTimeout(function () {
        $("#__jqm_popup_alertHead").text(head);
        $("#__jqm_popup_alertText").text(text);
        //$('#overlay-back').fadeIn(500);
        addBlur();
        $("#__jqm_popupAlert").popup("open").on("popupafterclose", function(evt) {
            //$('#overlay-back').fadeOut(500);
            removeBlur();
        });
    });
}

function popupConfirm(head, text, yesFunction, noFunction) {
    setTimeout(function () {
        $("#__jqm_popup_confirmHead").text(head);
        $("#__jqm_popup_confirmText").text(text);
        if(yesFunction) {
            $("#__jqm_popup_confirmOk").bind('click', function(evt) {
                yesFunction();
                $(evt.target).off('click');
            });
        }
        if(noFunction) {
            $("#__jqm_popup_confirmCancel").bind('click', function(evt) {
                noFunction();
                $(evt.target).off('click');
            });
        }
        //$('#overlay-back').fadeIn(500);
        addBlur();
        $("#__jqm_popupConfirm").popup("open").on("popupafterclose", function(evt) {
            //$('#overlay-back').fadeOut(500);
            removeBlur();
        });
    }, 10);
}

/**
 * Possible refactor - use an object to allow modification of parameters and access to last
 * response.  This will be done in the next major upgrade of this code.
 *
var confirm = {
    call: function (head, text, yesFunction, noFunction) {
        $("#__jqm_popup_confirmHead").text(head);
        $("#__jqm_popup_confirmText").text(text);
        if (yesFunction) {
            $("#__jqm_popup_confirmOk").bind('click', yesFunction);
        }
        if (noFunction) {
            $("#__jqm_popup_confirmCancel").bind('click', noFunction);
        }
        $("#__jqm_popupConfirm").popup("open");
    },
    response: undefined,
    get: function () {
        return this.response;
    }
};
 */

function popupPrompt(head, prompt, okFunction, cancelFunction) {
    setTimeout(function() {
        $("#__jqm_popup_promptHead").text(head);
        $("#__jqm_popup_promptLabel").text(prompt);
        $("#__jqm_popup_promptText").val("");
        if(okFunction) {
            $("#__jqm_popup_promptOk").on('click', function (evt) {
                okFunction();
                $(evt.target).off('click');
            });
        }
        if(cancelFunction) {
            $("#__jqm_popup_promptCancel").on('click', function(evt) {
                cancelFunction();
                $(evt.target).off('click');
            });
        }
        //$('#overlay-back').fadeIn(500);
        addBlur();
        $("#__jqm_popupPrompt").popup("open").on("popupafterclose", function(evt) {
            //$('#overlay-back').fadeOut(500);
            removeBlur();
        });
        $("#__jqm_popup_promptText").focus();
    }, 10);
}

function getPromptValue() {
    return $("#__jqm_popup_promptText").val();
}


function popupLogin(okFunction, cancelFunction) {
    setTimeout(function() {
        $("#userid").val("");
        $("#passwordid").val("");
        if(okFunction) {
            $("#okid").off('click').on('click', function(evt) {
                okFunction();
                $(evt.target).off('click');
            });
        }
        if(cancelFunction) {
            $("#cancelid").off('click').on('click', function(evt) {
                cancelFunction();
                $(evt.target).off('click');
            });
        }
        //$('#overlay-back').fadeIn(500);
        addBlur();
        $("#popupLogin").popup("open").on("popupafterclose", function(evt) {
            //$('#overlay-back').fadeOut(500);
            removeBlur();
        });
        $("#userid").focus();
    });
}

function getLoginValues() {
    return {
        user: $("#userid").val(),
        password: $("#passwordid").val()
    };
}

function popupBid(head, okFunction, cancelFunction) {
    setTimeout(function() {
        $("#__jqm_popup_promptBid").text(head);
        if(okFunction) {
            $("#__jqm_popup_bidOk").on('click', function (evt) {
                okFunction();
                $(evt.target).off('click');
            });
        }
        if(cancelFunction) {
            $("#__jqm_popup_bidCancel").on('click', function(evt) {
                cancelFunction();
                $(evt.target).off('click');
            });
        }
        //$('#overlay-back').fadeIn(500);
        addBlur();
        $("#__jqm_popupBid").popup("open").on("popupafterclose", function(evt) {
            //$('#overlay-back').fadeOut(500);
            removeBlur();
        });
        $("#__jqm_popup_promptText").focus();
    }, 10);
}

function getSliderValues() {
    return {
        bidperpoint: $("#sliderpointbid").val(),
        tradetime: $("#slidertime").val(),
		bidtype: $('input[name="bid"]:checked').val(),
    };
}