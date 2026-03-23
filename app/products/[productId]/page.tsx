
const Page = async ({params,}: {
    params: Promise<{productId: string}>
}) => {
    const productId = (await params).productId
  return (
    <div>details about product {productId}</div>
  )
}

export default Page