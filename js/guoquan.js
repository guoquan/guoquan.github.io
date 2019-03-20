/* global jQuery */ ;
(function($) {
  "use strict";

  // config
  const jrnl_json = "pub/journal.json";
  const jrnl_bib_path = "pub/jrnl";
  const csl_style = "pub/csl/ieee-modified.csl";
  const jrnl_node = "#publicaton-list";

  function dress_up(html) {
    const regex_name = /(Q\. Guo)/g;
    const regex_name_cn = /(郭泉)/g;
    const regex_doi = /\(DOI: (.*)\)/g;
    const regex_url = /\(URL: (.*)\)/g;
    html = html.replace(regex_name, "<strong>Quan Guo</strong>");
    html = html.replace(regex_name_cn, "<strong>$1</strong>");
    html = html.replace(regex_doi, " <span class=\"doi\"><a href=\"https://dx.doi.org/$1\">DOI $1</a>.</span>");
    html = html.replace(regex_url, " <span class=\"url\"><a href=\"$1\">Link</a>.</span>");
    return html;
  };

  // DOM loaded
  $(function() {
    var b = $(".sidebar nav");
    var e = 20; // .sidebar nav.affix { top: 10px }
    b.affix({
      offset: {
        top: function() {
          var c = b.offset().top,
            d = parseInt(b.css("margin-top"), 10);
          return this.top = c - d - e;
        },
        bottom: function() {
          return this.bottom = $("footer").outerHeight(!0);
        }
      }
    });

    $("body").scrollspy({
      target: ".sidebar"
    });

    ScrollUp.init(".scrollup", {
      scrollDistance: $("header").height()
    });

    $(jrnl_node).makebib(jrnl_json, jrnl_bib_path, {
      csl_style: csl_style,
      dress_up: dress_up,
      overwrite: true,
      done: function() {
        console.debug(this.prop("last_modified"));
        $("#last-updated").html(this.prop("last_modified").toLocaleDateString("EN", {
          timeZone: "Asia/Shanghai"
        }));
      }
    });

    $("a.email-addr").each(function(){
      // consider this tool to go advanced
      // http://rumkin.com/tools/mailto_encoder/custom.php
      var local = $(this).children(".email-addr-local").html();
      var domain = $(this).children(".email-addr-domain").html();
      $(this).html(local + " (at) " + domain);
      $(this).click(false);
      $(this).on("mouseenter", function(){
        $(this).attr("href", "mailto:"+local+"@"+domain);
        $(this).off("click", false);
      });
      $(this).on("mouseleave", function(){
        $(this).attr("href", null);
        $(this).click(false);
      });
    });
  });

})(jQuery);
