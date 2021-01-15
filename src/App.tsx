import React from 'react';
import styles from './app.module.css';
import JsValueView from './js-value-view/js-value-view';

function App() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Js Value View</h1>

      <section>
        <header>Number</header>
        <article>
          <JsValueView value={1} />
          <JsValueView value={1.12} />
          <JsValueView value={Number.MAX_SAFE_INTEGER} />
          <JsValueView value={Number.MAX_VALUE} />
          <JsValueView value={Number.MIN_SAFE_INTEGER} />
          <JsValueView value={Number.MIN_VALUE} />
        </article>
      </section>

      <section>
        <header>Boolean</header>
        <article>
          <JsValueView value={true} />
          <JsValueView value={false} />
        </article>
      </section>

      <section>
        <header>Null & Undefined</header>
        <article>
          <JsValueView value={null} />
          <JsValueView value={undefined} />
        </article>
      </section>

      <section>
        <header>String</header>
        <article>
          <JsValueView value={'null'} />
          <JsValueView value={'undefined'} />
          <JsValueView value={'Hello World'} />
        </article>
      </section>

      <section>
        <header>Object</header>
        <article>
          <JsValueView value={{ a: 1, b: '2', c: false, d: null, e: { a: 1 } }} />
        </article>
      </section>
    </div>
  );
}

export default App;
