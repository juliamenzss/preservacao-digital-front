import Header from "../../header/Header"
import ListDocument from "../../ui/listDocument/ListDocument"
import Sidebar from "../sidebar/Sidebar"
import styles from "./DefaultLayoutHome.module.scss"

const DefaultLayoutHome = () => {
  return (
    <>
    <section className={styles.containerContent}>
    <div className={styles.sidebar}>
    <Sidebar />
    </div>
    <div className={styles.mainContent}>
    <Header title="Documentos"/>
    <main className={styles.pageContent}>
    <ListDocument />
    </main>
    </div>
    </section>

    </>
  )
}

export default DefaultLayoutHome