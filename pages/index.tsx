import {getAllPosts} from '../lib/api'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({allPosts}: Props) => {
  return (
    <div>
      {allPosts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: {allPosts},
  }
}
