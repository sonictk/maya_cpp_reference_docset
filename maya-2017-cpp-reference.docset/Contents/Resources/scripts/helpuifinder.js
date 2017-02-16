(function () {
    if (typeof exec === "undefined" || typeof exec !== "function")
        return;
    $(window).on("topic-loaded", loader);

    function loader() {
        var msgDiv, msgBox, arrowImg;
        var uiFindBtns = document.querySelectorAll(".uifinderbtn");
        for (var i = 0; i < uiFindBtns.length; i++) {
            var uiFindBtn = uiFindBtns[i];
            var helpTopic = uiFindBtn.getAttribute("data-helptopic") || uiFindBtn.getAttribute("data-id");
            if (!helpTopic) continue;
            uiFindBtn.addEventListener("click", clickHandler, false);
        }

        function monitor(add) {
            if (add) {
                document.addEventListener("click", docClickHandler, false);
                document.addEventListener("contextmenu", docClickHandler, false);
                document.addEventListener("keydown", docClickHandler, true);
                window.addEventListener("resize", docClickHandler, false);
                window.addEventListener("blur", docClickHandler, false);
            }
            else {
                document.removeEventListener("click", docClickHandler, false);
                document.removeEventListener("contextmenu", docClickHandler, false);
                document.removeEventListener("keydown", docClickHandler, true);
                window.removeEventListener("resize", docClickHandler, false);
                window.removeEventListener("blur", docClickHandler, false);
            }
        }

        function docClickHandler(e) {
            monitor(false);
            if (msgDiv && msgDiv.style.visibility === "visible")
                msgDiv.style.visibility = "hidden";
            else
                help.Api.HelpFindUI("", false);
        }

        function clickHandler(e) {
            var btn = this;
            if (msgDiv && msgDiv.style.visibility === "visible") msgDiv.style.visibility = "hidden";
            var hasTopic = false;
            var helpTopic = btn.getAttribute("data-id");
            if (!helpTopic) {
                helpTopic = btn.getAttribute("data-helptopic");
                hasTopic = true;
            }
            var error = help.Api.HelpFindUI(helpTopic, hasTopic);
            if (error.length > 0)
                showMessage(error, btn);
            e.stopPropagation();
            monitor(true);
        }

        function showMessage(msg, btn) {
            if (!msgDiv) {
                msgDiv = document.createElement("div");
                msgDiv.setAttribute("style", "visibility:hidden;position:absolute;");
                arrowImg = document.createElement("span");
                arrowImg.setAttribute("style", "position:absolute;left:-10px;border-color:transparent rgb(143,143,143) transparent transparent;border-width:7px 10px 7px 0px;border-style:solid;height:0;width:0;display:block;");
                msgDiv.appendChild(arrowImg);
                msgBox = document.createElement("div");
                msgBox.setAttribute("style", "border-radius:4px;background-color:#FFF;border:1px solid #999;max-width:200px;padding:8px 8px 8px 10px;font-family:'Arial', Helvetica, sans-serif;color:#000;font-size:12px;box-shadow:3px 4px 4px rgba(0, 0, 0, 0.15);");
                msgDiv.appendChild(msgBox);
                document.body.appendChild(msgDiv);
            }
            var rect = btn.getBoundingClientRect();
            msgDiv.style.left = rect.right + pageXOffset + 10 + "px";
            msgBox.innerText = msg;
            var rectMsg = msgDiv.getBoundingClientRect();
            var msgHeight = rectMsg.height || rectMsg.bottom - rectMsg.top;
            msgDiv.style.top = (rect.bottom + rect.top - msgHeight) / 2 + pageYOffset + "px";
            arrowImg.style.top = msgHeight / 2 - 7 + "px";
            msgDiv.style.visibility = "visible";
        }
    }
})();