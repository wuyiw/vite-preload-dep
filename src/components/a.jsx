import { defineComponent } from 'vue'
import style from './common.module.less'

export default defineComponent({
  id: 'a',
  render() {
    return (
      <>
        <section class={style.root}>a</section>
      </>
    )
  },
})
