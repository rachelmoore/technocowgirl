import server from "@frontity/core/src/server";
import techno_chakra_default from "techno-chakra/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__google_analytics_default from "@frontity/google-analytics/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import frontity__wp_comments_default from "@frontity/wp-comments/src/index";

const packages = {
  techno_chakra_default,
  frontity__wp_source_default,
  frontity__google_analytics_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  frontity__wp_comments_default,
};

export default server({ packages });

