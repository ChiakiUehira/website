import styled from 'styled-components'
import Head from 'next/head'

const Layout =  (props) => {
  return (
    <>
      <Head>
        <title>Chiaki Uehira</title>
        <meta name="description" content=""/>
        <link rel="stylesheet" href="/css/base.css"/>
      </Head>
      <Container>
        { props.children }
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 64px;
  margin: 0 auto;
  max-width: 1260px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 32px;
  }
`

export default Layout
