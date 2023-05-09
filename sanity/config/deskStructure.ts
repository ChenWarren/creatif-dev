import { StructureBuilder } from "sanity/desk"

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Post')
        .child(
          S.list()
           .title('Post')
           .items([
              S.listItem()
                .title('Blog')
                .child(S.documentList().title('All Posts').filter("_type == 'blog'")),
              S.listItem()
                .title('Post Category')
                .child(S.documentList().title('Categories').filter("_type=='post-category'")),
              S.listItem()
                .title('Comment')
                .child(S.documentList().title('All Comments').filter("_type=='comment'")),
           ]),
        ),
      S.listItem()
        .title('Project')
        .child(
          S.list()
           .title('Project')
           .items([
              S.listItem()
                .title('Project')
                .child(S.documentList().title('All Projects').filter("_type == 'project'")),
              S.listItem()
                .title('Project Category')
                .child(S.documentList().title('Categories').filter("_type=='project-category'")),
           ]),
        ),
      S.listItem()
        .title('Menu')
        .child(
          S.list()
           .title('Menu')
           .items([
              S.listItem()
                .title('Menu List')
                .child(S.documentList().title('All Menu').filter("_type == 'menuList'")),
              S.listItem()
                .title('Menu Item')
                .child(S.documentList().title('All Items').filter("_type=='menuItem'")),
           ]),
        ),
        // Remove list/items from base menu
        ...S.documentTypeListItems().filter( item => ![
          'blog', 
          'post-category',
          'comment',
          'project',
          'project-category',
          'menuList',
          'menuItem'
        ].includes(item.getId()||'')),
    ])