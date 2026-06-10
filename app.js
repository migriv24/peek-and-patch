/* ════════════════════════════════════════════════════════════
   PEEK AND PATCH — renderer + hash router for System 37
   Reads window.STORY (story.js). Each node renders into one
   "window". Choices/links drive navigation via location.hash.
   Designed to grow toward point-and-click / visual-novel pages.
   ════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var STORY = window.STORY;
  var stage = document.getElementById("stage");

  /* total pages for the progress map, in narrative order */
  var ORDER = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"];

  /* tiny HTML escaper so story text can't break the DOM */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ── lexicon tagging engine ──
     Build one combined regex from window.LEXICON, each entry in its
     own capture group, so a single pass wraps every recognized term
     in a colored label without re-scanning inserted markup. */
  var LEX = window.LEXICON || [];
  var LEX_RE = LEX.length
    ? new RegExp(LEX.map(function (e) {
        return "(\\b(?:" + e.pattern + ")\\b)";
      }).join("|"), "gi")
    : null;

  function escAttr(s) { return String(s).replace(/"/g, "&quot;"); }

  function tagify(escaped) {
    if (!LEX_RE) return escaped;
    return escaped.replace(LEX_RE, function () {
      for (var i = 0; i < LEX.length; i++) {
        if (arguments[i + 1] != null) {
          var e = LEX[i];
          return '<span class="lx ' + e.cls + '" title="' +
                 escAttr(e.title) + '">' + arguments[i + 1] + "</span>";
        }
      }
      return arguments[0];
    });
  }

  /* escape + highlight recognized terms — used for all prose */
  function fmt(s) { return tagify(esc(s)); }

  /* ── render one content block ── */
  function renderBlock(b) {
    switch (b.t) {
      case "boot":
        return '<div class="b-boot">' + fmt(b.x) + "</div>";
      case "sys":
        return '<p class="b-sys">' + fmt(b.x) +
               ' <span class="blink">_</span></p>';
      case "p":
        return '<p class="b-p">' + fmt(b.x) + "</p>";
      case "lore":
        return '<div class="b-lore"><span class="tag">[!] CODEX</span>' +
               '<p>' + fmt(b.x) + "</p></div>";
      case "note":
        return '<aside class="b-note"><span class="qmark">[?] FOOTNOTE.exe</span>' +
               fmt(b.x) + "</aside>";
      case "rule":
        return '<p class="b-rule">' + fmt(b.x) + "</p>";
      case "beat":
        var solo = /^nothing\.?$/i.test(b.x.trim());
        return '<p class="b-beat' + (solo ? " solo" : "") + '">' +
               fmt(b.x) + "</p>";
      case "say":
        return '<div class="b-say">' +
               '<span class="say-name">' + esc(b.who) + "</span>" +
               '<span class="say-line">' + fmt(b.x) + "</span></div>";
      default:
        return "";
    }
  }

  /* ── progress map ribbon ── */
  function renderMap(currentId) {
    var dots = ORDER.map(function (id) {
      var n = STORY.nodes[id];
      var cls = "";
      if (id === currentId) cls += " on";
      if (n && n.end) cls += " end";
      return '<i class="' + cls.trim() + '" title="Page ' +
             id.slice(1) + '"></i>';
    }).join("");
    return '<div class="map">' + dots + "</div>";
  }

  /* ── footer navigation for a node ── */
  function renderNav(node, id) {
    if (node.choices) {
      var prompt = node.prompt
        ? '<p class="prompt">' + esc(node.prompt) + "</p>" : "";
      var btns = node.choices.map(function (c, i) {
        return '<button class="choice" data-go="' + esc(c.to) + '">' +
               esc(c.x) + "</button>";
      }).join("");
      return prompt + '<div class="choices">' + btns + "</div>";
    }
    if (node.next) {
      return '<div class="nextbar">' +
             '<button class="next-btn" data-go="' + esc(node.next.to) + '">' +
             esc(node.next.x) + "</button></div>";
    }
    if (node.end) {
      return '<div class="ending">' +
             '<div class="stamp">— ENDING —</div>' +
             '<div class="label">PATH RESULT: ' + esc(node.ending || "END") + "</div>" +
             '<div class="ending-actions">' +
               '<button class="next-btn" data-go="' + STORY.meta.start + '">RESTART</button>' +
             "</div></div>";
    }
    return "";
  }

  /* ── render a whole node into the stage ── */
  function renderNode(id) {
    var node = STORY.nodes[id];
    if (!node) { id = STORY.meta.start; node = STORY.nodes[id]; }

    document.body.setAttribute("data-theme", node.theme);

    var body = (node.blocks || []).map(renderBlock).join("");

    var html =
      '<article class="window fade">' +
        '<div class="titlebar">' +
          '<span class="tb-dots"><i></i><i></i><i></i></span>' +
          '<span class="tb-title">' + esc(STORY.meta.title) +
            " — " + esc(node.label) + "</span>" +
          '<span class="tb-x">×</span>' +
        "</div>" +
        '<div class="subbar">' +
          '<span class="region">' + esc(node.region || "THE DESKTOP") + "</span>" +
          "<span>" + esc(node.label) + " / 10</span>" +
        "</div>" +
        '<div class="win-body">' +
          body + renderNav(node, id) +
        "</div>" +
        '<div class="statusbar">' +
          "<span>SYSTEM 37 // beta</span>" +
          '<button class="sb-btn" data-restart>⟲ RESTART</button>' +
        "</div>" +
      "</article>" +
      renderMap(id);

    stage.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ── routing ── */
  function go(id) {
    if (location.hash === "#" + id) renderFromHash();
    else location.hash = id;          // triggers hashchange → render
  }

  function renderFromHash() {
    var id = (location.hash || "").replace(/^#/, "") || STORY.meta.start;
    renderNode(id);
  }

  /* click delegation for any [data-go] / restart button */
  stage.addEventListener("click", function (e) {
    var goBtn = e.target.closest("[data-go]");
    if (goBtn) { go(goBtn.getAttribute("data-go")); return; }
    if (e.target.closest("[data-restart]")) { go(STORY.meta.start); }
  });

  window.addEventListener("hashchange", renderFromHash);

  /* ── spawn floating pixel cubes ── */
  function spawnCubes() {
    var field = document.getElementById("cube-field");
    var n = 11;
    for (var i = 0; i < n; i++) {
      var c = document.createElement("div");
      c.className = "cube";
      var size = 24 + Math.random() * 70;
      c.style.width = size + "px";
      c.style.height = size + "px";
      c.style.left = Math.random() * 100 + "%";
      c.style.top = Math.random() * 100 + "%";
      c.style.setProperty("--d", (14 + Math.random() * 14) + "s");
      c.style.setProperty("--del", (-Math.random() * 12) + "s");
      c.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
      field.appendChild(c);
    }
  }

  spawnCubes();
  renderFromHash();
})();
