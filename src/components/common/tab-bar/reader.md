##############
使用说明
##############
1、需要将该插件引入到对应的项目中
##############
2、在项目中需要挂载TabBar 与 TabBarItem 两个组件
##############
3、在TabBarItem 中有两个具名插槽，icon 表示图标字体，text 表示文字内容
##############
4、在App.Vue中使用
      <TabBar>
        <TabBarItem>
          <slot name="icon"></slot>
          <slot name="text"></slot>
           </TabBarItem>
        </TabBar>
##############
5、在TabBarItem组件上可以设置属性
    path属性：设置路由的路径
    col属性：设置点击态的颜色

