import { StructureBuilder } from "sanity/desk"
import { 
  BsPencilSquare, 
  BsPerson, 
  BsGear, 
  BsGrid, 
  BsRocket 
} from "react-icons/bs"

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .icon(BsPencilSquare)
        .title('Post')
        .child(
          S.list()
           .title('Post')
           .items([
              S.listItem()
                .title('Blog')
                .showIcon(false)
                .child(S.documentList().title('All Posts').filter("_type == 'blog'")),
              S.listItem()
                .title('Post Category')
                .showIcon(false)
                .child(S.documentList().title('Categories').filter("_type=='post-category'")),
              S.listItem()
                .title('Comment')
                .showIcon(false)
                .child(S.documentList().title('All Comments').filter("_type=='comment'")),
           ]),
        ),
      S.listItem()
        .title('Project')
        .icon(BsRocket)
        .child(
          S.list()
           .title('Project')
           .items([
              S.listItem()
                .title('Project')
                .showIcon(false)
                .child(S.documentList().title('All Projects').filter("_type == 'project'")),
              S.listItem()
                .title('Project Category')
                .showIcon(false)
                .child(S.documentList().title('Categories').filter("_type=='project-category'")),
           ]),
        ),
      S.listItem()
        .title('Menu')
        .icon(BsGrid)
        .child(
          S.list()
           .title('Menu')
           .items([
              S.listItem()
                .title('Menu List')
                .showIcon(false)
                .child(S.documentList().title('All Menu').filter("_type == 'menuList'")),
              S.listItem()
                .title('Menu Item')
                .showIcon(false)
                .child(S.documentList().title('All Items').filter("_type=='menuItem'")),
           ]),
        ),
        S.listItem()
           .title('Author')
           .icon(BsPerson)
           .schemaType('author')
           .child(S.documentTypeList('author').title('Authors')),
        S.listItem()
           .title('Settings')
           .icon(BsGear)
           .schemaType('settings')
           .child(S.documentTypeList('settings').title('Settings')),
        // Remove list/items from base menu
        ...S.documentTypeListItems().filter( item => ![
          'blog', 
          'post-category',
          'comment',
          'project',
          'project-category',
          'menuList',
          'menuItem',
          'author',
          'settings'
        ].includes(item.getId()||'')),
    ])