import fs, { PathLike } from 'fs'
import path from 'path'
import {tags_alias, last_update_time} from '@/data/data'

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  isChoice?: boolean
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    if (key.trim() === 'title') {
      metadata.title = value;
    } else if (key.trim() === 'publishedAt') {
      metadata.publishedAt = value;
    } else if (key.trim() === 'summary') {
      metadata.summary = value;
    } else if (key.trim() === 'image') {
      metadata.image = value;
    } else if (key.trim() === 'isChoice') {
      metadata.isChoice = value === "true";
    }
    // metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function get_headings(fileContent: string) {
  const regXHeader = /\n(#{2,6})\s+(.+)/g;
  const headings = Array.from(fileContent.matchAll(regXHeader)).map(
    (groups) => {
      const flag = groups[1];
      const content = groups[2];
      return {
        level:
          flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
        text: content,
        id: content.split(" ").join("-").toLowerCase(),
      };
    }
  );
  return headings;
}

function getMDXFiles(dir : PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath : PathLike) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir : string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getTags() {
  return tags_alias.map((tag) => {
    return {
      name: tag,
      date: last_update_time,
    }
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function getExplorePosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'explore', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
