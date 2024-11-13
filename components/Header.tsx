export default function Header({title, desc}: {title: string, desc: string}) {
    return (
        <header>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta name="keywords" content="小报童, 小报童精选, 小报童排行榜, 小报童专栏, 小报童导航, 小报童导航站, 小报童专栏精选导航站, xiaobaotong" />
            <link rel="icon" href="/favicon.ico" />
        </header>
    )
  }