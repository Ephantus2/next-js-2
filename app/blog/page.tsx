

const Page = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("intentional delay")
    }, 2000)
  })
  return (
    <div>My blog</div>
  )
}

export default Page