export default function Header({title, desc}: {title: string, desc: string}) {
    return (
        <header>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />
        </header>
    )
  }