import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homePage",
        label: "ホームページ",
        path: "content/pages",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: (props) => {
            return "/";
          },
        },
        fields: [
          {
            name: "title",
            label: "タイトル",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "hero",
            label: "Hero",
            type: "object",
            fields: [
              {
                type: "string",
                name: "title",
                label: "タイトル",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "サブタイトル",
              },
              {
                type: "image",
                name: "image",
                label: "画像",
              },
              {
                type: "string",
                name: "video",
                label: "動画",
              },
              {
                type: "object",
                name: "link",
                label: "リンク",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "タイトル",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                  {
                    type: "string",
                    name: "style",
                    label: "スタイル",
                    options: ["primary", "secondary"],
                    required: true,
                  },
                ],
                ui: {
                  itemProps(item) {
                    return {
                      label: item.title,
                    };
                  },
                  defaultItem: {
                    style: "primary",
                  },
                },
              },
            ],
          },
          {
            name: "news",
            label: "ニュース",
            type: "object",
            list: true,
            fields: [
              {
                type: "reference",
                name: "article",
                label: "記事",
                collections: ["news"],
                searchable: true,
              },
            ],
            ui: {
              visualSelector: true,
            },
          },
          {
            name: "blocks",
            label: "特徴",
            type: "object",
            list: true,
            templates: [
              {
                name: "feature",
                label: "特徴",
                fields: [
                  {
                    name: "title",
                    label: "タイトル",
                    type: "string",
                    required: true,
                  },
                  { name: "subtitle", label: "サブタイトル", type: "string" },
                  { name: "catch", label: "キャッチ", type: "string" },
                  { name: "body", label: "本文", type: "rich-text" },
                  {
                    type: "object",
                    name: "link",
                    label: "リンク",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "タイトル",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                      {
                        type: "string",
                        name: "style",
                        label: "スタイル",
                        options: ["primary", "secondary"],
                        required: true,
                      },
                    ],
                    ui: {
                      itemProps(item) {
                        return {
                          label: item.title,
                        };
                      },
                      defaultItem: {
                        style: "primary",
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            name: "carousel",
            label: "カルーセル",
            type: "object",
            fields: [
              { name: "image", label: "画像", type: "image", list: true },
            ],
          },
          {
            name: "features",
            label: "特徴",
            type: "object",
            list: true,
            templates: [
              {
                name: "linkFeature",
                label: "リンク付き",
                fields: [
                  {
                    name: "title",
                    label: "タイトル",
                    type: "string",
                    required: true,
                  },
                  { name: "subtitle", label: "サブタイトル", type: "string" },
                  { name: "catch", label: "キャッチ", type: "string" },
                  { name: "body", label: "本文", type: "rich-text" },
                  {
                    type: "object",
                    name: "link",
                    label: "リンク",
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "タイトル",
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                      },
                      {
                        type: "string",
                        name: "style",
                        label: "スタイル",
                        options: ["primary", "secondary"],
                        required: true,
                      },
                    ],
                    ui: {
                      itemProps(item) {
                        return {
                          label: item.title,
                        };
                      },
                      defaultItem: {
                        style: "primary",
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "news",
        label: "ニュース",
        path: "content/news",
        fields: [
          {
            name: "title",
            label: "タイトル",
            type: "string",
            isTitle: true,
            required: true,
          },
          { name: "author", label: "著者", type: "string" },
          {
            name: "category",
            label: "カテゴリー",
            type: "string",
          },
          {
            name: "date",
            label: "日付",
            type: "datetime",
            required: true,
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          { name: "body", label: "本文", type: "rich-text", required: true },
          { name: "image", label: "画像", type: "image" },
        ],
      },
    ],
  },
});
