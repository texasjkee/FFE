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
    <rect x="27" y="2" rx="3" ry="3" width="213" height="14" /> 
    <rect x="27" y="31" rx="3" ry="3" width="213" height="14" /> 
    <rect x="27" y="60" rx="3" ry="3" width="213" height="14" />
  </ContentLoader>
)

export default Skeleton;