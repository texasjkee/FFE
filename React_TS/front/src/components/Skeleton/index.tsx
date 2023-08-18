import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={3}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#ed9b0c"
    foregroundColor="#ecebeb"
  >
    <rect x="35" y="13" rx="3" ry="3" width="194" height="14" /> 
    <rect x="35" y="40" rx="3" ry="3" width="121" height="14" /> 
    <rect x="35" y="68" rx="3" ry="3" width="103" height="14" />
  </ContentLoader>
)

export default Skeleton;