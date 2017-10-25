/* eslint-disable react/no-danger */
import React, { Component } from "react";
import { renderStatic } from "glamor/server";
//
import withCssLoader from "react-static/lib/plugins/withCssLoader";
import withFileLoader from "react-static/lib/plugins/withFileLoader";

export default {
  siteRoot: "http://heatherallard.ca",
  getRoutes: async () => [
    {
      path: "/",
      component: "src/containers/Home"
    },
    {
      is404: true,
      component: "src/containers/Home"
    }
  ],
  postRenderMeta: async html => ({
    glamorousData: renderStatic(() => html)
  }),
  getSiteProps: async ({ dev }) => ({ dev }),
  Html: class CustomHtml extends Component {
    render() {
      const {
        Html,
        Head,
        Body,
        children,
        staticMeta: { glamorousData: { css } = {} } = {}
      } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <style dangerouslySetInnerHTML={{ __html: css }} />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  webpack: [
    config => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      });
      return config;
    },
    withFileLoader,
    withCssLoader
  ]
};
