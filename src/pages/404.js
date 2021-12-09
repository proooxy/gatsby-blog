import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <p>Opps... Não tem nada aqui</p>
  </Layout>
)

export default NotFoundPage
