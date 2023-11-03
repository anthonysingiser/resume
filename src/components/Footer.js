import Link from 'next/link'

const Title = (props) => {
  return (
    <footer className="text-center text-xs">
      <Link href="https://github.com/anthonysingiser/resume" className="text-gray-400 dark:text-gray-700">
          <small>source code: github.com/anthonysingiser/resume</small>
      </Link>
    </footer>
  )
}

export default Title