import "./css/index.css";
import Header from "./components/Header/Header";
import styles from "./app.module.css";
import RightImage from "./assets/RightBands.png";
import Form from "./components/Form/Form";

function App() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.body_container}>
        <Form />
        <div className={styles.right}>
          <img src={RightImage} />
        </div>
      </section>
    </main>
  );
}

export default App;
