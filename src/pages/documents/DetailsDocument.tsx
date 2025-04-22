import DefaultLayoutDocumentDetails from "../../components/common/layouts/defaultLayoutDocumentDetails/DefaultLayoutDocumentDetails"
import Sidebar from "../../components/common/layouts/sidebar/Sidebar"

const DetailsDocument = () => {
  return (
    <>
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '250px' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <DefaultLayoutDocumentDetails />
      </div>
    </div>
    </>
  )
}

export default DetailsDocument